import { useCallback, useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent as ReactPointerEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  BarChart2,
  Crosshair,
  LineChart,
  Smartphone,
  Target,
  Trophy,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type CarouselFeature = {
  /** Stable key — also used as the animation identity. */
  id: string;
  /** Short menu label (rendered uppercase). */
  label: string;
  /** Any `lucide-react` icon component. */
  icon: LucideIcon;
  /** Imported asset or absolute URL. Wide (16/9) images fit the frame best. */
  image: string;
  /** One-line caption shown over the active card. */
  description: string;
};

/**
 * Placeholder set so `<FeatureCarousel />` renders standalone with no props.
 * Real pages should pass their own `features`.
 */
const DEFAULT_FEATURES: CarouselFeature[] = [
  {
    id: "live",
    label: "Live Capture",
    icon: Video,
    image:
      "https://cdn.21st.dev/assets/mirror/c4/c48702475dc62d18bff61e34fb6b240e41d0e33808066607c819abc51c708de5.jpg",
    description: "Score and record every delivery as it happens.",
  },
  {
    id: "analytics",
    label: "Ball by Ball",
    icon: BarChart2,
    image:
      "https://cdn.21st.dev/assets/mirror/c7/c7f3916c2cdc545b8254cc8ce6ae0e4de3f44ad0428502f9be8e0fe1134ecb81.jpg",
    description: "Delivery-level datasets built from every match.",
  },
  {
    id: "visuals",
    label: "Visualizations",
    icon: LineChart,
    image:
      "https://images.unsplash.com/photo-1551288049-bbda38a10ad5?q=80&w=1200",
    description: "Wagon wheels, pitch maps and scoring zones.",
  },
  {
    id: "zones",
    label: "Scoring Zones",
    icon: Target,
    image:
      "https://cdn.21st.dev/assets/mirror/e0/e02da34643b79ef162a713de4eb8dd88f8249f5bcffe0409a6d447c9918d50aa.jpg",
    description: "See exactly where the runs come from.",
  },
  {
    id: "lines",
    label: "Line & Length",
    icon: Crosshair,
    image:
      "https://cdn.21st.dev/assets/mirror/fa/fa833daf43d62353c6d39bbc0ca40a9396e461c81c61b8195df01eb983f0bc95.jpg",
    description: "Map every bowler's lines, lengths and variations.",
  },
  {
    id: "players",
    label: "Player Profiles",
    icon: Users,
    image:
      "https://cdn.21st.dev/assets/mirror/24/2490eb35d201db5bb6758f8e5508f2301462c803f72cc38e34097d74f6d30578.jpg",
    description: "Career form tracked across every innings.",
  },
  {
    id: "form",
    label: "Form Trends",
    icon: Activity,
    image:
      "https://cdn.21st.dev/assets/mirror/ce/ce089361785f3d1b45326b5a5e6478fba2c133d475401377354ef55f2e153289.jpg",
    description: "Spot momentum shifts before they cost you.",
  },
  {
    id: "teams",
    label: "Team Insights",
    icon: Trophy,
    image:
      "https://cdn.21st.dev/assets/mirror/8a/8acb03b53b306de4389cc3fd7b4317a9941714060e94a8a19f19853faefc033e.jpg",
    description: "Squad-wide reporting for selectors and coaches.",
  },
  {
    id: "mobile",
    label: "On The Boundary",
    icon: Smartphone,
    image:
      "https://cdn.21st.dev/assets/mirror/f7/f7b431dacfc2e3322286eac990b187bd031079e0cd3330d88c6293027a71ed04.jpg",
    description: "Works from the pavilion or the practice nets.",
  },
];

const DEFAULT_AUTO_PLAY_INTERVAL = 3000;
/** Vertical pitch between labels in the desktop rail. */
const ITEM_HEIGHT = 56;
/** How far a horizontal drag must travel (px) to count as a swipe. */
const SWIPE_THRESHOLD = 45;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export interface FeatureCarouselProps {
  /** Slides to render. Falls back to a built-in placeholder set. */
  features?: CarouselFeature[];
  /** Accent colour of the menu panel — any CSS colour. */
  accentColor?: string;
  /** Milliseconds between auto-advances. `0` disables autoplay. */
  autoPlayInterval?: number;
  /**
   * Tailwind aspect-ratio class for the image frame. Defaults to `aspect-video`
   * (16/9), which suits wide screenshots; pass a portrait ratio class instead
   * when the images are taller than they are wide.
   */
  imageAspectClassName?: string;
  className?: string;
}

export function FeatureCarousel({
  features = DEFAULT_FEATURES,
  accentColor = "#00B786",
  autoPlayInterval = DEFAULT_AUTO_PLAY_INTERVAL,
  imageAspectClassName = "aspect-video",
  className,
}: FeatureCarouselProps) {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  /**
   * Set once the viewer takes control (taps/clicks a label, or swipes) and
   * never cleared. Touch devices fire synthetic hover events, so relying on
   * hover alone leaves autoplay stuck half-paused after a tap; and someone who
   * picked a slide does not want it moving on 3 seconds later. Also satisfies
   * WCAG 2.2.2 — there is a way to stop the moving content.
   */
  const [autoplayStopped, setAutoplayStopped] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const stripRef = useRef<HTMLDivElement>(null);
  const stripItemRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const swipeStartX = useRef<number | null>(null);

  const count = features.length;
  const currentIndex = count > 0 ? ((step % count) + count) % count : 0;

  const next = useCallback(() => setStep((s) => s + 1), []);
  const previous = useCallback(() => setStep((s) => s - 1), []);

  /** Jump to a slide by the shortest route, forwards or backwards. */
  const goToIndex = useCallback(
    (index: number) => {
      setAutoplayStopped(true);
      setStep((s) => {
        const from = ((s % count) + count) % count;
        let diff = index - from;
        if (diff > count / 2) diff -= count;
        if (diff < -count / 2) diff += count;
        return s + diff;
      });
    },
    [count],
  );

  useEffect(() => {
    if (
      isPaused ||
      autoplayStopped ||
      autoPlayInterval <= 0 ||
      count < 2 ||
      shouldReduceMotion
    ) {
      return;
    }
    const interval = setInterval(next, autoPlayInterval);
    return () => clearInterval(interval);
  }, [
    next,
    isPaused,
    autoplayStopped,
    autoPlayInterval,
    count,
    shouldReduceMotion,
  ]);

  /** Keep the active label centred in the mobile strip as slides advance. */
  useEffect(() => {
    const scroller = stripRef.current;
    const item = stripItemRefs.current[currentIndex];
    if (!scroller || !item) return;
    scroller.scrollTo({
      left: item.offsetLeft - scroller.clientWidth / 2 + item.offsetWidth / 2,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  }, [currentIndex, shouldReduceMotion]);

  const handleSwipeStart = (event: ReactPointerEvent<HTMLDivElement>) => {
    swipeStartX.current = event.clientX;
    setIsPaused(true);
  };

  const handleSwipeEnd = (event: ReactPointerEvent<HTMLDivElement>) => {
    const startX = swipeStartX.current;
    swipeStartX.current = null;
    setIsPaused(false);
    if (startX === null) return;
    const deltaX = event.clientX - startX;
    if (Math.abs(deltaX) < SWIPE_THRESHOLD) return;
    setAutoplayStopped(true);
    if (deltaX < 0) next();
    else previous();
  };

  const handleSwipeCancel = () => {
    swipeStartX.current = null;
    setIsPaused(false);
  };

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;

    let normalizedDiff = diff;
    if (diff > count / 2) normalizedDiff -= count;
    if (diff < -count / 2) normalizedDiff += count;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  const spring = shouldReduceMotion
    ? ({ duration: 0 } as const)
    : ({ type: "spring", stiffness: 90, damping: 22, mass: 1 } as const);

  const cardSpring = shouldReduceMotion
    ? ({ duration: 0 } as const)
    : ({ type: "spring", stiffness: 260, damping: 25, mass: 0.8 } as const);

  /** Shared icon + label markup for both the mobile strip and desktop rail. */
  const renderLabel = (
    feature: CarouselFeature,
    isActive: boolean,
    iconSize: number,
  ) => {
    const Icon = feature.icon;
    return (
      <>
        <span
          className={cn(
            "flex items-center justify-center transition-colors duration-500",
            isActive ? "text-white" : "text-white/35 group-hover:text-white/70",
          )}
        >
          <Icon
            size={isActive ? iconSize + 2 : iconSize}
            strokeWidth={isActive ? 2.25 : 2}
            aria-hidden="true"
          />
        </span>
        <span
          className={cn(
            "tracking-tight whitespace-nowrap uppercase transition-all duration-500",
            isActive
              ? "text-white font-semibold text-sm md:text-lg"
              : "text-white/45 font-normal text-[13px] md:text-[15px] group-hover:text-white/80",
          )}
        >
          {feature.label}
        </span>
      </>
    );
  };

  const pauseHandlers = {
    onMouseEnter: () => setIsPaused(true),
    onMouseLeave: () => setIsPaused(false),
    onFocus: () => setIsPaused(true),
    onBlur: () => setIsPaused(false),
  };

  const itemClassName =
    "group relative flex items-center gap-3 md:gap-4 text-left bg-transparent border-0 p-0 outline-none cursor-pointer focus-visible:underline focus-visible:decoration-2 focus-visible:underline-offset-[6px]";

  if (count === 0) return null;

  return (
    <div
      className={cn("w-full max-w-7xl mx-auto md:p-8", className)}
      style={{ "--fc-accent": accentColor } as CSSProperties}
    >
      <div className="relative overflow-hidden rounded-[2rem] lg:rounded-[3rem] flex flex-col lg:flex-row lg:min-h-[420px] border border-border/40">
        {/* Mobile / tablet: horizontal menu strip that scrolls the active label
            into view. Replaces the tall vertical rail, which wasted over half
            the block's height on a phone. */}
        <div className="lg:hidden relative overflow-hidden bg-[var(--fc-accent)]">
          <div
            className="pointer-events-none absolute inset-y-0 left-0 w-8 z-20"
            style={{
              backgroundImage:
                "linear-gradient(to right, var(--fc-accent), transparent)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-y-0 right-0 w-8 z-20"
            style={{
              backgroundImage:
                "linear-gradient(to left, var(--fc-accent), transparent)",
            }}
          />
          <div
            ref={stripRef}
            role="group"
            aria-label="Feature navigation"
            className="relative flex items-center gap-7 overflow-x-auto px-6 py-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {features.map((feature, index) => {
              const isActive = index === currentIndex;
              return (
                <button
                  key={feature.id}
                  ref={(el) => {
                    stripItemRefs.current[index] = el;
                  }}
                  type="button"
                  aria-current={isActive || undefined}
                  onClick={() => goToIndex(index)}
                  {...pauseHandlers}
                  className={cn(itemClassName, "shrink-0")}
                >
                  {renderLabel(feature, isActive, 16)}
                </button>
              );
            })}
          </div>
        </div>

        {/* Desktop: vertical menu rail */}
        <div className="hidden lg:flex lg:w-[34%] relative z-30 flex-col items-start justify-center overflow-hidden pl-14 xl:pl-16 bg-[var(--fc-accent)]">
          <div
            className="absolute inset-x-0 top-0 h-16 z-40"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, var(--fc-accent), color-mix(in srgb, var(--fc-accent) 80%, transparent), transparent)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-16 z-40"
            style={{
              backgroundImage:
                "linear-gradient(to top, var(--fc-accent), color-mix(in srgb, var(--fc-accent) 80%, transparent), transparent)",
            }}
          />
          <div className="relative w-full h-full flex items-center justify-start z-20">
            {features.map((feature, index) => {
              const isActive = index === currentIndex;
              const wrappedDistance = wrap(
                -(count / 2),
                count / 2,
                index - currentIndex,
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    // Clamped: without it, lists of 9+ compute a negative opacity.
                    opacity: Math.max(
                      0,
                      1 - Math.abs(wrappedDistance) * 0.25,
                    ),
                  }}
                  transition={spring}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    type="button"
                    onClick={() => goToIndex(index)}
                    {...pauseHandlers}
                    aria-current={isActive || undefined}
                    className={itemClassName}
                  >
                    {renderLabel(feature, isActive, 18)}
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Card stack — swipeable */}
        <div className="flex-1 relative bg-secondary/30 flex items-center justify-center py-8 md:py-14 lg:py-10 px-5 md:px-10 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-border/20">
          <div
            onPointerDown={handleSwipeStart}
            onPointerUp={handleSwipeEnd}
            onPointerCancel={handleSwipeCancel}
            className={cn(
              "relative w-full max-w-[760px] flex items-center justify-center",
              "touch-pan-y select-none cursor-grab active:cursor-grabbing",
              imageAspectClassName,
            )}
          >
            {features.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                  animate={{
                    x: isActive ? 0 : isPrev ? -70 : isNext ? 70 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -2 : isNext ? 2 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                  }}
                  transition={cardSpring}
                  aria-hidden={!isActive}
                  className="absolute inset-0 rounded-[1.25rem] md:rounded-[1.75rem] overflow-hidden border-4 md:border-[6px] border-background bg-background origin-center"
                >
                  <img
                    src={feature.image}
                    alt={feature.label}
                    draggable={false}
                    loading={index === 0 ? "eager" : "lazy"}
                    decoding="async"
                    className={cn(
                      "w-full h-full object-cover transition-all duration-700",
                      isActive
                        ? "grayscale-0 blur-0"
                        : "grayscale blur-[2px] brightness-75",
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-5 md:p-8 pt-16 md:pt-28 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        <div className="bg-background text-foreground px-3 py-1 md:px-4 md:py-1.5 rounded-full text-[10px] md:text-[11px] font-normal uppercase tracking-[0.12em] md:tracking-[0.2em] w-fit shadow-lg mb-2 md:mb-3 border border-border/50">
                          {index + 1} / {count} • {feature.label}
                        </div>
                        <p className="text-white font-normal text-base md:text-2xl leading-tight drop-shadow-md tracking-tight">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div
                    className={cn(
                      "absolute top-4 left-5 md:top-7 md:left-8 flex items-center gap-3 transition-opacity duration-300",
                      isActive ? "opacity-100" : "opacity-0",
                    )}
                  >
                    <div className="w-2 h-2 rounded-full bg-white shadow-[0_0_10px_white]" />
                    <span className="text-white/80 text-[10px] font-normal uppercase tracking-[0.3em] font-mono">
                      Live Session
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;

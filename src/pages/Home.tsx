import { useState } from "react";
import { ArrowUpRight, Plus, Minus, Send, Video, Database, BarChart2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import heroBg from "../assets/hero-img.jpg";
import heroBgMobile from "../assets/hero-img.jpg";
import logoWhite from "../assets/logo-white.webp";
import cricketerImg from "../assets/cricketer.webp";
import groundImg from "../assets/ground.webp";
import img1 from "../assets/1.webp";
import img2 from "../assets/2.webp";
import img3 from "../assets/3.webp";
import img4 from "../assets/4.webp";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

const PLATFORM_URL = import.meta.env.VITE_PLATFORM_URL as string;

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const faqs = [
  {
    question: "What is CricAnalyst?",
    answer:
      "CricAnalyst is a ball-by-ball cricket recording and analysis platform designed to capture match data in real time and transform it into meaningful performance insights. It combines structured match recording, video, statistics, and visualisations to help teams, coaches, analysts, and players better understand the game. This creates a structured digital record that goes beyond traditional scorecards, helping analysts understand and evaluate every aspect of the game.",
  },
  {
    question: "How does match capture work?",
    answer:
      "Our match capture tool lets you record live video and tag events ball by ball, automatically syncing match data with the footage for immediate analysis.",
  },
  {
    question: "What kind of insights can I get?",
    answer:
      "You can get deep insights including wagon wheels, pitch maps, player performance metrics, and advanced visualizations to uncover hidden patterns.",
  },
  {
    question: "Can I download match data and videos?",
    answer:
      "Yes, you can easily export all your match data in standard formats and download video clips or full matches for offline review.",
  },
];

const faqStructuredData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <main className="w-full overflow-x-hidden">
      <Seo
        title="CricAnalyst - Cricket Ball-by-Ball Analysis & Match Capture Platform"
        description="Turn live match footage into powerful insights with real-time ball-by-ball recording, video analysis, wagon wheels, pitch maps, and dynamic visualisations."
        canonicalUrl="https://cricanalyst.io/"
        structuredData={faqStructuredData}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <picture className="w-full h-full">
            <source
              media="(max-width: 768px)"
              srcSet={heroBgMobile}
              type="image/webp"
            />
            <img
              src={heroBg}
              alt="Cricket match live video capture and analysis"
              width={1920}
              height={1067}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center"
            />
          </picture>
          {/* Dark gradients for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-transparent to-[#0a0a0a]/30" />
        </motion.div>

        {/* Blue gradient glow — bottom left */}
        <div
          className="absolute bottom-0 left-0 right-0 h-72 z-[1] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 90% at 5% 100%, rgba(0,60,200,0.45) 0%, rgba(0,80,180,0.18) 45%, transparent 70%)",
          }}
        />

        {/* Main Content Wrapper */}
        <div className="relative z-10 flex flex-col min-h-screen w-full max-w-[1400px] mx-auto px-6 py-8 md:px-12 md:py-10">
          {/* Header / Navbar */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-between"
          >
            <a
              href="/"
              aria-label="CricAnalyst Home"
              className="flex-shrink-0 cursor-pointer"
            >
              <img
                src={logoWhite}
                alt="CricAnalyst Logo"
                width={160}
                height={36}
                fetchPriority="high"
                decoding="async"
                className="h-8 md:h-10 lg:h-11 object-contain w-auto"
              />
            </a>

            <nav
              aria-label="Primary Navigation"
              className="hidden lg:flex items-center gap-10 bg-white/15 backdrop-blur-md border border-white/10 rounded-full px-10 py-3.5"
            >
              {["About Us", "Features", "FAQs", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-200 hover:text-white text-sm font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href={PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00B786] hover:bg-[#009e74] transition-colors text-white font-semibold rounded-full px-5 sm:px-7 py-2.5 sm:py-3 text-xs sm:text-sm whitespace-nowrap"
              >
                Go to Platform
              </a>
              <a
                href={PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Launch CricAnalyst Platform in new tab"
                className="bg-[#00B786] hover:bg-[#009e74] transition-colors text-white rounded-full w-[38px] sm:w-[46px] h-[38px] sm:h-[46px] flex items-center justify-center flex-shrink-0"
              >
                <ArrowUpRight className="w-4 sm:w-5 h-4 sm:h-5 stroke-[2.5]" />
              </a>
            </div>
          </motion.header>

          {/* Hero Content — vertically centred in remaining space */}
          <div className="flex-1 flex items-end lg:items-center pb-16 lg:pb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col w-full gap-4 lg:gap-5 lg:max-w-[50vw]"
          >
            {/* Platform tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-300 text-xs tracking-[0.22em] uppercase font-medium"
            >
              Cricket Analytics &amp; Performance Intelligence Platform
            </motion.p>

            {/* Main Headline */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-0">
              <h1 className="text-white font-extrabold leading-[1.05] tracking-tight uppercase text-[clamp(1.4rem,3vw,2.6rem)]">
                Cricket Match Capturing
              </h1>
              <span className="font-extrabold leading-[1] tracking-tight uppercase text-[clamp(2.5rem,6.5vw,5.5rem)]" style={{ color: "#00B786" }}>
                Software
              </span>
            </motion.div>

            {/* Sub-tagline */}
            <motion.p
              variants={fadeInUp}
              className="text-gray-200 text-sm sm:text-base md:text-lg font-medium leading-relaxed"
            >
              From Ball-by-Ball Capture to Actionable Match Insights
            </motion.p>

            {/* Pipeline Icons */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center gap-3 sm:gap-5 mt-1"
            >
              {/* Capture */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-11 h-11 sm:w-14 sm:h-14 border-2 border-[#00B786]/70 rounded-full flex items-center justify-center">
                  <Video className="w-4 h-4 sm:w-6 sm:h-6 text-[#00B786]" />
                </div>
                <span className="text-white text-[9px] sm:text-[11px] font-bold tracking-[0.18em] uppercase">
                  Capture
                </span>
              </div>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/50 mb-5" />
              {/* Analyse */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-11 h-11 sm:w-14 sm:h-14 border-2 border-[#00B786]/70 rounded-full flex items-center justify-center">
                  <Database className="w-4 h-4 sm:w-6 sm:h-6 text-[#00B786]" />
                </div>
                <span className="text-white text-[9px] sm:text-[11px] font-bold tracking-[0.18em] uppercase">
                  Analyse
                </span>
              </div>
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-white/50 mb-5" />
              {/* Insights */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-11 h-11 sm:w-14 sm:h-14 border-2 border-[#00B786]/70 rounded-full flex items-center justify-center">
                  <BarChart2 className="w-4 h-4 sm:w-6 sm:h-6 text-[#00B786]" />
                </div>
                <span className="text-white text-[9px] sm:text-[11px] font-bold tracking-[0.18em] uppercase">
                  Insights
                </span>
              </div>
            </motion.div>
          </motion.div>
          </div>
        </div>

        {/* Bottom brand bar */}
        <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/25 backdrop-blur-sm">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-3 sm:py-4 flex items-center gap-3">
            <span className="text-gray-400 text-[9px] sm:text-[11px] tracking-[0.3em] uppercase font-medium">
              CricAnalyst
            </span>
            <span className="text-gray-600 text-xs">|</span>
            <span className="text-gray-400 text-[9px] sm:text-[11px] tracking-[0.3em] uppercase font-medium">
              Sports Data Intelligence
            </span>
          </div>
        </div>
      </section>

      {/* CricAnalyst Overview Section (Fixed duplicate ID to 'overview') */}
      <motion.section
        id="overview"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="w-full bg-[#F6F7F9] py-24 lg:py-36 px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 bg-white rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-16">
          {/* Left column: Badge */}
          <motion.div variants={fadeInUp} className="col-span-1 lg:col-span-3">
            <div className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 rounded-full text-gray-800 text-sm font-medium tracking-wide">
              CricAnalyst
            </div>
          </motion.div>

          {/* Right column: Content */}
          <motion.div
            variants={fadeInUp}
            className="col-span-1 lg:col-span-9 flex flex-col gap-10 max-w-5xl"
          >
            <h2 className="text-[2rem] md:text-5xl lg:text-[2.5rem] font-bold text-black leading-[1.15] tracking-tight">
              Cricket is more than runs and wickets. It's a game of data,
              decisions, and precision.
            </h2>
            <div className="flex flex-col gap-4 text-gray-500 text-lg md:text-xl lg:text-[1.35rem] leading-[1.6]">
              <p>
                CricAnalyst is a cricket data analysis platform designed to
                capture live matches and transform ball-by-ball data into
                actionable performance insights. By integrating real-time match
                recording, video analysis, advanced statistics, and dynamic
                visualisations, it enables comprehensive match analysis and
                supports smarter, data-driven decisions beyond the traditional
                scorecard.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Us Section */}
      <motion.section
        id="about-us"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="w-full bg-[#F6F7F9] pb-24 lg:pb-36 px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-[1400px] mx-auto px-8 md:px-12 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          {/* Left column: Badge */}
          <motion.div variants={fadeInUp} className="col-span-1 lg:col-span-3">
            <div className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 rounded-full text-gray-800 text-sm font-medium tracking-wide">
              About Us
            </div>
          </motion.div>

          {/* Right column: Content */}
          <motion.div
            variants={fadeInUp}
            className="col-span-1 lg:col-span-9 flex flex-col gap-10 max-w-5xl"
          >
            <h2 className="text-[2rem] md:text-5xl lg:text-[2.5rem] font-bold text-black leading-[1.15] tracking-tight">
              Built through collaboration. Driven by a shared passion for
              cricket and technology.
            </h2>
            <div className="flex flex-col gap-4 text-gray-500 text-lg md:text-xl lg:text-[1.35rem] leading-[1.6]">
              <p>
                CricAnalyst is a collaborative initiative by Green Stream
                Systems & Solutions and TryC Analytics, bringing together
                technology and cricket analysis expertise to create a modern
                platform for the game.
              </p>
              <p>
                Our shared vision is to create practical, modern solutions that
                contribute to the digital transformation of cricket and support
                the evolving needs of the game.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={staggerContainer}
        className="w-full bg-[#F6F7F9] pb-24 lg:pb-36 px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-[1400px] mx-auto bg-white rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-16">
          {/* Header Area */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-8 mb-12 lg:mb-20"
          >
            {/* Badge */}
            <div>
              <div className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 rounded-full text-gray-800 text-sm font-medium tracking-wide">
                Features
              </div>
            </div>

            {/* Title & Description */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 lg:gap-20">
              <h2 className="text-[2rem] md:text-5xl lg:text-[2.5rem] font-bold text-black leading-[1.15] tracking-tight max-w-2xl">
                Your Complete Cricket Analysis Platform
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-[1.6] lg:text-right max-w-xl">
                From live match capture to deep performance insights,
                CricAnalyst provides everything you need to record, analyze, and
                understand the game at every level.
              </p>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {[
              {
                title: "Live Match Capture",
                desc: "Capture every delivery in real time with live scoring, integrated video recording, and ball-by-ball synchronisation for accurate match records.",
                image: img1,
                strongFade: true,
              },
              {
                title: "Ball by Ball Analytics",
                desc: "Record runs, extras, dismissals, shot types, and bowling variations to build detailed delivery-level datasets for in-depth performance analysis.",
                image: img2,
              },
              {
                title: "Advanced Visualizations",
                desc: "Explore wagon wheels, pitch maps, scoring zones, and interactive performance charts to uncover batting and bowling patterns.",
                image: img4,
                strongFade: true,
              },
              {
                title: "Video & Data Insights",
                desc: "Link match footage to individual deliveries, making it easy to review specific balls, analyse key moments, and validate performance data.",
                image: img3,
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="relative group overflow-hidden rounded-2xl md:rounded-[1.5rem] aspect-video bg-[#d9d9d9]"
              >
                {card.image && (
                  <img
                    src={card.image}
                    alt={card.title}
                    width={640}
                    height={360}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                )}
                <div
                  className={`absolute inset-0 bg-gradient-to-b z-10 ${card.strongFade ? "from-black/10 via-black/70 to-black" : "from-transparent via-black/20 to-black/90"}`}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-20 flex flex-col gap-3">
                  <h3 className="text-white text-xl md:text-2xl font-bold">
                    {card.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* FAQs Section */}
      <motion.section
        id="faqs"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="w-full bg-[#F6F7F9] pb-24 lg:pb-36 px-4 md:px-8 lg:px-12"
      >
        <div className="max-w-[1400px] mx-auto bg-white rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 lg:p-16 xl:p-20">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            {/* Left Column */}
            <motion.div
              variants={fadeInUp}
              className="w-full lg:w-[40%] flex flex-col gap-6"
            >
              <div>
                <div className="inline-flex items-center justify-center px-6 py-2 border border-gray-300 rounded-full text-gray-800 text-sm font-medium tracking-wide">
                  FAQs
                </div>
              </div>
              <h2 className="text-[2rem] md:text-5xl lg:text-[2.5rem] font-bold text-black leading-[1.15] tracking-tight">
                Got Questions?
                <br />
                We've Got Answers
              </h2>
              <p className="text-gray-500 text-lg md:text-xl leading-[1.6]">
                Have questions about match analysis, video capture, or platform
                features? We've got answers.
              </p>
            </motion.div>

            {/* Right Column: Accordion */}
            <motion.div
              variants={fadeInUp}
              className="w-full lg:w-[60%] flex flex-col"
            >
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  role="button"
                  tabIndex={0}
                  aria-expanded={openFaq === idx}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenFaq(openFaq === idx ? null : idx);
                    }
                  }}
                  className={`flex flex-col py-6 md:py-8 border-gray-200 cursor-pointer transition-all ${idx !== 0 ? "border-t" : ""}`}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="flex items-center justify-between gap-4">
                    <h3 className="text-xl md:text-[1.35rem] lg:text-2xl font-medium text-black">
                      {faq.question}
                    </h3>
                    <div className="flex-shrink-0 text-black">
                      {openFaq === idx ? (
                        <Minus className="w-6 h-6 stroke-[1.5]" />
                      ) : (
                        <Plus className="w-6 h-6 stroke-[1.5]" />
                      )}
                    </div>
                  </div>

                  <div
                    className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                      openFaq === idx
                        ? "grid-rows-[1fr] opacity-100 mt-4 md:mt-6"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-gray-500 text-base md:text-lg leading-relaxed pr-8">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
        className="w-full bg-[#F6F7F9] pt-24 pb-12 lg:pt-32 lg:pb-20 px-4 md:px-8 lg:px-12"
      >
        <div className="relative max-w-[1400px] mx-auto">
          {/* Background Container (Hidden Overflow) */}
          <div className="absolute inset-0 rounded-[2rem] lg:rounded-[3rem] overflow-hidden bg-gray-900">
            <img
              src={groundImg}
              alt="Cricket Stadium Ground"
              width={1400}
              height={478}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent" />
          </div>

          {/* Content (Visible Overflow for Players) */}
          <div className="relative z-10 flex flex-col md:flex-row items-center min-h-[400px] lg:min-h-[500px] p-8 md:p-12 lg:p-20">
            {/* Left: Text & Input */}
            <motion.div
              variants={fadeInUp}
              className="w-full md:w-3/5 lg:w-1/2 flex flex-col gap-6 lg:gap-8 relative z-20"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg">
                Turn Every Match
                <br />
                Into Insight
              </h2>
              <p className="text-gray-200 text-base sm:text-lg md:text-xl leading-[1.6] max-w-lg drop-shadow">
                Start capturing, analyzing, and understanding cricket like never
                before with real-time data, video insights, and powerful
                analytics tools.
              </p>

              <form
                onSubmit={(e) => e.preventDefault()}
                className="mt-4 relative max-w-md w-full"
              >
                <input
                  type="email"
                  id="cta-email"
                  name="email"
                  autoComplete="email"
                  aria-label="Enter your email to get started with CricAnalyst"
                  placeholder="Enter your email to get started..."
                  className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-gray-300 rounded-full py-3.5 sm:py-4 pl-5 sm:pl-6 pr-14 sm:pr-16 outline-none focus:bg-white/30 transition-all text-sm sm:text-base"
                />
                <button
                  type="submit"
                  aria-label="Submit email to get started"
                  className="absolute right-2 top-2 bottom-2 w-10 md:w-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                >
                  <Send className="w-4 sm:w-5 h-4 sm:h-5 text-white ml-[-2px]" />
                </button>
              </form>
            </motion.div>

            {/* Right: Players Image */}
            <motion.div
              variants={fadeInUp}
              className="absolute bottom-0 right-0 w-[90%] md:w-[65%] lg:w-[60%] xl:w-[55%] h-[120%] lg:h-[135%] z-10 pointer-events-none"
            >
              <img
                src={cricketerImg}
                alt="Professional Cricket Players"
                width={604}
                height={556}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain object-bottom lg:object-right-bottom drop-shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}

export default Home;

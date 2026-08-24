import { useState } from "react";
import {
  ArrowUpRight,
  // ArrowLeft,
  // ArrowRight,
  // Quote,
  Plus,
  Minus,
  Send,
} from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import heroBg from "../assets/hero image.png";
import logo from "../assets/logo.png";
import cricketerImg from "../assets/cricketer.png";
import groundImg from "../assets/ground.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/4.png";
import Footer from "../components/Footer";

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
      "CricAnalyst is a ball-by-ball cricket recording and analysis platform designed to capture match data in real time and transform it into meaningful performance insights. It combines structured match recording, video, statistics, and visualisations to help teams, coaches, analysts, and players better understand the game.This creates a structured digital record that goes beyond traditional scorecards, helping analysts understand and evaluate every aspect of the game.",
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

function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden">
        {/* Background Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src={heroBg}
            alt="Cricket players high-fiving"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradients for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-[#0a0a0a]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/70 via-transparent to-[#0a0a0a]/30" />
        </motion.div>

        {/* Main Content Wrapper */}
        <div className="relative z-10 flex flex-col justify-between min-h-screen w-full max-w-[1400px] mx-auto px-6 py-8 md:px-12 md:py-10">
          {/* Header / Navbar */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-between"
          >
            <div className="flex-shrink-0 cursor-pointer">
              <img
                src={logo}
                alt="CricAnalyst Logo"
                className="h-20 md:h-28 lg:h-32 object-contain w-auto"
              />
            </div>

            <nav className="hidden lg:flex items-center gap-10 bg-white/15 backdrop-blur-md border border-white/10 rounded-full px-10 py-3.5">
              {/* {["About Us", "Features", "Testimonials", "FAQs", "Contact"].map( */}
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
                className="bg-[#00B786] hover:bg-[#009e74] transition-colors text-white font-semibold rounded-full px-7 py-3 text-sm"
              >
                Go to Platform
              </a>
              <a
                href={PLATFORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00B786] hover:bg-[#009e74] transition-colors text-white rounded-full w-[46px] h-[46px] flex items-center justify-center"
              >
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </a>
            </div>
          </motion.header>

          {/* Hero Bottom Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col lg:flex-row items-end justify-between w-full mb-4 lg:mb-8 gap-12 lg:gap-10 pt-20 lg:pt-0"
          >
            {/* Left: Large Headline */}
            <motion.div variants={fadeInUp} className="w-full">
              <h1 className="text-white text-[3.5rem] md:text-7xl lg:text-[7rem] font-bold leading-[1.05] tracking-tight">
                See the Game <br />
                Beyond the <br />
                Scoreboard
              </h1>
            </motion.div>

            {/* Right: Description & Widget */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-start lg:items-end gap-10 lg:gap-14 lg:max-w-[400px]"
            >
              <p className="text-gray-300 text-lg md:text-xl lg:text-right leading-relaxed font-medium">
                Turn live match footage into powerful insights with real-time
                ball-by-ball recording, video sniffing, advanced performance
                tracking, and dynamic visualisation for modern cricket.
              </p>

              {/* Member Widget */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center p-2 pr-8 self-start lg:self-end">
                {/* Avatars */}
                <div className="flex -space-x-3 mr-4">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-12 h-12 rounded-full border-2 border-white/20 bg-gray-800 flex items-center justify-center overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/100?img=${i + 10}`}
                        alt="User avatar"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col items-start text-left">
                  <span className="text-white font-bold text-[1.35rem] leading-tight">
                    Now
                  </span>
                  <span className="text-gray-300 text-sm font-medium">
                    Members Joining
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us Section */}
      <motion.section
        id="about-us"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="w-full bg-[#F6F7F9] py-24 lg:py-36 px-4 md:px-8 lg:px-12"
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
              Cricket is more than runs and wickets. It's a game of data,
              decisions, and precision.
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
              <p>
                Built through collaboration. Driven by a shared passion for
                cricket and technology.
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
                From live match capture to deep performance insightst
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
                desc: "Capture every delivery in real time with integrated video recording, synced with ball by ball tagging for precise analysis.",
                image: img1,
                strongFade: true,
              },
              {
                title: "Ball by Ball Analytics",
                desc: "Log every detail including runs, extras, dismissals, shot types, and bowler variations with structured data input.",
                image: img2,
              },
              {
                title: "Advanced Visualizations",
                desc: "Analyze performance using pitch maps, wagon wheels, and length tracking to uncover patterns and strategies.",
                image: img4,
                strongFade: true,
              },
              {
                title: "Video & Data Insights",
                desc: "Access recorded clips, download match data, generate reports to review performance and improve decision making.",
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
              alt="Cricket Ground"
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
              <h2 className="text-4xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] tracking-tight drop-shadow-lg">
                Turn Every Match
                <br />
                Into Insight
              </h2>
              <p className="text-gray-200 text-lg md:text-xl leading-[1.6] max-w-lg drop-shadow">
                Start capturing, analyzing, and understanding cricket like never
                before with real-time data, video insights, and powerful
                analytics tools.
              </p>

              <div className="mt-4 relative max-w-md">
                <input
                  type="email"
                  placeholder="Enter your email to get started..."
                  className="w-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-gray-300 rounded-full py-4 pl-6 pr-16 outline-none focus:bg-white/30 transition-all"
                />
                <button className="absolute right-2 top-2 bottom-2 w-10 md:w-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
                  <Send className="w-5 h-5 text-white ml-[-2px]" />
                </button>
              </div>
            </motion.div>

            {/* Right: Players Image */}
            <motion.div
              variants={fadeInUp}
              className="absolute bottom-0 right-0 w-[90%] md:w-[65%] lg:w-[60%] xl:w-[55%] h-[120%] lg:h-[135%] z-10 pointer-events-none"
            >
              <img
                src={cricketerImg}
                alt="Cricketers"
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

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import logo from "../assets/logo.png";

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

function Footer() {
  return (
    <motion.footer
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className="w-full bg-[#F6F7F9] px-4 md:px-8 lg:px-12 pb-8"
    >
      <div className="max-w-[1400px] mx-auto bg-[#111] rounded-[2rem] lg:rounded-[3rem] px-8 md:px-16 pt-16 md:pt-20 pb-10 text-white">
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-24"
        >
          {/* Left: Description */}
          <div className="col-span-1 md:col-span-5 lg:col-span-4 flex flex-col gap-6">
            <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-sm">
              A modern cricket analytics platform delivering real-time match
              capture, ball-by-ball insights, and advanced performance
              analysis for teams, analysts, and coaches.
            </p>
          </div>

          {/* Middle: Links */}
          <div className="col-span-1 md:col-span-7 lg:col-span-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-white mb-2">Quick Links</h4>
              <Link
                to="/"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Home
              </Link>
              <a
                href="/#about-us"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                About Us
              </a>
              <a
                href="/#features"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Features
              </a>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-white mb-2">Contact</h4>
              <div className="text-gray-400 text-sm flex flex-col gap-1">
                <span>Email:</span>
                <a
                  href="mailto:info@cricanalyst.io"
                  className="hover:text-white transition-colors"
                >
                  info@cricanalyst.io
                </a>
              </div>
              <div className="text-gray-400 text-sm flex flex-col gap-1 mt-2">
                <span>Phone:</span>
                <span>+94 76 889 0999</span>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-white mb-2">Support</h4>
              <a
                href="/#faqs"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Help Center
              </a>
              <a
                href="/#faqs"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                FAQs
              </a>
              <a
                href="/#contact"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Contact Us
              </a>
              <Link
                to="/eula"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                EULA
              </Link>
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </Link>
            </div>
            <div className="flex flex-col gap-4">
              <h4 className="font-semibold text-white mb-2">Follow us on:</h4>
              <div className="flex gap-4 mt-1">
                <a
                  href="#"
                  className="text-white hover:text-[#00B786] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#00B786] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-white hover:text-[#00B786] transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom: Logo & Copyright */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pt-8 mt-12"
        >
          <img
            src={logo}
            alt="CricAnalyst Logo"
            className="h-16 md:h-24 lg:h-32 object-contain"
          />
          <p className="text-gray-500 text-sm pb-2 lg:pb-6">
            © 2026{" "}
            <a
              href="https://greenstream.lk/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GreenStream
            </a>
            . All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}

export default Footer;

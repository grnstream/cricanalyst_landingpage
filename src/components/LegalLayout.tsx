import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/logo.png";
import Footer from "./Footer";

const PLATFORM_URL = import.meta.env.VITE_PLATFORM_URL as string;

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: ReactNode;
}

function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <main className="w-full bg-white">
      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6 flex items-center justify-between">
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="CricAnalyst Logo"
              className="h-14 md:h-16 object-contain w-auto"
            />
          </Link>
          <div className="flex items-center gap-4">
            <Link
              to="/"
              className="hidden sm:flex items-center gap-2 text-gray-600 hover:text-black text-sm font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            <a
              href={PLATFORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00B786] hover:bg-[#009e74] transition-colors text-white font-semibold rounded-full px-6 py-2.5 text-sm"
            >
              Go to Platform
            </a>
          </div>
        </div>
      </header>

      {/* Content */}
      <section className="w-full px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold text-black tracking-tight mb-3">
            {title}
          </h1>
          <p className="text-gray-500 text-sm md:text-base mb-12 md:mb-16">
            Last Updated: {lastUpdated}
          </p>
          <div className="flex flex-col gap-12">{children}</div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default LegalLayout;

import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import logoTransparent from "../assets/logo-transparent.webp";
import Seo from "../components/Seo";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-white text-gray-900">
      <Seo
        title="404 - Page Not Found | CricAnalyst"
        description="The cricket page or resource you are looking for does not exist or has been moved."
        canonicalUrl="https://cricanalyst.io/404"
        noindex={true}
      />

      {/* Header */}
      <header className="w-full bg-white border-b border-gray-100 py-6 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between">
          <Link to="/" className="flex-shrink-0" aria-label="CricAnalyst Home">
            <img
              src={logoTransparent}
              alt="CricAnalyst Logo"
              width="160"
              height="36"
              className="h-8 md:h-10 lg:h-11 object-contain w-auto"
            />
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main 404 Hero */}
      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="max-w-lg text-center flex flex-col items-center">
          <span className="text-8xl md:text-9xl font-extrabold text-[#00B786] tracking-tighter mb-4">
            404
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Bowled Out! Page Not Found
          </h1>
          <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
            The delivery went wide! The page you are looking for doesn't exist, has
            been moved, or is temporarily unavailable.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-[#00B786] hover:bg-[#009e74] text-white font-semibold rounded-full px-8 py-3.5 text-base transition-colors shadow-sm"
            >
              <Home className="w-5 h-5" />
              Return to Homepage
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}

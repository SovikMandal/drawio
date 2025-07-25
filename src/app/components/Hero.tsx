"use client";

import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import {
  ChevronDown,
  Zap,
  Users,
  Smartphone,
  Code,
  BarChart3,
  Share2,
} from "lucide-react";

const Hero = () => {
  const [showLearnMore, setShowLearnMore] = useState(false);
  const [screenSize, setScreenSize] = useState("lg");

  const updateScreenSize = useCallback(() => {
    const width = window.innerWidth;
    if (width < 640) setScreenSize("sm");
    else if (width < 768) setScreenSize("md");
    else if (width < 1024) setScreenSize("lg");
    else setScreenSize("xl");
  }, []);

  useEffect(() => {
    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, [updateScreenSize]);

  const features = [
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Drag & Drop Interface",
      description:
        "Create professional diagrams with our intuitive drag-and-drop editor. No design skills required - just drag, drop, and connect your ideas.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Real-time Collaboration",
      description:
        "Work together with your team in real-time. See live cursors, instant updates, and collaborate seamlessly on complex diagrams.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Works Everywhere",
      description:
        "Access your diagrams from any device - web, desktop, or mobile. All your work syncs automatically across all platforms.",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Code className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Export & Integrate",
      description:
        "Export to PNG, SVG, PDF or embed directly in your docs. Integrate with Notion, Confluence, GitHub, and your favorite tools.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Rich Diagram Library",
      description:
        "Flowcharts, network diagrams, org charts, wireframes, and more. Hundreds of templates and shapes to get you started quickly.",
      color: "from-red-500 to-rose-500",
    },
    {
      icon: <Share2 className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: "Smart Sharing",
      description:
        "Share with custom permissions, generate public links, or embed interactive diagrams. Control who can view, comment, or edit.",
      color: "from-teal-500 to-cyan-500",
    },
  ];

  const handleLearnMoreClick = useCallback(() => {
    setShowLearnMore((prev) => !prev);
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-pink-900/20"></div>
        <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-cyan-500/5 rounded-full blur-2xl animate-bounce" style={{ animationDuration: "3s" }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-40 h-40 bg-yellow-500/5 rounded-full blur-2xl animate-bounce" style={{ animationDuration: "4s", animationDelay: "1s" }}></div>
      </div>

      {/* Header */}
      <Header />

      {/* Hero section */}
       <section className="relative z-10 min-h-screen flex items-center justify-center">
        <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-12 md:py-16 lg:px-8 lg:py-20 xl:py-24">
          <div className="mx-auto max-w-5xl text-center">
            {/* Enhanced Badge with better animation */}
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-3 py-1 sm:px-4 sm:py-2 mb-6 sm:mb-8 backdrop-blur-sm hover:bg-indigo-500/20 transition-all duration-300">
              <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
              <span className="text-indigo-300 text-xs sm:text-sm font-medium">
                {screenSize === 'sm' ? 'New Release' : 'New: AI-Powered Diagrams Available'}
              </span>
            </div>

            {/* Main Headline with enhanced gradient */}
            <h1 className={`font-bold text-gray-100 leading-tight mb-4 sm:mb-6 ${
              screenSize === 'sm' ? 'text-3xl' :
              screenSize === 'md' ? 'text-4xl' :
              screenSize === 'lg' ? 'text-5xl' :
              'text-6xl xl:text-7xl'
            }`}>
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-rose-600 inline-block">Create</strong>{' '}
              <span className="inline-block">beautiful diagrams</span>{' '}
              <span className="block sm:inline">and </span>
              <strong className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 inline-block">collaborate</strong>{' '}
              <span className="inline-block">visually</span>
            </h1>

            {/* Enhanced Subtitle */}
            <p className={`text-white/90 max-w-4xl mx-auto leading-relaxed px-2 mb-6 sm:mb-8 md:mb-10 ${
              screenSize === 'sm' ? 'text-base' :
              screenSize === 'md' ? 'text-lg' :
              'text-xl lg:text-2xl'
            }`}>
              Build stunning flowcharts, system diagrams, and visual documentation with our intuitive drag-and-drop editor. 
              {screenSize !== 'sm' && ' Design, share, and collaborate in real-time with your team.'}
            </p>

            {/* Enhanced CTA Buttons */}
            <div className={`flex justify-center gap-3 sm:gap-4 px-4 sm:px-0 mb-8 sm:mb-12 ${
              screenSize === 'sm' ? 'flex-col' : 'flex-col sm:flex-row'
            }`}>
              <a
                href="#"
                className={`inline-block rounded-xl border-2 border-indigo-600 bg-gradient-to-r from-indigo-600 to-purple-600 font-semibold text-white shadow-lg transition-all duration-300 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl hover:scale-105 text-center group ${
                  screenSize === 'sm' ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base lg:text-lg'
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  Start Creating Free
                  <Zap className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </span>
              </a>

              <button
                onClick={handleLearnMoreClick}
                className={`inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 font-semibold text-gray-100 shadow-lg transition-all duration-300 hover:bg-white/10 hover:border-white/30 backdrop-blur-sm hover:scale-105 ${
                  screenSize === 'sm' ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base lg:text-lg'
                }`}
              >
                Learn More
                <ChevronDown 
                  className={`transition-transform duration-300 ${
                    showLearnMore ? 'rotate-180' : ''
                  } ${screenSize === 'sm' ? 'w-4 h-4' : 'w-5 h-5'}`} 
                />
              </button>
            </div>

            {/* Enhanced Social Proof */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-gray-400">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4].map((i) => (
                    <div key={i} className={`bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full border-2 border-gray-800 hover:scale-110 transition-transform ${
                      screenSize === 'sm' ? 'w-6 h-6' : 'w-8 h-8'
                    }`}></div>
                  ))}
                </div>
                <span className={`font-medium ${screenSize === 'sm' ? 'text-xs' : 'text-sm'}`}>
                  10k+ users
                </span>
              </div>
              
              <div className={`text-center ${screenSize === 'sm' ? 'text-xs' : 'text-sm'}`}>
                <div className="flex items-center gap-1 justify-center mb-1">
                  {[1,2,3,4,5].map((i) => (
                    <span key={i} className="text-yellow-400 hover:scale-110 transition-transform cursor-default">★</span>
                  ))}
                </div>
                <span>4.9/5 from 2,000+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Section */}
      <section 
        className={`relative z-10 bg-gradient-to-br from-gray-900 to-black transition-all duration-700 ease-in-out overflow-hidden ${
          showLearnMore ? 'max-h-none opacity-100 visible' : 'max-h-0 opacity-0 invisible'
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 py-8 sm:py-12 md:py-16 lg:py-20 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className={`font-bold text-white mb-4 ${
              screenSize === 'sm' ? 'text-2xl' :
              screenSize === 'md' ? 'text-3xl' :
              'text-4xl lg:text-5xl'
            }`}>
              Everything You Need to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
                Visualize
              </span>
            </h2>
            <p className={`text-gray-300 max-w-3xl mx-auto px-4 ${
              screenSize === 'sm' ? 'text-sm' : 'text-base lg:text-lg'
            }`}>
              Our comprehensive platform provides all the tools you need to create, collaborate, and share beautiful visual documentation.
            </p>
          </div>

          {/* Enhanced Features Grid */}
          <div className={`grid gap-4 sm:gap-6 lg:gap-8 ${
            screenSize === 'sm' ? 'grid-cols-1' :
            screenSize === 'md' ? 'grid-cols-2' :
            'grid-cols-2 lg:grid-cols-3'
          }`}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl hover:bg-gray-800/70 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl relative overflow-hidden cursor-pointer ${
                  showLearnMore ? 'animate-fade-in-up' : ''
                } ${screenSize === 'sm' ? 'p-4' : 'p-6 lg:p-8'}`}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: 'both'
                }}
              >
                {/* Enhanced Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 blur-xl transition-opacity duration-500`}></div>
                
                {/* Enhanced Icon */}
                <div className={`flex items-center justify-center bg-gradient-to-r ${feature.color} rounded-xl mb-3 sm:mb-4 text-white shadow-lg group-hover:scale-110 transition-all duration-300 ${
                  screenSize === 'sm' ? 'w-10 h-10' : 'w-12 h-12 lg:w-14 lg:h-14'
                }`}>
                  {feature.icon}
                </div>
                
                {/* Content */}
                <h3 className={`font-bold text-white mb-2 sm:mb-3 transition-all duration-300 ${
                  screenSize === 'sm' ? 'text-lg' : 'text-xl lg:text-2xl'
                }`}>
                  {feature.title}
                </h3>
                <p className={`text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300 ${
                  screenSize === 'sm' ? 'text-sm' : 'text-base'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Enhanced Final CTA */}
          <div className={`text-center ${screenSize === 'sm' ? 'mt-8' : 'mt-12 lg:mt-16'}`}>
            <a
              href="#"
              className={`inline-block bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 text-white font-bold rounded-xl lg:rounded-2xl shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 hover:from-indigo-700 hover:via-purple-700 hover:to-rose-700 ${
                screenSize === 'sm' ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base lg:px-10 lg:py-5 lg:text-lg'
              }`}
            >
              Start Your Free Trial
            </a>
            <p className={`text-gray-400 mt-3 ${
              screenSize === 'sm' ? 'text-xs' : 'text-sm'
            }`}>
              No credit card required • 14-day free trial
            </p>
          </div>
        </div>
      </section>

      {/* Enhanced Styles */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.6s ease-out;
        }
        
        @media (max-width: 374px) {
          .text-responsive-xs {
            font-size: 0.75rem;
          }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Enhanced hover effects */
        @media (hover: hover) {
          .group:hover .group-hover\\:rotate-12 {
            transform: rotate(12deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;

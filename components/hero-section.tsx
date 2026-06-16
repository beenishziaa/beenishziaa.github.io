"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, Shield, Bug, CheckSquare, Layers, FileText, Smartphone } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { PERSONAL_INFO } from "@/lib/constants"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Google Analytics tracking function
  const trackResumeDownload = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "download", {
        event_category: "Resume",
        event_label: PERSONAL_INFO.resume.filename,
        value: 1,
      })

      // Also track as a custom event
      window.gtag("event", "resume_download", {
        event_category: "Engagement",
        event_label: "Hero Section",
        custom_parameter_1: "resume_pdf",
      })
    }
  }

  if (!mounted) return null

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-8 pb-0">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* Floating elements - Hidden on mobile for cleaner look */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-200 dark:bg-purple-800 rounded-full opacity-20 animate-pulse hidden md:block"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-pink-200 dark:bg-pink-800 rounded-full opacity-20 animate-pulse delay-1000 hidden md:block"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-20 animate-pulse delay-2000 hidden md:block"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 lg:mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent leading-tight">
                {PERSONAL_INFO.name}
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 lg:mb-8 leading-relaxed">
              {PERSONAL_INFO.description}
            </p>

            <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 justify-center lg:justify-start mb-6 lg:mb-8">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-sm sm:text-base"
                asChild
              >
                <a href="#projects">View My Work</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white text-sm sm:text-base bg-transparent"
                asChild
              >
                <a
                  href={PERSONAL_INFO.resume.path}
                  download={PERSONAL_INFO.resume.filename}
                  onClick={trackResumeDownload}
                >
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex justify-center lg:justify-start space-x-4 lg:space-x-6">
              <Button variant="ghost" size="icon" className="hover:text-purple-600" asChild>
                <a href={PERSONAL_INFO.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 lg:h-6 lg:w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-purple-600" asChild>
                <a href={PERSONAL_INFO.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 lg:h-6 lg:w-6" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" className="hover:text-purple-600" asChild>
                <a href={PERSONAL_INFO.social.email}>
                  <Mail className="h-5 w-5 lg:h-6 lg:w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <div className="w-[320px] h-[320px] sm:w-[576px] sm:h-[576px] md:w-[640px] md:h-[640px] lg:w-[640px] lg:h-[640px] max-w-[90vw] max-h-[90vw] rounded-full bg-gradient-to-r from-purple-600 to-pink-600 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-background">
                  <Image
                    src={PERSONAL_INFO.images.profile || "/placeholder.svg"}
                    alt={PERSONAL_INFO.name}
                    width={640}
                    height={640}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
              </div>

              {/* Custom CSS for slower pulse animation */}
              <style jsx>{`
                .slow-pulse {
                  animation: slow-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
                }
                
                @keyframes slow-pulse {
                  0%, 100% {
                    opacity: 1;
                  }
                  50% {
                    opacity: 0.7;
                  }
                }
              `}</style>

              {/* Tech stack floating icons with logos and hover tooltips */}
              {/* 1. Jira - Top Right */}
              <div
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group slow-pulse"
                title="Jira"
              >
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  Jira
                </div>
              </div>

              {/* 2. TestRail - Top Left */}
              <div
                className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 lg:-top-8 lg:-left-8 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group slow-pulse"
                style={{ animationDelay: "1s" }}
                title="TestRail"
              >
                <FileText className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  TestRail
                </div>
              </div>

              {/* 3. Postman - Middle Left */}
              <div
                className="absolute top-1/2 -left-4 sm:-left-6 lg:-left-8 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-orange-500 to-amber-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group slow-pulse"
                style={{ animationDelay: "2s" }}
                title="Postman"
              >
                <Layers className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  Postman
                </div>
              </div>

              {/* 4. LambdaTest - Middle Right */}
              <div
                className="absolute bottom-1/3 -right-3 sm:-right-4 lg:-right-6 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-r from-teal-500 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group slow-pulse"
                style={{ animationDelay: "3s" }}
                title="LambdaTest"
              >
                <CheckSquare className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  LambdaTest
                </div>
              </div>

              {/* 5. Mobile QA - Bottom Left */}
              <div
                className="absolute -bottom-2 left-1/4 sm:-bottom-4 sm:left-1/4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group slow-pulse"
                style={{ animationDelay: "4s" }}
                title="Mobile QA"
              >
                <Smartphone className="h-4 w-4 sm:h-5 sm:w-5" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  Mobile QA
                </div>
              </div>

              {/* 6. Defect Tracking - Bottom Right */}
              <div
                className="absolute -bottom-4 right-1/3 sm:-bottom-6 sm:right-1/3 lg:-bottom-8 lg:right-1/3 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-rose-500 to-red-600 rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer group slow-pulse"
                style={{ animationDelay: "5s" }}
                title="Defect Tracking"
              >
                <Bug className="h-4 w-4 sm:h-5 sm:w-5" />
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap z-50">
                  Defect Tracking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-5 w-5 lg:h-6 lg:w-6 text-muted-foreground" />
      </div>
    </section>
  )
}

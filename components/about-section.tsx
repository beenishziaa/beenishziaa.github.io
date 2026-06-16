"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Bug, CheckSquare, Zap, Users } from "lucide-react"

export function AboutSection() {
  const skills = [
    "Functional Testing",
    "Regression Testing",
    "Smoke Testing",
    "Sanity Testing",
    "API Testing (Postman)",
    "Cross-Browser Testing",
    "UAT",
    "SDLC & STLC",
    "Bug Life Cycle",
    "Agile/Scrum",
    "Jira & TestRail",
    "LambdaTest & BrowserStack",
    "GitHub & Trello",
    "HTML & CSS",
    "JavaScript & SQL",
  ]

  const features = [
    {
      icon: CheckSquare,
      title: "QA Validation",
      description: "Ensuring the reliability, functional correctness, and performance of web and mobile applications across diverse domains.",
    },
    {
      icon: Bug,
      title: "Defect Life Cycle",
      description: "Managing issues from identification through verification in JIRA, authoring detailed reproduction steps and logs.",
    },
    {
      icon: Zap,
      title: "API Validation",
      description: "Validating API payloads, status codes, and error responses using Postman and web developer toolkits.",
    },
    {
      icon: Users,
      title: "Agile Collaboration",
      description: "Actively participating in Scrum ceremonies and collaborating cross-functionally to align QA with sprint goals.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate QA Engineer dedicated to delivering flawless user experiences and high-quality software releases.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6">My Journey</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Software Quality Assurance Engineer with 4+ years of hands-on experience ensuring the quality, reliability, and
              performance of web and mobile applications. Specializing in manual testing, API validation, and test management 
              across Agile/Scrum environments.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Proven record of managing the complete QA lifecycle — from requirements analysis and test planning through execution, 
              defect tracking, and regression testing. Adept at collaborating cross-functionally to catch specification gaps early, 
              improving test coverage by 30% and speeding up defect resolution workflows by 40%.
            </p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 p-4 text-white">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="text-3xl mb-2">🐞</div>
                  <p className="text-sm font-medium">Bug Tracking</p>
                </div>
              </div>
              <div className="aspect-square rounded-xl bg-gradient-to-br from-orange-500 to-red-500 p-4 text-white">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="text-3xl mb-2">📝</div>
                  <p className="text-sm font-medium">Test Execution</p>
                </div>
              </div>
              <div className="aspect-square rounded-xl bg-gradient-to-br from-green-500 to-teal-500 p-4 text-white">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="text-3xl mb-2">📱</div>
                  <p className="text-sm font-medium">Mobile & Web QA</p>
                </div>
              </div>
              <div className="aspect-square rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 p-4 text-white">
                <div className="text-center h-full flex flex-col justify-center">
                  <div className="text-3xl mb-2">🤝</div>
                  <p className="text-sm font-medium">Agile Scrum</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

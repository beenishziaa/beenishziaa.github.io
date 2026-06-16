"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Testing & QA",
      skills: [
        { name: "Functional Testing", level: 95 },
        { name: "Regression Testing", level: 95 },
        { name: "API Testing (Postman)", level: 90 },
        { name: "Cross-Browser/Device Testing", level: 90 },
        { name: "UAT (User Acceptance Testing)", level: 85 },
      ],
    },
    {
      title: "Methodologies & Management",
      skills: [
        { name: "SDLC & STLC Principles", level: 95 },
        { name: "Agile / Scrum Ceremonies", level: 90 },
        { name: "Bug Life Cycle & Jira", level: 95 },
        { name: "Test Planning & Strategy", level: 85 },
        { name: "Requirements Analysis", level: 90 },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Jira & TestRail", level: 95 },
        { name: "Postman", level: 90 },
        { name: "LambdaTest & BrowserStack", level: 85 },
        { name: "GitHub & Version Control", level: 80 },
        { name: "Web & Mobile (iOS/Android)", level: 90 },
      ],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in quality assurance methodologies, defect management tools, API testing, and cross-platform validation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl">{category.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Professional Competency Summary */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Professional Competency</h3>
                  <p className="text-purple-100 mb-4">
                    Demonstrated expertise in ensuring software quality, reliability, and performance across web and mobile platforms. Proven ability to improve test coverage by <strong>30%</strong> and speed up bug resolution by <strong>40%</strong> through comprehensive testing strategies.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Test Strategy & Planning (Structured Test Cases in TestRail)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>API & Integration Testing (Postman & REST APIs)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Defect Lifecycle Management (Detailed JIRA Bug Reports)</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                      <span>Cross-Platform QA (LambdaTest & BrowserStack)</span>
                    </div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
                    <div
                      className="absolute inset-0 rounded-full border-4 border-white border-t-transparent animate-spin"
                      style={{ animationDuration: "3s" }}
                    ></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-3xl font-bold">95</div>
                        <div className="text-sm">/ 100</div>
                      </div>
                    </div>
                  </div>
                  <div className="text-lg font-semibold">Software QA Engineer</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Award, BookOpen } from "lucide-react"
import { PERSONAL_INFO, EDUCATION } from "@/lib/constants"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Software QA Engineer",
      company: "Abyan Technology",
      location: "Lahore, Pakistan",
      period: "Sep 2024 – Present",
      description: "Collaborate closely with cross-functional teams to execute manual testing and regression cycles for web and mobile applications.",
      technologies: ["Jira", "TestRail", "Agile", "Scrum", "Manual Testing", "UAT", "Regression Testing"],
      achievements: [
        "Collaborated closely with developers and product managers to analyze requirements, identify ambiguities, and define clear acceptance criteria, improving overall test coverage by 30%.",
        "Designed, documented, and maintained structured test cases in TestRail, ensuring traceability from requirement to test execution across all sprints.",
        "Actively participated in Agile/Scrum ceremonies — sprint planning, daily stand-ups, and retrospectives — to align QA efforts with development velocity and sprint goals.",
        "Executed manual functional and regression tests for web and mobile applications, logging defects with detailed reproduction steps, screenshots, and severity assessments in Jira.",
        "Provided QA sign-off on feature releases, coordinating with stakeholders to validate UAT scenarios and ensure readiness for production deployment."
      ],
    },
    {
      title: "Software QA Engineer",
      company: "Topdot Pvt Ltd",
      location: "Lahore, Pakistan",
      period: "Nov 2022 – Aug 2024",
      description: "Managed complete QA lifecycle for admin portals and interconnected mobile apps.",
      technologies: ["Jira", "Postman", "LambdaTest", "BrowserStack", "GitHub", "API Testing", "UAT"],
      achievements: [
        "Reviewed and provided timely feedback on requirements, FRS, and design documents, catching specification gaps that would have resulted in downstream defects.",
        "Designed comprehensive test plans and test case suites covering functional, regression, smoke, sanity, and cross-platform testing scenarios for web and native mobile applications (iOS & Android).",
        "Conducted end-to-end testing of admin portals and interconnected mobile apps, validating data consistency and workflow integrity across integrated system components.",
        "Authored well-structured bug reports with clear descriptions, reproduction steps, video/screenshot evidence, and business impact assessments, enabling developers to resolve issues 40% faster.",
        "Managed and version-controlled all QA artefacts — test plans, test cases, and defect logs — on GitHub, ensuring team-wide visibility and audit-ready documentation.",
        "Executed full regression test suite prior to each release cycle, preventing high-severity defects from reaching production.",
        "Performed cross-browser and cross-device testing using LambdaTest and BrowserStack, ensuring consistent user experience across platforms."
      ],
    },
    {
      title: "Software QA Engineer",
      company: "AcclivousByte",
      location: "Lahore, Pakistan",
      period: "Jul 2021 – Nov 2022",
      description: "Conducted manual testing, API validation, client communication, and defect triage.",
      technologies: ["Postman", "Jira", "Trello", "Basecamp", "SDLC", "STLC", "API Testing", "Client Relations"],
      achievements: [
        "Gathered and analysed business requirements from the Project Manager to develop targeted test scenarios aligned with client expectations.",
        "Reviewed Functional Requirements Specifications (FRS) and design documents, identifying testable scenarios and edge cases prior to development.",
        "Authored and executed manual test cases based on user stories and acceptance criteria, covering positive, negative, and boundary value scenarios.",
        "Performed API testing using Postman — constructing and sending HTTP requests, validating response payloads, status codes, and error handling.",
        "Maintained direct written communication with clients to provide QA status updates, reproduce reported issues, and confirm defect resolutions.",
        "Collaborated with customer support teams to triage and reproduce customer-reported defects, ensuring timely escalation and resolution within agreed SLAs.",
        "Applied SDLC and STLC principles to ensure quality gates were met at each development milestone, from design review through post-release monitoring."
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Experience & Education</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My professional journey and educational background that shaped my expertise in software quality assurance.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold mb-8">Professional Experience</h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                      <Badge variant="outline" className="w-fit">
                        <Calendar className="h-3 w-3 mr-1" />
                        {exp.period}
                      </Badge>
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        {exp.location}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
 
                    <div className="mb-4">
                      <h5 className="font-medium mb-2">Key Achievements:</h5>
                      <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
 
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
 
          {/* Education & Certifications */}
          <div>
            {/* Education */}
            <h3 className="text-2xl font-semibold mb-8">Education</h3>
            <div className="space-y-6 mb-8">
              {EDUCATION.degrees.map((edu, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{edu.degree}</CardTitle>
                    <div className="text-muted-foreground">
                      <div className="font-medium">{edu.school}</div>
                      <div className="flex items-center text-sm">
                        <MapPin className="h-3 w-3 mr-1" />
                        {edu.location}
                      </div>
                      <div className="flex items-center text-sm">
                        <Calendar className="h-3 w-3 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm mb-3">{edu.description}</p>
                    <div>
                      <h5 className="font-medium mb-2 text-sm">Achievements:</h5>
                      <ul className="list-disc list-inside text-xs text-muted-foreground space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
 
            {/* Online Courses */}
            {EDUCATION.courses.length > 0 && (
              <>
                <h4 className="text-lg font-semibold mb-4">Recent Learning</h4>
                <div className="space-y-3 mb-8">
                  {EDUCATION.courses.map((course, index) => (
                    <Card
                      key={index}
                      className="p-4 bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-green-200 dark:border-green-800"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <BookOpen className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{course.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {course.platform} • {course.year}
                          </div>
                          <p className="text-xs text-muted-foreground mt-1">{course.description}</p>
                          <div className="flex flex-wrap gap-1 mt-2">
                            {course.skills.map((skill) => (
                              <Badge key={skill} variant="secondary" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            )}

            {/* Certifications */}
            {EDUCATION.certifications.length > 0 && (
              <>
                <h4 className="text-lg font-semibold mb-4">Certifications</h4>
                <div className="space-y-3">
                  {EDUCATION.certifications.map((cert, index) => (
                    <Card key={index} className="p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Award className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-medium">{cert.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {cert.issuer} • {cert.year}
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

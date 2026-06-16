"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"

export function ProjectsSection() {
  const projects = [
    {
      title: "Appointment Booking Systems (Web & Mobile)",
      description:
        "Conducted manual functional and regression testing for booking systems across web and mobile platforms. Designed structured test cases in TestRail, ensuring full traceability and improving test coverage by 30%.",
      image: "/images/project1.jpg",
      technologies: ["Jira", "TestRail", "Agile/Scrum", "Manual Testing", "Regression Testing"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      company: "Abyan Technology",
      period: "2024-Present",
    },
    {
      title: "Social Media Platform (Web & Mobile)",
      description:
        "Designed comprehensive test suites covering functional, regression, smoke, and sanity scenarios. Verified responsive layouts across various browsers and physical/simulated devices using BrowserStack.",
      image: "/images/project2.jpg",
      technologies: ["Jira", "TestRail", "BrowserStack", "Mobile Testing", "iOS", "Android"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      company: "Topdot Pvt Ltd",
      period: "2023-2024",
    },
    {
      title: "Fintech & Digital Wallet System",
      description:
        "Validated core transactional workflows, payment integrations, and admin portals. Authored well-structured bug reports with reproduction steps and logs, enabling developers to resolve defects 40% faster.",
      image: "/images/project3.jpg",
      technologies: ["Jira", "GitHub", "Manual Testing", "API Testing", "UAT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      period: "2022-2023",
    },
    {
      title: "Healthcare Application (Mobile)",
      description:
        "Conducted end-to-end testing of patient portals and interconnected healthcare systems. Worked closely with project managers to develop targeted test scenarios matching client expectations.",
      image: "/images/project4.jpg",
      technologies: ["Postman", "Jira", "Mobile QA", "Requirements Analysis"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      period: "2021-2022",
    },
    {
      title: "E-Commerce Platform & Zoho Integration",
      description:
        "Executed API and functional testing using Postman. Verified data consistency, inventory synchronization, and webhook actions across eBay, Shopify, and Zoho integration pipelines.",
      image: "/images/cover.jpg",
      technologies: ["Postman", "REST APIs", "Shopify", "API Testing", "UAT"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      period: "2021-2022",
    },
  ]

  const featuredProjects = projects.filter((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work, demonstrating various technologies and problem-solving approaches.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
              <div className="relative overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex space-x-2">
                    <Button size="sm" className="bg-white/20 backdrop-blur-sm hover:bg-white/30" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-lg">{project.title}</span>
                  <Badge className="bg-gradient-to-r from-purple-600 to-pink-600">Featured</Badge>
                </CardTitle>
                <div className="text-sm text-muted-foreground">
                  {project.company} • {project.period}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 group">
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={500}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <div className="text-sm text-muted-foreground">{project.period}</div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-3 w-3 mr-1" />
                        Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

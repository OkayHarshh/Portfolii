import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import pharmacyImage from "@/assets/project-pharmacy.jpg";
import fuelmateImage from "@/assets/project-fuelmate.jpg";

const projects = [
  {
    title: "Cyber Pharma",
    description: "AI-based pharmacy built with HTML, CSS & JS for streamlined medical consultations and prescription management.",
    image: pharmacyImage,
    tags: ["HTML", "CSS", "JavaScript", "AI"],
    demoLink: "#",
    githubLink: "#",
  },
  {
    title: "FuelMate",
    description: "A comprehensive web application for managing fuel consumption, tracking expenses, and optimizing your vehicle's efficiency.",
    image: fuelmateImage,
    tags: ["Web App", "Dashboard", "Analytics"],
    demoLink: "#",
    githubLink: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground text-lg">A selection of my best work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
                <CardDescription className="text-base">{project.description}</CardDescription>
              </CardHeader>

              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="gap-3">
                <Button variant="default" size="sm" className="flex-1">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

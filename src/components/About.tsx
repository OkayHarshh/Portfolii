import { Code2, Database, Film } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg">A little bit about my journey</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                Just your average nerd who likes to code, crunch numbers, and occasionally pretend 
                to be a film critic on the side. When I'm not diving into datasets or building something 
                cool with Python, you'll probably find me binge-watching movies and rating them like I'm 
                some kind of expert (I'm not, but don't tell anyone).
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Code2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">Developer</h3>
                  <p className="text-sm text-muted-foreground">Building web solutions</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Database className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">Data Analyst</h3>
                  <p className="text-sm text-muted-foreground">Wrangling complex data</p>
                </div>
                
                <div className="text-center space-y-3">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <Film className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-semibold">Movie Enthusiast</h3>
                  <p className="text-sm text-muted-foreground">Self-proclaimed critic</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

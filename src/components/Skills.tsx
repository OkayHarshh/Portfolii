import { Badge } from "@/components/ui/badge";

const skills = [
  "Python",
  "Pandas",
  "NumPy",
  "Streamlit",
  "SQL",
  "C++",
  "HTML",
  "CSS",
  "Git & GitHub",
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">My Tech Stack</h2>
          <p className="text-muted-foreground text-lg">Technologies I love to work with</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-base px-6 py-3 hover:scale-110 transition-transform cursor-default shadow-md hover:shadow-lg"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

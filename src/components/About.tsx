import { Target, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const About = () => {
  const passions = [
    'Sustainable Supply Chain Management & Lean Management',
    'Data Analytics & Data-driven problem-solving',
    'Production Planning & Quality Control',
    'Merchandising Coordination',
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Professional Summary */}
          <Card className="bg-card border-border hover:border-primary transition-all duration-300 animate-slide-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Lightbulb className="text-primary" size={28} />
                Professional Summary
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p className="leading-relaxed">
                A technically skilled and management-focused Textile Engineering graduate with hands-on industrial 
                experience in knit production, dyeing, testing, and merchandising coordination.
              </p>
              <p className="leading-relaxed">
                Adept at integrating technical expertise with management insight to optimize production efficiency, 
                quality, and sustainability. Demonstrated leadership through key roles in university clubs and creative 
                projects, reflecting strong communication, teamwork, and innovation skills.
              </p>
              <div className="pt-4">
                <h4 className="text-foreground font-semibold mb-3">Passionate About:</h4>
                <ul className="space-y-2">
                  {passions.map((passion, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-primary mr-2">▸</span>
                      <span>{passion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Objective */}
          <Card className="bg-card border-border hover:border-primary transition-all duration-300 animate-slide-in">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <Target className="text-primary" size={28} />
                Career Objective
              </CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              <p className="leading-relaxed text-lg">
                To build a dynamic career in the global textile and apparel industry, where I can apply my technical 
                expertise in production, merchandising, and supply chain optimization while continuously developing 
                innovative and sustainable solutions that create measurable business value.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

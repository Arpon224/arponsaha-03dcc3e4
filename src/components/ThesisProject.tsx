import { BookOpen } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ThesisProject = () => {
  const keyFindings = [
    'Validated the positive link between Green Supply Chain Management (GSCM) and Sustainable Firm Performance (SFP).',
    'Confirmed Digital Technology Adoption (DTA) as a vital mediator, proving digitalization is key to translating green practices into performance gains.',
    'Established Collaborative Capabilities (CC) as a crucial mediator, emphasizing that strong, trust-based partnerships drive sustainability success.',
    'Provided a novel model and data-driven insights for the textile industry to enhance sustainability through strategic technology and collaboration.',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Thesis <span className="text-primary">Project</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto animate-slide-in">
          <Card className="bg-card border-border hover:border-primary transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-start gap-3 text-xl sm:text-2xl text-primary">
                <BookOpen className="flex-shrink-0 mt-1" size={28} />
                <span>
                  Nexus between Green Supply Chain Management and Sustainable Firm Performance: The Role of Collaborative Capability, Digital Technology Adoption and Corporate Information Transparency
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-lg">Key Findings:</h4>
                <ul className="space-y-3">
                  {keyFindings.map((finding, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span>{finding}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ThesisProject;

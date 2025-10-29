import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      company: 'JK Knit Composite Ltd',
      position: 'Internship',
      location: 'Savar, Dhaka',
      duration: 'February 2025 – March 2025',
      responsibilities: [
        'Knitting Production of Variable Fabric Structure, R&D Department',
        'Execution of Knit Fabric Dyeing process with Finishing and Inspection',
        'Execution of Physical Testing Lab, Chemical Testing Lab',
        'Supported the Merchandising Department in sample development and client coordination',
        'Supported merchandising for 3 international buyers (Mango, NEXT) ensuring on-time delivery',
        'Assisted IE team in workflow analysis, contributing to a 10% improvement in process efficiency',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="bg-card border-border hover:border-primary transition-all duration-300 animate-slide-in"
            >
              <CardHeader>
                <CardTitle className="text-2xl sm:text-3xl text-primary mb-2">
                  {exp.company}
                </CardTitle>
                <div className="space-y-2 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Briefcase size={18} className="text-primary" />
                    <span className="font-semibold text-foreground">{exp.position}</span>
                  </div>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-2">
                      <MapPin size={18} className="text-primary" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={18} className="text-primary" />
                      <span>{exp.duration}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start text-muted-foreground">
                      <span className="text-primary mr-3 mt-1">▸</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

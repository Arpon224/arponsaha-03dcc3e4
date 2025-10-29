import { Code, MessageSquare, Languages } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Technical & Computer Skills',
      icon: Code,
      skills: [
        'Adobe Photoshop',
        'Adobe Illustrator',
        'Canva',
        'Microsoft Word',
        'Microsoft Excel',
        'Microsoft PowerPoint',
        'Da Vinci Resolve',
      ],
    },
    {
      title: 'Soft Skills',
      icon: MessageSquare,
      skills: [
        'Leadership',
        'Team Collaboration',
        'Strategic Time Management',
        'Adaptability',
        'Professional Discipline',
        'Effective Communication',
      ],
    },
    {
      title: 'Languages',
      icon: Languages,
      skills: ['Bangla', 'English', 'Hindi'],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Skills & <span className="text-primary">Competencies</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary transition-all duration-300 animate-slide-in"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl">
                  <category.icon className="text-primary" size={24} />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 bg-primary/10 border border-primary/30 text-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

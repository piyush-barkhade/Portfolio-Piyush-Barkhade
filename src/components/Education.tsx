
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Medi-Caps University, Indore, Madhya Pradesh',
      period: '2022 - 2026',
      grade: 'Current - 9.15 CGPA',
      color: 'neon-purple'
    },
    {
      degree: 'Class 12th',
      institution: 'Chameli Devi Public School, Indore, Madhya Pradesh',
      period: '2010 - 2022',
      grade: 'Class 12th - 88.6%, Class 10th - 89%',
      color: 'neon-blue'
    }
  ];

  const additionalInfo = [
    {
      title: 'Certifications',
      items: ['15+ Google Cloud Skill Badges', 'Artificial Intelligence Internship Certificate', 'Web Development Internship Certificate'],
      icon: Award,
      color: 'neon-cyan'
    },
    {
      title: 'Competitions',
      items: ['Tech Rookies 2025 Winner', 'Google GenAI Study Jams tier 1 Swags and goodies'],
      icon: GraduationCap,
      color: 'neon-pink'
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Education & Achievements
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My academic background and accomplishments
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education Timeline */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-neon-purple mb-6">Education</h3>
            {education.map((edu, index) => (
              <Card 
                key={edu.degree}
                className={`glass glass-hover neon-glow animate-fade-in hover:scale-105 transition-all duration-300`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <CardTitle className={`text-lg text-${edu.color} flex items-start gap-3`}>
                    <GraduationCap size={24} className="mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-foreground mb-2">{edu.degree}</div>
                      <div className="text-sm font-normal text-muted-foreground">
                        {edu.institution}
                      </div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award size={14} className={`text-${edu.color}`} />
                    <span className="text-foreground">{edu.grade}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Information */}
          <div className="space-y-8">
            {additionalInfo.map((section, index) => (
              <div key={section.title}>
                <h3 className={`text-2xl font-bold text-${section.color} mb-6`}>
                  {section.title}
                </h3>
                <Card 
                  className={`glass glass-hover neon-glow animate-fade-in hover:scale-105 transition-all duration-300`}
                  style={{ animationDelay: `${(index + 1) * 0.2}s` }}
                >
                  <CardContent className="p-6">
                    <div className={`flex items-center gap-3 mb-4 text-${section.color}`}>
                      <section.icon size={24} />
                      <span className="text-lg font-semibold">{section.title}</span>
                    </div>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground flex items-start">
                          <span className={`text-${section.color} mr-2 mt-1`}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

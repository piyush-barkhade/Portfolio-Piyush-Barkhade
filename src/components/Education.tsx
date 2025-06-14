
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, Calendar, MapPin, Award, Trophy, Star, BookOpen } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Technology in Computer Science Engineering',
      institution: 'Medi-Caps University',
      location: 'Indore, Madhya Pradesh',
      period: '2022 - 2026',
      grade: 'Current CGPA: 9.18/10.0',
      status: 'Pursuing',
      color: 'neon-purple',
      highlights: [
        'Top 5% of the class',
        "Consistent strong learner list's student",
        'Active in technical societies'
      ]
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Chameli Devi Public School',
      location: 'Indore, Madhya Pradesh',
      period: '2010 - 2022',
      grade: 'Class 12th: 88.6% • Class 10th: 89%',
      status: 'Completed',
      color: 'neon-blue',
      highlights: [
        'Science stream with Mathematics',
        'School topper in Computer Science',
        'Active participant in various competitions'
      ]
    }
  ];

  const achievements = [
    {
      category: 'Certifications & Badges',
      items: [
        { name: 'Google Cloud Skill Badges', count: '15+', icon: Star },
        { name: 'AWS Certified', count: '1', icon: Award },
        { name: 'Web Development Internship Certificate', count: '2', icon: Award },
        { name: 'Artificial Intelligence Internship Certificate', count: '1', icon: Award },
      ],
      color: 'neon-cyan'
    },
    {
      category: 'Competitions & Recognition',
      items: [
        { name: 'Tech Roadies 2025 Winner', count: '🏆', icon: Trophy },
        { name: 'Google GenAI Study Jams Tier 1', count: '🎁', icon: Star },
        { name: 'AWS Certified', count: '1', icon: Award },
        { name: 'Hackathon Participant', count: '3+', icon: Award }
      ],
      color: 'neon-pink'
    }
  ];

  return (
    <section id="education" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-neon-purple/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Education & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mb-4 sm:mb-6"></div>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto font-light px-4 sm:px-0">
            My academic journey and professional accomplishments that shaped my expertise
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* Education Timeline */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <BookOpen size={28} className="sm:size-8 text-neon-purple" />
              <h3 className="text-2xl sm:text-3xl font-bold text-neon-purple">Academic Background</h3>
            </div>
            
            {education.map((edu, index) => (
              <Card 
                key={edu.degree}
                className={`glass glass-hover neon-glow border-2 border-white/10 hover:border-${edu.color}/30 transition-all duration-500 overflow-hidden group animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`h-1 w-full bg-gradient-to-r from-${edu.color} to-${edu.color}/50`}></div>
                <CardHeader className="pb-3 p-4 sm:p-6">
                  <div className="flex items-start justify-between flex-col sm:flex-row gap-4">
                    <div className="flex items-start gap-3 sm:gap-4 flex-1">
                      <div className={`p-2 sm:p-3 rounded-xl glass border border-${edu.color}/30 bg-${edu.color}/10 mt-1`}>
                        <GraduationCap size={20} className={`sm:size-6 text-${edu.color}`} />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg sm:text-xl text-foreground mb-2 leading-tight">
                          {edu.degree}
                        </CardTitle>
                        <p className="text-base sm:text-lg font-semibold text-muted-foreground mb-1">
                          {edu.institution}
                        </p>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <MapPin size={14} />
                          <span>{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full bg-${edu.color}/10 border border-${edu.color}/30 w-fit`}>
                      <span className={`text-xs font-semibold text-${edu.color}`}>{edu.status}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4 p-4 sm:p-6 pt-0">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar size={14} />
                    <span>{edu.period}</span>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <Award size={16} className={`text-${edu.color}`} />
                    <span className="text-foreground font-semibold text-sm sm:text-base">{edu.grade}</span>
                  </div>
                  
                  <div className="pt-3 border-t border-white/10">
                    <h4 className="text-sm font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Key Highlights</h4>
                    <ul className="space-y-1">
                      {edu.highlights.map((highlight, idx) => (
                        <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className={`text-${edu.color} mt-1 text-xs`}>•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Achievements */}
          <div className="space-y-6 sm:space-y-8">
            <div className="flex items-center gap-3 mb-6 sm:mb-8">
              <Trophy size={28} className="sm:size-8 text-neon-cyan" />
              <h3 className="text-2xl sm:text-3xl font-bold text-neon-cyan">Achievements & Recognition</h3>
            </div>
            
            {achievements.map((section, index) => (
              <Card 
                key={section.category}
                className={`glass glass-hover neon-glow border-2 border-white/10 hover:border-${section.color}/30 transition-all duration-500 animate-fade-in`}
                style={{ animationDelay: `${(index + 1) * 0.2}s` }}
              >
                <div className={`h-1 w-full bg-gradient-to-r from-${section.color} to-${section.color}/50`}></div>
                <CardHeader className="pb-4 p-4 sm:p-6">
                  <CardTitle className={`text-lg sm:text-xl text-${section.color} flex items-center gap-3`}>
                    <div className={`w-2 h-5 sm:h-6 bg-gradient-to-b from-${section.color} to-${section.color}/50 rounded-full`}></div>
                    {section.category}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="p-4 sm:p-6 pt-0">
                  <div className="grid gap-3 sm:gap-4">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-3 glass rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300">
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg bg-${section.color}/10 border border-${section.color}/30`}>
                            <item.icon size={16} className={`text-${section.color}`} />
                          </div>
                          <span className="text-foreground font-medium text-sm sm:text-base">{item.name}</span>
                        </div>
                        <span className={`text-${section.color} font-bold text-base sm:text-lg`}>{item.count}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

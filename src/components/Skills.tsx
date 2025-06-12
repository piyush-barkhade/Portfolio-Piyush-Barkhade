
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Globe, Wrench, Award, TrendingUp } from 'lucide-react';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: [
        { name: 'JavaScript', level: 90, description: 'ES6+, Modern JS' },
        { name: 'TypeScript', level: 85, description: 'Type-safe development' },
        { name: 'Python', level: 80, description: 'Backend & Scripting' },
        { name: 'Java', level: 75, description: 'OOP & Enterprise' },
        { name: 'C/C++', level: 85, description: 'System Programming' },
      ],
      color: 'neon-purple',
      gradient: 'from-neon-purple to-neon-blue'
    },
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React.js', level: 95, description: 'Hooks, Context, Redux' },
        { name: 'Next.js', level: 85, description: 'SSR & SSG' },
        { name: 'HTML5 & CSS3', level: 90, description: 'Semantic & Modern' },
        { name: 'Tailwind CSS', level: 88, description: 'Utility-first CSS' },
        { name: 'Material-UI', level: 82, description: 'Component Library' },
      ],
      color: 'neon-blue',
      gradient: 'from-neon-blue to-neon-cyan'
    },
    {
      title: 'Backend & Database',
      icon: Database,
      skills: [
        { name: 'Node.js', level: 88, description: 'Server-side JavaScript' },
        { name: 'Express.js', level: 85, description: 'RESTful APIs' },
        { name: 'MongoDB', level: 82, description: 'NoSQL Database' },
        { name: 'MySQL', level: 78, description: 'Relational Database' },
        { name: 'Firebase', level: 80, description: 'BaaS Platform' },
      ],
      color: 'neon-cyan',
      gradient: 'from-neon-cyan to-neon-pink'
    },
    {
      title: 'Tools & Technologies',
      icon: Wrench,
      skills: [
        { name: 'Git & GitHub', level: 90, description: 'Version Control' },
        { name: 'VS Code', level: 95, description: 'Primary IDE' },
        { name: 'Postman', level: 85, description: 'API Testing' },
        { name: 'Docker', level: 75, description: 'Containerization' },
        { name: 'AWS', level: 70, description: 'Cloud Services' },
      ],
      color: 'neon-pink',
      gradient: 'from-neon-pink to-neon-purple'
    },
  ];

  const certifications = [
    '15+ Google Cloud Skill Badges',
    'Web Development Certification',
    'AI/ML Internship Certificate',
    'React.js Advanced Concepts'
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-32 relative overflow-hidden" ref={skillsRef}>
      {/* Background Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mb-6"></div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-light">
            My technical arsenal for building modern web applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={category.title} 
              className="glass glass-hover neon-glow border-2 border-white/10 hover:border-neon-purple/30 transition-all duration-500 group"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-4 text-2xl">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon size={28} />
                  </div>
                  <span className={`text-${category.color}`}>
                    {category.title}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <span className="text-foreground font-semibold text-lg">{skill.name}</span>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                      <Badge 
                        variant="secondary" 
                        className={`bg-${category.color}/20 text-${category.color} border border-${category.color}/30`}
                      >
                        {skill.level}%
                      </Badge>
                    </div>
                    <div className="relative">
                      <div className="w-full bg-muted/30 rounded-full h-3 overflow-hidden">
                        <div
                          className={`h-full rounded-full bg-gradient-to-r ${category.gradient} transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${(categoryIndex * 0.1) + (skillIndex * 0.1)}s`
                          }}
                        >
                          <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <Card className="glass glass-hover neon-glow border-2 border-white/10 hover:border-neon-cyan/30 transition-all duration-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-4 text-3xl">
              <div className="p-3 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple text-white shadow-lg">
                <Award size={32} />
              </div>
              <span className="text-neon-cyan">Certifications & Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-neon-purple flex items-center gap-2">
                  <TrendingUp size={20} />
                  Professional Certifications
                </h4>
                <div className="space-y-3">
                  {certifications.map((cert) => (
                    <div key={cert} className="flex items-start gap-3 p-3 glass rounded-lg hover:bg-white/10 transition-colors">
                      <span className="text-neon-cyan mt-1">✓</span>
                      <span className="text-muted-foreground">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 text-neon-blue flex items-center gap-2">
                  <Award size={20} />
                  Competition Wins
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 glass rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-neon-purple mt-1">🏆</span>
                    <span className="text-muted-foreground">Tech Roadies 2k25 Winner</span>
                  </div>
                  <div className="flex items-start gap-3 p-3 glass rounded-lg hover:bg-white/10 transition-colors">
                    <span className="text-neon-blue mt-1">🎁</span>
                    <span className="text-muted-foreground">Google GenAI Study Jams - Tier 1 Recognition</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'IQ Paths Technologies',
      location: 'Indore',
      period: 'April 2025 - Present',
      description: [
        'Developing a dynamic resume builder application that allows users to create, customize, and export professional resumes with real-time previews and template management using React and Node.js'
      ],
      color: 'neon-purple'
    },
    {
      title: 'Productions Head',
      company: 'Entrepreneurship Cell, Medi-Caps University',
      location: 'Indore',
      period: 'Jan 2025 - Present',
      description: [
        'Led the production and execution of flagship entrepreneurial events at E-Cell Medi-Caps, managing logistics, design, and team coordination to deliver impactful experiences for 2000+ attendees.'
      ],
      color: 'neon-blue'
    },
    {
      title: 'Video Editing Head',
      company: 'Google DG, Medi-Caps University',
      location: 'Indore',
      period: 'Aug 2024 - Present',
      description: [
        'Led a team of video editors and content creators in producing high-quality video tutorials, promotional content, and event highlights for Google Developer Group (GDG) initiatives'
      ],
      color: 'neon-blue'
    }
  ];

  return (
    <section id="experience" className="py-12 sm:py-16 lg:py-20 relative px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-gradient">
            Work Experience
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto px-4 sm:px-0">
            My professional journey and contributions
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-neon-purple via-neon-blue to-neon-cyan transform md:-translate-x-1/2"></div>

          <div className="space-y-8 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.title}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className={`absolute left-4 md:left-1/2 w-4 h-4 bg-${exp.color} rounded-full transform md:-translate-x-1/2 z-10 animate-pulse-glow`}></div>

                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 lg:pr-12' : 'md:pl-8 lg:pl-12'} ml-12 md:ml-0`}>
                  <Card className={`glass glass-hover neon-glow animate-fade-in group hover:scale-105 transition-all duration-300`}>
                    <CardHeader className="p-4 sm:p-6">
                      <CardTitle className={`text-lg sm:text-xl text-${exp.color}`}>
                        {exp.title}
                      </CardTitle>
                      <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-semibold text-foreground">
                          {exp.company}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar size={14} />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 sm:p-6 pt-0">
                      <ul className="space-y-2">
                        {exp.description.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-sm sm:text-base text-muted-foreground flex items-start">
                            <span className={`text-${exp.color} mr-2 mt-1`}>•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

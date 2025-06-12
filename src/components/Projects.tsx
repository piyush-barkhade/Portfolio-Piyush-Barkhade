
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Alert Right',
      description: 'Emergency Safety Application',
      details: [
        'Developed a MERN stack-based SOS app to enhance personal safety through instant emergency alerts',
        'Integrated Twilio to simultaneously send SMS and make calls to all registered emergency contacts',
        'Used Google Maps API to share real-time location with contacts during emergency situations'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Twilio API', 'Google Maps API'],
      color: 'neon-purple',
      link: '#'
    },
    {
      title: 'Placement Right',
      description: 'Placement Preparation Application',
      details: [
        'A MERN Stack quiz platform offering tailored quizzes on coding, aptitude, and reasoning to help students ace placement exams',
        'Tracks progress and ranks students on a live leaderboard, motivating continuous improvement',
        'Designed for easy navigation, making quiz participation and progress tracking simple and engaging'
      ],
      tech: ['React', 'Express.js', 'MongoDB', 'Node.js'],
      color: 'neon-blue',
      link: '#'
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Showcasing my latest work and creative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass glass-hover neon-glow group cursor-pointer transform transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader>
                <CardTitle className={`text-2xl text-${project.color} mb-2`}>
                  {project.title}
                </CardTitle>
                <p className="text-lg text-muted-foreground font-medium">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-muted-foreground flex items-start">
                      <span className={`text-${project.color} mr-2 mt-1`}>•</span>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full glass border border-${project.color}/30 text-${project.color}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4 pt-4">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-cyan"
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className={`border-${project.color} text-${project.color} hover:bg-${project.color} hover:text-background`}
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;


import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Users, Star, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Alert Right',
      subtitle: 'Emergency Safety Application',
      description: 'A comprehensive SOS application built with MERN stack to enhance personal safety through instant emergency alerts and real-time location sharing.',
      longDescription: [
        'Developed a full-featured emergency response system with instant SMS and call functionality',
        'Integrated Twilio API for multi-channel communication with emergency contacts',
        'Implemented Google Maps API for precise real-time location tracking and sharing',
        'Built responsive UI with React for seamless cross-platform experience'
      ],
      tech: ['React.js', 'Node.js', 'MongoDB', 'Express.js', 'Twilio API', 'Google Maps API', 'JWT Auth'],
      color: 'neon-purple',
      gradient: 'from-neon-purple to-neon-blue',
      image: 'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=600&h=400&fit=crop',
      status: 'Live',
      team: '4 developers',
      duration: '3 months',
      link: '#',
      featured: true
    },
    {
      title: 'Placement Right',
      subtitle: 'Academic Preparation Platform',
      description: 'An intelligent quiz platform designed to help students excel in placement examinations through personalized practice and progress tracking.',
      longDescription: [
        'Built a comprehensive quiz management system with categorized question banks',
        'Implemented real-time leaderboard system to encourage competitive learning',
        'Designed intuitive progress tracking with detailed analytics and performance insights',
        'Created responsive design for optimal experience across all device types'
      ],
      tech: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'Chart.js', 'Socket.io', 'Redux'],
      color: 'neon-blue',
      gradient: 'from-neon-blue to-neon-cyan',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=400&fit=crop',
      status: 'Live',
      team: '3 developers',
      duration: '2 months',
      link: '#',
      featured: true
    },
    {
      title: 'Portfolio Website',
      subtitle: 'Personal Brand Showcase',
      description: 'A modern, responsive portfolio website showcasing professional work with advanced animations and interactive elements.',
      longDescription: [
        'Designed and developed a professional portfolio with modern aesthetic',
        'Implemented advanced CSS animations and interactive particle backgrounds',
        'Built with React and TypeScript for type-safe, maintainable code',
        'Optimized for performance and SEO with responsive design principles'
      ],
      tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      color: 'neon-cyan',
      gradient: 'from-neon-cyan to-neon-pink',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop',
      status: 'Live',
      team: 'Solo project',
      duration: '1 month',
      link: '#',
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mb-6"></div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-light">
            Showcasing my latest work and innovative solutions
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className={`glass glass-hover neon-glow border-2 border-white/10 hover:border-${project.color}/30 transition-all duration-500 overflow-hidden group ${
                project.featured ? 'lg:h-auto' : 'lg:h-auto'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-5'} gap-0`}>
                {/* Project Image */}
                <div className={`relative overflow-hidden ${project.featured ? 'lg:col-span-1' : 'lg:col-span-2'} ${index % 2 === 1 && project.featured ? 'lg:order-2' : ''}`}>
                  <div className="aspect-video lg:aspect-square lg:h-full relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={`bg-${project.color}/20 text-${project.color} border border-${project.color}/30`}>
                        {project.status}
                      </Badge>
                      {project.featured && (
                        <Badge className="bg-yellow-500/20 text-yellow-500 border border-yellow-500/30">
                          <Star size={12} className="mr-1" />
                          Featured
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className={`${project.featured ? 'lg:col-span-1' : 'lg:col-span-3'} p-8 lg:p-12 flex flex-col justify-center`}>
                  <CardHeader className="p-0 mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-1 h-8 bg-gradient-to-b ${project.gradient} rounded-full`}></div>
                      <CardTitle className={`text-3xl lg:text-4xl text-${project.color}`}>
                        {project.title}
                      </CardTitle>
                    </div>
                    <p className="text-xl text-muted-foreground font-medium mb-4">
                      {project.subtitle}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-8">
                    {/* Key Features */}
                    <div>
                      <h4 className="text-lg font-semibold mb-4 text-foreground">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.longDescription.map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-muted-foreground flex items-start gap-3">
                            <span className={`text-${project.color} mt-1 text-sm`}>▸</span>
                            <span className="flex-1">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Details */}
                    <div className="flex flex-wrap gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className={`text-${project.color}`} />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} className={`text-${project.color}`} />
                        <span>{project.team}</span>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wide">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className={`bg-${project.color}/10 text-${project.color} border border-${project.color}/20 hover:bg-${project.color}/20 transition-colors`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button
                        asChild
                        className={`bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-${project.color}/25 transition-all duration-300 group`}
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink size={18} />
                          Live Demo
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                      
                      <Button
                        variant="outline"
                        asChild
                        className={`border-${project.color}/30 text-${project.color} hover:bg-${project.color}/10 hover:border-${project.color} transition-all duration-300`}
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github size={18} />
                          Source Code
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects Button */}
        <div className="text-center mt-16">
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background glass backdrop-blur-sm text-lg px-8 py-4 group"
          >
            View All Projects
            <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;

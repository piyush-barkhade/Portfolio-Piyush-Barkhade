import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Calendar, Users, Star, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

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
      tech: ['React.js', 'Node.js', 'MongoDB', 'Twilio API', 'Google Maps API', 'JWT Auth'],
      color: 'neon-purple',
      gradient: 'from-neon-purple to-neon-blue',
      image: '/logo-alertify.png',
      status: 'Live',
      team: 'Solo Project',
      duration: '1 month',
      link: 'https://alert-right.onrender.com/',
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
      tech: ['React.js', 'Express.js', 'MongoDB', 'Node.js', 'Chart.js'],
      color: 'neon-blue',
      gradient: 'from-neon-blue to-neon-cyan',
      image: 'logo-placement-right.jpg',
      status: 'Live',
      team: 'Solo Project',
      duration: '2 months',
      link: 'https://placement-right.onrender.com/',
      featured: true
    },
    {
  title: 'Chat Right',
  subtitle: 'Real-Time Chat Application',
  description: 'A modern, real-time one-to-one chat platform enabling users to connect seamlessly with features like message seen status, typing indicators, and friend requests.',
  longDescription: [
    'Developed one-to-one real-time chat functionality using Socket.io with seen and delivery status',
    'Built friend request and friend list management system with secure authentication',
    'Implemented typing indicators, online/offline status, and timestamped chat history',
    'Designed responsive UI with Tailwind CSS for seamless experience across devices'
  ],
  tech: ['React.js', 'Node.js', 'Socket.io', 'JWT Auth', 'Express.js', 'MongoDB',],
  color: 'neon-cyan',
  gradient: 'from-neon-cyan to-neon-purple',
  image: 'chat-right.avif', // Replace with actual image path or URL
  status: 'Live',
  team: 'Solo Project',
  duration: '1.5 months',
  link: 'https://chat-right.onrender.com/', // Replace with actual link
  featured: true
}
,
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
      image: 'Profile.jpg',
      status: 'Live',
      team: 'Solo project',
      duration: '1 month',
      link: 'https://piyush-barkhade.onrender.com/',
      featured: true
    }
    // Add more projects here
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-neon-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mb-6"></div>
          <p className="text-muted-foreground text-xl max-w-2xl mx-auto font-light">
            Showcasing my latest work and innovative solutions
          </p>
        </div>

        <div className="space-y-12">
          {projects.slice(0, visibleCount).map((project, index) => (
            <Card
              key={project.title}
              className={`glass glass-hover neon-glow border-2 border-white/10 hover:border-${project.color}/30 transition-all duration-500 overflow-hidden group animate-fade-in`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`grid ${project.featured ? 'lg:grid-cols-2' : 'lg:grid-cols-5'} gap-0`}>
                {/* Image */}
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

                {/* Content */}
                <div className={`${project.featured ? 'lg:col-span-1' : 'lg:col-span-3'} p-6 lg:p-8 flex flex-col justify-center`}>
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-1 h-6 bg-gradient-to-b ${project.gradient} rounded-full`}></div>
                      <CardTitle className={`text-2xl lg:text-3xl text-${project.color}`}>
                        {project.title}
                      </CardTitle>
                    </div>
                    <p className="text-lg text-muted-foreground font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Features */}
                    <div>
                      <h4 className="text-base font-semibold mb-3 text-foreground">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.longDescription.slice(0, 3).map((feature, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className={`text-${project.color} mt-1 text-xs`}>▸</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Details */}
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className={`text-${project.color}`} />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={14} className={`text-${project.color}`} />
                        <span>{project.team}</span>
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Tech Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.slice(0, 5).map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className={`bg-${project.color}/10 text-${project.color} border border-${project.color}/20 hover:bg-${project.color}/20 transition-colors text-xs`}
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Button */}
                    <div className="flex flex-wrap gap-3 pt-2">
                      <Button
                        asChild
                        size="sm"
                        className={`bg-gradient-to-r ${project.gradient} hover:shadow-lg hover:shadow-${project.color}/25 transition-all duration-300 group`}
                      >
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <ExternalLink size={16} />
                          Live Demo
                          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Toggle View More/Less */}
        {projects.length > 3 && (
          <div className="text-center mt-12">
            {visibleCount < projects.length ? (
              <Button
                onClick={() => setVisibleCount(projects.length)}
                variant="outline"
                size="lg"
                className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background glass backdrop-blur-sm text-lg px-8 py-4 group"
              >
                View More Projects
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : (
              <Button
                onClick={() => setVisibleCount(3)}
                variant="outline"
                size="lg"
                className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background glass backdrop-blur-sm text-lg px-8 py-4 group"
              >
                Show Less
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;

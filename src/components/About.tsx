
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Phone, Mail, Calendar, Award, Users } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '2+', icon: Calendar },
    { label: 'Projects Completed', value: '15+', icon: Award },
    { label: 'Happy Clients', value: '10+', icon: Users },
  ];

  const highlights = [
    'Full-Stack MERN Developer',
    'Google Cloud Certified',
    'UI/UX Design Enthusiast',
    'Problem Solving Expert'
  ];

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-purple/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-neon-blue/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mb-6"></div>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-light">
            Passionate about creating innovative digital solutions that make a difference
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Main About Content */}
          <div className="space-y-8 animate-slide-in-left">
            <Card className="glass glass-hover neon-glow border-2 border-white/10 hover:border-neon-purple/50 transition-all duration-500">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold mb-6 text-neon-purple flex items-center gap-3">
                  <div className="w-2 h-8 bg-gradient-to-b from-neon-purple to-neon-blue rounded-full"></div>
                  Professional Summary
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
                  <p>
                    I'm a passionate <strong className="text-foreground">Full-Stack Web Developer</strong> with expertise in modern web technologies. 
                    I specialize in building scalable, user-centric applications using the MERN stack, with a keen eye for clean code architecture and exceptional user experiences.
                  </p>
                  <p>
                    My journey in technology is driven by curiosity and innovation. I enjoy solving complex problems, 
                    learning cutting-edge technologies, and collaborating with teams to deliver impactful digital solutions.
                  </p>
                  <p>
                    Beyond coding, I'm passionate about <strong className="text-neon-cyan">creative design and visual storytelling</strong>, 
                    which helps me bridge the gap between technical functionality and aesthetic appeal in my projects.
                  </p>
                </div>

                {/* Highlights */}
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-4 text-neon-blue">Key Highlights</h4>
                  <div className="flex flex-wrap gap-3">
                    {highlights.map((highlight) => (
                      <Badge 
                        key={highlight} 
                        variant="secondary" 
                        className="bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 text-foreground border border-neon-purple/30 px-4 py-2 text-sm"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <Card 
                  key={stat.label} 
                  className="glass glass-hover text-center p-6 hover:scale-105 transition-all duration-300 border border-white/10"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <stat.icon size={32} className="text-neon-purple mx-auto mb-3" />
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Info & Details */}
          <div className="space-y-6 animate-slide-in-right">
            <div className="space-y-4">
              {[
                { icon: MapPin, label: 'Location', value: 'Ram Rahim Colony Rau, Indore, Madhya Pradesh', color: 'neon-blue' },
                { icon: Phone, label: 'Phone', value: '+91 8839991440', color: 'neon-cyan' },
                { icon: Mail, label: 'Email', value: 'piyushbarkhade.pb@gmail.com', color: 'neon-purple' },
              ].map((info, index) => (
                <Card 
                  key={info.label} 
                  className="glass glass-hover hover:scale-105 transition-all duration-300 border border-white/10 hover:border-neon-purple/30"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-xl glass border border-${info.color}/30 bg-${info.color}/10`}>
                        <info.icon size={24} className={`text-${info.color}`} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg mb-1">{info.label}</h4>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Additional Info Card */}
            <Card className="glass glass-hover neon-glow border-2 border-white/10 hover:border-neon-cyan/50 transition-all duration-500">
              <CardContent className="p-8">
                <h4 className="text-2xl font-semibold mb-4 text-neon-cyan flex items-center gap-3">
                  <div className="w-2 h-6 bg-gradient-to-b from-neon-cyan to-neon-purple rounded-full"></div>
                  What Drives Me
                </h4>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-start gap-3">
                    <span className="text-neon-purple mt-1">▸</span>
                    Building scalable web applications with modern technologies
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-neon-blue mt-1">▸</span>
                    Creating intuitive user experiences through thoughtful design
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-neon-cyan mt-1">▸</span>
                    Continuous learning and staying updated with tech trends
                  </p>
                  <p className="flex items-start gap-3">
                    <span className="text-neon-pink mt-1">▸</span>
                    Collaborating with teams to solve complex challenges
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

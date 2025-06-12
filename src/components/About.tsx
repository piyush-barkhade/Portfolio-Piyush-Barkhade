
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate about creating innovative digital solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <Card className="glass glass-hover neon-glow">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-neon-purple">
                  Summary
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a Full-Stack Web Developer who loves building clean, user-friendly web applications. 
                  I work with technologies like HTML, CSS, JavaScript, React, Node.js, and databases like 
                  MongoDB and MySQL. I enjoy problem-solving, learning new things, and collaborating with 
                  teams to create great digital experiences.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Outside of coding, I have a passion for creativity—whether it's design, art, or other 
                  creative projects which helps me bring a unique touch to my work.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="animate-slide-in-right">
            <div className="space-y-6">
              <div className="glass glass-hover p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-neon-blue">Location</h4>
                <p className="text-muted-foreground">Ram Rahim Colony Rau, Indore</p>
              </div>
              
              <div className="glass glass-hover p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-neon-cyan">Contact</h4>
                <p className="text-muted-foreground">+91 8839991440</p>
                <p className="text-muted-foreground">piyushbarkhade.pb@gmail.com</p>
              </div>
              
              <div className="glass glass-hover p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-2 text-neon-pink">Interests</h4>
                <p className="text-muted-foreground">
                  Web Development, Creative Design, Problem Solving, Technology Innovation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

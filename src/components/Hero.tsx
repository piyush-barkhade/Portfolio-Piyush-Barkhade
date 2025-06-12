
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Full Stack Developer', 'Web Developer', 'React Developer', 'Node.js Developer'];

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % words.length;
      const fullText = words[i];

      setText(
        isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 150);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
            alt="Piyush Barkhade"
            className="w-48 h-48 rounded-full mx-auto mb-8 border-4 border-neon-purple neon-glow animate-float"
          />
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-gradient">Piyush</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-muted-foreground mb-8 h-12">
            I'm a <span className="text-neon-purple font-mono typing-animation">{text}</span>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-slide-in-left">
            A passionate Full-Stack Developer who loves building clean, user-friendly web applications. 
            I work with modern technologies and enjoy problem-solving, learning new things, and 
            collaborating with teams to create great digital experiences.
          </p>
          
          <div className="flex justify-center space-x-4 mb-12 animate-slide-in-right">
            <Button 
              asChild
              className="bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-cyan transition-all duration-300 animate-glow"
            >
              <a href="#contact">Get In Touch</a>
            </Button>
            
            <Button 
              variant="outline" 
              asChild
              className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background glass"
            >
              <a href="#projects">View My Work</a>
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6 animate-scale-in">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-purple transition-colors duration-300 transform hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-neon-blue transition-colors duration-300 transform hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:piyushbarkhade.pb@gmail.com"
              className="text-muted-foreground hover:text-neon-cyan transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown size={24} className="text-neon-purple" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

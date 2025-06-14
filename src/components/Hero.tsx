
import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowDown, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const words = ['Full Stack Developer', 'React Specialist', 'Node.js Expert', 'MERN Stack Developer'];

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
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, words]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-purple/5 via-transparent to-neon-blue/5"></div>
      
      <div className="container mx-auto text-center relative z-10 max-w-7xl">
        <div className="animate-fade-in">
          {/* Profile Image with enhanced styling */}
          <div className="relative inline-block mt-16 sm:mt-20 mb-8 sm:mb-12">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan blur-lg opacity-70 animate-pulse-glow"></div>
            <img
              src="/Profile.jpg"
              alt="Piyush Barkhade"
              className="relative w-32 h-32 sm:w-48 sm:h-48 lg:w-56 lg:h-56 rounded-full mx-auto border-4 border-white/20 backdrop-blur-sm shadow-2xl animate-float"
            />
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 sm:border-4 border-background animate-pulse"></div>
          </div>
          
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight">
              <span className="text-gradient bg-gradient-to-r from-neon-purple via-neon-blue to-neon-cyan bg-clip-text text-transparent">
                Piyush Barkhade
              </span>
            </h1>
            
            <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground min-h-[2rem] sm:min-h-[3rem] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3">
              <span>A passionate</span>
              <span className="text-neon-purple font-mono font-semibold typing-animation min-w-[200px] sm:min-w-[300px] text-center sm:text-left">
                {text}
              </span>
            </div>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0">
              Crafting innovative digital solutions with modern web technologies. 
              Specialized in building scalable applications with clean architecture, 
              exceptional user experiences, and robust backend systems.
            </p>
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-12 sm:mb-16 px-4 sm:px-0">
            <Button 
              asChild
              size="lg"
              className="bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-cyan transition-all duration-500 animate-glow shadow-2xl text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto"
            >
              <a href="https://www.linkedin.com/in/piyush-barkhade-453a8b2b4/" className="flex items-center justify-center gap-2" target="_blank">
                <Mail size={18} />
                Let's Connect
                <ExternalLink size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              asChild
              className="border-2 border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-background glass backdrop-blur-sm shadow-lg text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group w-full sm:w-auto"
            >
              <a href="#projects" className="flex items-center justify-center gap-2">
                View Portfolio
                <ArrowDown size={14} className="group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            
            <a 
              href="/My_CV.pdf" 
              download="My_CV.pdf"
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto"
            >
              <Button 
                variant="secondary"
                size="lg"
                className="bg-white/10 text-foreground hover:bg-white/20 backdrop-blur-sm border border-white/20 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 group w-full"
              >
                <Download size={18} className="mr-2 group-hover:animate-bounce" />
                Download CV
              </Button>
            </a>
          </div>
          
          {/* Enhanced Social Links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 lg:space-x-8 mb-8 sm:mb-12">
            {[
              { icon: Github, href: 'https://github.com/piyush-barkhade', label: 'GitHub', color: 'neon-purple' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/piyush-barkhade-453a8b2b4/', label: 'LinkedIn', color: 'neon-blue' },
              { icon: Mail, href: 'https://mail.google.com/mail/?view=cm&to=piyushbarkhade.pb@gmail.com&su=Subject&body=Message', label: 'Email', color: 'neon-cyan' }
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group relative p-3 sm:p-4 glass rounded-full border border-${social.color}/30 hover:border-${social.color} transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-${social.color}/50`}
                aria-label={social.label}
              >
                <social.icon size={20} className={`sm:size-7 text-muted-foreground group-hover:text-${social.color} transition-colors duration-300`} />
                <div className={`absolute -top-12 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-${social.color} text-background text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap`}>
                  {social.label}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

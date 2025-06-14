
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Send, User, MessageCircle, Clock, CheckCircle, Target } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "Thank you for reaching out. I'll get back to you within 24 hours!",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Address',
      value: 'piyushbarkhade.pb@gmail.com',
      href: 'https://mail.google.com/mail/?view=cm&to=piyushbarkhade.pb@gmail.com&su=Subject&body=Message',
      color: 'neon-purple',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone Number',
      value: '+91 8839991440',
      href: 'tel:+918839991440',
      color: 'neon-blue',
      description: 'Available Mon-Fri, 9AM-6PM'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Ram Rahim Colony Rau, Indore',
      color: 'neon-cyan',
      description: 'Madhya Pradesh, India'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/piyush-barkhade',
      color: 'neon-purple',
      description: 'Check out my code'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/piyush-barkhade-453a8b2b4/',
      color: 'neon-blue',
      description: 'Connect professionally'
    }
  ];

  const quickInfo = [
    { icon: Clock, text: 'Usually responds within 24 hours' },
    { icon: CheckCircle, text: 'Available for freelance projects' },
    { icon: MessageCircle, text: 'Open to collaboration opportunities' }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Elements */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-16 sm:w-20 lg:w-24 h-1 bg-gradient-to-r from-neon-purple to-neon-blue mx-auto mb-4 sm:mb-6"></div>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-3xl mx-auto font-light px-4 sm:px-0">
            Ready to bring your ideas to life? Let's start a conversation and create something extraordinary together.
          </p>
        </div>

        <div className="flex items-center flex-col justify-center gap-16 sm:gap-20 lg:gap-28">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 w-full">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl sm:text-3xl font-bold text-neon-blue mb-6 sm:mb-8 flex items-center justify-center gap-3">
                <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-neon-blue to-neon-cyan rounded-full"></div>
                Contact Information
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-12">
                {contactInfo.map((info, index) => (
                  <Card 
                    key={info.title} 
                    className={`glass glass-hover hover:scale-105 transition-all duration-300 border-2 border-white/10 hover:border-${info.color}/30 group`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-4 sm:p-6">
                      <a 
                        href={info.href}
                        target="_blank"
                        className="flex flex-col items-center text-center gap-4 text-foreground group-hover:text-neon-purple transition-colors"
                      >
                        <div className={`p-3 sm:p-4 rounded-xl glass border border-${info.color}/30 bg-${info.color}/10 group-hover:bg-${info.color}/20 transition-all duration-300`}>
                          <info.icon size={24} className={`sm:size-7 text-${info.color}`} />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-base sm:text-lg mb-1">{info.title}</h4>
                          <p className="text-foreground font-semibold mb-1 text-sm sm:text-base break-words">{info.value}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{info.description}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          <div className="animate-fade-in w-full" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl sm:text-3xl font-bold text-neon-cyan mb-6 sm:mb-8 flex items-center justify-center gap-3">
              <div className="w-2 h-6 sm:h-8 bg-gradient-to-b from-neon-cyan to-neon-pink rounded-full"></div>
              Social Connections
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mt-8 sm:mt-12 max-w-2xl mx-auto">
              {socialLinks.map((social) => (
                <Card
                  key={social.name}
                  className={`glass glass-hover hover:scale-105 transition-all duration-300 border-2 border-white/10 hover:border-${social.color}/30 group cursor-pointer`}
                >
                  <CardContent className="p-4 sm:p-6 text-center">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <div className={`p-3 sm:p-4 rounded-xl glass border border-${social.color}/30 bg-${social.color}/10 group-hover:bg-${social.color}/20 transition-all duration-300 mx-auto w-fit mb-3`}>
                        <social.icon size={24} className={`sm:size-7 text-${social.color} group-hover:animate-pulse`} />
                      </div>
                      <h4 className="font-bold text-base sm:text-lg mb-1">{social.name}</h4>
                      <p className="text-xs sm:text-sm text-muted-foreground">{social.description}</p>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 sm:mt-16 lg:mt-20 pt-6 sm:pt-8 border-t border-white/10">
          <p className="text-muted-foreground text-base sm:text-lg">
            © 2025 Piyush Barkhade | All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

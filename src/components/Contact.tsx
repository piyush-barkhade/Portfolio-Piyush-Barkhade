
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon!",
    });
    
    setFormData({ name: '', email: '', message: '' });
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
      title: 'Email',
      value: 'piyushbarkhade.pb@gmail.com',
      href: 'mailto:piyushbarkhade.pb@gmail.com',
      color: 'neon-purple'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 8839991440',
      href: 'tel:+918839991440',
      color: 'neon-blue'
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Ram Rahim Colony Rau, Indore',
      href: '#',
      color: 'neon-cyan'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com',
      color: 'neon-purple'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'neon-blue'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's connect and create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass glass-hover neon-glow animate-fade-in">
            <CardHeader>
              <CardTitle className="text-2xl text-neon-purple">
                Send Me a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass border-white/20 focus:border-neon-purple"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass border-white/20 focus:border-neon-blue"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="glass border-white/20 focus:border-neon-cyan"
                  />
                </div>
                
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-neon-purple to-neon-blue hover:from-neon-blue hover:to-neon-cyan transition-all duration-300 animate-glow"
                >
                  <Mail size={18} className="mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="text-2xl font-bold text-neon-blue mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <Card key={info.title} className="glass glass-hover hover:scale-105 transition-all duration-300">
                    <CardContent className="p-4">
                      <a 
                        href={info.href}
                        className="flex items-center gap-4 text-foreground hover:text-neon-purple transition-colors"
                      >
                        <div className={`p-3 rounded-lg glass border border-${info.color}/30`}>
                          <info.icon size={20} className={`text-${info.color}`} />
                        </div>
                        <div>
                          <h4 className="font-semibold">{info.title}</h4>
                          <p className="text-muted-foreground">{info.value}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="text-2xl font-bold text-neon-cyan mb-6">
                Connect With Me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 glass glass-hover rounded-lg border border-${social.color}/30 hover:border-${social.color} transition-all duration-300 hover:scale-110 group`}
                  >
                    <social.icon size={24} className={`text-${social.color} group-hover:animate-pulse`} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-white/10">
          <p className="text-muted-foreground">
            © 2025 Piyush Barkhade. Built with React & TypeScript.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { Linkedin, Mail, Phone, Github, Instagram, MessageCircle } from 'lucide-react';

const SocialSidebar = () => {
  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/arponsaha/',
      label: 'LinkedIn',
      color: 'hover:bg-[#0077B5]',
    },
    {
      icon: Mail,
      href: 'mailto:arponbutextem65@gmail.com',
      label: 'Email',
      color: 'hover:bg-[#EA4335]',
    },
    {
      icon: Phone,
      href: 'tel:+8801789849716',
      label: 'Phone',
      color: 'hover:bg-[#25D366]',
    },
  ];

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4 animate-fade-in">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target={link.href.startsWith('http') ? '_blank' : undefined}
          rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className={`p-3 bg-card border border-border rounded-full ${link.color} text-foreground hover:text-white transition-all duration-300 hover:scale-110 shadow-lg`}
          aria-label={link.label}
        >
          <link.icon size={20} />
        </a>
      ))}
    </div>
  );
};

export default SocialSidebar;

import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  Search, 
  MapPin, 
  Building2, 
  User, 
  FileText, 
  CheckCircle, 
  Clock, 
  Globe, 
  Mail,
  ChevronRight,
  Menu,
  X,
  Download
} from 'lucide-react';

// --- Data ---

const colorPalettes = [
  {
    title: 'Brand Colors',
    description: 'The core colors that represent the onlejobs brand identity.',
    colors: [
      { name: 'Primary', hex: '#0056B3', class: 'bg-brand-primary', text: 'text-white' },
      { name: 'Secondary', hex: '#353636', class: 'bg-brand-secondary', text: 'text-white' },
    ]
  },
  {
    title: 'State Colors',
    description: 'Used for system feedback, alerts, and statuses.',
    colors: [
      { name: 'Info', hex: '#2F80ED', class: 'bg-state-info', text: 'text-white' },
      { name: 'Success', hex: '#27AE60', class: 'bg-state-success', text: 'text-white' },
      { name: 'Warning', hex: '#E2B93B', class: 'bg-state-warning', text: 'text-white' },
      { name: 'Error', hex: '#EB5757', class: 'bg-state-error', text: 'text-white' },
    ]
  },
  {
    title: 'Black Colors',
    description: 'Primary text and high-contrast structural elements.',
    colors: [
      { name: 'Black 1', hex: '#000000', class: 'bg-black-1', text: 'text-white' },
      { name: 'Black 2', hex: '#1D1D1D', class: 'bg-black-2', text: 'text-white' },
      { name: 'Black 3', hex: '#282828', class: 'bg-black-3', text: 'text-white' },
      { name: 'White', hex: '#FFFFFF', class: 'bg-white', text: 'text-black-1', border: true },
    ]
  },
  {
    title: 'Grey Colors',
    description: 'Secondary text, borders, backgrounds, and disabled states.',
    colors: [
      { name: 'Gray 1', hex: '#333333', class: 'bg-gray-1', text: 'text-white' },
      { name: 'Gray 2', hex: '#4F4F4F', class: 'bg-gray-2', text: 'text-white' },
      { name: 'Gray 3', hex: '#828282', class: 'bg-gray-3', text: 'text-white' },
      { name: 'Gray 4', hex: '#BDBDBD', class: 'bg-gray-4', text: 'text-black-1' },
      { name: 'Gray 5', hex: '#E0E0E0', class: 'bg-gray-5', text: 'text-black-1' },
    ]
  }
];

const typographyHeadings = [
  { name: 'Heading 1', size: '56 px', height: '61.6 px', class: 'text-[56px] leading-[61.6px]' },
  { name: 'Heading 2', size: '48 px', height: '52.8 px', class: 'text-[48px] leading-[52.8px]' },
  { name: 'Heading 3', size: '40 px', height: '44 px', class: 'text-[40px] leading-[44px]' },
  { name: 'Heading 4', size: '32 px', height: '35.2 px', class: 'text-[32px] leading-[35.2px]' },
  { name: 'Heading 5', size: '24 px', height: '26.4 px', class: 'text-[24px] leading-[26.4px]' },
  { name: 'Heading 6', size: '20 px', height: '22 px', class: 'text-[20px] leading-[22px]' },
];

const typographyBody = [
  { name: 'Large Text Bold', weight: 'Bold', size: '20 px', height: '28 px', class: 'text-[20px] leading-[28px] font-bold' },
  { name: 'Large Text Regular', weight: 'Regular', size: '20 px', height: '28 px', class: 'text-[20px] leading-[28px] font-normal' },
  { name: 'Medium Text Bold', weight: 'Bold', size: '18 px', height: '25.2 px', class: 'text-[18px] leading-[25.2px] font-bold' },
  { name: 'Medium Text Regular', weight: 'Regular', size: '18 px', height: '25.2 px', class: 'text-[18px] leading-[25.2px] font-normal' },
  { name: 'Normal Text Bold', weight: 'Bold', size: '16 px', height: '22.4 px', class: 'text-[16px] leading-[22.4px] font-bold' },
  { name: 'Normal Text Regular', weight: 'Regular', size: '16 px', height: '22.4 px', class: 'text-[16px] leading-[22.4px] font-normal' },
];

const sections = [
  { id: 'cover', title: 'Cover' },
  { id: 'overview', title: '1 Brand Overview' },
  { id: 'logo', title: '2 Logo' },
  { id: 'colors', title: '3 Colors' },
  { id: 'typography', title: '4 Typography' },
  { id: 'iconography', title: '5 Iconography' },
  { id: 'illustration', title: '6 Illustration' },
  { id: 'photography', title: '7 Photography' },
  { id: 'components', title: '8 UI & Layout' },
];

// --- Components ---

const FadeIn: React.FC<{ children: React.ReactNode, delay?: number }> = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
  >
    {children}
  </motion.div>
);

const SectionHeading = ({ number, title }: { number: string, title: string }) => (
  <div className="mb-16 border-b border-gray-5 pb-8 flex items-baseline gap-6">
    <span className="font-serif text-[72px] md:text-[96px] text-brand-primary leading-none font-bold tracking-tighter">
      {number}
    </span>
    <h2 className="font-serif text-4xl md:text-5xl text-brand-secondary font-bold">
      {title}
    </h2>
  </div>
);

export default function App() {
  const [activeSection, setActiveSection] = useState('cover');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const pageYOffset = window.scrollY;
      let newActiveSection = sections[0].id;

      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const offsetTop = element.offsetTop;
          // Trigger slightly before the section hits the top
          if (pageYOffset >= offsetTop - 200) {
            newActiveSection = section.id;
          }
        }
      });

      setActiveSection(newActiveSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Mobile Navigation Toggle */}
      <button 
        className="print:hidden lg:hidden fixed top-6 right-6 z-50 p-3 bg-brand-primary text-white rounded-full shadow-lg"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
      >
        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <nav className={`
        print:hidden fixed inset-y-0 left-0 z-40 w-72 bg-[#F8F9FA] border-r border-gray-5 transform transition-transform duration-300 ease-in-out lg:translate-x-0
        ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="p-10 h-full flex flex-col">
          <div className="mb-12 shrink-0">
            <img src="https://onlejobs.com/static/public/logo.png" alt="onlejobs logo" className="h-10 w-auto object-contain" />
            <p className="text-xs text-gray-2 mt-4 uppercase tracking-widest font-bold">Brand Manual</p>
          </div>
          
          <ul className="space-y-6 flex-1 overflow-y-auto mb-8 pr-2">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => scrollTo(section.id)}
                  className={`text-left w-full transition-colors flex items-center gap-3 ${
                    activeSection === section.id 
                      ? 'text-brand-primary font-bold' 
                      : 'text-gray-2 hover:text-brand-primary font-medium'
                  }`}
                >
                  {activeSection === section.id && <ChevronRight size={16} className="text-brand-primary shrink-0" />}
                  <span className={activeSection === section.id ? '' : 'pl-7'}>{section.title}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="text-xs text-gray-2 mt-auto font-medium shrink-0">
            © 2026 onlejobs.com<br/>
            Visual Identity Guidelines
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 lg:ml-72 print:ml-0 print:w-full">
        
        {/* Cover Section */}
        <section id="cover" className="min-h-screen flex items-center justify-center p-8 md:p-24 bg-brand-primary text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
          <div className="max-w-4xl w-full z-10">
            <FadeIn>
              <p className="uppercase tracking-[0.2em] font-bold text-white/90 mb-6">Official Guidelines</p>
              <h1 className="font-serif text-6xl md:text-[100px] leading-[1.1] font-bold mb-8 text-white">
                Visual Identity <br/><span className="text-blue-100">System.</span>
              </h1>
              <div className="h-1 w-24 bg-white mb-12"></div>
              <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl leading-relaxed">
                A comprehensive guide to the onlejobs brand, establishing a foundation for a strong and consistent visual presence.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Brand Overview */}
        <section id="overview" className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto">
          <SectionHeading number="1" title="Brand Overview" />
          
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 mt-16">
            <FadeIn delay={0.1}>
              <h3 className="font-serif text-3xl font-bold text-brand-primary mb-6">Tone of Voice</h3>
              <p className="text-lg leading-relaxed text-gray-1 mb-6">
                Welcome to the onlejobs Brand Guidelines. Here, you'll discover the essence of our brand and the tools to maintain a consistent and vibrant presence.
              </p>
              <p className="text-lg leading-relaxed text-gray-1 mb-8">
                Our voice is <strong>Professional, Reliable, Approachable, and Straightforward</strong>. We are dedicated to connecting talent with opportunity seamlessly. We speak with clarity to instill confidence in both job seekers and employers.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-2 bg-brand-primary rounded-full"></div>
                  <span className="font-bold w-24">Professional</span>
                  <div className="flex-1 h-[1px] bg-gray-5"></div>
                  <span className="text-gray-2">Not stuffy</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-2 bg-state-info rounded-full"></div>
                  <span className="font-bold w-24">Reliable</span>
                  <div className="flex-1 h-[1px] bg-gray-5"></div>
                  <span className="text-gray-2">Consistent</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-2 bg-state-success rounded-full"></div>
                  <span className="font-bold w-24">Approachable</span>
                  <div className="flex-1 h-[1px] bg-gray-5"></div>
                  <span className="text-gray-2">Not casual</span>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="bg-brand-secondary p-12 rounded-3xl text-white h-full flex flex-col justify-center">
                <h3 className="font-serif text-3xl font-bold mb-6 text-white">Our Mission</h3>
                <p className="text-xl font-light leading-relaxed mb-8">
                  "To be the most trusted platform bridging the gap between exceptional talent and forward-thinking companies."
                </p>
                <div className="grid grid-cols-2 gap-8 mt-auto pt-8 border-t border-gray-1">
                  <div>
                    <h4 className="font-bold text-white mb-2">Vision</h4>
                    <p className="text-sm text-gray-4">Empowering careers globally.</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-2">Values</h4>
                    <p className="text-sm text-gray-4">Trust, Clarity, Innovation.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Logo Section */}
                {/* Logo Section */}
        <section id="logo" className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto bg-gray-5/30">
          <SectionHeading number="2" title="Logo Usage" />
          
          <div className="mt-16 space-y-24">
            {/* Primary Logo */}
            <div>
              <FadeIn>
                <div className="group relative bg-white border border-gray-5 p-16 md:p-32 rounded-3xl flex items-center justify-center shadow-sm mb-6 overflow-hidden">
                  <img src="https://onlejobs.com/static/public/logo.png" alt="onlejobs Primary Logo" className="h-16 md:h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                  <a href="https://onlejobs.com/static/public/logo.png" download="onlejobs_logo.png" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                    <div className="bg-white text-brand-primary font-bold py-3 px-6 rounded-full shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                      <Download size={20} />
                      Download Logo
                    </div>
                  </a>
                </div>
                <p className="text-gray-2 text-center max-w-2xl mx-auto mb-12">
                  Our primary logo. It should be used on light backgrounds with ample clear space to ensure maximum legibility and impact.
                </p>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-8">
                <FadeIn delay={0.1}>
                  <div className="group relative bg-brand-secondary p-16 rounded-3xl flex items-center justify-center h-64 mb-4 overflow-hidden">
                    <img src="/White_logo.png" alt="onlejobs White Logo on Secondary" className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    <a href="/White_logo.png" download="onlejobs_logo_white.png" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white text-brand-secondary font-bold py-2 px-5 rounded-full shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <Download size={18} />
                        Download Logo
                      </div>
                    </a>
                  </div>
                  <p className="text-sm text-gray-2 text-center">Reversed out on secondary brand color.</p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="group relative bg-brand-primary p-16 rounded-3xl flex items-center justify-center h-64 mb-4 overflow-hidden">
                    <img src="/White_logo.png" alt="onlejobs White Logo on Primary" className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105" />
                    <a href="/White_logo.png" download="onlejobs_logo_white.png" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                      <div className="bg-white text-brand-primary font-bold py-2 px-5 rounded-full shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                        <Download size={18} />
                        Download Logo
                      </div>
                    </a>
                  </div>
                  <p className="text-sm text-gray-2 text-center">Reversed out on primary brand color.</p>
                </FadeIn>
              </div>
            </div>

            {/* Icon Marks */}
            <div className="pt-16 border-t border-gray-5">
              <FadeIn>
                <h3 className="font-serif text-3xl font-bold text-brand-secondary mb-6 text-center">Icon Mark</h3>
                <p className="text-gray-2 text-center max-w-2xl mx-auto mb-12">
                  Our icon mark is a simplified version of the logo used for avatars, favicons, and situations where space is limited.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                  <div className="flex flex-col items-center">
                    <div className="group relative w-full aspect-square bg-white border border-gray-5 rounded-3xl flex items-center justify-center p-16 shadow-sm mb-4 overflow-hidden">
                      {/* Using the favicon as a placeholder if the uploaded files are missing, but linking to the uploaded names as the preferred source */}
                      <img 
                        src="/Logo Type1.png" 
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://onlejobs.com/static/public/favicon.ico';
                          e.currentTarget.className = 'w-32 h-32 md:w-48 md:h-48 object-contain transition-transform duration-300 group-hover:scale-105';
                        }}
                        alt="Logo Type 1" 
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" 
                      />
                      <a href="/Logo Type1.png" download="onlejobs_icon_primary.png" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <div className="bg-white text-brand-primary font-bold py-2 px-4 rounded-full shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-sm">
                          <Download size={16} />
                          Download
                        </div>
                      </a>
                    </div>
                    <p className="font-bold text-brand-secondary">Primary Icon</p>
                    <p className="text-sm text-gray-2 text-center mt-1">For use on light backgrounds.</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="group relative w-full aspect-square bg-brand-primary border border-brand-primary rounded-3xl flex items-center justify-center p-16 shadow-sm mb-4 overflow-hidden">
                      <img 
                        src="/Logo Type2.png" 
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://onlejobs.com/static/public/favicon.ico';
                          e.currentTarget.className = 'w-32 h-32 md:w-48 md:h-48 object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105';
                        }}
                        alt="Logo Type 2" 
                        className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" 
                      />
                      <a href="/Logo Type2.png" download="onlejobs_icon_reversed.png" target="_blank" rel="noopener noreferrer" className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
                        <div className="bg-white text-brand-primary font-bold py-2 px-4 rounded-full shadow-lg flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 text-sm">
                          <Download size={16} />
                          Download
                        </div>
                      </a>
                    </div>
                    <p className="font-bold text-brand-secondary">Reversed Icon</p>
                    <p className="text-sm text-gray-2 text-center mt-1">For use on primary brand color or dark backgrounds.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Colors Section */}
        <section id="colors" className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto">
          <SectionHeading number="3" title="Colors" />
          
          <div className="space-y-24 mt-16">
            {colorPalettes.map((palette, pIndex) => (
              <FadeIn key={palette.title} delay={pIndex * 0.1}>
                <div className="grid md:grid-cols-[1fr_3fr] gap-8 md:gap-16 items-start">
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-brand-secondary mb-4">{palette.title}</h3>
                    <p className="text-gray-2 text-sm leading-relaxed">{palette.description}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {palette.colors.map((color) => (
                      <div key={color.name} className="group">
                        <div 
                          className={`w-full aspect-square rounded-2xl mb-4 shadow-sm transition-transform duration-300 group-hover:-translate-y-2 ${color.class} ${color.border ? 'border border-gray-5' : ''}`}
                        ></div>
                        <div className="px-1">
                          <p className="font-bold text-sm text-brand-secondary mb-1">{color.name}</p>
                          <p className="text-xs text-gray-2 uppercase tracking-wider">{color.hex}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* Typography Section */}
        <section id="typography" className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto bg-white text-brand-secondary border-t border-gray-5">
          <SectionHeading number="4" title="Typography" />
          
          <div className="space-y-32 mt-16">
            {/* Merriweather */}
            <FadeIn>
              <div className="grid lg:grid-cols-[1fr_2fr] gap-16 relative">
                <div className="sticky top-24 self-start">
                  <div className="font-serif text-[180px] leading-none text-brand-primary font-bold opacity-[0.03] absolute -top-16 -left-8 text-brand-primary select-none">Aa</div>
                  <div className="relative z-10">
                    <h3 className="font-serif text-5xl font-bold text-brand-primary mb-2">Merriweather</h3>
                    <p className="text-gray-2 text-sm mb-6 font-semibold uppercase tracking-widest">Main Headers | Sub Headers</p>
                    <p className="text-gray-2 max-w-sm leading-relaxed">
                      Our primary display typeface. Used for all major headings to convey authority, trust, and a refined editorial quality.
                    </p>
                  </div>
                </div>
                
                <div className="w-full">
                  <div className="grid grid-cols-[3fr_1fr_1fr] text-xs text-gray-2 font-bold border-b border-gray-5 pb-4 mb-8 uppercase tracking-widest">
                    <span>Name</span>
                    <span className="hidden sm:block">Font size</span>
                    <span className="hidden sm:block">Line Height</span>
                  </div>
                  
                  <div className="space-y-8">
                    {typographyHeadings.map((type) => (
                      <div key={type.name} className="grid sm:grid-cols-[3fr_1fr_1fr] items-baseline gap-4 group">
                        <div className={`font-serif text-brand-primary font-bold ${type.class}`}>
                          {type.name}
                        </div>
                        <div className="text-sm text-gray-2 font-medium hidden sm:block transition-colors">{type.size}</div>
                        <div className="text-sm text-gray-2 font-medium hidden sm:block transition-colors">{type.height}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Montserrat */}
            <FadeIn>
              <div className="grid lg:grid-cols-[1fr_2fr] gap-16 relative">
                <div className="sticky top-24 self-start">
                  <div className="font-sans text-[180px] leading-none text-brand-secondary font-bold opacity-[0.03] absolute -top-16 -left-8 select-none">Aa</div>
                  <div className="relative z-10">
                    <h3 className="font-sans text-5xl font-bold text-brand-secondary mb-2 tracking-tight">Montserrat</h3>
                    <p className="text-gray-2 text-sm mb-6 font-semibold uppercase tracking-widest">Body | Link | Paragraphs</p>
                    <p className="text-gray-2 max-w-sm leading-relaxed">
                      Our secondary typeface. Highly legible and geometric, it pairs perfectly with Merriweather for long-form reading and UI elements.
                    </p>
                  </div>
                </div>
                
                <div className="w-full">
                  <div className="grid grid-cols-[3fr_1fr_1fr] text-xs text-gray-2 font-bold border-b border-gray-5 pb-4 mb-8 uppercase tracking-widest">
                    <span>Name</span>
                    <span className="hidden sm:block">Font size</span>
                    <span className="hidden sm:block">Line Height</span>
                  </div>
                  
                  <div className="space-y-10">
                    {/* Bold group */}
                    <div className="space-y-6 border-l-2 border-brand-primary pl-6">
                      {typographyBody.filter(t => t.weight === 'Bold').map((type) => (
                        <div key={type.name} className="grid sm:grid-cols-[3fr_1fr_1fr] items-baseline gap-4 group">
                          <div>
                            <div className={`text-brand-primary ${type.class}`}>{type.name}</div>
                            <div className="text-xs text-gray-2 mt-1 hidden sm:block font-medium">Montserrat {type.weight}</div>
                          </div>
                          <div className="text-sm text-gray-2 font-medium hidden sm:block transition-colors">{type.size}</div>
                          <div className="text-sm text-gray-2 font-medium hidden sm:block transition-colors">{type.height}</div>
                        </div>
                      ))}
                    </div>
                    {/* Regular group */}
                    <div className="space-y-6 border-l-2 border-gray-5 pl-6">
                      {typographyBody.filter(t => t.weight === 'Regular').map((type) => (
                        <div key={type.name} className="grid sm:grid-cols-[3fr_1fr_1fr] items-baseline gap-4 group">
                          <div>
                            <div className={`text-brand-secondary ${type.class}`}>{type.name}</div>
                            <div className="text-xs text-gray-2 mt-1 hidden sm:block font-medium">Montserrat {type.weight}</div>
                          </div>
                          <div className="text-sm text-gray-2 font-medium hidden sm:block transition-colors">{type.size}</div>
                          <div className="text-sm text-gray-2 font-medium hidden sm:block transition-colors">{type.height}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Iconography Section */}
        <section id="iconography" className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto">
          <SectionHeading number="5" title="Iconography" />
          
          <div className="mt-16">
            <FadeIn>
              <div className="flex flex-col md:flex-row gap-12 items-start mb-24">
                <div className="w-48 h-48 bg-gray-5/30 rounded-3xl flex items-center justify-center relative border border-gray-5">
                  {/* Grid visualizer */}
                  <div className="absolute inset-0 grid grid-cols-2 grid-rows-2 opacity-10 pointer-events-none">
                    <div className="border-r border-b border-brand-primary"></div>
                    <div className="border-b border-brand-primary"></div>
                    <div className="border-r border-brand-primary"></div>
                    <div></div>
                  </div>
                  {/* Safe area visualizer */}
                  <div className="absolute inset-4 border border-state-info opacity-30 border-dashed rounded-full pointer-events-none"></div>
                  <Clock size={80} strokeWidth={1.5} className="text-brand-secondary" />
                </div>
                
                <div className="flex-1">
                  <h3 className="font-serif text-2xl font-bold text-brand-secondary mb-6">Rules & Construction</h3>
                  <p className="text-gray-2 mb-8 max-w-xl leading-relaxed">
                    Icons are constructed on a 24px grid with a 2px safe area. They should use a consistent 1.5px to 2px stroke width to match the weight of the Montserrat typography.
                  </p>
                  
                  <div className="space-y-4 max-w-sm">
                    <div className="flex justify-between items-center py-2 border-b border-gray-5">
                      <span className="text-sm text-gray-2">1. Live area</span>
                      <span className="font-bold text-brand-primary">20 px</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-5">
                      <span className="text-sm text-gray-2">2. Safe area</span>
                      <span className="font-bold text-brand-primary">2 px</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-5">
                      <span className="text-sm text-gray-2">3. Full size</span>
                      <span className="font-bold text-brand-primary">24 px</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-white border border-gray-5 rounded-3xl p-12 shadow-sm">
                <h3 className="font-serif text-xl font-bold text-brand-secondary mb-8">Icon sets (Outline)</h3>
                <div className="flex flex-wrap gap-8 text-brand-primary">
                  <Clock size={28} strokeWidth={1.5} />
                  <FileText size={28} strokeWidth={1.5} />
                  <Search size={28} strokeWidth={1.5} />
                  <MapPin size={28} strokeWidth={1.5} />
                  <Building2 size={28} strokeWidth={1.5} />
                  <User size={28} strokeWidth={1.5} />
                  <CheckCircle size={28} strokeWidth={1.5} />
                  <Globe size={28} strokeWidth={1.5} />
                  <Mail size={28} strokeWidth={1.5} />
                  <Briefcase size={28} strokeWidth={1.5} />
                </div>

                <h3 className="font-serif text-xl font-bold text-brand-secondary mt-16 mb-8">Icon sets (Fill Equivalent)</h3>
                <div className="flex flex-wrap gap-8 text-brand-primary">
                  <Clock size={28} className="fill-brand-primary text-white" />
                  <FileText size={28} className="fill-brand-primary text-white" />
                  <Search size={28} strokeWidth={3} />
                  <MapPin size={28} className="fill-brand-primary text-white" />
                  <Building2 size={28} className="fill-brand-primary text-white" />
                  <User size={28} className="fill-brand-primary text-white" />
                  <CheckCircle size={28} className="fill-brand-primary text-white" />
                  <Globe size={28} strokeWidth={2.5} />
                  <Mail size={28} className="fill-brand-primary text-white" />
                  <Briefcase size={28} className="fill-brand-primary text-white" />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Illustration Section */}
        <section id="illustration" className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto bg-white border-t border-gray-5">
          <SectionHeading number="6" title="Illustration" />
          
          <div className="mt-16">
            <FadeIn>
              <div>
                <div className="max-w-3xl mb-12">
                  <h3 className="font-serif text-3xl font-bold text-brand-secondary mb-6">Illustration Style</h3>
                  <p className="text-gray-2 mb-6 leading-relaxed">
                    Our illustrations bring complex ideas to life in a friendly, approachable way. We use a flat, modern style from <strong className="text-brand-secondary">unDraw</strong> that is clean and uncluttered.
                  </p>
                  <p className="text-gray-2 mb-8 leading-relaxed">
                    The primary color used for accents and key elements in our illustrations must always be our brand primary blue (<span className="font-mono bg-gray-5/50 px-2 py-1 rounded text-sm font-bold text-brand-primary">#0056B3</span>). This creates a cohesive visual thread across all our communications.
                  </p>
                  <a 
                    href="https://undraw.co/illustrations" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full hover:bg-brand-primary/90 transition-colors font-bold"
                  >
                    Get Illustrations
                    <ChevronRight size={18} />
                  </a>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                  <div className="flex items-center justify-center relative overflow-hidden group aspect-[4/3]">
                    <img src="/undraw_portfolio_btd8.svg" alt="Portfolio Illustration" className="w-full h-auto drop-shadow-sm transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-center relative overflow-hidden group aspect-[4/3]">
                    <img src="/undraw_screening-resumes_dh9s.svg" alt="Screening Resumes Illustration" className="w-full h-auto drop-shadow-sm transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>
              </div>
            </FadeIn>

          </div>
        </section>

        {/* Photography Section */}
        <section id="photography" className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto bg-white border-t border-gray-5">
          <SectionHeading number="7" title="Photography" />
          
          <div className="mt-16">
            <FadeIn delay={0.1}>
              <div>
                <p className="text-gray-2 max-w-3xl mb-12 leading-relaxed">
                  Our photography should feel authentic, professional, and diverse. It should capture the essence of a modern, forward-thinking workplace where talent thrives.
                </p>
                
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="group">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative shadow-sm">
                      <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Team collaborating" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <h4 className="font-bold text-brand-secondary text-lg mb-1">Authentic Collaboration</h4>
                    <p className="text-sm text-gray-2 leading-relaxed">Show real people working together. Avoid overly staged or stock-looking photos.</p>
                  </div>
                  
                  <div className="group">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative shadow-sm">
                      <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Professional environment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <h4 className="font-bold text-brand-secondary text-lg mb-1">Modern Environments</h4>
                    <p className="text-sm text-gray-2 leading-relaxed">Use bright, well-lit spaces that feel modern, clean, and inspiring.</p>
                  </div>
                  
                  <div className="group">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-4 relative shadow-sm">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Diverse workforce" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                      <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                    <h4 className="font-bold text-brand-secondary text-lg mb-1">Diverse & Inclusive</h4>
                    <p className="text-sm text-gray-2 leading-relaxed">Reflect a global workforce with diverse talent and representation.</p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* UI & Layout System */}
        <section id="components" className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto bg-gray-5/20 border-t border-gray-5">
          <SectionHeading number="8" title="UI & Layout System" />
          
          <div className="mt-16 space-y-24">
            
            {/* Layout Fundamentals */}
            <FadeIn>
              <div>
                <h3 className="font-serif text-3xl font-bold text-brand-secondary mb-12">Layout Fundamentals</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-gray-5 shadow-sm">
                    <h4 className="font-bold text-brand-primary text-xl mb-4">Grid System</h4>
                    <p className="text-gray-2 text-sm leading-relaxed mb-6">We use a responsive 12-column grid. Max width is capped at 1200px (max-w-6xl) to ensure readability on ultra-wide screens.</p>
                    <div className="grid grid-cols-12 gap-2 h-16">
                      {[...Array(12)].map((_, i) => (
                        <div key={i} className="bg-brand-primary/10 rounded-sm w-full h-full"></div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-gray-5 shadow-sm">
                    <h4 className="font-bold text-brand-primary text-xl mb-4">Spacing Rules</h4>
                    <p className="text-gray-2 text-sm leading-relaxed mb-6">Our spacing is based on a 4px/8px mathematical scale. We prefer generous white space (padding of 16px, 24px, 32px, 64px, etc.) to group related items.</p>
                    <div className="flex items-end gap-2 h-16">
                      <div className="w-8 bg-brand-secondary/10 h-4 rounded flex items-center justify-center text-[10px] text-brand-secondary">4</div>
                      <div className="w-8 bg-brand-secondary/20 h-8 rounded flex items-center justify-center text-[10px] text-brand-secondary">8</div>
                      <div className="w-8 bg-brand-secondary/30 h-12 rounded flex items-center justify-center text-[10px] text-brand-secondary">16</div>
                      <div className="w-8 bg-brand-secondary/40 h-full rounded flex items-center justify-center text-[10px] text-brand-secondary font-bold">24</div>
                    </div>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-gray-5 shadow-sm">
                    <h4 className="font-bold text-brand-primary text-xl mb-4">Alignment</h4>
                    <p className="text-gray-2 text-sm leading-relaxed">Content is predominantly left-aligned for optimal readability. Center alignment is reserved for short structural elements like headings or isolated stats.</p>
                    <div className="mt-6 space-y-2 border-l-2 border-brand-primary pl-4">
                      <div className="h-2 bg-gray-4 rounded w-3/4"></div>
                      <div className="h-2 bg-gray-4 rounded w-full"></div>
                      <div className="h-2 bg-gray-4 rounded w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Containers & Cards */}
            <FadeIn delay={0.1}>
              <div className="pt-16 border-t border-gray-5">
                <h3 className="font-serif text-3xl font-bold text-brand-secondary mb-12">Containers & Cards</h3>
                <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
                  <div>
                    <p className="text-gray-2 leading-relaxed mb-6">
                      Containers define the spatial hierarchy. We use subtle borders and mathematically calculated radii.
                    </p>
                    <ul className="space-y-4 text-sm text-gray-2">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold">1</div>
                        <span><strong>Cards:</strong> White background, 1px gray-5 border, and minimal shadow.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold">2</div>
                        <span><strong>Border Radius:</strong> 24px (3xl) for large sections, 16px (2xl) for cards, 8px (md) for small elements.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded bg-brand-primary/10 text-brand-primary flex items-center justify-center font-bold">3</div>
                        <span><strong>Shadows:</strong> Flat aesthetic. Shadows are light, diffuse, and used only to separate overlapping layers (sm to md).</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gray-5/40 p-8 md:p-12 rounded-[32px] flex flex-col md:flex-row gap-8 items-center justify-center border border-gray-4 border-dashed">
                    <div className="bg-white p-8 rounded-3xl border border-gray-5 shadow-sm w-full max-w-sm transition-transform hover:-translate-y-1">
                      <div className="w-12 h-12 bg-brand-secondary/10 rounded-2xl mb-6 flex items-center justify-center">
                        <div className="w-6 h-6 bg-brand-secondary rounded-lg"></div>
                      </div>
                      <h4 className="font-bold text-brand-secondary text-lg mb-2">Standard Card</h4>
                      <p className="text-sm text-gray-2 mb-6">White background, subtle border, rounded-3xl (24px radius), and shadow-sm.</p>
                      <div className="h-10 bg-gray-5 rounded-xl w-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Interactive Elements */}
            <FadeIn delay={0.2}>
              <div className="pt-16 border-t border-gray-5">
                <h3 className="font-serif text-3xl font-bold text-brand-secondary mb-12">Interactive Elements</h3>
                
                <div className="bg-white p-12 rounded-3xl border border-gray-5 shadow-sm">
                  <div className="grid md:grid-cols-2 gap-16">
                    <div>
                      <h4 className="font-bold text-brand-primary text-xl mb-6">Buttons</h4>
                      <p className="text-gray-2 text-sm leading-relaxed mb-8">Buttons must have a clear hierarchy. Primary buttons use the brand primary color. Secondary buttons use an outline or soft background. We use full pill-shape (rounded-full) for primary CTAs.</p>
                      
                      <div className="space-y-6">
                        <div className="flex flex-wrap items-center gap-4">
                          <button className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-brand-primary/90 transition-colors shadow-sm">
                            Primary Action
                          </button>
                          <button className="bg-white text-brand-primary border-2 border-brand-primary px-8 py-3 rounded-full font-bold hover:bg-brand-primary/5 transition-colors">
                            Secondary Action
                          </button>
                        </div>
                        <div className="flex flex-wrap items-center gap-4">
                          <button className="bg-brand-secondary text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-brand-secondary/90 transition-colors shadow-sm text-sm">
                            Alternate Action
                          </button>
                          <button className="text-gray-1 px-6 py-2.5 rounded-xl font-semibold hover:bg-gray-5 transition-colors text-sm">
                            Tertiary Link
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-brand-primary text-xl mb-6">Inputs & Controls</h4>
                      <p className="text-gray-2 text-sm leading-relaxed mb-8">Form fields use a solid 1px border with a 12px (xl) radius. Focus states are essential for accessibility, using a 2px brand primary ring.</p>
                      
                      <div className="space-y-4">
                        <div>
                          <label className="block text-sm font-semibold text-brand-secondary mb-1.5 ml-1">Email Address</label>
                          <input 
                            type="email" 
                            placeholder="name@example.com" 
                            className="w-full border border-gray-4 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:border-brand-primary transition-all"
                            disabled
                          />
                        </div>
                        <div className="flex items-center gap-3 pt-2">
                          <div className="w-5 h-5 rounded border border-gray-4 bg-brand-primary text-white flex items-center justify-center text-xs">✓</div>
                          <span className="text-sm text-gray-1">I agree to the terms</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
            
          </div>
        </section>

      </main>
    </div>
  );
}

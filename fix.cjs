const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Accessibility & Nav
content = content.replaceAll(
  'onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}',
  'onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}\n        aria-label="Toggle mobile menu"'
);

// 2. Sidebar logo
content = content.replaceAll(
  '<h1 className="font-serif text-2xl text-brand-primary font-bold tracking-tight">onlejobs.</h1>\n            <p className="text-sm text-gray-3 mt-2 uppercase tracking-widest">Brand Manual</p>',
  '<img src="https://onlejobs.com/static/public/logo.png" alt="onlejobs logo" className="h-10 w-auto object-contain" />\n            <p className="text-xs text-gray-2 mt-4 uppercase tracking-widest font-bold">Brand Manual</p>'
);

// 3. Contrast links & footer
content = content.replaceAll(
  "text-gray-2 hover:text-brand-primary",
  "text-gray-2 hover:text-brand-primary font-medium"
);
content = content.replaceAll(
  'className="text-xs text-gray-4 mt-auto"',
  'className="text-xs text-gray-2 mt-auto font-medium"'
);

// 4. Cover contrast
content = content.replaceAll(
  'text-state-info mb-6">Official Guidelines</p>',
  'text-white/90 mb-6">Official Guidelines</p>'
);
content = content.replaceAll(
  'leading-[1.1] font-bold mb-8">',
  'leading-[1.1] font-bold mb-8 text-white">'
);
content = content.replaceAll(
  '<span className="text-brand-secondary">System.</span>',
  '<span className="text-blue-100">System.</span>'
);

// 5. Mission contrast
content = content.replaceAll(
  '<h3 className="font-serif text-3xl font-bold mb-6 text-brand-primary">Our Mission</h3>',
  '<h3 className="font-serif text-3xl font-bold mb-6 text-white">Our Mission</h3>'
);
content = content.replaceAll(
  '<h4 className="font-bold text-brand-primary mb-2">Vision</h4>',
  '<h4 className="font-bold text-white mb-2">Vision</h4>'
);
content = content.replaceAll(
  '<h4 className="font-bold text-brand-primary mb-2">Values</h4>',
  '<h4 className="font-bold text-white mb-2">Values</h4>'
);

// 6. Logo image swap
content = content.replaceAll(
  '<span className="font-serif text-6xl md:text-8xl font-bold text-brand-primary tracking-tight">\n                  onlejobs.\n                </span>',
  '<img src="https://onlejobs.com/static/public/logo.png" alt="onlejobs Primary Logo" className="h-16 md:h-24 w-auto object-contain" />'
);
content = content.replaceAll(
  'Our primary wordmark.',
  'Our primary logo.'
);
content = content.replaceAll(
  '<span className="font-serif text-5xl font-bold text-white tracking-tight">\n                    onlejobs.\n                  </span>',
  '<div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full flex items-center justify-center">\n                    <img src="https://onlejobs.com/static/public/logo.png" alt="onlejobs Logo Example" className="h-10 md:h-12 w-auto object-contain" />\n                  </div>'
);
content = content.replaceAll(
  'Reversed out on secondary brand color.',
  'Protected clear space on secondary brand color.'
);
content = content.replaceAll(
  'Reversed out on primary brand color.',
  'Protected clear space on primary brand color.'
);

// 7. Typography section rewrite
content = content.replaceAll(
  'className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto bg-brand-secondary text-white"',
  'className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto bg-white text-brand-secondary border-t border-gray-5"'
);
content = content.replaceAll(
  'text-xs text-gray-4 border-b border-gray-1',
  'text-xs text-gray-2 font-bold border-b border-gray-5'
);
content = content.replaceAll(
  'text-sm text-gray-3 hidden sm:block group-hover:text-white transition-colors',
  'text-sm text-gray-2 font-medium hidden sm:block transition-colors'
);
content = content.replaceAll(
  'text-gray-4 text-sm mb-6',
  'text-gray-2 text-sm mb-6 font-semibold'
);
content = content.replaceAll(
  'text-gray-3 max-w-sm',
  'text-gray-2 max-w-sm'
);

// Background Aa text opacity for typography
content = content.replaceAll(
  'opacity-20 absolute -top-16 -left-8',
  'opacity-[0.03] absolute -top-16 -left-8 text-brand-primary'
);
content = content.replaceAll(
  'text-white font-bold opacity-5',
  'text-brand-secondary font-bold opacity-[0.03]'
);
content = content.replaceAll(
  'text-white mb-2 tracking-tight',
  'text-brand-secondary mb-2 tracking-tight'
);
content = content.replaceAll(
  'text-xs text-gray-4 mt-1 hidden sm:block',
  'text-xs text-gray-2 mt-1 hidden sm:block font-medium'
);
content = content.replaceAll(
  'border-l-2 border-gray-2 pl-6',
  'border-l-2 border-gray-5 pl-6'
);
content = content.replaceAll(
  'text-gray-2 ${type.class}',
  'text-brand-secondary ${type.class}'
);

fs.writeFileSync('src/App.tsx', content);

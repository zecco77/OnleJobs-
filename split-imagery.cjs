const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Update sections
content = content.replace(
  "{ id: 'imagery', title: '6.0 Imagery & Illustration' },",
  "{ id: 'illustration', title: '6.0 Illustration' },\n  { id: 'photography', title: '7.0 Photography' },"
);

// 2. Fix the illustration section
const oldImagerySection = `        {/* Imagery & Illustration Section */}
        <section id="imagery" className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto bg-white border-t border-gray-5">
          <SectionHeading number="6.0" title="Imagery" />
          
          <div className="mt-16 space-y-24">
            {/* Illustration */}
            <FadeIn>
              <div>
                <div className="max-w-3xl mb-12">
                  <h3 className="font-serif text-3xl font-bold text-brand-secondary mb-6">Illustration Style</h3>`;

const newIllustrationSection = `        {/* Illustration Section */}
        <section id="illustration" className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto bg-white border-t border-gray-5">
          <SectionHeading number="6.0" title="Illustration" />
          
          <div className="mt-16">
            <FadeIn>
              <div>
                <div className="max-w-3xl mb-12">
                  <h3 className="font-serif text-3xl font-bold text-brand-secondary mb-6">Illustration Style</h3>`;

content = content.replace(oldImagerySection, newIllustrationSection);

// 3. Remove background from illustrations
content = content.replaceAll(
  'className="bg-gray-5/20 p-8 rounded-3xl border border-gray-5 flex items-center justify-center relative overflow-hidden group aspect-[4/3]"',
  'className="flex items-center justify-center relative overflow-hidden group aspect-[4/3]"'
);

// 4. Split photography into its own section
const oldPhotographyStart = `            {/* Photography */}
            <FadeIn delay={0.1}>
              <div className="pt-16 border-t border-gray-5">
                <h3 className="font-serif text-3xl font-bold text-brand-secondary mb-4">Photography</h3>`;

const newPhotographyStart = `          </div>
        </section>

        {/* Photography Section */}
        <section id="photography" className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto bg-white border-t border-gray-5">
          <SectionHeading number="7.0" title="Photography" />
          
          <div className="mt-16">
            <FadeIn delay={0.1}>
              <div>`;

content = content.replace(oldPhotographyStart, newPhotographyStart);

fs.writeFileSync('src/App.tsx', content);

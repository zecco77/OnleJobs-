const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const navItemTarget = "{ id: 'iconography', title: '5.0 Iconography' },";
const navItemReplacement = "{ id: 'iconography', title: '5.0 Iconography' },\n  { id: 'imagery', title: '6.0 Imagery & Illustration' },";
content = content.replace(navItemTarget, navItemReplacement);

const imagerySection = `        {/* Imagery & Illustration Section */}
        <section id="imagery" className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto bg-white border-t border-gray-5">
          <SectionHeading number="6.0" title="Imagery" />
          
          <div className="mt-16 space-y-24">
            {/* Illustration */}
            <FadeIn>
              <div className="grid md:grid-cols-[1fr_1fr] gap-16 items-start">
                <div>
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
                
                <div className="bg-gray-5/20 p-12 rounded-3xl border border-gray-5 flex items-center justify-center relative overflow-hidden group">
                  {/* Custom SVG approximating unDraw style for demonstration, using the exact brand color */}
                  <svg viewBox="0 0 500 400" className="w-full h-auto drop-shadow-lg transition-transform duration-500 group-hover:scale-105" xmlns="http://www.w3.org/2000/svg">
                    <path d="M150 300 L350 300 L350 320 L150 320 Z" fill="#e0e0e0"/>
                    <path d="M180 200 L320 200 L320 300 L180 300 Z" fill="#f5f5f5"/>
                    <path d="M220 160 C220 140 280 140 280 160 L280 200 L220 200 Z" fill="#0056B3"/>
                    <circle cx="250" cy="110" r="30" fill="#0056B3"/>
                    <path d="M190 220 L240 220 L240 230 L190 230 Z" fill="#d1d5db"/>
                    <path d="M190 250 L310 250 L310 260 L190 260 Z" fill="#d1d5db"/>
                    <path d="M190 280 L280 280 L280 290 L190 290 Z" fill="#d1d5db"/>
                    <circle cx="380" cy="80" r="40" fill="#0056B3" opacity="0.1"/>
                    <circle cx="100" cy="150" r="60" fill="#0056B3" opacity="0.1"/>
                    <path d="M400 250 L450 200 L450 300 Z" fill="#0056B3" opacity="0.2"/>
                    <rect x="50" y="250" width="40" height="40" rx="8" fill="#0056B3" opacity="0.2" transform="rotate(15 70 270)"/>
                    {/* Simplified person shape */}
                    <circle cx="340" cy="180" r="20" fill="#282828"/>
                    <path d="M310 260 C310 230 370 230 370 260 L370 300 L310 300 Z" fill="#0056B3"/>
                    <path d="M320 260 L320 330 L335 330 L335 260 Z" fill="#282828"/>
                    <path d="M345 260 L345 330 L360 330 L360 260 Z" fill="#282828"/>
                  </svg>
                </div>
              </div>
            </FadeIn>

            {/* Photography */}
            <FadeIn delay={0.1}>
              <div className="pt-16 border-t border-gray-5">
                <h3 className="font-serif text-3xl font-bold text-brand-secondary mb-4">Photography</h3>
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
`;

content = content.replace('      </main>', imagerySection + '\n      </main>');

fs.writeFileSync('src/App.tsx', content);

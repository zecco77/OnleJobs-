const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// 1. Update navigation
content = content.replace(
  "{ id: 'photography', title: '7 Photography' },",
  "{ id: 'photography', title: '7 Photography' },\n  { id: 'components', title: '8 UI & Layout' },"
);

const uiComponentsSection = `        {/* UI & Layout System */}
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
`;

content = content.replace('      </main>', uiComponentsSection + '\n      </main>');

fs.writeFileSync('src/App.tsx', content);

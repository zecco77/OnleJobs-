const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const newLogoSection = `        {/* Logo Section */}
        <section id="logo" className="min-h-screen p-8 md:p-24 max-w-6xl mx-auto bg-gray-5/30">
          <SectionHeading number="2.0" title="Logo Usage" />
          
          <div className="mt-16 space-y-24">
            {/* Primary Logo */}
            <div>
              <FadeIn>
                <div className="bg-white border border-gray-5 p-16 md:p-32 rounded-3xl flex items-center justify-center shadow-sm mb-6">
                  <img src="https://onlejobs.com/static/public/logo.png" alt="onlejobs Primary Logo" className="h-16 md:h-24 w-auto object-contain" />
                </div>
                <p className="text-gray-2 text-center max-w-2xl mx-auto mb-12">
                  Our primary logo. It should be used on light backgrounds with ample clear space to ensure maximum legibility and impact.
                </p>
              </FadeIn>

              <div className="grid md:grid-cols-2 gap-8">
                <FadeIn delay={0.1}>
                  <div className="bg-brand-secondary p-16 rounded-3xl flex items-center justify-center h-64 mb-4">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full flex items-center justify-center">
                      <img src="https://onlejobs.com/static/public/logo.png" alt="onlejobs Logo on Secondary" className="h-10 md:h-12 w-auto object-contain" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-2 text-center">Protected clear space on secondary brand color.</p>
                </FadeIn>
                <FadeIn delay={0.2}>
                  <div className="bg-brand-primary p-16 rounded-3xl flex items-center justify-center h-64 mb-4">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full flex items-center justify-center">
                      <img src="https://onlejobs.com/static/public/logo.png" alt="onlejobs Logo on Primary" className="h-10 md:h-12 w-auto object-contain" />
                    </div>
                  </div>
                  <p className="text-sm text-gray-2 text-center">Protected clear space on primary brand color.</p>
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
                    <div className="w-full aspect-square bg-white border border-gray-5 rounded-3xl flex items-center justify-center p-16 shadow-sm mb-4">
                      {/* Using the favicon as a placeholder if the uploaded files are missing, but linking to the uploaded names as the preferred source */}
                      <img 
                        src="/Logo Type1.png" 
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://onlejobs.com/static/public/favicon.ico';
                          e.currentTarget.className = 'w-32 h-32 md:w-48 md:h-48 object-contain';
                        }}
                        alt="Logo Type 1" 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <p className="font-bold text-brand-secondary">Primary Icon</p>
                    <p className="text-sm text-gray-2 text-center mt-1">For use on light backgrounds.</p>
                  </div>
                  
                  <div className="flex flex-col items-center">
                    <div className="w-full aspect-square bg-brand-primary border border-brand-primary rounded-3xl flex items-center justify-center p-16 shadow-sm mb-4">
                      <img 
                        src="/Logo Type2.png" 
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = 'https://onlejobs.com/static/public/favicon.ico';
                          e.currentTarget.className = 'w-32 h-32 md:w-48 md:h-48 object-contain brightness-0 invert';
                        }}
                        alt="Logo Type 2" 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <p className="font-bold text-brand-secondary">Reversed Icon</p>
                    <p className="text-sm text-gray-2 text-center mt-1">For use on primary brand color or dark backgrounds.</p>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>`

content = content.replace(/<section id="logo"[\s\S]*?<\/section>/, newLogoSection);

fs.writeFileSync('src/App.tsx', content);

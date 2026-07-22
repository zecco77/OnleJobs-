const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Replace .0 in the Navigation
content = content.replace("title: '1.0 Brand Overview'", "title: '1 Brand Overview'");
content = content.replace("title: '2.0 Logo'", "title: '2 Logo'");
content = content.replace("title: '3.0 Colors'", "title: '3 Colors'");
content = content.replace("title: '4.0 Typography'", "title: '4 Typography'");
content = content.replace("title: '5.0 Iconography'", "title: '5 Iconography'");
content = content.replace("title: '6.0 Illustration'", "title: '6 Illustration'");
content = content.replace("title: '7.0 Photography'", "title: '7 Photography'");

// Replace .0 in SectionHeadings
content = content.replace('number="1.0" title="Brand Overview"', 'number="1" title="Brand Overview"');
content = content.replace('number="2.0" title="Logo Usage"', 'number="2" title="Logo Usage"');
content = content.replace('number="3.0" title="Colors"', 'number="3" title="Colors"');
content = content.replace('number="4.0" title="Typography"', 'number="4" title="Typography"');
content = content.replace('number="5.0" title="Iconography"', 'number="5" title="Iconography"');
content = content.replace('number="6.0" title="Illustration"', 'number="6" title="Illustration"');
content = content.replace('number="7.0" title="Photography"', 'number="7" title="Photography"');

// Replace the illustration grid
const oldGrid = `<div className="grid md:grid-cols-3 gap-8">
                  <div className="flex items-center justify-center relative overflow-hidden group aspect-[4/3]">
                    <img src="/undraw_my-resume_etai.svg" alt="Resume Illustration" className="w-full h-auto drop-shadow-sm transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-center relative overflow-hidden group aspect-[4/3]">
                    <img src="/undraw_portfolio_btd8.svg" alt="Portfolio Illustration" className="w-full h-auto drop-shadow-sm transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-center relative overflow-hidden group aspect-[4/3]">
                    <img src="/undraw_screening-resumes_dh9s.svg" alt="Screening Resumes Illustration" className="w-full h-auto drop-shadow-sm transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>`;

const newGrid = `<div className="grid md:grid-cols-2 gap-8 max-w-4xl">
                  <div className="flex items-center justify-center relative overflow-hidden group aspect-[4/3]">
                    <img src="/undraw_portfolio_btd8.svg" alt="Portfolio Illustration" className="w-full h-auto drop-shadow-sm transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex items-center justify-center relative overflow-hidden group aspect-[4/3]">
                    <img src="/undraw_screening-resumes_dh9s.svg" alt="Screening Resumes Illustration" className="w-full h-auto drop-shadow-sm transition-transform duration-500 group-hover:scale-105" />
                  </div>
                </div>`;

content = content.replace(oldGrid, newGrid);

fs.writeFileSync('src/App.tsx', content);

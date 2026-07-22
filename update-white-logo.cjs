const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

const target1 = `<div className="bg-brand-secondary p-16 rounded-3xl flex items-center justify-center h-64 mb-4">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full flex items-center justify-center">
                      <img src="https://onlejobs.com/static/public/logo.png" alt="onlejobs Logo on Secondary" className="h-10 md:h-12 w-auto object-contain" />
                    </div>
                  </div>`;
                  
const replace1 = `<div className="bg-brand-secondary p-16 rounded-3xl flex items-center justify-center h-64 mb-4">
                    <img src="/White_logo.png" alt="onlejobs White Logo on Secondary" className="h-10 md:h-12 w-auto object-contain" />
                  </div>`;

const target2 = `<div className="bg-brand-primary p-16 rounded-3xl flex items-center justify-center h-64 mb-4">
                    <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg w-full flex items-center justify-center">
                      <img src="https://onlejobs.com/static/public/logo.png" alt="onlejobs Logo on Primary" className="h-10 md:h-12 w-auto object-contain" />
                    </div>
                  </div>`;
                  
const replace2 = `<div className="bg-brand-primary p-16 rounded-3xl flex items-center justify-center h-64 mb-4">
                    <img src="/White_logo.png" alt="onlejobs White Logo on Primary" className="h-10 md:h-12 w-auto object-contain" />
                  </div>`;

content = content.replace(target1, replace1);
content = content.replace(target2, replace2);

fs.writeFileSync('src/App.tsx', content);

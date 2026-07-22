const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

content = content.replace(
  'Protected clear space on secondary brand color.',
  'Reversed out on secondary brand color.'
);
content = content.replace(
  'Protected clear space on primary brand color.',
  'Reversed out on primary brand color.'
);

fs.writeFileSync('src/App.tsx', content);

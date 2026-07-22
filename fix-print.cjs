const fs = require('fs');
let content = fs.readFileSync('src/index.css', 'utf8');

const printStyles = `
  nav {
    display: none !important;
  }
  
  button[aria-label="Toggle mobile menu"] {
    display: none !important;
  }

  main {
    margin-left: 0 !important;
    width: 100% !important;
    max-width: 100% !important;
  }
`;

content = content.replace('  body {\n    background-color: white !important;\n  }', '  body {\n    background-color: white !important;\n  }\n' + printStyles);
fs.writeFileSync('src/index.css', content);

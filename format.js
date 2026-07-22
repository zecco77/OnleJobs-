const fs = require('fs');
let content = fs.readFileSync('src/App.tsx', 'utf8');

// Also make sure photography section uses title="Photography" instead of title="Photography" as a title in SectionHeading if it wasn't replaced properly. Wait, it was:
// <SectionHeading number="7.0" title="Photography" />


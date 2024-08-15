const fs = require('fs');
const path = require('path');
const ejs = require('ejs');
const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

const outputDir = path.join(__dirname, 'public');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

// Function to render a template to HTML and write to file
function renderTemplate(templateName, data, outputFilePath) {
  ejs.renderFile(path.join(__dirname, 'views', `${templateName}.ejs`), data, (err, str) => {
    if (err) {
      console.error(err);
      return;
    }
    fs.writeFileSync(outputFilePath, str);
    console.log(`Generated ${outputFilePath}`);
  });
}

// Render your EJS templates to static HTML
renderTemplate('index', {}, path.join(outputDir, 'index.html'));
// Add more renderTemplate calls as needed for other pages

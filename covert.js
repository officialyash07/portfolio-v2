const fs = require("fs");
const path = require("path");

// 📁 Where your raw .svg files are
const INPUT_DIR = path.join(__dirname, "public/assets"); // adjust if needed
// 📁 Where you want React components saved
const OUTPUT_DIR = path.join(__dirname, "public/icons");

// Make sure output folder exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Helper to convert "github.svg" to "GitHubIcon"
const toComponentName = (fileName) => {
    const name = path.basename(fileName, ".svg");
    return (
        name.charAt(0).toUpperCase() +
        name.slice(1).replace(/-([a-z])/g, (g) => g[1].toUpperCase()) +
        "Icon"
    );
};

// Read all SVG files
fs.readdirSync(INPUT_DIR).forEach((file) => {
    if (file.endsWith(".svg")) {
        const svgPath = path.join(INPUT_DIR, file);
        const svgContent = fs.readFileSync(svgPath, "utf-8");

        // Strip XML/Comments and wrap in a React component
        const cleanSvg = svgContent
            .replace(/<\?xml[\s\S]*?\?>/g, "")
            .replace(/<!--[\s\S]*?-->/g, "")
            .replace(/\r?\n|\r/g, "");

        const componentName = toComponentName(file);
        const componentCode = `import React from 'react';

export default function ${componentName}({ className }) {
  return (
    ${cleanSvg
        .replace("<svg", "<svg className={className}")
        .replace(/([a-zA-Z-]+)=["'](.*?)["']/g, '$1="$2"')}
  );
}
`;

        // Write file
        fs.writeFileSync(
            path.join(OUTPUT_DIR, `${componentName}.js`),
            componentCode,
            "utf-8"
        );

        console.log(`✅ Converted ${file} → ${componentName}.js`);
    }
});

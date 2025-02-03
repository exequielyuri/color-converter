const fs = require('fs');

const srcPath = process.argv[2];

// Convert [{ hex, name } ...] to { name: hex ...}
fs.readFile(srcPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error in reading colornames.json', err);
    return;
  }

  const colors = JSON.parse(data);

  const nameToHex = colors.reduce((acc, color) => {
    acc[color.name.toLowerCase()] = color.hex.toUpperCase();
    return acc;
  }, {});

  fs.writeFile('./data/nameToHex.json', JSON.stringify(nameToHex), (err) => {
    if (err) {
      console.error("Error in writing nameToHex.json", err);
    } else {
      console.log("nameToHex.json has been generated.");
    }
  });
});


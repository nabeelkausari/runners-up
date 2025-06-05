const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);
const mkdir = promisify(fs.mkdir);
const readdir = promisify(fs.readdir);

const sourceBase = path.join(__dirname, 'src/data/Photos');
const destBase = path.join(__dirname, 'public/photos');

async function copyImages() {
  const categories = ['single', 'couples', 'family', 'frames', 'mugs'];
  
  for (const category of categories) {
    const sourceDir = path.join(sourceBase, category);
    const destDir = path.join(destBase, category);
    
    try {
      // Ensure destination directory exists
      await mkdir(destDir, { recursive: true });
      
      // Get all files in source directory
      const files = await readdir(sourceDir);
      
      // Copy each file
      for (const file of files) {
        if (file.endsWith('.webp') || file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
          const sourcePath = path.join(sourceDir, file);
          const destPath = path.join(destDir, file);
          await copyFile(sourcePath, destPath);
          console.log(`Copied: ${sourcePath} -> ${destPath}`);
        }
      }
    } catch (error) {
      console.error(`Error processing ${category}:`, error);
    }
  }
  
  console.log('All images copied successfully!');
}

// Run the copy process
copyImages().catch(console.error);

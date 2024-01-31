// // pages/api/images.js

// const fs = require('fs');
// const path = require('path');

// export default function handler(req, res) {
//   const getImages = (dir, filelist) => {
//     const files = fs.readdirSync(dir);
//     filelist = filelist || [];
//     files.forEach((file) => {
//       const currentPath = path.join(dir, file);
//       if (fs.statSync(currentPath).isDirectory()) {
//         if (currentPath === path.join(process.cwd(), 'public', 'bag', 'yunlarstudio', '1', 'yunlar-render')) {
//           // Sla deze map over
//           return;
//         }
//         filelist = getImages(currentPath, filelist);
//       }
//       else {
//         const extension = path.extname(currentPath);
//         if (extension !== '.png' && extension !== '.jpg') {
//           // Sla dit bestand over als het geen .png of .jpg is
//           return;
//         }
//         const relativePath = path.relative(path.join(process.cwd(), 'public'), currentPath);
//         filelist.push('/' + relativePath);
//       }
//     });
//     return filelist;
//   };

//   const guuslabImages = getImages(path.join(process.cwd(), 'public', 'bag', 'guuslab'));
//   const yunlarstudioImages = getImages(path.join(process.cwd(), 'public', 'bag', 'yunlarstudio'));

//   res.status(200).json([...guuslabImages, ...yunlarstudioImages]);
// }
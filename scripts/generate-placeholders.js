#!/usr/bin/env node

/**
 * Script to generate placeholder images for the portfolio
 * Run with: node scripts/generate-placeholders.js
 */

const fs = require('fs');
const path = require('path');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Placeholder image URLs from picsum.photos (free service)
const placeholders = {
  'profile.jpg': 'https://picsum.photos/400/400?random=1',
  'project-ecommerce.jpg': 'https://picsum.photos/600/400?random=2',
  'project-dashboard.jpg': 'https://picsum.photos/600/400?random=3', 
  'project-tasks.jpg': 'https://picsum.photos/400/300?random=4',
  'project-blog.jpg': 'https://picsum.photos/400/300?random=5'
};

console.log('🖼️  Generando imágenes placeholder...\n');

// Generate placeholder instructions
Object.entries(placeholders).forEach(([filename, url]) => {
  const filePath = path.join(imagesDir, filename);
  const placeholderContent = `# Placeholder para ${filename}
# Reemplaza esta imagen con tu contenido real
# URL de ejemplo: ${url}
# 
# Para descargar una imagen placeholder, puedes usar:
# curl "${url}" -o "${filename}"
#
# Tamaños recomendados:
# - profile.jpg: 400x400px (1:1)
# - project-*.jpg (destacados): 600x400px (3:2)  
# - project-*.jpg (regulares): 400x300px (4:3)
`;

  fs.writeFileSync(filePath + '.placeholder', placeholderContent);
  console.log(`✅ ${filename}.placeholder creado`);
});

console.log(`\n🎉 Placeholders generados en ${imagesDir}`);
console.log('\n📝 Próximos pasos:');
console.log('1. Reemplaza los archivos .placeholder con tus imágenes reales');
console.log('2. Asegúrate de que los nombres coincidan exactamente');
console.log('3. Optimiza las imágenes para web (JPEG/PNG, comprimidas)');
console.log('\n💡 Para imágenes placeholder rápidas, puedes usar:');
console.log('   - https://picsum.photos/ (paisajes aleatorios)');
console.log('   - https://placeholder.com/ (colores sólidos)');
console.log('   - https://via.placeholder.com/ (con texto personalizado)');

module.exports = placeholders;

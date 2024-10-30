const path = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/components/index.ts'),
            name: 'Clopos DataGrid',
            fileName: (format) => `data-grid.${format}.js`
        }
    }
});
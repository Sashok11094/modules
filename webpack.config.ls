const HtmlWebpackPlugin = require('html-webpack-plugin');

   module.exports = {
     // ... другие настройки webpack
     plugins: [
       new HtmlWebpackPlugin({
         template: 'src/index.html', // Путь к вашему шаблону HTML
         filename: 'index.html'      // Имя выходного файла
       })
     ]
   };
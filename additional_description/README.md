# Webpack

- [Webpack](https://webpack.js.org/)

  - entry point
  - exit point
  - loaders
  - plagins

- [Webpack] -> project bundler, which bundle whole project with different file
  type: html, js, css, scss....
- It has 2 modes:

  - development -> mode for development the webpage without optimalization,
    which only developers see
  - production -> mode for production the webpage with optimalization, which
    users see.

- [Webpack] creates the webpage by using tree approach:

  - main js file (entry point)
  - other js files, which are imported to entry point file
  - other types of files (css, scss, JSON...), which are imported to entry point
    file

- [Webpack] creates the webpage in exit point place

- [Webpack] possesses it own configuration js file (webpack.config.js), in which
  is written all configurations:

  - exit point
  - entry point
  - loaders
  - plugins
  - DevServer
  - ...

- [Webpack] entry point

  - possesses all imported files

- [Webpack] in default cannot serve except js files other types of files and
  needs loader. Loaders are used by Webpack in the beginning to each file separately
  - it needs a package install by npm
  - it needs configuration in [webpack.config.js]
  - If loaders are co-dependent from each other (style, css, scss loaders), they
    must be written in [webpack.config.js] in right numeration

- [Webpack] -> for other information read documentation


- [Webpack] Plugins -> webpack configuration, which are used by webpack in the end, when the code is collected to one file
  - Plugins must be called in webpack.config.js in the beginning and added to modules export as a classes
  - some plugins needs additional loaders for ex. MiniCssExtractPlugin
  - Webpack does not use DevServer without HtmlWebpackPlugin


- A lot of loaders and Plugins needs their separate json file configuration


[https://www.taniarascia.com/how-to-use-webpack/]
# Terminal Instructions

- Terminal
  - [Note 1](https://tproger.ru/translations/bash-cheatsheet/)
  - [Note 2](https://habr.com/ru/company/ruvds/blog/555270/)
  - How to open
    - view > terminal
    - "Ctrl + `"
  - Main function
    - Find the current location (pwd)
    - List of files in current location (man)
      - ls -l -> (shows the whole information about all open element in the
        current location)
      - ls -la -> (shows the whole information about all element (including
        hidden) in the current location)
      - ls _ -> (shows all element in _ folder)
    - Navigation (cd)
      - cd _ (where _ is a folder) -> relocate inside \*
      - cd ../ -> relocate outside the folder (if add more ../ -> it will
        relocate doubly and etc.)
      - cd _: (where _ is the name of hard disc)
    - Console Clear (clear or "Ctrl + l")
    - Create a file (touch)
      - touch can create couple of elements at the same time just being
        separated by 'SPACE' between them
    - Create of folders (mkdir)
    - Rename or relocation of file (mv)
    - Delete file (rm)
      - rm -r _ (where _ name of folder[directory]) - only in that way can be
        removed directory with some files inside
    - Copy file (cp A B) - (where A in some location is a file and B is the same
      file (the name can be different) in other location)
    - Check the info of the terminal command (_ --help) - (where _ is a command)
    - Check the version of node (node -v)
    - Open file (explorer _) (where _ is a name and location of the file)
  - Node.js and npm
    - Node version check commmand (node -v)
    - Perform the JS file in terminal (node _) -> where _ is the name of file
      (remember to be in necessary directory)
    - npm install
    - initialization and package.json (npm init) -> it asks you a lot of
      information for creation of package.json
    - npm init --yes OR npm init -y --> shows code of package.json
      - In package.json scripts are used for adding any script in npm. For
        example script qwe can be called by texting ['npm run qwe']
      - package.json does not work with any comments
      - preX -> script which will be noded before script X
      - postX -> script which will be noded after script X
      - it is possible to combine couple of scripts into a single script call
        (script-1 + script-2 in package.json)
    - [npms.com](https://www.npmjs.com/)
    - work with npm packages
      - When you download packages the system creates [package-lock.json], which
        shows all dependencies of dowloaded npm packages from other packages.
      - Additionally in package.json is shown all downloaded packages and their
        versions
      - install (npm i _) --> where _ is the name of library
      - remove (npm remove _) --> where _ is the name of library
      - Package Joi -> good for validation (inputs)
      - Package uuid -> generate unique id
      - Package shortid -> generate unique id (is better than uuid)
      - Package Express
    - CommonJS modules
    - npm-scripts
      - pre and post
  - Code transpilator
    - npm Package [Babel](https://babeljs.io/) -> is created for remaking modern
      JS for JS of older version, which can be readed by older versions of
      browsers.
    - [npm install --save-dev @babel/core @babel/cli] -> installation of [Babel]
    - CLI and npm-scripts
    - PreSets
    - [BrowsersList](https://github.com/browserslist/browserslist)
    - .browserslistrc (file for configuration of [Babel] -> helps to choose
      browserlist for which Babel will remake JS)
  - Constructor [Parcel](https://parceljs.org/)
    - If [Babel] or [Webpack] is installed [Parcel] will not work. First all
      packages of alternative libraries must be deleted, and after is possible.
    - npm run _ (where _ is the name of script for building the main JS file) ->
      usually instead of \* is used [build]
    - npm run _ (where _ is the name of script for creating live server [are
      used only after command before]) -> usually instead of \* is used [dev] or
      [start]
    - [Parcel] can build also SCSS, but it needs a file [.sassrc.json] -> more
      details [https://parceljs.org/languages/sass/#example-usage]
  - Modules [ECMAScript](https://exploringjs.com/es6/ch_modules.html)

npm list --depth=0 - виведе в терміналі список локально встановлених пакетів з
номерами їх версій, без залежностей npm uninstall [package-name] - видалить
пакет, встановлений локально і оновить package.json npm outdated -
використовується для пошуку оновлень, виявить сумісні версії програмно і виведе
список доступних оновлень npm update - оновить всі пакети до максимально
дозволеної версії

- npm config set init.author.name "YOUR_NAME"
- npm config set init.author.email "YOUR_EMAIL"


npm install validator -> The same library as JOI

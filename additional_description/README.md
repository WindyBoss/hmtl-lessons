Templates instruments:

- handlebars
- pug
- mustache
- eis.co
- nunjucks

Templates helps to record the written HTML code, which must be insert HTML by JS
inside separate file and call it, when it is necessary.

Additionally templates allow to use function inside their files like if, for and others


localStorage and JSON
JSON - database code, which always saves data a string. By data it means: booleans, objects, arrays, strings and numbers, but NOT methods and functions

(Try Catch) - method, which helps to catch errors after parsing the JSON from for ex. backend or localStorage

[try] -> responsible for handling the average code, which must be done by interpretator 
[catch] -> responsible for handling code, if the errors occur after doing [try] part.

try {

} catch (errors) {

}

[error] - in this is an object with such keys: 
    - name: type of error
    - message: error description
    - stack: shows the stack, during which the error was found


[JSON] syntax:
    - src/*.html -> all files with html format inside folder src
    - src/gin.* -> all formats of files with name gin inside folder src
    - src/*/*.html -> all files in all folders with format html inside folder src
    - src/**/*.html -> all files in all folders in all deep with format html inside folder




parcel build structure plugin
[https://www.npmjs.com/package/parcel-plugin-custom-dist-structure]
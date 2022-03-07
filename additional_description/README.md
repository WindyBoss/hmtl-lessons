# Promises
- asyns code, which can be made separately from static code (f.ex. using timer)
- is based on 0 | 1 system -> success | error -> if success does some code | if success does other code | in both ways does the third code
- syntax allow to catch the errors, do the code in all conditions (error and success)
- for creating promises is necessary to use class [new Promise(resolve, reject)], where resolve -> callback function if success and reject -> if the error
- Promise - is an object with prototypes: [then] -> do if success, [catch] -> catch the error, [finally] -> do no matter what
- The main function of promise is to give a possibility to use code from the Promise outside the function by using [then], [catch], [finally] 

- [Promises-Example](https://habr.com/ru/company/nix/blog/323066/)
- [Promises-Problem-Solutions](https://habr.com/ru/company/vk/blog/269465/)
- loupe js

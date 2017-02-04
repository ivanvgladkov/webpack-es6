import $ from 'vendor/jquery.js';
import Hello from 'components/hello/main.js';
import ko from 'vendor/knockout.js';

console.log('PAGE A file');
let hello = new Hello();
hello.sayHello();
$('body').append(hello.render());

console.log(ko);
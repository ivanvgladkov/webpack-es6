import $ from 'vendor/jquery.js';
import Hello from 'components/hello/main.js';

console.log('PAGE A file');
let hello = new Hello();
hello.sayHello();
$('body').append(hello.render());

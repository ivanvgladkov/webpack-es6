import template from './template.html';
import './style.css';

console.log('Component file');

class Component {
    constructor() {
        console.log('Component constructor');
    }
    sayHello() {
        console.log('Hello');
    }
    render() {
        return template;
    }
}

export default Component;

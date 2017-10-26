import Template from './template.html';
import './style.css';

class Component {
    constructor(container) {
        this.container = container;
    }
    render() {
        this.container.html(Template);
    }
}

export default Component;

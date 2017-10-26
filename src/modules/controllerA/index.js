import $ from 'vendor/jquery.js';
import Grid from 'components/grid/main.js';

let gridContainer = $('.js-grid-container'),
    grid = new Grid(gridContainer);

grid.render();
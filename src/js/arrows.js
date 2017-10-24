import $ from 'jquery';
import { feedData } from './data.js';
import { i } from './main.js';

function checkArrows(){
if (feedData.length > 1) {
        $('.arrowLeft').removeClass("hidden");
        $('.arrowRight').removeClass("hidden");
    }
}

export { checkArrows }
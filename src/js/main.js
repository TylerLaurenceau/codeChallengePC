import $ from 'jquery';
import { feedData } from './data.js';
import {disclaimerVisable, disclaimerAnimation, disclaimerInvisible, createTemplate} from './create.js';
import { dynamicStyle } from './dynamicCss.js'
import { checkDealerLength } from './dealerLength.js'
import { checkPrice } from './price.js'
import { createDisclaimer } from './disclaimer.js'
import { checkRequiredText } from './requiredText.js'
import { checkArrows } from './arrows.js'

var i = 0; 

function nextView() {
    i++;
    if (i == feedData.length) {
        i = 0;
    }
    loadAd();
}

function prevView() {
    i--;
    if (i < 0) {
        i = feedData.length - 1;
    }
    loadAd();
}

function loadAd(){
createTemplate();
dynamicStyle();
checkDealerLength();
checkPrice();
checkArrows();
createDisclaimer();
checkRequiredText();
}

export{ prevView, nextView, i };

console.log(feedData)
loadAd();



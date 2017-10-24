import $ from 'jquery';
import { feedData } from './data.js';
import { i } from './main.js';

function dynamicStyle(){
    $('.carImage').css('background-image', `url(${feedData[i].PhotoUrl})`);
    $('.carImage').css('background-size', 'cover');
    $('.carImage').css('background-position', 'center');
    $('.dealerLogo').css('background-image', `url(${feedData[i].OemLogoUrl})`)
    $('.dealerLogo').css('background-size', 'cover');
    $('.dealerLogo').css('background-position', 'center');
    $('.arrowRight').css('background-color', `#${feedData[i].OemPrimaryColor}`)
    $('.arrowLeft').css('background-color', `#${feedData[i].OemPrimaryColor}`)
    $('.viewInv').css('background-color', `#${feedData[i].OemPrimaryColor}`)
    $('.incentives').css('background-color', `#${feedData[i].OemPrimaryColor}`)
}

export { dynamicStyle };
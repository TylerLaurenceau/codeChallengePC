import $ from 'jquery';
import { feedData } from './data.js';
import { i } from './main.js';
import { prevView, nextView } from './main.js';

function disclaimerVisable() {
    $(".disclaimerContent").removeClass("hidden");
}

function disclaimerAnimation() {
    $(".disclaimerContent").animate({
        "opacity": .8
    }, 150);
}

function disclaimerInvisible() {
    $(".disclaimerContent").addClass("hidden");
    $(".disclaimerContent").animate({
        "opacity": 0
    }, 150);
}

function createTemplate() {
    $(".contentContainer").html(
        `<div class="disclaimerContent hidden"><div class="disclaimerText"></div></div>
            <div class="ad">
            <div class="header">
                <div class="dealerLogo"></div>
                <div class="seasonalLogo hidden"></div>
                <div class="dealerName hidden">${feedData[i].DealerName}</div>
                <div class="dealerNameLarge hidden">${feedData[i].DealerName}</div>
            </div>
            <div class="carName">${feedData[i].Year} ${feedData[i].Make} ${feedData[i].Model}</div>
            <div class="incentives">
            <div class="price"></div>
            <div class="required"></div>
            </div>      
            <div class="carImage">
                <div class="arrowLeft hidden"><</div>
                <div class="viewInv"><a href="${feedData[i].DestinationUrl}">View Inventory</a></div>
                <div class="arrowRight hidden">></div>
            </div>
        </div> 
            <div class="disclaimer hidden">Disclaimer*</div>`)

    $(".arrowRight").on("click", nextView);
    $(".arrowLeft").on("click", prevView);
    $(".disclaimer").mouseenter(disclaimerVisable);
    $(".disclaimerContent").mouseenter(disclaimerAnimation);
    $(".disclaimerContent").mouseleave(disclaimerInvisible);
}

export{ disclaimerVisable, disclaimerAnimation, disclaimerInvisible, createTemplate}
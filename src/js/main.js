import $ from 'jquery';
import {
    feedData
} from './data.js';

console.log(feedData);
var i = 0;

function nextView() {
    i++;
    if (i == feedData.length) {
        i = 0;
    }
    items();
    check();
}

function prevView() {
    i--;
    if (i < 0) {
        i = feedData.length - 1;
    }
    console.log(i)
    items();
    check();
}

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

function items() {
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

    console.log(feedData[i].DealerName.length);
    $(".arrowRight").on("click", nextView);
    $(".arrowLeft").on("click", prevView);
    $(".disclaimer").mouseenter(disclaimerVisable);
    $(".disclaimerContent").mouseenter(disclaimerAnimation);
    $(".disclaimerContent").mouseleave(disclaimerInvisible);

}

function check() {
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


    if (feedData[i].DealerName.length < 40) {
        $('.dealerName').removeClass("hidden");
    } else if (feedData[i].DealerName.length > 40) {
        $('.dealerNameLarge').removeClass("hidden");
    }

    if (feedData.length > 0) {
        $('.arrowLeft').removeClass("hidden");
        $('.arrowRight').removeClass("hidden");
    }

    if (feedData[i].OemSeasonalLogoUrl !== "") {
        $(".seasonalLogo").html(`<img src="${feedData[i].OemSeasonalLogoUrl}"/>`);
        $(".seasonalLogo").removeClass("hidden");
        $(".dealerName").addClass("dealerNameWithSeasonal");
        $(".dealerNameLarge").addClass("dealerNameWithSeasonalLarge")
        $(".dealerName").removeClass("dealerNameLarge");

    }

    if (feedData[i].PurchaseApr !== "" && feedData[i].PurchaseMonths !== "") {
        $(".price").html(`Purchase for $${feedData[i].PurchaseApr}/mo for ${feedData[i].PurchaseMonths} months`);
    } else if (feedData[i].LeaseMonths !== "" && feedData[i].LeaseMonthlyPayment !== "") {
        $(".price").html(`Lease for $${feedData[i].LeaseMonthlyPayment}/mo for ${feedData[i].LeaseMonths} months`);
    } else {
        $(".price").html(`Starting at ${feedData[i].LowestPrice}`)
    }

    if (feedData[i].PurchaseApr !== "" && feedData[i].PurchaseMonths !== "" && feedData[i].PurchaseDisclosure !== "") {
        $(".disclaimer").removeClass("hidden")
        $(".disclaimerText").html(`${feedData[i].PurchaseDisclosure}`)
    } else if (feedData[i].LeaseMonths !== "" && feedData[i].LeaseMonthlyPayment !== "" && feedData[i].LeaseDisclosure !== "") {
        $(".disclaimer").removeClass("hidden")
        $(".disclaimerText").html(`${feedData[i].LeaseDisclosure}`)
    }

    if (feedData[i].OemRequiredText !== "") {
        $(".required").append(`${feedData[i].OemRequiredText} `);
        if (feedData[i].OemRequiresModelCode === "True" || feedData[i].OemRequiresVin === "True") {
            $(".required").append(` - `)
        }
    }

    if (feedData[i].OemRequiresModelCode !== "") {
        $(".required").append(`Model ${feedData[i].Model} `);
        if (feedData[i].OemRequiresVin === "True") {
            $(".required").append(` - `)
        }

        if (feedData[i].OemRequiresVin !== "") {
            $(".required").append(`Vin# ${feedData[i].LowestPriceVin}`);
        }
    }
}

console.log(feedData[2].OemRequiresVin);
console.log(feedData[2].LowestPriceVin);
items();
check();

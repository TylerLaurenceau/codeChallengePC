import $ from 'jquery';
import {
    feedData
} from './data.js';

console.log(feedData);
var i = 0;
var accentColor1 = feedData[i].OemAccentColor1;
var accentColor2 = feedData[i].OemAccentColor2;

function nextView() {
    console.log("hello")
    i++;
    items();
    check();
}

function disclaimerVisable () {
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

function fuck() {
    console.log("fuck");
}

function items() {
    $(".contentContainer").html(
        `<div class="disclaimerContent hidden"><div class="disclaimerText"></div></div>
            <div class="ad">
            <div class="header">
                <div class="dealerLogo"><img src="${feedData[i].OemLogoUrl}"/></div>
                <div class="seasonalLogo hidden"></div>
                <div class="dealerName">${feedData[i].DealerName}</div>
            </div>
            <div class="carName">${feedData[i].Year} ${feedData[i].Make} ${feedData[i].Model}</div>
            <div class="incentives">
            <div class="price"></div>
            <div class="required"></div>
            </div>      
            <div class="carImage">
                <div class="arrowLeft hidden"><</div>
                <div class="arrowRight hidden">></div>
            </div>
        </div> 
            <div class="disclaimer hidden">Disclaimer*</div>`)
    
    $(".arrowRight").on("click", nextView);
}

function check() {
    $('.carImage').css('background-image', `url(${feedData[i].PhotoUrl})`);
    $('.carImage').css('background-size', 'cover');
    $('.carImage').css('background-position', 'center');

    if (feedData.length > 0) {
        $('.arrowLeft').removeClass("hidden");
        $('.arrowRight').removeClass("hidden");
    }

    if (feedData[i].OemSeasonalLogoUrl !== "") {
        $(".seasonalLogo").html(`<img src="${feedData[i].OemSeasonalLogoUrl}"/>`);
        $(".seasonalLogo").removeClass("hidden");
        $(".dealerName").addClass("dealerNameWithSeasonal");
        $(".dealerName").removeClass("dealerName");
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

items();
check();

$(".disclaimer").mouseenter(function () {
    $(".disclaimerContent").removeClass("hidden");
})

$(".disclaimerContent").mouseenter(function () {
    $(".disclaimerContent").animate({
        "opacity": .8
    }, 150);
})

$(".disclaimerContent").mouseleave(function () {
    $(".disclaimerContent").addClass("hidden");
    $(".disclaimerContent").animate({
        "opacity": 0
    }, 150);
})

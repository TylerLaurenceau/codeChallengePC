import $ from 'jquery';
import { feedData } from './data.js';
import { i } from './main.js';

function checkDealerLength(){
    if (feedData[i].DealerName.length < 40) {
        $('.dealerName').removeClass("hidden");
    } else if (feedData[i].DealerName.length > 40) {
        $('.dealerNameLarge').removeClass("hidden");
    }    

    if (feedData.length > 1) {
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
}

export { checkDealerLength }

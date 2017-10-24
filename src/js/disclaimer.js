import $ from 'jquery';
import { feedData } from './data.js';
import { i } from './main.js';

function createDisclaimer(){
    if (feedData[i].PurchaseApr !== "" && feedData[i].PurchaseMonths !== "" && feedData[i].PurchaseDisclosure !== "") {
        $(".disclaimer").removeClass("hidden")
        $(".disclaimerText").html(`${feedData[i].PurchaseDisclosure}`)
    } else if (feedData[i].LeaseMonths !== "" && feedData[i].LeaseMonthlyPayment !== "" && feedData[i].LeaseDisclosure !== "") {
        $(".disclaimer").removeClass("hidden")
        $(".disclaimerText").html(`${feedData[i].LeaseDisclosure}`)
    }
}

export { createDisclaimer };
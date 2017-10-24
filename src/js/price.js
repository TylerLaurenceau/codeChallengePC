import $ from 'jquery';
import { feedData } from './data.js';
import { i } from './main.js';

function checkPrice(){
    if (feedData[i].PurchaseApr !== "" && feedData[i].PurchaseMonths !== "") {
        $(".price").html(`Purchase for $${feedData[i].PurchaseApr}/mo for ${feedData[i].PurchaseMonths} months`);
    } else if (feedData[i].LeaseMonths !== "" && feedData[i].LeaseMonthlyPayment !== "") {
        $(".price").html(`Lease for $${feedData[i].LeaseMonthlyPayment}/mo for ${feedData[i].LeaseMonths} months`);
    } else {
        $(".price").html(`Starting at ${feedData[i].LowestPrice}`)
    }
}

export { checkPrice }
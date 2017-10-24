import $ from 'jquery';
import { feedData } from './data.js';
import { i } from './main.js';

function checkRequiredText(){
    if (feedData[i].OemRequiredText !== "") {
        $(".required").append(`${feedData[i].OemRequiredText}`);
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

export { checkRequiredText };
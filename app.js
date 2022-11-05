let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

function fromDollarToYen(dollar) {
    let result = Math.floor((dollar/oneEuroIs.USD)*oneEuroIs.JPY)
    return result;
}

console.log(fromDollarToYen(1));


function fromEuroToDollar(euro) {
    let convertion = oneEuroIs.USD*euro
    return convertion;
}

console.log(fromEuroToDollar(100));

function fromYanToPound(yen) {
    let exchange = Math.ceil((yen/oneEuroIs.JPY)*oneEuroIs.GBP)
    return exchange;
}

console.log(fromYanToPound(127.9));


module.exports = { fromDollarToYen, fromEuroToDollar, fromYanToPound };
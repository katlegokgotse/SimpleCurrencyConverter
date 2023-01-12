let input = require('sync-input');
const currencyArray = ["JPY", "EUR", "RUB", "USD", "GBP"];
const exchangeRates = {
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    USD: 1,
    GBP: 0.75
};
const currencyConverter = () => {
    let dollarUsd = '1 USD equals'
    console.log("Welcome to Currency Converter!");
    console.log(`${dollarUsd} 1 USD\n${dollarUsd} 113.5 JPY`);
    console.log(`${dollarUsd} 0.89 EUR\n${dollarUsd} 74.36 RUB`);
    console.log(`${dollarUsd} 0.75 GBP`);
    console.log(`What do you want to do?`);
    console.log(`1-Convert currencies 2-Exit program`);
}
const calculateCurrency = () => {
    console.log("What do you want to convert?");
    let currencyFrom = input(`From: `).toUpperCase();
    if (!exchangeRates[currencyFrom]) {
        console.log(`Unknown currency`);
        return;
    }

    let currencyTo = input(`To: `).toUpperCase();
    if (!exchangeRates[currencyTo]) {
        console.log(`Unknown currency`);
        return;
    }

    let currencyAmount = input(`Amount: `);

    if(currencyAmount < 1){
        console.log(`The amount cannot be less than 1`);
        return;
    }
    if(isNaN(currencyAmount)){
        console.log(`The amount has to be a number`);
        return;
    }
    let result = currencyAmount * exchangeRates[currencyTo] / exchangeRates[currencyFrom];
    console.log(`Result: ${currencyAmount} ${currencyFrom} equals ${result.toFixed(4)} ${currencyTo}`);

}
currencyConverter();
let userChoice = input();
while((userChoice != 2)){
    if(userChoice == 1){
        calculateCurrency();
       break; 
    }else if(isNaN(userChoice) || (userChoice> 2) || (userChoice<1)){
        console.log(`Unknown input`);
        console.log(`What do you want to do?`);
        console.log(`1-Convert currencies 2-Exit program`);
        userChoice = input();
    }
}
if(userChoice == 2) {
    console.log(`Have a nice day!`);
    return;
}

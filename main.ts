#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";

console.log(chalk.bgMagentaBright.bold("\n\tWELCOME TO MY CURRENCY CONVERTER APP"));

let exchangeRates: any = {

    USD : 1,   //Base currency is USD .... changed all currencies equivalent to USD conversion
    EURO : 0.92,
    POUNDS : 0.79,
    AUD : 1.71,
    CAD : 1.36,
    PKR : 278.40,
    INR : 83.25

};

let currency_conversion = await inquirer.prompt(
    [


 
        {
           name: "from",
           message: "Select the currency you have",
           type: "list",
           choices: ["USD", "EURO", "POUNDS", "AUD", "CAD", "PKR", "INR"]
        },

        {
           name: "to",
           message: "Select the currency you want to change to",
           type: "list",
           choices: ["USD", "EURO", "POUNDS", "AUD", "CAD", "PKR", "INR"]

        },

        {
           name: "userAmount",
           message: "Enter your Amount",
           type: "number"
        }

    ]
);

let fromAmount = exchangeRates[currency_conversion.from] // we will get rates from above exchangeRates variable
let toAmount = exchangeRates[currency_conversion.to]  // we will get rates from above exchangeRates variable
let amount = currency_conversion.userAmount
let baseAmount = amount/fromAmount      // here USD is base currency 
let convertedAmount = baseAmount * toAmount

console.log(chalk.yellowBright.bold(convertedAmount))
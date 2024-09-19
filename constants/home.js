import stockInvest from '@/public/assets/home/stock-invest.svg';
import cryptocurrency from '@/public/assets/home/cryptocurrency.svg';
import propertyInvest from '@/public/assets/home/property-invest.svg';
import goldInvest from '@/public/assets/home/gold-invest.svg';
import depositInvest from '@/public/assets/home/deposit-invest.svg';
import mutualFunds from '@/public/assets/home/mutual-fund.svg';

function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export const getLearning = [
    {
        id: guidGenerator(),
        title: "Stock investment",
        desc: "Stock investment is the activity of buying shares or ownership of a small part of a company that is traded on the stock market.",
        thumbnail: stockInvest,
    },
    {
        id: guidGenerator(),
        title: "Cryptocurrency",
        desc: "Cryptocurrency is a digital currency that uses cryptographic technology for security, and operates on blockchain, a decentralized system.",
        thumbnail: cryptocurrency,
    },
    {
        id: guidGenerator(),
        title: "Property investment",
        desc: "Property investment is the activity of buying, owning and managing property such as houses, apartments, land with the aim of making a profit.",
        thumbnail: propertyInvest,
    },
    {
        id: guidGenerator(),
        title: "Gold investment",
        desc: "Gold investment is the activity of buying gold, either in physical form (bars, coins, jewelry) or digitally, with the aim of making a profit from the increase in gold prices.",
        thumbnail: goldInvest,
    },
    {
        id: guidGenerator(),
        title: "Deposit investment",
        desc: "Deposit investment is a deposit of money in a bank for a certain period of time with a fixed interest rate. During this period money cannot be withdrawn without penalty.",
        thumbnail: depositInvest,
    },
    {
        id: guidGenerator(),
        title: "Mutual funds",
        desc: "Mutual funds are a type of investment where funds from many investors are collected and managed by an investment manager to invest in various assets.",
        thumbnail: mutualFunds,
    },
] 
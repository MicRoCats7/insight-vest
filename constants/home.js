import stockInvest from '@/public/assets/home/stock-invest.png';
import cryptocurrency from '@/public/assets/home/cryptocurrency.png';
import propertyInvest from '@/public/assets/home/property-invest.png';
import goldInvest from '@/public/assets/home/gold-invest.png';
import depositInvest from '@/public/assets/home/deposit-invest.png';
import mutualFunds from '@/public/assets/home/mutual-fund.png';

function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export const getLearning = [
    {
        id: "dd12d606-6761-d3e1-d178-ee58a42605b9",
        title: "Stock investment",
        desc: "Stock investment is the activity of buying shares or ownership of a small part of a company that is traded on the stock market.",
        thumbnail: stockInvest,
    },
    {
        id: 'b54c8d3c-9e36-1bcd-d26c-97002f1d26c0',
        title: "Cryptocurrency",
        desc: "Cryptocurrency is a digital currency that uses cryptographic technology for security, and operates on blockchain, a decentralized system.",
        thumbnail: cryptocurrency,
    },
    {
        id: 'e8e3663e-80a7-dbef-7fcd-b7a26c1c78be',
        title: "Property investment",
        desc: "Property investment is the activity of buying, owning and managing property such as houses, apartments, land with the aim of making a profit.",
        thumbnail: propertyInvest,
    },
    {
        id: "ac0ddb8d-4369-7da1-70a7-d3db083e5862",
        title: "Gold investment",
        desc: "Gold investment is the activity of buying gold, either in physical form (bars, coins, jewelry) or digitally, with the aim of making a profit from the increase in gold prices.",
        thumbnail: goldInvest,
    },
    {
        id: 'ef3c4e75-b1b9-425d-89f7-a3915319d9f0',
        title: "Deposit investment",
        desc: "Deposit investment is a deposit of money in a bank for a certain period of time with a fixed interest rate. During this period money cannot be withdrawn without penalty.",
        thumbnail: depositInvest,
    },
    {
        id: '25e0cd2e-42e8-983b-b936-bde4c9492ad6',
        title: "Mutual funds",
        desc: "Mutual funds are a type of investment where funds from many investors are collected and managed by an investment manager to invest in various assets.",
        thumbnail: mutualFunds,
    },
] 
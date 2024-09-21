import stockInvest from '@/public/assets/home/stock-invest.png';
import cryptocurrency from '@/public/assets/home/cryptocurrency.png';
import propertyInvest from '@/public/assets/home/property-invest.png';
import goldInvest from '@/public/assets/home/gold-invest.png';
import depositInvest from '@/public/assets/home/deposit-invest.png';
import mutualFunds from '@/public/assets/home/mutual-fund.png';
import share from '@/public/assets/education/share.png';

export const getAllEducation = [
    {
        id: "dd12d606-6761-d3e1-d178-ee58a42605b9",
        title: "Stock investment",
        desc: "Stock investment is the activity of buying shares or ownership of a small part of a company that is traded on the stock market.",
        thumbnail: stockInvest,
        material: {
            id: "d050f9a5-e3e8-2ea8-cbd2-64948ba5db1b",
            title: "Education Stock Investment",
            sub_material: [
                {
                    id: "645e813f-1105-6913-ab54-3bf24041ea12",
                    chapter_title: "Basic Material",
                    content: [
                        {
                            id: "d38960b0-0fd9-407f-9035-003713bb9f4d",
                            heading: "What are Stocks?",
                            image: share,
                            text: `Stocks are like buying a small share of a company. For example, if you buy Apple shares, it means you own a small part of the Apple company.
When the company is running well and making profits, the value of its shares can rise. This means you can sell the shares at a higher price than when you bought them, thereby making a profit. However, if the company experiences difficulties, the value of its shares could fall, so you could lose money.
So, shares are an investment that can provide big profits, but they can also be risky.`,
                            content: []
                        },
                        {
                            id: "95335362-e9b0-4b92-34d1-2471606382f5",
                            heading: "Stock Market?",
                            image: null,
                            text: `Imagine the stock market as a vast place where people buy and sell small portions of a company. These small portions are called stocks. So, when you buy a company's stock, it means you become a part-owner of that company.

A stock exchange is an official place where stocks are traded. It’s like a traditional market, but specifically for stocks. Here, the price of stocks is determined by the demand and supply from investors. If many people want to buy a company’s stock, the price will go up. Conversely, if many want to sell, the price will go down.`,
                            content: [
                                {
                                    id: "ac5ffaac-82d4-267f-e5d4-c95d65d26ed0",
                                    chapter_title: "What is a Stock Index?",
                                    text: `Imagine a stock index as a number that represents the average price movement of a specific group of stocks. So, this stock index acts like a barometer indicating the overall market condition. If the index rises, it means the average prices of the stocks within that index are also rising, and vice versa.`
                                },
                                {
                                    id: "42a643d0-502a-d81f-d108-7e8565ce9bc5",
                                    chapter_title: "Why are Stocks Index important?",
                                    text: `Market Benchmark: Stock indices are often used as benchmarks to measure the overall performance of the market. For example, in Indonesia, the most commonly used index is the Composite Stock Price Index (IHSG).

Benchmark for Portfolios: Stock indices are also used as a benchmark to measure the performance of an investment portfolio. If your investment portfolio provides a higher return than the index, it means your portfolio is performing better than the market as a whole.

Foundation for Investment Products: Many investment products, such as index mutual funds, use stock indices as a reference.`
                                },
                                {
                                    id: "ac5ffaac-82d4-267f-e5d4-c95d65d26ed0",
                                    chapter_title: "Examples of Stock Indices",
                                    text: `IHSG (Indonesia): Measures the performance of the stocks listed on the Indonesia Stock Exchange.
S&P 500 (United States): Measures the performance of 500 large companies in the United States.
Nikkei 225 (Japan): Measures the performance of the 225 largest companies listed on the Tokyo Stock Exchange.`
                                },
                            ]
                        },
                        {
                            id: "2d9031a8-8857-d6c0-bbc1-4ef26df5ff4f",
                            heading: "Types of Stocks?",
                            image: null,
                            text: `Stocks can be categorized based on several criteria. Here are some common types of stocks:`,
                            content: [
                                {
                                    id: "440d4731-c5e0-68a6-5d6c-e04ec35b7473",
                                    chapter_title: "Based on Asset Ownership",
                                    text: `1. Common Stock  
   Common stock is the most common type of stock, where the owner has voting rights in shareholders' meetings and is entitled to receive dividends if the company distributes them. However, the value of common stock tends to be more volatile compared to other types of stocks.

2. Preferred Stock  
   Preferred stock offers advantages over common stock, such as priority in receiving dividends and claims on company assets in the event of liquidation. Although it typically does not grant voting rights in shareholders' meetings, preferred stock tends to be more stable than common stock, though it usually has more limited growth potential.`
                                },
                            ]
                        },
                        {
                            id: "34cf0c2b-3af3-9393-dbb6-136f1bfd21ac",
                            heading: "Important Terms",
                            image: null,
                            text: `Let’s discuss some important terms in the world of stocks that need to be understood:`,
                            content: [
                                {
                                    id: "819fa266-6f3b-171d-7023-46ecf2d81a09",
                                    chapter_title: "Basic Terms",
                                    text: `1. Stock: A small ownership share in a company.
2. Stock Exchange: The official place for buying and selling stocks.
3. Investor: A person who buys stocks with the expectation of making a profit.
4. Dividend: A company's profit distribution to shareholders.
5. Capital Gain: The profit gained from the difference between the selling and buying price of a stock.
6. Lot: A unit of stock in trading, usually 1 lot = 100 shares.`
                                },
                                {
                                    id: "c1d595e4-7d5e-fb84-6c2d-7d7c46205c7b",
                                    chapter_title: "Terms Related to Price Movements",
                                    text: `1. Bullish: A market condition where stock prices tend to rise.
2. Bearish: A market condition where stock prices tend to fall.
3. Volatility: The degree of stock price fluctuations over a certain period.
4. Trend: The direction of stock price movements over a specific time, either upward (uptrend), downward (downtrend), or sideways (moving within a price range).`
                                },
                                {
                                    id: "ba3e0e8e-797b-506b-09a5-f8ddd36b9e6f",
                                    chapter_title: "Terms Related to Analysis",
                                    text: `1. Fundamental Analysis: A method of analysis focusing on a company's core factors such as financial performance, industry prospects, and economic conditions.
2. Technical Analysis: A method of analysis focusing on historical price patterns and trading volumes to predict future price movements.
3. Stock Index: A number representing the average price movement of a specific group of stocks (e.g., IHSG in Indonesia).`
                                },
                                {
                                    id: "5f36125a-6f4e-797b-ffcc-ea36a4ee4261",
                                    chapter_title: "Other Terms",
                                    text: `1. IPO (Initial Public Offering): The first time a company offers its shares to the public.
2. Liquidity: The ease with which a stock can be bought or sold without causing significant price changes.
3. Market Capitalization: The total value of a company, calculated by multiplying the stock price by the number of outstanding shares.
4. Portfolio: A collection of investments owned by an investor.
5. Broker: An intermediary that helps investors conduct stock buying and selling transactions.`
                                },
                                {
                                    id: "5f36125a-6f4e-797b-ffcc-ea36a4ee4261",
                                    chapter_title: "Common Terms",
                                    text: `1. Blue Chip: Stocks of large, established companies with a solid reputation.
2. Growth Stock: Stocks of companies that are experiencing rapid growth.
3. Value Stock: Stocks of companies considered undervalued, where the price does not yet reflect their fundamental value.`
                                },
                            ]
                        },
                    ]
                },
                {
                    id: "34cf0c2b-3af3-9393-dbb6-136f1bfd21ac",
                    chapter_title: "Stock Investment Strategy",
                    content: [
                        {
                            id: "34cf0c2b-3af3-9393-dbb6-136f1bfd21ac",
                            heading: "Buy and Hold",
                            image: null,
                            text: `This strategy involves buying stocks and holding them for the long term, without frequently trading. The goal is to benefit from stock price increases and dividends (profit distribution from the company) over time.

Example: You buy shares of a large company like Bank BRI and hold them for 5 years, believing that the company will continue to grow.`,
                            content: [
                                {
                                    id: "a4f27838-d81e-5277-7d0f-9fdbc9d8c65a",
                                    chapter_title: "Advantages",
                                    text: `1. Potential for significant long-term profits.
2. No need to frequently monitor the market.
3. Low transaction costs (due to infrequent buying and selling).`
                                },
                                {
                                    id: "75ae95dd-e2f8-5262-6a07-8be811a75dd2",
                                    chapter_title: "Disadvantages",
                                    text: `1. It takes a long time to see results.
2. You must endure market fluctuations (price changes).`
                                },
                                {
                                    id: "d72f7636-5481-aeeb-de6d-86364f20cb90",
                                    chapter_title: "Risk",
                                    text: `The main risk of this strategy is market volatility, which can cause stock prices to drop in the short term. Investors must be prepared to face price fluctuations that may temporarily lower the value of their investment. In a bad market condition, stock prices can fall dramatically, and it may take a long time to recover, or they may never recover if the company faces major problems or fails to compete.`
                                },
                                {
                                    id: "322a3d5b-68b8-cc16-67f6-97fc64dc7f9a",
                                    chapter_title: "Important to Remember!",
                                    text: `1. Portfolio Diversification: Don’t rely on just one stock. Invest in various stocks from different sectors to reduce risks related to the performance of individual companies.

2. Periodic Monitoring: Although this strategy doesn’t require daily monitoring, perform regular evaluations of the company’s financial health and industry outlook to ensure that your investment is still worthwhile.

3. Consider Economic Recession: Always have an emergency plan in case the market experiences a recession or crisis, such as setting aside reserve funds or investing in more stable assets.`
                                },
                            ]
                        },
                        {
                            id: "6834ff2a-a08c-b278-7ea4-cc0b927e9577",
                            heading: "Swing Trading",
                            image: null,
                            text: `This strategy involves buying stocks when their price is low and selling them when the price rises over a short period, typically a few days or weeks.

                        Example: Buying PT Telkom (TLKM) shares when their price drops due to temporary negative sentiment, then selling them when the price recovers in a few weeks.`,
                            content: [
                                {
                                    id: "8f3d014f-8edd-77b9-2624-f14f2070becb",
                                    chapter_title: "Advantages",
                                    text: `1. Potential for quick profits.
                        2. Ability to take advantage of short-term price fluctuations.`
                                },
                                {
                                    id: "275861a7-330c-78d5-846e-e6ab31babb47",
                                    chapter_title: "Disadvantages",
                                    text: `1. Requires deeper and continuous market analysis.
                        2. Transaction costs (such as buying and selling fees) can be high if trading frequently.
                        `
                                },
                                {
                                    id: "20b608d7-57a0-067b-ae44-efe2539cf211",
                                    chapter_title: "Risk",
                                    text: `The main risk in swing trading lies in unpredictable market movements. Stock prices can suddenly reverse direction due to news or external factors, causing losses in a short time. Additionally, because the focus is on the short term, investors are often tempted to make emotional decisions, such as selling stocks at the wrong time due to fear of losing more money.
                        `
                                },
                                {
                                    id: "0dee10ed-f007-140c-af5a-50f8bce29b4e",
                                    chapter_title: "Important to Remember!",
                                    text: `1. Use Technical Analysis: Master technical analysis to understand price patterns and trading volumes, which can help predict short-term price movements.

                        2. Manage Emotions and Discipline: Stay calm and stick to your trading plan. Avoid making emotional decisions and follow the trading strategies and rules you’ve set.

                        3. Set Loss Limits and Profit Targets: Set daily loss limits and realistic profit targets to avoid large losses and capture profits when available.`
                                },
                            ]
                        },
                        {
                            id: "d3e7fc5f-f449-c84f-8a87-f5a13470a857",
                            heading: "Dividen Investing",
                            image: null,
                            text: `Investors buy shares of companies that regularly distribute dividends (a portion of company profits shared with shareholders). The main goal is to earn passive income from dividends, in addition to the potential for stock price appreciation.

Example: Buying shares of PT Unilever Indonesia (UNVR), which is known for consistently paying dividends every year.`,
                            content: [
                                {
                                    id: "c77e8c0f-5997-2d7c-fb9b-694eb5334341",
                                    chapter_title: "Advantages",
                                    text: `1. Passive income from regular dividends.
2. Dividend-paying stocks tend to be more stable as the companies are usually well-established.`
                                },
                                {
                                    id: "392ab14e-bf28-d706-70b0-ad143e61ad8f",
                                    chapter_title: "Disadvantages",
                                    text: `1. Stock price growth may be slower compared to growth stocks.
2. The amount of dividends can vary or be stopped if the company experiences a decline in profits.`
                                },
                                {
                                    id: "556bf293-d252-020f-ddf0-660f4e1986c9",
                                    chapter_title: "Risk",
                                    text: `The main risk of dividend investing is the uncertainty regarding future dividend payments. If a company faces financial difficulties, it may lower or even stop paying dividends. Additionally, the stock price of dividend-paying companies can still be vulnerable to changes in economic and market conditions. For example, during an economic crisis, even stable companies’ stock prices can drop significantly, resulting in capital losses for investors.`
                                },
                                {
                                    id: "e11d9a94-ed35-f76d-3789-99f2e46f707c",
                                    chapter_title: "Important to Remember!",
                                    text: `1. Choose Companies with a Strong Dividend Track Record: Invest in companies with a stable history of paying and increasing dividends, not just those offering high dividends temporarily.
   
2. Diversify Dividend Stocks: Don’t rely on just one stock for dividends. Diversify your investments across several companies to reduce the risk if one company reduces or stops paying dividends.
   
3. Monitor the Company's Financial Health: Review the company’s financial statements regularly to ensure it can continue paying dividends in the future. Companies with a very high dividend payout ratio may be at risk if profits decline.`
                                },
                            ]
                        },
                        {
                            id: "8b2c102e-c559-2935-61df-f47d2d38e621",
                            heading: "Dividen Investing",
                            image: null,
                            text: `Investors buy shares of companies that are expected to experience rapid growth in the future. Such companies typically do not pay dividends, but reinvest in their business for further growth.

Example: Buying shares of a fast-growing tech company like Bukalapak (BUKA).`,
                            content: [
                                {
                                    id: "a2a995f0-b036-2751-927f-dc5c3ba6dd0e",
                                    chapter_title: "Advantages",
                                    text: `1. Potential for significant profits if the company successfully grows.
2. Suitable for long-term growth-oriented investors.`
                                },
                                {
                                    id: "b6a811a4-67d8-a5aa-16c5-55d7fff8fd8f",
                                    chapter_title: "Disadvantages",
                                    text: `1. Higher risk, as the companies may not be stable yet.
2. Stock prices are often volatile due to market expectations.`
                                },
                                {
                                    id: "ab61cca9-b693-fb19-2d3d-a9edfd627399",
                                    chapter_title: "Risk",
                                    text: `The risk in growth investing lies in the uncertainty of whether the company will actually grow as anticipated. If the expected growth does not materialize, the stock price can drop dramatically. Growth companies often lack stable profits, making them more vulnerable to changes in economic conditions, increased competition, or internal issues that can pressure stock prices.
`
                                },
                                {
                                    id: "04dfdaeb-07c6-aea2-0f31-0aa03779ad34",
                                    chapter_title: "Important to Remember!",
                                    text: `1. Set Loss Limits: Use stop-loss orders (automatic sell orders when the stock price reaches a certain level) to limit losses if the stock price drops sharply.

2. Evaluate Performance Periodically: Regularly review growth projections and the company’s performance to ensure it continues to meet growth expectations.

3. Be Cautious with Valuation: Avoid paying too high a price for a stock, even if its potential seems great. Ensure the stock's valuation is reasonable compared to the expected growth.`
                                },
                            ]
                        },
                        {
                            id: "69e6f2da-c4a6-4a3c-0074-66a064689af0",
                            heading: "Value Investing",
                            image: null,
                            text: `This strategy involves buying shares of companies that are considered undervalued (priced below their true value) based on fundamental analysis. Investors believe that the stock price will rise over time, approaching the company’s intrinsic value.

Example: Buying shares of a mining company whose price has fallen due to temporary external factors, while its fundamental performance remains strong.`,
                            content: [
                                {
                                    id: "a677d3e2-09d5-db3f-9876-fcaabe059edd",
                                    chapter_title: "Advantages",
                                    text: `1. Potential to acquire shares at a low price.
2. Reduces the risk of overvaluation (stocks priced too high).`
                                },
                                {
                                    id: "84f2e3c5-8594-da1c-b797-ff70e55e157c",
                                    chapter_title: "Disadvantages",
                                    text: `1. It can take a long time for the stock price to rise to its true value.
2. Not all undervalued stocks will increase; some may be undervalued due to serious problems within the company.`
                                },
                                {
                                    id: "7ddf2289-bb1a-50a7-5a92-9ff1df9f3ae3",
                                    chapter_title: "Risk",
                                    text: `The risk of value investing is that stocks that appear undervalued may never reach the expected value. Some companies may remain undervalued due to internal issues such as poor management, inability to compete, or unfavorable industry changes. In this scenario, the stock price can continue to decline, potentially resulting in losses. Additionally, a deep understanding of fundamental analysis is required to identify truly undervalued stocks, rather than just cheap stocks due to poor performance.
`
                                },
                                {
                                    id: "9fa93621-be71-10fe-5392-ce6aa63f325a",
                                    chapter_title: "Important to Remember!",
                                    text: `1. Conduct Thorough Research: Ensure you fully understand why a stock is considered undervalued. Carefully examine the company’s fundamentals, including financial health, management, and future prospects.

2. Use Margin of Safety: Don’t buy stocks just because they are cheap. Make sure there is a margin of safety—the distance between the purchase price and the intrinsic value of the stock—to protect against further declines in value.

3. Monitor Fundamental Changes: Keep updated on changes within the company that may affect valuation, such as management changes or shifts in the business model.`
                                },
                            ]
                        },
                    ]
                },
                {
                    id: "affb04df-3f2f-4b47-660c-1dae9a085b06",
                    chapter_title: "Stock Tax",
                    content: [
                        {
                            id: "577fc496-902a-5a70-b596-fc1c79ce5f89",
                            heading: "Tax on Stock Sales",
                            image: null,
                            text: `According to Article 4, paragraph 2 of the Income Tax Law, every stock sale transaction is subject to a final tax of 0.1% of the gross transaction value, applicable to both individuals and legal entities. This tax must be paid at the time of the stock sale, without considering any profits or losses. The tax deduction process is carried out by the exchange operator through a broker at the time of the transaction.`,
                            content: []
                        },
                        {
                            id: "b52ae124-b174-7ae9-f541-bc0589ac761b",
                            heading: "Dividend Tax",
                            image: null,
                            text: `Dividend taxes vary depending on the type of taxpayer and their status. For domestic individuals, a dividend tax of 10% of gross income is imposed under the final income tax provisions of Article 4, paragraph 2. For legal entities, the dividend tax is 15% of gross income for those with a Taxpayer Identification Number (NPWP) and 30% for those without it. Foreign taxpayers must pay a dividend tax of 20% of gross income if their home country does not have a tax treaty with Indonesia.`,
                            content: []
                        },
                        {
                            id: "0545a0b5-c108-dea9-37bd-81fa2fb979e8",
                            heading: "Reporting Stock Taxes",
                            image: null,
                            text: `Even if no transactions or dividends are received, investors are still required to report their stock taxes. Reporting is done through the SPT 1770-III form, providing information about stock sales, dividends received, and the market value of stocks at the end of the year.`,
                            content: []
                        },
                        {
                            id: "1b249979-fcb7-6d12-bba5-ed39a8c3f5ec",
                            heading: "Effects of Tax Increases",
                            image: null,
                            text: `Tax increases, such as the proposed entertainment tax, can impact the stock prices of companies in the affected sectors. For example, an increase in entertainment taxes can lower the revenue of entertainment businesses and negatively affect the stock prices of issuers in that industry, potentially causing losses for investors.`,
                            content: []
                        },
                        {
                            id: "6044feb3-5bf6-dd80-a09a-da7390f243ef",
                            heading: "Conclusion",
                            image: null,
                            text: `Stock taxes consist of taxes on stock sales and dividends, with different regulations for individuals, legal entities, and foreign taxpayers. While tax payments are made only during transactions or dividend distributions, tax reporting must still be done annually. Tax increases can affect stock prices, especially in impacted sectors, making it important for investors to monitor regulatory changes and their impacts on their portfolios.`,
                            content: []
                        },
                    ]
                },
                {
                    id: "340f0a68-7592-164d-b987-f17263976c3a",
                    chapter_title: "Stock Buying Guide",
                    content: [
                        {
                            id: "f93afc87-a768-e272-3b8c-7710a8091989",
                            heading: "Creating an Account with a Securities Firm",
                            image: null,
                            text: `In this guide, you will learn how to buy stocks, starting from registering with a securities company, funding your investment account, buying and selling stocks, to withdrawing profits to your bank account.

# Creating an Account with a Securities Firm
The first step to starting stock investment is to open an account with a securities company or stock broker. The securities firm facilitates stock transactions and distributes dividends to you. When registering, an Investor Fund Account (RDI) will also be created for you, which is a special bank account for investment activities. Although it is in your name, this account is opened by the securities firm and does not come with features like an ATM card, as it is solely for stock transactions.

After opening the RDI, you will also receive a securities account. This account is used to log in to the securities platform either via an app or a website. For example, Indo Premier is one of the securities firms that allows online registration with a minimum deposit of only IDR 100,000, making it an ideal choice for beginners.`,
                            content: [
                                {
                                    id: "3f9ab296-0b88-b9c8-9892-f49bf7e2dd2d",
                                    chapter_title: "How to Open an Account at Indo Premier",
                                    text: `1. Download the IPOT app from the App Store or Play Store.
2. Select Registration and enter your email and phone number.
3. Fill in the requested information, such as your ID number.
4. If you do not have an e-ID, registration can be done through the Indo Premier website by selecting Manual Registration.`
                                }
                            ]
                        },
                        {
                            id: "d718e524-54b0-4912-1ae7-cde113d45266",
                            heading: "Funding Your Investor Fund Account (RDI)",
                            image: null,
                            text: `Once your account is created, the next step is to fund your RDI. This process is very easy; you simply need to transfer money to the provided RDI account number. Each time your balance is topped up, you will receive confirmation via email. This balance will later be used to buy stocks.`,
                            content: []
                        },
                        {
                            id: "b6d66545-6adc-4515-5b87-eaa69df8aa48",
                            heading: "Buying Stocks",
                            image: null,
                            text: `Once your balance is funded, you are ready to start buying stocks. For example, you might want to buy Bank BRI shares with the stock code BBRI. Before making a purchase, it’s important to check the company’s fundamental conditions, such as net profit and equity, as well as important ratios like PER and PBV. If the fundamental indicators show good potential and the stock price is at a discounted level, this might be the right moment to buy.`,
                            content: [
                                {
                                    id: "94765c2c-b680-8229-e19e-efe2fdfc9c35",
                                    chapter_title: "How to Buy Stocks",
                                    text: `1. Enter the stock code you wish to buy, e.g., BBRI.
2. Specify the number of lots you want to buy. One lot consists of 100 shares.
3. Double-check the price you want to set through the Orderbook.
4. Select Fast Buy and set the appropriate purchase price.`
                                }
                            ]
                        },
                        {
                            id: "a2b77491-c16f-91a5-7c45-ca7242429846",
                            heading: "Understanding the Orderbook",
                            image: null,
                            text: `The Orderbook is an important tool in stock transactions that shows the buy (bid) and sell (offer) prices set by buyers and sellers. Transactions occur if the bid and offer prices match. In the Orderbook, you can also see the number of lots queued at each price, providing insight into market liquidity.`,
                            content: []
                        },
                        {
                            id: "7ac72808-d0d1-c966-e573-bc17698dfe68",
                            heading: "Selling Stocks",
                            image: null,
                            text: `After buying stocks, you can wait for the price to rise to your desired target before selling. For example, after some time, if the BBRI stock you bought at IDR 2,620 has risen to IDR 3,200, you would gain about 22%.`,
                            content: [
                                {
                                    id: "042f7722-463a-cdad-8c07-3796a5030c69",
                                    chapter_title: "How to Sell Stocks",
                                    text: `1. Select Fast Sell and enter your desired selling price.
    2. You can sell all your shares at once or gradually, depending on your strategy.
    3. After the transaction is completed, the profit will be immediately recorded in your account.`
                                }
                            ]
                        },
                        {
                            id: "7edafdbf-2e5e-495e-647e-46f1c1fc66fe",
                            heading: "Withdrawing Profits",
                            image: null,
                            text: `Once you have made a profit from selling stocks, you can withdraw funds from your RDI to your personal bank account. To do this, log in to the Indo Premier website, select Fund Withdrawal, and enter the amount you wish to withdraw. If your balance is sufficient, the money will be transferred to your bank account on the same day.`,
                            content: []
                        },
                    ]
                },
            ]
        }
    },



    {
        id: 'b54c8d3c-9e36-1bcd-d26c-97002f1d26c0',
        title: "Cryptocurrency",
        desc: "Cryptocurrency is a digital currency that uses cryptographic technology for security, and operates on blockchain, a decentralized system.",
        thumbnail: cryptocurrency,
        material: {
            id: "c03672c2-2b3b-6e0e-ef45-02c45debfc7e",
            title: "Education Cryptocurrency Investment",
            sub_material: [
                {
                    id: "e54a26be-859d-73e6-80f8-4a6c6bacfc7c",
                    chapter_title: "Introduction to Cryptocurrency",
                    content: [
                        {
                            id: "d58ec6e8-3719-8cff-0233-82e9a39d2f99",
                            heading: "What is Cryptocurrency",
                            image: null,
                            text: `Imagine you’re at an amusement park. Instead of using regular money (like dollars or rupiah), you need special tokens to enjoy the rides, buy snacks, and play games. These tokens work just like money inside the park but are unique to that park. Similarly, cryptocurrency is a form of digital money, but it’s used and trusted in the digital world, especially in specific online communities or platforms.

Cryptocurrency is like money, but it only exists digitally. You can’t hold it like cash. It’s stored and transferred over the internet.
Traditional money is controlled by banks and governments. With cryptocurrency, no one person or institution controls it. It's decentralized, meaning it runs on a network of computers around the world. These computers help verify and record transactions in a way that's hard to manipulate.

Every transaction made with cryptocurrency is recorded on something called a blockchain (a public ledger). Imagine a giant, secure notebook where every time someone uses cryptocurrency, a note is made. But instead of one person holding the notebook, everyone in the network can see and verify it.
To make sure that people can’t cheat or steal the tokens, cryptography (the use of math to secure information) is used. It’s like a secret code that keeps your tokens safe and ensures only you can use them.`,
                            content: [
                                {
                                    id: "5825ac73-59de-c741-be91-906cebfeb093",
                                    chapter_title: "Technical Terms in Simple Words",
                                    text: `Cryptography: Think of it like a super-advanced secret code that only people with the correct key can unlock. This keeps transactions secure.
Decentralized: Instead of one company or bank controlling the money, a network of computers around the world shares the responsibility.
Blockchain: A digital book that everyone can see, which keeps track of all the transactions and ensures nobody can cheat.`
                                },
                            ]
                        },
                        {
                            id: "358be729-363d-abef-de5e-12f83d889a09",
                            heading: "Blockchain Technology",
                            image: null,
                            text: `Blockchain Technology is the foundation that makes cryptocurrencies work. Here's an easy way to understand it with an analogy:`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Blockchain as a Public Ledger",
                                    text: `Imagine a giant notebook that’s open to everyone. Every time someone makes a transaction using cryptocurrency, like sending Bitcoin to a friend, that transaction is written down in this notebook. But there’s a special twist: once something is written in the notebook, it can’t be erased or changed, so everyone can always look back and trust what’s been recorded. This notebook is like a blockchain—a digital record of all transactions, shared by everyone using the network.`
                                },
                                {
                                    id: "48f0b1d7-ad08-9f01-74e2-f5e732e919f1",
                                    chapter_title: "Blocks and Chains",
                                    text: `Now, picture this: the notebook is divided into pages, and each page holds a list of transactions. In the blockchain world, these pages are called blocks. Once a block is full of transactions, it gets added to the previous blocks, forming a chain of blocks—hence the name “blockchain.” Each block has a special “stamp” (called a cryptographic hash) that links it to the previous block, making it impossible to change any page without everyone noticing.`
                                },
                                {
                                    id: "e35ffde1-e133-9a59-330f-068ce93b33f0",
                                    chapter_title: "Decentralization: No Single Keeper",
                                    text: `Unlike a regular bank ledger, where the bank is the only one keeping track of your money, this giant notebook isn’t controlled by any one person or company. Instead, everyone in the network has a copy of the notebook, and they all work together to make sure the records are accurate. This is called decentralization—no one single person is in charge, and everyone can verify the transactions.`
                                },
                                {
                                    id: "c2f60f84-2abf-ce3b-02ed-3e272432fc7a",
                                    chapter_title: "Miners and Proof of Work (PoW)",
                                    text: `To make sure that people aren’t just writing fake transactions in the notebook, there are special people called miners. Miners are like security guards for the notebook. They use their computers to solve really hard math problems (called Proof of Work) to verify the transactions and make sure everything is correct. Once they solve the problem, they add a new block to the chain and get a reward in the form of cryptocurrency, like Bitcoin.`
                                },
                                {
                                    id: "ed8d77dc-cd91-7288-428a-b0f2de9d83fd",
                                    chapter_title: "Security: Cryptography",
                                    text: `The blockchain is kept safe through cryptography, which is like a super complex lock that can only be opened with the right key. This ensures that no one can alter the data or steal the money without everyone else noticing.`
                                },
                                {
                                    id: "96d3a0ab-4d0a-58b0-bfde-8427d912ff6d",
                                    chapter_title: "Analogy Recap",
                                    text: `Think of blockchain as a giant, open notebook (ledger) that anyone can view and trust. The pages of the notebook (blocks) are connected in a way that makes them impossible to change once they’re written (chain). Instead of one person managing the notebook, everyone has a copy, and special “security guards” (miners) make sure each new page is filled with correct information. Cryptography is the secret code that keeps everything secure.

This system allows cryptocurrencies to function without needing banks or middlemen, while ensuring that all transactions are secure and verifiable.`
                                }
                            ]
                        },
                        {
                            id: "af517b6e-488e-ff4d-56d1-45341b38094b",
                            heading: "Wallet and Security",
                            image: null,
                            text: `In the world of cryptocurrency, a wallet is where you store your digital money, just like how you would keep cash or cards in a physical wallet. However, there are two main types of wallets, and understanding them is key to keeping your cryptocurrency safe.`,
                            content: [
                                {
                                    id: "4ef0f7db-3784-98d8-e5e2-4969344f929a",
                                    chapter_title: "Types of Wallets: Hot Wallet vs. Cold Wallet",
                                    text: `1. Hot Wallet
A hot wallet is like keeping your money in your regular wallet or purse. It’s always connected to the internet, so it’s super easy to use for everyday transactions. However, just like how you wouldn’t carry all your life savings in your wallet, you shouldn’t keep large amounts of crypto in a hot wallet because it’s more vulnerable to hacking. Think of it like the money you carry in your pocket for day-to-day spending.

2. Cold Wallet
A cold wallet is more like a safe in your home or a vault at a bank. It’s not connected to the internet, which makes it much safer from hackers. People use cold wallets to store larger amounts of cryptocurrency that they don’t need to access often. It’s like storing your money in a safe where it’s harder for anyone to steal it.`
                                },
                                {
                                    id: "c5640d89-413a-5752-b93b-66ed2c58efc2",
                                    chapter_title: "Wallet Security and Private Keys",
                                    text: `To use your cryptocurrency, you need a special password called a private key. Think of this like the key to your house or the combination to your safe. Without it, no one (including you) can access your funds. But if someone else gets your private key, they can steal all your crypto. This is why it’s super important to keep your private key safe and never share it with anyone.`
                                },
                                {
                                    id: "cbc9b695-16da-99c4-5e47-94935d2ef8b9",
                                    chapter_title: "Summary for Learning Material",
                                    text: `1. A hot wallet is connected to the internet and easy to use but less secure.  
2. A cold wallet is offline, like a safe, and is the best way to store large amounts of cryptocurrency.  
3. Protect your private key as it’s the only way to access your cryptocurrency.  `
                                },
                            ]
                        },
                        {
                            id: "a8e753ef-43b1-4e9f-271f-030e9c820b83",
                            heading: "Type of Cryptocurrency",
                            image: null,
                            text: `Cryptocurrencies can be categorized based on their purpose and functionality. Here’s an introduction to the main types:`,
                            content: [
                                {
                                    id: "407bc2f9-944e-659c-3d6d-4b42c90f1e5f",
                                    chapter_title: "",
                                    text: `1. Payment Cryptocurrencies  
   Designed to function as digital money or a store of value, aiming to replace traditional fiat currencies like the dollar or euro.  
   Examples: Bitcoin (BTC), Litecoin (LTC), Bitcoin Cash (BCH).  

2. Smart Contract Platforms  
   Part of blockchains that allow the execution of smart contracts—self-executing contracts with terms written into code, enabling decentralized applications (dApps).  
   Examples: Ethereum (ETH), Cardano (ADA), Solana (SOL), Avalanche (AVAX).  

3. Stablecoins  
   Cryptocurrencies designed to minimize price volatility by being pegged to a stable asset, such as the US dollar or a basket of goods. Often used for trading or as a safe store of value in volatile markets.  
   Examples: Tether (USDT), USD Coin (USDC), Binance USD (BUSD).  

4. Governance Tokens  
   Tokens that give holders voting power within decentralized protocols, often part of Decentralized Finance (DeFi) platforms, allowing participation in decisions on upgrades and policy changes.  
   Examples: Uniswap (UNI), Maker (MKR), Aave (AAVE).  

5. Utility Tokens  
   Designed to be used within a specific platform or ecosystem, providing access to services, products, or features of that platform.  
   Examples: Binance Coin (BNB), Chainlink (LINK), Filecoin (FIL).  

6. Privacy Coins  
   Focus on providing private and anonymous transactions by obscuring the details of the sender, receiver, and transaction amount.  
   Examples: Monero (XMR), Zcash (ZEC), Dash (DASH).  

7. Meme Coins  
   Often created as jokes or based on internet memes, but can gain value and popularity through community support and social media.  
   Examples: Dogecoin (DOGE), Shiba Inu (SHIB).  
   
Each type of cryptocurrency serves a different purpose, from acting as digital cash to powering decentralized applications or maintaining privacy. Understanding the types helps investors choose the right cryptocurrency for their goals.`
                                },
                            ]
                        },
                    ]
                },
                {
                    id: "ef9a4991-6513-cf5b-9b61-618a5d635648",
                    chapter_title: "Exchanges and How to Buy Crypto",
                    content: [
                        {
                            id: "3ac42168-ea3f-fe28-1930-3cfc9c6f3cab",
                            heading: "CEX vs. DEX",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "f9fec8de-961c-7044-6950-2338169418a3",
                                    chapter_title: "Centralized Exchange (CEX)",
                                    text: `A centralized exchange functions like a traditional bank, acting as a middleman that holds your money and processes trades. You trust the exchange to keep your cryptocurrency safe, similar to how you trust a bank with your money.  
   Examples: Binance, Coinbase.`
                                },
                                {
                                    id: "5b91c912-8545-6c2b-8927-10fbc6215345",
                                    chapter_title: "Decentralized Exchange (DEX)",
                                    text: `A decentralized exchange operates like a marketplace where users trade directly with each other, without a middleman. You maintain control of your cryptocurrency, while the platform helps you find trading partners. This can be more complex to use, akin to a flea market where you trade goods directly with others, without a cashier.  
   Examples: Uniswap, PancakeSwap.`
                                },
                            ]
                        },
                        {
                            id: "e24e8079-48bd-c300-0077-5cf8c646f805",
                            heading: "How Exchanges Work and Trading",
                            image: null,
                            text: `In both types of exchanges, trading involves buying and selling cryptocurrency. The process works like this:`,
                            content: [
                                {
                                    id: "abd4eaba-07e5-70d7-5d82-ef753f793e9b",
                                    chapter_title: "1. Choose the Amount",
                                    text: `Decide how much cryptocurrency you want to buy (e.g., Bitcoin or Ethereum).  `
                                },
                                {
                                    id: "abd4eaba-07e5-70d7-5d82-ef753f793e9b",
                                    chapter_title: "2. Place an Order",
                                    text: `There are two main types of orders:
Market Order: Buy or sell the cryptocurrency immediately at the current price.
Limit Order: Set a specific price, and the exchange will execute the trade only when the cryptocurrency reaches that price.`
                                },
                                {
                                    id: "abd4eaba-07e5-70d7-5d82-ef753f793e9b",
                                    chapter_title: "3. Order Matching and Completion",
                                    text: `Once your order is matched with a seller (for a buy order) or a buyer (for a sell order), the trade is completed, and the cryptocurrency is transferred to your wallet.`
                                },
                            ]
                        },
                        {
                            id: "e1c672f0-d01d-08ba-fb62-70ba825a85bc",
                            heading: "How to Buy and Sell Cryptocurrency",
                            image: null,
                            text: `Even if no transactions or dividends are received, investors are still required to report their stock taxes. Reporting is done through the SPT 1770-III form, providing information about stock sales, dividends received, and the market value of stocks at the end of the year.`,
                            content: [
                                {
                                    id: "abd4eaba-07e5-70d7-5d82-ef753f793e9b",
                                    chapter_title: "Buying",
                                    text: `To buy cryptocurrency, you need to create an account on an exchange, deposit regular money (fiat currency), and then use that money to purchase the cryptocurrency you want. It’s like going to a currency exchange booth at the airport. You give your local currency (like dollars), and they give you the foreign currency (crypto) you need.`
                                },
                                {
                                    id: "abd4eaba-07e5-70d7-5d82-ef753f793e9b",
                                    chapter_title: "Selling",
                                    text: `To sell cryptocurrency, the process is the opposite. You offer your cryptocurrency on the exchange, someone buys it, and you receive fiat money or another type of cryptocurrency in return. Selling is like taking the foreign currency (crypto) back to the exchange booth and swapping it for your local currency.`
                                },
                            ]
                        },
                        {
                            id: "1b249979-fcb7-6d12-bba5-ed39a8c3f5ec",
                            heading: "Summary for Learning Material",
                            image: null,
                            text: `Centralized Exchanges (CEX) act like banks, handling everything for you, but you have to trust them with your money.
Decentralized Exchanges (DEX) let you trade directly with other people, so you’re in control, but it can be more complicated.
You can buy and sell cryptocurrency by placing an order on an exchange, similar to how you exchange regular money at a money changer.
Understanding how exchanges work is key to starting your cryptocurrency journey!`,
                            content: []
                        },
                    ]
                },
                {
                    id: "30ff6037-d147-3e2e-30b4-ba6d380dd9a6",
                    chapter_title: "Risks in Cryptocurrency Investment",
                    content: [
                        {
                            id: "ea2487aa-760d-5dd2-9679-49a664cf3b20",
                            heading: "Price Volatility",
                            image: null,
                            text: `Investing in cryptocurrency comes with certain risks. Understanding these risks can help you make more informed decisions. Here’s a simple breakdown:
                            
                            Price volatility means that the value of a cryptocurrency can change rapidly and unpredictably. One day it might be worth a lot, and the next day it could be worth much less. Think of it like riding a roller coaster. The ride has big ups and downs, and it can be exciting but also a bit scary. Just like a roller coaster, cryptocurrency prices can go up and down quickly, which can be thrilling but also risky.`,
                            content: []
                        },
                        {
                            id: "6baf325f-3688-9675-ac55-0cec7b966256",
                            heading: "Regulatory and Legal Risks",
                            image: null,
                            text: `Regulatory and legal risks involve the potential for changes in laws or regulations that could impact how cryptocurrencies are used or traded. Different countries have different rules, and these can change unexpectedly. Imagine playing a game where the rules can change at any moment. One day, the rules might allow you to play freely, but the next day, new rules could restrict how you can play or even stop the game altogether. This uncertainty in the rules can make the game unpredictable and potentially problematic.`,
                            content: []
                        },
                        {
                            id: "318988b3-558c-e391-b8ff-de33332e7013",
                            heading: "Security Risks",
                            image: null,
                            text: `Security risks include threats like hacking and phishing. Hacking refers to unauthorized access to your cryptocurrency by cybercriminals, while phishing involves tricking you into giving away sensitive information, like your private key. Think of it like having a locked safe for your valuable items. If someone manages to break into your safe (hacking) or tricks you into handing over the combination (phishing), they can steal everything inside. Just like you need to keep your safe secure, you need to protect your cryptocurrency from these security threats.`,
                            content: []
                        },
                        {
                            id: "52b8ff02-22a0-3971-8f70-e4c16dceee5c",
                            heading: "Summary for Learning Material",
                            image: null,
                            text: `Price Volatility: Cryptocurrency prices can change rapidly, similar to a roller coaster ride with big ups and downs.
Regulatory and Legal Risks: Laws and regulations about cryptocurrencies can change unexpectedly, like playing a game where the rules keep changing.
Security Risks: Threats like hacking and phishing can lead to loss of your cryptocurrency, similar to having your safe broken into or tricked into giving away the combination.
Understanding these risks helps you prepare and protect your investment in the unpredictable world of cryptocurrency.`,
                            content: []
                        },
                    ]
                },
                {
                    id: "c9181c0f-8123-27de-cefb-ce83825af4c7",
                    chapter_title: "Cryptocurrency Investment Strategies",
                    content: [
                        {
                            id: "a0e17e6b-e216-1cd9-82b1-825a44552111",
                            heading: "HODLing vs. Trading",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "f9fec8de-961c-7044-6950-2338169418a3",
                                    chapter_title: "HODLing",
                                    text: `"HODL" is a playful misspelling of "hold" and means keeping your cryptocurrency for a long time, regardless of market fluctuations. This strategy is based on the belief that, over time, the value will increase. Think of it like planting a tree and waiting for it to grow. You don’t worry about daily changes in the weather; you trust that, with time, the tree will grow and bear fruit.`
                                },
                                {
                                    id: "f9fec8de-961c-7044-6950-2338169418a3",
                                    chapter_title: "Trading",
                                    text: `Trading involves buying and selling cryptocurrency frequently to take advantage of short-term price movements. Traders aim to profit from these price changes by making multiple transactions over short periods. Trading is like being a stockbroker buying and selling stocks every day based on market trends. It’s more active and involves trying to make quick profits from daily price changes.`
                                },
                            ]
                        },
                        {
                            id: "6bf0a4f0-6cf8-b8f5-ac7c-fc8bff5ed2ca",
                            heading: "Portfolio Diversification",
                            image: null,
                            text: `Diversification means spreading your investments across different cryptocurrencies (and other assets) to reduce risk. Instead of putting all your money into one cryptocurrency, you invest in several. Imagine you’re at a buffet with many different dishes. If you only pick one dish and it turns out to be bad, you might end up hungry. But if you try a bit of everything, you’re more likely to have a satisfying meal. Similarly, diversifying your portfolio helps reduce the risk of losing money if one investment doesn’t perform well.`,
                            content: []
                        },
                        {
                            id: "85abb0d0-3f3f-e6f5-c008-b6b62cd6e213",
                            heading: "Time Horizon: Long-Term vs. Short-Term",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "f9fec8de-961c-7044-6950-2338169418a3",
                                    chapter_title: "Long-Term",
                                    text: `A long-term investment strategy involves holding onto your cryptocurrency for several years, believing that its value will grow significantly over time. It’s like buying a vintage car and keeping it for decades. You’re not worried about its value going up and down in the short term; you believe it will be worth much more in the future.`
                                },
                                {
                                    id: "f9fec8de-961c-7044-6950-2338169418a3",
                                    chapter_title: "Short-Term",
                                    text: `A short-term investment strategy focuses on making profits over a shorter period, such as weeks or months. This approach takes advantage of quick price movements. It’s like buying and selling seasonal items to make a profit during a specific period. You’re looking to make quick gains rather than waiting for long-term value growth.`
                                },
                            ]
                        },
                        {
                            id: "52b8ff02-22a0-3971-8f70-e4c16dceee5c",
                            heading: "Summary for Learning Material",
                            image: null,
                            text: `HODLing vs. Trading: HODLing is like planting a tree and waiting for it to grow, while trading is like buying and selling stocks daily to catch short-term price changes.
Portfolio Diversification: It’s like trying a bit of everything at a buffet to avoid being stuck with just one bad dish.
Time Horizon: Long-term investing is like keeping a vintage car for decades, while short-term investing is like making quick profits from seasonal items.
Choosing the right strategy depends on your personal goals, risk tolerance, and how actively you want to manage your investments.`,
                            content: []
                        },
                    ]
                },
            ]
        }
    },



    {
        id: "e8e3663e-80a7-dbef-7fcd-b7a26c1c78be",
        title: "Property investment",
        desc: "Property investment is the activity of buying, owning and managing property such as houses, apartments, land with the aim of making a profit.",
        thumbnail: propertyInvest,
        material: {
            id: "78cae20d-cf28-d594-b916-e8c1769b78e3",
            title: "Education Property Investment",
            sub_material: [
                {
                    id: "91c8547d-a688-754a-9087-7a98439413cd",
                    chapter_title: "Basic",
                    content: [
                        {
                            id: "1d48ff4a-2927-dc39-4e95-a9e7d874d7eb",
                            heading: "What is Property Investment",
                            image: null,
                            text: `Property investing involves purchasing real estate with the goal of generating a return on investment (ROI) through rental income, property appreciation, or both. Unlike other forms of investment, such as stocks or bonds, real estate provides a tangible asset that can appreciate over time while generating steady cash flow. Property investing can take many forms, from buying residential homes or commercial buildings to investing in land or real estate development projects.
While property investing offers the potential for significant financial gains, it also requires careful planning, market research, and understanding of various factors, such as financing options, legal considerations, property management, and market conditions. Successful investors must balance the risks and rewards of each investment opportunity, ensuring that the potential returns justify the initial investment and ongoing costs.
In this guide, we’ll explore the key concepts you need to understand before diving into property investment, including market research, financial considerations, legal aspects, property condition, and maintenance costs. Whether you’re looking to invest in a rental property, flip houses, or develop commercial real estate, a strong foundation of knowledge is essential for long-term success in the property market.`,
                            content: []
                        },
                        {
                            id: "bda31676-583c-bedf-016e-516b16b38b4e",
                            heading: "Market Research",
                            image: null,
                            text: `Before diving into property investment, it’s crucial to conduct thorough market research. This process helps you understand the environment in which you’re investing and provides insights into potential risks and opportunities. Market research typically involves two main components: analyzing local market conditions and evaluating neighborhood characteristics. Let’s break these down in more detail.`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Understanding the Local Market",
                                    text: `Property Prices:
Property prices refer to the current value of properties in a specific area. Understanding property prices is important because it helps you determine if a property is fairly priced and if it fits within your budget. Additionally, knowing the average property prices gives you a sense of the potential returns on investment.

Rental Rates:
Rental rates refer to the amount of money tenants are willing to pay to rent properties in a given area. These rates are crucial for estimating potential rental income. Higher rental rates can mean better returns on investment, but they should be considered alongside property prices and other associated costs.

Demand and Supply:
Demand and supply reflect the balance between the number of people looking to buy or rent properties and the availability of those properties. When there is high demand and low supply, property values and rental rates typically rise. On the other hand, an oversupply of properties can lead to lower prices and rents.

How to Research:
To research the local market, start by using online real estate platforms and databases to gather current data on property prices and rental rates. Additionally, check market reports from local real estate agencies or economic development organizations for up-to-date insights. Reviewing historical data will also help you understand how the market has evolved over time.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Evaluating the Neighborhood",
                                    text: `
Property Prices:
This refers to the current value of properties in a specific area. Knowing the average property prices helps you determine if a property is fairly priced and if it fits within your budget. It also provides insight into the potential returns on your investment, making it a key factor in property decision-making.

Rental Rates:
The amount of money tenants are willing to pay to rent properties in the area is an important metric for investors. Rental rates are essential for estimating potential rental income. While higher rental rates might signal better returns, they should always be evaluated alongside property prices and other related costs to ensure profitability.

Demand and Supply:
The balance between the number of people seeking to buy or rent properties and the available properties in the market is crucial. Typically, high demand and low supply lead to an increase in property values and rental rates. On the other hand, an oversupply can drive prices and rents down, affecting both short- and long-term investment returns.

How to Research:
Gathering information from online platforms like real estate websites can help you stay updated on property prices and rental rates in a particular area. Local real estate agencies or economic development organizations often publish market reports that offer valuable insights. Additionally, reviewing historical data can provide a broader understanding of market trends and shifts over time, helping you make more informed investment decisions.`
                                },
                            ]
                        },
                        {
                            id: "c6b041b0-8e9b-c42e-2b6f-7acd61f3e6c6",
                            heading: "Property Valuation",
                            image: null,
                            text: `Property valuation is one of the most critical steps in real estate investment. Understanding the true value of a property allows you to make informed decisions on whether an investment is financially viable. In real estate, property value isn’t just a number; it’s a result of thorough analysis and comparisons with similar properties in the market. In this section, we’ll cover two key methods of assessing a property’s value: Comparable Sales and Professional Appraisal.`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "What are Comparable Sales?",
                                    text: `Comparable Sales:  
Comparable sales, often referred to as "comps," are the sale prices of properties that share similar characteristics with the property you are interested in purchasing. These characteristics include size (square footage, number of bedrooms and bathrooms), location (proximity to the target property), condition (newly renovated vs. needing repairs), amenities (such as a pool, parking, or garden), and the sale date (preferably within the last 6-12 months).

Why It Matters:  
Comparable sales are essential for estimating a property's market value. By comparing the price of similar properties that have sold recently, you can determine whether the asking price for your target property is fair, overpriced, or a good deal. This helps you avoid overpaying and ensures that you make a sound investment decision.

How to Use Comparable Sales:  
To begin, find comparable properties using real estate platforms like Zillow, Redfin, or local real estate websites. Additionally, talking to real estate agents can provide you with more detailed and up-to-date information. Public records from municipalities can also reveal the sales history of similar properties in the area.

Evaluate the Differences:  
Once you have comparable properties, compare key factors like size, location, and condition. If a similar property sold for a higher price due to an extra bathroom, for example, adjust your valuation downward for your target property to reflect the difference in features.

Get an Average Value:  
After reviewing several comparable properties, you can calculate an average sale price. This average provides a realistic value for your target property, helping you make an informed decision.

Key Considerations:  
It’s crucial to account for current market conditions. In a seller's market, where there is high demand and low supply, properties may sell for more than their historical value. In a buyer's market, with low demand and high supply, prices tend to be lower. Additionally, location precision matters—properties in different neighborhoods, even within the same city, can have significantly different values due to factors like crime rates, school districts, or nearby amenities.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Professional Appraisal",
                                    text: `A property appraisal is a professional, third-party assessment of a property's value, conducted by a licensed appraiser. Unlike comparable sales, which can be done independently, an appraisal provides a detailed evaluation based on various factors such as the property's condition, structural integrity, and any renovations or issues that might impact its value. This objective process gives a more accurate estimate of the property's worth.

Appraisals are often required by lenders when securing a mortgage to ensure the loan amount aligns with the property's true value. The appraiser inspects the property, compares it to similar properties in the area, and prepares a report outlining the estimated market value and how it was determined. This protects both the buyer and the lender from overpaying or over-lending on a property.

While appraisals typically cost several hundred dollars, they are a worthwhile investment in ensuring a property's true value. Appraisers are unbiased professionals with no financial interest in the transaction, offering an accurate and objective estimate. However, the appraisal reflects current market conditions and the property's present state, not accounting for future market trends or potential renovations.`
                                },
                            ]
                        },
                        {
                            id: "365edf60-9ba4-25a8-93e1-8f38a689739f",
                            heading: "Financial Consideration",
                            image: null,
                            text: `Investing in property is a major financial commitment, so it’s essential to have a clear understanding of the financial aspects involved. This section covers three key components of financial planning for property investment: Budget, Financing Options, and Return on Investment (ROI). Knowing how to manage these elements will help ensure that your investment is not only affordable but also profitable.`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Budget",
                                    text: `A property investment budget outlines the total amount you can invest, including upfront and ongoing costs like down payments, mortgage payments, taxes, insurance, and maintenance. The down payment impacts your loan terms, with larger payments often leading to lower interest rates and monthly payments. Monthly mortgage payments must be affordable, factoring in rental income if applicable. Additionally, consider closing costs, property taxes, insurance, and maintenance in your budget. Use mortgage calculators to plan, and keep a financial buffer for unexpected expenses.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Financing Options",
                                    text: `Financing options, such as mortgages, offer various terms. Fixed-rate mortgages provide stable payments, while adjustable-rate mortgages (ARMs) offer lower initial rates but may increase over time. Interest-only loans allow for low initial payments but can become more costly later. Government-backed loans like FHA and VA loans provide accessible options for first-time buyers or veterans, often requiring lower down payments. When selecting a loan, compare interest rates, terms, and fees to choose the best fit for your financial goals.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Return on Investment (ROI)",
                                    text: `ROI measures the profitability of your property investment by comparing your net profit to your total investment. Rental income, operating expenses, and property appreciation affect ROI. High rental demand and low expenses boost profitability, while vacancy periods or high costs reduce it. Property appreciation increases long-term ROI when selling. Calculating ROI helps assess the investment’s potential and ensures you're making a sound financial decision.`
                                },
                            ]
                        },
                    ]
                },
                {
                    id: "575d5f82-4c5d-270b-4df2-30bd0a6eb905",
                    chapter_title: "Legal and Tax Implication",
                    content: [
                        {
                            id: "9c41509c-7698-6958-5d25-097abbafb621",
                            heading: "Legal Aspects",
                            image: null,
                            text: `Investing in property requires not only financial and market knowledge but also a solid grasp of legal considerations. Key aspects include ownership structure and property laws, which are essential for compliance and protection against legal issues.`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Ownership Structure",
                                    text: `Ownership structure dictates how property is owned and registered, affecting control, liability, and taxes. Options include sole ownership, which offers full control but exposes the owner to personal liability; joint ownership, which shares responsibility and may simplify inheritance; Limited Liability Companies (LLCs), which protect personal assets while allowing tax flexibility; and partnerships, which pool resources but come with shared liabilities. Choosing the right structure depends on risk management, tax implications, control needs, and estate planning goals.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Property Laws and Regulations",
                                    text: `Understanding property laws, such as zoning, building codes, landlord-tenant laws, and environmental regulations, is crucial to avoid legal pitfalls. Zoning laws determine permitted uses of property, while building codes ensure safety standards. Landlord-tenant laws protect both parties in rental agreements, and environmental regulations safeguard against ecological damage. To ensure compliance, consider hiring a real estate attorney, researching local regulations, and staying updated on legal changes. By mastering these legal aspects, you can secure your investment and promote long-term success.`
                                },
                            ]
                        },
                        {
                            id: "5ad7eb41-c8bb-75ed-a7ca-af4cbe9f7f83",
                            heading: "Tax Implication",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Tax Responsibilities and Opportunities in Property Investment",
                                    text: `Property investment involves not only buying, selling, or renting but also understanding tax responsibilities and opportunities. Recognizing tax implications is vital for managing costs, maximizing returns, and ensuring compliance. Knowledge of tax regulations can facilitate deductions, minimize liabilities, and aid in planning for ongoing expenses like property taxes. This section covers two key areas: Property Taxes and Tax Benefits, essential for informed decision-making and financial strategy optimization.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Property Taxes",
                                    text: `Property taxes are levied by local governments based on the assessed value of real estate, funding public services. These taxes impact the profitability of investments, influenced by location, assessed value, and local tax rates. Key factors to consider include the assessed value—higher values lead to higher taxes; local tax rates, which vary by area; tax increases due to local government adjustments; and potential exemptions or rebates based on specific criteria. To manage property taxes effectively, conduct research before purchasing, appeal over-assessments, and plan for annual costs in your budget.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Tax Benefits",
                                    text: `Tax benefits encompass deductions and credits that reduce taxable income, ultimately lowering tax bills for property investors. Significant tax benefits include the mortgage interest deduction, which reduces taxable income by allowing interest expense deductions; depreciation deductions reflecting property wear and tear; and deductions for repairs and maintenance, which lower taxable income while maintaining property value. Additional benefits include deductions for management fees, travel expenses related to property oversight, capital gains tax exemptions for primary residences, and the 1031 exchange, which defers capital gains taxes when reinvesting in similar properties. To leverage these benefits, maintain detailed records, consult a tax professional, and strategically plan investments.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Conclusion",
                                    text: `Grasping the tax implications of property investment is essential for cost management and maximizing returns. While property taxes are inevitable, informed planning and awareness of local rates can help mitigate financial surprises. Tax benefits, such as various deductions, significantly lower liabilities, allowing investors to retain more earnings. By staying updated on regulations and seeking professional advice, investors can enhance their financial strategies and achieve long-term success in property investment.`
                                },
                            ]
                        },
                    ]
                },
                {
                    id: "de4521e7-e88b-a0d8-1a94-f1c5b150dfc6",
                    chapter_title: "The Exit Strategy",
                    content: [
                        {
                            id: "9e13e8e9-4b95-126e-35b2-db253dc43643",
                            heading: "Exit Strategy in Property Investment",
                            image: null,
                            text: `An exit strategy is crucial for property investment, dictating how and when you will realize returns. Whether you aim to sell for profit or retain the property for rental income, a clear exit strategy keeps you aligned with your financial goals and market dynamics while minimizing risks and maximizing profits. This section covers two key factors in shaping your exit strategy: Selling or Renting and Market Timing.`,
                            content: []
                        },
                        {
                            id: "9f57ae35-04e2-3949-04e4-fdce7c592212",
                            heading: "Selling or Renting",
                            image: null,
                            text: `Selling a property allows investors to cash in on appreciation, realizing profits in a lump sum. Key considerations include market value, which determines potential sale price; capital gains tax, affecting profit after sale; selling costs like agent commissions and closing fees; and property improvements that can enhance appeal and value.

Renting is another option for generating a steady stream of income, especially in high-demand markets. Important factors include cash flow, ensuring rental income covers expenses; property management, deciding between self-management or hiring a company; long-term value from`,
                            content: []
                        },
                        {
                            id: "43799162-75f3-188a-9a34-e8bb90de1774",
                            heading: "Market Timing",
                            image: null,
                            text: `Market timing involves selecting the optimal moment to sell or rent based on real estate conditions. Key factors include current market conditions—where selling in a seller’s market can yield higher prices—and interest rates, with low rates driving property demand. Personal financial goals also play a role; aligning your exit strategy with milestones ensures the approach supports overall financial success. Economic indicators, like local growth, can further influence timing decisions.`,
                            content: []
                        },
                        {
                            id: "d1a05dce-2d12-2f17-9970-2fd73357b41e",
                            heading: "Conclusion",
                            image: null,
                            text: `Choosing the right exit strategy is vital in property investment. Understanding the factors influencing your decision—such as property value, rental potential, market timing, and personal financial objectives—enables you to maximize returns. A clear exit strategy provides direction and flexibility, adapting to market changes while aligning with your long-term goals.`,
                            content: []
                        },
                    ]
                },
            ]
        }
    },



    {
        id: "ac0ddb8d-4369-7da1-70a7-d3db083e5862",
        title: "Gold investment",
        desc: "Gold investment is the activity of buying gold, either in physical form (bars, coins, jewelry) or digitally, with the aim of making a profit from the increase in gold prices.",
        thumbnail: goldInvest,
        material: {
            id: "aa6a2840-080b-59e5-d5e9-06e8d7c07ba7",
            title: "Education Gold Investment",
            sub_material: [
                {
                    id: "91c8547d-a688-754a-9087-7a98439413cd",
                    chapter_title: "Basic",
                    content: [
                        {
                            id: "9c411ca8-2628-2710-e6ca-0e581fcc9b4f",
                            heading: "Types of gold Investment",
                            image: null,
                            text: `Gold has long been valued for its beauty and rarity, and it's also a popular investment choice. Whether you’re looking to diversify your portfolio, hedge against inflation, or simply invest in a timeless asset, gold offers several ways to get involved. Each method of investing in gold has its own set of benefits and considerations. In this section, we'll explore the different types of gold investments to help you understand which option might be right for you.`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Physical Gold",
                                    text: `Real gold investments include physical gold bars, coins, or jewelry that you can hold in your hand. The primary advantage is that you own the actual gold, which can be stored at home or in a safe deposit box. However, secure storage and insurance can be costly.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Gold ETFs",
                                    text: `Another option is gold ETFs (exchange-traded funds), which track the price of gold and are traded on stock exchanges. They are easy to buy and sell like stocks and eliminate the need for physical storage, but they come with management fees, and their value is tied to the fund's performance.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Gold Mining Stocks",
                                    text: `Gold mining stocks involve purchasing shares in companies that mine for gold. This can offer potential for high returns if the mining company performs well, but it carries risks associated with both the company and the mining industry.`
                                },
                            ]
                        },
                        {
                            id: "831cc167-42fa-7ecc-a1f1-8675e88f8875",
                            heading: "Market Factors in Gold Investment",
                            image: null,
                            text: `Gold is a unique investment that can serve various purposes in a portfolio, such as a hedge against inflation or economic uncertainty. However, like all investments, its value can be influenced by a range of market factors. Here’s a detailed look at what you need to know about these factors:`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Price Fluctuations",
                                    text: `Gold prices are known for their volatility, which means they can change significantly over short periods. Understanding what drives these fluctuations is essential for making informed investment decisions:

                                    Macroeconomic Factors:

                                    Inflation: Gold is often considered a safeguard against inflation. When the cost of living increases and the purchasing power of money decreases, gold can retain its value better than cash. Historical trends show that during high inflation periods, gold prices tend to rise as investors seek stability.

                                    Interest Rates: The relationship between interest rates and gold prices is complex. Generally, when interest rates are high, the opportunity cost of holding gold increases because investors might prefer assets that yield interest. Conversely, when interest rates are low, gold becomes more attractive as it does not generate interest but holds value.

                                    Geopolitical Events: Political instability, conflicts, and other geopolitical events can cause uncertainty in financial markets. During such times, investors often turn to gold as a safe haven, which can drive up its price. For instance, during major global conflicts or economic crises, gold often sees increased demand and higher prices.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Historical Performance",
                                    text: `Examining gold’s historical performance can provide valuable insights into its potential as an investment, particularly in different economic conditions:

                                    Economic Conditions: Gold has historically performed well during periods of economic downturns and financial crises. For example, during the 2008 financial crisis, gold prices surged as investors looked for safer assets. Reviewing these periods can help you gauge how gold might behave during future economic stress.

                                    Long-term Trends: Analyzing long-term trends in gold prices can help you understand its role as a long-term investment. Over decades, gold has shown to be a reliable store of value, preserving wealth even when other investments have faltered.

                                    Performance in Different Market Phases: Understanding how gold has performed during various phases of market cycles—such as bull markets (when prices are rising) and bear markets (when prices are falling)—can offer insights into its behavior in your investment strategy. For example, during prolonged periods of market stability and growth, gold prices might not rise as significantly as in times of market uncertainty.

                                    By closely monitoring these factors, you can better understand how gold may fit into your investment strategy and how to manage the associated risks effectively.`
                                },
                            ]
                        },
                        {
                            id: "5365b2ed-bbe2-326b-2e9d-f267f0ef91af",
                            heading: "Conclusion",
                            image: null,
                            text: `In summary, gold remains a sought-after investment option due to its intrinsic value and ability to serve multiple purposes in a portfolio. Understanding the various types of gold investments—such as physical gold, gold ETFs, mining stocks, and futures—allows investors to choose the method that aligns best with their financial goals. Moreover, recognizing the market factors that influence gold prices, including economic conditions, inflation, interest rates, and geopolitical events, is essential for making informed decisions. Historical performance further highlights gold's resilience during economic downturns, offering potential stability and growth. By integrating these insights, investors can strategically position gold within a diversified investment strategy, effectively managing risks and capitalizing on its rewards.`,
                            content: []
                        },
                    ]
                },
                {
                    id: "36544a60-a157-ac0e-0266-57fdea70af12",
                    chapter_title: "Costs and Fees",
                    content: [
                        {
                            id: "b1510aaa-e463-98b7-c99f-132a9d847e30",
                            heading: "Introduction to Costs and Fees",
                            image: null,
                            text: `Investing in gold involves more than just the price of the gold itself. Various costs and fees can impact your overall investment returns. Here’s a detailed look at what you need to consider:

                            When you invest in gold, it's important to be aware of the different costs involved. These can affect your overall returns and should be factored into your investment decision. Whether you're buying physical gold or investing through financial products like ETFs, understanding these costs will help you manage your investments more effectively.`,
                            content: []
                        },
                        {
                            id: "5ad7eb41-c8bb-75ed-a7ca-af4cbe9f7f83",
                            heading: "Transaction Costs",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Buying and Selling",
                                    text: `Overview: Transaction costs refer to the fees associated with buying and selling gold. These can include broker commissions, trading fees, and any other costs charged by the platform or dealer facilitating the transaction.

                                    Impact: High transaction costs can erode your investment returns, especially if you trade frequently. It's important to compare fees across different dealers and platforms to minimize these costs.
                                    
                                    Types of Fees:

                                    Expense Ratio: This is the annual fee expressed as a percentage of your investment. It covers operating expenses and is deducted from the fund’s assets.

                                    Transaction Fees: Some funds may charge additional fees for buying or selling shares.

                                    Impact: Management fees can reduce your overall returns, so it’s important to choose funds with competitive fees. Lower fees mean a larger portion of your investment remains in your portfolio.

                                    By understanding and accounting for these costs and fees, you can make more informed decisions about investing in gold and manage your investments more efficiently. Keep these considerations in mind to maximize your investment returns and ensure that gold fits well within your overall investment strategy.`
                                },
                            ]
                        },
                        {
                            id: "df55f568-de22-bb48-da78-36467ce6a9e5",
                            heading: "Management Fees",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Gold ETFs and Mutual Funds",
                                    text: `Overview: Transaction costs refer to the fees associated with buying and selling gold. These can include broker commissions, trading fees, and any other costs charged by the platform or dealer facilitating the transaction.

                                    Impact: High transaction costs can erode your investment returns, especially if you trade frequently. It's important to compare fees across different dealers and platforms to minimize these costs.
                                    
                                    Types of Fees:

                                    Expense Ratio: This is the annual fee expressed as a percentage of your investment. It covers operating expenses and is deducted from the fund’s assets.

                                    Transaction Fees: Some funds may charge additional fees for buying or selling shares.

                                    Impact: Management fees can reduce your overall returns, so it’s important to choose funds with competitive fees. Lower fees mean a larger portion of your investment remains in your portfolio.

                                    By understanding and accounting for these costs and fees, you can make more informed decisions about investing in gold and manage your investments more efficiently. Keep these considerations in mind to maximize your investment returns and ensure that gold fits well within your overall investment strategy.`
                                },
                            ]
                        },
                    ]
                },
                {
                    id: "da2fd6bb-8473-d14d-c849-063f0a02b6cd",
                    chapter_title: "Regulatory and Legal Aspects",
                    content: [
                        {
                            id: "6a0e61d2-c596-edb0-a221-f61188390a05",
                            heading: "Introduction to Regulatory and Legal Aspects",
                            image: null,
                            text: `Investing in gold not only involves financial considerations but also requires awareness of regulatory and legal aspects. Understanding these factors is crucial to ensure that your investment complies with local laws and optimizes your tax situation. Here’s a detailed overview:

When investing in gold, it's essential to navigate the legal landscape that governs gold ownership and trading. Different countries have varying regulations and tax implications that can affect your investment strategy. By familiarizing yourself with these legal requirements, you can avoid potential legal issues and make more informed investment decisions.`,
                            content: []
                        },
                        {
                            id: "ff3f2a78-36e9-72d1-dc93-99b5553bf578",
                            heading: "Legal Restrictions",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Ownership and Trading Regulations",
                                    text: `Overview: Some countries impose regulations on who can own or trade gold. These rules can range from licensing requirements for dealers to restrictions on the types of gold products that can be bought or sold.

                                    Examples:

                                    Restrictions on Private Ownership: In some jurisdictions, there are limits on the amount of gold individuals can own. For example, certain countries may require registration or impose reporting requirements for large quantities of gold.

                                    Import and Export Regulations: Regulations may also govern the import and export of gold. Ensuring compliance with these rules is essential, especially if you plan to buy or sell gold internationally.

                                    Impact: Failing to comply with local regulations can lead to legal issues, fines, or confiscation of your gold. It's crucial to research and understand the regulations specific to your location and any other regions where you may conduct transactions.`
                                },
                            ]
                        },
                        {
                            id: "43799162-75f3-188a-9a34-e8bb90de1774",
                            heading: "Tax Implications",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Capital Gains Taxes",
                                    text: `Overview: When you sell gold, you may be subject to capital gains taxes on the profit you make. The tax treatment of gold investments varies by jurisdiction and can influence your overall return on investment.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Tax Rates",
                                    text: `Short-term vs. Long-term: Some jurisdictions differentiate between short-term and long-term capital gains. Short-term gains (from assets held for less than a year) may be taxed at a higher rate than long-term gains.

                                    Special Rates for Gold: In certain countries, gold may be taxed at a different rate than other investments. For example, some countries treat gold as a collectible, subject to higher capital gains tax rates.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Reporting Requirements",
                                    text: `Disclosure: Ensure that you report your gold transactions accurately in your tax filings. Failure to disclose gains can result in penalties or legal issues.

                                    Record-Keeping: Maintain detailed records of your gold purchases, sales, and any associated costs to substantiate your tax calculations and filings.
                                    
                                    Understanding and adhering to these regulatory and tax considerations will help you manage your gold investments more effectively and avoid potential legal complications. Always consult with a financial advisor or tax professional to ensure that you are compliant with all relevant laws and regulations in your area.`
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    },



    {
        id: "ef3c4e75-b1b9-425d-89f7-a3915319d9f0",
        title: "Deposit investment",
        desc: "Deposit investment is a deposit of money in a bank for a certain period of time with a fixed interest rate. During this period money cannot be withdrawn without penalty.",
        thumbnail: depositInvest,
        material: {
            id: "8d7ff9ab-a107-13ab-dbbc-9702a3e65b52",
            title: "Education Deposit Investment",
            sub_material: [
                {
                    id: "f35e50e3-5994-fe50-cd43-e60d0d46b7df",
                    chapter_title: "Basic",
                    content: [
                        {
                            id: "f9b2e038-3e76-39dd-3d60-8158672af152",
                            heading: "Introduction",
                            image: null,
                            text: `A deposit investment is a financial product where you place your money with a bank or financial institution in exchange for a fixed interest over a specific period. It is considered a low-risk investment, offering predictable returns with minimal risk of losing the principal amount.

                            There are different types of deposit investments, such as savings accounts, fixed deposits (time deposits), and recurring deposits. The key advantage of deposit investments is their safety, as they are typically insured by the government up to a certain amount, making them ideal for conservative investors who prefer stable and guaranteed returns.

                            While deposit investments offer less return compared to higher-risk options like stocks or real estate, they provide liquidity (depending on the type), ease of access, and security, making them a popular choice for individuals looking to safeguard their money while earning modest interest.`,
                            content: []
                        },
                        {
                            id: "827a9c77-c2a5-cde2-e355-429270463d22",
                            heading: "Types of Deposit Accounts",
                            image: null,
                            text: `When exploring deposit investments, it’s important to understand the various types of deposit accounts available. Each type has its own features and benefits, making them suitable for different financial goals and needs. Here’s a detailed look at the main types:`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "1. Savings Accounts",
                                    text: `Savings accounts are the most basic and commonly used deposit accounts. They are offered by banks and credit unions and are designed to help you save money while earning a small amount of interest.
                                   
                                    Key Features:

                                    Interest Rates: Typically lower compared to other deposit accounts. The interest is usually compounded daily, monthly, or quarterly.

                                    Accessibility: Provides easy access to your funds. You can withdraw or transfer money at any time, though there might be limitations on the number of transactions per month.

                                    Liquidity: High liquidity, meaning you can access your money without penalty. Ideal for emergency funds or short-term savings.

                                    Security: Funds are usually insured by government agencies up to a certain amount, making them a safe place to store your money.

                                    Best For:
                                    Emergency funds
                                    Short-term savings goals
                                    Building a habit of saving`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "2. Fixed Deposits (Time Deposits)",
                                    text: `Fixed deposits, also known as time deposits, involve depositing a lump sum of money with a bank or financial institution for a fixed period. In return, you receive a higher interest rate compared to a savings account.

                                    Key Features:

                                    Interest Rates: Higher than savings accounts, with rates fixed for the duration of the deposit. The interest is compounded at regular intervals.

                                    Tenure: The money is locked in for a specific period, ranging from a few months to several years. Early withdrawal is usually allowed but may come with penalties or reduced interest rates.

                                    Liquidity: Lower liquidity due to the fixed term. Accessing funds before maturity might result in penalties or forfeiture of some interest.

                                    Security: Considered safe with government-backed insurance in many countries, ensuring protection up to a certain limit.
                                    
                                    Best For:
                                    Medium to long-term savings goals
                                    Investors seeking higher returns with minimal risk
                                    Individuals who do not need immediate access to their funds`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "3. Recurring Deposits",
                                    text: `Recurring deposits allow you to invest a fixed amount of money regularly (monthly, quarterly, etc.) over a set period. They combine elements of both savings and fixed deposits.

                                    Key Features:

                                    Interest Rates: Typically higher than savings accounts but lower than fixed deposits. Interest rates are usually fixed for the deposit term.

                                    Investment Frequency: Regular contributions are made over the term of the deposit, encouraging disciplined saving.

                                    Tenure: Fixed duration, with regular deposits contributing to the overall investment. Early withdrawal is generally permitted but might affect the interest earned.

                                    Liquidity: Generally, the liquidity is lower compared to savings accounts. Withdrawals before maturity might affect the interest rates or incur penalties.

                                    Best For:
                                    Building a disciplined savings habit
                                    Planning for future expenses with regular contributions
                                    Medium-term financial goals`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Summary",
                                    text: `Each type of deposit account has unique features tailored to different financial needs and goals. Savings accounts are best for flexibility and easy access to funds, fixed deposits offer higher returns for those who can lock away their money for a set period, and recurring deposits provide a structured savings plan with regular contributions. By understanding these options, you can choose the deposit account that aligns with your financial objectives and risk tolerance.`
                                },
                            ]
                        },
                        {
                            id: "bf20d0f4-9600-db42-d324-1bc1c615a0ff",
                            heading: "Interest Rates",
                            image: null,
                            text: `Interest rates are a fundamental aspect of deposit investments, as they determine how much money you will earn on your deposits over time. Here’s a detailed explanation to help you understand this concept better:`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "What is an Interest Rate?",
                                    text: `An interest rate is the percentage of your deposit amount that a financial institution pays you for keeping your money with them. It represents the cost of borrowing money or the reward for saving money. In the context of deposit investments, it’s the return you earn on your deposited funds.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Types of Interest Rates",
                                    text: `Simple Interest:
                                    Definition: Simple interest is calculated only on the principal amount of the deposit.
                                    Example: If you deposit $1,000 at a simple interest rate of 3% per year, you earn $30 annually (i.e., $1,000 x 0.03).

                                    Compound Interest:
                                    Definition: Compound interest is calculated on the principal amount and also on any interest that has been added to the principal.
                                    Example: If you deposit $1,000 at an annual interest rate of 3% compounded monthly, you will earn interest on your interest as well. After one year, the amount will be slightly more than $1,030 due to monthly compounding.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Compounding Frequency",
                                    text: `Compounding refers to how often the interest is calculated and added to the principal. The frequency of compounding affects the overall return on your investment:`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Daily Compounding:",
                                    text: `Interest is added to your principal every day.
Effect: Maximizes the amount of interest earned over time.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Monthly Compounding:",
                                    text: `Interest is added to your principal every month.
Effect: Slightly less than daily compounding but still beneficial compared to annual compounding.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Quarterly Compounding:",
                                    text: `Interest is added every three months.
Effect: Provides a good balance between interest earned and compounding frequency`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Annual Compounding:",
                                    text: `Interest is added to your principal once a year.
Effect: The least beneficial in terms of interest earned, compared to more frequent compounding.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "How to Compare Interest Rates",
                                    text: `When choosing a deposit investment, compare the following:`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Nominal vs. Effective Interest Rates:",
                                    text: `Nominal Rate: The stated interest rate without considering the effects of compounding.
Effective Rate: The actual rate of interest earned, taking into account compounding. For accurate comparison, use the effective annual rate (EAR).`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Annual Percentage Yield (APY):",
                                    text: `Definition: APY reflects the total interest earned in a year, including the effects of compounding.
Use: APY is useful for comparing deposit accounts as it shows the true return on your investment.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Fixed vs. Variable Rates:",
                                    text: `Fixed Rate: The interest rate remains the same throughout the investment term.
Variable Rate: The interest rate can change based on market conditions or other factors.

By understanding these aspects of interest rates, you can make more informed decisions about your deposit investments, ensuring you maximize your returns based on your financial goals and needs.`
                                },
                            ]
                        },
                        {
                            id: "7e1b249d-9e51-5816-bf42-65d1b59e4f03",
                            heading: "Tenure",
                            image: null,
                            text: `Tenure refers to the length of time you commit to keeping your money deposited in a financial account or investment. It plays a crucial role in determining the interest rate you earn and the liquidity of your funds. Here’s a detailed explanation to help you understand the concept of tenure better:`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "What is Tenure?",
                                    text: `Tenure is the fixed period during which your money remains invested or deposited. This period can range from a few months to several years, depending on the type of deposit account and the terms offered by the financial institution.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "How Tenure Affects Your Investment",
                                    text: `1. Interest Rates:

                                    Longer Tenure: Generally, the longer you agree to keep your money deposited, the higher the interest rate you’ll receive. Financial institutions reward you with better rates for locking in your money for an extended period because they can use your funds for longer-term investments.

                                    Shorter Tenure: Short-term deposits usually offer lower interest rates. This is because the institution can’t rely on your money for as long and thus pays a lower rate of return.
                                    
                                    2. Liquidity:

                                    Longer Tenure: Funds are less accessible. With longer tenures, you might face penalties or loss of interest if you need to withdraw your money before the agreed term ends. It’s essential to ensure that you won’t need access to the funds during this period.

                                    Shorter Tenure: Offers greater flexibility and easier access to your money. If you choose a short-term deposit, you can access your funds more quickly, though you might receive lower returns.
                                    
                                    3. Penalties for Early Withdrawal:

                                    Fixed Deposits: With fixed deposits, early withdrawal often results in penalties, which might include a reduction in the interest rate earned or a forfeiture of some interest.

                                    Savings Accounts: Generally, savings accounts have fewer restrictions and penalties, but they also typically offer lower interest rates.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Choosing the Right Tenure",
                                    text: `When deciding on the tenure of your deposit investment, consider the following factors:
                                    
                                    1. Financial Goals:

                                    Short-Term Goals: If you need access to your money in the near future (e.g., for an upcoming expense), a shorter tenure or a more liquid account like a savings account might be more appropriate.

                                    Long-Term Goals: For goals that are further away (e.g., saving for retirement or a major purchase), a longer tenure with a higher interest rate could be beneficial.

                                    2. Emergency Funds:

                                    Ensure that you maintain an emergency fund in a more liquid account, separate from any long-term deposits. This ensures that you have access to cash for unexpected expenses without penalties.

                                    3. Interest Rate Comparison:

                                    Compare the interest rates for different tenures. Often, you’ll find that extending the tenure slightly can yield a significantly higher interest rate.

                                    4. Future Financial Needs:

                                    Assess your future financial needs and potential changes in your financial situation. Choose a tenure that aligns with your ability to keep the money untouched for the duration of the deposit.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Summary",
                                    text: `Tenure is a key component of deposit investments that influences the interest rate and liquidity of your funds. Longer tenures typically offer higher interest rates but reduce the flexibility to access your money. Shorter tenures provide more liquidity but might come with lower returns. By carefully considering your financial goals, need for liquidity, and potential penalties, you can choose the tenure that best suits your investment strategy.`
                                },
                            ]
                        },
                        {
                            id: "c4c763c9-c9cb-3bc2-0214-29bb89aa9388",
                            heading: "Liquidity",
                            image: null,
                            text: `Liquidity is a critical concept in financial investments, including deposit accounts. It refers to how easily and quickly you can access your funds when needed. Understanding liquidity helps you choose the right deposit account based on your need for flexibility and accessibility. Here’s a detailed explanation to make this concept clearer:`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "What is Liquidity?",
                                    text: `Liquidity is the measure of how quickly you can convert your investment into cash without significantly affecting its value. In the context of deposit accounts, it indicates how readily you can withdraw your money or access your funds.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Types of Deposit Accounts and Their Liquidity",
                                    text: `1. Savings Accounts

                                    Liquidity Level: High

                                    Explanation: Savings accounts offer the highest liquidity among deposit accounts. You can usually withdraw or transfer funds at any time without penalties. Transactions are typically limited to a certain number per month, but you can access your money quickly through ATMs, online banking, or in-person at the bank.

                                    Ideal For: Emergency funds, short-term savings, and situations where you need frequent access to your money.

                                    2. Fixed Deposits (Time Deposits):

                                    Liquidity Level: Low

                                    Explanation: Fixed deposits involve locking your money for a specific period, ranging from a few months to several years. During this period, you cannot access your funds without facing penalties. Early withdrawal might result in a reduced interest rate or forfeiture of some interest earned.

                                    Ideal For: Long-term savings goals where you do not anticipate needing access to the funds before the maturity date.

                                    3. Recurring Deposits:

                                    Liquidity Level: Moderate

                                    Explanation: Recurring deposits require you to make regular contributions over a set period. While you can access the funds at maturity, early withdrawal or premature closure might affect the interest rate or result in penalties. However, compared to fixed deposits, they offer a bit more flexibility in terms of withdrawals, though it may still involve some restrictions.

                                    Ideal For: Structured savings plans and medium-term financial goals.

                                    4. Money Market Accounts (if applicable):

                                    Liquidity Level: High to Moderate

                                    Explanation: Money market accounts offer relatively high liquidity with the ability to write checks or make transfers. However, they might have higher minimum balance requirements or limits on the number of transactions you can make each month.

                                    Ideal For: Balancing higher interest rates with reasonable access to your money.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Factors Affecting Liquidity",
                                    text: `1. Withdrawal Restrictions:

                                    Some accounts have specific rules or limitations on how often you can withdraw funds or how much you can withdraw at once. Understanding these restrictions helps you plan your finances and avoid unnecessary penalties.

                                    2. Early Withdrawal Penalties:

                                    Fixed deposits and certain other types of accounts might impose penalties if you need to access your money before the end of the agreed period. These penalties can include reduced interest rates or loss of interest.

                                    3. Minimum Balance Requirements:

                                    Some accounts require maintaining a minimum balance to avoid fees or to earn the promised interest rate. Failing to meet this requirement can impact liquidity and result in fees or reduced returns.

                                    4. Access Methods:

                                    Consider how you can access your funds—whether through online banking, ATMs, or in-person withdrawals. Accounts with multiple access methods provide higher liquidity.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Summary",
                                    text: `Liquidity determines how easily and quickly you can access your deposited funds. High liquidity accounts, like savings accounts, offer flexibility and quick access, while low liquidity accounts, like fixed deposits, offer higher returns but restrict access to your money. By understanding your need for liquidity and the terms associated with each type of deposit account, you can make an informed choice that aligns with your financial goals and needs.`
                                },
                            ]
                        },
                    ]
                },
                {
                    id: "125c84ce-5a39-8fa5-1edf-cdabbe945ded",
                    chapter_title: "Risk",
                    content: [
                        {
                            id: "b1510aaa-e463-98b7-c99f-132a9d847e30",
                            heading: "Introduction",
                            image: null,
                            text: `Risk is a crucial factor in any investment decision. In the context of deposit investments, understanding the different types of risk helps you evaluate how secure your investment is and what potential returns you might expect. Here’s a detailed explanation to help you grasp the concept of risk as it applies to deposit accounts:`,
                            content: []
                        },
                        {
                            id: "5ad7eb41-c8bb-75ed-a7ca-af4cbe9f7f83",
                            heading: "What is Risk in Investments?",
                            image: null,
                            text: `Risk in investments refers to the chance of losing part or all of your investment or not earning the expected return. It encompasses various uncertainties that could impact your investment outcome. For deposit investments, the risk is generally lower compared to more volatile assets like stocks or real estate, but it's important to understand the nuances involved.`,
                            content: []
                        },
                        {
                            id: "d015b199-d8d0-3721-e5b9-66638069accc",
                            heading: "Types of Risk in Deposit Investments",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "1. Inflation Risk:",
                                    text: `Definition: Inflation risk is the risk that the purchasing power of your returns will be eroded over time due to rising prices. Even if your deposit investment earns interest, high inflation can reduce the real value of your returns.
                                    
                                    Example: If you earn 3% interest on a fixed deposit but inflation is 4%, your real return is effectively -1%. This means that while your money grows by 3%, it buys less due to higher prices.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "2. Interest Rate Risk:",
                                    text: `Definition: Interest rate risk is the risk that changes in market interest rates will affect the value of your deposit investment. If interest rates rise, existing deposits with lower rates become less attractive.

                                    Example: If you lock in a fixed deposit at a 2% interest rate for a long term, and interest rates rise to 5%, your deposit’s return becomes less competitive compared to new deposits offering higher rates.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "3. Credit Risk:",
                                    text: `Definition: Credit risk is the risk that the financial institution where you deposited your money may face financial difficulties or default. This is generally low for large, reputable banks due to government deposit insurance.

                                    Example: If a small bank goes bankrupt and is not covered by insurance, you might lose some or all of your deposit.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "4. Liquidity Risk:",
                                    text: `Definition: Liquidity risk is the risk of not being able to access your funds when needed without incurring a penalty. Fixed deposits and certain other accounts have restrictions on early withdrawals.

                                    Example: If you need cash urgently but have invested in a fixed deposit with a penalty for early withdrawal, you might face financial losses to access your money.`
                                },
                            ]
                        },
                        {
                            id: "b7fb3cc2-d08e-c742-f4d0-282cc435083f",
                            heading: "Mitigating Risks in Deposit Investments",
                            image: null,
                            text: `Risk in investments refers to the chance of losing part or all of your investment or not earning the expected return. It encompasses various uncertainties that could impact your investment outcome. For deposit investments, the risk is generally lower compared to more volatile assets like stocks or real estate, but it's important to understand the nuances involved.`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "1. Diversification",
                                    text: `Spread your investments across different types of deposit accounts or other investment vehicles to reduce exposure to any single risk. For instance, combining savings accounts with fixed deposits can balance liquidity needs and return expectations.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "2. Monitoring Inflation:",
                                    text: `Regularly review inflation trends and consider inflation-protected accounts or investments if inflation is high. Inflation-protected securities or higher-yield investments can help maintain the real value of your returns.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "3. Choosing Reputable Institutions:",
                                    text: `Opt for deposits with well-established and reputable financial institutions that are covered by government deposit insurance schemes. This minimizes credit risk and provides added security.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "4. Understanding Terms:",
                                    text: `Be aware of the terms and conditions associated with your deposit investments, including early withdrawal penalties and interest rate structures. This helps in planning your investments according to your liquidity needs and financial goals.`
                                },
                            ]
                        },
                        {
                            id: "3a4bfe4c-9766-83d1-e75d-a62c0e1fe9d8",
                            heading: "Summary",
                            image: null,
                            text: `While deposit investments are generally low-risk, understanding and managing different types of risk is crucial for making informed decisions. Inflation risk, interest rate risk, credit risk, and liquidity risk all play a role in determining the overall safety and return on your deposits. By diversifying your investments, choosing reputable institutions, and being mindful of inflation and interest rates, you can better manage these risks and protect your investment.`,
                            content: []
                        },
                    ]
                },
                {
                    id: "b3892f74-5334-a016-0ef7-3d49ad7ec10b",
                    chapter_title: "Tax Implications",
                    content: [
                        {
                            id: "6a0e61d2-c596-edb0-a221-f61188390a05",
                            heading: "What are Tax Implications?",
                            image: null,
                            text: `When investing in deposit accounts, it’s important to be aware of the tax implications associated with the interest earned. Taxes can significantly impact the net return on your investment, so understanding how they work helps you plan better and optimize your investments. Here’s a detailed explanation to help you navigate this aspect of deposit investments:
                            
                            Tax implications refer to the effect that earning interest on deposit investments has on your overall tax liability. Different types of deposit accounts and interest earned may be subject to various tax treatments depending on your country’s tax laws.`,
                            content: []
                        },
                        {
                            id: "ff3f2a78-36e9-72d1-dc93-99b5553bf578",
                            heading: "Types of Taxes on Deposit Investments",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Interest Income Tax:",
                                    text: `Definition: Most countries tax the interest earned on savings accounts, fixed deposits, and other deposit investments as ordinary income. This means the interest you earn is added to your taxable income and taxed at your marginal tax rate.

                                    Example: If you earn $500 in interest from a fixed deposit and your tax rate is 20%, you will owe $100 in taxes on that interest income ($500 x 0.20).`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Withholding Tax:",
                                    text: `Definition: In some countries, withholding tax is deducted at the source by the bank or financial institution before you receive your interest income. This is a prepayment of your tax liability on the interest earned.

                                    Example: If a country has a 15% withholding tax rate on interest income and you earn $1,000 in interest, the bank might withhold $150 before paying you the remaining $850.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Tax-Deferred Accounts:",
                                    text: `Definition: Some deposit accounts or investment products offer tax-deferred growth, meaning you do not pay taxes on the interest earned until you withdraw the funds.

                                    Example: Certain retirement savings accounts or tax-deferred certificates of deposit (CDs) allow you to defer taxes on the interest until retirement or withdrawal, potentially reducing your current tax burden.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Tax-Free Accounts:",
                                    text: `Definition: Some deposit accounts or investment options are tax-free, meaning the interest earned is not subject to taxation. These are often designed to encourage saving for specific goals.

                                    Example: In some countries, savings accounts for education or health expenses may offer tax-free interest, providing a benefit to encourage saving for these purposes.`
                                },
                            ]
                        },
                        {
                            id: "fe7d3d4f-08ed-dabc-fe7b-5a6d93547235",
                            heading: "How Tax Implications Affect Your Investments",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Net Return:",
                                    text: `Taxes reduce the effective return on your deposit investments. To assess the true return, you need to account for the impact of taxes on your interest income.

                                    Example: If you earn 3% interest on a deposit and are taxed at 20%, your after-tax return is 2.4% (3% x (1 - 0.20)).`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Investment Strategy:",
                                    text: `Understanding tax implications helps you choose the most tax-efficient deposit accounts and plan your investments to minimize taxes. Tax-advantaged accounts or tax-saving deposit options can offer better returns by reducing your tax liability.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Tax Planning:",
                                    text: `Regularly reviewing your tax situation and investment choices helps in effective tax planning. Consider consulting with a tax advisor to optimize your investment strategy based on current tax laws and your financial situation.`
                                },
                            ]
                        },
                        {
                            id: "4ad13043-ac31-a0b8-9374-8f6d7b6f0bf1",
                            heading: "Examples of Tax-Saving Deposit Options",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Tax-Free Savings Accounts:",
                                    text: `Some countries offer tax-free savings accounts where interest income is not taxed. Examples include Individual Savings Accounts (ISAs) in the UK or Roth IRAs in the US.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Government-Bond Accounts:",
                                    text: `Certain government bonds or savings schemes may offer tax benefits, such as tax-free interest or tax deductions on the invested amount.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Retirement Accounts:",
                                    text: `Tax-advantaged retirement accounts, like 401(k)s or IRAs, allow you to defer taxes on interest earned until retirement, which can be beneficial if you expect to be in a lower tax bracket in the future.`
                                },
                            ]
                        },
                        {
                            id: "437b8c42-7fd7-2852-b88f-eaa5bacfef12",
                            heading: "Summary",
                            image: null,
                            text: `Tax implications are an important consideration when investing in deposit accounts. Interest income is often taxable, and understanding how taxes affect your returns helps you make informed investment decisions. By exploring tax-saving deposit options and planning your investments with taxes in mind, you can enhance your overall financial strategy and maximize your net returns. Always stay informed about current tax laws and consult with a tax advisor if needed to optimize your investment approach.`,
                            content: []
                        },
                    ]
                },
            ]
        }
    },



    {
        id: "25e0cd2e-42e8-983b-b936-bde4c9492ad6",
        title: "Mutual funds",
        desc: "Mutual funds are a type of investment where funds from many investors are collected and managed by an investment manager to invest in various assets.",
        thumbnail: mutualFunds,
        material: {
            id: "22a3a6fd-f9c2-e82a-86a2-0d53d14f63b6",
            title: "Education Deposit Investment",
            sub_material: [
                {
                    id: "052c199f-3770-090f-1f15-64639dbf0158",
                    chapter_title: "Basic",
                    content: [
                        {
                            id: "9d80bbc5-f787-b7f0-137d-945cf6ca5ed3",
                            heading: "Introduction",
                            image: null,
                            text: `Mutual funds, or "reksa dana" in Bahasa Indonesia, are investment vehicles that pool money from multiple investors to invest in a diversified portfolio of assets, such as stocks, bonds, and other securities. They are managed by professional fund managers who make investment decisions on behalf of the investors. Understanding the different types of mutual funds can help you choose the one that aligns with your investment goals, risk tolerance, and time horizon.`,
                            content: []
                        },
                        {
                            id: "efe67f40-1220-8c8a-6452-4d12b32dba7d",
                            heading: "Types of Mutual Funds",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Equity Funds:",
                                    text: `Description: These funds primarily invest in stocks or equities. They aim for high returns by investing in a diversified portfolio of companies’ shares.
        
                                                        Risk and Return: Equity funds are generally higher risk but offer the potential for higher returns over the long term. They can be suitable for investors seeking capital growth.
        
                                                        Best For: Investors with a long-term investment horizon and a higher risk tolerance.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Bond Funds (Reksa Dana Obligasi):",
                                    text: `Description: Bond funds invest in bonds or fixed-income securities issued by governments or corporations. These funds generate regular income through interest payments and aim to provide capital preservation.
        
                                                        Risk and Return: Bond funds are usually less volatile than equity funds, making them a more stable investment option. They offer moderate returns and are less risky than equity funds.
        
                                                        Best For: Investors looking for steady income with lower risk, suitable for those nearing retirement or seeking more stable investments.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Money Market Funds (Reksa Dana Pasar Uang):",
                                    text: `Description: Money market funds invest in short-term, low-risk securities such as Treasury bills and commercial paper. They aim to provide liquidity and safety while offering modest returns.
        
                                                        Risk and Return: These funds have the lowest risk and are less likely to experience significant fluctuations in value. They provide lower returns compared to equity and bond funds but are highly liquid.
        
                                                        Best For: Investors seeking a safe place to park their money for the short term or those who need easy access to their funds.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Hybrid Funds",
                                    text: `Description: Hybrid funds combine investments in both stocks and bonds. They aim to balance the risk and return by diversifying across different asset classes.
        
                                                        Risk and Return: Hybrid funds offer a middle ground between equity and bond funds. They provide potential for growth and income while managing risk through diversification.
        
                                                        Best For: Investors looking for a balanced approach, who want exposure to both equities and fixed income, and are comfortable with moderate risk.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Summary",
                                    text: `Understanding the different types of mutual funds allows you to select the fund that best meets your financial objectives and risk tolerance. Whether you are seeking high growth, steady income, safety, or a balanced approach, there's a mutual fund type that can help you achieve your investment goals. Always consider consulting with a financial advisor to ensure your choice aligns with your overall investment strategy.`
                                },
                            ]
                        },
                        {
                            id: "13f7e593-d3d3-f6ac-cf43-a06e5c0fda39",
                            heading: "Understanding Investment Objectives",
                            image: null,
                            text: `Before investing in mutual funds, it's crucial to define your investment objectives. Your goals will influence which types of mutual funds are most suitable for you. Here’s a detailed breakdown to help you understand how to align your objectives with your investment choices.`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "What Are Investment Objectives?",
                                    text: `Investment objectives are the specific goals you aim to achieve with your investments. They reflect your financial needs, risk tolerance, and investment time horizon. Common investment objectives include seeking growth, generating income, or achieving a balance of both`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Types of Investment Objectives",
                                    text: `Growth (Capital Appreciation):
        
                                                        Description: If your primary goal is to increase the value of your investment over time, you're seeking growth or capital appreciation. This typically involves investing in assets that have the potential for high returns.
        
                                                        Suitable Mutual Funds: Equity funds (Reksa Dana Saham) are often chosen for growth objectives. These funds invest in stocks of companies with strong growth potential, aiming for substantial capital gains.
        
                                                        Characteristics: Growth-focused investments usually carry higher risk but offer the possibility of higher returns. They are ideal for investors with a long-term horizon who can tolerate market fluctuations.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Income (Regular Returns):",
                                    text: `Description: If you need a steady stream of income from your investments, such as interest payments or dividends, your objective is income generation. This is often important for retirees or those needing regular cash flow.
        
                                                        Suitable Mutual Funds: Bond funds (Reksa Dana Obligasi) and money market funds (Reksa Dana Pasar Uang) are commonly used for income objectives. Bond funds provide regular interest payments, while money market funds offer lower but stable returns.
        
                                                        Characteristics: Income-focused investments typically have lower risk compared to growth investments and provide predictable returns. They are suitable for those who prefer stability and regular income.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Balanced Approach (Growth and Income):",
                                    text: `Description: A balanced approach seeks both growth and income from your investments. This objective aims to achieve a mix of capital appreciation and regular returns.
        
                                                        Suitable Mutual Funds: Hybrid funds are designed for this purpose. They invest in a combination of stocks and bonds, providing a blend of growth potential and income.
        
                                                        Characteristics: Balanced funds offer moderate risk and can adjust the allocation between equities and fixed income based on market conditions and fund strategy. They are suitable for investors who want a diversified approach to meet both growth and income needs.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Monthly Compounding:",
                                    text: `Interest is added to your principal every month.
                        Effect: Slightly less than daily compounding but still beneficial compared to annual compounding.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Quarterly Compounding:",
                                    text: `Interest is added every three months.
                        Effect: Provides a good balance between interest earned and compounding frequency`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Annual Compounding:",
                                    text: `Interest is added to your principal once a year.
                        Effect: The least beneficial in terms of interest earned, compared to more frequent compounding.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "How to Compare Interest Rates",
                                    text: `When choosing a deposit investment, compare the following:`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Nominal vs. Effective Interest Rates:",
                                    text: `Nominal Rate: The stated interest rate without considering the effects of compounding.
                        Effective Rate: The actual rate of interest earned, taking into account compounding. For accurate comparison, use the effective annual rate (EAR).`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Annual Percentage Yield (APY):",
                                    text: `Definition: APY reflects the total interest earned in a year, including the effects of compounding.
                        Use: APY is useful for comparing deposit accounts as it shows the true return on your investment.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Fixed vs. Variable Rates:",
                                    text: `Fixed Rate: The interest rate remains the same throughout the investment term.
                        Variable Rate: The interest rate can change based on market conditions or other factors.
        
                        By understanding these aspects of interest rates, you can make more informed decisions about your deposit investments, ensuring you maximize your returns based on your financial goals and needs.`
                                },
                            ]
                        },
                        {
                            id: "28baccf4-bfaa-2273-8a3f-0a4dbafff8a2",
                            heading: "Expense Ratios",
                            image: null,
                            text: `Expense ratios are a crucial aspect of mutual fund investing that can significantly impact your overall investment returns. They represent the annual fees charged by a mutual fund to manage and operate the fund. Here's a detailed explanation to help you understand expense ratios and their importance in mutual fund investments.`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Introduction to Expense Ratios",
                                    text: `An expense ratio is a measure of the costs associated with running a mutual fund, expressed as a percentage of the fund's average assets under management (AUM). These fees cover various operational expenses, including management fees, administrative costs, and other expenses necessary for the fund's operation. Understanding expense ratios is essential because they directly affect your investment returns.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Components of Expense Ratios",
                                    text: `1. Management Fees:

                                    Description: These fees are paid to the fund managers for their expertise in selecting and managing the fund's investments. They are typically the largest component of the expense ratio.

                                    Impact: Higher management fees can erode your investment returns over time, especially if the fund does not perform exceptionally well.

                                    2. Administrative Costs:

                                    Description: These costs cover the day-to-day operations of the fund, including recordkeeping, customer service, and compliance with regulations.

                                    Impact: While usually smaller than management fees, administrative costs still contribute to the overall expense ratio and affect your returns.

                                    3. Other Fees:

                                    Description: This can include costs for fund marketing, legal services, and auditing. These are generally less significant but still part of the expense ratio.

                                    Impact: These fees vary by fund and can add up, influencing the total expense ratio.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "How Expense Ratios Are Calculated",
                                    text: `# Understanding the Expense Ratio

The expense ratio of a mutual fund is an important measure that indicates how much it costs to operate the fund. It shows what percentage of the fund's assets is used for expenses each year.

 How the Expense Ratio is Calculated

To calculate the expense ratio, you use this formula:

Expense Ratio = Total Annual Operating Expenses / Average Assets Under Management`
                                },
                                {
                                    id: "dfe9a7d1-c20c-9c97-61ac-0d4863901c42",
                                    chapter_title: "Impact of Expense Ratios on Investment Returns",
                                    text: `1. Direct Impact:

                                    Description: The expense ratio is deducted from the fund’s returns before you receive them. For example, if a fund earns a 10% return but has a 1% expense ratio, your net return would be 9%.

                                    Impact: Even a small difference in expense ratios can accumulate significantly over time, affecting the long-term growth of your investment.

                                    2. Comparison Between Funds:

                                    Description: When comparing mutual funds, lower expense ratios are generally preferable. Funds with lower expense ratios typically cost less to manage, leaving more of the fund’s returns for the investors.

                                    Impact: However, it’s essential to balance expense ratios with other factors such as fund performance, investment strategy, and risk level. A lower expense ratio does not necessarily mean a better fund if it does not meet your investment needs.`
                                },
                                {
                                    id: "dfe9a7d1-c20c-9c97-61ac-0d4863901c42",
                                    chapter_title: "Evaluating Expense Ratios",
                                    text: `1. Benchmarking:

                                    Description: Compare the expense ratios of similar funds within the same category or investment style. This comparison helps you understand whether a fund’s fees are reasonable relative to its peers.

                                    Impact: Funds with exceptionally high or low expense ratios can indicate specific strategies or operational structures that may influence your investment choice.

                                    2. Understanding Value:

                                    Description: Assess whether the fund’s expenses are justified by its performance and services. Sometimes higher fees may be warranted if a fund consistently delivers superior returns or offers unique benefits.

                                    Impact: Look at the fund’s track record, management quality, and additional features to determine if the expense ratio aligns with the value you’re receiving.`
                                },
                                {
                                    id: "dfe9a7d1-c20c-9c97-61ac-0d4863901c42",
                                    chapter_title: "Conclusion",
                                    text: `Expense ratios are a fundamental aspect of mutual fund investing that reflect the cost of managing the fund. Lower expense ratios generally mean that more of your money is working for you, potentially leading to better returns over time. When choosing a mutual fund, it’s essential to consider expense ratios in the context of the fund’s overall performance and your investment goals. By understanding and evaluating expense ratios, you can make more informed decisions and optimize your investment strategy.`
                                },
                            ]
                        },
                        {
                            id: "33c732e2-1ed8-d265-4879-908c3a215e97",
                            heading: "Fund Manager",
                            image: null,
                            text: `Fund managers play a critical role in mutual fund investments, as they are responsible for making investment decisions and managing the fund’s portfolio. Their expertise and decisions can significantly influence the performance of the mutual fund. Here’s a detailed explanation to help you understand the importance of researching fund managers and their impact on your investments.`,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Introduction to Fund Managers",
                                    text: `A fund manager is a professional who oversees and makes decisions about the investments within a mutual fund. They analyze market trends, select securities, and adjust the fund’s holdings to achieve its investment objectives. The skill and experience of a fund manager can greatly affect the fund’s performance and, consequently, your investment returns.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Key Aspects of a Fund Manager's Role",
                                    text: `1. Investment Strategy:

                                    Description: Fund managers develop and implement the investment strategy for the fund, determining how to allocate assets among different securities and sectors based on market conditions and the fund’s goals.

                                    Impact: The effectiveness of the investment strategy can influence the fund’s returns. A well-defined strategy helps in achieving the fund’s objectives and managing risks.
                                    
                                    2. Security Selection:

                                    Description: Fund managers select individual stocks, bonds, or other securities to include in the fund’s portfolio. They conduct thorough research and analysis to identify investment opportunities.

                                    Impact: The choice of securities directly affects the fund’s performance. Skillful selection can lead to higher returns, while poor choices can diminish performance.

                                    3. Risk Management:

                                    Description: Managing risk involves making decisions to minimize potential losses while aiming for returns. Fund managers use various techniques to hedge against market volatility and economic uncertainties.

                                    Impact: Effective risk management protects the fund’s value and reduces the impact of adverse market conditions, contributing to more stable returns.

                                    4. Performance Monitoring:

                                    Description: Fund managers continuously monitor the performance of the fund and its holdings. They make adjustments based on performance data, market changes, and economic forecasts.

                                    Impact: Regular monitoring ensures that the fund remains aligned with its objectives and adapts to market dynamics, which can enhance overall performance.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Importance of Researching Fund Managers",
                                    text: `1. Experience and Track Record:

                                    Description: Investigate the fund manager’s experience in the industry and their history of managing similar funds. A manager with a proven track record and substantial experience is often more likely to make informed and successful investment decisions.

                                    Impact: A strong track record of consistent performance can indicate the manager’s ability to navigate different market conditions effectively.

                                    2. Investment Philosophy:

                                    Description: Understand the fund manager’s investment philosophy and approach. This includes their strategy for selecting investments, risk management practices, and overall approach to achieving the fund’s objectives.

                                    Impact: Ensuring that the manager’s philosophy aligns with your investment goals and risk tolerance helps in achieving the desired outcomes from the fund.

                                    3. Reputation and Credibility:

                                    Description: Research the fund manager’s reputation within the industry. Look for information about their professional background, previous roles, and any awards or recognitions received.

                                    Impact: A manager with a solid reputation and credibility is often seen as more reliable and capable of managing the fund effectively.

                                    4. Management Style:

                                    Description: Fund managers can have different management styles, such as active or passive management. Active managers seek to outperform the market through selective investments, while passive managers aim to replicate market indices.

                                    Impact: Your preference for active or passive management should align with the manager’s style to ensure compatibility with your investment strategy.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "How to Evaluate a Fund Manager",
                                    text: `1. Review Performance Reports:

                                    Description: Analyze the fund’s performance reports and compare them with benchmarks and peer funds. Consistent outperformance and effective risk management are positive indicators.

                                    Impact: Performance reports provide insights into how well the fund manager has achieved the fund’s objectives over time.

                                    2. Check Manager Tenure:

                                    Description: Look at how long the fund manager has been managing the fund. Longer tenure often suggests stability and deep understanding of the fund’s strategy.

                                    Impact: A manager with a long tenure may have a better grasp of the fund’s strategy and market trends.

                                    3. Evaluate Communication and Transparency:

                                    Description: Assess how transparent the fund manager is with their investment decisions and performance updates. Effective communication and transparency are signs of a trustworthy manager.

                                    Impact: Open communication helps investors stay informed about the fund’s strategy and any changes, fostering trust and confidence.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Summary",
                                    text: `The role of a fund manager is pivotal in determining the success of a mutual fund investment. By researching a fund manager’s experience, track record, investment philosophy, and management style, you can make more informed decisions about investing in a mutual fund. A skilled and experienced fund manager can significantly enhance the fund’s performance and help you achieve your investment goals.`
                                },
                            ]
                        },
                    ]
                },
                {
                    id: "8cc61dd5-ffd2-f98b-790f-33f9a22efb60",
                    chapter_title: "Risk Tolerance",
                    content: [
                        {
                            id: "728ebf13-c973-5dd7-0b3d-8e55c6001be1",
                            heading: "Introduction",
                            image: null,
                            text: `Risk tolerance is a critical concept in investing that determines how much risk you are willing and able to take with your investments. It is a crucial factor in choosing the right mutual funds and crafting an investment strategy that aligns with your financial goals and personal comfort level. Here's a detailed breakdown to help you understand risk tolerance and its impact on your investment choices.
                            
                            Risk tolerance refers to the level of risk you are comfortable taking with your investments. It varies from person to person and can be influenced by factors such as age, financial situation, investment goals, and personal preferences. Understanding your risk tolerance helps you select investments that match your ability to handle potential losses and fluctuations in value.`,
                            content: []
                        },
                        {
                            id: "3ca649a0-d860-8924-5449-8c506062a45a",
                            heading: "Types of Risk Tolerance",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "High Risk Tolerance:",
                                    text: `Description: Investors with high risk tolerance are comfortable with significant fluctuations in the value of their investments. They are willing to accept higher levels of risk in exchange for the potential of higher returns.

                                    Characteristics: High-risk tolerance is often associated with a long-term investment horizon, as these investors can weather market volatility and are focused on capital growth.

                                    Suitable Mutual Funds: Equity funds (Reksa Dana Saham) are suitable for high-risk tolerance investors. These funds invest in stocks, which can experience substantial price swings but offer the potential for significant returns over time.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Moderate Risk Tolerance:",
                                    text: `Description: Investors with moderate risk tolerance are willing to accept some level of risk but prefer a balanced approach. They seek a mix of growth and stability in their investments.

                                    Characteristics: Moderate-risk tolerance investors are usually looking for a blend of capital appreciation and income. They are comfortable with some fluctuations but prefer to avoid extreme volatility.

                                    Suitable Mutual Funds: Hybrid funds (Reksa Dana Campuran) are appropriate for moderate-risk tolerance. These funds invest in both stocks and bonds, providing a balance between growth potential and income stability.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Low Risk Tolerance:",
                                    text: `Description: Investors with low risk tolerance prefer to minimize potential losses and are less comfortable with fluctuations in investment value. They prioritize safety and steady returns over high returns.

                                    Characteristics: Low-risk tolerance is often associated with a shorter investment horizon or a preference for predictable returns. These investors are typically more concerned with preserving their capital.

                                    Suitable Mutual Funds: Bond funds (Reksa Dana Obligasi) and money market funds (Reksa Dana Pasar Uang) are ideal for low-risk tolerance investors. Bond funds provide regular income with moderate risk, while money market funds offer high safety and stability with lower returns.`
                                },
                            ]
                        },
                        {
                            id: "20cc0b48-ede7-2b8e-9a61-b7d80ec819af",
                            heading: "How to Assess Your Risk Tolerance",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Evaluate Your Financial Situation:",
                                    text: `Income and Expenses: Consider your current income, expenses, and financial obligations. A stable financial situation allows for a higher risk tolerance, while uncertainty might necessitate a more cautious approach.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Determine Your Investment Goals:",
                                    text: `Short-Term vs. Long-Term: Identify whether your goals are short-term (e.g., saving for a vacation) or long-term (e.g., retirement). Longer time horizons generally allow for higher risk tolerance.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Consider Your Investment Horizon:",
                                    text: `Time Frame: The length of time you plan to keep your investments can affect your risk tolerance. Longer horizons can accommodate more risk, while shorter horizons might require safer investments.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Reflect on Your Comfort Level:",
                                    text: `Emotional Response: Consider how you react to market fluctuations. Are you comfortable with the possibility of seeing the value of your investments decline temporarily, or do you prefer stability?`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Use Risk Tolerance Questionnaires:",
                                    text: `Tools: Many financial institutions offer risk tolerance questionnaires that help assess your risk profile based on your responses to various questions about your investment preferences and financial situation.`
                                },
                            ]
                        },
                        {
                            id: "dc7b63e9-3ffb-3c68-35a1-9960aabb475c",
                            heading: "Conclusion",
                            image: null,
                            text: `Understanding your risk tolerance is essential for making informed investment decisions. By evaluating your comfort with risk, financial situation, investment goals, and time horizon, you can choose mutual funds that align with your risk profile. Matching your risk tolerance with appropriate funds will help you build a portfolio that suits your needs and helps you stay on track to achieve your financial goals.`,
                            content: []
                        },
                    ]
                },
                {
                    id: "cf4a87d8-d081-5421-520b-a4c8c6bbca5c",
                    chapter_title: "Tax Implications",
                    content: [
                        {
                            id: "9f82e85e-c180-565f-494e-299a213f391c",
                            heading: "Introduction",
                            image: null,
                            text: `Tax implications are an essential consideration when investing in mutual funds, as they can significantly affect your overall investment returns. Mutual funds may distribute income in the form of dividends and capital gains, which can have various tax consequences. Here’s a detailed explanation to help you understand how these distributions impact your tax situation and how to manage them effectively.
                            
                            When you invest in mutual funds, you may receive income from the fund in several forms: dividends, interest, and capital gains. Each of these income types has different tax treatments and can affect your tax liability in various ways. Understanding these tax implications helps you make informed investment decisions and plan for your tax obligations.`,
                            content: []
                        },
                        {
                            id: "665a3163-dc56-2f8f-4ea8-d0e4c116c609",
                            heading: "Types of Income from Mutual Funds and Their Tax Implications",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Dividends",
                                    text: `Description: Dividends are payments made to shareholders from the fund’s earnings, typically derived from interest or income from investments in stocks or bonds.

                                    Tax Treatment:

                                    Qualified Dividends: These are dividends paid by U.S. corporations on shares that have been held for a specified period. They are taxed at the long-term capital gains rate, which is generally lower than the ordinary income tax rate.

                                    Ordinary Dividends: These are dividends that do not meet the criteria for qualified dividends and are taxed at the investor’s ordinary income tax rate.

                                    Impact: Receiving dividends can increase your taxable income. Understanding whether your dividends are qualified or ordinary helps you anticipate the tax rate applied to these earnings.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Interest Income:",
                                    text: `Description: Some mutual funds, particularly bond funds, generate interest income from investments in bonds and other fixed-income securities.

                                    Tax Treatment: Interest income is typically taxed at your ordinary income tax rate. In some cases, interest from municipal bonds may be exempt from federal income tax and sometimes from state taxes.

                                    Impact: Interest income contributes to your taxable income and is subject to the same tax rates as wages or salary.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Capital Gains:",
                                    text: `Description: Capital gains occur when the mutual fund sells securities in its portfolio for a profit. These gains are distributed to shareholders and can be either short-term or long-term.

                                    Tax Treatment:

                                    Short-Term Capital Gains: Gains from securities held for one year or less are taxed at the investor’s ordinary income tax rate.

                                    Long-Term Capital Gains: Gains from securities held for more than one year are taxed at the long-term capital gains rate, which is usually lower than the ordinary income tax rate.

                                    Impact: Capital gains distributions can significantly affect your tax situation, especially if the fund has performed well. The tax rate applied depends on how long the fund held the securities before selling them.`
                                },
                            ]
                        },
                        {
                            id: "33c7e4c5-d2f7-b706-55e4-1bbd575299e4",
                            heading: "How to Manage Tax Implications",
                            image: null,
                            text: ``,
                            content: [
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Review Fund Distributions:",
                                    text: `Description: Examine the mutual fund’s annual tax statement, which details the amount and type of income distributed throughout the year. This statement includes information on dividends, interest, and capital gains.

                                    Impact: Reviewing these distributions helps you understand your taxable income and plan accordingly for tax season.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Consider Tax-Efficient Funds:",
                                    text: `Description: Tax-efficient mutual funds are designed to minimize taxable distributions. They may use strategies such as focusing on investments with lower turnover or investing in tax-advantaged securities.

                                    Impact: Investing in tax-efficient funds can reduce the tax impact of your investments and help you keep more of your returns.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Utilize Tax-Advantaged Accounts:",
                                    text: `Description: Investing through tax-advantaged accounts like IRAs or 401(k)s can defer or eliminate taxes on mutual fund income. Contributions to these accounts may also provide tax benefits.

                                    Impact: Tax-advantaged accounts can help you manage and potentially reduce the tax impact of your mutual fund investments.`
                                },
                                {
                                    id: "15f99c2c-265f-16ed-91cc-4480776448c9",
                                    chapter_title: "Plan for Taxable Distributions:",
                                    text: `Description: If you expect significant taxable distributions from your mutual fund investments, plan ahead by setting aside funds to cover potential tax liabilities.

                                    Impact: Planning helps you avoid surprises at tax time and ensures you have adequate funds to pay any taxes due.`
                                },
                            ]
                        },
                        {
                            id: "88593426-dadc-56fd-7191-60129758d8ab",
                            heading: "Conclusion",
                            image: null,
                            text: `Understanding the tax implications of mutual fund investments is crucial for effective financial planning. By knowing how dividends, interest income, and capital gains are taxed, you can make more informed investment decisions and manage your tax obligations more effectively. Reviewing fund distributions, considering tax-efficient funds, utilizing tax-advantaged accounts, and planning for taxable distributions are key strategies for minimizing the tax impact of your investments.`,
                            content: []
                        },
                    ]
                },
            ]
        }
    },
]

export const getDetailEducation = (id) => {
    return getAllEducation.find(educationItem => educationItem.id === id)
}

export const getListDetailMaterial = (material, id) => {
    return material.find(material => material.id === id)
}

export const getDetailMaterial = (listMaterial, id) => {
    return listMaterial.find(material => material.id === id)
}

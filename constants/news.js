import ChinazandJapan from "@/public/assets/news/China and Japan Interested in Property Investment in IKN.png";
import hot_news_thumnail from "@/public/assets/news/hot_news_thumnail.png"
import Checkout from "@/public/assets/news/Check out 5 Gold Bar Investment Tips for Beginners.png"
import Most from "@/public/assets/news/10 Most Profitable Stocks in a Week when JCI Breaks Record, WIKA & WTON Enter the List.png"
import Nearly from "@/public/assets/news/Nearly IDR 1.4 Million.png"
import Benefits from "@/public/assets/news/Benefits of Living Near a Mall, Living a Comfortable Life and High Investment Opportunities.png"

function guidGenerator() {
    var S4 = function () {
        return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
    };
    return (S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4());
}

export const getHotNews = {
    id: Math.floor(Math.random() * 1000000),
    title: "Crypto Prices 15 September 2024: Bitcoin Returns to USD 60,000",
    thumbnail: hot_news_thumnail,
    date: "15 Sep 2024",
    first_paragraph: "The prices of Bitcoin and other top cryptocurrencies were observed to experience uniform movements on Sunday (15/9/2024). The majority of top cryptocurrencies were observed to be in the red zone again. Based on data from Coinmarketcap, the cryptocurrency with the largest market capitalization, Bitcoin (BTC), is weakening again. Bitcoin fell 0.67 percent in 24 hours, but still gained 11.35 percent on the week.",
    content: "The prices of Bitcoin and other top cryptocurrencies were observed to experience uniform movements on Sunday (15/9/2024). The majority of top cryptocurrencies were observed to be in the red zone again. Based on data from Coinmarketcap, the cryptocurrency with the largest market capitalization, Bitcoin (BTC), is weakening again. Bitcoin fell 0.67 percent in 24 hours, but still gained 11.35 percent on the week.",
}

export const getMustReadNews = [
    {
        id: guidGenerator(),
        title: "China and Japan Interested in Property Investment in IKN",
        thumbnail: ChinazandJapan,
        date: "11 Sep 2024",
        content: "dsadasdsa",
    },
    {
        id: guidGenerator(),
        title: "Check out 5 Gold Bar Investment Tips for Beginners",
        thumbnail: Checkout,
        date: "04 Aug 2024",
        content: "dsadasdsa",
    },
    {
        id: guidGenerator(),
        title: "Nearly IDR 1.4 Million in Gold! Don't Buy Digital Gold Before Reading This",
        thumbnail: Nearly,
        date: "5 Sep 2024",
        content: "dsadasdsa",
    },
    {
        id: guidGenerator(),
        title: "10 Most Profitable Stocks in a Week when JCI Breaks Record, WIKA & WTON Enter the List",
        thumbnail: Most,
        date: "20 Aug 2024",
        content: "dsadasdsa",
    },
    {
        id: guidGenerator(),
        title: "Benefits of Living Near a Mall, Living a Comfortable Life and High Investment Opportunities",
        thumbnail: Benefits,
        date: "18 Aug 2024",
        content: "dsadasdsa",
    },
]

export const getLatestNews = [
    {
        id: guidGenerator(),
        title: "GOTO Founders Are Crowded Selling Shares, Take a Peek at the Latest Number of Ownership!",
        thumbnail: ChinazandJapan,
        date: "14 Sep 2024",
        first_paragraph: "The founders or Co-Founders of PT GoTo Gojek Tokopedia Tbk. (GOTO) is still actively selling its share ownership in GOTO. The number of share ownership is currently shrinking. Most recently, one of GOTO's founders, Andre Soelistyo, sold almost all of his 2.24 billion GOTO Series A shares, referring to the disclosure of information on the Indonesia Stock Exchange (BEI).",
        content: "The founders or Co-Founders of PT GoTo Gojek Tokopedia Tbk. (GOTO) is still actively selling its share ownership in GOTO. The number of share ownership is currently shrinking. Most recently, one of GOTO's founders, Andre Soelistyo, sold almost all of his 2.24 billion GOTO Series A shares, referring to the disclosure of information on the Indonesia Stock Exchange (BEI).",
    },
    {
        id: guidGenerator(),
        title: "Stock Recommendations and JCI Movements Today, Friday 13 September 2024",
        thumbnail: Checkout,
        date: "13 Sep 2024",
        first_paragraph: "The composite stock price index (IHSG) is estimated to have the potential to strengthen again today. What stocks are interesting for investors to pay attention to? Based on Bloomberg data, JCI recorded a gain of 0.48% or 37.2 points to 7,798.15 on Thursday (12/9/2024). Throughout yesterday's trading, the JCI moved in the range of 7,782.49 to 7,833.27. This closing level also became a new record high (all time high/ATH) for IHSG. ",
        content: "The composite stock price index (IHSG) is estimated to have the potential to strengthen again today. What stocks are interesting for investors to pay attention to? Based on Bloomberg data, JCI recorded a gain of 0.48% or 37.2 points to 7,798.15 on Thursday (12/9/2024). Throughout yesterday's trading, the JCI moved in the range of 7,782.49 to 7,833.27. This closing level also became a new record high (all time high/ATH) for IHSG. ",
    },
    {
        id: guidGenerator(),
        title: "Whispers of Sampoerna HMSP & Gudang Garam GGRM Shares After Cigarette Excise Designated to Increase 5%",
        thumbnail: Nearly,
        date: "13 Sep 2024",
        first_paragraph: "The latest whispers of a target for Sampoerna (HMSP) and Gudang Garam (GGRM) shares after cigarette excise is designed to increase by 5% in 2025. Movement in the share price of PT HM Sampoerna Tbk. (HMSP) and PT Gudang Garam Tbk. (GGRM) in the opposite direction last week. As of Friday (13/9/2024), HMSP's share price was recorded to have strengthened 0.67% to IDR 750 in a week. Meanwhile, GGRM shares actually corrected 0.93% to IDR 16,000 during the same period.",
        content: "The latest whispers of a target for Sampoerna (HMSP) and Gudang Garam (GGRM) shares after cigarette excise is designed to increase by 5% in 2025. Movement in the share price of PT HM Sampoerna Tbk. (HMSP) and PT Gudang Garam Tbk. (GGRM) in the opposite direction last week. As of Friday (13/9/2024), HMSP's share price was recorded to have strengthened 0.67% to IDR 750 in a week. Meanwhile, GGRM shares actually corrected 0.93% to IDR 16,000 during the same period.",
    },
    {
        id: guidGenerator(),
        title: "Adhi Karya (ADHI) Pockets New Contract IDR 13.6 Trillion as of August 2024",
        thumbnail: Most,
        date: "12 Sep 2024",
        first_paragraph: "PT Adhi Karya (Persero) Tbk. (ADHI) pocketed new contracts worth IDR 13.6 trillion until August 2024, lower than the same period in 2023. Based on ADHI's records, the value of new contracts during January-August 2023 was IDR 24.5 trillion or 150% higher than the realization of new contracts 8 in 2022 worth IDR 16.3 trillion.  This means that ADHI's new contract value achievement during January-August 2024 is the lowest in the last 3 years.",
        content: "PT Adhi Karya (Persero) Tbk. (ADHI) pocketed new contracts worth IDR 13.6 trillion until August 2024, lower than the same period in 2023. Based on ADHI's records, the value of new contracts during January-August 2023 was IDR 24.5 trillion or 150% higher than the realization of new contracts 8 in 2022 worth IDR 16.3 trillion.  This means that ADHI's new contract value achievement during January-August 2024 is the lowest in the last 3 years.",
    },
    {
        id: guidGenerator(),
        title: "BREN to UNVR Powered, JCI Opens Stronger to Level 7,740",
        thumbnail: Benefits,
        date: "12 Sep 2024",
        first_paragraph: "The Composite Stock Price Index (IHSG) opened higher to 7,740.78 at the start of trading Tuesday (10/9/2024). The strengthening of the index is in line with the increase in big cap stocks such as BREN, DSSA, ASII and UNVR. Based on data from the Indonesia Stock Exchange (BEI), the composite index rose 0.49% or 38.04 points to 7,740.78 shortly after opening. Today, JCI opened at 7,702.73 and briefly moved to 7,753.92. It was recorded that 251 shares rose, 112 shares declined, and 201 shares moved in place. Meanwhile, market capitalization, aka market cap, reached IDR 13,304.78 trillion.",
        content: "The Composite Stock Price Index (IHSG) opened higher to 7,740.78 at the start of trading Tuesday (10/9/2024). The strengthening of the index is in line with the increase in big cap stocks such as BREN, DSSA, ASII and UNVR. Based on data from the Indonesia Stock Exchange (BEI), the composite index rose 0.49% or 38.04 points to 7,740.78 shortly after opening. Today, JCI opened at 7,702.73 and briefly moved to 7,753.92. It was recorded that 251 shares rose, 112 shares declined, and 201 shares moved in place. Meanwhile, market capitalization, aka market cap, reached IDR 13,304.78 trillion.",
    },
]

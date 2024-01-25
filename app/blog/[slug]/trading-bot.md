---
title: 'Developing A Trading Bot'
date: '2022-07-02'
---

I worked on a project over the summer of 2023 - developing a trading bot for the equity markets. I developed a novel strategy based on my own experience trading stocks using a volume-based analysis. 

When I looked at the charts for the S&P 500 and for other stocks, especially stocks that traded with a lower average volume, I noticed a pattern. Before the stock made a large price move, it would trade with a higher volume the day or two before. 

I assume this is because generally, relatively large amounts of shares trade hands at a certain price before the stock can move up or downward. I can only speculate on the mechanism for why this is the case, I only know that it happens occasionally before large price movement.

I developed a strategy with a python trading bot, using the yahoo finance API, combined with pandas and numpy to analyze today's market data compared to historical data.

My initial approach was to compare the stock's volume with its volume the day before, to identify any anomalies in volume that might indicate an upcoming move. However, this approach was rife with false positives.

On certain days, the market just trades more volume in general, perhaps because it's an option settlement day, after a holiday, or for any other of myriad reasons. So on any of these days, the ticker that I was analyzing could have a false positive, because the volume of the market in general that day was higher than the day yesterday. 

To solve this problem, I weighted the volume of the ticker in question by the volume of the S&P 500 ticker, SPY. So for any given day, I would obtain a ratio of the volume of stock I was testing to the volume of SPY. This approach gave me a relative volume for the ticker to the volume of the market. I could then test for discrepancies in volume more effectively. 

When I detected a discrepancy in volume greater than 25% (an arbitrary value, I could do a regression to find a more precise volume deviation cutoff), the program would mark that as a SPY weighted volume-deviated stock. I would then sort the volume deviated stocks by the amount that they had deviated, and write that data to an excel spreadsheet using ExcelWriter. 

I interfaced with the TDA ThinkOrSwim API to execute trades based on the ouput of my software. Using a TD paperMoney account from July 2023 to August 2023, I was able to generate alpha on a subset of the S&P 500 stocks using my algorithm.

In the future, I would like to extend this approach to other markets, including futures markets, bond markets, and cryptocurrency markets. Another refinement could be to increase the granularity from daily volume to hourly or even minute volume, although that would require a paid subscription to a higher quality data service. 

You can find the repo at [https://github.com/Aierus/stockscreener](https://github.com/Aierus/stockscreener) to see my approach in more detail. 

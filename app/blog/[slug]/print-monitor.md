---
title: 'BC Print Monitor'
date: '2022-07-02'
---

As a part of my efforts to enhance my workplace with automation, I updated the old print monitor that was hardly functioning. After years of service, it was time for a refresh. 

As a member of the BC Walk-In Help Desk, it is part of our duties to make sure that the printers on campus are well-stocked and working properly. The workflow for this task used to be to wait for some aggravated student to come up to us in person, to complain that the printer was either out of paper or out of toner. We would then have to interrupt their print job to replace some component, and then ask them to requeue the job.

To alleviate this problem, an innovative student in years prior had built a print monitor in PHP that the Help Desk had used for many semesters. Unfortunately, as the BC Print System updated and the HP API changed, the old print monitor fell into disservice. 

I recognized that this tool could still be useful to us, despite its presently dilapidated state. I wanted to fix the print monitor, but changing the PHP one to work with the current system would have just been a band-aid on the problem. 

When I build something, I want it to last and want it to be repairable long after I'm gone. To achieve these ends, I needed to not just to repair the existing monitor but to create an entirely new one. At BC there's no courses that teach PHP, and I couldn't rely on the chance that some employ years down the line would learn the language solely for this task. So I created a new monitor from the ground up, built with simple to understand tools in python and JavaScript. 

I decided to build a simple web scraping script with scrapy in python to query the printer's webpages. HP provides a url to access the printer's data as long as the computer doing so is on the BC DNS server. I needed to aggregate this data in a manner that was both understandable and modular for future use. So I used MongoDB to collect the printer data in one place. 

After integrating my python script with MongoDB I had a choice for how I wanted to convey this data to the front-end. I could use MongoDB App Services to forward the data, but I thought that it was unnecessarily complicated to have the API functions as a part of some web interface, versus being part of the repo that I had already constructed. 

I decided instead to use FastAPI to provide a simple API that connected to the database and exposed the data to the front-end. This added another step for the data to travel, but in my mind the simplicity outweighs the performance benefits. If I were doing this project under different circumstances that were more performance demanding, I may have chosen the opposite approach. 

After setting up the data pipeline, it was time to build the front-end. I chose to use NextJS for familiarities sake (this website is written in NextJS), and because it is a popular framework that future maintainers could comprehend. As a single page application, I only needed 3 JS files to construct the entire front-end - one to get the data, one for the table, and one for the page itself.

For the end-user, I added some visual cues that would make their job easier. When a printer is low on paper or toner, the cell in that table changes to orange or red to denote the seriousness of the problem. When a user scrolls over a specific row it highlights it so they do not get lost in visual clutter. I also added a sorting function so that the people who were responsible for certain sections of printers were able to view only the ones that they were concerned with. 

Initially, this started as a project for the help-desk, to renovate our old print monitor. But I realized I could simply add printers all across campus. Now, the print monitor could view all the printers on campus and report on their status.

My print monitor is now in service at libraries and in offices all across campus, and monitors the over 5-million pages that are printed annually at BC. You can try it for yourself at [bcprintmonitor.com](https://bcprintmonitor.com/). Please allow a few seconds for the program to fetch the newest data. So far it has been working consistently. As of today it has a [99.847% uptime](https://stats.uptimerobot.com/MPNnmfxzmw).

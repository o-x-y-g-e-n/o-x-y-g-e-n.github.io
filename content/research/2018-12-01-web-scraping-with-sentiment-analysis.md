---
title: "Web Scraping with Sentiment Analysis"
date: 2018-12-01 00:00:01
description: "Sentiment Analysis on Reviews Classified by Aspect Terms"
tags: ["web scraping", "sentiment analysis", "data visualization", "natural language processing"]
image: /assets/sentiment_header_main.png

---
![](assets/sentiment_header.png)
## Project Details : Broad Specifications
Our project is a client side application. The aim behind building the `Sentiment Analysis` part was to get the polarity of aspect terms (that really matter while shopping) from reviews mentioned on the particular websites and also to classify the reviews into positive, negative and netural class.

## Tech 
The software uses a number of open source projects to work properly:
* [Python3] - Python is an interpreted, high-level and general-purpose programming language.
* [HTML] - HTML5 is the latest evolution of the standard that defines HTML. 
* [CSS] - Cascading style sheets
* [Bootstrap] - front-end open source toolkit
* [Selenium] - Selenium automates browsers. 
* [Natural Language Toolkit (NLTK)] - NLTK, is a suite of libraries and programs for symbolic and statistical natural language processing for English 
* [TextBlob] - library for processing textual data
* [Flask] - Flask is a micro web framework written in Python.
* [Chart.js] - Simple yet flexible JavaScript charting for designers & developers
* [Requests] - Requests is an elegant and simple HTTP library for Python, built for human beings.
* [XML](https://www.w3.org/XML/) - exchange of a wide variety of data on the Web and elsewhere.

## A Glimpse on Client Side Programming
The application we have designed is not a web application.We definetely have used Flask which is a server side programming language but we have made use of it just our program a better user interface.

Hence to run this application , user must have to have all the dependencies mentioned in the further documention.

Also, if you find the term server in the document, by all means it refers to the program/script that is making things done and not the real server in client-server architecture.

# Software Requirement Specifications
![Requirement](assets/wa_sw_requirement.png)
## Scope
The application provides the facality to fetch the reviews of any product mentioned on the amazon, flipkart and imdb and it gives you complete analysis of the product. It gives you the visualization through graphs and bars. Currently only these three websites are supported but many more will be supported soon.

## User Classes and Characteristics
asically there is just a single end user interacting with theapplication. ( you can call the interacting person `User`) The user is any person who wants to take the benifit of theapplication. i.e He/she doesn’t need to sign up for anything. The user caninteract with the web application.

## Operating Environment
The system is a `client side application`. it is designed to work on all operating systems. 

## Assumptions and Dependencies
Here, we have assumed that you a good internet connection. Also that the link you paste must have minimum **50 reviews**. Otherwise, the program will still work but won’t give you desire output.

# External Interface Requirement
![External Interface Requirement](wa_interface.png)

## User Interface
Application can be accessed through any browser interface. The software will be fairly compatible with Microsoft Internet Explorer Version 6 and above or other modern web browsers.

## Software Interfaces

**Client Side**: HTML supported Web Browser,MAC OS, Linux (All Flavors).
**Server Side**: Linux, Flask framework


## Communication Interfaces
The System shall use the HTTP protocol forcommunication over the internet and for the intranet communication will be through TCP/IP protocol suite.

## Functional Requirements
| Requirement ID | Requirement   |  Input | Output  |   
|:-:|:-:|:-:| :-: |
| R1 | System provides an iterface for the end user to paste a link | Amazon / Imdb / Flipkart review’s link | Link Valid/ Invalid flag | 
| R2 | Sytem provides user to search polarity for a specific term | Aspect term ( related to the product) | Polarity Page for that term |
| R3 | System provides an interface to browse amongst all the aspect terms | Product Link | Navigation Links |

## Use Case Diagram
A use case diagram at its simplest is a representation of a user's interaction with the system that shows the relationship between the user and the different use cases in which the user is involved.
![Use Case Diagram](assets/sentiment_usecase_diagram.png)

## Activity Diagram
An activity diagram is a behavioral diagram i.e. it depicts the behavior of a system. An activity diagram portrays the control flow from a start point to a finish point showing the various decision paths that exist while the activity is being executed.
![Activity Diagram](assets/sentiment_activity_diagram.png)

## Sequence Diagram
A sequence diagram is a type of interaction diagram because it describes how—and in what order—a group of objects works together. 
![Sequence Diagram](assets/sentiment_sequence_diagram.png)

## State Diagram
A state diagram shows the behavior of classes in response to external stimuli. Specifically a state diagram describes the behavior of a single object in response to a series of events in a system.
![StateDiagram](assets/sentiment_state_diagram.png)

## Activity Network Diagram
An Activity Network Diagram is a diagram of project activities that shows the sequential relationships of activities using arrows and nodes. 
** *The Number indicates the time (days here) for each activity*
![ActivityNetworkDiagram](assets/sentiment_activity_network_diagram.png)


## Implementation Environment
* **Flask Web Framework** in *Ubuntu 16.04*
* **Selenium** in *Ubuntu 16.04*
* **Requests** , Selenium in *Ubuntu 16.04*

## Module Description
**Grab Reviews**
It is used to grab reviews from the selected vendor (Amazon, flipkart or imdb) . Also it uses selenium to automate the fetching of the reviews. The way it fetches is that each and every review has a particular id/ class element. It fetches the text from that element. Also the text is encoded into UTF-8 format for XML.

**Analyse Reviews**
It grabs top 70 terms using NLTK. It uses NLTK to POS ( Part of speech) tagging and remove unwanted terms that donot form in category of aspect terms. Also the sentences are tokenize and are classifed as per aspect terms. Then they are classified into positive, negative and neutral tags.


## Challenges Faced in Sentiment Analysis Part
* Finding the aspect terms was a difficult task. We could either hardcode it for like all categories of products. But we wanted to make it a little more dynamic,
* First of all , we grab top 70 words from all of the reviews fetched.
* Then we POS (parts of speech) tagged the words and then examined all the words and removed all the POS tags that weren’t necessary i.e which didn’t imply an aspect term.
* Also, our output was quite successful , we could get a handful amount of aspect terms using these concepts.
* Hence, we achieved the dynamic nature of the program but we did attach a constraint that the reviews must have enough data.

** The Loading Process
All the front-end content i.e BootStrap, Google Fonts, and Grids are loaded via CDN i.e You would require an internet connection to get things pretty.
* The reviews scraped are stored into XML file and are given as input for processing.
* The back-end contains things like Flask, NLTK , TextBlob And Selenium which are python packages.
* Libraries like NLTK, TextBlob and Selenium are locally downloaded to the client’s computer. i.e It cannot be loaded dynamicallly or via internet. They must be installed for the program to run.

## How it works?
Firstly, the reviews are fetched from the particular website using selenium framework and are stored into a xml file.
* This xml file is passed as an input for processing.
* Processing process consists of many steps which uses NLTK:
     * Fetch top 70 words amongst all the reviews fetched which uses NLTK.
     * Perform POS ( parts of speech) tagging and remove all the
    unwanted tags such as adverbs, adjectives, number etc.
    * Now the remaining terms are the aspect terms of the system.
* Now for every aspect term, search that term in aspect term , find the polarity of the sentence using TextBlob API.
* Hence, we have a list of aspect terms and classifed reviews.

# Installation
It requires [Python3](https://www.python.org/downloads/release/python-377/) v3+ to run.

```sh
$ cd Web-Scraping-With-Sentiment-Analysis
$ pip3 install -r requirements.txt 
```
You need to install the below softwares / libraries manually.
Download the following dependencies
- BeautifulSoup4 - [Download](https://pypi.org/project/beautifulsoup4/)
- NLTK with all data [Download](https://www.nltk.org/install.html)

### Execution
1. Download `chromedriver` from here according to your Chrome Version & Operating System.
2. Setup the absolute path of the driver in `config.ini` file using your favourite text editor. Something like this.
    ```
    [selenium]
    chromedriver = /home/shivam/Desktop/chromedriver
    ```
3. From the root directory, execute the following command
    ```sh
    $ python index.py
    ```
    Now, Navigate to `localhost:5000` to open the GUI.
4. Select the website for which you want to fetch the reviews
-[ ] Amazon
-[ ] Flipkart
-[ ] Imdb
5. Make sure you enter the `review` page URL for the link. 


# Testing Plan
![userTesting](assets/wa_user_testing.png)
The testing is a technique that is going to be used in the project is `black box testing` ,the expected inputs to the system are applied and only the outputs are checked.

## Testing Strategy
The development process repeats this testing sub process a number of the lines for the following phases.
* Unit Testing
* Integration Testing

Unit Testing tests a unit of code after coding of that unit is completed. Integration Testing tests whether the previous programs that make up a system, interface with each other as desired. System testing ensures that the system meets its stated design specifications. Acceptance testing is testing by users to ascertain whether the system developed is a correct implementation of the software requirements
specification.

Testing is carried out in such a hierarchical manner to that eachcomponent is correct and the assembly/combination of component is correct. Merely testing a whole system at end would most likely throw up errors in component that would be very costly to trace and fix. We have performed both Unit Testing and System Testing to detect and fix errors.

## Testing Methods
We have performed Black-box testing for the testing purpose. A brief description is given below:
Black-box testing is a method of software testing that examines the functionality of an application without peering into its internal structures or workings. This method of test can be applied to virtually every level of software testing: unit, integration, system and acceptance. It typically comprises most if not all higher level testing, but can also dominate unit testing as well.

|  TestCase ID | Test Scenario  | Test Steps  | Test Data  | Expected Results  | Actual Results | 
|---|---|---|---|---|---|
|  T01 | Enter the link.  | Provide the Product Link  | URL  | Reviews Fetched  | Success  |
| T02 | Navigate through aspect terms| Provide the Product Link  | - | Display all aspect terms | Displayed |
|T03| Search an aspect term   | Search for a aspect term| Aspect Term | Barchart & review Classification for the term |    Success |
|T04| Zero Reviews| Provide the Product Link | Link | Not throwing an exception | Success|

# Screenshots

![Home Page](assets/sentiment_ss_1.png)
![Aspect Term Classifcation](assets/sentiment_ss_2.png)
![Search Aspect Term](assets/sentiment_ss_3.png)
![Negative Reviews](assets/sentiment_ss_4.png)
![Positive Reviews](assets/sentiment_positive.png)
![Neutral Reviews](assets/sentiment_neutral.png)


# Demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/I39z1mXaer8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


# Conclusion
Hence, using the **sentiment analysis** project, we can get clear idea about people’s sentiment about the product from their reviews for different aspect terms of the defining product or system.

Hereby, we declare that the functionality implemented in this system was performed by understanding all the modules.

# Limitation and Future Enchancements

Talking about the project, The reviews fetched must be above 50. i.e It should have some minimum data as our aspect terms depend on it. Also The reviews must be not very much in number. More the reviews, more the time taken,

- [ ] Sentiment Analysis will be applicable for more websites
- [ ] Better aspect terms


> View this project on [github](https://github.com/o-x-y-g-e-n/Web-Scraping-With-Sentiment-Analysis) 😺

# Extensions
>Can you wrap the project in a module and join it with a bigger project? Can this project be made useful for something big? Can you merge it with something big?

***Yes***. For the guys who have been making an `IMDB API`, who provides a whole set of response, polarity might be added to that response. i.e with each IMDB gathered information , a new tag can be added. I.e Positive polarity, negative polarity and neutral polarity.

# Biblography
**Research Papers**:
* http://ijcsit.com/docs/Volume%206/vol6issue06/ijcsit2015060652.pdf
* https://www.researchgate.net/publication/316666447_Sentiment_analysis_using_product_review_data
* http://www.aclweb.org/anthology/W14-1306

**Web Tutorials**:
* Flask Web Tutorial (https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world)
* Selenium Documention + Mini Project (https://github.com/timgrossmann/InstaPy)
* NLTK (Natural Language ToolKit) ( https://www.nltk.org/ )



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Python3]: <https://www.python.org/downloads/>
   [Selenium]: <https://www.selenium.dev/>
   [Natural Language Toolkit (NLTK)]: <https://www.selenium.dev/>
   [TextBlob]: <https://textblob.readthedocs.io/en/dev/>
   [Flask]: <https://flask.palletsprojects.com/en/1.1.x/>
   [Chart.js]: <https://www.chartjs.org/>
   [Requests]: <https://requests.readthedocs.io/en/master/>
   [HTML]: <https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5>
   [CSS]: <https://www.w3schools.com/css/>
   [Bootstrap]: <https://getbootstrap.com/>
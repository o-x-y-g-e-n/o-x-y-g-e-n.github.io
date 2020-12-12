---
title: "Whatsapp Assistant Bot"
date: 2013-05-06 00:00:01
description: "Google Like assistant in whatsapp."
tags: ["javascript, bot, whatsapp, automation"]
image: /assets/wa_header.jpg
---
![headerPhoto](assets/wa_post_header.png)
### Motivation
The motivation to build such an utility was [Google Allo](https://allo.google.com/) (sadly shutdown by Google). The messaging application allowed to fire some predefined search commands in the app itself. 

### Project Details : Broad Specification
The aim behing the ‘Whatsapp Assistant’ part was to provide a interface in
which user can fire some commands in whatsapp and it gives you a feel that
whatsapp is responding you back. The idea was inspired from Google Assistant.

### Tech

whatsapp-assistant-bot uses a number of open source projects to work properly:

* [Python] - Python is a programming language that lets you work quickly
and integrate systems more effectively.
* [Selenium] - Selenium automates browsers. That's it!

## Software Requirement Specification
![SoftwareRequirement](assets/wa_srs.png)
A software requirements specification (SRS) is a document that describes what the software will do and how it will be expected to perform. It also describes the functionality the product needs to fulfill all stakeholders (business, users) needs.
### Purpose
This is SRS document refers to `Whatsapp Assistant Bot` Release 2017 version. It describes the functionality and specification of how the application works and provides a guide how an end user can interact with the application.

### Scope
It has some well defined set of commands that are only understood by the bot. Also it has some pre-setup thing. i.e you have to set the Bot Account in your whatsapp first to get it work.

### User Classes & Characteristics
Basically there is just a single end user interacting with the application. ( you can call the interacting person `User`)The user is any person who wants to take the benifit of the application. i.e He/she doesn’t need to sign up for anything. The user can interact with the web application.

### Operating Environment
The system is a `Client Side Application` and not an android or ios application. The program runs on all OS (Windows, MacOS & Linux). Although, you do need to configure few paths to make it work.

### Assumption & Dependencies
1. Create a whatsapp group or member named `BOT` (all caps) ***This is a mandatory requirement***
2. Message `Hi` to the group or member. ***This is a mandatory requirement***

## External Interface Requirements
![InterfaceHeader](assets/wa_interface.png)

The user interface (UI) is the point of human-computer interaction and communication in a device. This can include display screens, keyboards, a mouse and the appearance of a desktop. It is also the way through which a user interacts with an application or a website.

### User Interfaces
Application can be accessed through any browser interface. The software will be fairly compatible with Microsoft Internet Explorer Version 6 and above or other modern web browsers.

### Software Interfaces

**Client Side**: HTML supported Web Browser,MAC OS, Linux (All Flavors).

### Communication Interfaces
The Whatsapp Assistant Bot shall use the HTTPS protocol for
communication over the internet and for the intranet communication will
be through TCP/IP protocol suite.

## Functional Requirements
![](assets/wa_sw_requirement.png)
Functional requirements define the basic system behaviour. Essentially, they are what the system does or must not do, and can be thought of in terms of how the system responds to inputs. Functional requirements usually define if/then behaviours and include calculations, data input, and business processes.

| Requirement ID | Requirement   |  Input | Output  |   
|:-:|:-:|:-:| :-: |
| R1 |System provides whatsapp web interface ( automated driven) | Your whatsapp scanner code | whatsapp interface |   
| R2 | System interprets fired command and reply appropriate output | Command (from the list of pre-defined commands)| Appropriate response on the chat window | 

## Use Case Diagram
A use case diagram at its simplest is a representation of a user's interaction with the system that shows the relationship between the user and the different use cases in which the user is involved.
![UseCaseDiagram](assets/wa_usecase_diagram.jpg)

## State Diagram
A state diagram shows the behavior of classes in response to external stimuli. Specifically a state diagram describes the behavior of a single object in response to a series of events in a system.
![StateDiagram](assets/wa_state_diagram.png)


## Activity Network Diagram
An Activity Network Diagram is a diagram of project activities that shows the sequential relationships of activities using arrows and nodes. 
** *The Number indicates the time (days here) for each activity*
![ActivityNetworkDiagram](assets/wa_activity_network_diagram.jpg)

## Implementation Environment
* Ubuntu 16.04

## Module Description
**Whatsapp Assistant**: It continuously scans for the last input ( command) so that it can differentiate between last command and command about to be fired. Then it scans for command and then fetches the output using selenium framework. It goes to desire websites, fetches the data and then fire it to whatsapp input.

## Challenges Faced in Whatsapp Assistant implementation
* The thing that was challenging is getting the last input from the BOT group.
* How would the program know when to actually start reading the command or search the command ( i.e /command) as user must have old commands still on the screen.
* To solve this, program **continously reads the time of the user** i.e local time of PC, matches it with the time of the last command fired, if same then it is understood to be last command. Hence now it’s time to work.

## How it works?
The program directly opens Whatsapp Web for you. Scan the code and log in to your account.
* It automatically leads you to the BOT account.
* Now wait until the timer starts, when it does, start firing the commands.
* Internally, when a command is fired, it goes to predefined websites to scrape data and then is passed as messages in the BOT account.
* The fetching & scraping is done using Selenium Framwork.

## Commands Available
| Command  | Description  | Parameters  | Execution Time  | Examples |
|---|---|---|---|---|
| */quote*  | It fetches a random quote from the datasets/quote.xml file  | -  | 1-2sec | ```/quote``` |
| */fact*  | It fetches a random fact from the datasets/fact.xml file.  |  - | 1-2sec  | ```/fact``` |
| */joke*  |  It fetches a random joke from the datasets/joke.xml file.  |  - | 1-2sec  | ```/joke``` |
| */flirt*  | It fetches a random pick-up line from the datasets/flirt.xml file.  | -  |  1-2 sec  | ```/flirt``` |
| */weather*  | It fetches the weather of the specified city,state or country.  | [country, state, city] |  2-5 sec | ``` /weather china, /weather newyork``` |
|  */youtube* | it fetches the youtube url for the specific term  | [search_term]  | 10-15sec  | ```/youtube how to make pasta```|
| */news*  | it grabs news  | [local, technology, world, entertainment, health, sports, business]  |  5-10 sec | ```/news local, /news business``` |
| */calc*  | it performs mathematical functions  | [argument]  | 2-5 sec  | ```/calc 2^5, /calc 2+5``` |
| */lyrics*  | It fetches the lyric of the song  | [name of the song]  | 10-15 sec  |``` /lyrics havana ``` |
|  */define* | it fetches the defination of the term  | [word]  | 2-5 sec  | ```/define amazing``` |
| */time*| it gives you the current date and day| - | 1 sec | ```/time``` |

## Execution
1. Create a whatsapp group or member named `BOT` (all caps) ***This is a mandatory requirement***
2. Message `Hi` to the group or member. ***This is a mandatory requirement***
3. Download `chromedriver` from [here](https://chromedriver.chromium.org/downloads) according to your Chrome Version & Operating System.
4. Setup the absolute path of the driver in `config.ini` file using your favourite text editor. Something like this.
    ```
    [selenium]
    chromePath = /home/shivam/Desktop/chromedriver
    ```
5. Fire the below commands from the directory
    ```sh
    $ cd src
    $ python3 main.py
    ```
6. If you don't see any errors, you have successfully ran the script. Go and fire some commands!

## Testing Plan
![userTesting](assets/wa_user_testing.png)
The testing is a technique that is going to be used in the project is **black box testing** ,the expected inputs to the system are applied and only the outputs are checked.

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
|  T01 | BOT user/group not created  | 1. Fire the Script  | Whatsapp barcode  | It should take you to home page  | Success  |
| T02  | Product Timeout  | -  | Command  | If selenium failed to fetch, it tries again  | Success  |
| T03  | BOT doesnot contain any message  | 1. Fire the whatsapp script  | Whatsapp ID  | It should take you to homepage  | Success  |

# Screenshots
![Screenshot1](assets/wa_screenshot_1.png)
![Screenshot2](assets/wa_screenshot_2.png)
![Screenshot3](assets/wa_screenshot_3.png)

# Demo
<iframe width="560" height="315" src="https://www.youtube.com/embed/PsA2EJ45YZc" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

# Conclusion
Using the `whatsapp assistant` project, we can fire commands in Whatsapp, fetching information without even switching tabs, or opening browser. You have your assistant right in your whatsapp. 
Hereby, we declare that the functionality implemented in this system was performed by understanding all the modules.

# Limitation and Future Enhancements
- [ ] Remove 'BOT' group/user manual creation



> View this project on [github](https://github.com/o-x-y-g-e-n/whatsapp-assistant-bot) 😺



[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [Python]: <https://www.python.org/>
   [Selenium]: <https://www.selenium.dev/>
   [Chrome]: <https://www.google.com/intl/en_in/chrome/>
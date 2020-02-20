# Assignment

In this assignment, you will create a new application - A Weather Application.

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/images/assignment_51.PNG)

Pre-requisites:

- We will be using [Open Weather's](https://openweathermap.org/api) APIs for fetching the weather data for different cities **in India**. (Given the time constraints, we will be creating an application for checking the weather of Indian cities only.) Create a free account and explore the **Current Weather Data** API documentation. We will be making use of this API in our application.

Complete the following tasks:

1. Create the basic structure for our application. Our application should have a navigation bar, a dropdown to select pre-defined cities and on selection of a city from the dropdown, a card like structure should be shown in the body with data relevant to the city selected.

2. Create a Firebase database where you should include the following cities of India - ```Mumbai, Delhi, Kolkata, Chennai, Bangalore```. In our application, you need to fetch these cities from Firebase and use it in the dropdown.

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/images/assignment_51a.png)

3. When a city is selected, a card structure should be shown. **Create this card component using React Hooks.** Using the Open Weather API, you need to fetch data related to the selected city and show it in the card. 
This card structure, as shown in the diagram, should have the city name at the top. Next, there should be the value of the current temperature in the next row, followed by the type of tempeature and max/min temperature in the next row. Finally, at the end, there should be three buttons to change the type of temperatures.

![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/images/assignment_51.PNG)


4. The three buttons at the end should have the values °C, K, and °F related to degree Celsius, Kelvin and Farhenite temperature measurements respectively. On clicking a button, the temperature value in the center should be shown with that measurement. For example, if I'm showing the temperature in °C when the card is rendered and the user then clicks on °F, the card should be re-rendered by converting the value from °C to °F.

|ON Clicking C|On Clicking F|
|---|---|
|![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/images/assignment_51c.png)|![](https://github.com/greyatom-school/the-minerva-project/raw/master/FEWD/sprint_5/images/assignment_51b.PNG)|

If you are stuck in between, you can refer to the complete solution of the project [here](https://drive.google.com/file/d/1BiFcjVIviF3ZGB25ax00dAbd7PBjwpvb/view?usp=sharing)


# Let’s Plan a Roadtrip!
	A React project by Dustin Holloway, Cahen Taylor and Dominick Van Nus
## Description
This project is a React application that is intended to help users research national parks and plan a road trip. The application fetches data from the National Parks Service API and displays a list of parks. Users begin on a landing page as seen below:

![Alt text](src/New%20folder/landing%20page%20gif.gif)

After clicking on the map, users are routed to a page where the app fetches a list of parks from the National Parks Service APS and renders them as individual tiles (see below). Here the user can filter the list of parks by location using US State abbreviations and add parks to a list of their favorite parks. 

 



Clicking on the “Favorites” tab at the top takes the user to a new page where their list is rendered. From that list, they can select a park to fetch more details about that park, and subscribe for email updates about the park. There is also a button they can click that is intended to add the selected park to their trip planner.
The code is written in JavaScript using the React framework and some additional libraries such as react-router-dom. It uses hooks like useState and useEffect to manage state and to make API calls.
The App component is the main component that contains the routing for different pages of the application. It also manages the React internal state of the lists of parks and favorite parks, and the search/filter capability. It also has functions for fetching and posting data to the server.
The Card Container component is responsible for rendering the cards for each park.
The Card component renders the details for each park, including its image, name, and a heart icon that toggles the park's "liked" status, which adds the park to the favorites list.

## Installation
-The repo for this project is located here:
    -https://github.com/Dustin-Holloway/Phase-2-Project-Routes
-	Clone this repo to your local environment
-	To initialize the localhost server, open a terminal and run the following command: 
    -	json-server --watch db.json --port 4000
-	Open a second terminal and run the command ***npm install*** to load required dependencies, then run ***npm start*** to initialize the app.

## Future Development
-   The ultimate goal for the app is to allow users to plan a road trip by adding their favorite parks to a trip planner and mapping out a route to reach all the parks.
-	The Add Park to Trip button should create a POST request to a list of saved parks in the user’s profile for eventual use in the trip planning feature.
-	The Card component should render additional details such as current weather conditions at the park, maps of the park, operating hours, admissions fees, calendar of events, etc.
-	The Subscribe for Updates feature should ideally be capable of updating the user about changes to the park’s relevant details such as weather conditions, events, and hours of operation.



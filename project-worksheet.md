# Project Overview


## Project Links

- [Front-end](https://beanlocal.netlify.app/)
- [Back-end](https://coffee-bean-api.herokuapp.com/)

## Project Description

This is a cafe review app built on React and Ruby on Rails. Users write reviews for cafes and can read other users' reviews. Users can review multiple cafes and cafes can have multiple reviews. There's a map that shows the locations of all of the cafes that have been added to the database. Mapbox is the API I used for the mapping and geocoding. 

## User Stories
- Users want to create accounts so they can access the app.
- Users want to sign into the app.
- Users want to add reviews and an image to multiple cafes.
- Users want to read other users’ reviews.
- Users want to see the locations of cafes on a map.
- Users want to search the cafes by location.
- If something was entered incorrectly, users will want to edit or delete their reviews.
- Users want to be able to delete their profiles.


## Wireframes

- [wireframes](https://i.imgur.com/pw2rGer.png)
- [react architecture](https://i.imgur.com/q9R6OIG.png)

## Backend Architecture

I have 3 tables in my database: Users, Shops, and Reviews. The join table is Reviews. See an example of what’s returned below in the API Snipit section.

![relationships between tables](https://i.imgur.com/iOdbi93.png)

## API Snipit


```
[
    {
    "id": 8,
    "shop_id": 3,
    "user_id": 3,
    "img": "https://i.imgur.com/rZAslxW.png",
    "rate": "8.5",
    "content": "Last coffee for the weekday. Trident coffee. where i hung out in highschool, but have been coming to since I couldn’t see over the counter. It’s inside a Super rad alt. Bookstore. Campos coffee.",
    "created_at": "2020-08-19T00:44:58.047Z",
    "updated_at": "2020-08-19T00:44:58.047Z",
    "shop": {
        "id": 3,
        "name": "Trident",
        "address": "940 Pearl St",
        "city": "Boulder",
        "state": "CO",
        "postalcode": "80302",
        "country": "USA",
        "created_at": "2020-08-18T19:47:53.259Z",
        "updated_at": "2020-08-18T19:47:53.259Z",
        "coords": "-105.282890 40.016950"
    },
    "user": {
        "id": 3,
        "username": "lizzie",
        "password_digest": "$2a$12$2P82sNQ/RY9Dg.ab4yHXN.vh/yt/ 4agc3gEjUBvnFvG767QZoPDO6",
        "created_at": "2020-08-18T19:47:54.273Z",
        "updated_at": "2020-08-18T19:47:54.273Z"
    }
},
...
```

### MVP/PostMVP 

#### MVP EXAMPLE
- Fully functional CRUD app that let’s you post, edit, review, find, and favorite cafe reviews.
- The app must be mobile first.

#### PostMVP EXAMPLE

- All cafes can be viewed on the map page using the Google maps API
- User logins are verified and passwords are encrypted

## Components

| Component | Description | 
| --- | :---: |  
| Welcome page | Takes user to login or create account | 
| Login | Accepts username and password | 
| Create account | Accepts unique username and a password |
| Edit Account | View your profile and delete |
| Add new post | Accepts a cafe name, text content, a rating, and an image |
| The feed | Renders all of the app user’s reviews |
| Search | Search reviews by location |
| Map | Renders all of the cafes that have been reviewed by users on a map or renders only user’s favorite cafes|
| Favorites | Renders users favorites cafes |


Unless otherwise noted, time is listed in hours:

| Component | Priority | Estimated Time | Time Invested | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Create React app and files for all components | H | 1 |  1 | 1 |
| Basic Navbar  | H | 1 | 2 | 2 |
| Set up basic React routing | H | 1 | 1 | 1 |
| Create welcome page | H | 1 | 2 | 2 |
| Set up the back-end | H | 1 | 5 | 5 |
| Search | H | 4 | - | - |
| Display all posts on the feed | H | 2 | 5 | 5 |
| Create a review | H | 4 | 5 | 5 |
| Edit account/ create account | H | 3 | 8 | 8 |
| Learn about Mapbox maps API | H | 5 | 7 | 7 |
| Learn about geocoding | H | 3 | 4 | 4 |
| Styling the app | M | 7 | 8 | 8 |
| Learn more about user authentication | L | 4 | 8 | 8 |
| Total | H | 41 | - | 56 |

## Project Schedule
| Day | Deliverable | Status | 
| --- | :---: |  :---: |
| Day 1 -  Tues | Do more research on the Google maps API and geocoding | Completed |
| Day 1 -  Tues | Set up basic RoR back end | Completed | 
| Day 1 -  Tues | Have my schema set so seed data can start being harvested | Completed |
| Day 1 -  Tues | Spin up a create React | Completed |
| Day 1 -  Tues | Create welcome page (no working butotns) | Completed |
| Day 1 -  Tues | Style welcome page | Completed |
| Day 1 -  Tues | test in postman | Completed |
| Day 2 -  Wednes | Create mobile first Navbar | Completed |
| Day 2 -  Wednes | Seed the database | Completed |
| Day 2 -  Wednes | Create the main feed | Completed |
| Day 2 -  Wednes | Style the main feed | Completed |
| Day 3 -  Thurs | Set up the add a new cafe form | Completed |
| Day 3 -  Thurs | Create login page | Completed |
| Day 3 -  Thurs | Create profile page | Completed |
| Day 3 -  Thurs | Create new account page | Completed |
| Day 3 -  Thurs | Set page for adding a new review | Completed |
| Day 3 -  Thurs | Edit user profile | Completed |
| Day 4 -  Fri | Create the form used for reviews | Completed |
| Day 4 -  Fri | Set up the post reviews functionality | Completed |
| Day 3 -  Fri | Style the new review page | Completed |
| Day 4 -  Fri | Maps page | Completed |
| Day 5 -  Mon | MVP map filter | - |
| Day 5 -  Mon | Styling | Completed |
| Day 6 -  Tues | Present | - |




## Additional Libraries
Mapbox - display locations on a map


## Code Snippet
Originally I had planned on looping through an array of addresses to get the coordinates for my app. Making that many API calls didn’t really work so I ended up deciding to store the longitude and latitude pairs in the backend. I couldn’t expect the user to know a coffee shop’s lat and long pair of the top of their heads. This meant that the user would have to make API call their end. 

I ended up adding the API call when the user creates a new cafe, right before they submit it to the database. I was easily able to map all of the cafes coordinates this way.

```
const handleCoordsSubmit = (event) => {
    event.preventDefault();
    const addressString = `${inputCafe.address
      .split(" ")
      .join("-")}-${inputCafe.city
      .split(" ")
      .join("-")}-${inputCafe.state
      .split(" ")
      .join("-")}-${inputCafe.postalcode
      .split(" ")
      .join("-")}-${inputCafe.country.split(" ").join("-")}`;

    axios(
      `https://api.mapbox.com/v4/geocode/mapbox.places/${addressString}.json?access_token=${process.env.REACT_APP_API_KEY}`
    ).then((res) => {
      setCoodsFound(res.data.features[0].geometry.coordinates);
      alert('Located Coordinates!')
    });
  };
```

# My understanding
I understand what's going on. We're using a form to intake inputted information from a user about their home size and the amount house members in their home. With this info, I'm able to calculate it and provide the user their Carbon Footprint. Behind the scenes, theres a function whose listening to hear of any events being triggered by an action, in our case, that action is the submit button. When the form is submitted, the data gets uploaded to said listening function and it will then parse that data into text for elements we will create on the fly and append to our linked document. This process takes less than 3 seconds to occur, but we put in lots of work that took longer than that. The beauty of code!

I do not have any feedback. I've also decided that I may reset my custom work and revert back to just following what you have and keep my work in a seperate file.

## Update data
How we can update data is we can use a tenary operator to switch between edit mode or view mode. if in view, it shows the value and if in edit mode, shows an input.. it can be a lot of work but will be worth it on how cool it will look like!

## Local and Session Storage
Using local and session storage allows us to get an introduction on how we store reoccuring data and retrieve it later. realistically, as mentioned, we would use cleaner, safer, and more complex route like databases and more to handle this logic. However, for now, using local and session storage is a great tool.
In my code along, I'll be using sessionStorage instead of localStorage because the only difference between them is local exists until you delete it and session for the duration of your browser being open. It will be easier for me to use session storage since I usually forget to clear our my local storage.

## Feedback on Functions

I was aware of all the info we went over. I'm quite comfortable working with functions. I look forward to incorporating them more into our work.

### Default Value

When you can assign a default value to a parameter if the value is optional, or has a default value it goes by most of the time. I actually just used one in my validation assignment we had last week.

### Spread 

Using the spread operator as paramaters allow you to loop through the values within your statement or whatever else you'd like to handle array of data.

### IIFE

Before modernazing how we handle functions today, we handled annoymous functions by adding them to global and invoking them immediately on page load.
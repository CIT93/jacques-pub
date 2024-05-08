# Decision App

## Details

**Name:** PickAPlot  

**Description of Purpose:**<br>
PickAPlot makes choosing a movie easy and fun. By answering a few simple questions, users find a movie that matches their mood or interests. It's like having a personal movie advisor, ensuring you always enjoy your movie time."  

**Decision Making Process:**<br>
There are five main steps to PickAPlot
    1. Genre Preference
        App will start by asking the user a series of questions about their genre preference in that moment. There will be four main genres: fantasy, true story, comedy, and action. They will have Yes or No choices - no input other than name.
    2. Emotional Experience
        Based on genre selected, we can ask follow up questions that asks the user what type of emotion they're seeking from their movie experience.
    3. Specific Themes
        The third round of questions as what do they want to get out of the movie, like personal growth or family bonds. Maybe some futuristic scenarios or heroism.
    4. Calculate Points
        As we're asking the user questions, it will add a certain amount of points, and these points will be used to determine what movies will be suggested based on their responses. In addition, we will ask if they would like a newer release (within the last ten years).
    5. Movie Suggestion
        As mentioned in step 4, we calculate points based on user response, and those points will help choose four to five movies, and from there we will choose one that fits the boolean for newer release movies, and after that, we choose one at random. 
    6. Fallback
        If the user chooses no for all answers, we will suggest a movie at random from our entire list.
In the Logic section, I will go over the decicion making process in more detail.

## Logic

In order for me to meet the requirements of our assignment, I had to get creative on how to implement a point system that utilizes a calculation to choose a movie at random for us, and more. Turned out to be a fun idea. I originally thought of food dishes, but thought it would be too complex for the time I have - maybe not - but here we are for now. Below, I'll just list out by the order of my list above, how I plan, **but are subject to change**, to execute the logic for the conditionals and calculation.

### Variables

`userPoints: number` = track total points based on the user's answers
`selectedGenre: string` = to store the genre chose by the user in response to the first question
`movies: array` = movie objects filled with details and points
`questions: array` = question objects containing the question text and how much points it will give the user if they answer Yes
`suggestedMovies: array` = movies filed based on user points before providing user with movie suggestion
`genrePoints: object` = map to base points
`pefersNewReleases: boolean` = stores user's preferences to new releases

### Process
1. Genre Preference
    <em>Ask user question 1</em>  
        If user chooses `fantasy`, ask follow-up questions in `fantasy` category  
        If user chooses `comedy`, ask follow-up questions in `comedy` category  
        If user chooses `thriller`, ask follow-up questions in `thriller` category  
        If user chooses `action`, ask follow-up questions in `action` category
        If user chooses `drama`, ask follow-up questions in `drama` category  
2. Emotional Experience
    <em>Ask user question 2 from `x` category</em>  
        If user chooses a, user gains 20 points  
        If user chooses b, user gains 30 points  
        If user chooses c, user gains 40 points
3. Specific Themes
    <em>Ask user question 3 from `x` category</em>  
        If user chooses a, user recieves 20 points  
        If user chooses b, user receives 30 points  
        If user chooses c, user recieves 40 points  
4. Ask user if they prefer newer releases, store response as `prefersNewReleases`
5. Calculate Points
    <em>Tally up all points</em>  
        If user total is 40 points, they match movies with 20 points  
        If user total is 60 points, they match movies with 30 points  
        If user total is 80 points, they match movies with 40 points  
6. Movie Suggestion
    <em>Pick a movie from `suggestedMovies`, created after getting user points</em>  
        From array of `suggestedMovies, one movie will be picked at random (this array would only four to five movies); however, before it will need to check the following:  
            If the user prefersNewReleases is equal to true, pick one that is within the last decade of 2020.  
7. Fallback
    <em>User chose No for all questions</em>  
        If user chose No to question one, a movie at random from our entire movie list will be suggested  


/* 
KEY:
  genre - this value can ONLY be one of the following:
    - fantasy
    - comedy
    - action
    - animation
    - drama
    - thriller

  age - for the purposes of this "testing" phase, we will skip to the string version of age.
    do you prefer new releases? you can ONLY reply with the following
      - newer (true aka yes)
      - older (false aka no)
  
  points - total points after answering all questions. we need this to find the points of movies that match with half of the total. it can ONLY be one of the following:
    - 80
    - 60
    - 40

*/
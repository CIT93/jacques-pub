/*
JSON created with the help of ChatGPT, with additions, edits, and deletion by me.
*/
export const FANTASY = {
  name: "fantasy",
  sets: [
    {
      emotionalExperience: {
        question: "What kind of emotional journey do you want to embark on?",
        choices: [
          {
            text: "Be thrilled by epic battles and heroic quests",
            points: 20,
          },
          {
            text: "Explore mystical worlds filled with wonder and magic",
            points: 30,
          },
          {
            text: "Uncover dark mysteries and confront ancient evils",
            points: 40,
          },
        ],
      },
      specificPreference: {
        question: "What aspect of heroism interests you the most?",
        choices: [
          {
            text: "The struggle between good and evil on a grand scale",
            points: 20,
            movie: "The Lord of the Rings: The Fellowship of the Ring",
          },
          {
            text: "The personal growth of an unlikely hero facing great challenges",
            points: 30,
            movie: "Pan's Labyrinth",
          },
          {
            text: "Teamwork and camaraderie among a diverse group of heroes",
            points: 40,
            movie: "Avatar",
          },
        ],
      },
    },
    {
      emotionalExperience: {
        question: "Which adventure calls to you?",
        choices: [
          {
            text: "Quests that challenge the limits of imagination",
            points: 20,
          },
          {
            text: "Journeys where magic is as real as the air we breathe",
            points: 30,
          },
          {
            text: "Adventures that pit heroes against formidable foes",
            points: 40,
          },
        ],
      },
      specificPreference: {
        question: "Which fantasy world do you wish to explore?",
        choices: [
          {
            text: "A kingdom where dragons soar and danger lurks",
            points: 20,
            movie: "How to Train Your Dragon",
          },
          {
            text: "Enchanted forests teeming with hidden powers",
            points: 30,
            movie: "The Hobbit: An Unexpected Journey",
          },
          {
            text: "Vast landscapes where the battle for survival unfolds",
            points: 40,
            movie: "Mad Max: Fury Road",
          },
        ],
      },
    },
    {
      emotionalExperience: {
        question: "What draws you into a fantasy tale?",
        choices: [
          { text: "The lore and legends of ancient times", points: 20 },
          {
            text: "The clash of civilizations and the rise of heroes",
            points: 30,
          },
          {
            text: "The exploration of mystical realms beyond imagination",
            points: 40,
          },
        ],
      },
      specificPreference: {
        question: "What is the essence of fantasy for you?",
        choices: [
          {
            text: "Discovering hidden truths through mythical quests",
            points: 20,
            movie: "Harry Potter and the Sorcerer's Stone",
          },
          {
            text: "The transformation of ordinary into extraordinary",
            points: 30,
            movie: "Stardust",
          },
          {
            text: "Uniting diverse beings to overcome great evil",
            points: 40,
            movie:
              "The Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
          },
        ],
      },
    },
  ],
};

export const THRILLER = {
  name: "thriller",
  sets: [
    {
      emotionalExperience: {
        question:
          "Do you prefer psychological depth or adrenaline-pumping action?",
        choices: [
          { text: "Mind-bending mysteries", points: 20 },
          { text: "High-stakes espionage", points: 30 },
          { text: "Survival against the odds", points: 40 },
        ],
      },
      specificPreference: {
        question: "What's your thriller of choice?",
        choices: [
          {
            text: "A detective's quest to unravel a dark mystery",
            points: 20,
          },
          {
            text: "A race against time to prevent a catastrophe",
            points: 30,
          },
          {
            text: "Navigating through a post-apocalyptic world",
            points: 40,
          },
        ],
      },
    },
    {
      emotionalExperience: {
        question: "Which aspect of a thriller excites you the most?",
        choices: [
          { text: "Unpredictable plot twists", points: 20 },
          { text: "Intense character showdowns", points: 30 },
          {
            text: "The battle between good and evil on a psychological level",
            points: 40,
          },
        ],
      },
      specificPreference: {
        question: "What setting intensifies the thrill for you?",
        choices: [
          {
            text: "The eerie quiet of small-town secrets",
            points: 20,
          },
          {
            text: "The high-tech world of cyber espionage",
            points: 30,
          },
          {
            text: "Isolated in space, facing unknown threats",
            points: 40,
          },
        ],
      },
    },
  ],
};

export const COMEDY = {
  name: "comedy",
  sets: [
    {
      emotionalExperience: {
        question: "What type of comedy are you in the mood for?",
        choices: [
          { text: "A classic laugh-out-loud experience", points: 20 },
          {
            text: "Quirky characters in unique situations",
            points: 30,
          },
          {
            text: "Heartwarming comedy that's also insightful",
            points: 40,
          },
        ],
      },
      specificPreference: {
        question: "What setting do you prefer for your comedy?",
        choices: [
          {
            text: "Everyday life turned hilariously upside down",
            points: 20,
            movie: "Groundhog Day",
          },
          {
            text: "Grand adventures with a comedic twist",
            points: 30,
            movie: "The Grand Budapest Hotel",
          },
          {
            text: "Romantic entanglements that lead to laughable situations",
            points: 40,
            movie: "The Big Sick",
          },
        ],
      },
    },
    {
      emotionalExperience: {
        question: "What makes you laugh the most?",
        choices: [
          {
            text: "Slapstick and physical comedy that's timeless",
            points: 20,
          },
          { text: "Witty dialogues and clever comebacks", points: 30 },
          {
            text: "Situations that mirror the absurdities of life",
            points: 40,
          },
        ],
      },
      specificPreference: {
        question: "Do you prefer your comedy with?",
        choices: [
          {
            text: "A touch of romance",
            points: 20,
            movie: "Crazy, Stupid, Love.",
          },
          {
            text: "A visually stunning and unique storytelling style",
            points: 30,
            movie: "Scott Pilgrim vs. The World",
          },
          {
            text: "Satirical and smart humor that makes you think",
            points: 40,
            movie: "Dr. Strangelove",
          },
        ],
      },
    },
    {
      emotionalExperience: {
        question: "How do you prefer your comedic relief?",
        choices: [
          {
            text: "Through unexpected turns in everyday scenarios",
            points: 20,
          },
          {
            text: "By exploring the hilarity in different cultures and customs",
            points: 30,
          },
          {
            text: "With a touch of magic that disrupts the norm",
            points: 40,
          },
        ],
      },
      specificPreference: {
        question: "What kind of animated characters captivate you?",
        choices: [
          {
            text: "Quirky and comedic relief characters",
            points: 20,
            movie: "Despicable Me",
          },
          {
            text: "Heroes who grow and evolve",
            points: 30,
            movie: "Shrek",
          },
          {
            text: "Characters facing and overcoming their fears",
            points: 40,
            movie: "Inside Out",
          },
        ],
      },
    },
  ],
};

export const DRAMA = {
  name: "drama",
  sets: [
    {
      emotionalExperience: {
        question: "What draws you more in a story?",
        choices: [
          {
            text: "The complexity of characters navigating life's challenges",
            points: 20,
          },
          {
            text: "Inspirational tales of overcoming adversity",
            points: 30,
          },
          {
            text: "Exploring the intricacies of historical events",
            points: 40,
          },
        ],
      },
      specificPreference: {
        question: "What aspect of character-driven stories do you prefer?",
        choices: [
          {
            text: "Genius minds at work",
            points: 20,
            movie: "A Beautiful Mind",
          },
          {
            text: "Emotional depth and personal transformation",
            points: 30,
            movie: "Schindler's List",
          },
          {
            text: "Critical moments in history that changed the world",
            points: 40,
            movie: "Lincoln",
          },
        ],
      },
    },
    {
      emotionalExperience: {
        question: "Which theme resonates with you the most?",
        choices: [
          { text: "Underdog stories that inspire", points: 20 },
          {
            text: "Complex relationships and moral dilemmas",
            points: 30,
          },
          {
            text: "Biographical narratives that reveal deeper truths",
            points: 40,
          },
        ],
      },
      specificPreference: {
        question: "Which dramatic setting do you find most compelling?",
        choices: [
          {
            text: "The ruthless world of politics and power",
            points: 20,
            movie: "The Ides of March",
          },
          {
            text: "The pursuit of justice in a flawed legal system",
            points: 30,
            movie: "To Kill a Mockingbird",
          },
          {
            text: "Artists and thinkers challenging societal norms",
            points: 40,
            movie: "Frida",
          },
        ],
      },
    },
    {
      emotionalExperience: {
        question: "What emotional tone do you prefer in dramas?",
        choices: [
          {
            text: "Heartwarming stories of love and friendship",
            points: 20,
          },
          {
            text: "Gritty and raw depictions of real-life struggles",
            points: 30,
          },
          {
            text: "Epic sagas that span generations and cultures",
            points: 40,
          },
        ],
      },
      specificPreference: {
        question: "What's your preference for drama's focus?",
        choices: [
          {
            text: "Personal victories against all odds",
            points: 20,
            movie: "The Pursuit of Happyness",
          },
          {
            text: "Moral conflicts and ethical dilemmas",
            points: 30,
            movie: "12 Angry Men",
          },
          {
            text: "The impact of historical events on individuals",
            points: 40,
            movie: "The King's Speech",
          },
        ],
      },
    },
  ],
};

export const ANIMATION = {
  name: "animation",
  sets: [
    {
      emotionalExperience: {
        question: "What type of animated world do you enjoy?",
        choices: [
          { text: "Classic fairy tales reimagined", points: 20 },
          {
            text: "Original stories with unique characters",
            points: 30,
          },
          {
            text: "Epic adventures in fantastical settings",
            points: 40,
          },
        ],
      },
      specificPreference: {
        question: "What themes do you prefer in animation?",
        choices: [
          {
            text: "The triumph of good over evil",
            points: 20,
            movie: "The Lion King",
          },
          {
            text: "Friendship and bravery in the face of danger",
            points: 30,
            movie: "Toy Story",
          },
          {
            text: "Exploring family and identity",
            points: 40,
            movie: "Coco",
          },
        ],
      },
    },
    {
      emotionalExperience: {
        question: "What draws you to animated movies?",
        choices: [
          { text: "Timeless humor and charm", points: 20 },
          {
            text: "Heartfelt messages and emotional depth",
            points: 30,
          },
          { text: "Stunning visuals and creative worlds", points: 40 },
        ],
      },
      specificPreference: {
        question: "Which aspect of animated storytelling do you value most?",
        choices: [
          {
            text: "The joy of adventure and discovery",
            points: 20,
            movie: "Finding Nemo",
          },
          {
            text: "The power of dreams and imagination",
            points: 30,
            movie: "Up",
          },
          {
            text: "Overcoming obstacles through innovation and teamwork",
            points: 40,
            movie: "Big Hero 6",
          },
        ],
      },
    },
  ],
};

export const ACTION = {
  name: "action",
  sets: [
    {
      emotionalExperience: {
        question: "What kind of action excites you?",
        choices: [
          {
            text: "High-speed chases and explosive sequences",
            points: 20,
          },
          {
            text: "Strategic battles and cunning espionage",
            points: 30,
          },
          {
            text: "Superhero showdowns and saving the world",
            points: 40,
          },
        ],
      },
      specificPreference: {
        question: "What's your ideal action movie scenario?",
        choices: [
          {
            text: "A race against time to stop a global threat",
            points: 20,
            movie: "Mad Max: Fury Road",
          },
          {
            text: "A lone hero taking on impossible odds",
            points: 30,
            movie: "Die Hard",
          },
          {
            text: "Teams coming together to fight a common enemy",
            points: 40,
            movie: "The Avengers",
          },
        ],
      },
    },
    {
      emotionalExperience: {
        question: "What backdrop do you prefer for action scenes?",
        choices: [
          { text: "Futuristic cities and technology", points: 20 },
          { text: "Historic battles and ancient worlds", points: 30 },
          {
            text: "Modern urban environments and skyscrapers",
            points: 40,
          },
        ],
      },
      specificPreference: {
        question: "What element is crucial for an action movie?",
        choices: [
          {
            text: "Innovative gadgets and vehicles",
            points: 20,
            movie: "James Bond: Skyfall",
          },
          {
            text: "Masterful hand-to-hand combat and martial arts",
            points: 30,
            movie: "John Wick",
          },
          {
            text: "An intricate plot with twists and betrayals",
            points: 40,
            movie: "Inception",
          },
        ],
      },
    },
    {
      emotionalExperience: {
        question: "How do you like your action heroes?",
        choices: [
          { text: "Flawed but undeniably skilled", points: 20 },
          { text: "Virtuous and morally upright", points: 30 },
          { text: "Mysterious with a troubled past", points: 40 },
        ],
      },
      specificPreference: {
        question: "Which type of antagonist do you find most compelling?",
        choices: [
          {
            text: "A personal vendetta against the hero",
            points: 20,
            movie: "Kill Bill: Volume 1",
          },
          {
            text: "A powerful villain threatening global safety",
            points: 30,
            movie: "Mission: Impossible - Fallout",
          },
          {
            text: "A complex character with understandable motives",
            points: 40,
            movie: "Black Panther",
          },
        ],
      },
    },
  ],
};

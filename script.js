/**
 * Single Chat Bot Answer Set
 */
var singleChatBotAnswerSet = function (input) {
  var question = 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)';
  // If user input is empty, the bot asks the question.
  if (input == '') {
    return question;
  }

  // Store valid user answers and the bot's responses to those answers.
  var answersAndResponses = {
    yes: 'Wow! Me too! I\'ve been working on the Blackjack project. Makes my day!',
    no: 'Oh ok, just normally happy ;)',
    maybe: 'It seems thinking about coding also brings happiness!',
  };

  // If the user's answer is valid, respond with the response to that answer.
  if (answersAndResponses[input]) {
    return answersAndResponses[input];
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer. ${question}`;
};

/**
 * Multiple Chat Bot Answer Sets
 */
// Initialise the current answer set to be the first one.
var currAnswerSetNum = 0;
var multipleChatBotAnswerSets = function (input) {
  var questionAndAnswerSets = [
    {
      question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
      answers: {
        yes: 'Wow! Me too! I\'ve been working on the Blackjack project. Makes my day!',
        no: 'Oh ok, just normally happy ;)',
        maybe: 'It seems the very thought of coding makes people happy!',
      },
    },
    {
      question: 'Do you enjoy coding most during the day, night, or both? (day/night/both)',
      answers: {
        day: 'Ah yes, when the sun is high in the sky, I can feel its energy too.',
        night: 'Under the calm and gentle moon, I also find my focus.',
        both: "Indeed, I could code 24/7 if I didn't have to sleep!",
      },
    },
  ];
  // Create a temporary variable to access the current answer set concisely.
  var currAnswerSet = questionAndAnswerSets[currAnswerSetNum];

  // If user input is empty, the bot asks the question.
  if (input == '') {
    return currAnswerSet.question;
  }

  // If the user's answer is valid, update currentAnswerSetNum to prep the next question, and
  // respond with the response to that answer.
  if (currAnswerSet.answers[input]) {
    // The following algorithm will always generate the next valid index in questionAndAnswerSets
    var nextAnswerSetNum = (currAnswerSetNum + 1) % questionAndAnswerSets.length;
    var nextAnswerSet = questionAndAnswerSets[nextAnswerSetNum];
    currAnswerSetNum = nextAnswerSetNum;
    return `
      ${currAnswerSet.answers[input]} <br/><br/>
      ${nextAnswerSet.question}
    `;
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer. ${currAnswerSet.question}`;
};

/**
 * Chat Bot Stores User's Name
 */
// Store user name as global that can be reused across conversation.
var userName;

var chatBotStoresUsersName = function (input) {
  var questionAndAnswerSets = [
    {
      question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
      answers: {
        yes: 'Wow! Me too! I\'ve been working on the Blackjack project. Makes my day!',
        no: 'Oh ok, just normally happy ;)',
        maybe: 'It seems the very thought of coding makes people happy!',
      },
    },
    {
      question: 'Do you enjoy coding most during the day, night, or both? (day/night/both)',
      answers: {
        day: 'Ah yes, when the sun is high in the sky, I can feel its energy too.',
        night: 'Under the calm and gentle moon, I also find my focus.',
        both: "Indeed, I could code 24/7 if I didn't have to sleep!",
      },
    },
  ];
  // Create a temporary variable to access the current answer set concisely.
  var currAnswerSet = questionAndAnswerSets[currAnswerSetNum];

  // Logic to ask for and store user name.
  if (!userName) {
    if (input == '') {
      return 'Hey! I\'m Robocop. What\'s your name?';
    }
    userName = input;
    return `
      ${userName}! What a cool name. <br/><br/>
      Hey ${userName}, ${currAnswerSet.question}  
    `;
  }

  // If user input is empty, the bot asks the question.
  if (input == '') {
    return `${userName}! ${currAnswerSet.question}`;
  }

  // If the user's answer is valid, update currentAnswerSetNum to prep the next question, and
  // respond with the response to that answer.
  if (currAnswerSet.answers[input]) {
    // The following algorithm will always generate the next valid index in questionAndAnswerSets
    var nextAnswerSetNum = (currAnswerSetNum + 1) % questionAndAnswerSets.length;
    var nextAnswerSet = questionAndAnswerSets[nextAnswerSetNum];
    currAnswerSetNum = nextAnswerSetNum;
    return `
      ${currAnswerSet.answers[input]} <br/><br/>
      ${userName}! ${nextAnswerSet.question}
    `;
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer, ${userName}. ${currAnswerSet.question}`;
};

/**
 * Chat Bot Stores User's Age
 */

// Store user age as global that can be reused across conversation.
var userAge;

var chatBotStoresUsersAge = function (input) {
  var questionAndAnswerSets = [
    {
      question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
      answers: {
        yes: 'Wow! Me too! I\'ve been working on the Blackjack project. Makes my day!',
        no: 'Oh ok, just normally happy ;)',
        maybe: 'It seems the very thought of coding makes people happy!',
      },
    },
    {
      question: 'Do you enjoy coding most during the day, night, or both? (day/night/both)',
      answers: {
        day: 'Ah yes, when the sun is high in the sky, I can feel its energy too.',
        night: 'Under the calm and gentle moon, I also find my focus.',
        both: "Indeed, I could code 24/7 if I didn't have to sleep!",
      },
    },
  ];
  // Create a temporary variable to access the current answer set concisely.
  var currAnswerSet = questionAndAnswerSets[currAnswerSetNum];

  // Logic to ask for and store user name.
  if (!userName) {
    if (input == '') {
      return 'Hey! I\'m Robocop. What\'s your name?';
    }
    userName = input;
    return `${userName}! What a cool name. How old are you?`;
  }

  if (!userAge) {
    // If user doesn't input anything, repeat the question
    if (input == '') {
      return `${userName}! What a cool name. How old are you?`;
    }
    userAge = Number(input);
    if (Number.isNaN(userAge)) {
      return 'Is that a valid age? How old are you?';
    }
    if (userAge < 20) {
      return `What a spritely age, ${userName}! ${currAnswerSet.question}`;
    }
    if (userAge < 60) {
      return `You're in your prime, ${userName}! ${currAnswerSet.question}`;
    }
    return `What a wise age, ${userName}! ${currAnswerSet.question}`;
  }

  // If user input is empty, the bot asks the question.
  if (input == '') {
    return `${userName}! ${currAnswerSet.question}`;
  }

  // If the user's answer is valid, update currentAnswerSetNum to prep the next question, and
  // respond with the response to that answer.
  if (currAnswerSet.answers[input]) {
    // The following algorithm will always generate the next valid index in questionAndAnswerSets
    var nextAnswerSetNum = (currAnswerSetNum + 1) % questionAndAnswerSets.length;
    var nextAnswerSet = questionAndAnswerSets[nextAnswerSetNum];
    currAnswerSetNum = nextAnswerSetNum;
    return `
      ${currAnswerSet.answers[input]} <br/><br/>
      ${userName}! ${nextAnswerSet.question}
    `;
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer, ${userName}. ${currAnswerSet.question}`;
};

/**
 * Chat Bot Named Answer Sets
 */
// Set the first question to "has been coding"
var currAnswerSetId = 'hasBeenCoding';

var chatBotNamedAnswerSets = function (input) {
  var questionAndAnswerSets = {
    hasBeenCoding: {
      question:
      'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
      answers: {
        yes: 'Wow! Me too! I\'ve been working on the Blackjack project. Makes my day!',
        no: 'Oh ok, just normally happy ;)',
        maybe: 'It seems the very thought of coding makes people happy!',
      },
      nextQuestionId: 'timeOfDay',
    },
    timeOfDay: {
      question:
      'Do you enjoy coding most during the day, night, or both? (day/night/both)',
      answers: {
        day: 'Ah yes, when the sun is high in the sky, I can feel its energy too.',
        night: 'Under the calm and gentle moon, I also find my focus.',
        both: "Indeed, I could code 24/7 if I didn't have to sleep!",
      },
      nextQuestionId: 'weather',
    },
    weather: {
      question:
      'Are you most productive when it\'s sunny or raining? (sun/rain)',
      answers: {
        sun: 'The sun warms my heart and powers me to code.',
        rain: 'The rain washes away my distractions and allows me to focus.',
      },
      nextQuestionId: 'hasBeenCoding',
    },
  };

  // Create a temporary variable to access the current answer set concisely.
  var currAnswerSet = questionAndAnswerSets[currAnswerSetId];

  // Logic to ask for and store user name.
  if (!userName) {
    if (input == '') {
      return 'Hey! I\'m Robocop. What\'s your name?';
    }
    userName = input;
    return `${userName}! What a cool name. How old are you?`;
  }

  if (!userAge) {
    // If user doesn't input anything, repeat the question
    if (input == '') {
      return `${userName}! What a cool name. How old are you?`;
    }
    userAge = Number(input);
    if (Number.isNaN(userAge)) {
      return 'Is that a valid age? How old are you?';
    }
    if (userAge < 20) {
      return `What a spritely age, ${userName}! ${currAnswerSet.question}`;
    }
    if (userAge < 60) {
      return `You're in your prime, ${userName}! ${currAnswerSet.question}`;
    }
    return `What a wise age, ${userName}! ${currAnswerSet.question}`;
  }

  // If user input is empty, the bot asks the question.
  if (input == '') {
    return `${userName}! ${currAnswerSet.question}`;
  }

  // If the user's answer is valid, update currentAnswerSetId to prep the next question, and
  // respond with the response to that answer.
  if (currAnswerSet.answers[input]) {
    // Retrieve the next answer set ID from the current answer set
    var nextAnswerSetId = currAnswerSet.nextQuestionId;
    var nextAnswerSet = questionAndAnswerSets[nextAnswerSetId];
    currAnswerSetId = nextAnswerSetId;
    return `
      ${currAnswerSet.answers[input]} <br/><br/>
      ${userName}! ${nextAnswerSet.question}
    `;
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer, ${userName}. ${currAnswerSet.question}`;
};

/**
 * Dynamic Chat Bot
 */
var dynamicChatBot = function (input) {
  var questionAndAnswerSets = {
    hasBeenCoding: {
      question: 'Hey, wow you seem happy today! Have you been coding? (yes/no/maybe)',
      answers: {
        yes: {
          response: 'Wow! Me too! I\'ve been working on the Blackjack project. Makes my day!',
          nextQuestionId: 'timeOfDay',
        },
        no: {
          response: 'Oh ok, just normally happy ;)',
          nextQuestionId: 'happiness',
        },
      },
    },
    timeOfDay: {
      question: 'Do you enjoy coding most during the day, night, or both? (day/night/both)',
      answers: {
        day: 'Ah yes, when the sun is high in the sky, I can feel its energy too.',
        night: 'Under the calm and gentle moon, I also find my focus.',
        both: "Indeed, I could code 24/7 if I didn't have to sleep!",
      },
      nextQuestionId: 'weather',
    },
    weather: {
      question: 'Are you most productive when it\'s sunny or raining? (sun/rain)',
      answers: {
        sun: 'The sun warms my heart and powers me to code.',
        rain: 'The rain washes away my distractions and allows me to focus.',
      },
      nextQuestionId: 'hasBeenCoding',
    },
    happiness: {
      question: 'Do arrays or objects make you happier? (arrays/objects)',
      answers: {
        arrays: 'I knew it, arrays are my favourite too.',
        objects: 'You\'re good at coding- objects are hard!',
      },
      nextQuestionId: 'timeOfDay',
    },
  };

  // Create a temporary variable to access the current answer set concisely.
  var currAnswerSet = questionAndAnswerSets[currAnswerSetId];

  // Logic to ask for and store user name.
  if (!userName) {
    if (input == '') {
      return 'Hey! I\'m Robocop. What\'s your name?';
    }
    userName = input;
    return `${userName}! What a cool name. How old are you?`;
  }

  if (!userAge) {
    // If user doesn't input anything, repeat the question
    if (input == '') {
      return `${userName}! What a cool name. How old are you?`;
    }
    userAge = Number(input);
    if (Number.isNaN(userAge)) {
      return 'Is that a valid age? How old are you?';
    }
    if (userAge < 20) {
      return `What a spritely age, ${userName}! ${currAnswerSet.question}`;
    }
    if (userAge < 60) {
      return `You're in your prime, ${userName}! ${currAnswerSet.question}`;
    }
    return `What a wise age, ${userName}! ${currAnswerSet.question}`;
  }

  // If user input is empty, the bot asks the question.
  if (input == '') {
    return `${userName}! ${currAnswerSet.question}`;
  }

  // If the user's answer is valid, update currentAnswerSetId to prep the next question, and
  // respond with the response to that answer.
  if (currAnswerSet.answers[input]) {
    // By default, each answer key contains a response string value
    var response = currAnswerSet.answers[input];
    // Retrieve the next answer set ID from the current answer set
    var nextAnswerSetId = currAnswerSet.nextQuestionId;
    // If answer set doesn't have fixed next question ID,
    // look for next question ID in specific answer's object.
    if (!nextAnswerSetId) {
      nextAnswerSetId = currAnswerSet.answers[input].nextQuestionId;
      // We also know that the response will now be nested inside each answer's object
      response = currAnswerSet.answers[input].response;
    }
    var nextAnswerSet = questionAndAnswerSets[nextAnswerSetId];
    currAnswerSetId = nextAnswerSetId;
    return `
      ${response} <br/><br/>
      ${userName}! ${nextAnswerSet.question}
    `;
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer, ${userName}. ${currAnswerSet.question}`;
};

/**
 * Fortune Telling
 * The following implementation extends Single Chat Bot Answer Set
 */
var fortuneTelling = function (input) {
  var question = 'Let me tell your fortune. If you have a birthmark, where is it on your body? (head/torso/arms/legs)';
  // If user input is empty, the bot asks the question.
  if (input == '') {
    return question;
  }

  // Store valid user answers and the bot's responses to those answers.
  var answersAndResponses = {
    head: 'You have a great need for other people to like and admire you.',
    torso: 'You have a tendency to be critical of yourself.',
    arms: 'You have a great deal of unused capacity which you have not turned to your advantage.',
    legs: 'While you have some personality weaknesses, you are generally able to compensate for them.',
  };

  // If the user's answer is valid, respond with the response to that answer.
  if (answersAndResponses[input]) {
    return answersAndResponses[input];
  }
  // If the user's answer is invalid, ask user to enter a valid answer.
  return `Please enter a valid answer. ${question}`;
};

/**
 * Instructions:
 * Each group of functions under a "/**" comment represents 1 exercise, and
 * each function in the following main function represents 1 exercise.
 * Uncomment 1 function at a time and comment out all others to
 * execute the code for the relevant exercise.
 */
var main = function (input) {
  return singleChatBotAnswerSet(input);
  // return multipleChatBotAnswerSets(input);
  // return chatBotStoresUsersName(input);
  // return chatBotStoresUsersAge(input);
  // return chatBotNamedAnswerSets(input);
  // return dynamicChatBot(input);
  // return fortuneTelling(input);
};

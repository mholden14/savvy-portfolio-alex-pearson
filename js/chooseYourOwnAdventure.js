var story = {
    "intro": {
        "prompt": "Welcome to your next adventure! Would you like to go to the woods or onto the airplane? Please type 'woods' or 'airplane'",
        "options": [ "woods", "airplane" ]
    },
    "woods": {
        "prompt": "You march resolutely into the forbidding forest, confident in your survival skills and general daring-do. As you wander, you come across a castle. Do you enter, or pass on your way? Please type 'enter' or 'pass'",
        "options": [ "enter", "pass" ]
    },
    "airplane": {
        "prompt": "You fly off into the sunset (well, not actually INTO the sunset, because then the plane would burn up), and live happily ever after or something."
    },
    "enter": {
        "prompt": "You see a dark cellar and a bright balcony. Which should you explore first? Type 'cellar' or 'balcony'",
        "options": [ "cellar", "balcony" ]
    },
    "pass": {
        "prompt": "You wander farther into the woods, promptly get lost, and are never seen or heard from again"
    },
    "cellar": {
        "prompt": "Obviously the cellar is where wayward travelers go do die"
    },
    "balcony": {
        "prompt": "There's no forest OSHA, so you walk out on the balcony just as it collapses into a ravine. You're probably fine, but that's for another story."
    }
};

var response;

var outputToUser = function outputToUser( prompt ){
    document.querySelector( "#output" ).textContent = prompt;
};

var setResponseFromUser = function responseFromUser( choice ){
    response = prompt( story[choice].prompt );
};

var setResponseFromContext = function responseFromContext( options, choice ){
    var matchesOption = response === options[0] || response === options[1];

    if( !matchesOption ){
        response = choice;
    }
};

var handleBranchingOptions = function handleBranchingOptions( options, choice ){
    setResponseFromUser( choice );
    setResponseFromContext( options, choice );
};

var runAdventure = function runAdventure( choice ){
    var branch = story[choice];
    var options = branch.options;
    var prompt = branch.prompt;

    if( options ){
        handleBranchingOptions( options, choice );
        runAdventure( response );
    }
    else{
        outputToUser( prompt );
    }
};

runAdventure( "intro" );

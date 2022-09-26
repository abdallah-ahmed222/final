//array of words
const words = [
    "dark",
    "light",
    "dream",
    "amazing",
    "thunder",
    "hell",
    "sky",
    "wonder",
    "amazing",
    "country",
    "twon",
    "union",
    "light",
    "planet",
    "spring",
    "score",
    "window",
    "tall",
    "small",
    "hungry",
];

// setting levels 
const levels = {
    "Easy": 5,
    "Normal": 3,
    "Hard": 2,
};
//acses elements 
let startButton = document.querySelector( ".start" );
let lvlNameSpan = document.querySelector( ".lvl" );
let secondsSpan = document.querySelector( ".seconds" );
let theWord = document.querySelector( ".the-word" );
let input = document.querySelector( ".input" );
let timeLeftSpan = document.querySelector( ".time" );
let scoreGot = document.querySelector( ".score .got" );
let scoreTotal = document.querySelector( ".score .total" );
let finishMessage = document.querySelector( ".finish" );
let startAgain = document.querySelector( ".new" )
let diac = document.querySelector( ".message" )
let discTime = document.querySelector( ".message-span" )
let btnCont = document.querySelector( ".btnCont" )
// acsses levels 
const hard = document.querySelector( ".level-one" )
const med = document.querySelector( ".level-two" )
const easy = document.querySelector( ".level-three" )
let acountCont = document.querySelector( ".acount" )
let acountUser = document.querySelector( ".acount-user" )
//default level 
let defaultLevelName;// change level
let defaultLevelSeconds;
//setting level name + seconds + score
scoreTotal.innerHTML = words.length;
// set level speed 
hard.addEventListener( "click", function ()
{
    defaultLevelName = hard.textContent
    lvlNameSpan.innerHTML = defaultLevelName;
    defaultLevelSeconds = levels[ hard.textContent ]
    discTime.textContent = defaultLevelSeconds
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    startButton.classList.remove( "hidden" )
    btnCont.remove()
} )
med.addEventListener( "click", function ()
{
    defaultLevelName = med.textContent
    lvlNameSpan.innerHTML = defaultLevelName;
    defaultLevelSeconds = levels[ med.textContent ]
    discTime.textContent = defaultLevelSeconds
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    startButton.classList.remove( "hidden" )
    btnCont.remove()
} )
easy.addEventListener( "click", function ()
{
    defaultLevelName = easy.textContent
    lvlNameSpan.innerHTML = defaultLevelName;
    defaultLevelSeconds = levels[ easy.textContent ]
    discTime.textContent = defaultLevelSeconds
    secondsSpan.innerHTML = defaultLevelSeconds;
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    startButton.classList.remove( "hidden" )
    btnCont.remove()
} )

startAgain.onclick = function ()
{
    location.reload()
};

//disaple past event 
input.onpaste = function ()
{
    return false;
};
//start game
startButton.addEventListener( "click", function ()
{
    this.remove();
    input.focus();
    //generate word function
    genWords()
    diac.remove()
} )
function genWords()
{
    //get random word from array 
    let randomWord = words[ Math.floor( Math.random() * words.length ) ];
    //get word index
    let wordIndex = words.indexOf( randomWord );
    //remove index from array 
    words.splice( wordIndex, 1 );
    //show the random word
    theWord.innerHTML = randomWord;

    // call start play function
    startPlay()
}
function startPlay()
{
    timeLeftSpan.innerHTML = defaultLevelSeconds;
    let start = setInterval( () =>
    {
        timeLeftSpan.innerHTML--;
        if ( timeLeftSpan.innerHTML === "0" )
        {
            //stop timer
            clearInterval( start );
            //compare words
            if ( theWord.innerHTML.toLowerCase() === input.value.toLowerCase() )
            {
                //empety input field
                input.value = '';
                //increase score
                scoreGot.innerHTML++;
                if ( words.length > 0 )
                {
                    //call genrate word function
                    genWords();
                } else
                {
                    let span = document.createElement( "span" );
                    span.className = "good";
                    let spanText = document.createTextNode( "Congratulitons :)" );
                    span.appendChild( spanText );
                    finishMessage.appendChild( span );
                    startAgain.classList.remove( "hidden" )
                }
            } else
            {
                let span = document.createElement( "span" );
                span.className = "bad";
                let spanText = document.createTextNode( "Game Over :(" );
                span.appendChild( spanText );
                finishMessage.appendChild( span );
                startAgain.classList.remove( "hidden" )
            }
        }
    }, 1000 )

}

let color = "dark"
if ( window.localStorage.getItem( "color" ) !== null )
{
    document.body.classList.add( "second-teme" )
}
window.onload = checkUser()
function checkUser()
{
    if ( localStorage.getItem( "user" ) !== null )
    {
        acountCont.classList.remove( "d-none" )
        acountUser.append( document.createTextNode( localStorage.getItem( "user" ) ) )
    } else
    {
        window.location = "sign-up.html"
    }
}
acountCont.addEventListener( "click", function ()
{
    localStorage.removeItem( "user" )
    localStorage.removeItem( "pass" )
    localStorage.removeItem( "email" )
    checkUser()
} )
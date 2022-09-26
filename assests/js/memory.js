// acsses player name and score
let playerName = document.querySelector( '#name' )
let tryEle = document.querySelector( ".tries" )
// set timer between clicking
const time = 1000
// acsses game and control
const gameContainer = document.querySelector( ".memory-game-blocks" )
const blocks = Array.from( gameContainer.children )
const order = [ ...Array( blocks.length ).keys() ]
randomNum( order )

// loop on all elements to shuffle elements order
blocks.forEach( ( item, ind ) =>
{
    // set order 
    item.style.order = order[ ind ];
    // click event 
    item.addEventListener( "click", function ()
    {
        // start flip function
        flip( item )
        // check score
        checkScore()
    } )

} )
// random function
function randomNum( arr )
{
    let cur = arr.length
    let val, rand;
    while ( cur > 0 )
    {
        rand = Math.floor( Math.random() * cur );
        cur--;
        val = arr[ cur ]
        arr[ cur ] = arr[ rand ]
        arr[ rand ] = val;
    }
    return arr;
}
// flip function 
function flip( selected )
{
    // add class on ele 
    selected.classList.add( "flip" );
    // get all selected 
    let allFliped = blocks.filter( e => e.classList.contains( "flip" )
    )
    // check condition
    if ( allFliped.length === 2 )
    {
        stopCl()
        checkMath( allFliped[ 0 ], allFliped[ 1 ] )
    }
}
// stop click
function stopCl()
{
    gameContainer.classList.add( "no-cl" )
    setTimeout( () =>
    {
        gameContainer.classList.remove( "no-cl" )
    }, time )
}

// check matched
function checkMath( bOne, bTwo )
{
    if ( bOne.dataset.icon === bTwo.dataset.icon )
    {
        bOne.classList.remove( "flip" )
        bTwo.classList.remove( "flip" )

        bOne.classList.add( "mathed" )
        bTwo.classList.add( "mathed" )
    } else
    {
        tryEle.innerHTML = parseInt( tryEle.innerHTML ) + 1
        setTimeout( () =>
        {
            bOne.classList.remove( "flip" )
            bTwo.classList.remove( "flip" )
        }, time )
    }
}

//check score
function checkScore()
{
    if ( tryEle.textContent == 30 )
    {
        alert( "You Faild !!" )
        location.reload()
    }
}

let color = "dark"
if ( window.localStorage.getItem( "color" ) !== null )
{
    document.body.classList.add( "second-teme" )
}
let acountCont = document.querySelector( ".acount" )
let acountUser = document.querySelector( ".acount-user" )

window.onload = checkUser()
function checkUser()
{
    if ( localStorage.getItem( "user" ) !== null )
    {
        acountCont.classList.remove( "d-none" )
        acountUser.append( document.createTextNode( localStorage.getItem( "user" ) ) )
        playerName.append( localStorage.getItem( "user" ) )
    } else
    {
        window.location = "sign-up.html"
    }
}
acountCont.addEventListener( "click", function ()
{
    localStorage.clear()
    checkUser()
} )
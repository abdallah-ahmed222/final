let loader = document.getElementById( "loader" );
let imgTwo = document.querySelector( ".game-two" )
let imgOne = document.querySelector( ".game-three" )
let acountCont = document.querySelector( ".acount" )
let acountUser = document.querySelector( ".acount-user" )
window.addEventListener( "load", function ()
{
    loader.style.display = "none";
} );

let colorChange = document.querySelector( ".color-changer" )

colorChange.addEventListener( "click", function ()
{
    document.body.classList.toggle( "secont-teme" )
} )

let color = "dark"
if ( window.localStorage.getItem( "color" ) !== null )
{
    document.body.classList.add( "second-teme" )
    imgTwo.src = "assests/img/spe-two.png"
    imgOne.src = "assests/img/imm-tto.png"
}
colorChange.addEventListener( "click", function ()
{
    document.body.classList.toggle( "second-teme" )
    if ( document.body.classList.contains( "second-teme" ) )
    {
        window.localStorage.setItem( "color", color )
        imgTwo.src = "assests/img/spe-two.png"
        imgOne.src = "assests/img/imm-tto.png"
    } else
    {
        window.localStorage.removeItem( "color" )
        imgTwo.src = "assests/img/speed-2.png"
        imgOne.src = "assests/img/memory.png"
    }
} )


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
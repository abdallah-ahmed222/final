let delBtn = document.querySelector( ".close-card" )
let mainPop = document.querySelector( ".pop-up" )
let texContent = document.querySelector( ".content-text" )
let closeBtn = document.querySelector( ".close" );
closeBtn.addEventListener( "click", function ()
{
    texContent.innerText = ""
    mainPop.classList.remove( "d-flex" )
} )
let allBtns = document.querySelectorAll( ".sub" ).forEach( ( e ) =>
{
    e.addEventListener( "click", function ()
    {
        mainPop.classList.add( "d-flex" )
        texContent.append( e.parentElement.parentElement.innerText )
    } )
} )
let color = "dark"
if ( window.localStorage.getItem( "color" ) !== null )
{
    document.body.classList.add( "second-teme" )
}

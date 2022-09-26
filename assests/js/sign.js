// acsess Element 
let userName = document.querySelector( "#user" )
let pass = document.querySelector( "#pass" )
let subBtn = document.querySelector( "#sub" )
subBtn.addEventListener( "click", function ( e )
{
    e.preventDefault()
    if ( localStorage.getItem( "user" ) == userName.value.trim() && localStorage.getItem( "pass" ) == pass.value.trim() )
    {
        window.location = "index.html"
    } else
    {
        alert( "user or password are wrong" )
        userName.value = ""
        pass.value = ""
    }
} )
let color = "dark"
if ( window.localStorage.getItem( "color" ) !== null )
{
    document.body.classList.add( "second-teme" )
}

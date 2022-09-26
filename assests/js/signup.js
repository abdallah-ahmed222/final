//acsses elements 
let userName = document.querySelector( "#user" )
let email = document.querySelector( "#email" )
let pass = document.querySelector( "#pass" )
let subBtn = document.querySelector( "#sub" )
subBtn.addEventListener( "click", function ( e )
{
    e.preventDefault()
    if ( userName.value !== "" || email.value !== "" || pass.value !== "" )
    {
        if ( localStorage.getItem( "user" ) !== userName.value || localStorage.getItem( "email" ) !== email.value || localStorage.getItem( "pass" ) !== pass.value )
        {
            localStorage.setItem( "user", userName.value )
            localStorage.setItem( "email", email.value )
            localStorage.setItem( "pass", pass.value )
            window.location = "login.html"
        } else
        {
            alert( "data already exisct" )
        }
    } else
    {
        alert( "plese enter a valid data" )
    }

} )
let color = "dark"
if ( window.localStorage.getItem( "color" ) !== null )
{
    document.body.classList.add( "second-teme" )
}

var useremail = 'demouser@gmail.com';

function checkIfValidUser() {
    var user = document.getElementById('email');
    if(user.value === useremail)
    {
        alert('There you go!');
        //route to homepage.html
        location.replace("homepage.html");
    }
    else
    {
        alert('Invalid user, please use "demouser@gmail.com" to login');
    }
}


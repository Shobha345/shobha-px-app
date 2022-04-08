
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-GBHANBHUKHYZ-2");

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


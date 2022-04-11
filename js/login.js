
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-GBHANBHUKHYZ-2-4");



var useremail = 'demouser@gmail.com';

function checkIfValidUser() {
    var user = document.getElementById('email');
    if(user.value === useremail || user.value == 'saikumar@gmail.com' || user.value == 'sai24@gmail.com' || user.value == 'kumar@gmail.com'|| user.value == 'integration@gmail.com')
    {
        //passing user and account objects //works only after apt.init
        aptrinsic("identify",
        {
        //User Fields
        "id": "basic1234" + useremail, // Required for logged in app users
        "email": useremail,
        "firstName": "Sai",
        "lastName": "Kumar",
        "role": "PX Analyst",
        "signUpDate": 1522697426479, //unix time in ms
        "plan" : "Premium", //Custom attributes - please create those custom attributes in Aptrinsic via Account Settings to be tracked.
        "price" : 95.5,
        "userHash": "" // optional transient for HMAC identification
        },
        {
        //Account Fields
        "id":"GSPX", //Required
        "name":"Gainsight",
        "Program": "Platinum", // flat custom attributes
        "Subscription" : "Trial"
        });

        alert('There you go!');
        //route to homepage.html
        location.replace("homepage.html");

    }
    else
    {
        alert('Invalid user, please use "demouser@gmail.com" to login');
    }
}


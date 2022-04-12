
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-GBHANBHUKHYZ-2");



var useremail = 'demouser@gmail.com';

function checkIfValidUser() {
    // var user = document.getElementById('email');
    var user = document.getElementById('email').value;
    var b;
    const companyid = {
      i1: "GS-PX",
      i2: "GS-CS",
      i3: "GS-RO"
    }
    const companyname = {
      n1: "Product Experience",
      n2: "Customer Success",
      n3: "Revenue Optimization"
    }

    if(user!="")
    {
      if(user === useremail || user == 'saikumar@gmail.com' || user == 'sai24@gmail.com' || user == 'kumar@gmail.com'|| user == 'integration@gmail.com')
      {
        alert('There you go!');
        b = user.substr(8, 5);
        var id = b;
        if(user == 'saikumar@gmail.com')
        {
            aptrinsic("identify",
            {
            //User Fields
            "id": "basic12345" + useremail,
            "email": useremail,
            "firstName": "Sai",
            "lastName": "Kumar",
            "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"
            },
            {
            //Account Fields
            "id": companyid.i1, 
            "name": companyname.n1
            });
        } 
        else if(user == 'sai24@gmail.com')
        {
            aptrinsic("identify",
            {
            //User Fields
            "id": id,
            "email": useremail,
            "firstName": "Sai",
            "lastName": "Padala",
            "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"
            },
            {
            //Account Fields
            "id": companyid.i2, 
            "name": companyname.n2
            });
        }
        else if(user == 'kumar@gmail.com')
        {
            aptrinsic("identify",
            {
            //User Fields
            "id": id,
            "email": useremail,
            "firstName": "Kumar",
            "lastName": "Padala",
            "subscriptionId": "e2cdcaad-5fb9-4239-92a0-1504d5e79b3c"
            },
            {
            //Account Fields
            "id": companyid.i3, 
            "name": companyname.n3
            });
        }
          
      }
      //route to homepage.html
      location.replace("homepage.html");
    } 
    else
    {
        alert('Invalid user, please use "demouser@gmail.com" to login');
    }
}

//clearing cookies
function deleteAllCookies() {
  window.aptrinsic('reset');
  // counter = 0;
}

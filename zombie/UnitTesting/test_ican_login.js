

var   Browser = require("zombie")
    , assert = require("assert") 
    , fs = require('fs') 
    , usr = 'PeterGriffin' 
    , pwd = 'FamilyGuy'  
    , usrField 
    , pwdField;

  browser = new Browser({ debug: true });

  function filename() {
    var today = new Date() , sToday = (today.getMonth()+1).toString(), filename; 
    sToday += today.getHours().toString();
    sToday += today.getMinutes().toString();
    sToday += today.getSeconds().toString();
    filename =  'i-can-login-'+sToday+'.log';
    return filename;
  }

  browser.visit("http://localhost:3000",  function() { 
      
      usrField = browser.document.querySelector(":input[name='username']"); 
      pwdField = browser.document.querySelector(":input[name='password']");  

      if( usrField != null && pwdField != null){
        browser.fill("username", usr).fill("password", pwd).
        pressButton("submitme", function() { 

            var loggedinMessage = 'I managed to login using username: '+usr+' and password: '+pwd+' This is the content of the loggin in page '+browser.html('#main'); 

            fs.writeFile('logs/'+filename(), loggedinMessage , function (err) {
              if (err) throw err;
              console.log('Test is finished');
 
          
            });

        });
      }  

  });


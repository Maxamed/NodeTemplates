

var   Browser = require("zombie")
    , assert = require("assert") 
    , fs = require('fs')   
    , usrField 
    , pwdField;

  browser = new Browser({ debug: true });

  function filename() {
    var today = new Date() , sToday = (today.getMonth()+1).toString(), filename; 
    sToday += today.getHours().toString();
    sToday += today.getMinutes().toString();
    sToday += today.getSeconds().toString();
    filename =  'i-can-load-page-'+sToday+'.log';
    console.log(__filename);
    return filename;
  }

  browser.visit("http://localhost:3000",  function() { 
      
      usrField = browser.document.querySelector(":input[name='username']"); 
      pwdField = browser.document.querySelector(":input[name='password']");  

      if( usrField != null && pwdField != null){
           var loggedinMessage = 'I managed to load the page, This is the content of index page '+browser.html(); 

            fs.writeFile('logs/'+filename(), loggedinMessage , function (err) {
              if (err) throw err;
              console.log('Test is finished'); 
            });
 
      }  

  });


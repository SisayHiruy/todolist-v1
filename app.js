const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('vieew engin', 'ejs');

app.get('/', function(req, res){
    
  var today = new Date();
  var correntDay = today.getDay();
  var day = "";
    switch (correntDay){
      case 0:
        day = "Sunday"
        break;
      case 1:
        day = "Monnday"
        break;
      case 2:
        day = "Tusday"
        break;
      case 3:
        day = "Wenesday"
        break;
      case 4:
        day = "Thursday"
        break;
      case 5:
        day = "Friday"
        break;
      case 6:
        day = "saturday"
        break;
      console.log("Error: current Day is equal to: " + currentday)
    }
    res.render("list", {
      kindOfDay: day
});

 
})
app.listen(3000, function(){
  console.log('Server started on port 3000')
})
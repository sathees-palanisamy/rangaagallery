const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());
app.set('etag', false);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin","*");
  res.header("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept");
  next();
})

app.use(bodyParser.json());



if (process.env.NODE_ENV === 'production') {
  // Express will serve up production assets
  // like our main.js file, or main.css file!
  app.use(express.static('client/build'));

  // Express will serve up the index.html file
  // if it doesn't recognize the route
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

/* Login Details */
app.post('/login', async (req, res) => {

      // Disable caching for content files
      res.header("Cache-Control", "no-cache, no-store, must-revalidate");
      res.header("Pragma", "no-cache");
      res.header("Expires", 0);

  let status = '';

   if ((req.body.user === "rangaa") && (req.body.password === "karthick")) {
    status = 'success'
   }

    let result = {

      "status": status

    }

    res.json(result);

});

// create connection to database
const db = mysql.createConnection ({
  host: '127.0.0.1',
  user: 'user',
  password: 'password',
  database: 'db'
});


// connect to database
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Connected to database');
});
global.db = db;


app.post('/list', async (req, res) => {

  let query = "SELECT * FROM `orderDbG1` ORDER BY orderid DESC"; // query database to get all the players

  db.query(query, (err, result) => {
    res.json({result});
  });

});



app.post('/create', async (req, res) => {

      // Disable caching for content files
      res.header("Cache-Control", "no-cache, no-store, must-revalidate");
      res.header("Pragma", "no-cache");
      res.header("Expires", 0);

  let query1 = "Select max(`orderid`) as maxid from `orderDbG1`";
  
  var maxorderId;

  db.query(query1, (err, result) => {
    if (err) {
      return res.status(500).send(err);
    } 
 
    if (result[0].maxid === null) {
    maxorderId = 1000;
    } else {
      maxorderId = result[0].maxid + 1;
    }

    let query = "INSERT INTO `orderDbG1` " + "(orderid, name, Mail,Mobileno,Doorno,Addressline1,Addressline2,Pincode,City,State,Comments,"
  +   "status,"         
  +   "paid  ," 
  +   "totalamt  ," 
  +   "pendingamt  ," 
  +   "imageLink1  ," 
  +   "imageHeading1  ," 
  +   "imagePrice1  ," 
  +   "frameSize1  ," 
  +   "Quantity1  ," 
  +   "imageLink2  ," 
  +   "imageHeading2  ," 
  +   "imagePrice2  ," 
  +   "frameSize2  ," 
  +   "Quantity2  ," 
  +   "imageLink3  ," 
  +   "imageHeading3  ," 
  +   "imagePrice3  ," 
  +   "frameSize3  ," 
  +   "Quantity3  ," 
  +   "imageLink4  ," 
  +   "imageHeading4  ," 
  +   "imagePrice4  ," 
  +   "frameSize4  ," 
  +   "Quantity4  ," 
  +   "imageLink5  ," 
  +   "imageHeading5  ," 
  +   "imagePrice5  ," 
  +   "frameSize5  ," 
  +   "Quantity5  ," 
  +   "imageLink6  ," 
  +   "imageHeading6  ," 
  +   "imagePrice6  ," 
  +   "frameSize6  ," 
  +   "Quantity6  ," 
  +   "imageLink7  ," 
  +   "imageHeading7  ," 
  +   "imagePrice7  ," 
  +   "frameSize7  ," 
  +   "Quantity7  ," 
  +   "imageLink8  ," 
  +   "imageHeading8  ," 
  +   "imagePrice8  ," 
  +   "frameSize8  ," 
  +   "Quantity8  ," 
  +   "imageLink9  ," 
  +   "imageHeading9  ," 
  +   "imagePrice9  ," 
  +   "frameSize9  ," 
  +   "Quantity9 ," 
  +   "collection ,"
  +   "custm1 ,"
  +   "custm2 ,"
  +   "custm3 ,"
  +   "custm4 ,"
  +   "custm5 ,"
  +   "custm6 ,"
  +   "custm7 ,"
  +   "custm8 ,"
  +   "custm9 ,"
  +   "lastUpdateTimestamp ,"
  +   "orderDate) VALUES (" +
  maxorderId + ", '" + req.body.name + "', '" + req.body.Mail + "', '" + req.body.Mobileno + "', '" + req.body.Doorno + "', '" + req.body.Addressline1 + "', '" + req.body.Addressline2 + "', '" + req.body.Pincode + "', '" + req.body.City + "', '" + req.body.State + "', '" + req.body.Comments 
  + "', '" + req.body.status 
  + "', '" + req.body.paid 
  + "', '" + req.body.totalamt 
  + "', '" + req.body.pendingamt 
  + "', '" + req.body.imageLink1 
  + "', '" + req.body.imageHeading1 
  + "', '" + req.body.imagePrice1 
  + "', '" + req.body.frameSize1 
  + "', '" + req.body.Quantity1 
  + "', '" + req.body.imageLink2  
  + "', '" + req.body.imageHeading2 
  + "', '" + req.body.imagePrice2  
  + "', '" + req.body.frameSize2 
  + "', '" + req.body.Quantity2  
  + "', '" + req.body.imageLink3
  + "', '" + req.body.imageHeading3 
  + "', '" + req.body.imagePrice3 
  + "', '" + req.body.frameSize3
  + "', '" + req.body.Quantity3 
  + "', '" + req.body.imageLink4 
  + "', '" + req.body.imageHeading4 
  + "', '" + req.body.imagePrice4 
  + "', '" + req.body.frameSize4 
  + "', '" + req.body.Quantity4 
  + "', '" + req.body.imageLink5 
  + "', '" + req.body.imageHeading5 
  + "', '" + req.body.imagePrice5 
  + "', '" + req.body.frameSize5 
  + "', '" + req.body.Quantity5
  + "', '" + req.body.imageLink6 
  + "', '" + req.body.imageHeading6 
  + "', '" + req.body.imagePrice6 
  + "', '" + req.body.frameSize6 
  + "', '" + req.body.Quantity6
  + "', '" + req.body.imageLink7 
  + "', '" + req.body.imageHeading7 
  + "', '" + req.body.imagePrice7 
  + "', '" + req.body.frameSize7 
  + "', '" + req.body.Quantity7
  + "', '" + req.body.imageLink8 
  + "', '" + req.body.imageHeading8 
  + "', '" + req.body.imagePrice8 
  + "', '" + req.body.frameSize8
  + "', '" + req.body.Quantity8    
  + "', '" + req.body.imageLink9
  + "', '" + req.body.imageHeading9
  + "', '" + req.body.imagePrice9
  + "', '" + req.body.frameSize9
  + "', '" + req.body.Quantity9
  + "', '" + req.body.collection
  + "', '" + req.body.custm1
  + "', '" + req.body.custm2
  + "', '" + req.body.custm3
  + "', '" + req.body.custm4
  + "', '" + req.body.custm5
  + "', '" + req.body.custm6
  + "', '" + req.body.custm7
  + "', '" + req.body.custm8
  + "', '" + req.body.custm9
  + "', NOW()" 
  + ", CURDATE()"
  + ")";


   db.query(query, (err, result) => {
       if (err) {
   
           return res.status(500).send(err);
       } 
       
      return res.status(200).send({maxorderId});
       
   });

    
});

 
  
  
})


/*
{
       "orderid": "1236"
}
*/

app.post('/delete', async (req, res) => {

      // Disable caching for content files
      res.header("Cache-Control", "no-cache, no-store, must-revalidate");
      res.header("Pragma", "no-cache");
      res.header("Expires", 0);



  let query = "DELETE FROM `orderDbG1` WHERE orderid = '" + req.body.orderid + "'";
     db.query(query, (err, result) => {
       if (err) {
       
           return res.status(500).send(err);
       } 
      return res.status(400).send({"errno": "0000",});
       
   });

})



app.post('/updateamount', async (req, res) => {

      // Disable caching for content files
      res.header("Cache-Control", "no-cache, no-store, must-revalidate");
      res.header("Pragma", "no-cache");
      res.header("Expires", 0);

 

  let query = "UPDATE `orderDbG1` SET  `paid` =" +  req.body.paid + ",  `pendingamt` =" +  req.body.pendingamt + ",  `lastUpdateTimestamp` =NOW()" + "  WHERE `orderid` = '" + req.body.orderid  + "'";
  
 
     db.query(query, (err, result) => {
       if (err) {
           return res.status(500).send(err);
       } 
      return res.status(400).send({"errno": "0000",});
       
   });

})

app.post('/updatestatus', async (req, res) => {

      // Disable caching for content files
      res.header("Cache-Control", "no-cache, no-store, must-revalidate");
      res.header("Pragma", "no-cache");
      res.header("Expires", 0);

  let query = "UPDATE `orderDbG1` SET `status` = '" + req.body.status  + "',  `lastUpdateTimestamp` =NOW()" + "  WHERE `orderid` = '" + req.body.orderid  + "'";
  

     db.query(query, (err, result) => {
       if (err) {
           return res.status(500).send(err);
       } 
      return res.status(400).send({"errno": "0000",});
       
   });

})


app.post('/search', async (req, res) => {

      // Disable caching for content files
      res.header("Cache-Control", "no-cache, no-store, must-revalidate");
      res.header("Pragma", "no-cache");
      res.header("Expires", 0);


  let query = "Select * from `orderDbG1` WHERE `orderid` = '" + req.body.OrderSearch  + "'";
  


     db.query(query, (err, result) => {
       if (err) {
           return res.status(500).send(err);
       } 
    
      return res.json({result});
       
   });

})




const PORT = process.env.PORT || 5000;
app.listen(PORT);

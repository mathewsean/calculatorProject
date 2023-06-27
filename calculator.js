const express = require('express');
const bodyParser = require('body-parser')

const app = express();

const port = 3000;

app.use(bodyParser.urlencoded({extended: true}))

app.get('/',(req,res) => {
  res.sendFile(__dirname + '/index.html')
}
)

app.post('/',(req,res)=>{
  let num1 = req.body.num1
  let num2 = req.body.num2
  let result = parseInt(num1) + parseInt(num2)
  
  res.send(`The result of calculation is ${result}`)
}
)

app.listen(port, () => { 
  console.log(`App listening on port ${port}`);
}
) 
 
const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')
const app = express()
 
var Publishable_Key = 'pk_test_51MO0pNSH6Sor6vADcQjhHoIk0dbES2jVdZsQ7ubixZhgLDQxoFH4yiB6fToIcFwy046szsA49BuDodO0lxO0UL8w00vcxk9vRz'
var Secret_Key = 'sk_test_51MO0pNSH6Sor6vADTDM5Ve4XCpXnkKDj8kBRJcO7Dx1i4OsldygcTLO6OzQZD7OW8II6oomwqzV6rT1Wn2e7FXYb00ifYVEQjk'
 
const stripe = require('stripe')(Secret_Key)
 
const port = process.env.PORT || 3000
 
app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
 
// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
 
app.get('/', function(req, res){
res.render('Home', {
key: Publishable_Key
})
})

app.post('/payment', function(req,res){
    res.send("PAyment completed , rooms has been booked")
})
 
app.listen(port, function(error){
if(error) throw error
console.log("Server created Successfully")
})
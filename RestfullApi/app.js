const express = require('express');
const app = express();
const users = require("./MOCK_DATA.json");
const fs = require('fs');

const PORT = 8000;

app.use(express.urlencoded({extended:false}));

app.get('/app/user/',function(req,res)
{
    return res.json(users)
})

app.get('/user',function(req,res){
    const html = `
    <ul>
    ${users.map((user)=>`<li>${user.first_name}</li>`).join("")}
    </ul>`;
    res.send(html)
})

app.route("/api/user/:id").get(function(req,res){
    const id = Number(req.params.id);
    const user = users.find((users)=> users.id == id)
    return res.json(user)  
 })
.patch((req,res) =>{
    res.join({status:'pending'})
})
.delete((req,res) => { 
    res.json({ status: 'deleted' });
 })

// app.patch(function (req, res) {
//     // Assuming you have a request body with updated user data
//     const id = Number(req.params.id);
//     const updatedUserData = req.body; // You need to parse the request body or use middleware
//     const index = users.findIndex((user) => user.id == id);

//     if (index !== -1) {
//       // Update the user data
//       users[index] = { ...users[index], ...updatedUserData };
//       res.json({ status: 'pending' });
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   })
//   .delete(function (req, res) {
//     const id = Number(req.params.id);
//     const index = users.findIndex((user) => user.id == id);

//     if (index !== -1) {
//       // Remove the user from the array
//       users.splice(index, 1);
//       res.json({ status: 'deleted' });
//     } else {
//       res.status(404).json({ error: 'User not found' });
//     }
//   });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

app.post("/api/user",function(req,res){
    const body = req.body;
    users.push({...body, id:users.length+1});
    fs.writeFile('./MOCK_DATA.json',JSON.stringify(users),function(err,data){
        return res.json({status:"success",id:users.length})
    })
}).listen(8000)
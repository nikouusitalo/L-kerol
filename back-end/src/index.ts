const express = require('express');
const app = express();
app.get('/',(req:any, res:any, next:any) => {
    res.send("Root route is working");
});
app.listen(3000,() => {
    console.log("Server started on port 3000");
});

//Import Experss
import express from 'express';

//Define a port number
const PORT= 3000;

//Create an Express app
const app= express();

//Define "root" path
app.get('/', (req, res)=>{
    res.send('Hello, World!');
});

//Start Server

app.listen(PORT,()=>{
    console.log(`Server is running at http://localhost:${PORT}`);
})

const http = require("http");

const PORT=7000;

const app=http.createServer((req,res)=>{
 if (req.url=="/"){
    res.write("<h1>NODE</h1>")
    res.write("Node.js is a popular open-source server-side runtime environment that allows developers to run JavaScript code outside of a web browser. Here are the basic steps to set up Node.js on your machine:" )
    res.end();
 }   

 else if  (req.url=="Install"){
    res.write(". Download and install Node.js: You can download the latest version of Node.js from the official website (https://nodejs.org/). Once downloaded, double-click the installer and follow the instructions to complete the installation." )
    res.end();
 } 
});


app.listen(PORT,()=>{
    console.log(`server is running in port ${PORT}`)
});
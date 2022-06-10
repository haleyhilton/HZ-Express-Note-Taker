const fs = require("fs");
const router = require('express').Router();



    // API GET Request
    router.get("/api/notes", (req, res) => {
        
        // Read 'db.json' file 
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
        console.log("\nGET request - Returning notes data: " + JSON.stringify(data));
        
        // Send read data to response of 'GET' request
        res.json(data);
    });


    // API POST Request
    router.post("/api/notes", (req, res) => {

        const newNote = req.body;
        console.log("\n\nPOST request - New Note : " + JSON.stringify(newNote));

        // Read data from 'db.json' file
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
         data.push(newNote);

        // Written notes data to 'db.json' file
        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        
        console.log("\nSuccessfully added new note to 'db.json' file!");

        // Send response
        res.json(data);
    });

    module.exports = router;

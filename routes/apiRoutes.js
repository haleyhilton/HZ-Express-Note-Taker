const fs = require("fs");
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');



    // API GET Request
    router.get("/api/notes", (req, res) => {
        
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));        
        res.json(data);
    });


    // API POST Request
    router.post("/api/notes", (req, res) => {
        
        const newNote = req.body;
        console.log("\n\nPOST request - New Note : " + JSON.stringify(newNote));
        newNote.id = uuidv4();
        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));
         data.push(newNote);

        fs.writeFileSync('./db/db.json', JSON.stringify(data));
        console.log("\nSuccessfully added new note");

        res.json(data);
    });

    // API DELETE
    router.delete("/api/notes/:id", (req, res) => {
            const id = req.params.id

    })
    module.exports = router;

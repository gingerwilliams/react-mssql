const express = require("express");
const app = express();
const cors = require("cors");

// config for your database
const config = require("./config_keys");

app.use(cors());

app.get("/projectlist", function(req, res) {
    const sql = require("mssql");

    // connect to your database
    sql.connect(config, function(err) {
        if (err) console.log(err);

        // create Request object
        const request = new sql.Request();

        // query to the database and get the records
        request.query("select * from tblProject", function(err, recordset) {
            if (err) console.log(err);

            // send records as a response
            res.send(recordset);
            sql.close();
        });
    });
});

var server = app.listen(5000, function() {
    console.log("Backend Server is running.. http://localhost:5000");
});

const express = require('express')
const app = express()

// If not paramater given, return the current datetime
app.get("/api/timestamp", (req, res, next) => {
    const date = new Date()
    res.json({unix: date.valueOf(), utc: date.toUTCString()})
})

// If there is a parameter, process it
app.get("/api/timestamp/:date_string", (req, res, next) => {
    const dateString = req.params.date_string

    // If it is a ISO-8601 Time date String
    if (/\d{4}-\d{2}-\d{2}/.test(dateString)) {
        const date = new Date(dateString)
        res.json({unix: date.valueOf(), utc: date.toUTCString()})
    // Else if it is a timestamp
    } else if (/\d+/.test(dateString)) {
        const date = new Date(Number(dateString))
        res.json({unix: date.valueOf(), utc: date.toUTCString()})
    } else {
        res.json({error: "Invalid Date"})
    }
})

app.listen(8080, console.log("App listening on 8080"))
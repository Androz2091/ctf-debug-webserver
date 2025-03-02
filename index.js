const express = require("express");
const app = express();

app.get("*", (req, res) => {
    console.log("\n\n");
    console.log("Cookies:", req.headers.cookie);
    res.send("Check logs for cookies!");
});

const port = 3001;
app.listen(port, () => {
    console.log("Server running on http://localhost:"+port);
});

const express = require("express");
const fetch = (...args) => import("node-fetch").then(({ default: fetch }) => fetch(...args));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

// Add CORS headers
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Proxy route
app.post("/subscribe", async (req, res) => {
    try {
        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbxk4n9N5LsooJiNid4WGMrbx6RQTFqqhes-4NrXcZNGEbVVsEPSvcr4voYOlt4gMyOx/exec",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(req.body),
            }
        );

        const result = await response.json();
        res.json(result);
    } catch (error) {
        console.error("Error: ", error);
        res.status(500).json({ status: "error", message: "An error occurred." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

// Create logs folder if it doesn't exist
const logsFolderPath = path.join(__dirname, 'logs');
if (!fs.existsSync(logsFolderPath)) {
    fs.mkdirSync(logsFolderPath);
}

// Log file path
const logFilePath = path.join(logsFolderPath, 'app.log');

// Middleware to log requests
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.originalUrl}`);
    next();
});

// Route to accept content and store it in the log file
app.get('/log/:content', (req, res) => {
    const content = req.params.content;

    // Append content to log file
    fs.appendFile(logFilePath, `${content}\n`, (err) => {
        if (err) {
            console.error('Error writing to log file:', err);
            res.status(500).send('Error writing to log file');
        } else {
            console.log(`Content logged to ${logFilePath}`);
            res.send('Content logged successfully');
        }
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

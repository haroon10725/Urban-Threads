const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "build" directory
app.use(express.static(path.join(__dirname, 'build')));

// Set up a catch-all route to serve the "index.html" for any route
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

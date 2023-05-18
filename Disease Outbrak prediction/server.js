const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Endpoint for disease outbreak prediction
app.post("/predict", (req, res) => {
  const { startDate, endDate, location } = req.body;

  // Call your AI algorithms here with the input values
  // Analyze historical health data and environmental factors

  // Simulating a prediction result
  const prediction = `High risk of disease outbreak in ${location} from ${startDate} to ${endDate}`;

  res.json({ prediction });
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

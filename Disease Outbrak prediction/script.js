// Add your JavaScript code here
document.getElementById("predictBtn").addEventListener("click", function() {
    var startDate = document.getElementById("startDate").value;
    var endDate = document.getElementById("endDate").value;
    var location = document.getElementById("location").value;
  
    // Call your AI algorithms here with the input values
    // Example: make an API request to your backend for prediction
  
    // Simulating a prediction result
    var prediction = "High risk of disease outbreak in " + location + " from " + startDate + " to " + endDate;
  
    // Update the prediction result in the HTML
    document.getElementById("predictionResult").textContent = prediction;
  });
  
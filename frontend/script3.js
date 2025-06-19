document.getElementById('predictButton').addEventListener('click', () => {
    const fileInput = document.getElementById('csvFile');
    const predictDate = parseInt(document.getElementById('predictDate').value);
    if (!fileInput.files.length || isNaN(predictDate)) {
        alert('Please upload a CSV file and enter a valid day number.');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();
    
    reader.onload = function(event) {
        const data = event.target.result;
        const lines = data.split('\n');
        const dates = [];
        const prices = [];
        
        for (let i = 1; i < lines.length; i++) { // Skip header
            const [date, price] = lines[i].split(',');
            if (date && price) {
                dates.push(new Date(date).getTime());
                prices.push(parseFloat(price));
            }
        }
        
        if (dates.length === 0) {
            alert('No valid data found in the CSV file.');
            return;
        }
        
        // Prepare data for linear regression
        const x = dates.map((date, index) => [index + 1]); // day number
        const y = prices;

        // Perform linear regression
        const { m, b } = linearRegression(x, y);
        
        // Predict price for the given day number
        const predictedPrice = m * predictDate + b;
        document.getElementById('result').innerText = `Predicted Price: ₹${predictedPrice.toFixed(2)}`;

        // Append prediction to CSV data
        const currentDateTime = new Date().toISOString();
        const newRow = `${currentDateTime},${predictedPrice.toFixed(2)},${predictDate}\n`;
        const updatedData = data + newRow;

        // Create a downloadable link for the updated CSV file
        const blob = new Blob([updatedData], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'updated_predictions.csv';
        downloadLink.textContent = 'Download Updated CSV';
        document.getElementById('downloadLink').appendChild(downloadLink);
    };
    
    reader.readAsText(file);
});

function linearRegression(x, y) {
    const n = x.length;
    const xSum = x.reduce((a, b) => a + b[0], 0);
    const ySum = y.reduce((a, b) => a + b, 0);
    const xySum = x.reduce((sum, xi, i) => sum + xi[0] * y[i], 0);
    const xSquareSum = x.reduce((sum, xi) => sum + xi[0] * xi[0], 0);

    const m = (n * xySum - xSum * ySum) / (n * xSquareSum - xSum * xSum);
    const b = (ySum - m * xSum) / n;

    return { m, b };
}

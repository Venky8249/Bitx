
# Bitx

A web-based application that predicts future Bitcoin prices based on historical data using a linear regression model. The project features a modern, animated, and responsive interface to provide an engaging user experience.

**Live Demo:** [![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://bitx-pink.vercel.app/)

---

## 📸 Project Showcase

### Main Page
![Main Page Screenshot](Screenshot%202025-07-24%20232037.png)


### Prediction Page
![Prediction Page Screenshot](Screenshot%202025-07-24%20232100.png)


---

## ✨ Features

- **Modern UI/UX:** A stylish and fully responsive main page with smooth scroll animations and a futuristic aesthetic.
- **Linear Regression Model:** Utilizes a simple yet effective linear regression algorithm implemented in JavaScript to forecast prices.
- **CSV Data Input:** Allows users to upload their own historical Bitcoin price data in a `.csv` file.
- **Sample Data Provided:** Includes a sample CSV file for users to download and test the application's functionality immediately.
- **Instant Predictions:** Delivers real-time price predictions based on the user-provided data and a specified future day number.
- **Dynamic & Interactive:** Built with modern CSS, including animations, gradients, and hover effects for an interactive feel.

---

## ⚙️ Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript
- **Styling:** Tailwind CSS (for the main page), Custom CSS
- **Core Algorithm:** Linear Regression (implemented in JavaScript)

---

## 📂 File Structure

The project is organized into the following key files:

```
.
├── index.html              # The main landing page
├── prediction.html         # The page for price prediction
├── style3.css              # CSS for the prediction page
├── script3.js              # JavaScript logic for the prediction page
└── README.md               # This file
```

---

## 🚀 How to Use

To get started with this project, follow these simple steps:

1.  **Navigate to the Main Page:** Open the `index.html` file in your web browser. This page provides an overview of the project.

2.  **Go to the Prediction Page:** Click the "Go to Prediction Page" button to navigate to `prediction.html`.

3.  **Prepare Your Data:**
    - Your data must be in a CSV file.
    - The file must contain two columns: `DateTime` and `Price`.
    - You can download a sample file from the main page to see the required format.

4.  **Upload and Predict:**
    - On the prediction page, click the "Choose File" button to upload your CSV file.
    - Enter a number in the "Enter day number" field to specify how many days into the future you want to predict.
    - Click the **"Predict Price"** button.

5.  **View the Result:** The predicted price (in ₹) will be displayed on the page.

---

## 📋 Required CSV Format

Your `.csv` file must follow this exact structure:

```csv
DateTime,Price
2024-10-01T00:00:00,641100
2024-10-02T00:00:00,624650
2024-10-03T00:00:00,614690
...
```

A sample file (`BitX_Sample.csv`) can be downloaded from the main page for your convenience.

---

## ⚠️ Disclaimer

This project is intended for educational and demonstration purposes only. The prediction model is a simple linear regression and should **not** be used for making real financial decisions.

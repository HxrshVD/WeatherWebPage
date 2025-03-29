# Weather Dashboard Web App

A weather dashboard web application built using React.js that provides real-time weather information for any location. The app integrates the OpenWeatherMap API to fetch and display live weather data.

## 🌟 Features
- Search for current weather by city name
- Live weather data display
- Loading and error handling states
- Optional enhancements:
  - Search history
  - 5-day weather forecast
  - Theme toggle

## 🛠️ Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **API:** OpenWeatherMap API
- **State Management:** React Hooks (useState, useEffect)
- **Deployment:** Vercel / Netlify (optional)

## 🚀 Setup Instructions
### Prerequisites
Ensure you have the following installed on your machine:
- [Node.js](https://nodejs.org/) (v14+ recommended)
- npm or yarn

### Steps to Run Locally
1. **Clone the Repository:**
   ```sh
   git clone https://github.com/your-username/weather-dashboard.git
   cd weather-dashboard
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Get OpenWeatherMap API Key:**
   - Sign up at [OpenWeatherMap](https://openweathermap.org/) and obtain an API key.
   - Create a `.env` file in the project root and add:
     ```env
     REACT_APP_WEATHER_API_KEY=your_api_key_here
     ```

4. **Run the App:**
   ```sh
   npm start
   # or
   yarn start
   ```
   The app will be available at `http://localhost:3000/`.

## 🔗 API Integration Details
- **Base URL:** `https://api.openweathermap.org/data/2.5/weather`
- **Request Example:**
  ```sh
  https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY&units=metric
  ```
- **Response Example:**
  ```json
  {
    "weather": [{ "description": "clear sky", "icon": "01d" }],
    "main": {
      "temp": 20.5,
      "feels_like": 19.8,
      "humidity": 65
    },
    "name": "London",
    "sys": { "country": "GB" }
  }
  ```

## 📦 Deployment
To deploy on platforms like **Netlify**:
1. Build the app:
   ```sh
   npm run build
   ```
2. Follow deployment instructions for your chosen platform.

## 📬 Contact
For questions or contributions, reach out via GitHub or email at `harshvrddubey565@gmail.com`.


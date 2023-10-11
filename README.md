Crypto Exchange Data Application
Table of Contents

    Introduction
    Prerequisites
    Installation
    Usage
    API Documentation
    Technologies
    Contributing
    License

Introduction

The Crypto Exchange Data Application is a web-based application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It allows users to access and manage data related to cryptocurrency exchanges. The application fetches exchange data and exchange icons from Coinapi.io and stores it in the application's database. Users can view a list of major crypto exchanges along with their icons, filter exchanges, and use pagination to navigate through the list.
Prerequisites

Before you begin, ensure you have the following prerequisites:

    Sign up on Coinapi.io to obtain a free API Key. Alternatively, you can use the provided key: FDAB8705-CEAA-4A23-8A5B-6CC30B8D44D9.

Installation

    Clone this repository to your local machine:

    bash

git clone https://github.com/MadYash/Stock-exchange.git

Change to the project directory:

bash

cd crypto-exchange-app

Install the server dependencies:

bash

cd server
npm install

Install the client (React) dependencies:

bash

    cd client
    npm install

Usage

    Set up the MongoDB connection in the server configuration file.

    Start the server:

    bash

cd server
npm start

Start the React development server:

bash

    cd client
    npm start

    Access the application in your web browser by navigating to http://localhost:3000.

API Documentation

1. Fetch Exchange Data

   Endpoint: https://rest.coinapi.io/v1/exchange
   Description: This endpoint fetches exchange data and icons from Coinapi.io and stores it in the application database. This can be done on a regular basis or on a button click in the app.

2. ExchangeList API

   Endpoint: /api/exchanges
   Description: This custom API fetches exchange data from the application's database.

3. Filter Exchanges

   Users can filter exchanges based on different criteria (e.g., trading volume).

4. Pagination

   By default, the application displays 10 exchanges at a time. Users can navigate through the list using pagination.

Technologies

    Frontend: React.js
    Backend: Node.js, Express.js
    Database: MongoDB
    API Integration: Coinapi.io
    Styling: CSS, Bootstrap

Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
License

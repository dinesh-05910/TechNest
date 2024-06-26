# TechNest eCommerce Platform

> eCommerce platform built with the MERN stack & Redux Toolkit.

<img width="1467" alt="Screenshot 2024-06-05 at 6 02 15 PM" src="https://github.com/dinesh-05910/TechNest/assets/118653067/84fe0d44-742d-49e6-9696-512af17187d5">

TechNest is a robust shopping cart project built on the MERN stack, incorporating Redux Toolkit for efficient state management. It seamlessly integrates payment processing through both Paypal and credit/debit cards via PayPal.

<!-- toc -->

- [Features](#features)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies (frontend & backend)](#install-dependencies-frontend--backend)
  - [Run](#run)
- [Build & Deploy](#build--deploy)
  - [Seed Database](#seed-database)
 
<!-- tocstop -->

## Features

- Full featured shopping cart
- Product reviews and ratings
- Top products carousel
- Product pagination
- Product search feature
- User profile with orders
- Admin product management
- Admin user management
- Admin Order details page
- Mark orders as delivered option
- Checkout process (shipping, payment method, etc)
- PayPal / credit card integration
- Database seeder (products & users)
- Payment Confirmation Email

## Usage

- Create a MongoDB database and obtain your `MongoDB URI` - [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
- Create a PayPal account and obtain your `Client ID` - [PayPal Developer](https://developer.paypal.com/)

### Env Variables

Rename the `example.env` file to `.env` and add the following

```
NODE_ENV = development
PORT = 1234
MONGO_URI = your mongodb uri
JWT_SECRET = 'abc123'
PAYPAL_CLIENT_ID = your paypal client id
PAYPAL_APP_SECRET = your paypal app secret
PAGINATION_LIMIT = 8
PAYPAL_API_URL=https://api-m.sandbox.paypal.com
GOOGLE_EMAIL_ID= Add your email id
GOOGLE_APP_ID= Add your registered app id secret
```

Change the JWT_SECRET and PAGINATION_LIMIT to what you want

### Install Dependencies (frontend & backend)

```
npm install
cd frontend
npm install
```

### Run

```

# Run frontend & backend 
npm run dev

# Run backend only
npm run server
```

## Build & Deploy

```
# Create frontend prod build
cd frontend
npm run build
```

### Seed Database

You can use the following commands to seed the database with some sample users and products as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

```
Sample User Logins

admin.1973@gmail.com (Admin)
Admin.@1973#*!

test@gmail.com (Customer)
Test#@12#@!
```

---

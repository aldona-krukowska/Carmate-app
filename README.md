# **.carmate** - a car service log application designed to store information about owned cars, their history, and upcoming service reminders :car:

## Introduction

Carmate is an application for easily storing and managing information on your cars. With it you can easily keep track of your vehicles' service history, add photos, receive notifications of upcoming services and have access to a list of the workshops you use. Below are the main features of the app:

### **Authentication**

The Carmate app provides a secure authentication system that allows users to register and log in to their accounts. This allows each user to access their data and personalise their experience using the app.

### **Adding a car**

Once logged in, users can add information about the cars they own. You can enter details such as make, model, year of manufacture, VIN number, etc. In addition, it is possible to add a photo of the car so that it can be easily recognised in the app. If you need to make changes to the car information, Carmate allows you to edit the data easily. You can update the make, model, vintage, etc. to keep your vehicle information up to date.

### **Adding inspections and services with dates**

Carmate allows you to keep track of the service history of your vehicles. You can add information about inspections, services, part replacements, etc. You can add information about inspections, servicing, part replacements, etc., along with the dates on which these were carried out. This is a useful tool that will allow you to plan in time and keep your cars in good shape.

### **Notifications regarding upcoming maintenance**

The Carmate app automatically generates notifications regarding upcoming services for your cars. This will ensure that you do not miss maintenance appointments and that your vehicles are kept in good condition. You will receive notifications in your account in the app or on your mobile device so that you are always up to date.

### **List of workshops**

Carmate allows you to create a list of the workshops you use to service your cars. You can add workshop names, addresses, contact details and notes about their services. This feature makes it easy to keep track of which workshops service your cars and gives you access to the contact information you need.

These are just a few of the features that the Carmate app offers. With it, you will be able to store and manage information about your cars in a convenient and organised way. Enjoy easy access to service history, service notifications and personalised car data management.

We hope Carmate will make it easier for you to manage and look after your cars!

![Nazwa alternatywna](src\images\prtsc-home.png)
![Nazwa alternatywna](src\images\prtsc-userpage.png)

## Index of Contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Installation](#installation)
- [Usage](#workflow)
- [Status](#our-team)
- [Our Team](#our-team)
- [License](#license)

## Technologies

- ReactJS 13.4.0
- React Router 6.11.1
- TypeScript 4.9.5
- Styled Components 5.3.10
- Firebase 9.21.0
- CSS3
- HTML5
- Eslint 8.40.0

### Environment

The carmate app uses ReactJS.
Routing was done using react-router-dom.
We used free icons from React-icons, and images from the unsplash.com website.

In order to make our app look modern and yet the way we want it to, we first developed the complete UI of the app in Figma.

Our team implemented various functions using React Hooks, including useState, useEffect, useContext, useRef, useNaviagate.

### Back-end

Our team used Firebase to create connections between the database and the application.
We used Firebase Authentication to allow our users to authenticate to Firebase using their email addresses and passwords.
We created complete databases ourselves and the ability for the user to be able to add and delete documents.
In addition to this, we used Firebase Storage to store car images.

### Workflow

Our work was based on the Scrum methodology. We used Jira to create and manage tasks. We had a daily (every single day) where we discussed progress and helped each other solve problems. We worked on sprints, created Epics, Stories and Tasks. At the end, we would enter retrospectives and plan the next stages of work.
On a daily basis, we communicated via Slack and shared new ideas.

## Installation

Running the app in the development mode:

1. Clone the repository: `git clone https://github.com/infoshareacademy/jfdzr10-team-reactors`
2. Navigate to the project directory: `cd jfdzr10-team-reactors`
3. Install the dependencies: `npm install`
4. Start the development server: `npm start`
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Usage

1. Open the application in your web browser.
2. Sign up or log in to your account.
3. Add your cars and their service history.
4. Receive reminders for upcoming services.

## Status

The project is currently under development. Our current goals include code refactoring, adding notifications, implementing the service feature, improving the responsiveness of the website, adding a calendar for a user to view upcoming dates, support for dark mode, checking the application with unit tests using Jest and end-2-end with Cypress.

## Our Team

The application was created by the collaboration of frontend developers:

:grinning: [Agata Misiak](https://github.com/)  
:grin: [Aldona Krukowska](https://github.com/)  
:sunglasses: [Mariusz Przybylski](https://github.com/)  
:wink: [Mateusz Mudry](https://github.com/)

## License

This project is licensed under the [MIT License](LICENSE).

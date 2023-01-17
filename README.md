# Code Challenge

## Description

Your challenge will be to build an app that can display a list of videos that contain embedded questions in them. The app must also be capable of playing any of these videos and pausing them once it's time to display a question. If you enjoy building this mini application, you'll definitely love working with us on the full Edpuzzle product!

## Instructions

You've been given this Github repository where you'll have to submit your work. We won't be checking commits as you're still working on the challenge so don't worry about pushing incomplete code to Github. You will be presenting the results of the code challenge to 2 Edpuzzle team members so we recommend that you write down your decisions so you can remember to talk about them with us.

### Instructions: Frontend

You'll build a frontend single page application with React. It will have 2 screens in 2 different routes/urls:

1. **Videos Screen** - A screen where the list of videos is shown. A video from the list can be clicked and a YouTube embedded player will appear without navigating to another screen. Below that video there will be a shareable link and button that allow navigation to a separate screen where the video player can be shown as a standalone element (see (2)). The following is an example of a wireframe that would accomplish this goal but you can modify it as you see fit.

![Videos Screen](images/videos-list.png)

2. **Video Player Screen** - A screen where the player is displayed withsome extra information around it and in a different url/route than the Videos Screen.

![Video Screen](images/video-player.png)

For the video player, you have to implement some code to open a browser native alert when the video reaches a time where it contains a question. In the alert, show the text of the question if the browser allows it.

## Technology Requirements

As a developer with testing experience, we would like to see those skills applied to the challenge. We don't expect you to test everything as the time for this challenge is short. You can test just enough to show us how you would get started testing in a real life project.

### Frontend

- **Required** - React.js
- **Required** - Routing library of your choice like React Router
- **Required** - Please don't use a UI components library with pre-defined styles. Create your own components with your own style.
- **Required** - State management library like Redux

Feel free to use any other technologies that you need for the code as well as the tests.

### Database

We will provide the database connection information to you.

### YouTube Data API

In order to get data from the YouTube API from within the Node.js backend, you'll need to configure a "Service Account" first. You can find the documentation [here](https://developers.google.com/identity/toolkit/web/quickstart/nodejs#step_1_configure_the_google_identity_toolkit_api).

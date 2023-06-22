# Chat-App
A Real time chat app Built with REST api And ReactJs

# Architecture Overview
The chat app follows a client-server architecture, with the following components:

Frontend: The client-side of the application is built using React. React provides a powerful and flexible user interface framework for developing dynamic and interactive components. The frontend is responsible for rendering the chat interface, handling user interactions, and displaying the chat messages.

RESTful API: The server-side of the application exposes a RESTful API for handling message persistence and retrieval. When a user sends a message, the frontend makes an HTTP POST request to the API endpoint, sending the message data. The server receives the request, processes the message, and stores it in a database. For retrieving messages, the frontend makes HTTP GET requests to the API endpoint, receiving the relevant messages from the server.

# Chat-App
A Real time chat app Built with Websocket And ReactJs

# Architecture Overview
The chat app follows a client-server architecture, with the following components:

## Frontend 
The client-side of the application is built using React. React provides a powerful and flexible user interface framework for developing dynamic and interactive components. The frontend is responsible for rendering the chat interface, handling user interactions, and displaying the chat messages.

## WebSockets 
To achieve real-time updates and instant message delivery, the chat app incorporates WebSockets. WebSockets provide a bidirectional communication channel between the server and the clients. The server uses WebSockets to push new messages to the connected clients, eliminating the need for frequent API requests. This ensures that users receive new messages instantly, creating a seamless chat experience.

import express from "express";
import "./models/clientesTransactions.js";
import { getAllClientes, getClienteById } from "./models/clientesTransactions.js";
import routes from "./routes/index.js";
const app = express();
routes(app);
//app.use(express.json()); 

export default app;

/*
RESTful API Development: Express is excellent for creating RESTful APIs. 
You can define routes, handle requests, and manage URL structures efficiently. 
For instance, you can build an API to manage user data, products, or any other resource.
Middleware Functions: Middleware functions play a crucial role in Express. 
They enable tasks like request parsing, logging, and authentication. 
You can create custom middleware to handle specific tasks in your application.
Template Engines: Express supports template engines like Pug or EJS. 
These engines allow you to generate dynamic HTML content on the server side, which is useful for server-side rendering, SEO, and performance optimization.
Database Integration: You can integrate databases (such as MongoDB, MySQL, or PostgreSQL) with Express. 
Create routes to handle database queries, insertions, and updates.
Authentication and Authorization: Implement user authentication and authorization using Express middleware. 
You can use libraries like Passport.js for authentication strategies.
Optimizing Performance: Express provides tools for optimizing performance, such as caching, compression, and minimizing response times.
Remember that Express is versatile, unopinionated, and minimalistic, making it a popular choice for backend development in Node.js. 
Explore these examples to enhance your Express.js skills and elevate your Node.js journey! 🚀
*/
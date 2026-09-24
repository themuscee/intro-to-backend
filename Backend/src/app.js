import express from "express";

const app = express();   //create an express app

app.use(express.json());

// Routes import
import userRouter from './routes/user.routes.js';
import postRouter from './routes/post.routes.js';


// Routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", postRouter)

// example route: http://localhost:4000/api/v1/users/register

export default app;
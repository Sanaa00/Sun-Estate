import express from 'express';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import testRoute from './routes/test.route.js';
import cookieParser from 'cookie-parser';
// import postRoute from "./routes/post.route.js"
const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
app.use(express.json());
app.use(cookieParser());
// app.use("/api/posts",postRoute)
app.use('/api/auth', authRoute);
app.use('/api/test', testRoute);
// console.log("test")
app.listen(8800, () => {
  console.log('server is running');
});

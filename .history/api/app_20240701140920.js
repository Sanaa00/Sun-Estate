import express from 'express';
import cors from 'cors';
import authRoute from './routes/auth.route.js';
import testRoute from './routes/test.route.js';
import userRouter from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import postRoute from './routes/post.route.js';
const app = express();

const corsOptions = {
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  credentials: true,
};

app.use(cors(corsOptions));
// app.use(
//   cors({
//     origin: process.env.CLIENT_URL,
//   })
// );
app.use(express.json());
app.use(cookieParser());
// app.use("/api/posts",postRoute)
app.use('/api/auth', authRoute);
// app.use('/api/auth', authRoute);
app.use('/api/test', testRoute);
app.use('/api/user', userRouter);
// console.log("test")
app.listen(8800, () => {
  console.log('server is running');
});

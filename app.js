import express from "express";
import mongoose from "mongoose";
import bluebird from "bluebird";
import bodyParser from "body-parser";


import config from "./config/index.js";

import authRouter from './routes/auth.js'

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB
mongoose.Promise = bluebird;

const mongooseOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true
};

await mongoose.connect(config.MONGODB_URI, mongooseOptions,
  // () => {
  //   console.log('MongoDB connected successfully!')
  //   console.log("Press CTRL-C to stop\n-----------------------------------------------------------------\n\n");
  // },
)

// CORs Handling 
app.use((req, res, next) => {
  const allowedOrigins = [//'http://127.0.0.1:5001', 'http://localhost:8001', 'http://127.0.0.1:8002',
		'*', req.headers.origin ]; // all origin accepted initillay
  const origin = req.headers.origin || "";
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
	}
	
  res.header('Access-Control-Allow-Methods', 'GET, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  return next();
});

app.use('/api/auth', authRouter)

app.get("/", async (req, res) => {
	res.send("Hello, world!");
});

app.post(('/test', async (req, res) => {
	console.log('req.body: ', req.body)
	res.json({
		success: true
	})
}))

export default app;

// TODO 1: Import and Create express app instance
import express from "express";
const app = express();

// TODO 1: Define server port
const PORT = 3000;

// TODO 4: Import and Apply CORS middleware
import cors from "cors";
app.use(cors());

// TODO 5: Import and apply Morgan middleware
import morgan from "morgan";
app.use(morgan("dev"));

import { getRandomQuote } from "./quotes.js";


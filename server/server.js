import express from "express";
import meals from "./routes/meals.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/error.js";

const PORT = process.env.PORT || 8000;

//Initialize express app
const app = express();

//Logger middleware
app.use(logger);

//Body parser
app.use(express.json());

//Routes
app.use("/api/meals", meals);

//Error handler
app.use(errorHandler);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

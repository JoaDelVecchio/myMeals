//Express
import express from "express";

//Routes
import meals from "./routes/meals.js";

//Middleware
import cors from "cors";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/error.js";
import notFound from "./middleware/notFound.js";

const PORT = process.env.PORT || 8000;

//Initialize express app
const app = express();

//Cors policy
app.use(cors());

//Logger middleware
app.use(logger);

//Body parser
app.use(express.json());

//Routes
app.use("/api/meals", meals);

//Error handler
app.use(notFound);
app.use(errorHandler);

//Run server
app.listen(PORT, () => console.log(`server running on port ${PORT}`));

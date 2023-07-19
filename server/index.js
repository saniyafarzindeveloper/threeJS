import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import dalleRoutes from './routes/dalle.routes.js';

dotenv.config();

const app = express();

//setting middleware
app.use(cors());

//setting the limit
app.use(express.json({ limit: "50mb" }));

//consuming dalle routes
app.use('/api/v1/dalle', dalleRoutes);

app.get("/", (req, res) => {
  res.status(200).json({ message: "HIIIIIIIIII from DALL-E" });
});

//listening
app.listen(8080, () =>{
    console.log("server has started on port 8080");
})
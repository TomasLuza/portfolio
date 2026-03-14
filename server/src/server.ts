import express from "express";
import { router } from "./routes/index.js"
import cookieParser from "cookie-parser"
import passport from "passport";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize())

const PORT = 3000;

app.use("/api", router)

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
    
});

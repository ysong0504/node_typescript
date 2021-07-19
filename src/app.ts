// import express, { Application, Request, Response, NextFunction } from 'express';
import express, { Application, Request, Response, NextFunction } from 'express';
// import express from 'express';
import router from "./routers/router";
import connect from "./schemas"
connect()

const app: Application = express();
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// const app = express();


app.use("/api", [router]);

app.listen(5000, () => {
    console.log('Server Running')
})
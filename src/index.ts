import express from "express";

const app = express();
const PORT: number = 3000;

/** CONFIGURATION */
app.use(express.json());

/** RUN */
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
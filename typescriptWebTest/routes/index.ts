/*
 * GET home page.
 */
import express from "express";
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Express' });
});

router.get("/greeting", (req: express.Request, res: express.Response) => {
    const name = req.query["name"];
    if (name) {
        res.status(200).send(`Welcome ${name}`);
    } else {
        res.status(400).send("No name provided :(");
    }

});

export default router;
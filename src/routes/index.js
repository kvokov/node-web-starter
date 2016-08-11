import { Router } from 'express';



export default function() {
    const router = Router();

    // GET /status- Check service health
    router.get('/status', (req, res) => res.send('OK'));

    //
    // mount routes here
    //



    return router;
}
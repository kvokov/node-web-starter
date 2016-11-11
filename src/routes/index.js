import {Router} from 'express';
import {version} from '../../package.json';


export default function () {
    const router = Router();


    router.get('/', (req, res) => res.json({version}));
    router.get('/status', (req, res) => res.send('OK'));


    //
    // mount routes here
    //


    return router;
}
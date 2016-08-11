import http from 'http';
import app from './app';
import config from './config';



let server = http.createServer(app);



server.listen(process.env.PORT || config.port, () => {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log(`Express server listening on ${bind}`);
});
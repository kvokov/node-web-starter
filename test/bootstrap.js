import http from 'http';
import app from '../src/app';
import config from '../src/config';


before((done) => {
    //
    // here some logic before all tests
    //


    // run test servers
    let port = 8000;

    app.server = http.createServer(app);

    app.server.on('listening', () => {
        var addr = app.server.address();
        var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
        console.log(`Application server listening on ${bind} in "${config.get('NODE_ENV')}" mode`);
        global.app = app;

        done();
    });
    app.server.listen(port);
});


after((done) => {
    //
    // here some logic after all tests
    //


    done();
});
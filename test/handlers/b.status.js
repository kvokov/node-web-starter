import '../bootstrap';
import chai from 'chai';
import chaiHttp from 'chai-http';


let should = chai.should();
chai.use(chaiHttp);


describe('[GET] /status', () => {
    let app;


    beforeEach(() => {
        app = global.app;
    });


    it('it should return status', (done) => {
        chai.request(app)
            .get('/status')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.be.equal('OK');
                done();
            });
    });
});
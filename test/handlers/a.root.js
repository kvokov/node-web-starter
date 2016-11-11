import '../bootstrap';
import chai from 'chai';
import chaiHttp from 'chai-http';


let should = chai.should();
chai.use(chaiHttp);


describe('[GET] /', () => {
    let app;


    beforeEach(() => {
        app = global.app;
    });


    it('it should return application version', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('version');
                done();
            });
    });
});
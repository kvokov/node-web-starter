import nconf from 'nconf';
import defaults from './default';


nconf
    .argv()
    .env()
    .defaults(defaults);


export default nconf;
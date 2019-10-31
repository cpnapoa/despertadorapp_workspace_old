export default class Util {
    
    getURL(metodo){
        protocol = 'https://';
        domain = 'despertadorappd.herokuapp.com';

        if (__DEV__) {
            protocol = 'http://';
            domain = '192.168.1.118:8000';
        }
        return protocol + domain + metodo;
    }
}
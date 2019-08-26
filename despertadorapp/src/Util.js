export default class Util {
    
    getURL(metodo){
        protocol = 'https://';
        domain = 'despertadorappd.herokuapp.com';

        if (__DEV__) {
            protocol = 'http://';
            domain = '192.168.0.5:8000';
        }
        return protocol + domain + metodo;
    }
}
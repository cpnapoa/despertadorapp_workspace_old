export default class Util {
    
    getURL(metodo){
        protocol = 'https://';
        domain = 'despertadorappd.herokuapp.com';

        if (__DEV__) {
            protocol = 'http://';
            domain = '192.168.2.131:8000';
        }
        return protocol + domain + metodo;
    }


    getRand(numMax){
        numRand = Math.floor((Math.random() * numMax));
        return numRand;
    }
}
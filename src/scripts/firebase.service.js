import firebase from 'firebase'
import config_ from './../config/config'
export default {
    init() {
        var config = {
            apiKey: config_.apiKey,
            authDomain: config_.authDomain,
            databaseURL: config_.databaseURL,
            projectId: config_.projectId,
            storageBucket: config_.storageBucket,
            messagingSenderId: config_.messagingSenderId
          };
          firebase.initializeApp(config);
    }
}
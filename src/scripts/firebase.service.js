import firebase from 'firebase'
export default {
    init() {
        var config = {
            apiKey: "AIzaSyDOIGiCYJwwUCpie8Lhu9CipzB1_0fidss",
            authDomain: "vueapp-caab7.firebaseapp.com",
            databaseURL: "https://vueapp-caab7.firebaseio.com",
            projectId: "vueapp-caab7",
            storageBucket: "vueapp-caab7.appspot.com",
            messagingSenderId: "467067472217"
          };
          firebase.initializeApp(config);
    }
}
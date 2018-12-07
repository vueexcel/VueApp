import firebase from 'firebase'
// import router from '@/router'
export default {
  login(email, password) {
    return firebase
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then((data) => {
        return firebase
          .auth()
          .signInWithEmailAndPassword(email, password)

      })
      .catch(function (err) {
        return err
      });
  }
}
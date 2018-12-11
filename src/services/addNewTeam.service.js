import firebase from 'firebase'
import router from '../router';
export default {
  addNew(data) {
    const firestore = firebase.firestore();
     firestore.collection('user')
      .doc(data.name)
      .set(data)
      .then(resp => {
        // router.push('/finalize')
        return resp
      })
      .catch((err) => {
        return err,
        alert(err,'addnewteam service error')
      })
  }
}
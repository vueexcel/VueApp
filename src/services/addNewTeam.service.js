import firebase from 'firebase'
import router from '../router';
export default {
  async addNew(data) {
    const firestore = firebase.firestore();
    await firestore.collection('user')
      .doc(data.name)
      .set(data)
      .then(resp => {
        router.push('/finalize')
      })
      .catch((err) => {
        return err,
        alert(err,'addnewteam service error')
      })
  }
}
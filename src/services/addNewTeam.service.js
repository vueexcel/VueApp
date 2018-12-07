import firebase from 'firebase'
// import router from '@/router'
export default {
    async addNew(data) {
    const firestore = firebase.firestore();
    await firestore.collection('user')
     .doc(data.name)
     .set(data)
     .then(function() {
        return true;
      }).catch((err) => {
        return err
      })
  },
}
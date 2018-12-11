import firebase from "firebase";
import router from "../router";
export default {
  async addNew(data) {
    let uniqueId = this.uniqueIdFunction()
    data.uniqueId = uniqueId
    const firestore = firebase.firestore();
    await firestore
      .collection("user")
      .doc(data.name)
      .set(data, { merge: true })
      .then(() => {
        return true;
      })
      .catch(err => {
        return err;
      });
  },
  uniqueIdFunction() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  },
  async getUserDetail (data) {
    const firestore = firebase.firestore()
    await firestore.collection('user').doc(data).get().then((response) => {
      console.log(response, '5555555555555555')
    })
  }
};

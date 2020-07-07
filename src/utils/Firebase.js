import firebase from '@react-native-firebase/app'
import firestore from '@react-native-firebase/firestore'
//import uuid from 'uuid'
import uuid from 'react-native-uuid' //npm install buffer --save needs to be install to use


const Firebase = {
  uploadPost: post => {
    const id = uuid.v4()
    const uploadData = {
      id: id,
      postPhoto: post.photo,
      postTitle: post.title,
      postDescription: post.description,
      likes: []
    }
    return firebase
      .firestore()
      .collection('posts')
      .doc(id)
      .set(uploadData)
  },
  getPosts: () => {
    return firebase
      .firestore()
      .collection('posts')
      .get()
      .then(function(querySnapshot) {
        let posts = querySnapshot.docs.map(doc => doc.data())
         //console.log(posts)
        return posts
      })
      .catch(function(error) {
        console.log('Error getting documents: ', error)
      })
  }
}

export default Firebase
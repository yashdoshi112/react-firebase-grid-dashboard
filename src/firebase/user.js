import {firestore} from './config';

export const createUserDocument = async (user) => {
    const docRef = firestore.doc(`/users/${user.uid}`)

    const userProfile = {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        specialty: '',
        ip: '',
    }

    //write to cloud firestore
    return docRef.set(userProfile);
}

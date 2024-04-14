import { addDoc, collection, onSnapshot, query, doc, updateDoc, deleteDoc } from 'firebase/firestore';
import db from './firebase'

const GetAll = (route) => {

    return new Promise((resolve, reject) => {

        const q = query(collection(db, route));
        onSnapshot(q, (onSnapshotQuery) => {
            const data = onSnapshotQuery.docs.map(doc => ({ id: doc.id, ...doc.data() }));

            resolve(data)
        }, (error) => {
            reject(error)
        });
    })
}


const GetByID = (route, id) => {

    return new Promise((resolve, reject) => {

        const q = query(doc(db, route, id));
        onSnapshot(q, (doc) => {
            const data = { id: doc.id, ...doc.data() }

            resolve(data)
        }, (error) => {
            reject(error)
        })
    })
}

const AddToDB = async (obj, route) => {

    const q = query(collection(db, route))
    await addDoc(q, obj)
}

const DeleteInDB = async (id, route) => {

    const q = query(doc(db, route, id));
    await deleteDoc(q);
}

const UpdateToDB = async (id, obj, route) => {

    const q = query(doc(db, route, id));
    await updateDoc(q, obj)


}
export { GetAll, GetByID, AddToDB, DeleteInDB, UpdateToDB };
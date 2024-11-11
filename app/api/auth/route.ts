import {collection, getDocs} from "@firebase/firestore/lite";
import {db} from "@/app/lib/firebaseClient";


export async function POST(request: Request) {
    try {
        const querySnapshot = await getDocs(collection(db, 'job-search'));
        const user = querySnapshot.docs[0].data()
        const res: { name: string, password: string } = await request.json()
        if (res.name === user.name && res.password === user.password) {
            return Response.json(true)
        }else{
            return Response.json(false)
        }
    } catch (e) {
        return Response.json(false)
    }
}
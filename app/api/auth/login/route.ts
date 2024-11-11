import {collection, getDocs} from "@firebase/firestore/lite";
import {db} from "@/app/lib/firebaseClient";
import {cookies} from "next/headers";


export async function POST(request: Request) {
    try {
        const cookieStore = await cookies()
        const querySnapshot = await getDocs(collection(db, 'job-search'));
        const user = querySnapshot.docs[0].data()
        const res: { name: string, password: string } = await request.json()
        if (res.name === user.name && res.password === user.password) {
            cookieStore.set('isAuth', true)
            return Response.json(true)
        }else{
            cookieStore.set('isAuth', false)
            return Response.json(false)
        }
    } catch (e) {
        return Response.json(false)
    }
}
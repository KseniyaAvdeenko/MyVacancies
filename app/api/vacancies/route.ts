import {db, app} from "@/app/lib/firebaseClient";
import {arrayUnion, collection, doc, getDocs, updateDoc} from "@firebase/firestore/lite";
import {IVacancy} from "@/interface/IVacancy";

export async function GET(request: Request) {
    const querySnapshot = await getDocs(collection(db, 'job-search'));
    const {vacancies} = querySnapshot.docs[0].data()
    return Response.json(vacancies)
}

export async function POST(request: Request) {
    try {
        const res: IVacancy = await request.json()
        await updateDoc(doc(db, 'job-search', 'Vacancies'), {
            'vacancies': arrayUnion(res)
        });
        return Response.json(res)
    } catch (e) {
        return Response.json('error')
    }
}
import {db} from "@/app/lib/firebaseClient";
import {type NextRequest} from 'next/server'
import {IVacancy} from "@/interface/IVacancy";
import {arrayRemove, arrayUnion, collection, doc, getDocs, updateDoc} from "@firebase/firestore/lite";

export async function GET(request: Request,
                          {params}: { params: Promise<{ id: string }> }) {
    const querySnapshot = await getDocs(collection(db, "job-search"));
    const {vacancies} = querySnapshot.docs[0].data();
    const id = (await params).id;
    const vacancy: IVacancy | null = vacancies.find(el => el.id === parseInt(id))
    if (vacancy) {
        return Response.json(vacancy)
    } else {
        return Response.json(null)
    }

}

export async function PUT(request: Request,
                          {params}: { params: Promise<{ id: string }> }) {
    try {
        const res: IVacancy = await request.json()
        const querySnapshot = await getDocs(collection(db, "job-search"));
        const {vacancies} = querySnapshot.docs[0].data();
        const id = (await params).id;
        const vacancy: IVacancy | null = structuredClone(vacancies.find(el => el.id === parseInt(id)))

        await updateDoc(doc(db, 'job-search', 'Vacancies'), {
            'vacancies': arrayRemove(vacancy)
        });
        await updateDoc(doc(db, 'job-search', 'Vacancies'), {
            'vacancies': arrayUnion(res)
        });
        return Response.json({id: id, vacancy: vacancy})
    } catch (e) {
        return Response.json('error')
    }
}

export async function DELETE(request: NextRequest,
                             {params}: { params: Promise<{ id: string }> }) {
    try {
        const querySnapshot = await getDocs(collection(db, "job-search"));
        const {vacancies} = querySnapshot.docs[0].data();
        const id = (await params).id;
        const vacancy: IVacancy | null = vacancies.find(el => el.id === parseInt(id))
        await updateDoc(doc(db, 'job-search', 'Vacancies'), {
            'boards': arrayRemove(vacancy)
        });
        return Response.json('Vacancy i deleted')
    } catch (e) {
        console.log(e)
        return Response.json('Error')
    }
}


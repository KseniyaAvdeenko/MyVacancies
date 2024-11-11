import {cookies} from "next/headers";

export async function POST(request: Request) {
    try {
        const cookieStore = await cookies()
        if(JSON.parse(cookieStore.get('isAuth').value)){
            cookieStore.set('isAuth', false)
            return Response.json(true)
        }else{
            return Response.json(false)
        }
    } catch (e) {
        return Response.json(false)
    }
}
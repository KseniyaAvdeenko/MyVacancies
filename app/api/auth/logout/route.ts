import {cookies} from "next/headers";

export async function POST(request: Request) {
    try {
        const cookieStore = await cookies()
        const isAuth = cookieStore.get('isAuth')
        if(isAuth && JSON.parse(isAuth.value)){
            cookieStore.set('isAuth', JSON.stringify(false))
            return Response.json(true)
        }else{
            return Response.json(false)
        }
    } catch (e) {
        return Response.json(false)
    }
}
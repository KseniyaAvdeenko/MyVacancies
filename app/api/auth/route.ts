import user from '../data/user'

export async function POST(request: Request) {
    try {
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
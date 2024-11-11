import vacancyStatus from '../data/status'

export async function GET(request: Request) {
    return Response.json( vacancyStatus )
}
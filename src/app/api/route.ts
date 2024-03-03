import { NextRequest } from 'next/server'

export async function GET() {
  return Response.json({
    message: 'Hello World',
    method: 'GET',
  })
}

export async function POST(request: NextRequest) {
  const query = request.nextUrl.searchParams.get('q')

  const body = await request.json()

  return Response.json({
    query,
    body,
  })
}

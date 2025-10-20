import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth/next'

export async function POST(req: Request) {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== 'ADMIN') {
    return NextResponse.json({ error: 'Forbidden' }, { status: 403 })
  }
  const body = await req.json()
  const { email, role } = body as { email: string; role: 'ADMIN' | 'MEMBER' }
  if (!email || !role) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }
  await prisma.user.update({ where: { email }, data: { role } })
  return NextResponse.json({ ok: true })
}
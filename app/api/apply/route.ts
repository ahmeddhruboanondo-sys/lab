import { NextResponse } from 'next/server'
import { applySchema } from '@/lib/validators'
import { isRateLimited } from '@/lib/rateLimit'
import { prisma } from '@/lib/db'

export async function POST(req: Request) {
  const ip = req.headers.get('x-forwarded-for') || 'unknown'
  if (isRateLimited(`apply-${ip}`, 3, 60 * 60 * 1000)) {
    return NextResponse.json({ error: 'Too many applications' }, { status: 429 })
  }
  const body = await req.json()
  const result = applySchema.safeParse(body)
  if (!result.success) {
    return NextResponse.json({ error: 'Invalid input' }, { status: 400 })
  }
  const { name, email, role, cvUrl, message } = result.data
  // Persist the application in the database (optional).  For demonstration we
  // store it in a simple table.  You may create a separate model if needed.
  await prisma.post.create({
    data: {
      title: `Application from ${name}`,
      slug: `application-${Date.now()}`,
      excerpt: `Role: ${role}`,
      bodyMdx: message,
      tags: ['application'],
      published: false,
    },
  })
  // TODO: send confirmation email via Resend/SMTP
  console.log('New application', { name, email, role, cvUrl, message })
  return NextResponse.json({ ok: true })
}
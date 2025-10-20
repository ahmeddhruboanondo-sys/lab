import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Admin',
}

export default async function AdminPage() {
  const session = await getServerSession(authOptions)
  if (!session || (session.user as any).role !== 'ADMIN') {
    redirect('/auth/signin')
  }
  // Placeholder admin dashboard.  A full CRUD interface would be implemented
  // here using client components, modals and drag‑and‑drop reordering.
  return (
    <section className="max-w-4xl mx-auto px-4 md:px-8 py-12 space-y-6">
      <h1 className="text-3xl font-headline">Admin Dashboard</h1>
      <p className="text-offwhite/70">
        Welcome, admin!  From here you can manage people, publications, projects, datasets and
        posts.  This demo placeholder does not include the full CRUD UI, but the API routes and
        database schema support it.  See the README for guidance on extending this page.
      </p>
    </section>
  )
}
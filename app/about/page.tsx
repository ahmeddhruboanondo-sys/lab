export const metadata = {
  title: 'About',
  description: 'Learn more about our research laboratory, mission and sponsors.',
}

export default function AboutPage() {
  return (
    <section className="max-w-5xl mx-auto px-4 md:px-8 py-12 space-y-8">
      <h1 className="text-3xl font-headline">About Us</h1>
      <p className="text-offwhite/80 leading-relaxed">
        Our laboratory is dedicated to advancing the state of the art in artificial intelligence and
        computer science.  We conduct fundamental and applied research across machine learning,
        natural language processing, computer vision and robotics.  Our mission is to push the
        boundaries of knowledge and to educate the next generation of scientists and engineers.
      </p>
      <h2 className="text-2xl font-headline">Sponsors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 items-center">
        {/* Replace with your sponsor logos */}
        <div className="h-16 bg-white/10 rounded-md flex items-center justify-center text-offwhite/60">
          Sponsor 1
        </div>
        <div className="h-16 bg-white/10 rounded-md flex items-center justify-center text-offwhite/60">
          Sponsor 2
        </div>
        <div className="h-16 bg-white/10 rounded-md flex items-center justify-center text-offwhite/60">
          Sponsor 3
        </div>
        <div className="h-16 bg-white/10 rounded-md flex items-center justify-center text-offwhite/60">
          Sponsor 4
        </div>
      </div>
    </section>
  )
}
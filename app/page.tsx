import Blog from '@/components/Blog'
import DayVerse from '@/components/DayVerse'
import Hero from '@/components/Hero'
import Video from '@/components/Video'

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center justify-between px-6">
      <header>
        <Hero />
      </header>
      <section>
        <DayVerse />
      </section>
      <section>
        <Video />
      </section>
      <section>
        <Blog />
      </section>
    </main>
  )
}

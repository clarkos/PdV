import { Header, Player, Blog, DayVerse } from '@/containers';
export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <section>
        <DayVerse />
      </section>
      <section>
        <Player />
      </section>
      <section>
        <Blog />
      </section>
    </>
  )
}

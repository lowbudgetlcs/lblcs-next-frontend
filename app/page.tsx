import Hero from "@/components/Hero";

export default function Home() {
  return (
      <main className={"h-screen flex flex-col items-center justify-between p-24 bg-[--bg-primary]"}>
          <Hero />
          Home Page!
      </main>
  )
}

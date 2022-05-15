import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="min-h-screen p-3 space-y-8 bg-gray-900">
      <Head>
        <title>Codar.me</title>
        <meta name="description" content="Aprenda a desenvolver uma aplicação full stack utilizando JavaScript, mesmo que você não saiba nada sobre programação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="p-3">
        <Image src="/vercel.svg" alt="Vercel Logo" width={144} height={32} />
      </header>
      <main className="p-3">
        <section id="hero">
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-gradientSky-0 to-gradientSky-1">Evento 100% online e gratuito</span>
          <h1 className="text-3xl font-bold text-white font-montserrat mt-1">Desenvolva uma aplicação full-stack do zero</h1>
          <p className="text-gray-300 text-base mt-3">Aprenda a desenvolver uma aplicação full stack utilizando JavaScript, <strong className="text-white">mesmo que você não saiba nada sobre programação</strong>.</p>
          <div className="mt-7 rounded-xl p-6 bg-gray-800">
            <h2 className="text-white text-xl font-semibold">Inscreva-se agora</h2>
            <p className="text-gray-300 text-sm mt-1">Evento online e gratuito de 30/05 a 03/06.</p>
            <form className="space-y-3 mt-3 flex flex-col">
              <input className="block w-full px-4 py-3 bg-gray-600 rounded-lg focus:ring-white focus:border-white" id="nome" type="text" placeholder="Introduza o seu nome"/>
              <input className="block w-full px-4 py-3 bg-gray-600 rounded-lg focus:ring-white focus:border-white" id="email" type="email" placeholder="Introduza o seu email"/>
              <button type="submit" class="px-4 py-3 bg-gradient-to-br from-gradientSky-0 to-gradientSky-1 rounded-lg text-white font-semibold">Confirmar inscrição</button>
            </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home

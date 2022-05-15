import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="p-3 bg-gray-900">
      <Head>
        <title>Codar.me</title>
        <meta name="description" content="Aprenda a desenvolver uma aplicação full stack utilizando JavaScript, mesmo que você não saiba nada sobre programação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container min-h-screen mx-auto md:max-w-6xl space-y-8">
        <header className="p-3">
          <Image src="/vercel.svg" alt="Vercel Logo" width={144} height={32} />
        </header>
        <main className="p-3">
          <section className="md:flex md:space-x-8 lg:space-x-10 md:items-center md:justify-between" id="hero">
            <div className="md:flex-1 md:max-w-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gradientSky-0 to-gradientSky-1">Evento 100% online e gratuito</span>
              <h1 className="text-3xl lg:text-5xl font-bold text-white font-montserrat mt-1 md:mt-3">Desenvolva uma aplicação full-stack do zero</h1>
              <p className="text-gray-300 text-base mt-3 md:mt-6">Aprenda a desenvolver uma aplicação full stack utilizando JavaScript, <strong className="text-white">mesmo que você não saiba nada sobre programação</strong>.</p>
            </div>
            <div className="md:max-w-md md:flex-1 mt-7 rounded-xl p-6 md:p-8 lg:p-10 xl:p-12 bg-gray-800">
              <h2 className="text-white text-xl font-semibold md:text-2xl">Inscreva-se agora</h2>
              <p className="text-gray-300 text-sm mt-1">Evento online e gratuito de 30/05 a 03/06.</p>
              <form className="space-y-3 md:space-y-4 mt-3 md:mt-6 flex flex-col">
                <input className="block w-full px-4 py-3 bg-gray-600 rounded-lg focus:ring-white focus:border-white" id="nome" type="text" placeholder="Introduza o seu nome"/>
                <input className="block w-full px-4 py-3 bg-gray-600 rounded-lg focus:ring-white focus:border-white" id="email" type="email" placeholder="Introduza o seu email"/>
                <button type="submit" className="px-4 py-3 bg-gradient-to-br from-gradientSky-0 to-gradientSky-1 rounded-lg text-white font-semibold">Confirmar inscrição</button>
              </form>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}

export default Home

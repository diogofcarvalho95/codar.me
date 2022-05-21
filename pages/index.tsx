import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Contact from '../components/Form'

const Home: NextPage = () => {
  return (
    <div className="p-3 bg-gray-900 bg-[url('/elipse.png')] bg-left-top bg-no-repeat bg-contain">
      <Head>
        <title>Codar.me</title>
        <meta name="description" content="Aprenda a desenvolver uma aplicação full stack utilizando JavaScript, mesmo que você não saiba nada sobre programação" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container min-h-screen mx-auto md:max-w-6xl md:flex md:flex-col md:flex-wrap md:justify-between">
        <header className="p-3">
          <Image src="/vercel.svg" alt="Vercel Logo" width={144} height={32} />
        </header>
        <main className="p-3">
          <section className="md:flex md:space-x-8 lg:space-x-10 md:items-center md:justify-between" id="hero">
            <div className="md:flex-1 md:max-w-lg">
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-gradientSky-0 to-gradientSky-1">Evento 100% online e gratuito</span>
              <h1 className="text-3xl lg:text-5xl font-bold md:font-extrabold text-white leading-tight font-montserrat mt-1 md:mt-3">Desenvolva uma aplicação full-stack do zero</h1>
              <p className="text-gray-300 text-base mt-3 md:mt-6 leading-relaxed">Aprenda a desenvolver uma aplicação full stack utilizando JavaScript, <strong className="text-white">mesmo que você não saiba nada sobre programação</strong>.</p>
            </div>
            <Contact/>
          </section>
        </main>
        <div class="text-gray-300 hidden md:flex md:gap-1 md:items-center md:cursor-pointer md:pb-8">
          <svg viewBox="0 0 25 25" class="h-3" fill="currentColor" width="25"><path d="M13.5 2a1.5 1.5 0 00-3 0h3zm-2.56 22.06a1.5 1.5 0 002.12 0l9.547-9.545a1.5 1.5 0 10-2.122-2.122L12 20.88l-8.485-8.486a1.5 1.5 0 10-2.122 2.122l9.546 9.546zM10.5 2v21h3V2h-3z"></path></svg>
          <a href="#project">Saiba mais</a>
        </div>
      </div>
      <section id="project" class="container mx-auto md:max-w-6xl pt-12 lg:py-20">
        <h2 class="mb-0 text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gradientSky-0 to-gradientSky-1">O que você vai aprender</h2>
        <p className="text-gray-300 text-base mt-3 md:mt-4 lg:mt-5 max-w-2xl leading-relaxed">Nós vamos <strong className="text-white">criar um mini clone do Twitter</strong>, iniciando com HTML e CSS apenas, evoluindo para frameworks como React e Tailwind. Sempre falando de como tudo funciona, para que <strong className="text-white">mesmo que não entende nada de programação</strong> possa entender e acompanhar.</p>
        <div class="mt-6 md:mt-8 lg:mt-10 flex flex-wrap gap-6">
          <div class="max-w-lg min-w-[40%] lg:min-w-[1%] flex-1">
            <img class="rounded aspect-video lg:max-w-[164px]" src="/aula-01.png"/>
            <div class="mt-6 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gradientSky-0 to-gradientSky-1">30.05</div>
            <span class="text-gray-300">O começo de tudo</span>
          </div>
          <div class="max-w-lg min-w-[40%] lg:min-w-[1%] flex-1">
            <img class="rounded aspect-video lg:max-w-[164px]" src="/aula-02.png"/>
            <div class="mt-6 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gradientSky-0 to-gradientSky-1">31.05</div>
            <span class="text-gray-300">Algumas abstrações</span>
          </div>
          <div class="max-w-lg min-w-[40%] lg:min-w-[1%] flex-1">
            <img class="rounded aspect-video lg:max-w-[164px]" src="/aula-03.png"/>
            <div class="mt-6 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gradientSky-0 to-gradientSky-1">01.06</div>
            <span class="text-gray-300">O coração do projeto</span>
          </div>
          <div class="max-w-lg min-w-[40%] lg:min-w-[1%] flex-1">
            <img class="rounded aspect-video lg:max-w-[164px]" src="/aula-04.png"/>
            <div class="mt-6 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gradientSky-0 to-gradientSky-1">02.06</div>
            <span class="text-gray-300">Tudo funcionando</span>
          </div>
          <div class="max-w-lg min-w-[40%] lg:min-w-[1%] flex-1">
            <img class="rounded aspect-video lg:max-w-[164px]" src="/aula-05.png"/>
            <div class="mt-6 text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gradientSky-0 to-gradientSky-1">03.06</div>
            <span class="text-gray-300">Mostre ao mundo!</span>
          </div>
        </div>
      </section>
      <section id="about" class="container mx-auto md:max-w-6xl pt-12 pb-12 lg:py-20">
        <div class="md:flex md:gap-5 md:items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gradientSky-0 to-gradientSky-1">Conheça seu professor</h2>
            <p class="text-gray-300 text-base mt-3 md:mt-4 lg:mt-5 max-w-2xl leading-relaxed">Qualquer pessoa tem algo a ensinar. Mas <strong className="text-white">só quem conhece o mercado e tem muita experiência em projetos reais</strong>, sabe exatamente o caminho para se tornar um profissional acima da média.</p>
          </div>
          <div class="bg-gray-800 p-3 gap-4 rounded-3xl flex flex-col md:flex-row items-center mt-8 md:mt-0">
            <div class="pl-5">
              <Image src="/avatar_blue.png" alt="Bruno Bertolini" width={190} height={240}/>
            </div>
            <div class="py-3 pr-5 flex-1">
              <div class="py-3">
                <span class="uppercase text-mute text-gray-300 text-sm">+ 16 anos de experiência</span>
                <h2 class="text-2xl md:text-3xl font-bold text-white mt-2">Bruno Bertolini</h2>
              </div>
              <ul class="py-3">
                <li class="mb-3 flex gap-3 items-center text-gray-300 text-sm"><span class="text-lg">⭐</span>Engenheiro de software e empreendedor</li>
                <li class="mb-3 flex gap-3 items-center text-gray-300 text-sm"><span class="text-lg">⭐</span>Dezenas de projetos reais no currículo</li>
                <li class="mb-3 flex gap-3 items-center text-gray-300 text-sm"><span class="text-lg">⭐</span>Líder técnico front-end, mobile, CTO em várias empresas</li>
                <li class="mb-3 flex gap-3 items-center text-gray-300 text-sm"><span class="text-lg">⭐</span>Recrutou, liderou, ensinou e mentorou dezenas de programadores.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

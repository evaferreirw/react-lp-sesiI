import s from './App.module.css'

import nomeDaFoto from '/logo.png'

function App() {
//js

  return (
   <>

    <nav>
        <div className={s.topnav}>
            <img src={nomeDaFoto} alt="" width="85px"/>
                
        </div>
        <div className={s.bottomanav}>
            <span>
                <a href="#s2">Mais vendidos </a>
            </span>
            <span>
                <a href="#s3">Video</a>
            </span>
            <span>
                <a href="#s4">Novidades</a>
            </span>
            <span>
                <a href="#s5">Lábios</a>
            </span>
            <span>
                <a href="#s6">Rostos</a>
            </span>
            <span>
                <a href="#s7">Olhos</a>
            </span>
            <span>
                <a href="#s8">Unhas</a>
            </span>
            <span>
                <a href="#s9">Acessórios</a>
            </span>
            <span>
                <a href="#s10">Presentes</a>
            </span>
        </div>
    </nav>
    <main>
        <section id="s1" className={s.s1}>
           
        </section>
        <section id="s2" className={s.s2}>
            <h1 className={s.titulo}>Conheça nossos ícones</h1>
            <h2 className={s.subtitulo}>3d Hydra Lipgloss</h2>
            <h3 className={s.paragrafo}>Uma nova fronteira de luminosidade e conforto para os seus lábios. Um produto simplesmente icónico e belo que hidrata os lábios até 8h, envolvendo-os num brilho puro</h3>
            <h1 className= {s.titulo2}>Unlimited Double Touch</h1>
        </section>
        <section id="s3" className={s.s3}>
            <iframe  className={s.video} src="https://www.youtube.com/embed/YOALdVJ-am4?si=R07qCnwI0u_z4AsP&autoplay=1&mute=1"  title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>
        <section id="s4" className={s.s4}>

        </section>
        <section id="s5" className={s.s5}>

        </section>
        <section id="s6"className={s.s6}>

        </section>
        <section id="s7" className={s.s7}>

        </section>
        <section id="s8" className={s.s8}>

        </section>
        <section id="s9" className= {s.s9}>

        </section>
        <section id="s10" className={s.s10}>

        </section>

    </main>
    <footer>

    </footer>

    </>
  )
}

export default App
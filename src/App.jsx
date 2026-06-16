import { useState } from 'react'
import './App.css'

function App() {
  // Inicializando o nome como string vazia para evitar inputs descontrolados
  const [nome, setNome] = useState("")
  const [assunto, setAssunto] = useState("")

  // Função para scroll suave
  const navTo = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  // Função para enviar o WhatsApp
  const enviar = () => {
    if (!nome || !assunto) {
      alert("Por favor, preencha todos os campos!")
      return
    }
    const mensagem = `Gostaria de entrar em contato! \n\nNome: ${nome} \nAssunto: ${assunto}`
    const msg = encodeURIComponent(mensagem)
    // Lembre-se de trocar os asteriscos pelo seu número real com DDD (Ex: 5511999999999)
    window.open(`https://wa.me/*************?text=${msg}`)
  }

  return ( 
    <>
      <nav>
        <span className="navItem" onClick={() => navTo('s1')}>
            <img src="./home.png" alt="Home" />
            <p className="navWords">Home</p>
        </span>
        <span className="navItem" onClick={() => navTo('s2')}>
            <img src="./banner.png" alt="banner" />
            <p className="navWords">Banner</p>
        </span>
        <span className="navItem" onClick={() => navTo('s3')}>
            <img src="./Cards.png" alt="Products" />
            <p className="navWords">Cards</p>
        </span>
        <span className="navItem" onClick={() => navTo('s4')}>
            <img src="./youtube.png" alt="Video" />
            <p className="navWords">Video</p>
        </span>
        <span className="navItem" onClick={() => navTo('s5')}>
            <img src="./telephone-symbol-button.png" alt="Contato" />
            <p className="navWords">Contato</p>
        </span>
      </nav>

      <main>
        <section id="s1" className="s1">
            <h1>Titulo do Banner</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ad corrupti fugiat</h2>
        </section>

        {/* Adicionada a seção s2 que estava faltando no seu HTML */}
        <section id="s2" className="s2">
            <h2>Área do Banner Secundário</h2>
        </section>

        <section id="s3" className="s3">
            <div className="card">
                <img src="./1.jpg" alt=""/>
                <div className="textCard">
                    <h4>Titulo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum erro</p>
                </div>
            </div>

            <div className="card">
                <img src="./2.avif" alt=""/> 
                <div className="textCard">
                    <h4>Titulo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum erro</p>
                </div>
            </div>

            <div className="card">
                <img src="./3.jpg" alt=""/>
                <div className="textCard">
                    <h4>Titulo</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam dolorum erro</p>
                </div>
            </div>
        </section>
        
        <section id="s4" className="s4">
            <iframe className="Video" src="https://www.youtube.com/embed/9pPip7zdxyk?si=7RvhlbPH4YPGuMMC" title="YouTube video player" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </section>

        <section id="s5" className="s5">
            <div className="formulario">
                <label htmlFor="nome">Digite seu nome:</label>
                <input type="text" id="nome" placeholder="Insira seu nome" value={nome} onChange={(event) => setNome(event.target.value)} />
                
                <label htmlFor="assunto">Assunto</label>
                <textarea id="assunto" placeholder="Insira sua mensagem" value={assunto} onChange={(event) => setAssunto(event.target.value)}></textarea>
                
                {/* Corrigido para onClick com C maiúsculo */}
                <button onClick={enviar}>ENVIAR</button>
            </div>
        </section>
      </main>

      <footer>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <img width="40px" src="./facebook.png" alt="facebook" />
        </a>
        <a href="https://Instagram.com" target="_blank" rel="noreferrer">
            <img width="40px" src="./Instagram.jpg" alt="Instagram" />
        </a>
        <a href="https://Linkedin.com" target="_blank" rel="noreferrer">
            <img width="40px" src="./linkedin.png" alt="Linkedin" />
        </a>
        <a href="https://github.com" target="_blank" rel="noreferrer">
            <img width="40px" src="./GITHUB.png" alt="github" />
        </a>
      </footer>
    </>
  ) 
}

export default App
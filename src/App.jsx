import { useState } from 'react'
import './App.css'


function App() {
  const [password, setPassword] = useState("-")
  const [copyText, setCopyText] = useState("Copiar")
  const [passwordSize, setPasswordSize] = useState(8)

  function gerador() {
    const caracters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"
    
    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const randomCaracter = Math.floor(Math.random() * caracters.length)
      newPassword += caracters[randomCaracter]

    }
    setPassword(newPassword)
    setCopyText("Copiar")
  }

  function copiar() {
    window.navigator.clipboard.writeText(password)
    setCopyText ("Copiado")

  }



  return (
    <div className="app">
      <h1>Gerador de Senha</h1>
      <div className='tamanho'>
        <h2 htmlFor="passwordSize">Tamanho:</h2>
        <input 
        type="number" 
        id='passwordSize' min={1}
        value={passwordSize}
        onChange={(ev) => setPasswordSize(ev.target.value)}
        />
      </div>
      
      <div><label>Você selecionou uma senha com {passwordSize} caracteres:</label></div>
      <div className='senha'>
      {password}
      </div>
      <button onClick={gerador}>Gerar</button>
      <button onClick={copiar}>{copyText}</button>
    </div>
  )
}

export default App

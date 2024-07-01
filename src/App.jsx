import { useState } from 'react'
import './App.css'
import Input from './hooks/Input'


function App() {
  const [password, setPassword] = useState("***")
  const [copyText, setCopyText] = useState("Copiar")
  const [customSize, setCustomSize] = useState(8)
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? customSize : 8

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
      <div>
        <label htmlFor="showInput">Customizar tamanho:</label>
        <input type="checkbox" id='showInput' value={showInput} onChange={() => setShowInput(currentState => !currentState)}/>
      </div>
      {showInput ? (

        <div className='tamanho'>
        <h2 htmlFor="passwordSize">Tamanho:</h2>
        <Input passwordSize={customSize} setPasswordSize={setCustomSize}/>
        </div>

      ) : null}
      
      <div><label>Senha com {showInput ? passwordSize : 8} caracteres:</label></div>
      <div className='senha'>
      {password}
      </div>
      <button onClick={gerador}>Gerar</button>
      <button onClick={copiar}>{copyText}</button>  
    </div>
  )
}

export default App

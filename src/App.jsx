import { useState } from "react"


function App() {

  const [loginstate, setLoginstate] = useState(false)
  const [username, setUsername] = useState('')

  const buttonText = loginstate ? 'Logout' : 'Login'


  function changeLogin() {
    setLoginstate(!loginstate)
  }

  function usernameChanged(e){
    setUsername(e.target.value)
  }

  return (
    <>
      {/* {
        username != null ?
          <h3>{username}</h3> :
          <LoginForm setUsername={setUsername} />
      } */}

      <input value={username} onChange={usernameChanged}/>
      <button onClick={changeLogin}>{buttonText}</button>
    </>
  )
}

export default App

import { useState } from "react"


function App() {

  const [loginstate, setLoginstate] = useState(false)
  const [username, setUsername] = useState(null)

  const buttonText = loginstate ? 'Login' : 'Logout'


  function changeLogin() {
    setLoginstate(true)
  }

  //conditional rendering
  return (
    <>
      {
        username != null ?
          <h3>{username}</h3> :
          <LoginForm setUsername={setUsername} />
      }

      <input />
      <button onClick={() => changeLogin}>{buttonText}</button>
    </>
  )
}

export default App

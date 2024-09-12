import { useState } from "react"


function App() {

  const [loginstate, setLoginstate] = useState(false)
  const [username, setUsername] = useState(null)


  //conditional rendering
  return (
    <>
      {
        username != null ?
          <h3>{username}</h3> :
          <LoginForm setUsername={setUsername} />
      }
    </>
  )
}

function LoginForm(loginstate) {

  const buttonText = loginstate ? 'Login' : 'Logout'

  function changeLogin(){
    setLoginstate(true)
  }

  
  return (
    <div>
      <input/>
      <button onClick={() => changeLogin}>{buttonText}</button>
    </div>
  )
}

export default App

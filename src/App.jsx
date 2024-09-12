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

function LoginForm({ setLoginstate }) {

  
  return (
    <div>
      <input/>
      <button onClick={() => setLoginstate(true)}>Login</button>
    </div>
  )
}

export default App

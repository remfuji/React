import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")
    const [login, setLogin] = useState(false)
    const navigate = useNavigate()



    if (login) {
      localStorage.setItem('login', login)
      navigate('/')
      return 
    }


    function Click() {

        fetch("https://fakestoreapi.com/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: user,
                password: pass,
            }),
        })
            .then(response => {
                if (response.ok) {
                    setLogin(!login)
                }
            })
    }
    return (
        <div className='login'>
            <p>Usarname: <input id='input-btn' type="text" onChange={e => setUser(e.target.value)} /> </p>
            <p>Password: <input id='input-btn1' type="text" onChange={e => setPass(e.target.value)} /> </p>
            <button className='loginB' onClick={Click}>Login</button>
        </div>
    )
}
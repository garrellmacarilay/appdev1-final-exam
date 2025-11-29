import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    const PASS = import.meta.env.VITE_APP_SECRET_PASSWORD
    const URL = import.meta.env.VITE_APP_API_URL

useEffect(() => {
    
        axios.get(`${URL}/users?_limit=3`)
        .then(response => setUsers(response.data))
        .catch(error => console.error("Error fetching users:", error))
    }, [])

    function handleLogin() {
        const foundUser = users.find(user => user.username === username)

        if (!foundUser) {
            alert("Username not found!")
            return;
        }

        if (password !== PASS) {
            alert("Incorrect password!")
            return;
        }

        localStorage.setItem("loggedInUser", JSON.stringify(foundUser))
        navigate("/todos")
    }
return (
        <div>
            <h2>Login</h2>

            <input type="text" placeholder="Enter username (E.g., Bret)" value={username} onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login

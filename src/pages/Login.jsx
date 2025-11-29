import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login () {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    const PASS = import.meta.env.VITE_APP_SECRET_PASSWORD
    const URL = import.meta.env.VITE_APP_API_URL

    useEffect(() => {
        setIsLoading(true)
        axios.get(`${URL}/users?_limit=3`)
        .then(response => {
            setUsers(response.data)
            setIsLoading(false)
        })
        .catch(error => {
            console.error("Error fetching users:", error)
            setIsLoading(false)
        })
    }, [URL])

    function handleLogin() {
        if (!username.trim() || !password.trim()) {
            alert("Please fill in all fields!")
            return;
        }

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

    const handleSubmit = (e) => {
        e.preventDefault()
        handleLogin()
    }

    return (
        <div className="min-h-screen bg-linear-to-br from-gray-600 to-slate-800 flex items-center justify-center px-4">
            {/* Background Decorative Elements */}
            <div className="absolute top-20 left-20 w-32 h-32 bg-linear-to-br from-orange-100/20 to-white/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 right-20 w-40 h-40 bg-linear-to-br from-white/10 to-orange-100/20 rounded-full blur-2xl"></div>
            
            {/* Login Card */}
            <div className="bg-black/20 backdrop-blur-sm rounded-3xl p-8 w-full max-w-md border border-white/10 shadow-2xl">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-orange-100/70">Sign in to access your todos</p>
                </div>

                {/* Login Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-orange-100 text-sm font-medium mb-2">
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Enter username (E.g., Bret)"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-orange-100/50 focus:outline-none focus:ring-2 focus:ring-orange-100/50 focus:border-orange-100/50 transition-all duration-300"
                            disabled={isLoading}
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-orange-100 text-sm font-medium mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-xl text-white placeholder-orange-100/50 focus:outline-none focus:ring-2 focus:ring-orange-100/50 focus:border-orange-100/50 transition-all duration-300"
                            disabled={isLoading}
                        />
                    </div>

                    <button
                        type="submit"
                        onClick={handleLogin}
                        disabled={isLoading}
                        className="w-full bg-linear-to-r from-orange-100 to-white text-black py-3 px-6 rounded-xl font-semibold hover:from-white hover:to-orange-100 focus:outline-none focus:ring-2 focus:ring-orange-100/50 transition-all duration-300 hover:transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                        {isLoading ? "Loading..." : "Sign In"}
                    </button>
                </form>

                {/* Available Users Info */}
                {users.length > 0 && (
                    <div className="mt-6 p-4 bg-black/20 rounded-xl border border-white/10">
                        <h3 className="text-orange-100 text-sm font-medium mb-2">Available Users:</h3>
                        <div className="space-y-1">
                            {users.map(user => (
                                <p key={user.id} className="text-orange-100/70 text-xs">
                                    • {user.username} ({user.name})
                                </p>
                            ))}
                        </div>
                    </div>
                )}

                {/* Back to Home */}
                <div className="text-center mt-6">
                    <Link 
                        to="/" 
                        className="text-orange-100/70 hover:text-orange-100 text-sm transition-colors duration-300"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Login

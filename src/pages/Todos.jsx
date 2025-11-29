import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTodos } from "../features/todos/todosSlice"
import AddTodoForm from "../components/AddTodoForm"
import TodoList from "../components/TodoList"
import "../components/todo-list/CSS/corner.css"
import "../components/todo-list/CSS/main.css"

function Todos () {
    const dispatch = useDispatch()
    const todos = useSelector(state => state.todos.items)
    const [savedTheme, setSavedTheme] = useState(localStorage.getItem("savedTheme") || "standard")
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        dispatch(fetchTodos())
    }, [dispatch])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date().toLocaleString())
        }, 1000)
        return () => clearInterval(timer)
    }, [])

    useEffect(() => {
        changeTheme(savedTheme)
    }, [])

    function changeTheme(color) {
        localStorage.setItem("savedTheme", color)
        setSavedTheme(color)
        document.body.className = color
        
        if (color === "darker") {
            document.getElementById("title").classList.add("darker-title")
        } else {
            document.getElementById("title").classList.remove("darker-title")
        }

        // Update input theme
        const input = document.querySelector(".todo-input")
        if (input) {
            input.className = `todo-input ${color}-input`
        }

        // Update button themes
        document.querySelectorAll("button").forEach((button) => {
            if (button.classList.contains("todo-btn")) {
                button.className = `todo-btn ${color}-button`
            } else if (button.classList.contains("check-btn")) {
                button.className = `check-btn ${color}-button`
            } else if (button.classList.contains("delete-btn")) {
                button.className = `delete-btn ${color}-button`
            }
        })

        // Update todo items themes
        document.querySelectorAll(".todo").forEach((todo) => {
            const isCompleted = todo.classList.contains("completed")
            todo.className = isCompleted ? `todo ${color}-todo completed` : `todo ${color}-todo`
        })
    }

    return (
        <div >
            <div id="header">
                <div className="flexrow-container absolute top-11.5 right-8" style={{alignSelf: 'flex-end', marginLeft: '3%', marginRight: '0'}}>
                    <div className="standard-theme theme-selector" onClick={() => changeTheme("standard")}></div>
                    <div className="light-theme theme-selector" onClick={() => changeTheme("light")}></div>
                    <div className="darker-theme theme-selector" onClick={() => changeTheme("darker")}></div>
                </div>
                <h1 id="title" style={{fontFamily: "'Work Sans', sans-serif", fontSize: '6rem', fontWeight: 'bold', whiteSpace: 'nowrap'}}>Just do it.</h1>
            </div>

            <div id="form">
                <AddTodoForm savedTheme={savedTheme} />
            </div>

            {/* GitHub Corner */}
            <div className="version">
                <div className="demo version-section">
                    <a href="https://github.com/lordwill1/todo-list" className="github-corner">
                        <svg width="80" height="80" viewBox="0 0 250 250" style={{fill:"#151513", color:"#fff", position: "absolute", top: 0, border: 0, left: 0, transform: "scale(-1, 1)"}}>
                            <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
                            <path d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2" fill="currentColor" style={{transformOrigin: "130px 106px"}} className="octo-arm"></path>
                            <path d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z" fill="currentColor" className="octo-body"></path>
                        </svg>
                    </a>
                </div>
            </div>

            {/* DateTime - Centered */}
            <div style={{display: 'flex', justifyContent: 'center', width: '100%', margin: '10px 0 0 0'}}>
                <p><span id="datetime">{currentTime}</span></p>
            </div>

            <div id="myUnOrdList">
                <TodoList todos={todos} savedTheme={savedTheme} />
            </div>
        </div>
    )
}
export default Todos


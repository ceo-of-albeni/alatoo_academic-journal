import { useState } from "react"
import Login from "./login/Login"




export default function Modals() {
    const [activeLogin, setActiveLogin] = useState('login')

    return (
        <>
            {activeLogin === "login" && (
                <Login/>
            )}
        </>
    )
}

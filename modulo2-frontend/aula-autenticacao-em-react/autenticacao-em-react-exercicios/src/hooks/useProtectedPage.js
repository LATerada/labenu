import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../routes/coordinator"

export function useProtectedPage () {
    const navigate = useNavigate()
    const token = localStorage.getItem("token")
    useEffect(() => {
        if (!token ){
            goToLogin(navigate)
            alert(`É necessário estar logado`)
        }
    }, [token, navigate])
}
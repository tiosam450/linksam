import { onAuthStateChanged } from "firebase/auth"
import { ReactNode, useEffect, useState } from "react"
import { auth } from "../services/services"
import { Navigate } from "react-router-dom"

interface Privateprops {
    children: ReactNode
}

export default function Private({ children }: Privateprops): any {
    const [loading, setLoading] = useState(true)
    const [logado, setLogado] = useState(false)

    useEffect(() => {
        const verificaLogin = onAuthStateChanged(auth, (user)=>{
            if(user){
                const dados = {
                    uid: user?.uid,
                    email: user?.email
                }

                localStorage.setItem('dados', JSON.stringify(dados))
                setLoading(false)
                setLogado(true)
            }else{
                setLoading(false)
                setLogado(false)
            }
        })

        return ()=>{
            verificaLogin()
        }
    }, [])

    if(loading){
        return <div>carregando</div>
    }

    if(!logado){
        return <Navigate to="/login"/>
    }

    return children
}
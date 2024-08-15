import { signOut } from "firebase/auth"
import { Link } from "react-router-dom"
import { auth } from "../services/services"

export default function Header() {

    async function logout() {
       await signOut(auth)
    }

    return (
        <header className="w-full py-4 bg-slate-700 flex flex-col items-center ">
            <div className="w-full max-w-[90%] flex justify-between text-white ">
                <div className="flex gap-4">
                    <Link to={'/'}>Home</Link>
                    <Link to={'/links'}>Links</Link>
                </div>
                <h3 onClick={logout} className="cursor-pointer">Sair</h3>
            </div>
        </header>
    )
}
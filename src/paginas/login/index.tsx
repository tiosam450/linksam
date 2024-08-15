import { useState } from "react";
import Input from "../../componentes/Input";
import { FormEvent } from "react";
import { auth } from "../../services/services";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login(){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate()

    function login(e:FormEvent){
        e.preventDefault()
        if(email && senha){
            signInWithEmailAndPassword(auth, email, senha).then(()=>{
                setEmail('')
                setSenha('')
                toast.success('Bem-vindo ao sistema!')
                navigate('/admin', {replace: true})
            }).catch((erro)=>{
                console.log(erro.code)
                if(erro.code == 'auth/invalid-email'){
                    alert('Usuário não cadastrado!')
                }else if(erro.code == 'auth/invalid-credential'){
                    alert('Usuário ou senha inválido')
                }
            })

        }else{
            alert('Preencha todos os campos!')
        }
    }

    return(
        <div className="w-full h-screen flex items-center justify-center">
            <div className="sm:w-[500px] w-11/12 flex flex-col items-center gap-6">
                <h1 className="text-white font-bold text-[3rem] ">LinkSam</h1>
                <form className="w-full max-w-[400px] flex flex-col gap-y-4" onSubmit={login}>
                    <Input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Digite seu email" />
                    <Input type='password' value={senha} onChange={e=>setSenha(e.target.value)} placeholder="Digite sua senha"/>
                    <button className="bg-blue-600 px-10 py-2 text-white text-[1.1rem] rounded-md hover:bg-blue-500 transition-all" >Login</button>
                </form>
            </div>
        </div>
    )
}
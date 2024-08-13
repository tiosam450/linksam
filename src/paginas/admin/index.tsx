import { FormEvent, useEffect, useState } from "react";
import Header from "../../componentes/Header";
import Input from "../../componentes/Input";
import { Link } from "react-router-dom";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../../services/services";
import { toast } from "react-toastify";

interface listaProps {
    id: string
    nome: string
    url: string
    corBotao: string
    corLink: string
    data: string
}


export default function Admin() {
    const [nomeLink, setNomeLink] = useState('')
    const [endLink, setEndLink] = useState('')
    const [corLink, setCorLink] = useState('#ffffff')
    const [corBg, setCorBg] = useState('#3b81f5')
    const [botoes, setBotoes] = useState<listaProps[]>([])

    useEffect(() => {
        const colecao = collection(db, 'links')
        const consulta = query(colecao, orderBy('data', 'asc'))

        const listaBd = onSnapshot(consulta, (itens) => {
            let lista:listaProps[] = [] 

            itens.forEach((doc) => {
                lista.push({
                    id: doc.id,
                    nome: doc.data().nome,
                    url: doc.data().url,
                    corBotao: doc.data().corBotao,
                    corLink: doc.data().corLink,
                    data: doc.data().data
                })
            })
            setBotoes(lista)
        })

        return()=>{
            listaBd()
        }

    }, [])

    // Cadastrar
    async function cadastrar(e: FormEvent) {
        e.preventDefault()
        await addDoc(collection(db, "links"), {
            nome: nomeLink,
            url: endLink,
            corBotao: corBg,
            corLink: corLink,
            data: new Date()
        }).then(() => {
            setNomeLink('')
            setEndLink('')
        }).catch((erro) => {
            toast.error('Ops! Algo deu errado')
            console.log(erro)
        })
    }

    // Deleta
    async function deleta(id: string){
        const docref = doc(db, 'links', id)
        await deleteDoc(docref)
    }

    





    return (
        <>
            <Header />
            <div className="w-full flex flex-col items-center pt-[60px] pb-[30px] ">

                <form className="w-[90%] max-w-[500px] flex flex-col" onSubmit={cadastrar}>
                    <div className="flex flex-col gap-2 mb-[30px]">
                        <label className="text-white"> Nome do botão</label>
                        <Input value={nomeLink} placeholder="Digite o nome do botão" onChange={e => setNomeLink(e.target.value)} />
                    </div>

                    <div className="flex flex-col gap-2 mb-[30px] ">
                        <label className="text-white">Link do botão</label>
                        <Input value={endLink} placeholder="Cole aqui ou digite o link do botão" onChange={e => setEndLink(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-4 mb-[10px]">
                        <label className="text-white">Cor do botão</label>
                        <input type="color" value={corBg} onChange={e => { setCorBg(e.target.value) }} />
                        <label className="text-white">Cor do texto</label>
                        <input type="color" value={corLink} onChange={e => setCorLink(e.target.value)} />
                    </div>
                    {nomeLink !== '' &&
                        <div className="w-full flex flex-col items-center pt-[60px]">
                            <div className="w-[90%] max-w-[500px] flex flex-col mx-auto gap-4">
                                <h2 className="text-white text-center font-bold text-[1.2rem] ">Veja como está ficando:</h2>
                                <Link to={endLink} target="blank" className="self py-[8px] rounded-md text-center text-white" style={{ background: corBg, color: corLink }}>{nomeLink}</Link>
                            </div>
                            <button className="w-[90%] max-w-[500px] bg-emerald-500 hover:bg-emerald-400 py-[8px] rounded-md text-white my-[40px]">Adicionar</button>
                        </div>
                    }
                </form>

            </div>

            <hr className="opacity-25 mb-[30px]" />
            <div className="w-full flex flex-col items-center">
                <div className="w-[90%] max-w-[500px] flex flex-col mx-auto gap-4">
                    <h2 className="text-white text-center font-bold text-[1.2rem] ">Meus links</h2>
                    {botoes.map((item)=>(
                        <div key={item.id} className="w-full flex items-center justify-between py-[8px] mx-auto gap-4 rounded-md px-4"style={{ background: item.corBotao, color: item.corLink }}>
                        <Link to={item.url} target="blank" className="text-white" >{item.nome}</Link>
                        <div className="flex items-center gap-4">
                            <FaRegTrashAlt className="cursor-pointer" onClick={()=>deleta(item.id)} />
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </>
    )
}
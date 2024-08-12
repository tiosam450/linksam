import { useState } from "react";
import Header from "../../componentes/Header";
import Input from "../../componentes/Input";
import { Link } from "react-router-dom";

export default function Admin() {
    const [nomeLink, setNomeLink] = useState('')
    const [endLink, setEndLink] = useState('')
    const [corLink, setCorLink] = useState('#ffffff')
    const [corBg, setCorBg] = useState('#3b81f5')
    console.log(corBg)
    return (
        <>
            <Header />
            <div className="w-full flex flex-col items-center py-[60px] ">

                <div className="w-[90%] max-w-[500px] flex flex-col">
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
                </div>

            </div>

            {nomeLink !== '' &&
                <div className="w-full flex flex-col items-center">
                    <div className="w-[90%] max-w-[500px] flex flex-col mx-auto gap-4">
                        <h2 className="text-white text-center font-bold text-[1.2rem] ">Veja como está ficando:</h2>
                        <Link to={endLink} target="blank" className="self py-[8px] rounded-md text-center text-white" style={{ background: corBg, color: corLink }}>{nomeLink}</Link>
                    </div>
                    <button className="w-[90%] max-w-[500px] bg-emerald-500 hover:bg-blue-500 py-[8px] rounded-md text-white my-[40px]">Adicionar</button>
                </div>
            }
            <hr className="opacity-25 mb-[30px]" />
            <div className="w-full flex flex-col items-center">
                <div className="w-[90%] max-w-[500px] flex flex-col mx-auto gap-4">
                    <h2 className="text-white text-center font-bold text-[1.2rem] ">Meus links</h2>
                </div>
            </div>
        </>
    )
}
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
                        <label className="text-white"> Nome do link</label>
                        <Input value={nomeLink} onChange={e => setNomeLink(e.target.value)} />
                    </div>

                    <div className="flex flex-col gap-2 mb-[30px] ">
                        <label className="text-white"> Endereço do link</label>
                        <Input value={endLink} onChange={e => setEndLink(e.target.value)} />
                    </div>

                    <div className="flex items-center gap-4 mb-[30px]">
                        <label className="text-white">Cor de fundo</label>
                        <input type="color" value={corBg} onChange={e => { setCorBg(e.target.value) }} />
                        <label className="text-white">Cor do link</label>
                        <input type="color" value={corLink} onChange={e => setCorLink(e.target.value)} />
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-500 self py-[8px] rounded-md text-white">Adicionar</button>
                </div>

            </div>

            <hr className="opacity-25" />
            <div className="w-full flex flex-col items-center py-[60px] ">
                <div className="w-[90%] max-w-[500px] flex flex-col mt-60px mx-auto gap-4">
                    <h2 className="text-white ">Veja como está ficando:</h2>
                    <Link to={endLink} target="blank" className="self py-[8px] rounded-md text-center text-white" style={{background: corBg, color: corLink}}>{nomeLink}</Link>
                </div>

            </div>

        </>
    )
}
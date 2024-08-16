import fotoPerfil from '../../assets/img/perfil_samuel_nogueira_small.jpg'
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import { useEffect, useState } from 'react';
import { collection, doc, getDoc, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '../../services/services';

interface ListaProps{
    id: string,
    nome: string,
    url: string,
    corBotao: string,
    corLink: string,
    data: string
}

export default function Home() {
    const [instagram, setInstagram] = useState('')
    const [facebook, setFacebook] = useState('')
    const [linkedin, setLinkedin] = useState('')
    const [botoes, setBotoes] = useState<ListaProps []>([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const docsBotoes = collection(db,'links')
        const consulta = query(docsBotoes, orderBy('data', 'asc'))

        getDocs(consulta).then((item)=>{
            let lista:ListaProps []= []

            item.forEach(doc=>{
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

        // Carrega links sociais
        const docSocial = doc(db, 'linksSociais', 'redesSociais')
        getDoc(docSocial).then((item)=>{
            setInstagram(item.data()?.instagram)
            setFacebook(item.data()?.facebook)
            setLinkedin(item.data()?.linkedin)
        })

        setLoading(false)

    },[])

    if(loading){
        return(
            <div className='w-full h-screen flex justify-center items-center'>
                <h2 className='text-white'>Carregando...</h2>
            </div>
        )
    }

    return (
        <section className=' w-full flex flex-col items-center py-24' >
            <div className='  sm:w-[450px] w-11/12 flex flex-col items-center' >
                <div className='flex items-center flex-col  pb-16 gap-4'>
                    <img className='rounded-full w-28 h-28' src={fotoPerfil} alt="Foto" />
                    <h1 className='font-bold text-[1.2rem] text-white'>Portfólio de sites</h1>
                </div>
                <div className='w-full flex items-center flex-col pb-8'>
                    <div className='w-full flex items-center flex-col gap-4'>
                        {botoes.map((item)=>(
                            <a key={item.id} className='links' target='blank' style={{color:item.corLink, background: item.corBotao, }} href={item.url}>{item.nome}</a>
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-4' >
                    <a href={instagram} className='linkSocial'><FaWhatsapp /></a>
                    <a href={facebook} className='linkSocial'><FaBehance /></a>
                    <a href={linkedin} className='linkSocial'><FaLinkedinIn /></a>
                    
                </div>
            </div>

        </section>
    )
}
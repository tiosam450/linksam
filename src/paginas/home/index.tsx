import fotoPerfil from '../../assets/img/foto_perfil.jpg'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BiLogoFacebook } from "react-icons/bi";


export default function Home() {

    return (
        <section className=' w-100 h-screen flex flex-col items-center py-24' >
            <div className='  sm:w-[450px] w-11/12 h-screen flex flex-col items-center' >
                <div className='flex items-center flex-col  pb-16 gap-4'>
                    <img className='rounded-full w-28 h-28' src={fotoPerfil} alt="Foto" />
                    <h1 className='font-bold text-[1.2rem] text-white'>@samuelnogueira</h1>
                </div>
                <div className='w-full flex items-center flex-col pb-8'>
                    <div className='w-full flex items-center flex-col gap-4'>
                        <a className='links'>Link1</a>
                        <a className='links'>Link2</a>
                        <a className='links'>Link3</a>
                        <a className='links'>Link4</a>
                    </div>
                </div>
                <div className='flex items-center gap-4' >
                    <a href="" className='linkSocial'><FaInstagram /></a>
                    <a href="" className='linkSocial'><BiLogoFacebook /></a>
                    <a href="" className='linkSocial'><FaLinkedinIn /></a>
                    
                </div>
            </div>

        </section>
    )
}
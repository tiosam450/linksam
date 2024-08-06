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
                        <a className='w-full flex flex-col py-3 rounded-lg bg-slate-300 text-center font-medium text-[1.2rem] hover:scale-[1.02] transition duration-[.2s] ease-in-out hover:bg-slate-50'>Link1</a>
                        <a className='w-full flex flex-col py-3 rounded-lg bg-slate-300 text-center font-medium text-[1.2rem] hover:scale-[1.02] transition duration-[.2s] ease-in-out hover:bg-slate-50'>Link1</a>
                        <a className='w-full flex flex-col py-3 rounded-lg bg-slate-300 text-center font-medium text-[1.2rem] hover:scale-[1.02] transition duration-[.2s] ease-in-out hover:bg-slate-50'>Link1</a>
                        <a className='w-full flex flex-col py-3 rounded-lg bg-slate-300 text-center font-medium text-[1.2rem] hover:scale-[1.02] transition duration-[.2s] ease-in-out hover:bg-slate-50'>Link1</a>
                    </div>
                </div>
                <div className='flex items-center gap-4' >
                    <a href="" className='text-slate-300 text-[2rem] hover:text-slate-50 hover:scale-[1.02] transition duration-[.2s] ease-in-out'><FaInstagram /></a>
                    <a href="" className='text-slate-300 text-[2rem] hover:text-slate-50 hover:scale-[1.02] transition duration-[.2s] ease-in-out'><BiLogoFacebook /></a>
                    <a href="" className='text-slate-300 text-[2rem] hover:text-slate-50 hover:scale-[1.02] transition duration-[.2s] ease-in-out'><FaLinkedinIn /></a>
                    
                </div>
            </div>

        </section>
    )
}
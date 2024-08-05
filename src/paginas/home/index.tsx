import fotoPerfil from '../../assets/img/foto_perfil.jpg'

export default function Home(){

    return(
        <section className=' w-100 h-screen flex justify-center py-48'>
        <div>
        <img className='rounded-full w-32 h-32;
        ' src={fotoPerfil} alt="" />
        </div>
        </section>
    )
}

export default function Login(){

    return(
        <div className="w-full h-screen flex items-center justify-center">
            <div className="sm:w-[500px] w-11/12 flex flex-col items-center gap-6">
                <h1 className="text-white font-bold text-[3rem] ">LinkSam</h1>
                <form className="flex flex-col">
                    <input type="text" />
                    <button className="bg-blue-600 px-10 py-1 text-white" >Login</button>
                </form>
            </div>
        </div>
    )
}
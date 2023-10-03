
export const NavBar = () =>
{
    return (
        <>
            <div className="flex w-full justify-center items-center bg-blue-600 text-white p-6 pl-20 ">
                <h1 className="text-3xl font-semibold  ">DEMO Streaming</h1>
                <div className="ml-auto pr-20">
                    <ul className="flex justify-center items-center ">
                        <li className="font-medium mr-10">Log In</li>
                        <li className="bg-slate-800 p-2 ">Start your free trial</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

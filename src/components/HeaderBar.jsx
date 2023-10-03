
// eslint-disable-next-line react/prop-types
export const HeaderBar = ( { title } ) =>
{
    return (
        <>
            <div className="flex w-full  bg-slate-800 text-white p-2 pl-20 ">
                <div className="text-2xl font-medium">{ title }</div>
                
            </div>

        </>

    )
}

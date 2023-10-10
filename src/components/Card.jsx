/* eslint-disable react/prop-types */
export const Card = ( { imageUrl, title, releaseYear } ) =>
{
    return (
        <div className="bg-slate-800 hover:bg-slate-300 text-white hover:text-black  p-0.5  ">
            <img className="hover:opacity-40" src={ imageUrl } alt="" />
            <p className="text-center font-medium">{ title }</p>
            <p className="text-center font-medium">{ releaseYear }</p>
        </div>
    );
};

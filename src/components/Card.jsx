/* eslint-disable react/prop-types */
export const Card = ( { imageUrl, title } ) =>
{
    return (
        <div>
            <img src={ imageUrl } alt="" />
            <p>{ title }</p>
        </div>
    );
};

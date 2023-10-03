export const filterAndSortMovies = ( data ) =>
{
    const filteredData = data.filter( ( entry ) =>
    {
        return entry.programType === 'movie' //&& entry.releaseYear >= 2010;
    } );

    const sortedData = filteredData.sort( ( a, b ) =>
    {
        return a.title.localeCompare( b.title );
    } );

    return sortedData;
};


const imageExists = ( url ) =>
{
    const img = new Image();
    img.src = url;
    return img.complete && img.height !== 0;
};

export const filterMoviesWithValidImages = ( movies ) =>
{
    return movies.filter( ( entry ) =>
    {
        const imageUrl = entry.images[ "Poster Art" ].url;
        return imageExists( imageUrl );
    } );
};




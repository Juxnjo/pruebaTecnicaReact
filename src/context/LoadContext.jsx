export const LoadContext = ( { loading } ) =>
{

  if ( loading )
  {
    return <div className="flex justify-center items-center h-screen w-full text-5xl font-medium">Loading...</div>
  }
  return null
}

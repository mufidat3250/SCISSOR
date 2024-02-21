const Notfound = () => {

    return (
        <div className='h-screen grid place-items-center'>
            <div className=' w-[50%] max-w-[50%] shadow-2xl bg-gray-300 h-[50%] grid place-items-center py-6 rounded-lg'>
            <h1 className=' text-3xl'>Whoops!</h1>
            <p className='text text-base font-bold'>404 Page not Found</p>
            <img src="Images/404 img.png" alt=""  />
            <h1>Looks like this page went on vacation</h1>
            <p className='text-red-500'>You have to be signed in to view this page</p>
            <p> Try our <span>homepage</span> instead </p>
        </div>
        </div>
    )
}

export default Notfound

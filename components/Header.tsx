'use client'
import React from 'react';


const Header = () => {
    const [isAuth, setIsAuth] = React.useState<boolean>(false)
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.isAuth) setIsAuth(Boolean(parseInt(localStorage.isAuth)))
        }
    }, [typeof window])


    const logOut = () => {
        localStorage.setItem('isAuth', '0')
        window.location.reload()
    }

    return (
        <header className="bg-teal-800 text-gray-50 w-full h-14 px-24 xl:px-20 lg:px-14 md:px-10 sm:px-7 ">
            <div className="w-full py-2.5 flex flex-row justify-end">
                {isAuth
                    ? <div>
                        <button onClick={logOut}
                                className="flex w-full justify-center rounded-md bg-white px-3 py-1.5 text-sm/6 font-semibold text-teal-700 shadow-sm hover:bg-teal-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                            Log out
                        </button>
                    </div>
                    : <></>
                }
            </div>
        </header>
    );
};

export default Header;


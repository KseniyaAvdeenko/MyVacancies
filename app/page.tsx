"use client"
import React from "react";
import SignInForm from "@/components/SignInForm";
import axios from "axios";
import VacancyList from "@/components/VacancyList";
import {Base64} from "js-base64";

const Home = () => {
    const [isAuth, setIsAuth] = React.useState<boolean>(false)
    const [user, setUser] = React.useState<{ name: string, password: string }>({name: '', password: ''})

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        try {
            const response = await axios.post(window.location.href + 'api/auth', JSON.stringify(user));
            response.data
                ? localStorage.setItem('isAuth', '1')
                : localStorage.setItem('isAuth', '1')
        } catch (e) {
            console.log(e)
        }
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setUser({
        ...user,
        [e.target.name]: e.target.name === 'password'?Base64.encode(e.target.value): e.target.value
    })
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            if (localStorage.isAuth) setIsAuth(Boolean(parseInt(localStorage.isAuth)))
        }
    }, [typeof window])

    return !isAuth ? (
        <div
            className="flex flex-row justify-center items-center sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                {

                    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-100">
                                Sign in to your account
                            </h2>
                        </div>

                        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <SignInForm user={user} onSubmitHandler={onSubmitHandler}
                                        onChangeHandler={onChangeHandler}/>
                        </div>
                    </div>
                }
            </main>
        </div>
    ) : (<VacancyList/>);
}
export default Home;
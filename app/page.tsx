import SignInForm from "@/components/SignInForm";
import VacancyList from "@/components/VacancyList";
import {cookies} from "next/headers";
import VacancyService from "@/service/VacancyService";

const Home = async () => {
    const cookieStore = await cookies()
    const isAuthCookies = cookieStore.get('isAuth')
    const isAuth = isAuthCookies && isAuthCookies.value ? JSON.parse(isAuthCookies.value) : false


    return !isAuth ? (
        <div
            className="flex flex-row justify-center items-center sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-100">
                            Sign in to your account
                        </h2>
                    </div>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <SignInForm/>
                    </div>
                </div>
            </main>
        </div>
    ) : (<VacancyList/>);
}
export default Home;
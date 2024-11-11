import React, {FC} from 'react';

interface ISingProps {
    user: { name: string, password: string }
    onSubmitHandler: Function
    onChangeHandler: Function
}

const SignInForm: FC<ISingProps> = ({user, onSubmitHandler, onChangeHandler}) => {
    return (
        <form method="POST" className="space-y-6" onSubmit={e => onSubmitHandler(e)}>
            <div>
                <label htmlFor="name" className="block text-sm/6 font-medium text-gray-100">
                    Login
                </label>
                <div className="mt-2">
                    <input
                        id="name"
                        name="name"
                        type="name"
                        value={user.name}
                        required
                        autoComplete="name"
                        onChange={e=>onChangeHandler(e)}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div>
                <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                        Password
                    </label>
                </div>
                <div className="mt-2">
                    <input
                        id="password"
                        name="password"
                        type="password"
                        required
                        value={user.password}
                        autoComplete="current-password"
                        onChange={e=>onChangeHandler(e)}
                        className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                    />
                </div>
            </div>

            <div>
                <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-teal-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                >
                    Sign in
                </button>
            </div>
        </form>
    );
};

export default SignInForm;

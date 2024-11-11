import React from 'react';

interface IInputContainerProps {
    id: string;
    label: string;
    name: string;
    inputType: string;
    onChangeHandler: Function;
    value: string;
}

const InputContainer: React.FC<IInputContainerProps> = ({onChangeHandler,id,value, label, name, inputType}) => {
    return (
        <div className="my-2">
            <div className="flex items-center justify-between">
                <label htmlFor={id} className="block text-sm/6 font-medium text-gray-100">
                    {label}
                </label>
            </div>
            <div className="mt-2">
                <input
                    id={id}
                    name={name}
                    type={inputType}
                    value={value}
                    onChange={e=> onChangeHandler(e)}
                    className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm/6"
                />
            </div>
        </div>
    );
};

export default InputContainer;

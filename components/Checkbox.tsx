import React, {FC} from "react";

interface ICheckBoxProps {
    id: string;
    label: string;
    name: string;
    checked: boolean;
    onChangeHandler: Function
}
const Checkbox: FC<ICheckBoxProps> = ({id, label, name, checked, onChangeHandler}) => {
    return (
        <div className="flex flex-col items-center my-2">
            <div className="flex items-center justify-between">
                <label htmlFor={id} className="block text-sm/6 font-medium text-gray-100">
                    {label}
                </label>
            </div>
            <div className="mt-2">
                <input
                    id={id}
                    name={name}
                    type="checkbox"
                    checked={checked}
                    onChange={e=> onChangeHandler(e)}
                    className="block rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm/6"
                />
            </div>
        </div>
    );
};

export default Checkbox;

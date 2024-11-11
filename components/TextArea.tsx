import React, {FC} from "react";

interface ITextAreaProps {
    id: string;
    label: string;
    name: string;
    onChangeHandler: Function;
    value: string;
    rows: number;
    placeholder:string;
}

const TextArea: FC<ITextAreaProps> = ({placeholder, id, label, onChangeHandler, value, name, rows}) => {
    return (
        <div className="my-2">
            <div className="flex items-center justify-between">
                <label htmlFor={id} className="block text-sm/6 font-medium text-gray-100">
                    {label}
                </label>
            </div>
            <div className="mt-2">
                <textarea name={name} id={id}
                          cols="30" rows={rows} value={value}
                          onChange={e => onChangeHandler(e)}
                          style={{resize:'none'}}
                          placeholder={placeholder}
                          className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm/6"
                >
                </textarea>
            </div>
        </div>
    );
};

export default TextArea;

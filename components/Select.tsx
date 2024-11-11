import React from 'react';
import {IVacancyStatus} from "@/interface/IVacancy";


interface ISelectProps {
    value: string;
    vacancyStatus: IVacancyStatus[];
    onChangeHandler: Function;
    id: string;
    name: string;

}

const Select: React.FC<ISelectProps> = ({
                                            value,
                                            vacancyStatus,
                                            onChangeHandler,
                                            id,
                                            name
                                        }) => {
    return (
        <div className="flex flex-row justify-center items-center w-full">
            <select value={value} className="w-full text-gray-600 p-1.5 rounded-md" name={name} id={id} onChange={e=>onChangeHandler(e)}>
                {vacancyStatus.map(status=>(
                    <option
                        key={status.status}
                        value={status.status}
                        style={{background: status.color}}
                    >{status.status}</option>
                ))}
            </select>
        </div>
    );
};

export default Select;

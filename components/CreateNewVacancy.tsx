'use client'
import React, {useState} from 'react';
import {IVacancy, IVacancyStatus, Status} from "@/interface/IVacancy";
import InputContainer from "@/components/InputContainer";
import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";
import VacancyService from "@/service/VacancyService";
import TextArea from "@/components/TextArea";

interface ICreateNewVacancyProps {
    vacancyStatus: IVacancyStatus[]
}

const CreateNewVacancy: React.FC<ICreateNewVacancyProps> = ({vacancyStatus}) => {
    const vacancyService = new VacancyService()
    const [formVisibility, setFormVisibility] = useState<boolean>(false)
    const [newVacancy, setNewVacancy] = useState<IVacancy>({
        company: '',
        interview: '',
        testTaskNotes: '',
        status: 'Unwatched',
        date: '',
        city: '',
        isTestTask: false,
        salary: '',
        id: 0
    })


    const createNew = async () => {
        if (formVisibility) {
            const vacancy = structuredClone(newVacancy)
            vacancy.id = Date.parse(new Date().toISOString())
            await vacancyService.createVacancy(vacancy)
            setNewVacancy({
                company: '',
                interview: '',
                testTaskNotes: '',
                status: 'Unwatched',
                date: '',
                city: '',
                isTestTask: false,
                salary: '',
                id: 0
            })
            window.location.reload()
        } else {
            setFormVisibility(true)
        }

    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setNewVacancy({
            ...newVacancy,
            [e.target.name]: e.target.type === 'checkbox' ? e.target.checked : e.target.value
        })
    }


    return (
        <div className="m-6">
            <div className="grid grid-cols-4 auto-rows-min gap-x-2.5 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1" style={{display: formVisibility ? 'grid' : 'none'}}>
                <InputContainer id={'company'} label={'Company'} name={'company'} inputType={'text'}
                                onChangeHandler={onChangeHandler} value={newVacancy.company}/>
                <InputContainer id={'city'} label={'City'} name={'city'} inputType={'text'}
                                onChangeHandler={onChangeHandler} value={newVacancy.city}/>
                <InputContainer id={'salary'} label={'Salary'} name={'salary'} inputType={'text'}
                                onChangeHandler={onChangeHandler} value={newVacancy.salary}/>
                <InputContainer id={'date'} label={'Date'} name={'date'} inputType={'date'}
                                onChangeHandler={onChangeHandler} value={newVacancy.date}/>
                <Select
                    vacancyStatus={vacancyStatus}
                    value={newVacancy.status}
                    id={'status'}
                    name={'status'}
                    onChangeHandler={onChangeHandler}
                />
                <Checkbox id={'isTestTask'} label={'Test task'}
                          name={'isTestTask'} checked={newVacancy.isTestTask}
                          onChangeHandler={onChangeHandler}/>
                <TextArea id={'testTaskNotes'} label={'Test task notes'}
                          placeholder={'Test task notes'}
                          name={'testTaskNotes'} rows={4}
                          onChangeHandler={onChangeHandler}
                          value={newVacancy.testTaskNotes}/>
                <TextArea id={'interview'} label={'Interview'}
                          name={'interview'} rows={4}
                          placeholder={'Interview'}
                          onChangeHandler={onChangeHandler}
                          value={newVacancy.interview}/>
            </div>
            <button onClick={createNew}
                    className="flex w-full justify-center rounded-md bg-teal-900 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-teal-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
                Create new vacancy
            </button>
        </div>
    );
};

export default CreateNewVacancy;

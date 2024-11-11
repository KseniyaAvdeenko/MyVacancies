"use client"
import React, {FC, useEffect, useState, ChangeEvent} from 'react';
import {IVacancy, IVacancyStatus, Status} from "@/interface/IVacancy";
import VacancyService from "@/service/VacancyService";
import CreateNewVacancy from "@/components/CreateNewVacancy";
import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";
import InputContainer from "@/components/InputContainer";
import TextArea from "@/components/TextArea";
import TBody from "@/components/TBody";
import {getDate} from "@/utils/getDate";
import InlineTabs from "@/components/InlineTabs";
import VacanciesTable from "@/components/VacanciesTable";

const vacancyService = new VacancyService()

function VacancyList() {
    const [vacancies, setVacancies] = useState([])
    const [vacancyStatus, setVacancyStatus] = useState([])
    const [watchedTable, setWatchedTable] = useState(true);
    const [unWatchedTable, setUnWatchedTable] = useState(false);
    const [rejectedTable, setRejectedTable] = useState(false)
    const [archivedTable, setArchivedTable] = useState(false)

    useEffect(() => {
        vacancyService.getVacancies().then(result => setVacancies(result));
        vacancyService.getStatus().then(result => setVacancyStatus(result))
    }, [])

    const getVacancyStatusColor = (status: Status) => vacancyStatus && vacancyStatus.find(el => el.status == status)

    const onChangeUpdateHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id.split('*')[1])
        const vacancy = structuredClone(vacancies.find(el => el.id === id));
        vacancy[e.target.name] = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        await vacancyService.updateVacancy(id, vacancy)
        window.location.reload()
    }

    return (
        <div className="w-full px-24 xl:px-20 lg:px-14 md:px-10 sm:px-7 " style={{height: 'calc(100vh - 56px)'}}>
            <main className="flex flex-col w-full py-10 h-full">
                <CreateNewVacancy vacancyStatus={vacancyStatus}/>
                <div className="flex flex-col w-full h-full">
                    <InlineTabs
                        watchedTable={watchedTable}
                        unWatchedTable={unWatchedTable}
                        rejectedTable={rejectedTable}
                        archivedTable={archivedTable}
                        setWatchedTable={setWatchedTable}
                        setUnWatchedTable={setUnWatchedTable}
                        setRejectedTable={setRejectedTable}
                        setArchivedTable={setArchivedTable}
                    />
                    <div className="border-b border-teal-900 grid grid-cols-4 gap-x-2.5 place-items-center w-full auto-rows-min py-2 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 ">
                        <p>UnwatchedVacancies: {vacancies.filter(el => el.status === 'Unwatched').length}</p>
                        <p>WatchedVacancies: {vacancies.filter(el => el.status === 'Watched').length}</p>
                        <p>RejectedVacancies: {vacancies.filter(el => el.status === 'Rejected').length}</p>
                        <p>ArchivedVacancies: {vacancies.filter(el => el.status === 'Archived').length}</p>
                    </div>
                    <div className="flex flex-col w-full h-full">
                        <VacanciesTable
                            tableVisibility={unWatchedTable}
                            onChangeUpdateHandler={onChangeUpdateHandler}
                            vacancies={vacancies.filter(el => el.status === 'Unwatched')}
                            getVacancyStatusColor={getVacancyStatusColor}
                            vacancyStatus={vacancyStatus}
                        />
                        <VacanciesTable
                            tableVisibility={watchedTable}
                            onChangeUpdateHandler={onChangeUpdateHandler}
                            vacancies={vacancies.filter(el => el.status === 'Watched')}
                            getVacancyStatusColor={getVacancyStatusColor}
                            vacancyStatus={vacancyStatus}
                        />
                        <VacanciesTable
                            tableVisibility={rejectedTable}
                            onChangeUpdateHandler={onChangeUpdateHandler}
                            vacancies={vacancies.filter(el => el.status === 'Rejected')}
                            getVacancyStatusColor={getVacancyStatusColor}
                            vacancyStatus={vacancyStatus}
                        />
                        <VacanciesTable
                            tableVisibility={archivedTable}
                            onChangeUpdateHandler={onChangeUpdateHandler}
                            vacancies={vacancies.filter(el => el.status === 'Archived')}
                            getVacancyStatusColor={getVacancyStatusColor}
                            vacancyStatus={vacancyStatus}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
};

export default VacancyList;

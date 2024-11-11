"use client"
import React, {FC, useEffect, useState, ChangeEvent} from 'react';
import {IVacancy, IVacancyStatus, Status} from "@/interface/IVacancy";
import VacancyService from "@/service/VacancyService";
import CreateNewVacancy from "@/components/CreateNewVacancy";
import InlineTabs from "@/components/InlineTabs";
import VacanciesTable from "@/components/VacanciesTable";

const vacancyService = new VacancyService()

function VacancyList() {
    const [vacancies, setVacancies] = useState<IVacancy[]>([])
    const [vacancyStatus, setVacancyStatus] = useState<IVacancyStatus[]>([])
    const [watchedTable, setWatchedTable] = useState(false);
    const [unWatchedTable, setUnWatchedTable] = useState(true);
    const [rejectedTable, setRejectedTable] = useState(false)
    const [archivedTable, setArchivedTable] = useState(false)

    useEffect(() => {
        vacancyService.getVacancies().then((result: IVacancy[]) => setVacancies(result))
        vacancyService.getStatus().then((result: IVacancyStatus[]) => setVacancyStatus(result))
    }, [])

    const getVacancyStatusColor = (status: Status) => {
        const vacStatus: IVacancyStatus|null = vacancyStatus.find(el => el.status == status)??null
        if(vacancyStatus && vacStatus) vacStatus.color
    }

    const onChangeUpdateHandler = async (e: ChangeEvent<HTMLInputElement>) => {
        const id = parseInt(e.target.id.split('*')[1])
        const key: keyof IVacancy = e.target.name as keyof IVacancy;
        setVacancies(vacancies => vacancies.map(el => (
            el.id === id
                ? {...el, [key]: e.target.type === 'checkbox' ? e.target.checked : e.target.value}
                : el
        )))
        const vacancy: IVacancy | null = structuredClone(vacancies.find(el => el.id === id)) ?? null;
        if (vacancy) {
            if(key === 'isTestTask'){
                vacancy['isTestTask'] = e.target.checked as boolean
            }else if(key === 'testTaskNotes'){
                vacancy['testTaskNotes'] = e.target.value as string
            }else if(key === 'interview'){
                vacancy['interview'] = e.target.value as string
            }else if(key === 'status'){
                vacancy['status'] = e.target.value as Status
            }
            await vacancyService.updateVacancy(id, vacancy)
            window.location.reload()
        }
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
                    <div
                        className="border-b border-teal-900 grid grid-cols-4 gap-x-2.5 place-items-center w-full auto-rows-min py-2 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 ">
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

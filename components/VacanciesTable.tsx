import React, {FC} from 'react';
import TBody from "@/components/TBody";
import {getDate} from "@/utils/getDate";
import Select from "@/components/Select";
import Checkbox from "@/components/Checkbox";
import TextArea from "@/components/TextArea";
import {IVacancy, IVacancyStatus} from "@/interface/IVacancy";

interface IWatchedAndUnwatchedProps {
    onChangeUpdateHandler: Function;
    vacancies: IVacancy[];
    getVacancyStatusColor: Function;
    tableVisibility: boolean;
    vacancyStatus: IVacancyStatus[];

}

const VacanciesTable: FC<IWatchedAndUnwatchedProps> = ({
                                                           vacancyStatus,
                                                           onChangeUpdateHandler,
                                                           vacancies,
                                                           getVacancyStatusColor,
                                                           tableVisibility
                                                       }) => {
    return (
        <section className="grid w-full px-2 h-full grid-cols-1 auto-rows-max gap-px mt-6"
                 style={{display: tableVisibility ? 'grid' : 'none'}}>
            <TBody/>
            {vacancies && vacancies.map(vac => (
                <div key={vac.id}
                     style={{background: getVacancyStatusColor(vac.status) ? getVacancyStatusColor(vac.status) : 'transparent'}}
                     className="grid w-full grid-cols-8 gap-x-0.5 justify-items-center text-white sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-8">
                    <div className="p-1">{vac.company}</div>
                    <div className="p-1">{vac.salary}</div>
                    <div className="p-1">{vac.city}</div>
                    <div className="p-1">{getDate(vac.date)}</div>
                    <div className="p-1">
                        <Select value={vac.status}
                                vacancyStatus={vacancyStatus}
                                onChangeHandler={onChangeUpdateHandler}
                                id={'status*' + vac.id} name={'status'}/>
                    </div>
                    <div className="p-1">
                        {vac.status === 'Rejected' || vac.status === 'Archived'
                            ? <div className="p-1">{vac.isTestTask ? 'yes' : 'no'}</div>
                            : <Checkbox id={'isTestTask*' + vac.id} label={''}
                                        name={'isTestTask'} checked={vac.isTestTask}
                                        onChangeHandler={onChangeUpdateHandler}/>
                        }
                    </div>
                    <div className="p-1">
                        {vac.status === 'Rejected' || vac.status === 'Archived'
                            ? <div className="p-1">{vac.testTaskNotes}</div>
                            : <TextArea
                                id={'testTaskNotes*' + vac.id}
                                label={''} name={'testTaskNotes'} rows={3}
                                onChangeHandler={onChangeUpdateHandler}
                                value={vac.testTaskNotes}
                                placeholder={'Test task notes'}
                            />
                        }
                    </div>
                    <div className="p-1">
                        {vac.status === 'Rejected' || vac.status === 'Archived'
                            ? <div className="p-1">{vac.interview}</div>
                            : <TextArea
                                id={'interview*' + vac.id}
                                rows={3} label={''} placeholder={'Interview'}
                                name={'interview'}
                                onChangeHandler={onChangeUpdateHandler}
                                value={vac.interview}/>
                        }
                    </div>
                </div>
            ))}
        </section>
    );
};

export default VacanciesTable;

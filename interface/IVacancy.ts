export interface IVacancy {
    id: number;
    company: string;
    salary: string;
    city: string;
    date: string;
    status: Status
    isTestTask: boolean;
    testTaskNotes: string;
    interview: string;
}

export type Status = 'Watched' | 'Unwatched' | 'Rejected' | 'Archived';


export interface IVacancyStatus {
    status: Status,
    color: string
}
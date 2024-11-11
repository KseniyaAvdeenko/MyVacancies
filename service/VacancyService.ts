import axios from "axios";
import {IVacancy, IVacancyStatus, Status} from "@/interface/IVacancy";

class VacancyService {
    async getVacancies() {
        const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + 'api/vacancies')
        const data: IVacancy[] = response.data;
        return data;
    }

    async getStatus() {
        const response = await axios.get(process.env.NEXT_PUBLIC_BASE_URL + 'api/status')
        const data: IVacancyStatus[] = response.data
        return data;
    }

    async createVacancy(data: IVacancy) {
        try {
            return await axios.post<IVacancy>(process.env.NEXT_PUBLIC_BASE_URL + 'api/vacancies', JSON.stringify(data)).then(response => response.data);
        } catch (e) {
            console.log(e)
            return null
        }
    }

    async updateVacancy(id: number, data: IVacancy) {
        try {
            return await axios.put<IVacancy>(process.env.NEXT_PUBLIC_BASE_URL + 'api/vacancies/' + id, JSON.stringify(data)).then(response => response.data);
        } catch (e) {
            console.log(e)
            return null
        }
    }
}


export default VacancyService;
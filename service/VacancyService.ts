import axios from "axios";
import {IVacancy, IVacancyStatus, Status} from "@/interface/IVacancy";

class VacancyService {
    async getVacancies() {
        const response = await axios.get( 'api/vacancies')
        const data: IVacancy[] = response.data;
        return data;
    }

    async getStatus() {
        const response = await axios.get('api/status')
        const data: IVacancyStatus[] = response.data
        return data;
    }

    async createVacancy(data: IVacancy) {
        try {
            return await axios.post<IVacancy>('api/vacancies', JSON.stringify(data)).then(response => response.data);
        } catch (e) {
            console.log(e)
            return null
        }
    }

    async updateVacancy(id: number, data: IVacancy) {
        try {
            return await axios.put<IVacancy>('api/vacancies/' + id, JSON.stringify(data)).then(response => response.data);
        } catch (e) {
            console.log(e)
            return null
        }
    }
}


export default VacancyService;
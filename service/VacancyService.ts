import axios from "axios";
import {IVacancy, IVacancyStatus, Status} from "@/interface/IVacancy";

class VacancyService {
    async getVacancies(){
        return await axios.get<IVacancy[]>(process.env.NEXT_PUBLIC_BASE_URL + 'api/vacancies').then(response => response.data);
    }
    async getStatus(){
         try{
            return await axios.get<IVacancyStatus[]>(process.env.NEXT_PUBLIC_BASE_URL + 'api/status').then(response => response.data);
        }catch (e) {
            console.log(e)
            return null
        }
    }
    async createVacancy(data: IVacancy){
         try{
            return await axios.post<IVacancy>(process.env.NEXT_PUBLIC_BASE_URL + 'api/vacancies', JSON.stringify(data)).then(response => response.data);
        }catch (e) {
            console.log(e)
            return null
        }
    }
    async updateVacancy(id: number, data: IVacancy){
         try{
            return await axios.put<IVacancy>(process.env.NEXT_PUBLIC_BASE_URL + 'api/vacancies/' + id, JSON.stringify(data)).then(response => response.data);
        }catch (e) {
            console.log(e)
            return null
        }
    }
}


export default VacancyService;
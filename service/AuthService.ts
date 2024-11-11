import axios from "axios";

class AuthService {
    async login(user: {name: string, password: string}){
       return await axios.post(process.env.NEXT_PUBLIC_BASE_URL + 'api/auth/login', JSON.stringify(user))
    }
    async logout(){
       return await axios.post(process.env.NEXT_PUBLIC_BASE_URL + 'api/auth/logout')
    }
}
export default AuthService;
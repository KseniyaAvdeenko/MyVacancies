import axios from "axios";

class AuthService {
    async login(user: {name: string, password: string}){
       return await axios.post('api/auth/login', JSON.stringify(user))
    }
    async logout(){
       return await axios.post('api/auth/logout')
    }
}
export default AuthService;
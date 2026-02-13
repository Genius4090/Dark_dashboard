import axios from "axios";
import { BaseUrl } from "../components/BaseUrl";


const instance = () => axios.create({baseURL: BaseUrl})

export default instance()
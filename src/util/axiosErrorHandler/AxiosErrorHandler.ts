import { isAxiosError } from "axios";

const axiosErrorHandler = (error: unknown) => {

    if(isAxiosError(error)) {
        return error.message
    } else {
        return "An expected error"
    }
}

export default axiosErrorHandler;
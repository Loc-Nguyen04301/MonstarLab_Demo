import { AxiosResponse } from 'axios';
import { LoginDataDef } from '../types/auth.types';
import api from '@/api';
import { AuthEndpointsEnum } from '@/features/auth/constants/auth.endpoints';

const logIn = (data: LoginDataDef): Promise<AxiosResponse> => {
    return api.post(AuthEndpointsEnum.LOGIN, data)
}

const authApi = {
    logIn
}

export default authApi
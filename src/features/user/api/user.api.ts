import { AxiosResponse } from 'axios';
import api from '@/api';
import { AuthEndpointsEnum } from '@/features/auth/constants/auth.endpoints';
import { UserPathsEnum } from '@/features/user/constants/user.paths';
import { UserEndpointsEnum } from '@/features/user/constants/user.endpoints';

const fetchListUsers = (): Promise<AxiosResponse> => {
    return api.get(UserEndpointsEnum.USER)
}

const userApi = {
    fetchListUsers
}

export default userApi
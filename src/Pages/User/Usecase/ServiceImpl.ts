export interface UserApi {
    getUserRandom: (params?: any) => Promise<any>;
}

export interface UserUseCase {
    getUserRandom: (params?: any) => Promise<any>;
}

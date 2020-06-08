export interface IUser {
    _id?: string;
    fullname: string;
    username: string;
    password: string;
    email: string;
}

export interface ICredentials {
    client_id: string;
    client_secret: string;
    email: string;
    password: string;
}

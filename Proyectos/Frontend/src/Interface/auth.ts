export interface LoginForm {
    email: string;
    password: string;
}

export interface RegisterForm {
    name: string;
    email: string;
    password: string;
    phone: string;
    city: string;
    address: string;
    logo?: FileList;
    id_type_workshop: string;
    passwordConfirmation?: string;
    id_suscription?: string;
}


export interface User {
    id: string;
    name?: string;
    email?: string;
    phone?: string;
    city?: string;
    address?: string;
    logo?: string;
    suscription?: boolean;
    token?: string;
    id_type_workshop?: string;
    exp?: number; 
    modules?: string;
}



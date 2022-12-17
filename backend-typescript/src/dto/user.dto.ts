export interface createUserDto {
    firstName?: string;
    lastName?: string;
    password: string;
    email: string;
    education: string;
    role: string,
    filedOfInterest: String;
    permissionFlags?: number;
}
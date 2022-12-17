export interface createUserDto {
    firstName?: string;
    lastName?: string;
    password: string;
    email: string;
    education: string;
    filedOfInterest: String;
    permissionFlags?: number;
}
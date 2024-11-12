export type DoctorResponse = {
    id: string,
    name: string,
    crm: string,
    specialty: string
}

export interface IDoctorsRepository {
    getAllDoctors(): Promise<DoctorResponse[]>
}
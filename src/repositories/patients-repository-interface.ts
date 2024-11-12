export type Patient = {
    name: string,
    phone: string,
    cpf: string
}

export interface IPatientsRepository {
    create(data: Patient): Promise<void>
}
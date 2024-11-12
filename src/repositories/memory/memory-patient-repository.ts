import { IPatientsRepository } from "../patients-repository-interface";

type Patient = {
    name: string,
    phone: string,
    cpf: string,
}

export class MemoryPatientRepository implements IPatientsRepository {
    public patients: Patient[] = []

    async create(data: { name: string; phone: string; cpf: string; }): Promise<void> {
        const patient: Patient = {
            name: data.name,
            phone: data.phone,
            cpf: data.cpf,
        }

        this.patients.push(patient)
    }
} 
import { MemoryPatientRepository } from "../repositories/memory/memory-patient-repository";
import { CreatePatient } from "./create-patient";

let memoryRepository: MemoryPatientRepository
let sut: CreatePatient

describe('Create Patient', () => {
    beforeEach(() => {
        memoryRepository = new MemoryPatientRepository()
        sut = new CreatePatient(memoryRepository)
    })

    it('must create a patient', async () => {
        const patient = await sut.handle({
            name: "La cucaracha 2",
            phone: "5581912345678",
            cpf: "14590021344"
        })

        expect(patient).toBe('Paciente registrado!')
    })
})
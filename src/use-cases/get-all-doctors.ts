import { IDoctorsRepository } from "../repositories/doctors-repository-interface";

export class GetAllDoctors {
    constructor (private doctorsRepository: IDoctorsRepository) {}

    async handle() {
        const result = await this.doctorsRepository.getAllDoctors()
        return result
    }
}
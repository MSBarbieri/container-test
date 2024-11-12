import { createConn } from "../../pg-connection";
import { DoctorResponse, IDoctorsRepository } from "./doctors-repository-interface";

export class DoctorsRepository implements IDoctorsRepository {
    async getAllDoctors(): Promise<DoctorResponse[]> {
        const connection = await createConn()
        const doctors = await connection.query(
            `SELECT * FROM doctors`
        )
        return doctors.rows
    }
}
import { randomUUID } from "crypto"
import { createConn } from "../../pg-connection"
import { IPatientsRepository, Patient } from "./patients-repository-interface"

export class PatientsRepository implements IPatientsRepository {
    async create({ name, phone, cpf }: Patient) {
        const connection = await createConn()
        await connection.query(
            `INSERT INTO patients VALUES($1, $2, $3, $4)`,
            [randomUUID(), name, phone, cpf])
    }
}
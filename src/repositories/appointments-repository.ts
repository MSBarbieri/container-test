import { randomUUID } from "crypto";
import { createConn } from "../../pg-connection";
import { AppointmentRequest, AppointmentResponse, IAppointmentsRepository } from "./appointments-repository-interface";

export class AppointmentsRepository implements IAppointmentsRepository {
    async create({ examtype,  date, doctorId, patientId }: AppointmentRequest): Promise<void> {
        const connection = await createConn()
        await connection.query(
            `INSERT INTO appointments VALUES($1, $2, $3, $4, $5)`, 
            [randomUUID(), examtype, date, doctorId, patientId]    
        )
    }

    async getAllAppointments(): Promise<AppointmentResponse[]> {
        const connection = await createConn()
        const { rows: appointments } = await connection.query(
            `SELECT appointments.id, examtype, date, status, patient_name, phone, cpf, doc_name, specialty FROM appointments 
                JOIN patients ON patients.id = appointments.patient_ref 
                JOIN doctors ON doctors.id = appointments.doctor_ref`)
        return appointments
    }

    async getAppointmentsByCpf(cpf: string): Promise<AppointmentResponse[]> {
        const connection = await createConn()
        const getPatient = await connection.query(`
            SELECT * FROM patients WHERE cpf = $1
        `, [cpf])
        const appoitmentsByCpf = await connection.query(`
            SELECT appointments.id, examtype, date, status, patient_name, phone, cpf, doc_name
            FROM appointments JOIN patients ON patients.id = $1 JOIN doctors ON doctors.id = appointments.doctor_ref
            WHERE patient_ref = $1
        `, [getPatient.rows[0].id])
        return appoitmentsByCpf.rows
    }

    async updateAppointment(id: string, status: string): Promise<AppointmentResponse[]> {
        const connection = await createConn()
        const updatedAppointment = await connection.query(`
            UPDATE appointments SET status = $1 WHERE id = $2 RETURNING *`, 
            [status, id])
        return updatedAppointment.rows       
    }
}
CREATE TABLE patients(
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    patient_name TEXT NOT NULL,
    phone VARCHAR(13) NOT NULL,
    cpf VARCHAR(11) NOT NULL UNIQUE
);

CREATE TABLE doctors(
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    doc_name TEXT NOT NULL,
    CRM VARCHAR(6) NOT NULL UNIQUE,
    specialty TEXT DEFAULT 'Não possui'
);

CREATE TABLE appointments(
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid(),
    examType TEXT NOT NULL,
    date TIMESTAMP,
    doctor_ref TEXT REFERENCES doctors(id),
    patient_ref TEXT REFERENCES patients(id),
    status TEXT DEFAULT 'Agendado'
);

INSERT INTO patients VALUES(gen_random_uuid(), 'Xuxinha', '5581999999999', '14590021341');
INSERT INTO patients VALUES(gen_random_uuid(), 'Xuxão', '5581999999998', '14590021343');
INSERT INTO patients VALUES(gen_random_uuid(), 'Batman', '5581999999997', '14590021342');

INSERT INTO doctors VALUES(gen_random_uuid(), 'Dr. Babayaga', '123456');
INSERT INTO doctors VALUES(gen_random_uuid(), 'Dr. Celine', '234567');
INSERT INTO doctors VALUES(gen_random_uuid(), 'Dr. Bugiganga', '345678', 'Desvendar doenças');
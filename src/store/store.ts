import { create } from "zustand";
import {  devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { DraftPatient, Patient } from "../types";

type PatientState = {
    patients: Patient[]
    activeId: Patient['id']
    addPatient: (data: DraftPatient) => void
    deletePatient: (id: Patient['id']) => void
    getPatientById: (id: Patient['id']) => void
    updatePatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient): Patient => {
    return { ...patient, id: uuidv4() }
}

/*const deletePatient = (patient: Patient) => {
    return { ...patient, id: patient.id }
}*/

export const usePatientStore = create<PatientState>()(
    devtools(
        persist((set) => ({
            patients: [],
            activeId: '',
            addPatient: (data) => {
                const newPatinet = createPatient(data)
                set((state) => ({
                    patients: [...state.patients, newPatinet]
                }))
            },
            deletePatient: (id) => {
                set((state) => ({
                    patients: state.patients.filter(patient => patient.id !== id)
                }))
            },
            getPatientById: (id) => {
                set(() => ({
                    activeId: id
                }))
            },
            updatePatient: (data) => {
                set((state) => ({
                    patients: state.patients.map(patient => patient.id === state.activeId
                        ? { id: state.activeId, ...data }
                        : patient),
                    activeId: ''
                }))
            }

        }), {
            name: 'patient-storage',
            //En caso de que solo queramos almacenar mientras la ventana esta abierta
            //storage: createJSONStorage(() => sessionStorage)

            //Por defecto es localStorage, asi que no hace falta espedificarlos, como en session
            //storage: createJSONStorage(() => localStorage)

        })
    ))
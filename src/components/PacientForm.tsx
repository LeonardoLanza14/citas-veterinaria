import { useForm } from 'react-hook-form'
import Error from './Error'
import type { DraftPatient } from '../types'
import { usePatientStore } from '../store/store'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

export default function PatientForm() {
    const addPatient = usePatientStore(state => state.addPatient)
    const activeId = usePatientStore(state => state.activeId)
    const patients = usePatientStore(state => state.patients)
    const updatePatient = usePatientStore(state => state.updatePatient)




    const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<DraftPatient>()

    useEffect(() => {
        if (activeId) {
            const activePatient = patients.filter(patient => patient.id === activeId)[0]
            setValue('name', activePatient.name)
            setValue('caretaker', activePatient.caretaker)
            setValue('email', activePatient.email)
            setValue('date', activePatient.date)
            setValue('symptoms', activePatient.symptoms)

        }

    }, [activeId])

    const registerPatient = (data: DraftPatient) => {

        //En caso de que tenga algo en activeId se ejecuta updatePatient, de lo contrario addPatient
        if (activeId) {
            updatePatient(data)
            toast.success('Paciente actualizado correctamente', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
        } else {
            addPatient(data)
            toast.success('Paciente agregado correctamente', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            });
        }

        reset()
    }


    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-slate-100 text-center">Seguimiento Pacientes</h2>

            <p className="text-lg mt-5 text-slate-100 text-center mb-10">
                Añade Pacientes y {''}
                <span className="text-lime-400 font-bold">Administralos</span>
            </p>

            <form
                className="bg-lime-500 shadow-md rounded-lg py-10 px-5 mb-10"
                noValidate
                onSubmit={handleSubmit(registerPatient)}
            >
                <div className="mb-5">
                    <label htmlFor="name" className="text-sm uppercase font-bold">
                        Paciente
                    </label>
                    <input
                        id="name"
                        className={`w-full p-3 text-white placeholder:text-lime-200  border bg-lime-700 rounded-lg ${errors.name ? "border-red-600 border-[1px]" : "border-none"}`}
                        type="text"
                        placeholder="Nombre del Paciente"
                        {...register("name", {
                            required: 'El nombre del paciente es obligatorio',

                        })}
                    />
                    {errors.name && (
                        <Error>
                            {errors.name?.message?.toString()}
                        </Error>
                    )}


                </div>

                <div className="mb-5">
                    <label htmlFor="caretaker" className="text-sm uppercase font-bold">
                        Propietario
                    </label>
                    <input
                        id="caretaker"
                        className={`w-full p-3 text-white placeholder:text-lime-200  border bg-lime-700 rounded-lg ${errors.caretaker ? "border-red-600 border-[1px]" : "border-none"}`}
                        type="text"
                        placeholder="Nombre del Propietario"
                        {...register("caretaker", {
                            required: 'El nombre del propietaro es obligatorio',
                        })}
                    />
                    {errors.caretaker && (
                        <Error>
                            {errors.caretaker?.message?.toString()}
                        </Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="email" className="text-sm uppercase font-bold">
                        Email
                    </label>
                    <input
                        id="email"
                        className={`w-full p-3 text-white placeholder:text-lime-200  border bg-lime-700 rounded-lg ${errors.email ? "border-red-600 border-[1px]" : "border-none"}`}
                        type="email"
                        placeholder="Email de Registro"
                        {...register("email", {
                            required: "El Email es Obligatorio",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email No Válido'
                            }
                        })}
                    />
                    {errors.email && (
                        <Error>
                            {errors.email?.message?.toString()}
                        </Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="date" className="text-sm uppercase font-bold">
                        Fecha Alta
                    </label>
                    <input
                        id="date"
                        className={`w-full p-3 text-white placeholder:text-lime-200  border bg-lime-700 rounded-lg ${errors.date ? "border-red-600 border-[1px]" : "border-none"}`}
                        type="date"
                        {...register("date", {
                            required: 'La fecha de alta es obligatoria',
                        })}
                    />
                    {errors.date && (
                        <Error>
                            {errors.date?.message?.toString()}
                        </Error>
                    )}
                </div>

                <div className="mb-5">
                    <label htmlFor="symptoms" className="text-sm uppercase font-bold">
                        Síntomas
                    </label>
                    <textarea
                        id="symptoms"
                        className={`w-full p-3 text-white placeholder:text-lime-200  border bg-lime-700 rounded-lg ${errors.symptoms ? "border-red-600 border-[1px]" : "border-none"}`}
                        placeholder="Síntomas del paciente"
                        {...register("symptoms", {
                            required: 'Los sintomas son obligatorios',
                        })}
                    ></textarea>
                    {errors.symptoms && (
                        <Error>
                            {errors.symptoms?.message?.toString()}
                        </Error>
                    )}

                </div>

                <input
                    type="submit"
                    className="bg-purple-600 w-full p-3 text-white uppercase font-bold hover:bg-purple-700 cursor-pointer transition-colors"
                    value='Guardar Paciente'
                />
            </form>
        </div>
    )
}
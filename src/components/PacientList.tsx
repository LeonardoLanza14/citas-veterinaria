import { usePatientStore } from "../store/store"
import PatientDetails from "./PatientDetails"

const PacientList = () => {
    //Asi se accede a pacientes, se debe usar el state 
    const patients = usePatientStore(state => state.patients)

    return (
        <>
            <div className=" md:w-1/2 lg:w-3/5 md:h-screen md:overflow-y-auto">
                {patients.length ? (
                    <>
                        <h1 className=" font-bold text-3xl text-slate-100 text-center">Listado de Pacientes</h1>
                        <p className="text-xl mt-5 mb-10 text-center text-slate-100">
                            Administra tus{''}
                            <span className="text-purple-600 font-bold"> Pacientes y Citas</span>
                        </p>
                        {patients.map(patient => (
                            <PatientDetails
                                key={patient.id}
                                patient={patient}
                            />
                        ))}

                    </>
                ) : (
                    <>
                        <h1 className=" font-bold text-3xl text-slate-100 text-center">No hay pacientes</h1>
                        <p className="text-xl mt-5 mb-10 text-center text-slate-100">
                            Agrega algun paciente y{''}
                            <span className="text-purple-600 font-bold"> apareceran aqui</span>
                        </p>
                    </>
                )}
            </div>
        </>
    )
}

export default PacientList
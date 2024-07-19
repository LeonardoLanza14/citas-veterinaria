import { usePatientStore } from "../store/store";
import { Patient } from "../types"
import { PatienDetailItem } from "./PatienDetailItem"
import { RiDeleteBinLine, RiEditBoxLine } from "react-icons/ri";
import { toast } from "react-toastify";

type PatientDetailsProps = {
    patient: Patient
}

const PatientDetails = ({ patient }: PatientDetailsProps) => {

    const deletePatient = usePatientStore(state => state.deletePatient)
    const getPatientById = usePatientStore(state => state.getPatientById)

    const handleDelete = () => {
        deletePatient(patient.id)
        toast.error("Paciente eliminado correctamente", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark"
        })
    }


    return (
        <>
            <div className={`mx-5 my-10 px-5 py-10 bg-purple-600 shadow-md shadow-black rounded-xl `}>
                <PatienDetailItem label="ID" data={patient.id} />
                <PatienDetailItem label="Nombre" data={patient.name} />
                <PatienDetailItem label="Propietario" data={patient.caretaker} />
                <PatienDetailItem label="email" data={patient.email} />
                <PatienDetailItem label="Fecha alta" data={patient.date.toString()} />
                <PatienDetailItem label="sintomas" data={patient.symptoms} />

                <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
                    <button
                        type="button"
                        onClick={() => getPatientById(patient.id)}
                        className="flex items-center justify-center py-2 px-10 shadow-sm shadow-gray-900 bg-lime-600 hover:bg-lime-500 text-white font-bold uppercase rounded-lg">
                        <RiEditBoxLine className="mr-1 text-xl" />editar
                    </button>

                    <button
                        type="button"
                        onClick={() => handleDelete()}
                        className="flex items-center justify-center py-2 px-10 shadow-sm shadow-gray-900 bg-red-600 hover:bg-red-500 text-white font-bold uppercase rounded-lg">
                        <RiDeleteBinLine className="mr-1 text-xl" /> Eliminar
                    </button>
                </div>

            </div>
        </>
    )
}

export default PatientDetails
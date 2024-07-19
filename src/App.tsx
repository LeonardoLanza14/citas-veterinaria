import { ToastContainer } from "react-toastify"
import PacientForm from "./components/PacientForm"
import PacientList from "./components/PacientList"
import "react-toastify/ReactToastify.css"


function App() {

  return (
    <>
      <div className=" container mx-auto mt-12">
        <h1 className=" font-black text-5xl text-center text-slate-100 md:w-2/3 md:mx-auto">
          Seguimiento de Pacientes{" "}
          <span className="text-lime-400">Veterinaria</span>
        </h1>
      </div>

      <div className="mt-12 md:flex">
        <PacientForm />
        <PacientList />

      </div>

      <ToastContainer />
    </>
  )
}

export default App

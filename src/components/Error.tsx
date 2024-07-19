import { ReactNode } from "react"
import { RxExclamationTriangle } from "react-icons/rx";

type ErrorProps = {
    children: ReactNode
}

const Error = ({ children }: ErrorProps) => {
    return (
        <>
            <p className="text-start text-red-600 text-lg font-medium">{children ? (<RxExclamationTriangle className="inline mx-1" />) : ""} {children}</p>
        </>
    )
}

export default Error
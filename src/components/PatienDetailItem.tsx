type PatienDetailItemProps = {
    label: string,
    data: string
}

export const PatienDetailItem = ({ label, data }: PatienDetailItemProps) => {
    return (
        <>
            <p className={` font-bold mb-3 text-gray-200 uppercase`}>
                {label}: {''}
                <span className="font-normal normal-case ">{data}</span>
            </p>
        </>
    )
}

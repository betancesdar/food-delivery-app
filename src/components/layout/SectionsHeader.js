export default function SectionHeaders({subTittle, mainTittle}) {
    return(
        <>
            <h3 className="uppercase text-gray-500 font-semibold leading-4">{subTittle}</h3>
            <h2 className="text-primary font-bold text-4xl italic">{mainTittle}</h2>
        </>
    )
}
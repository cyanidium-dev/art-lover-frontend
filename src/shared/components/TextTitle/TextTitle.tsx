type Props = {
    text: string
    className?: string
    color?: string
    fontSize?: string
    fontVariable?: string

}
const TextTitle = ({
    text,
    className = "",

    fontVariable = "--font-montserrat",

}: Props) => {
    return (
        <div
            className={` ${className} text-[20px]  md:text-[24px]   xl:text-[40px] text-center`}
            style={{
                // fontSize,
                fontFamily: `var(${fontVariable})`,

            }}
        >            {text}
        </div>
    )
}

export default TextTitle
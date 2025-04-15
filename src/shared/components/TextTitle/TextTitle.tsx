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
    fontSize = "12px",
    fontVariable = "--font-montserrat",

}: Props) => {
    return (
        <div
            className={` ${className}`}
            style={{
                fontSize,
                fontFamily: `var(${fontVariable})`,

            }}
        >            {text}
        </div>
    )
}

export default TextTitle
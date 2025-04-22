type Props = {
    text: string
    className?: string
    color?: string
    fontSize?: string
    fontWeight?: string
    fontVariable?: string

}
const TextSubtitle = ({
    text,
    className = "subtitle",
    color = "text-white",
    fontWeight = "font-normal",
    fontVariable = "--font-denistina",
    fontSize = "14px",

}: Props) => {
    return (
        <div
            className={`${className} text-[${fontSize}] ${fontWeight} ${color}`}
            style={{
                fontFamily: `var(${fontVariable})`,

            }}
        >
            {text}
        </div>
    )
}
export default TextSubtitle
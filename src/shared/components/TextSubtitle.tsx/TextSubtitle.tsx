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
    fontSize = "16px",
    fontWeight = "font-normal",
    fontVariable = "--font-denistina",

}: Props) => {
    return (
        <div
            className={`${className} ${color} ${fontWeight}`}
            style={{
                fontSize,
                fontFamily: `var(${fontVariable})`,
            }}
        >            {text}
        </div>
    )
}
export default TextSubtitle
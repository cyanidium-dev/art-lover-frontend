

type Props = {
    buttonText?: string;
    svg?: React.ReactNode;
    className?: string;
    variant?: "primary" | "secondary" | "tertiary";
    size?: "small" | "medium" | "large";
}
const ButtonOval = (props: Props) => {
    return (
        <button
            className={`btn ${props.className} ${props.variant} ${props.size} cursor-pointer rounded-2xl text-[var(--main-dark-color)] px-4 py-2 `}
            style={
                { background: 'linear-gradient(121deg, #FFF 22.48%, #FF692D 337.32%)' }

            }
        > {props.buttonText}
            {props.svg}
        </button >
    )
}
export default ButtonOval
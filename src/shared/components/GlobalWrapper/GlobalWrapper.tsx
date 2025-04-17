type Props = {
    children: React.ReactNode
    className?: string
}
const GlobalWrapper = (props: Props) => {
    return (
        <div className={props.className}>
            {props.children}
        </div>
    )
}
export default GlobalWrapper
type Props = {
    children: React.ReactNode
    className?: string
}
const GlobalWrapper = ({ children, className = '' }: Props) => {
    return (
        <div
            className={`w-full max-w-[360px] sm:max-w-[640px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px] mx-auto ${className}`}
        >
            {children}
        </div>
    );
};

export default GlobalWrapper;
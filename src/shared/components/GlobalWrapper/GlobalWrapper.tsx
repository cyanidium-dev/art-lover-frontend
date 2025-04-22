type Props = {
    children: React.ReactNode
    className?: string
}
const GlobalWrapper = ({ children, className = '' }: Props) => {
    return (
        <div className={`w-full bg-white flex justify-center`}>
            <div className={`w-full sm:max-w-[768px] lg:max-w-[1280px] 
            bg-[url('/bg.png')] bg-no-repeat bg-cover bg-center
                
                
                ${className}`}>{children}</div>
        </div>
    );
};

export default GlobalWrapper;



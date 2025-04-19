type Props = {
    weight: string;
    size: string;
    materials: string;
    manufacturer: string;
    included: string[];
    article: string;
};

const FullProductCharact = ({
    weight,
    size,
    materials,
    manufacturer,
    included,
    article,
}: Props) => {
    return (
        <div className="text-[14px] text-[var(--main-dark-color)] space-y-2 font-light">
            <h3 className="font-semibold uppercase text-[18px]">ХАРАКТЕРИСТИКА ТОВАРУ:</h3>
            <p><span className="font-medium mr-4 text-[16px]">Вага:</span> {weight}</p>
            <p><span className="font-medium mr-4 text-[16px]">Розмір:</span> {size}</p>
            <p><span className="font-medium mr-4 text-[16px]">Матеріали:</span> {materials}</p>
            <p><span className="font-medium mr-4 text-[16px]">Виробник:</span> {manufacturer}</p>
            <div className="flex">
                <p className="font-medium text-[16px]">Що входить у набір:</p>
                <ul className="list-none flex flex-col gap-1 li" >
                    {included.map((item, idx) => (
                        <li className="flex gap-1 font-light text-balance" key={idx}><span>- </span> <p>{item}</p></li>
                    ))}
                </ul>
            </div>
            <p><span className="font-semibold mr-4">Артикул:</span> {article}</p>
        </div>
    );
};

export default FullProductCharact;

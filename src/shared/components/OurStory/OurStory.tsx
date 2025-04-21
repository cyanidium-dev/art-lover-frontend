

import Image from 'next/image';
import TextTitle from '../TextTitle/TextTitle';



const OurStory = () => {
    return (
        <div className="py-6  text-[12px] leading-[1.6] tracking-wide text-justify">
            <TextTitle text={"Історія нашої команди"} className=" font-semibold uppercase mb-4 text-[18px]" />

            <div>
                        <div className="mb-3 rounded overflow-hidden">
                            <Image
                                src={'/our-story/our.png'}
                                alt={`team-story`}
                                width={264}
                                height={180}
                                className="rounded-md w-full object-cover"
                            />
                        </div>
                 
            <p className='font-normal mb-4'>
                Наше захоплення цим видом мистецтва почалося досить просто. Ми всі любили майструвати і хотіли спробувати щось нове. Одного разу ми відкрили для себе стрінг-арт і були вражені його неймовірною креативністю та можливостями. Надихнувшись, ми вирішили поділитися цим зі світом, відкривши наш магазин.
            </p>
            </div>
            
            <div>

                        <div className="mb-3 rounded overflow-hidden">
                            <Image
                                src={'/our-story/our2.png'}
                                alt={`team-story`}
                                width={264}
                                height={180}
                                className="rounded-md w-full object-cover"
                            />
                        </div>
                 
                <p className='font-normal mb-4'>
                    У нашому магазині ви знайдете різноманітні набори стрінг-арт для створення чудових творів мистецтва. Ми пропонуємо широкий асортимент дизайнів і розмірів, щоб кожен міг знайти щось на свій смак. Крім того, ми також приймаємо замовлення на індивідуальні портрети та будь-які інші зображення, щоб створити унікальний витвір мистецтва саме для вас.
            </p>
            </div>
            <div>
           
                        <div className="mb-3 rounded overflow-hidden">
                            <Image
                                src={'/our-story/our3.png'}
                                alt={`team-story`}
                                width={264}
                                height={180}
                                className="rounded-md w-full object-cover"
                            />
                        </div>
                 
                <p className='font-normal mb-4'>
                    У нашому магазині ви знайдете різноманітні набори стрінг-арт для створення чудових творів мистецтва. Ми пропонуємо широкий асортимент дизайнів і розмірів, щоб кожен міг знайти щось на свій смак. Крім того, ми також приймаємо замовлення на індивідуальні портрети та будь-які інші зображення, щоб створити унікальний витвір мистецтва саме для вас.
            </p>
            </div>
            
            <p className='font-semibold mb-4 text-[12px]'>
                Дякуємо, що обрали наш магазин для своєї творчості.</p>
                
            <p className='font-semibold mb-4 text-[12px]'>
Сподіваємося, що наші набори принесуть вам радість і натхнення, і ви створите щось справді неймовірне!
            </p>
        </div>
    );
};
    

export default OurStory;

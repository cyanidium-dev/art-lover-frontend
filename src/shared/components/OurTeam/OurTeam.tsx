'use client';

import Image from 'next/image';

import { team } from './teamMembers';


const OurTeam = () => {
    return (
        <div className=" my-8">
            <h3 className="text-xs font-semibold mb-4 uppercase text-[var(--main-dark-color)]">Наша творча команда</h3>
            <ul className="flex flex-col gap-4">
                {team.map((member, idx) => (
                    <li
                        key={idx}
                        className={` p-3 rounded-xl overflow-hidden shadow ${member.color === 'orange' ? 'bg-[var(--main-orange)] text-white' : 'bg-white text-[var(--main-dark-color)]'
                            }`}
                    >
                        
                        <div className="mx-auto w-[264px] h-auto rounded-xl shadow-lg overflow-hidden flex items-center justify-center">
                            <Image
                                src={member.image}
                                alt={member.name}
                                width={264}
                                height={194}
                        className="w-full h-auto object-fill transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                        
                        <div className="p-3 flex flex-col items-start gap-2 text-center">
                            <p className="text-[16px] font-semibold">{member.name}</p>
                            <p className={`text-[10px] ${member.color === 'orange' ? 'text-white/80' : 'text-[var(--main-orange)]'}`}>
                                {member.role}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default OurTeam;

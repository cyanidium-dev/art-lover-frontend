import Facebook from "@/shared/components/Social/Facebook/Facebook";
import Instagram from "@/shared/components/Social/Instagram/Instagram";
import TikTok from "@/shared/components/Social/Tiktok/Tiktok";
import YouTube from "@/shared/components/Social/YouTube/YouTube";
import React, { ReactElement } from "react";


type FollowUsItem = {
    id: number;
    social: string;
    link: string;
    text: string;
    icon: ReactElement
    background?: string;
    textColor?: string;
};
const followUsItems: FollowUsItem[] = [
    
    {
        
        id: 1,
        icon: React.createElement(Instagram),
        social: 'Instagram',
        link: 'https://www.instagram.com/',
        text: '421 тис. підписпиків',
        background: '/social/1.png',
        textColor: 'white'
    },
    {
        id: 2,
        icon: React.createElement(YouTube),
        social: 'YouTube',
        link: 'https://www.youtube.com/',
        text: '21 тис. підписпиків',
        background: '/social/2.png',
        textColor:'var(--main-dark-color)'
    },
    {
        id: 3,
        icon: React.createElement(Facebook),
        social: 'Facebook',
        link: 'https://www.instagram.com/',
        text: '100 тис. підписпиків',
        background: '/social/3.png',
        textColor:'var(--main-dark-color)'

    },
    {
        id: 4,
        icon: React.createElement(TikTok),
        social: 'TikTok',
        link: 'https://www.tiktok.com/',
        text: '421 тис. підписпиків',
        background: '/social/4.png',
        textColor: 'white'

    }
    
]


export default followUsItems
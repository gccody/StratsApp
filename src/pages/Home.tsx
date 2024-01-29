import React from 'react';
import Hero from '../components/Hero';
import Background from '../components/Background';
import Card from '../components/Card';
import RainbowSixSiege from '../assets/RainbowSixSiege.webp';
import Valorant from '../assets/Valorant.webp';
// import ApexLegends from '../assets/ApexLegends.webp';

const Home = () => {
    return (
        <div className="bg-color1 overflow-y-auto">
            <Background>
            <Hero />
            </Background>
            <Card 
                photo={RainbowSixSiege}
                alt="Rainbow Six Siege"
                title="Rainbow Six Siege"
                text="Rainbow Six Siege is a tactical shooter video game developed by Ubisoft Montreal and published by Ubisoft. It was released worldwide for Microsoft Windows, PlayStation 4, and Xbox One on December 1, 2015. The game puts heavy emphasis on environmental destruction and cooperation between players."
            />
            <Card 
                photo={Valorant}
                alt="Valorant"
                title="Valorant"
                text="Valorant is a free-to-play multiplayer tactical first-person shooter developed and published by Riot Games, for Microsoft Windows. First teased under the codename Project A in October 2019, the game began a closed beta period with limited access on April 7, 2020, followed by official release on June 2, 2020."
                side="right"
            />
        </div>
    );
};

export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import Background from '../components/Background';
import Card from '../components/Card';
import RainbowSixSiege from '../assets/RainbowSixSiege.webp';
import Valorant from '../assets/Valorant.webp';

const Home = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-color1 overflow-y-auto">
            <Background>
                <Hero />
            </Background>
            <Card 
                photo={RainbowSixSiege}
                alt="Rainbow Six Siege"
                title="Rainbow Six Siege"
                text="“Rainbow Six Siege” is a tactical first-person shooter developed by Ubisoft. It emphasizes strategy, teamwork, and intense close-quarters combat, featuring a variety of unique operators each with specialized gadgets and abilities. Players engage in high-stakes, destructible environments where precision and coordination are key. With modes focusing on attack and defense, “Rainbow Six Siege” offers a deeply immersive experience, rewarding both quick thinking and meticulous planning."
                onClick={() => navigate("/r6")}
            />
            <Card 
                photo={Valorant}
                alt="Valorant"
                title="Valorant"
                text="“Valorant” is a competitive first-person shooter developed by Riot Games, blending tactical gameplay with precise gunplay and unique character abilities. Set in a near-future world, players choose from a diverse roster of agents, each with distinct powers that complement strategic team play. The game emphasizes sharp reflexes, strategic planning, and coordinated teamwork, offering an engaging blend of traditional shooting mechanics and innovative abilities. “Valorant” has quickly become a popular choice in the esports scene, known for its intense, high-stakes matches and dynamic, skill-based gameplay."
                side="right"
                onClick={() => navigate("valorant")}
            />
        </div>
    );
};

export default Home;

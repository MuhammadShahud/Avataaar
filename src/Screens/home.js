import React, { useState, useRef } from 'react'
import './home.css'
import MyAvatar from '../Components/mainAvatar';
import AvatarsContainer from '../Components/avatarsContainer';
import AvatarTypes from '../Components/avatarTypes';

function HomePage() {
    const [state, setState] = useState(0);

    const [avaStyle, setAvaStyle] = useState('Circle');
    const [topType, setTopType] = useState('LongHairMiaWallace');
    const [accessoriesType, setAccessoriesType] = useState('Prescription02');
    const [hairColor, setHairColor] = useState('Black');
    const [facialHairType, setFacialHairType] = useState('Blank');
    const [facialHairColor, setFacialHairColor] = useState('');
    const [clotheType, setClotheType] = useState('Overall');
    const [clotheColor, setClotheColor] = useState('Black');
    const [eyeType, setEyeType] = useState('Happy');
    const [eyebrowType, setEyebrowType] = useState('Default');
    const [mouthType, setMouthType] = useState('Smile');
    const [skinColor, setSkinColor] = useState('Pale')

    const ref = useRef(null)


    return (
        <div className='app'>
            <MyAvatar 
            imageRef ={ref}
            values={{
                avaStyle, topType, accessoriesType, hairColor, facialHairColor, facialHairType, clotheType, clotheColor,
                eyeType, eyebrowType, mouthType, skinColor
            }} />
            <AvatarsContainer states={{ state, setState }} 
                values={{
                    avaStyle, topType, accessoriesType, hairColor, facialHairColor, facialHairType, clotheType, clotheColor,
                    eyeType, eyebrowType, mouthType, skinColor, setAvaStyle, setClotheColor, setEyeType, setEyebrowType,
                    setFacialHairColor, setFacialHairType, setMouthType, setSkinColor, setTopType, setAccessoriesType,
                    setHairColor, setClotheType,
                }}/>
            <AvatarTypes states={{ state, setState }} />
        </div>

    )
}

export default HomePage



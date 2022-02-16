/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-unreachable */
import Avatar from 'avataaars'
import React from 'react'
import './avatarsContainer.css'
import lock from '../assets/locked.png';
import Back from '../assets/back.png';
import Next from '../assets/next.png';



function AvatarsContainer({ states, values }) {
    const { state, setState } = states;

    const {
        avaStyle, topType, accessoriesType, hairColor, facialHairColor, facialHairType, clotheType, clotheColor,
        eyeType, eyebrowType, mouthType, skinColor, setAvaStyle, setClotheColor, setEyeType, setEyebrowType,
        setFacialHairColor, setFacialHairType, setMouthType, setSkinColor, setTopType, setAccessoriesType,
        setHairColor, setClotheType,
    } = values;
    window.addEventListener('load', (event) => {
        document.getElementById('circle').click();

    });

    const typesArray = {
        topTypes: [
            {
                n1: 'NoHair',
                n2: 'Eyepatch',
                premium: false

            },
            {
                n1: 'Hat',
                n2: 'Hijab',
                premium: false
            },
            {
                n1: 'Turban',
                n2: 'WinterHat1',
                premium: false
            },
            {
                n1: 'WinterHat2',
                n2: 'WinterHat3',
                premium: false
            },
            {
                n1: 'WinterHat4',
                n2: 'LongHairBigHair',
                premium: false

            },
            {
                n1: 'LongHairBob',
                n2: 'LongHairBun',
                premium: false
            },
            {
                n1: 'LongHairCurly',
                n2: 'LongHairCurvy',
                premium: false
            },
            {
                n1: 'LongHairDreads',
                n2: 'LongHairFrida',
                premium: false
            },
            {
                n1: 'LongHairFro',
                n2: 'LongHairFroBand',
                premium: false

            },
            {
                n1: 'LongHairNotTooLong',
                n2: 'LongHairShavedSides',
                premium: false
            },
            {
                n1: 'LongHairMiaWallace',
                n2: 'LongHairStraight',
                premium: false
            },
            {
                n1: 'LongHairStraight2',
                n2: 'LongHairStraightStrand',
                premium: false
            },
            {
                n1: 'ShortHairDreads01',
                n2: 'ShortHairDreads02',
                premium: false

            },
            {
                n1: 'ShortHairFrizzle',
                n2: 'ShortHairShaggyMullet',
                premium: true
            },
            {
                n1: 'ShortHairShortCurly',
                n2: 'ShortHairShortFlat',
                premium: true
            },
            {
                n1: 'ShortHairShortRound',
                n2: 'ShortHairShortWaved',
                premium: true
            },
            {
                n1: 'ShortHairSides',
                n2: 'ShortHairTheCaesar',
                premium: true
            },
            {
                n1: 'ShortHairTheCaesarSidePart',
                premium: true
            }

        ],
        accessories: [
            {
                n1: 'Blank',
                n2: 'Kurt',
                premium: false

            },
            {
                n1: 'Prescription01',
                n2: 'Prescription02',
                premium: false
            },
            {
                n1: 'Round',
                n2: 'Sunglasses',
                premium: false
            },
            {
                n1: 'Wayfarers',
                premium: true
            },
        ],
        hairColor: [

            {
                n1: 'Auburn',
                n2: 'Black',
                premium: false

            },
            {
                n1: 'Blonde',
                n2: 'BlondeGolden',
                premium: false
            },
            {
                n1: 'Brown',
                n2: 'BrownDark',
                premium: false
            },
            {
                n1: 'PastelPink',
                n2: 'Blue',
                premium: false

            },
            {
                n1: 'Platinum',
                n2: 'Red',
                premium: true
            },
            {
                n1: 'SilverGray',

                premium: true
            },

        ],
        facialHair: [
            {
                n1: 'Blank',
                n2: 'BeardMedium',
                premium: false

            },
            {
                n1: 'BeardLight',
                n2: 'BeardMajestic',
                premium: false
            },
            {
                n1: 'MoustacheFancy',
                n2: 'MoustacheMagnum',
                premium: false
            },

        ],
        facialHairColor: [
            {
                n1: 'Auburn',
                n2: 'Black',
                premium: false

            },
            {
                n1: 'Blonde',
                n2: 'BlondeGolden',
                premium: false
            },
            {
                n1: 'Brown',
                n2: 'BrownDark',
                premium: false
            },
            {
                n1: 'Platinum',
                n2: 'Red',
                premium: true
            },


        ],
        clothes: [
            {
                n1: 'BlazerShirt',
                n2: 'BlazerSweater',
                premium: false

            },
            {
                n1: 'CollarSweater',
                n2: 'GraphicShirt',
                premium: false
            },
            {
                n1: 'Hoodie',
                n2: 'Overall',
                premium: false
            },
            {
                n1: 'ShirtCrewNeck',
                n2: 'ShirtScoopNeck',
                premium: true

            },
            {
                n1: 'ShirtVNeck',

                premium: true
            },

        ],
        clothesColor: [
            {
                n1: 'Black',
                n2: 'Blue01',
                premium: false

            },
            {
                n1: 'Blue02',
                n2: 'Blue03',
                premium: false
            },
            {
                n1: 'Gray01',
                n2: 'Gray02',
                premium: false
            },
            {
                n1: 'Heather',
                n2: 'PastelBlue',
                premium: false

            },
            {
                n1: 'PastelGreen',
                n2: 'PastelOrange',
                premium: false
            },
            {
                n1: 'PastelRed',
                n2: 'PastelYellow',
                premium: true
            },
            {
                n1: 'Pink',
                n2: 'Red',
                premium: true
            },
            {
                n1: 'White',
                premium: true
            },

        ],
        eyes: [
            {
                n1: 'Close',
                n2: 'Cry',
                premium: false

            },
            {
                n1: 'Default',
                n2: 'Dizzy',
                premium: false
            },
            {
                n1: 'EyeRoll',
                n2: 'Happy',
                premium: false
            },
            {
                n1: 'Hearts',
                n2: 'Side',
                premium: false

            },
            {
                n1: 'Squint',
                n2: 'Surprised',
                premium: false
            },
            {
                n1: 'Wink',
                n2: 'WinkWacky',
                premium: true
            },

        ],
        eyeBrow: [
            {
                n1: 'Angry',
                n2: 'AngryNatural',
                premium: false

            },
            {
                n1: 'Default',
                n2: 'DefaultNatural',
                premium: false
            },
            {
                n1: 'FlatNatural',
                n2: 'RaisedExcited',
                premium: false
            },
            {
                n1: 'RaisedExcitedNatural',
                n2: 'SadConcerned',
                premium: false

            },
            {
                n1: 'SadConcernedNatural',
                n2: 'UnibrowNatural',
                premium: false
            },
            {
                n1: 'UpDown',
                n2: 'UpDownNatural',
                premium: true
            },
        ],
        mouth: [
            {
                n1: 'Concerned',
                n2: 'Default',
                premium: false

            },
            {
                n1: 'Disbelief',
                n2: 'Eating',
                premium: false
            },
            {
                n1: 'Grimace',
                n2: 'Sad',
                premium: false
            },
            {
                n1: 'ScreamOpen',
                n2: 'Serious',
                premium: false

            },
            {
                n1: 'Smile',
                n2: 'Tongue',
                premium: false
            },
            {
                n1: 'Twinkle',
                n2: 'Vomit',
                premium: true
            },

        ],
        skin: [
            {
                n1: 'Tanned',
                n2: 'Yellow',
                premium: false

            },
            {
                n1: 'Pale',
                n2: 'Light',
                premium: false
            },
            {
                n1: 'Brown',
                n2: 'DarkBrown',
                premium: false
            },
            {
                n1: 'Black',
                premium: false
            },
        ]
    }

    switch (state) {
        case 0:
            return (
                <div className='avatarsContainer'>

                    <div className='upperContainer'>
                        <div className='arrows'>
                            <img className="arrow-img-gray" src={Back} alt="" />
                        </div>
                        <div className='textContainer'>
                            <div className='upperHeader'>Top</div>
                        </div>
                        <div className='arrows' onClick={() => setState(state + 1)}>
                            <img className="arrow-img" src={Next} alt="" />
                        </div>
                    </div>


                    <div className='avatarRow'>

                        {
                            typesArray.topTypes.map((v, i) =>
                            (
                                <div className='avatarCol'>
                                    {v.premium ?
                                        <div className='lockedDiv'>
                                            <Avatar
                                                style={{ filter: 'grayscale(1)' }}
                                                className='avatar'
                                                topType={v.n1}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                            <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                        </div> :
                                        <div onClick={() => setTopType(v.n1)} >
                                            <Avatar
                                                className='avatar'
                                                topType={v.n1}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                        </div>
                                    }
                                    {v.n2 ?
                                        v.premium ?
                                            <div className='lockedDiv'>
                                                <Avatar
                                                    className='avatar'
                                                    style={{ filter: 'grayscale(1)' }}
                                                    topType={v.n2}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                                <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                            </div> :
                                            <div onClick={() => setTopType(v.n2)} >
                                                <Avatar
                                                    className='avatar'
                                                    topType={v.n2}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                            </div>


                                        : null
                                    }
                                </div>

                            ))
                        }

                    </div>
                </div>

            );
            break;

        case 1:
            return (
 <div className='avatarsContainer'>

                    <div className='upperContainer'>
                        <div className='arrows' onClick={() => setState(state - 1)}>
                            <img className="arrow-img" src={Back} alt="" />
                        </div>
                        <div className='textContainer'>
                            <div className='upperHeader'>Skin Color</div>
                        </div>
                        <div className='arrows' onClick={() => setState(state + 1)}>
                            <img className="arrow-img" src={Next} alt="" />
                        </div>
                    </div>

                    <div className='avatarRow'>

                        {
                            typesArray.skin.map((v, i) =>
                            (
                                <div className='avatarCol'>
                                    {v.premium ?
                                        <div className='lockedDiv'>
                                            <Avatar
                                                style={{ filter: 'grayscale(1)' }}
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={v.n1}
                                            />
                                            <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                        </div> :
                                        <div onClick={() => setSkinColor(v.n1)} >
                                            <Avatar
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheType}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={v.n1}
                                            />
                                        </div>
                                    }
                                    {v.n2 ?
                                        v.premium ?
                                            <div className='lockedDiv'>
                                                <Avatar
                                                    className='avatar'
                                                    style={{ filter: 'grayscale(1)' }}
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={v.n2}
                                                />
                                                <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                            </div> :
                                            <div onClick={() => setSkinColor(v.n2)} >
                                                <Avatar
                                                    className='avatar'
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={v.n2}
                                                />
                                            </div>


                                        : null
                                    }
                                </div>

                            ))
                        }

                    </div>
                </div>

            );
            break;

        case 2:
            return (
                <div className='avatarsContainer'>

                    <div className='upperContainer'>
                        <div className='arrows' onClick={() => setState(state - 1)}>
                            <img className="arrow-img" src={Back} alt="" />
                        </div>
                        <div className='textContainer'>
                            <div className='upperHeader'>Hair Color</div>
                        </div>
                        <div className='arrows' onClick={() => setState(state + 1)}>
                            <img className="arrow-img" src={Next} alt="" />
                        </div>
                    </div>

                    <div className='avatarRow'>

                        {
                            typesArray.hairColor.map((v, i) =>
                            (
                                <div className='avatarCol'>
                                    {v.premium ?
                                        <div className='lockedDiv'>
                                            <Avatar
                                                style={{ filter: 'grayscale(1)' }}
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={v.n1}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                            <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                        </div> :
                                        <div onClick={() => setHairColor(v.n1)} >
                                            <Avatar
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={v.n1}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                        </div>
                                    }
                                    {v.n2 ?
                                        v.premium ?
                                            <div className='lockedDiv'>
                                                <Avatar
                                                    className='avatar'
                                                    style={{ filter: 'grayscale(1)' }}
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={v.n2}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                                <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                            </div> :
                                            <div onClick={() => setHairColor(v.n2)} >
                                                <Avatar
                                                    className='avatar'
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={v.n2}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                            </div>


                                        : null
                                    }
                                </div>

                            ))
                        }

                    </div>
                </div>

            );
            break;

        case 3:
            return (
                <div className='avatarsContainer'>

                    <div className='upperContainer'>
                        <div className='arrows' onClick={() => setState(state - 1)}>
                            <img className="arrow-img" src={Back} alt="" />
                        </div>
                        <div className='textContainer'>
                            <div className='upperHeader'>Facial Hair</div>
                        </div>
                        <div className='arrows' onClick={() => setState(state + 1)}>
                            <img className="arrow-img" src={Next} alt="" />
                        </div>
                    </div>

                    <div className='avatarRow'>

                        {
                            typesArray.facialHair.map((v, i) =>
                            (
                                <div className='avatarCol'>
                                    {v.premium ?
                                        <div className='lockedDiv'>
                                            <Avatar
                                                style={{ filter: 'grayscale(1)' }}
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={v.n1}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                            <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                        </div> :
                                        <div onClick={() => setFacialHairType(v.n1)} >
                                            <Avatar
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={v.n1}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                        </div>
                                    }
                                    {v.n2 ?
                                        v.premium ?
                                            <div className='lockedDiv'>
                                                <Avatar
                                                    className='avatar'
                                                    style={{ filter: 'grayscale(1)' }}
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={v.n2}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                                <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                            </div> :
                                            <div onClick={() => setFacialHairType(v.n2)} >
                                                <Avatar
                                                    className='avatar'
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={v.n2}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                            </div>


                                        : null
                                    }
                                </div>

                            ))
                        }

                    </div>
                </div>

            )
            break;

        case 4:
            return (
                <div className='avatarsContainer'>

                    <div className='upperContainer'>
                        <div className='arrows' onClick={() => setState(state - 1)}>
                            <img className="arrow-img" src={Back} alt="" />
                        </div>
                        <div className='textContainer'>
                            <div className='upperHeader'>Facial Hair Color</div>
                        </div>
                        <div className='arrows' onClick={() => setState(state + 1)}>
                            <img className="arrow-img" src={Next} alt="" />
                        </div>
                    </div>

                    <div className='avatarRow'>

                        {
                            typesArray.facialHairColor.map((v, i) =>
                            (
                                <div className='avatarCol'>
                                    {v.premium ?
                                        <div className='lockedDiv'>
                                            <Avatar
                                                style={{ filter: 'grayscale(1)' }}
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={v.n1}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                            <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                        </div> :
                                        <div onClick={() => setFacialHairColor(v.n1)} >
                                            <Avatar
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={v.n1}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                        </div>
                                    }
                                    {v.n2 ?
                                        v.premium ?
                                            <div className='lockedDiv'>
                                                <Avatar
                                                    className='avatar'
                                                    style={{ filter: 'grayscale(1)' }}
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={v.n2}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                                <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                            </div> :
                                            <div onClick={() => setFacialHairColor(v.n2)} >
                                                <Avatar
                                                    className='avatar'
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={v.n2}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                            </div>


                                        : null
                                    }
                                </div>

                            ))
                        }

                    </div>
                </div>

            );
            break;

        case 5:
            return (
                <div className='avatarsContainer'>

                    <div className='upperContainer'>
                        <div className='arrows' onClick={() => setState(state - 1)}>
                            <img className="arrow-img" src={Back} alt="" />
                        </div>
                        <div className='textContainer'>
                            <div className='upperHeader'>Clothes</div>
                        </div>
                        <div className='arrows' onClick={() => setState(state + 1)}>
                            <img className="arrow-img" src={Next} alt="" />
                        </div>
                    </div>


                    <div className='avatarRow'>

                        {
                            typesArray.clothes.map((v, i) =>
                            (
                                <div className='avatarCol'>
                                    {v.premium ?
                                        <div className='lockedDiv'>
                                            <Avatar
                                                style={{ filter: 'grayscale(1)' }}
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={v.n1}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                            <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                        </div> :
                                        <div onClick={() => setClotheType(v.n1)} >
                                            <Avatar
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={v.n1}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                        </div>
                                    }
                                    {v.n2 ?
                                        v.premium ?
                                            <div className='lockedDiv'>
                                                <Avatar
                                                    className='avatar'
                                                    style={{ filter: 'grayscale(1)' }}
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={v.n2}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                                <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                            </div> :
                                            <div onClick={() => setClotheType(v.n2)} >
                                                <Avatar
                                                    className='avatar'
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={v.n2}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                            </div>


                                        : null
                                    }
                                </div>

                            ))
                        }

                    </div>
                </div>

            );
            break;

        case 6:
            return (
                <div className='avatarsContainer'>

                    <div className='upperContainer'>
                        <div className='arrows' onClick={() => setState(state - 1)}>
                            <img className="arrow-img" src={Back} alt="" />
                        </div>
                        <div className='textContainer'>
                            <div className='upperHeader'>Clothes Color</div>
                        </div>
                        <div className='arrows' onClick={() => setState(state + 1)}>
                            <img className="arrow-img" src={Next} alt="" />
                        </div>
                    </div>

                    <div className='avatarRow'>

                        {
                            typesArray.clothesColor.map((v, i) =>
                            (
                                <div className='avatarCol'>
                                    {v.premium ?
                                        <div className='lockedDiv'>
                                            <Avatar
                                                style={{ filter: 'grayscale(1)' }}
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={v.n1}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                            <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                        </div> :
                                        <div onClick={() => setClotheColor(v.n1)} >
                                            <Avatar
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={v.n1}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                        </div>
                                    }
                                    {v.n2 ?
                                        v.premium ?
                                            <div className='lockedDiv'>
                                                <Avatar
                                                    className='avatar'
                                                    style={{ filter: 'grayscale(1)' }}
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={v.n2}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                                <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                            </div> :
                                            <div onClick={() => setClotheColor(v.n2)} >
                                                <Avatar
                                                    className='avatar'
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={v.n2}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                            </div>


                                        : null
                                    }
                                </div>

                            ))
                        }

                    </div>
                </div>

            );
            break;

        case 7:
            return (
                <div className='avatarsContainer'>

                    <div className='upperContainer'>
                        <div className='arrows' onClick={() => setState(state - 1)}>
                            <img className="arrow-img" src={Back} alt="" />
                        </div>
                        <div className='textContainer'>
                            <div className='upperHeader'>Eyes</div>
                        </div>
                        <div className='arrows' onClick={() => setState(state + 1)}>
                            <img className="arrow-img" src={Next} alt="" />
                        </div>
                    </div>

                    <div className='avatarRow'>

                        {
                            typesArray.eyes.map((v, i) =>
                            (
                                <div className='avatarCol'>
                                    {v.premium ?
                                        <div className='lockedDiv'>
                                            <Avatar
                                                style={{ filter: 'grayscale(1)' }}
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={v.n1}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                            <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                        </div> :
                                        <div onClick={() => setEyeType(v.n1)} >
                                            <Avatar
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheType}
                                                eyeType={v.n1}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                        </div>
                                    }
                                    {v.n2 ?
                                        v.premium ?
                                            <div className='lockedDiv'>
                                                <Avatar
                                                    className='avatar'
                                                    style={{ filter: 'grayscale(1)' }}
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={v.n2}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                                <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                            </div> :
                                            <div onClick={() => setEyeType(v.n2)} >
                                                <Avatar
                                                    className='avatar'
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={v.n2}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                            </div>


                                        : null
                                    }
                                </div>

                            ))
                        }

                    </div>
                </div>

            );
            break;

        case 8:
            return (
                <div className='avatarsContainer'>

                    <div className='upperContainer'>
                        <div className='arrows' onClick={() => setState(state - 1)}>
                            <img className="arrow-img" src={Back} alt="" />
                        </div>
                        <div className='textContainer'>
                            <div className='upperHeader'>Eyebrows</div>
                        </div>
                        <div className='arrows' onClick={() => setState(state + 1)}>
                            <img className="arrow-img" src={Next} alt="" />
                        </div>
                    </div>

                    <div className='avatarRow'>

                        {
                            typesArray.eyeBrow.map((v, i) =>
                            (
                                <div className='avatarCol'>
                                    {v.premium ?
                                        <div className='lockedDiv'>
                                            <Avatar
                                                style={{ filter: 'grayscale(1)' }}
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={v.n1}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                            <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                        </div> :
                                        <div onClick={() => setEyebrowType(v.n1)} >
                                            <Avatar
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheType}
                                                eyeType={eyeType}
                                                eyebrowType={v.n1}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                        </div>
                                    }
                                    {v.n2 ?
                                        v.premium ?
                                            <div className='lockedDiv'>
                                                <Avatar
                                                    className='avatar'
                                                    style={{ filter: 'grayscale(1)' }}
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={v.n2}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                                <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                            </div> :
                                            <div onClick={() => setEyebrowType(v.n2)} >
                                                <Avatar
                                                    className='avatar'
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={v.n2}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                            </div>


                                        : null
                                    }
                                </div>

                            ))
                        }

                    </div>
                </div>

            );
            break;

        case 9:
            return (
                <div className='avatarsContainer'>

                    <div className='upperContainer'>
                        <div className='arrows' onClick={() => setState(state - 1)}>
                            <img className="arrow-img" src={Back} alt="" />
                        </div>
                        <div className='textContainer'>
                            <div className='upperHeader'>Mouth</div>
                        </div>
                        <div className='arrows' onClick={() => setState(state + 1)}>
                            <img className="arrow-img" src={Next} alt="" />
                        </div>
                    </div>


                    <div className='avatarRow'>

                        {
                            typesArray.mouth.map((v, i) =>
                            (
                                <div className='avatarCol'>
                                    {v.premium ?
                                        <div className='lockedDiv'>
                                            <Avatar
                                                style={{ filter: 'grayscale(1)' }}
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={v.n1}
                                                skinColor={skinColor}
                                            />
                                            <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                        </div> :
                                        <div onClick={() => setMouthType(v.n1)} >
                                            <Avatar
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={accessoriesType}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheType}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={v.n1}
                                                skinColor={skinColor}
                                            />
                                        </div>
                                    }
                                    {v.n2 ?
                                        v.premium ?
                                            <div className='lockedDiv'>
                                                <Avatar
                                                    className='avatar'
                                                    style={{ filter: 'grayscale(1)' }}
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={v.n2}
                                                    skinColor={skinColor}
                                                />
                                                <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                            </div> :
                                            <div onClick={() => setMouthType(v.n2)} >
                                                <Avatar
                                                    className='avatar'
                                                    topType={topType}
                                                    accessoriesType={accessoriesType}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={v.n2}
                                                    skinColor={skinColor}
                                                />
                                            </div>


                                        : null
                                    }
                                </div>

                            ))
                        }

                    </div>
                </div>

            );
            break;

        case 10:
            return (
                <div className='avatarsContainer'>

                    <div className='upperContainer'>
                        <div className='arrows' onClick={() => setState(state - 1)}>
                            <img className="arrow-img" src={Back} alt="" />
                        </div>
                        <div className='textContainer'>
                            <div className='upperHeader'>Glasses</div>
                        </div>
                        <div className='arrows' onClick={() => setState(state + 1)}>
                            <img className="arrow-img" src={Next} alt="" />
                        </div>
                    </div>

                    <div className='avatarRow'>

                        {
                            typesArray.accessories.map((v, i) =>
                            (
                                <div className='avatarCol'>
                                    {v.premium ?
                                        <div className='lockedDiv'>
                                            <Avatar
                                                style={{ filter: 'grayscale(1)' }}
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={v.n1}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                            <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                        </div> :
                                        <div onClick={() => setAccessoriesType(v.n1)} >
                                            <Avatar
                                                className='avatar'
                                                topType={topType}
                                                accessoriesType={v.n1}
                                                hairColor={hairColor}
                                                facialHairType={facialHairType}
                                                facialHairColor={facialHairColor}
                                                clotheType={clotheType}
                                                clotheColor={clotheColor}
                                                eyeType={eyeType}
                                                eyebrowType={eyebrowType}
                                                mouthType={mouthType}
                                                skinColor={skinColor}
                                            />
                                        </div>
                                    }
                                    {v.n2 ?
                                        v.premium ?
                                            <div className='lockedDiv'>
                                                <Avatar
                                                    className='avatar'
                                                    style={{ filter: 'grayscale(1)' }}
                                                    topType={topType}
                                                    accessoriesType={v.n2}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                                <div className='lock'><img src={lock} height={'100%'} width={'100%'} /></div>
                                            </div> :
                                            <div onClick={() => setAccessoriesType(v.n2)} >
                                                <Avatar
                                                    className='avatar'
                                                    topType={topType}
                                                    accessoriesType={v.n2}
                                                    hairColor={hairColor}
                                                    facialHairType={facialHairType}
                                                    facialHairColor={facialHairColor}
                                                    clotheType={clotheType}
                                                    clotheColor={clotheColor}
                                                    eyeType={eyeType}
                                                    eyebrowType={eyebrowType}
                                                    mouthType={mouthType}
                                                    skinColor={skinColor}
                                                />
                                            </div>


                                        : null
                                    }
                                </div>

                            ))
                        }

                    </div>
                </div>

            );
            break;

        case 11:
            return (
                <div className='avatarsContainer'>

                    <div className='upperContainer'>
                        <div className='arrows' onClick={() => setState(state - 1)}>
                            <img className="arrow-img" src={Back} alt="" />
                        </div>
                        <div className='textContainer'>
                            <div className='upperHeader'>Background</div>
                        </div>
                        <div className='arrows'>
                            <img className="arrow-img-gray" src={Next} alt="" />
                        </div>
                    </div>

                    <div className='avatarRow'>

                        <div className='avatarStyle'>

                            <div className='innerStyle-container' onClick={() => setAvaStyle('Circle')}>
                                <div className='style-text'>CIRCLE</div>
                            </div>

                            <div className='innerStyle-container' onClick={() => setAvaStyle('Transparent')}>
                                <div className='style-text'>TRANSPARENT</div>
                            </div>

                        </div>

                    </div>
                </div>

            );
            break;
        default:
            return (<div></div>)
    }


}

export default AvatarsContainer
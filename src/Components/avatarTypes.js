import React from 'react'
import './avatarTypes.css'

function AvatarTypes({ states }) {
    const { state, setState } = states;
    return (
        <div className='avatarTypes'>
            <div className='containerTypes'>
                <div onClick={() => setState(0)}
                    style={state === 0 ? {
                        backgroundImage: `radial-gradient(
                farthest-corner at 70px 70px,
                #fff0 30%,
                rgb(176 215 241) 95%
                )`,
                        transition: '0.3s',
                        borderRadius: '5px',
                    } : null}
                    className='emojiDiv' title='Hairs'>👩‍🦱
                    </div>

                <div onClick={() => setState(1)}
                    style={state === 1 ? {
                        backgroundImage: `radial-gradient(
                farthest-corner at 70px 70px,
                #fff0 30%,
                rgb(176 215 241) 95%
                )`,
                        transition: '0.3s',
                        borderRadius: '5px',
                    } : null}
                    className='emojiDiv' title='Skin'>🎨
                    </div>

                <div onClick={() => setState(2)}
                    style={state === 2 ? {
                        backgroundImage: `radial-gradient(
                farthest-corner at 70px 70px,
                #fff0 30%,
                rgb(176 215 241) 95%
                )`,
                        transition: '0.3s',
                        borderRadius: '5px',
                    } : null}
                    className='emojiDiv' title='Hair Colors'>👱‍♀️ 
                    </div>

                <div onClick={() => setState(3)}
                    style={state === 3 ? {
                        backgroundImage: `radial-gradient(
                farthest-corner at 70px 70px,
                #fff0 30%,
                rgb(176 215 241) 95%
                )`,
                        transition: '0.3s',
                        borderRadius: '5px',
                    } : null}
                    className='emojiDiv' title='Facial Hair'>🧔🏻
                    </div>

                <div onClick={() => setState(4)}
                    style={state === 4 ? {
                        backgroundImage: `radial-gradient(
                farthest-corner at 70px 70px,
                #fff0 30%,
                rgb(176 215 241) 95%
                )`,
                        transition: '0.3s',
                        borderRadius: '5px',
                    } : null}
                    className='emojiDiv' title='Facial Hair Colors'>👩
                    
                    </div>

                <div onClick={() => setState(5)}
                    style={state === 5 ? {
                        backgroundImage: `radial-gradient(
                farthest-corner at 70px 70px,
                #fff0 30%,
                rgb(176 215 241) 95%
                )`,
                        transition: '0.3s',
                        borderRadius: '5px',
                    } : null}
                    className='emojiDiv' title='Clothes'>👚
                    </div>

                <div onClick={() => setState(6)}
                    style={state === 6 ? {
                        backgroundImage: `radial-gradient(
                farthest-corner at 70px 70px,
                #fff0 30%,
                rgb(176 215 241) 95%
                )`,
                        transition: '0.3s',
                        borderRadius: '5px',
                    } : null}
                    className='emojiDiv' title='Clothe Colors'>🟠
                    </div>

                <div onClick={() => setState(7)}
                    style={state === 7 ? {
                        backgroundImage: `radial-gradient(
                farthest-corner at 70px 70px,
                #fff0 30%,
                rgb(176 215 241) 95%
                )`,
                        transition: '0.3s',
                        borderRadius: '5px',
                    } : null}
                    className='emojiDiv' title='Eyes'>👁️
                    </div>

                <div onClick={() => setState(8)}
                    style={state === 8 ? {
                        backgroundImage: `radial-gradient(
                farthest-corner at 70px 70px,
                #fff0 30%,
                rgb(176 215 241) 95%
                )`,
                        transition: '0.3s',
                        borderRadius: '5px',
                    } : null}
                    className='emojiDiv' title='Eyebrow'>🤨
                    </div>


                <div onClick={() => setState(9)}
                    style={state === 9 ? {
                        backgroundImage: `radial-gradient(
                farthest-corner at 70px 70px,
                #fff0 30%,
                rgb(176 215 241) 95%
                )`,
                        transition: '0.3s',
                        borderRadius: '5px',
                    } : null}
                    className='emojiDiv' title='Mouth'>👄
                    </div>

                <div onClick={() => setState(10)}
                    style={state === 10 ? {
                        backgroundImage: `radial-gradient(
                farthest-corner at 70px 70px,
                #fff0 30%,
                rgb(176 215 241) 95%
                )`,
                        transition: '0.3s',
                        borderRadius: '5px',
                    } : null}
                    className='emojiDiv' title='Glasses'>👓
                    </div>
             
 
                <div onClick={() => setState(11)}
                    style={state === 11 ? {
                        backgroundImage: `radial-gradient(
                farthest-corner at 70px 70px,
                #fff0 30%,
                rgb(176 215 241) 95%
                )`,
                        transition: '0.3s',
                        borderRadius: '5px',
                    } : null}
                    className='emojiDiv' title='Skin'> &#128311;</div>

            </div>
        </div>



    )
}

export default AvatarTypes
/* eslint-disable jsx-a11y/alt-text */
import React, { useRef, } from 'react'
import Avatar from 'avataaars'
import './mainAvatar.css'
import logo from '../assets/logo.png'
import download from '../assets/download.png'
import ReactDOM from 'react-dom';
import FileSaver from 'file-saver';


function MyAvatar({ values, imageRef }) {
    const {
        avaStyle, topType, accessoriesType, hairColor, facialHairColor, facialHairType, clotheType, clotheColor,
        eyeType, eyebrowType, mouthType, skinColor
    } = values;
    const ref = useRef(null)
    const canvaRef = useRef(null)

    const triggerDownload = (imageBlob, fileName) => {
        FileSaver.saveAs(imageBlob, fileName)
      }

    const downloadImage = () => {
        const svgNode = ReactDOM.findDOMNode(ref.current)
        const canvas = document.createElement("CANVAS");
        canvas.width=520;
        canvas.height=600;
        const ctx = canvas.getContext('2d')
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        
        const anyWindow = window
        const DOMURL = anyWindow.URL || anyWindow.webkitURL || window

        console.log(DOMURL);

        const data = svgNode.outerHTML
        const img = new Image()
        const svg = new Blob([data], { type: 'image/svg+xml' })
        const url = DOMURL.createObjectURL(svg)
        
        img.onload = () => {
            ctx.save()
            ctx.scale(2, 2)
            ctx.drawImage(img, 0, 0)
            ctx.restore()
            DOMURL.revokeObjectURL(url)
            canvas.toBlob((imageBlob) => {
              triggerDownload(imageBlob, 'avataaars.png')
            })
          }
          img.src = url
    }

    return (
        <div className='mainAvatar'  >
            <div className='whiteDiv'>
                <div className='downloadDiv'>
                    <h3>Test Club Z</h3>
                    <div className='downloadImg' onClick={downloadImage}>
                        <img
                            src={download}
                            height={'100%'}
                            width={'100%'}

                        />
                    </div>
                </div>
                    <Avatar
                        ref={ref}
                        className='ava'
                        avatarStyle={avaStyle}
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
                        skinColor={skinColor}
                    />
                
            </div>
        </div>
    )
}

export default MyAvatar
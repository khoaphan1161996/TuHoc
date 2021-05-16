import React,{useState} from 'react';
import './style.scss'

const getRandomColor = () => {
    const listColor = ['deeppink','green','yello','black','blue']
    const randomIndex = Math.floor(Math.random() * 5)
    return listColor[randomIndex]
}

const ColorBox = () => {
    const [color,setColor] = useState(() => {
        const initialColor = localStorage.getItem('box_color') || 'deeppink'
        return initialColor
    })

    const handleBoxClick = () => {
        const newColor = getRandomColor()
        setColor(newColor)

        localStorage.setItem('box_color',newColor)
    }

    return (
        <div
        className="colorbox"
        style={{backgroundColor:color}}
        onClick={handleBoxClick}
        >
        </div>
    )
}

export default ColorBox
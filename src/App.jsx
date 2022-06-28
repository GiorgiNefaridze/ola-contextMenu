import { useState } from 'react'
import ListItem from './components/LisItem'
import ContextMenu from './components/ContextMenu'
import './styles/app.scss'

//Generate random colors for li item
function generateColors() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255)

    return `rgb(${red},${green},${blue})`
}

const lists = [
    {
        text: "random text 1",
        bgColor:generateColors(),
        id:Math.floor(Math.random() * 500)
    },
    {
        text: "random text 2",
        bgColor:generateColors(),
        id:Math.floor(Math.random() * 500)
    },
    {
        text: "random text 3",
        bgColor:generateColors(),
        id:Math.floor(Math.random() * 500)
    }
]

export default function App() {

    const [posX,setPosX] = useState("")
    const [posY,setPosY] = useState("")
    const [showMenu,setShowMenu] = useState(false)
    const [text,setText] = useState("")
    const [bgColor,setBgColor] = useState("")


    const hendleclick = (e) => {
        setPosX(e.pageX);
        setPosY(e.pageY);
        setShowMenu(true);
        setText(e.target.innerHTML);
        setBgColor(e.target.style.backgroundColor)
    }

    oncontextmenu = (e) => {
        e.preventDefault();
    }

    return (
        <ul className='unordered-list-container'>
            {lists.map(li => (
                <ListItem key={li.id} setShowMenu={setShowMenu} li={li} hendleclick={hendleclick}  />
            ))}
            {showMenu ? <ContextMenu bgColor={bgColor} text={text} setShowMenu={setShowMenu} positionX={posX} positionY={posY} /> : <></>}
        </ul>
    )
}
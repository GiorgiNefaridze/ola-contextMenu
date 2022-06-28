import { useEffect,useRef } from 'react'
import '../styles/context-menu.scss'

export default function ContextMenu({positionX,positionY,setShowMenu,text,bgColor}) {

    let style = {
        position:"absolute",
        left:`${positionX}px`,
        top:`${positionY}px`,
        borderRadius:10,
        backgroundColor:bgColor
    }
    
    const contextRef= useRef(null)

    useEffect(()=> {
        const clickChecker = (e) => {
            if(contextRef.current !== e.target && !contextRef.current.contains(e.target)){
             setShowMenu(false)
            }
         }
        document.addEventListener('click',clickChecker)
        return () => {document.removeEventListener("click",clickChecker)}
    },[])

    const loggerFn = (text) => {
        console.log(text);
        setShowMenu(false)
    }

    return (
        <div ref={contextRef} style={style} className="context-menu">
            <p>{text}</p>
            <div>
                <button onClick={()=> loggerFn("Edit")}>Edit</button>
                <button onClick={()=> loggerFn("Remove")}>Remove</button>
            </div>
        </div>
    )
}
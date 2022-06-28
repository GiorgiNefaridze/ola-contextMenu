export default function ListItem({hendleclick,li}) {
    return(
        <li onContextMenu={hendleclick} key={li.id} style={{backgroundColor:li.bgColor}}>{li.text}</li>
    )
}
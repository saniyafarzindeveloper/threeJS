import { useSnapshot } from "valtio"
import state from "../store"

export default function CustomButton({title, type, handleClick, customStyles}) {
    const snap = useSnapshot(state);
    const generateStyle = (type) => {
        if(type === 'filled'){
            return{
                backgroundColor: snap.color,
                color:'#fff',
            }
        }
    }
  return (
    <div>
        <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
        style={generateStyle(type)}
        onClick={handleClick}
         >
            {title}
        </button>
    </div>
  )
}

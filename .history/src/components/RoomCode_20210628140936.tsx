import copyImg from '../assets/images/copy.svg'
import '../styles/room-code.scss';
export function RoomCode(){
    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #1235489745132</span>
        </button>
    )
}
import copyImg from '../assets/images/copy.svg'
import '../styles/room-code.scss';

type RoomCodeProps = {
    code: string;
}
export function RoomCode(props: RoomCodeProps){
    function copyRoomCodeToClipboaard(){
        navigator.clipboard.writeText(props.code);
    }
    
    return(
        <button className="room-code">
            <div>
                <img src={copyImg} alt="Copy room code" />
            </div>
            <span>Sala #(props.code)</span>
        </button>
    )
}
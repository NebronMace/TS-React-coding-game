import Land from "../GameLogic/Land";
import Unit from "../GameLogic/Unit";
import "../Styles/GameBoardStyles.css"

interface landInfoProps {land: Land}


function LandInfo(props:landInfoProps) {
    return (
        <div className="_landInfoContainer">
            <div className="_landInfo">


            </div>

        </div>
        
    );
  }
  export default LandInfo;
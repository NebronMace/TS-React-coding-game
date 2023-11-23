import Unit from "../GameLogic/Unit";
import "../Styles/GameBoardStyles.css"
import Card from "./Card";

interface boardProps {unitList: Unit[]}


function PlayerBoard(props:boardProps) {
    return (
        <div className="_playerBoard">
            {props.unitList.map(function(givenUnit:Unit,_index)
                {
                    return <Card unit={givenUnit}/>
                })
            }

        </div>
        
    );
  }
  export default PlayerBoard;
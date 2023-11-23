import GameState from "../GameLogic/GameState";
import "../Styles/GameBoardStyles.css"
import LandInfo from "./LandInfo";
import PlayerBoard from "./PlayerBoard";
import SpellEditor from "./SpellEditor";

interface gameStateProps {gameState: GameState}

function GameDisplay(props:gameStateProps) {
    return (
        <div className="_gameFrame">
            <div className="_textEditorFrame">
                <SpellEditor />
            </div>
            <div className="_boardContent">
                <div className="_boardContainer">
                    <PlayerBoard unitList={props.gameState.enemyBoard}/>

                </div>
                <div className="_boardContainer">
                    <PlayerBoard unitList={props.gameState.playerBoard}/>

                </div>
            </div>
            <div className="_landContent">
                <LandInfo land={props.gameState.enemyLand}/>
                <LandInfo land={props.gameState.playerLand}/>
            </div>
        </div>
        
    );
  }
  export default GameDisplay;
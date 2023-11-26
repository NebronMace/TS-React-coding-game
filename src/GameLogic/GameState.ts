import Initializer from "./Initializer";
import Land from "./Land";
import Unit from "./Unit";

const maxUnitsInBoard = 5;
class GameState{
    
    playerBoard: Unit[] = [];
    enemyBoard: Unit[] = [];
    playerLand: Land = new Land();
    enemyLand: Land = new Land();

    public constructor(){
        Initializer.basicTestCase(this);
    }


    public doTimeUnit(){
        const unitList = this.playerBoard.concat(this.enemyBoard);
        for(const unit of unitList){
            unit.runNextQueries();
        }
        for(const unit of unitList){
            unit.runNextLocalEffects();
        }
        for(const unit of unitList){
            unit.runNextEffects();
        }
    }
    /**
     * Adds a unit to a board.
     * @param unitToAdd The unit to add to the the board in question
     * @param belongsToPlayer True if we should add to the player's board false otherwise
     * @param forceCreation True if we should add the unit even if the board is full.
     * @returns True if we successfully added the unit, false otherwise.
     */
    public addUnit(unitToAdd:Unit, belongsToPlayer:boolean,forceCreation:boolean=false): boolean {
        const boardToConsider = belongsToPlayer ? this.playerBoard : this.enemyBoard;

        if(boardToConsider.length < maxUnitsInBoard){
            boardToConsider.push(unitToAdd);
            return true;
        }
        if(forceCreation){
            boardToConsider[boardToConsider.length - 1].disband();
            boardToConsider[boardToConsider.length - 1]=unitToAdd;
            return true;
        }

        return false;
    }

}

export default GameState;
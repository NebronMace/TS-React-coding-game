import GameState from "./GameState";
import Unit from "./Unit";

class Initializer{
    public static basicTestCase(gameState:GameState){
        const player = new Unit()
        gameState.addUnit(player,true);
    }

}

export default Initializer;
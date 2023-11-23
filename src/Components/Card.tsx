import { useState } from "react";
import "../Styles/GameBoardStyles.css";
import Unit from "../GameLogic/Unit";

interface CardProps{unit:Unit}

function Card(props:CardProps) {
    const [expanded, expand] = useState(false);

    return (
        <div className={"_card"+(expanded? " _expandedCard" : "")}>
            {props.unit.name}
        </div>
    );
  }
  export default Card;
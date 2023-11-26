import Parameter from "./Parameter";
import Spell from "./Spell";
import Unit from "./Unit";

export enum InstructionType{
    "LocalEffect",
    "NonLocalEffect",
    "Query",
    "Logic"
}


interface Instruction{
    parameters: Parameter[];
    do(actingUnit:Unit, actingSpell:Spell, instructionArguments:[Parameter,number][]):void;
    getContextualType(instructionArguments:[Parameter,number][],spell: Spell): InstructionType;
}

export default Instruction;
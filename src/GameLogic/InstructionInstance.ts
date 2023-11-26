import Argumeter from "./Argumeter";
import Instruction, { InstructionType } from "./Instruction";
import Spell from "./Spell";



class InstructionInstance{
    instruction: Instruction;
    instructionArgumeters: Argumeter[];
    parentSpell: Spell;

    /**
     * 
     * @param instruction 
     * @param instructionArgumeters The argumeters of the instruction. Argumeters are half way between parameters and arguments.
     * An instruction is defined with some parameters. When it executes, it needs to be passed some values as arguments matching those parameters.
     * The argumeters are a middle step. They are allowed to be variables rather than values, so to actually do the instruction the argumeters must 
     * be converted into actual values that can be used as arguments.
     */
    constructor(instruction:Instruction,instructionArgumeters:any,parentSpell:Spell){
        this.instruction = instruction;
        this.instructionArgumeters = instructionArgumeters;
        this.parentSpell=parentSpell;
    }

    public getType(){

        //this.instruction.getContextualType(,this.parentSpell);
    }
}

export default InstructionInstance;
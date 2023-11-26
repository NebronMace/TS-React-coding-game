import Spell from "../Spell";
import Compile from "./Compiler";


class TestCase{
    input: string;
    expectedOutput: Spell | undefined;
    constructor(input:string,expectedOutput:Spell|undefined=undefined){
        this.input = input;
        this.expectedOutput= expectedOutput;
    }
    
    public run(): boolean{
        const output = Compile(this.input);
        if (output===undefined && this.expectedOutput===undefined){
            return true;
        }
        return false
    }

}

export default TestCase;
class CompilerError{
    private lineNumber:number = -1;
    private type:string = "";

    constructor(line:number, type:string){
        this.lineNumber=line;
        this.type = type;
    }


    public getText(){
        return this.type+" error occured on line "+this.lineNumber;
    }

}

export default CompilerError
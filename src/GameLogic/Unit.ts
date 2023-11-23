import Item from "./Item";
import StatGroup from "./StatGroup";

export enum baseStatName{
        maxHealth="maxHealth",
        manaPower="manaPower",
        skill="skill",
        favor="favor",
        intellect="intellect",
        stamina="stamina"
}


class Unit{
    private static __idCounter = 0;
    public localId =  Unit.__idCounter++;
    public name= "PlaceHolder Name "+this.localId;
    public isActive = true;
    public items:Item[] = [];
    public baseStats = new StatGroup();
    public health: number=this.baseStats.maxHealth;

    constructor(){
        return;
    }
    
    public setBaseStat(stat:baseStatName,value:number){
        try{
            this.baseStats[stat as keyof(StatGroup)] = value as any;
        }
        catch{
            console.log("Oh no!!!!! You tried to set a stat that didn't exist")
        }
    }

    public getCompiledStats(){
        const compiledStats = new StatGroup();
        compiledStats.add(this.baseStats)
        for(let item of this.items){
            compiledStats.add(item.statModifiers);

        }
    }



    public disband(){
        this.isActive=false;
    }
}

export default Unit;
import Item from "./Item";
import Spell from "./Spell";
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
    public spells:Spell[]=[];
    public items:Item[] = [];
    public baseStats = new StatGroup();
    public health: number=this.baseStats.maxHealth;

    constructor(){
        return;
    }

    /**
     * Run the next set of queries in each attached spell, going all the way until the execution hits an effect.
     */
    public runNextQueries(){

    }

    /**
     * Runs the next local effect for each attached spell if that spell's next effect is a local effect. (Doing all the grammar stuff up until then)
     * Marks the spells that ran an effect as having done their effect for the time unit
     */
    public runNextLocalEffects(){

    }

    /**
     * For each spell that didn't run a local effect, runs the next regular effect for that spell. (Doing all the grammar stuff up until then)
     */
    public runNextEffects(){

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


class StatGroup{
    /**
     * The maximum health of a unit
     */
    public maxHealth=0;

    /**
     * The total amount of mana spendable in a single time unit
     */
    public manaPower=0;
    
    /**
     * The efficiency modifier used to improve the strength of effects for a given mana use
     */
    public skill=0;

    /**
     * The favor with gods, which will be used to help improve the rituals offered
     */
    public favor=0;

    /**
     * The maximum complexity of spells that can be used by the player.
     */
    public intellect=0;

    /**
     * The number of magical items the unit is able to use
     */
    public stamina=0;

    /**
     * 
     * @param statGroupToAdd The stat group to add to this stat group
     */
    public add(statGroupToAdd:StatGroup): void{
        const keys = Object.keys(statGroupToAdd);
        for(let key of keys){
            this[key as keyof(StatGroup)]=this[key as keyof(StatGroup)] as any + statGroupToAdd[key as keyof(StatGroup)] as any;
        }
    }

    constructor(){
    }

}

export default StatGroup;
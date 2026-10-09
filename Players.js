export class Player{
    constructor(name = "", number = 1, age = 17, position = "DEL", country  = "Argentina", team = null, attributes = {}){
        this.name = name;
        this.number = number;
        this.age = age;
        this.country  = country;

        
        this.team = team;
        this.position = this.position;

        this.attributes = attributes;
        this.stats = {
            "goals": 0, 
            "assists": 0, 
            "minutes_played": 0, 
            "appearances": 0, 
            "yellow_cards": 0, 
            "red_cards": 0
        };
    }

    change_number(number){
        this.number = number;
    }
    change_name(name){
        this.name = name;
    }
    change_age(age){
        this.age = age;
    }
    envejecer(years=1){
        this.age += years;
    }

    
    modify_attributes(attribute, value){
        this.attributes[attribute] = value;
    }

    add_goal(goals){
        this.stats.goals += goals;
    }
    add_assists(assists){
        this.stats.assists += assists;
    }
    add_red_cards(red_cards){
        this.stats.red_cards += red_cards;
    }
    add_yellow_card(yellow_cards){
        this.stats.yellow_cards += yellow_cards;
    }
    add_appearance(){
        this.stats.appearances++;
    }
    add_match(goals, assists, minutes, yellow_cards, red_card){
        this.stats.goals += goals;
        this.stats.assists += assists;
        this.stats.minutes += minutes;
        this.stats.yellow_cards += yellow_cards;
        this.stats.red_cards += red_card;
        this.stats.appearances++;
    }

    get_goals_per_match()
    {
        const goals = this.stats.goals;
        const matches_played = this.stats.appearances;
        if(matches_played === 0) return 0;
        return goals / matches_played;
    }
    get_assists_per_match()
    {
        const assists = this.stats.assists;
        const matches_played = this.stats.appearances;
        if(matches_played === 0) return 0;
        return assists / matches_played;
    }
    get_redCards_per_match()
    {
        const redCards = this.stats.red_cards;
        const matches_played = this.stats.appearances;
        if(matches_played === 0) return 0;
        return redCards / matches_played;
    }
    get_goal_contributions(){
        const assists = this.stats.assists;
        const goals = this.stats.goals;
        return goals + assists;
    }
}

export class Team{
    constructor(name, players = [], coach = ""){
        this.name = name;
        this.players = players;
        this.coach = coach;
    }

    change_coach(coach){
        this.coach = coach;
    }

    add_player(player){
        player.team = this;
        this.players.push(player);
    }
    remove_player(player_number){
        const players = this.players.filter(player => player.number !== player_number);
        this.players = players;
    }

    change_name(name){
        this.name = name;
    }
}
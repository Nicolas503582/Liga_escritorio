
class Competition{
    constructor(country, teams){
        this.country = country;
        this.teams = teams;
    }
}

export class League extends Competition{
    constructor(country = "Argentina", teams = []){
        super(country, teams);
        this.points = Object.fromEntries(
            teams.map(team => [
                team.id,
                {
                    points: 0,
                    wins: 0,
                    draws: 0,
                    losses: 0,
                    goals_for: 0,
                    goals_against: 0
                }
            ])
        );
    }

    update_match(match){
        const Local = match.teams[0];
        const Away = match.teams[1];
        if(match.goals[0] > match.goals[1])
        {
            this.winner(Local.id);
            this.loser(Away.id);
        }
        else if(match.goals[0] < match.goals[1])
        {
            this.loser(Local.id);
            this.winner(Away.id);
        }
        else{
            this.draw(Local.id, Away.id);
        }
        
    }
    loser(team_id){
        this.points[team_id].points += 0;
        this.points[team_id].losses++;
    }
    winner(team_id){
        this.points[team_id].points += 3;
        this.points[team_id].wins++;
    }
    draw(team1_id, team2_id){
        this.points[team1_id].points += 1;
        this.points[team2_id].points += 1;
        this.points[team1_id].draws ++;
        this.points[team2_id].draws ++;
    }
    
}
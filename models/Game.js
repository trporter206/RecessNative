class Game {
    static validSports = ['pickleball', 'tennis', 'basketball'];
  
    constructor(name = 'Game', date, time, sportType, description) {
      this.name = name;
      this.date = date;
      this.time = time;
      this.sportType = Game.validSports.includes(sportType) ? sportType : Game.validSports[0];
      this.description = description;
    }
  }
  
  const gamesList = [
    new Game('Pickleball Championship', '2023-12-01', '15:00', 'pickleball', 'Local pickleball championship.'),
    new Game('Tennis Open', '2023-12-02', '17:00', 'tennis', 'Friendly tennis open tournament.'),
    new Game('Basketball Finals', '2023-12-03', '10:00', 'basketball', 'High school basketball finals.'),
    new Game('City Pickleball', '2023-12-04', '13:00', 'pickleball', 'Citywide pickleball tournament.'),
    new Game('Tennis Friendly Match', '2023-12-05', '16:00', 'tennis', 'Tennis friendly match.'),
    new Game('Basketball League Game', '2023-12-06', '19:00', 'basketball', 'Local basketball league game.'),
    new Game('Pickleball Social', '2023-12-07', '14:00', 'pickleball', 'Social pickleball game.'),
    new Game('Teen Tennis Tournament', '2023-12-08', '20:00', 'tennis', 'Teen tennis tournament.'),
    new Game('Basketball Practice', '2023-12-09', '12:00', 'basketball', 'Basketball team practice.'),
    new Game('Pickleball Beginners', '2023-12-10', '09:00', 'pickleball', 'Pickleball session for beginners.')
  ];
  
  export { Game, gamesList }
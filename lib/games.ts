export class Game {
  public id: number = games.length;
  public name: string;
  public participants: Array<Participant> = [];
  public rounds: Array<Round> = [];
  public code: string;
  public public: boolean = false;
  
  constructor({ name }: { name: string }) {
    this.code = (Math.random() + 1).toString(36).substring(7);
    this.name = name;
  }
}

export class Participant {
  private game: Game;
  public id: number;
  public name: string;
  public avatar: string;
  public points: number = 0;

  constructor({ game, name, avatar }: { game: Game, name: string, avatar: string }) {
    this.game = game;
    this.id = this.game.participants.length;
    this.name = name;
    this.avatar = avatar;
  }
}

export class Round {
  public id: number;
  public image: string;
  /**
   * An array of submitted Spotify song URLs
   */
  public submissions: Array<string> = [];

  constructor({ id, image }: { id: number, image: string }) {
    this.id = id;
    this.image = image;
  }
}

const games: Array<Game> = [];

export const addGame = ({ name, creator }: { name: string, creator: { name: string, avatar: string } }) => {
  const game = new Game({ name: name });
  game.participants.push(new Participant({
    game: game,
    name: creator.name,
    avatar: creator.avatar
  }));
  games.push(game);
  console.log(games);
}

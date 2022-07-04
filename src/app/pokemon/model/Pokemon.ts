export class Pokemon {
  name: string;
  id: number;
  hp: number;
  cp: number;
  picture: string;
  types: Array<string>;
  created: Date;
  

  constructor(
     name: string = "Entrer un nom",
     hp: number = 100,
     cp: number = 10,
     picture: string = "https://assets.pokemon.com/assets/cms2/img/pokedex/full/xxx.png",
     types: Array<string> = ["Normal"],
     created: Date = new Date(),
  ) {
    this.name = name;
    this.hp = hp;
    this.cp = cp;
    this.picture = picture;
    this.types = types;
    this.created = created;
  } 
}

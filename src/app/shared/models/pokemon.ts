export class Pokemon {
    constructor(
      public name: string,
      public id: string,
      public type: string,
      public ability: string,
      public height: string,
      public weight: string,
      public imgUrl: string,
      public level: string = "1",
    ) {}
  }

export class Keg {
  public done: boolean = false;
  constructor(
    public name: string,
    public type: string,
    public price: string,
    public content: string)
    { }
}

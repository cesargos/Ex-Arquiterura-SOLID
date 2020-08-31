import { uuid } from 'uuidv4';

export class User {
  
  public readonly id: string;

  public name: string;
  public email: string;
  public password: string;

  //Omit passa todas as propriedade de User menos a desejada no caso a id, no qual e opcional
  constructor( props: Omit<User, 'id'>, id?: string){
    // e a mesma coisa que fazer const this.name =props.name; const this.email = props.email... etc
    Object.assign(this, props);

    if ( !id ) {
      this.id = uuid();
    }
  }
}
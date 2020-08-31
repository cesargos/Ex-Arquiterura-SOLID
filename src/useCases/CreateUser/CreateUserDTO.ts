// Data Transfer Object => usado para transferir dados de uma camada para outra
export interface ICreateUserRequestDTO {
  name: string;
  email: string;
  password: string;
}
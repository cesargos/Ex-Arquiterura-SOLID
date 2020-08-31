// S => essa clas tem apenas a responsabilidade de criar o usuario caso tenha email diferente sem importar com como vai ser salvo (tecnologia) 
// somente esse arquivo detem toda logica de criar usuarios(n tera outros) nao importando de onde vem a requisicao vai passar por ele
// L => por usar a interface IUserRepository(na qual contem a tipagem das funcoes) para instanciar a funcao assim nao importa a tecnologia que sera usada desde q tenha esses metodos
// D => estou dependendo da interface de outra classe que faz a impementacao do usuario(nao e essa classe que faz o insert) 
// essa class nao sabe como sera enviado o email so sabe o protocolo usado atraves da interface
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    private mailProvider: IMailProvider,
  ){}
  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);
  
    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = new User(data);
    await this.usersRepository.save(user);

    await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email
      },
      from:{
        name: 'Atendimento <minha empresa>',
        email: 'atendimento@minhaempresa.com'
      },
      subject: "Seja bem-vindo a plataforma",
      body: '<h1>SEJA BEM-VINDO!</h1><p>Voce ja pode fazer login em nossa plataforma.</p>'
    })
  }
}
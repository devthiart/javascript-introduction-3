import {Gerente} from "./Funcionario/Gerente.js";
import {Diretor} from "./Funcionario/Diretor.js";
import {SistemaAutenticacao} from "./SistemaAutenticacao.js";
import { Cliente } from "./Cliente.js";

const diretor = new Diretor("Rodrigo", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Ricardo", 5000, 12378945601);
gerente.cadastrarSenha("456123");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "456123");

const cliente = new Cliente("Lais", 78945612389, "123");

const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);
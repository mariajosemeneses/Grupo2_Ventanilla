import { Cliente } from "../cliente/cliente";
import { Cuenta } from "./cuenta";

export class CuentaIntervinientes {
  codCuenta: Cuenta;
  codClientePersona: Cliente;
  fechaInicio: Date;
  fechaFin: Date;
  estado: string;
}



import { Component } from '@angular/core';
import { Cliente } from '../models/cliente.model';

@Component({
  selector: 'app-deposito',
  templateUrl: './deposito.component.html',
  styleUrls: ['./deposito.component.css'],
})
export class DepositoComponent {
  numeroCuenta: string = '';
  clienteEncontrado: Cliente | null = null;
  nombreDepositante: string = '';
  montoADepositar: string = '';

  buscarCliente() {
     // Obtener el número de cuenta ingresado
     var numeroCuenta = document.getElementById('numeroCuenta').value;

     // Lógica de backend (simulada)
     var clienteEncontrado = obtenerClientePorNumeroCuenta(numeroCuenta);

     // Verificar si se encontró el cliente
     if (clienteEncontrado) {
         mostrarPaginaCliente(clienteEncontrado);
     } else {
         alert('Cliente no encontrado. Verifique el número de cuenta.');
     }
  }

  function obtenerClientePorNumeroCuenta(numeroCuenta) {
    // Simulación de datos.
    var clientes = [
        { numeroCuenta: '123456789', nombre: 'Juan', apellido: 'Pérez', tipoCuenta: 'Ahorros' },
        { numeroCuenta: '987654321', nombre: 'María', apellido: 'Gómez', tipoCuenta: 'Corriente' }
    ];

    // Buscar el cliente por número de cuenta
    return clientes.find(cliente => cliente.numeroCuenta === numeroCuenta);
}

function mostrarPaginaCliente(cliente) {
    // Ocultar la página principal
    document.getElementById('main').style.display = 'none';

    // Crear contenedor de resultados (página del cliente)
    var paginaClienteContainer = document.getElementById('paginaCliente');
    paginaClienteContainer.innerHTML = `<h2 >Datos del Depósito</h2>
                                       <form id="clienteForm">
                                           <label for="nombre">Nombre:</label>
                                           <input type="text" id="nombre" value="${cliente.nombre}" readonly>

                                           <label for="apellido">Apellido:</label>
                                           <input type="text" id="apellido" value="${cliente.apellido}" readonly>

                                           <label for="tipoCuenta">Tipo Cuenta:</label>
                                           <input type="text" id="tipoCuenta" value="${cliente.tipoCuenta}" readonly>

                                           <label for="nombreDepositante">Nombre del Depositante:</label>
                                           <input type="text" id="nombreDepositante" placeholder="Ingrese el nombre">

                                           <label for="montoADepositar">monto:</label>
                                           <input type="text" id="montoADepositar" placeholder="Ingrese el monto">
                                       </form>
                                       <button type="button" onclick="enviarDatos()">Aceptar</button>
                                       <button type="button" onclick="regresarAMain()">Regresar</button>`;
// Aplicar estilos al contenido generado
var formElements = paginaClienteContainer.querySelectorAll('form input, form label');
formElements.forEach(element => {
    element.style.marginBottom = '7px';
});

var h2Element = paginaClienteContainer.querySelector('h2');
    h2Element.style.color = '#3a7c79';
    h2Element.style.fontSize = '20px';

var buttonElement = paginaClienteContainer.querySelector('button');
buttonElement.style.marginLeft='250px';
buttonElement.style.marginBottom='10px';



    // Mostrar la página del cliente
    paginaClienteContainer.style.display = 'block';
}

function enviarDatos() {

     // Almacenar los datos enviados desde el formulario del cliente
     var nombre = document.getElementById('nombre').value;
     var apellido = document.getElementById('apellido').value;
     var tipoCuenta = document.getElementById('tipoCuenta').value;
     var nombreDepositante = document.getElementById('nombreDepositante').value;
     var montoADepositar = document.getElementById('montoADepositar').value;

     // Ocultar la página del cliente
     document.getElementById('paginaCliente').style.display = 'none';

     // Crear contenedor de resultados finales (página de resultados)
     var resultadosFinalesContainer = document.getElementById('paginaResultados');
     resultadosFinalesContainer.innerHTML = `<h2>Confirmar Deposito</h2>
                                             <form id="resultadosForm">
                                             <p><strong>Nombre:</strong> ${nombre}</p>
                                             <p><strong>Apellido:</strong> ${apellido}</p>
                                             <p><strong>tipoCuenta:</strong> ${tipoCuenta}</p>
                                             <p><strong>Nombre del Depositante:</strong> ${nombreDepositante}</p>
                                             <p><strong>Monto:</strong> ${montoADepositar}</p>
                                             </form>
                                             <button type="button" onclick="confirmar()">Confirmar</button>
                                             <button type="button" onclick="cancelar()">Cancelar</button>
                                             <button type="button" onclick="regresarAMain()">Regresar</button>`;

    var h2Element = resultadosFinalesContainer.querySelector('h2');
     h2Element.style.color = '#3a7c79';
    h2Element.style.fontSize = '20px';
    h2Element.style.marginLeft='10px';

     var pElements = resultadosFinalesContainer.querySelectorAll('form p');

     // Iterar sobre todos los elementos <p> y establecer el color
        pElements.forEach(function(pElement) {
            pElement.style.color = '#000000';
        });

         // Establecer el tamaño de fuente para todos los elementos <p>
         resultadosFinalesContainer.style.fontSize = '50px';
         resultadosFinalesContainer.style.marginLeft='250px';

        // Mostrar la página de resultados
      resultadosFinalesContainer.style.display = 'block';
 }




function confirmar() {
    // Obtener los datos del formulario de resultados finales
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var tipoCuenta = document.getElementById('tipoCuenta').value;
    var nombreDepositante = document.getElementById('nombreDepositante').value;
    var montoADepositar = document.getElementById('montoADepositar').value;

    // Ocultar otras páginas
    document.getElementById('paginaResultados').style.display = 'none';
    document.getElementById('cancelar').style.display = 'none';

    // Crear contenedor de búsqueda exitosa
    var confirmarContainer = document.getElementById('confirmar');
    confirmarContainer.innerHTML = `<h2>Depósito generado con exito</h2>
                                          <p><strong>Nombre:</strong> ${nombre}</p>
                                          <p><strong>Apellido:</strong> ${apellido}</p>
                                          <p><strong>tipoCuenta:</strong> ${tipoCuenta}</p>
                                          <p><strong>Nombre del Depositante:</strong> ${nombreDepositante}</p>
                                          <p><strong>monto:</strong> ${montoADepositar}</p>
                                          <p><strong>Estado :</strong> Exitoso</p>
                                          <button type="button" onclick="regresarAMain()">Finalizar</button>`;


    var h2Element = confirmarContainer.querySelector('h2');
     h2Element.style.color = '#3a7c79';
    h2Element.style.fontSize = '20px';

    var pElements = confirmarContainer.querySelectorAll('p');

     // Iterar sobre todos los elementos <p> y establecer el color
        pElements.forEach(function(pElement) {
            pElement.style.color = '#000000';
        });

         // Establecer el tamaño de fuente para todos los elementos <p>
         confirmarContainer.style.fontSize = '50px';
         confirmarContainer.style.marginLeft='250px';


                                          // Mostrar la página de búsqueda exitosa
    confirmarContainer.style.display = 'block';
}


function regresarAMain() {
    // Limpiar el campo de búsqueda
    document.getElementById('numeroCuenta').value = '';

    // Mostrar la página principal
    document.getElementById('main').style.display = 'block';

    // Ocultar todas las demás páginas
    document.getElementById('paginaCliente').style.display = 'none';
    document.getElementById('paginaResultados').style.display = 'none';
    document.getElementById('confirmar').style.display = 'none';
    document.getElementById('cancelar').style.display = 'none';
}
}

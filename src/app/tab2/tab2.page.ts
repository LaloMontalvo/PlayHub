import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  nombrePartida: string = '';
  juego: string = '';
  participantes: number | null = null;
  horaInicio: string = '';
  partidasCreadas: Array<{ 
    nombre: string; 
    juego: string;
    participantes: number;
    horaInicio: string;
    estado: string; 
  }> = [];

  crearPartida() {
    if (this.nombrePartida.trim() && this.juego.trim() && this.participantes && this.horaInicio) {
      const existe = this.partidasCreadas.some(
        (partida) => partida.nombre.toLowerCase() === this.nombrePartida.toLowerCase()
      );

      if (!existe) {
        this.partidasCreadas.push({
          nombre: this.nombrePartida,
          juego: this.juego,
          participantes: this.participantes,
          horaInicio: this.horaInicio,
          estado: 'Pendiente',
        });

        // Limpiar formulario después de crear la partida
        this.nombrePartida = '';
        this.juego = '';
        this.participantes = null;
        this.horaInicio = '';
      } else {
        alert('Ya existe una partida con ese nombre');
      }
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  unirseAPartida(partida: { nombre: string; estado: string }) {
    if (partida.estado === 'Pendiente') {
      partida.estado = 'En curso';
      console.log(`Unido a la partida: ${partida.nombre}`);
    } else {
      alert('La partida ya está en curso o finalizada');
    }
  }

  finalizarPartida(partida: { nombre: string; estado: string }) {
    if (partida.estado === 'En curso') {
      partida.estado = 'Finalizada';
      console.log(`Partida finalizada: ${partida.nombre}`);
    } else {
      alert('Solo puedes finalizar partidas en curso');
    }
  }

  eliminarPartida(index: number) {
    this.partidasCreadas.splice(index, 1);
  }
}

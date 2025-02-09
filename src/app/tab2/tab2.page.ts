import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false, // Asegurado que NO es standalone
})
export class Tab2Page {
  nombrePartida: string = '';
  partidasCreadas: Array<{ nombre: string; estado: string }> = []; // Definir tipo correctamente

  crearPartida() {
    if (this.nombrePartida.trim()) {
      this.partidasCreadas.push({
        nombre: this.nombrePartida,
        estado: 'Pendiente',
      });
      this.nombrePartida = ''; // Limpiar input después de crear
    }
  }

  unirseAPartida(partida: { nombre: string; estado: string }) {
    console.log(`Unido a la partida: ${partida.nombre}`);
    partida.estado = 'En curso'; // Cambiar estado
  }
}

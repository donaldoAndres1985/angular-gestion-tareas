import { Component } from '@angular/core';
import { Tarea } from '../../../../core/models/tarea';
import { TareaService } from '../../../../core/services/tarea';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listar-tareas',
  imports: [CommonModule,RouterModule],
  templateUrl: './listar-tareas.html',
  styleUrl: './listar-tareas.css',
})
export class ListarTareasComponent {

  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) {}

  ngOnInit(): void {
    this.cargarTareas();
  }

  cargarTareas(): void {
    this.tareaService.getAllTareas().subscribe({
      next: (tareas) => this.tareas = tareas,
      error: (err) => console.error(err)
    });
  }

  eliminarTarea(id?: number): void {
    if (!id) return;

    this.tareaService.deleteTarea(id).subscribe(() => {
      this.cargarTareas();
    });
  }
}

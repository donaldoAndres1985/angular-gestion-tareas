import { Component, ElementRef, ViewChild } from '@angular/core';
import { TareaService } from '../../../../core/services/tarea';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Tarea } from '../../../../core/models/tarea';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea-form',
  imports: [FormsModule, RouterModule],
  templateUrl: './tarea-form.html',
  styleUrl: './tarea-form.css',
})
export class TareaFormComponent {

  @ViewChild('tituloInput')
  tituloInput!: ElementRef<HTMLInputElement>;

  tarea: Tarea = new Tarea();

  constructor(
    private tareaService: TareaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tareaService.getTareaById(+id).subscribe(tarea => {
        this.tarea = tarea;
      });
    }
  }

  ngAfterViewInit(): void {
    this.tituloInput.nativeElement.focus();
  }

  onSaveTarea(): void {
    if (this.tarea.id) {
      this.tareaService.updateTarea(this.tarea.id, this.tarea).subscribe(() => {
        this.router.navigate(['/tareas']);
      });
    } else {
      this.tareaService.createTarea(this.tarea).subscribe(() => {
        this.router.navigate(['/tareas']);
      });
    }
  }

}

import { Routes } from '@angular/router';
import { ListarTareasComponent } from './features/tareas/pages/listar-tareas/listar-tareas';
import { TareaFormComponent } from './features/tareas/components/tarea-form/tarea-form';

export const routes: Routes = [
  {path: '',redirectTo: 'tareas',pathMatch: 'full'},
  {path: 'tareas',component: ListarTareasComponent},
  {path: 'tareas/nueva',component: TareaFormComponent},
  {path: 'tareas/editar/:id',component: TareaFormComponent},
  {path: '**',redirectTo: 'tareas'}
];

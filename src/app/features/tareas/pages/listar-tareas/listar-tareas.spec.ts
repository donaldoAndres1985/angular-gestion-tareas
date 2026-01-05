import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarTareas } from './listar-tareas';

describe('ListarTareas', () => {
  let component: ListarTareas;
  let fixture: ComponentFixture<ListarTareas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarTareas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarTareas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

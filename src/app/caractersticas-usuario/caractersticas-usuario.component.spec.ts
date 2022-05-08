import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractersticasUsuarioComponent } from './caractersticas-usuario.component';

describe('CaractersticasUsuarioComponent', () => {
  let component: CaractersticasUsuarioComponent;
  let fixture: ComponentFixture<CaractersticasUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaractersticasUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaractersticasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

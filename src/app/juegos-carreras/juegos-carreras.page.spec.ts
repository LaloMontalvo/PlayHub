import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosCarrerasPage } from './juegos-carreras.page';

describe('JuegosCarrerasPage', () => {
  let component: JuegosCarrerasPage;
  let fixture: ComponentFixture<JuegosCarrerasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosCarrerasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

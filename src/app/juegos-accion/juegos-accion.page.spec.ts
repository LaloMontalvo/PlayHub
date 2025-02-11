import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosAccionPage } from './juegos-accion.page';

describe('JuegosAccionPage', () => {
  let component: JuegosAccionPage;
  let fixture: ComponentFixture<JuegosAccionPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosAccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

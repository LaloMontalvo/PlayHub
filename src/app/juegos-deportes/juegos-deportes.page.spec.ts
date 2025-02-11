import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosDeportesPage } from './juegos-deportes.page';

describe('JuegosDeportesPage', () => {
  let component: JuegosDeportesPage;
  let fixture: ComponentFixture<JuegosDeportesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosDeportesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosAventuraPage } from './juegos-aventura.page';

describe('JuegosAventuraPage', () => {
  let component: JuegosAventuraPage;
  let fixture: ComponentFixture<JuegosAventuraPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosAventuraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

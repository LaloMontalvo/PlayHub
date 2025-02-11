import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosRolPage } from './juegos-rol.page';

describe('JuegosRolPage', () => {
  let component: JuegosRolPage;
  let fixture: ComponentFixture<JuegosRolPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosRolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

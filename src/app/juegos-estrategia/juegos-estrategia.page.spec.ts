import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuegosEstrategiaPage } from './juegos-estrategia.page';

describe('JuegosEstrategiaPage', () => {
  let component: JuegosEstrategiaPage;
  let fixture: ComponentFixture<JuegosEstrategiaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosEstrategiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

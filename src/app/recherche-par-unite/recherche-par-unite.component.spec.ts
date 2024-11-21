import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParUniteComponent } from './recherche-par-unite.component';

describe('RechercheParUniteComponent', () => {
  let component: RechercheParUniteComponent;
  let fixture: ComponentFixture<RechercheParUniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercheParUniteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheParUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

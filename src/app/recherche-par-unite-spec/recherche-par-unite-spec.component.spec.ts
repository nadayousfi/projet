import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParUniteSpecComponent } from './recherche-par-unite-spec.component';

describe('RechercheParUniteSpecComponent', () => {
  let component: RechercheParUniteSpecComponent;
  let fixture: ComponentFixture<RechercheParUniteSpecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercheParUniteSpecComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheParUniteSpecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

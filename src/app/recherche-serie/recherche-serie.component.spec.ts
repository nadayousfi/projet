import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheSerieComponent } from './recherche-serie.component';

describe('RechercheSerieComponent', () => {
  let component: RechercheSerieComponent;
  let fixture: ComponentFixture<RechercheSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercheSerieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

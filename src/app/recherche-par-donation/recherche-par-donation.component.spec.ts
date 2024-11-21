import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheParDonationComponent } from './recherche-par-donation.component';

describe('RechercheParDonationComponent', () => {
  let component: RechercheParDonationComponent;
  let fixture: ComponentFixture<RechercheParDonationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechercheParDonationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RechercheParDonationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

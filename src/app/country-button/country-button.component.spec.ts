import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryButtonComponent } from './country-button.component';

describe('CountryButtonComponent', () => {
  let component: CountryButtonComponent;
  let fixture: ComponentFixture<CountryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountryButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CountryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

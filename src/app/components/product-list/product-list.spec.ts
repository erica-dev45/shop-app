import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Productlist } from './product-list';

describe('ProductList', () => {
  let component: Productlist;
  let fixture: ComponentFixture<Productlist>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Productlist],
    }).compileComponents();

    fixture = TestBed.createComponent(Productlist);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsToBuyDetailComponent } from './items-to-buy-detail.component';

describe('ItemsToBuyDetailComponent', () => {
  let component: ItemsToBuyDetailComponent;
  let fixture: ComponentFixture<ItemsToBuyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsToBuyDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsToBuyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

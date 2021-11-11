import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsToBuyComponent } from './items-to-buy.component';

describe('ItemsToBuyComponent', () => {
  let component: ItemsToBuyComponent;
  let fixture: ComponentFixture<ItemsToBuyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsToBuyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsToBuyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

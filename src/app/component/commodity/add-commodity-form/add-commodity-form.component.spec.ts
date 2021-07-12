import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCommodityFormComponent } from './add-commodity-form.component';

describe('AddCommodityFormComponent', () => {
  let component: AddCommodityFormComponent;
  let fixture: ComponentFixture<AddCommodityFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCommodityFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCommodityFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

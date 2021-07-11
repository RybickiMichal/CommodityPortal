import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndustrialResourcesComponent } from './industrial-resources.component';

describe('IndustrialResourcesComponent', () => {
  let component: IndustrialResourcesComponent;
  let fixture: ComponentFixture<IndustrialResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndustrialResourcesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndustrialResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

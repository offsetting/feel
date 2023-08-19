import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlexGridComponent } from './flex-grid.component';

describe('FlexGridComponent', () => {
  let component: FlexGridComponent;
  let fixture: ComponentFixture<FlexGridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FlexGridComponent]
    });
    fixture = TestBed.createComponent(FlexGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

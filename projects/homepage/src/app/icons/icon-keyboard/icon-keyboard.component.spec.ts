import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconKeyboardComponent } from './icon-keyboard.component';

describe('IconKeyboardComponent', () => {
  let component: IconKeyboardComponent;
  let fixture: ComponentFixture<IconKeyboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconKeyboardComponent]
    });
    fixture = TestBed.createComponent(IconKeyboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

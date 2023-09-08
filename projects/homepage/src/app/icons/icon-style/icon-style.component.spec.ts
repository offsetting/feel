import {ComponentFixture, TestBed} from '@angular/core/testing';
import {IconStyleComponent} from './icon-style.component';

describe('IconStyleComponent', () => {
  let component: IconStyleComponent;
  let fixture: ComponentFixture<IconStyleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IconStyleComponent]
    });
    fixture = TestBed.createComponent(IconStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

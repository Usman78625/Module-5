import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlectComponent } from './slect.component';

describe('SlectComponent', () => {
  let component: SlectComponent;
  let fixture: ComponentFixture<SlectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SlectComponent]
    });
    fixture = TestBed.createComponent(SlectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

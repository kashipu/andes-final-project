import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroCultureComponent } from './hero-culture.component';

describe('HeroCultureComponent', () => {
  let component: HeroCultureComponent;
  let fixture: ComponentFixture<HeroCultureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeroCultureComponent]
    });
    fixture = TestBed.createComponent(HeroCultureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

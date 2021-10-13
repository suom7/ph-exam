import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaIIiiIvComponent } from './area-i-iii-iv.component';

describe('AreaIIiiIvComponent', () => {
  let component: AreaIIiiIvComponent;
  let fixture: ComponentFixture<AreaIIiiIvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaIIiiIvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaIIiiIvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

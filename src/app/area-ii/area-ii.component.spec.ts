import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaIiComponent } from './area-ii.component';

describe('AreaIiComponent', () => {
  let component: AreaIiComponent;
  let fixture: ComponentFixture<AreaIiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AreaIiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AreaIiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

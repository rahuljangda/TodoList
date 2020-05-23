import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicTodComponent } from './basic-tod.component';

describe('BasicTodComponent', () => {
  let component: BasicTodComponent;
  let fixture: ComponentFixture<BasicTodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicTodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicTodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

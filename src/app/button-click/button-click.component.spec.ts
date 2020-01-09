import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonClickComponent } from './button-click.component';

describe('ButtonClickComponent', () => {
  let component: ButtonClickComponent;
  let fixture: ComponentFixture<ButtonClickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonClickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

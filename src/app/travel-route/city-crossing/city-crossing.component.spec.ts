/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityCrossingComponent } from './city-crossing.component';

describe('CityCrossingComponent', () => {
  let component: CityCrossingComponent;
  let fixture: ComponentFixture<CityCrossingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityCrossingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityCrossingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

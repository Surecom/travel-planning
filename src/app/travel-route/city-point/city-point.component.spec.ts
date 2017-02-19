/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityPointComponent } from './city-point.component';

describe('CityPointComponent', () => {
  let component: CityPointComponent;
  let fixture: ComponentFixture<CityPointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityPointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

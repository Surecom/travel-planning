/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CityViewComponent } from './city-view.component';

describe('CityViewComponent', () => {
  let component: CityViewComponent;
  let fixture: ComponentFixture<CityViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

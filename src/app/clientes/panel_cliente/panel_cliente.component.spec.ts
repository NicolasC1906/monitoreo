/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Panel_clienteComponent } from './panel_cliente.component';

describe('Panel_clienteComponent', () => {
  let component: Panel_clienteComponent;
  let fixture: ComponentFixture<Panel_clienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Panel_clienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Panel_clienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

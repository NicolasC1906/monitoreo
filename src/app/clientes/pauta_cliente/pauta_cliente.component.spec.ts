/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Pauta_clienteComponent } from './pauta_cliente.component';

describe('Pauta_clienteComponent', () => {
  let component: Pauta_clienteComponent;
  let fixture: ComponentFixture<Pauta_clienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pauta_clienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pauta_clienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

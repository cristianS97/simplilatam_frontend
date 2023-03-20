import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaformComponent } from './empresaform.component';

describe('EmpresaformComponent', () => {
  let component: EmpresaformComponent;
  let fixture: ComponentFixture<EmpresaformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

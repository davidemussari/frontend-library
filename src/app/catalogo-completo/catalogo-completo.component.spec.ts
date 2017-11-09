import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCompletoComponent } from './catalogo-completo.component';

describe('CatalogoCompletoComponent', () => {
  let component: CatalogoCompletoComponent;
  let fixture: ComponentFixture<CatalogoCompletoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoCompletoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoCompletoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

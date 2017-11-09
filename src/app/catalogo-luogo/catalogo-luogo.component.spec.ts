import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoLuogoComponent } from './catalogo-luogo.component';

describe('CatalogoLuogoComponent', () => {
  let component: CatalogoLuogoComponent;
  let fixture: ComponentFixture<CatalogoLuogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoLuogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoLuogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

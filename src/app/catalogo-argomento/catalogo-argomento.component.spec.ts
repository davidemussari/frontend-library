import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoArgomentoComponent } from './catalogo-argomento.component';

describe('CatalogoArgomentoComponent', () => {
  let component: CatalogoArgomentoComponent;
  let fixture: ComponentFixture<CatalogoArgomentoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoArgomentoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoArgomentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

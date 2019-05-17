import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PippoArticoliListComponent } from './pippo-articoli-list.component';

describe('PippoArticoliListComponent', () => {
  let component: PippoArticoliListComponent;
  let fixture: ComponentFixture<PippoArticoliListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PippoArticoliListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PippoArticoliListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

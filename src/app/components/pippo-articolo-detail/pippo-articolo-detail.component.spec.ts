import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PippoArticoloDetailComponent } from './pippo-articolo-detail.component';

describe('PippoArticoloDetailComponent', () => {
  let component: PippoArticoloDetailComponent;
  let fixture: ComponentFixture<PippoArticoloDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PippoArticoloDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PippoArticoloDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

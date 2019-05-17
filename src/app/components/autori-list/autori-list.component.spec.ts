import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoriListComponent } from './autori-list.component';

describe('AutoriListComponent', () => {
  let component: AutoriListComponent;
  let fixture: ComponentFixture<AutoriListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AutoriListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoriListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnedPageComponent } from './owned-page.component';

describe('OwnedPageComponent', () => {
  let component: OwnedPageComponent;
  let fixture: ComponentFixture<OwnedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateClaimsComponent } from './create-claims.component';

describe('CreateClaimsComponent', () => {
  let component: CreateClaimsComponent;
  let fixture: ComponentFixture<CreateClaimsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateClaimsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateClaimsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

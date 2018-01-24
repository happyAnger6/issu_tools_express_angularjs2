import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserModulesInfoComponent } from './user-modules-info.component';

describe('UserModulesInfoComponent', () => {
  let component: UserModulesInfoComponent;
  let fixture: ComponentFixture<UserModulesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserModulesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserModulesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleDeliverInfoComponent } from './module-deliver-info.component';

describe('ModuleDeliverInfoComponent', () => {
  let component: ModuleDeliverInfoComponent;
  let fixture: ComponentFixture<ModuleDeliverInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModuleDeliverInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleDeliverInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmplListComponent } from './empl-list.component';

describe('EmplListComponent', () => {
  let component: EmplListComponent;
  let fixture: ComponentFixture<EmplListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmplListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmplListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

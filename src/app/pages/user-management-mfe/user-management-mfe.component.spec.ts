import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserManagementMfeComponent } from './user-management-mfe.component';

describe('UserManagementMfeComponent', () => {
  let component: UserManagementMfeComponent;
  let fixture: ComponentFixture<UserManagementMfeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserManagementMfeComponent]
    });
    fixture = TestBed.createComponent(UserManagementMfeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

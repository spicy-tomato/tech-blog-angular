import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsProfileComponent } from './profile.component';

describe('InfoComponent', () => {
  let component: UserDetailsProfileComponent;
  let fixture: ComponentFixture<UserDetailsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsProfileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsInfoComponent } from './info.component';

describe('InfoComponent', () => {
  let component: UserDetailsInfoComponent;
  let fixture: ComponentFixture<UserDetailsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

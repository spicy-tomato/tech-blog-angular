import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsSubStoriesComponent } from './sub-stories.component';

describe('SubStoriesComponent', () => {
  let component: UserDetailsSubStoriesComponent;
  let fixture: ComponentFixture<UserDetailsSubStoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDetailsSubStoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserDetailsSubStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

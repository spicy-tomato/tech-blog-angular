import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseMobileSidebarComponent } from './close-mobile-sidebar.component';

describe('CloseMobileSidebarComponent', () => {
  let component: CloseMobileSidebarComponent;
  let fixture: ComponentFixture<CloseMobileSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CloseMobileSidebarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CloseMobileSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherNavigationLinksComponent } from './other-navigation-links.component';

describe('OtherNavigationLinksComponent', () => {
  let component: OtherNavigationLinksComponent;
  let fixture: ComponentFixture<OtherNavigationLinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtherNavigationLinksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherNavigationLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

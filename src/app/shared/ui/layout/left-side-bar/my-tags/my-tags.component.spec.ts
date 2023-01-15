import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTagsComponent } from './my-tags.component';

describe('PopularTagsComponent', () => {
  let component: MyTagsComponent;
  let fixture: ComponentFixture<MyTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

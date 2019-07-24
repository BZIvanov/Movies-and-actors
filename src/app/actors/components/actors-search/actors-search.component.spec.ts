import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorsSearchComponent } from './actors-search.component';

describe('ActorsSearchComponent', () => {
  let component: ActorsSearchComponent;
  let fixture: ComponentFixture<ActorsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

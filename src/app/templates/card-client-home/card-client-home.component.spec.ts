import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClientHomeComponent } from './card-client-home.component';

describe('CardClientHomeComponent', () => {
  let component: CardClientHomeComponent;
  let fixture: ComponentFixture<CardClientHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardClientHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardClientHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

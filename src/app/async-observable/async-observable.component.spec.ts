import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncObservableComponent } from './async-observable.component';

describe('AsyncObservableComponent', () => {
  let component: AsyncObservableComponent;
  let fixture: ComponentFixture<AsyncObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsyncObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsyncObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

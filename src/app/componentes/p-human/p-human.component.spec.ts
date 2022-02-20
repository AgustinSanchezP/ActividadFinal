import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHumanComponent } from './p-human.component';

describe('PHumanComponent', () => {
  let component: PHumanComponent;
  let fixture: ComponentFixture<PHumanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PHumanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PHumanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PAlienComponent } from './p-alien.component';

describe('PAlienComponent', () => {
  let component: PAlienComponent;
  let fixture: ComponentFixture<PAlienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PAlienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PAlienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

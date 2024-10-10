import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateputComponent } from './updateput.component';

describe('UpdateputComponent', () => {
  let component: UpdateputComponent;
  let fixture: ComponentFixture<UpdateputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateputComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

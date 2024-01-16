import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MfeHostComponent } from './mfe-host.component';

describe('MfeHostComponent', () => {
  let component: MfeHostComponent;
  let fixture: ComponentFixture<MfeHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MfeHostComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MfeHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

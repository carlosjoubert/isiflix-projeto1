import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotacustomComponent } from './rotacustom.component';

describe('RotacustomComponent', () => {
  let component: RotacustomComponent;
  let fixture: ComponentFixture<RotacustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RotacustomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RotacustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OctoberArtComponent } from './october-art.component';

describe('OctoberArtComponent', () => {
  let component: OctoberArtComponent;
  let fixture: ComponentFixture<OctoberArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OctoberArtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OctoberArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UltimoPage } from './ultimo.page';

describe('UltimoPage', () => {
  let component: UltimoPage;
  let fixture: ComponentFixture<UltimoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UltimoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tap2Page } from './tap2.page';

describe('Tap2Page', () => {
  let component: Tap2Page;
  let fixture: ComponentFixture<Tap2Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Tap2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HinditicketbookComponent } from './hinditicketbook.component';

describe('HinditicketbookComponent', () => {
  let component: HinditicketbookComponent;
  let fixture: ComponentFixture<HinditicketbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HinditicketbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HinditicketbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

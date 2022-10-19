import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeluguticketbookComponent } from './teluguticketbook.component';

describe('TeluguticketbookComponent', () => {
  let component: TeluguticketbookComponent;
  let fixture: ComponentFixture<TeluguticketbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeluguticketbookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeluguticketbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

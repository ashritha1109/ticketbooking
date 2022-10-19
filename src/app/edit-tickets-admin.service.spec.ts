import { TestBed } from '@angular/core/testing';

import { EditTicketsAdminService } from './edit-tickets-admin.service';

describe('EditTicketsAdminService', () => {
  let service: EditTicketsAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTicketsAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

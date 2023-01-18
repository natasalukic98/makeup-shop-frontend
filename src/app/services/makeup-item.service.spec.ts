import { TestBed } from '@angular/core/testing';

import { MakeupItemService } from './makeup-item.service';

describe('MakeupItemService', () => {
  let service: MakeupItemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MakeupItemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

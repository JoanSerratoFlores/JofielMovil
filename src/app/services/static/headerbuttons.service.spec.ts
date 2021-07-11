import { TestBed } from '@angular/core/testing';

import { HeaderbuttonsService } from './headerbuttons.service';

describe('HeaderbuttonsService', () => {
  let service: HeaderbuttonsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HeaderbuttonsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

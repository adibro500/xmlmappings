import { TestBed } from '@angular/core/testing';

import { XmlCreateService } from './xml-create.service';

describe('XmlCreateService', () => {
  let service: XmlCreateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlCreateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

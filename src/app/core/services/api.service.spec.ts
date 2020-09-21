import { TestBed } from '@angular/core/testing';

import { Api.Service.TsService } from './api.service.ts.service';

describe('Api.Service.TsService', () => {
  let service: Api.Service.TsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Api.Service.TsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

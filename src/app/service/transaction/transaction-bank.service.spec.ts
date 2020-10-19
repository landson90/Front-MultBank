import { TestBed } from '@angular/core/testing';

import { TransactionBankService } from './transaction-bank.service';

describe('TransactionBankService', () => {
  let service: TransactionBankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransactionBankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

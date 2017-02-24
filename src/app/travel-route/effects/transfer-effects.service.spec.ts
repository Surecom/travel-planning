/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TransferEffectsService } from './transfer-effects.service';

describe('TransferEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransferEffectsService]
    });
  });

  it('should ...', inject([TransferEffectsService], (service: TransferEffectsService) => {
    expect(service).toBeTruthy();
  }));
});

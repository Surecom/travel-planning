/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TravelEffectsService } from './travel-effects.service';

describe('TravelEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TravelEffectsService]
    });
  });

  it('should ...', inject([TravelEffectsService], (service: TravelEffectsService) => {
    expect(service).toBeTruthy();
  }));
});

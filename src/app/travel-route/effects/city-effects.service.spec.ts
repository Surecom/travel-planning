/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CityEffectsService } from './city-effects.service';

describe('CityEffectsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityEffectsService]
    });
  });

  it('should ...', inject([CityEffectsService], (service: CityEffectsService) => {
    expect(service).toBeTruthy();
  }));
});

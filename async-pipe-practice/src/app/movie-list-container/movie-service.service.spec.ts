import { TestBed, inject } from '@angular/core/testing';
import { MovieService } from './movie-service.service';

describe('TestServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MovieService]
    });
  });

  it('should be created', inject([MovieService], (service: MovieService) => {
    expect(service).toBeTruthy();
  }));
});
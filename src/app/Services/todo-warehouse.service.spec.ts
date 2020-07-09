import { TestBed } from '@angular/core/testing';

import { TodoWarehouseService } from './todo-warehouse.service';

describe('TodoWarehouseService', () => {
  let service: TodoWarehouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodoWarehouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

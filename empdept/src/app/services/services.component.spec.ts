import { TestBed } from '@angular/core/testing';
import { EmployeeManagementServiceService } from './services.component';


describe('EmployeeManagementServiceService', () => {
  let service: EmployeeManagementServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeManagementServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
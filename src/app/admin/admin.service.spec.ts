import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdminService } from './admin.service';
import { MedicalClaims } from '../models/medical.model';
import { RouterTestingModule } from '@angular/router/testing';

describe('AdminService', () => {

  let service: AdminService;
  let httpMock: HttpTestingController;

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
    providers: [AdminService]
  }));
  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {

    const service: AdminService = TestBed.get(AdminService);
    expect(service).toBeTruthy();
  });

  /*change status*/
  it('should call statusChange()  via POST request', () => {

    const mockRequestBody = {
      claimId: 1,
      status: 'approved1'
    };

    const mockResponseBody = {
      message: "success",
      statusCode: 200
    };

    service.statusChange(mockRequestBody).subscribe(users => {
      expect(users).toEqual(mockResponseBody);
    });
    const mockRequest = httpMock.expectOne(`${service.baseUrl}`);
    expect(mockRequest.request.method).toBe('POST');
    mockRequest.flush(mockResponseBody);
  });

  /* junierAdminClaimList get method */

  it('should call junierAdminClaimList() to retrive Data via GET request', () => {
    const mockResponseBody: MedicalClaims = {
      claimId: 1,
      policyId: 1,
      policyAmount: 1000,
      diagnosis: "headache",
      summery: "Fever"
    };

    service.junierAdminClaimList().subscribe(cliamsList => {
      expect(cliamsList).toContain(mockResponseBody);
    });
    const mockRequest = httpMock.expectOne(`${service.baseUrl}/approver`);
    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(mockResponseBody);

  });

  // senierAdminClaimList get method

  it('should call senierAdminClaimList() to retrive Data via GET request', () => {
    const mockResponseBody: MedicalClaims = {
      claimId: 1,
      policyId: 1,
      policyAmount: 1000,
      diagnosis: "headache",
      summery: "Fever"
    };

    service.junierAdminClaimList().subscribe(cliamsList => {
      expect(cliamsList).toContain(mockResponseBody);
    });
    const mockRequest = httpMock.expectOne(`${service.baseUrl}/seniorApprover`);
    expect(mockRequest.request.method).toBe('GET');
    mockRequest.flush(mockResponseBody);

  });
});

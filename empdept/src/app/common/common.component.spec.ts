import { Department, Employee } from "./common.component";

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee()).toBeTruthy();
  });
});


describe('Department', () => {
  it('should create an instance', () => {
    expect(new Department()).toBeTruthy();
  });
});
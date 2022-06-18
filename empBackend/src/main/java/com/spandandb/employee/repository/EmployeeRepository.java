package com.spandandb.employee.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.spandandb.employee.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}

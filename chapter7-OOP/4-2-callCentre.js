/* 
 Imagine you have a call center with three levels of employees: respondent, manager,
and director. An incoming telephone call must be first allocated to a respondent who is free. If the
respondent can't handle the call, he or she must escalate the call to a manager. If the manager is not
free or not able to handle it, then the call should be escalated to a director. Design the classes and
data structures for this problem. Implement a method dispatchCall ( } which assigns a call to
the first available employee. 
*/

class Employee {
  constructor(level = 'respondent') {
    this.level = level;
  }
}

class CallCentre {
  constructor() {
    this.employees = [];
  }

  addEmployee(employee) {
    this.employees.push(employee);
  }

  orderEmployees() {
    this.employees.sort((a, b) => a.level > b.level);
  }

  dispatchCall() {
    this.orderEmployees();
    return this.employees.pop();
  }
}

const respondent = new Employee();
const manager = new Employee('manager');
const director = new Employee('director');

const callCenter = new CallCentre();
callCenter.addEmployee(respondent);
callCenter.addEmployee(manager);
callCenter.addEmployee(director);
console.log(callCenter.employees);
console.log(callCenter.dispatchCall());

// Better Implementation

class Call {
  constructor(issue) {
    this.issue = issue;
    this.employee;
  }

  resolve(handled) {
    if (handled) {
      this.issue = null;
    }
    this.employee.finishCall(handled);
  }
}

class Employee {
  constructor(name, manager) {
    this.name = name;
    this.manager = manager;
    this.call = null;
  }

  takeCall(call) {
    if (this.call) {
      this.escalate(call);
    } else {
      this.call = call;
      this.call.employee = this;
    }
  }

  escalate(call) {
    if (this.manager) {
      this.manager.takeCall();
    } else {
      call.hangUp();
    }
  }

  finishCall(handled = True) {
    if (!handled) {
      if (this.manager) {
        this.manager.takeCall(this.call);
      } else {
        this.call.hangUp();
      }
    }
    this.call = null;
  }
}

class CallCentre {
  constructor(respondents, managers, director) {
    this.respondents = respondents;
    this.managers = managers;
    this.director = director;
    this.respondentsQueue = [];
    this.callQueue = [];

    for (const respondent of respondents) {
      respondent.callcenter = this;
      if (!respondent.call) {
        this.respondentsQueue.push(respondent);
      }
    }
  }

  routeRespondent(respondent) {
    if (this.callQueue.length) {
      respondent.takeCall(this.callQueue.pop());
    } else {
      this.respondentsQueue.push(respondent);
    }
  }

  routeCall(call) {
    if (this.respondentsQueue.length) {
      this.respondentsQueue.pop().takeCall(call);
    } else {
      this.callQueue.push(call);
    }
  }
}

const employee = require("../data/employees");

module.exports = function(app) {
  /**
   * GET the employeeList
   */
  app.get("/api/employees", function(req, res) {
    res.json(employee);
  });

  app.post("/api/employees", function(req, res) {
    let bestMatch = {
      name: "",
      photo: "",
      employeeDifference: Infinity
    };
    const userData = req.body;
    const userScores = userData.scores;

    let totalDifference;

    for (let i = 0; i < employee.length; i++) {
      let currentEmployee = employee[i];
      totalDifference = 0;

      for (let j = 0; j < currentEmployee.scores.length; j++) {
        const currentEmployeeScore = currentEmployee.scores[j];
        const currentUserScore = userScores[j];
        totalDifference += Math.abs(
          parseInt(currentEmployeeScore) - parseInt(currentUserScore)
        );
      }
      if (totalDifference <= bestMatch.employeeDifference) {
        bestMatch.name = currentEmployee.name;
        bestMatch.photo = currentEmployee.photo;
        bestMatch.employeeDifference = totalDifference;
      }
    }

    employee.push(userData);

    res.json(bestMatch);
  });
};

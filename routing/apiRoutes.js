let employeeList = require("../data/employees.js");
let count = 0;

module.exports = function(app) {
  /**
   * GET the employeeList
   */
  app.get("/api/employees", function(req, res) {
    res.json(employeeList);
  });
  app.post("/api/employees", function(req, res) {
    let bestMatch = {
      name: "",
      photo: "",
      employeeDifference: 1000
    };
    console.log(req.body);
    const userData = req.body;
    const userScores = userData.scores;

    for (let i = 0; i < employeeList.length; i++) {
      let totalDifference = 0;
      let currentEmployee = employeeList[i];

      for (let j = 0; j < currentEmployee.scores.length; j++) {
        const currentEmployeeScore = currentEmployee.scores[j];
        const currentUserScore = userScores[j];
        console.log(currentUserScore);
        console.log(`----EMPLOYE NAME: ${currentEmployee.name} SCORES----`);
        console.log(currentEmployeeScore);
        console.log(`----EMPLOYE NAME: USER INPUT SCORES----`);

        totalDifference += Math.abs(currentEmployeeScore - currentUserScore);
      }
      console.log(`TOTAL DIFFERENCE: ${totalDifference}`);
      if (totalDifference < bestMatch.employeeDifference) {
        bestMatch.name = currentEmployee.name;
        bestMatch.photo = currentEmployee.photo;
        bestMatch.employeeDifference = totalDifference;
      }
      res.json(bestMatch);
    }
    res.end();
  });
};

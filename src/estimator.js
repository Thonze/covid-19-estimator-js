const covid19ImpactEstimator = (data) => {
    const input = data;
    return{
        data:{
             region: {
                 name: "Africa",
                 avgAge: 19.7,
                 avgDailyIncomeInUSD: 5,
                 avgDailyIncomePopulation: 0.71
             },
             factor= 9,
             periodType: 28,
             timeToElapse: 58,
             reportedCases: 674,
             population: 66622705,
             totalHospitalBeds: 1380614
                },
        impact: {
             currentlyInfected = reportedCases * 10,
             infectionsByRequestedTime = currentlyInfected * Math.pow(2,factor),
             severeCasesByRequestedTime = 15/100 * infectionsByRequestedTime,
             hospitalBedsByRequestedTime = 35/100 * totalHospitalBeds
        },
        severeImpact:{
            currentlyInfected= reportedCases * 50,
            infectionsByRequestedTime = currentlyInfected * Math.pow(2,factor),
            severeCasesByRequestedTime = 15/100 * infectionsByRequestedTime,
            hospitalBedsByRequestedTime = 35/100 * totalHospitalBeds
        }
    }
};

export default covid19ImpactEstimator;

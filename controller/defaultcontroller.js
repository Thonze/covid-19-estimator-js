const covid19ImpactEstimator = require('../src/estimator').data
const {impact} = require('../src/estimator')

//Post request

exports.dataPost = (req,res, next) => {

    const name = req.body.name
    const avgAge = req.body.avgAge
    const avgDailyIncomeInUSD = req.body.avgDailyIncomeInUSD
    const factor = req.body.factor
    const periodType = req.body.periodType
    const timeToElapse= req.body.timeToElapse
    const reportedCases = req.body.reportedCases
    const population = req.body.population
    const totalHospitalBeds = req.body.totalHospitalBeds

    console.log(name,avgAge,avgDailyIncomeInUSD)

    res.status(201).json({
        message: "data created succesfully",
        data: {id: new Date().toISOString(), name:name, avgAge:avgAge,avgDailyIncomeInUSD,avgDailyIncomeInUSD,factor,periodType,timeToElapse,reportedCases,population,totalHospitalBeds} //returning posts
        
    })

    
}

//Get request

exports.getdata = (req,res,next) => {
    
    const currentlyInfected = req.body.currentlyInfected
    const infectionsByRequestedTime = req.body.infectionsByRequestedTime
    const severeCasesByRequestedTime = req.body.severeCasesByRequestedTime
    const hospitalBedsByRequestedTime = req.body.hospitalBedsByRequestedTime
    const casesForICUByRequestedTime = req.body.casesForICUByRequestedTime
    const casesForVentilatorsByRequestedTime = req.body.casesForVentilatorsByRequestedTime
    const dollarsInFlight = req.body.dollarsInFlight

    res.status(200).json({
        impact: JSON.stringify([{ currentlyInfected,infectionsByRequestedTime,severeCasesByRequestedTime,hospitalBedsByRequestedTime,casesForICUByRequestedTime,casesForVentilatorsByRequestedTime,dollarsInFlight }]),

        severeImpact: JSON.stringify([{ currentlyInfected,infectionsByRequestedTime,severeCasesByRequestedTime,hospitalBedsByRequestedTime,casesForICUByRequestedTime,casesForVentilatorsByRequestedTime,dollarsInFlight }])
        
    })
    
    
};
const process = (request, response) => {
    setTimeout(() => {
      response.end();
    }, 100);
}
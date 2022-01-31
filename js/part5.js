let titaniccsv = 'https://raw.githubusercontent.com/dsindy/kaggle-titanic/master/data/test.csv';

let mrCount = 0
let mrsCount = 0;
let otherCount = 0;
let numberOfMales = 0;
let numberOfFemales = 0;
let numberOfPassengersInFirstClass = 0;
let numberOfPassengersInSecondClass = 0;
let numberOfPassengersInThirdClass = 0;
let numberOfPassengersEmbarkedFromCherbourg = 0;
let numberOfPassengersEmbarkedFromQueenstown = 0;
let numberOfPassengersEmbarkedFromSouthampton = 0;
let numberOfAdultPassengers = 0;
let numberOfChildPassengers = 0;

function processTitanicCSV() {

    d3.csv(titaniccsv, function (data) {

        if (data.Name.includes('Mr.')) {
            mrCount++;
        }
        if (data.Name.includes('Mrs.')) {
            mrsCount++;
        }
        // if it does not contain mrs or mr 
        if(!data.Name.includes('Mrs.') && !data.Name.includes('Mr.')){
            otherCount++;
        }
        if (data.Sex === 'male') {
            numberOfMales++;
        }
        if (data.Sex === 'female') {
            numberOfFemales++;
        }
        if (data.Pclass == 1) {
            numberOfPassengersInFirstClass++;
        }
        if (data.Pclass == 2) {
            numberOfPassengersInSecondClass++;
        }
        if (data.Pclass == 3) {
            numberOfPassengersInThirdClass++;
        }
        if (data.Embarked === 'C') {
            numberOfPassengersEmbarkedFromCherbourg++;
        }
        if (data.Embarked === 'Q') {
            numberOfPassengersEmbarkedFromQueenstown++;
        }
        if (data.Embarked === 'S') {
            numberOfPassengersEmbarkedFromSouthampton++;
        }
        if (data.Age > 18) {
            numberOfAdultPassengers++;
        }
        if (data.Age < 18) {
            numberOfChildPassengers++;
        }


    }).then(function () {

        //print inside div with id ex9 in the dom using d3js
        d3.select('#ex9')
            .append('p')
            .text('The following information was extracted from the csv file: ' + titaniccsv);

        d3.select('#ex9')
            .append('div')
            .attr('id', 'mrmrsCount')
            .attr('class', 'mt-3');
        d3.select('#mrmrsCount')
            .append('div')
            .text('Mr: ' + mrCount)
        d3.select('#mrmrsCount')
            .append('div')
            .text('Mrs: ' + mrsCount);
        d3.select('#mrmrsCount')
            .append('div')
            .text('Others: ' + otherCount);

        d3.select('#ex9')
            .append('div')
            .text('The number of male and female passengers')
            .attr('id', 'genderCount')
            .attr('class', 'mt-3');
        d3.select('#genderCount')
            .append('div')
            .text('Male: ' + numberOfMales)
        d3.select('#genderCount')
            .append('div')
            .text('Female: ' + numberOfFemales);

        d3.select('#ex9')
            .append('div')
            .text('The number of passengers per ticket class')
            .attr('id', 'ticketclass')
            .attr('class', 'mt-3');
        d3.select('#ticketclass')
            .append('div')
            .text('First class: ' + numberOfPassengersInFirstClass);
        d3.select('#ticketclass')
            .append('div')
            .text('Second class: ' + numberOfPassengersInSecondClass);
        d3.select('#ticketclass')
            .append('div')
            .text('Third class: ' + numberOfPassengersInThirdClass);

        d3.select('#ex9')
            .append('div')
            .text('The number of passengers that embarked from')
            .attr('id', 'boardinglocations')
            .attr('class', 'mt-3');
        d3.select('#boardinglocations')
            .append('div')
            .text('Cherbourg: ' + numberOfPassengersEmbarkedFromCherbourg);
        d3.select('#boardinglocations')
            .append('div')
            .text('Queenstown: ' + numberOfPassengersEmbarkedFromQueenstown);
        d3.select('#boardinglocations')
            .append('div')
            .text('Southampton: ' + numberOfPassengersEmbarkedFromSouthampton);

        d3.select('#ex9')
            .append('div')
            .text('The number of adult and child passengers (18 as legal age)')
            .attr('id', 'passengerage')
            .attr('class', 'mt-3');
        d3.select('#passengerage')
            .append('div')
            .text('Adult Passengers: ' + numberOfAdultPassengers);
        d3.select('#passengerage')
            .append('div')
            .text('Child Passengers: ' + numberOfChildPassengers);

        d3.select('#ex9')
        .append('div')
        .text('----------------------------------------------------------------------------------------------------------------------')

        console.log("mrcount: " + mrCount);
        console.log("mrsCount: " + mrsCount);
        console.log("otherCount: " + otherCount);
        console.log("numberOfMales: " + numberOfMales);
        console.log("numberOfFemales: " + numberOfFemales);
        console.log("numberOfPassengersInFirstClass: " + numberOfPassengersInFirstClass);
        console.log("numberOfPassengersInSecondClass: " + numberOfPassengersInSecondClass);
        console.log("numberOfPassengersInThirdClass: " + numberOfPassengersInThirdClass);
        console.log("numberOfPassengersEmbarkedFromCherbourg: " + numberOfPassengersEmbarkedFromCherbourg);
        console.log("numberOfPassengersEmbarkedFromQueenstown: " + numberOfPassengersEmbarkedFromQueenstown);
        console.log("numberOfPassengersEmbarkedFromSouthampton: " + numberOfPassengersEmbarkedFromSouthampton);
        console.log("numberOfAdultPassengers: " + numberOfAdultPassengers);
        console.log("numberOfChildPassengers: " + numberOfChildPassengers);


    });

}

let heartfailurecsv = 'https://raw.githubusercontent.com/akmand/datasets/master/heart_failure.csv';
/*
age,anaemia,creatinine_phosphokinase,diabetes,ejection_fraction,high_blood_pressure,platelets,serum_creatini
ne,serum_sodium,sex,smoking,time,DEATH_EVENT
75,0,582,0,20,1,265000,1.9,130,1,0,4,1
55,0,7861,0,38,0,263358.03,1.1,136,1,0,6,1
65,0,146,0,20,0,162000,1.3,129,1,1,7,1
50,1,111,0,20,0,210000,1.9,137,1,0,7,1
*/

let heartfailuresaboveageof50 = 0;

let heartfailuresperagerange = [
    {
        ageRange: '1-30',
        count: 0
    },
    {
        ageRange: '31-40',
        count: 0
    },
    {
        ageRange: '41-60',
        count: 0
    },
    {
        ageRange: '61-100',
        count: 0
    }
]

function processHeartFailures(){
    d3.csv(heartfailurecsv, function (data) {
        if (data.age > 50) {
            heartfailuresaboveageof50++;
        }
        if (data.age > 1 && data.age <= 30) {
            heartfailuresperagerange[0].count++;
        }
        if (data.age > 31 && data.age <= 40) {
            heartfailuresperagerange[1].count++;
        }
        if (data.age > 41 && data.age <= 60) {
            heartfailuresperagerange[2].count++;
        }
        if (data.age > 61 && data.age <= 100) {
            heartfailuresperagerange[3].count++;
        }
    }).then(function () {
        console.log("heartfailuresaboveageof50: " + heartfailuresaboveageof50);
        console.log("heartfailuresbetweenage1to30: " + heartfailuresperagerange[0].count);
        console.log("heartfailuresbetweenage31to40: " + heartfailuresperagerange[1].count);
        console.log("heartfailuresbetweenage41to60: " + heartfailuresperagerange[2].count);
        console.log("heartfailuresbetweenage61to100: " + heartfailuresperagerange[3].count);

        d3.select('#ex10src')
        .text('The following information was extracted from the csv file: ' + heartfailurecsv);

        d3.select('#ex10above50')
        .text('The number of patients with age above 50: ' + heartfailuresaboveageof50);

        d3.select('#agerangeheartfailures')
        .selectAll('div')
        .data(heartfailuresperagerange)
        .enter()
        .append('div')
        .text(function (row) {
            return row.ageRange + ' years: ' + row.count;
        });
    });
}

window.addEventListener('load', function () {
    processTitanicCSV();
    processHeartFailures();
})

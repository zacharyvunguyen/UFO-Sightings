  
// from data.js
var tableData = data;
var tbody = d3.select('tbody');


// YOUR CODE HERE!

tableData.forEach((ufoReport) => {
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

var submit = d3.select("#filter-btn");
submit.on("click", function() {

    tbody.html('');
    d3.event.preventDefault();

    var dateValue = d3.select("#datetime").property("value");
    // console.log(dateValue);
    var cityValue = d3.select("#city").property("value");
    // console.log(cityValue);
    var stateValue = d3.select("#state").property("value");
    var shapeValue = d3.select("#shape").property("value");

    var filteredData = tableData.filter(ufo => {

        var fltrufo = (dateValue != '') && (ufo.datetime === dateValue);
        fltrufo =  fltrufo || (cityValue != '') && (ufo.city === cityValue);
        fltrufo =  fltrufo || (stateValue != '') && (ufo.state === stateValue);
        fltrufo =  fltrufo || (shapeValue != '') && (ufo.shape === shapeValue);

        return  fltrufo;
        
    });
    
    // console.log(filteredData);
    filteredData.forEach((filteredUfo) => {
        var row = tbody.append('tr');
        Object.entries(filteredUfo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
        });
    });
});

var clear = d3.select("#clear-btn");    
clear.on("click", function(){
    
    d3.select("#datetime").property("value","");
    d3.select("#city").property("value","");
    d3.select("#state").property("value","");
    d3.select("#shape").property("value","");
});
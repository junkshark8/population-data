const api = "https://datausa.io/api/data?drilldowns=Nation&measures=Population";

fetch(api).then((data) => {
    return data.json(); //convert data to json object
}).then((objectData) => {
    let tableData = ""; //empty variable to hold table data
    objectData.data.map((item) => { //iterate thru objectData
        tableData += `<tr>
                        <td>${item.Year}</td>
                        <td>${item.Population.toLocaleString()}</td>
                      </tr>`; //generate table rows with the year and population from each item
    });
    document.getElementById("table-body").innerHTML = tableData; //set the tableData
})
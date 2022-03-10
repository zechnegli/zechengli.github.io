{    
 var imagesFolder = "./images/";   
}

//window.location="Category.html";
fetch("/HW1/data.JSON")
   .then(res => res.json())
     .then(function (apiJsonData) {
        var section2DataArr = Object.values(apiJsonData.section2);
        this.renderSection2(section2DataArr);
    
        var section3DataArr = Object.values(apiJsonData.section3.text);
        this.renderSection3(section3DataArr);
    
        var section4DataArr = Object.values(apiJsonData.section4); 
        this.renderSection4(section4DataArr);
    })

//[ {"id":1,"name":"January"}, {"id":2,"name":"February"} ]
function renderSection2(datas) {
//    console.log(datas);
    var mytable = document.getElementById("section2-table");
    var newRow = document.createElement("tr");
    for (const data of datas)
    {
        
        var cell = document.createElement("td");
        var image = document.createElement("img");
        image.src = imagesFolder.concat(data.image);
        var header = document.createElement("h1");
        header.innerHTML = data.heading;
        var paragraph = document.createElement("p");
        paragraph.innerHTML = data.text;

        cell.appendChild(image);
        cell.appendChild(header);
        cell.appendChild(paragraph);
        newRow.append(cell);
        
    }
    mytable.appendChild(newRow);
      
}

function renderSection3(datas) {
    console.log(datas);
    var mytable = document.getElementById("section3-table");
    var newRow = document.createElement("tr");
    var cell1 = document.createElement("td");
    var cell2 = document.createElement("td");
    var image = document.createElement("img");
    image.src = imagesFolder.concat("lasky.png");
    var paragraph = document.createElement("p");
    paragraph.innerHTML = datas[0].concat("<br/><br/>").concat(datas[1]);
    cell1.appendChild(paragraph);
    cell2.appendChild(image);       
    newRow.append(cell1);
    newRow.append(cell2);
    mytable.appendChild(newRow);
    
}


function renderSection4(datas) {
//    console.log(datas);
     var mytable = document.getElementById("section4-table");
    var count = 0;
    for (const data of datas)
    {
        var newRow = document.createElement("div");
        var cell1 = document.createElement("div");
        var header = document.createElement("h1");
        header.innerHTML = data.heading;
        var paragraph = document.createElement("p");
        paragraph.innerHTML = data.text;
        
        var cell2 = document.createElement("div");
        var image = document.createElement("img");
        image.src = imagesFolder.concat(data.image);
        
        if (count == 1) {
            header.className = "second";
            paragraph.className = "second";
            cell2.className = "section4Image";
            cell1.className = "section4P";
            cell1.appendChild(header); 
            cell1.appendChild(paragraph);              
            newRow.append(cell1);

            cell2.appendChild(image);       
            newRow.append(cell2);
        } else {
            header.className = "first";
            paragraph.className = "first";
            cell2.className = "section4Image";
            cell1.className = "section4P";
            cell2.appendChild(image);       
            newRow.append(cell2);
            cell1.appendChild(header); 
            cell1.appendChild(paragraph);              
            newRow.append(cell1);
        }
        
        mytable.appendChild(newRow);
        count += 1;
    }
}

function Valid() {
    var make = document.getElementById("make_textbox");
    var model = document.getElementById("model_textbox");
    var year = document.getElementById("year_textbox");
    var alert = document.getElementById("alert1");
    if (make.value=="") {
        alert.innerHTML = "Debes llenar todos los campos";
        return false;
    } else {
        if (model.value=="") {
            alert.innerHTML = "Debes llenar todos los campos";
            return false;
        } else {
            if (year.value=="") {
                alert.innerHTML = "Debes llenar todos los campos";
            } else {
                alert.innerHTML = "Elemento añadido";
                return true;
            }
        }
    }
}

function AddRow() {
    if (Valid()==false) {
        return;
    }
    var table = document.getElementById("myTable");
    var row = table.insertRow(-1);
    var make = document.getElementById("make_textbox");
    var model = document.getElementById("model_textbox");
    var year = document.getElementById("year_textbox");
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = make.value;
    cell2.innerHTML = model.value;
    cell3.innerHTML = year.value;
    
}

function Clear(){
    document.getElementById("make_textbox").value = "";
    document.getElementById("model_textbox").value = "";
    document.getElementById("year_textbox").value = "";
    var alert = document.getElementById("alert1");
    alert.innerHTML = "Campos reestablecidos";
}

function DelAll(){
    var x = document.getElementById("myTable").rows.length;
    while (x!=1) {
        document.getElementById("myTable").deleteRow(-1);
        x = document.getElementById("myTable").rows.length;
    }
    var alert = document.getElementById("alert1");
    alert.innerHTML = "Tabla eliminada";
}
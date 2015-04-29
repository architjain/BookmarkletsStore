var compTable = document.getElementById("comp-detail-info");
var table_body = compTable.firstElementChild;
var table_rows = table_body.querySelectorAll("tr");

var i ;
for (i = 0; i < table_rows.length; i++) { 
    var table_row  = table_rows[i] ;
    var row_columns = table_row.querySelectorAll("td");
    if (row_columns.length > 2) {
        console.log(row_columns[0].textContent);
        var init_val = row_columns[1].textContent;
        var all_same = true;
        var j ;
        for (j = 2; j < row_columns.length; j++) { 
            if (row_columns[j].textContent != '' && init_val != row_columns[j].textContent){
                all_same = false;
            }
        }
        if(all_same == true) {
            console.log(row_columns[0].textContent);
            table_row.style.display = 'none';
        }        
    }
}
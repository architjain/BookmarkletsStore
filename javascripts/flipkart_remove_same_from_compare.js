function flipkartRemoveSimilar(){
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
}




/*
 javascript:(function(){if(typeof flipkt_cmp_script=='undefined'){   flipkt_cmp_script=document.createElement('SCRIPT'); flipkt_cmp_script.type='text/javascript';   flipkt_cmp_script.src='https://rawgit.com/architjain/BookmarkletsStore/master/javascripts/flipkart_remove_same_from_compare.js'; document.getElementsByTagName('head')[0].appendChild(flipkt_cmp_script);}else{  flipkartRemoveSimilar();}})();
*/


    // "permissions": ["tabs", "http://*/*"],

function createBtn(text, link) {
        var btn = document.createElement("BUTTON");       
        var t = document.createTextNode(text);      
        btn.appendChild(t);                               
        btn.onclick = function() { 
            document.location.href = link;
        }
        return btn;
}


function addNavigationLinksToZenPencils(){
    var dropdown_widget_div = document.getElementById("ceo_all_comics_dropdown_widget-10");
    var dropdown_widget_div_bottom = document.getElementById("ceo_all_comics_dropdown_widget-11");
    var selectDiv = dropdown_widget_div.getElementsByTagName("select")[0];
    var selectDiv_bottom = null;
    if (dropdown_widget_div_bottom != null) {
        selectDiv_bottom =  dropdown_widget_div_bottom.getElementsByTagName("select")[0];
    }

    var option_divs = selectDiv.querySelectorAll("option");
    var links = [];
    var labels = []

    var current = 0;
    var i ;
    for (i = 0; i < option_divs.length; i++) { 
        var option_div  = option_divs[i] ;
        links.push(option_div.value);
        labels.push(option_div.text);
        if(document.location.href == option_div.value ){
            current = i;
        }
    }

    dropdown_widget_div.getElementsByClassName("chzn-single")[0].getElementsByTagName("span")[0].textContent = labels[current]; 
    if (dropdown_widget_div_bottom != null) {
        dropdown_widget_div_bottom.getElementsByClassName("chzn-single")[0].getElementsByTagName("span")[0].textContent = labels[current]; 
    }
    
    if(current < option_divs.length - 1) {
        var label = "<< "+ labels[current+1];
        var link = links[current+1];

        var btn = createBtn(label,link);
        selectDiv.parentElement.insertBefore(btn,selectDiv);


        if (dropdown_widget_div_bottom != null) {
            var btn_bottom = createBtn(label,link);
            selectDiv_bottom.parentElement.insertBefore(btn_bottom,selectDiv_bottom);
        }
    
    }

    if(current>0) {
        var label = labels[current - 1] + " >>";
        var link = links[current-1];

        var btn = createBtn(label,link);
        selectDiv.parentElement.appendChild(btn);

        if (dropdown_widget_div_bottom != null) {
            var btn_bottom = createBtn(label,link);
            selectDiv_bottom.parentElement.appendChild(btn_bottom);
        }     
    }

}


addNavigationLinksToZenPencils();
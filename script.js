var count = 4;

function createschedule(){
    
    var scname = document.getElementById("scname").value;
    var sdate = document.getElementById("sdate").value;
    var edate = document.getElementById("edate").value;
    var weeks = document.getElementById("weeks").value; 

    var error = document.querySelector("#error");
    var allschedules = document.querySelector("#accordionPanelsStayOpenExample");


    if(scname && sdate && edate && weeks){

        console.log(scname);
        console.log(sdate);
        console.log(edate);
        console.log(weeks);


        allschedules.innerHTML += '<div class="accordion-item accordion-flush my-3"> <h2 class="accordion-header" id="panelsStayOpen-heading'+count+'"> <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse'+count+'" aria-expanded="true" aria-controls="panelsStayOpen-collapse'+count+'"> '+scname+' </button> </h2> <div id="panelsStayOpen-collapse'+count+'" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading'+count+'"> <p class="text-muted m-4" style="font-size: 12px;">'+weeks+' weeks | 12 sessions<i class="fas fa-pen" style="color: #A2A2A2; margin-left: 82%; font-size: 18px;"></i> <i class="fas fa-trash-alt" style="color: #F84444; margin-left: 2%; font-size: 18px;"></i> </p> <div class="accordion-body"> <div class="row"> <div class="col-lg-3 col-md-12"> <p class="text-muted" style="font-size: 12px;">Start date</p> <h6>'+sdate+'</h6> </div> <div class="col-lg-3 col-md-12"> <p class="text-muted" style="font-size: 12px;">End date</p> <h6>'+edate+'</h6> </div> <div class="col-4"> </div> <div class="col-2 d-none d-lg-block" style="text-align: center;"> <a class="btn" style="background-color: #32CD32; color: white; font-weight: 300; ">Update</a> </div> <div class="col-12 d-lg-none d-md-block" style="text-align: left;"> <br> <a class="btn" style="background-color: #32CD32; color: white; font-weight: 300; ">Update</a> </div> </div> <div class="row my-5 d-none d-lg-block"> <div class="btn-group" role="group" aria-label="Basic radio toggle button group"> <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked> <label class="btn btn-outline-success" for="btnradio1">Sunday</label> <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off"> <label class="btn btn-outline-success" for="btnradio2">Monday</label> <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off"> <label class="btn btn-outline-success" for="btnradio3">Tuesday</label> <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off"> <label class="btn btn-outline-success" for="btnradio4">Wednesday</label> <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off"> <label class="btn btn-outline-success" for="btnradio5">Thursday</label> <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off"> <label class="btn btn-outline-success" for="btnradio6">Friday</label> <input type="radio" class="btn-check" name="btnradio" id="btnradio7" autocomplete="off"> <label class="btn btn-outline-success" for="btnradio7">Saturday</label> </div> </div> </div> </div> </div>'
        
        count++;

        $('#exampleModal').modal('hide');
        window.scrollTo(0, 1000000000000000);
        document.getElementById("scname").value ="";
        document.getElementById("sdate").value ="";
        document.getElementById("edate").value ="";
        document.getElementById("weeks").value =""; 
    
    }else{
        error.innerHTML = "";
        error.innerHTML += "*Please fill all the details."
    }
    


}
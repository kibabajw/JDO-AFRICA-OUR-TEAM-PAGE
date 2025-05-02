$(document).ready(function() {
    var our_team = $("#our-team");

    var ring1 = $("#ring1");
    var caroline_sanga = $("#caroline-sanga");
    
    var ring2 = $("#ring2");
    var collins_obayi = $("#collins-obayi");

    var ring3 = $("#ring3");
    var edward_musungu = $("#edward-musungu");

    var ring4 = $("#ring4");
    var elijah_kyalo = $("#elijah-kyalo");

    var ring5 = $("#ring5");
    var emmanuel_loboka = $("#emmanuel-loboka");

    var ring6 = $("#ring6");
    var fr_charles = $("#fr-charles");

    var ring7 = $("#ring7");
    var fr_allan_ggita = $("#fr-allan-ggita");

    var ring8 = $("#ring8");
    var francis_ayika = $("#francis-ayika");

    var ring9 = $("#ring9");
    var nelly_agisa = $("#nelly-agisa");

    var ring10 = $("#ring10");
    var pete_okapes = $("#pete-okapes");

    var ring11 = $("#ring11");
    var victor_awiti_otieno = $("#victor-awiti-otieno");
    
    function hideallstaffinfo() {
        $(".div-staff-info").each(function( index ) {
            $(this).css("display", "none");
        });

        our_team.css("background", "#fff");
    };


    // ring1
    $("#ring1 > img").on("click", function() {
        hideallstaffinfo();
        caroline_sanga.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");

        setTimeout(hideallstaffinfo, 5000);
    });
    $("#ring1 > img").hover(function() {
        hideallstaffinfo();
        caroline_sanga.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");
    });
    $("#ring1 > img").on("mouseleave", function(tgevt) {      
        setTimeout(hideallstaffinfo, 3000);    
    });


    // ring2
    $("#ring2 > img").on("click", function() {
        hideallstaffinfo();
        collins_obayi.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/Collins\ 2.JPG")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");

        setTimeout(hideallstaffinfo, 5000);
    });
    $("#ring2 > img").hover(function() {
        hideallstaffinfo();
        collins_obayi.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/Collins\ 2.JPG")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");
    });
    $("#ring2 > img").on("mouseleave", function(tgevt) {      
        setTimeout(hideallstaffinfo, 3000);    
    });


    // ring3
    $("#ring3 > img").on("click", function() {
        hideallstaffinfo();
        edward_musungu.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/Edward.JPG")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");

        setTimeout(hideallstaffinfo, 5000);
    });
    $("#ring3 > img").hover(function() {
        hideallstaffinfo();
        edward_musungu.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/Edward.JPG")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");
    });
    $("#ring3 > img").on("mouseleave", function(tgevt) {      
        setTimeout(hideallstaffinfo, 3000);    
    });


    // ring4
    $("#ring4 > img").on("click", function() {
        hideallstaffinfo();
        elijah_kyalo.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/Elijah\ 1.JPG")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");   

        setTimeout(hideallstaffinfo, 5000);     
    });
    $("#ring4 > img").hover(function() {
        hideallstaffinfo();
        elijah_kyalo.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/Elijah\ 1.JPG")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");
    });
    $("#ring4 > img").on("mouseleave", function(tgevt) {      
        setTimeout(hideallstaffinfo, 3000);    
    });


    // ring5
    $("#ring5 > img").on("click", function() {
        hideallstaffinfo();
        emmanuel_loboka.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");  

        setTimeout(hideallstaffinfo, 5000);      
    });
    $("#ring5 > img").hover(function() {
        hideallstaffinfo();
        emmanuel_loboka.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");
    });
    $("#ring5 > img").on("mouseleave", function(tgevt) {      
        setTimeout(hideallstaffinfo, 3000);    
    });


    // ring6
    $("#ring6 > img").on("click", function() {
        hideallstaffinfo();
        fr_charles.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");     

        setTimeout(hideallstaffinfo, 5000);   
    });
    $("#ring6 > img").hover(function() {
        hideallstaffinfo();
        fr_charles.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken"); 
    });
    $("#ring6 > img").on("mouseleave", function(tgevt) {      
        setTimeout(hideallstaffinfo, 3000);    
    });


    // ring7
    $("#ring7 > img").on("click", function() {
        hideallstaffinfo();
        fr_allan_ggita.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");   

        setTimeout(hideallstaffinfo, 5000);     
    });      
    $("#ring7 > img").hover(function() {
        hideallstaffinfo();
        fr_allan_ggita.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");   
    });  
    $("#ring7 > img").on("mouseleave", function(tgevt) {      
        setTimeout(hideallstaffinfo, 3000);    
    });


    // ring8
    $("#ring8 > img").on("click", function() {
        hideallstaffinfo();
        francis_ayika.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");        

        setTimeout(hideallstaffinfo, 5000);
    });
    $("#ring8 > img").hover(function() {
        hideallstaffinfo();
        francis_ayika.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");
    });       
    $("#ring8 > img").on("mouseleave", function(tgevt) {      
        setTimeout(hideallstaffinfo, 3000);    
    });


    // ring9
    $("#ring9 > img").on("click", function() {
        hideallstaffinfo();
        nelly_agisa.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/Nelly\ 1.JPG")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");    

        setTimeout(hideallstaffinfo, 5000);    
    });
    $("#ring9 > img").hover(function() {
        hideallstaffinfo();
        nelly_agisa.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/Nelly\ 1.JPG")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");  
    });        
    $("#ring9 > img").on("mouseleave", function(tgevt) {      
        setTimeout(hideallstaffinfo, 3000);    
    });


    // ring10
    $("#ring10 > img").on("click", function() {
        hideallstaffinfo();
        pete_okapes.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/Peter\ 1.JPG")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");   

        setTimeout(hideallstaffinfo, 5000);     
    });
    $("#ring10 > img").hover(function() {
        hideallstaffinfo();
        pete_okapes.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/Peter\ 1.JPG")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");
    });        
    $("#ring10 > img").on("mouseleave", function(tgevt) {      
        setTimeout(hideallstaffinfo, 3000);    
    });


    // ring11
    $("#ring11 > img").on("click", function() {
        hideallstaffinfo();
        victor_awiti_otieno.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/victor\ Okoth\ 1.JPG")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");    

        setTimeout(hideallstaffinfo, 5000);    
    });        
    $("#ring11 > img").hover(function(tgevt) {        
        hideallstaffinfo();
        victor_awiti_otieno.css("display", "block");

        our_team.css("background", `rgba(0, 0, 0, 0.6)url("./images/bg/victor\ Okoth\ 1.JPG")`);
        our_team.css("background-repeat", "no-repeat");
        our_team.css("background-position", "top");
        our_team.css("background-size", "cover");
        our_team.css("background-blend-mode", "darken");    
    });        
    $("#ring11 > img").on("mouseleave", function(tgevt) {      
        setTimeout(hideallstaffinfo, 3000);    
    });
});
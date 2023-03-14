$(function(){
    console.log("Hellooo");
    const pads= $(".pad");
    pads.on('click',function(){
        let val= $(this).attr("value");
        let pad=$(`#cr${val}`);
        document.getElementById(`pad${val}`).currentTime=0;
        let sib=`<div class='cir cr${val}'></div>`;
        pad.after(sib);
        let padSib= pad.siblings();
        padSib.css({animation: 'updown 1s ease'});
        padSib.on("animationend",function(){
            $(this).remove();
        });
        document.getElementById(`pad${val}`).play();
    });
});
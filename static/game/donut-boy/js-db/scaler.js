var FaceGame = FaceGame || {};

//calculate the dimensions of the game so that 100% of the screen is occupied
FaceGame.getGameLandscapeDimensions = function(max_w, max_h) {
    //get both w and h of the screen (they might exchange) (this is plain JavaScript)
    var w = window.innerWidth * window.devicePixelRatio;
    var h = window.innerHeight * window.devicePixelRatio;
    
    //get the actual w and h (in case landscape is giving inaccurate info)
    var landW = Math.max(w, h);
    var landH = Math.min(w, h);
    
    //do we need to scale to fit in width
    if(landW > max_w) {
        var ratioW  = max_w / landW;
        landW *= ratioW;
        landH *= ratioW;
    }
    
    //do we need to scale to fit in height
    if(landH > max_h) {
        var ratioH  = max_w / landW;
        landW *= ratioH;
        landH *= ratioH;
    }
    
    return {
        // hardcode numbers cause now i want specific area shown. revert to previous variables to make responsive
        w: 675,    // was landW 
        h: 508     // was landH
    }
}
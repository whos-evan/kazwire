(function($) {    

    $.anwidget("an.CSS", {
        options: {
			'visible': false
        },
		_attrs: ['href'],
		getAttributes: function() {
			return this._attrs;
		},
		getCreateString: function() {			
			return "<link rel='stylesheet'>";
		}    
	});   
})(jQuery);
(function($) {    

    $.anwidget("an.TextInput", {
        options: {
			'visible': true,
			'disabled': false,
			'text': "",
			'position': 'absolute'
        },
		_props: ["left", "top", "width", "height", "position", "transform-origin", "transform"],
		_attrs: ["id", "disabled", "class"],
		getCreateOptions: function() {
			return $.extend(this.options, { 'id': "textinput" + _widgetID++ });
		},
		getCreateString: function() {
			return "<input type='text'>";
		},
		getProperties: function() {
			return this._props;
		},
		getAttributes: function() {
			return this._attrs;
		}
    });   
})(jQuery);
/**
ADOBE SYSTEMS INCORPORATED
 Copyright 2016. Adobe Systems Incorporated
 All Rights Reserved.

NOTICE: Adobe permits you to use, modify, and distribute this file as stand-alone or as bundled with other components useful to End User, in accordance with the terms of the Adobe license agreement accompanying it. You may not delete or in any manner alter the copyright notices, trademarks, logos or related notices, or other proprietary rights notices of Adobe (and its licensors, if any) appearing on or within such File and include a copyright notice reflecting copyright ownership in any files modified by you. And You agree to indemnify, defend and hold Adobe harmless from any and all liabilities (including attorney's fees) arising from any claims, lawsuits, or other legal proceedings that arise from or are related to the use or distribution of any software application product that you reproduced and/or distributed that incorporates these files. If you have received this file from a source other than Adobe, then your use, modification, or distribution of it requires the prior written permission of Adobe.
*/
 
var _widgetID = 0;

(function ($) {
    "use strict";
    
    $.anwidget = function( name, base, prototype ) {
        var existingConstructor, constructor, basePrototype;
        var proxiedPrototype = {};
			
        var namespace = name.split( "." )[ 0 ];
        name = name.split( "." )[ 1 ];
        var fullName = namespace + "-" + name;

        if ( !prototype ) {
            prototype = base;
            base = $.AnWidget;
        }
        
        $[ namespace ] = $[ namespace ] || {};
        existingConstructor = $[ namespace ][ name ];
        constructor = $[ namespace ][ name ] = function( options, element ) {
            if ( arguments.length ) {
                this._createWidget( options, element );
            }
        };        
        
        // Extend with the existing constructor to carry over any static properties
        $.extend( constructor, existingConstructor, {
            version: prototype.version,
        } );

        basePrototype = new base();
        basePrototype.options = $.extend( {}, basePrototype.options );
        constructor.prototype = $.extend( basePrototype, {} );
		$.each( prototype, function( prop, value ) {
			if ( !$.isFunction( value ) ) {
				proxiedPrototype[ prop ] = value;
				return;
			}
			proxiedPrototype[ prop ] = ( function() {
				function _super() {
					return base.prototype[ prop ].apply( this, arguments );
				}

				function _superApply( args ) {
					return base.prototype[ prop ].apply( this, args );
				}

				return function() {
					var __super = this._super;
					var __superApply = this._superApply;
					var returnValue;

					this._super = _super;
					this._superApply = _superApply;

					returnValue = value.apply( this, arguments );

					this._super = __super;
					this._superApply = __superApply;

					return returnValue;
				};
			} )();
		} );        
		
		constructor.prototype = $.extend( basePrototype, {

			// TODO: remove support for widgetEventPrefix
			// always use the name + a colon as the prefix, e.g., draggable:start
			// don't prefix for widgets that aren't DOM-based
			widgetEventPrefix: existingConstructor ? ( basePrototype.widgetEventPrefix || name ) : name
		}, proxiedPrototype, {
			constructor: constructor,
			namespace: namespace,
			widgetName: name,
			widgetFullName: fullName
		} );		
        return constructor;
    } //$.anwidget
    
    $.AnWidget = function( ) {};
    
	// Adobe Animate Components - Base Widget Class 
	// Adapted from jquery UI | MIT
    $.AnWidget.prototype = {
        _widgetName: "anwidget",
        _createWidget: function( options, element ) {
			if(options.id === "") {
				delete options.id;
			}			
            this._options = $.extend( {},
                this.getCreateOptions(),
                options);
				
			this._dirty = {};

            this._element = $( element || this.getCreateString());
            this.create();
        },		
		getCreateString: function() {
			return "<div>";
		},
		getProperties: function() {
			return [];
		},
		getAttributes: function() {
			return [];
		},
        create: function() {
        },
        attach: function ( parent, bAppend ) {
			if(this._attached && this._$this) {				
				if(this._options['visible']) this.show();
				return;
			}
            bAppend ? $(parent).append(this._element) : $(parent ).prepend(this._element);
			this._$this = $(this._element);
			this.hide();
			this._$this.css("pointer-events", "all");
			this._$this.css("box-sizing", "border-box");
			this._$this.children().css("box-sizing", "border-box");
			this._dirty["display"] = true;
            
            var $this = this;
			
            $(parent).bind("DOMNodeRemoved", function(e) {
                $this.destroy();
            });
			this.update(true);
			this._attached = true;
			$(parent).trigger("attached", this.getEventData("attached"));
        },
		detach: function() {
			if(!this._$this)
				return;
			
			this._$this.remove();
			this._attached = false;
			this._$this = null;
			$(parent).trigger("detached", this.getEventData("detached"));
		},
		setProperty: function(k, v) {
			if ($.isNumeric(v) && !$.cssNumber[k]) {
				v += "px";
			}
			if(this._options[k] != v) {
				this._dirty[k] = true;
			}
			this._options[k] = v;
		},	
		update: function(force) {
			this.applyProperties(this._$this, force);
			this.applyAttributes(this._$this, force);			
		},
		applyProperties: function($el, force) {
			var _this = this;
			var props = this.getProperties();
			
			$.each(props, function(k, v) {
				if(force || _this._dirty[v]) {
					_this._dirty[v] = false;
					$el.css(v, _this._options[v]);
				}
			});			
			// Do not force update the visibility
			if(!force && this._dirty["display"]) {
				$el.css("display", _this._options["visible"] == false ? "none" : (_this._options['inline'] == true ? "inline" : "block"));
				this._dirty["display"] = false;
			}		
		},
		applyAttributes: function($el, force) {
			var _this = this;
			var props = this.getProperties();
			var attrs = this.getAttributes();
			$.each(attrs, function(k, v) {
				if(force || _this._dirty[v]) {
					_this._dirty[v] = false;
					$el.prop(v, _this._options[v]);
				}
			});
			if(force || _this._dirty["value"]) {
				$el.val(this._options["value"]);
				this._dirty["value"] = false;
			}							
		},
        destroy: function() {
			delete this;
		},
        getEventData: function(type) { 
			switch(type) {
				case 'attached': 
				case 'detached':
					return [{'id': this._options['id']}]; 
				break;
			}
		},
        getCreateOptions: function() { return {} },
		show: function() {
			if(this._$this)
				this._$this.show();
		},
		hide: function() {
			if(this._$this)
				this._$this.hide();			
		}
    };  //$.AnWidget.prototype
    
    
})(window.jQuery || {});

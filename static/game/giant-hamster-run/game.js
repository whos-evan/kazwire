var _STRINGS = {
	Ad: {
		Mobile: {
			Preroll: {
				ReadyIn: 'The game is ready in ',
				Loading: 'Your game is loading...',
				Close: 'Close'
			},
			Header: {
				ReadyIn: 'The game is ready in ',
				Loading: 'Your game is loading...',
				Close: 'Close'
			},
			End: { ReadyIn: 'Advertisement ends in ', Loading: 'Please wait ...', Close: 'Close' }
		}
	},
	Loading: { Loading: 'LOADING', TapToStart: 'TAP TO START' },
	Tutorial: [
		['Hi! My name is Tiny.', 'Welcome to Giant Hamster Run!'],
		['Collect cookies to turn into', 'an invincible ball!'],
		['Flick upwards to jump', 'over the obstacle.'],
		['Press the UP ARROW to', 'jump over the obstacle.'],
		['Tap or Flick to the right', 'to pick up those coins!'],
		['Press the RIGHT ARROW', 'to pick up those coins!'],
		['We need to go to the left now.', 'Tap or Flick to the left.'],
		['We need to go to the left now.', 'Press the LEFT ARROW.'],
		['Almost there! Tap or Flick', 'to the left again.'],
		['Almost there! Press the', 'LEFT ARROW again.'],
		['Flick downwards to slide', 'and grab that cookie!'],
		['Press the DOWN ARROW to slide', 'and grab that cookie!'],
		["It's all up to you now.", 'Good luck and have fun!']
	],
	UI: {
		enter: 'enter',
		continue: 'continue',
		owned: 'owned',
		using: 'using',
		skateboard: 'skateboard',
		'roller-skates': 'roller-skates',
		rocket: 'rocket',
		'flying carpet': 'flying carpet',
		hoverboard: 'hoverboard'
	}
};
var _SETTINGS = {
	API: {
		Enabled: !0,
		Log: {
			Events: {
				InitializeGame: !0,
				EndGame: !0,
				Level: { Begin: !0, End: !0, Win: !0, Lose: !0, Draw: !0 }
			}
		}
	},
	Ad: {
		Mobile: {
			Preroll: {
				Enabled: !1,
				Duration: 5,
				Width: 300,
				Height: 250,
				Rotation: {
					Enabled: !1,
					Weight: {
						MobileAdInGamePreroll: 40,
						MobileAdInGamePreroll2: 40,
						MobileAdInGamePreroll3: 20
					}
				}
			},
			Header: {
				Enabled: !1,
				Duration: 5,
				Width: 320,
				Height: 50,
				Rotation: {
					Enabled: !1,
					Weight: { MobileAdInGameHeader: 40, MobileAdInGameHeader2: 40, MobileAdInGameHeader3: 20 }
				}
			},
			Footer: {
				Enabled: !1,
				Duration: 5,
				Width: 320,
				Height: 50,
				Rotation: {
					Enabled: !1,
					Weight: { MobileAdInGameFooter: 40, MobileAdInGameFooter2: 40, MobileAdInGameFooter3: 20 }
				}
			},
			End: {
				Enabled: !1,
				Duration: 1,
				Width: 300,
				Height: 250,
				Rotation: {
					Enabled: !1,
					Weight: { MobileAdInGameEnd: 40, MobileAdInGameEnd2: 40, MobileAdInGameEnd3: 20 }
				}
			}
		}
	},
	Language: { Default: 'en' },
	DeveloperBranding: {
		Splash: { Enabled: !1 },
		Logo: {
			Enabled: !1,
			Link: 'http://google.com',
			LinkEnabled: !1,
			NewWindow: !0,
			Width: 166,
			Height: 61
		}
	},
	Branding: {
		Splash: { Enabled: !1 },
		Logo: {
			Enabled: !0,
			Link: 'http://google.com',
			LinkEnabled: !1,
			NewWindow: !0,
			Width: 166,
			Height: 61
		}
	},
	MoreGames: { Enabled: !1, Link: 'http://www.marketjs.com/game/links/mobile', NewWindow: !0 }
};
var MobileAdInGamePreroll = {
	ad_duration: _SETTINGS.Ad.Mobile.Preroll.Duration,
	ad_width: _SETTINGS.Ad.Mobile.Preroll.Width,
	ad_height: _SETTINGS.Ad.Mobile.Preroll.Height,
	ready_in: _STRINGS.Ad.Mobile.Preroll.ReadyIn,
	loading: _STRINGS.Ad.Mobile.Preroll.Loading,
	close:
		_STRINGS.Ad.Mobile.Preroll.Close +
		'&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
	Initialize: function () {
		if (_SETTINGS.Ad.Mobile.Preroll.Rotation.Enabled) {
			var b = _SETTINGS.Ad.Mobile.Preroll.Rotation.Weight,
				c = b.MobileAdInGamePreroll,
				d = c + b.MobileAdInGamePreroll2,
				b = d + b.MobileAdInGamePreroll3,
				e = Math.floor(100 * Math.random());
			console.log('seed: ', e);
			e <= c
				? (this.selectedOverlayName = 'MobileAdInGamePreroll')
				: e <= d
				? (this.selectedOverlayName = 'MobileAdInGamePreroll2')
				: e <= b && (this.selectedOverlayName = 'MobileAdInGamePreroll3');
			console.log('Ad rotating preroll enabled');
		} else
			(this.selectedOverlayName = 'MobileAdInGamePreroll'),
				console.log('Ad rotating preroll disabled');
		console.log('selected:', this.selectedOverlayName);
		this.overlay = $('#' + this.selectedOverlayName);
		this.box = $('#' + this.selectedOverlayName + '-Box');
		this.game = $('#game');
		this.boxContents = {
			footer: $('#' + this.selectedOverlayName + '-Box-Footer'),
			header: $('#' + this.selectedOverlayName + '-Box-Header'),
			close: $('#' + this.selectedOverlayName + '-Box-Close'),
			body: $('#' + this.selectedOverlayName + '-Box-Body')
		};
		this.box.width(this.ad_width);
		this.box.height(this.ad_height);
		this.box.css('left', (this.overlay.width() - this.box.width()) / 2);
		this.box.css(
			'top',
			(this.overlay.height() -
				this.box.height() -
				this.boxContents.header.height() -
				this.boxContents.footer.height()) /
				2
		);
		this.overlay.show(this.Timer(this.ad_duration));
	},
	Timer: function (b) {
		var c = b,
			d = setInterval(function () {
				MobileAdInGamePreroll.boxContents.header.text(MobileAdInGamePreroll.ready_in + c + '...');
				MobileAdInGamePreroll.boxContents.footer.text(MobileAdInGamePreroll.loading);
				c--;
				0 > c &&
					(clearInterval(d),
					MobileAdInGamePreroll.boxContents.close.css(
						'left',
						MobileAdInGamePreroll.boxContents.body.width() - 23
					),
					MobileAdInGamePreroll.boxContents.close.show(),
					MobileAdInGamePreroll.boxContents.header.html(MobileAdInGamePreroll.close),
					MobileAdInGamePreroll.boxContents.footer.text(''));
			}, 1e3);
	},
	Close: function () {
		this.boxContents.close.hide();
		this.overlay.hide();
	}
};
var MobileAdInGameHeader = {
	ad_duration: _SETTINGS.Ad.Mobile.Header.Duration,
	ad_width: _SETTINGS.Ad.Mobile.Header.Width,
	ad_height: _SETTINGS.Ad.Mobile.Header.Height,
	Initialize: function () {
		if (_SETTINGS.Ad.Mobile.Header.Rotation.Enabled) {
			var b = _SETTINGS.Ad.Mobile.Header.Rotation.Weight,
				c = b.MobileAdInGameHeader,
				d = c + b.MobileAdInGameHeader2,
				b = d + b.MobileAdInGameHeader3,
				e = Math.floor(100 * Math.random());
			console.log('seed: ', e);
			e <= c
				? (this.selectedOverlayName = 'MobileAdInGameHeader')
				: e <= d
				? (this.selectedOverlayName = 'MobileAdInGameHeader2')
				: e <= b && (this.selectedOverlayName = 'MobileAdInGameHeader3');
			console.log('Ad rotating header enabled');
		} else
			(this.selectedOverlayName = 'MobileAdInGameHeader'),
				console.log('Ad rotating header disabled');
		this.div = $('#' + this.selectedOverlayName);
		this.game = $('#game');
		this.div.width(this.ad_width);
		this.div.height(this.ad_height);
		this.div.css('left', this.game.position().left + (this.game.width() - this.div.width()) / 2);
		this.div.css('top', 0);
		this.div.show(this.Timer(this.ad_duration));
	},
	Timer: function (b) {
		var c = setInterval(function () {
			b--;
			0 > b && (MobileAdInGameHeader.div.hide(), clearInterval(c));
		}, 1e3);
	}
};
var MobileAdInGameFooter = {
	ad_duration: _SETTINGS.Ad.Mobile.Footer.Duration,
	ad_width: _SETTINGS.Ad.Mobile.Footer.Width,
	ad_height: _SETTINGS.Ad.Mobile.Footer.Height,
	Initialize: function () {
		if (_SETTINGS.Ad.Mobile.Footer.Rotation.Enabled) {
			var b = _SETTINGS.Ad.Mobile.Footer.Rotation.Weight,
				c = b.MobileAdInGameFooter,
				d = c + b.MobileAdInGameFooter2,
				b = d + b.MobileAdInGameFooter3,
				e = Math.floor(100 * Math.random());
			console.log('seed: ', e);
			e <= c
				? (this.selectedOverlayName = 'MobileAdInGameFooter')
				: e <= d
				? (this.selectedOverlayName = 'MobileAdInGameFooter2')
				: e <= b && (this.selectedOverlayName = 'MobileAdInGameFooter3');
			console.log('Ad rotating footer enabled');
		} else
			(this.selectedOverlayName = 'MobileAdInGameFooter'),
				console.log('Ad rotating footer disabled');
		this.div = $('#' + this.selectedOverlayName);
		this.game = $('#game');
		this.div.width(this.ad_width);
		this.div.height(this.ad_height);
		this.div.css('left', this.game.position().left + (this.game.width() - this.div.width()) / 2);
		this.div.css('top', this.game.height() - this.div.height() - 5);
		this.div.show(this.Timer(this.ad_duration));
	},
	Timer: function (b) {
		var c = setInterval(function () {
			b--;
			0 > b && (MobileAdInGameFooter.div.hide(), clearInterval(c));
		}, 1e3);
	}
};
var MobileAdInGameEnd = {
	ad_duration: _SETTINGS.Ad.Mobile.End.Duration,
	ad_width: _SETTINGS.Ad.Mobile.End.Width,
	ad_height: _SETTINGS.Ad.Mobile.End.Height,
	ready_in: _STRINGS.Ad.Mobile.End.ReadyIn,
	loading: _STRINGS.Ad.Mobile.End.Loading,
	close:
		_STRINGS.Ad.Mobile.End.Close + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;',
	Initialize: function () {
		if (_SETTINGS.Ad.Mobile.End.Rotation.Enabled) {
			var b = _SETTINGS.Ad.Mobile.End.Rotation.Weight,
				c = b.MobileAdInGameEnd,
				d = c + b.MobileAdInGameEnd2,
				b = d + b.MobileAdInGameEnd3,
				e = Math.floor(100 * Math.random());
			console.log('seed: ', e);
			e <= c
				? (this.selectedOverlayName = 'MobileAdInGameEnd')
				: e <= d
				? (this.selectedOverlayName = 'MobileAdInGameEnd2')
				: e <= b && (this.selectedOverlayName = 'MobileAdInGameEnd3');
			console.log('Ad rotating end enabled');
		} else
			(this.selectedOverlayName = 'MobileAdInGameEnd'), console.log('Ad rotating end disabled');
		console.log('selected:', this.selectedOverlayName);
		this.overlay = $('#' + this.selectedOverlayName);
		this.box = $('#' + this.selectedOverlayName + '-Box');
		this.game = $('#game');
		this.boxContents = {
			footer: $('#' + this.selectedOverlayName + '-Box-Footer'),
			header: $('#' + this.selectedOverlayName + '-Box-Header'),
			close: $('#' + this.selectedOverlayName + '-Box-Close'),
			body: $('#' + this.selectedOverlayName + '-Box-Body')
		};
		this.box.width(this.ad_width);
		this.box.height(this.ad_height);
		this.box.css('left', (this.overlay.width() - this.box.width()) / 2);
		this.box.css(
			'top',
			(this.overlay.height() -
				this.box.height() -
				this.boxContents.header.height() -
				this.boxContents.footer.height()) /
				2
		);
		this.overlay.show(this.Timer(this.ad_duration));
	},
	Timer: function (b) {
		var c = b,
			d = setInterval(function () {
				MobileAdInGameEnd.boxContents.header.text(MobileAdInGameEnd.ready_in + c + '...');
				MobileAdInGameEnd.boxContents.footer.text(MobileAdInGameEnd.loading);
				c--;
				0 > c &&
					(clearInterval(d),
					MobileAdInGameEnd.boxContents.close.css(
						'left',
						MobileAdInGameEnd.boxContents.body.width() - 23
					),
					MobileAdInGameEnd.boxContents.close.show(),
					MobileAdInGameEnd.boxContents.header.html(MobileAdInGameEnd.close),
					MobileAdInGameEnd.boxContents.footer.text(''));
			}, 1e3);
	},
	Close: function () {
		this.boxContents.close.hide();
		this.overlay.hide();
	}
};
(function (b, c) {
	function d(b, x, d) {
		if (d === c && 1 === b.nodeType)
			if (
				((d = 'data-' + x.replace(tc, '-$1').toLowerCase()),
				(d = b.getAttribute(d)),
				'string' == typeof d)
			) {
				try {
					d =
						'true' === d
							? !0
							: 'false' === d
							? !1
							: 'null' === d
							? null
							: +d + '' === d
							? +d
							: uc.test(d)
							? g.parseJSON(d)
							: d;
				} catch (j) {}
				g.data(b, x, d);
			} else d = c;
		return d;
	}
	function e(b) {
		for (var c in b) if (!('data' === c && g.isEmptyObject(b[c])) && 'toJSON' !== c) return !1;
		return !0;
	}
	function f() {
		return !1;
	}
	function l() {
		return !0;
	}
	function n(b) {
		return !b || !b.parentNode || 11 === b.parentNode.nodeType;
	}
	function q(b, c) {
		do b = b[c];
		while (b && 1 !== b.nodeType);
		return b;
	}
	function j(b, c, d) {
		c = c || 0;
		if (g.isFunction(c))
			return g.grep(b, function (b, v) {
				return !!c.call(b, v, b) === d;
			});
		if (c.nodeType)
			return g.grep(b, function (b) {
				return (b === c) === d;
			});
		if ('string' == typeof c) {
			var j = g.grep(b, function (b) {
				return 1 === b.nodeType;
			});
			if (wc.test(c)) return g.filter(c, j, !d);
			c = g.filter(c, j);
		}
		return g.grep(b, function (b) {
			return 0 <= g.inArray(b, c) === d;
		});
	}
	function p(b) {
		var c = Ab.split('|');
		b = b.createDocumentFragment();
		if (b.createElement) for (; c.length; ) b.createElement(c.pop());
		return b;
	}
	function m(b, c) {
		if (1 === c.nodeType && g.hasData(b)) {
			var d, j, e;
			j = g._data(b);
			var f = g._data(c, j),
				C = j.events;
			if (C)
				for (d in (delete f.handle, (f.events = {}), C)) {
					j = 0;
					for (e = C[d].length; j < e; j++) g.event.add(c, d, C[d][j]);
				}
			f.data && (f.data = g.extend({}, f.data));
		}
	}
	function r(b, c) {
		var d;
		1 === c.nodeType &&
			(c.clearAttributes && c.clearAttributes(),
			c.mergeAttributes && c.mergeAttributes(b),
			(d = c.nodeName.toLowerCase()),
			'object' === d
				? (c.parentNode && (c.outerHTML = b.outerHTML),
				  g.support.html5Clone &&
						b.innerHTML &&
						!g.trim(c.innerHTML) &&
						(c.innerHTML = b.innerHTML))
				: 'input' === d && Bb.test(b.type)
				? ((c.defaultChecked = c.checked = b.checked), c.value !== b.value && (c.value = b.value))
				: 'option' === d
				? (c.selected = b.defaultSelected)
				: 'input' === d || 'textarea' === d
				? (c.defaultValue = b.defaultValue)
				: 'script' === d && c.text !== b.text && (c.text = b.text),
			c.removeAttribute(g.expando));
	}
	function s(b) {
		return 'undefined' != typeof b.getElementsByTagName
			? b.getElementsByTagName('*')
			: 'undefined' != typeof b.querySelectorAll
			? b.querySelectorAll('*')
			: [];
	}
	function t(b) {
		Bb.test(b.type) && (b.defaultChecked = b.checked);
	}
	function y(b, c) {
		if (c in b) return c;
		for (var d = c.charAt(0).toUpperCase() + c.slice(1), j = c, g = Cb.length; g--; )
			if (((c = Cb[g] + d), c in b)) return c;
		return j;
	}
	function B(b, c) {
		return (b = c || b), 'none' === g.css(b, 'display') || !g.contains(b.ownerDocument, b);
	}
	function F(b, c) {
		for (var d, j, e = [], f = 0, C = b.length; f < C; f++)
			(d = b[f]),
				d.style &&
					((e[f] = g._data(d, 'olddisplay')),
					c
						? (!e[f] && 'none' === d.style.display && (d.style.display = ''),
						  '' === d.style.display && B(d) && (e[f] = g._data(d, 'olddisplay', xa(d.nodeName))))
						: ((j = O(d, 'display')), !e[f] && 'none' !== j && g._data(d, 'olddisplay', j)));
		for (f = 0; f < C; f++)
			if (((d = b[f]), d.style && (!c || 'none' === d.style.display || '' === d.style.display)))
				d.style.display = c ? e[f] || '' : 'none';
		return b;
	}
	function z(b, c, d) {
		return (b = xc.exec(c)) ? Math.max(0, b[1] - (d || 0)) + (b[2] || 'px') : c;
	}
	function ca(b, c, d, j) {
		c = d === (j ? 'border' : 'content') ? 4 : 'width' === c ? 1 : 0;
		for (var e = 0; 4 > c; c += 2)
			'margin' === d && (e += g.css(b, d + ia[c], !0)),
				j
					? ('content' === d && (e -= parseFloat(O(b, 'padding' + ia[c])) || 0),
					  'margin' !== d && (e -= parseFloat(O(b, 'border' + ia[c] + 'Width')) || 0))
					: ((e += parseFloat(O(b, 'padding' + ia[c])) || 0),
					  'padding' !== d && (e += parseFloat(O(b, 'border' + ia[c] + 'Width')) || 0));
		return e;
	}
	function A(b, c, d) {
		var j = 'width' === c ? b.offsetWidth : b.offsetHeight,
			e = !0,
			f = g.support.boxSizing && 'border-box' === g.css(b, 'boxSizing');
		if (0 >= j || null == j) {
			j = O(b, c);
			if (0 > j || null == j) j = b.style[c];
			if (Da.test(j)) return j;
			e = f && (g.support.boxSizingReliable || j === b.style[c]);
			j = parseFloat(j) || 0;
		}
		return j + ca(b, c, d || (f ? 'border' : 'content'), e) + 'px';
	}
	function xa(b) {
		if (bb[b]) return bb[b];
		var c = g('<' + b + '>').appendTo(u.body),
			d = c.css('display');
		c.remove();
		if ('none' === d || '' === d) {
			pa = u.body.appendChild(
				pa || g.extend(u.createElement('iframe'), { frameBorder: 0, width: 0, height: 0 })
			);
			if (!qa || !pa.createElement)
				(qa = (pa.contentWindow || pa.contentDocument).document),
					qa.write('<!doctype html><html><body>'),
					qa.close();
			c = qa.body.appendChild(qa.createElement(b));
			d = O(c, 'display');
			u.body.removeChild(pa);
		}
		return (bb[b] = d), d;
	}
	function ra(b, c, d, j) {
		var e;
		if (g.isArray(c))
			g.each(c, function (c, x) {
				d || yc.test(b) ? j(b, x) : ra(b + '[' + ('object' == typeof x ? c : '') + ']', x, d, j);
			});
		else if (!d && 'object' === g.type(c)) for (e in c) ra(b + '[' + e + ']', c[e], d, j);
		else j(b, c);
	}
	function Db(b) {
		return function (c, d) {
			'string' != typeof c && ((d = c), (c = '*'));
			var j,
				e,
				f = c.toLowerCase().split(ja),
				C = 0,
				p = f.length;
			if (g.isFunction(d))
				for (; C < p; C++)
					(j = f[C]),
						(e = /^\+/.test(j)) && (j = j.substr(1) || '*'),
						(j = b[j] = b[j] || []),
						j[e ? 'unshift' : 'push'](d);
		};
	}
	function Ea(b, x, d, j, g, e) {
		g = g || x.dataTypes[0];
		e = e || {};
		e[g] = !0;
		var f;
		g = b[g];
		for (var p = 0, m = g ? g.length : 0, l = b === cb; p < m && (l || !f); p++)
			(f = g[p](x, d, j)),
				'string' == typeof f &&
					(!l || e[f] ? (f = c) : (x.dataTypes.unshift(f), (f = Ea(b, x, d, j, f, e))));
		return (l || !f) && !e['*'] && (f = Ea(b, x, d, j, '*', e)), f;
	}
	function X(b, x) {
		var d,
			j,
			e = g.ajaxSettings.flatOptions || {};
		for (d in x) x[d] !== c && ((e[d] ? b : j || (j = {}))[d] = x[d]);
		j && g.extend(!0, b, j);
	}
	function Eb() {
		try {
			return new b.XMLHttpRequest();
		} catch (c) {}
	}
	function Fa() {
		return (
			setTimeout(function () {
				Ga = c;
			}, 0),
			(Ga = g.now())
		);
	}
	function Ha(b, c, d) {
		var j,
			e = 0,
			f = Ia.length,
			C = g.Deferred().always(function () {
				delete p.elem;
			}),
			p = function () {
				for (
					var c = Ga || Fa(),
						c = Math.max(0, m.startTime + m.duration - c),
						d = 1 - (c / m.duration || 0),
						x = 0,
						j = m.tweens.length;
					x < j;
					x++
				)
					m.tweens[x].run(d);
				return C.notifyWith(b, [m, d, c]), 1 > d && j ? c : (C.resolveWith(b, [m]), !1);
			},
			m = C.promise({
				elem: b,
				props: g.extend({}, c),
				opts: g.extend(!0, { specialEasing: {} }, d),
				originalProperties: c,
				originalOptions: d,
				startTime: Ga || Fa(),
				duration: d.duration,
				tweens: [],
				createTween: function (c, d) {
					var x = g.Tween(b, m.opts, c, d, m.opts.specialEasing[c] || m.opts.easing);
					return m.tweens.push(x), x;
				},
				stop: function (c) {
					for (var d = 0, x = c ? m.tweens.length : 0; d < x; d++) m.tweens[d].run(1);
					return c ? C.resolveWith(b, [m, c]) : C.rejectWith(b, [m, c]), this;
				}
			});
		c = m.props;
		d = m.opts.specialEasing;
		var l, r, s, n;
		for (j in c)
			if (
				((l = g.camelCase(j)),
				(r = d[l]),
				(s = c[j]),
				g.isArray(s) && ((r = s[1]), (s = c[j] = s[0])),
				j !== l && ((c[l] = s), delete c[j]),
				(n = g.cssHooks[l]) && 'expand' in n)
			)
				for (j in ((s = n.expand(s)), delete c[l], s)) j in c || ((c[j] = s[j]), (d[j] = r));
			else d[l] = r;
		for (; e < f; e++) if ((j = Ia[e].call(m, b, c, m.opts))) return j;
		var t = m;
		g.each(c, function (b, c) {
			for (
				var v = (ya[b] || []).concat(ya['*']), d = 0, x = v.length;
				d < x && !v[d].call(t, b, c);
				d++
			);
		});
		return (
			g.isFunction(m.opts.start) && m.opts.start.call(b, m),
			g.fx.timer(g.extend(p, { anim: m, queue: m.opts.queue, elem: b })),
			m
				.progress(m.opts.progress)
				.done(m.opts.done, m.opts.complete)
				.fail(m.opts.fail)
				.always(m.opts.always)
		);
	}
	function J(b, c, d, j, g) {
		return new J.prototype.init(b, c, d, j, g);
	}
	function Y(b, c) {
		var d,
			j = { height: b },
			g = 0;
		for (c = c ? 1 : 0; 4 > g; g += 2 - c) (d = ia[g]), (j['margin' + d] = j['padding' + d] = b);
		return c && (j.opacity = j.width = b), j;
	}
	function U(b) {
		return g.isWindow(b) ? b : 9 === b.nodeType ? b.defaultView || b.parentWindow : !1;
	}
	var V,
		P,
		u = b.document,
		Ac = b.location,
		sa = b.navigator,
		S = b.jQuery,
		M = b.$,
		Fb = Array.prototype.push,
		da = Array.prototype.slice,
		Gb = Array.prototype.indexOf,
		Bc = Object.prototype.toString,
		db = Object.prototype.hasOwnProperty,
		eb = String.prototype.trim,
		g = function (b, c) {
			return new g.fn.init(b, c, V);
		},
		Ja = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
		Cc = /\S/,
		ja = /\s+/,
		Dc = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
		Ec = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
		Hb = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
		Fc = /^[\],:{}\s]*$/,
		Gc = /(?:^|:|,)(?:\s*\[)+/g,
		Hc = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
		Ic = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
		Jc = /^-ms-/,
		Kc = /-([\da-z])/gi,
		Lc = function (b, c) {
			return (c + '').toUpperCase();
		},
		Ka = function () {
			u.addEventListener
				? (u.removeEventListener('DOMContentLoaded', Ka, !1), g.ready())
				: 'complete' === u.readyState && (u.detachEvent('onreadystatechange', Ka), g.ready());
		},
		Ib = {};
	g.fn = g.prototype = {
		constructor: g,
		init: function (b, d, j) {
			var e, f;
			if (!b) return this;
			if (b.nodeType) return (this.context = this[0] = b), (this.length = 1), this;
			if ('string' == typeof b) {
				'<' === b.charAt(0) && '>' === b.charAt(b.length - 1) && 3 <= b.length
					? (e = [null, b, null])
					: (e = Ec.exec(b));
				if (e && (e[1] || !d)) {
					if (e[1])
						return (
							(d = d instanceof g ? d[0] : d),
							(f = d && d.nodeType ? d.ownerDocument || d : u),
							(b = g.parseHTML(e[1], f, !0)),
							Hb.test(e[1]) && g.isPlainObject(d) && this.attr.call(b, d, !0),
							g.merge(this, b)
						);
					if ((d = u.getElementById(e[2])) && d.parentNode) {
						if (d.id !== e[2]) return j.find(b);
						this.length = 1;
						this[0] = d;
					}
					return (this.context = u), (this.selector = b), this;
				}
				return !d || d.jquery ? (d || j).find(b) : this.constructor(d).find(b);
			}
			return g.isFunction(b)
				? j.ready(b)
				: (b.selector !== c && ((this.selector = b.selector), (this.context = b.context)),
				  g.makeArray(b, this));
		},
		selector: '',
		jquery: '1.8.2',
		length: 0,
		size: function () {
			return this.length;
		},
		toArray: function () {
			return da.call(this);
		},
		get: function (b) {
			return null == b ? this.toArray() : 0 > b ? this[this.length + b] : this[b];
		},
		pushStack: function (b, c, d) {
			b = g.merge(this.constructor(), b);
			return (
				(b.prevObject = this),
				(b.context = this.context),
				'find' === c
					? (b.selector = this.selector + (this.selector ? ' ' : '') + d)
					: c && (b.selector = this.selector + '.' + c + '(' + d + ')'),
				b
			);
		},
		each: function (b, c) {
			return g.each(this, b, c);
		},
		ready: function (b) {
			return g.ready.promise().done(b), this;
		},
		eq: function (b) {
			return (b = +b), -1 === b ? this.slice(b) : this.slice(b, b + 1);
		},
		first: function () {
			return this.eq(0);
		},
		last: function () {
			return this.eq(-1);
		},
		slice: function () {
			return this.pushStack(da.apply(this, arguments), 'slice', da.call(arguments).join(','));
		},
		map: function (b) {
			return this.pushStack(
				g.map(this, function (c, d) {
					return b.call(c, d, c);
				})
			);
		},
		end: function () {
			return this.prevObject || this.constructor(null);
		},
		push: Fb,
		sort: [].sort,
		splice: [].splice
	};
	g.fn.init.prototype = g.fn;
	g.extend = g.fn.extend = function () {
		var b,
			d,
			j,
			e,
			f,
			m,
			C = arguments[0] || {},
			p = 1,
			l = arguments.length,
			r = !1;
		'boolean' == typeof C && ((r = C), (C = arguments[1] || {}), (p = 2));
		'object' != typeof C && !g.isFunction(C) && (C = {});
		for (l === p && ((C = this), --p); p < l; p++)
			if (null != (b = arguments[p]))
				for (d in b)
					(j = C[d]),
						(e = b[d]),
						C !== e &&
							(r && e && (g.isPlainObject(e) || (f = g.isArray(e)))
								? (f
										? ((f = !1), (m = j && g.isArray(j) ? j : []))
										: (m = j && g.isPlainObject(j) ? j : {}),
								  (C[d] = g.extend(r, m, e)))
								: e !== c && (C[d] = e));
		return C;
	};
	g.extend({
		noConflict: function (c) {
			return b.$ === g && (b.$ = M), c && b.jQuery === g && (b.jQuery = S), g;
		},
		isReady: !1,
		readyWait: 1,
		holdReady: function (b) {
			b ? g.readyWait++ : g.ready(!0);
		},
		ready: function (b) {
			if (!(!0 === b ? --g.readyWait : g.isReady)) {
				if (!u.body) return setTimeout(g.ready, 1);
				g.isReady = !0;
				(!0 !== b && 0 < --g.readyWait) ||
					(P.resolveWith(u, [g]), g.fn.trigger && g(u).trigger('ready').off('ready'));
			}
		},
		isFunction: function (b) {
			return 'function' === g.type(b);
		},
		isArray:
			Array.isArray ||
			function (b) {
				return 'array' === g.type(b);
			},
		isWindow: function (b) {
			return null != b && b == b.window;
		},
		isNumeric: function (b) {
			return !isNaN(parseFloat(b)) && isFinite(b);
		},
		type: function (b) {
			return null == b ? String(b) : Ib[Bc.call(b)] || 'object';
		},
		isPlainObject: function (b) {
			if (!b || 'object' !== g.type(b) || b.nodeType || g.isWindow(b)) return !1;
			try {
				if (
					b.constructor &&
					!db.call(b, 'constructor') &&
					!db.call(b.constructor.prototype, 'isPrototypeOf')
				)
					return !1;
			} catch (d) {
				return !1;
			}
			for (var j in b);
			return j === c || db.call(b, j);
		},
		isEmptyObject: function (b) {
			for (var c in b) return !1;
			return !0;
		},
		error: function (b) {
			throw Error(b);
		},
		parseHTML: function (b, c, d) {
			var j;
			return !b || 'string' != typeof b
				? null
				: ('boolean' == typeof c && ((d = c), (c = 0)),
				  (c = c || u),
				  (j = Hb.exec(b))
						? [c.createElement(j[1])]
						: ((j = g.buildFragment([b], c, d ? null : [])),
						  g.merge([], (j.cacheable ? g.clone(j.fragment) : j.fragment).childNodes)));
		},
		parseJSON: function (c) {
			if (!c || 'string' != typeof c) return null;
			c = g.trim(c);
			if (b.JSON && b.JSON.parse) return b.JSON.parse(c);
			if (Fc.test(c.replace(Hc, '@').replace(Ic, ']').replace(Gc, '')))
				return new Function('return ' + c)();
			g.error('Invalid JSON: ' + c);
		},
		parseXML: function (v) {
			var d, j;
			if (!v || 'string' != typeof v) return null;
			try {
				b.DOMParser
					? ((j = new DOMParser()), (d = j.parseFromString(v, 'text/xml')))
					: ((d = new ActiveXObject('Microsoft.XMLDOM')), (d.async = 'false'), d.loadXML(v));
			} catch (e) {
				d = c;
			}
			return (
				(!d || !d.documentElement || d.getElementsByTagName('parsererror').length) &&
					g.error('Invalid XML: ' + v),
				d
			);
		},
		noop: function () {},
		globalEval: function (c) {
			c &&
				Cc.test(c) &&
				(
					b.execScript ||
					function (c) {
						b.eval.call(b, c);
					}
				)(c);
		},
		camelCase: function (b) {
			return b.replace(Jc, 'ms-').replace(Kc, Lc);
		},
		nodeName: function (b, c) {
			return b.nodeName && b.nodeName.toLowerCase() === c.toLowerCase();
		},
		each: function (b, d, j) {
			var e,
				f = 0,
				m = b.length,
				C = m === c || g.isFunction(b);
			if (j)
				if (C)
					for (e in b) {
						if (!1 === d.apply(b[e], j)) break;
					}
				else for (; f < m && !1 !== d.apply(b[f++], j); );
			else if (C)
				for (e in b) {
					if (!1 === d.call(b[e], e, b[e])) break;
				}
			else for (; f < m && !1 !== d.call(b[f], f, b[f++]); );
			return b;
		},
		trim:
			eb && !eb.call('\ufeff\u00a0')
				? function (b) {
						return null == b ? '' : eb.call(b);
				  }
				: function (b) {
						return null == b ? '' : (b + '').replace(Dc, '');
				  },
		makeArray: function (b, c) {
			var d,
				j = c || [];
			return (
				null != b &&
					((d = g.type(b)),
					null == b.length || 'string' === d || 'function' === d || 'regexp' === d || g.isWindow(b)
						? Fb.call(j, b)
						: g.merge(j, b)),
				j
			);
		},
		inArray: function (b, c, d) {
			var j;
			if (c) {
				if (Gb) return Gb.call(c, b, d);
				j = c.length;
				for (d = d ? (0 > d ? Math.max(0, j + d) : d) : 0; d < j; d++)
					if (d in c && c[d] === b) return d;
			}
			return -1;
		},
		merge: function (b, d) {
			var j = d.length,
				g = b.length,
				e = 0;
			if ('number' == typeof j) for (; e < j; e++) b[g++] = d[e];
			else for (; d[e] !== c; ) b[g++] = d[e++];
			return (b.length = g), b;
		},
		grep: function (b, c, d) {
			var j,
				g = [],
				e = 0,
				f = b.length;
			for (d = !!d; e < f; e++) (j = !!c(b[e], e)), d !== j && g.push(b[e]);
			return g;
		},
		map: function (b, d, j) {
			var e,
				f,
				m = [],
				C = 0,
				p = b.length;
			if (
				b instanceof g ||
				(p !== c &&
					'number' == typeof p &&
					((0 < p && b[0] && b[p - 1]) || 0 === p || g.isArray(b)))
			)
				for (; C < p; C++) (e = d(b[C], C, j)), null != e && (m[m.length] = e);
			else for (f in b) (e = d(b[f], f, j)), null != e && (m[m.length] = e);
			return m.concat.apply([], m);
		},
		guid: 1,
		proxy: function (b, d) {
			var j, e, f;
			return (
				'string' == typeof d && ((j = b[d]), (d = b), (b = j)),
				g.isFunction(b)
					? ((e = da.call(arguments, 2)),
					  (f = function () {
							return b.apply(d, e.concat(da.call(arguments)));
					  }),
					  (f.guid = b.guid = b.guid || g.guid++),
					  f)
					: c
			);
		},
		access: function (b, d, j, e, f, m, C) {
			var p,
				l = null == j,
				r = 0,
				s = b.length;
			if (j && 'object' == typeof j) {
				for (r in j) g.access(b, d, r, j[r], 1, m, e);
				f = 1;
			} else if (e !== c) {
				p = C === c && g.isFunction(e);
				l &&
					(p
						? ((p = d),
						  (d = function (b, c, v) {
								return p.call(g(b), v);
						  }))
						: (d.call(b, e), (d = null)));
				if (d) for (; r < s; r++) d(b[r], j, p ? e.call(b[r], r, d(b[r], j)) : e, C);
				f = 1;
			}
			return f ? b : l ? d.call(b) : s ? d(b[0], j) : m;
		},
		now: function () {
			return new Date().getTime();
		}
	});
	g.ready.promise = function (c) {
		if (!P)
			if (((P = g.Deferred()), 'complete' === u.readyState)) setTimeout(g.ready, 1);
			else if (u.addEventListener)
				u.addEventListener('DOMContentLoaded', Ka, !1), b.addEventListener('load', g.ready, !1);
			else {
				u.attachEvent('onreadystatechange', Ka);
				b.attachEvent('onload', g.ready);
				var d = !1;
				try {
					d = null == b.frameElement && u.documentElement;
				} catch (j) {}
				d &&
					d.doScroll &&
					(function vc() {
						if (!g.isReady) {
							try {
								d.doScroll('left');
							} catch (b) {
								return setTimeout(vc, 50);
							}
							g.ready();
						}
					})();
			}
		return P.promise(c);
	};
	g.each('Boolean Number String Function Array Date RegExp Object'.split(' '), function (b, c) {
		Ib['[object ' + c + ']'] = c.toLowerCase();
	});
	V = g(u);
	var Jb = {};
	g.Callbacks = function (b) {
		var d;
		if ('string' == typeof b) {
			if (!(d = Jb[b])) {
				d = b;
				var j = (Jb[d] = {});
				d =
					(g.each(d.split(ja), function (b, c) {
						j[c] = !0;
					}),
					j);
			}
		} else d = g.extend({}, b);
		b = d;
		var e,
			f,
			m,
			p,
			l,
			r,
			s = [],
			n = !b.once && [],
			t = function (c) {
				e = b.memory && c;
				f = !0;
				r = p || 0;
				p = 0;
				l = s.length;
				for (m = !0; s && r < l; r++)
					if (!1 === s[r].apply(c[0], c[1]) && b.stopOnFalse) {
						e = !1;
						break;
					}
				m = !1;
				s && (n ? n.length && t(n.shift()) : e ? (s = []) : q.disable());
			},
			q = {
				add: function () {
					if (s) {
						var c = s.length;
						(function zc(c) {
							g.each(c, function (c, d) {
								var x = g.type(d);
								'function' === x && (!b.unique || !q.has(d))
									? s.push(d)
									: d && d.length && 'string' !== x && zc(d);
							});
						})(arguments);
						m ? (l = s.length) : e && ((p = c), t(e));
					}
					return this;
				},
				remove: function () {
					return (
						s &&
							g.each(arguments, function (b, c) {
								for (var v; -1 < (v = g.inArray(c, s, v)); )
									s.splice(v, 1), m && (v <= l && l--, v <= r && r--);
							}),
						this
					);
				},
				has: function (b) {
					return -1 < g.inArray(b, s);
				},
				empty: function () {
					return (s = []), this;
				},
				disable: function () {
					return (s = n = e = c), this;
				},
				disabled: function () {
					return !s;
				},
				lock: function () {
					return (n = c), e || q.disable(), this;
				},
				locked: function () {
					return !n;
				},
				fireWith: function (b, c) {
					return (
						(c = c || []),
						(c = [b, c.slice ? c.slice() : c]),
						s && (!f || n) && (m ? n.push(c) : t(c)),
						this
					);
				},
				fire: function () {
					return q.fireWith(this, arguments), this;
				},
				fired: function () {
					return !!f;
				}
			};
		return q;
	};
	g.extend({
		Deferred: function (b) {
			var c = [
					['resolve', 'done', g.Callbacks('once memory'), 'resolved'],
					['reject', 'fail', g.Callbacks('once memory'), 'rejected'],
					['notify', 'progress', g.Callbacks('memory')]
				],
				d = 'pending',
				j = {
					state: function () {
						return d;
					},
					always: function () {
						return e.done(arguments).fail(arguments), this;
					},
					then: function () {
						var b = arguments;
						return g
							.Deferred(function (v) {
								g.each(c, function (c, d) {
									var x = d[0],
										j = b[c];
									e[d[1]](
										g.isFunction(j)
											? function () {
													var b = j.apply(this, arguments);
													b && g.isFunction(b.promise)
														? b.promise().done(v.resolve).fail(v.reject).progress(v.notify)
														: v[x + 'With'](this === e ? v : this, [b]);
											  }
											: v[x]
									);
								});
								b = null;
							})
							.promise();
					},
					promise: function (b) {
						return null != b ? g.extend(b, j) : j;
					}
				},
				e = {};
			return (
				(j.pipe = j.then),
				g.each(c, function (b, v) {
					var g = v[2],
						f = v[3];
					j[v[1]] = g.add;
					f &&
						g.add(
							function () {
								d = f;
							},
							c[b ^ 1][2].disable,
							c[2][2].lock
						);
					e[v[0]] = g.fire;
					e[v[0] + 'With'] = g.fireWith;
				}),
				j.promise(e),
				b && b.call(e, e),
				e
			);
		},
		when: function (b) {
			var c = 0,
				d = da.call(arguments),
				j = d.length,
				e = 1 !== j || (b && g.isFunction(b.promise)) ? j : 0,
				f = 1 === e ? b : g.Deferred(),
				m = function (b, c, v) {
					return function (d) {
						c[b] = this;
						v[b] = 1 < arguments.length ? da.call(arguments) : d;
						v === p ? f.notifyWith(c, v) : --e || f.resolveWith(c, v);
					};
				},
				p,
				l,
				r;
			if (1 < j) {
				p = Array(j);
				l = Array(j);
				for (r = Array(j); c < j; c++)
					d[c] && g.isFunction(d[c].promise)
						? d[c].promise().done(m(c, r, d)).fail(f.reject).progress(m(c, l, p))
						: --e;
			}
			return e || f.resolveWith(r, d), f.promise();
		}
	});
	var Mc = g,
		fb,
		L,
		La,
		ka,
		Ma,
		Na,
		Q,
		la,
		Oa,
		gb,
		za,
		Kb,
		G = u.createElement('div');
	G.setAttribute('className', 't');
	G.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	La = G.getElementsByTagName('*');
	ka = G.getElementsByTagName('a')[0];
	ka.style.cssText = 'top:1px;float:left;opacity:.5';
	if (!La || !La.length) fb = {};
	else {
		Ma = u.createElement('select');
		Na = Ma.appendChild(u.createElement('option'));
		Q = G.getElementsByTagName('input')[0];
		L = {
			leadingWhitespace: 3 === G.firstChild.nodeType,
			tbody: !G.getElementsByTagName('tbody').length,
			htmlSerialize: !!G.getElementsByTagName('link').length,
			style: /top/.test(ka.getAttribute('style')),
			hrefNormalized: '/a' === ka.getAttribute('href'),
			opacity: /^0.5/.test(ka.style.opacity),
			cssFloat: !!ka.style.cssFloat,
			checkOn: 'on' === Q.value,
			optSelected: Na.selected,
			getSetAttribute: 't' !== G.className,
			enctype: !!u.createElement('form').enctype,
			html5Clone: '<:nav></:nav>' !== u.createElement('nav').cloneNode(!0).outerHTML,
			boxModel: 'CSS1Compat' === u.compatMode,
			submitBubbles: !0,
			changeBubbles: !0,
			focusinBubbles: !1,
			deleteExpando: !0,
			noCloneEvent: !0,
			inlineBlockNeedsLayout: !1,
			shrinkWrapBlocks: !1,
			reliableMarginRight: !0,
			boxSizingReliable: !0,
			pixelPosition: !1
		};
		Q.checked = !0;
		L.noCloneChecked = Q.cloneNode(!0).checked;
		Ma.disabled = !0;
		L.optDisabled = !Na.disabled;
		try {
			delete G.test;
		} catch (Od) {
			L.deleteExpando = !1;
		}
		!G.addEventListener &&
			G.attachEvent &&
			G.fireEvent &&
			(G.attachEvent(
				'onclick',
				(Kb = function () {
					L.noCloneEvent = !1;
				})
			),
			G.cloneNode(!0).fireEvent('onclick'),
			G.detachEvent('onclick', Kb));
		Q = u.createElement('input');
		Q.value = 't';
		Q.setAttribute('type', 'radio');
		L.radioValue = 't' === Q.value;
		Q.setAttribute('checked', 'checked');
		Q.setAttribute('name', 't');
		G.appendChild(Q);
		la = u.createDocumentFragment();
		la.appendChild(G.lastChild);
		L.checkClone = la.cloneNode(!0).cloneNode(!0).lastChild.checked;
		L.appendChecked = Q.checked;
		la.removeChild(Q);
		la.appendChild(G);
		if (G.attachEvent)
			for (gb in { submit: !0, change: !0, focusin: !0 })
				(Oa = 'on' + gb),
					(za = Oa in G) || (G.setAttribute(Oa, 'return;'), (za = 'function' == typeof G[Oa])),
					(L[gb + 'Bubbles'] = za);
		fb =
			(g(function () {
				var c,
					d,
					j,
					e,
					g = u.getElementsByTagName('body')[0];
				g &&
					((c = u.createElement('div')),
					(c.style.cssText =
						'visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px'),
					g.insertBefore(c, g.firstChild),
					(d = u.createElement('div')),
					c.appendChild(d),
					(d.innerHTML = '<table><tr><td></td><td>t</td></tr></table>'),
					(j = d.getElementsByTagName('td')),
					(j[0].style.cssText = 'padding:0;margin:0;border:0;display:none'),
					(za = 0 === j[0].offsetHeight),
					(j[0].style.display = ''),
					(j[1].style.display = 'none'),
					(L.reliableHiddenOffsets = za && 0 === j[0].offsetHeight),
					(d.innerHTML = ''),
					(d.style.cssText =
						'box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;'),
					(L.boxSizing = 4 === d.offsetWidth),
					(L.doesNotIncludeMarginInBodyOffset = 1 !== g.offsetTop),
					b.getComputedStyle &&
						((L.pixelPosition = '1%' !== (b.getComputedStyle(d, null) || {}).top),
						(L.boxSizingReliable =
							'4px' === (b.getComputedStyle(d, null) || { width: '4px' }).width),
						(e = u.createElement('div')),
						(e.style.cssText = d.style.cssText =
							'padding:0;margin:0;border:0;display:block;overflow:hidden;'),
						(e.style.marginRight = e.style.width = '0'),
						(d.style.width = '1px'),
						d.appendChild(e),
						(L.reliableMarginRight = !parseFloat((b.getComputedStyle(e, null) || {}).marginRight))),
					'undefined' != typeof d.style.zoom &&
						((d.innerHTML = ''),
						(d.style.cssText =
							'padding:0;margin:0;border:0;display:block;overflow:hidden;width:1px;padding:1px;display:inline;zoom:1'),
						(L.inlineBlockNeedsLayout = 3 === d.offsetWidth),
						(d.style.display = 'block'),
						(d.style.overflow = 'visible'),
						(d.innerHTML = '<div></div>'),
						(d.firstChild.style.width = '5px'),
						(L.shrinkWrapBlocks = 3 !== d.offsetWidth),
						(c.style.zoom = 1)),
					g.removeChild(c));
			}),
			la.removeChild(G),
			(La = ka = Ma = Na = Q = la = G = null),
			L);
	}
	Mc.support = fb;
	var uc = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
		tc = /([A-Z])/g;
	g.extend({
		cache: {},
		deletedIds: [],
		uuid: 0,
		expando: 'jQuery' + (g.fn.jquery + Math.random()).replace(/\D/g, ''),
		noData: { embed: !0, object: 'clsid:D27CDB6E-AE6D-11cf-96B8-444553540000', applet: !0 },
		hasData: function (b) {
			return (b = b.nodeType ? g.cache[b[g.expando]] : b[g.expando]), !!b && !e(b);
		},
		data: function (b, d, j, e) {
			if (g.acceptData(b)) {
				var f,
					m,
					p = g.expando,
					l = 'string' == typeof d,
					r = b.nodeType,
					s = r ? g.cache : b,
					n = r ? b[p] : b[p] && p;
				if ((n && s[n] && (e || s[n].data)) || !(l && j === c)) {
					n || (r ? (b[p] = n = g.deletedIds.pop() || g.guid++) : (n = p));
					s[n] || ((s[n] = {}), r || (s[n].toJSON = g.noop));
					if ('object' == typeof d || 'function' == typeof d)
						e ? (s[n] = g.extend(s[n], d)) : (s[n].data = g.extend(s[n].data, d));
					return (
						(f = s[n]),
						e || (f.data || (f.data = {}), (f = f.data)),
						j !== c && (f[g.camelCase(d)] = j),
						l ? ((m = f[d]), null == m && (m = f[g.camelCase(d)])) : (m = f),
						m
					);
				}
			}
		},
		removeData: function (b, c, d) {
			if (g.acceptData(b)) {
				var j,
					f,
					m,
					p = b.nodeType,
					l = p ? g.cache : b,
					r = p ? b[g.expando] : g.expando;
				if (l[r]) {
					if (c && (j = d ? l[r] : l[r].data)) {
						g.isArray(c) ||
							(c in j
								? (c = [c])
								: ((c = g.camelCase(c)), c in j ? (c = [c]) : (c = c.split(' '))));
						f = 0;
						for (m = c.length; f < m; f++) delete j[c[f]];
						if (!(d ? e : g.isEmptyObject)(j)) return;
					}
					if (d || !(delete l[r].data, !e(l[r])))
						p
							? g.cleanData([b], !0)
							: g.support.deleteExpando || l != l.window
							? delete l[r]
							: (l[r] = null);
				}
			}
		},
		_data: function (b, c, d) {
			return g.data(b, c, d, !0);
		},
		acceptData: function (b) {
			var c = b.nodeName && g.noData[b.nodeName.toLowerCase()];
			return !c || (!0 !== c && b.getAttribute('classid') === c);
		}
	});
	g.fn.extend({
		data: function (b, j) {
			var e,
				f,
				m,
				p,
				l,
				r = this[0],
				s = 0,
				n = null;
			if (b === c) {
				if (this.length && ((n = g.data(r)), 1 === r.nodeType && !g._data(r, 'parsedAttrs'))) {
					m = r.attributes;
					for (l = m.length; s < l; s++)
						(p = m[s].name),
							p.indexOf('data-') || ((p = g.camelCase(p.substring(5))), d(r, p, n[p]));
					g._data(r, 'parsedAttrs', !0);
				}
				return n;
			}
			return 'object' == typeof b
				? this.each(function () {
						g.data(this, b);
				  })
				: ((e = b.split('.', 2)),
				  (e[1] = e[1] ? '.' + e[1] : ''),
				  (f = e[1] + '!'),
				  g.access(
						this,
						function (j) {
							if (j === c)
								return (
									(n = this.triggerHandler('getData' + f, [e[0]])),
									n === c && r && ((n = g.data(r, b)), (n = d(r, b, n))),
									n === c && e[1] ? this.data(e[0]) : n
								);
							e[1] = j;
							this.each(function () {
								var c = g(this);
								c.triggerHandler('setData' + f, e);
								g.data(this, b, j);
								c.triggerHandler('changeData' + f, e);
							});
						},
						null,
						j,
						1 < arguments.length,
						null,
						!1
				  ));
		},
		removeData: function (b) {
			return this.each(function () {
				g.removeData(this, b);
			});
		}
	});
	g.extend({
		queue: function (b, c, d) {
			var j;
			if (b)
				return (
					(c = (c || 'fx') + 'queue'),
					(j = g._data(b, c)),
					d && (!j || g.isArray(d) ? (j = g._data(b, c, g.makeArray(d))) : j.push(d)),
					j || []
				);
		},
		dequeue: function (b, c) {
			c = c || 'fx';
			var d = g.queue(b, c),
				j = d.length,
				e = d.shift(),
				f = g._queueHooks(b, c),
				m = function () {
					g.dequeue(b, c);
				};
			'inprogress' === e && ((e = d.shift()), j--);
			e && ('fx' === c && d.unshift('inprogress'), delete f.stop, e.call(b, m, f));
			!j && f && f.empty.fire();
		},
		_queueHooks: function (b, c) {
			var d = c + 'queueHooks';
			return (
				g._data(b, d) ||
				g._data(b, d, {
					empty: g.Callbacks('once memory').add(function () {
						g.removeData(b, c + 'queue', !0);
						g.removeData(b, d, !0);
					})
				})
			);
		}
	});
	g.fn.extend({
		queue: function (b, d) {
			var j = 2;
			return (
				'string' != typeof b && ((d = b), (b = 'fx'), j--),
				arguments.length < j
					? g.queue(this[0], b)
					: d === c
					? this
					: this.each(function () {
							var c = g.queue(this, b, d);
							g._queueHooks(this, b);
							'fx' === b && 'inprogress' !== c[0] && g.dequeue(this, b);
					  })
			);
		},
		dequeue: function (b) {
			return this.each(function () {
				g.dequeue(this, b);
			});
		},
		delay: function (b, c) {
			return (
				(b = g.fx ? g.fx.speeds[b] || b : b),
				(c = c || 'fx'),
				this.queue(c, function (c, d) {
					var j = setTimeout(c, b);
					d.stop = function () {
						clearTimeout(j);
					};
				})
			);
		},
		clearQueue: function (b) {
			return this.queue(b || 'fx', []);
		},
		promise: function (b, d) {
			var j,
				e = 1,
				f = g.Deferred(),
				m = this,
				p = this.length,
				l = function () {
					--e || f.resolveWith(m, [m]);
				};
			'string' != typeof b && ((d = b), (b = c));
			for (b = b || 'fx'; p--; )
				(j = g._data(m[p], b + 'queueHooks')) && j.empty && (e++, j.empty.add(l));
			return l(), f.promise(d);
		}
	});
	var fa,
		Lb,
		Mb,
		Nb = /[\t\r\n]/g,
		Nc = /\r/g,
		Oc = /^(?:button|input)$/i,
		Pc = /^(?:button|input|object|select|textarea)$/i,
		Qc = /^a(?:rea|)$/i,
		Ob =
			/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
		Pb = g.support.getSetAttribute;
	g.fn.extend({
		attr: function (b, c) {
			return g.access(this, g.attr, b, c, 1 < arguments.length);
		},
		removeAttr: function (b) {
			return this.each(function () {
				g.removeAttr(this, b);
			});
		},
		prop: function (b, c) {
			return g.access(this, g.prop, b, c, 1 < arguments.length);
		},
		removeProp: function (b) {
			return (
				(b = g.propFix[b] || b),
				this.each(function () {
					try {
						(this[b] = c), delete this[b];
					} catch (d) {}
				})
			);
		},
		addClass: function (b) {
			var c, d, j, e, f, m, p;
			if (g.isFunction(b))
				return this.each(function (c) {
					g(this).addClass(b.call(this, c, this.className));
				});
			if (b && 'string' == typeof b) {
				c = b.split(ja);
				d = 0;
				for (j = this.length; d < j; d++)
					if (((e = this[d]), 1 === e.nodeType))
						if (!e.className && 1 === c.length) e.className = b;
						else {
							f = ' ' + e.className + ' ';
							m = 0;
							for (p = c.length; m < p; m++) 0 > f.indexOf(' ' + c[m] + ' ') && (f += c[m] + ' ');
							e.className = g.trim(f);
						}
			}
			return this;
		},
		removeClass: function (b) {
			var d, j, e, f, m, p, l;
			if (g.isFunction(b))
				return this.each(function (c) {
					g(this).removeClass(b.call(this, c, this.className));
				});
			if ((b && 'string' == typeof b) || b === c) {
				d = (b || '').split(ja);
				p = 0;
				for (l = this.length; p < l; p++)
					if (((e = this[p]), 1 === e.nodeType && e.className)) {
						j = (' ' + e.className + ' ').replace(Nb, ' ');
						f = 0;
						for (m = d.length; f < m; f++)
							for (; 0 <= j.indexOf(' ' + d[f] + ' '); ) j = j.replace(' ' + d[f] + ' ', ' ');
						e.className = b ? g.trim(j) : '';
					}
			}
			return this;
		},
		toggleClass: function (b, c) {
			var d = typeof b,
				j = 'boolean' == typeof c;
			return g.isFunction(b)
				? this.each(function (d) {
						g(this).toggleClass(b.call(this, d, this.className, c), c);
				  })
				: this.each(function () {
						if ('string' === d)
							for (var e, f = 0, m = g(this), p = c, l = b.split(ja); (e = l[f++]); )
								(p = j ? p : !m.hasClass(e)), m[p ? 'addClass' : 'removeClass'](e);
						else if ('undefined' === d || 'boolean' === d)
							this.className && g._data(this, '__className__', this.className),
								(this.className =
									this.className || !1 === b ? '' : g._data(this, '__className__') || '');
				  });
		},
		hasClass: function (b) {
			b = ' ' + b + ' ';
			for (var c = 0, d = this.length; c < d; c++)
				if (
					1 === this[c].nodeType &&
					0 <= (' ' + this[c].className + ' ').replace(Nb, ' ').indexOf(b)
				)
					return !0;
			return !1;
		},
		val: function (b) {
			var d,
				j,
				e,
				f = this[0];
			if (arguments.length)
				return (
					(e = g.isFunction(b)),
					this.each(function (j) {
						var f,
							N = g(this);
						if (
							1 === this.nodeType &&
							(e ? (f = b.call(this, j, N.val())) : (f = b),
							null == f
								? (f = '')
								: 'number' == typeof f
								? (f += '')
								: g.isArray(f) &&
								  (f = g.map(f, function (b) {
										return null == b ? '' : b + '';
								  })),
							(d = g.valHooks[this.type] || g.valHooks[this.nodeName.toLowerCase()]),
							!d || !('set' in d) || d.set(this, f, 'value') === c)
						)
							this.value = f;
					})
				);
			if (f)
				return (
					(d = g.valHooks[f.type] || g.valHooks[f.nodeName.toLowerCase()]),
					d && 'get' in d && (j = d.get(f, 'value')) !== c
						? j
						: ((j = f.value), 'string' == typeof j ? j.replace(Nc, '') : null == j ? '' : j)
				);
		}
	});
	g.extend({
		valHooks: {
			option: {
				get: function (b) {
					var c = b.attributes.value;
					return !c || c.specified ? b.value : b.text;
				}
			},
			select: {
				get: function (b) {
					var c,
						d,
						j = b.selectedIndex,
						e = [],
						f = b.options,
						m = 'select-one' === b.type;
					if (0 > j) return null;
					b = m ? j : 0;
					for (d = m ? j + 1 : f.length; b < d; b++)
						if (
							((c = f[b]),
							c.selected &&
								(g.support.optDisabled ? !c.disabled : null === c.getAttribute('disabled')) &&
								(!c.parentNode.disabled || !g.nodeName(c.parentNode, 'optgroup')))
						) {
							c = g(c).val();
							if (m) return c;
							e.push(c);
						}
					return m && !e.length && f.length ? g(f[j]).val() : e;
				},
				set: function (b, c) {
					var d = g.makeArray(c);
					return (
						g(b)
							.find('option')
							.each(function () {
								this.selected = 0 <= g.inArray(g(this).val(), d);
							}),
						d.length || (b.selectedIndex = -1),
						d
					);
				}
			}
		},
		attrFn: {},
		attr: function (b, d, j, e) {
			var f,
				m,
				p = b.nodeType;
			if (b && !(3 === p || 8 === p || 2 === p)) {
				if (e && g.isFunction(g.fn[d])) return g(b)[d](j);
				if ('undefined' == typeof b.getAttribute) return g.prop(b, d, j);
				(e = 1 !== p || !g.isXMLDoc(b)) &&
					((d = d.toLowerCase()), (m = g.attrHooks[d] || (Ob.test(d) ? Lb : fa)));
				if (j !== c) {
					if (null === j) {
						g.removeAttr(b, d);
						return;
					}
					return m && 'set' in m && e && (f = m.set(b, j, d)) !== c
						? f
						: (b.setAttribute(d, j + ''), j);
				}
				return m && 'get' in m && e && null !== (f = m.get(b, d))
					? f
					: ((f = b.getAttribute(d)), null === f ? c : f);
			}
		},
		removeAttr: function (b, c) {
			var d,
				j,
				e,
				f,
				m = 0;
			if (c && 1 === b.nodeType)
				for (j = c.split(ja); m < j.length; m++)
					(e = j[m]) &&
						((d = g.propFix[e] || e),
						(f = Ob.test(e)),
						f || g.attr(b, e, ''),
						b.removeAttribute(Pb ? e : d),
						f && d in b && (b[d] = !1));
		},
		attrHooks: {
			type: {
				set: function (b, c) {
					if (Oc.test(b.nodeName) && b.parentNode) g.error("type property can't be changed");
					else if (!g.support.radioValue && 'radio' === c && g.nodeName(b, 'input')) {
						var d = b.value;
						return b.setAttribute('type', c), d && (b.value = d), c;
					}
				}
			},
			value: {
				get: function (b, c) {
					return fa && g.nodeName(b, 'button') ? fa.get(b, c) : c in b ? b.value : null;
				},
				set: function (b, c, d) {
					if (fa && g.nodeName(b, 'button')) return fa.set(b, c, d);
					b.value = c;
				}
			}
		},
		propFix: {
			tabindex: 'tabIndex',
			readonly: 'readOnly',
			for: 'htmlFor',
			class: 'className',
			maxlength: 'maxLength',
			cellspacing: 'cellSpacing',
			cellpadding: 'cellPadding',
			rowspan: 'rowSpan',
			colspan: 'colSpan',
			usemap: 'useMap',
			frameborder: 'frameBorder',
			contenteditable: 'contentEditable'
		},
		prop: function (b, d, j) {
			var e,
				f,
				m,
				p = b.nodeType;
			if (b && !(3 === p || 8 === p || 2 === p))
				return (
					(m = 1 !== p || !g.isXMLDoc(b)),
					m && ((d = g.propFix[d] || d), (f = g.propHooks[d])),
					j !== c
						? f && 'set' in f && (e = f.set(b, j, d)) !== c
							? e
							: (b[d] = j)
						: f && 'get' in f && null !== (e = f.get(b, d))
						? e
						: b[d]
				);
		},
		propHooks: {
			tabIndex: {
				get: function (b) {
					var d = b.getAttributeNode('tabindex');
					return d && d.specified
						? parseInt(d.value, 10)
						: Pc.test(b.nodeName) || (Qc.test(b.nodeName) && b.href)
						? 0
						: c;
				}
			}
		}
	});
	Lb = {
		get: function (b, d) {
			var j,
				e = g.prop(b, d);
			return !0 === e ||
				('boolean' != typeof e && (j = b.getAttributeNode(d)) && !1 !== j.nodeValue)
				? d.toLowerCase()
				: c;
		},
		set: function (b, c, d) {
			var j;
			return (
				!1 === c
					? g.removeAttr(b, d)
					: ((j = g.propFix[d] || d), j in b && (b[j] = !0), b.setAttribute(d, d.toLowerCase())),
				d
			);
		}
	};
	Pb ||
		((Mb = { name: !0, id: !0, coords: !0 }),
		(fa = g.valHooks.button =
			{
				get: function (b, d) {
					var j;
					return (
						(j = b.getAttributeNode(d)), j && (Mb[d] ? '' !== j.value : j.specified) ? j.value : c
					);
				},
				set: function (b, c, d) {
					var j = b.getAttributeNode(d);
					return j || ((j = u.createAttribute(d)), b.setAttributeNode(j)), (j.value = c + '');
				}
			}),
		g.each(['width', 'height'], function (b, c) {
			g.attrHooks[c] = g.extend(g.attrHooks[c], {
				set: function (b, d) {
					if ('' === d) return b.setAttribute(c, 'auto'), d;
				}
			});
		}),
		(g.attrHooks.contenteditable = {
			get: fa.get,
			set: function (b, c, d) {
				'' === c && (c = 'false');
				fa.set(b, c, d);
			}
		}));
	g.support.hrefNormalized ||
		g.each(['href', 'src', 'width', 'height'], function (b, d) {
			g.attrHooks[d] = g.extend(g.attrHooks[d], {
				get: function (b) {
					b = b.getAttribute(d, 2);
					return null === b ? c : b;
				}
			});
		});
	g.support.style ||
		(g.attrHooks.style = {
			get: function (b) {
				return b.style.cssText.toLowerCase() || c;
			},
			set: function (b, c) {
				return (b.style.cssText = c + '');
			}
		});
	g.support.optSelected ||
		(g.propHooks.selected = g.extend(g.propHooks.selected, {
			get: function (b) {
				b = b.parentNode;
				return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null;
			}
		}));
	g.support.enctype || (g.propFix.enctype = 'encoding');
	g.support.checkOn ||
		g.each(['radio', 'checkbox'], function () {
			g.valHooks[this] = {
				get: function (b) {
					return null === b.getAttribute('value') ? 'on' : b.value;
				}
			};
		});
	g.each(['radio', 'checkbox'], function () {
		g.valHooks[this] = g.extend(g.valHooks[this], {
			set: function (b, c) {
				if (g.isArray(c)) return (b.checked = 0 <= g.inArray(g(b).val(), c));
			}
		});
	});
	var hb = /^(?:textarea|input|select)$/i,
		Qb = /^([^\.]*|)(?:\.(.+)|)$/,
		Rc = /(?:^|\s)hover(\.\S+|)\b/,
		Sc = /^key/,
		Tc = /^(?:mouse|contextmenu)|click/,
		Rb = /^(?:focusinfocus|focusoutblur)$/,
		Sb = function (b) {
			return g.event.special.hover ? b : b.replace(Rc, 'mouseenter$1 mouseleave$1');
		};
	g.event = {
		add: function (b, d, j, e, f) {
			var m, p, l, r, s, n, t, q, y;
			if (!(3 === b.nodeType || 8 === b.nodeType || !d || !j || !(m = g._data(b)))) {
				j.handler && ((t = j), (j = t.handler), (f = t.selector));
				j.guid || (j.guid = g.guid++);
				(l = m.events) || (m.events = l = {});
				(p = m.handle) ||
					((m.handle = p =
						function (b) {
							return 'undefined' != typeof g && (!b || g.event.triggered !== b.type)
								? g.event.dispatch.apply(p.elem, arguments)
								: c;
						}),
					(p.elem = b));
				d = g.trim(Sb(d)).split(' ');
				for (m = 0; m < d.length; m++) {
					r = Qb.exec(d[m]) || [];
					s = r[1];
					n = (r[2] || '').split('.').sort();
					y = g.event.special[s] || {};
					s = (f ? y.delegateType : y.bindType) || s;
					y = g.event.special[s] || {};
					r = g.extend(
						{
							type: s,
							origType: r[1],
							data: e,
							handler: j,
							guid: j.guid,
							selector: f,
							needsContext: f && g.expr.match.needsContext.test(f),
							namespace: n.join('.')
						},
						t
					);
					q = l[s];
					if (
						!q &&
						((q = l[s] = []), (q.delegateCount = 0), !y.setup || !1 === y.setup.call(b, e, n, p))
					)
						b.addEventListener
							? b.addEventListener(s, p, !1)
							: b.attachEvent && b.attachEvent('on' + s, p);
					y.add && (y.add.call(b, r), r.handler.guid || (r.handler.guid = j.guid));
					f ? q.splice(q.delegateCount++, 0, r) : q.push(r);
					g.event.global[s] = !0;
				}
				b = null;
			}
		},
		global: {},
		remove: function (b, c, d, j, e) {
			var f,
				m,
				p,
				l,
				r,
				s,
				n,
				t,
				q,
				y,
				B = g.hasData(b) && g._data(b);
			if (B && (n = B.events)) {
				c = g.trim(Sb(c || '')).split(' ');
				for (f = 0; f < c.length; f++)
					if (((m = Qb.exec(c[f]) || []), (p = l = m[1]), (m = m[2]), p)) {
						t = g.event.special[p] || {};
						p = (j ? t.delegateType : t.bindType) || p;
						q = n[p] || [];
						r = q.length;
						m = m
							? RegExp('(^|\\.)' + m.split('.').sort().join('\\.(?:.*\\.|)') + '(\\.|$)')
							: null;
						for (s = 0; s < q.length; s++)
							(y = q[s]),
								(e || l === y.origType) &&
									(!d || d.guid === y.guid) &&
									(!m || m.test(y.namespace)) &&
									(!j || j === y.selector || ('**' === j && y.selector)) &&
									(q.splice(s--, 1),
									y.selector && q.delegateCount--,
									t.remove && t.remove.call(b, y));
						0 === q.length &&
							r !== q.length &&
							((!t.teardown || !1 === t.teardown.call(b, m, B.handle)) &&
								g.removeEvent(b, p, B.handle),
							delete n[p]);
					} else for (p in n) g.event.remove(b, p + c[f], d, j, !0);
				g.isEmptyObject(n) && (delete B.handle, g.removeData(b, 'events', !0));
			}
		},
		customEvent: { getData: !0, setData: !0, changeData: !0 },
		trigger: function (d, j, e, f) {
			if (!e || (3 !== e.nodeType && 8 !== e.nodeType)) {
				var m,
					p,
					l,
					r,
					s,
					n,
					t,
					q = d.type || d;
				r = [];
				if (
					!Rb.test(q + g.event.triggered) &&
					(0 <= q.indexOf('!') && ((q = q.slice(0, -1)), (m = !0)),
					0 <= q.indexOf('.') && ((r = q.split('.')), (q = r.shift()), r.sort()),
					(e && !g.event.customEvent[q]) || g.event.global[q])
				)
					if (
						((d = 'object' == typeof d ? (d[g.expando] ? d : new g.Event(q, d)) : new g.Event(q)),
						(d.type = q),
						(d.isTrigger = !0),
						(d.exclusive = m),
						(d.namespace = r.join('.')),
						(d.namespace_re = d.namespace
							? RegExp('(^|\\.)' + r.join('\\.(?:.*\\.|)') + '(\\.|$)')
							: null),
						(r = 0 > q.indexOf(':') ? 'on' + q : ''),
						e)
					) {
						if (
							((d.result = c),
							d.target || (d.target = e),
							(j = null != j ? g.makeArray(j) : []),
							j.unshift(d),
							(s = g.event.special[q] || {}),
							!(s.trigger && !1 === s.trigger.apply(e, j)))
						) {
							t = [[e, s.bindType || q]];
							if (!f && !s.noBubble && !g.isWindow(e)) {
								p = s.delegateType || q;
								m = Rb.test(p + q) ? e : e.parentNode;
								for (l = e; m; m = m.parentNode) t.push([m, p]), (l = m);
								l === (e.ownerDocument || u) && t.push([l.defaultView || l.parentWindow || b, p]);
							}
							for (p = 0; p < t.length && !d.isPropagationStopped(); p++)
								(m = t[p][0]),
									(d.type = t[p][1]),
									(n = (g._data(m, 'events') || {})[d.type] && g._data(m, 'handle')) &&
										n.apply(m, j),
									(n = r && m[r]) &&
										g.acceptData(m) &&
										n.apply &&
										!1 === n.apply(m, j) &&
										d.preventDefault();
							return (
								(d.type = q),
								!f &&
									!d.isDefaultPrevented() &&
									(!s._default || !1 === s._default.apply(e.ownerDocument, j)) &&
									('click' !== q || !g.nodeName(e, 'a')) &&
									g.acceptData(e) &&
									r &&
									e[q] &&
									(('focus' !== q && 'blur' !== q) || 0 !== d.target.offsetWidth) &&
									!g.isWindow(e) &&
									((l = e[r]),
									l && (e[r] = null),
									(g.event.triggered = q),
									e[q](),
									(g.event.triggered = c),
									l && (e[r] = l)),
								d.result
							);
						}
					} else
						for (p in ((e = g.cache), e))
							e[p].events && e[p].events[q] && g.event.trigger(d, j, e[p].handle.elem, !0);
			}
		},
		dispatch: function (d) {
			d = g.event.fix(d || b.event);
			var j,
				e,
				f,
				m,
				p,
				l,
				r = (g._data(this, 'events') || {})[d.type] || [],
				s = r.delegateCount,
				n = da.call(arguments),
				t = !d.exclusive && !d.namespace,
				q = g.event.special[d.type] || {},
				y = [];
			n[0] = d;
			d.delegateTarget = this;
			if (!(q.preDispatch && !1 === q.preDispatch.call(this, d))) {
				if (s && (!d.button || 'click' !== d.type))
					for (e = d.target; e != this; e = e.parentNode || this)
						if (!0 !== e.disabled || 'click' !== d.type) {
							m = {};
							p = [];
							for (j = 0; j < s; j++)
								(f = r[j]),
									(l = f.selector),
									m[l] === c &&
										(m[l] = f.needsContext
											? 0 <= g(l, this).index(e)
											: g.find(l, this, null, [e]).length),
									m[l] && p.push(f);
							p.length && y.push({ elem: e, matches: p });
						}
				r.length > s && y.push({ elem: this, matches: r.slice(s) });
				for (j = 0; j < y.length && !d.isPropagationStopped(); j++) {
					m = y[j];
					d.currentTarget = m.elem;
					for (e = 0; e < m.matches.length && !d.isImmediatePropagationStopped(); e++)
						if (
							((f = m.matches[e]),
							t ||
								(!d.namespace && !f.namespace) ||
								(d.namespace_re && d.namespace_re.test(f.namespace)))
						)
							(d.data = f.data),
								(d.handleObj = f),
								(f = ((g.event.special[f.origType] || {}).handle || f.handler).apply(m.elem, n)),
								f !== c && ((d.result = f), !1 === f && (d.preventDefault(), d.stopPropagation()));
				}
				return q.postDispatch && q.postDispatch.call(this, d), d.result;
			}
		},
		props:
			'attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which'.split(
				' '
			),
		fixHooks: {},
		keyHooks: {
			props: ['char', 'charCode', 'key', 'keyCode'],
			filter: function (b, c) {
				return null == b.which && (b.which = null != c.charCode ? c.charCode : c.keyCode), b;
			}
		},
		mouseHooks: {
			props:
				'button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement'.split(
					' '
				),
			filter: function (b, d) {
				var j,
					e,
					g,
					f = d.button,
					m = d.fromElement;
				return (
					null == b.pageX &&
						null != d.clientX &&
						((j = b.target.ownerDocument || u),
						(e = j.documentElement),
						(g = j.body),
						(b.pageX =
							d.clientX +
							((e && e.scrollLeft) || (g && g.scrollLeft) || 0) -
							((e && e.clientLeft) || (g && g.clientLeft) || 0)),
						(b.pageY =
							d.clientY +
							((e && e.scrollTop) || (g && g.scrollTop) || 0) -
							((e && e.clientTop) || (g && g.clientTop) || 0))),
					!b.relatedTarget && m && (b.relatedTarget = m === b.target ? d.toElement : m),
					!b.which && f !== c && (b.which = f & 1 ? 1 : f & 2 ? 3 : f & 4 ? 2 : 0),
					b
				);
			}
		},
		fix: function (b) {
			if (b[g.expando]) return b;
			var c,
				d,
				j = b,
				e = g.event.fixHooks[b.type] || {},
				f = e.props ? this.props.concat(e.props) : this.props;
			b = g.Event(j);
			for (c = f.length; c; ) (d = f[--c]), (b[d] = j[d]);
			return (
				b.target || (b.target = j.srcElement || u),
				3 === b.target.nodeType && (b.target = b.target.parentNode),
				(b.metaKey = !!b.metaKey),
				e.filter ? e.filter(b, j) : b
			);
		},
		special: {
			load: { noBubble: !0 },
			focus: { delegateType: 'focusin' },
			blur: { delegateType: 'focusout' },
			beforeunload: {
				setup: function (b, c, d) {
					g.isWindow(this) && (this.onbeforeunload = d);
				},
				teardown: function (b, c) {
					this.onbeforeunload === c && (this.onbeforeunload = null);
				}
			}
		},
		simulate: function (b, c, d, j) {
			b = g.extend(new g.Event(), d, { type: b, isSimulated: !0, originalEvent: {} });
			j ? g.event.trigger(b, null, c) : g.event.dispatch.call(c, b);
			b.isDefaultPrevented() && d.preventDefault();
		}
	};
	g.event.handle = g.event.dispatch;
	g.removeEvent = u.removeEventListener
		? function (b, c, d) {
				b.removeEventListener && b.removeEventListener(c, d, !1);
		  }
		: function (b, c, d) {
				c = 'on' + c;
				b.detachEvent && ('undefined' == typeof b[c] && (b[c] = null), b.detachEvent(c, d));
		  };
	g.Event = function (b, c) {
		if (this instanceof g.Event)
			b && b.type
				? ((this.originalEvent = b),
				  (this.type = b.type),
				  (this.isDefaultPrevented =
						b.defaultPrevented ||
						!1 === b.returnValue ||
						(b.getPreventDefault && b.getPreventDefault())
							? l
							: f))
				: (this.type = b),
				c && g.extend(this, c),
				(this.timeStamp = (b && b.timeStamp) || g.now()),
				(this[g.expando] = !0);
		else return new g.Event(b, c);
	};
	g.Event.prototype = {
		preventDefault: function () {
			this.isDefaultPrevented = l;
			var b = this.originalEvent;
			b && (b.preventDefault ? b.preventDefault() : (b.returnValue = !1));
		},
		stopPropagation: function () {
			this.isPropagationStopped = l;
			var b = this.originalEvent;
			b && (b.stopPropagation && b.stopPropagation(), (b.cancelBubble = !0));
		},
		stopImmediatePropagation: function () {
			this.isImmediatePropagationStopped = l;
			this.stopPropagation();
		},
		isDefaultPrevented: f,
		isPropagationStopped: f,
		isImmediatePropagationStopped: f
	};
	g.each({ mouseenter: 'mouseover', mouseleave: 'mouseout' }, function (b, c) {
		g.event.special[b] = {
			delegateType: c,
			bindType: c,
			handle: function (b) {
				var d,
					j = b.relatedTarget,
					v = b.handleObj;
				if (!j || (j !== this && !g.contains(this, j)))
					(b.type = v.origType), (d = v.handler.apply(this, arguments)), (b.type = c);
				return d;
			}
		};
	});
	g.support.submitBubbles ||
		(g.event.special.submit = {
			setup: function () {
				if (g.nodeName(this, 'form')) return !1;
				g.event.add(this, 'click._submit keypress._submit', function (b) {
					b = b.target;
					(b = g.nodeName(b, 'input') || g.nodeName(b, 'button') ? b.form : c) &&
						!g._data(b, '_submit_attached') &&
						(g.event.add(b, 'submit._submit', function (b) {
							b._submit_bubble = !0;
						}),
						g._data(b, '_submit_attached', !0));
				});
			},
			postDispatch: function (b) {
				b._submit_bubble &&
					(delete b._submit_bubble,
					this.parentNode && !b.isTrigger && g.event.simulate('submit', this.parentNode, b, !0));
			},
			teardown: function () {
				if (g.nodeName(this, 'form')) return !1;
				g.event.remove(this, '._submit');
			}
		});
	g.support.changeBubbles ||
		(g.event.special.change = {
			setup: function () {
				if (hb.test(this.nodeName)) {
					if ('checkbox' === this.type || 'radio' === this.type)
						g.event.add(this, 'propertychange._change', function (b) {
							'checked' === b.originalEvent.propertyName && (this._just_changed = !0);
						}),
							g.event.add(this, 'click._change', function (b) {
								this._just_changed && !b.isTrigger && (this._just_changed = !1);
								g.event.simulate('change', this, b, !0);
							});
					return !1;
				}
				g.event.add(this, 'beforeactivate._change', function (b) {
					b = b.target;
					hb.test(b.nodeName) &&
						!g._data(b, '_change_attached') &&
						(g.event.add(b, 'change._change', function (b) {
							this.parentNode &&
								!b.isSimulated &&
								!b.isTrigger &&
								g.event.simulate('change', this.parentNode, b, !0);
						}),
						g._data(b, '_change_attached', !0));
				});
			},
			handle: function (b) {
				var c = b.target;
				if (
					this !== c ||
					b.isSimulated ||
					b.isTrigger ||
					('radio' !== c.type && 'checkbox' !== c.type)
				)
					return b.handleObj.handler.apply(this, arguments);
			},
			teardown: function () {
				return g.event.remove(this, '._change'), !hb.test(this.nodeName);
			}
		});
	g.support.focusinBubbles ||
		g.each({ focus: 'focusin', blur: 'focusout' }, function (b, c) {
			var d = 0,
				j = function (b) {
					g.event.simulate(c, b.target, g.event.fix(b), !0);
				};
			g.event.special[c] = {
				setup: function () {
					0 === d++ && u.addEventListener(b, j, !0);
				},
				teardown: function () {
					0 === --d && u.removeEventListener(b, j, !0);
				}
			};
		});
	g.fn.extend({
		on: function (b, d, j, e, m) {
			var p, l;
			if ('object' == typeof b) {
				'string' != typeof d && ((j = j || d), (d = c));
				for (l in b) this.on(l, d, j, b[l], m);
				return this;
			}
			null == j && null == e
				? ((e = d), (j = d = c))
				: null == e && ('string' == typeof d ? ((e = j), (j = c)) : ((e = j), (j = d), (d = c)));
			if (!1 === e) e = f;
			else if (!e) return this;
			return (
				1 === m &&
					((p = e),
					(e = function (b) {
						return g().off(b), p.apply(this, arguments);
					}),
					(e.guid = p.guid || (p.guid = g.guid++))),
				this.each(function () {
					g.event.add(this, b, e, j, d);
				})
			);
		},
		one: function (b, c, d, j) {
			return this.on(b, c, d, j, 1);
		},
		off: function (b, d, j) {
			var e, m;
			if (b && b.preventDefault && b.handleObj)
				return (
					(e = b.handleObj),
					g(b.delegateTarget).off(
						e.namespace ? e.origType + '.' + e.namespace : e.origType,
						e.selector,
						e.handler
					),
					this
				);
			if ('object' == typeof b) {
				for (m in b) this.off(m, d, b[m]);
				return this;
			}
			if (!1 === d || 'function' == typeof d) (j = d), (d = c);
			return (
				!1 === j && (j = f),
				this.each(function () {
					g.event.remove(this, b, j, d);
				})
			);
		},
		bind: function (b, c, d) {
			return this.on(b, null, c, d);
		},
		unbind: function (b, c) {
			return this.off(b, null, c);
		},
		live: function (b, c, d) {
			return g(this.context).on(b, this.selector, c, d), this;
		},
		die: function (b, c) {
			return g(this.context).off(b, this.selector || '**', c), this;
		},
		delegate: function (b, c, d, j) {
			return this.on(c, b, d, j);
		},
		undelegate: function (b, c, d) {
			return 1 === arguments.length ? this.off(b, '**') : this.off(c, b || '**', d);
		},
		trigger: function (b, c) {
			return this.each(function () {
				g.event.trigger(b, c, this);
			});
		},
		triggerHandler: function (b, c) {
			if (this[0]) return g.event.trigger(b, c, this[0], !0);
		},
		toggle: function (b) {
			var c = arguments,
				d = b.guid || g.guid++,
				j = 0,
				e = function (d) {
					var e = (g._data(this, 'lastToggle' + b.guid) || 0) % j;
					return (
						g._data(this, 'lastToggle' + b.guid, e + 1),
						d.preventDefault(),
						c[e].apply(this, arguments) || !1
					);
				};
			for (e.guid = d; j < c.length; ) c[j++].guid = d;
			return this.click(e);
		},
		hover: function (b, c) {
			return this.mouseenter(b).mouseleave(c || b);
		}
	});
	g.each(
		'blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu'.split(
			' '
		),
		function (b, c) {
			g.fn[c] = function (b, d) {
				return (
					null == d && ((d = b), (b = null)),
					0 < arguments.length ? this.on(c, null, b, d) : this.trigger(c)
				);
			};
			Sc.test(c) && (g.event.fixHooks[c] = g.event.keyHooks);
			Tc.test(c) && (g.event.fixHooks[c] = g.event.mouseHooks);
		}
	);
	var Uc = b,
		D = function (b, c, d, j) {
			d = d || [];
			c = c || Z;
			var e,
				g,
				f,
				m,
				p = c.nodeType;
			if (!b || 'string' != typeof b) return d;
			if (1 !== p && 9 !== p) return [];
			f = Pa(c);
			if (!f && !j && (e = Vc.exec(b)))
				if ((m = e[1]))
					if (9 === p) {
						g = c.getElementById(m);
						if (!g || !g.parentNode) return d;
						if (g.id === m) return d.push(g), d;
					} else {
						if (
							c.ownerDocument &&
							(g = c.ownerDocument.getElementById(m)) &&
							Tb(c, g) &&
							g.id === m
						)
							return d.push(g), d;
					}
				else {
					if (e[2]) return ta.apply(d, ua.call(c.getElementsByTagName(b), 0)), d;
					if ((m = e[3]) && Ub && c.getElementsByClassName)
						return ta.apply(d, ua.call(c.getElementsByClassName(m), 0)), d;
				}
			return ib(b.replace(Qa, '$1'), c, d, j, f);
		},
		Aa = function (b) {
			return function (c) {
				return 'input' === c.nodeName.toLowerCase() && c.type === b;
			};
		},
		Vb = function (b) {
			return function (c) {
				var d = c.nodeName.toLowerCase();
				return ('input' === d || 'button' === d) && c.type === b;
			};
		},
		ma = function (b) {
			return aa(function (c) {
				return (
					(c = +c),
					aa(function (d, j) {
						for (var e, g = b([], d.length, c), f = g.length; f--; )
							d[(e = g[f])] && (d[e] = !(j[e] = d[e]));
					})
				);
			});
		},
		Ra = function (b, c, d) {
			if (b === c) return d;
			for (b = b.nextSibling; b; ) {
				if (b === c) return -1;
				b = b.nextSibling;
			}
			return 1;
		},
		Ta = function (b, c) {
			var d, j, e, g, f, m, p;
			if ((f = Wb[K][b])) return c ? 0 : f.slice(0);
			f = b;
			m = [];
			for (p = H.preFilter; f; ) {
				if (!d || (j = Wc.exec(f))) j && (f = f.slice(j[0].length)), m.push((e = []));
				d = !1;
				if ((j = Xc.exec(f)))
					e.push((d = new Xb(j.shift()))),
						(f = f.slice(d.length)),
						(d.type = j[0].replace(Qa, ' '));
				for (g in H.filter)
					(j = Sa[g].exec(f)) &&
						(!p[g] || (j = p[g](j, Z, !0))) &&
						(e.push((d = new Xb(j.shift()))),
						(f = f.slice(d.length)),
						(d.type = g),
						(d.matches = j));
				if (!d) break;
			}
			return c ? f.length : f ? D.error(b) : Wb(b, m).slice(0);
		},
		kb = function (b, c, d) {
			var j = c.dir,
				e = d && 'parentNode' === c.dir,
				g = Yc++;
			return c.first
				? function (c, d, g) {
						for (; (c = c[j]); ) if (e || 1 === c.nodeType) return b(c, d, g);
				  }
				: function (c, d, f) {
						if (f)
							for (; (c = c[j]); ) {
								if ((e || 1 === c.nodeType) && b(c, d, f)) return c;
							}
						else
							for (var m, x = Ba + ' ' + g + ' ', p = x + jb; (c = c[j]); )
								if (e || 1 === c.nodeType) {
									if ((m = c[K]) === p) return c.sizset;
									if ('string' == typeof m && 0 === m.indexOf(x)) {
										if (c.sizset) return c;
									} else {
										c[K] = p;
										if (b(c, d, f)) return (c.sizset = !0), c;
										c.sizset = !1;
									}
								}
				  };
		},
		lb = function (b) {
			return 1 < b.length
				? function (c, d, j) {
						for (var e = b.length; e--; ) if (!b[e](c, d, j)) return !1;
						return !0;
				  }
				: b[0];
		},
		Ua = function (b, c, d, j, e) {
			for (var g, f = [], m = 0, p = b.length, l = null != c; m < p; m++)
				if ((g = b[m])) if (!d || d(g, j, e)) f.push(g), l && c.push(m);
			return f;
		},
		mb = function (b, c, d, j, e, g) {
			return (
				j && !j[K] && (j = mb(j)),
				e && !e[K] && (e = mb(e, g)),
				aa(function (g, f, m, p) {
					if (!g || !e) {
						var l,
							r,
							s = [],
							n = [],
							t = f.length;
						if (!(r = g)) {
							r = c || '*';
							var q = m.nodeType ? [m] : m,
								I = [];
							l = 0;
							for (var y = q.length; l < y; l++) D(r, q[l], I, g);
							r = I;
						}
						q = b && (g || !c) ? Ua(r, s, b, m, p) : r;
						I = d ? (e || (g ? b : t || j) ? [] : f) : q;
						d && d(q, I, m, p);
						if (j) {
							r = Ua(I, n);
							j(r, [], m, p);
							for (m = r.length; m--; ) if ((l = r[m])) I[n[m]] = !(q[n[m]] = l);
						}
						if (g)
							for (m = b && I.length; m--; ) {
								if ((l = I[m])) g[s[m]] = !(f[s[m]] = l);
							}
						else
							(I = Ua(I === f ? I.splice(t, I.length) : I)), e ? e(null, f, I, p) : ta.apply(f, I);
					}
				})
			);
		},
		nb = function (b) {
			var c,
				d,
				j,
				e = b.length,
				g = H.relative[b[0].type];
			d = g || H.relative[' '];
			for (
				var f = g ? 1 : 0,
					m = kb(
						function (b) {
							return b === c;
						},
						d,
						!0
					),
					p = kb(
						function (b) {
							return -1 < Yb.call(c, b);
						},
						d,
						!0
					),
					l = [
						function (b, d, j) {
							return (!g && (j || d !== Va)) || ((c = d).nodeType ? m(b, d, j) : p(b, d, j));
						}
					];
				f < e;
				f++
			)
				if ((d = H.relative[b[f].type])) l = [kb(lb(l), d)];
				else {
					d = H.filter[b[f].type].apply(null, b[f].matches);
					if (d[K]) {
						for (j = ++f; j < e && !H.relative[b[j].type]; j++);
						return mb(
							1 < f && lb(l),
							1 < f &&
								b
									.slice(0, f - 1)
									.join('')
									.replace(Qa, '$1'),
							d,
							f < j && nb(b.slice(f, j)),
							j < e && nb((b = b.slice(j))),
							j < e && b.join('')
						);
					}
					l.push(d);
				}
			return lb(l);
		},
		ib = function (b, c, d, j, e) {
			var g,
				f,
				m,
				p,
				l = Ta(b);
			if (!j && 1 === l.length) {
				f = l[0] = l[0].slice(0);
				if (
					2 < f.length &&
					'ID' === (m = f[0]).type &&
					9 === c.nodeType &&
					!e &&
					H.relative[f[1].type]
				) {
					c = H.find.ID(m.matches[0].replace(na, ''), c, e)[0];
					if (!c) return d;
					b = b.slice(f.shift().length);
				}
				for (g = Sa.POS.test(b) ? -1 : f.length - 1; 0 <= g; g--) {
					m = f[g];
					if (H.relative[(p = m.type)]) break;
					if ((p = H.find[p]))
						if (
							(j = p(m.matches[0].replace(na, ''), (ob.test(f[0].type) && c.parentNode) || c, e))
						) {
							f.splice(g, 1);
							b = j.length && f.join('');
							if (!b) return ta.apply(d, ua.call(j, 0)), d;
							break;
						}
				}
			}
			return pb(b, l)(j, c, e, d, ob.test(b)), d;
		},
		Zb = function () {},
		jb,
		qb,
		H,
		Wa,
		Pa,
		Tb,
		pb,
		rb,
		Ca,
		Va,
		$b = !0,
		K = ('sizcache' + Math.random()).replace('.', ''),
		Xb = String,
		Z = Uc.document,
		W = Z.documentElement,
		Ba = 0,
		Yc = 0,
		Zc = [].pop,
		ta = [].push,
		ua = [].slice,
		Yb =
			[].indexOf ||
			function (b) {
				for (var c = 0, d = this.length; c < d; c++) if (this[c] === b) return c;
				return -1;
			},
		aa = function (b, c) {
			return (b[K] = null == c || c), b;
		},
		sb = function () {
			var b = {},
				c = [];
			return aa(function (d, j) {
				return c.push(d) > H.cacheLength && delete b[c.shift()], (b[d] = j);
			}, b);
		},
		ac = sb(),
		Wb = sb(),
		bc = sb(),
		cc =
			'\\[[\\x20\\t\\r\\n\\f]*((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)[\\x20\\t\\r\\n\\f]*(?:([*^$|!~]?=)[\\x20\\t\\r\\n\\f]*(?:([\'"])((?:\\\\.|[^\\\\])*?)\\3|(' +
			'(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+'.replace('w', 'w#') +
			')|)|)[\\x20\\t\\r\\n\\f]*\\]',
		tb =
			':((?:\\\\.|[-\\w]|[^\\x00-\\xa0])+)(?:\\((?:([\'"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:' +
			cc +
			')|[^:]|\\\\.)*|.*))\\)|)',
		Qa = /^[\x20\t\r\n\f]+|((?:^|[^\\])(?:\\.)*)[\x20\t\r\n\f]+$/g,
		Wc = /^[\x20\t\r\n\f]*,[\x20\t\r\n\f]*/,
		Xc = /^[\x20\t\r\n\f]*([\x20\t\r\n\f>+~])[\x20\t\r\n\f]*/,
		$c = RegExp(tb),
		Vc = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
		ob = /[\x20\t\r\n\f]*[+~]/,
		ad = /h\d/i,
		bd = /input|select|textarea|button/i,
		na = /\\(?!\\)/g,
		Sa = {
			ID: /^#((?:\\.|[-\w]|[^\x00-\xa0])+)/,
			CLASS: /^\.((?:\\.|[-\w]|[^\x00-\xa0])+)/,
			NAME: /^\[name=['"]?((?:\\.|[-\w]|[^\x00-\xa0])+)['"]?\]/,
			TAG: RegExp('^(' + '(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+'.replace('w', 'w*') + ')'),
			ATTR: RegExp('^' + cc),
			PSEUDO: RegExp('^' + tb),
			POS: /:(even|odd|eq|gt|lt|nth|first|last)(?:\([\x20\t\r\n\f]*((?:-\d)?\d*)[\x20\t\r\n\f]*\)|)(?=[^-]|$)/i,
			CHILD: RegExp(
				'^:(only|nth|first|last)-child(?:\\([\\x20\\t\\r\\n\\f]*(even|odd|(([+-]|)(\\d*)n|)[\\x20\\t\\r\\n\\f]*(?:([+-]|)[\\x20\\t\\r\\n\\f]*(\\d+)|))[\\x20\\t\\r\\n\\f]*\\)|)',
				'i'
			),
			needsContext: RegExp(
				'^[\\x20\\t\\r\\n\\f]*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\([\\x20\\t\\r\\n\\f]*((?:-\\d)?\\d*)[\\x20\\t\\r\\n\\f]*\\)|)(?=[^-]|$)',
				'i'
			)
		},
		ga = function (b) {
			var c = Z.createElement('div');
			try {
				return b(c);
			} catch (d) {
				return !1;
			} finally {
			}
		},
		cd = ga(function (b) {
			return b.appendChild(Z.createComment('')), !b.getElementsByTagName('*').length;
		}),
		dd = ga(function (b) {
			return (
				(b.innerHTML = "<a href='#'></a>"),
				b.firstChild &&
					'undefined' !== typeof b.firstChild.getAttribute &&
					'#' === b.firstChild.getAttribute('href')
			);
		}),
		ed = ga(function (b) {
			b.innerHTML = '<select></select>';
			b = typeof b.lastChild.getAttribute('multiple');
			return 'boolean' !== b && 'string' !== b;
		}),
		Ub = ga(function (b) {
			return (
				(b.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>"),
				!b.getElementsByClassName || !b.getElementsByClassName('e').length
					? !1
					: ((b.lastChild.className = 'e'), 2 === b.getElementsByClassName('e').length)
			);
		}),
		fd = ga(function (b) {
			b.id = K + 0;
			b.innerHTML = "<a name='" + K + "'></a><div name='" + K + "'></div>";
			W.insertBefore(b, W.firstChild);
			var c =
				Z.getElementsByName &&
				Z.getElementsByName(K).length === 2 + Z.getElementsByName(K + 0).length;
			return (qb = !Z.getElementById(K)), W.removeChild(b), c;
		});
	try {
		ua.call(W.childNodes, 0)[0].nodeType;
	} catch (Pd) {
		ua = function (b) {
			for (var c, d = []; (c = this[b]); b++) d.push(c);
			return d;
		};
	}
	D.matches = function (b, c) {
		return D(b, null, null, c);
	};
	D.matchesSelector = function (b, c) {
		return 0 < D(c, null, null, [b]).length;
	};
	Wa = D.getText = function (b) {
		var c,
			d = '',
			j = 0;
		if ((c = b.nodeType))
			if (1 === c || 9 === c || 11 === c) {
				if ('string' == typeof b.textContent) return b.textContent;
				for (b = b.firstChild; b; b = b.nextSibling) d += Wa(b);
			} else {
				if (3 === c || 4 === c) return b.nodeValue;
			}
		else for (; (c = b[j]); j++) d += Wa(c);
		return d;
	};
	Pa = D.isXML = function (b) {
		return (b = b && (b.ownerDocument || b).documentElement) ? 'HTML' !== b.nodeName : !1;
	};
	Tb = D.contains = W.contains
		? function (b, c) {
				var d = 9 === b.nodeType ? b.documentElement : b,
					j = c && c.parentNode;
				return b === j || !(!j || !(1 === j.nodeType && d.contains && d.contains(j)));
		  }
		: W.compareDocumentPosition
		? function (b, c) {
				return c && !!(b.compareDocumentPosition(c) & 16);
		  }
		: function (b, c) {
				for (; (c = c.parentNode); ) if (c === b) return !0;
				return !1;
		  };
	D.attr = function (b, c) {
		var d,
			j = Pa(b);
		return (
			j || (c = c.toLowerCase()),
			(d = H.attrHandle[c])
				? d(b)
				: j || ed
				? b.getAttribute(c)
				: ((d = b.getAttributeNode(c)),
				  d ? ('boolean' == typeof b[c] ? (b[c] ? c : null) : d.specified ? d.value : null) : null)
		);
	};
	H = D.selectors = {
		cacheLength: 50,
		createPseudo: aa,
		match: Sa,
		attrHandle: dd
			? {}
			: {
					href: function (b) {
						return b.getAttribute('href', 2);
					},
					type: function (b) {
						return b.getAttribute('type');
					}
			  },
		find: {
			ID: qb
				? function (b, c, d) {
						if ('undefined' !== typeof c.getElementById && !d)
							return (b = c.getElementById(b)) && b.parentNode ? [b] : [];
				  }
				: function (b, c, d) {
						if ('undefined' !== typeof c.getElementById && !d)
							return (c = c.getElementById(b))
								? c.id === b ||
								  ('undefined' !== typeof c.getAttributeNode &&
										c.getAttributeNode('id').value === b)
									? [c]
									: void 0
								: [];
				  },
			TAG: cd
				? function (b, c) {
						if ('undefined' !== typeof c.getElementsByTagName) return c.getElementsByTagName(b);
				  }
				: function (b, c) {
						var d = c.getElementsByTagName(b);
						if ('*' === b) {
							for (var j, e = [], g = 0; (j = d[g]); g++) 1 === j.nodeType && e.push(j);
							return e;
						}
						return d;
				  },
			NAME:
				fd &&
				function (b, c) {
					if ('undefined' !== typeof c.getElementsByName) return c.getElementsByName(name);
				},
			CLASS:
				Ub &&
				function (b, c, d) {
					if ('undefined' !== typeof c.getElementsByClassName && !d)
						return c.getElementsByClassName(b);
				}
		},
		relative: {
			'>': { dir: 'parentNode', first: !0 },
			' ': { dir: 'parentNode' },
			'+': { dir: 'previousSibling', first: !0 },
			'~': { dir: 'previousSibling' }
		},
		preFilter: {
			ATTR: function (b) {
				return (
					(b[1] = b[1].replace(na, '')),
					(b[3] = (b[4] || b[5] || '').replace(na, '')),
					'~=' === b[2] && (b[3] = ' ' + b[3] + ' '),
					b.slice(0, 4)
				);
			},
			CHILD: function (b) {
				return (
					(b[1] = b[1].toLowerCase()),
					'nth' === b[1]
						? (b[2] || D.error(b[0]),
						  (b[3] = +(b[3] ? b[4] + (b[5] || 1) : 2 * ('even' === b[2] || 'odd' === b[2]))),
						  (b[4] = +(b[6] + b[7] || 'odd' === b[2])))
						: b[2] && D.error(b[0]),
					b
				);
			},
			PSEUDO: function (b) {
				var c, d;
				if (Sa.CHILD.test(b[0])) return null;
				if (b[3]) b[2] = b[3];
				else if ((c = b[4]))
					$c.test(c) &&
						(d = Ta(c, !0)) &&
						(d = c.indexOf(')', c.length - d) - c.length) &&
						((c = c.slice(0, d)), (b[0] = b[0].slice(0, d))),
						(b[2] = c);
				return b.slice(0, 3);
			}
		},
		filter: {
			ID: qb
				? function (b) {
						return (
							(b = b.replace(na, '')),
							function (c) {
								return c.getAttribute('id') === b;
							}
						);
				  }
				: function (b) {
						return (
							(b = b.replace(na, '')),
							function (c) {
								return (
									(c = 'undefined' !== typeof c.getAttributeNode && c.getAttributeNode('id')) &&
									c.value === b
								);
							}
						);
				  },
			TAG: function (b) {
				return '*' === b
					? function () {
							return !0;
					  }
					: ((b = b.replace(na, '').toLowerCase()),
					  function (c) {
							return c.nodeName && c.nodeName.toLowerCase() === b;
					  });
			},
			CLASS: function (b) {
				var c = ac[K][b];
				return (
					c || (c = ac(b, RegExp('(^|[\\x20\\t\\r\\n\\f])' + b + '([\\x20\\t\\r\\n\\f]|$)'))),
					function (b) {
						return c.test(
							b.className ||
								('undefined' !== typeof b.getAttribute && b.getAttribute('class')) ||
								''
						);
					}
				);
			},
			ATTR: function (b, c, d) {
				return function (j) {
					j = D.attr(j, b);
					return null == j
						? '!=' === c
						: c
						? ((j += ''),
						  '=' === c
								? j === d
								: '!=' === c
								? j !== d
								: '^=' === c
								? d && 0 === j.indexOf(d)
								: '*=' === c
								? d && -1 < j.indexOf(d)
								: '$=' === c
								? d && j.substr(j.length - d.length) === d
								: '~=' === c
								? -1 < (' ' + j + ' ').indexOf(d)
								: '|=' === c
								? j === d || j.substr(0, d.length + 1) === d + '-'
								: !1)
						: !0;
				};
			},
			CHILD: function (b, c, d, j) {
				return 'nth' === b
					? function (b) {
							var c, e;
							c = b.parentNode;
							if (1 === d && 0 === j) return !0;
							if (c) {
								e = 0;
								for (
									c = c.firstChild;
									c && !(1 === c.nodeType && (e++, b === c));
									c = c.nextSibling
								);
							}
							return (e -= j), e === d || (0 === e % d && 0 <= e / d);
					  }
					: function (c) {
							var d = c;
							switch (b) {
								case 'only':
								case 'first':
									for (; (d = d.previousSibling); ) if (1 === d.nodeType) return !1;
									if ('first' === b) return !0;
									d = c;
								case 'last':
									for (; (d = d.nextSibling); ) if (1 === d.nodeType) return !1;
									return !0;
							}
					  };
			},
			PSEUDO: function (b, c) {
				var d,
					j = H.pseudos[b] || H.setFilters[b.toLowerCase()] || D.error('unsupported pseudo: ' + b);
				return j[K]
					? j(c)
					: 1 < j.length
					? ((d = [b, b, '', c]),
					  H.setFilters.hasOwnProperty(b.toLowerCase())
							? aa(function (b, d) {
									for (var e, g = j(b, c), f = g.length; f--; )
										(e = Yb.call(b, g[f])), (b[e] = !(d[e] = g[f]));
							  })
							: function (b) {
									return j(b, 0, d);
							  })
					: j;
			}
		},
		pseudos: {
			not: aa(function (b) {
				var c = [],
					d = [],
					j = pb(b.replace(Qa, '$1'));
				return j[K]
					? aa(function (b, c, d, e) {
							e = j(b, null, e, []);
							for (var g = b.length; g--; ) if ((d = e[g])) b[g] = !(c[g] = d);
					  })
					: function (b, e, g) {
							return (c[0] = b), j(c, null, g, d), !d.pop();
					  };
			}),
			has: aa(function (b) {
				return function (c) {
					return 0 < D(b, c).length;
				};
			}),
			contains: aa(function (b) {
				return function (c) {
					return -1 < (c.textContent || c.innerText || Wa(c)).indexOf(b);
				};
			}),
			enabled: function (b) {
				return !1 === b.disabled;
			},
			disabled: function (b) {
				return !0 === b.disabled;
			},
			checked: function (b) {
				var c = b.nodeName.toLowerCase();
				return ('input' === c && !!b.checked) || ('option' === c && !!b.selected);
			},
			selected: function (b) {
				return b.parentNode && b.parentNode.selectedIndex, !0 === b.selected;
			},
			parent: function (b) {
				return !H.pseudos.empty(b);
			},
			empty: function (b) {
				var c;
				for (b = b.firstChild; b; ) {
					if ('@' < b.nodeName || 3 === (c = b.nodeType) || 4 === c) return !1;
					b = b.nextSibling;
				}
				return !0;
			},
			header: function (b) {
				return ad.test(b.nodeName);
			},
			text: function (b) {
				var c, d;
				return (
					'input' === b.nodeName.toLowerCase() &&
					'text' === (c = b.type) &&
					(null == (d = b.getAttribute('type')) || d.toLowerCase() === c)
				);
			},
			radio: Aa('radio'),
			checkbox: Aa('checkbox'),
			file: Aa('file'),
			password: Aa('password'),
			image: Aa('image'),
			submit: Vb('submit'),
			reset: Vb('reset'),
			button: function (b) {
				var c = b.nodeName.toLowerCase();
				return ('input' === c && 'button' === b.type) || 'button' === c;
			},
			input: function (b) {
				return bd.test(b.nodeName);
			},
			focus: function (b) {
				var c = b.ownerDocument;
				return b === c.activeElement && (!c.hasFocus || c.hasFocus()) && (!!b.type || !!b.href);
			},
			active: function (b) {
				return b === b.ownerDocument.activeElement;
			},
			first: ma(function () {
				return [0];
			}),
			last: ma(function (b, c) {
				return [c - 1];
			}),
			eq: ma(function (b, c, d) {
				return [0 > d ? d + c : d];
			}),
			even: ma(function (b, c) {
				for (var d = 0; d < c; d += 2) b.push(d);
				return b;
			}),
			odd: ma(function (b, c) {
				for (var d = 1; d < c; d += 2) b.push(d);
				return b;
			}),
			lt: ma(function (b, c, d) {
				for (c = 0 > d ? d + c : d; 0 <= --c; ) b.push(c);
				return b;
			}),
			gt: ma(function (b, c, d) {
				for (d = 0 > d ? d + c : d; ++d < c; ) b.push(d);
				return b;
			})
		}
	};
	rb = W.compareDocumentPosition
		? function (b, c) {
				return b === c
					? ((Ca = !0), 0)
					: (
							!b.compareDocumentPosition || !c.compareDocumentPosition
								? b.compareDocumentPosition
								: b.compareDocumentPosition(c) & 4
					  )
					? -1
					: 1;
		  }
		: function (b, c) {
				if (b === c) return (Ca = !0), 0;
				if (b.sourceIndex && c.sourceIndex) return b.sourceIndex - c.sourceIndex;
				var d,
					j,
					e = [],
					g = [];
				d = b.parentNode;
				j = c.parentNode;
				var f = d;
				if (d === j) return Ra(b, c);
				if (!d) return -1;
				if (!j) return 1;
				for (; f; ) e.unshift(f), (f = f.parentNode);
				for (f = j; f; ) g.unshift(f), (f = f.parentNode);
				d = e.length;
				j = g.length;
				for (f = 0; f < d && f < j; f++) if (e[f] !== g[f]) return Ra(e[f], g[f]);
				return f === d ? Ra(b, g[f], -1) : Ra(e[f], c, 1);
		  };
	[0, 0].sort(rb);
	$b = !Ca;
	D.uniqueSort = function (b) {
		var c,
			d = 1;
		Ca = $b;
		b.sort(rb);
		if (Ca) for (; (c = b[d]); d++) c === b[d - 1] && b.splice(d--, 1);
		return b;
	};
	D.error = function (b) {
		throw Error('Syntax error, unrecognized expression: ' + b);
	};
	pb = D.compile = function (b, c) {
		var d,
			j = [],
			e = [],
			f = bc[K][b];
		if (!f) {
			c || (c = Ta(b));
			for (d = c.length; d--; ) (f = nb(c[d])), f[K] ? j.push(f) : e.push(f);
			var g = 0 < j.length,
				m = 0 < e.length,
				p = function (b, c, d, f, v) {
					var l,
						r,
						x = [],
						s = 0,
						n = '0',
						N = b && [],
						t = null != v,
						q = Va,
						I = b || (m && H.find.TAG('*', (v && c.parentNode) || c)),
						y = (Ba += null == q ? 1 : Math.E);
					for (t && ((Va = c !== Z && c), (jb = p.el)); null != (v = I[n]); n++) {
						if (m && v) {
							for (l = 0; (r = e[l]); l++)
								if (r(v, c, d)) {
									f.push(v);
									break;
								}
							t && ((Ba = y), (jb = ++p.el));
						}
						g && ((v = !r && v) && s--, b && N.push(v));
					}
					s += n;
					if (g && n !== s) {
						for (l = 0; (r = j[l]); l++) r(N, x, c, d);
						if (b) {
							if (0 < s) for (; n--; ) !N[n] && !x[n] && (x[n] = Zc.call(f));
							x = Ua(x);
						}
						ta.apply(f, x);
						t && !b && 0 < x.length && 1 < s + j.length && D.uniqueSort(f);
					}
					return t && ((Ba = y), (Va = q)), N;
				};
			d = ((p.el = 0), g ? aa(p) : p);
			f = bc(b, d);
		}
		return f;
	};
	if (Z.querySelectorAll) {
		var dc,
			gd = ib,
			hd = /'|\\/g,
			id = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
			ba = [':focus'],
			Xa = [':active', ':focus'],
			Ya =
				W.matchesSelector ||
				W.mozMatchesSelector ||
				W.webkitMatchesSelector ||
				W.oMatchesSelector ||
				W.msMatchesSelector;
		ga(function (b) {
			b.innerHTML = "<select><option selected=''></option></select>";
			b.querySelectorAll('[selected]').length ||
				ba.push(
					'\\[[\\x20\\t\\r\\n\\f]*(?:checked|disabled|ismap|multiple|readonly|selected|value)'
				);
			b.querySelectorAll(':checked').length || ba.push(':checked');
		});
		ga(function (b) {
			b.innerHTML = "<p test=''></p>";
			b.querySelectorAll("[test^='']").length && ba.push('[*^$]=[\\x20\\t\\r\\n\\f]*(?:""|\'\')');
			b.innerHTML = "<input type='hidden'/>";
			b.querySelectorAll(':enabled').length || ba.push(':enabled', ':disabled');
		});
		ba = RegExp(ba.join('|'));
		ib = function (b, c, d, j, e) {
			if (!j && !e && (!ba || !ba.test(b))) {
				var f,
					g,
					m = !0,
					p = K;
				g = c;
				f = 9 === c.nodeType && b;
				if (1 === c.nodeType && 'object' !== c.nodeName.toLowerCase()) {
					f = Ta(b);
					(m = c.getAttribute('id')) ? (p = m.replace(hd, '\\$&')) : c.setAttribute('id', p);
					p = "[id='" + p + "'] ";
					for (g = f.length; g--; ) f[g] = p + f[g].join('');
					g = (ob.test(b) && c.parentNode) || c;
					f = f.join(',');
				}
				if (f)
					try {
						return ta.apply(d, ua.call(g.querySelectorAll(f), 0)), d;
					} catch (l) {
					} finally {
						m || c.removeAttribute('id');
					}
			}
			return gd(b, c, d, j, e);
		};
		Ya &&
			(ga(function (b) {
				dc = Ya.call(b, 'div');
				try {
					Ya.call(b, "[test!='']:sizzle"), Xa.push('!=', tb);
				} catch (c) {}
			}),
			(Xa = RegExp(Xa.join('|'))),
			(D.matchesSelector = function (b, c) {
				c = c.replace(id, "='$1']");
				if (!Pa(b) && !Xa.test(c) && (!ba || !ba.test(c)))
					try {
						var d = Ya.call(b, c);
						if (d || dc || (b.document && 11 !== b.document.nodeType)) return d;
					} catch (j) {}
				return 0 < D(c, null, null, [b]).length;
			}));
	}
	H.pseudos.nth = H.pseudos.eq;
	H.filters = Zb.prototype = H.pseudos;
	H.setFilters = new Zb();
	D.attr = g.attr;
	g.find = D;
	g.expr = D.selectors;
	g.expr[':'] = g.expr.pseudos;
	g.unique = D.uniqueSort;
	g.text = D.getText;
	g.isXMLDoc = D.isXML;
	g.contains = D.contains;
	var jd = /Until$/,
		kd = /^(?:parents|prev(?:Until|All))/,
		wc = /^.[^:#\[\.,]*$/,
		ec = g.expr.match.needsContext,
		ld = { children: !0, contents: !0, next: !0, prev: !0 };
	g.fn.extend({
		find: function (b) {
			var c,
				d,
				j,
				e,
				f,
				m,
				p = this;
			if ('string' != typeof b)
				return g(b).filter(function () {
					c = 0;
					for (d = p.length; c < d; c++) if (g.contains(p[c], this)) return !0;
				});
			m = this.pushStack('', 'find', b);
			c = 0;
			for (d = this.length; c < d; c++)
				if (((j = m.length), g.find(b, this[c], m), 0 < c))
					for (e = j; e < m.length; e++)
						for (f = 0; f < j; f++)
							if (m[f] === m[e]) {
								m.splice(e--, 1);
								break;
							}
			return m;
		},
		has: function (b) {
			var c,
				d = g(b, this),
				j = d.length;
			return this.filter(function () {
				for (c = 0; c < j; c++) if (g.contains(this, d[c])) return !0;
			});
		},
		not: function (b) {
			return this.pushStack(j(this, b, !1), 'not', b);
		},
		filter: function (b) {
			return this.pushStack(j(this, b, !0), 'filter', b);
		},
		is: function (b) {
			return (
				!!b &&
				('string' == typeof b
					? ec.test(b)
						? 0 <= g(b, this.context).index(this[0])
						: 0 < g.filter(b, this).length
					: 0 < this.filter(b).length)
			);
		},
		closest: function (b, c) {
			for (
				var d,
					j = 0,
					e = this.length,
					f = [],
					m = ec.test(b) || 'string' != typeof b ? g(b, c || this.context) : 0;
				j < e;
				j++
			)
				for (d = this[j]; d && d.ownerDocument && d !== c && 11 !== d.nodeType; ) {
					if (m ? -1 < m.index(d) : g.find.matchesSelector(d, b)) {
						f.push(d);
						break;
					}
					d = d.parentNode;
				}
			return (f = 1 < f.length ? g.unique(f) : f), this.pushStack(f, 'closest', b);
		},
		index: function (b) {
			return b
				? 'string' == typeof b
					? g.inArray(this[0], g(b))
					: g.inArray(b.jquery ? b[0] : b, this)
				: this[0] && this[0].parentNode
				? this.prevAll().length
				: -1;
		},
		add: function (b, c) {
			var d = 'string' == typeof b ? g(b, c) : g.makeArray(b && b.nodeType ? [b] : b),
				j = g.merge(this.get(), d);
			return this.pushStack(n(d[0]) || n(j[0]) ? j : g.unique(j));
		},
		addBack: function (b) {
			return this.add(null == b ? this.prevObject : this.prevObject.filter(b));
		}
	});
	g.fn.andSelf = g.fn.addBack;
	g.each(
		{
			parent: function (b) {
				return (b = b.parentNode) && 11 !== b.nodeType ? b : null;
			},
			parents: function (b) {
				return g.dir(b, 'parentNode');
			},
			parentsUntil: function (b, c, d) {
				return g.dir(b, 'parentNode', d);
			},
			next: function (b) {
				return q(b, 'nextSibling');
			},
			prev: function (b) {
				return q(b, 'previousSibling');
			},
			nextAll: function (b) {
				return g.dir(b, 'nextSibling');
			},
			prevAll: function (b) {
				return g.dir(b, 'previousSibling');
			},
			nextUntil: function (b, c, d) {
				return g.dir(b, 'nextSibling', d);
			},
			prevUntil: function (b, c, d) {
				return g.dir(b, 'previousSibling', d);
			},
			siblings: function (b) {
				return g.sibling((b.parentNode || {}).firstChild, b);
			},
			children: function (b) {
				return g.sibling(b.firstChild);
			},
			contents: function (b) {
				return g.nodeName(b, 'iframe')
					? b.contentDocument || b.contentWindow.document
					: g.merge([], b.childNodes);
			}
		},
		function (b, c) {
			g.fn[b] = function (d, j) {
				var e = g.map(this, c, d);
				return (
					jd.test(b) || (j = d),
					j && 'string' == typeof j && (e = g.filter(j, e)),
					(e = 1 < this.length && !ld[b] ? g.unique(e) : e),
					1 < this.length && kd.test(b) && (e = e.reverse()),
					this.pushStack(e, b, da.call(arguments).join(','))
				);
			};
		}
	);
	g.extend({
		filter: function (b, c, d) {
			return (
				d && (b = ':not(' + b + ')'),
				1 === c.length ? (g.find.matchesSelector(c[0], b) ? [c[0]] : []) : g.find.matches(b, c)
			);
		},
		dir: function (b, d, j) {
			var e = [];
			for (b = b[d]; b && 9 !== b.nodeType && (j === c || 1 !== b.nodeType || !g(b).is(j)); )
				1 === b.nodeType && e.push(b), (b = b[d]);
			return e;
		},
		sibling: function (b, c) {
			for (var d = []; b; b = b.nextSibling) 1 === b.nodeType && b !== c && d.push(b);
			return d;
		}
	});
	var Ab =
			'abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video',
		md = / jQuery\d+="(?:null|\d+)"/g,
		ub = /^\s+/,
		fc = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
		gc = /<([\w:]+)/,
		nd = /<tbody/i,
		od = /<|&#?\w+;/,
		pd = /<(?:script|style|link)/i,
		qd = /<(?:script|object|embed|option|style)/i,
		vb = RegExp('<(?:' + Ab + ')[\\s/>]', 'i'),
		Bb = /^(?:checkbox|radio)$/,
		hc = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rd = /\/(java|ecma)script/i,
		sd = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
		T = {
			option: [1, "<select multiple='multiple'>", '</select>'],
			legend: [1, '<fieldset>', '</fieldset>'],
			thead: [1, '<table>', '</table>'],
			tr: [2, '<table><tbody>', '</tbody></table>'],
			td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
			col: [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
			area: [1, '<map>', '</map>'],
			_default: [0, '', '']
		},
		ic = p(u),
		wb = ic.appendChild(u.createElement('div'));
	T.optgroup = T.option;
	T.tbody = T.tfoot = T.colgroup = T.caption = T.thead;
	T.th = T.td;
	g.support.htmlSerialize || (T._default = [1, 'X<div>', '</div>']);
	g.fn.extend({
		text: function (b) {
			return g.access(
				this,
				function (b) {
					return b === c
						? g.text(this)
						: this.empty().append(((this[0] && this[0].ownerDocument) || u).createTextNode(b));
				},
				null,
				b,
				arguments.length
			);
		},
		wrapAll: function (b) {
			if (g.isFunction(b))
				return this.each(function (c) {
					g(this).wrapAll(b.call(this, c));
				});
			if (this[0]) {
				var c = g(b, this[0].ownerDocument).eq(0).clone(!0);
				this[0].parentNode && c.insertBefore(this[0]);
				c.map(function () {
					for (var b = this; b.firstChild && 1 === b.firstChild.nodeType; ) b = b.firstChild;
					return b;
				}).append(this);
			}
			return this;
		},
		wrapInner: function (b) {
			return g.isFunction(b)
				? this.each(function (c) {
						g(this).wrapInner(b.call(this, c));
				  })
				: this.each(function () {
						var c = g(this),
							d = c.contents();
						d.length ? d.wrapAll(b) : c.append(b);
				  });
		},
		wrap: function (b) {
			var c = g.isFunction(b);
			return this.each(function (d) {
				g(this).wrapAll(c ? b.call(this, d) : b);
			});
		},
		unwrap: function () {
			return this.parent()
				.each(function () {
					g.nodeName(this, 'body') || g(this).replaceWith(this.childNodes);
				})
				.end();
		},
		append: function () {
			return this.domManip(arguments, !0, function (b) {
				(1 === this.nodeType || 11 === this.nodeType) && this.appendChild(b);
			});
		},
		prepend: function () {
			return this.domManip(arguments, !0, function (b) {
				(1 === this.nodeType || 11 === this.nodeType) && this.insertBefore(b, this.firstChild);
			});
		},
		before: function () {
			if (!n(this[0]))
				return this.domManip(arguments, !1, function (b) {
					this.parentNode.insertBefore(b, this);
				});
			if (arguments.length) {
				var b = g.clean(arguments);
				return this.pushStack(g.merge(b, this), 'before', this.selector);
			}
		},
		after: function () {
			if (!n(this[0]))
				return this.domManip(arguments, !1, function (b) {
					this.parentNode.insertBefore(b, this.nextSibling);
				});
			if (arguments.length) {
				var b = g.clean(arguments);
				return this.pushStack(g.merge(this, b), 'after', this.selector);
			}
		},
		remove: function (b, c) {
			for (var d, j = 0; null != (d = this[j]); j++)
				if (!b || g.filter(b, [d]).length)
					!c && 1 === d.nodeType && (g.cleanData(d.getElementsByTagName('*')), g.cleanData([d])),
						d.parentNode && d.parentNode.removeChild(d);
			return this;
		},
		empty: function () {
			for (var b, c = 0; null != (b = this[c]); c++)
				for (1 === b.nodeType && g.cleanData(b.getElementsByTagName('*')); b.firstChild; )
					b.removeChild(b.firstChild);
			return this;
		},
		clone: function (b, c) {
			return (
				(b = null == b ? !1 : b),
				(c = null == c ? b : c),
				this.map(function () {
					return g.clone(this, b, c);
				})
			);
		},
		html: function (b) {
			return g.access(
				this,
				function (b) {
					var d = this[0] || {},
						j = 0,
						e = this.length;
					if (b === c) return 1 === d.nodeType ? d.innerHTML.replace(md, '') : c;
					if (
						'string' == typeof b &&
						!pd.test(b) &&
						(g.support.htmlSerialize || !vb.test(b)) &&
						(g.support.leadingWhitespace || !ub.test(b)) &&
						!T[(gc.exec(b) || ['', ''])[1].toLowerCase()]
					) {
						b = b.replace(fc, '<$1></$2>');
						try {
							for (; j < e; j++)
								(d = this[j] || {}),
									1 === d.nodeType && (g.cleanData(d.getElementsByTagName('*')), (d.innerHTML = b));
							d = 0;
						} catch (f) {}
					}
					d && this.empty().append(b);
				},
				null,
				b,
				arguments.length
			);
		},
		replaceWith: function (b) {
			return n(this[0])
				? this.length
					? this.pushStack(g(g.isFunction(b) ? b() : b), 'replaceWith', b)
					: this
				: g.isFunction(b)
				? this.each(function (c) {
						var d = g(this),
							j = d.html();
						d.replaceWith(b.call(this, c, j));
				  })
				: ('string' != typeof b && (b = g(b).detach()),
				  this.each(function () {
						var c = this.nextSibling,
							d = this.parentNode;
						g(this).remove();
						c ? g(c).before(b) : g(d).append(b);
				  }));
		},
		detach: function (b) {
			return this.remove(b, !0);
		},
		domManip: function (b, d, j) {
			b = [].concat.apply([], b);
			var e,
				f,
				m,
				p = 0,
				l = b[0],
				r = [],
				s = this.length;
			if (!g.support.checkClone && 1 < s && 'string' == typeof l && hc.test(l))
				return this.each(function () {
					g(this).domManip(b, d, j);
				});
			if (g.isFunction(l))
				return this.each(function (e) {
					var f = g(this);
					b[0] = l.call(this, e, d ? f.html() : c);
					f.domManip(b, d, j);
				});
			if (this[0]) {
				e = g.buildFragment(b, this, r);
				m = e.fragment;
				f = m.firstChild;
				1 === m.childNodes.length && (m = f);
				if (f) {
					d = d && g.nodeName(f, 'tr');
					for (e = e.cacheable || s - 1; p < s; p++)
						j.call(
							d && g.nodeName(this[p], 'table')
								? this[p].getElementsByTagName('tbody')[0] ||
										this[p].appendChild(this[p].ownerDocument.createElement('tbody'))
								: this[p],
							p === e ? m : g.clone(m, !0, !0)
						);
				}
				m = f = null;
				r.length &&
					g.each(r, function (b, c) {
						c.src
							? g.ajax
								? g.ajax({
										url: c.src,
										type: 'GET',
										dataType: 'script',
										async: !1,
										global: !1,
										throws: !0
								  })
								: g.error('no ajax')
							: g.globalEval((c.text || c.textContent || c.innerHTML || '').replace(sd, ''));
						c.parentNode && c.parentNode.removeChild(c);
					});
			}
			return this;
		}
	});
	g.buildFragment = function (b, d, j) {
		var e,
			f,
			m,
			p = b[0];
		return (
			(d = d || u),
			(d = (!d.nodeType && d[0]) || d),
			(d = d.ownerDocument || d),
			1 === b.length &&
				'string' == typeof p &&
				512 > p.length &&
				d === u &&
				'<' === p.charAt(0) &&
				!qd.test(p) &&
				(g.support.checkClone || !hc.test(p)) &&
				(g.support.html5Clone || !vb.test(p)) &&
				((f = !0), (e = g.fragments[p]), (m = e !== c)),
			e || ((e = d.createDocumentFragment()), g.clean(b, d, e, j), f && (g.fragments[p] = m && e)),
			{ fragment: e, cacheable: f }
		);
	};
	g.fragments = {};
	g.each(
		{
			appendTo: 'append',
			prependTo: 'prepend',
			insertBefore: 'before',
			insertAfter: 'after',
			replaceAll: 'replaceWith'
		},
		function (b, c) {
			g.fn[b] = function (d) {
				var j,
					e = 0,
					f = [];
				d = g(d);
				var m = d.length;
				j = 1 === this.length && this[0].parentNode;
				if ((null == j || (j && 11 === j.nodeType && 1 === j.childNodes.length)) && 1 === m)
					return d[c](this[0]), this;
				for (; e < m; e++)
					(j = (0 < e ? this.clone(!0) : this).get()), g(d[e])[c](j), (f = f.concat(j));
				return this.pushStack(f, b, d.selector);
			};
		}
	);
	g.extend({
		clone: function (b, c, d) {
			var j, e, f, p;
			g.support.html5Clone || g.isXMLDoc(b) || !vb.test('<' + b.nodeName + '>')
				? (p = b.cloneNode(!0))
				: ((wb.innerHTML = b.outerHTML), wb.removeChild((p = wb.firstChild)));
			if (
				(!g.support.noCloneEvent || !g.support.noCloneChecked) &&
				(1 === b.nodeType || 11 === b.nodeType) &&
				!g.isXMLDoc(b)
			) {
				r(b, p);
				j = s(b);
				e = s(p);
				for (f = 0; j[f]; ++f) e[f] && r(j[f], e[f]);
			}
			if (c && (m(b, p), d)) {
				j = s(b);
				e = s(p);
				for (f = 0; j[f]; ++f) m(j[f], e[f]);
			}
			return p;
		},
		clean: function (b, c, d, j) {
			var e,
				f,
				m,
				l,
				r,
				s,
				n,
				q = c === u && ic,
				y = [];
			if (!c || 'undefined' == typeof c.createDocumentFragment) c = u;
			for (e = 0; null != (m = b[e]); e++)
				if (('number' == typeof m && (m += ''), m)) {
					if ('string' == typeof m)
						if (od.test(m)) {
							q = q || p(c);
							s = c.createElement('div');
							q.appendChild(s);
							m = m.replace(fc, '<$1></$2>');
							f = (gc.exec(m) || ['', ''])[1].toLowerCase();
							l = T[f] || T._default;
							r = l[0];
							for (s.innerHTML = l[1] + m + l[2]; r--; ) s = s.lastChild;
							if (!g.support.tbody) {
								r = nd.test(m);
								l =
									'table' === f && !r
										? s.firstChild && s.firstChild.childNodes
										: '<table>' === l[1] && !r
										? s.childNodes
										: [];
								for (f = l.length - 1; 0 <= f; --f)
									g.nodeName(l[f], 'tbody') &&
										!l[f].childNodes.length &&
										l[f].parentNode.removeChild(l[f]);
							}
							!g.support.leadingWhitespace &&
								ub.test(m) &&
								s.insertBefore(c.createTextNode(ub.exec(m)[0]), s.firstChild);
							m = s.childNodes;
							s.parentNode.removeChild(s);
						} else m = c.createTextNode(m);
					m.nodeType ? y.push(m) : g.merge(y, m);
				}
			s && (m = s = q = null);
			if (!g.support.appendChecked)
				for (e = 0; null != (m = y[e]); e++)
					g.nodeName(m, 'input')
						? t(m)
						: 'undefined' != typeof m.getElementsByTagName &&
						  g.grep(m.getElementsByTagName('input'), t);
			if (d) {
				b = function (b) {
					if (!b.type || rd.test(b.type))
						return j ? j.push(b.parentNode ? b.parentNode.removeChild(b) : b) : d.appendChild(b);
				};
				for (e = 0; null != (m = y[e]); e++)
					if (!g.nodeName(m, 'script') || !b(m))
						d.appendChild(m),
							'undefined' != typeof m.getElementsByTagName &&
								((n = g.grep(g.merge([], m.getElementsByTagName('script')), b)),
								y.splice.apply(y, [e + 1, 0].concat(n)),
								(e += n.length));
			}
			return y;
		},
		cleanData: function (b, c) {
			for (
				var d,
					j,
					e,
					f,
					m = 0,
					p = g.expando,
					l = g.cache,
					r = g.support.deleteExpando,
					s = g.event.special;
				null != (e = b[m]);
				m++
			)
				if (c || g.acceptData(e))
					if ((d = (j = e[p]) && l[j])) {
						if (d.events)
							for (f in d.events) s[f] ? g.event.remove(e, f) : g.removeEvent(e, f, d.handle);
						l[j] &&
							(delete l[j],
							r ? delete e[p] : e.removeAttribute ? e.removeAttribute(p) : (e[p] = null),
							g.deletedIds.push(j));
					}
		}
	});
	var Za, ha;
	g.uaMatch = function (b) {
		b = b.toLowerCase();
		b =
			/(chrome)[ \/]([\w.]+)/.exec(b) ||
			/(webkit)[ \/]([\w.]+)/.exec(b) ||
			/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(b) ||
			/(msie) ([\w.]+)/.exec(b) ||
			(0 > b.indexOf('compatible') && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(b)) ||
			[];
		return { browser: b[1] || '', version: b[2] || '0' };
	};
	Za = g.uaMatch(sa.userAgent);
	ha = {};
	Za.browser && ((ha[Za.browser] = !0), (ha.version = Za.version));
	ha.chrome ? (ha.webkit = !0) : ha.webkit && (ha.safari = !0);
	g.browser = ha;
	g.sub = function () {
		function b(c, d) {
			return new b.fn.init(c, d);
		}
		g.extend(!0, b, this);
		b.superclass = this;
		b.fn = b.prototype = this();
		b.fn.constructor = b;
		b.sub = this.sub;
		b.fn.init = function (d, j) {
			return j && j instanceof g && !(j instanceof b) && (j = b(j)), g.fn.init.call(this, d, j, c);
		};
		b.fn.init.prototype = b.fn;
		var c = b(u);
		return b;
	};
	var O,
		pa,
		qa,
		xb = /alpha\([^)]*\)/i,
		td = /opacity=([^)]*)/,
		ud = /^(top|right|bottom|left)$/,
		vd = /^(none|table(?!-c[ea]).+)/,
		jc = /^margin/,
		xc = RegExp('^(' + Ja + ')(.*)$', 'i'),
		Da = RegExp('^(' + Ja + ')(?!px)[a-z%]+$', 'i'),
		wd = RegExp('^([-+])=(' + Ja + ')', 'i'),
		bb = {},
		xd = { position: 'absolute', visibility: 'hidden', display: 'block' },
		kc = { letterSpacing: 0, fontWeight: 400 },
		ia = ['Top', 'Right', 'Bottom', 'Left'],
		Cb = ['Webkit', 'O', 'Moz', 'ms'],
		yd = g.fn.toggle;
	g.fn.extend({
		css: function (b, d) {
			return g.access(
				this,
				function (b, d, j) {
					return j !== c ? g.style(b, d, j) : g.css(b, d);
				},
				b,
				d,
				1 < arguments.length
			);
		},
		show: function () {
			return F(this, !0);
		},
		hide: function () {
			return F(this);
		},
		toggle: function (b, c) {
			var d = 'boolean' == typeof b;
			return g.isFunction(b) && g.isFunction(c)
				? yd.apply(this, arguments)
				: this.each(function () {
						(d ? b : B(this)) ? g(this).show() : g(this).hide();
				  });
		}
	});
	g.extend({
		cssHooks: {
			opacity: {
				get: function (b, c) {
					if (c) {
						var d = O(b, 'opacity');
						return '' === d ? '1' : d;
					}
				}
			}
		},
		cssNumber: {
			fillOpacity: !0,
			fontWeight: !0,
			lineHeight: !0,
			opacity: !0,
			orphans: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0
		},
		cssProps: { float: g.support.cssFloat ? 'cssFloat' : 'styleFloat' },
		style: function (b, d, j, e) {
			if (b && !(3 === b.nodeType || 8 === b.nodeType || !b.style)) {
				var f,
					m,
					p,
					l = g.camelCase(d),
					r = b.style;
				d = g.cssProps[l] || (g.cssProps[l] = y(r, l));
				p = g.cssHooks[d] || g.cssHooks[l];
				if (j === c) return p && 'get' in p && (f = p.get(b, !1, e)) !== c ? f : r[d];
				m = typeof j;
				'string' === m &&
					(f = wd.exec(j)) &&
					((j = (f[1] + 1) * f[2] + parseFloat(g.css(b, d))), (m = 'number'));
				if (!(null == j || ('number' === m && isNaN(j))))
					if (
						('number' === m && !g.cssNumber[l] && (j += 'px'),
						!p || !('set' in p) || (j = p.set(b, j, e)) !== c)
					)
						try {
							r[d] = j;
						} catch (s) {}
			}
		},
		css: function (b, d, j, e) {
			var f,
				m,
				p,
				l = g.camelCase(d);
			return (
				(d = g.cssProps[l] || (g.cssProps[l] = y(b.style, l))),
				(p = g.cssHooks[d] || g.cssHooks[l]),
				p && 'get' in p && (f = p.get(b, !0, e)),
				f === c && (f = O(b, d)),
				'normal' === f && d in kc && (f = kc[d]),
				j || e !== c ? ((m = parseFloat(f)), j || g.isNumeric(m) ? m || 0 : f) : f
			);
		},
		swap: function (b, c, d) {
			var j,
				e = {};
			for (j in c) (e[j] = b.style[j]), (b.style[j] = c[j]);
			d = d.call(b);
			for (j in c) b.style[j] = e[j];
			return d;
		}
	});
	b.getComputedStyle
		? (O = function (c, d) {
				var j,
					e,
					f,
					m,
					p = b.getComputedStyle(c, null),
					l = c.style;
				return (
					p &&
						((j = p[d]),
						'' === j && !g.contains(c.ownerDocument, c) && (j = g.style(c, d)),
						Da.test(j) &&
							jc.test(d) &&
							((e = l.width),
							(f = l.minWidth),
							(m = l.maxWidth),
							(l.minWidth = l.maxWidth = l.width = j),
							(j = p.width),
							(l.width = e),
							(l.minWidth = f),
							(l.maxWidth = m))),
					j
				);
		  })
		: u.documentElement.currentStyle &&
		  (O = function (b, c) {
				var d,
					j,
					e = b.currentStyle && b.currentStyle[c],
					f = b.style;
				return (
					null == e && f && f[c] && (e = f[c]),
					Da.test(e) &&
						!ud.test(c) &&
						((d = f.left),
						(j = b.runtimeStyle && b.runtimeStyle.left),
						j && (b.runtimeStyle.left = b.currentStyle.left),
						(f.left = 'fontSize' === c ? '1em' : e),
						(e = f.pixelLeft + 'px'),
						(f.left = d),
						j && (b.runtimeStyle.left = j)),
					'' === e ? 'auto' : e
				);
		  });
	g.each(['height', 'width'], function (b, c) {
		g.cssHooks[c] = {
			get: function (b, d, j) {
				if (d)
					return 0 === b.offsetWidth && vd.test(O(b, 'display'))
						? g.swap(b, xd, function () {
								return A(b, c, j);
						  })
						: A(b, c, j);
			},
			set: function (b, d, j) {
				return z(
					b,
					d,
					j ? ca(b, c, j, g.support.boxSizing && 'border-box' === g.css(b, 'boxSizing')) : 0
				);
			}
		};
	});
	g.support.opacity ||
		(g.cssHooks.opacity = {
			get: function (b, c) {
				return td.test((c && b.currentStyle ? b.currentStyle.filter : b.style.filter) || '')
					? 0.01 * parseFloat(RegExp.$1) + ''
					: c
					? '1'
					: '';
			},
			set: function (b, c) {
				var d = b.style,
					j = b.currentStyle,
					e = g.isNumeric(c) ? 'alpha(opacity=' + 100 * c + ')' : '',
					f = (j && j.filter) || d.filter || '';
				d.zoom = 1;
				if (
					!(
						1 <= c &&
						'' === g.trim(f.replace(xb, '')) &&
						d.removeAttribute &&
						(d.removeAttribute('filter'), j && !j.filter)
					)
				)
					d.filter = xb.test(f) ? f.replace(xb, e) : f + ' ' + e;
			}
		});
	g(function () {
		g.support.reliableMarginRight ||
			(g.cssHooks.marginRight = {
				get: function (b, c) {
					return g.swap(b, { display: 'inline-block' }, function () {
						if (c) return O(b, 'marginRight');
					});
				}
			});
		!g.support.pixelPosition &&
			g.fn.position &&
			g.each(['top', 'left'], function (b, c) {
				g.cssHooks[c] = {
					get: function (b, d) {
						if (d) {
							var j = O(b, c);
							return Da.test(j) ? g(b).position()[c] + 'px' : j;
						}
					}
				};
			});
	});
	g.expr &&
		g.expr.filters &&
		((g.expr.filters.hidden = function (b) {
			return (
				(0 === b.offsetWidth && 0 === b.offsetHeight) ||
				(!g.support.reliableHiddenOffsets &&
					'none' === ((b.style && b.style.display) || O(b, 'display')))
			);
		}),
		(g.expr.filters.visible = function (b) {
			return !g.expr.filters.hidden(b);
		}));
	g.each({ margin: '', padding: '', border: 'Width' }, function (b, c) {
		g.cssHooks[b + c] = {
			expand: function (d) {
				var j = 'string' == typeof d ? d.split(' ') : [d],
					e = {};
				for (d = 0; 4 > d; d++) e[b + ia[d] + c] = j[d] || j[d - 2] || j[0];
				return e;
			}
		};
		jc.test(b) || (g.cssHooks[b + c].set = z);
	});
	var zd = /%20/g,
		yc = /\[\]$/,
		lc = /\r?\n/g,
		Ad =
			/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
		Bd = /^(?:select|textarea)/i;
	g.fn.extend({
		serialize: function () {
			return g.param(this.serializeArray());
		},
		serializeArray: function () {
			return this.map(function () {
				return this.elements ? g.makeArray(this.elements) : this;
			})
				.filter(function () {
					return (
						this.name &&
						!this.disabled &&
						(this.checked || Bd.test(this.nodeName) || Ad.test(this.type))
					);
				})
				.map(function (b, c) {
					var d = g(this).val();
					return null == d
						? null
						: g.isArray(d)
						? g.map(d, function (b) {
								return { name: c.name, value: b.replace(lc, '\r\n') };
						  })
						: { name: c.name, value: d.replace(lc, '\r\n') };
				})
				.get();
		}
	});
	g.param = function (b, d) {
		var j,
			e = [],
			f = function (b, c) {
				c = g.isFunction(c) ? c() : null == c ? '' : c;
				e[e.length] = encodeURIComponent(b) + '=' + encodeURIComponent(c);
			};
		d === c && (d = g.ajaxSettings && g.ajaxSettings.traditional);
		if (g.isArray(b) || (b.jquery && !g.isPlainObject(b)))
			g.each(b, function () {
				f(this.name, this.value);
			});
		else for (j in b) ra(j, b[j], d, f);
		return e.join('&').replace(zd, '+');
	};
	var va,
		oa,
		Cd = /#.*$/,
		Dd = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
		Ed = /^(?:GET|HEAD)$/,
		Fd = /^\/\//,
		mc = /\?/,
		Gd = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
		Hd = /([?&])_=[^&]*/,
		nc = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
		oc = g.fn.load,
		cb = {},
		pc = {},
		qc = ['*/'] + ['*'];
	try {
		oa = Ac.href;
	} catch (Qd) {
		(oa = u.createElement('a')), (oa.href = ''), (oa = oa.href);
	}
	va = nc.exec(oa.toLowerCase()) || [];
	g.fn.load = function (b, d, j) {
		if ('string' != typeof b && oc) return oc.apply(this, arguments);
		if (!this.length) return this;
		var e,
			f,
			m,
			p = this,
			l = b.indexOf(' ');
		return (
			0 <= l && ((e = b.slice(l, b.length)), (b = b.slice(0, l))),
			g.isFunction(d) ? ((j = d), (d = c)) : d && 'object' == typeof d && (f = 'POST'),
			g
				.ajax({
					url: b,
					type: f,
					dataType: 'html',
					data: d,
					complete: function (b, c) {
						j && p.each(j, m || [b.responseText, c, b]);
					}
				})
				.done(function (b) {
					m = arguments;
					p.html(e ? g('<div>').append(b.replace(Gd, '')).find(e) : b);
				}),
			this
		);
	};
	g.each(
		'ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend'.split(' '),
		function (b, c) {
			g.fn[c] = function (b) {
				return this.on(c, b);
			};
		}
	);
	g.each(['get', 'post'], function (b, d) {
		g[d] = function (b, j, e, f) {
			return (
				g.isFunction(j) && ((f = f || e), (e = j), (j = c)),
				g.ajax({ type: d, url: b, data: j, success: e, dataType: f })
			);
		};
	});
	g.extend({
		getScript: function (b, d) {
			return g.get(b, c, d, 'script');
		},
		getJSON: function (b, c, d) {
			return g.get(b, c, d, 'json');
		},
		ajaxSetup: function (b, c) {
			return c ? X(b, g.ajaxSettings) : ((c = b), (b = g.ajaxSettings)), X(b, c), b;
		},
		ajaxSettings: {
			url: oa,
			isLocal: /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/.test(va[1]),
			global: !0,
			type: 'GET',
			contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
			processData: !0,
			async: !0,
			accepts: {
				xml: 'application/xml, text/xml',
				html: 'text/html',
				text: 'text/plain',
				json: 'application/json, text/javascript',
				'*': qc
			},
			contents: { xml: /xml/, html: /html/, json: /json/ },
			responseFields: { xml: 'responseXML', text: 'responseText' },
			converters: {
				'* text': b.String,
				'text html': !0,
				'text json': g.parseJSON,
				'text xml': g.parseXML
			},
			flatOptions: { context: !0, url: !0 }
		},
		ajaxPrefilter: Db(cb),
		ajaxTransport: Db(pc),
		ajax: function (b, d) {
			function j(b, d, m, r) {
				var n,
					v,
					x,
					N,
					I,
					z = d;
				if (2 !== D) {
					D = 2;
					l && clearTimeout(l);
					p = c;
					f = r || '';
					E.readyState = 0 < b ? 4 : 0;
					if (m) {
						N = t;
						r = E;
						var R,
							A,
							ea,
							G,
							H = N.contents,
							J = N.dataTypes,
							ca = N.responseFields;
						for (A in ca) A in m && (r[ca[A]] = m[A]);
						for (; '*' === J[0]; )
							J.shift(), R === c && (R = N.mimeType || r.getResponseHeader('content-type'));
						if (R)
							for (A in H)
								if (H[A] && H[A].test(R)) {
									J.unshift(A);
									break;
								}
						if (J[0] in m) ea = J[0];
						else {
							for (A in m) {
								if (!J[0] || N.converters[A + ' ' + J[0]]) {
									ea = A;
									break;
								}
								G || (G = A);
							}
							ea = ea || G;
						}
						N = m = ea ? (ea !== J[0] && J.unshift(ea), m[ea]) : void 0;
					}
					if ((200 <= b && 300 > b) || 304 === b)
						if (
							(t.ifModified &&
								((I = E.getResponseHeader('Last-Modified')),
								I && (g.lastModified[e] = I),
								(I = E.getResponseHeader('Etag')),
								I && (g.etag[e] = I)),
							304 === b)
						)
							(z = 'notmodified'), (n = !0);
						else {
							var M;
							a: {
								n = t;
								v = N;
								var K,
									z = n.dataTypes.slice();
								m = z[0];
								R = {};
								A = 0;
								n.dataFilter && (v = n.dataFilter(v, n.dataType));
								if (z[1]) for (M in n.converters) R[M.toLowerCase()] = n.converters[M];
								for (; (x = z[++A]); )
									if ('*' !== x) {
										if ('*' !== m && m !== x) {
											M = R[m + ' ' + x] || R['* ' + x];
											if (!M)
												for (K in R)
													if (
														((I = K.split(' ')),
														I[1] === x && (M = R[m + ' ' + I[0]] || R['* ' + I[0]]))
													) {
														!0 === M
															? (M = R[K])
															: !0 !== R[K] && ((x = I[0]), z.splice(A--, 0, x));
														break;
													}
											if (!0 !== M)
												if (M && n['throws']) v = M(v);
												else
													try {
														v = M(v);
													} catch (L) {
														M = {
															state: 'parsererror',
															error: M ? L : 'No conversion from ' + m + ' to ' + x
														};
														break a;
													}
										}
										m = x;
									}
								M = { state: 'success', data: v };
							}
							n = M;
							z = n.state;
							v = n.data;
							x = n.error;
							n = !x;
						}
					else if (((x = z), !z || b)) (z = 'error'), 0 > b && (b = 0);
					E.status = b;
					E.statusText = (d || z) + '';
					n ? B.resolveWith(q, [v, z, E]) : B.rejectWith(q, [E, z, x]);
					E.statusCode(F);
					F = c;
					s && y.trigger('ajax' + (n ? 'Success' : 'Error'), [E, t, n ? v : x]);
					u.fireWith(q, [E, z]);
					s && (y.trigger('ajaxComplete', [E, t]), --g.active || g.event.trigger('ajaxStop'));
				}
			}
			'object' == typeof b && ((d = b), (b = c));
			d = d || {};
			var e,
				f,
				m,
				p,
				l,
				r,
				s,
				n,
				t = g.ajaxSetup({}, d),
				q = t.context || t,
				y = q !== t && (q.nodeType || q instanceof g) ? g(q) : g.event,
				B = g.Deferred(),
				u = g.Callbacks('once memory'),
				F = t.statusCode || {},
				z = {},
				A = {},
				D = 0,
				G = 'canceled',
				E = {
					readyState: 0,
					setRequestHeader: function (b, c) {
						if (!D) {
							var d = b.toLowerCase();
							b = A[d] = A[d] || b;
							z[b] = c;
						}
						return this;
					},
					getAllResponseHeaders: function () {
						return 2 === D ? f : null;
					},
					getResponseHeader: function (b) {
						var d;
						if (2 === D) {
							if (!m) for (m = {}; (d = Dd.exec(f)); ) m[d[1].toLowerCase()] = d[2];
							d = m[b.toLowerCase()];
						}
						return d === c ? null : d;
					},
					overrideMimeType: function (b) {
						return D || (t.mimeType = b), this;
					},
					abort: function (b) {
						return (b = b || G), p && p.abort(b), j(0, b), this;
					}
				};
			B.promise(E);
			E.success = E.done;
			E.error = E.fail;
			E.complete = u.add;
			E.statusCode = function (b) {
				if (b) {
					var c;
					if (2 > D) for (c in b) F[c] = [F[c], b[c]];
					else (c = b[E.status]), E.always(c);
				}
				return this;
			};
			t.url = ((b || t.url) + '').replace(Cd, '').replace(Fd, va[1] + '//');
			t.dataTypes = g
				.trim(t.dataType || '*')
				.toLowerCase()
				.split(ja);
			null == t.crossDomain &&
				((r = nc.exec(t.url.toLowerCase()) || !1),
				(t.crossDomain =
					r &&
					r.join(':') + (r[3] ? '' : 'http:' === r[1] ? 80 : 443) !==
						va.join(':') + (va[3] ? '' : 'http:' === va[1] ? 80 : 443)));
			t.data &&
				t.processData &&
				'string' != typeof t.data &&
				(t.data = g.param(t.data, t.traditional));
			Ea(cb, t, d, E);
			if (2 === D) return E;
			s = t.global;
			t.type = t.type.toUpperCase();
			t.hasContent = !Ed.test(t.type);
			s && 0 === g.active++ && g.event.trigger('ajaxStart');
			if (
				!t.hasContent &&
				(t.data && ((t.url += (mc.test(t.url) ? '&' : '?') + t.data), delete t.data),
				(e = t.url),
				!1 === t.cache)
			) {
				r = g.now();
				var H = t.url.replace(Hd, '$1_=' + r);
				t.url = H + (H === t.url ? (mc.test(t.url) ? '&' : '?') + '_=' + r : '');
			}
			((t.data && t.hasContent && !1 !== t.contentType) || d.contentType) &&
				E.setRequestHeader('Content-Type', t.contentType);
			t.ifModified &&
				((e = e || t.url),
				g.lastModified[e] && E.setRequestHeader('If-Modified-Since', g.lastModified[e]),
				g.etag[e] && E.setRequestHeader('If-None-Match', g.etag[e]));
			E.setRequestHeader(
				'Accept',
				t.dataTypes[0] && t.accepts[t.dataTypes[0]]
					? t.accepts[t.dataTypes[0]] + ('*' !== t.dataTypes[0] ? ', ' + qc + '; q=0.01' : '')
					: t.accepts['*']
			);
			for (n in t.headers) E.setRequestHeader(n, t.headers[n]);
			if (!t.beforeSend || (!1 !== t.beforeSend.call(q, E, t) && 2 !== D)) {
				G = 'abort';
				for (n in { success: 1, error: 1, complete: 1 }) E[n](t[n]);
				if ((p = Ea(pc, t, d, E))) {
					E.readyState = 1;
					s && y.trigger('ajaxSend', [E, t]);
					t.async &&
						0 < t.timeout &&
						(l = setTimeout(function () {
							E.abort('timeout');
						}, t.timeout));
					try {
						(D = 1), p.send(z, j);
					} catch (J) {
						if (2 > D) j(-1, J);
						else throw J;
					}
				} else j(-1, 'No Transport');
				return E;
			}
			return E.abort();
		},
		active: 0,
		lastModified: {},
		etag: {}
	});
	var rc = [],
		Id = /\?/,
		$a = /(=)\?(?=&|$)|\?\?/,
		Jd = g.now();
	g.ajaxSetup({
		jsonp: 'callback',
		jsonpCallback: function () {
			var b = rc.pop() || g.expando + '_' + Jd++;
			return (this[b] = !0), b;
		}
	});
	g.ajaxPrefilter('json jsonp', function (d, j, e) {
		var f,
			m,
			p,
			l = d.data,
			r = d.url,
			s = !1 !== d.jsonp,
			n = s && $a.test(r),
			t =
				s &&
				!n &&
				'string' == typeof l &&
				!(d.contentType || '').indexOf('application/x-www-form-urlencoded') &&
				$a.test(l);
		if ('jsonp' === d.dataTypes[0] || n || t)
			return (
				(f = d.jsonpCallback = g.isFunction(d.jsonpCallback) ? d.jsonpCallback() : d.jsonpCallback),
				(m = b[f]),
				n
					? (d.url = r.replace($a, '$1' + f))
					: t
					? (d.data = l.replace($a, '$1' + f))
					: s && (d.url += (Id.test(r) ? '&' : '?') + d.jsonp + '=' + f),
				(d.converters['script json'] = function () {
					return p || g.error(f + ' was not called'), p[0];
				}),
				(d.dataTypes[0] = 'json'),
				(b[f] = function () {
					p = arguments;
				}),
				e.always(function () {
					b[f] = m;
					d[f] && ((d.jsonpCallback = j.jsonpCallback), rc.push(f));
					p && g.isFunction(m) && m(p[0]);
					p = m = c;
				}),
				'script'
			);
	});
	g.ajaxSetup({
		accepts: {
			script:
				'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
		},
		contents: { script: /javascript|ecmascript/ },
		converters: {
			'text script': function (b) {
				return g.globalEval(b), b;
			}
		}
	});
	g.ajaxPrefilter('script', function (b) {
		b.cache === c && (b.cache = !1);
		b.crossDomain && ((b.type = 'GET'), (b.global = !1));
	});
	g.ajaxTransport('script', function (b) {
		if (b.crossDomain) {
			var d,
				j = u.head || u.getElementsByTagName('head')[0] || u.documentElement;
			return {
				send: function (e, f) {
					d = u.createElement('script');
					d.async = 'async';
					b.scriptCharset && (d.charset = b.scriptCharset);
					d.src = b.url;
					d.onload = d.onreadystatechange = function (b, e) {
						if (e || !d.readyState || /loaded|complete/.test(d.readyState))
							(d.onload = d.onreadystatechange = null),
								j && d.parentNode && j.removeChild(d),
								(d = c),
								e || f(200, 'success');
					};
					j.insertBefore(d, j.firstChild);
				},
				abort: function () {
					d && d.onload(0, 1);
				}
			};
		}
	});
	var wa,
		yb = b.ActiveXObject
			? function () {
					for (var b in wa) wa[b](0, 1);
			  }
			: !1,
		Kd = 0;
	g.ajaxSettings.xhr = b.ActiveXObject
		? function () {
				var c;
				if (!(c = !this.isLocal && Eb()))
					a: {
						try {
							c = new b.ActiveXObject('Microsoft.XMLHTTP');
							break a;
						} catch (d) {}
						c = void 0;
					}
				return c;
		  }
		: Eb;
	var zb = g.ajaxSettings.xhr();
	g.extend(g.support, { ajax: !!zb, cors: !!zb && 'withCredentials' in zb });
	g.support.ajax &&
		g.ajaxTransport(function (d) {
			if (!d.crossDomain || g.support.cors) {
				var j;
				return {
					send: function (e, f) {
						var m,
							p,
							l = d.xhr();
						d.username
							? l.open(d.type, d.url, d.async, d.username, d.password)
							: l.open(d.type, d.url, d.async);
						if (d.xhrFields) for (p in d.xhrFields) l[p] = d.xhrFields[p];
						d.mimeType && l.overrideMimeType && l.overrideMimeType(d.mimeType);
						!d.crossDomain && !e['X-Requested-With'] && (e['X-Requested-With'] = 'XMLHttpRequest');
						try {
							for (p in e) l.setRequestHeader(p, e[p]);
						} catch (r) {}
						l.send((d.hasContent && d.data) || null);
						j = function (b, e) {
							var p, r, s, n, t;
							try {
								if (j && (e || 4 === l.readyState))
									if (((j = c), m && ((l.onreadystatechange = g.noop), yb && delete wa[m]), e))
										4 !== l.readyState && l.abort();
									else {
										p = l.status;
										s = l.getAllResponseHeaders();
										n = {};
										(t = l.responseXML) && t.documentElement && (n.xml = t);
										try {
											n.text = l.responseText;
										} catch (q) {}
										try {
											r = l.statusText;
										} catch (y) {
											r = '';
										}
										!p && d.isLocal && !d.crossDomain
											? (p = n.text ? 200 : 404)
											: 1223 === p && (p = 204);
									}
							} catch (B) {
								e || f(-1, B);
							}
							n && f(p, r, n, s);
						};
						d.async
							? 4 === l.readyState
								? setTimeout(j, 0)
								: ((m = ++Kd),
								  yb && (wa || ((wa = {}), g(b).unload(yb)), (wa[m] = j)),
								  (l.onreadystatechange = j))
							: j();
					},
					abort: function () {
						j && j(0, 1);
					}
				};
			}
		});
	var Ga,
		ab,
		Ld = /^(?:toggle|show|hide)$/,
		Md = RegExp('^(?:([-+])=|)(' + Ja + ')([a-z%]*)$', 'i'),
		Nd = /queueHooks$/,
		Ia = [
			function (b, c, d) {
				var j,
					e,
					f,
					m,
					p,
					l,
					r = this,
					s = b.style,
					n = {},
					t = [],
					q = b.nodeType && B(b);
				d.queue ||
					((p = g._queueHooks(b, 'fx')),
					null == p.unqueued &&
						((p.unqueued = 0),
						(l = p.empty.fire),
						(p.empty.fire = function () {
							p.unqueued || l();
						})),
					p.unqueued++,
					r.always(function () {
						r.always(function () {
							p.unqueued--;
							g.queue(b, 'fx').length || p.empty.fire();
						});
					}));
				1 === b.nodeType &&
					('height' in c || 'width' in c) &&
					((d.overflow = [s.overflow, s.overflowX, s.overflowY]),
					'inline' === g.css(b, 'display') &&
						'none' === g.css(b, 'float') &&
						(!g.support.inlineBlockNeedsLayout || 'inline' === xa(b.nodeName)
							? (s.display = 'inline-block')
							: (s.zoom = 1)));
				d.overflow &&
					((s.overflow = 'hidden'),
					g.support.shrinkWrapBlocks ||
						r.done(function () {
							s.overflow = d.overflow[0];
							s.overflowX = d.overflow[1];
							s.overflowY = d.overflow[2];
						}));
				for (j in c)
					(e = c[j]), Ld.exec(e) && (delete c[j], e !== (q ? 'hide' : 'show') && t.push(j));
				if ((e = t.length)) {
					f = g._data(b, 'fxshow') || g._data(b, 'fxshow', {});
					q
						? g(b).show()
						: r.done(function () {
								g(b).hide();
						  });
					r.done(function () {
						var c;
						g.removeData(b, 'fxshow', !0);
						for (c in n) g.style(b, c, n[c]);
					});
					for (j = 0; j < e; j++)
						(c = t[j]),
							(m = r.createTween(c, q ? f[c] : 0)),
							(n[c] = f[c] || g.style(b, c)),
							c in f ||
								((f[c] = m.start),
								q && ((m.end = m.start), (m.start = 'width' === c || 'height' === c ? 1 : 0)));
				}
			}
		],
		ya = {
			'*': [
				function (b, c) {
					var d,
						j,
						e = this.createTween(b, c),
						f = Md.exec(c),
						m = e.cur(),
						p = +m || 0,
						l = 1,
						r = 20;
					if (f) {
						d = +f[2];
						j = f[3] || (g.cssNumber[b] ? '' : 'px');
						if ('px' !== j && p) {
							p = g.css(e.elem, b, !0) || d || 1;
							do (l = l || '.5'), (p /= l), g.style(e.elem, b, p + j);
							while (l !== (l = e.cur() / m) && 1 !== l && --r);
						}
						e.unit = j;
						e.start = p;
						e.end = f[1] ? p + (f[1] + 1) * d : d;
					}
					return e;
				}
			]
		};
	g.Animation = g.extend(Ha, {
		tweener: function (b, c) {
			g.isFunction(b) ? ((c = b), (b = ['*'])) : (b = b.split(' '));
			for (var d, j = 0, e = b.length; j < e; j++)
				(d = b[j]), (ya[d] = ya[d] || []), ya[d].unshift(c);
		},
		prefilter: function (b, c) {
			c ? Ia.unshift(b) : Ia.push(b);
		}
	});
	g.Tween = J;
	J.prototype = {
		constructor: J,
		init: function (b, c, d, j, e, f) {
			this.elem = b;
			this.prop = d;
			this.easing = e || 'swing';
			this.options = c;
			this.start = this.now = this.cur();
			this.end = j;
			this.unit = f || (g.cssNumber[d] ? '' : 'px');
		},
		cur: function () {
			var b = J.propHooks[this.prop];
			return b && b.get ? b.get(this) : J.propHooks._default.get(this);
		},
		run: function (b) {
			var c,
				d = J.propHooks[this.prop];
			return (
				this.options.duration
					? (this.pos = c =
							g.easing[this.easing](b, this.options.duration * b, 0, 1, this.options.duration))
					: (this.pos = c = b),
				(this.now = (this.end - this.start) * c + this.start),
				this.options.step && this.options.step.call(this.elem, this.now, this),
				d && d.set ? d.set(this) : J.propHooks._default.set(this),
				this
			);
		}
	};
	J.prototype.init.prototype = J.prototype;
	J.propHooks = {
		_default: {
			get: function (b) {
				var c;
				return null == b.elem[b.prop] || (b.elem.style && null != b.elem.style[b.prop])
					? ((c = g.css(b.elem, b.prop, !1, '')), !c || 'auto' === c ? 0 : c)
					: b.elem[b.prop];
			},
			set: function (b) {
				g.fx.step[b.prop]
					? g.fx.step[b.prop](b)
					: b.elem.style && (null != b.elem.style[g.cssProps[b.prop]] || g.cssHooks[b.prop])
					? g.style(b.elem, b.prop, b.now + b.unit)
					: (b.elem[b.prop] = b.now);
			}
		}
	};
	J.propHooks.scrollTop = J.propHooks.scrollLeft = {
		set: function (b) {
			b.elem.nodeType && b.elem.parentNode && (b.elem[b.prop] = b.now);
		}
	};
	g.each(['toggle', 'show', 'hide'], function (b, c) {
		var d = g.fn[c];
		g.fn[c] = function (j, e, f) {
			return null == j || 'boolean' == typeof j || (!b && g.isFunction(j) && g.isFunction(e))
				? d.apply(this, arguments)
				: this.animate(Y(c, !0), j, e, f);
		};
	});
	g.fn.extend({
		fadeTo: function (b, c, d, j) {
			return this.filter(B).css('opacity', 0).show().end().animate({ opacity: c }, b, d, j);
		},
		animate: function (b, c, d, j) {
			var e = g.isEmptyObject(b),
				f = g.speed(c, d, j);
			c = function () {
				var c = Ha(this, g.extend({}, b), f);
				e && c.stop(!0);
			};
			return e || !1 === f.queue ? this.each(c) : this.queue(f.queue, c);
		},
		stop: function (b, d, j) {
			var e = function (b) {
				var c = b.stop;
				delete b.stop;
				c(j);
			};
			return (
				'string' != typeof b && ((j = d), (d = b), (b = c)),
				d && !1 !== b && this.queue(b || 'fx', []),
				this.each(function () {
					var c = !0,
						d = null != b && b + 'queueHooks',
						f = g.timers,
						m = g._data(this);
					if (d) m[d] && m[d].stop && e(m[d]);
					else for (d in m) m[d] && m[d].stop && Nd.test(d) && e(m[d]);
					for (d = f.length; d--; )
						f[d].elem === this &&
							(null == b || f[d].queue === b) &&
							(f[d].anim.stop(j), (c = !1), f.splice(d, 1));
					(c || !j) && g.dequeue(this, b);
				})
			);
		}
	});
	g.each(
		{
			slideDown: Y('show'),
			slideUp: Y('hide'),
			slideToggle: Y('toggle'),
			fadeIn: { opacity: 'show' },
			fadeOut: { opacity: 'hide' },
			fadeToggle: { opacity: 'toggle' }
		},
		function (b, c) {
			g.fn[b] = function (b, d, j) {
				return this.animate(c, b, d, j);
			};
		}
	);
	g.speed = function (b, c, d) {
		var j =
			b && 'object' == typeof b
				? g.extend({}, b)
				: {
						complete: d || (!d && c) || (g.isFunction(b) && b),
						duration: b,
						easing: (d && c) || (c && !g.isFunction(c) && c)
				  };
		j.duration = g.fx.off
			? 0
			: 'number' == typeof j.duration
			? j.duration
			: j.duration in g.fx.speeds
			? g.fx.speeds[j.duration]
			: g.fx.speeds._default;
		if (null == j.queue || !0 === j.queue) j.queue = 'fx';
		return (
			(j.old = j.complete),
			(j.complete = function () {
				g.isFunction(j.old) && j.old.call(this);
				j.queue && g.dequeue(this, j.queue);
			}),
			j
		);
	};
	g.easing = {
		linear: function (b) {
			return b;
		},
		swing: function (b) {
			return 0.5 - Math.cos(b * Math.PI) / 2;
		}
	};
	g.timers = [];
	g.fx = J.prototype.init;
	g.fx.tick = function () {
		for (var b, c = g.timers, d = 0; d < c.length; d++)
			(b = c[d]), !b() && c[d] === b && c.splice(d--, 1);
		c.length || g.fx.stop();
	};
	g.fx.timer = function (b) {
		b() && g.timers.push(b) && !ab && (ab = setInterval(g.fx.tick, g.fx.interval));
	};
	g.fx.interval = 13;
	g.fx.stop = function () {
		clearInterval(ab);
		ab = null;
	};
	g.fx.speeds = { slow: 600, fast: 200, _default: 400 };
	g.fx.step = {};
	g.expr &&
		g.expr.filters &&
		(g.expr.filters.animated = function (b) {
			return g.grep(g.timers, function (c) {
				return b === c.elem;
			}).length;
		});
	var sc = /^(?:body|html)$/i;
	g.fn.offset = function (b) {
		if (arguments.length)
			return b === c
				? this
				: this.each(function (c) {
						g.offset.setOffset(this, b, c);
				  });
		var d,
			j,
			e,
			f,
			m,
			p,
			l,
			r = { top: 0, left: 0 },
			s = this[0],
			n = s && s.ownerDocument;
		if (n)
			return (j = n.body) === s
				? g.offset.bodyOffset(s)
				: ((d = n.documentElement),
				  g.contains(d, s)
						? ('undefined' != typeof s.getBoundingClientRect && (r = s.getBoundingClientRect()),
						  (e = U(n)),
						  (f = d.clientTop || j.clientTop || 0),
						  (m = d.clientLeft || j.clientLeft || 0),
						  (p = e.pageYOffset || d.scrollTop),
						  (l = e.pageXOffset || d.scrollLeft),
						  { top: r.top + p - f, left: r.left + l - m })
						: r);
	};
	g.offset = {
		bodyOffset: function (b) {
			var c = b.offsetTop,
				d = b.offsetLeft;
			return (
				g.support.doesNotIncludeMarginInBodyOffset &&
					((c += parseFloat(g.css(b, 'marginTop')) || 0),
					(d += parseFloat(g.css(b, 'marginLeft')) || 0)),
				{ top: c, left: d }
			);
		},
		setOffset: function (b, c, d) {
			var j = g.css(b, 'position');
			'static' === j && (b.style.position = 'relative');
			var e = g(b),
				f = e.offset(),
				m = g.css(b, 'top'),
				p = g.css(b, 'left'),
				l = {},
				r = {},
				s,
				n;
			('absolute' === j || 'fixed' === j) && -1 < g.inArray('auto', [m, p])
				? ((r = e.position()), (s = r.top), (n = r.left))
				: ((s = parseFloat(m) || 0), (n = parseFloat(p) || 0));
			g.isFunction(c) && (c = c.call(b, d, f));
			null != c.top && (l.top = c.top - f.top + s);
			null != c.left && (l.left = c.left - f.left + n);
			'using' in c ? c.using.call(b, l) : e.css(l);
		}
	};
	g.fn.extend({
		position: function () {
			if (this[0]) {
				var b = this[0],
					c = this.offsetParent(),
					d = this.offset(),
					j = sc.test(c[0].nodeName) ? { top: 0, left: 0 } : c.offset();
				return (
					(d.top -= parseFloat(g.css(b, 'marginTop')) || 0),
					(d.left -= parseFloat(g.css(b, 'marginLeft')) || 0),
					(j.top += parseFloat(g.css(c[0], 'borderTopWidth')) || 0),
					(j.left += parseFloat(g.css(c[0], 'borderLeftWidth')) || 0),
					{ top: d.top - j.top, left: d.left - j.left }
				);
			}
		},
		offsetParent: function () {
			return this.map(function () {
				for (
					var b = this.offsetParent || u.body;
					b && !sc.test(b.nodeName) && 'static' === g.css(b, 'position');

				)
					b = b.offsetParent;
				return b || u.body;
			});
		}
	});
	g.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (b, d) {
		var j = /Y/.test(d);
		g.fn[b] = function (e) {
			return g.access(
				this,
				function (b, e, f) {
					var m = U(b);
					if (f === c) return m ? (d in m ? m[d] : m.document.documentElement[e]) : b[e];
					m ? m.scrollTo(j ? g(m).scrollLeft() : f, j ? f : g(m).scrollTop()) : (b[e] = f);
				},
				b,
				e,
				arguments.length,
				null
			);
		};
	});
	g.each({ Height: 'height', Width: 'width' }, function (b, d) {
		g.each({ padding: 'inner' + b, content: d, '': 'outer' + b }, function (j, e) {
			g.fn[e] = function (e, f) {
				var m = arguments.length && (j || 'boolean' != typeof e),
					p = j || (!0 === e || !0 === f ? 'margin' : 'border');
				return g.access(
					this,
					function (d, j, e) {
						var f;
						return g.isWindow(d)
							? d.document.documentElement['client' + b]
							: 9 === d.nodeType
							? ((f = d.documentElement),
							  Math.max(
									d.body['scroll' + b],
									f['scroll' + b],
									d.body['offset' + b],
									f['offset' + b],
									f['client' + b]
							  ))
							: e === c
							? g.css(d, j, e, p)
							: g.style(d, j, e, p);
					},
					d,
					m ? e : c,
					m,
					null
				);
			};
		});
	});
	b.jQuery = b.$ = g;
	'function' == typeof define &&
		define.amd &&
		define.amd.jQuery &&
		define('jquery', [], function () {
			return g;
		});
})(window);
var portraitMode = !0,
	mobilePortraitWidth = 480,
	mobilePortraitHeight = 640,
	mobileLandscapeWidth = 640,
	mobileLandscapeHeight = 480,
	mobileWidth = portraitMode ? mobilePortraitWidth : mobileLandscapeWidth,
	mobileHeight = portraitMode ? mobilePortraitHeight : mobileLandscapeHeight,
	desktopWidth = 640,
	desktopHeight = 640,
	w,
	h,
	multiplier,
	destW,
	destH,
	dynamicClickableEntityDivs = {},
	coreDivsToResize = ['game', 'play', 'orientate'],
	advancedDivsToResize = {
		MobileAdInGamePreroll: {
			'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 2,
			'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 20
		},
		MobileAdInGameEnd: {
			'box-width': _SETTINGS.Ad.Mobile.End.Width + 2,
			'box-height': _SETTINGS.Ad.Mobile.End.Height + 20
		},
		MobileAdInGamePreroll2: {
			'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 2,
			'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 20
		},
		MobileAdInGameEnd2: {
			'box-width': _SETTINGS.Ad.Mobile.End.Width + 2,
			'box-height': _SETTINGS.Ad.Mobile.End.Height + 20
		},
		MobileAdInGamePreroll3: {
			'box-width': _SETTINGS.Ad.Mobile.Preroll.Width + 2,
			'box-height': _SETTINGS.Ad.Mobile.Preroll.Height + 20
		},
		MobileAdInGameEnd3: {
			'box-width': _SETTINGS.Ad.Mobile.End.Width + 2,
			'box-height': _SETTINGS.Ad.Mobile.End.Height + 20
		}
	};
function adjustLayers(b) {
	for (i = 0; i < coreDivsToResize.length; i++)
		ig.ua.mobile
			? ($('#' + coreDivsToResize[i]).width(w), $('#' + coreDivsToResize[i]).height(h))
			: ($('#' + coreDivsToResize[i]).width(destW),
			  $('#' + coreDivsToResize[i]).height(destH),
			  $('#' + coreDivsToResize[i]).css('left', b ? 0 : w / 2 - destW / 2));
	for (key in advancedDivsToResize)
		try {
			$('#' + key).width(w),
				$('#' + key).height(h),
				$('#' + key + '-Box').css('left', (w - advancedDivsToResize[key]['box-width']) / 2),
				$('#' + key + '-Box').css('top', (h - advancedDivsToResize[key]['box-height']) / 2);
		} catch (c) {
			console.log(c);
		}
	$('#ajaxbar').width(w);
	$('#ajaxbar').height(h);
}
function sizeHandler() {
	if ($('#game')) {
		w = window.innerWidth;
		h = window.innerHeight;
		ig.ua.mobile
			? ((multiplier = Math.min(h / mobileHeight, w / mobileWidth)),
			  (destW = mobileWidth * multiplier),
			  (destH = mobileHeight * multiplier))
			: ((multiplier = Math.min(h / desktopHeight, w / desktopWidth)),
			  (destW = desktopWidth * multiplier),
			  (destH = desktopHeight * multiplier));
		widthRatio = window.innerWidth / mobileWidth;
		heightRatio = window.innerHeight / mobileHeight;
		adjustLayers();
		window.scrollTo(0, 1);
		for (var b = navigator.userAgent.split(' '), c = 0; c < b.length; c++) b[c].substr(0, 8);
		navigator.userAgent.indexOf('wv');
		navigator.userAgent.indexOf('SamsungBrowser');
	}
}
function orientationHandler() {
	console.log('changing orientation ...');
	ig.ua.mobile &&
		((
			portraitMode ? window.innerHeight < window.innerWidth : window.innerHeight > window.innerWidth
		)
			? ($('#orientate').show(), $('#game').hide())
			: ($('#orientate').hide(), $('#game').show()));
	sizeHandler();
}
function fixSamsungHandler() {
	ig.ua.android &&
		!(
			4.2 >
			parseFloat(
				navigator.userAgent.slice(
					navigator.userAgent.indexOf('Android') + 8,
					navigator.userAgent.indexOf('Android') + 11
				)
			)
		) &&
		!(0 > navigator.userAgent.indexOf('GT')) &&
		!(0 < navigator.userAgent.indexOf('Chrome')) &&
		!(0 < navigator.userAgent.indexOf('Firefox')) &&
		(document.addEventListener(
			'touchstart',
			function (b) {
				b.preventDefault();
				return !1;
			},
			!1
		),
		document.addEventListener(
			'touchmove',
			function (b) {
				b.preventDefault();
				return !1;
			},
			!1
		),
		document.addEventListener(
			'touchend',
			function (b) {
				b.preventDefault();
				return !1;
			},
			!1
		));
}
orientationTimeout = orientationInterval = null;
function orientationDelayHandler() {
	ig.ua.iOS
		? (null == orientationInterval &&
				(orientationInterval = window.setInterval(orientationHandler, 100)),
		  null == orientationTimeout &&
				(orientationTimeout = window.setTimeout(function () {
					clearAllIntervals();
				}, 2e3)))
		: orientationHandler();
}
function clearAllIntervals() {
	window.clearInterval(orientationInterval);
	orientationInterval = null;
	window.clearTimeout(orientationTimeout);
	orientationTimeout = null;
}
window.addEventListener('orientationchange', orientationDelayHandler);
window.addEventListener('resize', orientationDelayHandler);
document.ontouchmove = function (b) {
	window.scrollTo(0, 1);
	b.preventDefault();
};
function getInternetExplorerVersion() {
	var b = -1;
	'Microsoft Internet Explorer' == navigator.appName &&
		null != /MSIE ([0-9]{1,}[.0-9]{0,})/.exec(navigator.userAgent) &&
		(b = parseFloat(RegExp.$1));
	return b;
}
var ie = getInternetExplorerVersion();
function getQueryVariable(b) {
	for (var c = window.location.search.substring(1).split('&'), d = 0; d < c.length; d++) {
		var e = c[d].split('=');
		if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1]);
	}
}
this.jukebox = {};
jukebox.Player = function (b, c) {
	this.id = ++jukebox.__jukeboxId;
	this.origin = c || null;
	this.settings = {};
	for (var d in this.defaults) this.settings[d] = this.defaults[d];
	if ('[object Object]' === Object.prototype.toString.call(b))
		for (var e in b) this.settings[e] = b[e];
	'[object Function]' === Object.prototype.toString.call(jukebox.Manager) &&
		(jukebox.Manager = new jukebox.Manager());
	this.resource = this.isPlaying = null;
	this.resource =
		'[object Object]' === Object.prototype.toString.call(jukebox.Manager)
			? jukebox.Manager.getPlayableResource(this.settings.resources)
			: this.settings.resources[0] || null;
	if (null === this.resource)
		throw "Your browser can't playback the given resources - or you have missed to include jukebox.Manager";
	this.__init();
	return this;
};
jukebox.__jukeboxId = 0;
jukebox.Player.prototype = {
	defaults: {
		resources: [],
		autoplay: !1,
		spritemap: {},
		flashMediaElement: './swf/FlashMediaElement.swf',
		timeout: 1e3
	},
	__addToManager: function () {
		!0 !== this.__wasAddedToManager && (jukebox.Manager.add(this), (this.__wasAddedToManager = !0));
	},
	__init: function () {
		var b = this,
			c = this.settings,
			d = {},
			e;
		jukebox.Manager && void 0 !== jukebox.Manager.features && (d = jukebox.Manager.features);
		if (!0 === d.html5audio) {
			this.context = new Audio();
			this.context.src = this.resource;
			if (null === this.origin) {
				var f = function (c) {
					b.__addToManager(c);
				};
				this.context.addEventListener('canplaythrough', f, !0);
				window.setTimeout(function () {
					b.context.removeEventListener('canplaythrough', f, !0);
					f('timeout');
				}, c.timeout);
			}
			this.context.autobuffer = !0;
			this.context.preload = !0;
			for (e in this.HTML5API) this[e] = this.HTML5API[e];
			1 < d.channels
				? !0 === c.autoplay
					? (this.context.autoplay = !0)
					: void 0 !== c.spritemap[c.autoplay] && this.play(c.autoplay)
				: 1 === d.channels &&
				  void 0 !== c.spritemap[c.autoplay] &&
				  ((this.backgroundMusic = c.spritemap[c.autoplay]),
				  (this.backgroundMusic.started = Date.now ? Date.now() : +new Date()),
				  this.play(c.autoplay));
			1 == d.channels &&
				!0 !== c.canPlayBackground &&
				(window.addEventListener('pagehide', function () {
					null !== b.isPlaying && (b.pause(), (b.__wasAutoPaused = !0));
				}),
				window.addEventListener('pageshow', function () {
					b.__wasAutoPaused && (b.resume(), delete b._wasAutoPaused);
				}));
		} else if (!0 === d.flashaudio) {
			for (e in this.FLASHAPI) this[e] = this.FLASHAPI[e];
			d = [
				'id=jukebox-flashstream-' + this.id,
				'autoplay=' + c.autoplay,
				'file=' + window.encodeURIComponent(this.resource)
			];
			this.__initFlashContext(d);
			!0 === c.autoplay ? this.play(0) : c.spritemap[c.autoplay] && this.play(c.autoplay);
		} else throw 'Your Browser does not support Flash Audio or HTML5 Audio.';
	},
	__initFlashContext: function (b) {
		var c,
			d = this.settings.flashMediaElement,
			e,
			f = {
				flashvars: b.join('&'),
				quality: 'high',
				bgcolor: '#000000',
				wmode: 'transparent',
				allowscriptaccess: 'always',
				allowfullscreen: 'true'
			};
		if (navigator.userAgent.match(/MSIE/)) {
			c = document.createElement('div');
			document.getElementsByTagName('body')[0].appendChild(c);
			var l = document.createElement('object');
			l.id = 'jukebox-flashstream-' + this.id;
			l.setAttribute('type', 'application/x-shockwave-flash');
			l.setAttribute('classid', 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000');
			l.setAttribute('width', '0');
			l.setAttribute('height', '0');
			f.movie = d + '?x=' + (Date.now ? Date.now() : +new Date());
			f.flashvars = b.join('&amp;');
			for (e in f)
				(b = document.createElement('param')),
					b.setAttribute('name', e),
					b.setAttribute('value', f[e]),
					l.appendChild(b);
			c.outerHTML = l.outerHTML;
			this.context = document.getElementById('jukebox-flashstream-' + this.id);
		} else {
			c = document.createElement('embed');
			c.id = 'jukebox-flashstream-' + this.id;
			c.setAttribute('type', 'application/x-shockwave-flash');
			c.setAttribute('width', '100');
			c.setAttribute('height', '100');
			f.play = !1;
			f.loop = !1;
			f.src = d + '?x=' + (Date.now ? Date.now() : +new Date());
			for (e in f) c.setAttribute(e, f[e]);
			document.getElementsByTagName('body')[0].appendChild(c);
			this.context = c;
		}
	},
	backgroundHackForiOS: function () {
		if (void 0 !== this.backgroundMusic) {
			var b = Date.now ? Date.now() : +new Date();
			void 0 === this.backgroundMusic.started
				? ((this.backgroundMusic.started = b), this.setCurrentTime(this.backgroundMusic.start))
				: ((this.backgroundMusic.lastPointer =
						(((b - this.backgroundMusic.started) / 1e3) %
							(this.backgroundMusic.end - this.backgroundMusic.start)) +
						this.backgroundMusic.start),
				  this.play(this.backgroundMusic.lastPointer));
		}
	},
	play: function (b, c) {
		if (null !== this.isPlaying && !0 !== c)
			void 0 !== jukebox.Manager && jukebox.Manager.addToQueue(b, this.id);
		else {
			var d = this.settings.spritemap,
				e;
			if (void 0 !== d[b]) e = d[b].start;
			else if ('number' === typeof b) {
				e = b;
				for (var f in d)
					if (e >= d[f].start && e <= d[f].end) {
						b = f;
						break;
					}
			}
			void 0 !== e &&
				'[object Object]' === Object.prototype.toString.call(d[b]) &&
				((this.isPlaying = this.settings.spritemap[b]),
				this.context.play && this.context.play(),
				(this.wasReady = this.setCurrentTime(e)));
		}
	},
	stop: function () {
		this.__lastPosition = 0;
		this.isPlaying = null;
		this.backgroundMusic ? this.backgroundHackForiOS() : this.context.pause();
		return !0;
	},
	pause: function () {
		this.isPlaying = null;
		this.__lastPosition = this.getCurrentTime();
		this.context.pause();
		return this.__lastPosition;
	},
	resume: function (b) {
		b = 'number' === typeof b ? b : this.__lastPosition;
		if (null !== b) return this.play(b), (this.__lastPosition = null), !0;
		this.context.play();
		return !1;
	},
	HTML5API: {
		getVolume: function () {
			return this.context.volume || 1;
		},
		setVolume: function (b) {
			this.context.volume = b;
			return 1e-4 > Math.abs(this.context.volume - b) ? !0 : !1;
		},
		getCurrentTime: function () {
			return this.context.currentTime || 0;
		},
		setCurrentTime: function (b) {
			try {
				return (this.context.currentTime = b), !0;
			} catch (c) {
				return !1;
			}
		}
	},
	FLASHAPI: {
		getVolume: function () {
			return this.context && 'function' === typeof this.context.getVolume
				? this.context.getVolume()
				: 1;
		},
		setVolume: function (b) {
			return this.context && 'function' === typeof this.context.setVolume
				? (this.context.setVolume(b), !0)
				: !1;
		},
		getCurrentTime: function () {
			return this.context && 'function' === typeof this.context.getCurrentTime
				? this.context.getCurrentTime()
				: 0;
		},
		setCurrentTime: function (b) {
			return this.context && 'function' === typeof this.context.setCurrentTime
				? this.context.setCurrentTime(b)
				: !1;
		}
	}
};
if (void 0 === this.jukebox)
	throw 'jukebox.Manager requires jukebox.Player (Player.js) to run properly.';
jukebox.Manager = function (b) {
	this.features = {};
	this.codecs = {};
	this.__players = {};
	this.__playersLength = 0;
	this.__clones = {};
	this.__queue = [];
	this.settings = {};
	for (var c in this.defaults) this.settings[c] = this.defaults[c];
	if ('[object Object]' === Object.prototype.toString.call(b))
		for (var d in b) this.settings[d] = b[d];
	this.__detectFeatures();
	jukebox.Manager.__initialized =
		!1 === this.settings.useGameLoop
			? window.setInterval(function () {
					jukebox.Manager.loop();
			  }, 20)
			: !0;
};
jukebox.Manager.prototype = {
	defaults: { useFlash: !1, useGameLoop: !1 },
	__detectFeatures: function () {
		var b = window.Audio && new Audio();
		if (b && b.canPlayType && !1 === this.settings.useFlash) {
			for (
				var c = [
						{ e: '3gp', m: ['audio/3gpp', 'audio/amr'] },
						{ e: 'aac', m: ['audio/aac', 'audio/aacp'] },
						{ e: 'amr', m: ['audio/amr', 'audio/3gpp'] },
						{
							e: 'caf',
							m: ['audio/IMA-ADPCM', 'audio/x-adpcm', 'audio/x-aiff; codecs="IMA-ADPCM, ADPCM"']
						},
						{
							e: 'm4a',
							m: 'audio/mp4{audio/mp4; codecs="mp4a.40.2,avc1.42E01E"{audio/mpeg4{audio/mpeg4-generic{audio/mp4a-latm{audio/MP4A-LATM{audio/x-m4a'.split(
								'{'
							)
						},
						{
							e: 'mp3',
							m: [
								'audio/mp3',
								'audio/mpeg',
								'audio/mpeg; codecs="mp3"',
								'audio/MPA',
								'audio/mpa-robust'
							]
						},
						{ e: 'mpga', m: ['audio/MPA', 'audio/mpa-robust', 'audio/mpeg', 'video/mpeg'] },
						{ e: 'mp4', m: ['audio/mp4', 'video/mp4'] },
						{
							e: 'ogg',
							m: [
								'application/ogg',
								'audio/ogg',
								'audio/ogg; codecs="theora, vorbis"',
								'video/ogg',
								'video/ogg; codecs="theora, vorbis"'
							]
						},
						{
							e: 'wav',
							m: [
								'audio/wave',
								'audio/wav',
								'audio/wav; codecs="1"',
								'audio/x-wav',
								'audio/x-pn-wav'
							]
						},
						{ e: 'webm', m: ['audio/webm', 'audio/webm; codecs="vorbis"', 'video/webm'] }
					],
					d,
					e,
					f = 0,
					l = c.length;
				f < l;
				f++
			)
				if (((e = c[f].e), c[f].m.length && 'object' === typeof c[f].m))
					for (var n = 0, q = c[f].m.length; n < q; n++)
						if (((d = c[f].m[n]), '' !== b.canPlayType(d))) {
							this.codecs[e] = d;
							break;
						} else this.codecs[e] || (this.codecs[e] = !1);
			this.features.html5audio = !(
				!this.codecs.mp3 &&
				!this.codecs.ogg &&
				!this.codecs.webm &&
				!this.codecs.wav
			);
			this.features.channels = 8;
			b.volume = 0.1337;
			this.features.volume = !!(1e-4 > Math.abs(b.volume - 0.1337));
			navigator.userAgent.match(/iPhone|iPod|iPad/i) && (this.features.channels = 1);
		}
		this.features.flashaudio =
			!!navigator.mimeTypes['application/x-shockwave-flash'] ||
			!!navigator.plugins['Shockwave Flash'] ||
			!1;
		if (window.ActiveXObject)
			try {
				new ActiveXObject('ShockwaveFlash.ShockwaveFlash.10'), (this.features.flashaudio = !0);
			} catch (j) {}
		!0 === this.settings.useFlash && (this.features.flashaudio = !0);
		!0 === this.features.flashaudio &&
			!this.features.html5audio &&
			((this.codecs.mp3 = 'audio/mp3'),
			(this.codecs.mpga = 'audio/mpeg'),
			(this.codecs.mp4 = 'audio/mp4'),
			(this.codecs.m4a = 'audio/mp4'),
			(this.codecs['3gp'] = 'audio/3gpp'),
			(this.codecs.amr = 'audio/amr'),
			(this.features.volume = !0),
			(this.features.channels = 1));
	},
	__getPlayerById: function (b) {
		return this.__players && void 0 !== this.__players[b] ? this.__players[b] : null;
	},
	__getClone: function (b, c) {
		for (var d in this.__clones) {
			var e = this.__clones[d];
			if (null === e.isPlaying && e.origin === b) return e;
		}
		if ('[object Object]' === Object.prototype.toString.call(c)) {
			d = {};
			for (var f in c) d[f] = c[f];
			d.autoplay = !1;
			f = new jukebox.Player(d, b);
			f.isClone = !0;
			f.wasReady = !1;
			return (this.__clones[f.id] = f);
		}
		return null;
	},
	loop: function () {
		if (0 !== this.__playersLength)
			if (this.__queue.length && this.__playersLength < this.features.channels) {
				var b = this.__queue[0],
					c = this.__getPlayerById(b.origin);
				if (null !== c) {
					var d = this.__getClone(b.origin, c.settings);
					null !== d &&
						(!0 === this.features.volume &&
							(c = this.__players[b.origin]) &&
							d.setVolume(c.getVolume()),
						this.add(d),
						d.play(b.pointer, !0));
				}
				this.__queue.splice(0, 1);
			} else
				for (d in (this.__queue.length &&
					1 === this.features.channels &&
					((b = this.__queue[0]),
					(c = this.__getPlayerById(b.origin)),
					null !== c && c.play(b.pointer, !0),
					this.__queue.splice(0, 1)),
				this.__players))
					(b = this.__players[d]),
						(c = b.getCurrentTime() || 0),
						b.isPlaying && !1 === b.wasReady
							? (b.wasReady = b.setCurrentTime(b.isPlaying.start))
							: b.isPlaying && !0 === b.wasReady
							? c > b.isPlaying.end &&
							  (!0 === b.isPlaying.loop ? b.play(b.isPlaying.start, !0) : b.stop())
							: b.isClone && null === b.isPlaying
							? this.remove(b)
							: void 0 !== b.backgroundMusic &&
							  null === b.isPlaying &&
							  c > b.backgroundMusic.end &&
							  b.backgroundHackForiOS();
	},
	getPlayableResource: function (b) {
		'[object Array]' !== Object.prototype.toString.call(b) && (b = [b]);
		for (var c = 0, d = b.length; c < d; c++) {
			var e = b[c],
				f = e.match(/\.([^\.]*)$/)[1];
			if (f && this.codecs[f]) return e;
		}
		return null;
	},
	add: function (b) {
		return b instanceof jukebox.Player && void 0 === this.__players[b.id]
			? (this.__playersLength++, (this.__players[b.id] = b), !0)
			: !1;
	},
	remove: function (b) {
		return b instanceof jukebox.Player && void 0 !== this.__players[b.id]
			? (this.__playersLength--, delete this.__players[b.id], !0)
			: !1;
	},
	addToQueue: function (b, c) {
		return ('string' === typeof b || 'number' === typeof b) && void 0 !== this.__players[c]
			? (this.__queue.push({ pointer: b, origin: c }), !0)
			: !1;
	}
};
(function () {
	var b = function () {
		this.init();
	};
	b.prototype = {
		init: function () {
			var b = this || c;
			b._counter = 1e3;
			b._codecs = {};
			b._howls = [];
			b._muted = !1;
			b._volume = 1;
			b._canPlayEvent = 'canplaythrough';
			b._navigator = 'undefined' !== typeof window && window.navigator ? window.navigator : null;
			b.masterGain = null;
			b.noAudio = !1;
			b.usingWebAudio = !0;
			b.autoSuspend = !0;
			b.ctx = null;
			b.mobileAutoEnable = !0;
			b._setup();
			return b;
		},
		volume: function (b) {
			var d = this || c;
			b = parseFloat(b);
			d.ctx || q();
			if ('undefined' !== typeof b && 0 <= b && 1 >= b) {
				d._volume = b;
				if (d._muted) return d;
				d.usingWebAudio && d.masterGain.gain.setValueAtTime(b, c.ctx.currentTime);
				for (var e = 0; e < d._howls.length; e++)
					if (!d._howls[e]._webAudio)
						for (var f = d._howls[e]._getSoundIds(), l = 0; l < f.length; l++) {
							var n = d._howls[e]._soundById(f[l]);
							n && n._node && (n._node.volume = n._volume * b);
						}
				return d;
			}
			return d._volume;
		},
		mute: function (b) {
			var d = this || c;
			d.ctx || q();
			d._muted = b;
			d.usingWebAudio && d.masterGain.gain.setValueAtTime(b ? 0 : d._volume, c.ctx.currentTime);
			for (var e = 0; e < d._howls.length; e++)
				if (!d._howls[e]._webAudio)
					for (var f = d._howls[e]._getSoundIds(), l = 0; l < f.length; l++) {
						var n = d._howls[e]._soundById(f[l]);
						n && n._node && (n._node.muted = b ? !0 : n._muted);
					}
			return d;
		},
		unload: function () {
			for (var b = this || c, d = b._howls.length - 1; 0 <= d; d--) b._howls[d].unload();
			b.usingWebAudio &&
				b.ctx &&
				'undefined' !== typeof b.ctx.close &&
				(b.ctx.close(), (b.ctx = null), q());
			return b;
		},
		codecs: function (b) {
			return (this || c)._codecs[b.replace(/^x-/, '')];
		},
		_setup: function () {
			var b = this || c;
			b.state = b.ctx ? b.ctx.state || 'running' : 'running';
			b._autoSuspend();
			if (!b.usingWebAudio)
				if ('undefined' !== typeof Audio)
					try {
						var d = new Audio();
						'undefined' === typeof d.oncanplaythrough && (b._canPlayEvent = 'canplay');
					} catch (e) {
						b.noAudio = !0;
					}
				else b.noAudio = !0;
			try {
				(d = new Audio()), d.muted && (b.noAudio = !0);
			} catch (f) {}
			b.noAudio || b._setupCodecs();
			return b;
		},
		_setupCodecs: function () {
			var b = this || c,
				d = null;
			try {
				d = 'undefined' !== typeof Audio ? new Audio() : null;
			} catch (e) {
				return b;
			}
			if (!d || 'function' !== typeof d.canPlayType) return b;
			var f = d.canPlayType('audio/mpeg;').replace(/^no$/, ''),
				l = b._navigator && b._navigator.userAgent.match(/OPR\/([0-6].)/g),
				l = l && 33 > parseInt(l[0].split('/')[1], 10);
			b._codecs = {
				mp3: !(l || (!f && !d.canPlayType('audio/mp3;').replace(/^no$/, ''))),
				mpeg: !!f,
				opus: !!d.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
				ogg: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
				oga: !!d.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
				wav: !!d.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
				aac: !!d.canPlayType('audio/aac;').replace(/^no$/, ''),
				caf: !!d.canPlayType('audio/x-caf;').replace(/^no$/, ''),
				m4a: !!(
					d.canPlayType('audio/x-m4a;') ||
					d.canPlayType('audio/m4a;') ||
					d.canPlayType('audio/aac;')
				).replace(/^no$/, ''),
				mp4: !!(
					d.canPlayType('audio/x-mp4;') ||
					d.canPlayType('audio/mp4;') ||
					d.canPlayType('audio/aac;')
				).replace(/^no$/, ''),
				weba: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
				webm: !!d.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
				dolby: !!d.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
				flac: !!(d.canPlayType('audio/x-flac;') || d.canPlayType('audio/flac;')).replace(/^no$/, '')
			};
			return b;
		},
		_enableMobileAudio: function () {
			var b = this || c,
				d = /iPhone|iPad|iPod|Android|BlackBerry|BB10|Silk|Mobi/i.test(
					b._navigator && b._navigator.userAgent
				),
				e = !!(
					'ontouchend' in window ||
					(b._navigator && 0 < b._navigator.maxTouchPoints) ||
					(b._navigator && 0 < b._navigator.msMaxTouchPoints)
				);
			if (!b._mobileEnabled && b.ctx && (d || e)) {
				b._mobileEnabled = !1;
				!b._mobileUnloaded && 44100 !== b.ctx.sampleRate && ((b._mobileUnloaded = !0), b.unload());
				b._scratchBuffer = b.ctx.createBuffer(1, 1, 22050);
				var f = function () {
					c._autoResume();
					var d = b.ctx.createBufferSource();
					d.buffer = b._scratchBuffer;
					d.connect(b.ctx.destination);
					'undefined' === typeof d.start ? d.noteOn(0) : d.start(0);
					'function' === typeof b.ctx.resume && b.ctx.resume();
					d.onended = function () {
						d.disconnect(0);
						b._mobileEnabled = !0;
						b.mobileAutoEnable = !1;
						document.removeEventListener('touchstart', f, !0);
						document.removeEventListener('touchend', f, !0);
					};
				};
				document.addEventListener('touchstart', f, !0);
				document.addEventListener('touchend', f, !0);
				return b;
			}
		},
		_autoSuspend: function () {
			var b = this;
			if (b.autoSuspend && b.ctx && 'undefined' !== typeof b.ctx.suspend && c.usingWebAudio) {
				for (var d = 0; d < b._howls.length; d++)
					if (b._howls[d]._webAudio)
						for (var e = 0; e < b._howls[d]._sounds.length; e++)
							if (!b._howls[d]._sounds[e]._paused) return b;
				b._suspendTimer && clearTimeout(b._suspendTimer);
				b._suspendTimer = setTimeout(function () {
					b.autoSuspend &&
						((b._suspendTimer = null),
						(b.state = 'suspending'),
						b.ctx.suspend().then(function () {
							b.state = 'suspended';
							b._resumeAfterSuspend && (delete b._resumeAfterSuspend, b._autoResume());
						}));
				}, 3e4);
				return b;
			}
		},
		_autoResume: function () {
			var b = this;
			if (b.ctx && 'undefined' !== typeof b.ctx.resume && c.usingWebAudio)
				return (
					'running' === b.state && b._suspendTimer
						? (clearTimeout(b._suspendTimer), (b._suspendTimer = null))
						: 'suspended' === b.state
						? (b.ctx.resume().then(function () {
								b.state = 'running';
								for (var c = 0; c < b._howls.length; c++) b._howls[c]._emit('resume');
						  }),
						  b._suspendTimer && (clearTimeout(b._suspendTimer), (b._suspendTimer = null)))
						: 'suspending' === b.state && (b._resumeAfterSuspend = !0),
					b
				);
		}
	};
	var c = new b(),
		d = function (b) {
			!b.src || 0 === b.src.length
				? console.error('An array of source files must be passed with any new Howl.')
				: this.init(b);
		};
	d.prototype = {
		init: function (b) {
			var d = this;
			c.ctx || q();
			d._autoplay = b.autoplay || !1;
			d._format = 'string' !== typeof b.format ? b.format : [b.format];
			d._html5 = b.html5 || !1;
			d._muted = b.mute || !1;
			d._loop = b.loop || !1;
			d._pool = b.pool || 5;
			d._preload = 'boolean' === typeof b.preload ? b.preload : !0;
			d._rate = b.rate || 1;
			d._sprite = b.sprite || {};
			d._src = 'string' !== typeof b.src ? b.src : [b.src];
			d._volume = void 0 !== b.volume ? b.volume : 1;
			d._xhrWithCredentials = b.xhrWithCredentials || !1;
			d._duration = 0;
			d._state = 'unloaded';
			d._sounds = [];
			d._endTimers = {};
			d._queue = [];
			d._playLock = !1;
			d._onend = b.onend ? [{ fn: b.onend }] : [];
			d._onfade = b.onfade ? [{ fn: b.onfade }] : [];
			d._onload = b.onload ? [{ fn: b.onload }] : [];
			d._onloaderror = b.onloaderror ? [{ fn: b.onloaderror }] : [];
			d._onplayerror = b.onplayerror ? [{ fn: b.onplayerror }] : [];
			d._onpause = b.onpause ? [{ fn: b.onpause }] : [];
			d._onplay = b.onplay ? [{ fn: b.onplay }] : [];
			d._onstop = b.onstop ? [{ fn: b.onstop }] : [];
			d._onmute = b.onmute ? [{ fn: b.onmute }] : [];
			d._onvolume = b.onvolume ? [{ fn: b.onvolume }] : [];
			d._onrate = b.onrate ? [{ fn: b.onrate }] : [];
			d._onseek = b.onseek ? [{ fn: b.onseek }] : [];
			d._onresume = [];
			d._webAudio = c.usingWebAudio && !d._html5;
			'undefined' !== typeof c.ctx && c.ctx && c.mobileAutoEnable && c._enableMobileAudio();
			c._howls.push(d);
			d._autoplay &&
				d._queue.push({
					event: 'play',
					action: function () {
						d.play();
					}
				});
			d._preload && d.load();
			return d;
		},
		load: function () {
			var b = null;
			if (c.noAudio) this._emit('loaderror', null, 'No audio support.');
			else {
				'string' === typeof this._src && (this._src = [this._src]);
				for (var d = 0; d < this._src.length; d++) {
					var m, r;
					if (this._format && this._format[d]) m = this._format[d];
					else {
						r = this._src[d];
						if ('string' !== typeof r) {
							this._emit(
								'loaderror',
								null,
								'Non-string found in selected audio sources - ignoring.'
							);
							continue;
						}
						(m = /^data:audio\/([^;,]+);/i.exec(r)) || (m = /\.([^.]+)$/.exec(r.split('?', 1)[0]));
						m && (m = m[1].toLowerCase());
					}
					m ||
						console.warn(
							'No file extension was found. Consider using the "format" property or specify an extension.'
						);
					if (m && c.codecs(m)) {
						b = this._src[d];
						break;
					}
				}
				if (b) {
					this._src = b;
					this._state = 'loading';
					'https:' === window.location.protocol &&
						'http:' === b.slice(0, 5) &&
						((this._html5 = !0), (this._webAudio = !1));
					new e(this);
					if (this._webAudio) {
						var s = this,
							t = s._src;
						if (f[t]) (s._duration = f[t].duration), n(s);
						else if (/^data:[^;]+;base64,/.test(t)) {
							b = atob(t.split(',')[1]);
							d = new Uint8Array(b.length);
							for (m = 0; m < b.length; ++m) d[m] = b.charCodeAt(m);
							l(d.buffer, s);
						} else {
							var q = new XMLHttpRequest();
							q.open('GET', t, !0);
							q.withCredentials = s._xhrWithCredentials;
							q.responseType = 'arraybuffer';
							q.onload = function () {
								var b = (q.status + '')[0];
								'0' !== b && '2' !== b && '3' !== b
									? s._emit(
											'loaderror',
											null,
											'Failed loading audio file with status: ' + q.status + '.'
									  )
									: l(q.response, s);
							};
							q.onerror = function () {
								s._webAudio &&
									((s._html5 = !0), (s._webAudio = !1), (s._sounds = []), delete f[t], s.load());
							};
							try {
								q.send();
							} catch (B) {
								q.onerror();
							}
						}
					}
					return this;
				}
				this._emit('loaderror', null, 'No codec support for selected audio sources.');
			}
		},
		play: function (b, d) {
			var e = this,
				f = null;
			if ('number' === typeof b) (f = b), (b = null);
			else {
				if ('string' === typeof b && 'loaded' === e._state && !e._sprite[b]) return null;
				if ('undefined' === typeof b) {
					b = '__default';
					for (var l = 0, n = 0; n < e._sounds.length; n++)
						e._sounds[n]._paused && !e._sounds[n]._ended && (l++, (f = e._sounds[n]._id));
					1 === l ? (b = null) : (f = null);
				}
			}
			var q = f ? e._soundById(f) : e._inactiveSound();
			if (!q) return null;
			f && !b && (b = q._sprite || '__default');
			if ('loaded' !== e._state) {
				q._sprite = b;
				q._ended = !1;
				var B = q._id;
				e._queue.push({
					event: 'play',
					action: function () {
						e.play(B);
					}
				});
				return B;
			}
			if (f && !q._paused) return d || e._loadQueue('play'), q._id;
			e._webAudio && c._autoResume();
			var F = Math.max(0, 0 < q._seek ? q._seek : e._sprite[b][0] / 1e3),
				z = Math.max(0, (e._sprite[b][0] + e._sprite[b][1]) / 1e3 - F),
				ca = (1e3 * z) / Math.abs(q._rate);
			q._paused = !1;
			q._ended = !1;
			q._sprite = b;
			q._seek = F;
			q._start = e._sprite[b][0] / 1e3;
			q._stop = (e._sprite[b][0] + e._sprite[b][1]) / 1e3;
			q._loop = !(!q._loop && !e._sprite[b][2]);
			var A = q._node;
			if (e._webAudio)
				(f = function () {
					e._refreshBuffer(q);
					A.gain.setValueAtTime(q._muted || e._muted ? 0 : q._volume, c.ctx.currentTime);
					q._playStart = c.ctx.currentTime;
					'undefined' === typeof A.bufferSource.start
						? q._loop
							? A.bufferSource.noteGrainOn(0, F, 86400)
							: A.bufferSource.noteGrainOn(0, F, z)
						: q._loop
						? A.bufferSource.start(0, F, 86400)
						: A.bufferSource.start(0, F, z);
					Infinity !== ca && (e._endTimers[q._id] = setTimeout(e._ended.bind(e, q), ca));
					d ||
						setTimeout(function () {
							e._emit('play', q._id);
						}, 0);
				}),
					'running' === c.state ? f() : (e.once('resume', f), e._clearTimer(q._id));
			else {
				var xa = function () {
						A.currentTime = F;
						A.muted = q._muted || e._muted || c._muted || A.muted;
						A.volume = q._volume * c.volume();
						A.playbackRate = q._rate;
						try {
							var f = A.play();
							if ('undefined' !== typeof Promise && f instanceof Promise) {
								e._playLock = !0;
								var l = function () {
									e._playLock = !1;
									d || e._emit('play', q._id);
								};
								f.then(l, l);
							} else d || e._emit('play', q._id);
							A.playbackRate = q._rate;
							A.paused
								? e._emit(
										'playerror',
										q._id,
										'Playback was unable to start. This is most commonly an issue on mobile devices where playback was not within a user interaction.'
								  )
								: '__default' !== b || q._loop
								? (e._endTimers[q._id] = setTimeout(e._ended.bind(e, q), ca))
								: ((e._endTimers[q._id] = function () {
										e._ended(q);
										A.removeEventListener('ended', e._endTimers[q._id], !1);
								  }),
								  A.addEventListener('ended', e._endTimers[q._id], !1));
						} catch (r) {
							e._emit('playerror', q._id, r);
						}
					},
					f = (window && window.ejecta) || (!A.readyState && c._navigator.isCocoonJS);
				if (3 <= A.readyState || f) xa();
				else {
					var ra = function () {
						xa();
						A.removeEventListener(c._canPlayEvent, ra, !1);
					};
					A.addEventListener(c._canPlayEvent, ra, !1);
					e._clearTimer(q._id);
				}
			}
			return q._id;
		},
		pause: function (b, c) {
			var d = this;
			if ('loaded' !== d._state || d._playLock)
				return (
					d._queue.push({
						event: 'pause',
						action: function () {
							d.pause(b);
						}
					}),
					d
				);
			for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
				d._clearTimer(e[f]);
				var l = d._soundById(e[f]);
				if (
					l &&
					!l._paused &&
					((l._seek = d.seek(e[f])),
					(l._rateSeek = 0),
					(l._paused = !0),
					d._stopFade(e[f]),
					l._node)
				)
					if (d._webAudio) {
						if (!l._node.bufferSource) continue;
						'undefined' === typeof l._node.bufferSource.stop
							? l._node.bufferSource.noteOff(0)
							: l._node.bufferSource.stop(0);
						d._cleanBuffer(l._node);
					} else (!isNaN(l._node.duration) || Infinity === l._node.duration) && l._node.pause();
				c || d._emit('pause', l ? l._id : null);
			}
			return d;
		},
		stop: function (b, c) {
			var d = this;
			if ('loaded' !== d._state)
				return (
					d._queue.push({
						event: 'stop',
						action: function () {
							d.stop(b);
						}
					}),
					d
				);
			for (var e = d._getSoundIds(b), f = 0; f < e.length; f++) {
				d._clearTimer(e[f]);
				var l = d._soundById(e[f]);
				if (l) {
					l._seek = l._start || 0;
					l._rateSeek = 0;
					l._paused = !0;
					l._ended = !0;
					d._stopFade(e[f]);
					if (l._node)
						if (d._webAudio)
							l._node.bufferSource &&
								('undefined' === typeof l._node.bufferSource.stop
									? l._node.bufferSource.noteOff(0)
									: l._node.bufferSource.stop(0),
								d._cleanBuffer(l._node));
						else if (!isNaN(l._node.duration) || Infinity === l._node.duration)
							(l._node.currentTime = l._start || 0), l._node.pause();
					c || d._emit('stop', l._id);
				}
			}
			return d;
		},
		mute: function (b, d) {
			var e = this;
			if ('loaded' !== e._state)
				return (
					e._queue.push({
						event: 'mute',
						action: function () {
							e.mute(b, d);
						}
					}),
					e
				);
			if ('undefined' === typeof d)
				if ('boolean' === typeof b) e._muted = b;
				else return e._muted;
			for (var f = e._getSoundIds(d), l = 0; l < f.length; l++) {
				var n = e._soundById(f[l]);
				n &&
					((n._muted = b),
					n._interval && e._stopFade(n._id),
					e._webAudio && n._node
						? n._node.gain.setValueAtTime(b ? 0 : n._volume, c.ctx.currentTime)
						: n._node && (n._node.muted = c._muted ? !0 : b),
					e._emit('mute', n._id));
			}
			return e;
		},
		volume: function () {
			var b = this,
				d = arguments,
				e,
				f;
			if (0 === d.length) return b._volume;
			1 === d.length || (2 === d.length && 'undefined' === typeof d[1])
				? 0 <= b._getSoundIds().indexOf(d[0])
					? (f = parseInt(d[0], 10))
					: (e = parseFloat(d[0]))
				: 2 <= d.length && ((e = parseFloat(d[0])), (f = parseInt(d[1], 10)));
			var l;
			if ('undefined' !== typeof e && 0 <= e && 1 >= e) {
				if ('loaded' !== b._state)
					return (
						b._queue.push({
							event: 'volume',
							action: function () {
								b.volume.apply(b, d);
							}
						}),
						b
					);
				'undefined' === typeof f && (b._volume = e);
				f = b._getSoundIds(f);
				for (var n = 0; n < f.length; n++)
					if ((l = b._soundById(f[n])))
						(l._volume = e),
							d[2] || b._stopFade(f[n]),
							b._webAudio && l._node && !l._muted
								? l._node.gain.setValueAtTime(e, c.ctx.currentTime)
								: l._node && !l._muted && (l._node.volume = e * c.volume()),
							b._emit('volume', l._id);
			} else return (l = f ? b._soundById(f) : b._sounds[0]) ? l._volume : 0;
			return b;
		},
		fade: function (b, d, e, f) {
			var l = this;
			if ('loaded' !== l._state)
				return (
					l._queue.push({
						event: 'fade',
						action: function () {
							l.fade(b, d, e, f);
						}
					}),
					l
				);
			l.volume(b, f);
			for (var n = l._getSoundIds(f), q = 0; q < n.length; q++) {
				var B = l._soundById(n[q]);
				if (B) {
					f || l._stopFade(n[q]);
					if (l._webAudio && !B._muted) {
						var F = c.ctx.currentTime,
							z = F + e / 1e3;
						B._volume = b;
						B._node.gain.setValueAtTime(b, F);
						B._node.gain.linearRampToValueAtTime(d, z);
					}
					l._startFadeInterval(B, b, d, e, n[q], 'undefined' === typeof f);
				}
			}
			return l;
		},
		_startFadeInterval: function (b, c, d, e, f, l) {
			var n = this,
				q = c,
				F = d - c;
			f = Math.abs(F / 0.01);
			f = Math.max(4, 0 < f ? e / f : e);
			var z = Date.now();
			b._fadeTo = d;
			b._interval = setInterval(function () {
				var f = (Date.now() - z) / e;
				z = Date.now();
				q += F * f;
				q = Math.max(0, q);
				q = Math.min(1, q);
				q = Math.round(100 * q) / 100;
				n._webAudio ? (b._volume = q) : n.volume(q, b._id, !0);
				l && (n._volume = q);
				if ((d < c && q <= d) || (d > c && q >= d))
					clearInterval(b._interval),
						(b._interval = null),
						(b._fadeTo = null),
						n.volume(d, b._id),
						n._emit('fade', b._id);
			}, f);
		},
		_stopFade: function (b) {
			var d = this._soundById(b);
			d &&
				d._interval &&
				(this._webAudio && d._node.gain.cancelScheduledValues(c.ctx.currentTime),
				clearInterval(d._interval),
				(d._interval = null),
				this.volume(d._fadeTo, b),
				(d._fadeTo = null),
				this._emit('fade', b));
			return this;
		},
		loop: function () {
			var b = arguments,
				c,
				d;
			if (0 === b.length) return this._loop;
			if (1 === b.length)
				if ('boolean' === typeof b[0]) this._loop = c = b[0];
				else return (b = this._soundById(parseInt(b[0], 10))) ? b._loop : !1;
			else 2 === b.length && ((c = b[0]), (d = parseInt(b[1], 10)));
			d = this._getSoundIds(d);
			for (var e = 0; e < d.length; e++)
				if ((b = this._soundById(d[e])))
					if (
						((b._loop = c),
						this._webAudio && b._node && b._node.bufferSource && (b._node.bufferSource.loop = c))
					)
						(b._node.bufferSource.loopStart = b._start || 0),
							(b._node.bufferSource.loopEnd = b._stop);
			return this;
		},
		rate: function () {
			var b = this,
				d = arguments,
				e,
				f;
			0 === d.length
				? (f = b._sounds[0]._id)
				: 1 === d.length
				? 0 <= b._getSoundIds().indexOf(d[0])
					? (f = parseInt(d[0], 10))
					: (e = parseFloat(d[0]))
				: 2 === d.length && ((e = parseFloat(d[0])), (f = parseInt(d[1], 10)));
			var l;
			if ('number' === typeof e) {
				if ('loaded' !== b._state)
					return (
						b._queue.push({
							event: 'rate',
							action: function () {
								b.rate.apply(b, d);
							}
						}),
						b
					);
				'undefined' === typeof f && (b._rate = e);
				f = b._getSoundIds(f);
				for (var n = 0; n < f.length; n++)
					if ((l = b._soundById(f[n]))) {
						l._rateSeek = b.seek(f[n]);
						l._playStart = b._webAudio ? c.ctx.currentTime : l._playStart;
						l._rate = e;
						b._webAudio && l._node && l._node.bufferSource
							? l._node.bufferSource.playbackRate.setValueAtTime(e, c.ctx.currentTime)
							: l._node && (l._node.playbackRate = e);
						var q = b.seek(f[n]),
							q =
								(1e3 * ((b._sprite[l._sprite][0] + b._sprite[l._sprite][1]) / 1e3 - q)) /
								Math.abs(l._rate);
						if (b._endTimers[f[n]] || !l._paused)
							b._clearTimer(f[n]), (b._endTimers[f[n]] = setTimeout(b._ended.bind(b, l), q));
						b._emit('rate', l._id);
					}
			} else return (l = b._soundById(f)) ? l._rate : b._rate;
			return b;
		},
		seek: function () {
			var b = this,
				d = arguments,
				e,
				f;
			0 === d.length
				? (f = b._sounds[0]._id)
				: 1 === d.length
				? 0 <= b._getSoundIds().indexOf(d[0])
					? (f = parseInt(d[0], 10))
					: b._sounds.length && ((f = b._sounds[0]._id), (e = parseFloat(d[0])))
				: 2 === d.length && ((e = parseFloat(d[0])), (f = parseInt(d[1], 10)));
			if ('undefined' === typeof f) return b;
			if ('loaded' !== b._state)
				return (
					b._queue.push({
						event: 'seek',
						action: function () {
							b.seek.apply(b, d);
						}
					}),
					b
				);
			var l = b._soundById(f);
			if (l)
				if ('number' === typeof e && 0 <= e) {
					var n = b.playing(f);
					n && b.pause(f, !0);
					l._seek = e;
					l._ended = !1;
					b._clearTimer(f);
					n && b.play(f, !0);
					!b._webAudio && l._node && (l._node.currentTime = e);
					if (n && !b._webAudio) {
						var q = function () {
							b._playLock ? setTimeout(q, 0) : b._emit('seek', f);
						};
						setTimeout(q, 0);
					} else b._emit('seek', f);
				} else
					return b._webAudio
						? ((e = b.playing(f) ? c.ctx.currentTime - l._playStart : 0),
						  l._seek + ((l._rateSeek ? l._rateSeek - l._seek : 0) + e * Math.abs(l._rate)))
						: l._node.currentTime;
			return b;
		},
		playing: function (b) {
			if ('number' === typeof b) return (b = this._soundById(b)) ? !b._paused : !1;
			for (b = 0; b < this._sounds.length; b++) if (!this._sounds[b]._paused) return !0;
			return !1;
		},
		duration: function (b) {
			var c = this._duration;
			(b = this._soundById(b)) && (c = this._sprite[b._sprite][1] / 1e3);
			return c;
		},
		state: function () {
			return this._state;
		},
		unload: function () {
			for (var b = this._sounds, d = 0; d < b.length; d++)
				b[d]._paused || this.stop(b[d]._id),
					this._webAudio ||
						(/MSIE |Trident\//.test(c._navigator && c._navigator.userAgent) ||
							(b[d]._node.src =
								'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA'),
						b[d]._node.removeEventListener('error', b[d]._errorFn, !1),
						b[d]._node.removeEventListener(c._canPlayEvent, b[d]._loadFn, !1)),
					delete b[d]._node,
					this._clearTimer(b[d]._id);
			d = c._howls.indexOf(this);
			0 <= d && c._howls.splice(d, 1);
			b = !0;
			for (d = 0; d < c._howls.length; d++)
				if (c._howls[d]._src === this._src) {
					b = !1;
					break;
				}
			f && b && delete f[this._src];
			c.noAudio = !1;
			this._state = 'unloaded';
			this._sounds = [];
			return null;
		},
		on: function (b, c, d, e) {
			b = this['_on' + b];
			'function' === typeof c && b.push(e ? { id: d, fn: c, once: e } : { id: d, fn: c });
			return this;
		},
		off: function (b, c, d) {
			var e = this['_on' + b],
				f = 0;
			'number' === typeof c && ((d = c), (c = null));
			if (c || d)
				for (f = 0; f < e.length; f++) {
					if (((b = d === e[f].id), (c === e[f].fn && b) || (!c && b))) {
						e.splice(f, 1);
						break;
					}
				}
			else if (b) this['_on' + b] = [];
			else {
				c = Object.keys(this);
				for (f = 0; f < c.length; f++)
					0 === c[f].indexOf('_on') && Array.isArray(this[c[f]]) && (this[c[f]] = []);
			}
			return this;
		},
		once: function (b, c, d) {
			this.on(b, c, d, 1);
			return this;
		},
		_emit: function (b, c, d) {
			for (var e = this['_on' + b], f = e.length - 1; 0 <= f; f--)
				if (!e[f].id || e[f].id === c || 'load' === b)
					setTimeout(
						function (b) {
							b.call(this, c, d);
						}.bind(this, e[f].fn),
						0
					),
						e[f].once && this.off(b, e[f].fn, e[f].id);
			this._loadQueue(b);
			return this;
		},
		_loadQueue: function (b) {
			if (0 < this._queue.length) {
				var c = this._queue[0];
				c.event === b && (this._queue.shift(), this._loadQueue());
				b || c.action();
			}
			return this;
		},
		_ended: function (b) {
			var d = b._sprite;
			if (
				!this._webAudio &&
				b._node &&
				!b._node.paused &&
				!b._node.ended &&
				b._node.currentTime < b._stop
			)
				return setTimeout(this._ended.bind(this, b), 100), this;
			d = !(!b._loop && !this._sprite[d][2]);
			this._emit('end', b._id);
			!this._webAudio && d && this.stop(b._id, !0).play(b._id);
			if (this._webAudio && d) {
				this._emit('play', b._id);
				b._seek = b._start || 0;
				b._rateSeek = 0;
				b._playStart = c.ctx.currentTime;
				var e = (1e3 * (b._stop - b._start)) / Math.abs(b._rate);
				this._endTimers[b._id] = setTimeout(this._ended.bind(this, b), e);
			}
			this._webAudio &&
				!d &&
				((b._paused = !0),
				(b._ended = !0),
				(b._seek = b._start || 0),
				(b._rateSeek = 0),
				this._clearTimer(b._id),
				this._cleanBuffer(b._node),
				c._autoSuspend());
			!this._webAudio && !d && this.stop(b._id, !0);
			return this;
		},
		_clearTimer: function (b) {
			if (this._endTimers[b]) {
				if ('function' !== typeof this._endTimers[b]) clearTimeout(this._endTimers[b]);
				else {
					var c = this._soundById(b);
					c && c._node && c._node.removeEventListener('ended', this._endTimers[b], !1);
				}
				delete this._endTimers[b];
			}
			return this;
		},
		_soundById: function (b) {
			for (var c = 0; c < this._sounds.length; c++)
				if (b === this._sounds[c]._id) return this._sounds[c];
			return null;
		},
		_inactiveSound: function () {
			this._drain();
			for (var b = 0; b < this._sounds.length; b++)
				if (this._sounds[b]._ended) return this._sounds[b].reset();
			return new e(this);
		},
		_drain: function () {
			var b = this._pool,
				c = 0,
				d = 0;
			if (!(this._sounds.length < b)) {
				for (d = 0; d < this._sounds.length; d++) this._sounds[d]._ended && c++;
				for (d = this._sounds.length - 1; 0 <= d && !(c <= b); d--)
					this._sounds[d]._ended &&
						(this._webAudio && this._sounds[d]._node && this._sounds[d]._node.disconnect(0),
						this._sounds.splice(d, 1),
						c--);
			}
		},
		_getSoundIds: function (b) {
			if ('undefined' === typeof b) {
				b = [];
				for (var c = 0; c < this._sounds.length; c++) b.push(this._sounds[c]._id);
				return b;
			}
			return [b];
		},
		_refreshBuffer: function (b) {
			b._node.bufferSource = c.ctx.createBufferSource();
			b._node.bufferSource.buffer = f[this._src];
			b._panner ? b._node.bufferSource.connect(b._panner) : b._node.bufferSource.connect(b._node);
			if ((b._node.bufferSource.loop = b._loop))
				(b._node.bufferSource.loopStart = b._start || 0), (b._node.bufferSource.loopEnd = b._stop);
			b._node.bufferSource.playbackRate.setValueAtTime(b._rate, c.ctx.currentTime);
			return this;
		},
		_cleanBuffer: function (b) {
			if (c._scratchBuffer && b.bufferSource) {
				b.bufferSource.onended = null;
				b.bufferSource.disconnect(0);
				try {
					b.bufferSource.buffer = c._scratchBuffer;
				} catch (d) {}
			}
			b.bufferSource = null;
			return this;
		}
	};
	var e = function (b) {
		this._parent = b;
		this.init();
	};
	e.prototype = {
		init: function () {
			var b = this._parent;
			this._muted = b._muted;
			this._loop = b._loop;
			this._volume = b._volume;
			this._rate = b._rate;
			this._seek = 0;
			this._ended = this._paused = !0;
			this._sprite = '__default';
			this._id = ++c._counter;
			b._sounds.push(this);
			this.create();
			return this;
		},
		create: function () {
			var b = this._parent,
				d = c._muted || this._muted || this._parent._muted ? 0 : this._volume;
			b._webAudio
				? ((this._node =
						'undefined' === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain()),
				  this._node.gain.setValueAtTime(d, c.ctx.currentTime),
				  (this._node.paused = !0),
				  this._node.connect(c.masterGain))
				: ((this._node = new Audio()),
				  (this._errorFn = this._errorListener.bind(this)),
				  this._node.addEventListener('error', this._errorFn, !1),
				  (this._loadFn = this._loadListener.bind(this)),
				  this._node.addEventListener(c._canPlayEvent, this._loadFn, !1),
				  (this._node.src = b._src),
				  (this._node.preload = 'auto'),
				  (this._node.volume = d * c.volume()),
				  this._node.load());
			return this;
		},
		reset: function () {
			var b = this._parent;
			this._muted = b._muted;
			this._loop = b._loop;
			this._volume = b._volume;
			this._rate = b._rate;
			this._rateSeek = this._seek = 0;
			this._ended = this._paused = !0;
			this._sprite = '__default';
			this._id = ++c._counter;
			return this;
		},
		_errorListener: function () {
			this._parent._emit('loaderror', this._id, this._node.error ? this._node.error.code : 0);
			this._node.removeEventListener('error', this._errorFn, !1);
		},
		_loadListener: function () {
			var b = this._parent;
			b._duration = Math.ceil(10 * this._node.duration) / 10;
			0 === Object.keys(b._sprite).length && (b._sprite = { __default: [0, 1e3 * b._duration] });
			'loaded' !== b._state && ((b._state = 'loaded'), b._emit('load'), b._loadQueue());
			this._node.removeEventListener(c._canPlayEvent, this._loadFn, !1);
		}
	};
	var f = {},
		l = function (b, d) {
			c.ctx.decodeAudioData(
				b,
				function (b) {
					b && 0 < d._sounds.length && ((f[d._src] = b), n(d, b));
				},
				function () {
					d._emit('loaderror', null, 'Decoding audio data failed.');
				}
			);
		},
		n = function (b, c) {
			c && !b._duration && (b._duration = c.duration);
			0 === Object.keys(b._sprite).length && (b._sprite = { __default: [0, 1e3 * b._duration] });
			'loaded' !== b._state && ((b._state = 'loaded'), b._emit('load'), b._loadQueue());
		},
		q = function () {
			try {
				'undefined' !== typeof AudioContext
					? (c.ctx = new AudioContext())
					: 'undefined' !== typeof webkitAudioContext
					? (c.ctx = new webkitAudioContext())
					: (c.usingWebAudio = !1);
			} catch (b) {
				c.usingWebAudio = !1;
			}
			var d = /iP(hone|od|ad)/.test(c._navigator && c._navigator.platform),
				e = c._navigator && c._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
				e = e ? parseInt(e[1], 10) : null;
			if (
				d &&
				e &&
				9 > e &&
				((d = /safari/.test(c._navigator && c._navigator.userAgent.toLowerCase())),
				(c._navigator && c._navigator.standalone && !d) ||
					(c._navigator && !c._navigator.standalone && !d))
			)
				c.usingWebAudio = !1;
			c.usingWebAudio &&
				((c.masterGain =
					'undefined' === typeof c.ctx.createGain ? c.ctx.createGainNode() : c.ctx.createGain()),
				c.masterGain.gain.setValueAtTime(c._muted ? 0 : 1, c.ctx.currentTime),
				c.masterGain.connect(c.ctx.destination));
			c._setup();
		};
	'function' === typeof define &&
		define.amd &&
		define([], function () {
			return { Howler: c, Howl: d };
		});
	'undefined' !== typeof exports && ((exports.Howler = c), (exports.Howl = d));
	'undefined' !== typeof window
		? ((window.HowlerGlobal = b), (window.Howler = c), (window.Howl = d), (window.Sound = e))
		: 'undefined' !== typeof global &&
		  ((global.HowlerGlobal = b), (global.Howler = c), (global.Howl = d), (global.Sound = e));
})();
(function () {
	HowlerGlobal.prototype._pos = [0, 0, 0];
	HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];
	HowlerGlobal.prototype.stereo = function (b) {
		if (!this.ctx || !this.ctx.listener) return this;
		for (var c = this._howls.length - 1; 0 <= c; c--) this._howls[c].stereo(b);
		return this;
	};
	HowlerGlobal.prototype.pos = function (b, c, d) {
		if (!this.ctx || !this.ctx.listener) return this;
		c = 'number' !== typeof c ? this._pos[1] : c;
		d = 'number' !== typeof d ? this._pos[2] : d;
		if ('number' === typeof b)
			(this._pos = [b, c, d]),
				'undefined' !== typeof this.ctx.listener.positionX
					? (this.ctx.listener.positionX.setTargetAtTime(this._pos[0], Howler.ctx.currentTime, 0.1),
					  this.ctx.listener.positionY.setTargetAtTime(this._pos[1], Howler.ctx.currentTime, 0.1),
					  this.ctx.listener.positionZ.setTargetAtTime(this._pos[2], Howler.ctx.currentTime, 0.1))
					: this.ctx.listener.setPosition(this._pos[0], this._pos[1], this._pos[2]);
		else return this._pos;
		return this;
	};
	HowlerGlobal.prototype.orientation = function (b, c, d, e, j, p) {
		if (!this.ctx || !this.ctx.listener) return this;
		var m = this._orientation;
		c = 'number' !== typeof c ? m[1] : c;
		d = 'number' !== typeof d ? m[2] : d;
		e = 'number' !== typeof e ? m[3] : e;
		j = 'number' !== typeof j ? m[4] : j;
		p = 'number' !== typeof p ? m[5] : p;
		if ('number' === typeof b)
			(this._orientation = [b, c, d, e, j, p]),
				'undefined' !== typeof this.ctx.listener.forwardX
					? (this.ctx.listener.forwardX.setTargetAtTime(b, Howler.ctx.currentTime, 0.1),
					  this.ctx.listener.forwardY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1),
					  this.ctx.listener.forwardZ.setTargetAtTime(d, Howler.ctx.currentTime, 0.1),
					  this.ctx.listener.upX.setTargetAtTime(b, Howler.ctx.currentTime, 0.1),
					  this.ctx.listener.upY.setTargetAtTime(c, Howler.ctx.currentTime, 0.1),
					  this.ctx.listener.upZ.setTargetAtTime(d, Howler.ctx.currentTime, 0.1))
					: this.ctx.listener.setOrientation(b, c, d, e, j, p);
		else return m;
		return this;
	};
	var b = Howl.prototype.init;
	Howl.prototype.init = function (c) {
		this._orientation = c.orientation || [1, 0, 0];
		this._stereo = c.stereo || null;
		this._pos = c.pos || null;
		this._pannerAttr = {
			coneInnerAngle: 'undefined' !== typeof c.coneInnerAngle ? c.coneInnerAngle : 360,
			coneOuterAngle: 'undefined' !== typeof c.coneOuterAngle ? c.coneOuterAngle : 360,
			coneOuterGain: 'undefined' !== typeof c.coneOuterGain ? c.coneOuterGain : 0,
			distanceModel: 'undefined' !== typeof c.distanceModel ? c.distanceModel : 'inverse',
			maxDistance: 'undefined' !== typeof c.maxDistance ? c.maxDistance : 1e4,
			panningModel: 'undefined' !== typeof c.panningModel ? c.panningModel : 'HRTF',
			refDistance: 'undefined' !== typeof c.refDistance ? c.refDistance : 1,
			rolloffFactor: 'undefined' !== typeof c.rolloffFactor ? c.rolloffFactor : 1
		};
		this._onstereo = c.onstereo ? [{ fn: c.onstereo }] : [];
		this._onpos = c.onpos ? [{ fn: c.onpos }] : [];
		this._onorientation = c.onorientation ? [{ fn: c.onorientation }] : [];
		return b.call(this, c);
	};
	Howl.prototype.stereo = function (b, c) {
		var d = this;
		if (!d._webAudio) return d;
		if ('loaded' !== d._state)
			return (
				d._queue.push({
					event: 'stereo',
					action: function () {
						d.stereo(b, c);
					}
				}),
				d
			);
		var q = 'undefined' === typeof Howler.ctx.createStereoPanner ? 'spatial' : 'stereo';
		if ('undefined' === typeof c)
			if ('number' === typeof b) (d._stereo = b), (d._pos = [b, 0, 0]);
			else return d._stereo;
		for (var j = d._getSoundIds(c), p = 0; p < j.length; p++) {
			var m = d._soundById(j[p]);
			if (m)
				if ('number' === typeof b)
					(m._stereo = b),
						(m._pos = [b, 0, 0]),
						m._node &&
							((m._pannerAttr.panningModel = 'equalpower'),
							(!m._panner || !m._panner.pan) && e(m, q),
							'spatial' === q
								? 'undefined' !== typeof m._panner.positionX
									? (m._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime),
									  m._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime),
									  m._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime))
									: m._panner.setPosition(b, 0, 0)
								: m._panner.pan.setValueAtTime(b, Howler.ctx.currentTime)),
						d._emit('stereo', m._id);
				else return m._stereo;
		}
		return d;
	};
	Howl.prototype.pos = function (b, c, d, q) {
		var j = this;
		if (!j._webAudio) return j;
		if ('loaded' !== j._state)
			return (
				j._queue.push({
					event: 'pos',
					action: function () {
						j.pos(b, c, d, q);
					}
				}),
				j
			);
		c = 'number' !== typeof c ? 0 : c;
		d = 'number' !== typeof d ? -0.5 : d;
		if ('undefined' === typeof q)
			if ('number' === typeof b) j._pos = [b, c, d];
			else return j._pos;
		for (var p = j._getSoundIds(q), m = 0; m < p.length; m++) {
			var r = j._soundById(p[m]);
			if (r)
				if ('number' === typeof b)
					(r._pos = [b, c, d]),
						r._node &&
							((!r._panner || r._panner.pan) && e(r, 'spatial'),
							'undefined' !== typeof r._panner.positionX
								? (r._panner.positionX.setValueAtTime(b, Howler.ctx.currentTime),
								  r._panner.positionY.setValueAtTime(c, Howler.ctx.currentTime),
								  r._panner.positionZ.setValueAtTime(d, Howler.ctx.currentTime))
								: r._panner.setOrientation(b, c, d)),
						j._emit('pos', r._id);
				else return r._pos;
		}
		return j;
	};
	Howl.prototype.orientation = function (b, c, d, q) {
		var j = this;
		if (!j._webAudio) return j;
		if ('loaded' !== j._state)
			return (
				j._queue.push({
					event: 'orientation',
					action: function () {
						j.orientation(b, c, d, q);
					}
				}),
				j
			);
		c = 'number' !== typeof c ? j._orientation[1] : c;
		d = 'number' !== typeof d ? j._orientation[2] : d;
		if ('undefined' === typeof q)
			if ('number' === typeof b) j._orientation = [b, c, d];
			else return j._orientation;
		for (var p = j._getSoundIds(q), m = 0; m < p.length; m++) {
			var r = j._soundById(p[m]);
			if (r)
				if ('number' === typeof b)
					(r._orientation = [b, c, d]),
						r._node &&
							(r._panner || (r._pos || (r._pos = j._pos || [0, 0, -0.5]), e(r, 'spatial')),
							r._panner.orientationX.setValueAtTime(b, Howler.ctx.currentTime),
							r._panner.orientationY.setValueAtTime(c, Howler.ctx.currentTime),
							r._panner.orientationZ.setValueAtTime(d, Howler.ctx.currentTime)),
						j._emit('orientation', r._id);
				else return r._orientation;
		}
		return j;
	};
	Howl.prototype.pannerAttr = function () {
		var b = arguments,
			c,
			d;
		if (!this._webAudio) return this;
		if (0 === b.length) return this._pannerAttr;
		if (1 === b.length)
			if ('object' === typeof b[0])
				(c = b[0]),
					'undefined' === typeof d &&
						(c.pannerAttr ||
							(c.pannerAttr = {
								coneInnerAngle: c.coneInnerAngle,
								coneOuterAngle: c.coneOuterAngle,
								coneOuterGain: c.coneOuterGain,
								distanceModel: c.distanceModel,
								maxDistance: c.maxDistance,
								refDistance: c.refDistance,
								rolloffFactor: c.rolloffFactor,
								panningModel: c.panningModel
							}),
						(this._pannerAttr = {
							coneInnerAngle:
								'undefined' !== typeof c.pannerAttr.coneInnerAngle
									? c.pannerAttr.coneInnerAngle
									: this._coneInnerAngle,
							coneOuterAngle:
								'undefined' !== typeof c.pannerAttr.coneOuterAngle
									? c.pannerAttr.coneOuterAngle
									: this._coneOuterAngle,
							coneOuterGain:
								'undefined' !== typeof c.pannerAttr.coneOuterGain
									? c.pannerAttr.coneOuterGain
									: this._coneOuterGain,
							distanceModel:
								'undefined' !== typeof c.pannerAttr.distanceModel
									? c.pannerAttr.distanceModel
									: this._distanceModel,
							maxDistance:
								'undefined' !== typeof c.pannerAttr.maxDistance
									? c.pannerAttr.maxDistance
									: this._maxDistance,
							refDistance:
								'undefined' !== typeof c.pannerAttr.refDistance
									? c.pannerAttr.refDistance
									: this._refDistance,
							rolloffFactor:
								'undefined' !== typeof c.pannerAttr.rolloffFactor
									? c.pannerAttr.rolloffFactor
									: this._rolloffFactor,
							panningModel:
								'undefined' !== typeof c.pannerAttr.panningModel
									? c.pannerAttr.panningModel
									: this._panningModel
						}));
			else return (b = this._soundById(parseInt(b[0], 10))) ? b._pannerAttr : this._pannerAttr;
		else 2 === b.length && ((c = b[0]), (d = parseInt(b[1], 10)));
		d = this._getSoundIds(d);
		for (var q = 0; q < d.length; q++)
			if ((b = this._soundById(d[q]))) {
				var j = b._pannerAttr,
					j = {
						coneInnerAngle:
							'undefined' !== typeof c.coneInnerAngle ? c.coneInnerAngle : j.coneInnerAngle,
						coneOuterAngle:
							'undefined' !== typeof c.coneOuterAngle ? c.coneOuterAngle : j.coneOuterAngle,
						coneOuterGain:
							'undefined' !== typeof c.coneOuterGain ? c.coneOuterGain : j.coneOuterGain,
						distanceModel:
							'undefined' !== typeof c.distanceModel ? c.distanceModel : j.distanceModel,
						maxDistance: 'undefined' !== typeof c.maxDistance ? c.maxDistance : j.maxDistance,
						refDistance: 'undefined' !== typeof c.refDistance ? c.refDistance : j.refDistance,
						rolloffFactor:
							'undefined' !== typeof c.rolloffFactor ? c.rolloffFactor : j.rolloffFactor,
						panningModel: 'undefined' !== typeof c.panningModel ? c.panningModel : j.panningModel
					},
					p = b._panner;
				p
					? ((p.coneInnerAngle = j.coneInnerAngle),
					  (p.coneOuterAngle = j.coneOuterAngle),
					  (p.coneOuterGain = j.coneOuterGain),
					  (p.distanceModel = j.distanceModel),
					  (p.maxDistance = j.maxDistance),
					  (p.refDistance = j.refDistance),
					  (p.rolloffFactor = j.rolloffFactor),
					  (p.panningModel = j.panningModel))
					: (b._pos || (b._pos = this._pos || [0, 0, -0.5]), e(b, 'spatial'));
			}
		return this;
	};
	var c = Sound.prototype.init;
	Sound.prototype.init = function () {
		var b = this._parent;
		this._orientation = b._orientation;
		this._stereo = b._stereo;
		this._pos = b._pos;
		this._pannerAttr = b._pannerAttr;
		c.call(this);
		this._stereo
			? b.stereo(this._stereo)
			: this._pos && b.pos(this._pos[0], this._pos[1], this._pos[2], this._id);
	};
	var d = Sound.prototype.reset;
	Sound.prototype.reset = function () {
		var b = this._parent;
		this._orientation = b._orientation;
		this._stereo = b._stereo;
		this._pos = b._pos;
		this._pannerAttr = b._pannerAttr;
		this._stereo
			? b.stereo(this._stereo)
			: this._pos
			? b.pos(this._pos[0], this._pos[1], this._pos[2], this._id)
			: this._panner &&
			  (this._panner.disconnect(0), (this._panner = void 0), b._refreshBuffer(this));
		return d.call(this);
	};
	var e = function (b, c) {
		'spatial' === (c || 'spatial')
			? ((b._panner = Howler.ctx.createPanner()),
			  (b._panner.coneInnerAngle = b._pannerAttr.coneInnerAngle),
			  (b._panner.coneOuterAngle = b._pannerAttr.coneOuterAngle),
			  (b._panner.coneOuterGain = b._pannerAttr.coneOuterGain),
			  (b._panner.distanceModel = b._pannerAttr.distanceModel),
			  (b._panner.maxDistance = b._pannerAttr.maxDistance),
			  (b._panner.refDistance = b._pannerAttr.refDistance),
			  (b._panner.rolloffFactor = b._pannerAttr.rolloffFactor),
			  (b._panner.panningModel = b._pannerAttr.panningModel),
			  'undefined' !== typeof b._panner.positionX
					? (b._panner.positionX.setValueAtTime(b._pos[0], Howler.ctx.currentTime),
					  b._panner.positionY.setValueAtTime(b._pos[1], Howler.ctx.currentTime),
					  b._panner.positionZ.setValueAtTime(b._pos[2], Howler.ctx.currentTime))
					: b._panner.setPosition(b._pos[0], b._pos[1], b._pos[2]),
			  'undefined' !== typeof b._panner.orientationX
					? (b._panner.orientationX.setValueAtTime(b._orientation[0], Howler.ctx.currentTime),
					  b._panner.orientationY.setValueAtTime(b._orientation[1], Howler.ctx.currentTime),
					  b._panner.orientationZ.setValueAtTime(b._orientation[2], Howler.ctx.currentTime))
					: b._panner.setOrientation(b._orientation[0], b._orientation[1], b._orientation[2]))
			: ((b._panner = Howler.ctx.createStereoPanner()),
			  b._panner.pan.setValueAtTime(b._stereo, Howler.ctx.currentTime));
		b._panner.connect(b._node);
		b._paused || b._parent.pause(b._id, !0).play(b._id, !0);
	};
})();
!(function (b, c) {
	'object' == typeof exports && 'undefined' != typeof module
		? c()
		: 'function' == typeof define && define.amd
		? define(c)
		: c();
})(0, function () {
	function b(b) {
		var c = this.constructor;
		return this.then(
			function (d) {
				return c.resolve(b()).then(function () {
					return d;
				});
			},
			function (d) {
				return c.resolve(b()).then(function () {
					return c.reject(d);
				});
			}
		);
	}
	function c() {}
	function d(b) {
		if (!(this instanceof d)) throw new TypeError('Promises must be constructed via new');
		if ('function' != typeof b) throw new TypeError('not a function');
		this._state = 0;
		this._handled = !1;
		this._value = void 0;
		this._deferreds = [];
		q(b, this);
	}
	function e(b, c) {
		for (; 3 === b._state; ) b = b._value;
		0 !== b._state
			? ((b._handled = !0),
			  d._immediateFn(function () {
					var d = 1 === b._state ? c.onFulfilled : c.onRejected;
					if (null !== d) {
						var e;
						try {
							e = d(b._value);
						} catch (j) {
							return void l(c.promise, j);
						}
						f(c.promise, e);
					} else (1 === b._state ? f : l)(c.promise, b._value);
			  }))
			: b._deferreds.push(c);
	}
	function f(b, c) {
		try {
			if (c === b) throw new TypeError('A promise cannot be resolved with itself.');
			if (c && ('object' == typeof c || 'function' == typeof c)) {
				var e = c.then;
				if (c instanceof d) return (b._state = 3), (b._value = c), void n(b);
				if ('function' == typeof e)
					return void q(function () {
						e.apply(c, arguments);
					}, b);
			}
			b._state = 1;
			b._value = c;
			n(b);
		} catch (f) {
			l(b, f);
		}
	}
	function l(b, c) {
		b._state = 2;
		b._value = c;
		n(b);
	}
	function n(b) {
		2 === b._state &&
			0 === b._deferreds.length &&
			d._immediateFn(function () {
				b._handled || d._unhandledRejectionFn(b._value);
			});
		for (var c = 0, f = b._deferreds.length; f > c; c++) e(b, b._deferreds[c]);
		b._deferreds = null;
	}
	function q(b, c) {
		var d = !1;
		try {
			b(
				function (b) {
					d || ((d = !0), f(c, b));
				},
				function (b) {
					d || ((d = !0), l(c, b));
				}
			);
		} catch (e) {
			d || ((d = !0), l(c, e));
		}
	}
	var j = setTimeout;
	d.prototype['catch'] = function (b) {
		return this.then(null, b);
	};
	d.prototype.then = function (b, d) {
		var f = new this.constructor(c);
		return (
			e(
				this,
				new (function (b, c, d) {
					this.onFulfilled = 'function' == typeof b ? b : null;
					this.onRejected = 'function' == typeof c ? c : null;
					this.promise = d;
				})(b, d, f)
			),
			f
		);
	};
	d.prototype['finally'] = b;
	d.all = function (b) {
		return new d(function (c, d) {
			function e(b, l) {
				try {
					if (l && ('object' == typeof l || 'function' == typeof l)) {
						var m = l.then;
						if ('function' == typeof m)
							return void m.call(
								l,
								function (c) {
									e(b, c);
								},
								d
							);
					}
					f[b] = l;
					0 == --j && c(f);
				} catch (p) {
					d(p);
				}
			}
			if (!b || 'undefined' == typeof b.length) throw new TypeError('Promise.all accepts an array');
			var f = Array.prototype.slice.call(b);
			if (0 === f.length) return c([]);
			for (var j = f.length, l = 0; f.length > l; l++) e(l, f[l]);
		});
	};
	d.resolve = function (b) {
		return b && 'object' == typeof b && b.constructor === d
			? b
			: new d(function (c) {
					c(b);
			  });
	};
	d.reject = function (b) {
		return new d(function (c, d) {
			d(b);
		});
	};
	d.race = function (b) {
		return new d(function (c, d) {
			for (var e = 0, f = b.length; f > e; e++) b[e].then(c, d);
		});
	};
	d._immediateFn =
		('function' == typeof setImmediate &&
			function (b) {
				setImmediate(b);
			}) ||
		function (b) {
			j(b, 0);
		};
	d._unhandledRejectionFn = function (b) {
		void 0 !== console && console && console.warn('Possible Unhandled Promise Rejection:', b);
	};
	var p = (function () {
		if ('undefined' != typeof self) return self;
		if ('undefined' != typeof window) return window;
		if ('undefined' != typeof global) return global;
		throw Error('unable to locate global object');
	})();
	'Promise' in p
		? p.Promise.prototype['finally'] || (p.Promise.prototype['finally'] = b)
		: (p.Promise = d);
});
(function () {
	function b(b, c) {
		document.addEventListener ? b.addEventListener('scroll', c, !1) : b.attachEvent('scroll', c);
	}
	function c(b) {
		this.a = document.createElement('div');
		this.a.setAttribute('aria-hidden', 'true');
		this.a.appendChild(document.createTextNode(b));
		this.b = document.createElement('span');
		this.c = document.createElement('span');
		this.h = document.createElement('span');
		this.f = document.createElement('span');
		this.g = -1;
		this.b.style.cssText =
			'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;';
		this.c.style.cssText =
			'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;';
		this.f.style.cssText =
			'max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;';
		this.h.style.cssText =
			'display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;';
		this.b.appendChild(this.h);
		this.c.appendChild(this.f);
		this.a.appendChild(this.b);
		this.a.appendChild(this.c);
	}
	function d(b, c) {
		b.a.style.cssText =
			'max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:' +
			c +
			';';
	}
	function e(b) {
		var c = b.a.offsetWidth,
			d = c + 100;
		b.f.style.width = d + 'px';
		b.c.scrollLeft = d;
		b.b.scrollLeft = b.b.scrollWidth + 100;
		return b.g !== c ? ((b.g = c), !0) : !1;
	}
	function f(c, d) {
		function f() {
			var b = j;
			e(b) && b.a.parentNode && d(b.g);
		}
		var j = c;
		b(c.b, f);
		b(c.c, f);
		e(c);
	}
	function l(b, c) {
		var d = c || {};
		this.family = b;
		this.style = d.style || 'normal';
		this.weight = d.weight || 'normal';
		this.stretch = d.stretch || 'normal';
	}
	function n() {
		null === s && (s = !!document.fonts);
		return s;
	}
	function q() {
		if (null === r) {
			var b = document.createElement('div');
			try {
				b.style.font = 'condensed 100px sans-serif';
			} catch (c) {}
			r = '' !== b.style.font;
		}
		return r;
	}
	function j(b, c) {
		return [b.style, b.weight, q() ? b.stretch : '', '100px', c].join(' ');
	}
	var p = null,
		m = null,
		r = null,
		s = null;
	l.prototype.load = function (b, e) {
		var l = this,
			r = b || 'BESbswy',
			q = 0,
			s = e || 3e3,
			A = new Date().getTime();
		return new Promise(function (b, e) {
			var t;
			if ((t = n()))
				null === m &&
					(n() && /Apple/.test(window.navigator.vendor)
						? ((t = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
								window.navigator.userAgent
						  )),
						  (m = !!t && 603 > parseInt(t[1], 10)))
						: (m = !1)),
					(t = !m);
			if (t) {
				t = new Promise(function (b, c) {
					function d() {
						new Date().getTime() - A >= s
							? c(Error('' + s + 'ms timeout exceeded'))
							: document.fonts.load(j(l, '"' + l.family + '"'), r).then(function (c) {
									1 <= c.length ? b() : setTimeout(d, 25);
							  }, c);
					}
					d();
				});
				var y = new Promise(function (b, c) {
					q = setTimeout(function () {
						c(Error('' + s + 'ms timeout exceeded'));
					}, s);
				});
				Promise.race([y, t]).then(function () {
					clearTimeout(q);
					b(l);
				}, e);
			} else {
				var X = function () {
					function m() {
						var c;
						if ((c = (-1 != U && -1 != V) || (-1 != U && -1 != P) || (-1 != V && -1 != P)))
							(c = U != V && U != P && V != P) ||
								(null === p &&
									((c = /AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent)),
									(p =
										!!c &&
										(536 > parseInt(c[1], 10) ||
											(536 === parseInt(c[1], 10) && 11 >= parseInt(c[2], 10))))),
								(c =
									p &&
									((U == u && V == u && P == u) ||
										(U == X && V == X && P == X) ||
										(U == sa && V == sa && P == sa)))),
								(c = !c);
						c && (S.parentNode && S.parentNode.removeChild(S), clearTimeout(q), b(l));
					}
					function n() {
						if (new Date().getTime() - A >= s)
							S.parentNode && S.parentNode.removeChild(S), e(Error('' + s + 'ms timeout exceeded'));
						else {
							var b = document.hidden;
							if (!0 === b || void 0 === b)
								(U = t.a.offsetWidth), (V = y.a.offsetWidth), (P = Y.a.offsetWidth), m();
							q = setTimeout(n, 50);
						}
					}
					var t = new c(r),
						y = new c(r),
						Y = new c(r),
						U = -1,
						V = -1,
						P = -1,
						u = -1,
						X = -1,
						sa = -1,
						S = document.createElement('div');
					S.dir = 'ltr';
					d(t, j(l, 'sans-serif'));
					d(y, j(l, 'serif'));
					d(Y, j(l, 'monospace'));
					S.appendChild(t.a);
					S.appendChild(y.a);
					S.appendChild(Y.a);
					document.body.appendChild(S);
					u = t.a.offsetWidth;
					X = y.a.offsetWidth;
					sa = Y.a.offsetWidth;
					n();
					f(t, function (b) {
						U = b;
						m();
					});
					d(t, j(l, '"' + l.family + '",sans-serif'));
					f(y, function (b) {
						V = b;
						m();
					});
					d(y, j(l, '"' + l.family + '",serif'));
					f(Y, function (b) {
						P = b;
						m();
					});
					d(Y, j(l, '"' + l.family + '",monospace'));
				};
				document.body
					? X()
					: document.addEventListener
					? document.addEventListener('DOMContentLoaded', function Fa() {
							document.removeEventListener('DOMContentLoaded', Fa);
							X();
					  })
					: document.attachEvent('onreadystatechange', function Ha() {
							if ('interactive' == document.readyState || 'complete' == document.readyState)
								document.detachEvent('onreadystatechange', Ha), X();
					  });
			}
		});
	};
	'object' === typeof module
		? (module.exports = l)
		: ((window.FontFaceObserver = l), (window.FontFaceObserver.prototype.load = l.prototype.load));
})();
(function (b) {
	Number.prototype.map = function (b, c, d, e) {
		return d + (e - d) * ((this - b) / (c - b));
	};
	Number.prototype.limit = function (b, c) {
		return Math.min(c, Math.max(b, this));
	};
	Number.prototype.round = function (b) {
		b = Math.pow(10, b || 0);
		return Math.round(this * b) / b;
	};
	Number.prototype.floor = function () {
		return Math.floor(this);
	};
	Number.prototype.ceil = function () {
		return Math.ceil(this);
	};
	Number.prototype.toInt = function () {
		return this | 0;
	};
	Number.prototype.toRad = function () {
		return (this / 180) * Math.PI;
	};
	Number.prototype.toDeg = function () {
		return (180 * this) / Math.PI;
	};
	Array.prototype.erase = function (b) {
		for (var c = this.length; c--; ) this[c] === b && this.splice(c, 1);
		return this;
	};
	Array.prototype.random = function () {
		return this[Math.floor(Math.random() * this.length)];
	};
	Function.prototype.bind =
		Function.prototype.bind ||
		function (b) {
			var c = this;
			return function () {
				var d = Array.prototype.slice.call(arguments);
				return c.apply(b || null, d);
			};
		};
	b.ig = {
		game: null,
		debug: null,
		version: '1.20',
		global: b,
		modules: {},
		resources: [],
		ready: !1,
		baked: !1,
		nocache: '',
		ua: {},
		prefix: b.ImpactPrefix || '',
		lib: 'lib/',
		_current: null,
		_loadQueue: [],
		_waitForOnload: 0,
		$: function (b) {
			return '#' == b.charAt(0)
				? document.getElementById(b.substr(1))
				: document.getElementsByTagName(b);
		},
		$new: function (b) {
			return document.createElement(b);
		},
		copy: function (b) {
			if (!b || 'object' != typeof b || b instanceof HTMLElement || b instanceof ig.Class) return b;
			if (b instanceof Array)
				for (var c = [], d = 0, e = b.length; d < e; d++) c[d] = ig.copy(b[d]);
			else for (d in ((c = {}), b)) c[d] = ig.copy(b[d]);
			return c;
		},
		merge: function (b, c) {
			for (var d in c) {
				var e = c[d];
				if ('object' != typeof e || e instanceof HTMLElement || e instanceof ig.Class) b[d] = e;
				else {
					if (!b[d] || 'object' != typeof b[d]) b[d] = e instanceof Array ? [] : {};
					ig.merge(b[d], e);
				}
			}
			return b;
		},
		ksort: function (b) {
			if (!b || 'object' != typeof b) return [];
			var c = [],
				d = [],
				e;
			for (e in b) c.push(e);
			c.sort();
			for (e = 0; e < c.length; e++) d.push(b[c[e]]);
			return d;
		},
		setVendorAttribute: function (b, c, d) {
			var e = c.charAt(0).toUpperCase() + c.substr(1);
			b[c] = b['ms' + e] = b['moz' + e] = b['webkit' + e] = b['o' + e] = d;
		},
		getVendorAttribute: function (b, c) {
			var d = c.charAt(0).toUpperCase() + c.substr(1);
			return b[c] || b['ms' + d] || b['moz' + d] || b['webkit' + d] || b['o' + d];
		},
		normalizeVendorAttribute: function (b, c) {
			var d = ig.getVendorAttribute(b, c);
			!b[c] && d && (b[c] = d);
		},
		getImagePixels: function (b, c, d, e, f) {
			var l = ig.$new('canvas');
			l.width = b.width;
			l.height = b.height;
			var n = l.getContext('2d');
			ig.System.SCALE.CRISP(l, n);
			var q = ig.getVendorAttribute(n, 'backingStorePixelRatio') || 1;
			ig.normalizeVendorAttribute(n, 'getImageDataHD');
			var F = b.width / q,
				z = b.height / q;
			l.width = Math.ceil(F);
			l.height = Math.ceil(z);
			n.drawImage(b, 0, 0, F, z);
			return 1 === q ? n.getImageData(c, d, e, f) : n.getImageDataHD(c, d, e, f);
		},
		module: function (b) {
			if (ig._current) throw "Module '" + ig._current.name + "' defines nothing";
			if (ig.modules[b] && ig.modules[b].body) throw "Module '" + b + "' is already defined";
			ig._current = { name: b, requires: [], loaded: !1, body: null };
			ig.modules[b] = ig._current;
			ig._loadQueue.push(ig._current);
			return ig;
		},
		requires: function () {
			ig._current.requires = Array.prototype.slice.call(arguments);
			return ig;
		},
		defines: function (b) {
			ig._current.body = b;
			ig._current = null;
			ig._initDOMReady();
		},
		addResource: function (b) {
			ig.resources.push(b);
		},
		setNocache: function (b) {
			ig.nocache = b ? '?' + Date.now() : '';
		},
		log: function () {},
		assert: function () {},
		show: function () {},
		mark: function () {},
		_loadScript: function (b, c) {
			ig.modules[b] = { name: b, requires: [], loaded: !1, body: null };
			ig._waitForOnload++;
			var d = ig.prefix + ig.lib + b.replace(/\./g, '/') + '.js' + ig.nocache,
				e = ig.$new('script');
			e.type = 'text/javascript';
			e.src = d;
			e.onload = function () {
				ig._waitForOnload--;
				ig._execModules();
			};
			e.onerror = function () {
				throw 'Failed to load module ' + b + ' at ' + d + ' required from ' + c;
			};
			ig.$('head')[0].appendChild(e);
		},
		_execModules: function () {
			for (var b = !1, c = 0; c < ig._loadQueue.length; c++) {
				for (var d = ig._loadQueue[c], e = !0, f = 0; f < d.requires.length; f++) {
					var l = d.requires[f];
					ig.modules[l] ? ig.modules[l].loaded || (e = !1) : ((e = !1), ig._loadScript(l, d.name));
				}
				e && d.body && (ig._loadQueue.splice(c, 1), (d.loaded = !0), d.body(), (b = !0), c--);
			}
			if (b) ig._execModules();
			else if (!ig.baked && 0 == ig._waitForOnload && 0 != ig._loadQueue.length) {
				b = [];
				for (c = 0; c < ig._loadQueue.length; c++) {
					e = [];
					l = ig._loadQueue[c].requires;
					for (f = 0; f < l.length; f++) (d = ig.modules[l[f]]), (!d || !d.loaded) && e.push(l[f]);
					b.push(ig._loadQueue[c].name + ' (requires: ' + e.join(', ') + ')');
				}
				throw (
					"Unresolved (circular?) dependencies. Most likely there's a name/path mismatch for one of the listed modules:\n" +
					b.join('\n')
				);
			}
		},
		_DOMReady: function () {
			if (!ig.modules['dom.ready'].loaded) {
				if (!document.body) return setTimeout(ig._DOMReady, 13);
				ig.modules['dom.ready'].loaded = !0;
				ig._waitForOnload--;
				ig._execModules();
			}
			return 0;
		},
		_boot: function () {
			document.location.href.match(/\?nocache/) && ig.setNocache(!0);
			ig.ua.pixelRatio = b.devicePixelRatio || 1;
			ig.ua.viewport = { width: b.innerWidth, height: b.innerHeight };
			ig.ua.screen = {
				width: b.screen.availWidth * ig.ua.pixelRatio,
				height: b.screen.availHeight * ig.ua.pixelRatio
			};
			ig.ua.iPhone = /iPhone/i.test(navigator.userAgent);
			ig.ua.iPhone4 = ig.ua.iPhone && 2 == ig.ua.pixelRatio;
			ig.ua.iPad = /iPad/i.test(navigator.userAgent);
			ig.ua.android = /android/i.test(navigator.userAgent);
			ig.ua.is_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
			ig.ua.is_safari_or_uiwebview = /(iPhone|iPod|iPad).*AppleWebKit/i.test(navigator.userAgent);
			ig.ua.iOS = ig.ua.iPhone || ig.ua.iPad;
			ig.ua.iOS6_tag = /OS 6_/i.test(navigator.userAgent);
			ig.ua.iOS6 = (ig.ua.iPhone || ig.ua.iPad) && ig.ua.iOS6_tag;
			ig.ua.iOSgt5 =
				ig.ua.iOS && 5 < parseInt(navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/)[1]);
			ig.ua.HTCONE = /HTC_One/i.test(navigator.userAgent);
			ig.ua.winPhone = /Windows Phone/i.test(navigator.userAgent);
			ig.ua.Kindle = /Silk/i.test(navigator.userAgent);
			ig.ua.touchDevice = 'ontouchstart' in b || b.navigator.msMaxTouchPoints;
			ig.ua.mobile =
				ig.ua.iOS ||
				ig.ua.android ||
				ig.ua.iOS6 ||
				ig.ua.winPhone ||
				ig.ua.Kindle ||
				/mobile/i.test(navigator.userAgent);
		},
		_initDOMReady: function () {
			ig.modules['dom.ready']
				? ig._execModules()
				: (ig._boot(),
				  (ig.modules['dom.ready'] = { requires: [], loaded: !1, body: null }),
				  ig._waitForOnload++,
				  'complete' === document.readyState
						? ig._DOMReady()
						: (document.addEventListener('DOMContentLoaded', ig._DOMReady, !1),
						  b.addEventListener('load', ig._DOMReady, !1)));
		}
	};
	for (var c = ['ms', 'moz', 'webkit', 'o'], d = 0; d < c.length && !b.requestAnimationFrame; d++)
		b.requestAnimationFrame = b[c[d] + 'RequestAnimationFrame'];
	if (b.requestAnimationFrame) {
		var e = 1,
			f = {};
		b.ig.setAnimation = function (c, d) {
			var l = e++;
			f[l] = !0;
			var n = function () {
				f[l] && (b.requestAnimationFrame(n, d), c());
			};
			b.requestAnimationFrame(n, d);
			return l;
		};
		b.ig.clearAnimation = function (b) {
			delete f[b];
		};
	} else
		(b.ig.setAnimation = function (c) {
			return b.setInterval(c, 1e3 / 60);
		}),
			(b.ig.clearAnimation = function (c) {
				b.clearInterval(c);
			});
	var l = !1,
		n = /xyz/.test(function () {
			xyz;
		})
			? /\bparent\b/
			: /.*/;
	b.ig.Class = function () {};
	var q = function (b) {
		var c = this.prototype,
			d = {},
			e;
		for (e in b)
			'function' == typeof b[e] && 'function' == typeof c[e] && n.test(b[e])
				? ((d[e] = c[e]),
				  (c[e] = (function (b, c) {
						return function () {
							var e = this.parent;
							this.parent = d[b];
							var f = c.apply(this, arguments);
							this.parent = e;
							return f;
						};
				  })(e, b[e])))
				: (c[e] = b[e]);
	};
	b.ig.Class.extend = function (c) {
		function d() {
			if (!l) {
				if (this.staticInstantiate) {
					var b = this.staticInstantiate.apply(this, arguments);
					if (b) return b;
				}
				for (var c in this) 'object' == typeof this[c] && (this[c] = ig.copy(this[c]));
				this.init && this.init.apply(this, arguments);
			}
			return this;
		}
		var e = this.prototype;
		l = !0;
		var f = new this();
		l = !1;
		for (var s in c)
			f[s] =
				'function' == typeof c[s] && 'function' == typeof e[s] && n.test(c[s])
					? (function (b, c) {
							return function () {
								var d = this.parent;
								this.parent = e[b];
								var f = c.apply(this, arguments);
								this.parent = d;
								return f;
							};
					  })(s, c[s])
					: c[s];
		d.prototype = f;
		d.constructor = d;
		d.extend = b.ig.Class.extend;
		d.inject = q;
		return d;
	};
})(window);
ig.baked = !0;
ig.module('impact.image').defines(function () {
	ig.Image = ig.Class.extend({
		data: null,
		width: 0,
		height: 0,
		loaded: !1,
		failed: !1,
		loadCallback: null,
		path: '',
		staticInstantiate: function (b) {
			return ig.Image.cache[b] || null;
		},
		init: function (b) {
			this.path = b;
			this.load();
		},
		load: function (b) {
			this.loaded
				? b && b(this.path, !0)
				: (!this.loaded && ig.ready
						? ((this.loadCallback = b || null),
						  (this.data = new Image()),
						  (this.data.onload = this.onload.bind(this)),
						  (this.data.onerror = this.onerror.bind(this)),
						  (this.data.src = ig.prefix + this.path + ig.nocache))
						: ig.addResource(this),
				  (ig.Image.cache[this.path] = this));
		},
		reload: function () {
			this.loaded = !1;
			this.data = new Image();
			this.data.onload = this.onload.bind(this);
			this.data.src = this.path + '?' + Date.now();
		},
		onload: function () {
			this.width = this.data.width;
			this.height = this.data.height;
			this.loaded = !0;
			1 != ig.system.scale && this.resize(ig.system.scale);
			this.loadCallback && this.loadCallback(this.path, !0);
		},
		onerror: function () {
			this.failed = !0;
			this.loadCallback && this.loadCallback(this.path, !1);
		},
		resize: function (b) {
			var c = this.width * b,
				d = this.height * b,
				e = ig.$new('canvas');
			e.width = this.width;
			e.height = this.height;
			e = e.getContext('2d');
			e.drawImage(this.data, 0, 0, this.width, this.height, 0, 0, this.width, this.height);
			var e = e.getImageData(0, 0, this.width, this.height),
				f = ig.$new('canvas');
			f.width = c;
			f.height = d;
			for (var l = f.getContext('2d'), n = l.getImageData(0, 0, c, d), q = 0; q < d; q++)
				for (var j = 0; j < c; j++) {
					var p = 4 * (Math.floor(q / b) * this.width + Math.floor(j / b)),
						m = 4 * (q * c + j);
					n.data[m] = e.data[p];
					n.data[m + 1] = e.data[p + 1];
					n.data[m + 2] = e.data[p + 2];
					n.data[m + 3] = e.data[p + 3];
				}
			l.putImageData(n, 0, 0);
			this.data = f;
		},
		draw: function (b, c, d, e, f, l) {
			if (this.loaded) {
				var n = ig.system.scale;
				f = (f ? f : this.width) * n;
				l = (l ? l : this.height) * n;
				ig.system.context.drawImage(
					this.data,
					d ? d * n : 0,
					e ? e * n : 0,
					f,
					l,
					ig.system.getDrawPos(b),
					ig.system.getDrawPos(c),
					f,
					l
				);
				ig.Image.drawCount++;
			}
		},
		drawTile: function (b, c, d, e, f, l, n) {
			f = f ? f : e;
			if (this.loaded && !(e > this.width || f > this.height)) {
				var q = ig.system.scale,
					j = Math.floor(e * q),
					p = Math.floor(f * q),
					m = l ? -1 : 1,
					r = n ? -1 : 1;
				if (l || n) ig.system.context.save(), ig.system.context.scale(m, r);
				ig.system.context.drawImage(
					this.data,
					(Math.floor(d * e) % this.width) * q,
					Math.floor((d * e) / this.width) * f * q,
					j,
					p,
					ig.system.getDrawPos(b) * m - (l ? j : 0),
					ig.system.getDrawPos(c) * r - (n ? p : 0),
					j,
					p
				);
				(l || n) && ig.system.context.restore();
				ig.Image.drawCount++;
			}
		}
	});
	ig.Image.drawCount = 0;
	ig.Image.cache = {};
	ig.Image.reloadCache = function () {
		for (var b in ig.Image.cache) ig.Image.cache[b].reload();
	};
});
ig.baked = !0;
ig.module('impact.font')
	.requires('impact.image')
	.defines(function () {
		ig.Font = ig.Image.extend({
			widthMap: [],
			indices: [],
			firstChar: 32,
			alpha: 1,
			letterSpacing: 1,
			lineSpacing: 0,
			onload: function (b) {
				this._loadMetrics(this.data);
				this.parent(b);
			},
			widthForString: function (b) {
				if (-1 !== b.indexOf('\n')) {
					b = b.split('\n');
					for (var c = 0, d = 0; d < b.length; d++) c = Math.max(c, this._widthForLine(b[d]));
					return c;
				}
				return this._widthForLine(b);
			},
			_widthForLine: function (b) {
				for (var c = 0, d = 0; d < b.length; d++)
					c += this.widthMap[b.charCodeAt(d) - this.firstChar] + this.letterSpacing;
				return c;
			},
			heightForString: function (b) {
				return b.split('\n').length * (this.height + this.lineSpacing);
			},
			draw: function (b, c, d, e) {
				'string' != typeof b && (b = b.toString());
				if (-1 !== b.indexOf('\n')) {
					b = b.split('\n');
					for (var f = this.height + this.lineSpacing, l = 0; l < b.length; l++)
						this.draw(b[l], c, d + l * f, e);
				} else {
					if (e == ig.Font.ALIGN.RIGHT || e == ig.Font.ALIGN.CENTER)
						(l = this._widthForLine(b)), (c -= e == ig.Font.ALIGN.CENTER ? l / 2 : l);
					1 !== this.alpha && (ig.system.context.globalAlpha = this.alpha);
					for (l = 0; l < b.length; l++)
						(e = b.charCodeAt(l)), (c += this._drawChar(e - this.firstChar, c, d));
					1 !== this.alpha && (ig.system.context.globalAlpha = 1);
					ig.Image.drawCount += b.length;
				}
			},
			_drawChar: function (b, c, d) {
				if (!this.loaded || 0 > b || b >= this.indices.length) return 0;
				var e = ig.system.scale,
					f = this.widthMap[b] * e,
					l = (this.height - 2) * e;
				ig.system.context.drawImage(
					this.data,
					this.indices[b] * e,
					0,
					f,
					l,
					ig.system.getDrawPos(c),
					ig.system.getDrawPos(d),
					f,
					l
				);
				return this.widthMap[b] + this.letterSpacing;
			},
			_loadMetrics: function (b) {
				this.height = b.height - 1;
				this.widthMap = [];
				this.indices = [];
				for (
					var c = ig.getImagePixels(b, 0, b.height - 1, b.width, 1), d = 0, e = 0, f = 0;
					f < b.width;
					f++
				) {
					var l = 4 * f + 3;
					0 != c.data[l]
						? e++
						: 0 == c.data[l] &&
						  e &&
						  (this.widthMap.push(e), this.indices.push(f - e), d++, (e = 0));
				}
				this.widthMap.push(e);
				this.indices.push(f - e);
			}
		});
		ig.Font.ALIGN = { LEFT: 0, RIGHT: 1, CENTER: 2 };
	});
ig.baked = !0;
ig.module('impact.sound').defines(function () {
	ig.SoundManager = ig.Class.extend({
		clips: {},
		volume: 1,
		format: null,
		init: function () {
			for (var b = new Audio(), c = 0; c < ig.Sound.use.length; c++) {
				var d = ig.Sound.use[c];
				if (b.canPlayType(d.mime)) {
					this.format = d;
					break;
				}
			}
			this.format || (ig.Sound.enabled = !1);
		},
		load: function (b, c, d) {
			var e = ig.prefix + b.replace(/[^\.]+$/, this.format.ext) + ig.nocache;
			if (this.clips[b]) {
				if (c && this.clips[b].length < ig.Sound.channels)
					for (c = this.clips[b].length; c < ig.Sound.channels; c++) {
						var f = new Audio(e);
						f.load();
						this.clips[b].push(f);
					}
				return this.clips[b][0];
			}
			var l = new Audio(e);
			d &&
				(l.addEventListener(
					'canplaythrough',
					function q(c) {
						l.removeEventListener('canplaythrough', q, !1);
						d(b, !0, c);
					},
					!1
				),
				l.addEventListener(
					'error',
					function (c) {
						d(b, !0, c);
					},
					!1
				));
			l.preload = 'auto';
			l.load();
			this.clips[b] = [l];
			if (c)
				for (c = 1; c < ig.Sound.channels; c++) (f = new Audio(e)), f.load(), this.clips[b].push(f);
			return l;
		},
		get: function (b) {
			b = this.clips[b];
			for (var c = 0, d; (d = b[c++]); )
				if (d.paused || d.ended) return d.ended && (d.currentTime = 0), d;
			b[0].pause();
			b[0].currentTime = 0;
			return b[0];
		}
	});
	ig.Music = ig.Class.extend({
		tracks: [],
		namedTracks: {},
		currentTrack: null,
		currentIndex: 0,
		random: !1,
		_volume: 1,
		_loop: !1,
		_fadeInterval: 0,
		_fadeTimer: null,
		_endedCallbackBound: null,
		init: function () {
			this._endedCallbackBound = this._endedCallback.bind(this);
			Object.defineProperty
				? (Object.defineProperty(this, 'volume', {
						get: this.getVolume.bind(this),
						set: this.setVolume.bind(this)
				  }),
				  Object.defineProperty(this, 'loop', {
						get: this.getLooping.bind(this),
						set: this.setLooping.bind(this)
				  }))
				: this.__defineGetter__ &&
				  (this.__defineGetter__('volume', this.getVolume.bind(this)),
				  this.__defineSetter__('volume', this.setVolume.bind(this)),
				  this.__defineGetter__('loop', this.getLooping.bind(this)),
				  this.__defineSetter__('loop', this.setLooping.bind(this)));
		},
		add: function (b, c) {
			if (ig.Sound.enabled) {
				var d = ig.soundManager.load(b instanceof ig.Sound ? b.path : b, !1);
				d.loop = this._loop;
				d.volume = this._volume;
				d.addEventListener('ended', this._endedCallbackBound, !1);
				this.tracks.push(d);
				c && (this.namedTracks[c] = d);
				this.currentTrack || (this.currentTrack = d);
			}
		},
		next: function () {
			this.tracks.length &&
				(this.stop(),
				(this.currentIndex = this.random
					? Math.floor(Math.random() * this.tracks.length)
					: (this.currentIndex + 1) % this.tracks.length),
				(this.currentTrack = this.tracks[this.currentIndex]),
				this.play());
		},
		pause: function () {
			this.currentTrack && this.currentTrack.pause();
		},
		stop: function () {
			if (this.currentTrack) {
				this.currentTrack.pause();
				try {
					this.currentTrack.currentTime = 0;
				} catch (b) {
					console.log(b);
				}
			}
		},
		play: function (b) {
			if (b && this.namedTracks[b])
				(b = this.namedTracks[b]), b != this.currentTrack && (this.stop(), (this.currentTrack = b));
			else if (!this.currentTrack) return;
			this.currentTrack.play();
		},
		getLooping: function () {
			return this._loop;
		},
		setLooping: function (b) {
			this._loop = b;
			for (var c in this.tracks) this.tracks[c].loop = b;
		},
		getVolume: function () {
			return this._volume;
		},
		setVolume: function (b) {
			this._volume = b.limit(0, 1);
			for (var c in this.tracks) this.tracks[c].volume = this._volume;
		},
		fadeOut: function (b) {
			this.currentTrack &&
				(clearInterval(this._fadeInterval),
				(this.fadeTimer = new ig.Timer(b)),
				(this._fadeInterval = setInterval(this._fadeStep.bind(this), 50)));
		},
		_fadeStep: function () {
			var b =
				this.fadeTimer.delta().map(-this.fadeTimer.target, 0, 1, 0).limit(0, 1) * this._volume;
			0.01 >= b
				? (this.stop(),
				  (this.currentTrack.volume = this._volume),
				  clearInterval(this._fadeInterval))
				: (this.currentTrack.volume = b);
		},
		_endedCallback: function () {
			this._loop ? this.play() : this.next();
		}
	});
	ig.Sound = ig.Class.extend({
		path: '',
		volume: 1,
		currentClip: null,
		multiChannel: !0,
		init: function (b, c) {
			this.path = b;
			this.multiChannel = !1 !== c;
			this.load();
		},
		load: function (b) {
			ig.Sound.enabled
				? ig.ready
					? ig.soundManager.load(this.path, this.multiChannel, b)
					: ig.addResource(this)
				: b && b(this.path, !0);
		},
		play: function () {
			ig.Sound.enabled &&
				((this.currentClip = ig.soundManager.get(this.path)),
				(this.currentClip.volume = ig.soundManager.volume * this.volume),
				this.currentClip.play());
		},
		stop: function () {
			this.currentClip && (this.currentClip.pause(), (this.currentClip.currentTime = 0));
		}
	});
	ig.Sound.FORMAT = {
		MP3: { ext: 'mp3', mime: 'audio/mpeg' },
		M4A: { ext: 'm4a', mime: 'audio/mp4; codecs=mp4a' },
		OGG: { ext: 'ogg', mime: 'audio/ogg; codecs=vorbis' },
		WEBM: { ext: 'webm', mime: 'audio/webm; codecs=vorbis' },
		CAF: { ext: 'caf', mime: 'audio/x-caf' }
	};
	ig.Sound.use = [ig.Sound.FORMAT.MP3, ig.Sound.FORMAT.OGG];
	ig.Sound.channels = 4;
	ig.Sound.enabled = !0;
});
ig.baked = !0;
ig.module('impact.loader')
	.requires('impact.image', 'impact.font', 'impact.sound')
	.defines(function () {
		ig.Loader = ig.Class.extend({
			resources: [],
			gameClass: null,
			status: 0,
			done: !1,
			_unloaded: [],
			_drawStatus: 0,
			_intervalId: 0,
			_loadCallbackBound: null,
			init: function (b, c) {
				this.gameClass = b;
				this.resources = c;
				this._loadCallbackBound = this._loadCallback.bind(this);
				for (var d = 0; d < this.resources.length; d++) this._unloaded.push(this.resources[d].path);
			},
			load: function () {
				ig.system.clear('#000');
				if (this.resources.length) {
					for (var b = 0; b < this.resources.length; b++) this.loadResource(this.resources[b]);
					this._intervalId = setInterval(this.draw.bind(this), 16);
				} else this.end();
			},
			loadResource: function (b) {
				b.load(this._loadCallbackBound);
			},
			end: function () {
				this.done || ((this.done = !0), clearInterval(this._intervalId));
			},
			draw: function () {},
			_loadCallback: function (b, c) {
				if (c) this._unloaded.erase(b);
				else throw 'Failed to load resource: ' + b;
				this.status = 1 - this._unloaded.length / this.resources.length;
				0 == this._unloaded.length && setTimeout(this.end.bind(this), 250);
			}
		});
	});
ig.baked = !0;
ig.module('impact.timer').defines(function () {
	ig.Timer = ig.Class.extend({
		target: 0,
		base: 0,
		last: 0,
		pausedAt: 0,
		init: function (b) {
			this.last = this.base = ig.Timer.time;
			this.target = b || 0;
		},
		set: function (b) {
			this.target = b || 0;
			this.base = ig.Timer.time;
			this.pausedAt = 0;
		},
		reset: function () {
			this.base = ig.Timer.time;
			this.pausedAt = 0;
		},
		tick: function () {
			var b = ig.Timer.time - this.last;
			this.last = ig.Timer.time;
			return this.pausedAt ? 0 : b;
		},
		delta: function () {
			return (this.pausedAt || ig.Timer.time) - this.base - this.target;
		},
		pause: function () {
			this.pausedAt || (this.pausedAt = ig.Timer.time);
		},
		unpause: function () {
			this.pausedAt && ((this.base += ig.Timer.time - this.pausedAt), (this.pausedAt = 0));
		}
	});
	ig.Timer._last = 0;
	ig.Timer.time = 0;
	ig.Timer.timeScale = 1;
	ig.Timer.maxStep = 0.05;
	ig.Timer.step = function () {
		var b = Date.now();
		ig.Timer.time += Math.min((b - ig.Timer._last) / 1e3, ig.Timer.maxStep) * ig.Timer.timeScale;
		ig.Timer._last = b;
	};
});
ig.baked = !0;
ig.module('impact.system')
	.requires('impact.timer', 'impact.image')
	.defines(function () {
		ig.System = ig.Class.extend({
			fps: 30,
			width: 320,
			height: 240,
			realWidth: 320,
			realHeight: 240,
			scale: 1,
			tick: 0,
			animationId: 0,
			newGameClass: null,
			running: !1,
			delegate: null,
			clock: null,
			canvas: null,
			context: null,
			init: function (b, c, d, e, f) {
				this.fps = c;
				this.clock = new ig.Timer();
				this.canvas = ig.$(b);
				this.resize(d, e, f);
				this.context = this.canvas.getContext('2d');
				this.getDrawPos = ig.System.drawMode;
			},
			resize: function (b, c, d) {
				this.width = b;
				this.height = c;
				this.scale = d || this.scale;
				this.realWidth = this.width * this.scale;
				this.realHeight = this.height * this.scale;
				this.canvas.width = this.realWidth;
				this.canvas.height = this.realHeight;
			},
			setGame: function (b) {
				this.running ? (this.newGameClass = b) : this.setGameNow(b);
			},
			setGameNow: function (b) {
				ig.game = new b();
				ig.system.setDelegate(ig.game);
			},
			setDelegate: function (b) {
				if ('function' == typeof b.run) (this.delegate = b), this.startRunLoop();
				else throw 'System.setDelegate: No run() function in object';
			},
			stopRunLoop: function () {
				ig.clearAnimation(this.animationId);
				this.running = !1;
			},
			startRunLoop: function () {
				this.stopRunLoop();
				this.animationId = ig.setAnimation(this.run.bind(this), this.canvas);
				this.running = !0;
			},
			clear: function (b) {
				this.context.fillStyle = b;
				this.context.fillRect(0, 0, this.realWidth, this.realHeight);
			},
			run: function () {
				ig.Timer.step();
				this.tick = this.clock.tick();
				this.delegate.run();
				ig.input.clearPressed();
				this.newGameClass && (this.setGameNow(this.newGameClass), (this.newGameClass = null));
			},
			getDrawPos: null
		});
		ig.System.DRAW = {
			AUTHENTIC: function (b) {
				return Math.round(b) * this.scale;
			},
			SMOOTH: function (b) {
				return Math.round(b * this.scale);
			},
			SUBPIXEL: function (b) {
				return b * this.scale;
			}
		};
		ig.System.drawMode = ig.System.DRAW.SMOOTH;
		ig.System.SCALE = {
			CRISP: function (b, c) {
				ig.setVendorAttribute(c, 'imageSmoothingEnabled', !1);
				b.style.imageRendering = '-moz-crisp-edges';
				b.style.imageRendering = '-o-crisp-edges';
				b.style.imageRendering = '-webkit-optimize-contrast';
				b.style.imageRendering = 'crisp-edges';
				b.style.msInterpolationMode = 'nearest-neighbor';
			},
			SMOOTH: function (b, c) {
				ig.setVendorAttribute(c, 'imageSmoothingEnabled', !0);
				b.style.imageRendering = '';
				b.style.msInterpolationMode = '';
			}
		};
		ig.System.scaleMode = ig.System.SCALE.SMOOTH;
	});
ig.baked = !0;
ig.module('impact.input').defines(function () {
	ig.KEY = {
		MOUSE1: -1,
		MOUSE2: -3,
		MWHEEL_UP: -4,
		MWHEEL_DOWN: -5,
		BACKSPACE: 8,
		TAB: 9,
		ENTER: 13,
		PAUSE: 19,
		CAPS: 20,
		ESC: 27,
		SPACE: 32,
		PAGE_UP: 33,
		PAGE_DOWN: 34,
		END: 35,
		HOME: 36,
		LEFT_ARROW: 37,
		UP_ARROW: 38,
		RIGHT_ARROW: 39,
		DOWN_ARROW: 40,
		INSERT: 45,
		DELETE: 46,
		_0: 48,
		_1: 49,
		_2: 50,
		_3: 51,
		_4: 52,
		_5: 53,
		_6: 54,
		_7: 55,
		_8: 56,
		_9: 57,
		A: 65,
		B: 66,
		C: 67,
		D: 68,
		E: 69,
		F: 70,
		G: 71,
		H: 72,
		I: 73,
		J: 74,
		K: 75,
		L: 76,
		M: 77,
		N: 78,
		O: 79,
		P: 80,
		Q: 81,
		R: 82,
		S: 83,
		T: 84,
		U: 85,
		V: 86,
		W: 87,
		X: 88,
		Y: 89,
		Z: 90,
		NUMPAD_0: 96,
		NUMPAD_1: 97,
		NUMPAD_2: 98,
		NUMPAD_3: 99,
		NUMPAD_4: 100,
		NUMPAD_5: 101,
		NUMPAD_6: 102,
		NUMPAD_7: 103,
		NUMPAD_8: 104,
		NUMPAD_9: 105,
		MULTIPLY: 106,
		ADD: 107,
		SUBSTRACT: 109,
		DECIMAL: 110,
		DIVIDE: 111,
		F1: 112,
		F2: 113,
		F3: 114,
		F4: 115,
		F5: 116,
		F6: 117,
		F7: 118,
		F8: 119,
		F9: 120,
		F10: 121,
		F11: 122,
		F12: 123,
		SHIFT: 16,
		CTRL: 17,
		ALT: 18,
		PLUS: 187,
		COMMA: 188,
		MINUS: 189,
		PERIOD: 190
	};
	ig.Input = ig.Class.extend({
		bindings: {},
		actions: {},
		presses: {},
		locks: {},
		delayedKeyup: {},
		isUsingMouse: !1,
		isUsingKeyboard: !1,
		isUsingAccelerometer: !1,
		mouse: { x: 0, y: 0 },
		accel: { x: 0, y: 0, z: 0 },
		initMouse: function () {
			if (!this.isUsingMouse) {
				this.isUsingMouse = !0;
				var b = this.mousewheel.bind(this);
				ig.system.canvas.addEventListener('mousewheel', b, !1);
				ig.system.canvas.addEventListener('DOMMouseScroll', b, !1);
				ig.system.canvas.addEventListener('contextmenu', this.contextmenu.bind(this), !1);
				ig.system.canvas.addEventListener('mousedown', this.keydown.bind(this), !1);
				ig.system.canvas.addEventListener('mouseup', this.keyup.bind(this), !1);
				ig.system.canvas.addEventListener('mousemove', this.mousemove.bind(this), !1);
				ig.ua.touchDevice &&
					(ig.system.canvas.addEventListener('touchstart', this.keydown.bind(this), !1),
					ig.system.canvas.addEventListener('touchend', this.keyup.bind(this), !1),
					ig.system.canvas.addEventListener('touchmove', this.mousemove.bind(this), !1),
					ig.system.canvas.addEventListener('MSPointerDown', this.keydown.bind(this), !1),
					ig.system.canvas.addEventListener('MSPointerUp', this.keyup.bind(this), !1),
					ig.system.canvas.addEventListener('MSPointerMove', this.mousemove.bind(this), !1),
					(ig.system.canvas.style.msTouchAction = 'none'));
			}
		},
		initKeyboard: function () {
			this.isUsingKeyboard ||
				((this.isUsingKeyboard = !0),
				window.addEventListener('keydown', this.keydown.bind(this), !1),
				window.addEventListener('keyup', this.keyup.bind(this), !1));
		},
		initAccelerometer: function () {
			this.isUsingAccelerometer ||
				window.addEventListener('devicemotion', this.devicemotion.bind(this), !1);
		},
		mousewheel: function (b) {
			var c =
				this.bindings[
					0 < (b.wheelDelta ? b.wheelDelta : -1 * b.detail) ? ig.KEY.MWHEEL_UP : ig.KEY.MWHEEL_DOWN
				];
			c &&
				((this.actions[c] = !0),
				(this.presses[c] = !0),
				(this.delayedKeyup[c] = !0),
				b.stopPropagation(),
				b.preventDefault());
		},
		mousemove: function (b) {
			for (var c = ig.system.canvas, d = 0, e = 0; null != c; )
				(d += c.offsetLeft), (e += c.offsetTop), (c = c.offsetParent);
			var c = b.pageX,
				f = b.pageY;
			b.touches && ((c = b.touches[0].clientX), (f = b.touches[0].clientY));
			this.mouse.x = (c - d) / ig.system.scale;
			this.mouse.y = (f - e) / ig.system.scale;
		},
		contextmenu: function (b) {
			this.bindings[ig.KEY.MOUSE2] && (b.stopPropagation(), b.preventDefault());
		},
		keydown: function (b) {
			b.stopPropagation();
			b.preventDefault();
			var c = b.target.tagName;
			if (!('INPUT' == c || 'TEXTAREA' == c))
				if (
					((c = 'keydown' == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1),
					0 > c && !ig.ua.mobile && window.focus(),
					('touchstart' == b.type || 'mousedown' == b.type) && this.mousemove(b),
					(b = this.bindings[c]))
				)
					(this.actions[b] = !0), this.locks[b] || ((this.presses[b] = !0), (this.locks[b] = !0));
		},
		keyup: function (b) {
			if ('text' != b.target.type) {
				var c =
					this.bindings[
						'keyup' == b.type ? b.keyCode : 2 == b.button ? ig.KEY.MOUSE2 : ig.KEY.MOUSE1
					];
				c && ((this.delayedKeyup[c] = !0), b.stopPropagation(), b.preventDefault());
			}
		},
		devicemotion: function (b) {
			this.accel = b.accelerationIncludingGravity;
		},
		bind: function (b, c) {
			0 > b ? this.initMouse() : 0 < b && this.initKeyboard();
			this.bindings[b] = c;
		},
		bindTouch: function (b, c) {
			var d = ig.$(b),
				e = this;
			d.addEventListener(
				'touchstart',
				function (b) {
					e.touchStart(b, c);
				},
				!1
			);
			d.addEventListener(
				'touchend',
				function (b) {
					e.touchEnd(b, c);
				},
				!1
			);
		},
		unbind: function (b) {
			this.delayedKeyup[this.bindings[b]] = !0;
			this.bindings[b] = null;
		},
		unbindAll: function () {
			this.bindings = {};
			this.actions = {};
			this.presses = {};
			this.locks = {};
			this.delayedKeyup = {};
		},
		state: function (b) {
			return this.actions[b];
		},
		pressed: function (b) {
			return this.presses[b];
		},
		released: function (b) {
			return this.delayedKeyup[b];
		},
		clearPressed: function () {
			for (var b in this.delayedKeyup) (this.actions[b] = !1), (this.locks[b] = !1);
			this.delayedKeyup = {};
			this.presses = {};
		},
		touchStart: function (b, c) {
			this.actions[c] = !0;
			this.presses[c] = !0;
			b.stopPropagation();
			b.preventDefault();
			return !1;
		},
		touchEnd: function (b, c) {
			this.delayedKeyup[c] = !0;
			b.stopPropagation();
			b.preventDefault();
			return !1;
		}
	});
});
ig.baked = !0;
ig.module('impact.sound-handler').defines(function () {
	ig.SoundHandler = ig.Class.extend({
		formats: { ogg: '.ogg', mp3: '.mp3' },
		jukebox: null,
		pausePosition: null,
		globalMute: !1,
		forceMuted: !1,
		muted: !1,
		bgmPlaying: !1,
		soundPlaying: !1,
		currentSoundPlaying: null,
		soundBuffer: [],
		voSoundLoaded: [],
		sfxSoundLoaded: [],
		SOUNDID: {},
		voSoundsToLoad: [],
		sfxSoundsToLoad: [
			{ name: 'staticSound', path: 'media/audio/play/static' },
			{ name: 'openingSound', path: 'media/audio/opening/opening' },
			{ name: 'kittyopeningSound', path: 'media/audio/opening/kittyopening' },
			{ name: 'button', path: 'media/audio/sfx/button' },
			{ name: 'hit', path: 'media/audio/sfx/hit2' },
			{ name: 'step', path: 'media/audio/sfx/step' },
			{ name: 'skate', path: 'media/audio/sfx/skate' },
			{ name: 'jump', path: 'media/audio/sfx/jump2' },
			{ name: 'slide', path: 'media/audio/sfx/woosh' },
			{ name: 'crunch', path: 'media/audio/sfx/crunch' },
			{ name: 'coin', path: 'media/audio/sfx/ding' },
			{ name: 'chirp', path: 'media/audio/sfx/chirp' }
		],
		debug: !1,
		init: function () {
			this.initSfx();
			this.setupWindowHandler();
		},
		allVoSoundLoaded: function () {
			if (this.voSoundLoaded.length >= this.voSoundsToLoad.length) {
				this.debug && console.log('Vo ready');
				for (index = 0; index < this.voSoundLoaded.length; index++)
					this.voSoundLoaded[index].on(
						'end',
						function (b) {
							b.isPlaying = !1;
							this.soundBuffer.pop();
						}.bind(this, this.voSoundLoaded[index])
					),
						this.voSoundLoaded[index].on(
							'play',
							function (b) {
								b.isPlaying = !0;
							}.bind(this, this.voSoundLoaded[index])
						);
				return !0;
			}
			return !1;
		},
		allSfxSoundLoaded: function () {
			return this.sfxSoundLoaded.length >= this.sfxSoundsToLoad.length ? !0 : !1;
		},
		stopBackgroundMusic: function () {
			ig.game && ig.game.webaudioPlugin && ig.game.webaudioPlugin.stop();
		},
		playBackgroundMusic: function () {
			ig.game && ig.game.webaudioPlugin && ig.game.webaudioPlugin.play();
			this.jukebox &&
				(null != this.pausePosition
					? this.jukebox.player.resume(this.pausePosition)
					: (this.jukebox.player.resume(this.jukebox.player.settings.spritemap.music.start),
					  this.jukebox.player.play()),
				(this.bgmPlaying = !0));
		},
		playSound: function (b) {
			if ((b = this[b]) && (!this.forceMuted || !this.muted) && !b.isPlaying)
				this.soundBuffer.push(b), b.play();
		},
		stopAllAndPlaySound: function (b) {
			this.stopAllSounds();
			this.playSound(b);
		},
		stopAllSounds: function () {
			for (index = 0; index < this.soundBuffer.length; index++)
				(this.soundBuffer[index].isPlaying = !1), this.soundBuffer.splice(0, 1)[0].stop();
		},
		addSound: function (b, c, d) {
			var e = c + this.formats.ogg;
			c += this.formats.mp3;
			this.SOUNDID[b] = b;
			this[b] = d ? new Howl({ src: [e, c], onload: d }) : new Howl({ src: [e, c] });
		},
		_muteSounds: function () {
			for (i = 0; i < ig.resources.length; i++)
				ig.resources[i].multiChannel && ig.resources[i].stop();
			Howler.mute(!0);
			this.debug && console.log('Sounds muted');
		},
		_unMuteSounds: function () {
			Howler.mute(!1);
			ig.Sound.enabled = !0;
			this.debug && console.log('Sounds can play');
		},
		focusBlurMute: function () {
			this.forceMuted || this.mute();
		},
		focusBlurUnmute: function () {
			this.forceMuted || this.unmute();
		},
		setForceMuted: function (b) {
			this.forceMuted = b;
		},
		mute: function () {
			this._muteSounds();
			ig.game &&
				(ig.game.webaudioPlugin.mute(),
				this.jukebox &&
					((this.pausePosition = this.jukebox.player.pause()),
					this.jukebox.player.setVolume(0.01)));
			this.muted = !0;
		},
		unmute: function () {
			this._unMuteSounds();
			ig.game && !1 == ig.game.muted && ig.game.webaudioPlugin.unmute();
			if (this.jukebox && this.bgmPlaying) {
				this.bgmPauseResume(this.pausePosition);
				var b = this.musicVolume;
				0 == b && (b = 0.01);
				this.jukebox.player.setVolume(b);
			}
			this.muted = !1;
			ig.soundHandler.playBackgroundMusic();
		},
		setupWindowHandler: function () {
			'true' === getQueryVariable('webview')
				? ($(window).focus(function () {
						ig.game && ig.game.resumeGame();
						ig.soundHandler && ig.soundHandler.focusBlurUnmute();
				  }),
				  $(window).blur(function () {
						ig.game && ig.game.pauseGame();
						ig.soundHandler && ig.soundHandler.focusBlurMute();
				  }))
				: ((window.onfocus = function () {
						ig.game && ig.game.resumeGame();
						ig.soundHandler && ig.soundHandler.focusBlurUnmute();
				  }),
				  (window.onblur = function () {
						ig.game && ig.game.pauseGame();
						ig.soundHandler && ig.soundHandler.focusBlurMute();
				  }));
		},
		initSfx: function () {
			for (index = 0; index < this.sfxSoundsToLoad.length; index++) {
				var b = function (b) {
					this.sfxSoundLoaded.push(this[b]);
				}.bind(this, this.sfxSoundsToLoad[index].name);
				this.addSound(this.sfxSoundsToLoad[index].name, this.sfxSoundsToLoad[index].path, b);
			}
		},
		initVoSfx: function () {
			for (index = 0; index < this.voSoundsToLoad.length; index++) {
				var b = function (b) {
					this.voSoundLoaded.push(this[b]);
				}.bind(this, this.voSoundsToLoad[index].name);
				this.addSound(this.voSoundsToLoad[index].name, this.voSoundsToLoad[index].path, b);
			}
		},
		setupDesktopMusic: function () {
			ig.music.add('media/audio/music/bgm.*', 'background');
		},
		setupJukebox: function () {
			this.jukebox ||
				((this.jukebox = new ig.Jukebox()),
				-1 != this.jukebox.player.resource.indexOf('ogg') &&
					((this.jukebox.player.settings.spritemap.music.start = 0),
					(this.jukebox.player.settings.spritemap.music.end -= 0.05)),
				(this.pausePosition = this.jukebox.player.settings.spritemap.music.start),
				this.jukebox.player.setVolume(0.01));
		},
		forceLoopBGM: function () {
			if (this.bgmPlaying && !this.forceMuted && this.jukebox && this.jukebox.player)
				if (this.jukebox.player.getCurrentTime()) {
					var b = 0.06;
					ig.ua.mobile && ((b = 0.06), ig.ua.android && (b = 0.07));
					ig.ua.mobile || (b = 0);
					this.jukebox.player.settings.spritemap.music &&
					this.jukebox.player.settings.spritemap.music.loop
						? this.jukebox.player.getCurrentTime() >=
								this.jukebox.player.settings.spritemap.music.end - b &&
						  this.bgmPauseResume(this.jukebox.player.settings.spritemap.music.start)
						: this.jukebox.player.isPlaying && this.jukebox.player.isPlaying.loop
						? this.jukebox.player.getCurrentTime() >= this.jukebox.player.isPlaying.end - b &&
						  this.bgmPauseResume(this.jukebox.player.isPlaying.start)
						: this.jukebox.player.backgroundMusic &&
						  this.jukebox.player.backgroundMusic.loop &&
						  this.jukebox.player.getCurrentTime() >= this.jukebox.player.backgroundMusic.end - b &&
						  this.bgmPauseResume(this.jukebox.player.backgroundMusic.start);
				} else this.jukebox.player.resume();
		},
		bgmPauseResume: function () {
			this.bgmPlaying = !0;
		},
		setSfxVolume: function (b) {
			this.sfxVolume = b;
			Howler.volume(this.sfxVolume);
		},
		setMusicVolume: function (b) {
			this.musicVolume = b;
			this.jukebox &&
				((b = this.musicVolume),
				0 == b
					? (this.jukebox.player.setVolume(b),
					  this.bgmPlaying && this.jukebox.player.pause(),
					  (this.bgmPlaying = !1))
					: (this.jukebox.player.setVolume(b),
					  this.bgmPlaying ||
							this.jukebox.player.resume(this.jukebox.player.settings.spritemap.music.start),
					  (this.bgmPlaying = !0)));
		}
	});
});
function getHiddenProp() {
	var b = ['webkit', 'moz', 'ms', 'o'];
	if ('hidden' in document) return 'hidden';
	for (var c = 0; c < b.length; c++) if (b[c] + 'Hidden' in document) return b[c] + 'Hidden';
	return null;
}
function isHidden() {
	var b = getHiddenProp();
	return !b ? !1 : document[b];
}
var visProp = getHiddenProp();
if (visProp) {
	var evtname = visProp.replace(/[H|h]idden/, '') + 'visibilitychange';
	document.addEventListener(evtname, visChange);
}
window.addEventListener(
	'pagehide',
	function () {
		ig.soundHandler && ig.soundHandler.forceMuteAll();
	},
	!1
);
window.addEventListener(
	'pageshow',
	function () {
		ig.ua.mobile && ig.game && ig.game.resumeGame();
		(!ig.game || !ig.game.isMuteAds) && ig.soundHandler && ig.soundHandler.forceUnMuteAll();
	},
	!1
);
function visChange() {
	isHidden()
		? ig.soundHandler && ig.soundHandler.forceMuteAll()
		: (ig.ua.mobile && ig.game && ig.game.resumeGame(),
		  (!ig.game || !ig.game.isMuteAds) && ig.soundHandler && ig.soundHandler.forceUnMuteAll());
}
ig.baked = !0;
ig.module('impact.impact')
	.requires(
		'dom.ready',
		'impact.loader',
		'impact.system',
		'impact.input',
		'impact.sound',
		'impact.sound-handler'
	)
	.defines(function () {
		ig.main = function (b, c, d, e, f, l, n) {
			ig.system = new ig.System(b, d, e, f, l || 1);
			ig.input = new ig.Input();
			ig.soundManager = new ig.SoundManager();
			ig.music = new ig.Music();
			ig.ready = !0;
			ig.soundHandler = new ig.SoundHandler();
			new (n || ig.Loader)(c, ig.resources).load();
		};
	});
ig.baked = !0;
ig.module('impact.animation')
	.requires('impact.timer', 'impact.image')
	.defines(function () {
		ig.AnimationSheet = ig.Class.extend({
			width: 8,
			height: 8,
			image: null,
			init: function (b, c, d) {
				this.width = c;
				this.height = d;
				this.image = new ig.Image(b);
			}
		});
		ig.Animation = ig.Class.extend({
			sheet: null,
			timer: null,
			sequence: [],
			flip: { x: !1, y: !1 },
			pivot: { x: 0, y: 0 },
			frame: 0,
			tile: 0,
			loopCount: 0,
			alpha: 1,
			angle: 0,
			init: function (b, c, d, e) {
				this.sheet = b;
				this.pivot = { x: b.width / 2, y: b.height / 2 };
				this.timer = new ig.Timer();
				this.frameTime = c;
				this.sequence = d;
				this.stop = !!e;
				this.tile = this.sequence[0];
			},
			rewind: function () {
				this.timer.reset();
				this.loopCount = 0;
				this.tile = this.sequence[0];
				return this;
			},
			gotoFrame: function (b) {
				this.timer.set(this.frameTime * -b);
				this.update();
			},
			gotoRandomFrame: function () {
				this.gotoFrame(Math.floor(Math.random() * this.sequence.length));
			},
			update: function () {
				var b = Math.floor(this.timer.delta() / this.frameTime);
				this.loopCount = Math.floor(b / this.sequence.length);
				this.frame =
					this.stop && 0 < this.loopCount ? this.sequence.length - 1 : b % this.sequence.length;
				this.tile = this.sequence[this.frame];
			},
			draw: function (b, c) {
				var d = Math.max(this.sheet.width, this.sheet.height);
				b > ig.system.width ||
					c > ig.system.height ||
					0 > b + d ||
					0 > c + d ||
					(1 != this.alpha && (ig.system.context.globalAlpha = this.alpha),
					0 == this.angle
						? this.sheet.image.drawTile(
								b,
								c,
								this.tile,
								this.sheet.width,
								this.sheet.height,
								this.flip.x,
								this.flip.y
						  )
						: (ig.system.context.save(),
						  ig.system.context.translate(
								ig.system.getDrawPos(b + this.pivot.x),
								ig.system.getDrawPos(c + this.pivot.y)
						  ),
						  ig.system.context.rotate(this.angle),
						  this.sheet.image.drawTile(
								-this.pivot.x,
								-this.pivot.y,
								this.tile,
								this.sheet.width,
								this.sheet.height,
								this.flip.x,
								this.flip.y
						  ),
						  ig.system.context.restore()),
					1 != this.alpha && (ig.system.context.globalAlpha = 1));
			}
		});
	});
ig.baked = !0;
ig.module('impact.entity')
	.requires('impact.animation', 'impact.impact')
	.defines(function () {
		ig.Entity = ig.Class.extend({
			id: 0,
			settings: {},
			size: { x: 16, y: 16 },
			offset: { x: 0, y: 0 },
			posMP: { x: 0, y: 0 },
			posML: { x: 0, y: 0 },
			enableReposition: !1,
			pos: { x: 0, y: 0 },
			last: { x: 0, y: 0 },
			vel: { x: 0, y: 0 },
			accel: { x: 0, y: 0 },
			friction: { x: 0, y: 0 },
			maxVel: { x: 100, y: 100 },
			zIndex: 0,
			gravityFactor: 1,
			standing: !1,
			bounciness: 0,
			minBounceVelocity: 40,
			anims: {},
			animSheet: null,
			currentAnim: null,
			health: 10,
			type: 0,
			checkAgainst: 0,
			collides: 0,
			_killed: !1,
			slopeStanding: { min: (44).toRad(), max: (136).toRad() },
			init: function (b, c, d) {
				this.id = ++ig.Entity._lastId;
				this.pos.x = b;
				this.pos.y = c;
				ig.merge(this, d);
			},
			addAnim: function (b, c, d, e) {
				if (!this.animSheet) throw 'No animSheet to add the animation ' + b + ' to.';
				c = new ig.Animation(this.animSheet, c, d, e);
				this.anims[b] = c;
				this.currentAnim || (this.currentAnim = c);
				return c;
			},
			update: function () {
				this.last.x = this.pos.x;
				this.last.y = this.pos.y;
				this.vel.y += ig.game.gravity * ig.system.tick * this.gravityFactor;
				this.vel.x = this.getNewVelocity(this.vel.x, this.accel.x, this.friction.x, this.maxVel.x);
				this.vel.y = this.getNewVelocity(this.vel.y, this.accel.y, this.friction.y, this.maxVel.y);
				var b = ig.game.collisionMap.trace(
					this.pos.x,
					this.pos.y,
					this.vel.x * ig.system.tick,
					this.vel.y * ig.system.tick,
					this.size.x,
					this.size.y
				);
				this.handleMovementTrace(b);
				this.currentAnim && this.currentAnim.update();
			},
			getNewVelocity: function (b, c, d, e) {
				return c
					? (b + c * ig.system.tick).limit(-e, e)
					: d
					? ((c = d * ig.system.tick), 0 < b - c ? b - c : 0 > b + c ? b + c : 0)
					: b.limit(-e, e);
			},
			handleMovementTrace: function (b) {
				this.standing = !1;
				b.collision.y &&
					(0 < this.bounciness && Math.abs(this.vel.y) > this.minBounceVelocity
						? (this.vel.y *= -this.bounciness)
						: (0 < this.vel.y && (this.standing = !0), (this.vel.y = 0)));
				b.collision.x &&
					(this.vel.x =
						0 < this.bounciness && Math.abs(this.vel.x) > this.minBounceVelocity
							? this.vel.x * -this.bounciness
							: 0);
				if (b.collision.slope) {
					var c = b.collision.slope;
					if (0 < this.bounciness) {
						var d = this.vel.x * c.nx + this.vel.y * c.ny;
						this.vel.x = (this.vel.x - 2 * c.nx * d) * this.bounciness;
						this.vel.y = (this.vel.y - 2 * c.ny * d) * this.bounciness;
					} else
						(d = (this.vel.x * c.x + this.vel.y * c.y) / (c.x * c.x + c.y * c.y)),
							(this.vel.x = c.x * d),
							(this.vel.y = c.y * d),
							(c = Math.atan2(c.x, c.y)),
							c > this.slopeStanding.min && c < this.slopeStanding.max && (this.standing = !0);
				}
				this.pos = b.pos;
			},
			reposition: function () {
				ig.ua.mobile &&
					this.enableReposition &&
					(portraitMode
						? ((this.pos.x = this.posMP.x), (this.pos.y = this.posMP.y))
						: ((this.pos.x = this.posML.x), (this.pos.y = this.posML.y)));
			},
			draw: function () {
				this.currentAnim &&
					this.currentAnim.draw(
						this.pos.x - this.offset.x - ig.game._rscreen.x,
						this.pos.y - this.offset.y - ig.game._rscreen.y
					);
			},
			kill: function () {
				ig.game.removeEntity(this);
			},
			receiveDamage: function (b) {
				this.health -= b;
				0 >= this.health && this.kill();
			},
			touches: function (b) {
				return !(
					this.pos.x >= b.pos.x + b.size.x ||
					this.pos.x + this.size.x <= b.pos.x ||
					this.pos.y >= b.pos.y + b.size.y ||
					this.pos.y + this.size.y <= b.pos.y
				);
			},
			distanceTo: function (b) {
				var c = this.pos.x + this.size.x / 2 - (b.pos.x + b.size.x / 2);
				b = this.pos.y + this.size.y / 2 - (b.pos.y + b.size.y / 2);
				return Math.sqrt(c * c + b * b);
			},
			angleTo: function (b) {
				return Math.atan2(
					b.pos.y + b.size.y / 2 - (this.pos.y + this.size.y / 2),
					b.pos.x + b.size.x / 2 - (this.pos.x + this.size.x / 2)
				);
			},
			check: function () {},
			collideWith: function () {},
			ready: function () {}
		});
		ig.Entity._lastId = 0;
		ig.Entity.COLLIDES = { NEVER: 0, LITE: 1, PASSIVE: 2, ACTIVE: 4, FIXED: 8 };
		ig.Entity.TYPE = { NONE: 0, A: 1, B: 2, BOTH: 3 };
		ig.Entity.checkPair = function (b, c) {
			b.checkAgainst & c.type && b.check(c);
			c.checkAgainst & b.type && c.check(b);
			b.collides &&
				c.collides &&
				b.collides + c.collides > ig.Entity.COLLIDES.ACTIVE &&
				ig.Entity.solveCollision(b, c);
		};
		ig.Entity.solveCollision = function (b, c) {
			var d = null;
			if (b.collides == ig.Entity.COLLIDES.LITE || c.collides == ig.Entity.COLLIDES.FIXED) d = b;
			else if (c.collides == ig.Entity.COLLIDES.LITE || b.collides == ig.Entity.COLLIDES.FIXED)
				d = c;
			b.last.x + b.size.x > c.last.x && b.last.x < c.last.x + c.size.x
				? (b.last.y < c.last.y
						? ig.Entity.seperateOnYAxis(b, c, d)
						: ig.Entity.seperateOnYAxis(c, b, d),
				  b.collideWith(c, 'y'),
				  c.collideWith(b, 'y'))
				: b.last.y + b.size.y > c.last.y &&
				  b.last.y < c.last.y + c.size.y &&
				  (b.last.x < c.last.x
						? ig.Entity.seperateOnXAxis(b, c, d)
						: ig.Entity.seperateOnXAxis(c, b, d),
				  b.collideWith(c, 'x'),
				  c.collideWith(b, 'x'));
		};
		ig.Entity.seperateOnXAxis = function (b, c, d) {
			var e = b.pos.x + b.size.x - c.pos.x;
			d
				? ((d.vel.x = -d.vel.x * d.bounciness + (b === d ? c : b).vel.x),
				  (c = ig.game.collisionMap.trace(
						d.pos.x,
						d.pos.y,
						d == b ? -e : e,
						0,
						d.size.x,
						d.size.y
				  )),
				  (d.pos.x = c.pos.x))
				: ((d = (b.vel.x - c.vel.x) / 2),
				  (b.vel.x = -d),
				  (c.vel.x = d),
				  (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, -e / 2, 0, b.size.x, b.size.y)),
				  (b.pos.x = Math.floor(d.pos.x)),
				  (b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, e / 2, 0, c.size.x, c.size.y)),
				  (c.pos.x = Math.ceil(b.pos.x)));
		};
		ig.Entity.seperateOnYAxis = function (b, c, d) {
			var e = b.pos.y + b.size.y - c.pos.y;
			if (d) {
				c = b === d ? c : b;
				d.vel.y = -d.vel.y * d.bounciness + c.vel.y;
				var f = 0;
				d == b &&
					Math.abs(d.vel.y - c.vel.y) < d.minBounceVelocity &&
					((d.standing = !0), (f = c.vel.x * ig.system.tick));
				b = ig.game.collisionMap.trace(d.pos.x, d.pos.y, f, d == b ? -e : e, d.size.x, d.size.y);
				d.pos.y = b.pos.y;
				d.pos.x = b.pos.x;
			} else
				ig.game.gravity && (c.standing || 0 < b.vel.y)
					? ((d = ig.game.collisionMap.trace(
							b.pos.x,
							b.pos.y,
							0,
							-(b.pos.y + b.size.y - c.pos.y),
							b.size.x,
							b.size.y
					  )),
					  (b.pos.y = d.pos.y),
					  0 < b.bounciness && b.vel.y > b.minBounceVelocity
							? (b.vel.y *= -b.bounciness)
							: ((b.standing = !0), (b.vel.y = 0)))
					: ((d = (b.vel.y - c.vel.y) / 2),
					  (b.vel.y = -d),
					  (c.vel.y = d),
					  (f = c.vel.x * ig.system.tick),
					  (d = ig.game.collisionMap.trace(b.pos.x, b.pos.y, f, -e / 2, b.size.x, b.size.y)),
					  (b.pos.y = d.pos.y),
					  (b = ig.game.collisionMap.trace(c.pos.x, c.pos.y, 0, e / 2, c.size.x, c.size.y)),
					  (c.pos.y = b.pos.y));
		};
	});
ig.baked = !0;
ig.module('impact.map').defines(function () {
	ig.Map = ig.Class.extend({
		tilesize: 8,
		width: 1,
		height: 1,
		data: [[]],
		name: null,
		init: function (b, c) {
			this.tilesize = b;
			this.data = c;
			this.height = c.length;
			this.width = c[0].length;
		},
		getTile: function (b, c) {
			var d = Math.floor(b / this.tilesize),
				e = Math.floor(c / this.tilesize);
			return 0 <= d && d < this.width && 0 <= e && e < this.height ? this.data[e][d] : 0;
		},
		setTile: function (b, c, d) {
			b = Math.floor(b / this.tilesize);
			c = Math.floor(c / this.tilesize);
			0 <= b && b < this.width && 0 <= c && c < this.height && (this.data[c][b] = d);
		}
	});
});
ig.baked = !0;
ig.module('impact.collision-map')
	.requires('impact.map')
	.defines(function () {
		ig.CollisionMap = ig.Map.extend({
			lastSlope: 1,
			tiledef: null,
			init: function (b, c, f) {
				this.parent(b, c);
				this.tiledef = f || ig.CollisionMap.defaultTileDef;
				for (var l in this.tiledef) l | (0 > this.lastSlope) && (this.lastSlope = l | 0);
			},
			trace: function (b, c, f, l, n, q) {
				var j = {
						collision: { x: !1, y: !1, slope: !1 },
						pos: { x: b, y: c },
						tile: { x: 0, y: 0 }
					},
					p = Math.ceil(Math.max(Math.abs(f), Math.abs(l)) / this.tilesize);
				if (1 < p)
					for (
						var m = f / p, r = l / p, s = 0;
						s < p &&
						(m || r) &&
						!(this._traceStep(j, b, c, m, r, n, q, f, l, s),
						(b = j.pos.x),
						(c = j.pos.y),
						j.collision.x && (f = m = 0),
						j.collision.y && (l = r = 0),
						j.collision.slope);
						s++
					);
				else this._traceStep(j, b, c, f, l, n, q, f, l, 0);
				return j;
			},
			_traceStep: function (b, c, f, l, n, q, j, p, m, r) {
				b.pos.x += l;
				b.pos.y += n;
				var s = 0;
				if (l) {
					var t = 0 < l ? q : 0,
						y = 0 > l ? this.tilesize : 0,
						s = Math.max(Math.floor(f / this.tilesize), 0),
						B = Math.min(Math.ceil((f + j) / this.tilesize), this.height);
					l = Math.floor((b.pos.x + t) / this.tilesize);
					var F = Math.floor((c + t) / this.tilesize);
					if (0 < r || l == F || 0 > F || F >= this.width) F = -1;
					if (0 <= l && l < this.width)
						for (
							var z = s;
							z < B &&
							!(
								-1 != F &&
								((s = this.data[z][F]),
								1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, f, p, m, q, j, F, z))
							);
							z++
						)
							if (
								((s = this.data[z][l]),
								1 == s ||
									s > this.lastSlope ||
									(1 < s && this._checkTileDef(b, s, c, f, p, m, q, j, l, z)))
							) {
								if (1 < s && s <= this.lastSlope && b.collision.slope) break;
								b.collision.x = !0;
								b.tile.x = s;
								c = b.pos.x = l * this.tilesize - t + y;
								p = 0;
								break;
							}
				}
				if (n) {
					t = 0 < n ? j : 0;
					n = 0 > n ? this.tilesize : 0;
					s = Math.max(Math.floor(b.pos.x / this.tilesize), 0);
					y = Math.min(Math.ceil((b.pos.x + q) / this.tilesize), this.width);
					z = Math.floor((b.pos.y + t) / this.tilesize);
					B = Math.floor((f + t) / this.tilesize);
					if (0 < r || z == B || 0 > B || B >= this.height) B = -1;
					if (0 <= z && z < this.height)
						for (
							l = s;
							l < y &&
							!(
								-1 != B &&
								((s = this.data[B][l]),
								1 < s && s <= this.lastSlope && this._checkTileDef(b, s, c, f, p, m, q, j, l, B))
							);
							l++
						)
							if (
								((s = this.data[z][l]),
								1 == s ||
									s > this.lastSlope ||
									(1 < s && this._checkTileDef(b, s, c, f, p, m, q, j, l, z)))
							) {
								if (1 < s && s <= this.lastSlope && b.collision.slope) break;
								b.collision.y = !0;
								b.tile.y = s;
								b.pos.y = z * this.tilesize - t + n;
								break;
							}
				}
			},
			_checkTileDef: function (b, c, f, l, n, q, j, p, m, r) {
				var s = this.tiledef[c];
				if (!s) return !1;
				c = (s[2] - s[0]) * this.tilesize;
				var t = (s[3] - s[1]) * this.tilesize,
					y = s[4];
				j = f + n + (0 > t ? j : 0) - (m + s[0]) * this.tilesize;
				p = l + q + (0 < c ? p : 0) - (r + s[1]) * this.tilesize;
				if (0 < c * p - t * j) {
					if (0 > n * -t + q * c) return y;
					m = Math.sqrt(c * c + t * t);
					r = t / m;
					m = -c / m;
					var B = j * r + p * m,
						s = r * B,
						B = m * B;
					if (s * s + B * B >= n * n + q * q) return y || 0.5 > c * (p - q) - t * (j - n);
					b.pos.x = f + n - s;
					b.pos.y = l + q - B;
					b.collision.slope = { x: c, y: t, nx: r, ny: m };
					return !0;
				}
				return !1;
			}
		});
		var b = 1 / 3,
			c = 2 / 3;
		ig.CollisionMap.defaultTileDef = {
			5: [0, 1, 1, c, !0],
			6: [0, c, 1, b, !0],
			7: [0, b, 1, 0, !0],
			3: [0, 1, 1, 0.5, !0],
			4: [0, 0.5, 1, 0, !0],
			2: [0, 1, 1, 0, !0],
			10: [0.5, 1, 1, 0, !0],
			21: [0, 1, 0.5, 0, !0],
			32: [c, 1, 1, 0, !0],
			43: [b, 1, c, 0, !0],
			54: [0, 1, b, 0, !0],
			27: [0, 0, 1, b, !0],
			28: [0, b, 1, c, !0],
			29: [0, c, 1, 1, !0],
			25: [0, 0, 1, 0.5, !0],
			26: [0, 0.5, 1, 1, !0],
			24: [0, 0, 1, 1, !0],
			11: [0, 0, 0.5, 1, !0],
			22: [0.5, 0, 1, 1, !0],
			33: [0, 0, b, 1, !0],
			44: [b, 0, c, 1, !0],
			55: [c, 0, 1, 1, !0],
			16: [1, b, 0, 0, !0],
			17: [1, c, 0, b, !0],
			18: [1, 1, 0, c, !0],
			14: [1, 0.5, 0, 0, !0],
			15: [1, 1, 0, 0.5, !0],
			13: [1, 1, 0, 0, !0],
			8: [0.5, 1, 0, 0, !0],
			19: [1, 1, 0.5, 0, !0],
			30: [b, 1, 0, 0, !0],
			41: [c, 1, b, 0, !0],
			52: [1, 1, c, 0, !0],
			38: [1, c, 0, 1, !0],
			39: [1, b, 0, c, !0],
			40: [1, 0, 0, b, !0],
			36: [1, 0.5, 0, 1, !0],
			37: [1, 0, 0, 0.5, !0],
			35: [1, 0, 0, 1, !0],
			9: [1, 0, 0.5, 1, !0],
			20: [0.5, 0, 0, 1, !0],
			31: [1, 0, c, 1, !0],
			42: [c, 0, b, 1, !0],
			53: [b, 0, 0, 1, !0],
			12: [0, 0, 1, 0, !1],
			23: [1, 1, 0, 1, !1],
			34: [1, 0, 1, 1, !1],
			45: [0, 1, 0, 0, !1]
		};
		ig.CollisionMap.staticNoCollision = {
			trace: function (b, c, f, l) {
				return {
					collision: { x: !1, y: !1, slope: !1 },
					pos: { x: b + f, y: c + l },
					tile: { x: 0, y: 0 }
				};
			}
		};
	});
ig.baked = !0;
ig.module('impact.background-map')
	.requires('impact.map', 'impact.image')
	.defines(function () {
		ig.BackgroundMap = ig.Map.extend({
			tiles: null,
			scroll: { x: 0, y: 0 },
			distance: 1,
			repeat: !1,
			tilesetName: '',
			foreground: !1,
			enabled: !0,
			preRender: !1,
			preRenderedChunks: null,
			chunkSize: 512,
			debugChunks: !1,
			anims: {},
			init: function (b, c, d) {
				this.parent(b, c);
				this.setTileset(d);
			},
			setTileset: function (b) {
				this.tilesetName = b instanceof ig.Image ? b.path : b;
				this.tiles = new ig.Image(this.tilesetName);
				this.preRenderedChunks = null;
			},
			setScreenPos: function (b, c) {
				this.scroll.x = b / this.distance;
				this.scroll.y = c / this.distance;
			},
			preRenderMapToChunks: function () {
				var b = this.width * this.tilesize * ig.system.scale,
					c = this.height * this.tilesize * ig.system.scale,
					d = Math.ceil(b / this.chunkSize),
					e = Math.ceil(c / this.chunkSize);
				this.preRenderedChunks = [];
				for (var f = 0; f < e; f++) {
					this.preRenderedChunks[f] = [];
					for (var l = 0; l < d; l++)
						this.preRenderedChunks[f][l] = this.preRenderChunk(
							l,
							f,
							l == d - 1 ? b - l * this.chunkSize : this.chunkSize,
							f == e - 1 ? c - f * this.chunkSize : this.chunkSize
						);
				}
			},
			preRenderChunk: function (b, c, d, e) {
				var f = d / this.tilesize / ig.system.scale + 1,
					l = e / this.tilesize / ig.system.scale + 1,
					n = ((b * this.chunkSize) / ig.system.scale) % this.tilesize,
					q = ((c * this.chunkSize) / ig.system.scale) % this.tilesize;
				b = Math.floor((b * this.chunkSize) / this.tilesize / ig.system.scale);
				c = Math.floor((c * this.chunkSize) / this.tilesize / ig.system.scale);
				var j = ig.$new('canvas');
				j.width = d;
				j.height = e;
				d = ig.system.context;
				ig.system.context = j.getContext('2d');
				for (e = 0; e < f; e++)
					for (var p = 0; p < l; p++)
						if (e + b < this.width && p + c < this.height) {
							var m = this.data[p + c][e + b];
							m &&
								this.tiles.drawTile(
									e * this.tilesize - n,
									p * this.tilesize - q,
									m - 1,
									this.tilesize
								);
						}
				ig.system.context = d;
				return j;
			},
			draw: function () {
				this.tiles.loaded &&
					this.enabled &&
					(this.preRender ? this.drawPreRendered() : this.drawTiled());
			},
			drawPreRendered: function () {
				this.preRenderedChunks || this.preRenderMapToChunks();
				var b = ig.system.getDrawPos(this.scroll.x),
					c = ig.system.getDrawPos(this.scroll.y);
				this.repeat &&
					((b %= this.width * this.tilesize * ig.system.scale),
					(c %= this.height * this.tilesize * ig.system.scale));
				var d = Math.max(Math.floor(b / this.chunkSize), 0),
					e = Math.max(Math.floor(c / this.chunkSize), 0),
					f = Math.ceil((b + ig.system.realWidth) / this.chunkSize),
					l = Math.ceil((c + ig.system.realHeight) / this.chunkSize),
					n = this.preRenderedChunks[0].length,
					q = this.preRenderedChunks.length;
				this.repeat || ((f = Math.min(f, n)), (l = Math.min(l, q)));
				for (var j = 0; e < l; e++) {
					for (var p = 0, m = d; m < f; m++) {
						var r = this.preRenderedChunks[e % q][m % n],
							s = -b + m * this.chunkSize - p,
							t = -c + e * this.chunkSize - j;
						ig.system.context.drawImage(r, s, t);
						ig.Image.drawCount++;
						this.debugChunks &&
							((ig.system.context.strokeStyle = '#f0f'),
							ig.system.context.strokeRect(s, t, this.chunkSize, this.chunkSize));
						this.repeat &&
							r.width < this.chunkSize &&
							s + r.width < ig.system.realWidth &&
							((p = this.chunkSize - r.width), f++);
					}
					this.repeat &&
						r.height < this.chunkSize &&
						t + r.height < ig.system.realHeight &&
						((j = this.chunkSize - r.height), l++);
				}
			},
			drawTiled: function () {
				for (
					var b = 0,
						c = null,
						d = (this.scroll.x / this.tilesize).toInt(),
						e = (this.scroll.y / this.tilesize).toInt(),
						f = this.scroll.x % this.tilesize,
						l = this.scroll.y % this.tilesize,
						n = -f - this.tilesize,
						f = ig.system.width + this.tilesize - f,
						q = ig.system.height + this.tilesize - l,
						j = -1,
						l = -l - this.tilesize;
					l < q;
					j++, l += this.tilesize
				) {
					var p = j + e;
					if (p >= this.height || 0 > p) {
						if (!this.repeat) continue;
						p = 0 < p ? p % this.height : ((p + 1) % this.height) + this.height - 1;
					}
					for (var m = -1, r = n; r < f; m++, r += this.tilesize) {
						b = m + d;
						if (b >= this.width || 0 > b) {
							if (!this.repeat) continue;
							b = 0 < b ? b % this.width : ((b + 1) % this.width) + this.width - 1;
						}
						if ((b = this.data[p][b]))
							(c = this.anims[b - 1])
								? c.draw(r, l)
								: this.tiles.drawTile(r, l, b - 1, this.tilesize);
					}
				}
			}
		});
	});
ig.baked = !0;
ig.module('impact.game')
	.requires('impact.impact', 'impact.entity', 'impact.collision-map', 'impact.background-map')
	.defines(function () {
		ig.Game = ig.Class.extend({
			clearColor: '#000000',
			gravity: 0,
			screen: { x: 0, y: 0 },
			_rscreen: { x: 0, y: 0 },
			entities: [],
			namedEntities: {},
			collisionMap: ig.CollisionMap.staticNoCollision,
			backgroundMaps: [],
			backgroundAnims: {},
			autoSort: !1,
			sortBy: null,
			cellSize: 64,
			_deferredKill: [],
			_levelToLoad: null,
			_doSortEntities: !1,
			staticInstantiate: function () {
				this.sortBy = this.sortBy || ig.Game.SORT.Z_INDEX;
				ig.game = this;
				return null;
			},
			loadLevelWithoutEntities: function (b) {
				this.screen = { x: 0, y: 0 };
				this.collisionMap = ig.CollisionMap.staticNoCollision;
				this.backgroundMaps = [];
				for (var c = 0; c < b.layer.length; c++) {
					var d = b.layer[c];
					if ('collision' == d.name) this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
					else {
						var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
						e.anims = this.backgroundAnims[d.tilesetName] || {};
						e.repeat = d.repeat;
						e.distance = d.distance;
						e.foreground = !!d.foreground;
						e.preRender = !!d.preRender;
						e.name = d.name;
						this.backgroundMaps.push(e);
					}
				}
			},
			loadLevel: function (b) {
				this.screen = { x: 0, y: 0 };
				this.entities = [];
				this.namedEntities = {};
				for (var c = 0; c < b.entities.length; c++) {
					var d = b.entities[c];
					this.spawnEntity(d.type, d.x, d.y, d.settings);
				}
				this.sortEntities();
				this.collisionMap = ig.CollisionMap.staticNoCollision;
				this.backgroundMaps = [];
				for (c = 0; c < b.layer.length; c++)
					if (((d = b.layer[c]), 'collision' == d.name))
						this.collisionMap = new ig.CollisionMap(d.tilesize, d.data);
					else {
						var e = new ig.BackgroundMap(d.tilesize, d.data, d.tilesetName);
						e.anims = this.backgroundAnims[d.tilesetName] || {};
						e.repeat = d.repeat;
						e.distance = d.distance;
						e.foreground = !!d.foreground;
						e.preRender = !!d.preRender;
						e.name = d.name;
						this.backgroundMaps.push(e);
					}
				for (c = 0; c < this.entities.length; c++) this.entities[c].ready();
			},
			loadLevelDeferred: function (b) {
				this._levelToLoad = b;
			},
			getMapByName: function (b) {
				if ('collision' == b) return this.collisionMap;
				for (var c = 0; c < this.backgroundMaps.length; c++)
					if (this.backgroundMaps[c].name == b) return this.backgroundMaps[c];
				return null;
			},
			getEntityByName: function (b) {
				return this.namedEntities[b];
			},
			getEntitiesByType: function (b) {
				b = 'string' === typeof b ? ig.global[b] : b;
				for (var c = [], d = 0; d < this.entities.length; d++) {
					var e = this.entities[d];
					e instanceof b && !e._killed && c.push(e);
				}
				return c;
			},
			spawnEntity: function (b, c, d, e) {
				var f = 'string' === typeof b ? ig.global[b] : b;
				if (!f) throw "Can't spawn entity of type " + b;
				b = new f(c, d, e || {});
				this.entities.push(b);
				b.name && (this.namedEntities[b.name] = b);
				return b;
			},
			sortEntities: function () {
				this.entities.sort(this.sortBy);
			},
			sortEntitiesDeferred: function () {
				this._doSortEntities = !0;
			},
			removeEntity: function (b) {
				b.name && delete this.namedEntities[b.name];
				b._killed = !0;
				b.type = ig.Entity.TYPE.NONE;
				b.checkAgainst = ig.Entity.TYPE.NONE;
				b.collides = ig.Entity.COLLIDES.NEVER;
				this._deferredKill.push(b);
			},
			run: function () {
				this.update();
				this.draw();
			},
			update: function () {
				this._levelToLoad && (this.loadLevel(this._levelToLoad), (this._levelToLoad = null));
				if (this._doSortEntities || this.autoSort) this.sortEntities(), (this._doSortEntities = !1);
				this.updateEntities();
				this.checkEntities();
				for (var b = 0; b < this._deferredKill.length; b++)
					this.entities.erase(this._deferredKill[b]);
				this._deferredKill = [];
				for (var c in this.backgroundAnims) {
					var b = this.backgroundAnims[c],
						d;
					for (d in b) b[d].update();
				}
			},
			updateEntities: function () {
				for (var b = 0; b < this.entities.length; b++) {
					var c = this.entities[b];
					c._killed || c.update();
				}
			},
			draw: function () {
				this.clearColor && ig.system.clear(this.clearColor);
				this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
				this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
				var b;
				for (b = 0; b < this.backgroundMaps.length; b++) {
					var c = this.backgroundMaps[b];
					if (c.foreground) break;
					c.setScreenPos(this.screen.x, this.screen.y);
					c.draw();
				}
				this.drawEntities();
				for (b; b < this.backgroundMaps.length; b++)
					(c = this.backgroundMaps[b]), c.setScreenPos(this.screen.x, this.screen.y), c.draw();
			},
			drawEntities: function () {
				for (var b = 0; b < this.entities.length; b++) this.entities[b].draw();
			},
			checkEntities: function () {
				for (var b = {}, c = 0; c < this.entities.length; c++) {
					var d = this.entities[c];
					if (
						!(
							d.type == ig.Entity.TYPE.NONE &&
							d.checkAgainst == ig.Entity.TYPE.NONE &&
							d.collides == ig.Entity.COLLIDES.NEVER
						)
					)
						for (
							var e = {},
								f = Math.floor(d.pos.y / this.cellSize),
								l = Math.floor((d.pos.x + d.size.x) / this.cellSize) + 1,
								n = Math.floor((d.pos.y + d.size.y) / this.cellSize) + 1,
								q = Math.floor(d.pos.x / this.cellSize);
							q < l;
							q++
						)
							for (var j = f; j < n; j++)
								if (b[q])
									if (b[q][j]) {
										for (var p = b[q][j], m = 0; m < p.length; m++)
											d.touches(p[m]) &&
												!e[p[m].id] &&
												((e[p[m].id] = !0), ig.Entity.checkPair(d, p[m]));
										p.push(d);
									} else b[q][j] = [d];
								else (b[q] = {}), (b[q][j] = [d]);
				}
			}
		});
		ig.Game.SORT = {
			Z_INDEX: function (b, c) {
				return b.zIndex - c.zIndex;
			},
			POS_X: function (b, c) {
				return b.pos.x + b.size.x - (c.pos.x + c.size.x);
			},
			POS_Y: function (b, c) {
				return b.pos.y + b.size.y - (c.pos.y + c.size.y);
			}
		};
	});
ig.baked = !0;
ig.module('impact.debug.menu')
	.requires('dom.ready', 'impact.system')
	.defines(function () {
		ig.System.inject({
			run: function () {
				ig.debug.beforeRun();
				this.parent();
				ig.debug.afterRun();
			},
			setGameNow: function (b) {
				this.parent(b);
				ig.debug.ready();
			}
		});
		ig.Debug = ig.Class.extend({
			options: {},
			panels: {},
			numbers: {},
			container: null,
			panelMenu: null,
			activePanel: null,
			debugTime: 0,
			debugTickAvg: 0.016,
			debugRealTime: Date.now(),
			init: function () {
				this.container = ig.$new('div');
				this.container.className = 'ig_debug';
				ig.$('body')[0].appendChild(this.container);
				this.panelMenu = ig.$new('div');
				this.panelMenu.innerHTML = '<div class="ig_debug_head">Impact.Debug:</div>';
				this.panelMenu.className = 'ig_debug_panel_menu';
				this.container.appendChild(this.panelMenu);
				this.numberContainer = ig.$new('div');
				this.numberContainer.className = 'ig_debug_stats';
				this.panelMenu.appendChild(this.numberContainer);
				window.console &&
					window.console.log &&
					window.console.assert &&
					((ig.log = console.log.bind ? console.log.bind(console) : console.log),
					(ig.assert = console.assert.bind ? console.assert.bind(console) : console.assert));
				ig.show = this.showNumber.bind(this);
			},
			addNumber: function (b) {
				var c = ig.$new('span');
				this.numberContainer.appendChild(c);
				this.numberContainer.appendChild(document.createTextNode(b));
				this.numbers[b] = c;
			},
			showNumber: function (b, c, d) {
				this.numbers[b] || this.addNumber(b, d);
				this.numbers[b].textContent = c;
			},
			addPanel: function (b) {
				var c = new b.type(b.name, b.label);
				if (b.options)
					for (var d = 0; d < b.options.length; d++) {
						var e = b.options[d];
						c.addOption(new ig.DebugOption(e.name, e.object, e.property));
					}
				this.panels[c.name] = c;
				c.container.style.display = 'none';
				this.container.appendChild(c.container);
				b = ig.$new('div');
				b.className = 'ig_debug_menu_item';
				b.textContent = c.label;
				b.addEventListener(
					'click',
					function () {
						this.togglePanel(c);
					}.bind(this),
					!1
				);
				c.menuItem = b;
				e = !1;
				for (d = 1; d < this.panelMenu.childNodes.length; d++) {
					var f = this.panelMenu.childNodes[d];
					if (f.textContent > c.label) {
						this.panelMenu.insertBefore(b, f);
						e = !0;
						break;
					}
				}
				e || this.panelMenu.appendChild(b);
			},
			showPanel: function (b) {
				this.togglePanel(this.panels[b]);
			},
			togglePanel: function (b) {
				b != this.activePanel &&
					this.activePanel &&
					(this.activePanel.toggle(!1),
					(this.activePanel.menuItem.className = 'ig_debug_menu_item'),
					(this.activePanel = null));
				var c = 'block' != b.container.style.display;
				b.toggle(c);
				b.menuItem.className = 'ig_debug_menu_item' + (c ? ' active' : '');
				c && (this.activePanel = b);
			},
			ready: function () {
				for (var b in this.panels) this.panels[b].ready();
			},
			beforeRun: function () {
				var b = Date.now();
				this.debugTickAvg = 0.8 * this.debugTickAvg + 0.2 * (b - this.debugRealTime);
				this.debugRealTime = b;
				this.activePanel && this.activePanel.beforeRun();
			},
			afterRun: function () {
				var b = Date.now() - this.debugRealTime;
				this.debugTime = 0.8 * this.debugTime + 0.2 * b;
				this.activePanel && this.activePanel.afterRun();
				this.showNumber('ms', this.debugTime.toFixed(2));
				this.showNumber('fps', Math.round(1e3 / this.debugTickAvg));
				this.showNumber('draws', ig.Image.drawCount);
				ig.game && ig.game.entities && this.showNumber('entities', ig.game.entities.length);
				ig.Image.drawCount = 0;
			}
		});
		ig.DebugPanel = ig.Class.extend({
			active: !1,
			container: null,
			options: [],
			panels: [],
			label: '',
			name: '',
			init: function (b, c) {
				this.name = b;
				this.label = c;
				this.container = ig.$new('div');
				this.container.className = 'ig_debug_panel ' + this.name;
			},
			toggle: function (b) {
				this.active = b;
				this.container.style.display = b ? 'block' : 'none';
			},
			addPanel: function (b) {
				this.panels.push(b);
				this.container.appendChild(b.container);
			},
			addOption: function (b) {
				this.options.push(b);
				this.container.appendChild(b.container);
			},
			ready: function () {},
			beforeRun: function () {},
			afterRun: function () {}
		});
		ig.DebugOption = ig.Class.extend({
			name: '',
			labelName: '',
			className: 'ig_debug_option',
			label: null,
			mark: null,
			container: null,
			active: !1,
			colors: { enabled: '#fff', disabled: '#444' },
			init: function (b, c, d) {
				this.name = b;
				this.object = c;
				this.property = d;
				this.active = this.object[this.property];
				this.container = ig.$new('div');
				this.container.className = 'ig_debug_option';
				this.label = ig.$new('span');
				this.label.className = 'ig_debug_label';
				this.label.textContent = this.name;
				this.mark = ig.$new('span');
				this.mark.className = 'ig_debug_label_mark';
				this.container.appendChild(this.mark);
				this.container.appendChild(this.label);
				this.container.addEventListener('click', this.click.bind(this), !1);
				this.setLabel();
			},
			setLabel: function () {
				this.mark.style.backgroundColor = this.active ? this.colors.enabled : this.colors.disabled;
			},
			click: function (b) {
				this.active = !this.active;
				this.object[this.property] = this.active;
				this.setLabel();
				b.stopPropagation();
				b.preventDefault();
				return !1;
			}
		});
		ig.debug = new ig.Debug();
	});
ig.baked = !0;
ig.module('impact.debug.entities-panel')
	.requires('impact.debug.menu', 'impact.entity')
	.defines(function () {
		ig.Entity.inject({
			colors: { names: '#fff', velocities: '#0f0', boxes: '#f00' },
			draw: function () {
				this.parent();
				ig.Entity._debugShowBoxes &&
					((ig.system.context.strokeStyle = this.colors.boxes),
					(ig.system.context.lineWidth = 1),
					ig.system.context.strokeRect(
						ig.system.getDrawPos(this.pos.x.round() - ig.game.screen.x) - 0.5,
						ig.system.getDrawPos(this.pos.y.round() - ig.game.screen.y) - 0.5,
						this.size.x * ig.system.scale,
						this.size.y * ig.system.scale
					));
				if (ig.Entity._debugShowVelocities) {
					var b = this.pos.x + this.size.x / 2,
						c = this.pos.y + this.size.y / 2;
					this._debugDrawLine(this.colors.velocities, b, c, b + this.vel.x, c + this.vel.y);
				}
				if (
					ig.Entity._debugShowNames &&
					(this.name &&
						((ig.system.context.fillStyle = this.colors.names),
						ig.system.context.fillText(
							this.name,
							ig.system.getDrawPos(this.pos.x - ig.game.screen.x),
							ig.system.getDrawPos(this.pos.y - ig.game.screen.y)
						)),
					'object' == typeof this.target)
				)
					for (var d in this.target)
						(b = ig.game.getEntityByName(this.target[d])) &&
							this._debugDrawLine(
								this.colors.names,
								this.pos.x + this.size.x / 2,
								this.pos.y + this.size.y / 2,
								b.pos.x + b.size.x / 2,
								b.pos.y + b.size.y / 2
							);
			},
			_debugDrawLine: function (b, c, d, e, f) {
				ig.system.context.strokeStyle = b;
				ig.system.context.lineWidth = 1;
				ig.system.context.beginPath();
				ig.system.context.moveTo(
					ig.system.getDrawPos(c - ig.game.screen.x),
					ig.system.getDrawPos(d - ig.game.screen.y)
				);
				ig.system.context.lineTo(
					ig.system.getDrawPos(e - ig.game.screen.x),
					ig.system.getDrawPos(f - ig.game.screen.y)
				);
				ig.system.context.stroke();
				ig.system.context.closePath();
			}
		});
		ig.Entity._debugEnableChecks = !0;
		ig.Entity._debugShowBoxes = !1;
		ig.Entity._debugShowVelocities = !1;
		ig.Entity._debugShowNames = !1;
		ig.Entity.oldCheckPair = ig.Entity.checkPair;
		ig.Entity.checkPair = function (b, c) {
			ig.Entity._debugEnableChecks && ig.Entity.oldCheckPair(b, c);
		};
		ig.debug.addPanel({
			type: ig.DebugPanel,
			name: 'entities',
			label: 'Entities',
			options: [
				{ name: 'Checks & Collisions', object: ig.Entity, property: '_debugEnableChecks' },
				{ name: 'Show Collision Boxes', object: ig.Entity, property: '_debugShowBoxes' },
				{ name: 'Show Velocities', object: ig.Entity, property: '_debugShowVelocities' },
				{ name: 'Show Names & Targets', object: ig.Entity, property: '_debugShowNames' }
			]
		});
	});
ig.baked = !0;
ig.module('impact.debug.maps-panel')
	.requires('impact.debug.menu', 'impact.game', 'impact.background-map')
	.defines(function () {
		ig.Game.inject({
			loadLevel: function (b) {
				this.parent(b);
				ig.debug.panels.maps.load(this);
			}
		});
		ig.DebugMapsPanel = ig.DebugPanel.extend({
			maps: [],
			mapScreens: [],
			init: function (b, c) {
				this.parent(b, c);
				this.load();
			},
			load: function (b) {
				this.options = [];
				this.panels = [];
				if (!b || !b.backgroundMaps.length) this.container.innerHTML = '<em>No Maps Loaded</em>';
				else {
					this.maps = b.backgroundMaps;
					this.mapScreens = [];
					this.container.innerHTML = '';
					for (b = 0; b < this.maps.length; b++) {
						var c = this.maps[b],
							d = new ig.DebugPanel(b, 'Layer ' + b),
							e = new ig.$new('strong');
						e.textContent = b + ': ' + c.tiles.path;
						d.container.appendChild(e);
						d.addOption(new ig.DebugOption('Enabled', c, 'enabled'));
						d.addOption(new ig.DebugOption('Pre Rendered', c, 'preRender'));
						d.addOption(new ig.DebugOption('Show Chunks', c, 'debugChunks'));
						this.generateMiniMap(d, c, b);
						this.addPanel(d);
					}
				}
			},
			generateMiniMap: function (b, c, d) {
				var e = ig.system.scale,
					f = ig.$new('canvas'),
					l = f.getContext('2d'),
					n = c.tiles.width * e,
					q = c.tiles.height * e,
					j = n / c.tilesize;
				l.drawImage(c.tiles.data, 0, 0, n, q, 0, 0, j, q / c.tilesize);
				l = ig.$new('canvas');
				l.width = c.width * e;
				l.height = c.height * e;
				var p = l.getContext('2d');
				ig.game.clearColor && ((p.fillStyle = ig.game.clearColor), p.fillRect(0, 0, n, q));
				for (q = n = 0; q < c.width; q++)
					for (var m = 0; m < c.height; m++)
						(n = c.data[m][q]) &&
							p.drawImage(
								f,
								Math.floor(((n - 1) * e) % j),
								Math.floor(((n - 1) * e) / j) * e,
								e,
								e,
								q * e,
								m * e,
								e,
								e
							);
				f = ig.$new('div');
				f.className = 'ig_debug_map_container';
				f.style.width = c.width * e + 'px';
				f.style.height = c.height * e + 'px';
				j = ig.$new('div');
				j.className = 'ig_debug_map_screen';
				j.style.width = (ig.system.width / c.tilesize) * e - 2 + 'px';
				j.style.height = (ig.system.height / c.tilesize) * e - 2 + 'px';
				this.mapScreens[d] = j;
				f.appendChild(l);
				f.appendChild(j);
				b.container.appendChild(f);
			},
			afterRun: function () {
				for (var b = ig.system.scale, c = 0; c < this.maps.length; c++) {
					var d = this.maps[c],
						e = this.mapScreens[c];
					if (d && e) {
						var f = d.scroll.x / d.tilesize,
							l = d.scroll.y / d.tilesize;
						d.repeat && ((f %= d.width), (l %= d.height));
						e.style.left = f * b + 'px';
						e.style.top = l * b + 'px';
					}
				}
			}
		});
		ig.debug.addPanel({ type: ig.DebugMapsPanel, name: 'maps', label: 'Background Maps' });
	});
ig.baked = !0;
ig.module('impact.debug.graph-panel')
	.requires('impact.debug.menu', 'impact.system', 'impact.game', 'impact.image')
	.defines(function () {
		ig.Game.inject({
			draw: function () {
				ig.graph.beginClock('draw');
				this.parent();
				ig.graph.endClock('draw');
			},
			update: function () {
				ig.graph.beginClock('update');
				this.parent();
				ig.graph.endClock('update');
			},
			checkEntities: function () {
				ig.graph.beginClock('checks');
				this.parent();
				ig.graph.endClock('checks');
			}
		});
		ig.DebugGraphPanel = ig.DebugPanel.extend({
			clocks: {},
			marks: [],
			textY: 0,
			height: 128,
			ms: 64,
			timeBeforeRun: 0,
			init: function (b, c) {
				this.parent(b, c);
				this.mark16ms = (this.height - 16 * (this.height / this.ms)).round();
				this.mark33ms = (this.height - 33 * (this.height / this.ms)).round();
				this.msHeight = this.height / this.ms;
				this.graph = ig.$new('canvas');
				this.graph.width = window.innerWidth;
				this.graph.height = this.height;
				this.container.appendChild(this.graph);
				this.ctx = this.graph.getContext('2d');
				this.ctx.fillStyle = '#444';
				this.ctx.fillRect(0, this.mark16ms, this.graph.width, 1);
				this.ctx.fillRect(0, this.mark33ms, this.graph.width, 1);
				this.addGraphMark('16ms', this.mark16ms);
				this.addGraphMark('33ms', this.mark33ms);
				this.addClock('draw', 'Draw', '#13baff');
				this.addClock('update', 'Entity Update', '#bb0fff');
				this.addClock('checks', 'Entity Checks & Collisions', '#a2e908');
				this.addClock('lag', 'System Lag', '#f26900');
				ig.mark = this.mark.bind(this);
				ig.graph = this;
			},
			addGraphMark: function (b, c) {
				var d = ig.$new('span');
				d.className = 'ig_debug_graph_mark';
				d.textContent = b;
				d.style.top = c.round() + 'px';
				this.container.appendChild(d);
			},
			addClock: function (b, c, d) {
				var e = ig.$new('span');
				e.className = 'ig_debug_legend_color';
				e.style.backgroundColor = d;
				var f = ig.$new('span');
				f.className = 'ig_debug_legend_number';
				f.appendChild(document.createTextNode('0'));
				var l = ig.$new('span');
				l.className = 'ig_debug_legend';
				l.appendChild(e);
				l.appendChild(document.createTextNode(c + ' ('));
				l.appendChild(f);
				l.appendChild(document.createTextNode('ms)'));
				this.container.appendChild(l);
				this.clocks[b] = {
					description: c,
					color: d,
					current: 0,
					start: Date.now(),
					avg: 0,
					html: f
				};
			},
			beginClock: function (b, c) {
				this.clocks[b].start = Date.now() + (c || 0);
			},
			endClock: function (b) {
				b = this.clocks[b];
				b.current = Math.round(Date.now() - b.start);
				b.avg = 0.8 * b.avg + 0.2 * b.current;
			},
			mark: function (b, c) {
				this.active && this.marks.push({ msg: b, color: c || '#fff' });
			},
			beforeRun: function () {
				this.endClock('lag');
				this.timeBeforeRun = Date.now();
			},
			afterRun: function () {
				var b = Date.now() - this.timeBeforeRun;
				this.beginClock('lag', Math.max(1e3 / ig.system.fps - b, 0));
				var b = this.graph.width - 1,
					c = this.height;
				this.ctx.drawImage(this.graph, -1, 0);
				this.ctx.fillStyle = '#000';
				this.ctx.fillRect(b, 0, 1, this.height);
				this.ctx.fillStyle = '#444';
				this.ctx.fillRect(b, this.mark16ms, 1, 1);
				this.ctx.fillStyle = '#444';
				this.ctx.fillRect(b, this.mark33ms, 1, 1);
				for (var d in this.clocks) {
					var e = this.clocks[d];
					e.html.textContent = e.avg.toFixed(2);
					if (e.color && 0 < e.current) {
						this.ctx.fillStyle = e.color;
						var f = e.current * this.msHeight,
							c = c - f;
						this.ctx.fillRect(b, c, 1, f);
						e.current = 0;
					}
				}
				this.ctx.textAlign = 'right';
				this.ctx.textBaseline = 'top';
				this.ctx.globalAlpha = 0.5;
				for (d = 0; d < this.marks.length; d++)
					(c = this.marks[d]),
						(this.ctx.fillStyle = c.color),
						this.ctx.fillRect(b, 0, 1, this.height),
						c.msg &&
							(this.ctx.fillText(c.msg, b - 1, this.textY), (this.textY = (this.textY + 8) % 32));
				this.ctx.globalAlpha = 1;
				this.marks = [];
			}
		});
		ig.debug.addPanel({ type: ig.DebugGraphPanel, name: 'graph', label: 'Performance' });
	});
ig.baked = !0;
ig.module('impact.debug.debug')
	.requires('impact.debug.entities-panel', 'impact.debug.maps-panel', 'impact.debug.graph-panel')
	.defines(function () {});
ig.baked = !0;
ig.module('plugins.patches.user-agent-patch').defines(function () {
	ig.ua.touchDevice =
		'ontouchstart' in window ||
		window.navigator.msMaxTouchPoints ||
		window.navigator.maxTouchPoints;
	ig.ua.is_mac = 'MacIntel' === navigator.platform;
	ig.ua.iOS = (ig.ua.touchDevice && ig.ua.is_mac) || ig.ua.iOS;
	ig.ua.mobile = ig.ua.iOS || ig.ua.mobile;
});
ig.baked = !0;
ig.module('plugins.splash-loader')
	.requires('impact.loader', 'impact.animation')
	.defines(function () {
		ig.SplashLoader = ig.Loader.extend({
			bgImage: new ig.Image('media/graphics/game/backgrounds/mainbg.jpg'),
			titleImage: new ig.Image('media/graphics/game/backgrounds/maintitle.png'),
			loadingTextAlpha: 1,
			isLoading: !1,
			timeLoader: 600,
			init: function (b, c) {
				this.parent(b, c);
				this.setupCustomAnimation();
				ig.ua.mobile && _SETTINGS.Ad.Mobile.Preroll.Enabled && MobileAdInGamePreroll.Initialize();
				ig.system.context.font = '18px mainfont, Helvetica, Verdana';
				ig.system.context.fillText('', 0, 0);
				ig.splashLoader = this;
				this.loadTimer = setTimeout(
					function () {
						0 == this._drawStatus
							? this.load(!0)
							: 1 == this._drawStatus && !1 == this.isStartGame && this.load(!0);
					}.bind(this),
					this.timeLoader
				);
			},
			startGame: function () {
				clearTimeout(this.loadTimer);
				this.isStartGame = !0;
				ig.system.setGame(MyGame);
			},
			end: function () {
				this.loadingTextAlpha = 1;
				this.parent();
				this._drawStatus = 1;
				this.draw();
				this.startGame();
			},
			tapToStartDiv: function (b) {
				this.desktopCoverDIV = document.createElement('div');
				this.desktopCoverDIV.id = this.desktopCoverDIVID;
				this.desktopCoverDIV.setAttribute('class', 'play');
				this.desktopCoverDIV.setAttribute(
					'style',
					'position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0.7); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;'
				);
				this.desktopCoverDIV.innerHTML =
					"<div style='color:white;background-color: rgba(255, 255, 255, 0.3); border: 2px solid #fff; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: Arial;'>" +
					_STRINGS.Loading.TapToStart +
					'</div></div>';
				(
					document.getElementById('play').parentNode || document.getElementById('ajaxbar')
				).appendChild(this.desktopCoverDIV);
				try {
					'undefined' !== typeof ig.sizeHandler
						? 'undefined' !== typeof ig.sizeHandler.coreDivsToResize &&
						  (ig.sizeHandler.coreDivsToResize.push('#' + this.desktopCoverDIVID),
						  'function' === typeof ig.sizeHandler.reorient && ig.sizeHandler.reorient())
						: 'undefined' !== typeof coreDivsToResize &&
						  (coreDivsToResize.push(this.desktopCoverDIVID),
						  'function' === typeof sizeHandler && sizeHandler());
				} catch (c) {
					console.log(c);
				}
				this.desktopCoverDIV.addEventListener('click', function () {
					try {
						'undefined' !== typeof ig.soundHandler
							? ('undefined' !== typeof ig.soundHandler.bgmPlayer
									? 'undefined' !== typeof ig.soundHandler.bgmPlayer.webaudio &&
									  'undefined' !== typeof ig.soundHandler.bgmPlayer.webaudio.context &&
									  ig.soundHandler.bgmPlayer.webaudio.context.resume()
									: ((ig.soundHandler = null),
									  (ig.soundHandler =
											'undefined' !== typeof ig.soundList
												? new ig.SoundHandler(ig.soundList)
												: new ig.SoundHandler())),
							  'undefined' !== typeof ig.soundHandler.sfxPlayer
									? 'function' === typeof ig.soundHandler.sfxPlayer.play &&
									  ig.soundHandler.sfxPlayer.play('staticSound')
									: 'undefined' !== typeof ig.soundHandler.staticSound
									? 'function' === typeof ig.soundHandler.staticSound.play &&
									  ig.soundHandler.staticSound.play()
									: 'function' === typeof ig.soundHandler.playSound &&
									  ig.soundHandler.playSound('staticSound'))
							: 'undefined' !== typeof Howl
							? ((ig.global.staticSound = new Howl({
									src: ['media/audio/play/static.ogg', 'media/audio/play/static.mp3']
							  })),
							  ig.global.staticSound.play())
							: 'undefined' !== typeof createjs &&
							  'undefined' !== typeof createjs.Sound &&
							  'function' === typeof createjs.Sound.play &&
							  createjs.Sound.play('opening');
					} catch (c) {
						console.log(c);
					}
					this.setAttribute('style', 'visibility: hidden;');
					'function' === typeof b && b();
					ig.system.setGame(MyGame);
				});
			},
			setupCustomAnimation: function () {
				ig.loadingScreen = this;
				ig.loadingScreen.animationTimer = window.setInterval('ig.loadingScreen.animate()', 100);
			},
			animate: function () {
				var b = (Date.now() / 1e3) % 1;
				0.5 < b && (b = 1 - b);
				this.loadingTextAlpha = 1 - 2 * b;
			},
			draw: function () {
				this._drawStatus += (this.status - this._drawStatus) / 5;
				var b = ig.system.context;
				b.save();
				b.fillStyle = '#000000';
				b.fillRect(0, 0, ig.system.width, ig.system.height);
				this.bgImage.width < ig.system.width && b.scale(ig.system.width / this.bgImage.width, 1);
				this.bgImage.draw(0, 0);
				b.restore();
				this.titleImage.draw(ig.system.width / 2 - this.titleImage.width / 2, 0);
				var c;
				w0 = 152;
				h0 = 11;
				x0 = (ig.system.width - w0) / 2;
				y0 = 570;
				ig.system.context.save();
				b.translate(x0 + w0 / 2, y0);
				b.fillStyle = '#000000';
				b.strokeStyle = '#000000';
				b.lineWidth = 0;
				b.fillRect(-w0 / 2, 0, w0, h0);
				b.strokeRect(-w0 / 2, 0, w0, h0);
				c = this._drawStatus * w0;
				b.fillStyle = '#A5DE3E';
				b.strokeStyle = '#A5DE3E';
				b.lineWidth = 0;
				b.fillRect(-w0 / 2, 0, c, h0 / 2);
				b.strokeRect(-w0 / 2, 0, c, h0 / 2);
				b.fillStyle = '#67BD51';
				b.strokeStyle = '#67BD51';
				b.lineWidth = 0;
				b.fillRect(-w0 / 2, h0 / 2, c, h0 / 2);
				b.strokeRect(-w0 / 2, h0 / 2, c, h0 / 2);
				ig.system.context.fillStyle = '#000000';
				ig.system.context.font = '20px mainfont, Helvetica, Verdana';
				b = _STRINGS.Loading.Loading;
				c = ig.system.context.measureText('m').width;
				c = h0 + c + (4 * c) / 10;
				ig.system.context.globalAlpha = this.loadingTextAlpha;
				ig.system.context.textAlign = 'center';
				ig.system.context.fillText(b, 0, c);
				ig.system.context.restore();
			}
		});
	});
ig.baked = !0;
ig.module('plugins.tween')
	.requires('impact.entity')
	.defines(function () {
		Array.prototype.indexOf ||
			(Array.prototype.indexOf = function (b) {
				for (var c = 0; c < this.length; ++c) if (this[c] === b) return c;
				return -1;
			});
		ig.Entity.prototype.tweens = [];
		ig.Entity.prototype._preTweenUpdate = ig.Entity.prototype.update;
		ig.Entity.prototype.update = function () {
			this._preTweenUpdate();
			if (0 < this.tweens.length) {
				for (var b = [], c = 0; c < this.tweens.length; c++)
					this.tweens[c].update(), this.tweens[c].complete || b.push(this.tweens[c]);
				this.tweens = b;
			}
		};
		ig.Entity.prototype.tween = function (b, c, d) {
			b = new ig.Tween(this, b, c, d);
			this.tweens.push(b);
			return b;
		};
		ig.Entity.prototype.pauseTweens = function () {
			for (var b = 0; b < this.tweens.length; b++) this.tweens[b].pause();
		};
		ig.Entity.prototype.resumeTweens = function () {
			for (var b = 0; b < this.tweens.length; b++) this.tweens[b].resume();
		};
		ig.Entity.prototype.stopTweens = function (b) {
			for (var c = 0; c < this.tweens.length; c++) this.tweens[c].stop(b);
		};
		ig.Tween = function (b, c, d, e) {
			var f = {},
				l = {},
				n = {},
				q = 0,
				j = !1,
				p = !1,
				m = !1;
			this.duration = d;
			this.paused = this.complete = !1;
			this.easing = ig.Tween.Easing.Linear.EaseNone;
			this.onComplete = !1;
			this.loop = this.delay = 0;
			this.loopCount = -1;
			ig.merge(this, e);
			this.loopNum = this.loopCount;
			this.chain = function (b) {
				m = b;
			};
			this.initEnd = function (b, c, d) {
				if ('object' !== typeof c[b]) d[b] = c[b];
				else for (subprop in c[b]) d[b] || (d[b] = {}), this.initEnd(subprop, c[b], d[b]);
			};
			this.initStart = function (b, c, d, e) {
				if ('object' !== typeof d[b]) 'undefined' !== typeof c[b] && (e[b] = d[b]);
				else
					for (subprop in d[b])
						e[b] || (e[b] = {}),
							'undefined' !== typeof c[b] && this.initStart(subprop, c[b], d[b], e[b]);
			};
			this.start = function () {
				this.paused = this.complete = !1;
				this.loopNum = this.loopCount;
				q = 0;
				-1 == b.tweens.indexOf(this) && b.tweens.push(this);
				p = !0;
				j = new ig.Timer();
				for (var d in c) this.initEnd(d, c, l);
				for (d in l) this.initStart(d, l, b, f), this.initDelta(d, n, b, l);
			};
			this.initDelta = function (b, c, d, e) {
				if ('object' !== typeof e[b]) c[b] = e[b] - d[b];
				else for (subprop in e[b]) c[b] || (c[b] = {}), this.initDelta(subprop, c[b], d[b], e[b]);
			};
			this.propUpdate = function (b, c, d, e, f) {
				if ('object' !== typeof d[b]) c[b] = 'undefined' != typeof d[b] ? d[b] + e[b] * f : c[b];
				else for (subprop in d[b]) this.propUpdate(subprop, c[b], d[b], e[b], f);
			};
			this.propSet = function (b, c, d) {
				if ('object' !== typeof c[b]) d[b] = c[b];
				else for (subprop in c[b]) d[b] || (d[b] = {}), this.propSet(subprop, c[b], d[b]);
			};
			this.update = function () {
				if (!p) return !1;
				if (this.delay) {
					if (j.delta() < this.delay) return;
					this.delay = 0;
					j.reset();
				}
				if (this.paused || this.complete) return !1;
				var c = (j.delta() + q) / this.duration,
					c = 1 < c ? 1 : c,
					d = this.easing(c);
				for (property in n) this.propUpdate(property, b, f, n, d);
				if (1 <= c) {
					if (0 == this.loopNum || !this.loop) {
						this.complete = !0;
						if (this.onComplete) this.onComplete();
						m && m.start();
						return !1;
					}
					if (this.loop == ig.Tween.Loop.Revert) {
						for (property in f) this.propSet(property, f, b);
						q = 0;
						j.reset();
						-1 != this.loopNum && this.loopNum--;
					} else if (this.loop == ig.Tween.Loop.Reverse) {
						c = {};
						d = {};
						ig.merge(c, l);
						ig.merge(d, f);
						ig.merge(f, c);
						ig.merge(l, d);
						for (property in l) this.initDelta(property, n, b, l);
						q = 0;
						j.reset();
						-1 != this.loopNum && this.loopNum--;
					}
				}
			};
			this.pause = function () {
				this.paused = !0;
				q += j.delta();
			};
			this.resume = function () {
				this.paused = !1;
				j.reset();
			};
			this.stop = function (b) {
				b && ((this.loop = this.complete = this.paused = !1), (q += d), this.update());
				this.complete = !0;
			};
		};
		ig.Tween.Loop = { Revert: 1, Reverse: 2 };
		ig.Tween.Easing = {
			Linear: {},
			Quadratic: {},
			Cubic: {},
			Quartic: {},
			Quintic: {},
			Sinusoidal: {},
			Exponential: {},
			Circular: {},
			Elastic: {},
			Back: {},
			Bounce: {}
		};
		ig.Tween.Easing.Linear.EaseNone = function (b) {
			return b;
		};
		ig.Tween.Easing.Quadratic.EaseIn = function (b) {
			return b * b;
		};
		ig.Tween.Easing.Quadratic.EaseOut = function (b) {
			return -b * (b - 2);
		};
		ig.Tween.Easing.Quadratic.EaseInOut = function (b) {
			return 1 > (b *= 2) ? 0.5 * b * b : -0.5 * (--b * (b - 2) - 1);
		};
		ig.Tween.Easing.Cubic.EaseIn = function (b) {
			return b * b * b;
		};
		ig.Tween.Easing.Cubic.EaseOut = function (b) {
			return --b * b * b + 1;
		};
		ig.Tween.Easing.Cubic.EaseInOut = function (b) {
			return 1 > (b *= 2) ? 0.5 * b * b * b : 0.5 * ((b -= 2) * b * b + 2);
		};
		ig.Tween.Easing.Quartic.EaseIn = function (b) {
			return b * b * b * b;
		};
		ig.Tween.Easing.Quartic.EaseOut = function (b) {
			return -(--b * b * b * b - 1);
		};
		ig.Tween.Easing.Quartic.EaseInOut = function (b) {
			return 1 > (b *= 2) ? 0.5 * b * b * b * b : -0.5 * ((b -= 2) * b * b * b - 2);
		};
		ig.Tween.Easing.Quintic.EaseIn = function (b) {
			return b * b * b * b * b;
		};
		ig.Tween.Easing.Quintic.EaseOut = function (b) {
			return (b -= 1) * b * b * b * b + 1;
		};
		ig.Tween.Easing.Quintic.EaseInOut = function (b) {
			return 1 > (b *= 2) ? 0.5 * b * b * b * b * b : 0.5 * ((b -= 2) * b * b * b * b + 2);
		};
		ig.Tween.Easing.Sinusoidal.EaseIn = function (b) {
			return -Math.cos((b * Math.PI) / 2) + 1;
		};
		ig.Tween.Easing.Sinusoidal.EaseOut = function (b) {
			return Math.sin((b * Math.PI) / 2);
		};
		ig.Tween.Easing.Sinusoidal.EaseInOut = function (b) {
			return -0.5 * (Math.cos(Math.PI * b) - 1);
		};
		ig.Tween.Easing.Exponential.EaseIn = function (b) {
			return 0 == b ? 0 : Math.pow(2, 10 * (b - 1));
		};
		ig.Tween.Easing.Exponential.EaseOut = function (b) {
			return 1 == b ? 1 : -Math.pow(2, -10 * b) + 1;
		};
		ig.Tween.Easing.Exponential.EaseInOut = function (b) {
			return 0 == b
				? 0
				: 1 == b
				? 1
				: 1 > (b *= 2)
				? 0.5 * Math.pow(2, 10 * (b - 1))
				: 0.5 * (-Math.pow(2, -10 * (b - 1)) + 2);
		};
		ig.Tween.Easing.Circular.EaseIn = function (b) {
			return -(Math.sqrt(1 - b * b) - 1);
		};
		ig.Tween.Easing.Circular.EaseOut = function (b) {
			return Math.sqrt(1 - --b * b);
		};
		ig.Tween.Easing.Circular.EaseInOut = function (b) {
			return 1 > (b /= 0.5)
				? -0.5 * (Math.sqrt(1 - b * b) - 1)
				: 0.5 * (Math.sqrt(1 - (b -= 2) * b) + 1);
		};
		ig.Tween.Easing.Elastic.EaseIn = function (b) {
			var c,
				d = 0.1,
				e = 0.4;
			if (0 == b) return 0;
			if (1 == b) return 1;
			e || (e = 0.3);
			!d || 1 > d ? ((d = 1), (c = e / 4)) : (c = (e / (2 * Math.PI)) * Math.asin(1 / d));
			return -(d * Math.pow(2, 10 * (b -= 1)) * Math.sin((2 * (b - c) * Math.PI) / e));
		};
		ig.Tween.Easing.Elastic.EaseOut = function (b) {
			var c,
				d = 0.1,
				e = 0.4;
			if (0 == b) return 0;
			if (1 == b) return 1;
			e || (e = 0.3);
			!d || 1 > d ? ((d = 1), (c = e / 4)) : (c = (e / (2 * Math.PI)) * Math.asin(1 / d));
			return d * Math.pow(2, -10 * b) * Math.sin((2 * (b - c) * Math.PI) / e) + 1;
		};
		ig.Tween.Easing.Elastic.EaseInOut = function (b) {
			var c,
				d = 0.1,
				e = 0.4;
			if (0 == b) return 0;
			if (1 == b) return 1;
			e || (e = 0.3);
			!d || 1 > d ? ((d = 1), (c = e / 4)) : (c = (e / (2 * Math.PI)) * Math.asin(1 / d));
			return 1 > (b *= 2)
				? -0.5 * d * Math.pow(2, 10 * (b -= 1)) * Math.sin((2 * (b - c) * Math.PI) / e)
				: 0.5 * d * Math.pow(2, -10 * (b -= 1)) * Math.sin((2 * (b - c) * Math.PI) / e) + 1;
		};
		ig.Tween.Easing.Back.EaseIn = function (b) {
			return b * b * (2.70158 * b - 1.70158);
		};
		ig.Tween.Easing.Back.EaseOut = function (b) {
			return (b -= 1) * b * (2.70158 * b + 1.70158) + 1;
		};
		ig.Tween.Easing.Back.EaseInOut = function (b) {
			return 1 > (b *= 2)
				? 0.5 * b * b * (3.5949095 * b - 2.5949095)
				: 0.5 * ((b -= 2) * b * (3.5949095 * b + 2.5949095) + 2);
		};
		ig.Tween.Easing.Bounce.EaseIn = function (b) {
			return 1 - ig.Tween.Easing.Bounce.EaseOut(1 - b);
		};
		ig.Tween.Easing.Bounce.EaseOut = function (b) {
			return (b /= 1) < 1 / 2.75
				? 7.5625 * b * b
				: b < 2 / 2.75
				? 7.5625 * (b -= 1.5 / 2.75) * b + 0.75
				: b < 2.5 / 2.75
				? 7.5625 * (b -= 2.25 / 2.75) * b + 0.9375
				: 7.5625 * (b -= 2.625 / 2.75) * b + 0.984375;
		};
		ig.Tween.Easing.Bounce.EaseInOut = function (b) {
			return 0.5 > b
				? 0.5 * ig.Tween.Easing.Bounce.EaseIn(2 * b)
				: 0.5 * ig.Tween.Easing.Bounce.EaseOut(2 * b - 1) + 0.5;
		};
	});
ig.baked = !0;
ig.module('plugins.url-parameters').defines(function () {
	ig.UrlParameters = ig.Class.extend({
		init: function () {
			switch (getQueryVariable('iphone')) {
				case 'true':
					(ig.ua.iPhone = !0), console.log('iPhone mode');
			}
			var b = getQueryVariable('webview');
			if (b)
				switch (b) {
					case 'true':
						(ig.ua.is_uiwebview = !0), console.log('webview mode');
				}
			if ((b = getQueryVariable('debug')))
				switch (b) {
					case 'true':
						ig.game.showDebugMenu(), console.log('debug mode');
				}
			switch (getQueryVariable('view')) {
				case 'stats':
					ig.game.resetPlayerStats(), ig.game.endGame();
			}
			getQueryVariable('ad');
		}
	});
});
ig.baked = !0;
ig.module('plugins.jukebox').defines(function () {
	ig.Jukebox = ig.Class.extend({
		init: function () {
			this.player = new jukebox.Player({
				resources: ['media/audio/music/bgm.mp3', 'media/audio/music/bgm.ogg'],
				spritemap: { music: { start: 0.05, end: 13.752, loop: !0 } }
			});
		}
	});
});
ig.baked = !0;
ig.module('plugins.director')
	.requires('impact.impact')
	.defines(function () {
		ig.Director = ig.Class.extend({
			init: function (b, c) {
				this.game = b;
				this.levels = [];
				this.currentLevel = 0;
				this.append(c);
			},
			loadLevel: function (b) {
				for (key in dynamicClickableEntityDivs) ig.game.hideOverlay([key]);
				this.currentLevel = b;
				this.game.loadLevel(this.levels[b]);
				return !0;
			},
			loadLevelWithoutEntities: function (b) {
				this.currentLevel = b;
				this.game.loadLevelWithoutEntities(this.levels[b]);
				return !0;
			},
			append: function (b) {
				newLevels = [];
				return 'object' === typeof b
					? (b.constructor === [].constructor ? (newLevels = b) : (newLevels[0] = b),
					  (this.levels = this.levels.concat(newLevels)),
					  !0)
					: !1;
			},
			nextLevel: function () {
				return this.currentLevel + 1 < this.levels.length
					? this.loadLevel(this.currentLevel + 1)
					: !1;
			},
			previousLevel: function () {
				return 0 <= this.currentLevel - 1 ? this.loadLevel(this.currentLevel - 1) : !1;
			},
			jumpTo: function (b) {
				var c = null;
				for (i = 0; i < this.levels.length; i++) this.levels[i] == b && (c = i);
				return 0 <= c ? this.loadLevel(c) : !1;
			},
			firstLevel: function () {
				return this.loadLevel(0);
			},
			lastLevel: function () {
				return this.loadLevel(this.levels.length - 1);
			},
			reloadLevel: function () {
				return this.loadLevel(this.currentLevel);
			}
		});
	});
ig.baked = !0;
ig.module('plugins.impact-storage')
	.requires('impact.game')
	.defines(function () {
		ig.Storage = ig.Class.extend({
			staticInstantiate: function () {
				return !ig.Storage.instance ? null : ig.Storage.instance;
			},
			init: function () {
				ig.Storage.instance = this;
			},
			isCapable: function () {
				return 'undefined' !== typeof window.localStorage;
			},
			isSet: function (b) {
				return null !== this.get(b);
			},
			initUnset: function (b, c) {
				null === this.get(b) && this.set(b, c);
			},
			get: function (b) {
				if (!this.isCapable()) return null;
				try {
					return JSON.parse(localStorage.getItem(b));
				} catch (c) {
					return window.localStorage.getItem(b);
				}
			},
			getInt: function (b) {
				return ~~this.get(b);
			},
			getFloat: function (b) {
				return parseFloat(this.get(b));
			},
			getBool: function (b) {
				return !!this.get(b);
			},
			key: function (b) {
				return this.isCapable() ? window.localStorage.key(b) : null;
			},
			set: function (b, c) {
				if (!this.isCapable()) return null;
				try {
					window.localStorage.setItem(b, JSON.stringify(c));
				} catch (d) {
					console.log(d);
				}
			},
			setHighest: function (b, c) {
				c > this.getFloat(b) && this.set(b, c);
			},
			remove: function (b) {
				if (!this.isCapable()) return null;
				window.localStorage.removeItem(b);
			},
			clear: function () {
				if (!this.isCapable()) return null;
				window.localStorage.clear();
			}
		});
	});
ig.baked = !0;
ig.module('plugins.webaudio-music-player').defines(function () {
	WebaudioMusicPlayer = ig.Class.extend({
		bgmPlaying: !1,
		isSupported: !1,
		muteFlag: !1,
		pausedTime: 0,
		webaudio: null,
		soundList: {},
		init: function (b) {
			this.webaudio = {
				compatibility: {},
				gainNode: null,
				buffer: null,
				source_loop: {},
				source_once: {}
			};
			try {
				(this.AudioContext = window.AudioContext || window.webkitAudioContext),
					(this.webaudio.context = new this.AudioContext()),
					(this.isSupported = !0);
			} catch (c) {
				console.log('Web Audio API not supported in this browser.');
				return;
			}
			ig.ua.iOS && this.initIOSWebAudioUnlock();
			this.webaudio.gainNode = this.webaudio.context.createGain();
			this.webaudio.gainNode.connect(this.webaudio.context.destination);
			var d = 'start',
				e = 'stop',
				f = this.webaudio.context.createBufferSource();
			'function' !== typeof f.start && (d = 'noteOn');
			this.webaudio.compatibility.start = d;
			'function' !== typeof f.stop && (e = 'noteOff');
			this.webaudio.compatibility.stop = e;
			for (var l in b) {
				this.soundList[l] = l;
				d = b[l].path;
				b = d + '.' + ig.Sound.FORMAT.MP3.ext;
				var n = d + '.' + ig.Sound.FORMAT.OGG.ext;
				ig.ua.mobile
					? ig.ua.iOS && (n = b)
					: ((d = navigator.userAgent.toLowerCase()),
					  -1 != d.indexOf('safari') && -1 >= d.indexOf('chrome') && (n = b));
				var q = new XMLHttpRequest();
				q.open('GET', n, !0);
				q.responseType = 'arraybuffer';
				q.onload = function () {
					this.webaudio.context.decodeAudioData(
						q.response,
						function (b) {
							this.webaudio.buffer = b;
							this.webaudio.source_loop = {};
							this.bgmPlaying ? this.play() : this.stop();
						}.bind(this),
						function () {
							console.log('Error decoding audio "' + n + '".');
						}
					);
				}.bind(this);
				q.send();
				break;
			}
		},
		initIOSWebAudioUnlock: function () {
			webaudio = this.webaudio;
			var b = function () {
				var c = webaudio.context,
					d = c.createBuffer(1, 1, 22050),
					e = c.createBufferSource();
				e.buffer = d;
				e.connect(c.destination);
				'undefined' === typeof e.start ? e.noteOn(0) : e.start(0);
				setTimeout(function () {
					(e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) &&
						window.removeEventListener('touchend', b, !1);
				}, 0);
			};
			window.addEventListener('touchend', b, !1);
		},
		play: function () {
			if (this.isSupported)
				if (this.webaudio.buffer) {
					if (!this.muteFlag && ((this.bgmPlaying = !0), !this.webaudio.source_loop._playing)) {
						this.webaudio.source_loop = this.webaudio.context.createBufferSource();
						this.webaudio.source_loop.buffer = this.webaudio.buffer;
						this.webaudio.source_loop.loop = !0;
						this.webaudio.source_loop.connect(this.webaudio.gainNode);
						var b = 0;
						this.pausedTime && (b = this.pausedTime);
						this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
						if ('noteOn' === this.webaudio.compatibility.start)
							(this.webaudio.source_once = this.webaudio.context.createBufferSource()),
								(this.webaudio.source_once.buffer = this.webaudio.buffer),
								this.webaudio.source_once.connect(this.webaudio.gainNode),
								this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b),
								this.webaudio.source_loop[this.webaudio.compatibility.start](
									this.webaudio.context.currentTime + (this.webaudio.buffer.duration - b)
								);
						else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
						this.webaudio.source_loop._playing = !0;
					}
				} else this.bgmPlaying = !0;
		},
		stop: function () {
			this.bgmPlaying = !1;
			if (
				this.isSupported &&
				this.webaudio.source_loop._playing &&
				(this.webaudio.source_loop[this.webaudio.compatibility.stop](0),
				(this.webaudio.source_loop._playing = !1),
				(this.pausedTime =
					this.webaudio.context.currentTime % this.webaudio.source_loop.buffer.duration),
				(this.webaudio.source_loop._startTime = 0),
				'noteOn' === this.webaudio.compatibility.start)
			)
				this.webaudio.source_once[this.webaudio.compatibility.stop](0);
		},
		volume: function (b) {
			this.isSupported && this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = b);
		},
		getVolume: function () {
			return !this.isSupported || !this.webaudio.gainNode ? 0 : this.webaudio.gainNode.gain.value;
		},
		mute: function () {
			!1 == this.muteFlag && ((this.muteFlag = !0), this.bgmPlaying && this.stop());
		},
		unmute: function () {
			!0 == this.muteFlag && ((this.muteFlag = !1), this.play());
		}
	});
});
ig.baked = !0;
ig.module('plugins.fake-storage')
	.requires('impact.game')
	.defines(function () {
		ig.FakeStorage = ig.Class.extend({
			tempData: {},
			init: function () {
				ig.FakeStorage.instance = this;
			},
			initUnset: function (b, c) {
				null === this.get(b) && this.set(b, c);
			},
			set: function (b, c) {
				this.tempData[b] = JSON.stringify(c);
			},
			setHighest: function (b, c) {
				c > this.getFloat(b) && this.set(b, c);
			},
			get: function (b) {
				return 'undefined' == typeof this.tempData[b] ? null : JSON.parse(this.tempData[b]);
			},
			getInt: function (b) {
				return ~~this.get(b);
			},
			getFloat: function (b) {
				return parseFloat(this.get(b));
			},
			getBool: function (b) {
				return !!this.get(b);
			},
			isSet: function (b) {
				return null !== this.get(b);
			},
			remove: function () {
				delete this.tempData.key;
			},
			clear: function () {
				this.tempData = {};
			}
		});
	});
ig.baked = !0;
ig.module('plugins.vigoo-plugin').defines(function () {
	ig.VigooPlugin = ig.Class.extend({
		hasLoggedIn: !1,
		addButtonTest: !0,
		hasHideloading: !1,
		isProcess: !0,
		init: function () {
			console.log('vigoo init');
			if (vigoo)
				try {
					vigoo.Login(
						function (b) {
							this.appid = b.appid;
							this.openid = b.openid;
							this.token = b.token;
							setTimeout(
								function () {
									ig.vigoo.hideloading();
								}.bind(this),
								300
							);
							this.hasLoggedIn = !0;
							this.getQueryString().test && this.addButtonTest && this.createTestButton();
							this.seasunLogin();
						}.bind(this)
					);
				} catch (b) {
					console.log(b);
				}
			else console.log('vigoo object not found');
		},
		hideloading: function () {
			this.hasHideloading ||
				(!this.hasLoggedIn && !forceHide) ||
				(console.log('showTitleAd'),
				(this.hasHideloading = !0),
				(ig.vigoo.isProcess = !0),
				ig.vigoo.showTitleAd());
		},
		seasunLogin: function () {
			SeasunDcLogger.push({
				msgType: 'role.login',
				accountId: this.openid,
				channel: 'vigoo',
				channelDesc: 'vigoo'
			});
		},
		share: function () {
			console.log('Share');
			if (this.hasLoggedIn && vigoo) {
				vigoo.Share();
				if (ig.game) {
					var b = ig.game.getEntitiesByType(EntityGameControl)[0];
					b && !1 === b.gamePaused && b.pauseGame();
				}
				ig.soundHandler.forceMuteAll();
			}
		},
		showBannerAd: function () {
			this.hasLoggedIn && vigoo && (console.log('vigoo showBannerAd'), vigoo.ShowBannerAdv(0.8));
		},
		hideBannerAd: function () {
			this.hasLoggedIn && vigoo && (console.log('vigoo hideBannerAd'), vigoo.HideBannerAdv());
		},
		showTitleAd: function (b, c) {
			if (vigoo) {
				console.log('vigoo showTitleAd');
				this.muteBeforeAds();
				try {
					vigoo.ShowTitleAdv(
						function (d) {
							switch (d.type) {
								case '1':
									console.log('play failed');
									'function' == typeof c && c(1);
									break;
								case '2':
									console.log('play skipped');
									'function' == typeof c && c(2);
									break;
								case '3':
									console.log('play finished'), 'function' == typeof b && b();
							}
							ig.vigoo.isProcess = !1;
							ig.splashLoader && 1 == ig.splashLoader._drawStatus
								? ig.splashLoader.startGame()
								: ig.splashLoader && 0 == ig.splashLoader._drawStatus && ig.splashLoader.load();
							this.unmuteAfterAds();
						}.bind(this)
					);
				} catch (d) {
					(ig.vigoo.isProcess = !1),
						ig.splashLoader && 1 == ig.splashLoader._drawStatus
							? ig.splashLoader.startGame()
							: ig.splashLoader && 0 == ig.splashLoader._drawStatus && ig.splashLoader.load(),
						console.log(d);
				}
			}
		},
		showScreenVideo: function (b, c, d) {
			this.hasLoggedIn &&
				vigoo &&
				(console.log('vigoo showScreenVideo'),
				this.muteBeforeAds(),
				vigoo.ShowScreenVideo(
					b,
					function (b) {
						switch (b.type) {
							case '1':
								console.log('play failed');
								'function' == typeof d && d(1);
								this.unmuteAfterAds();
								break;
							case '2':
								console.log('play skipped');
								'function' == typeof d && d(2);
								this.unmuteAfterAds();
								break;
							case '3':
								console.log('play finished'), 'function' == typeof c && c(), this.unmuteAfterAds();
						}
					}.bind(this)
				));
		},
		showExcitationVideo: function (b, c) {
			this.hasLoggedIn &&
				vigoo &&
				(console.log('vigoo showExcitationVideo'),
				this.muteBeforeAds(),
				vigoo.ShowExcitationVideoAdv(
					function (d) {
						switch (d.type) {
							case '1':
								console.log('play failed');
								'function' == typeof c && c(1);
								this.unmuteAfterAds();
								break;
							case '2':
								console.log('play skipped');
								this.showSkippedReward();
								'function' == typeof c && c(2);
								this.unmuteAfterAds();
								break;
							case '3':
								console.log('play finished'), 'function' == typeof b && b(), this.unmuteAfterAds();
						}
					}.bind(this)
				));
		},
		muteBeforeAds: function () {
			console.log('muteBeforeAds');
			ig.game && (ig.game.isMuteAds = !0);
			if (ig.game) {
				ig.game.pauseGame();
				var b = ig.game.getEntitiesByType(EntityGameControl)[0];
				b && !1 === b.gamePaused && b.pauseGame();
			}
			ig.soundHandler.forceMuteAll();
		},
		unmuteAfterAds: function () {
			console.log('unmuteAfterAds');
			ig.game && (ig.game.isMuteAds = !1);
			window.focus();
			if (ig.game) {
				ig.game.resumeGame();
				var b = ig.game.getEntitiesByType(EntityGameControl)[0];
				b && !1 === b.gamePaused && b.pauseGame();
			}
			ig.soundHandler.forceUnMuteAll();
		},
		showSkippedReward: function () {
			console.log('showSkippedReward');
			var b = this.createDivReward();
			b.setAttribute(
				'style',
				'width:960px; height:540px; position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;'
			);
			b.innerHTML =
				"<div style='color:black;background-color: rgba(255,255,255,1); border: 2px solid #000; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: Arial;'>You can get reward after watching full ads</div></div>";
			adjustLayers && adjustLayers();
			this.hideReward();
		},
		hideReward: function () {
			setTimeout(
				function () {
					ig.domHandler.getElementById('#reward').hide();
				}.bind(this),
				3e3
			);
		},
		createDivReward: function () {
			var b = document.getElementById('reward');
			if (!b) {
				b = document.createElement('div');
				b.id = 'reward';
				document.getElementById('ajaxbar').appendChild(b);
				try {
					'undefined' !== typeof ig.sizeHandler
						? 'undefined' !== typeof ig.sizeHandler.coreDivsToResize &&
						  (ig.sizeHandler.coreDivsToResize.push('#reward'),
						  'function' === typeof ig.sizeHandler.reorient && ig.sizeHandler.reorient())
						: 'undefined' !== typeof coreDivsToResize &&
						  (coreDivsToResize.push('reward'), 'function' === typeof sizeHandler && sizeHandler());
				} catch (c) {
					console.log(c);
				}
			}
			return b;
		},
		showReward: function (b) {
			var c = this.createDivReward();
			c.setAttribute(
				'style',
				'width:960px; height:540px; position: absolute; display: block; z-index: 999999; background-color: rgba(23, 32, 53, 0); visibility: visible; font-size: 10vmin; text-align: center; vertical-align: middle; -webkit-touch-callout: none; -webkit-user-select: none; -khtml-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none;'
			);
			c.innerHTML =
				"<div style='color:black;background-color: rgba(255,255,255,1); border: 2px solid #000; font-size:20px; border-radius: 5px; position: relative; float: left; top: 50%; left: 50%; transform: translate(-50%, -50%);'><div style='padding:20px 50px; font-family: Arial;'>" +
				b +
				'</div></div>';
			adjustLayers && adjustLayers();
			this.hideReward();
		},
		createTestButton: function () {
			this.createDiv(
				'Resume',
				5,
				5,
				'green',
				'white',
				function () {
					vigoo && ig.vigoo.hasLoggedIn ? ig.vigoo.unmuteAfterAds() : this.unmuteAfterAds();
				}.bind(this)
			);
			this.createDiv(
				'Pause',
				70,
				5,
				'red',
				'white',
				function () {
					vigoo && ig.vigoo.hasLoggedIn ? ig.vigoo.muteBeforeAds() : this.muteBeforeAds();
				}.bind(this)
			);
			this.createDiv('Show Banner', 124, 5, 'yellow', 'black', function () {
				vigoo && ig.vigoo.hasLoggedIn && ig.vigoo.showBannerAd();
			});
			this.createDiv('Hide Banner', 215, 5, 'green', 'white', function () {
				vigoo && ig.vigoo.hasLoggedIn && ig.vigoo.hideBannerAd();
			});
			this.createDiv('Show Rewarded', 5, 40, 'purple', 'white', function () {
				vigoo && ig.vigoo.hasLoggedIn && ig.vigoo.showExcitationVideo();
			});
			this.createDiv('Show Mid ads', 115, 40, 'red', 'white', function () {
				vigoo && ig.vigoo.hasLoggedIn && ig.vigoo.showScreenVideo('\u8fd4\u56de\u9996\u9875');
			});
		},
		createDiv: function (b, c, d, e, f, l) {
			var n = ig.$new('button');
			document.body.appendChild(n);
			n.textContent = b;
			n.style.position = 'absolute';
			n.style.color = f;
			n.style.background = e;
			n.style.top = d + 'px';
			n.style.left = c + 'px';
			n.style.padding = '5px';
			n.style.fontSize = '12px';
			n.style.fontFamily = 'Arial';
			n.style.cursor = 'pointer';
			n.style['z-index'] = 999999;
			n.onclick = l;
		},
		getQueryString: function () {
			var b = {};
			location.search &&
				location.search
					.substr(1)
					.split('&')
					.forEach(function (c) {
						var d = c.split('=');
						c = d[0];
						d = d[1] && decodeURIComponent(d[1]);
						(b[c] = b[c] || []).push(d);
					});
			return b;
		}
	});
	ig.vigoo = new ig.VigooPlugin();
});
ig.baked = !0;
ig.module('plugins.audio.sound-player').defines(function () {
	SoundPlayer = ig.Class.extend({
		tagName: 'SoundPlayer',
		stayMuteFlag: !1,
		debug: !1,
		init: function () {
			this.debug && console.log(this.tagName);
		},
		play: function (b) {
			this.debug && console.log('play sound ', b);
		},
		stop: function () {
			this.debug && console.log('stop sound ');
		},
		volume: function () {
			this.debug && console.log('set volume');
		},
		mute: function (b) {
			this.debug && console.log('mute');
			'undefined' === typeof b ? (this.stayMuteFlag = !0) : b && (this.stayMuteFlag = !0);
		},
		unmute: function (b) {
			this.debug && console.log('unmute');
			'undefined' === typeof b ? (this.stayMuteFlag = !1) : b && (this.stayMuteFlag = !1);
		}
	});
});
ig.baked = !0;
ig.module('plugins.audio.impact-music-player')
	.requires('plugins.audio.sound-player')
	.defines(function () {
		ImpactMusicPlayer = SoundPlayer.extend({
			tagName: 'ImpactMusicPlayer',
			bgmPlaying: !1,
			soundList: {},
			init: function (b, c) {
				this.parent(b, c);
				for (var d in b) (this.soundList[d] = d), ig.music.add(b[d].path + '.*', d);
				c && c.loop && (ig.music.loop = c.loop);
			},
			play: function (b) {
				this.stayMuteFlag ||
					((this.bgmPlaying = !0), 'undefined' === typeof b ? ig.music.play(b) : ig.music.play());
			},
			stop: function () {
				this.bgmPlaying = !1;
				ig.music.pause();
			},
			volume: function (b) {
				console.log('impactmusic:', b);
				ig.music.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b;
			},
			getVolume: function () {
				return ig.music.volume;
			},
			mute: function (b) {
				this.parent(b);
				this.bgmPlaying && this.stop();
			},
			unmute: function (b) {
				this.parent(b);
				this.play();
			}
		});
	});
ig.baked = !0;
ig.module('plugins.audio.impact-sound-player')
	.requires('plugins.audio.sound-player')
	.defines(function () {
		ImpactSoundPlayer = SoundPlayer.extend({
			tagName: 'ImpactSoundPlayer',
			soundList: {},
			init: function (b, c) {
				this.parent(b, c);
				for (var d in b) {
					var e = new ig.Sound(b[d].path + '.*');
					this.soundList[d] = e;
				}
			},
			play: function (b) {
				this.stayMuteFlag ||
					('object' === typeof b
						? (console.log(b + ' exists'), b.play())
						: 'string' === typeof b && this.soundList[b].play());
			},
			stop: function (b) {
				this.parent(b);
				b.stop();
			},
			volume: function (b) {
				ig.soundManager.volume = 0 > b ? 0 : isNaN(b) ? 1 : 1 < b ? 1 : b;
			},
			getVolume: function () {
				return ig.soundManager.volume;
			},
			mute: function (b) {
				this.parent(b);
				ig.Sound.enabled = !1;
			},
			unmute: function (b) {
				this.parent(b);
				ig.Sound.enabled = !0;
			}
		});
	});
ig.baked = !0;
ig.module('plugins.audio.howler-player')
	.requires('plugins.audio.sound-player')
	.defines(function () {
		HowlerPlayer = SoundPlayer.extend({
			tagName: 'HowlerPlayer',
			soundList: {},
			init: function (b, c) {
				this.parent(b, c);
				for (var d in b) {
					var e = b[d].path,
						e = new Howl({
							preload: !1,
							src: [e + '.' + ig.Sound.FORMAT.OGG.ext, e + '.' + ig.Sound.FORMAT.MP3.ext]
						});
					this.soundList[d] = e;
				}
			},
			play: function (b) {
				this.stayMuteFlag ||
					('object' === typeof b ? b.play() : 'string' === typeof b && this.soundList[b].play());
			},
			stop: function (b) {
				this.parent(b);
				'object' === typeof b ? b.stop() : 'string' === typeof b && this.soundList[b].stop();
			},
			volume: function (b) {
				for (var c in this.soundList) {
					if (0 > b) {
						this.soundList[c].volume(0);
						break;
					}
					isNaN(b)
						? this.soundList[c].volume(1)
						: 1 < b
						? this.soundList[c].volume(1)
						: this.soundList[c].volume(b);
				}
			},
			getVolume: function () {
				for (var b in this.soundList) return this.soundList[b].volume();
			},
			mute: function (b) {
				this.parent(b);
				Howler.mute(!0);
			},
			unmute: function (b) {
				this.parent(b);
				Howler.mute(!1);
			},
			loadSound: function (b) {
				if ('object' === typeof b) return b.load(), b;
				if ('string' === typeof b) return this.soundList[b].load(), b;
			}
		});
	});
ig.baked = !0;
ig.module('plugins.audio.howler-music-player')
	.requires('plugins.audio.sound-player')
	.defines(function () {
		HowlerMusicPlayer = SoundPlayer.extend({
			tagName: 'HowlerMusicPlayer',
			bgmPlaying: !1,
			soundList: {},
			init: function (b, c) {
				this.parent(b, c);
				for (var d in b) {
					var e = b[d].path,
						e = new Howl({
							src: [e + '.' + ig.Sound.FORMAT.OGG.ext, e + '.' + ig.Sound.FORMAT.MP3.ext],
							loop: !0,
							autoplay: !1,
							onend: function () {}.bind(this)
						});
					this.soundList[d] = e;
				}
			},
			play: function (b) {
				if (!this.stayMuteFlag && !this.bgmPlaying)
					if ('object' === typeof b) (this.bgmPlaying = !0), b.play();
					else if ('string' === typeof b) (this.bgmPlaying = !0), this.soundList[b].play();
					else
						for (var c in this.soundList) {
							this.soundList[c].play();
							this.bgmPlaying = !0;
							break;
						}
			},
			stop: function (b) {
				this.parent(b);
				if (this.bgmPlaying) {
					for (var c in this.soundList) this.soundList[c].stop();
					this.bgmPlaying = !1;
				}
			},
			volume: function (b) {
				console.log('howler', b);
				for (var c in this.soundList) {
					if (0 > b) {
						this.soundList[c].volume(0);
						break;
					}
					isNaN(b)
						? this.soundList[c].volume(1)
						: 1 < b
						? this.soundList[c].volume(1)
						: this.soundList[c].volume(b);
				}
			},
			getVolume: function () {
				for (var b in this.soundList) return this.soundList[b].volume();
			},
			mute: function (b) {
				this.parent(b);
				Howler.mute(!0);
			},
			unmute: function (b) {
				this.parent(b);
				Howler.mute(!1);
			}
		});
	});
ig.baked = !0;
ig.module('plugins.audio.jukebox-player')
	.requires('plugins.audio.sound-player')
	.defines(function () {
		JukeboxPlayer = SoundPlayer.extend({
			tagName: 'JukeboxPlayer',
			bgmPlaying: !1,
			soundList: {},
			jukeboxPlayer: null,
			pausePosition: 0,
			premuteVolume: 0,
			minVolume: 0.001,
			init: function (b, c) {
				this.parent(b, c);
				for (var d in b) {
					this.soundList[d] = d;
					var e = b[d].path;
					this.jukeboxPlayer = new jukebox.Player({
						resources: [e + '.' + ig.Sound.FORMAT.OGG.ext, e + '.' + ig.Sound.FORMAT.MP3.ext],
						autoplay: !1,
						spritemap: { music: { start: b[d].startMp3, end: b[d].endMp3, loop: !0 } }
					});
				}
			},
			play: function () {
				this.stayMuteFlag ||
					((this.bgmPlaying = !0),
					this.pausePosition
						? (console.log('resume'), this.jukeboxPlayer.resume(this.pausePosition))
						: (console.log('play'),
						  this.jukeboxPlayer.play(this.jukeboxPlayer.settings.spritemap.music.start, !0)),
					(this.premuteVolume = this.getVolume()));
			},
			stop: function () {
				this.bgmPlaying = !1;
				this.pausePosition = this.jukeboxPlayer.pause();
			},
			volume: function (b) {
				console.log('jukebox:', b);
				0 >= b
					? this.jukeboxPlayer.setVolume(this.minVolume)
					: isNaN(b)
					? this.jukeboxPlayer.setVolume(1)
					: 1 < b
					? this.jukeboxPlayer.setVolume(1)
					: this.jukeboxPlayer.setVolume(b);
			},
			getVolume: function () {
				return this.jukeboxPlayer.getVolume();
			},
			mute: function (b) {
				this.parent(b);
				this.bgmPlaying &&
					(console.log('jukebox', this.premuteVolume),
					this.stayMuteFlag || (this.premuteVolume = this.getVolume()),
					this.jukeboxPlayer.pause(),
					this.jukeboxPlayer.setVolume(this.minVolume));
			},
			unmute: function (b) {
				this.parent(b);
				this.stayMuteFlag ||
					(console.log('jukebox', this.premuteVolume),
					this.jukeboxPlayer.setVolume(this.premuteVolume),
					this.jukeboxPlayer.resume());
			}
		});
	});
ig.baked = !0;
ig.module('plugins.audio.webaudio-music-player')
	.requires('plugins.audio.sound-player')
	.defines(function () {
		WebaudioMusicPlayer = SoundPlayer.extend({
			tagName: 'WebaudioMusicPlayer',
			bgmPlaying: !1,
			isSupported: !1,
			muteFlag: !1,
			pausedTime: 0,
			webaudio: null,
			useHTML5Audio: !1,
			audio: null,
			inactiveAudio: null,
			codecs: null,
			reinitOnPlay: !1,
			inputList: null,
			_volume: 1,
			soundList: {},
			init: function (b) {
				this.webaudio = {
					compatibility: {},
					gainNode: null,
					buffer: null,
					source_loop: {},
					source_once: {}
				};
				try {
					Howler && Howler.ctx
						? (this.webaudio.context = Howler.ctx)
						: ig && ig.webaudio_ctx
						? (this.webaudio.context = ig.webaudio_ctx)
						: ((this.AudioContext = window.AudioContext || window.webkitAudioContext),
						  (this.webaudio.context = new this.AudioContext()),
						  (ig.webaudio_ctx = this.webaudio.context)),
						(this.isSupported = !0);
				} catch (c) {
					console.log('Web Audio API not supported in this browser.'),
						(this.webaudio = null),
						(this.useHTML5Audio = !0);
				}
				if (this.useHTML5Audio)
					if ('undefined' !== typeof Audio)
						try {
							new Audio();
						} catch (d) {
							this.useHTML5Audio = !1;
						}
					else this.useHTML5Audio = !1;
				this.useHTML5Audio &&
					((this.audio = new Audio()), (this.isSupported = !0), this.initHTML5Audio(b));
				if (!this.isSupported) return null;
				this.webaudio && ((this.inputList = b), this.initWebAudio(b));
			},
			initWebAudio: function (b) {
				ig.ua.iOS && this.initIOSWebAudioUnlock();
				this.webaudio.gainNode = this.webaudio.context.createGain();
				this.webaudio.gainNode.connect(this.webaudio.context.destination);
				this.webaudio.gainNode.gain.value = this._volume;
				this.webaudio.buffer = null;
				var c = 'start',
					d = 'stop',
					e = this.webaudio.context.createBufferSource();
				'function' !== typeof e.start && (c = 'noteOn');
				this.webaudio.compatibility.start = c;
				'function' !== typeof e.stop && (d = 'noteOff');
				this.webaudio.compatibility.stop = d;
				for (var f in b) {
					this.soundList[f] = f;
					var d = b[f].path,
						c = d + '.' + ig.Sound.FORMAT.MP3.ext,
						l = d + '.' + ig.Sound.FORMAT.OGG.ext;
					ig.ua.mobile
						? ig.ua.iOS && (l = c)
						: ((d = navigator.userAgent.toLowerCase()),
						  -1 != d.indexOf('safari') && -1 >= d.indexOf('chrome') && (l = c),
						  d.indexOf('win64') && (l = c));
					var n = new XMLHttpRequest();
					n.open('GET', l, !0);
					n.responseType = 'arraybuffer';
					n.onload = function () {
						this.webaudio.context.decodeAudioData(
							n.response,
							function (b) {
								this.webaudio.buffer = b;
								this.webaudio.source_loop = {};
								this.bgmPlaying ? this.play(null, !0) : this.stop();
							}.bind(this),
							function () {
								console.log('Error decoding audio "' + l + '".');
							}
						);
					}.bind(this);
					n.send();
					if (4 == n.readyState && 'undefined' !== typeof Audio) {
						this.useHTML5Audio = !0;
						try {
							new Audio();
						} catch (q) {
							this.useHTML5Audio = !1;
						}
						this.useHTML5Audio &&
							(console.log('Using HTML5 Audio'),
							(this.webaudio = null),
							(this.audio = new Audio()),
							(this.isSupported = !0),
							this.initHTML5Audio(b));
					}
					break;
				}
			},
			initIOSWebAudioUnlock: function () {
				if (this.webaudio) {
					webaudio = this.webaudio;
					var b = function () {
						var c = webaudio.context,
							d = c.createBuffer(1, 1, 22050),
							e = c.createBufferSource();
						e.buffer = d;
						e.connect(c.destination);
						'undefined' === typeof e.start ? e.noteOn(0) : e.start(0);
						setTimeout(
							function () {
								(e.playbackState === e.PLAYING_STATE || e.playbackState === e.FINISHED_STATE) &&
									window.removeEventListener('touchend', b, !1);
							}.bind(this),
							0
						);
					};
					window.addEventListener('touchend', b, !1);
				}
			},
			initHTML5Audio: function (b) {
				if (this.useHTML5Audio && this.audio) {
					var c = this.audio;
					this.codecs = {};
					this.codecs = {
						mp3: !!c.canPlayType('audio/mpeg;').replace(/^no$/, ''),
						opus: !!c.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
						ogg: !!c.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
						wav: !!c.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ''),
						aac: !!c.canPlayType('audio/aac;').replace(/^no$/, ''),
						m4a: !!(
							c.canPlayType('audio/x-m4a;') ||
							c.canPlayType('audio/m4a;') ||
							c.canPlayType('audio/aac;')
						).replace(/^no$/, ''),
						mp4: !!(
							c.canPlayType('audio/x-mp4;') ||
							c.canPlayType('audio/mp4;') ||
							c.canPlayType('audio/aac;')
						).replace(/^no$/, ''),
						weba: !!c.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')
					};
					this.is = {
						ff: Boolean(
							null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase())
						),
						ie: Boolean(document.all && !window.opera),
						opera: Boolean(window.opera),
						chrome: Boolean(window.chrome),
						safari: Boolean(
							!window.chrome &&
								/safari/.test(navigator.userAgent.toLowerCase()) &&
								window.getComputedStyle &&
								!window.globalStorage &&
								!window.opera
						)
					};
					this.playDelay = -60;
					this.stopDelay = 30;
					this.is.chrome && (this.playDelay = -25);
					this.is.chrome && (this.stopDelay = 25);
					this.is.ff && (this.playDelay = -25);
					this.is.ff && (this.stopDelay = 85);
					this.is.opera && (this.playDelay = 5);
					this.is.opera && (this.stopDelay = 0);
					for (var d in b) {
						this.soundList[d] = d;
						var e = b[d].path,
							c = e + '.' + ig.Sound.FORMAT.OGG.ext,
							e = e + '.' + ig.Sound.FORMAT.MP3.ext,
							f = null;
						this.codecs[ig.Sound.FORMAT.OGG.ext.toLowerCase()]
							? (f = c)
							: this.codecs[ig.Sound.FORMAT.MP3.ext.toLowerCase()] && (f = e);
						if (f) {
							ig.ua.mobile
								? ig.ua.iOS && (f = e)
								: ((b = navigator.userAgent.toLowerCase()),
								  -1 != b.indexOf('safari') && -1 >= b.indexOf('chrome') && (f = e));
							this.audio.addEventListener(
								'error',
								function () {
									this.audio.error && 4 === this.audio.error.code && (this.isSupported = !1);
								},
								!1
							);
							this.audio.src = f;
							this.audio._pos = 0;
							this.audio.preload = 'auto';
							this.audio.volume = this._volume;
							this.inactiveAudio = new Audio();
							this.inactiveAudio.src = f;
							this.inactiveAudio._pos = 0;
							this.inactiveAudio.preload = 'auto';
							this.inactiveAudio.volume = this._volume;
							this.inactiveAudio.load();
							var l = function () {
								this._duration = this.audio.duration;
								this._loaded || (this._loaded = !0);
								this.bgmPlaying ? this.play(null, !0) : this.stop();
								this.audio.removeEventListener('canplaythrough', l, !1);
							}.bind(this);
							this.audio.addEventListener('canplaythrough', l, !1);
							this.audio.load();
							break;
						}
					}
				}
			},
			play: function (b, c) {
				if (this.isSupported)
					if (((this.bgmPlaying = !0), this.webaudio)) {
						if (
							!c &&
							this.reinitOnPlay &&
							this.webaudio.source_loop.buffer == this.webaudio.buffer
						) {
							if (
								this.webaudio.source_loop._playing &&
								(this.webaudio.source_loop[this.webaudio.compatibility.stop](0),
								(this.webaudio.source_loop._playing = !1),
								(this.pausedTime +=
									this.webaudio.context.currentTime - this.webaudio.source_loop._startTime),
								(this.pausedTime %= this.webaudio.source_loop.buffer.duration),
								(this.webaudio.source_loop._startTime = 0),
								'noteOn' === this.webaudio.compatibility.start)
							)
								this.webaudio.source_once[this.webaudio.compatibility.stop](0);
							try {
								this.webaudio.context.close();
								this.webaudio.context = new this.AudioContext();
								this.webaudio.gainNode = this.webaudio.context.createGain();
								this.webaudio.gainNode.connect(this.webaudio.context.destination);
								this.webaudio.gainNode.gain.value = this._volume;
								var d = 'start',
									e = 'stop',
									f = this.webaudio.context.createBufferSource();
								'function' !== typeof f.start && (d = 'noteOn');
								this.webaudio.compatibility.start = d;
								'function' !== typeof f.stop && (e = 'noteOff');
								this.webaudio.compatibility.stop = e;
								this.webaudio.source_loop = {};
								this.play(null, !0);
							} catch (l) {}
						}
						if (this.webaudio.buffer) {
							if (!this.muteFlag && ((this.bgmPlaying = !0), !this.webaudio.source_loop._playing)) {
								this.webaudio.source_loop = this.webaudio.context.createBufferSource();
								this.webaudio.source_loop.buffer = this.webaudio.buffer;
								this.webaudio.source_loop.loop = !0;
								this.webaudio.source_loop.connect(this.webaudio.gainNode);
								if (null == b || isNaN(b)) (b = 0), this.pausedTime && (b = this.pausedTime);
								this.webaudio.source_loop._startTime = this.webaudio.context.currentTime;
								if ('noteOn' === this.webaudio.compatibility.start)
									(this.webaudio.source_once = this.webaudio.context.createBufferSource()),
										(this.webaudio.source_once.buffer = this.webaudio.buffer),
										this.webaudio.source_once.connect(this.webaudio.gainNode),
										this.webaudio.source_once.noteGrainOn(0, b, this.webaudio.buffer.duration - b),
										this.webaudio.source_loop[this.webaudio.compatibility.start](
											this.webaudio.context.currentTime + (this.webaudio.buffer.duration - b)
										);
								else this.webaudio.source_loop[this.webaudio.compatibility.start](0, b);
								this.webaudio.source_loop._playing = !0;
							}
						} else this.bgmPlaying = !0;
					} else if (this.audio) {
						var n = this.audio;
						if (!this.muteFlag)
							if (
								((this.bgmPlaying = !0),
								isNaN(b) && ((b = 0), this.pausedTime && (b = this.pausedTime)),
								(d = this._duration - b),
								this._onEndTimer && (clearTimeout(this._onEndTimer), (this._onEndTimer = null)),
								(this._onEndTimer = setTimeout(
									function () {
										this.audio.currentTime = 0;
										this.audio.pause();
										this.pausedTime = 0;
										if (this.inactiveAudio) {
											var b = this.audio;
											this.audio = this.inactiveAudio;
											this.inactiveAudio = b;
										}
										this.play();
									}.bind(this),
									1e3 * d + this.playDelay
								)),
								4 === n.readyState || (!n.readyState && navigator.isCocoonJS))
							)
								(n.readyState = 4),
									(n.currentTime = b),
									(n.muted = this.muteFlag || n.muted),
									(n.volume = this._volume),
									setTimeout(function () {
										n.play();
									}, 0);
							else {
								clearTimeout(this._onEndTimer);
								this._onEndTimer = null;
								var q = function () {
									typeof ('function' == this.play) &&
										(this.play(), n.removeEventListener('canplaythrough', q, !1));
								}.bind(this);
								n.addEventListener('canplaythrough', q, !1);
							}
					}
			},
			stop: function () {
				this.bgmPlaying = !1;
				if (this.isSupported)
					if (this.webaudio) {
						if (
							this.webaudio.source_loop._playing &&
							(this.webaudio.source_loop[this.webaudio.compatibility.stop](0),
							(this.webaudio.source_loop._playing = !1),
							(this.pausedTime +=
								this.webaudio.context.currentTime - this.webaudio.source_loop._startTime),
							(this.pausedTime %= this.webaudio.source_loop.buffer.duration),
							(this.webaudio.source_loop._startTime = 0),
							'noteOn' === this.webaudio.compatibility.start)
						)
							this.webaudio.source_once[this.webaudio.compatibility.stop](0);
					} else if (this.audio) {
						var b = this.audio;
						4 == b.readyState &&
							((this.pausedTime = b.currentTime),
							(b.currentTime = 0),
							b.pause(),
							clearTimeout(this._onEndTimer),
							(this._onEndTimer = null));
					}
			},
			volume: function (b) {
				if (isNaN(b) || null == b) return this.getVolume();
				this.isSupported &&
					((this._volume = b),
					0 > this._volume ? (this._volume = 0) : 1 < this._volume && (this._volume = 1),
					this.webaudio
						? this.webaudio.gainNode && (this.webaudio.gainNode.gain.value = this._volume)
						: this.audio &&
						  ((this.audio.volume = this._volume),
						  this.inactiveAudio && (this.inactiveAudio.volume = this._volume)));
			},
			getVolume: function () {
				return !this.isSupported ? 0 : this._volume;
			},
			mute: function (b) {
				this.parent(b);
				!1 == this.muteFlag &&
					((this.muteFlag = !0), this.bgmPlaying && (this.stop(), (this.bgmPlaying = !0)));
			},
			unmute: function (b) {
				this.parent(b);
				!this.stayMuteFlag &&
					!0 == this.muteFlag &&
					((this.muteFlag = !1), this.bgmPlaying && this.play());
			}
		});
	});
ig.baked = !0;
ig.module('plugins.audio.sound-info').defines(function () {
	SoundInfo = ig.Class.extend({
		FORMATS: { OGG: '.ogg', MP3: '.mp3' },
		sfx: {
			button: { path: 'media/audio/sfx/button' },
			hit: { path: 'media/audio/sfx/hit2' },
			step: { path: 'media/audio/sfx/step' },
			skate: { path: 'media/audio/sfx/skate' },
			jump: { path: 'media/audio/sfx/jump2' },
			slide: { path: 'media/audio/sfx/woosh' },
			crunch: { path: 'media/audio/sfx/crunch' },
			coin: { path: 'media/audio/sfx/ding' },
			chirp: { path: 'media/audio/sfx/chirp' }
		},
		bgm: {
			background: {
				path: 'media/audio/music/bgm',
				startOgg: 0,
				endOgg: 21.463,
				startMp3: 0,
				endMp3: 21.463
			}
		}
	});
});
ig.baked = !0;
ig.module('plugins.audio.sound-handler')
	.requires(
		'plugins.audio.impact-music-player',
		'plugins.audio.impact-sound-player',
		'plugins.audio.howler-player',
		'plugins.audio.howler-music-player',
		'plugins.audio.jukebox-player',
		'plugins.audio.webaudio-music-player',
		'plugins.audio.sound-info'
	)
	.defines(function () {
		ig.SoundHandler = ig.Class.extend({
			bgmPlayer: null,
			sfxPlayer: null,
			focusBlurMute: !1,
			soundInfo: new SoundInfo(),
			init: function () {
				console.log('Initiating sound handler');
				this.initWindowHandler();
				ig.ua.mobile
					? (this.initPowerButtonFix(),
					  (this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, { loop: !0 })),
					  this.bgmPlayer.isSupported ||
							(this.bgmPlayer = new JukeboxPlayer(this.soundInfo.bgm, { loop: !0 })))
					: ((this.bgmPlayer = new WebaudioMusicPlayer(this.soundInfo.bgm, { loop: !0 })),
					  this.bgmPlayer.isSupported ||
							(this.bgmPlayer = new ImpactMusicPlayer(this.soundInfo.bgm, { loop: !0 })));
				this.sfxPlayer = new HowlerPlayer(this.soundInfo.sfx);
			},
			checkBGM: function () {
				return this.bgmPlayer.stayMuteFlag;
			},
			checkSFX: function () {
				return this.sfxPlayer.stayMuteFlag;
			},
			muteSFX: function (b) {
				this.sfxPlayer && this.sfxPlayer.mute(b);
			},
			muteBGM: function (b) {
				this.bgmPlayer && this.bgmPlayer.mute(b);
			},
			unmuteSFX: function (b) {
				this.sfxPlayer && this.sfxPlayer.unmute(b);
			},
			unmuteBGM: function (b) {
				this.bgmPlayer && this.bgmPlayer.unmute(b);
			},
			muteAll: function (b) {
				this.muteSFX(b);
				this.muteBGM(b);
			},
			unmuteAll: function (b) {
				this.unmuteSFX(b);
				this.unmuteBGM(b);
			},
			forceMuteAll: function () {
				this.focusBlurMute || this.muteAll(!1);
				this.focusBlurMute = !0;
			},
			forceUnMuteAll: function () {
				this.focusBlurMute && (this.unmuteAll(!1), (this.focusBlurMute = !1));
			},
			initWindowHandler: function () {
				'true' === getQueryVariable('webview')
					? ($(window).focus(function () {
							(!ig.game || !ig.game || !ig.game.isMuteAds) &&
								ig.soundHandler &&
								ig.soundHandler.forceUnMuteAll();
					  }),
					  $(window).blur(function () {
							ig.soundHandler && ig.soundHandler.forceMuteAll();
					  }))
					: ((window.onfocus = function () {
							(!ig.game || !ig.game || !ig.game.isMuteAds) &&
								ig.soundHandler &&
								ig.soundHandler.forceUnMuteAll();
					  }),
					  (window.onblur = function () {
							ig.soundHandler && ig.soundHandler.forceMuteAll();
					  }));
			},
			initPowerButtonFix: function () {
				var b = this.getHiddenProp();
				b &&
					((b = b.replace(/[H|h]idden/, '') + 'visibilitychange'),
					document.addEventListener(b, this.visChange));
				window.addEventListener(
					'pagehide',
					function () {
						ig.soundHandler && ig.soundHandler.forceMuteAll();
					},
					!1
				);
				window.addEventListener(
					'pageshow',
					function () {
						ig.soundHandler && ig.soundHandler.forceUnMuteAll();
					},
					!1
				);
				document.addEventListener('onfocusout', this.visChange);
				document.addEventListener('onblur', this.visChange);
			},
			getHiddenProp: function () {
				var b = ['webkit', 'moz', 'ms', 'o'];
				if ('hidden' in document) return 'hidden';
				for (var c = 0; c < b.length; c++) if (b[c] + 'Hidden' in document) return b[c] + 'Hidden';
				return null;
			},
			isHidden: function () {
				var b = this.getHiddenProp();
				return !b ? !1 : document[b];
			},
			visChange: function () {
				!document.hasFocus() || ig.soundHandler.isHidden()
					? ig.soundHandler && ig.soundHandler.forceMuteAll()
					: ig.soundHandler && ig.soundHandler.forceUnMuteAll();
			},
			saveVolume: function () {
				this.sfxPlayer && ig.game.io.storageSet('soundVolume', this.sfxPlayer.getVolume());
				this.bgmPlayer && ig.game.io.storageSet('musicVolume', this.bgmPlayer.getVolume());
			},
			forceLoopBGM: function () {
				var b;
				if (this.bgmPlayer && !this.focusBlurMute && this.bgmPlayer.bgmPlaying && this.bgmPlayer) {
					var c = this.bgmPlayer.jukeboxPlayer;
					if (c) {
						null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase());
						b = Boolean(window.chrome);
						!window.chrome && /safari/.test(navigator.userAgent.toLowerCase());
						var d = 0.1;
						ig.ua.mobile && ((d = 0.115), ig.ua.android && ((d = 0.45), b && (d = 0.3)));
						c.settings.spritemap.music &&
							((b = c.settings.spritemap.music.end - d),
							c.getCurrentTime() >= b &&
								((b = c.settings.spritemap.music.start),
								ig.ua.android
									? this.forcelooped ||
									  (c.play(b, !0),
									  (this.forcelooped = !0),
									  setTimeout(function () {
											ig.soundHandler.forcelooped = !1;
									  }, d))
									: c.setCurrentTime(b)));
					} else
						'ImpactMusicPlayer' == this.bgmPlayer.tagName &&
							(null != window.mozInnerScreenX && /firefox/.test(navigator.userAgent.toLowerCase()),
							(b = Boolean(window.chrome)),
							!window.chrome && /safari/.test(navigator.userAgent.toLowerCase()),
							(d = 0.1),
							ig.ua.mobile && ((d = 0.115), ig.ua.android && ((d = 0.45), b && (d = 0.3))),
							(c = 0),
							'mp3' == ig.soundManager.format.ext && (c = 0.05),
							ig.music.currentTrack &&
								((b = ig.music.currentTrack.duration - d),
								ig.music.currentTrack.currentTime >= b &&
									(ig.ua.android
										? this.forcelooped ||
										  (ig.music.currentTrack.pause(),
										  (ig.music.currentTrack.currentTime = c),
										  ig.music.currentTrack.play(),
										  (this.forcelooped = !0),
										  setTimeout(function () {
												ig.soundHandler.forcelooped = !1;
										  }, d))
										: (ig.music.currentTrack.currentTime = c))));
				}
			}
		});
	});
ig.baked = !0;
ig.module('plugins.handlers.dom-handler').defines(function () {
	ig.DomHandler = ig.Class.extend({
		JQUERYAVAILABLE: !1,
		init: function () {
			this.JQUERYAVAILABLE = this._jqueryAvailable();
		},
		_jqueryAvailable: function () {
			return 'undefined' !== typeof jQuery;
		},
		addEvent: function (b, c, d, e) {
			if (this.JQUERYAVAILABLE) b.on(c, d);
			else b.addEventListener(c, d, e);
		},
		create: function (b) {
			return this.JQUERYAVAILABLE ? $('<' + b + '>') : ig.$new(b);
		},
		getElementByClass: function (b) {
			return this.JQUERYAVAILABLE ? $('.' + b) : document.getElementsByClassName(b);
		},
		getElementById: function (b) {
			return this.JQUERYAVAILABLE ? (0 < $(b).length ? $(b) : null) : ig.$(b);
		},
		appendChild: function (b, c) {
			this.JQUERYAVAILABLE ? b.append(c) : b.appendChild(c);
		},
		appendToBody: function (b) {
			this.JQUERYAVAILABLE ? $('body').append(b) : document.body.appendChild(b);
		},
		resize: function (b, c, d) {
			if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2));
			else {
				var e = b.style.visibility;
				c = 'width:' + c.toFixed(2) + 'px; height:' + d.toFixed(2) + 'px;';
				this.attr(b, 'style', c);
				b.style.visibility = e;
			}
		},
		resizeOffsetLeft: function (b, c, d, e) {
			if (this.JQUERYAVAILABLE) b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css('left', e);
			else {
				var f = b.style.visibility;
				c =
					'width:' +
					c.toFixed(2) +
					'px; height:' +
					d.toFixed(2) +
					'px; left: ' +
					e.toFixed(2) +
					'px;';
				this.attr(b, 'style', c);
				b.style.visibility = f;
			}
		},
		resizeOffset: function (b, c, d, e, f) {
			if (this.JQUERYAVAILABLE)
				b.width(c.toFixed(2)), b.height(d.toFixed(2)), b.css('left', e), b.css('top', f);
			else {
				var l = b.style.visibility;
				c =
					'width:' +
					c.toFixed(2) +
					'px; height:' +
					d.toFixed(2) +
					'px; left: ' +
					e.toFixed(2) +
					'px; top: ' +
					f.toFixed(2) +
					'px;';
				this.attr(b, 'style', c);
				b.style.visibility = l;
			}
		},
		css: function (b, c) {
			if (this.JQUERYAVAILABLE) b.css(c);
			else {
				var d = '',
					e;
				for (e in c) d += e + ':' + c[e] + ';';
				this.attr(b, 'style', d);
			}
		},
		getOffsets: function (b) {
			return this.JQUERYAVAILABLE
				? ((b = b.offset()), { left: b.left, top: b.top })
				: { left: b.offsetLeft, top: b.offsetTop };
		},
		attr: function (b, c, d) {
			if ('undefined' === typeof d) return this.JQUERYAVAILABLE ? b.attr(c) : b.getAttribute(c);
			this.JQUERYAVAILABLE ? b.attr(c, d) : b.setAttribute(c, d);
		},
		show: function (b) {
			b &&
				'undefined' !== typeof b &&
				(this.JQUERYAVAILABLE
					? (b.show(), b.css('visibility', 'visible'))
					: b &&
					  (b.style
							? (b.style.visibility = 'visible')
							: b[0] && (b[0].style.visibility = 'visible')));
		},
		hide: function (b) {
			b &&
				'undefined' !== typeof b &&
				(this.JQUERYAVAILABLE
					? (b.hide(), b.css('visibility', 'hidden'))
					: b &&
					  (b.style
							? (b.style.visibility = 'hidden')
							: b[0] && (b[0].style.visibility = 'hidden')));
		},
		getQueryVariable: function (b) {
			for (var c = window.location.search.substring(1).split('&'), d = 0; d < c.length; d++) {
				var e = c[d].split('=');
				if (decodeURIComponent(e[0]) == b) return decodeURIComponent(e[1]);
			}
		},
		forcedDeviceDetection: function () {
			var b = this.getQueryVariable('device');
			if (b)
				switch (b) {
					case 'mobile':
						console.log('serving mobile version ...');
						ig.ua.mobile = !0;
						break;
					case 'desktop':
						console.log('serving desktop version ...');
						ig.ua.mobile = !1;
						break;
					default:
						console.log('serving universal version ...');
				}
			else console.log('serving universal version ...');
		},
		forcedDeviceRotation: function () {
			var b = this.getQueryVariable('force-rotate');
			if (b)
				switch (b) {
					case 'portrait':
						console.log('force rotate to portrait');
						window.orientation = 0;
						break;
					case 'landscape':
						console.log('force rotate to horizontal');
						window.orientation = 90;
						break;
					default:
						alert('wrong command/type in param force-rotate. Defaulting value to portrait'),
							(window.orientation = 0);
				}
		}
	});
});
ig.baked = !0;
ig.module('plugins.custom-loader')
	.requires('impact.game')
	.defines(function () {
		ig.Game.inject({
			version: '0.0.1',
			statusLoad: 0,
			totalItems: 0,
			totalLoaded: 0,
			bgImage: new ig.Image('media/graphics/game/backgrounds/mainbg.jpg'),
			titleImage: new ig.Image('media/graphics/game/backgrounds/maintitle.png'),
			isDrawLoadingScreen: !1,
			loadAssets: function () {
				this.resetLoadScreen(
					[
						new ig.Image('media/graphics/game/backgrounds/mainbg.jpg'),
						new ig.Image('media/graphics/game/backgrounds/maintitle.png'),
						new ig.Image('media/graphics/game/objects/bg00.png'),
						new ig.Image('media/graphics/game/objects/bg01.png'),
						new ig.Image('media/graphics/game/objects/bg02.png'),
						new ig.Image('media/graphics/game/objects/bg03.png'),
						new ig.Image('media/graphics/game/objects/bg04.png'),
						new ig.Image('media/graphics/game/objects/bg05.png'),
						new ig.Image('media/graphics/game/objects/bg06.png'),
						new ig.Image('media/graphics/game/objects/bg07.png'),
						new ig.Image('media/graphics/game/objects/bg08.png'),
						new ig.Image('media/graphics/game/objects/bg09.png'),
						new ig.Image('media/graphics/game/objects/bg10.png'),
						new ig.Image('media/graphics/game/objects/bg11.png'),
						new ig.Image('media/graphics/game/objects/bg12.png'),
						new ig.Image('media/graphics/game/objects/bg13.png'),
						new ig.Image('media/graphics/game/objects/bg14.png'),
						new ig.Image('media/graphics/game/objects/bg15.png'),
						new ig.Image('media/graphics/game/objects/bg16.png'),
						new ig.Image('media/graphics/game/objects/bg17.png'),
						new ig.Image('media/graphics/game/objects/bg18.png'),
						new ig.Image('media/graphics/game/objects/bg19.png'),
						new ig.Image('media/graphics/game/objects/bg20.png'),
						new ig.Image('media/graphics/game/objects/bg21.png'),
						new ig.Image('media/graphics/game/objects/bg22.png'),
						new ig.Image('media/graphics/game/objects/bg23.png'),
						new ig.Image('media/graphics/game/objects/bg24.png'),
						new ig.Image('media/graphics/game/objects/bg25.png'),
						new ig.Image('media/graphics/game/objects/bg26.png'),
						new ig.Image('media/graphics/game/objects/bg27.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0000.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0001.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0002.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0003.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0004.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0005.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0006.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0007.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0008.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0009.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0010.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0011.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0012.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0013.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0014.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0015.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0016.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0017.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0018.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0019.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0020.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0021.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0022.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0023.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0024.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0025.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0026.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0027.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0028.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0029.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0030.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0031.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0032.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0033.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0034.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0035.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0036.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0037.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0038.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0039.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0040.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0041.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0042.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0043.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0044.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0045.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0046.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0047.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0048.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0049.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0050.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0051.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0052.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0053.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0054.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0055.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0056.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0057.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0058.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0059.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0060.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0061.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0062.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0063.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0064.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0065.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0066.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0067.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0068.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0069.png'),
						new ig.Image('media/graphics/game/character/grow-anim/frame_0070.png'),
						new ig.Image('media/graphics/game/backgrounds/cityscape.png'),
						new ig.Image('media/graphics/game/backgrounds/cloud0.png'),
						new ig.Image('media/graphics/game/backgrounds/cloud1.png'),
						new ig.Image('media/graphics/game/backgrounds/cloud2.png'),
						new ig.Image('media/graphics/game/objects/obstacle00.png'),
						new ig.Image('media/graphics/game/objects/obstacle01.png'),
						new ig.Image('media/graphics/game/objects/obstacle02.png'),
						new ig.Image('media/graphics/game/objects/obstacle03.png'),
						new ig.Image('media/graphics/game/objects/obstacle04.png'),
						new ig.Image('media/graphics/game/objects/obstacle05.png'),
						new ig.Image('media/graphics/game/objects/obstacle06.png'),
						new ig.Image('media/graphics/game/objects/obstacle07.png'),
						new ig.Image('media/graphics/game/objects/obstacle08.png'),
						new ig.Image('media/graphics/game/objects/obstacle09.png'),
						new ig.Image('media/graphics/game/objects/obstacle10.png'),
						new ig.Image('media/graphics/game/objects/obstacle11.png'),
						new ig.Image('media/graphics/game/pickups/cookie.png'),
						new ig.Image('media/graphics/game/ui/game/lifeicon.png'),
						new ig.Image('media/graphics/game/ui/game/coinicon.png'),
						new ig.Image('media/graphics/game/ui/game/cookieicon.png'),
						new ig.Image('media/graphics/game/ui/game/gameover.png'),
						new ig.Image('media/graphics/game/ui/game/gameover-panel.png'),
						new ig.Image('media/graphics/game/ui/game/gameover-bg.png'),
						new ig.Image('media/graphics/game/ui/game/panel-icons.png'),
						new ig.Image('media/graphics/game/ui/game/paused-title.png'),
						new ig.Image('media/graphics/game/ui/game/levelup-anim-bg.png'),
						new ig.Image('media/graphics/game/ui/game/levelup-panel.png'),
						new ig.Image('media/graphics/game/ui/game/finger.png'),
						new ig.Image('media/graphics/game/ui/game/coinicon.png'),
						new ig.Image('media/graphics/game/ui/game/lifeicon.png'),
						new ig.Image('media/graphics/game/ui/game/shop-title.png'),
						new ig.Image('media/graphics/game/ui/game/shop-panel0.png'),
						new ig.Image('media/graphics/game/ui/game/shop-panel1.png'),
						new ig.Image('media/graphics/game/ui/game/skateboard.png'),
						new ig.Image('media/graphics/game/ui/game/skates.png'),
						new ig.Image('media/graphics/game/ui/game/rocket.png'),
						new ig.Image('media/graphics/game/ui/game/carpet.png'),
						new ig.Image('media/graphics/game/ui/game/hoverboard.png'),
						new ig.Image('media/graphics/game/ui/mainmenu/playgame.png'),
						new ig.Image('media/graphics/game/ui/mainmenu/shop.png'),
						new ig.Image('media/graphics/game/ui/mainmenu/info.png'),
						new ig.Image('media/graphics/game/ui/game/ad.png'),
						new ig.Image('media/graphics/game/ui/mainmenu/mute.png'),
						new ig.Image('media/graphics/game/character/ball_11x2.png'),
						new ig.Image('media/graphics/game/character/run_7x2.png'),
						new ig.Image('media/graphics/game/character/slide_5x4.png'),
						new ig.Image('media/graphics/game/character/jump_9x2.png'),
						new ig.Image('media/graphics/game/character/skaterun_8x2.png'),
						new ig.Image('media/graphics/game/character/skatejump_9x2.png'),
						new ig.Image('media/graphics/game/character/rollerrun_5x1.png'),
						new ig.Image('media/graphics/game/character/rollerslide_9x2.png'),
						new ig.Image('media/graphics/game/character/rollerjump_8x2.png'),
						new ig.Image('media/graphics/game/character/rocketrun_7x2.png'),
						new ig.Image('media/graphics/game/character/rocketjump_7x3.png'),
						new ig.Image('media/graphics/game/character/carpet_5x2.png'),
						new ig.Image('media/graphics/game/character/hoverboard_4x2.png'),
						new ig.Image('media/graphics/game/effects/explosion_4x2.png'),
						new ig.Image('media/graphics/game/effects/explosion2_4x2.png'),
						new ig.Image('media/graphics/game/pickups/coin_1x10.png'),
						new ig.Image('media/graphics/game/ui/game/home.png'),
						new ig.Image('media/graphics/game/ui/game/restart.png'),
						new ig.Image('media/graphics/game/ui/game/pause.png'),
						new ig.Image('media/graphics/game/ui/game/gameover-anim.png'),
						new ig.Image('media/graphics/game/ui/game/levelup-anim.png'),
						new ig.Image('media/graphics/game/ui/mainmenu/share.png'),
						new ig.Image('media/graphics/game/ui/game/arrow.png'),
						new ig.Image('media/graphics/game/ui/game/shop-button.png'),
						new ig.Image('media/graphics/game/ui/game/home.png')
					],
					[
						ig.soundHandler.sfxPlayer.loadSound('button'),
						ig.soundHandler.sfxPlayer.loadSound('hit'),
						ig.soundHandler.sfxPlayer.loadSound('step'),
						ig.soundHandler.sfxPlayer.loadSound('skate'),
						ig.soundHandler.sfxPlayer.loadSound('jump'),
						ig.soundHandler.sfxPlayer.loadSound('slide'),
						ig.soundHandler.sfxPlayer.loadSound('crunch'),
						ig.soundHandler.sfxPlayer.loadSound('coin'),
						ig.soundHandler.sfxPlayer.loadSound('chirp')
					]
				);
				this.canvasLoading = document.getElementById('loadingScreen');
				this.canvasLoading.width = ig.system.width;
				this.canvasLoading.height = ig.system.height;
				this.loadingID = 'load';
				this.resizeLayerLoading();
				console.log('custom-loader loadAssets');
			},
			resizeLayerLoading: function () {
				try {
					'undefined' !== typeof ig.sizeHandler
						? 'undefined' !== typeof ig.sizeHandler.coreDivsToResize &&
						  (ig.sizeHandler.coreDivsToResize.push('#loadingScreen'),
						  'function' === typeof ig.sizeHandler.reorient && ig.sizeHandler.reorient())
						: 'undefined' !== typeof coreDivsToResize &&
						  'function' === typeof sizeHandler &&
						  sizeHandler();
				} catch (b) {
					console.log(b);
				}
			},
			resetLoadScreen: function (b, c) {
				this.totalLoaded = this.totalItems = this.statusLoad = 0;
				this.resourcesAudio = c;
				this.resourcesImages = b;
				this.totalItems = this.resourcesImages.length + this.resourcesAudio.length;
			},
			drawLoadingScreen: function () {
				this._drawStatus = this.totalLoaded / this.totalItems;
				var b = this.canvasLoading.getContext('2d');
				b.save();
				b.fillStyle = '#000000';
				b.fillRect(0, 0, ig.system.width, ig.system.height);
				this.bgImage.width < ig.system.width && b.scale(ig.system.width / this.bgImage.width, 1);
				b.drawImage(this.bgImage.data, 0, 0);
				b.restore();
				b.save();
				b.drawImage(this.titleImage.data, ig.system.width / 2 - this.titleImage.width / 2, 0);
				b.restore();
				b.save();
				var c;
				w0 = 152;
				h0 = 11;
				x0 = (ig.system.width - w0) / 2;
				y0 = 570;
				b.translate(x0 + w0 / 2, y0);
				b.fillStyle = '#000000';
				b.strokeStyle = '#000000';
				b.lineWidth = 0;
				b.fillRect(-w0 / 2, 0, w0, h0);
				b.strokeRect(-w0 / 2, 0, w0, h0);
				var d = this._drawStatus * w0;
				b.fillStyle = '#A5DE3E';
				b.strokeStyle = '#A5DE3E';
				b.lineWidth = 0;
				b.fillRect(-w0 / 2, 0, d, h0 / 2);
				b.strokeRect(-w0 / 2, 0, d, h0 / 2);
				b.fillStyle = '#67BD51';
				b.strokeStyle = '#67BD51';
				b.lineWidth = 0;
				b.fillRect(-w0 / 2, h0 / 2, d, h0 / 2);
				b.strokeRect(-w0 / 2, h0 / 2, d, h0 / 2);
				b.fillStyle = '#000000';
				b.font = '20px mainfont, Helvetica, Verdana';
				d = _STRINGS.Loading.Loading;
				c = ig.system.context.measureText('m').width;
				c = h0 + c + (4 * c) / 10;
				b.globalAlpha = 0.5;
				b.textAlign = 'center';
				b.fillText(d, 0, c);
				b.restore();
			},
			showLoadingScreen: function (b) {
				this.callBackLoad = b;
				this.isDrawLoadingScreen = !0;
				b = ig.domHandler.getElementById('#loadingScreen');
				var c = ig.domHandler.getElementById('#canvas'),
					d = ig.domHandler.getElementById('#fullscreen-button-layer');
				this.draw();
				ig.sizeHandler && ig.sizeHandler.resize
					? ig.sizeHandler.resize()
					: sizeHandler && sizeHandler();
				ig.domHandler.show(b);
				ig.domHandler.hide(c);
				d && ig.domHandler.hide(d);
			},
			hideLoadingScreen: function () {
				this.callBackLoad && this.callBackLoad();
				this.isDrawLoadingScreen = !1;
				var b = ig.domHandler.getElementById('#loadingScreen'),
					c = ig.domHandler.getElementById('#canvas'),
					d = ig.domHandler.getElementById('#fullscreen-button-layer');
				ig.domHandler.hide(b);
				ig.domHandler.show(c);
				d && ig.domHandler.show(d);
			},
			draw: function () {
				this.parent();
				this.isDrawLoadingScreen && this.drawLoadingScreen();
			},
			update: function () {
				this.parent();
				if (this.totalLoaded < this.totalItems) {
					for (var b = 0; b < this.resourcesImages.length; b++)
						this.resourcesImages[b].loaded
							? (this.resourcesImages.splice(b, 1), this.totalLoaded++)
							: this.resourcesImages[b].load();
					for (b = 0; b < this.resourcesAudio.length; b++)
						'loaded' == ig.soundHandler.sfxPlayer.soundList[this.resourcesAudio[b]].state() &&
							(this.resourcesAudio.splice(b, 1), this.totalLoaded++);
				}
				this.isDrawLoadingScreen &&
					0 == this.resourcesAudio.length &&
					0 == this.resourcesImages.length &&
					((this.statusLoad = 1), this.hideLoadingScreen());
			}
		});
	});
this.START_BRANDING_LOGO;
ig.baked = !0;
ig.module('game.entities.branding-logo')
	.requires('impact.entity')
	.defines(function () {
		EntityBrandingLogo = ig.Entity.extend({
			gravityFactor: 0,
			size: { x: 32, y: 32 },
			zIndex: 10001,
			init: function (b, c, d) {
				this.parent(b, c, d);
				'undefined' == typeof wm &&
					(_SETTINGS.Branding.Logo.Enabled
						? ((this.size.x = _SETTINGS.Branding.Logo.Width),
						  (this.size.y = _SETTINGS.Branding.Logo.Height),
						  d &&
								d.centralize &&
								((this.pos.x = ig.system.width / 2 - this.size.x / 2),
								console.log('centralize true ... centering branded logo ...')))
						: this.kill());
				this.anims.idle = new ig.Animation(this.logo, 0, [0], !0);
				this.currentAnim = this.anims.idle;
				d
					? (console.log('branding settings found ... using that div layer name'),
					  (b = d.div_layer_name))
					: (b = 'branding-logo');
				_SETTINGS.Branding.Logo.LinkEnabled &&
					(console.log('logo link enabled'),
					this.checkClickableLayer(b, _SETTINGS.Branding.Logo.Link, !0));
				console.log('branding logo spawed ...');
			},
			doesClickableLayerExist: function (b) {
				for (k in dynamicClickableEntityDivs) if (k == b) return !0;
				return !1;
			},
			checkClickableLayer: function (b, c, d) {
				'undefined' == typeof wm &&
					(this.doesClickableLayerExist(b)
						? (ig.game.showOverlay([b]),
						  $('#' + b)
								.find('[href]')
								.attr('href', c))
						: this.createClickableOutboundLayer(b, c, 'media/graphics/misc/invisible.png', d));
			},
			createClickableOutboundLayer: function (b, c, d, e) {
				var f = ig.$new('div');
				f.id = b;
				document.body.appendChild(f);
				$('#' + f.id).css('float', 'left');
				$('#' + f.id).css('position', 'absolute');
				if (ig.ua.mobile) {
					var l = window.innerHeight / mobileHeight,
						n = window.innerWidth / mobileWidth;
					$('#' + f.id).css('left', this.pos.x * n);
					$('#' + f.id).css('top', this.pos.y * l);
					$('#' + f.id).css('width', this.size.x * n);
					$('#' + f.id).css('height', this.size.y * l);
				} else
					(l = w / 2 - destW / 2),
						(n = h / 2 - destH / 2),
						console.log(l, n),
						$('#' + f.id).css('left', l + this.pos.x * multiplier),
						$('#' + f.id).css('top', n + this.pos.y * multiplier),
						$('#' + f.id).css('width', this.size.x * multiplier),
						$('#' + f.id).css('height', this.size.y * multiplier);
				e
					? $('#' + f.id).html(
							"<a target='_blank' href='" +
								c +
								"'><img style='width:100%;height:100%' src='" +
								d +
								"'></a>"
					  )
					: $('#' + f.id).html(
							"<a href='" + c + "'><img style='width:100%;height:100%' src='" + d + "'></a>"
					  );
				dynamicClickableEntityDivs[b] = {};
				dynamicClickableEntityDivs[b].width = this.size.x * multiplier;
				dynamicClickableEntityDivs[b].height = this.size.y * multiplier;
				dynamicClickableEntityDivs[b].entity_pos_x = this.pos.x;
				dynamicClickableEntityDivs[b].entity_pos_y = this.pos.y;
			}
		});
	});
this.END_BRANDING_LOGO;
ig.baked = !0;
ig.module('game.entities.opening-kitty')
	.requires('impact.entity')
	.defines(function () {
		EntityOpeningKitty = ig.Entity.extend({
			size: { x: 48, y: 48 },
			soundKey: 'kittyopeningSound',
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
			ready: function () {
				if (!ig.wm)
					if (_SETTINGS.DeveloperBranding.Splash.Enabled) {
						this.initTimer = new ig.Timer(0.1);
						try {
							ig.game.settingsGame.soundOn && ig.soundHandler.sfxPlayer.play(this.soundKey);
						} catch (b) {
							console.log(b);
						}
					} else ig.game.director.nextLevel(), (ig.system.context.globalAlpha = 1), this.kill();
			},
			update: function () {
				this.parent();
			},
			draw: function () {
				this.parent();
			}
		});
	});
ig.baked = !0;
ig.module('game.entities.pointer')
	.requires('impact.entity')
	.defines(function () {
		EntityPointer = ig.Entity.extend({
			type: ig.Entity.TYPE.A,
			checkAgainst: ig.Entity.TYPE.B,
			isClicking: !1,
			isHovering: !1,
			firstClick: !1,
			isReleased: !1,
			hoveringItem: null,
			objectArray: [],
			ignorePause: !0,
			zIndex: 5e3,
			check: function (b) {
				this.objectArray.push(b);
			},
			clickObject: function (b) {
				this.isClicking && !this.firstClick && 'function' == typeof b.clicked && b.clicked();
				this.firstClick && !this.isReleased && 'function' == typeof b.clicking && b.clicking();
				this.firstClick && this.isReleased && 'function' == typeof b.released && b.released();
			},
			refreshPos: function () {
				if (ig.ua.mobile) {
					var b = window.innerHeight / mobileHeight;
					this.pos.x =
						ig.input.mouse.x / (window.innerWidth / mobileWidth) -
						this.size.x / 2 +
						ig.game.screen.x;
					this.pos.y = ig.input.mouse.y / b - this.size.y / 2;
				} else
					(this.pos.x = ig.input.mouse.x / multiplier - this.size.x / 2 + ig.game.screen.x),
						(this.pos.y = ig.input.mouse.y / multiplier - this.size.y / 2);
			},
			update: function () {
				this.refreshPos();
				var b = null,
					c = -1;
				for (a = this.objectArray.length - 1; -1 < a; a--)
					this.objectArray[a].zIndex > c &&
						((c = this.objectArray[a].zIndex), (b = this.objectArray[a]));
				null != b
					? (null != this.hoveringItem &&
							'function' == typeof this.hoveringItem.leave &&
							this.hoveringItem != b &&
							this.hoveringItem.leave(),
					  null != this.hoveringItem &&
							'function' == typeof this.hoveringItem.over &&
							this.hoveringItem == b &&
							this.hoveringItem.over(),
					  (this.hoveringItem = b),
					  this.clickObject(b),
					  (this.objectArray = []))
					: null != this.hoveringItem &&
					  'function' == typeof this.hoveringItem.leave &&
					  (this.hoveringItem.leave(), (this.hoveringItem = null));
				this.isClicking && !this.firstClick
					? (this.firstClick = !0)
					: this.isReleased && this.firstClick && (this.firstClick = !1);
				this.isClicking = ig.input.pressed('click');
				this.isReleased = ig.input.released('click');
			}
		});
	});
ig.baked = !0;
ig.module('game.entities.pointer-selector')
	.requires('game.entities.pointer')
	.defines(function () {
		EntityPointerSelector = EntityPointer.extend({
			zIndex: 5e3,
			_wmDrawBox: !0,
			_wmBoxColor: 'rgba(0, 0, 255, 0.7)',
			size: { x: 15, y: 15 },
			init: function (b, c, d) {
				this.parent(b, c, d);
			}
		});
	});
ig.baked = !0;
ig.module('game.levels.opening')
	.requires('impact.image', 'game.entities.opening-kitty')
	.defines(function () {
		LevelOpening = { entities: [{ type: 'EntityOpeningKitty', x: 520, y: 212 }], layer: [] };
	});
ig.baked = !0;
ig.module('game.entities.audio-toggle')
	.requires('impact.entity')
	.defines(function () {
		EntityAudioToggle = ig.Entity.extend({
			zIndex: 3e3,
			toggleAnim: new ig.Animation(
				new ig.AnimationSheet('media/graphics/game/ui/mainmenu/mute.png', 54, 56),
				0,
				[0, 1, 2, 3]
			),
			togglePos: { x: 0, y: 50 },
			toggleRect: { x: -27, y: -28, w: 54, h: 56 },
			toggleOffset: { x: 0, y: 0 },
			toggleAlpha: 1,
			toggleDown: !1,
			pointer: null,
			control: null,
			hidden: !1,
			buttonSound: 'button',
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
			ready: function () {
				this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
				(this.control = ig.game.getEntitiesByType(EntityHomeControl)[0]) ||
					(this.control = ig.game.getEntitiesByType(EntityGameControl)[0]);
				this.control || (this.control = ig.game.getEntitiesByType(EntityShopControl)[0]);
			},
			draw: function () {
				if (!this.hidden) {
					var b = ig.system.context,
						c = this.pos.x + this.togglePos.x + this.toggleOffset.x + this.toggleRect.x,
						d = this.pos.y + this.togglePos.y + this.toggleOffset.y + this.toggleRect.y;
					this.toggleDown && (d += 2);
					b.save();
					b.globalAlpha = this.toggleAlpha;
					this.toggleAnim.draw(c, d);
					b.restore();
				}
			},
			update: function () {
				this.hidden || this.checkClicks();
			},
			aabbCheck: function (b, c) {
				return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1;
			},
			checkClicks: function () {
				this.pointer.refreshPos();
				var b = {};
				b.x = this.pointer.pos.x + this.pointer.size.x / 2;
				b.y = this.pointer.pos.y + this.pointer.size.y / 2;
				b.w = 1;
				b.h = 1;
				var c = {};
				c.x = this.pos.x + this.togglePos.x + this.toggleRect.x;
				c.y = this.pos.y + this.togglePos.y + this.toggleRect.y;
				c.w = this.toggleRect.w;
				c.h = this.toggleRect.h;
				this.toggleDown = !1;
				this.toggleAnim.tile = 0;
				ig.game.muted || (this.toggleAnim.tile = 1);
				this.aabbCheck(b, c) &&
					(ig.ua.mobile || (this.toggleAnim.tile = 2),
					ig.input.state('click') && ((this.toggleDown = !0), (this.toggleAnim.tile = 3)),
					ig.input.released('click') &&
						((this.toggleDown = !1),
						ig.ua.mobile || (this.toggleAnim.tile = 2),
						ig.soundHandler.sfxPlayer.play(this.buttonSound),
						ig.game.muted ? this.unmuteAudio() : this.muteAudio(),
						ig.ua.mobile &&
							((this.toggleAnim.tile = 0), ig.game.muted || (this.toggleAnim.tile = 1))));
			},
			muteAudio: function () {
				ig.game.muted = !0;
				ig.soundHandler.bgmPlayer.volume(0);
				ig.soundHandler.sfxPlayer.volume(0);
				ig.game.webaudioPlugin.mute();
				ig.game.savePlayerStats();
			},
			unmuteAudio: function () {
				ig.game.muted = !1;
				ig.soundHandler.bgmPlayer.volume(ig.game.musicVolume);
				ig.soundHandler.sfxPlayer.volume(ig.game.sfxVolume);
				ig.game.webaudioPlugin.unmute();
				ig.game.savePlayerStats();
			}
		});
	});
ig.baked = !0;
ig.module('game.entities.shop-control')
	.requires('impact.entity')
	.defines(function () {
		EntityShopControl = ig.Entity.extend({
			zIndex: 2e3,
			pointer: null,
			control: null,
			coinRect: { x: 20, y: 75, w: 41, h: 42 },
			coinCountPos: { x: 75, y: 106 },
			lifeRect: { x: 320, y: 350, w: 40, h: 40 },
			titlePos: { x: 243, y: 46 },
			panelPos: { x: 202, y: 179 },
			panelOffset: { x: 0, y: 0 },
			panelAlpha: 1,
			itemId: 0,
			itemPos: { x: 254, y: 257 },
			itemTextPos: { x: 320, y: 248 },
			arrowRightAnimUp: null,
			arrowRightAnimDown: null,
			arrowRightAnim: null,
			arrowRightRect: { x: 470, y: 270, w: 50, h: 46 },
			arrowLeftAnimUp: null,
			arrowLeftAnimDown: null,
			arrowLeftAnim: null,
			arrowLeftRect: { x: 120, y: 270, w: 50, h: 46 },
			buttonAnimUp: null,
			buttonAnimDown: null,
			buttonAnim: null,
			buttonRect: { x: 259, y: 420, w: 119, h: 65 },
			buttonOffset: { x: 0, y: 0 },
			homeAnimUp: null,
			homeAnimDown: null,
			homeAnim: null,
			homeRect: { x: 295, y: 530, w: 50, h: 50 },
			homeOffset: { x: 0, y: 0 },
			skateboardPrice: 1e3,
			hidden: !0,
			showDone: !1,
			hideDone: !1,
			isShowing: !1,
			isHiding: !1,
			showTime: 0,
			showDuration: 0.5,
			hideTime: 0,
			hideDuration: 0.5,
			alpha: 0,
			pagingLeft: !1,
			pagingRight: !1,
			pagingTime: 0,
			hint: !1,
			hintTime: 0,
			buttonSound: 'button',
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.panelImage = new ig.Image('media/graphics/game/ui/game/shop-panel1.png');
				this.coinImage = new ig.Image('media/graphics/game/ui/game/coinicon.png');
				this.lifeImage = new ig.Image('media/graphics/game/ui/game/lifeicon.png');
				this.titleImage = new ig.Image('media/graphics/game/ui/game/shop-title.png');
				this.panelGreyImage = new ig.Image('media/graphics/game/ui/game/shop-panel0.png');
				this.panelImage = new ig.Image('media/graphics/game/ui/game/shop-panel1.png');
				this.itemImage = [
					new ig.Image('media/graphics/game/ui/game/skateboard.png'),
					new ig.Image('media/graphics/game/ui/game/skates.png'),
					new ig.Image('media/graphics/game/ui/game/rocket.png'),
					new ig.Image('media/graphics/game/ui/game/carpet.png'),
					new ig.Image('media/graphics/game/ui/game/hoverboard.png')
				];
				this.arrowSheet = new ig.AnimationSheet('media/graphics/game/ui/game/arrow.png', 50, 46);
				this.buttonSheet = new ig.AnimationSheet(
					'media/graphics/game/ui/game/shop-button.png',
					119,
					65
				);
				this.homeSheet = new ig.AnimationSheet('media/graphics/game/ui/game/home.png', 50, 50);
				this.titlePos.x = ig.system.width / 2 - this.titleImage.width / 2;
				this.panelPos.x = ig.system.width / 2 - 112;
				this.itemPos.x = this.panelPos.x + 52;
				this.itemPos.y = this.panelPos.y + 78;
				this.itemTextPos.x = ig.system.width / 2;
				this.itemTextPos.y = this.panelPos.y + 55;
				this.buttonRect.x = ig.system.width / 2 - 61;
				this.homeRect.x = ig.system.width / 2 - 25;
				this.buttonAnimUp = new ig.Animation(this.buttonSheet, 0.1, [0]);
				this.buttonAnimDown = new ig.Animation(this.buttonSheet, 0.1, [1]);
				this.buttonAnim = this.buttonAnimUp;
				this.homeAnimUp = new ig.Animation(this.homeSheet, 0.1, [0]);
				this.homeAnimDown = new ig.Animation(this.homeSheet, 0.1, [1]);
				this.homeAnim = this.homeAnimUp;
				this.arrowLeftAnimUp = new ig.Animation(this.arrowSheet, 0.1, [0]);
				this.arrowLeftAnimDown = new ig.Animation(this.arrowSheet, 0.1, [1]);
				this.arrowLeftAnim = this.arrowLeftAnimUp;
				this.arrowLeftAnimUp.flip.x = !0;
				this.arrowLeftAnimDown.flip.x = !0;
				this.arrowRightAnimUp = new ig.Animation(this.arrowSheet, 0.1, [0]);
				this.arrowRightAnimDown = new ig.Animation(this.arrowSheet, 0.1, [1]);
				this.arrowRightAnim = this.arrowRightAnimUp;
				this.arrowLeftRect.x = ig.system.width / 2 - 200;
				this.arrowRightRect.x = ig.system.width / 2 + 150;
				this.lifeRect.x = this.panelPos.x + this.panelImage.width - 45;
				ig.game.getItemUpgradeEquipped(0)
					? (this.itemId = 0)
					: ig.game.getItemUpgradeEquipped(1)
					? (this.itemId = 1)
					: ig.game.getItemUpgradeEquipped(2)
					? (this.itemId = 2)
					: ig.game.getItemUpgradeEquipped(3)
					? (this.itemId = 3)
					: ig.game.getItemUpgradeEquipped(4) && (this.itemId = 4);
			},
			ready: function () {
				this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
				this.control = ig.game.getEntitiesByType(EntityHomeControl)[0];
			},
			draw: function () {
				if (!this.hidden && 0 != this.alpha) {
					ig.system.context.globalAlpha = 0.5 * this.alpha;
					ig.system.context.fillStyle = '#000000';
					ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
					ig.system.context.globalAlpha = 1;
					ig.system.context.globalAlpha = this.alpha;
					this.titleImage.draw(this.titlePos.x, this.titlePos.y);
					ig.system.context.globalAlpha = this.panelAlpha;
					ig.game.getItemUpgradeStatus(this.itemId)
						? this.panelImage.draw(
								this.panelPos.x + this.panelOffset.x,
								this.panelPos.y + this.panelOffset.y
						  )
						: this.panelGreyImage.draw(
								this.panelPos.x + this.panelOffset.x,
								this.panelPos.y + this.panelOffset.y
						  );
					this.itemImage[this.itemId].draw(
						this.panelPos.x + this.panelOffset.x,
						this.panelPos.y + this.panelOffset.y
					);
					ig.system.context.textAlign = 'center';
					ig.system.context.font = '18px mainfont, Helvetica, Verdana';
					ig.system.context.fillStyle = '#1A4283';
					ig.system.context.fillText(
						ig.game.getItemUpgradeName(this.itemId),
						this.itemTextPos.x + this.panelOffset.x,
						this.itemTextPos.y + this.panelOffset.y
					);
					if (!ig.game.getItemUpgradeStatus(this.itemId)) {
						this.buttonAnim.draw(this.buttonRect.x, this.buttonRect.y);
						ig.system.context.textAlign = 'center';
						ig.system.context.font = '16px mainfont, Helvetica, Verdana';
						ig.system.context.fillStyle = '#1A4283';
						var b = this.buttonRect.x - 17 + this.buttonRect.w / 2 + this.buttonOffset.x,
							c = this.buttonRect.y - 27 + this.buttonRect.h + this.buttonOffset.y;
						ig.system.context.fillText(ig.game.getItemUpgradePrice(this.itemId), b, c);
					}
					if (ig.game.getItemUpgradeEquipped(this.itemId)) {
						var d = ig.system.context;
						d.save();
						d.translate(this.lifeRect.x + this.panelOffset.x, this.lifeRect.y + this.panelOffset.y);
						d.rotate(-Math.PI / 8);
						this.lifeImage.draw(-this.lifeRect.w / 2, -this.lifeRect.h);
						d.textAlign = 'center';
						d.font = '16px mainfont, Helvetica, Verdana';
						d.fillStyle = '#000000';
						d.fillText(_STRINGS.UI.using, 2, 22);
						d.fillStyle = '#e45309';
						d.fillText(_STRINGS.UI.using, 0, 20);
						d.restore();
					}
					ig.system.context.globalAlpha = 1;
					this.arrowLeftAnim.draw(this.arrowLeftRect.x, this.arrowLeftRect.y);
					this.arrowRightAnim.draw(this.arrowRightRect.x, this.arrowRightRect.y);
					this.homeAnim.draw(this.homeRect.x, this.homeRect.y);
					this.coinImage.draw(this.coinRect.x, this.coinRect.y);
					ig.system.context.textAlign = 'left';
					ig.system.context.font = '20px mainfont, Helvetica, Verdana';
					ig.system.context.fillStyle = '#000000';
					ig.system.context.fillText(
						ig.game.money,
						this.coinCountPos.x + 2,
						this.coinCountPos.y + 2
					);
					ig.system.context.fillStyle = '#ffffff';
					ig.system.context.fillText(ig.game.money, this.coinCountPos.x, this.coinCountPos.y);
					ig.system.context.globalAlpha = 1;
					this.hint &&
						((d = ig.system.context),
						d.save(),
						(d.fillStyle = '#000000'),
						(d.strokeStyle = '#000000'),
						(d.globalAlpha = 0.75),
						this.roundRect(d, b - 120 + 20, c - 20 - 50, 240, 40, 5, !0, !1),
						(d.globalAlpha = 1),
						this.drawHint(b + 20, c + 7.5 - 50),
						d.restore());
				}
			},
			show: function () {
				this.hidden = !1;
				this.isShowing = !0;
				this.hideDone = this.showDone = !1;
				this.showTime = ig.system.clock.delta();
				var b = this.showDuration;
				this.offset.y = ig.system.height;
				this.tweenObj = this.tween({ offset: { x: 0, y: 0 } }, b, {
					easing: ig.Tween.Easing.Elastic.EaseOut,
					entity: this,
					onComplete: function () {
						this.entity.showDone = !0;
						this.entity.isShowing = !1;
					}
				});
				this.tweenObj.start();
				ig.game.visitedShop = !0;
				ig.game.savePlayerStats();
			},
			hide: function () {
				this.isHiding = !0;
				this.hideDone = this.showDone = !1;
				this.hideTime = ig.system.clock.delta();
				var b = this.hideDuration;
				this.offset.y = 0;
				this.tweenObj = this.tween({ offset: { x: 0, y: ig.system.height } }, b, {
					easing: ig.Tween.Easing.Elastic.EaseIn,
					entity: this,
					onComplete: function () {
						this.entity.hideDone = !0;
						this.entity.hidden = !0;
						this.entity.isHiding = !1;
						this.entity.control.unpause();
					}
				});
				this.tweenObj.start();
			},
			update: function () {
				if (!this.hidden) {
					this.hint &&
						((this.hintTime += ig.system.tick),
						2 < this.hintTime && ((this.hintTime = 0), (this.hint = !1)));
					if (this.isShowing) {
						var b = ig.system.clock.delta() - this.showTime;
						b > this.showDuration / 2 && (b = this.showDuration / 2);
						b /= this.showDuration / 2;
						this.control.mainMenuAlpha = 1 - b;
						b = ig.system.clock.delta() - this.showTime;
						b >= this.showDuration / 2 &&
							((b -= this.showDuration / 2),
							b > this.showDuration / 2 && (b = this.showDuration / 2),
							(this.alpha = b /= this.showDuration / 2));
					}
					this.isHiding &&
						((b = ig.system.clock.delta() - this.hideTime),
						b > this.hideDuration / 2 && (b = this.hideDuration / 2),
						(b /= this.hideDuration / 2),
						(this.alpha = 1 - b),
						(b = ig.system.clock.delta() - this.hideTime),
						b >= this.hideDuration / 2 &&
							((b -= this.hideDuration / 2),
							b > this.hideDuration / 2 && (b = this.hideDuration / 2),
							(b /= this.hideDuration / 2),
							(this.control.mainMenuAlpha = b)));
					this.tweenObj && this.tweenObj.update();
					this.showDone && this.checkClicks();
					this.pagingRight &&
						((b = ig.system.clock.delta() - this.pagingTime),
						0.5 >= b
							? ((b /= 0.5),
							  (this.panelAlpha = 1 - b * b),
							  (this.panelOffset.x -= 200 * ig.system.tick))
							: 1 >= b
							? (0.5 >= b - ig.system.tick &&
									((this.panelOffset.x = 100),
									(this.itemId += 1),
									this.itemId >= this.itemImage.length && (this.itemId = 0)),
							  (b = (b - 0.5) / 0.5),
							  (this.panelAlpha = b * b),
							  (this.panelOffset.x -= 200 * ig.system.tick))
							: ((this.pagingRight = !1), (this.panelOffset.x = 0)));
					this.pagingLeft &&
						((b = ig.system.clock.delta() - this.pagingTime),
						0.5 >= b
							? ((b /= 0.5),
							  1 < b && (b = 1),
							  (this.panelAlpha = 1 - b * b),
							  (this.panelOffset.x += 200 * ig.system.tick))
							: 1 >= b
							? (0.5 >= b - ig.system.tick &&
									((this.panelOffset.x = -100),
									(this.itemId -= 1),
									0 > this.itemId && (this.itemId = this.itemImage.length - 1)),
							  (b = (b - 0.5) / 0.5),
							  1 < b && (b = 1),
							  (this.panelAlpha = b * b),
							  (this.panelOffset.x += 200 * ig.system.tick))
							: ((this.pagingLeft = !1), (this.panelOffset.x = 0)));
				}
			},
			aabbCheck: function (b, c) {
				return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1;
			},
			checkClicks: function () {
				this.pointer.refreshPos();
				var b = {};
				b.x = this.pointer.pos.x;
				b.y = this.pointer.pos.y;
				b.w = this.pointer.size.x;
				b.h = this.pointer.size.y;
				if (!ig.game.getItemUpgradeStatus(this.itemId) && !this.pagingLeft && !this.pagingRight)
					if (this.aabbCheck(b, this.buttonRect)) {
						if (
							(ig.input.state('click') &&
								((this.buttonAnim = this.buttonAnimDown), (this.buttonOffset.y = 2)),
							ig.input.released('click'))
						) {
							this.buttonAnim = this.buttonAnimUp;
							this.buttonOffset.y = 0;
							var c = ig.game.getItemUpgradePrice(this.itemId);
							ig.game.money >= c
								? ((ig.game.money -= c),
								  ig.game.setItemUpgradeStatus(this.itemId, !0),
								  ig.game.setItemUpgradeEquipped(this.itemId, !0),
								  ig.game.savePlayerStats(),
								  ig.soundHandler.sfxPlayer.play(this.buttonSound))
								: ((this.hint = !0), (this.hintTime = 0));
						}
					} else (this.buttonAnim = this.buttonAnimUp), (this.buttonOffset.y = 0);
				ig.game.getItemUpgradeStatus(this.itemId) &&
					!this.pagingLeft &&
					!this.pagingRight &&
					((c = { x: 0, y: 0, w: 0, h: 0 }),
					(c.x = this.panelPos.x),
					(c.y = this.panelPos.y),
					(c.w = this.panelImage.width),
					(c.h = this.panelImage.height),
					this.aabbCheck(b, c) &&
						ig.input.released('click') &&
						(ig.game.getItemUpgradeEquipped(this.itemId)
							? ig.game.setItemUpgradeEquipped(this.itemId, !1)
							: ig.game.setItemUpgradeEquipped(this.itemId, !0),
						ig.game.savePlayerStats(),
						ig.soundHandler.sfxPlayer.play(this.buttonSound)));
				this.aabbCheck(b, this.homeRect)
					? (ig.input.state('click') && (this.homeAnim = this.homeAnimDown),
					  ig.input.released('click') &&
							((this.homeAnim = this.homeAnimUp),
							ig.game.savePlayerStats(),
							this.hide(),
							ig.soundHandler.sfxPlayer.play(this.buttonSound),
							this.hint && ((this.hideTime = 0), (this.hint = !1))))
					: (this.homeAnim = this.homeAnimUp);
				this.aabbCheck(b, this.arrowRightRect)
					? (ig.input.state('click') && (this.arrowRightAnim = this.arrowRightAnimDown),
					  ig.input.released('click') &&
							((this.arrowRightAnim = this.arrowRightAnimUp),
							this.doPageRight(),
							ig.soundHandler.sfxPlayer.play(this.buttonSound),
							this.hint && ((this.hideTime = 0), (this.hint = !1))))
					: (this.arrowRightAnim = this.arrowRightAnimUp);
				this.aabbCheck(b, this.arrowLeftRect)
					? (ig.input.state('click') && (this.arrowLeftAnim = this.arrowLeftAnimDown),
					  ig.input.released('click') &&
							((this.arrowLeftAnim = this.arrowLeftAnimUp),
							this.doPageLeft(),
							ig.soundHandler.sfxPlayer.play(this.buttonSound),
							this.hint && ((this.hideTime = 0), (this.hint = !1))))
					: (this.arrowLeftAnim = this.arrowLeftAnimUp);
			},
			doPageLeft: function () {
				!this.pagingLeft &&
					!this.pagingRight &&
					((this.pagingLeft = !0), (this.pagingTime = ig.system.clock.delta()));
			},
			doPageRight: function () {
				!this.pagingRight &&
					!this.pagingLeft &&
					((this.pagingRight = !0), (this.pagingTime = ig.system.clock.delta()));
			},
			roundRect: function (b, c, d, e, f, l, n, q) {
				'undefined' == typeof q && (q = !0);
				'undefined' === typeof l && (l = 5);
				b.beginPath();
				b.moveTo(c + l, d);
				b.lineTo(c + e - l, d);
				b.quadraticCurveTo(c + e, d, c + e, d + l);
				b.lineTo(c + e, d + f - l);
				b.quadraticCurveTo(c + e, d + f, c + e - l, d + f);
				b.lineTo(c + l, d + f);
				b.quadraticCurveTo(c, d + f, c, d + f - l);
				b.lineTo(c, d + l);
				b.quadraticCurveTo(c, d, c + l, d);
				b.closePath();
				q && b.stroke();
				n && b.fill();
			},
			drawHint: function (b, c) {
				ig.system.context.textAlign = 'center';
				ig.system.context.font = '20px mainfont, Helvetica, Verdana';
				ig.system.context.fillStyle = '#ffffff';
				ig.system.context.fillText('not enough coins', b, c);
			}
		});
	});
ig.baked = !0;
ig.module('game.entities.share-button')
	.requires('impact.entity')
	.defines(function () {
		EntityShareButton = ig.Entity.extend({
			zIndex: 3e3,
			toggleAnim: new ig.Animation(
				new ig.AnimationSheet('media/graphics/game/ui/mainmenu/share.png', 54, 56),
				0,
				[0, 1, 2, 3]
			),
			togglePos: { x: 0, y: 0 },
			toggleRect: { x: -27, y: -28, w: 54, h: 56 },
			toggleOffset: { x: 0, y: 0 },
			toggleAlpha: 1,
			toggleDown: !1,
			pointer: null,
			control: null,
			hidden: !1,
			buttonSound: 'button',
			init: function (b, c, d) {
				this.parent(b, c, d);
			},
			ready: function () {
				this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
				(this.control = ig.game.getEntitiesByType(EntityHomeControl)[0]) ||
					(this.control = ig.game.getEntitiesByType(EntityGameControl)[0]);
				this.control || (this.control = ig.game.getEntitiesByType(EntityShopControl)[0]);
			},
			draw: function () {
				if (!this.hidden) {
					var b = ig.system.context,
						c = this.pos.x + this.togglePos.x + this.toggleOffset.x + this.toggleRect.x,
						d = this.pos.y + this.togglePos.y + this.toggleOffset.y + this.toggleRect.y;
					this.toggleDown && (d += 2);
					b.save();
					b.globalAlpha = this.toggleAlpha;
					this.toggleAnim.draw(c, d);
					b.restore();
				}
			},
			update: function () {
				this.hidden || this.checkClicks();
			},
			aabbCheck: function (b, c) {
				return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1;
			},
			checkClicks: function () {
				this.pointer.refreshPos();
				var b = {};
				b.x = this.pointer.pos.x + this.pointer.size.x / 2;
				b.y = this.pointer.pos.y + this.pointer.size.y / 2;
				b.w = 1;
				b.h = 1;
				var c = {};
				c.x = this.pos.x + this.togglePos.x + this.toggleRect.x;
				c.y = this.pos.y + this.togglePos.y + this.toggleRect.y;
				c.w = this.toggleRect.w;
				c.h = this.toggleRect.h;
				this.toggleDown = !1;
				this.toggleAnim.tile = 1;
				this.aabbCheck(b, c) &&
					(ig.ua.mobile || (this.toggleAnim.tile = 2),
					ig.input.state('click') && ((this.toggleDown = !0), (this.toggleAnim.tile = 3)),
					ig.input.released('click') &&
						((this.toggleDown = !1),
						ig.ua.mobile || (this.toggleAnim.tile = 2),
						ig.soundHandler.sfxPlayer.play(this.buttonSound),
						console.log('share to the world!!'),
						ig.vigoo.share(),
						(ig.game.firstClick = !1),
						ig.game && (ig.game.isMuteAds = !0),
						ig.ua.mobile && (this.toggleAnim.tile = 1)));
			},
			muteAudio: function () {
				ig.game.muted = !0;
				ig.soundHandler.bgmPlayer.volume(0);
				ig.soundHandler.sfxPlayer.volume(0);
				ig.game.webaudioPlugin.mute();
				ig.game.savePlayerStats();
			},
			unmuteAudio: function () {
				ig.game.muted = !1;
				ig.soundHandler.bgmPlayer.volume(ig.game.musicVolume);
				ig.soundHandler.sfxPlayer.volume(ig.game.sfxVolume);
				ig.game.webaudioPlugin.unmute();
				ig.game.savePlayerStats();
			}
		});
	});
ig.baked = !0;
ig.module('game.entities.home-control')
	.requires(
		'impact.entity',
		'game.entities.audio-toggle',
		'game.entities.shop-control',
		'game.entities.share-button'
	)
	.defines(function () {
		EntityHomeControl = ig.Entity.extend({
			zIndex: 100,
			isHome: !0,
			bgImage: new ig.Image('media/graphics/game/backgrounds/mainbg.jpg'),
			titleImage: new ig.Image('media/graphics/game/backgrounds/maintitle.png'),
			time: 1,
			playButtonAnim: new ig.Animation(
				new ig.AnimationSheet('media/graphics/game/ui/mainmenu/playgame.png', 110, 64),
				0,
				[0, 1, 2]
			),
			playButtonPos: { x: 0, y: 590 },
			playButtonRect: { x: -55, y: -32, w: 110, h: 64 },
			playButtonOffset: { x: 0, y: 0 },
			playButtonAlpha: 1,
			playButtonDown: !1,
			shopButtonAnim: new ig.Animation(
				new ig.AnimationSheet('media/graphics/game/ui/mainmenu/shop.png', 72, 76),
				0,
				[0, 1, 2]
			),
			shopButtonPos: { x: 0, y: 593 },
			shopButtonRect: { x: -36, y: -38, w: 72, h: 76 },
			shopButtonOffset: { x: 0, y: 0 },
			shopButtonAlpha: 1,
			shopButtonDown: !1,
			infoButtonAnim: new ig.Animation(
				new ig.AnimationSheet('media/graphics/game/ui/mainmenu/info.png', 54, 56),
				0,
				[0, 1, 2]
			),
			infoButtonPos: { x: 0, y: 88 },
			infoButtonRect: { x: -27, y: -28, w: 54, h: 56 },
			infoButtonOffset: { x: 0, y: 0 },
			infoButtonAlpha: 1,
			infoButtonDown: !1,
			pointer: null,
			audiotoggle: null,
			shop: null,
			menuPaused: !1,
			mainMenuAlpha: 1,
			buttonSound: 'button',
			init: function (b, c, d) {
				this.parent(b, c, d);
				ig.global.wm ||
					((this.playButtonPos.x = ig.system.width / 2),
					(this.shopButtonPos.x = ig.system.width - 10 - this.shopButtonRect.w / 2),
					(this.infoButtonPos.x = ig.system.width - 10 - this.infoButtonRect.w / 2));
			},
			ready: function () {
				this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
				this.audiotoggle = ig.game.spawnEntity(EntityAudioToggle, 37, 38);
				this.audiotoggle.ready();
				this.shareButton = ig.game.spawnEntity(EntityShareButton, 37, 602);
				this.shareButton.ready();
				this.shop = ig.game.spawnEntity(EntityShopControl, 0, 0);
				this.shop.ready();
				ig.game.sortEntitiesDeferred();
				ig.global.wm ||
					(!1 == ig.game.muted && ig.soundHandler.bgmPlayer.play(),
					ig.game.doShop && ((ig.game.doShop = !1), this.showShop()));
			},
			draw: function () {
				var b = ig.system.context;
				b.save();
				this.bgImage.width < ig.system.width && b.scale(ig.system.width / this.bgImage.width, 1);
				this.bgImage.draw(0, 0);
				b.restore();
				if (0 != this.mainMenuAlpha) {
					b.globalAlpha = this.mainMenuAlpha;
					this.titleImage.draw(ig.system.width / 2 - this.titleImage.width / 2, 0);
					var c = this.playButtonPos.x + this.playButtonOffset.x + this.playButtonRect.x,
						d = this.playButtonPos.y + this.playButtonOffset.y + this.playButtonRect.y;
					this.playButtonDown && (d += 2);
					b.save();
					b.globalAlpha = this.mainMenuAlpha * this.playButtonAlpha;
					this.playButtonAnim.draw(c, d);
					b.restore();
					c = this.shopButtonPos.x + this.shopButtonOffset.x + this.shopButtonRect.x;
					d = this.shopButtonPos.y + this.shopButtonOffset.y + this.shopButtonRect.y;
					this.shopButtonDown && (d += 2);
					b.save();
					b.globalAlpha = this.mainMenuAlpha * this.shopButtonAlpha;
					this.shopButtonAnim.draw(c, d);
					b.restore();
					c = this.infoButtonPos.x + this.infoButtonOffset.x + this.infoButtonRect.x;
					d = this.infoButtonPos.y + this.infoButtonOffset.y + this.infoButtonRect.y;
					this.infoButtonDown && (d += 2);
					b.save();
					b.globalAlpha = this.mainMenuAlpha * this.infoButtonAlpha;
					this.infoButtonAnim.draw(c, d);
					b.restore();
					b.globalAlpha = 1;
				}
			},
			playGame: function () {
				ig.input.clearPressed();
				0 == ig.game.statusLoad
					? ig.game.showLoadingScreen(this.playGame.bind(this))
					: (ig.game.firstrun
							? ((ig.game.doTutorialFlag = !0), (ig.game.firstrun = !1), ig.game.savePlayerStats())
							: (ig.game.doTutorialFlag = !1),
					  ig.game.director.jumpTo(LevelGame));
			},
			playTutorial: function () {
				ig.input.clearPressed();
				0 == ig.game.statusLoad
					? ig.game.showLoadingScreen(this.playTutorial.bind(this))
					: ((ig.game.doTutorialFlag = !0),
					  (ig.game.firstrun = !1),
					  ig.game.savePlayerStats(),
					  ig.game.director.jumpTo(LevelGame));
			},
			showShop: function () {
				0 == ig.game.statusLoad
					? ig.game.showLoadingScreen(this.showShop.bind(this))
					: (this.pause(), this.shop.show());
			},
			hideShop: function () {
				this.shop.hide();
				this.unpause();
			},
			pause: function () {
				this.menuPaused = !0;
			},
			unpause: function () {
				this.menuPaused = !1;
			},
			update: function () {
				this.time += ig.system.tick;
				this.menuPaused ||
					(!ig.game.firstClick &&
						ig.input.pressed('click') &&
						(ig.game.playBGM(), ig.game && !0 === ig.game.isMuteAds && (ig.game.isMuteAds = !1)),
					this.checkClicks());
			},
			aabbCheck: function (b, c) {
				return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1;
			},
			checkClicks: function () {
				this.pointer.refreshPos();
				var b = {};
				b.x = this.pointer.pos.x + this.pointer.size.x / 2;
				b.y = this.pointer.pos.y + this.pointer.size.y / 2;
				b.w = 1;
				b.h = 1;
				var c = {};
				c.x = this.playButtonPos.x + this.playButtonRect.x;
				c.y = this.playButtonPos.y + this.playButtonRect.y;
				c.w = this.playButtonRect.w;
				c.h = this.playButtonRect.h;
				if (this.aabbCheck(b, c)) {
					if (
						((this.playButtonDown = !1),
						(this.playButtonAnim.tile = 0),
						ig.ua.mobile || (this.playButtonAnim.tile = 1),
						ig.input.state('click') && ((this.playButtonDown = !0), (this.playButtonAnim.tile = 2)),
						ig.input.released('click'))
					) {
						this.playButtonDown = !1;
						ig.ua.mobile || (this.playButtonAnim.tile = 1);
						ig.soundHandler.sfxPlayer.play(this.buttonSound);
						this.playGame();
						return;
					}
				} else (this.playButtonDown = !1), (this.playButtonAnim.tile = 0);
				c = {};
				c.x = this.shopButtonPos.x + this.shopButtonRect.x;
				c.y = this.shopButtonPos.y + this.shopButtonRect.y;
				c.w = this.shopButtonRect.w;
				c.h = this.shopButtonRect.h;
				if (this.aabbCheck(b, c)) {
					if (
						((this.shopButtonDown = !1),
						(this.shopButtonAnim.tile = 0),
						ig.ua.mobile || (this.shopButtonAnim.tile = 1),
						ig.input.state('click') && ((this.shopButtonDown = !0), (this.shopButtonAnim.tile = 2)),
						ig.input.released('click'))
					) {
						this.shopButtonDown = !1;
						ig.ua.mobile || (this.shopButtonAnim.tile = 1);
						ig.soundHandler.sfxPlayer.play(this.buttonSound);
						this.showShop();
						return;
					}
				} else (this.shopButtonDown = !1), (this.shopButtonAnim.tile = 0);
				c = {};
				c.x = this.infoButtonPos.x + this.infoButtonRect.x;
				c.y = this.infoButtonPos.y + this.infoButtonRect.y;
				c.w = this.infoButtonRect.w;
				c.h = this.infoButtonRect.h;
				this.aabbCheck(b, c)
					? ((this.infoButtonDown = !1),
					  (this.infoButtonAnim.tile = 0),
					  ig.ua.mobile || (this.infoButtonAnim.tile = 1),
					  ig.input.state('click') && ((this.infoButtonDown = !0), (this.infoButtonAnim.tile = 2)),
					  ig.input.released('click') &&
							((this.infoButtonDown = !1),
							ig.ua.mobile || (this.infoButtonAnim.tile = 1),
							ig.soundHandler.sfxPlayer.play(this.buttonSound),
							this.playTutorial()))
					: ((this.infoButtonDown = !1), (this.infoButtonAnim.tile = 0));
			},
			roundRect: function (b, c, d, e, f, l, n, q) {
				'undefined' == typeof q && (q = !0);
				'undefined' === typeof l && (l = 5);
				b.beginPath();
				b.moveTo(c + l, d);
				b.lineTo(c + e - l, d);
				b.quadraticCurveTo(c + e, d, c + e, d + l);
				b.lineTo(c + e, d + f - l);
				b.quadraticCurveTo(c + e, d + f, c + e - l, d + f);
				b.lineTo(c + l, d + f);
				b.quadraticCurveTo(c, d + f, c, d + f - l);
				b.lineTo(c, d + l);
				b.quadraticCurveTo(c, d, c + l, d);
				b.closePath();
				q && b.stroke();
				n && b.fill();
			}
		});
	});
ig.baked = !0;
ig.module('game.levels.home')
	.requires('impact.image', 'game.entities.home-control', 'game.entities.pointer-selector')
	.defines(function () {
		LevelHome = {
			entities: [
				{ type: 'EntityHomeControl', x: 0, y: 0 },
				{ type: 'EntityPointerSelector', x: 0, y: 0 }
			],
			layer: []
		};
	});
ig.baked = !0;
ig.module('game.entities.game-ui')
	.requires('impact.entity')
	.defines(function () {
		EntityGameUi = ig.Entity.extend({
			zIndex: 3e3,
			overlayAlpha: 1,
			homeAnimUp: null,
			homeAnimDown: null,
			homeAnim: null,
			homeRect: { x: 582, y: 126, w: 50, h: 50 },
			homeEndRect: { x: 270, y: 484, w: 50, h: 50 },
			homeEndOffset: { x: 0, y: 0 },
			restartAnimUp: null,
			restartAnimDown: null,
			restartAnim: null,
			restartEndRect: { x: 320, y: 483, w: 48, h: 52 },
			restartEndOffset: { x: 0, y: 0 },
			pauseAnimUp: null,
			pauseAnimOver: null,
			pauseAnimDown: null,
			pauseAnim: null,
			pauseRect: { x: 582, y: 76, w: 37, h: 40 },
			pauseOffset: { x: 0, y: 0 },
			playRect: { x: 615, y: 5, w: 35, h: 44 },
			lifeRect: { x: 502, y: 76, w: 40, h: 40 },
			lifeCountPos: { x: 557, y: 106 },
			coinRect: { x: 20, y: 75, w: 41, h: 42 },
			coinCountPos: { x: 75, y: 106 },
			cookieRect: { x: 23, y: 126, w: 35, h: 41 },
			cookieCountPos: { x: 95, y: 157 },
			powerLevelGrad: null,
			powerLevelRect: { x: 60, y: 78, w: 10, h: 34 },
			gameOverTitleRect: { x: 153, y: 131, w: 333, h: 54 },
			gameOverTitleOffset: { x: 0, y: 0 },
			gameOverPanelRect: { x: 219, y: 307, w: 202, h: 156 },
			gameOverPanelOffset: { x: 0, y: 0 },
			gameOverBgRect: { x: 263, y: 209, w: 114, h: 114 },
			gameOverBgOffset: { x: 0, y: 0 },
			gameOverAnim: null,
			panelIconsRect: { x: 269, y: 337, w: 49, h: 106 },
			panelIconsOffset: { x: 0, y: 0 },
			pausedTitlePos: { x: 0, y: 220 },
			coinEndCountPos: { x: 339, y: 390 },
			cookieEndCountPos: { x: 339, y: 443 },
			happyBgRect: { x: -17, y: 533, w: 114, h: 114 },
			happyBgOffset: { x: 0, y: 0 },
			happyAnim: null,
			happyPanelRect: { x: 219, y: 307, w: 202, h: 155 },
			happyPanelOffset: { x: 0, y: 0 },
			fingerRect: { x: 0, y: 0, w: 50, h: 50 },
			fingerOffset: { x: 0, y: 0 },
			tutorialUIShowTime: 0,
			tutorialUIShowingFlag: !1,
			tutorialUIHideTime: 0,
			tutorialUIHidingFlag: !1,
			tutorialUITickStartTime: 0,
			tutorialUITickFlag: !1,
			tutorialUIFadeTime: 0,
			tutorialUIFadeFlag: !1,
			tutorialUIDrawFlag: !1,
			tutorialUIAlpha: 0,
			tutorialUIOffset: { x: 0, y: 0 },
			tutorialID: 0,
			nextTutorialID: 0,
			tutorialTextOrder: 0,
			tutorialTextAlpha: 0,
			tutorialTextRect: { x: 40, y: 470, w: 400, h: 100 },
			tutorialTime: 0,
			control: null,
			pointer: null,
			buttonSound: 'button',
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.homeSheet = new ig.AnimationSheet('media/graphics/game/ui/game/home.png', 50, 50);
				this.restartSheet = new ig.AnimationSheet(
					'media/graphics/game/ui/game/restart.png',
					48,
					52
				);
				this.pauseSheet = new ig.AnimationSheet('media/graphics/game/ui/game/pause.png', 37, 40);
				this.lifeImage = new ig.Image('media/graphics/game/ui/game/lifeicon.png');
				this.coinImage = new ig.Image('media/graphics/game/ui/game/coinicon.png');
				this.cookieImage = new ig.Image('media/graphics/game/ui/game/cookieicon.png');
				this.gameOverTitleImage = new ig.Image('media/graphics/game/ui/game/gameover.png');
				this.gameOverPanelImage = new ig.Image('media/graphics/game/ui/game/gameover-panel.png');
				this.gameOverBgImage = new ig.Image('media/graphics/game/ui/game/gameover-bg.png');
				this.gameOverAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/ui/game/gameover-anim.png',
					114,
					114
				);
				this.panelIconsImage = new ig.Image('media/graphics/game/ui/game/panel-icons.png');
				this.pausedTitleImage = new ig.Image('media/graphics/game/ui/game/paused-title.png');
				this.happyBgImage = new ig.Image('media/graphics/game/ui/game/levelup-anim-bg.png');
				this.happyBgImage = new ig.Image('media/graphics/game/ui/game/levelup-anim-bg.png');
				this.happyAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/ui/game/levelup-anim.png',
					114,
					114
				);
				this.happyPanelImage = new ig.Image('media/graphics/game/ui/game/levelup-panel.png');
				this.fingerImage = new ig.Image('media/graphics/game/ui/game/finger.png');
				this.powerLevelGrad = ig.system.context.createLinearGradient(
					0,
					0,
					0,
					this.powerLevelRect.h
				);
				this.powerLevelGrad.addColorStop(0, '#cc1e1c');
				this.powerLevelGrad.addColorStop(1, '#f59f2a');
				this.pauseAnimUp = new ig.Animation(this.pauseSheet, 0.1, [0]);
				this.pauseAnimOver = new ig.Animation(this.pauseSheet, 0.1, [1]);
				this.pauseAnimDown = new ig.Animation(this.pauseSheet, 0.1, [2]);
				this.pauseAnim = this.pauseAnimUp;
				this.homeAnimUp = new ig.Animation(this.homeSheet, 0.1, [0]);
				this.homeAnimDown = new ig.Animation(this.homeSheet, 0.1, [1]);
				this.homeAnim = this.homeAnimUp;
				this.restartAnimUp = new ig.Animation(this.restartSheet, 0.1, [0]);
				this.restartAnimDown = new ig.Animation(this.restartSheet, 0.1, [1]);
				this.restartAnim = this.restartAnimUp;
				this.gameOverAnim = new ig.Animation(
					this.gameOverAnimSheet,
					0.042,
					[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
					!1
				);
				this.pauseRect.x = ig.system.width - 58;
				this.homeRect.x = ig.system.width - 63;
				this.lifeRect.x = ig.system.width - 158;
				this.lifeCountPos.x = ig.system.width - 103;
				this.gameOverTitleRect.x = ig.system.width / 2 - this.gameOverTitleRect.w / 2;
				this.gameOverPanelRect.x = ig.system.width / 2 - this.gameOverPanelRect.w / 2;
				this.gameOverBgRect.x = ig.system.width / 2 - this.gameOverBgRect.w / 2;
				this.panelIconsRect.x = this.gameOverPanelRect.x + 30;
				this.panelIconsRect.y = this.gameOverPanelRect.y + 21;
				this.coinEndCountPos.x = this.panelIconsRect.x + 103;
				this.coinEndCountPos.y = this.panelIconsRect.y + 43;
				this.cookieEndCountPos.x = this.panelIconsRect.x + 103;
				this.cookieEndCountPos.y = this.panelIconsRect.y + 98;
				this.homeEndRect.x = ig.system.width / 2 - this.homeEndRect.w - 40;
				this.restartEndRect.x = ig.system.width / 2 + 40;
				this.pausedTitlePos.x = ig.system.width / 2 - this.pausedTitleImage.width / 2;
				this.happyAnim = new ig.Animation(this.happyAnimSheet, 0.084, [0, 1, 2, 3, 4], !0);
				this.tutorialTextRect.x = ig.system.width / 2 - this.tutorialTextRect.w / 2;
				this.happyBgRect.x = this.tutorialTextRect.x - this.happyBgRect.w / 2;
				this.happyBgRect.y =
					this.tutorialTextRect.y + this.tutorialTextRect.h / 2 - this.happyBgRect.h / 2;
				this.tutorialTextRect.w += this.happyBgRect.w / 2;
			},
			ready: function () {
				this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
				this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
			},
			draw: function () {
				var b = ig.system.context;
				b.fillStyle = this.control.bgHorizonLinGrad;
				b.fillRect(0, 121, ig.system.width, 195);
				this.drawGameStats();
				this.drawTutorialUI();
				this.control.gamePaused &&
					((ig.system.context.globalAlpha = 0.5),
					(ig.system.context.fillStyle = '#000000'),
					ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height),
					(ig.system.context.globalAlpha = 1),
					this.pausedTitleImage.draw(this.pausedTitlePos.x, this.pausedTitlePos.y));
				this.control.gamePaused &&
					((b = ig.system.clock.delta() % 2),
					1 < b && (b = 1 - (b - 1)),
					(ig.system.context.globalAlpha = 0.25 + 0.75 * b));
				this.pauseAnim.draw(
					this.pauseRect.x + this.pos.x - this.offset.x - ig.game._rscreen.x,
					this.pauseRect.y + this.pos.y - this.offset.y - ig.game._rscreen.y
				);
				this.control.gamePaused &&
					((ig.system.context.globalAlpha = 1),
					this.homeAnim.draw(
						this.homeRect.x + this.pos.x - this.offset.x - ig.game._rscreen.x,
						this.homeRect.y + this.pos.y - this.offset.y - ig.game._rscreen.y
					));
				this.drawGameOver();
				if (this.control.gameStarting || this.control.gameEnding)
					(ig.system.context.globalAlpha = this.overlayAlpha),
						(ig.system.context.fillStyle = '#000000'),
						ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height),
						(ig.system.context.globalAlpha = 1);
			},
			drawGameStats: function () {
				this.lifeImage.draw(this.lifeRect.x, this.lifeRect.y);
				ig.system.context.textAlign = 'left';
				ig.system.context.font = '20px mainfont, Helvetica, Verdana';
				ig.system.context.fillStyle = '#000000';
				ig.system.context.fillText(
					this.control.lifeCount,
					this.lifeCountPos.x + 2,
					this.lifeCountPos.y + 2
				);
				ig.system.context.fillStyle = '#ffffff';
				ig.system.context.fillText(
					this.control.lifeCount,
					this.lifeCountPos.x,
					this.lifeCountPos.y
				);
				this.coinImage.draw(this.coinRect.x, this.coinRect.y);
				ig.system.context.textAlign = 'left';
				ig.system.context.font = '20px mainfont, Helvetica, Verdana';
				ig.system.context.fillStyle = '#000000';
				ig.system.context.fillText(ig.game.money, this.coinCountPos.x + 2, this.coinCountPos.y + 2);
				ig.system.context.fillStyle = '#ffffff';
				ig.system.context.fillText(ig.game.money, this.coinCountPos.x, this.coinCountPos.y);
				this.cookieImage.draw(this.cookieRect.x, this.cookieRect.y);
				ig.system.context.textAlign = 'left';
				ig.system.context.font = '20px mainfont, Helvetica, Verdana';
				ig.system.context.fillStyle = '#000000';
				ig.system.context.fillText(
					ig.game.cookies,
					this.cookieCountPos.x + 2,
					this.cookieCountPos.y + 2
				);
				ig.system.context.fillStyle = '#ffffff';
				ig.system.context.fillText(ig.game.cookies, this.cookieCountPos.x, this.cookieCountPos.y);
				var b = ig.system.context;
				b.save();
				var c = this.powerLevelRect.w,
					d = this.powerLevelRect.h,
					e = this.control.powerLevel;
				b.translate(this.powerLevelRect.x, this.powerLevelRect.y);
				b.fillStyle = '#000000';
				b.strokeStyle = '#000000';
				b.lineWidth = 0;
				b.fillRect(2, 2, c, d);
				b.fillStyle = this.powerLevelGrad;
				b.fillRect(0, (1 - e) * d, c, e * d);
				b.strokeStyle = '#ffffff';
				b.lineWidth = 3;
				b.strokeRect(0, 0, c, d);
				b.restore();
			},
			drawGameOver: function () {
				if (this.control.gameOver) {
					var b = ig.system.clock.delta() - this.control.gameOverTime;
					0.5 < b && (b = 0.5);
					ig.system.context.globalAlpha = (0.75 * b) / 0.5;
					ig.system.context.fillStyle = '#000000';
					ig.system.context.fillRect(0, 0, ig.system.width, ig.system.height);
					ig.system.context.globalAlpha = 1;
					this.gameOverTitleImage.draw(
						this.gameOverTitleRect.x + this.gameOverTitleOffset.x,
						this.gameOverTitleRect.y + this.gameOverTitleOffset.y
					);
					this.gameOverPanelImage.draw(
						this.gameOverPanelRect.x + this.gameOverPanelOffset.x,
						this.gameOverPanelRect.y + this.gameOverPanelOffset.y
					);
					this.panelIconsImage.draw(
						this.panelIconsRect.x + this.panelIconsOffset.x,
						this.panelIconsRect.y + this.panelIconsOffset.y
					);
					ig.system.context.textAlign = 'center';
					ig.system.context.font = '24px mainfont, Helvetica, Verdana';
					ig.system.context.fillStyle = '#000000';
					ig.system.context.fillText(
						this.control.coinsCollected,
						this.coinEndCountPos.x + 2,
						this.coinEndCountPos.y + 2
					);
					ig.system.context.fillStyle = '#ffffff';
					ig.system.context.fillText(
						this.control.coinsCollected,
						this.coinEndCountPos.x,
						this.coinEndCountPos.y
					);
					ig.system.context.textAlign = 'center';
					ig.system.context.font = '24px mainfont, Helvetica, Verdana';
					ig.system.context.fillStyle = '#000000';
					ig.system.context.fillText(
						ig.game.cookies,
						this.cookieEndCountPos.x + 2,
						this.cookieEndCountPos.y + 2
					);
					ig.system.context.fillStyle = '#ffffff';
					ig.system.context.fillText(
						ig.game.cookies,
						this.cookieEndCountPos.x,
						this.cookieEndCountPos.y
					);
					this.gameOverBgImage.draw(
						this.gameOverBgRect.x + this.gameOverBgOffset.x,
						this.gameOverBgRect.y + this.gameOverBgOffset.y
					);
					this.gameOverAnim.draw(
						this.gameOverBgRect.x + this.gameOverBgOffset.x,
						this.gameOverBgRect.y + this.gameOverBgOffset.y
					);
					this.homeAnim.draw(
						this.homeEndRect.x + this.homeEndOffset.x,
						this.homeEndRect.y + this.homeEndOffset.y
					);
					this.restartAnim.draw(
						this.restartEndRect.x + this.restartEndOffset.x,
						this.restartEndRect.y + this.restartEndOffset.y
					);
				}
			},
			drawFPS: function () {
				ig.system.context.fillStyle = '#ffffff';
				ig.system.context.font = '20px mainfont, Helvetica, Verdana';
				ig.system.context.textAlign = 'center';
				ig.system.context.fillText(ig.game.fps, ig.system.width / 2, 40);
			},
			aabbCheck: function (b, c) {
				return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1;
			},
			checkMainClicks: function () {
				var b = !1;
				this.pointer.refreshPos();
				var c = {};
				c.x = this.pointer.pos.x;
				c.y = this.pointer.pos.y;
				c.w = this.pointer.size.x;
				c.h = this.pointer.size.y;
				if (this.control.gameOver)
					!b && this.aabbCheck(c, this.restartEndRect)
						? (ig.input.state('click') && (this.restartAnim = this.restartAnimDown),
						  ig.input.released('click') &&
								((this.restartAnim = this.restartAnimUp),
								(b = function () {
									this.control.restartGame();
								}.bind(this)),
								(d = function () {
									this.control.restartGame();
								}.bind(this)),
								vigoo && ig.vigoo.hasLoggedIn
									? ig.vigoo.showScreenVideo('\u91cd\u65b0\u5f00\u59cb', b, d)
									: this.control.restartGame(),
								ig.soundHandler.sfxPlayer.play(this.buttonSound)),
						  (b = !0))
						: (this.restartAnim = this.restartAnimUp),
						!b && this.aabbCheck(c, this.homeEndRect)
							? (ig.input.state('click') && (this.homeAnim = this.homeAnimDown),
							  ig.input.released('click') &&
									((this.homeAnim = this.homeAnimUp),
									(b = function () {
										this.control.quitGame();
									}.bind(this)),
									(d = function () {
										this.control.quitGame();
									}.bind(this)),
									vigoo && ig.vigoo.hasLoggedIn
										? ig.vigoo.showScreenVideo('\u8fd4\u56de\u9996\u9875', b, d)
										: this.control.quitGame(),
									ig.soundHandler.sfxPlayer.play(this.buttonSound)),
							  (b = !0))
							: (this.homeAnim = this.homeAnimUp);
				else if (
					(!b && this.aabbCheck(c, this.pauseRect)
						? (ig.input.state('click') && (this.pauseAnim = this.pauseAnimDown),
						  ig.input.released('click') &&
								((this.pauseAnim = this.pauseAnimOver),
								this.control.togglePauseGame(),
								ig.soundHandler.sfxPlayer.play(this.buttonSound)),
						  (b = !0))
						: ((this.pauseAnim = this.pauseAnimUp),
						  this.control.gamePaused && (this.pauseAnim = this.pauseAnimDown)),
					this.control.gamePaused)
				)
					if (!b && this.aabbCheck(c, this.homeRect)) {
						ig.input.state('click') && (this.homeAnim = this.homeAnimDown);
						if (ig.input.released('click')) {
							this.homeAnim = this.homeAnimUp;
							var b = function () {
									this.control.quitGame();
								}.bind(this),
								d = function () {
									this.control.quitGame();
								}.bind(this);
							vigoo && ig.vigoo.hasLoggedIn
								? ig.vigoo.showScreenVideo('\u8fd4\u56de\u9996\u9875', b, d)
								: this.control.quitGame();
							ig.soundHandler.sfxPlayer.play(this.buttonSound);
						}
						b = !0;
					} else this.homeAnim = this.homeAnimUp;
			},
			update: function () {
				this.checkMainClicks();
				this.control.gameOver && this.gameOverAnim.update();
				if (this.control.gameStarting) {
					var b = ig.system.clock.delta() - this.control.gameStartTime,
						b = b / 0.25;
					1 < b && (b = 1);
					this.overlayAlpha = 1 - b;
				} else
					this.control.gameEnding &&
						((b = ig.system.clock.delta() - this.control.gameEndTime),
						(b /= 0.25),
						1 < b && (b = 1),
						(this.overlayAlpha = b));
				this.control.tutorialMode &&
					!this.control.gamePaused &&
					(this.tutorialTime += ig.system.tick);
				this.updateTutorialUI();
			},
			drawTime: function (b, c, d, e) {
				if (!isNaN(this.control.gameTime)) {
					b = Math.floor(this.control.gameTime / 60);
					c = Math.floor(this.control.gameTime % 60);
					10 > c && (c = '0' + c);
					var f = _STRINGS.UI.TIME + ': ' + b + ':' + c;
					d = ig.system.context.measureText(f).width;
					e = ig.system.context.measureText('m').width;
					b = ig.system.width / 2 - d / 2;
					c = ig.system.height / 2 + e / 3 + 30;
					ig.system.context.fillText(f, b, c);
				}
			},
			drawArrow: function (b, c, d, e) {
				var f, l;
				f = d - b;
				l = e - c;
				var n = Math.sqrt(f * f + l * l);
				if (0 != n) {
					var q;
					f /= n;
					q = l / n;
					l = d - 10 * f;
					var n = e - 10 * q,
						j;
					j = -q;
					var p;
					q = l + 10 * j;
					p = n + 10 * f;
					j = l - 10 * j;
					f = n - 10 * f;
					var m = ig.system.context;
					m.fillStyle = '#000000';
					m.beginPath();
					m.moveTo(d, e);
					m.lineTo(q, p);
					m.lineTo(j, f);
					m.closePath();
					m.fill();
					m.strokeStyle = '#000000';
					m.lineWidth = 10;
					m.beginPath();
					m.moveTo(l, n);
					m.lineTo(b, c);
					m.stroke();
				}
			},
			roundRect: function (b, c, d, e, f, l, n, q) {
				'undefined' == typeof q && (q = !0);
				'undefined' === typeof l && (l = 5);
				b.beginPath();
				b.moveTo(c + l, d);
				b.lineTo(c + e - l, d);
				b.quadraticCurveTo(c + e, d, c + e, d + l);
				b.lineTo(c + e, d + f - l);
				b.quadraticCurveTo(c + e, d + f, c + e - l, d + f);
				b.lineTo(c + l, d + f);
				b.quadraticCurveTo(c, d + f, c, d + f - l);
				b.lineTo(c, d + l);
				b.quadraticCurveTo(c, d, c + l, d);
				b.closePath();
				q && b.stroke();
				n && b.fill();
			},
			checkTutorialClicks: function () {
				if (
					this.control.tutorialMode &&
					!this.tutorialUIHidingFlag &&
					!this.tutorialUIShowingFlag &&
					!this.tutorialUITickFlag &&
					(0 == this.control.tutorialStage ||
						1 == this.control.tutorialStage ||
						2 == this.control.tutorialStage ||
						13 == this.control.tutorialStage)
				) {
					this.pointer.refreshPos();
					var b = {};
					b.x = this.pointer.pos.x;
					b.y = this.pointer.pos.y;
					b.w = this.pointer.size.x;
					b.h = this.pointer.size.y;
					this.aabbCheck(b, this.tutorialTextRect) &&
						ig.input.released('click') &&
						(this.control.doNextTutorialStage(), ig.soundHandler.sfxPlayer.play(this.buttonSound));
					ig.input.released('enter') &&
						(this.control.doNextTutorialStage(), ig.soundHandler.sfxPlayer.play(this.buttonSound));
				}
			},
			updateTutorialUI: function () {
				if (this.tutorialUIDrawFlag) {
					if (this.tutorialUIShowingFlag) {
						var b = 1 - this.tutorialUIOffset.x / ig.system.width;
						0 > b && (b = 0);
						1 < b && (b = 1);
						this.tutorialUIAlpha = 0.25 + 0.75 * b;
						0 < this.tutorialUIOffset.x
							? (this.tutorialUIOffset.x -= 2e3 * ig.system.tick)
							: 0 > this.tutorialUIOffset.x &&
							  ((this.tutorialUIOffset.x += 2e3 * ig.system.tick),
							  0 <= this.tutorialUIOffset.x &&
									((this.tutorialUIOffset.x = 0),
									(this.tutorialUIShowingFlag = !1),
									this.happyAnim.rewind(),
									(this.tutorialUITickStartTime = ig.system.clock.delta()),
									(this.tutorialUITickFlag = !0),
									(this.tutorialUIAlpha = 1)));
					} else
						this.tutorialUIHidingFlag &&
							((b = this.tutorialUIOffset.x / -ig.system.width),
							0 > b && (b = 0),
							1 < b && (b = 1),
							(this.tutorialUIAlpha = 0.25 + 0.75 * (1 - b)),
							(this.tutorialUIOffset.x -= 2e3 * ig.system.tick),
							this.tutorialUIOffset.x <= -ig.system.width &&
								((this.tutorialUITickFlag =
									this.tutorialUIFadeFlag =
									this.tutorialUIShowingFlag =
									this.tutorialUIDrawFlag =
									this.tutorialUIHidingFlag =
										!1),
								(this.tutorialUIAlpha = this.tutorialTextAlpha = 0)));
					if (this.tutorialUITickFlag) {
						var b = (_STRINGS.Tutorial[this.tutorialID][0] + _STRINGS.Tutorial[this.tutorialID][1])
								.length,
							c = (ig.system.clock.delta() - this.tutorialUITickStartTime) / (0.02 * b);
						1 < c && (c = 1);
						this.tutorialTextOrder = Math.floor(c * b);
						1 <= c && ((this.tutorialUITickFlag = !1), (this.tutorialTextOrder = b));
						this.tutorialTextAlpha = 1;
					} else
						this.tutorialUIFadeFlag &&
							((c = (ig.system.clock.delta() - this.tutorialUIFadeTime) / 0.25),
							1 <= c
								? ((this.tutorialID = this.nextTutorialID),
								  (this.tutorialUIFadeFlag = !1),
								  this.happyAnim.rewind(),
								  (this.tutorialUITickStartTime = ig.system.clock.delta()),
								  (this.tutorialUITickFlag = !0),
								  (this.tutorialTextOrder = this.tutorialTextAlpha = 0))
								: (this.tutorialTextAlpha = 1 - c));
					!this.tutorialUIShowingFlag &&
						!this.tutorialUIHidingFlag &&
						(this.happyAnim.update(), this.tutorialUITickFlag || this.checkTutorialClicks());
				}
			},
			showTutorialUI: function (b) {
				this.tutorialUIDrawFlag
					? this.tutorialUIHidingFlag
						? ((this.tutorialUIHidingFlag = !1),
						  (this.tutorialUIShowingFlag = !0),
						  (this.tutorialUIShowTime = ig.system.clock.delta()),
						  (this.tutorialUIOffset.x = ig.system.width),
						  this.happyAnim.rewind(),
						  (this.tutorialID = b),
						  (this.tutorialTextAlpha = this.tutorialTextOrder = 0))
						: ((this.tutorialUIFadeFlag = !0),
						  (this.tutorialUIFadeTime = ig.system.clock.delta()),
						  (this.nextTutorialID = b))
					: ((this.tutorialUIShowingFlag = this.tutorialUIDrawFlag = !0),
					  (this.tutorialUIShowTime = ig.system.clock.delta()),
					  (this.tutorialUIOffset.x = ig.system.width),
					  this.happyAnim.rewind(),
					  (this.tutorialID = b),
					  (this.tutorialTextAlpha = this.tutorialTextOrder = 0));
			},
			hideTutorialUI: function () {
				this.tutorialUIHidingFlag = !0;
				this.tutorialUIHideTime = ig.system.clock.delta();
			},
			drawTutorialUI: function () {
				if (this.tutorialUIDrawFlag) {
					var b = ig.system.context;
					b.globalAlpha = this.tutorialUIAlpha;
					b.save();
					b.fillStyle = 'rgba(0,0,0,0.75)';
					b.strokeStyle = 'rgba(0,0,0,0.75)';
					var c = this.tutorialTextRect.x + this.tutorialUIOffset.x,
						d = this.tutorialTextRect.y + this.tutorialUIOffset.y,
						e = this.tutorialTextRect.w,
						f = this.tutorialTextRect.h;
					this.roundRect(b, c, d, e, f, 20, !0, !1);
					b.restore();
					b.globalAlpha = 1;
					this.tutorialUIShowingFlag || this.drawText();
					if (
						!this.tutorialUIShowingFlag &&
						!this.tutorialUIHidingFlag &&
						!this.tutorialUITickFlag &&
						!this.tutorialUIFadeFlag &&
						(0 == this.control.tutorialStage ||
							1 == this.control.tutorialStage ||
							2 == this.control.tutorialStage ||
							13 == this.control.tutorialStage) &&
						0.5 < ig.system.clock.delta() - this.control.tutorialPausedTime
					)
						(c = c + e - 20),
							(d = d + f - 10),
							(e = this.tutorialTime % 2),
							1 < e && (e = 2 - e),
							(e = 0.25 + 0.75 * e),
							b.save(),
							(b.font = '12px mainfont, Helvetica, Verdana'),
							b.translate(c, d),
							(b.textAlign = 'right'),
							(b.fillStyle = 'rgba(255,255,255,' + e + ')'),
							b.fillText(_STRINGS.UI['continue'], 0, 0),
							b.restore();
					!this.tutorialUIShowingFlag &&
						!this.tutorialUIHidingFlag &&
						!this.tutorialUIFadeFlag &&
						(3 == this.control.tutorialStage
							? this.drawJumpInstructions()
							: 5 == this.control.tutorialStage
							? this.drawRightInstructions()
							: 7 == this.control.tutorialStage || 9 == this.control.tutorialStage
							? this.drawLeftInstructions()
							: 11 == this.control.tutorialStage && this.drawSlideInstructions());
					b.globalAlpha = this.tutorialUIAlpha;
					this.happyBgImage.draw(
						this.happyBgRect.x + this.happyBgOffset.x + this.tutorialUIOffset.x,
						this.happyBgRect.y + this.happyBgOffset.y + this.tutorialUIOffset.y
					);
					this.happyAnim.draw(
						this.happyBgRect.x + this.happyBgOffset.x + this.tutorialUIOffset.x,
						this.happyBgRect.y + this.happyBgOffset.y + this.tutorialUIOffset.y
					);
					b.globalAlpha = 1;
				}
			},
			drawText: function () {
				if (0 != this.tutorialTextOrder) {
					var b, c, d;
					c = this.tutorialTextRect.x + this.tutorialUIOffset.x;
					d = this.tutorialTextRect.y + this.tutorialUIOffset.y;
					c += 80;
					d += 28;
					var e = ig.system.context;
					b = this.tutorialTextOrder;
					var f = _STRINGS.Tutorial[this.tutorialID][0],
						l = _STRINGS.Tutorial[this.tutorialID][1];
					b < f.length
						? ((f = f.substr(0, b)), (l = ''))
						: b < f.length + l.length && (l = l.substr(0, b - f.length));
					e.save();
					e.font = '16px mainfont, Helvetica, Verdana';
					b = (2 * e.measureText('m').width) / 3;
					e.translate(c, d + b);
					e.textAlign = 'left';
					e.fillStyle = 'rgba(255,255,255,' + this.tutorialTextAlpha + ')';
					e.fillText(f, 0, 0);
					e.translate(0, (4 * b) / 2);
					e.fillText(l, 0, 0);
					e.restore();
				}
			},
			drawJumpInstructions: function () {
				var b = ig.system.context;
				if (ig.ua.mobile) {
					var c = ig.system.width / 2 + 200,
						d = this.tutorialTextRect.y - 50,
						e = 0;
					b.fillStyle = 'rgba(0,0,0,0.75)';
					b.strokeStyle = 'rgba(0,0,0,0.75)';
					this.roundRect(b, c - 40, d - 140, 80, 180, 10, !0, !1);
					e = this.tutorialTime % 1.5;
					if (0 <= e && 0.5 > e) {
						var f = e / 0.25;
						1 < f && (f = 1);
						e = -Math.PI / 8 + ((1 - f) * Math.PI) / 4;
						0 > e && (e = 2 * Math.PI + e);
					} else
						0.5 <= e && 0.75 > e
							? ((f = (e - 0.5) / 0.25),
							  1 < f && (f = 1),
							  (e = -Math.PI / 8),
							  0 > e && (e = 2 * Math.PI + e),
							  (d -= 100 * f))
							: ((f = (e - 0.75) / 0.25),
							  1 < f && (f = 1),
							  (e = -Math.PI / 8 + (f * Math.PI) / 4),
							  0 > e && (e = 2 * Math.PI + e),
							  (d -= 100));
					b.save();
					b.translate(c, d);
					b.rotate(e);
					this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
					b.restore();
				} else
					(c = ig.system.width / 2 + 150),
						(d = this.tutorialTextRect.y - 100),
						(b.fillStyle = 'rgba(0,0,0,0.75)'),
						(b.strokeStyle = 'rgba(0,0,0,0.75)'),
						this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1),
						(e = this.tutorialTime % 2),
						1 < e && (e = 2 - e),
						(b.globalAlpha = 0.25 + 0.75 * e),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c, d + 10, c, d - 10),
						(b.globalAlpha = 1),
						(d += 45),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c, d - 10, c, d + 10),
						(c -= 45),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c + 10, d, c - 10, d),
						(c += 90),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c - 10, d, c + 10, d);
			},
			drawSlideInstructions: function () {
				var b = ig.system.context;
				if (ig.ua.mobile) {
					var c = ig.system.width / 2 + 200,
						d = this.tutorialTextRect.y - 50 - 100,
						e = 0;
					b.fillStyle = 'rgba(0,0,0,0.75)';
					b.strokeStyle = 'rgba(0,0,0,0.75)';
					this.roundRect(b, c - 40, d - 40, 80, 180, 10, !0, !1);
					e = this.tutorialTime % 1.5;
					if (0 <= e && 0.5 > e) {
						var f = e / 0.25;
						1 < f && (f = 1);
						e = -Math.PI / 8 + ((1 - f) * Math.PI) / 4;
						0 > e && (e = 2 * Math.PI + e);
					} else
						0.5 <= e && 0.75 > e
							? ((f = (e - 0.5) / 0.25),
							  1 < f && (f = 1),
							  (e = -Math.PI / 8),
							  0 > e && (e = 2 * Math.PI + e),
							  (d += 100 * f))
							: ((f = (e - 0.75) / 0.25),
							  1 < f && (f = 1),
							  (e = -Math.PI / 8 + (f * Math.PI) / 4),
							  0 > e && (e = 2 * Math.PI + e),
							  (d += 100));
					b.save();
					b.translate(c, d);
					b.rotate(e);
					this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
					b.restore();
				} else
					(c = ig.system.width / 2 + 150),
						(d = this.tutorialTextRect.y - 100),
						(b.fillStyle = 'rgba(0,0,0,0.75)'),
						(b.strokeStyle = 'rgba(0,0,0,0.75)'),
						this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c, d + 10, c, d - 10),
						(e = this.tutorialTime % 2),
						1 < e && (e = 2 - e),
						(b.globalAlpha = 0.25 + 0.75 * e),
						(d += 45),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c, d - 10, c, d + 10),
						(b.globalAlpha = 1),
						(c -= 45),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c + 10, d, c - 10, d),
						(c += 90),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c - 10, d, c + 10, d);
			},
			drawLeftInstructions: function () {
				var b = ig.system.context;
				if (ig.ua.mobile) {
					var c = ig.system.width / 2 + 200,
						d = this.tutorialTextRect.y - 50,
						e = 0;
					b.fillStyle = 'rgba(0,0,0,0.75)';
					b.strokeStyle = 'rgba(0,0,0,0.75)';
					this.roundRect(b, c - 140, d - 40, 180, 80, 10, !0, !1);
					e = this.tutorialTime % 1.5;
					if (0 <= e && 0.5 > e) {
						var f = e / 0.25;
						1 < f && (f = 1);
						e = -Math.PI / 8 + ((1 - f) * Math.PI) / 4;
						0 > e && (e = 2 * Math.PI + e);
					} else
						0.5 <= e && 0.75 > e
							? ((f = (e - 0.5) / 0.25),
							  1 < f && (f = 1),
							  (e = -Math.PI / 8),
							  0 > e && (e = 2 * Math.PI + e),
							  (c -= 100 * f))
							: ((f = (e - 0.75) / 0.25),
							  1 < f && (f = 1),
							  (e = -Math.PI / 8 + (f * Math.PI) / 4),
							  0 > e && (e = 2 * Math.PI + e),
							  (c -= 100));
					b.save();
					b.translate(c, d);
					b.rotate(e);
					this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
					b.restore();
				} else
					(c = ig.system.width / 2 + 150),
						(d = this.tutorialTextRect.y - 100),
						(b.fillStyle = 'rgba(0,0,0,0.75)'),
						(b.strokeStyle = 'rgba(0,0,0,0.75)'),
						this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c, d + 10, c, d - 10),
						(d += 45),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c, d - 10, c, d + 10),
						(e = this.tutorialTime % 2),
						1 < e && (e = 2 - e),
						(b.globalAlpha = 0.25 + 0.75 * e),
						(c -= 45),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c + 10, d, c - 10, d),
						(b.globalAlpha = 1),
						(c += 90),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c - 10, d, c + 10, d);
			},
			drawRightInstructions: function () {
				var b = ig.system.context;
				if (ig.ua.mobile) {
					var c = ig.system.width / 2 + 100,
						d = this.tutorialTextRect.y - 50,
						e = 0;
					b.fillStyle = 'rgba(0,0,0,0.75)';
					b.strokeStyle = 'rgba(0,0,0,0.75)';
					this.roundRect(b, c - 40, d - 40, 180, 80, 10, !0, !1);
					e = this.tutorialTime % 1.5;
					if (0 <= e && 0.5 > e) {
						var f = e / 0.25;
						1 < f && (f = 1);
						e = -Math.PI / 8 + ((1 - f) * Math.PI) / 4;
						0 > e && (e = 2 * Math.PI + e);
					} else
						0.5 <= e && 0.75 > e
							? ((f = (e - 0.5) / 0.25),
							  1 < f && (f = 1),
							  (e = -Math.PI / 8),
							  0 > e && (e = 2 * Math.PI + e),
							  (c += 100 * f))
							: ((f = (e - 0.75) / 0.25),
							  1 < f && (f = 1),
							  (e = -Math.PI / 8 + (f * Math.PI) / 4),
							  0 > e && (e = 2 * Math.PI + e),
							  (c += 100));
					b.save();
					b.translate(c, d);
					b.rotate(e);
					this.fingerImage.draw(-this.fingerImage.width / 2, -this.fingerImage.height / 2);
					b.restore();
				} else
					(c = ig.system.width / 2 + 150),
						(d = this.tutorialTextRect.y - 100),
						(b.fillStyle = 'rgba(0,0,0,0.75)'),
						(b.strokeStyle = 'rgba(0,0,0,0.75)'),
						this.roundRect(b, c - 75, d - 30, 150, 105, 10, !0, !1),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c, d + 10, c, d - 10),
						(d += 45),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c, d - 10, c, d + 10),
						(c -= 45),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c + 10, d, c - 10, d),
						(e = this.tutorialTime % 2),
						1 < e && (e = 2 - e),
						(b.globalAlpha = 0.25 + 0.75 * e),
						(c += 90),
						(b.fillStyle = 'rgba(255,255,255,1)'),
						(b.strokeStyle = 'rgba(255,255,255,1)'),
						this.roundRect(b, c - 20, d - 20, 40, 40, 5, !0, !1),
						this.drawArrow(c - 10, d, c + 10, d),
						(b.globalAlpha = 1);
			}
		});
	});
ig.baked = !0;
ig.module('game.entities.game-character')
	.requires('impact.entity')
	.defines(function () {
		EntityGameCharacter = ig.Entity.extend({
			offset: { x: 75, y: 240 },
			size: { x: 1, y: 1 },
			charWidth: 50,
			charHeight: 50,
			runContactRect: { x: -25, y: -50, w: 50, h: 50 },
			jumpContactRect: { x: -25, y: -100, w: 50, h: 50 },
			jumpOffset: 0,
			jumpTime: 0,
			alpha: 1,
			zIndex: 1200,
			runAnim: null,
			slideAnim: null,
			jumpAnim: null,
			anim: null,
			growTime: 0,
			growFPS: 0.03,
			growFrame: 0,
			STATES: { RUN: 0, SLIDE: 1, JUMP: 2, POWERED: 3, INTRO: 4 },
			state: 0,
			worldPos: { x: 0, y: 0, z: 0 },
			zValue: 13,
			scale: 1,
			scaleModifier: 1,
			zWidth: 1,
			invulnerableDuration: 2,
			invulnerableStartTime: 0,
			isInvulnerable: !1,
			isShaking: !1,
			shakeDuration: 0.25,
			shakeStartTime: 0,
			shakeOffset: { x: 0, y: 0 },
			shakeAmount: 3,
			queuedPowerUp: !1,
			stepSoundPlayed: 0,
			stepSoundPlayedTime: 0,
			control: null,
			skateSound: 'skate',
			stepSound: 'step',
			slideSound: 'slide',
			jumpSound: 'jump',
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.ballAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/character/ball_11x2.png',
					150,
					300
				);
				this.runAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/character/run_7x2.png',
					150,
					300
				);
				this.slideAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/character/slide_5x4.png',
					150,
					300
				);
				this.jumpAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/character/jump_9x2.png',
					150,
					300
				);
				this.skateboardRunAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/character/skaterun_8x2.png',
					150,
					300
				);
				this.skateboardJumpAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/character/skatejump_9x2.png',
					150,
					300
				);
				this.rollerskateRunAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/character/rollerrun_5x1.png',
					150,
					300
				);
				this.rollerskateSlideAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/character/rollerslide_9x2.png',
					150,
					300
				);
				this.rollerskateJumpAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/character/rollerjump_8x2.png',
					150,
					300
				);
				this.rocketRunAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/character/rocketrun_7x2.png',
					150,
					300
				);
				this.rocketJumpAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/character/rocketjump_7x3.png',
					150,
					300
				);
				this.carpetAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/character/carpet_5x2.png',
					150,
					300
				);
				this.hoverboardAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/character/hoverboard_4x2.png',
					150,
					300
				);
				this.growImage = [
					new ig.Image('media/graphics/game/character/grow-anim/frame_0000.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0001.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0002.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0003.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0004.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0005.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0006.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0007.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0008.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0009.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0010.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0011.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0012.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0013.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0014.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0015.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0016.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0017.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0018.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0019.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0020.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0021.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0022.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0023.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0024.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0025.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0026.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0027.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0028.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0029.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0030.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0031.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0032.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0033.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0034.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0035.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0036.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0037.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0038.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0039.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0040.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0041.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0042.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0043.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0044.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0045.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0046.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0047.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0048.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0049.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0050.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0051.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0052.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0053.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0054.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0055.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0056.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0057.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0058.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0059.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0060.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0061.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0062.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0063.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0064.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0065.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0066.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0067.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0068.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0069.png'),
					new ig.Image('media/graphics/game/character/grow-anim/frame_0070.png')
				];
				this.ballAnim = new ig.Animation(
					this.ballAnimSheet,
					0.03,
					[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21],
					!1
				);
				ig.game.getItemUpgradeEquipped(0)
					? ((this.runAnim = new ig.Animation(
							this.skateboardRunAnimSheet,
							0.03,
							[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
							!1
					  )),
					  (this.jumpAnim = new ig.Animation(
							this.skateboardJumpAnimSheet,
							0.03,
							[0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12, 13, 13, 14, 15, 16],
							!0
					  )),
					  (this.slideAnim = new ig.Animation(
							this.slideAnimSheet,
							0.03,
							[
								0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12,
								12, 12, 13, 14, 15, 16, 17, 18
							],
							!0
					  )))
					: ig.game.getItemUpgradeEquipped(1)
					? ((this.runAnim = new ig.Animation(
							this.rollerskateRunAnimSheet,
							0.03,
							[0, 1, 2, 3, 4],
							!1
					  )),
					  (this.jumpAnim = new ig.Animation(
							this.rollerskateJumpAnimSheet,
							0.03,
							[0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 12, 12, 12, 13, 13, 14, 15],
							!0
					  )),
					  (this.slideAnim = new ig.Animation(
							this.rollerskateSlideAnimSheet,
							0.03,
							[
								0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12,
								12, 12, 13, 14, 15, 16, 17
							],
							!0
					  )))
					: (ig.game.getItemUpgradeEquipped(2)
							? ((this.runAnim = new ig.Animation(
									this.rocketRunAnimSheet,
									0.03,
									[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
									!1
							  )),
							  (this.jumpAnim = new ig.Animation(
									this.rocketJumpAnimSheet,
									0.03,
									[0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
									!0
							  )))
							: ig.game.getItemUpgradeEquipped(3)
							? (this.jumpAnim = this.runAnim =
									new ig.Animation(this.carpetAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], !1))
							: ig.game.getItemUpgradeEquipped(4)
							? (this.jumpAnim = this.runAnim =
									new ig.Animation(this.hoverboardAnimSheet, 0.03, [0, 1, 2, 3, 4, 5, 6, 7], !1))
							: ((this.runAnim = new ig.Animation(
									this.runAnimSheet,
									0.03,
									[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
									!1
							  )),
							  (this.jumpAnim = new ig.Animation(
									this.jumpAnimSheet,
									0.03,
									[0, 1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10, 11, 11, 12, 12, 12, 13, 13, 14, 15, 16],
									!0
							  ))),
					  (this.slideAnim = new ig.Animation(
							this.slideAnimSheet,
							0.03,
							[
								0, 1, 2, 3, 4, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 11, 11, 11, 12,
								12, 12, 13, 14, 15, 16, 17, 18
							],
							!0
					  )));
				this.anim = this.runAnim;
				this.charWidth *= this.scaleModifier;
				this.charHeight *= this.scaleModifier;
				this.state = this.STATES.INTRO;
			},
			ready: function () {
				this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
				this.zIndex = 1200 - this.zValue;
				ig.game.sortEntitiesDeferred();
				this.growTime = this.control.gameTime;
			},
			draw: function () {
				if (this.state == this.STATES.INTRO) {
					var b = this.pos.x,
						c = this.pos.y;
					ig.system.context.save();
					ig.system.context.translate(this.bitwiseRound(b), this.bitwiseRound(c));
					ig.system.context.scale(0.5, 0.5);
					this.growImage[this.growFrame].draw(-126, -280);
					ig.system.context.restore();
				} else {
					b = this.bitwiseRound(this.pos.x);
					c = this.bitwiseRound(this.pos.y);
					0 > c && (c = 0);
					if (0 < c) {
						var d = 1 - -this.jumpOffset / 500;
						0 > d && (d = 0);
						var e = 30 * d,
							f = ig.system.context;
						f.save();
						f.translate(b, c);
						f.scale(1, 0.5);
						f.beginPath();
						f.arc(0, 0, e, 0, 2 * Math.PI, !1);
						f.fillStyle = 'rgba(0,0,0,' + 0.2 * d + ')';
						f.fill();
						f.restore();
					}
					b = this.pos.x - this.offset.x + this.shakeOffset.x;
					c = this.pos.y + this.jumpOffset - this.offset.y + this.shakeOffset.y;
					ig.system.context.globalAlpha = this.alpha;
					this.anim.draw(this.bitwiseRound(b), this.bitwiseRound(c));
					ig.system.context.globalAlpha = 1;
				}
			},
			update: function () {
				if (!this.control.gamePaused && !this.control.gameOver && !this.control.gameStarting) {
					this.parent();
					if (this.state == this.STATES.INTRO) {
						var b = this.control.gameTime - this.growTime;
						this.growFrame = Math.floor(b / this.growFPS);
						if (
							this.growFrame >= this.growImage.length &&
							((this.growFrame = this.growImage.length - 1), 2.5 < b)
						) {
							this.run();
							return;
						}
					}
					this.state == this.STATES.RUN &&
						(ig.game.getItemUpgradeEquipped(0) || ig.game.getItemUpgradeEquipped(1)
							? ((b = ig.system.clock.delta() - this.stepSoundPlayedTime),
							  2 < b &&
									((this.stepSoundPlayedTime = ig.system.clock.delta()),
									ig.soundHandler.sfxPlayer.play(this.skateSound)))
							: !ig.game.getItemUpgradeEquipped(3) &&
							  !ig.game.getItemUpgradeEquipped(4) &&
							  (4 == this.runAnim.frame &&
									4 != this.stepSoundPlayed &&
									((this.stepSoundPlayed = 4), ig.soundHandler.sfxPlayer.play(this.stepSound)),
							  11 == this.runAnim.frame &&
									11 != this.stepSoundPlayed &&
									((this.stepSoundPlayed = 11), ig.soundHandler.sfxPlayer.play(this.stepSound))));
					this.state == this.STATES.POWERED &&
						(3 == this.ballAnim.frame &&
							3 != this.stepSoundPlayed &&
							((this.stepSoundPlayed = 3), ig.soundHandler.sfxPlayer.play(this.stepSound)),
						8 == this.ballAnim.frame &&
							8 != this.stepSoundPlayed &&
							((this.stepSoundPlayed = 8), ig.soundHandler.sfxPlayer.play(this.stepSound)),
						14 == this.ballAnim.frame &&
							14 != this.stepSoundPlayed &&
							((this.stepSoundPlayed = 14), ig.soundHandler.sfxPlayer.play(this.stepSound)),
						19 == this.ballAnim.frame &&
							19 != this.stepSoundPlayed &&
							((this.stepSoundPlayed = 19), ig.soundHandler.sfxPlayer.play(this.stepSound)));
					this.control.tutorialPauseMode ||
						(this.anim.update(),
						this.isInvulnerable &&
							((b = this.control.gameTime - this.invulnerableStartTime),
							b >= this.invulnerableDuration
								? ((this.alpha = 1), (this.isInvulnerable = !1))
								: ((b %= 0.5),
								  0.25 < b && (b = 0.25 - (b - 0.25)),
								  (this.alpha = 0.25 + 0.75 * (b / 0.25)))),
						this.isShaking &&
							((b = this.control.gameTime - this.shakeStartTime),
							b >= this.shakeDuration &&
								((this.shakeOffset.x = 0), (this.shakeOffset.y = 0), (this.isShaking = !1))),
						this.queuedPowerUp &&
							(this.state == this.STATES.RUN || this.state == this.STATES.SLIDE) &&
							this.powerUp());
				}
			},
			run: function () {
				this.state != this.STATES.POWERED &&
					((this.state = this.STATES.RUN),
					(this.anim = this.runAnim),
					this.anim.rewind(),
					(this.zIndex = 1200 - this.zValue),
					ig.game.sortEntitiesDeferred());
			},
			slide: function () {
				this.state != this.STATES.POWERED &&
					((this.state = this.STATES.SLIDE),
					(this.anim = this.slideAnim),
					this.anim.rewind(),
					(this.zIndex = 1200 - this.zValue),
					(this.zIndex -= 1),
					ig.game.sortEntitiesDeferred(),
					ig.soundHandler.sfxPlayer.play(this.slideSound));
			},
			jump: function () {
				this.jumpTime = this.control.gameTime;
				this.zIndex = 1200 - this.zValue;
				this.zIndex += 10;
				ig.game.sortEntitiesDeferred();
				this.state != this.STATES.POWERED &&
					!ig.game.getItemUpgradeEquipped(3) &&
					!ig.game.getItemUpgradeEquipped(4) &&
					((this.state = this.STATES.JUMP),
					(this.anim = this.jumpAnim),
					this.anim.gotoFrame(0),
					this.anim.rewind());
				ig.soundHandler.sfxPlayer.play(this.jumpSound);
			},
			queuePowerUp: function () {
				this.queuedPowerUp = !0;
			},
			powerUp: function () {
				this.queuedPowerUp = !1;
				this.state != this.STATES.POWERED &&
					((this.state = this.STATES.POWERED),
					(this.anim = this.ballAnim),
					this.anim.rewind(),
					(this.zIndex = 1200 - this.zValue),
					ig.game.sortEntitiesDeferred());
			},
			powerDown: function () {
				if (0 > this.jumpOffset) {
					this.state = this.STATES.JUMP;
					this.anim = this.jumpAnim;
					var b = Math.floor((this.control.gameTime - this.jumpTime) / this.anim.frameTime);
					this.anim.rewind();
					this.anim.gotoFrame(b);
				} else (this.state = this.STATES.RUN), this.run();
				this.invulnerableStartTime = this.control.gameTime - 1;
				this.isInvulnerable = !0;
			},
			shake: function () {
				this.isShaking = !0;
				this.shakeStartTime = this.control.gameTime;
				this.shakeOffset.x = -this.shakeAmount + 2 * Math.random() * this.shakeAmount;
				this.shakeOffset.y = -this.shakeAmount;
			},
			bitwiseRound: function (b) {
				return (0.5 + b) << 0;
			}
		});
	});
ig.baked = !0;
ig.module('game.entities.game-bgObject')
	.requires('impact.entity')
	.defines(function () {
		EntityGameBgObject = ig.Entity.extend({
			offset: { x: 140, y: 362 },
			size: { x: 1, y: 1 },
			contactRect: { x: 0, y: 0 },
			zIndex: 1200,
			image: null,
			imageId: 0,
			worldPos: { x: 0, y: 0, z: 0 },
			zValue: 0,
			scale: 1,
			scaleModifier: 1,
			objType: 0,
			control: null,
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.images = [
					new ig.Image('media/graphics/game/objects/bg00.png'),
					new ig.Image('media/graphics/game/objects/bg01.png'),
					new ig.Image('media/graphics/game/objects/bg02.png'),
					new ig.Image('media/graphics/game/objects/bg03.png'),
					new ig.Image('media/graphics/game/objects/bg04.png'),
					new ig.Image('media/graphics/game/objects/bg05.png'),
					new ig.Image('media/graphics/game/objects/bg06.png'),
					new ig.Image('media/graphics/game/objects/bg07.png'),
					new ig.Image('media/graphics/game/objects/bg08.png'),
					new ig.Image('media/graphics/game/objects/bg09.png'),
					new ig.Image('media/graphics/game/objects/bg10.png'),
					new ig.Image('media/graphics/game/objects/bg11.png'),
					new ig.Image('media/graphics/game/objects/bg12.png'),
					new ig.Image('media/graphics/game/objects/bg13.png'),
					new ig.Image('media/graphics/game/objects/bg14.png'),
					new ig.Image('media/graphics/game/objects/bg15.png'),
					new ig.Image('media/graphics/game/objects/bg16.png'),
					new ig.Image('media/graphics/game/objects/bg17.png'),
					new ig.Image('media/graphics/game/objects/bg18.png'),
					new ig.Image('media/graphics/game/objects/bg19.png'),
					new ig.Image('media/graphics/game/objects/bg20.png'),
					new ig.Image('media/graphics/game/objects/bg21.png'),
					new ig.Image('media/graphics/game/objects/bg22.png'),
					new ig.Image('media/graphics/game/objects/bg23.png'),
					new ig.Image('media/graphics/game/objects/bg24.png'),
					new ig.Image('media/graphics/game/objects/bg25.png'),
					new ig.Image('media/graphics/game/objects/bg26.png'),
					new ig.Image('media/graphics/game/objects/bg27.png')
				];
			},
			ready: function () {
				this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
				this.setImageId(this.imageId);
				this.scale = this.control.cameraDistance / this.zValue;
				this.zIndex = 1200 - this.zValue;
				ig.game.sortEntitiesDeferred();
			},
			setImageId: function (b) {
				null != b &&
					((this.imageId = b),
					(this.image = this.images[b]),
					(this.offset.x = this.image.width / 2),
					(this.offset.y = this.image.height));
			},
			draw: function () {
				var b = this.worldPos.x,
					c = this.worldPos.y,
					d = this.zValue,
					e = this.control.cameraDistance;
				-10 > d
					? ((this.killed = !0), this.control.cleanObjects(), this.kill())
					: ((d = e / d),
					  (b = ig.system.width / 2 - this.control.cameraPos.x * d + b * d),
					  (c =
							this.control.cameraPos.y * d +
							ig.system.height -
							c * d -
							(1 - d) * (ig.system.height - this.control.vanishingPoint.y)),
					  (this.pos.x = b),
					  (this.pos.y = c),
					  (b = this.control.horizonLine.y),
					  (e = this.control.horizonLine.y + this.control.distanceFogHeight),
					  c < b ||
							(c < e && (ig.system.context.globalAlpha = (c - b) / (e - b)),
							(d *= this.scaleModifier),
							(c = this.pos.y - this.offset.y * d - ig.game._rscreen.y),
							ig.system.context.drawImage(
								this.image.data,
								this.bitwiseRound(this.pos.x - this.offset.x * d - ig.game._rscreen.x),
								this.bitwiseRound(c),
								this.image.width * d,
								this.image.height * d
							),
							(ig.system.context.globalAlpha = 1)));
			},
			update: function () {
				this.control.gamePaused ||
					this.control.gameOver ||
					this.control.gameStarting ||
					(this.control.character.state != this.control.character.STATES.INTRO &&
						(this.control.tutorialPauseMode ||
							this.moveForward(-this.control.runSpeed * ig.system.tick)));
			},
			moveForward: function (b) {
				this.zValue += b;
				this.zIndex = 1200 - this.zValue;
				ig.game.sortEntitiesDeferred();
			},
			bitwiseRound: function (b) {
				return (0.5 + b) << 0;
			}
		});
	});
ig.baked = !0;
ig.module('game.entities.game-obstacle')
	.requires('impact.entity')
	.defines(function () {
		EntityGameObstacle = ig.Entity.extend({
			offset: { x: 72, y: 100 },
			size: { x: 1, y: 1 },
			contactRect: { x: -58, y: -95, w: 119, h: 92 },
			zIndex: 1200,
			image: null,
			imageId: 0,
			worldPos: { x: 0, y: 0, z: 0 },
			zValue: 0,
			scale: 1,
			scaleModifier: 1,
			objType: 1,
			slidable: !1,
			zWidth: 0,
			knockedOut: !1,
			knockOutPos: { x: 0, y: 0 },
			knockOutOffset: { x: 0, y: 0 },
			knockOutGravity: 1200,
			knockOutVector: { x: 0, y: 0 },
			knockOutAlpha: 0,
			knockOutAngle: 0,
			knockOutDirection: 1,
			knockOutStopped: !1,
			control: null,
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.images = [
					new ig.Image('media/graphics/game/objects/obstacle00.png'),
					new ig.Image('media/graphics/game/objects/obstacle01.png'),
					new ig.Image('media/graphics/game/objects/obstacle02.png'),
					new ig.Image('media/graphics/game/objects/obstacle03.png'),
					new ig.Image('media/graphics/game/objects/obstacle04.png'),
					new ig.Image('media/graphics/game/objects/obstacle05.png'),
					new ig.Image('media/graphics/game/objects/obstacle06.png'),
					new ig.Image('media/graphics/game/objects/obstacle07.png'),
					new ig.Image('media/graphics/game/objects/obstacle08.png'),
					new ig.Image('media/graphics/game/objects/obstacle09.png'),
					new ig.Image('media/graphics/game/objects/obstacle10.png'),
					new ig.Image('media/graphics/game/objects/obstacle11.png')
				];
			},
			ready: function () {
				this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
				this.setImageId(this.imageId);
				this.scale = this.control.cameraDistance / this.zValue;
				this.zIndex = 1200 - this.zValue;
				ig.game.sortEntitiesDeferred();
			},
			setImageId: function (b) {
				if (null != b) {
					if (0 == b || 1 == b || 2 == b) b = 0 + Math.floor(3 * Math.random());
					if (8 == b || 9 == b) b = 8 + Math.floor(2 * Math.random());
					if (10 == b || 11 == b) b = 10 + Math.floor(2 * Math.random());
					this.imageId = b;
					this.image = this.images[b];
					this.offset.x = this.image.width / 2;
					this.offset.y = this.image.height;
					this.slidable = 3 == b ? !0 : !1;
					this.contactRect.w = this.image.width * this.scaleModifier;
					this.contactRect.h = (this.image.height / 2) * this.scaleModifier;
					this.contactRect.x = -this.contactRect.w / 2;
					this.contactRect.y = -this.contactRect.h;
					if (5 == b || 6 == b || 8 == b || 9 == b) this.zWidth = 3;
					if (10 == b || 11 == b) this.zWidth = 5;
				}
			},
			draw: function () {
				var b = this.worldPos.x,
					c = this.worldPos.y,
					d = this.zValue,
					e = this.control.cameraDistance;
				if (-10 > d) (this.killed = !0), this.control.cleanObjects(), this.kill();
				else {
					var f = 0;
					this.knockedOut &&
						((b += this.knockOutPos.x), (c -= this.knockOutPos.y), (f = this.knockOutAngle));
					d = e / d;
					b = ig.system.width / 2 - this.control.cameraPos.x * d + b * d;
					c =
						this.control.cameraPos.y * d +
						ig.system.height -
						c * d -
						(1 - d) * (ig.system.height - this.control.vanishingPoint.y);
					this.pos.x = b;
					this.pos.y = c;
					b = this.control.horizonLine.y;
					e = this.control.horizonLine.y + this.control.distanceFogHeight;
					if (!(c < b)) {
						c < e && (ig.system.context.globalAlpha = (c - b) / (e - b));
						this.knockedOut && (ig.system.context.globalAlpha *= this.knockOutAlpha);
						var l = d * this.scaleModifier,
							d = this.pos.x,
							c = this.pos.y,
							b = -this.offset.x * l,
							e = -this.offset.y * l,
							n = this.image.width * l,
							l = this.image.height * l;
						0 > n && (n = 0);
						0 > l && (l = 0);
						ig.system.context.save();
						ig.system.context.translate(d, c);
						0 < f && ig.system.context.rotate(f);
						ig.system.context.drawImage(this.image.data, b, e, n, l);
						ig.system.context.restore();
						ig.system.context.globalAlpha = 1;
					}
				}
			},
			update: function () {
				this.control.gamePaused ||
					this.control.gameOver ||
					this.control.gameStarting ||
					(this.control.character.state != this.control.character.STATES.INTRO &&
						(this.control.tutorialPauseMode ||
							this.moveForward(-this.control.runSpeed * ig.system.tick)));
			},
			moveForward: function (b) {
				this.zValue += b;
				this.zIndex = 1200 - this.zValue;
				ig.game.sortEntitiesDeferred();
				this.knockedOut &&
					((this.zIndex = 2e3),
					ig.game.sortEntitiesDeferred(),
					(this.knockOutPos.x += this.knockOutVector.x * ig.system.tick),
					(this.knockOutPos.y += this.knockOutVector.y * ig.system.tick),
					0 < this.knockOutPos.y &&
						((this.knockOutPos.y = 0),
						(this.knockOutVector.x = 0),
						(this.knockOutVector.y = 0),
						(this.knockOutStopped = !0)),
					this.knockOutStopped ||
						((this.knockOutVector.y += this.knockOutGravity * ig.system.tick),
						(this.knockOutAngle += 3 * (this.knockOutDirection * Math.PI) * ig.system.tick),
						0 > this.knockOutAngle && (this.knockOutAngle = 2 * Math.PI + this.knockOutAngle),
						(this.knockOutAlpha -= 2 * ig.system.tick),
						0 > this.knockOutAlpha && ((this.knockOutAlpha = 0), (this.knockOutStopped = !0))));
			},
			bitwiseRound: function (b) {
				return (0.5 + b) << 0;
			},
			knockOut: function () {
				if (!this.knockedOut) {
					this.knockedOut = !0;
					var b = 200 + 100 * Math.random(),
						c = 1;
					85 < this.worldPos.x
						? (c = 1)
						: -85 > this.worldPos.x
						? (c = -1)
						: 0.5 <= Math.random() && (c = -1);
					this.knockOutVector.x = (b * c) / 0.25;
					this.knockOutVector.y = -1200;
					this.knockOutPos.x = 0;
					this.knockOutPos.y = 0;
					this.knockOutAlpha = 1;
					this.knockOutAngle = 0;
					this.knockOutDirection = c;
				}
			}
		});
	});
ig.baked = !0;
ig.module('game.entities.game-pickup')
	.requires('impact.entity')
	.defines(function () {
		EntityGamePickup = ig.Entity.extend({
			offset: { x: 68, y: 126 },
			size: { x: 1, y: 1 },
			contactRect: { x: -57, y: -109, w: 114, h: 106 },
			zIndex: 1200,
			cookieImage: new ig.Image('media/graphics/game/pickups/cookie.png'),
			cookieOffset: { x: 0, y: 0 },
			cookieDown: !1,
			coinAnimSheet: new ig.AnimationSheet('media/graphics/game/pickups/coin_1x10.png', 70, 66),
			anim: null,
			worldPos: { x: 0, y: 0, z: 0 },
			zValue: 0,
			scale: 1,
			scaleModifier: 1,
			objType: 2,
			zWidth: 0,
			pickupId: 0,
			control: null,
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.cookieImage = new ig.Image('media/graphics/game/pickups/cookie.png');
				this.coinAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/pickups/coin_1x10.png',
					70,
					66
				);
				this.anim = new ig.Animation(this.coinAnimSheet, 0.08, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], !1);
				this.offset.x = 35;
				this.offset.y = 66;
				this.contactRect.w = 70;
				this.contactRect.h = 66;
				this.contactRect.x = -this.contactRect.w / 2;
				this.contactRect.y = -this.contactRect.h;
			},
			ready: function () {
				this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
				this.scale = this.control.cameraDistance / this.zValue;
				this.zIndex = 1200 - this.zValue;
				ig.game.sortEntitiesDeferred();
			},
			setPickupId: function (b) {
				null != b &&
					((this.pickupId = b),
					1 == b
						? ((this.offset.x = this.cookieImage.width / 2),
						  (this.offset.y = this.cookieImage.height),
						  (this.contactRect.w = this.cookieImage.width),
						  (this.contactRect.h = this.cookieImage.height))
						: ((this.offset.x = 35),
						  (this.offset.y = 66),
						  (this.contactRect.w = 70),
						  (this.contactRect.h = 66)),
					(this.contactRect.x = -this.contactRect.w / 2),
					(this.contactRect.y = -this.contactRect.h / 2));
			},
			draw: function () {
				var b = this.worldPos.x,
					c = this.worldPos.y,
					d = this.zValue,
					e = this.control.cameraDistance;
				if (-10 > d) (this.killed = !0), this.control.cleanObjects(), this.kill();
				else {
					var e = e / d,
						f,
						b = ig.system.width / 2 - this.control.cameraPos.x * e + b * e;
					f =
						this.control.cameraPos.y * e +
						ig.system.height -
						c * e -
						(1 - e) * (ig.system.height - this.control.vanishingPoint.y);
					this.pos.x = b;
					this.pos.y = f;
					if (!(65 < d)) {
						45 < d && (ig.system.context.globalAlpha = 1 - (d - 45) / 20);
						d = e * this.scaleModifier;
						e =
							this.control.cameraPos.y * e +
							ig.system.height -
							(1 - e) * (ig.system.height - this.control.vanishingPoint.y);
						0 > e && (e = 0);
						if (1 == this.pickupId) {
							if (0 < e) {
								b = 1 - (c - this.cookieOffset.y) / 500;
								0 > b && (b = 0);
								f = (this.cookieImage.width / 4) * d * b;
								var c = this.pos.x,
									l = ig.system.context;
								l.save();
								l.translate(this.bitwiseRound(c), this.bitwiseRound(e));
								l.scale(1, 0.5);
								l.beginPath();
								l.arc(0, 0, f, 0, 2 * Math.PI, !1);
								l.fillStyle = 'rgba(0,0,0,' + 0.2 * b + ')';
								l.fill();
								l.restore();
							}
							c = this.pos.x - (this.offset.x - this.cookieOffset.x) * d;
							e = this.pos.y - (this.offset.y - this.cookieOffset.y) * d;
							b = this.cookieImage.width * d;
							d *= this.cookieImage.height;
							0 < b && 0 < d && ig.system.context.drawImage(this.cookieImage.data, c, e, b, d);
						} else
							0 < e &&
								((b = 1 - c / 500),
								0 > b && (b = 0),
								(f = 17.5 * d * b),
								(c = this.pos.x),
								(l = ig.system.context),
								l.save(),
								l.translate(this.bitwiseRound(c), this.bitwiseRound(e)),
								l.scale(1, 0.5),
								l.beginPath(),
								l.arc(0, 0, f, 0, 2 * Math.PI, !1),
								(l.fillStyle = 'rgba(0,0,0,' + 0.2 * b + ')'),
								l.fill(),
								l.restore()),
								(c = this.pos.x - this.offset.x * d),
								(e = this.pos.y - this.offset.y * d),
								ig.system.context.save(),
								ig.system.context.translate(this.bitwiseRound(c), this.bitwiseRound(e)),
								ig.system.context.scale(d, d),
								this.anim.draw(0, 0),
								ig.system.context.restore();
						ig.system.context.globalAlpha = 1;
					}
				}
			},
			update: function () {
				!this.control.gamePaused &&
					!this.control.gameOver &&
					!this.control.gameStarting &&
					this.control.character.state != this.control.character.STATES.INTRO &&
					!this.control.tutorialPauseMode &&
					(this.moveForward(-this.control.runSpeed * ig.system.tick),
					1 == this.pickupId
						? this.cookieDown
							? ((this.cookieOffset.y += 60 * ig.system.tick),
							  0 <= this.cookieOffset.y &&
									((this.cookieOffset.y = -this.cookieOffset.y), (this.cookieDown = !1)))
							: ((this.cookieOffset.y -= 60 * ig.system.tick),
							  -20 >= this.cookieOffset.y &&
									((this.cookieOffset.y = -20 - (this.cookieOffset.y + 20)),
									(this.cookieDown = !0)))
						: this.anim.update());
			},
			moveForward: function (b) {
				this.zValue += b;
				this.zIndex = 1200 - this.zValue;
				ig.game.sortEntitiesDeferred();
			},
			bitwiseRound: function (b) {
				return (0.5 + b) << 0;
			}
		});
	});
ig.baked = !0;
ig.module('game.entities.game-hiteffect')
	.requires('impact.entity')
	.defines(function () {
		EntityGameHiteffect = ig.Entity.extend({
			offset: { x: 150, y: 150 },
			size: { x: 1, y: 1 },
			contactRect: { x: 0, y: 0 },
			zIndex: 1300,
			explodeAnim: null,
			explode2Anim: null,
			anim: null,
			worldPos: { x: 0, y: 0, z: 0 },
			zValue: 0,
			scale: 1,
			scaleModifier: 1,
			angle: 0,
			alpha: 1,
			timeAlive: 0,
			effectDuration: 0.3,
			effectId: 0,
			control: null,
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.explodeAnimSheet = new ig.AnimationSheet(
					'media/graphics/game/effects/explosion_4x2.png',
					300,
					300
				);
				this.explode2AnimSheet = new ig.AnimationSheet(
					'media/graphics/game/effects/explosion2_4x2.png',
					300,
					300
				);
				this.explodeAnim = new ig.Animation(
					this.explodeAnimSheet,
					this.effectDuration / 7,
					[0, 1, 2, 3, 4, 5, 6],
					!0
				);
				this.anim = this.explode2Anim = new ig.Animation(
					this.explode2AnimSheet,
					this.effectDuration / 8,
					[0, 1, 2, 3, 4, 5, 6, 7],
					!0
				);
				this.angle = 2 * Math.random() * Math.PI;
			},
			ready: function () {
				this.control = ig.game.getEntitiesByType(EntityGameControl)[0];
			},
			setEffectId: function (b) {
				this.effectId = b;
				1 == b
					? ((this.anim = this.explodeAnim), (this.offset.y = 150), (this.scaleModifier = 0.8))
					: (this.anim = this.explode2Anim);
			},
			draw: function () {
				var b = this.scale * this.scaleModifier,
					c = this.bitwiseRound(this.pos.x),
					d = this.bitwiseRound(this.pos.y),
					e = this.bitwiseRound(-this.offset.x),
					f = this.bitwiseRound(-this.offset.y);
				ig.system.context.save();
				ig.system.context.globalAlpha = this.alpha;
				ig.system.context.translate(c, d);
				ig.system.context.rotate(this.angle);
				ig.system.context.scale(b, b);
				this.anim.draw(e, f);
				ig.system.context.restore();
			},
			update: function () {
				if (
					!this.control.gamePaused &&
					(this.anim.update(),
					(this.timeAlive += ig.system.tick),
					this.timeAlive > this.effectDuration &&
						((this.killed = !0), this.control.cleanEffects(), this.kill()),
					1 == this.effectId)
				) {
					var b = this.timeAlive / this.effectDuration;
					1 < b && (b = 1);
					0 > b && (b = 0);
					0.5 < b && (this.alpha = 1 - (b - 0.5) / 0.5);
				}
			},
			bitwiseRound: function (b) {
				return (0.5 + b) << 0;
			}
		});
	});
ig.baked = !0;
ig.module('game.entities.ad-button')
	.requires('impact.entity')
	.defines(function () {
		EntityAdButton = ig.Entity.extend({
			zIndex: 9e3,
			togglePos: { x: 0, y: 0 },
			toggleRect: { x: -27, y: -28, w: 100, h: 78 },
			toggleOffset: { x: 0, y: 0 },
			toggleAlpha: 1,
			toggleDown: !1,
			pointer: null,
			control: null,
			hidden: !0,
			buttonSound: 'button',
			neverUsed: !0,
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.toggleAnim = new ig.Animation(
					new ig.AnimationSheet('media/graphics/game/ui/game/ad.png', 100, 78),
					0,
					[0]
				);
				this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
				ig.game.sortEntitiesDeferred();
			},
			ready: function () {
				this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
			},
			draw: function () {
				if (!this.hidden && this.neverUsed) {
					var b = ig.system.context,
						c = this.pos.x + this.togglePos.x + this.toggleOffset.x + this.toggleRect.x,
						d = this.pos.y + this.togglePos.y + this.toggleOffset.y + this.toggleRect.y;
					this.toggleDown && (d += 2);
					b.save();
					b.globalAlpha = this.toggleAlpha;
					this.toggleAnim.draw(c, d);
					b.restore();
				}
			},
			update: function () {
				(this.hidden = !1 === this.control.gameOver ? !0 : !1) || this.checkClicks();
			},
			aabbCheck: function (b, c) {
				return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1;
			},
			checkClicks: function () {
				this.pointer.refreshPos();
				var b = {};
				b.x = this.pointer.pos.x + this.pointer.size.x / 2;
				b.y = this.pointer.pos.y + this.pointer.size.y / 2;
				b.w = 1;
				b.h = 1;
				var c = {};
				c.x = this.pos.x + this.togglePos.x + this.toggleRect.x;
				c.y = this.pos.y + this.togglePos.y + this.toggleRect.y;
				c.w = this.toggleRect.w;
				c.h = this.toggleRect.h;
				this.toggleDown = !1;
				this.aabbCheck(b, c) &&
					(ig.input.state('click') && (this.toggleDown = !0),
					ig.input.released('click') &&
						((this.toggleDown = !1),
						this.neverUsed &&
							(ig.soundHandler.sfxPlayer.play(this.buttonSound),
							vigoo && ig.vigoo.hasLoggedIn
								? ((b = function () {
										this.oldCoin = ig.game.money;
										this.control.continueAd();
										this.newCoin = ig.game.money;
										this.addCoin = this.newCoin - this.oldCoin;
										ig.vigoo.showReward('You get ' + this.addCoin + ' coins');
										this.neverUsed = !1;
								  }.bind(this)),
								  (c = function () {}.bind(this)),
								  ig.vigoo.showExcitationVideo(b, c))
								: ((this.neverUsed = !1),
								  (this.oldCoin = ig.game.money),
								  this.control.continueAd(),
								  (this.newCoin = ig.game.money),
								  (this.addCoin = this.newCoin - this.oldCoin)))));
			},
			reState: function () {
				this.neverUsed = !0;
			}
		});
	});
ig.baked = !0;
ig.module('game.entities.game-control')
	.requires(
		'impact.entity',
		'game.entities.game-ui',
		'game.entities.game-character',
		'game.entities.game-bgObject',
		'game.entities.game-obstacle',
		'game.entities.game-pickup',
		'game.entities.game-hiteffect',
		'game.entities.ad-button'
	)
	.defines(function () {
		EntityGameControl = ig.Entity.extend({
			zIndex: 100,
			cityPos: { x: 0, y: 122 },
			cloudPos: [
				{ x: 0, y: 0 },
				{ x: 0, y: 0 },
				{ x: 0, y: 0 }
			],
			gameStarting: !0,
			gameEnding: !1,
			gamePaused: !1,
			gameOver: !1,
			ui: null,
			character: null,
			gameStartTime: 0,
			gameTime: 0,
			gameOverTime: 0,
			tutorialMode: !1,
			tutorialPauseMode: !1,
			tutorialStage: 0,
			tutorialStopDistance: 0,
			tutorialPausedTime: 0,
			vanishingPoint: { x: 240, y: 80 },
			horizonLine: { x: 0, y: 164 },
			distanceFogHeight: 22,
			sidewalk1ScreenPoints: Array(4),
			sidewalk2ScreenPoints: Array(4),
			roadScreenPoints: Array(4),
			roadLine1ScreenPoints: Array(4),
			roadLine2ScreenPoints: Array(4),
			laneLine1ScreenPoints: Array(4),
			laneLine2ScreenPoints: Array(4),
			grass1ScreenPoints: Array(4),
			grass2ScreenPoints: Array(4),
			cameraPos: { x: 0, y: 0, z: 0 },
			sidewalkPos: { x: 0, y: 0 },
			sidewalkWidth: 950,
			sidewalkColor: { r: 214, g: 220, b: 230 },
			sidewalk1Pos: { x: -373, y: 0 },
			sidewalk1Width: 200,
			sidewalk2Pos: { x: 373, y: 0 },
			sidewalk2Width: 200,
			roadPos: { x: 0, y: 0 },
			roadWidth: 526,
			roadColor: { r: 89, g: 100, b: 106 },
			roadLine1Pos: { x: 268, y: 0 },
			roadLine1Width: 10,
			roadLine1Color: { r: 120, g: 141, b: 175 },
			roadLine2Pos: { x: -268, y: 0 },
			roadLine2Width: 10,
			roadLine2Color: { r: 120, g: 141, b: 175 },
			laneLine1Pos: { x: -95, y: 0, z: 0 },
			laneLine1Width: 15,
			laneLine1Color: { r: 255, g: 255, b: 255 },
			laneLine2Pos: { x: 95, y: 0, z: 0 },
			laneLine2Width: 15,
			laneLine2Color: { r: 255, g: 255, b: 255 },
			roadZOffset: 0,
			laneLineLength: 4,
			cameraDistance: 10,
			vanishingPointOffset: { x: 0, y: 0 },
			runSpeed: 15,
			maxRunSpeed: 20,
			acceleration: 1 / 60,
			jumpGravity: 2e3,
			jumpAmt: 0,
			canSlide: !0,
			isSliding: !1,
			slideDuration: 1,
			slideTime: 0,
			objects: [],
			effects: [],
			segments: [],
			bgSets: [],
			segmentSize: 30,
			bgSetSize: 90,
			segmentSizeVariable: 5,
			totalDistance: 0,
			lastBgSetDistance: 0,
			lastSegmentDistance: 0,
			bgSetDefinitions: [
				[
					{ id: 11, x: -350, y: 0, z: 0 },
					{ id: 6, x: -350, y: 0, z: 3 },
					{ id: 12, x: -300, y: 10, z: 7 },
					{ id: 7, x: -350, y: 0, z: 9 },
					{ id: 10, x: -350, y: -10, z: 12 },
					{ id: 13, x: -360, y: 0, z: 16.95 },
					{ id: 8, x: -350, y: 0, z: 17 },
					{ id: 9, x: -350, y: 0, z: 21 },
					{ id: 27, x: -350, y: 0, z: 24 },
					{ id: 26, x: -350, y: 0, z: 27 },
					{ id: 11, x: -350, y: 0, z: 30 },
					{ id: 6, x: -350, y: 0, z: 33 },
					{ id: 12, x: -300, y: 10, z: 37 },
					{ id: 7, x: -350, y: 0, z: 39 },
					{ id: 10, x: -350, y: -10, z: 42 },
					{ id: 13, x: -360, y: 0, z: 46.95 },
					{ id: 8, x: -350, y: 0, z: 47 },
					{ id: 9, x: -350, y: 0, z: 51 },
					{ id: 27, x: -350, y: 0, z: 54 },
					{ id: 26, x: -350, y: 0, z: 57 },
					{ id: 11, x: -350, y: 0, z: 60 },
					{ id: 6, x: -350, y: 0, z: 63 },
					{ id: 12, x: -300, y: 10, z: 67 },
					{ id: 7, x: -350, y: 0, z: 69 },
					{ id: 10, x: -350, y: -10, z: 72 },
					{ id: 13, x: -360, y: 0, z: 76.95 },
					{ id: 8, x: -350, y: 0, z: 77 },
					{ id: 9, x: -350, y: 0, z: 81 },
					{ id: 27, x: -350, y: 0, z: 84 },
					{ id: 26, x: -350, y: 0, z: 87 },
					{ id: 1, x: -550, y: 0, z: 8 },
					{ id: 4, x: -550, y: 0, z: 10 },
					{ id: 0, x: -650, y: 0, z: 19 },
					{ id: 3, x: -570, y: 0, z: 20 },
					{ id: 1, x: -1e3, y: 0, z: 27 },
					{ id: 5, x: -550, y: 0, z: 28 },
					{ id: 1, x: -550, y: 0, z: 38 },
					{ id: 4, x: -550, y: 0, z: 40 },
					{ id: 0, x: -650, y: 0, z: 49 },
					{ id: 3, x: -570, y: 0, z: 50 },
					{ id: 1, x: -1e3, y: 0, z: 57 },
					{ id: 5, x: -550, y: 0, z: 58 },
					{ id: 1, x: -550, y: 0, z: 68 },
					{ id: 4, x: -550, y: 0, z: 70 },
					{ id: 0, x: -650, y: 0, z: 79 },
					{ id: 3, x: -570, y: 0, z: 80 },
					{ id: 1, x: -1e3, y: 0, z: 87 },
					{ id: 5, x: -550, y: 0, z: 88 },
					{ id: 23, x: 350, y: 0, z: 0 },
					{ id: 19, x: 350, y: 0, z: 3 },
					{ id: 25, x: 300, y: 0, z: 7 },
					{ id: 20, x: 350, y: 0, z: 8 },
					{ id: 22, x: 350, y: 0, z: 11 },
					{ id: 17, x: 350, y: 0, z: 14 },
					{ id: 24, x: 350, y: 0, z: 19 },
					{ id: 21, x: 350, y: 0, z: 22 },
					{ id: 18, x: 350, y: 0, z: 26 },
					{ id: 23, x: 350, y: 0, z: 30 },
					{ id: 19, x: 350, y: 0, z: 33 },
					{ id: 25, x: 300, y: 0, z: 37 },
					{ id: 20, x: 350, y: 0, z: 38 },
					{ id: 22, x: 350, y: 0, z: 41 },
					{ id: 17, x: 350, y: 0, z: 44 },
					{ id: 24, x: 350, y: 0, z: 49 },
					{ id: 21, x: 350, y: 0, z: 52 },
					{ id: 18, x: 350, y: 0, z: 56 },
					{ id: 23, x: 350, y: 0, z: 60 },
					{ id: 19, x: 350, y: 0, z: 63 },
					{ id: 25, x: 300, y: 0, z: 67 },
					{ id: 20, x: 350, y: 0, z: 68 },
					{ id: 22, x: 350, y: 0, z: 71 },
					{ id: 17, x: 350, y: 0, z: 74 },
					{ id: 24, x: 350, y: 0, z: 79 },
					{ id: 21, x: 350, y: 0, z: 82 },
					{ id: 18, x: 350, y: 0, z: 86 },
					{ id: 2, x: 500, y: 0, z: 8 },
					{ id: 14, x: 550, y: 0, z: 9 },
					{ id: 15, x: 600, y: 0, z: 19 },
					{ id: 16, x: 550, y: 0, z: 23 },
					{ id: 2, x: 500, y: 0, z: 38 },
					{ id: 14, x: 550, y: 0, z: 39 },
					{ id: 15, x: 600, y: 0, z: 49 },
					{ id: 16, x: 550, y: 0, z: 53 },
					{ id: 2, x: 500, y: 0, z: 68 },
					{ id: 14, x: 550, y: 0, z: 69 },
					{ id: 15, x: 600, y: 0, z: 79 },
					{ id: 16, x: 550, y: 0, z: 83 }
				]
			],
			segmentDefinitions: [
				[
					{ id: 5, x: -170, y: 0, z: 17 },
					{ id: 0, x: -170, y: 0, z: 12 },
					{ id: 4, x: -170, y: 0, z: 14 },
					{ id: 3, x: 0, y: 0, z: 11 },
					{ id: 8, x: 170, y: 0, z: 12 },
					{ id: 9, x: 170, y: 0, z: 17 },
					{ type: 2, id: 0, x: 0, y: 200, z: 11 },
					{ type: 2, id: 1, x: 0, y: 0, z: 11 },
					{ type: 2, id: 0, x: 0, y: 0, z: 17 },
					{ type: 2, id: 0, x: 0, y: 0, z: 19 },
					{ type: 2, id: 0, x: -175, y: 0, z: 25 },
					{ type: 2, id: 0, x: 175, y: 0, z: 25 }
				],
				[
					{ id: 5, x: -170, y: 0, z: 17 },
					{ id: 0, x: -170, y: 0, z: 14 },
					{ id: 4, x: -170, y: 0, z: 12 },
					{ id: 8, x: 170, y: 0, z: 12 },
					{ id: 9, x: 170, y: 0, z: 17 },
					{ type: 2, id: 0, x: 0, y: 0, z: 15 },
					{ type: 2, id: 0, x: 0, y: 0, z: 17 },
					{ type: 2, id: 0, x: 0, y: 0, z: 19 },
					{ type: 2, id: 0, x: -175, y: 0, z: 25 },
					{ type: 2, id: 0, x: 175, y: 0, z: 25 }
				],
				[
					{ id: 3, x: -90, y: 0, z: 11 },
					{ id: 8, x: 170, y: 0, z: 10 },
					{ id: 9, x: 170, y: 0, z: 15 },
					{ type: 2, id: 1, x: -175, y: 0, z: 11 },
					{ type: 2, id: 0, x: 0, y: 200, z: 11 },
					{ type: 2, id: 0, x: 0, y: 0, z: 20 },
					{ type: 2, id: 0, x: 175, y: 0, z: 24 },
					{ type: 2, id: 0, x: 175, y: 0, z: 27 },
					{ type: 2, id: 0, x: 175, y: 0, z: 30 }
				],
				[
					{ id: 3, x: -90, y: 0, z: 11 },
					{ id: 0, x: -170, y: 0, z: 15 },
					{ id: 8, x: 170, y: 0, z: 10 },
					{ id: 9, x: 170, y: 0, z: 15 },
					{ type: 2, id: 0, x: -175, y: 0, z: 11 },
					{ type: 2, id: 1, x: -175, y: 200, z: 15 },
					{ type: 2, id: 0, x: 0, y: 0, z: 11 },
					{ type: 2, id: 0, x: 0, y: 0, z: 23 },
					{ type: 2, id: 0, x: 0, y: 0, z: 25 },
					{ type: 2, id: 0, x: 0, y: 0, z: 27 },
					{ type: 2, id: 0, x: 175, y: 0, z: 30 }
				],
				[
					{ id: 3, x: 90, y: 0, z: 11 },
					{ id: 5, x: -170, y: 0, z: 10 },
					{ id: 5, x: -170, y: 0, z: 15 },
					{ type: 2, id: 1, x: 175, y: 0, z: 11 },
					{ type: 2, id: 0, x: 0, y: 200, z: 11 },
					{ type: 2, id: 0, x: -175, y: 0, z: 24 },
					{ type: 2, id: 0, x: -175, y: 0, z: 26 },
					{ type: 2, id: 0, x: -175, y: 0, z: 28 }
				],
				[
					{ id: 3, x: 90, y: 0, z: 11 },
					{ id: 5, x: -170, y: 0, z: 10 },
					{ id: 5, x: -170, y: 0, z: 15 },
					{ id: 8, x: 170, y: 0, z: 20 },
					{ id: 0, x: 0, y: 0, z: 22 },
					{ type: 2, id: 1, x: 0, y: 200, z: 22 },
					{ type: 2, id: 0, x: 0, y: 0, z: 11 },
					{ type: 2, id: 0, x: -175, y: 0, z: 24 },
					{ type: 2, id: 0, x: -175, y: 0, z: 26 },
					{ type: 2, id: 0, x: -175, y: 0, z: 28 }
				],
				[
					{ id: 0, x: -170, y: 0, z: 10 },
					{ id: 5, x: -170, y: 0, z: 15 },
					{ id: 3, x: 90, y: 0, z: 11 },
					{ type: 2, id: 0, x: 0, y: 200, z: 11 },
					{ type: 2, id: 0, x: 175, y: 0, z: 24 },
					{ type: 2, id: 0, x: 0, y: 0, z: 26 },
					{ type: 2, id: 0, x: 175, y: 0, z: 28 },
					{ type: 2, id: 1, x: -175, y: 0, z: 24 }
				],
				[
					{ id: 0, x: -170, y: 0, z: 20 },
					{ id: 5, x: -170, y: 0, z: 25 },
					{ id: 3, x: 90, y: 0, z: 21 },
					{ id: 0, x: 170, y: 0, z: 10 },
					{ id: 0, x: 0, y: 0, z: 10 },
					{ type: 2, id: 0, x: 0, y: 200, z: 10 },
					{ type: 2, id: 0, x: 175, y: 200, z: 10 },
					{ type: 2, id: 1, x: 0, y: 0, z: 21 },
					{ type: 2, id: 0, x: 175, y: 0, z: 21 },
					{ type: 2, id: 0, x: 0, y: 0, z: 30 }
				],
				[
					{ id: 8, x: 170, y: 0, z: 12 },
					{ id: 9, x: 170, y: 0, z: 17 },
					{ id: 3, x: 0, y: 0, z: 11 },
					{ id: 5, x: -170, y: 0, z: 12 },
					{ id: 5, x: -170, y: 0, z: 17 },
					{ type: 2, id: 0, x: 0, y: 200, z: 11 },
					{ type: 2, id: 1, x: 0, y: 0, z: 11 },
					{ type: 2, id: 0, x: 0, y: 0, z: 17 },
					{ type: 2, id: 0, x: 0, y: 0, z: 19 },
					{ type: 2, id: 0, x: -175, y: 0, z: 25 },
					{ type: 2, id: 0, x: 175, y: 0, z: 25 }
				],
				[
					{ id: 8, x: 170, y: 0, z: 22 },
					{ id: 9, x: 170, y: 0, z: 27 },
					{ id: 3, x: 0, y: 0, z: 21 },
					{ id: 5, x: -170, y: 0, z: 22 },
					{ id: 5, x: -170, y: 0, z: 27 },
					{ id: 0, x: -170, y: 0, z: 7 },
					{ id: 0, x: 0, y: 0, z: 7 },
					{ type: 2, id: 0, x: 0, y: 200, z: 21 },
					{ type: 2, id: 0, x: 0, y: 0, z: 21 },
					{ type: 2, id: 0, x: 0, y: 0, z: 27 },
					{ type: 2, id: 0, x: 0, y: 0, z: 29 },
					{ type: 2, id: 0, x: 175, y: 0, z: 7 }
				],
				[
					{ id: 5, x: -170, y: 0, z: 11 },
					{ id: 5, x: -170, y: 0, z: 16 },
					{ id: 6, x: 0, y: 0, z: 10 },
					{ type: 2, x: 175, y: 0, z: 12 },
					{ type: 2, x: 175, y: 0, z: 14 },
					{ type: 2, x: 0, y: 0, z: 20 },
					{ type: 2, x: -175, y: 0, z: 24 },
					{ type: 2, x: -175, y: 0, z: 26 }
				],
				[
					{ id: 5, x: -170, y: 0, z: 11 },
					{ id: 5, x: -170, y: 0, z: 16 },
					{ id: 6, x: 0, y: 0, z: 10 },
					{ id: 6, x: 0, y: 0, z: 15 },
					{ type: 2, x: 175, y: 0, z: 12 },
					{ type: 2, x: 175, y: 0, z: 14 },
					{ type: 2, x: 175, y: 0, z: 16 },
					{ type: 2, x: 0, y: 0, z: 26 },
					{ type: 2, x: -175, y: 0, z: 30 }
				],
				[
					{ id: 4, x: -170, y: 0, z: 11 },
					{ id: 6, x: 0, y: 0, z: 10 },
					{ id: 11, x: 170, y: 0, z: 12 },
					{ type: 2, x: -175, y: 0, z: 16 },
					{ type: 2, x: -175, y: 0, z: 18 },
					{ type: 2, x: -175, y: 0, z: 20 },
					{ type: 2, x: -175, y: 0, z: 22 },
					{ type: 2, x: -175, y: 0, z: 24 }
				],
				[
					{ id: 4, x: -170, y: 0, z: 11 },
					{ id: 4, x: -170, y: 0, z: 17 },
					{ id: 5, x: -170, y: 0, z: 23 },
					{ id: 5, x: -170, y: 0, z: 28 },
					{ id: 6, x: 0, y: 0, z: 10 },
					{ id: 11, x: 170, y: 0, z: 12 },
					{ type: 2, id: 1, x: -175, y: 0, z: 14 },
					{ type: 2, x: -175, y: 0, z: 20 },
					{ type: 2, x: 175, y: 0, z: 23 },
					{ type: 2, x: 175, y: 0, z: 26 },
					{ type: 2, x: 175, y: 0, z: 29 }
				],
				[
					{ id: 5, x: -170, y: 0, z: 10 },
					{ id: 6, x: 0, y: 0, z: 13 },
					{ id: 6, x: 0, y: 0, z: 18 },
					{ id: 7, x: 170, y: 0, z: 12 },
					{ id: 7, x: 170, y: 0, z: 20 },
					{ type: 2, x: -175, y: 0, z: 26 },
					{ type: 2, x: -175, y: 0, z: 28 },
					{ type: 2, x: 175, y: 0, z: 16 },
					{ type: 2, x: 175, y: 0, z: 24 },
					{ type: 2, x: 175, y: 0, z: 26 }
				],
				[
					{ id: 5, x: -170, y: 0, z: 10 },
					{ id: 10, x: 170, y: 0, z: 13 },
					{ id: 11, x: 170, y: 0, z: 20 },
					{ id: 0, x: 0, y: 0, z: 12 },
					{ id: 0, x: 0, y: 0, z: 20 },
					{ type: 2, x: 0, y: 0, z: 26 },
					{ type: 2, x: 0, y: 0, z: 28 },
					{ type: 2, x: 0, y: 0, z: 30 }
				]
			],
			tutorialDefinitions: [
				[
					{ id: 5, x: -170, y: 0, z: 7 },
					{ id: 0, x: -170, y: 0, z: 12 },
					{ id: 4, x: -170, y: 0, z: 14 },
					{ id: 3, x: 0, y: 0, z: 6 },
					{ id: 8, x: 170, y: 0, z: 7 },
					{ id: 9, x: 170, y: 0, z: 12 },
					{ type: 2, id: 1, x: 0, y: 200, z: 6 },
					{ type: 2, id: 0, x: 0, y: 0, z: 12 },
					{ type: 2, id: 0, x: 0, y: 0, z: 14 },
					{ type: 2, id: 0, x: 175, y: 0, z: 20 },
					{ id: 5, x: -170, y: 0, z: 26 },
					{ id: 5, x: -170, y: 0, z: 31 },
					{ id: 6, x: 0, y: 0, z: 25 },
					{ type: 2, x: 175, y: 0, z: 27 },
					{ type: 2, x: 175, y: 0, z: 29 },
					{ type: 2, x: 0, y: 0, z: 39 },
					{ type: 2, x: -175, y: 0, z: 43 },
					{ type: 2, x: -175, y: 0, z: 45 },
					{ id: 3, x: -90, y: 0, z: 50 },
					{ id: 6, x: 0, y: 0, z: 51 },
					{ id: 6, x: 0, y: 0, z: 56 },
					{ id: 11, x: 170, y: 0, z: 52 },
					{ type: 2, id: 1, x: -175, y: 0, z: 50 },
					{ type: 2, x: -175, y: 0, z: 56 },
					{ type: 2, x: -175, y: 0, z: 58 },
					{ type: 2, x: -175, y: 0, z: 60 }
				]
			],
			charIsMoving: !1,
			charIsMovingLeft: !1,
			charMoveTargetX: 0,
			touchTime: 0,
			touchPos: { x: 0, y: 0 },
			touchThreshold: 1,
			lifeCount: 3,
			coinsCollected: 0,
			powerLevel: 0,
			powerLevelUsage: 0.1,
			buttonSound: 'button',
			chirpSound: 'chirp',
			crunchSound: 'crunch',
			coinSound: 'coin',
			hitSound: 'hit',
			init: function (b, c, d) {
				this.parent(b, c, d);
				this.cityImage = new ig.Image('media/graphics/game/backgrounds/cityscape.png');
				this.cloudImage = [
					new ig.Image('media/graphics/game/backgrounds/cloud0.png'),
					new ig.Image('media/graphics/game/backgrounds/cloud1.png'),
					new ig.Image('media/graphics/game/backgrounds/cloud2.png')
				];
				this.vanishingPoint.x = ig.system.width / 2;
				b = ig.system.context;
				this.bgSkyLinGrad = b.createLinearGradient(0, 0, 0, this.horizonLine.y);
				this.bgSkyLinGrad.addColorStop(0, 'rgba(102,190,223,1)');
				this.bgSkyLinGrad.addColorStop(1, 'rgba(203,232,196,1)');
				this.bgGroundLinGrad = b.createLinearGradient(0, this.horizonLine.y, 0, ig.system.height);
				this.bgGroundLinGrad.addColorStop(0, 'rgba(166,212,74,1)');
				this.bgGroundLinGrad.addColorStop(1, 'rgba(110,170,70,1)');
				this.bgHorizonLinGrad = b.createLinearGradient(0, 121, 0, 195);
				this.bgHorizonLinGrad.addColorStop(0, 'rgba(255,255,194,0)');
				this.bgHorizonLinGrad.addColorStop(0.5, 'rgba(255,255,194,0.5)');
				this.bgHorizonLinGrad.addColorStop(1, 'rgba(255,255,194,0)');
				this.cityPos.x = ig.system.width / 2 - this.cityImage.width / 2;
				this.cloudPos[0].x = ig.system.width / 2 - 30;
				this.cloudPos[0].y = 20;
				this.cloudPos[1].x = ig.system.width / 2 - 120;
				this.cloudPos[1].y = 45;
				this.cloudPos[2].x = ig.system.width / 2 + 60;
				this.cloudPos[2].y = 60;
				this.adBtn = ig.game.spawnEntity(
					EntityAdButton,
					ig.system.width / 2 - 25,
					ig.system.height - 70
				);
				this.adBtn.control = this;
				ig.game.cookies = 0;
				this.ui = ig.game.spawnEntity(EntityGameUi, 0, 0);
				ig.game.doTutorialFlag && (this.tutorialMode = !0);
			},
			ready: function () {
				this.pointer = ig.game.getEntitiesByType(EntityPointer)[0];
				var b = this.cameraDistance / 13,
					b =
						this.cameraPos.y * b +
						ig.system.height -
						(1 - b) * (ig.system.height - this.vanishingPoint.y);
				this.character = ig.game.spawnEntity(EntityGameCharacter, ig.system.width / 2, b);
				this.character.startY = b;
				this.character.ready();
				this.ui.ready();
				this.spawnStartingObjects();
				ig.game.sortEntities();
				this.recalculateScreenPoints();
				this.gameStartTime = ig.system.clock.delta();
				this.tutorialMode &&
					(this.character.run(),
					0 == this.tutorialStopDistance &&
						((this.tutorialPauseMode = !0), this.doNextTutorialStage()));
			},
			draw: function () {
				ig.system.context.scale(1, 1);
				var b = ig.system.context,
					c = null,
					d = null,
					c = this.sidewalkColor;
				b.fillStyle = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',1)';
				d = this.sidewalk1ScreenPoints;
				b.beginPath();
				b.moveTo(d[0].x, d[0].y);
				for (c = 1; c < d.length; c++) b.lineTo(d[c].x, d[c].y);
				b.closePath();
				b.fill();
				d = this.sidewalk2ScreenPoints;
				b.beginPath();
				b.moveTo(d[0].x, d[0].y);
				for (c = 1; c < d.length; c++) b.lineTo(d[c].x, d[c].y);
				b.closePath();
				b.fill();
				c = this.roadColor;
				b.fillStyle = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',1)';
				d = this.roadScreenPoints;
				b.beginPath();
				b.moveTo(d[0].x, d[0].y);
				for (c = 1; c < d.length; c++) b.lineTo(d[c].x, d[c].y);
				b.closePath();
				b.fill();
				c = this.roadLine1Color;
				b.fillStyle = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',1)';
				d = this.roadLine1ScreenPoints;
				b.beginPath();
				b.moveTo(d[0].x, d[0].y);
				for (c = 1; c < d.length; c++) b.lineTo(d[c].x, d[c].y);
				b.closePath();
				b.fill();
				d = this.roadLine2ScreenPoints;
				b.beginPath();
				b.moveTo(d[0].x, d[0].y);
				for (c = 1; c < d.length; c++) b.lineTo(d[c].x, d[c].y);
				b.closePath();
				b.fill();
				c = this.laneLine1Color;
				b.fillStyle = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',1)';
				var d = 7,
					e = {};
				e.x = this.laneLine1Pos.x;
				e.y = this.laneLine1Pos.y;
				e.z = this.roadZOffset;
				for (c = 0; c < d; c++)
					(e.z += 4 * this.laneLineLength),
						this.drawPerspectiveLine(
							e,
							this.laneLineLength,
							this.laneLine1Width,
							this.laneLine1Color
						);
				e.x = this.laneLine2Pos.x;
				e.y = this.laneLine2Pos.y;
				e.z = this.roadZOffset;
				for (c = 0; c < d; c++)
					(e.z += 4 * this.laneLineLength),
						this.drawPerspectiveLine(
							e,
							this.laneLineLength,
							this.laneLine2Width,
							this.laneLine2Color
						);
				c = this.roadLine1Color;
				b.fillStyle = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',1)';
				d = 24;
				e = { x: -373, y: 0 };
				e.z = this.roadZOffset;
				for (c = 0; c < d; c++)
					(e.z += this.laneLineLength), this.drawPerspectiveLine(e, 0.05, 200, this.roadLine1Color);
				e = { x: 373, y: 0 };
				e.z = this.roadZOffset;
				for (c = 0; c < d; c++)
					(e.z += this.laneLineLength), this.drawPerspectiveLine(e, 0.05, 200, this.roadLine2Color);
				this.drawGround();
				this.cityImage.draw(this.cityPos.x, this.cityPos.y);
			},
			update: function () {
				if (this.gameStarting)
					0.25 < ig.system.clock.delta() - this.gameStartTime &&
						((this.gameStarting = !1), (this.gameStartTime = ig.system.clock.delta()));
				else if (this.gameEnding)
					0.25 < ig.system.clock.delta() - this.gameEndTime && this.endGame();
				else if (
					!this.gamePaused &&
					!this.gameOver &&
					((this.gameTime += ig.system.tick),
					this.character.state != this.character.STATES.INTRO &&
						(this.updatePlayerInput(), !this.tutorialPauseMode))
				) {
					var b = this.runSpeed * ig.system.tick;
					if (this.tutorialMode && this.totalDistance + b >= this.tutorialStopDistance) {
						b = this.tutorialStopDistance - this.totalDistance;
						if (0 < b)
							for (var c = 0; c < this.objects.length; c++) this.objects[c].moveForward(-b);
						this.doNextTutorialStage();
					}
					0 < b &&
						((this.totalDistance += b),
						(this.roadZOffset -= b),
						this.roadZOffset < 4 * -this.laneLineLength &&
							(this.roadZOffset += 4 * this.laneLineLength));
					0 != this.jumpAmt
						? ((this.character.jumpOffset -= this.jumpAmt * ig.system.tick),
						  0 <= this.character.jumpOffset
								? ((this.jumpAmt = this.character.jumpOffset = 0),
								  this.character.run(),
								  (this.canSlide = !0))
								: (this.jumpAmt -= this.jumpGravity * ig.system.tick))
						: 0 > this.character.jumpOffset && (this.jumpAmt -= this.jumpGravity * ig.system.tick);
					this.isSliding &&
						((this.slideTime += ig.system.tick),
						this.slideTime > this.slideDuration &&
							((this.isSliding = !1), (this.canSlide = !0), this.character.run()));
					this.charIsMoving &&
						(this.charIsMovingLeft
							? ((this.character.pos.x -= 800 * ig.system.tick),
							  this.character.pos.x < this.charMoveTargetX &&
									((this.character.pos.x = this.charMoveTargetX), (this.charIsMoving = !1)))
							: ((this.character.pos.x += 800 * ig.system.tick),
							  this.character.pos.x > this.charMoveTargetX &&
									((this.character.pos.x = this.charMoveTargetX), (this.charIsMoving = !1))));
					this.updateBgSets();
					this.updateSegments();
					this.updateCollisions();
					this.runSpeed += this.acceleration * ig.system.tick;
					this.runSpeed > this.maxRunSpeed && (this.runSpeed = this.maxRunSpeed);
					this.character.state == this.character.STATES.POWERED &&
						((this.powerLevel -= this.powerLevelUsage * ig.system.tick),
						0 >= this.powerLevel && ((this.powerLevel = 0), this.character.powerDown()));
				}
			},
			togglePauseGame: function () {
				this.gamePaused ? this.unpauseGame() : this.pauseGame();
			},
			pauseGame: function () {
				if (!this.gameOver && !this.gamePaused) {
					this.gamePaused = !0;
					this.character.anim.timer.pause();
					for (var b = 0; b < this.objects.length; b++)
						this.objects[b].anim && this.objects[b].anim.timer.pause();
					for (b = 0; b < this.effects.length; b++)
						this.effects[b].anim && this.effects[b].anim.timer.pause();
				}
			},
			unpauseGame: function () {
				if (this.gamePaused) {
					this.gamePaused = !1;
					this.character.anim.timer.unpause();
					for (var b = 0; b < this.objects.length; b++)
						this.objects[b].anim && this.objects[b].anim.timer.unpause();
					for (b = 0; b < this.effects.length; b++)
						this.effects[b].anim && this.effects[b].anim.timer.unpause();
				}
			},
			aabbCheck: function (b, c) {
				return b.x + b.w > c.x && b.x < c.x + c.w && b.y + b.h > c.y && b.y < c.y + c.h ? !0 : !1;
			},
			updatePlayerInput: function () {
				this.gamePaused || (ig.ua.mobile ? this.processTouchInput() : this.processKeyboardInput());
			},
			processKeyboardInput: function () {
				ig.input.state('left')
					? this.characterMoveLeft()
					: ig.input.state('right') && this.characterMoveRight();
				ig.input.state('up') && this.characterJump();
				ig.input.state('down') && this.characterSlide();
			},
			processTouchInput: function () {
				if (ig.input.pressed('click')) {
					this.touchTime = ig.system.clock.delta();
					this.pointer.refreshPos();
					var b = this.pointer.pos.x - this.pointer.size.x / 2,
						c = this.pointer.pos.y - this.pointer.size.y / 2;
					this.touchPos = { x: b, y: c };
				} else if (
					ig.input.released('click') &&
					ig.system.clock.delta() - this.touchTime < this.touchThreshold
				) {
					this.pointer.refreshPos();
					var b = this.pointer.pos.x - this.pointer.size.x / 2,
						c = this.pointer.pos.y - this.pointer.size.y / 2,
						d = 0,
						e = 0,
						d = b - this.touchPos.x,
						e = c - this.touchPos.y;
					300 > d * d + e * e
						? b < this.character.pos.x
							? this.characterMoveLeft()
							: this.characterMoveRight()
						: Math.abs(e) >= Math.abs(d)
						? 0 > e
							? this.characterJump()
							: this.characterSlide()
						: 0 > d
						? this.characterMoveLeft()
						: this.characterMoveRight();
				}
			},
			characterMoveLeft: function () {
				if (this.tutorialMode)
					if (7 == this.tutorialStage || 9 == this.tutorialStage) {
						if (!this.doNextTutorialStage()) return;
					} else return;
				!this.charIsMoving &&
					this.character.pos.x > ig.system.width / 2 - 130 &&
					((this.charIsMovingLeft = this.charIsMoving = !0),
					(this.charMoveTargetX =
						this.character.pos.x > ig.system.width / 2
							? ig.system.width / 2
							: ig.system.width / 2 - 130));
			},
			characterMoveRight: function () {
				if (this.tutorialMode)
					if (5 == this.tutorialStage) {
						if (!this.doNextTutorialStage()) return;
					} else return;
				!this.charIsMoving &&
					this.character.pos.x < ig.system.width / 2 + 130 &&
					((this.charIsMoving = !0),
					(this.charIsMovingLeft = !1),
					(this.charMoveTargetX =
						this.character.pos.x < ig.system.width / 2
							? ig.system.width / 2
							: ig.system.width / 2 + 130));
			},
			characterJump: function () {
				if (this.tutorialMode)
					if (3 == this.tutorialStage) {
						if (!this.doNextTutorialStage()) return;
					} else return;
				this.character.pos.y == this.character.startY &&
					this.canSlide &&
					((this.jumpAmt = 600), this.character.jump(), (this.canSlide = !1));
			},
			characterSlide: function () {
				if (this.tutorialMode)
					if (11 == this.tutorialStage) {
						if (!this.doNextTutorialStage()) return;
					} else return;
				0 == this.cameraPos.y &&
					this.canSlide &&
					(this.character.slide(),
					this.character.state == this.character.STATES.SLIDE &&
						((this.isSliding = !0), (this.canSlide = !1), (this.slideTime = 0)));
			},
			spawnCollectEffect: function (b) {
				if (b) {
					var c = null,
						c = ig.game.spawnEntity(
							EntityGameHiteffect,
							this.character.pos.x,
							this.character.pos.y
						);
					return null != c
						? ((c.worldPos = { x: b.worldPos.x, y: b.worldPos.y, z: b.zValue }),
						  (c.zValue = b.zValue),
						  c.setEffectId(1),
						  c.ready(),
						  (c.pos.x = b.pos.x),
						  (c.pos.y = b.pos.y - 10),
						  (c.zIndex = this.character.zIndex - 15),
						  c.pos.x < ig.system.width / 2
								? (c.pos.x -= 10)
								: c.pos.x > ig.system.width / 2 && (c.pos.x += 10),
						  ig.game.sortEntities(),
						  this.effects.push(c),
						  c)
						: null;
				}
			},
			spawnHitEffect: function () {
				var b = null,
					b = ig.game.spawnEntity(EntityGameHiteffect, this.character.pos.x, this.character.pos.y);
				return null != b
					? ((b.worldPos = {
							x: this.character.pos.x - ig.system.width / 2,
							y: 0,
							z: this.character.zValue
					  }),
					  (b.zValue = this.character.zValue),
					  b.ready(),
					  (b.pos.x = this.character.pos.x),
					  (b.pos.y = this.character.pos.y - 60),
					  ig.game.sortEntitiesDeferred(),
					  this.effects.push(b),
					  b)
					: null;
			},
			drawPerspectiveInfinite: function (b, c, d) {
				var e = this.cameraPos.y + ig.system.height,
					f = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2,
					l = (e - this.vanishingPoint.y) / (f - this.vanishingPoint.x),
					n = this.horizonLine.y,
					l = (n - (this.vanishingPoint.y - l * this.vanishingPoint.x)) / l,
					q = this.cameraPos.y + ig.system.height;
				b = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
				var j = (q - this.vanishingPoint.y) / (b - this.vanishingPoint.x);
				c = this.horizonLine.y;
				var j = (c - (this.vanishingPoint.y - j * this.vanishingPoint.x)) / j,
					p = ig.system.context;
				p.fillStyle = 'rgba(' + d.r + ',' + d.g + ',' + d.b + ',1)';
				p.beginPath();
				p.moveTo(f, e);
				p.lineTo(l, n);
				p.lineTo(j, c);
				p.lineTo(b, q);
				p.closePath();
				p.fill();
			},
			drawPerspectiveLine: function (b, c, d) {
				var e = this.cameraDistance,
					f = b.z;
				if (!(f + c < e)) {
					var l = b.x;
					b = b.y;
					var n = f,
						q = n + c;
					f < e && (n = e);
					c = e / (n - this.cameraPos.z);
					f = e / (q - this.cameraPos.z);
					q = ig.system.width / 2 - this.cameraPos.x * c + l * c;
					e =
						this.cameraPos.y * c +
						ig.system.height -
						b * f -
						(1 - c) * (ig.system.height - this.vanishingPoint.y);
					n = ig.system.width / 2 - this.cameraPos.x * f + l * f;
					b =
						this.cameraPos.y * f +
						ig.system.height -
						b * f -
						(1 - f) * (ig.system.height - this.vanishingPoint.y);
					if (!(e <= this.horizonLine.y)) {
						b < this.horizonLine.y &&
							((l = (e - b) / (q - n)), (b = this.horizonLine.y), (n = (b - (e - l * q)) / l));
						l = q - (d * c) / 2;
						c = q + (d * c) / 2;
						var q = n + (d * f) / 2,
							j = b;
						d = n - (d * f) / 2;
						f = b;
						b = ig.system.context;
						b.beginPath();
						b.moveTo(l, e);
						b.lineTo(c, e);
						b.lineTo(q, j);
						b.lineTo(d, f);
						b.closePath();
						b.fill();
					}
				}
			},
			drawGround: function () {
				var b = ig.system.context;
				b.save();
				b.fillStyle = this.bgSkyLinGrad;
				b.fillRect(0, 0, ig.system.width, this.horizonLine.y);
				for (var c = 0; c < this.cloudImage.length; c++)
					this.cloudImage[c].draw(this.cloudPos[c].x, this.cloudPos[c].y);
				b.fillStyle = this.bgGroundLinGrad;
				points = this.grass1ScreenPoints;
				b.beginPath();
				b.moveTo(points[0].x, points[0].y);
				for (c = 1; c < points.length; c++) b.lineTo(points[c].x, points[c].y);
				b.closePath();
				b.fill();
				points = this.grass2ScreenPoints;
				b.beginPath();
				b.moveTo(points[0].x, points[0].y);
				for (c = 1; c < points.length; c++) b.lineTo(points[c].x, points[c].y);
				b.closePath();
				b.fill();
				b.restore();
			},
			spawnObject: function (b, c, d) {
				var e = this.cameraDistance,
					f = d.z;
				if (!(f < e)) {
					d = { x: d.x, y: d.y, z: d.z };
					f < e && (d.z = e);
					var l = e / (d.z - this.cameraPos.z),
						e = ig.system.width / 2 - this.cameraPos.x * l + d.x * l,
						l =
							this.cameraPos.y * l +
							ig.system.height +
							d.y -
							(1 - l) * (ig.system.height - this.vanishingPoint.y),
						n = null;
					0 == b
						? ((n = ig.game.spawnEntity(EntityGameBgObject, e, l)), n.setImageId(c))
						: 1 == b
						? ((n = ig.game.spawnEntity(EntityGameObstacle, e, l)), n.setImageId(c))
						: 2 == b && ((n = ig.game.spawnEntity(EntityGamePickup, e, l)), n.setPickupId(c));
					return null != n
						? ((n.worldPos = d),
						  (n.zValue = f),
						  n.ready(),
						  this.objects.push(n),
						  ig.game.sortEntitiesDeferred(),
						  n)
						: null;
				}
			},
			cleanObjects: function () {
				for (var b = [], c = 0; c < this.objects.length; c++) {
					var d = this.objects[c];
					d.killed && (d.kill(), b.push(d));
				}
				if (0 < b.length) {
					for (var e = [], d = this.objects.pop(); d; ) {
						for (var f = !1, c = 0; c < b.length; c++)
							if (b[c] == d) {
								f = !0;
								break;
							}
						f || e.push(d);
						d = this.objects.pop();
					}
					this.objects = e;
				}
			},
			cleanEffects: function () {
				for (var b = [], c = 0; c < this.effects.length; c++) {
					var d = this.effects[c];
					d.killed && (d.kill(), b.push(d));
				}
				if (0 < b.length) {
					for (var e = [], d = this.effects.pop(); d; ) {
						for (var f = !1, c = 0; c < b.length; c++)
							if (b[c] == d) {
								f = !0;
								break;
							}
						f || e.push(d);
						d = this.effects.pop();
					}
					this.effects = e;
				}
			},
			spawnStartingObjects: function () {
				var b = 30 * Math.random();
				this.lastBgSetDistance = -b;
				for (var c = 0; 2 > c; c++) {
					for (
						var d = [],
							b = this.bgSetDefinitions.length,
							b = Math.floor(Math.random() * b),
							b = this.bgSetDefinitions[b],
							e = 0;
						e < b.length;
						e++
					) {
						var f = b[e],
							f = this.spawnObject(0, f.id, {
								x: f.x,
								y: f.y,
								z: this.lastBgSetDistance - this.totalDistance + f.z
							});
						d.push(f);
					}
					this.bgSets.push(d);
					this.lastBgSetDistance += this.bgSetSize;
				}
				if (this.tutorialMode) {
					this.lastSegmentDistance = 10;
					b = this.tutorialDefinitions[0];
					c = [];
					for (e = 0; e < b.length; e++)
						(f = b[e]),
							(d = f.type),
							null == d && (d = 1),
							(f = this.spawnObject(d, f.id, {
								x: f.x,
								y: f.y,
								z: this.lastSegmentDistance + f.z
							})),
							c.push(f);
					this.segments.push(c);
					this.lastSegmentDistance += 120;
				} else {
					this.lastSegmentDistance = 70;
					b = this.segmentDefinitions.length;
					b = Math.floor(Math.random() * b);
					b = this.segmentDefinitions[b];
					c = [];
					for (e = 0; e < b.length; e++)
						(f = b[e]),
							(d = f.type),
							null == d && (d = 1),
							(f = this.spawnObject(d, f.id, {
								x: f.x,
								y: f.y,
								z: this.lastSegmentDistance + f.z
							})),
							c.push(f);
					this.segments.push(c);
					b = Math.floor(Math.random() * this.segmentSizeVariable);
					this.lastSegmentDistance += this.segmentSize + b;
				}
				ig.game.sortEntitiesDeferred();
			},
			updateBgSets: function () {
				if (!(this.totalDistance <= this.lastBgSetDistance - this.bgSetSize)) {
					this.bgSets.splice(0, 1);
					for (
						var b = [],
							c = this.bgSetDefinitions.length,
							c = Math.floor(Math.random() * c),
							c = this.bgSetDefinitions[c],
							d = 0;
						d < c.length;
						d++
					) {
						var e = c[d],
							e = this.spawnObject(0, e.id, {
								x: e.x,
								y: e.y,
								z: this.lastBgSetDistance - this.totalDistance + e.z
							});
						b.push(e);
					}
					this.bgSets.push(b);
					this.lastBgSetDistance += this.bgSetSize;
					ig.game.sortEntitiesDeferred();
				}
			},
			updateSegments: function () {
				for (var b = [], c = 0; c < this.segments.length; c++) {
					for (var d = this.segments[c], e = !0, f = 0; f < d.length; f++) {
						var l = d[f];
						if (l && !l.killed) {
							e = !1;
							break;
						}
					}
					e && b.push(d);
				}
				if (0 < b.length) {
					d = [];
					for (l = this.segments.pop(); l; ) {
						e = !1;
						for (c = 0; c < b.length; c++)
							if (b[c] == l) {
								e = !0;
								break;
							}
						e || d.push(l);
						l = this.segments.pop();
					}
					this.segments = d;
				}
				if (!(this.totalDistance <= this.lastSegmentDistance - this.bgSetSize)) {
					c = this.segmentDefinitions.length;
					c = Math.floor(Math.random() * c);
					b = this.segmentDefinitions[c];
					d = [];
					for (c = 0; c < b.length; c++)
						(l = b[c]),
							(e = l.type),
							null == e && (e = 1),
							(l = this.spawnObject(e, l.id, {
								x: l.x,
								y: l.y,
								z: this.lastSegmentDistance - this.totalDistance + l.z
							})),
							d.push(l);
					this.segments.push(d);
					c = Math.floor(Math.random() * this.segmentSizeVariable);
					this.lastSegmentDistance += this.segmentSize + c;
					ig.game.sortEntitiesDeferred();
				}
			},
			updateCollisions: function () {
				var b = this.character.pos.x - ig.system.width / 2,
					c = 0;
				0 > this.character.jumpOffset && (c = 200);
				var d = {};
				d.w = this.character.charWidth;
				d.h = this.character.charHeight;
				d.x = this.character.worldPos.x + b - d.w / 2;
				d.y = -(this.character.worldPos.y + c) - d.h;
				for (b = 0; b < this.segments.length; b++)
					for (var c = this.segments[b], e = 0; e < c.length; e++) {
						var f = c[e];
						if (!f.hit) {
							var l = this.character.zValue - this.character.zWidth,
								n = l + 2 * this.character.zWidth;
							2 == f.objType &&
								((l -= this.character.zWidth / 2), (n += this.character.zWidth / 2));
							if (
								f.zValue + f.zWidth >= l &&
								f.zValue <= n &&
								(!(1 == f.objType && f.slidable) || !this.isSliding)
							)
								(l = {}),
									(l.w = f.contactRect.w),
									(l.h = f.contactRect.h),
									(l.x = f.worldPos.x - l.w / 2),
									(l.y = -f.worldPos.y - l.h),
									this.aabbCheck(d, l) &&
										((f.hit = !0),
										2 == f.objType
											? ((f.killed = !0),
											  this.cleanObjects(),
											  f.kill(),
											  this.collectPickup(f.pickupId),
											  this.spawnCollectEffect(f))
											: this.character.isInvulnerable ||
											  (this.hitObstacle(f), this.spawnHitEffect(), this.character.shake()));
						}
					}
			},
			recalculateScreenPoints: function () {
				var b = null,
					c = null,
					d,
					e,
					f,
					l,
					n,
					q = null,
					j = null,
					b = this.sidewalk1Pos,
					c = this.sidewalk1Width;
				e = this.cameraPos.y + ig.system.height;
				d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
				f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
				q = this.vanishingPoint.y - f * this.vanishingPoint.x;
				l = this.horizonLine.y;
				f = (l - q) / f;
				q = this.cameraPos.y + ig.system.height;
				c = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
				n = (q - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
				j = this.vanishingPoint.y - n * this.vanishingPoint.x;
				b = this.horizonLine.y;
				n = (b - j) / n;
				this.sidewalk1ScreenPoints[0] = { x: this.bitwiseRound(d), y: this.bitwiseRound(e) };
				this.sidewalk1ScreenPoints[1] = { x: this.bitwiseRound(f), y: this.bitwiseRound(l) };
				this.sidewalk1ScreenPoints[2] = { x: this.bitwiseRound(n), y: this.bitwiseRound(b) };
				this.sidewalk1ScreenPoints[3] = { x: this.bitwiseRound(c), y: this.bitwiseRound(q) };
				this.grass1ScreenPoints[0] = { x: 0, y: this.horizonLine.y };
				this.grass1ScreenPoints[1] = { x: this.bitwiseRound(f) + 1, y: this.bitwiseRound(l) };
				this.grass1ScreenPoints[2] = { x: this.bitwiseRound(d) + 1, y: this.bitwiseRound(e) };
				this.grass1ScreenPoints[3] = { x: 0, y: ig.system.height };
				b = this.sidewalk2Pos;
				c = this.sidewalk2Width;
				e = this.cameraPos.y + ig.system.height;
				d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
				f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
				q = this.vanishingPoint.y - f * this.vanishingPoint.x;
				l = this.horizonLine.y;
				f = (l - q) / f;
				q = this.cameraPos.y + ig.system.height;
				c = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
				n = (q - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
				j = this.vanishingPoint.y - n * this.vanishingPoint.x;
				b = this.horizonLine.y;
				n = (b - j) / n;
				this.sidewalk2ScreenPoints[0] = { x: this.bitwiseRound(d), y: this.bitwiseRound(e) };
				this.sidewalk2ScreenPoints[1] = { x: this.bitwiseRound(f), y: this.bitwiseRound(l) };
				this.sidewalk2ScreenPoints[2] = { x: this.bitwiseRound(n), y: this.bitwiseRound(b) };
				this.sidewalk2ScreenPoints[3] = { x: this.bitwiseRound(c), y: this.bitwiseRound(q) };
				this.grass2ScreenPoints[0] = { x: ig.system.width, y: this.horizonLine.y };
				this.grass2ScreenPoints[1] = { x: this.bitwiseRound(n) - 1, y: this.bitwiseRound(b) };
				this.grass2ScreenPoints[2] = { x: this.bitwiseRound(c) - 1, y: this.bitwiseRound(q) };
				this.grass2ScreenPoints[3] = { x: ig.system.width, y: ig.system.height };
				b = this.roadPos;
				c = this.roadWidth;
				e = this.cameraPos.y + ig.system.height;
				d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
				f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
				q = this.vanishingPoint.y - f * this.vanishingPoint.x;
				l = this.horizonLine.y;
				f = (l - q) / f;
				q = this.cameraPos.y + ig.system.height;
				c = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
				n = (q - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
				j = this.vanishingPoint.y - n * this.vanishingPoint.x;
				b = this.horizonLine.y;
				n = (b - j) / n;
				this.roadScreenPoints[0] = { x: this.bitwiseRound(d), y: this.bitwiseRound(e) };
				this.roadScreenPoints[1] = { x: this.bitwiseRound(f), y: this.bitwiseRound(l) };
				this.roadScreenPoints[2] = { x: this.bitwiseRound(n), y: this.bitwiseRound(b) };
				this.roadScreenPoints[3] = { x: this.bitwiseRound(c), y: this.bitwiseRound(q) };
				b = this.roadLine1Pos;
				c = this.roadLine1Width;
				e = this.cameraPos.y + ig.system.height;
				d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
				f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
				q = this.vanishingPoint.y - f * this.vanishingPoint.x;
				l = this.horizonLine.y;
				f = (l - q) / f;
				q = this.cameraPos.y + ig.system.height;
				c = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
				n = (q - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
				j = this.vanishingPoint.y - n * this.vanishingPoint.x;
				b = this.horizonLine.y;
				n = (b - j) / n;
				this.roadLine1ScreenPoints[0] = { x: this.bitwiseRound(d), y: this.bitwiseRound(e) };
				this.roadLine1ScreenPoints[1] = { x: this.bitwiseRound(f), y: this.bitwiseRound(l) };
				this.roadLine1ScreenPoints[2] = { x: this.bitwiseRound(n), y: this.bitwiseRound(b) };
				this.roadLine1ScreenPoints[3] = { x: this.bitwiseRound(c), y: this.bitwiseRound(q) };
				b = this.roadLine2Pos;
				c = this.roadLine2Width;
				e = this.cameraPos.y + ig.system.height;
				d = ig.system.width / 2 - this.cameraPos.x + b.x - c / 2;
				f = (e - this.vanishingPoint.y) / (d - this.vanishingPoint.x);
				q = this.vanishingPoint.y - f * this.vanishingPoint.x;
				l = this.horizonLine.y;
				f = (l - q) / f;
				q = this.cameraPos.y + ig.system.height;
				c = ig.system.width / 2 - this.cameraPos.x + b.x + c / 2;
				n = (q - this.vanishingPoint.y) / (c - this.vanishingPoint.x);
				j = this.vanishingPoint.y - n * this.vanishingPoint.x;
				b = this.horizonLine.y;
				n = (b - j) / n;
				this.roadLine2ScreenPoints[0] = { x: this.bitwiseRound(d), y: this.bitwiseRound(e) };
				this.roadLine2ScreenPoints[1] = { x: this.bitwiseRound(f), y: this.bitwiseRound(l) };
				this.roadLine2ScreenPoints[2] = { x: this.bitwiseRound(n), y: this.bitwiseRound(b) };
				this.roadLine2ScreenPoints[3] = { x: this.bitwiseRound(c), y: this.bitwiseRound(q) };
			},
			bitwiseRound: function (b) {
				return (0.5 + b) << 0;
			},
			collectPickup: function (b) {
				0 == b
					? ((ig.game.money += 1),
					  (this.coinsCollected += 1),
					  ig.soundHandler.sfxPlayer.play(this.coinSound))
					: 1 == b &&
					  ((ig.game.cookies += 1),
					  ig.soundHandler.sfxPlayer.play(this.bcrunchSound),
					  (this.powerLevel = (10 * this.powerLevel + 1) / 10),
					  1 <= this.powerLevel && ((this.powerLevel = 1), this.character.queuePowerUp()));
			},
			hitObstacle: function (b) {
				this.character.state == this.character.STATES.POWERED
					? (b.knockOut(), ig.soundHandler.sfxPlayer.play(this.hitSound))
					: ((this.lifeCount -= 1),
					  ig.soundHandler.sfxPlayer.play(this.hitSound),
					  0 > this.lifeCount
							? ((this.lifeCount = 0), this.finishGame())
							: ((this.character.invulnerableStartTime = this.gameTime),
							  (this.character.isInvulnerable = !0),
							  b.knockOut()));
			},
			continueAd: function () {
				var b = 20 + Math.floor(41 * Math.random());
				this.coinsCollected += b;
				ig.game.money += b;
			},
			quitGame: function () {
				ig.game.restartGameFlag = !1;
				this.gameEndTime = ig.system.clock.delta();
				this.gameEnding = !0;
				this.adBtn.reState();
			},
			finishGame: function () {
				this.gameOver = !0;
				this.gameOverTime = ig.system.clock.delta();
				ig.game.savePlayerStats();
				ig.soundHandler.sfxPlayer.play(this.chirpSound);
			},
			restartGame: function () {
				ig.game.doTutorialFlag = !1;
				ig.game.restartGameFlag = !0;
				this.gameEndTime = ig.system.clock.delta();
				this.gameEnding = !0;
				this.adBtn.reState();
			},
			endGame: function () {
				ig.input.clearPressed();
				ig.game.savePlayerStats();
				ig.game.visitedShop
					? ig.game.restartGameFlag
						? ((ig.game.restartGameFlag = !1), ig.game.director.jumpTo(LevelGame))
						: ig.game.director.jumpTo(LevelHome)
					: ((ig.game.restartGameFlag = !1),
					  (ig.game.doShop = !0),
					  ig.game.director.jumpTo(LevelHome));
			},
			doNextTutorialStage: function () {
				var b = ig.system.clock.delta() - this.tutorialPausedTime;
				if (
					(1 == this.tutorialStage ||
						2 == this.tutorialStage ||
						3 == this.tutorialStage ||
						5 == this.tutorialStage ||
						7 == this.tutorialStage ||
						9 == this.tutorialStage ||
						11 == this.tutorialStage ||
						13 == this.tutorialStage) &&
					0.5 > b
				)
					return !1;
				this.tutorialStage += 1;
				this.tutorialPausedTime = ig.system.clock.delta();
				switch (this.tutorialStage) {
					case 1:
						this.tutorialPauseMode = !0;
						this.ui.showTutorialUI(0);
						break;
					case 2:
						this.tutorialPauseMode = !0;
						this.ui.showTutorialUI(1);
						break;
					case 3:
						this.tutorialPauseMode = !0;
						ig.ua.mobile ? this.ui.showTutorialUI(2) : this.ui.showTutorialUI(3);
						break;
					case 4:
						this.ui.hideTutorialUI();
						this.tutorialPauseMode = !1;
						this.tutorialStopDistance = 14;
						break;
					case 5:
						this.tutorialPauseMode = !0;
						ig.ua.mobile ? this.ui.showTutorialUI(4) : this.ui.showTutorialUI(5);
						break;
					case 6:
						this.ui.hideTutorialUI();
						this.tutorialPauseMode = !1;
						this.tutorialStopDistance = 33.5;
						break;
					case 7:
						this.tutorialPauseMode = !0;
						ig.ua.mobile ? this.ui.showTutorialUI(6) : this.ui.showTutorialUI(7);
						break;
					case 8:
						this.ui.hideTutorialUI();
						this.tutorialPauseMode = !1;
						this.tutorialStopDistance = 38;
						break;
					case 9:
						this.tutorialPauseMode = !0;
						ig.ua.mobile ? this.ui.showTutorialUI(8) : this.ui.showTutorialUI(9);
						break;
					case 10:
						this.ui.hideTutorialUI();
						this.tutorialPauseMode = !1;
						this.tutorialStopDistance = 43;
						break;
					case 11:
						this.tutorialPauseMode = !0;
						ig.ua.mobile ? this.ui.showTutorialUI(10) : this.ui.showTutorialUI(11);
						break;
					case 12:
						this.ui.hideTutorialUI();
						this.tutorialPauseMode = !1;
						this.tutorialStopDistance = 62;
						break;
					case 13:
						this.tutorialPauseMode = !0;
						this.ui.showTutorialUI(12);
						break;
					case 14:
						this.ui.hideTutorialUI(),
							(this.tutorialMode = this.tutorialPauseMode = !1),
							this.characterMoveRight();
				}
				return !0;
			}
		});
	});
ig.baked = !0;
ig.module('game.levels.game')
	.requires('impact.image', 'game.entities.game-control', 'game.entities.pointer-selector')
	.defines(function () {
		LevelGame = {
			entities: [
				{ type: 'EntityGameControl', x: 0, y: 0 },
				{ type: 'EntityPointerSelector', x: 0, y: 0 }
			],
			layer: []
		};
	});
ig.baked = !0;
ig.module('game.main')
	.requires(
		'impact.game',
		'impact.debug.debug',
		'plugins.patches.user-agent-patch',
		'plugins.splash-loader',
		'plugins.tween',
		'plugins.url-parameters',
		'plugins.jukebox',
		'plugins.director',
		'plugins.impact-storage',
		'plugins.webaudio-music-player',
		'plugins.fake-storage',
		'plugins.vigoo-plugin',
		'plugins.audio.sound-handler',
		'plugins.handlers.dom-handler',
		'plugins.custom-loader',
		'game.entities.branding-logo',
		'game.entities.opening-kitty',
		'game.entities.pointer',
		'game.entities.pointer-selector',
		'game.levels.opening',
		'game.levels.home',
		'game.levels.game'
	)
	.defines(function () {
		this.START_OBFUSCATION;
		this.FRAMEBREAKER;
		MyGame = ig.Game.extend({
			muted: !1,
			musicVolume: 0.4,
			sfxVolume: 1,
			money: 0,
			cookies: 0,
			doTutorial: !1,
			doShop: !1,
			upgrades: [
				{ status: !1, equipped: !1 },
				{ status: !1, equipped: !1 },
				{ status: !1, equipped: !1 },
				{ status: !1, equipped: !1 },
				{ status: !1, equipped: !1 }
			],
			visitedShop: !1,
			restartGameFlag: !1,
			doTutorialFlag: !1,
			firstrun: !0,
			firstClick: !1,
			isMuteAds: !1,
			init: function () {
				this.webaudioPlugin = new WebaudioMusicPlayer({ bgm: { path: 'media/audio/music/bgm' } });
				this.setupControls();
				this.setupLocalStorage();
				this.removeLoadingWheel();
				this.injectMobileLink();
				this.setupURLParameters();
				this.finalize();
			},
			initSfx: function () {},
			finalize: function () {
				ig.game.startGame();
				this.loadAssets();
				sizeHandler();
			},
			injectMobileLink: function () {
				$('#play').attr('onclick', 'ig.game.pressPlay();ig.soundHandler.staticSound.play();');
			},
			removeLoadingWheel: function () {
				try {
					$('#ajaxbar').css('background', 'none');
				} catch (b) {
					console.log(b);
				}
			},
			showDebugMenu: function () {
				console.log('showing debug menu ...');
				ig.Entity._debugShowBoxes = !0;
				$('.ig_debug').show();
			},
			setupLocalStorage: function () {
				try {
					localStorage.setItem('testStorage', 'testStorage'),
						localStorage.removeItem('testStorage'),
						(localStorageSupport = 'localStorage' in window && null !== window.localStorage),
						(ig.game.storage = new ig.Storage());
				} catch (b) {
					ig.game.storage = new ig.FakeStorage();
				}
				this.getPlayerStats();
			},
			savePlayerStats: function () {
				null != this.storage &&
					(this.storage.set('gianthamsterrun.musicVolume', this.musicVolume),
					this.storage.set('gianthamsterrun.sfxVolume', this.sfxVolume),
					this.storage.set('gianthamsterrun.muted', this.muted),
					this.storage.set('gianthamsterrun.money', this.money),
					this.storage.set('gianthamsterrun.upgrades', this.upgrades),
					this.storage.set('gianthamsterrun.firstrun', this.firstrun),
					this.storage.set('gianthamsterrun.visitedShop', this.visitedShop));
			},
			getPlayerStats: function () {
				if (null != this.storage) {
					var b = this.storage.get('gianthamsterrun.musicVolume');
					null != b && (this.musicVolume = b);
					ig.soundHandler.bgmPlayer.volume(this.musicVolume);
					b = this.storage.get('gianthamsterrun.sfxVolume');
					null != b && (this.sfxVolume = b);
					ig.soundHandler.sfxPlayer.volume(this.sfxVolume);
					b = this.storage.get('gianthamsterrun.muted');
					null != b && (this.muted = b);
					this.muted
						? (ig.soundHandler.bgmPlayer.volume(0), ig.soundHandler.sfxPlayer.volume(0))
						: (ig.soundHandler.bgmPlayer.volume(this.musicVolume),
						  ig.soundHandler.sfxPlayer.volume(this.sfxVolume));
					b = this.storage.get('gianthamsterrun.firstrun');
					null != b && (this.firstrun = b);
					b = this.storage.get('gianthamsterrun.money');
					null != b && (this.money = b);
					b = this.storage.get('gianthamsterrun.upgrades');
					null != b &&
						null != b[0] &&
						null != b[0].status &&
						null != b[0].equipped &&
						(this.upgrades = b);
					b = this.storage.get('gianthamsterrun.visitedShop');
					null != b && (this.visitedShop = b);
					this.muted && ig.game.webaudioPlugin.mute();
				}
			},
			startGame: function () {
				this.getPlayerStats();
				this.director = new ig.Director(this, [LevelOpening, LevelHome, LevelGame]);
				if (_SETTINGS.Branding.Splash.Enabled)
					try {
						this.branding = new ig.BrandingSplash();
					} catch (b) {
						console.log(b),
							console.log('Loading original levels ...'),
							this.director.jumpTo(LevelOpening);
					}
				else this.director.jumpTo(LevelOpening);
			},
			fpsCount: function () {
				this.fpsTimer || (this.fpsTimer = new ig.Timer(1));
				this.fpsTimer && 0 > this.fpsTimer.delta()
					? null != this.fpsCounter
						? this.fpsCounter++
						: (this.fpsCounter = 0)
					: ((ig.game.fps = this.fpsCounter), (this.fpsCounter = 0), this.fpsTimer.reset());
			},
			endGame: function () {
				console.log('End game');
				ig.soundHandler.stopBackgroundMusic();
				ig.ua.mobile && _SETTINGS.Ad.Mobile.End.Enabled && MobileAdInGameEnd.Initialize();
			},
			resetPlayerStats: function () {
				ig.log('resetting player stats ...');
				this.playerStats = { id: this.playerStats ? this.playerStats.id : null };
			},
			setItemUpgradeEquipped: function (b, d) {
				for (var e = 0; e < this.upgrades.length; e++) this.upgrades[e].equipped = !1;
				this.upgrades[b].equipped = d;
			},
			getItemUpgradeEquipped: function (b) {
				return this.upgrades[b].equipped;
			},
			setItemUpgradeStatus: function (b, d) {
				this.upgrades[b].status = d;
			},
			getItemUpgradeStatus: function (b) {
				return this.upgrades[b].status;
			},
			getItemUpgradePrice: function (b) {
				switch (b) {
					case 0:
						return 100;
					case 1:
						return 200;
					case 2:
						return 300;
					case 3:
						return 400;
					case 4:
						return 500;
				}
				return 0;
			},
			getItemUpgradeName: function (b) {
				switch (b) {
					case 0:
						return _STRINGS.UI.skateboard;
					case 1:
						return _STRINGS.UI['roller-skates'];
					case 2:
						return _STRINGS.UI.rocket;
					case 3:
						return _STRINGS.UI['flying carpet'];
					case 4:
						return _STRINGS.UI.hoverboard;
				}
				return '';
			},
			setupControls: function () {
				ig.input.unbindAll();
				ig.input.initMouse();
				ig.input.bind(ig.KEY.MOUSE1, 'click');
				ig.input.bind(ig.KEY.LEFT_ARROW, 'left');
				ig.input.bind(ig.KEY.RIGHT_ARROW, 'right');
				ig.input.bind(ig.KEY.UP_ARROW, 'up');
				ig.input.bind(ig.KEY.DOWN_ARROW, 'down');
				ig.input.bind(ig.KEY.ENTER, 'enter');
			},
			setupURLParameters: function () {
				this.setupURLParameters = new ig.UrlParameters();
			},
			setupMarketJsGameCenter: function () {
				_SETTINGS &&
					(_SETTINGS.MarketJSGameCenter
						? (_SETTINGS.MarketJSGameCenter.Activator.Enabled &&
								_SETTINGS.MarketJSGameCenter.Activator.Position &&
								(console.log('MarketJSGameCenter activator settings present ....'),
								$('.gamecenter-activator').css(
									'top',
									_SETTINGS.MarketJSGameCenter.Activator.Position.Top
								),
								$('.gamecenter-activator').css(
									'left',
									_SETTINGS.MarketJSGameCenter.Activator.Position.Left
								)),
						  $('.gamecenter-activator').show())
						: console.log('MarketJSGameCenter settings not defined in game settings'));
			},
			pressPlay: function () {
				this.hideOverlay(['play']);
				this.startGame();
				ig.ua.mobile && _SETTINGS.Ad.Mobile.Footer.Enabled && MobileAdInGameFooter.Initialize();
				ig.ua.mobile && _SETTINGS.Ad.Mobile.Header.Enabled && MobileAdInGameHeader.Initialize();
			},
			pauseGame: function () {
				ig.system.stopRunLoop.call(ig.system);
				console.log('Game Paused');
				var b = ig.game.getEntitiesByType(EntityGameControl)[0];
				b && b.pauseGame();
			},
			resumeGame: function () {
				ig.system.startRunLoop.call(ig.system);
				console.log('Game Resumed');
			},
			playBGM: function () {
				if (!ig.game.firstClick || 'suspended' == ig.soundHandler.bgmPlayer.webaudio.context.state)
					ig.soundHandler.bgmPlayer.webaudio.context.resume().then(function () {
						ig.game.firstClick = !0;
						ig.soundHandler.forceUnMuteAll();
					}),
						console.log('state bgm ' + ig.soundHandler.bgmPlayer.webaudio.context.state);
			},
			showOverlay: function (b) {
				for (i = 0; i < b.length; i++)
					$('#' + b[i]).show(), (document.getElementById(b[i]).style.visibility = 'visible');
			},
			hideOverlay: function (b) {
				for (i = 0; i < b.length; i++)
					$('#' + b[i]).hide(), (document.getElementById(b[i]).style.visibility = 'hidden');
			},
			update: function () {
				this.fpsCount();
				if (this.paused)
					for (var b = 0; b < this.entities.length; b++)
						this.entities[b].ignorePause && this.entities[b].update();
				else this.parent(), ig.soundHandler && ig.soundHandler.forceLoopBGM();
			},
			draw: function () {
				this.parent();
				this._rscreen.x = ig.system.getDrawPos(this.screen.x) / ig.system.scale;
				this._rscreen.y = ig.system.getDrawPos(this.screen.y) / ig.system.scale;
				this.drawEntities();
			},
			drawDebug: function () {
				if (
					!ig.global.wm &&
					(this.debugEnable(),
					this.viewDebug &&
						((ig.system.context.fillStyle = '#000000'),
						(ig.system.context.globalAlpha = 0.35),
						ig.system.context.fillRect(0, 0, ig.system.width / 4, ig.system.height),
						(ig.system.context.globalAlpha = 1),
						this.debug && 0 < this.debug.length))
				)
					for (i = 0; i < this.debug.length; i++)
						(ig.system.context.font = '10px Arial'),
							(ig.system.context.fillStyle = '#ffffff'),
							ig.system.context.fillText(
								this.debugLine - this.debug.length + i + ': ' + this.debug[i],
								10,
								50 + 10 * i
							);
			},
			debugCL: function (b) {
				this.debug
					? (50 > this.debug.length || this.debug.splice(0, 1),
					  this.debug.push(b),
					  this.debugLine++)
					: ((this.debug = []), (this.debugLine = 1), this.debug.push(b));
				console.log(b);
			},
			debugEnable: function () {
				ig.input.pressed('click') && (this.debugEnableTimer = new ig.Timer(2));
				this.debugEnableTimer && 0 > this.debugEnableTimer.delta()
					? ig.input.released('click') && (this.debugEnableTimer = null)
					: this.debugEnableTimer &&
					  0 < this.debugEnableTimer.delta() &&
					  ((this.debugEnableTimer = null), (this.viewDebug = this.viewDebug ? !1 : !0));
			}
		});
		var b = getQueryVariable('device');
		if (b)
			switch (b) {
				case 'mobile':
					console.log('serving mobile version ...');
					ig.ua.mobile = !0;
					break;
				case 'desktop':
					console.log('serving desktop version ...');
					ig.ua.mobile = !1;
					break;
				default:
					console.log('serving universal version ...');
			}
		else console.log('serving universal version ...');
		if ((b = getQueryVariable('force-rotate')))
			switch (b) {
				case 'portrait':
					console.log('force rotate to portrait');
					window.orientation = 0;
					break;
				case 'landscape':
					console.log('force rotate to horizontal');
					window.orientation = 90;
					break;
				default:
					alert('wrong command/type in param force-rotate. Defaulting value to portrait'),
						(window.orientation = 0);
			}
		ig.ua.mobile
			? ((ig.Sound.enabled = !1),
			  ig.main('#canvas', MyGame, 60, mobileWidth, mobileHeight, 1, ig.SplashLoader))
			: ig.main('#canvas', MyGame, 60, desktopWidth, desktopHeight, 1, ig.SplashLoader);
		ig.ua.mobile && orientationHandler();
		sizeHandler();
		fixSamsungHandler();
		ig.domHandler = null;
		ig.domHandler = new ig.DomHandler();
		ig.domHandler.forcedDeviceDetection();
		ig.domHandler.forcedDeviceRotation();
		ig.soundHandler = null;
		ig.soundHandler = new ig.SoundHandler();
		this.END_OBFUSCATION;
	});

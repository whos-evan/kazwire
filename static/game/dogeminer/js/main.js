! function(e) {
	function t(r) {
		if (n[r]) return n[r].exports;
		var o = n[r] = {
			exports: {},
			id: r,
			loaded: !1
		};
		return e[r].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
	}
	var n = {};
	return t.m = e, t.c = n, t.p = "", t(0)
}([function(e, exports, t) {
	(function(e) {
		"use strict";
		$(function() {
			function n() {
				return ++cn >= pn.length ? pn[cn = 0] : pn[cn]
			}

			function r(e) {
				return e || (e = bn), e[Math.floor(n() * e.length)]
			}

			function o(e) {
				return e || (e = Mn), e[Math.floor(n() * e.length)]
			}

			function a(e) {
				return e || (e = kn), e[Math.floor(n() * e.length)]
			}

			function i(e) {
				return e || (e = wn), e[Math.floor(n() * e.length)]
			}

			function s(e) {
				return e || (e = Dn), e[Math.floor(n() * e.length)]
			}

			function l() {
				return {
					alltimecoins: 0,
					basecost: 1e6,
					bases: 0,
					basestrength: 5e3,
					baseupslevel: 0,
					clickstrength: 1,
					clickupslevel: 0,
					coins: 0,
					extrastrength: 1,
					extraupslevel: 0,
					kennelcost: 400,
					kennels: 0,
					kennelstrength: 3.5,
					kennelsupslevel: 0,
					kittencost: 6e3,
					kittens: 0,
					kittenstrength: 13,
					kittensupslevel: 0,
					rigcost: 999999999,
					rigs: 0,
					rigstrength: 549215,
					rigupslevel: 0,
					rocketcost: 1e5,
					rockets: 0,
					rocketstrength: 109,
					rocketupslevel: 0,
					shibecost: 10,
					shibes: 0,
					shibestrength: .25,
					shibeupslevel: 0
				}
			}

			function u(e) {
				switch (e) {
					case 1:
						return {
							costtitle: "The Moon",
							currcolor: "#a48032",
							currentmusic: "earthmusic",
							currlocation: "EARTH",
							dogefix: ["wow", "such " + r(), "very " + r(), "much " + r(), "wow", "such " + r(), "very " + r(), "much " + r(), "so " + r(), "many " + r(), "want " + r(), "wow", "amaze", "10/10", "10/10 " + r(), "to the moon!"],
							fundtext: "Moon Fund",
							imgArr: new Array("./img/bg/bg1.jpg", "./img/bg/bg2.jpg", "./img/bg/bg3.jpg", "./img/bg/bg4.jpg", "./img/bg/bg5.jpg", "./img/bg/bg6.jpg", "./img/bg/bg7.jpg", "./img/bg/bg8.jpg", "./img/bg/bg9.jpg"),
							imgArrlvl: new Array("./img/level1.png"),
							kittenfix: ["i can haz " + o(), "oh my " + o(), "mjau", "mjau " + o(), "cam?", "i iz cute?", "purrrrrr", "yes master doge", "why no kittencoin?", "plz " + o(), "u want pussy?", "rate me", "txt me"],
							launchcost: 5e10,
							modifier: "",
							modifier_small: "",
							newslinecolor: "#111111",
							nextcolor: "#b2b2b2",
							nextlocation: "MOON",
							popclass: "pop",
							theme: "css/sunny/jquery-ui-1.10.4.custom.min.css",
							upgrades: {
								clickups: [],
								shibeups: [],
								kennelsups: [],
								kittensups: [],
								rocketups: [],
								baseups: [],
								rigups: [],
								extraups: []
							}
						};
					case 2:
						return {
							costtitle: "Mars",
							currcolor: "#b2b2b2",
							currentmusic: "moonmusic",
							currlocation: "MOON",
							dogefix: ["wow", "such " + a(), "very " + a(), "much " + a(), "wow", "such " + a(), "very " + a(), "much " + a(), "so " + a(), "many " + a(), "want " + a(), "wow", "amaze", "10/10", "10/10 " + a(), "on the moon!"],
							fundtext: "Mars Fund",
							imgArr: new Array("./img/bg/bg001.jpg", "./img/bg/bg002.jpg?2", "./img/bg/bg003.jpg", "./img/bg/bg5.jpg"),
							imgArrlvl: new Array("./img/level2.png"),
							kittenfix: ["wow", "such " + a(), "very " + a(), "much " + a(), "wow", "such " + a(), "very " + a(), "much " + a(), "so " + a(), "many " + a(), "want " + a(), "wow", "amaze", "10/10", "10/10 " + a(), "to the moon!"],
							launchcost: 5e10,
							modifier: "Billion",
							modifier_small: "B",
							newslinecolor: "#111111",
							nextcolor: "#c87645",
							nextlocation: "MARS",
							popclass: "popmoon",
							theme: "css/cupertino/jquery-ui-1.10.4.custom.min.css",
							upgrades: {
								clickups: [],
								shibeups: [],
								kennelsups: [],
								kittensups: [],
								rocketups: [],
								baseups: [],
								rigups: [],
								extraups: []
							}
						};
					case 3:
						return {
							costtitle: "????",
							currcolor: "#c87645",
							currentmusic: "marsmusic",
							currlocation: "MARS",
							dogefix: ["wow", "such " + i(), "very " + i(), "much " + i(), "wow", "such " + i(), "very " + i(), "much " + i(), "so " + i(), "many " + i(), "want " + i(), "wow", "amaze", "10/10", "10/10 " + i(), "on the mars!"],
							fundtext: "???? Fund",
							imgArr: new Array("./img/bg/bg101.jpg", "./img/bg/bg102.jpg", "./img/bg/bg103.jpg", "./img/bg/bg104.jpg", "./img/bg/bg105.jpg"),
							imgArrlvl: new Array("./img/level3.png"),
							kittenfix: ["i can haz " + s(), "oh my " + s(), "mjau", "mjau " + s(), "house?", "i iz music?", "purrrrrr", "yes master DJ", "why no kittenzcoin?", "plz " + s(), "u want kittenz bby?", "rate me", "txt me"],
							launchcost: 1e21,
							modifier: "Trillion",
							modifier_small: "T",
							newslinecolor: "#DADADA",
							nextcolor: "#DAC2A0",
							nextlocation: "????",
							popclass: "popmars",
							theme: "css/mars-theme/jquery-ui-1.10.4.custom.min.css",
							upgrades: {
								clickups: [],
								shibeups: [],
								kennelsups: [],
								kittensups: [],
								rocketups: [],
								baseups: [],
								rigups: [],
								extraups: []
							}
						}
				}
			}

			function d(e, t) {
				var r = Math.floor(25 * n() - 10) - 30,
					o = Math.floor(25 * n() - 10) + 200;
				requestAnimationFrame(function() {
					var n = $('<div class="' + Yn.currentlevel().popclass + ' allpops animated popOut duration-12" style="top:' + o + "px;left:" + r + 'px;">' + t + "</div>");
					$(n).appendTo("#" + e).one(On, function() {
						requestAnimationFrame(function() {
							$(n).remove()
						})
					})
				})
			}

			function c() {
				ct() && $("#start-playing").find("span").text("CONTINUE")
			}

			function p() {
				_t(), Qt(), !T() && Tn.level < 2 ? (ft(), $(".first-part").addClass("animated zoomOutDown"), $(".first-part").one(On, function() {
					$(this).hide()
				}), $(".second-part").addClass("animated zoomInDown"), $(".second-part").show(), $(".second-part").one(On, function() {
					$(".intro-rocket").one(On, function() {
						$(".intro-rocket").attr("class", "intro-rocket animated shake infinite nodelay duration-8")
					})
				})) : _()
			}

			function m() {
				$(".intro-rocket").removeClass("shake infinite nodelay duration-8").addClass("bounceOutUp nodelay duration-15"), $(".intro-rocket").one(On, function() {
					$(".second-part").removeClass("animated zoomInDown"), $(".second-part").addClass("animated zoomOutDown"), $(".third-part").addClass("animated zoomInDown"), $(".third-part").show(), $(".hand").one(On, function() {
						$(".hand").removeClass("animated bounceInDown"), Sn = !0, b()
					})
				})
			}

			function h() {
				Sn = !1, $(".third-part .third-part-doge").addClass("animated fadeOutLeft duration-5"), $(".third-part-doge").one(On, function() {
					$(this).hide(), $(".third-part-shop").addClass("animated fadeInRight duration-5"), $(".third-part-shop").show(), $(".third-part-shop").one(On, function() {
						xn = !0, k(), $("#upgraded-example").one(On, function() {
							Cn = 4, $(".shibes-example").children().attr("class", "animated tada level1 level1-shibe1")
						})
					})
				})
			}

			function _() {
				f(), Sn = !1, xn = !1, $(".introcontainer").fadeOut().remove(), $("#introscreen").removeClass("zoomInDown"), $("#introscreen").addClass("zoomOutDown"), requestAnimationFrame(function() {
					$("#sideadlol").addClass("animated delay-30 fadeIn"), $("#footeradlol").addClass("animated delay-30 fadeIn"), $("#sideadlol").attr("style", ""), $("#footeradlol").attr("style", ""), setTimeout(function() {
						(adsbygoogle = window.adsbygoogle || []).push({}), (adsbygoogle = window.adsbygoogle || []).push({})
					}, 1e3)
				}), $("#introscreen").one(On, function() {
					$(this).remove()
				}), Nn = !1, T(!0)
			}

			function f() {
				window.setInterval(function() {
					dt(), ue(), et()
				}, 1e4), window.setInterval(function() {
					he(), E(), Gt(), je(), Un.hasrunfor += 1, Re(), Tn.animate && be()
				}, 1e3), window.setInterval(function() {
					Se()
				}, 25);
				var e = 12e4;
				window.setInterval(function() {
					var e = n();.22 > e ? gt() : e > .22 && .28 > e && Mt()
				}, e), v()
			}

			function v() {
				setTimeout(function() {
					Tn.animate && g(), de(), v()
				}, 500 * Yn.speedvar)
			}

			function g() {
				_e(), fe(), ve(), ge(), ye(), setTimeout(function() {
					y()
				}, 200 * Yn.speedvar)
			}

			function y() {
				ke(), we(), De(), Le(), Te()
			}

			function b() {
				$(".hand").removeClass("hand-hand1").addClass("hand-hand2 hand-clicking"), new d("tutminer", "+1"), $("#tutminer").removeClass("level1-doge_mine1u0").addClass("level1-doge_mine2u0"), D(), Sn && setTimeout(function() {
					M()
				}, 150)
			}

			function M() {
				$(".hand").removeClass("hand-hand2 hand-clicking").addClass("hand-hand1"), $("#tutminer").removeClass("level1-doge_mine2u0").addClass("level1-doge_mine1u0"), Sn && setTimeout(function() {
					b()
				}, 300)
			}

			function k() {
				$(".shibes-example").children().removeClass("level1 level1-shibe0 level1-shibe20 level1-shibe" + Cn + " level1-shibe2" + Cn).addClass("level1 level1-shibe2" + Cn), L(), xn && setTimeout(function() {
					w()
				}, 250)
			}

			function w() {
				$(".shibes-example").children().removeClass("level1 level1-shibe0 level1-shibe20 level1-shibe" + Cn + " level1-shibe2" + Cn).addClass("level1 level1-shibe" + Cn), xn && setTimeout(function() {
					k()
				}, 600)
			}

			function D() {
				if (n() > .6) {
					var e = $(".wowcontainer");
					tt(r(Yn.currentlevel().dogefix), e, Math.max(12, 25 * n() + 10))
				}
			}

			function L() {
				if (n() > .8) {
					var e = $(".miniwowcontainer");
					tt(r(Yn.currentlevel().dogefix), e, Math.max(10, 10 * n() + 6))
				}
			}

			function T(e) {
				if (!e) {
					var t = !1,
						n = localStorage.getItem("dogeminer-tutorial");
					return t = JSON.parse(n)
				}
				localStorage.setItem("dogeminer-tutorial", JSON.stringify(!0))
			}

			function Y(e, t) {
				requestAnimationFrame(function() {
					var n = e * t.width() / 100;
					t.find("div").animate({
						width: n
					}, 500).html(Yn.currentlevel().nextlocation + " FUND: <strong>" + e + "%&nbsp;</strong>")
				})
			}

			function E() {
				var e = "";
				Yn.progress = Math.floor(Tn.currentlevel().coins / Yn.currentlevel().launchcost * 100), Yn.progress > 100 && (Yn.progress = 100), Y(Yn.progress, $("#progressBar")), e = Yn.progress + "%", Tn.maxlevel > Tn.level ? (Ht(), ir = !1, sr = !1, $("#progressBar").hide("scale", null, 500, null), $("#launchbutton").hide("scale", null, 500, null), e = "COMPLETE") : Tn.level == Yn.gamemaxlevel ? (Ht(), ir = !1, sr = !1, $("#progressBar").hide("scale", null, 500, null), $("#launchbutton").hide("scale", null, 500, null), e = "????") : Yn.progress >= 100 ? ($("#progressBar").hide("scale", null, 500, null), $("#launchbutton").show("scale", null, 500, null), $t()) : Yn.progress > 19 && Yn.progress < 100 ? ($("#progressBar").show("scale", null, 500, null), $("#launchbutton").hide("scale", null, 500, null), Ht(), ir = !1, sr = !1) : Yn.progress < 10 && (Ht(), ir = !1, sr = !1, $("#launchbutton").hide("scale", null, 500, null), $("#progressBar").hide("scale", null, 500, null)), requestAnimationFrame(function() {
					$("#progress").html(e)
				})
			}

			function S(e, t, n, r, o, a) {
				this.name = e, this.desc = t, this.cost = n, this.strength = r, void 0 === o ? this.shoptitle = e : this.shoptitle = o, void 0 === a ? this.shopdesc = t : this.shopdesc = a
			}

			function x() {
				Yn.level1.upgrades.clickups.push(new S("Pickaxe", "Regular pickaxe.", 0)), Yn.level1.upgrades.clickups.push(new S("Stronger Pickaxe", "Upgrade the pickaxe.", 500)), Yn.level1.upgrades.clickups.push(new S("Golden Pickaxe", "Replace the pickaxe with a golden pickaxe. Kids, this doesn't work in real life, but doge is magic. ", 12e4)), Yn.level1.upgrades.clickups.push(new S("TARPIS", 'Replace the pickaxe with a top secret prototype self-conscious super-pickaxe known as the "Time And Relative Pickaxe In Space".', 8e7)), Yn.level1.upgrades.clickups.push(new S("GPU-Pickaxe", "Replace the pickaxe with a graphics card on a stick. This increases mining yield substantially.", 85e9)), Yn.level1.upgrades.clickups.push(new S("Rocket Power", "Add a rocket to the pickaxe for extreme mining.", 95e14)), Yn.level1.upgrades.clickups.push(new S("Space Doge", "Give Doge a space helmet. It's wise to have when on the moon.", 666e16)), Yn.level1.upgrades.shibeups.push(new S("", "", 0, .25, "Mining Shibe", "Very kind shibe to mine much dogecoin.")), Yn.level1.upgrades.shibeups.push(new S("Euphoria", "Replace the Mining Shibe helmets with fedoras for increased tipping.", 1800, 1.75, "Enlightened Shibe", "Very enlightened shibe to mine much dogecoin.")), Yn.level1.upgrades.shibeups.push(new S("Golden Pickaxes", "Replace the Mining Shibe pickaxes with golden pickaxes.", 12e4, 25, "Golden Shibes", "Very enlightened shibe to mine much dogecoin. With golden pickaxes.")), Yn.level1.upgrades.shibeups.push(new S("Salary Raise", "Raise the Mining Shibes salaries which will lead to better work ethics.", 2e7, 250, "Happy Shibe", "Very happy shibe to mine much dogecoin.")), Yn.level1.upgrades.shibeups.push(new S("Rapper Shibes", "Rapper Shibes bring da bling!", 95e7, 1100, "Rapper Shibe", "Rapper shibe bring da bling!")), Yn.level1.upgrades.shibeups.push(new S("Snoop Doge", "Snoop doesn't even have to mine, he's just true.", 55e9, 6500, "Snoop Doge", "Very true shibe.")), Yn.level1.upgrades.shibeups.push(new S("Snoop Lion", "The next evolution of Snoop.", 725e14, 58085045040, "Snoop Lion", "Even truer shibe. Much true!")), Yn.level1.upgrades.shibeups.push(new S("Lion In Space", "A lion without a space helmet would look weird in space.", 1925e14, 958085045040, "Space Lion", "The bravest of shibes.")), Yn.level1.upgrades.kennelsups.push(new S("", "", 0, 3.5, "Doge Kennels", "Wow very efficiency, entire kennels to mine dogecoin.")), Yn.level1.upgrades.kennelsups.push(new S("More Axes", "Supply the kennels with more pickaxes to use for mining.", 2400, 4.75, "Axequipped Kennels", "Wow very efficiency, entire kennels to mine dogecoin. With many axes.")), Yn.level1.upgrades.kennelsups.push(new S("Paint Job", "Repaint the kennels to a more friendlier color. Much happy.", 21e4, 32, "Pink Kennels", "Wow very efficiency, entire kennels to mine dogecoin. With style.")), Yn.level1.upgrades.kennelsups.push(new S("Micro-Rockets", "Attach micro-rockets to the kennels. To the moon!", 25e5, 400, "Rocket Kennels", "WOOOW very efficiency, entire kennels to mine dogecoin with ROCKET POWER!")), Yn.level1.upgrades.kennelsups.push(new S("Release the Doge", "Who let the doge out?", 125e7, 1800, "Free Running Doges", "Wow very freedom, free running doges mine much more dogecoin than not free running doges!")), Yn.level1.upgrades.kennelsups.push(new S("Jet Packs", "Supply the kennels with jet packs.", 95e9, 8500, "Jet-Pack Doges", "Equipped with jet packs, doges travel at almost light speed to mine much dogecoin!")), Yn.level1.upgrades.kennelsups.push(new S("Safety First", "Give the Jet-Pack-Doges space helmets. For safety.", 725e14, 98085045040, "Space Doges", "Equipped with jet packs AND space helmets, doges travel at almost light speed to mine much dogecoin in space!")), Yn.level1.upgrades.kittensups.push(new S("", "", 0, 13, "Slave Kittens", "Kittens to post cute videos to the internet for dogecoin.")), Yn.level1.upgrades.kittensups.push(new S("High Quality Pussy", "Upgrade the kittens webcam to HD.", 8e4, 44, "Slave Kittens HD", "Kittens to post cute HD videos to the internet for dogecoin.")), Yn.level1.upgrades.kittensups.push(new S("More Kittens", "Increase the cute-level with more kittens.", 12e5, 240, "Slave Kittens HD x 3", "Many kittens to post cute HD videos to the internet for dogecoin.")), Yn.level1.upgrades.kittensups.push(new S("High-Speed Interwebs", "Connects the kittens PC to the global Doge Fiber network.", 15e6, 900, "Slave Kittens HD+Doge Fiber", "Many kittens to post cute HD videos to the internet for dogecoin. With doge fiber speed!")), Yn.level1.upgrades.kittensups.push(new S("Intelligence", "Enlighten the kittens.", 155e7, 2400, "Enlightened Kittens", "Enlightened kittens to post cute HD videos to the internet for dogecoin.")), Yn.level1.upgrades.kittensups.push(new S("Stock Kittens", "Teach the kittens how to effectively trade in dogecoin stocks.", 95e8, 12337, "Investment Kittens", "Stock kittens to invest much dogecoin in dogecoin for much dogecoin profit.")), Yn.level1.upgrades.kittensups.push(new S("Catstronaut", "Give the kittens space helmets. It helps them feel safe.", 45e16, 55045045040, "Space-Proof Kittens", "Space Kittens to invest much dogecoin in dogecoin for much dogecoin profit. In space.")), Yn.level1.upgrades.rocketups.push(new S("", "", 0, 109, "Space Rocket", "A rocket to fly to the moon to find more dogecoin.")), Yn.level1.upgrades.rocketups.push(new S("Blue-Flame", "Upgrade the rocket engine with blue-flame rockets.", 45e4, 218, "Blue-Flame Rocket", "A blue flame rocket to fly to the moon to find more dogecoin.")), Yn.level1.upgrades.rocketups.push(new S("Warp Drive", "Upgrade the rocket with a warp drive engine for near-instant travel to the moon.", 8e6, 1201, "Warp Rocket", "A warp drive rocket to travel to the moon to find much dogecoin.")), Yn.level1.upgrades.rocketups.push(new S("Hull Upgrade", "Upgrade the hull of the Space Rocket. Shiny.", 98e6, 5180, "Shiny Rocket", "A shiny space rocket to find much dogecoin in space.")), Yn.level1.upgrades.rocketups.push(new S("Olie Upgrade", "Lets all go to the moon together, okay? Upgrade to cartoon-style doge rocket.", 34e8, 15180, "Olie Rocket", "Awesome rocket for doge to travel to the moon to find much dogecoin.")), Yn.level1.upgrades.rocketups.push(new S("Space Helmets", "Give Pilot-Doge a space helmet to increase time spent in space.", 55e16, 95045045040, "Space-Olie Rocket", "Awesome rocket for space doge to travel to the moon to find dogecoin.")), Yn.level1.upgrades.baseups.push(new S("", "", 0, 5e3, "Moon Base", "A base on the moon to extract much dogecoin.")), Yn.level1.upgrades.baseups.push(new S("Excavator Assistance", "Add a doge-excavator to assist the moon base.", 8e6, 9001, "Moon Base + Excavator", "A base on the moon to extract much dogecoin. With added excavator support.")), Yn.level1.upgrades.baseups.push(new S("More Axes v2", "Add axes to the moon base.", 99e6, 16e3, "Moon Base + Excavator + Axes", "A base on the moon to extract much dogecoin. With added axes & excavator support.")), Yn.level1.upgrades.baseups.push(new S("Doge Star", "Upgrade the moon base to a MOON base.", 42e7, 66e3, "Moon Sized Base", "A base the size of a moon to mine much dogecoin.")), Yn.level1.upgrades.baseups.push(new S("That's Gold Jerry!", "Turn the Doge Star into a Golden Doge Star.", 65e8, 225e3, "Golden Moon Sized Base", "A golden base the size of a moon to mine much more dogecoin.")), Yn.level1.upgrades.baseups.push(new S("Doge Gate", "Place a Doge Gate on the moon for instant dogecoin travel between the moon and earth.", 95e16, 175045045040, "Doge Gate", "A space doge gate to transfer dogecoin through worm holes in space.")), Yn.level1.upgrades.rigups.push(new S("", "", 0, 549215, "Time Machine Mining Rig", "Mines into the future where infinite dogecoins exist.")), Yn.level1.upgrades.rigups.push(new S("Roads?", "Where doge is going, he doesn't need roads. Give the Time Machine Mining Rig flight capabilities.", 88e8, 1598430, "Flying Time Machine Mining Rig", "Mines into the future where infinite dogecoins exist. While flying.")), Yn.level1.upgrades.rigups.push(new S("Bling Bling", "Paints the Time Machine Mining Rig golden. This increases its mining yield, it's science.", 32e9, 10984300, "Golden Flying Time Machine Mining Rig", "Yep.")), Yn.level1.upgrades.rigups.push(new S("TARDogeIS", "Replace the Time Machine Mining Rig with the Time and Relative Doge in Space.", 1337e9, 420420420, "TARDogeIS", "Time and Relative Doge in Space exists everywhere at the same time.")), Yn.level1.upgrades.rigups.push(new S("Swagdis", "Add rockets and a spoiler to the Time and Relative Doge in Space.", 9e14, 4204204204, "Swagdis", "A TARDogeIS with some swag.")), Yn.level1.upgrades.rigups.push(new S("Black Hole", "Extremely hard to control, but unpredictably profitable.", 825e16, 0xeefb39227a0ac, "Black Hole", "Extremely hard to control black hole to unpredictably mine much dogecoin.")), Yn.level1.upgrades.rigups.push(new S("Green Hole", "The black hole wasn't black, but the green one is green.", 425e18, 99204204204204210, "Green Hole", "Extremely hard to control green hole to unpredictably mine much dogecoin.")), Yn.level1.upgrades.extraups.push(new S("Bronze Doge Fortune", "Increase dogecoin income by +5%", 25e3, 1.05)), Yn.level1.upgrades.extraups.push(new S("Silver Doge Fortune", "Increase dogecoin income by +15%", 65e4, 1.15)), Yn.level1.upgrades.extraups.push(new S("Golden Doge Fortune", "Increase dogecoin income by +50%", 6e10, 1.5)), Yn.level1.upgrades.extraups.push(new S("Snoop Fortune", "Increase dogecoin income by 100%", 420420420420, 2)), Yn.level1.upgrades.extraups.push(new S("Sagan of the Universe", "Increase dogecoin income by 125%", 420420420420420, 2.25)), Yn.level1.upgrades.extraups.push(new S("Coinminator", "Do you even mine? Increase dogecoin income by 150%", 925e16, 2.5)), Yn.level1.upgrades.extraups.push(new S("Kirk of the Mountain", "Increase dogecoin income by 300%", 666e18, 4)), Yn.level2.upgrades.clickups.push(new S("Pickaxe", "Regular pickaxe.", 0)), Yn.level2.upgrades.clickups.push(new S("Lollipaxe", "Recent studies have shown that sugar is the most destructive force of nature ever. Whats made out of sugar?", 500)), Yn.level2.upgrades.clickups.push(new S("Cod of Duty", "It's the famous CoD of Duty! Updated pickaxe.", 12e4)), Yn.level2.upgrades.clickups.push(new S("The Dangerous Game", "Do you want to play the dangerous game? This is how you play the dangerous game. Updated pickaxe.", 8e7)), Yn.level2.upgrades.shibeups.push(new S("", "", 0, .25, "Moon Shibe", "Astronaut moon shibes to mine much dogecoin.")), Yn.level2.upgrades.shibeups.push(new S("Suit Up", "Give the Moon Shibe a full space suit to wear. Very safer.", 1800, 1.75, "Suited Moon Shibe", "Astronaut moon shibes to mine much dogecoin (with space suit!).")), Yn.level2.upgrades.shibeups.push(new S("Head-Mounted Pickaxes", "Put Micro-Pickaxes (c) on the helmet of the Moon Shibe.", 12e4, 34, "Upgraded Moon Shibe", "Astronaut moon shibes to mine much dogecoin. With Micro-Pickaxes (c).")), Yn.level2.upgrades.shibeups.push(new S("Gold-Suit Up", "Replace the Moon Shibes space suit with a golden space suit.", 2e7, 300, "Golden Moon Shibe", "Golden moon shibes to mine much dogecoin. Shiny!")), Yn.level2.upgrades.kennelsups.push(new S("", "", 0, 3.5, "Doge Car", "Wow! Much fast doge car with such doge driver. Very Wise. How it mines no one knows.")), Yn.level2.upgrades.kennelsups.push(new S("Shade Miner", "Give the Doge Driver of the Doge Car some cool shades.", 2400, 6.75, "Cool Doge Car", "Wow! Much fast doge car with such COOL doge driver. Very Wise.")), Yn.level2.upgrades.kennelsups.push(new S("Tank", "Replace the Doge Car wheels with tank tracks, for better traction on the moon.", 21e4, 60, "Tank Doge Car", "Much traction doge car with such COOL doge driver. Very Wise.")), Yn.level2.upgrades.kennelsups.push(new S("Roof Miner", "Attack a giant GPU-Pickaxe to the roof of the Doge Car", 25e5, 420, "Tank-Axe Doge Car", "WOW mining tanky doge car mines bestest dogecoin. Very Wise.")), Yn.level2.upgrades.kittensups.push(new S("", "", 0, 13, "Suit Shibe", "Cool spacesuited shibe to find very hidden dogecoin to mine.")), Yn.level2.upgrades.kittensups.push(new S("Gold-Axe Up", "Replace the Suit Shibe regular pickaxe with a golden pickaxe.", 8e4, 44, "Suit Shibe", "Cool spacesuited shibe to find very hidden dogecoin to mine. Now with golden pickaxe.")), Yn.level2.upgrades.kittensups.push(new S("GPU-Axe Up", "Replace the Suit Shibe golden pickaxe with a GPU-pickaxe.", 12e5, 248, "Suit Shibe", "Cool spacesuited shibe to find very hidden dogecoin to mine. Now with GPU-pickaxe.")), Yn.level2.upgrades.kittensups.push(new S("Not Even An Axe", "Replace the Suit Shibe GPU-pickaxe with a rocket. Yep.", 15e6, 910, "Danger Suit Shibe", "Dangerous spacesuited shibe to find very hidden dogecoin to mine. What.")), Yn.level2.upgrades.rocketups.push(new S("", "", 0, 109, "Lander Shibe", "Lander shibe explores other planets and moons in the solar system in pursuit of dogecoin.")), Yn.level2.upgrades.rocketups.push(new S("Candy-Lander Shibe", "Upgrade the Lander Shibe to a Candy-Lander Shibe.", 45e4, 218, "Candy-Lander Shibe", "Candy-Lander shibe explores other planets and moons in the solar system in pursuit of dogecoin.")), Yn.level2.upgrades.rocketups.push(new S("Double-Lander Shibe", "Upgrade the Lander Shibe to a Double-Lander Shibe.", 8e6, 1201, "Double-Lander Shibe", "Double-Lander shibe explores other planets and moons in the solar system in pursuit of dogecoin.")), Yn.level2.upgrades.rocketups.push(new S("Triple-Lander Shibe", "Upgrade the Double-Lander Shibe to a Triple-Lander Shibe.", 98e6, 5180, "Triple-Lander Shibe", "Triple-Lander shibe explores other planets and moons in the solar system in pursuit of dogecoin.")), Yn.level2.upgrades.baseups.push(new S("", "", 0, 5e3, "Mars Base", "A base on Mars to mine ludicrous amounts of dogecoin.")), Yn.level2.upgrades.baseups.push(new S("Double Mars Base", "Double the amount of Mars bases with smaller bases. They are more efficient. ", 8e6, 9001, "Double Mars Bases", "Two bases on Mars to mine ludicrous amounts of dogecoin.")), Yn.level2.upgrades.baseups.push(new S("Quad Mars Base", "Quadruple the amount of Mars bases.", 99e6, 16e3, "Quad Mars Bases", "Four bases on Mars to mine ludicrous amounts of dogecoin.")), Yn.level2.upgrades.baseups.push(new S("Shit-ton of bases", "Get a lot of Mars Bases.", 42e7, 66e3, "Many Mars Bases", "A lot of bases on Mars to mine very silly amounts of dogecoin.")), Yn.level2.upgrades.rigups.push(new S("", "", 0, 549215, "Infinite Dogebility Drive", "A ship that can instantaneously travel to any place in the universe instantly. Result? Many dogecoin.")), Yn.level2.upgrades.rigups.push(new S("Delivery Service", "The Infinite Dogebility Drive ship will now deliver packages across the universe in exchange for more dogecoin.", 88e8, 1598500, "Infinite Delivery Drive", "A ship that can instantaneously deliver packages to any place in the universe instantly. Result? Amazon.")), Yn.level2.upgrades.rigups.push(new S("Hire a crew", "Hire a crew to help Doge travel the stars. Crew consists of 1 friendly Kerbal.", 32e9, 10984300, "Infinite Delivery Crew", "A crew on a ship that can instantaneously deliver packages to any place in the universe instantly.")), Yn.level2.upgrades.rigups.push(new S("Upside Doge", "Silly Doge drives his ship upside down.", 1337e9, 420420420, "Upside Doge Crew", "An upside down ship that can instantaneously deliver packages to any place in the universe instantly.")), Yn.level2.upgrades.extraups.push(new S("Bronze Doge Fortune", "Increase dogecoin income by +5%", 25e3, 1.05)), Yn.level2.upgrades.extraups.push(new S("Silver Doge Fortune", "Increase dogecoin income by +15%", 65e4, 1.15)), Yn.level2.upgrades.extraups.push(new S("Golden Doge Fortune", "Increase dogecoin income by +50%", 6e10, 1.5)), Yn.level3.upgrades.clickups.push(new S("Pickaxe", "Regular pickaxe.", 0)), Yn.level3.upgrades.clickups.push(new S("Green Glowstick", "Apparently the Green Glowstick is cooler than the blue!", 500)), Yn.level3.upgrades.clickups.push(new S("Party Popper", "This pickaxe is guaranteed to pop the party!", 12e4)), Yn.level3.upgrades.clickups.push(new S("F.E.L.P.S.", "The new F.E.L.P.S follows most dogecoin. Get the coins by smashing gamer.", 8e7)), Yn.level3.upgrades.shibeups.push(new S("", "", 0, .25, "Party Shibe", "Cool space rave party shibes to rave much dogecoin.")), Yn.level3.upgrades.shibeups.push(new S("Proper Raving", "Give the Rave Shibe some glowsticks instead of pickaxes.", 1800, 1.75, "Rave Shibe", "Cool space rave party shibes to rave much dogecoin. With glowsticks.")), Yn.level3.upgrades.shibeups.push(new S("Dual-Wielding Ravers", "Additional glowsticks for Rave Shibes.", 12e4, 34, "DW Rave Shibe", "Cool space rave party shibes to rave much dogecoin.")), Yn.level3.upgrades.shibeups.push(new S("Ecstasy Shibe", "Give the shibes ecstasy pills for harder raving. Don't try this at home.", 2e7, 300, "Ecstasy Shibe", "Cool space rave party shibes on E to rave much dogecoin.")), Yn.level3.upgrades.kennelsups.push(new S("", "", 0, 3.5, "CuriousiDoge", "Much curious Doge to explore Mars riches.")), Yn.level3.upgrades.kennelsups.push(new S("Party Mode", "Engage party mode for CuriosiDoge.", 2400, 6.75, "CuriousiDoge [P]", "Much curious Doge to explore Mars riches. Party mode.")), Yn.level3.upgrades.kennelsups.push(new S("Party Hydra", "The Party Hydra upgrade gives CuriosiDoge a lot more head.", 21e4, 60, "CuriousiDoge [PH]", "Much curious Doge to explore Mars riches. Party hydra.")), Yn.level3.upgrades.kennelsups.push(new S("Rocket Mode", "Replace CuriosiDoge wheels with rockets. Much more curiousi-able.", 25e5, 420, "CuriousiDoge [RPH]", "Much curious Doge to explore Mars riches. Rocket party hydra.")), Yn.level3.upgrades.kittensups.push(new S("", "", 0, 13, "DJ Kittenz", "Very music creation. DJ Kittenz specialize in house music.")), Yn.level3.upgrades.kittensups.push(new S("D.I.S.C.O.", "It's disco time.", 8e4, 44, "DJ Kittenz", "Very music creation. DJ Kittenz now specialize in disco music.")), Yn.level3.upgrades.kittensups.push(new S("Swag Upgrade", "Give DJ Kittenz some fresh swag.", 12e5, 248, "DJ Kittenz", "Very music creation. DJ Kittenz now specialize in disco music.")), Yn.level3.upgrades.kittensups.push(new S("Wash-Oops", "Accidentally color DJ Kittenz swag purple in the washer.", 15e6, 910, "DJ Kittenz", "Very music creation. DJ Kittenz now specialize in disco music.")), Yn.level3.upgrades.rocketups.push(new S("", "", 0, 109, "Space Bass", "A super-duper secret prototype space bass in space. Such vibrate.")), Yn.level3.upgrades.rocketups.push(new S("Golden Bass", "Give the Space Bass the Golden Bass upgrade for extra bling.", 45e4, 218, "Space Bass", "A super-duper secret prototype space bass in space. Such vibrate.")), Yn.level3.upgrades.rocketups.push(new S("Space Bass Doge", "It comes wif two sub woofers.", 8e6, 1201, "Space Bass Doge", "It comes wif two sub woofers.")), Yn.level3.upgrades.rocketups.push(new S("Bringa Da Bling", "Give Space Bass Doge some bling to show off!", 98e6, 5180, "Space Bass Doge", "It comes wif two sub woofers.")), Yn.level3.upgrades.baseups.push(new S("", "", 0, 5e3, "Meta Shibe", "Meta shibe plays Dogeminer while you play dogeminer, dude. So meta.")), Yn.level3.upgrades.baseups.push(new S("Toshibe", "Upgrade Meta Shibes PC to a Toshibe model.", 8e6, 9001, "Meta Shibe", "Meta shibe helps you mine while you mine, dawg.")), Yn.level3.upgrades.baseups.push(new S("Meta Raver", "Meta Shibe also likes to rave. Phat glasses upgrade.", 99e6, 16e3, "MetaRave Shibe", "Meta shibe helps you mine while you mine, dawg.")), Yn.level3.upgrades.baseups.push(new S("Blazing Fast", "Meta Shibe wants to blaze it.", 42e7, 66e3, "MetaBlaze Shibe", "Meta shibe helps you mine while you mine, dawg.")), Yn.level3.upgrades.rigups.push(new S("", "", 0, 549215, "Time Travel T-Rex", "Such timetravel. Very scary. Rawr.")), Yn.level3.upgrades.rigups.push(new S("Freakin Lazorz", "Equip the Time Travel T-Rex with freakin lazorz, man.", 88e8, 1598500, "Time Travel Laser T-Rex", "Such timetravel. Very scary. Rawr.")), Yn.level3.upgrades.rigups.push(new S("Rocketrex", "Rocket upgrade for T-Rex. Because faster time travel.", 32e9, 10984300, "Rocket Boosted Time Travel Laser T-Rex", "Such timetravel. Very scary. Rawr.")), Yn.level3.upgrades.rigups.push(new S("More Rocket", "More rocket for Time Travel T-Rex. Pffsssiuuue.", 1337e9, 420420420, "More Rocket Boosted Time Travel Laser T-Rex", "Such timetravel. Very scary. Rawr.")), Yn.level3.upgrades.extraups.push(new S("Bronze Doge Fortune", "Increase dogecoin income by +5%", 25e3, 1.05)), Yn.level3.upgrades.extraups.push(new S("Silver Doge Fortune", "Increase dogecoin income by +15%", 65e4, 1.15)), Yn.level3.upgrades.extraups.push(new S("Golden Doge Fortune", "Increase dogecoin income by +50%", 6e10, 1.5))
			}

			function N() {
				1 == Tn.currentlevel().clickupslevel && (Tn.currentlevel().clickstrength = 2 + .1 * xe()), 2 == Tn.currentlevel().clickupslevel && (Tn.currentlevel().clickstrength = 100 + .105 * xe()), 3 == Tn.currentlevel().clickupslevel && (Tn.currentlevel().clickstrength = 5e4 + .109 * xe()), 4 == Tn.currentlevel().clickupslevel && (Tn.currentlevel().clickstrength = 9e7 + .12 * xe()), 5 == Tn.currentlevel().clickupslevel && (Tn.currentlevel().clickstrength = 9e8 + .13 * xe()), 6 == Tn.currentlevel().clickupslevel && (Tn.currentlevel().clickstrength = 9e9 + .14 * xe())
			}

			function C() {
				Tn.currentlevel().shibestrength = Yn.currentlevel().upgrades.shibeups[Tn.currentlevel().shibeupslevel].strength, Ne(), U(), Pt()
			}

			function O() {
				Tn.currentlevel().kennelstrength = Yn.currentlevel().upgrades.kennelsups[Tn.currentlevel().kennelsupslevel].strength, Ne(), U(), Pt()
			}

			function P() {
				Tn.currentlevel().kittenstrength = Yn.currentlevel().upgrades.kittensups[Tn.currentlevel().kittensupslevel].strength, Ne(), U(), Pt()
			}

			function H() {
				Tn.currentlevel().rocketstrength = Yn.currentlevel().upgrades.rocketups[Tn.currentlevel().rocketupslevel].strength, Ne(), U(), Pt()
			}

			function I() {
				Tn.currentlevel().basestrength = Yn.currentlevel().upgrades.baseups[Tn.currentlevel().baseupslevel].strength, Ne(), U(), Pt()
			}

			function j() {
				Tn.currentlevel().rigstrength = Yn.currentlevel().upgrades.rigups[Tn.currentlevel().rigupslevel].strength, Ne(), U(), Pt()
			}

			function A() {
				Tn.currentlevel().extrastrength = Yn.currentlevel().upgrades.extraups[Tn.currentlevel().extraupslevel - 1].strength, Ne(), Pt()
			}

			function R() {
				var e = "";
				Yn.currentlevel().upgrades.clickups.length > Tn.currentlevel().clickupslevel + 1 && (e += '<div id="clickupgradediv"class="ui-state-highlight ui-corner-all upgrade desc" style="margin-top: 5px; padding: 5px 5px;">', e += '<img src="img/empty.png" class="level' + Tn.level + " level" + Tn.level + "-clickupgrade" + Tn.currentlevel().clickupslevel + '" style="border-image: none;"align="left"/>', e += '<div style="width:410px;"><strong>' + Yn.currentlevel().upgrades.clickups[Tn.currentlevel().clickupslevel + 1].name + " - Cost: " + Ke(Yn.currentlevel().upgrades.clickups[Tn.currentlevel().clickupslevel + 1].cost) + " " + Yn.currentlevel().modifier_small + ' doge.</strong><br/><span class="desc">' + Yn.currentlevel().upgrades.clickups[Tn.currentlevel().clickupslevel + 1].desc + '</span></div><div style="position:absolute;top:20px;right:5px;"><button id="upgradeclicks">Upgrade!</button></div>', e += "</div>"), Yn.currentlevel().upgrades.shibeups.length > Tn.currentlevel().shibeupslevel + 1 && (e += '<div id="shibeupgradediv"class="ui-state-highlight ui-corner-all upgrade desc" style="margin-top: 5px; padding: 5px 5px">', e += '<img src="img/empty.png" class="level' + Tn.level + " level" + Tn.level + "-shibeupgrade" + Tn.currentlevel().shibeupslevel + '"  align="left" />', e += '<div style="width:410px;"><strong>' + Yn.currentlevel().upgrades.shibeups[Tn.currentlevel().shibeupslevel + 1].name + " - Cost: " + Ke(Yn.currentlevel().upgrades.shibeups[Tn.currentlevel().shibeupslevel + 1].cost) + " " + Yn.currentlevel().modifier_small + ' doge.</strong><br/><span class="desc">' + Yn.currentlevel().upgrades.shibeups[Tn.currentlevel().shibeupslevel + 1].desc + '</span></div><div style="position:absolute;top:20px;right:5px;"><button id="upgradeshibes">Upgrade!</button></div>', e += "</div>"), Yn.currentlevel().upgrades.kennelsups.length > Tn.currentlevel().kennelsupslevel + 1 && (e += '<div id="kennelsupgradediv" class="ui-state-highlight ui-corner-all upgrade desc" style="margin-top: 5px; padding: 5px 5px">', e += '<img src="img/empty.png" class="level' + Tn.level + " level" + Tn.level + "-kennelsupgrade" + Tn.currentlevel().kennelsupslevel + '" align="left" />', e += '<div style="width:410px;"><strong>' + Yn.currentlevel().upgrades.kennelsups[Tn.currentlevel().kennelsupslevel + 1].name + " - Cost: " + Ke(Yn.currentlevel().upgrades.kennelsups[Tn.currentlevel().kennelsupslevel + 1].cost) + " " + Yn.currentlevel().modifier_small + ' doge.</strong><br/><span class="desc">' + Yn.currentlevel().upgrades.kennelsups[Tn.currentlevel().kennelsupslevel + 1].desc + '</span></div><div style="position:absolute;top:20px;right:5px;"><button id="upgradekennels">Upgrade!</button></div>', e += "</div>"), Yn.currentlevel().upgrades.kittensups.length > Tn.currentlevel().kittensupslevel + 1 && (e += '<div id="kittensupgradediv" class="ui-state-highlight ui-corner-all upgrade desc" style="margin-top: 5px; padding: 5px 5px">', e += '<img src="img/empty.png" class="level' + Tn.level + " level" + Tn.level + "-kittensupgrade" + Tn.currentlevel().kittensupslevel + '" align="left" />', e += '<div style="width:410px;"><strong>' + Yn.currentlevel().upgrades.kittensups[Tn.currentlevel().kittensupslevel + 1].name + " - Cost: " + Ke(Yn.currentlevel().upgrades.kittensups[Tn.currentlevel().kittensupslevel + 1].cost) + " " + Yn.currentlevel().modifier_small + ' doge.</strong><br/><span class="desc">' + Yn.currentlevel().upgrades.kittensups[Tn.currentlevel().kittensupslevel + 1].desc + '</span></div><div style="position:absolute;top:20px;right:5px;"><button id="upgradekittens">Upgrade!</button></div>', e += "</div>"), Yn.currentlevel().upgrades.rocketups.length > Tn.currentlevel().rocketupslevel + 1 && (e += '<div id="rocketupgradediv" class="ui-state-highlight ui-corner-all upgrade desc" style="margin-top: 5px; padding: 5px 5px">', e += '<img src="img/empty.png" class="level' + Tn.level + " level" + Tn.level + "-rocketupgrade" + Tn.currentlevel().rocketupslevel + '" align="left" />', e += '<div style="width:410px;"><strong>' + Yn.currentlevel().upgrades.rocketups[Tn.currentlevel().rocketupslevel + 1].name + " - Cost: " + Ke(Yn.currentlevel().upgrades.rocketups[Tn.currentlevel().rocketupslevel + 1].cost) + " " + Yn.currentlevel().modifier_small + ' doge.</strong><br/><span class="desc">' + Yn.currentlevel().upgrades.rocketups[Tn.currentlevel().rocketupslevel + 1].desc + '</span></div><div style="position:absolute;top:20px;right:5px;"><button id="upgraderockets">Upgrade!</button></div>', e += "</div>"), Yn.currentlevel().upgrades.baseups.length > Tn.currentlevel().baseupslevel + 1 && (e += '<div id="baseupgradediv" class="ui-state-highlight ui-corner-all upgrade desc" style="margin-top: 5px; padding: 5px 5px">', e += '<img src="img/empty.png" class="level' + Tn.level + " level" + Tn.level + "-baseupgrade" + Tn.currentlevel().baseupslevel + '" align="left" />', e += '<div style="width:410px;"><strong>' + Yn.currentlevel().upgrades.baseups[Tn.currentlevel().baseupslevel + 1].name + " - Cost: " + Ke(Yn.currentlevel().upgrades.baseups[Tn.currentlevel().baseupslevel + 1].cost) + " " + Yn.currentlevel().modifier_small + ' doge.</strong><br/><span class="desc">' + Yn.currentlevel().upgrades.baseups[Tn.currentlevel().baseupslevel + 1].desc + '</span></div><div style="position:absolute;top:20px;right:5px;"><button id="upgradebases">Upgrade!</button></div>', e += "</div>"), Yn.currentlevel().upgrades.rigups.length > Tn.currentlevel().rigupslevel + 1 && (e += '<div id="rigupgradediv" class="ui-state-highlight ui-corner-all upgrade desc" style="margin-top: 5px; padding: 5px 5px">', e += '<img src="img/empty.png" class="level' + Tn.level + " level" + Tn.level + "-rigupgrade" + Tn.currentlevel().rigupslevel + '" align="left" />', e += '<div style="width:410px;"><strong>' + Yn.currentlevel().upgrades.rigups[Tn.currentlevel().rigupslevel + 1].name + " - Cost: " + Ke(Yn.currentlevel().upgrades.rigups[Tn.currentlevel().rigupslevel + 1].cost) + " " + Yn.currentlevel().modifier_small + ' doge.</strong><br/><span class="desc">' + Yn.currentlevel().upgrades.rigups[Tn.currentlevel().rigupslevel + 1].desc + '</span></div><div style="position:absolute;top:20px;right:5px;"><button id="upgraderigs">Upgrade!</button></div>', e += "</div>"), Yn.currentlevel().upgrades.extraups.length > Tn.currentlevel().extraupslevel && (e += '<div id="extraupgradediv" class="ui-state-highlight ui-corner-all upgrade desc" style="margin-top: 5px; padding: 5px 5px">', e += '<img src="img/empty.png" class="level' + Tn.level + " level" + Tn.level + "-extraupgrade" + Tn.currentlevel().extraupslevel + '" align="left" />', e += '<div style="width:410px;"><strong>' + Yn.currentlevel().upgrades.extraups[Tn.currentlevel().extraupslevel].name + " - Cost: " + Ke(Yn.currentlevel().upgrades.extraups[Tn.currentlevel().extraupslevel].cost) + " " + Yn.currentlevel().modifier_small + ' doge.</strong><br/><span class="desc">' + Yn.currentlevel().upgrades.extraups[Tn.currentlevel().extraupslevel].desc + '</span></div><div style="position:absolute;top:20px;right:5px;"><button id="upgradeextras">Upgrade!</button></div>', e += "</div>"), $("#upgradewrapper").html(e), $("#upgradeclicks").button({
					icons: {
						primary: "ui-icon-circle-arrow-n"
					}
				}), $("#upgradeshibes").button({
					icons: {
						primary: "ui-icon-circle-arrow-n"
					}
				}), $("#upgradekennels").button({
					icons: {
						primary: "ui-icon-circle-arrow-n"
					}
				}), $("#upgradekittens").button({
					icons: {
						primary: "ui-icon-circle-arrow-n"
					}
				}), $("#upgraderockets").button({
					icons: {
						primary: "ui-icon-circle-arrow-n"
					}
				}), $("#upgradebases").button({
					icons: {
						primary: "ui-icon-circle-arrow-n"
					}
				}), $("#upgraderigs").button({
					icons: {
						primary: "ui-icon-circle-arrow-n"
					}
				}), $("#upgradeextras").button({
					icons: {
						primary: "ui-icon-circle-arrow-n"
					}
				}), $("#upgradeclicks").attr("disabled", !0).addClass("ui-state-disabled"), $("#upgradeshibes").attr("disabled", !0).addClass("ui-state-disabled"), $("#upgradekennels").attr("disabled", !0).addClass("ui-state-disabled"), $("#upgradekittens").attr("disabled", !0).addClass("ui-state-disabled"), $("#upgraderockets").attr("disabled", !0).addClass("ui-state-disabled"), $("#upgradebases").attr("disabled", !0).addClass("ui-state-disabled"), $("#upgraderigs").attr("disabled", !0).addClass("ui-state-disabled"), $("#upgradeextras").attr("disabled", !0).addClass("ui-state-disabled"), $("#clickupgradediv").attr("disabled", !0).addClass("ui-state-disabled"), $("#shibeupgradediv").attr("disabled", !0).addClass("ui-state-disabled"), $("#kennelsupgradediv").attr("disabled", !0).addClass("ui-state-disabled"), $("#kittensupgradediv").attr("disabled", !0).addClass("ui-state-disabled"), $("#rocketupgradediv").attr("disabled", !0).addClass("ui-state-disabled"), $("#baseupgradediv").attr("disabled", !0).addClass("ui-state-disabled"), $("#rigupgradediv").attr("disabled", !0).addClass("ui-state-disabled"), $("#extraupgradediv").attr("disabled", !0).addClass("ui-state-disabled"), Yn.upgradesloaded || ($("#upgradewrapper").on("click", "#upgradeclicks", function() {
					Tn.currentlevel().coins >= Yn.currentlevel().upgrades.clickups[Tn.currentlevel().clickupslevel + 1].cost && (hideIt("blind", "#clickupgradediv", 200), Tn.currentlevel().coins = Tn.currentlevel().coins - Yn.currentlevel().upgrades.clickups[Tn.currentlevel().clickupslevel + 1].cost, Tn.currentlevel().clickupslevel++, Se(), N(), Je(), W("flash"), V(), nt(), Ot())
				}), $("#upgradewrapper").on("click", "#upgradeshibes", function() {
					Tn.currentlevel().coins >= Yn.currentlevel().upgrades.shibeups[Tn.currentlevel().shibeupslevel + 1].cost && (hideIt("blind", "#shibeupgradediv", 200), Tn.currentlevel().coins = Tn.currentlevel().coins - Yn.currentlevel().upgrades.shibeups[Tn.currentlevel().shibeupslevel + 1].cost, Tn.currentlevel().shibeupslevel++, Se(), C(), N(), ke(), F("#shibesdiv", "tada", "shibes"), V(), nt())
				}), $("#upgradewrapper").on("click", "#upgradekennels", function() {
					Tn.currentlevel().coins >= Yn.currentlevel().upgrades.kennelsups[Tn.currentlevel().kennelsupslevel + 1].cost && (hideIt("blind", "#kennelsupgradediv", 200), Tn.currentlevel().coins = Tn.currentlevel().coins - Yn.currentlevel().upgrades.kennelsups[Tn.currentlevel().kennelsupslevel + 1].cost, Tn.currentlevel().kennelsupslevel++, Se(), O(), N(), V(), we(), F("#kennelsdiv", "tada", "kennels"), nt())
				}), $("#upgradewrapper").on("click", "#upgradekittens", function() {
					Tn.currentlevel().coins >= Yn.currentlevel().upgrades.kittensups[Tn.currentlevel().kittensupslevel + 1].cost && (hideIt("blind", "#kittensupgradediv", 200), Tn.currentlevel().coins = Tn.currentlevel().coins - Yn.currentlevel().upgrades.kittensups[Tn.currentlevel().kittensupslevel + 1].cost, Tn.currentlevel().kittensupslevel++, Se(), P(), N(), V(), De(), F("#kittensdiv", "tada", "kittens"), nt())
				}), $("#upgradewrapper").on("click", "#upgraderockets", function() {
					Tn.currentlevel().coins >= Yn.currentlevel().upgrades.rocketups[Tn.currentlevel().rocketupslevel + 1].cost && (hideIt("blind", "#rocketupgradediv", 200), Tn.currentlevel().coins = Tn.currentlevel().coins - Yn.currentlevel().upgrades.rocketups[Tn.currentlevel().rocketupslevel + 1].cost, Tn.currentlevel().rocketupslevel++, Se(), H(), N(), V(), Le(), nt())
				}), $("#upgradewrapper").on("click", "#upgradebases", function() {
					Tn.currentlevel().coins >= Yn.currentlevel().upgrades.baseups[Tn.currentlevel().baseupslevel + 1].cost && (hideIt("blind", "#baseupgradediv", 200), Tn.currentlevel().coins = Tn.currentlevel().coins - Yn.currentlevel().upgrades.baseups[Tn.currentlevel().baseupslevel + 1].cost, Tn.currentlevel().baseupslevel++, Se(), I(), N(), V(), Te(), F("#basesdiv", "tada", "bases"), nt())
				}), $("#upgradewrapper").on("click", "#upgraderigs", function() {
					Tn.currentlevel().coins >= Yn.currentlevel().upgrades.rigups[Tn.currentlevel().rigupslevel + 1].cost && (hideIt("blind", "#rigupgradediv", 200), Tn.currentlevel().coins = Tn.currentlevel().coins - Yn.currentlevel().upgrades.rigups[Tn.currentlevel().rigupslevel + 1].cost, Tn.currentlevel().rigupslevel++, Se(), j(), N(), V(), Ee(), F("#rigsdiv", "tada", "rigs"), nt())
				}), $("#upgradewrapper").on("click", "#upgradeextras", function() {
					hideIt("blind", "#extraupgradediv", 200), Tn.currentlevel().coins >= Yn.currentlevel().upgrades.extraups[Tn.currentlevel().extraupslevel].cost && (Tn.currentlevel().coins = Tn.currentlevel().coins - Yn.currentlevel().upgrades.extraups[Tn.currentlevel().extraupslevel].cost, Tn.currentlevel().extraupslevel++, Se(), A(), N(), V(), Ot(), nt())
				}), Yn.upgradesloaded = !0)
			}

			function V() {
				setTimeout(function() {
					R()
				}, 200)
			}

			function F(e, t, n) {
				Yn.helperanimations[n] = !1, requestAnimationFrame(function() {
					$(e).children().addClass("animated " + t).one(On, function() {
						Yn.helperanimations[n] = !0
					})
				})
			}

			function W(e) {
				requestAnimationFrame(function() {
					$("#miner").addClass("animated " + e)
				})
			}

			function U() {
				requestAnimationFrame(function() {
					$("#shibesimage").attr("class", "level" + Tn.level + " level" + Tn.level + "-shibe" + Tn.currentlevel().shibeupslevel), $("#shibesname").html(Yn.currentlevel().upgrades.shibeups[Tn.currentlevel().shibeupslevel].shoptitle), $("#shibesdesc").html(Yn.currentlevel().upgrades.shibeups[Tn.currentlevel().shibeupslevel].shopdesc), $("#kennelsimage").attr("class", "level" + Tn.level + " level" + Tn.level + "-kennels1" + Tn.currentlevel().kennelsupslevel), $("#kennelsname").html(Yn.currentlevel().upgrades.kennelsups[Tn.currentlevel().kennelsupslevel].shoptitle), $("#kennelsdesc").html(Yn.currentlevel().upgrades.kennelsups[Tn.currentlevel().kennelsupslevel].shopdesc), $("#kittensimage").attr("class", "level" + Tn.level + " level" + Tn.level + "-kitten1" + Tn.currentlevel().kittensupslevel), $("#kittensname").html(Yn.currentlevel().upgrades.kittensups[Tn.currentlevel().kittensupslevel].shoptitle), $("#kittensdesc").html(Yn.currentlevel().upgrades.kittensups[Tn.currentlevel().kittensupslevel].shopdesc), $("#rocketsimage").attr("class", "level" + Tn.level + " level" + Tn.level + "-rocket1" + Tn.currentlevel().rocketupslevel), $("#rocketsname").html(Yn.currentlevel().upgrades.rocketups[Tn.currentlevel().rocketupslevel].shoptitle), $("#rocketsdesc").html(Yn.currentlevel().upgrades.rocketups[Tn.currentlevel().rocketupslevel].shopdesc), $("#basesimage").attr("class", "level" + Tn.level + " level" + Tn.level + "-base1" + Tn.currentlevel().baseupslevel), $("#basesname").html(Yn.currentlevel().upgrades.baseups[Tn.currentlevel().baseupslevel].shoptitle), $("#basesdesc").html(Yn.currentlevel().upgrades.baseups[Tn.currentlevel().baseupslevel].shopdesc), $("#rigsimage").attr("class", "level" + Tn.level + " level" + Tn.level + "-rig1" + Tn.currentlevel().rigupslevel), $("#rigsname").html(Yn.currentlevel().upgrades.rigups[Tn.currentlevel().rigupslevel].shoptitle), $("#rigsdesc").html(Yn.currentlevel().upgrades.rigups[Tn.currentlevel().rigupslevel].shopdesc)
				})
			}

			function G(e, t) {
				requestAnimationFrame(function() {
					$(e).addClass(t).one(On, function() {
						requestAnimationFrame(function() {
							$(e).removeClass(t)
						})
					})
				})
			}

			function B() {
				Tn.sounds ? ($("#muteicon").removeClass("ui-icon-volume-on"), $("#muteicon").addClass("ui-icon-volume-off"), Tn.sounds = !1, soundManager.mute()) : ($("#muteicon").removeClass("ui-icon-volume-off"), $("#muteicon").addClass("ui-icon-volume-on"), It(), Tn.sounds = !0, soundManager.unmute()), $("#sounds").prop("checked", Tn.sounds)
			}

			function z() {
				$("#shibesdiv").html(""), $("#kennelsdiv").html(""), $("#kittensdiv").html(""), $("#rocketsdiv").html(""), $("#basesdiv").html(""), $("#rigsdiv").html("")
			}

			function J(e) {
				e.html("")
			}

			function K(e, t, n, r) {
				requestAnimationFrame(function() {
					e.append('<div id="' + t + '" style="' + n + '" class="' + r + '"></div>'), $("#" + t).one(On, function() {
						$(this).removeClass(Pn)
					})
				})
			}

			function q(e, t) {
				if (void 0 !== e || Tn.currentlevel().shibes < Yn.helpersettings.max_visible_shibes) {
					var r = "animated bounceIn",
						o = void 0 !== t ? t : $("#shibesdiv"),
						a = Math.floor(20 * n() + (void 0 !== e ? e : Tn.currentlevel().shibes - 1) % 10 * 21),
						i = Math.floor(20 * n() + 21 * Math.floor((void 0 !== e ? e : Tn.currentlevel().shibes - 1) / 10)),
						s = "shiben" + (void 0 !== e ? e : Tn.currentlevel().shibes - 1),
						l = "level" + Tn.level + " level" + Tn.level + "-shibe" + Tn.currentlevel().shibeupslevel + " " + r,
						u = "left:" + a + "px;top:" + i + "px;position:absolute;width:50px;height:50px;";
					Yn.helperanimations.dontanimatethis = "#" + s, K(o, s, u, l)
				} else {
					var d = void 0 !== t ? t : $("#shibesdiv"),
						c = d.children(),
						p = $(c[Math.floor(9 * Math.random() + (Yn.helpersettings.max_visible_shibes - 10))]),
						m = p.attr("id"),
						h = parseFloat(m.slice(m.search(/\d/)));
					p.remove(), q(h, t)
				}
			}

			function Q(e, t) {
				if (void 0 !== e || Tn.currentlevel().kennels < Yn.helpersettings.max_visible_kennels) {
					var r = "animated bounceIn",
						o = void 0 !== t ? t : $("#kennelsdiv"),
						a = Math.floor(20 * n() + (void 0 !== e ? e : Tn.currentlevel().kennels - 1) % 3 * 61),
						i = Math.floor(20 * n() + 31 * Math.floor((void 0 !== e ? e : Tn.currentlevel().kennels - 1) / 3)) + 90,
						s = "kenneln" + (void 0 !== e ? e : Tn.currentlevel().kennels - 1),
						l = "level" + Tn.level + " level" + Tn.level + "-kennels1" + Tn.currentlevel().kennelsupslevel + " " + r,
						u = "left:" + a + "px;top:" + i + "px;position:absolute;width:100px;height:90px;";
					Yn.helperanimations.dontanimatethis = "#" + s, K(o, s, u, l)
				}
			}

			function X(e, t) {
				if (void 0 !== e || Tn.currentlevel().kittens < Yn.helpersettings.max_visible_kittens) {
					var r = "animated bounceIn",
						o = void 0 !== t ? t : $("#kittensdiv"),
						a = Math.floor(20 * n() + (void 0 !== e ? e : Tn.currentlevel().kittens - 1) % 2 * 120),
						i = Math.floor(20 * n() + 61 * Math.floor((void 0 !== e ? e : Tn.currentlevel().kittens - 1) / 2)) + 275,
						s = "kittenn" + (void 0 !== e ? e : Tn.currentlevel().kittens - 1),
						l = "level" + Tn.level + " level" + Tn.level + "-kitten1" + Tn.currentlevel().kittensupslevel + " " + r,
						u = "left:" + a + "px;top:" + i + "px;position:absolute;width:110px;height:70px;";
					Yn.helperanimations.dontanimatethis = "#" + s, K(o, s, u, l)
				}
			}

			function Z(e, t) {
				if (void 0 !== e || Tn.currentlevel().rockets < Yn.helpersettings.max_visible_rockets) {
					var r = "animated bounceIn",
						o = void 0 !== t ? t : $("#rocketsdiv"),
						a = Math.floor(20 * n() + (void 0 !== e ? e : Tn.currentlevel().rockets - 1) % 5 * 45),
						i = Math.floor(20 * n() + 31 * Math.floor((void 0 !== e ? e : Tn.currentlevel().rockets - 1) / 5)) + 100,
						s = "rocketn" + (void 0 !== e ? e : Tn.currentlevel().rockets - 1),
						l = "level" + Tn.level + " level" + Tn.level + "-rocket1" + Tn.currentlevel().rocketupslevel + " " + r,
						u = "left:" + a + "px;top:" + i + "px;position:absolute;width:80px;height:140px;";
					Yn.helperanimations.dontanimatethis = "#" + s, K(o, s, u, l)
				}
			}

			function ee(e, t) {
				if (void 0 !== e || Tn.currentlevel().bases < Yn.helpersettings.max_visible_bases) {
					var r = "animated bounceIn",
						o = void 0 !== t ? t : $("#basesdiv"),
						a = Math.floor(20 * n() + (void 0 !== e ? e : Tn.currentlevel().bases - 1) % 2 * 130),
						i = Math.floor(20 * n() + 51 * Math.floor((void 0 !== e ? e : Tn.currentlevel().bases - 1) / 2)) + 300,
						s = "basen" + (void 0 !== e ? e : Tn.currentlevel().bases - 1),
						l = "level" + Tn.level + " level" + Tn.level + "-base1" + Tn.currentlevel().baseupslevel + " " + r,
						u = "left:" + a + "px;top:" + i + "px;position:absolute;width:140px;height:92px;";
					Yn.helperanimations.dontanimatethis = "#" + s, K(o, s, u, l)
				}
			}

			function te(e, t) {
				if (void 0 !== e || Tn.currentlevel().rigs < Yn.helpersettings.max_visible_rigs) {
					var r = "animated bounceIn",
						o = void 0 !== t ? t : $("#rigsdiv"),
						a = Math.floor(20 * n() + (void 0 !== e ? e : Tn.currentlevel().rigs - 1) % 1 * 200),
						i = Math.floor(20 * n() + 70 * Math.floor((void 0 !== e ? e : Tn.currentlevel().rigs - 1) / 1)) + 300,
						s = "rign" + (void 0 !== e ? e : Tn.currentlevel().rigs - 1),
						l = "level" + Tn.level + " level" + Tn.level + "-rig1" + Tn.currentlevel().rigupslevel + " " + r,
						u = "left:" + a + "px;top:" + i + "px;position:absolute;height:89px;width:150px;";
					Yn.helperanimations.dontanimatethis = "#" + s, K(o, s, u, l)
				}
			}

			function ne() {
				var e = $("#shibesdiv");
				J(e);
				for (var t = 0; t < Tn.currentlevel().shibes && t < Yn.helpersettings.max_visible_shibes - 1; t++) q(t, e)
			}

			function re() {
				var e = $("#kennelsdiv");
				J(e);
				for (var t = 0; t < Tn.currentlevel().kennels && t < Yn.helpersettings.max_visible_kennels - 1; t++) Q(t, e)
			}

			function oe() {
				var e = $("#kittensdiv");
				J(e);
				for (var t = 0; t < Tn.currentlevel().kittens && t < Yn.helpersettings.max_visible_kittens - 1; t++) X(t, e)
			}

			function ae() {
				var e = $("#rocketsdiv");
				J(e);
				for (var t = 0; t < Tn.currentlevel().rockets && t < Yn.helpersettings.max_visible_rockets - 1; t++) Z(t, e)
			}

			function ie() {
				var e = $("#basesdiv");
				J(e);
				for (var t = 0; t < Tn.currentlevel().bases && t < Yn.helpersettings.max_visible_bases - 1; t++) ee(t, e)
			}

			function se() {
				var e = $("#rigsdiv");
				J(e);
				for (var t = 0; t < Tn.currentlevel().rigs && t < Yn.helpersettings.max_visible_rigs - 1; t++) te(t, e)
			}

			function le() {
				$("#shibecost").html("Price: " + Ke(Tn.currentlevel().shibecost) + " " + Yn.currentlevel().modifier_small + " doge."), $("#kennelcost").html("Price: " + Ke(Tn.currentlevel().kennelcost) + " " + Yn.currentlevel().modifier_small + " doge."), $("#kittencost").html("Price: " + Ke(Tn.currentlevel().kittencost) + " " + Yn.currentlevel().modifier_small + " doge."), $("#rocketcost").html("Price: " + Ke(Tn.currentlevel().rocketcost) + " " + Yn.currentlevel().modifier_small + " doge."), $("#basecost").html("Price: " + Ke(Tn.currentlevel().basecost) + " " + Yn.currentlevel().modifier_small + " doge."), $("#rigcost").html("Price: " + Ke(Tn.currentlevel().rigcost) + " " + Yn.currentlevel().modifier_small + " doge."), ue()
			}

			function ue() {
				$("#shibesdiv").prop("title", "Dogecoins per sec: " + qe(Tn.currentlevel().shibes * Tn.currentlevel().shibestrength * Yn.bonuspercent, 1) + Yn.currentlevel().modifier_small), $("#kennelsdiv").prop("title", "Dogecoins per sec: " + qe(Tn.currentlevel().kennels * Tn.currentlevel().kennelstrength * Yn.bonuspercent, 1) + Yn.currentlevel().modifier_small), $("#kittensdiv").prop("title", "Dogecoins per sec: " + qe(Tn.currentlevel().kittens * Tn.currentlevel().kittenstrength * Yn.bonuspercent, 1) + Yn.currentlevel().modifier_small), $("#rocketsdiv").prop("title", "Dogecoins per sec: " + qe(Tn.currentlevel().rockets * Tn.currentlevel().rocketstrength * Yn.bonuspercent, 1) + Yn.currentlevel().modifier_small), $("#basesdiv").prop("title", "Dogecoins per sec: " + qe(Tn.currentlevel().bases * Tn.currentlevel().basestrength * Yn.bonuspercent, 1) + Yn.currentlevel().modifier_small), $("#rigsdiv").prop("title", "Dogecoins per sec: " + qe(Tn.currentlevel().rigs * Tn.currentlevel().rigstrength * Yn.bonuspercent, 1) + Yn.currentlevel().modifier_small)
			}

			function de() {
				if (Yn.started && !Nn) {
					null === Yn.lasttime && (Yn.lasttime = new Date);
					var e = new Date,
						t = e.getTime() - Yn.lasttime.getTime();
					Tn.timeplayed += t / 1e3, Yn.lasttime = new Date;
					var n = Math.floor(Tn.timeplayed % 60),
						r = Math.floor(Tn.timeplayed / 60 % 60),
						o = Math.floor(Tn.timeplayed / 3600);
					n = pe(n, 2), r = pe(r, 2), o = pe(o, 2), yn.html(o + ":" + r + ":" + n)
				}
				Tn.timeplayed > 10 && !Hn && (qt(), Hn = !0)
			}

			function ce(e) {
				var t = Math.floor(e % 60),
					n = Math.floor(e / 60 % 60),
					r = Math.floor(e / 3600);
				return t = pe(t, 2), n = pe(n, 2), r = pe(r, 2), r + ":" + n + ":" + t
			}

			function pe(e, t) {
				return e = e.toString(), e.length < t ? pe("0" + e, t) : e
			}

			function me() {
				if (3 == $("#tabs").tabs("option", "active")) {
					Tn.maxlevel >= 2 && $("#level3tab").find("a").html("MARS"), $(".stats-achis").html(dr.length + " / " + ur.length), $(".stats-timeplayed").html(ce(Tn.timeplayed)), $(".stats-bonuscoins").html(Tn.bonuscoins), $(".stats-clicks").html(Tn.clicks);
					var e = $("#stats1"),
						t = $("#stats2"),
						n = $("#stats3");
					e.find(".stats-coins").html("Dogecoins mined: <strong>" + qe(Tn.level1.alltimecoins, 0) + "</strong>"), e.find(".stats-shibes").html(Yn.level1.upgrades.shibeups[Tn.level1.shibeupslevel].shoptitle + "s: <strong>" + Ke(Tn.level1.shibes) + "</strong>"), e.find(".stats-kennels").html(Yn.level1.upgrades.kennelsups[Tn.level1.kennelsupslevel].shoptitle + ": <strong>" + Ke(Tn.level1.kennels) + "</strong>"), e.find(".stats-kittens").html(Yn.level1.upgrades.kittensups[Tn.level1.kittensupslevel].shoptitle + ": <strong>" + Ke(Tn.level1.kittens) + "</strong>"), e.find(".stats-rockets").html(Yn.level1.upgrades.rocketups[Tn.level1.rocketupslevel].shoptitle + "s: <strong>" + Ke(Tn.level1.rockets) + "</strong>"), e.find(".stats-bases").html(Yn.level1.upgrades.baseups[Tn.level1.baseupslevel].shoptitle + "s: <strong>" + Ke(Tn.level1.bases) + "</strong>"), e.find(".stats-rigs").html(Yn.level1.upgrades.rigups[Tn.level1.rigupslevel].shoptitle + "s: <strong>" + Ke(Tn.level1.rigs) + "</strong>"), e.find(".stats-upgrades").html("Upgrades bought: <strong>" + (Tn.level1.clickupslevel + Tn.level1.shibeupslevel + Tn.level1.kennelsupslevel + Tn.level1.kittensupslevel + Tn.level1.rocketupslevel + Tn.level1.baseupslevel + Tn.level1.rigupslevel + Tn.level1.extraupslevel) + " / " + (Yn.level1.upgrades.clickups.length + Yn.level1.upgrades.shibeups.length + Yn.level1.upgrades.kennelsups.length + Yn.level1.upgrades.kittensups.length + Yn.level1.upgrades.rocketups.length + Yn.level1.upgrades.baseups.length + Yn.level1.upgrades.rigups.length + Yn.level1.upgrades.extraups.length - 7) + "</strong>"), Tn.maxlevel > 1 && (t.find(".stats-coins").html("Dogecoins mined: <strong>" + qe(Tn.level2.alltimecoins, 0) + "</strong>"), t.find(".stats-shibes").html(Yn.level2.upgrades.shibeups[Tn.level2.shibeupslevel].shoptitle + "s: <strong>" + Ke(Tn.level2.shibes) + "</strong>"), t.find(".stats-kennels").html(Yn.level2.upgrades.kennelsups[Tn.level2.kennelsupslevel].shoptitle + ": <strong>" + Ke(Tn.level2.kennels) + "</strong>"), t.find(".stats-kittens").html(Yn.level2.upgrades.kittensups[Tn.level2.kittensupslevel].shoptitle + ": <strong>" + Ke(Tn.level2.kittens) + "</strong>"), t.find(".stats-rockets").html(Yn.level2.upgrades.rocketups[Tn.level2.rocketupslevel].shoptitle + "s: <strong>" + Ke(Tn.level2.rockets) + "</strong>"), t.find(".stats-bases").html(Yn.level2.upgrades.baseups[Tn.level2.baseupslevel].shoptitle + "s: <strong>" + Ke(Tn.level2.bases) + "</strong>"), t.find(".stats-rigs").html(Yn.level2.upgrades.rigups[Tn.level2.rigupslevel].shoptitle + "s: <strong>" + Ke(Tn.level2.rigs) + "</strong>"), t.find(".stats-upgrades").html("Upgrades bought: <strong>" + (Tn.level2.clickupslevel + Tn.level2.shibeupslevel + Tn.level2.kennelsupslevel + Tn.level2.kittensupslevel + Tn.level2.rocketupslevel + Tn.level2.baseupslevel + Tn.level2.rigupslevel + Tn.level2.extraupslevel) + " / " + (Yn.level2.upgrades.clickups.length + Yn.level2.upgrades.shibeups.length + Yn.level2.upgrades.kennelsups.length + Yn.level2.upgrades.kittensups.length + Yn.level2.upgrades.rocketups.length + Yn.level2.upgrades.baseups.length + Yn.level2.upgrades.rigups.length + Yn.level2.upgrades.extraups.length - 7) + "</strong>")), Tn.maxlevel > 2 && (n.find(".stats-coins").html("Dogecoins mined: <strong>" + qe(Tn.level3.alltimecoins, 0) + "</strong>"), n.find(".stats-shibes").html(Yn.level3.upgrades.shibeups[Tn.level3.shibeupslevel].shoptitle + "s: <strong>" + Ke(Tn.level3.shibes) + "</strong>"), n.find(".stats-kennels").html(Yn.level3.upgrades.kennelsups[Tn.level3.kennelsupslevel].shoptitle + ": <strong>" + Ke(Tn.level3.kennels) + "</strong>"), n.find(".stats-kittens").html(Yn.level3.upgrades.kittensups[Tn.level3.kittensupslevel].shoptitle + ": <strong>" + Ke(Tn.level3.kittens) + "</strong>"), n.find(".stats-rockets").html(Yn.level3.upgrades.rocketups[Tn.level3.rocketupslevel].shoptitle + "s: <strong>" + Ke(Tn.level3.rockets) + "</strong>"), n.find(".stats-bases").html(Yn.level3.upgrades.baseups[Tn.level3.baseupslevel].shoptitle + "s: <strong>" + Ke(Tn.level3.bases) + "</strong>"), n.find(".stats-rigs").html(Yn.level3.upgrades.rigups[Tn.level3.rigupslevel].shoptitle + "s: <strong>" + Ke(Tn.level3.rigs) + "</strong>"), n.find(".stats-upgrades").html("Upgrades bought: <strong>" + (Tn.level3.clickupslevel + Tn.level3.shibeupslevel + Tn.level3.kennelsupslevel + Tn.level3.kittensupslevel + Tn.level3.rocketupslevel + Tn.level3.baseupslevel + Tn.level3.rigupslevel + Tn.level3.extraupslevel) + " / " + (Yn.level3.upgrades.clickups.length + Yn.level3.upgrades.shibeups.length + Yn.level3.upgrades.kennelsups.length + Yn.level3.upgrades.kittensups.length + Yn.level3.upgrades.rocketups.length + Yn.level3.upgrades.baseups.length + Yn.level3.upgrades.rigups.length + Yn.level3.upgrades.extraups.length - 7) + "</strong>")), $("#statstab").tabs({
						active: Tn.level - 1
					})
				}
			}

			function he() {
				document.title = Ke(Tn.currentlevel().coins) + " Dogecoins - " + Yn.currentlevel().currlocation + " - DOGEMINER"
			}

			function _e() {
				Yn.helperanimations.shibes && requestAnimationFrame(function() {
					for (var e = 0; e < Tn.currentlevel().shibes; e++) {
						var t = "#shiben" + e,
							o = $(t);
						Yn.helperanimations.dontanimatethis != t && o.attr("class", "level" + Tn.level + " level" + Tn.level + "-shibe2" + Tn.currentlevel().shibeupslevel);
						var a = n();.03 > a && tt(r(Yn.currentlevel().dogefix), o, Math.max(8, 12 * n() + 1), "-" + (5 * n() + 15) + "px")
					}
				})
			}

			function fe() {
				Yn.helperanimations.kennels && requestAnimationFrame(function() {
					for (var e = 0; e < Tn.currentlevel().kennels; e++) {
						var t = "#kenneln" + e,
							o = $(t);
						Yn.helperanimations.dontanimatethis != t && o.attr("class", "level" + Tn.level + " level" + Tn.level + "-kennels2" + Tn.currentlevel().kennelsupslevel);
						var a = n();.04 > a && tt(r(Yn.currentlevel().dogefix), o, Math.max(8, 15 * n() + 1), "-" + (5 * n() + 20) + "px")
					}
				})
			}

			function ve() {
				Yn.helperanimations.kittens && requestAnimationFrame(function() {
					for (var e = 0; e < Tn.currentlevel().kittens; e++) {
						var t = "#kittenn" + e,
							r = $(t);
						Yn.helperanimations.dontanimatethis != t && r.attr("class", "level" + Tn.level + " level" + Tn.level + "-kitten2" + Tn.currentlevel().kittensupslevel);
						var a = n();.06 > a && tt(o(Yn.currentlevel().kittenfix), r, Math.max(8, 15 * n() + 1), "-" + (5 * n() + 14) + "px")
					}
				})
			}

			function ge() {
				Yn.helperanimations.rockets && requestAnimationFrame(function() {
					for (var e = 0; e < Tn.currentlevel().rockets; e++) {
						var t = "#rocketn" + e,
							r = $(t);
						Yn.helperanimations.dontanimatethis != t && r.attr("class", "level" + Tn.level + " level" + Tn.level + "-rocket2" + Tn.currentlevel().rocketupslevel + " " + An[e]);
						var o = n();.06 > o && tt("to the " + Yn.currentlevel().nextlocation.toLowerCase(), r, Math.max(8, 15 * n() + 1), "-" + (5 * n() + 2) + "px")
					}
				})
			}

			function ye() {
				Yn.helperanimations.bases && requestAnimationFrame(function() {
					for (var e = 0; e < Tn.currentlevel().bases; e++) {
						var t = "#basen" + e,
							o = $(t);
						Yn.helperanimations.dontanimatethis != t && o.attr("class", "level" + Tn.level + " level" + Tn.level + "-base2" + Tn.currentlevel().baseupslevel);
						var a = n();.05 > a && tt(r(Yn.currentlevel().dogefix), o, Math.max(8, 15 * n() + 1), "-" + (5 * n() + 2) + "px")
					}
				})
			}

			function be() {
				function e(e) {
					setTimeout(function() {
						Ye(e)
					}, 3e3)
				}
				Yn.helperanimations.rigs && requestAnimationFrame(function() {
					for (var t = 0; t < Tn.currentlevel().rigs; t++) {
						var r = n();
						if (.2 > r) {
							var o = "#rign" + t,
								a = $(o);
							Yn.helperanimations.dontanimatethis != o && a.attr("class", "level" + Tn.level + " level" + Tn.level + "-rig2" + Tn.currentlevel().rigupslevel), e(a)
						}
					}
				})
			}

			function Me() {
				Rn ? (Yn.helperanimations.dontanimatethis = "", Rn = !Rn) : Rn = !Rn
			}

			function ke() {
				Yn.helperanimations.shibes && requestAnimationFrame(function() {
					for (var e = 0; e < Tn.currentlevel().shibes; e++) {
						var t = "#shiben" + e;
						Yn.helperanimations.dontanimatethis != t ? $(t).attr("class", "level" + Tn.level + " level" + Tn.level + "-shibe" + Tn.currentlevel().shibeupslevel) : Me()
					}
				})
			}

			function we() {
				Yn.helperanimations.kennels && requestAnimationFrame(function() {
					for (var e = 0; e < Tn.currentlevel().kennels; e++) {
						var t = "#kenneln" + e;
						Yn.helperanimations.dontanimatethis != t ? $(t).attr("class", "level" + Tn.level + " level" + Tn.level + "-kennels1" + Tn.currentlevel().kennelsupslevel) : Me()
					}
				})
			}

			function De() {
				Yn.helperanimations.kittens && requestAnimationFrame(function() {
					for (var e = 0; e < Tn.currentlevel().kittens; e++) {
						var t = "#kittenn" + e;
						Yn.helperanimations.dontanimatethis != t ? $(t).attr("class", "level" + Tn.level + " level" + Tn.level + "-kitten1" + Tn.currentlevel().kittensupslevel) : Me()
					}
				})
			}

			function Le() {
				Yn.helperanimations.rockets && requestAnimationFrame(function() {
					for (var e = 0; e < Tn.currentlevel().rockets; e++) {
						var t = "#rocketn" + e;
						Yn.helperanimations.dontanimatethis != t ? $(t).attr("class", "level" + Tn.level + " level" + Tn.level + "-rocket1" + Tn.currentlevel().rocketupslevel + " " + An[e]) : Me()
					}
				})
			}

			function Te() {
				Yn.helperanimations.bases && requestAnimationFrame(function() {
					for (var e = 0; e < Tn.currentlevel().bases; e++) {
						var t = "#basen" + e;
						Yn.helperanimations.dontanimatethis != t ? $(t).attr("class", "level" + Tn.level + " level" + Tn.level + "-base1" + Tn.currentlevel().baseupslevel) : Me()
					}
				})
			}

			function Ye(e) {
				Yn.helperanimations.rigs && requestAnimationFrame(function() {
					var t = e;
					Yn.helperanimations.dontanimatethis != t ? t.attr("class", "level" + Tn.level + " level" + Tn.level + "-rig1" + Tn.currentlevel().rigupslevel) : Me()
				})
			}

			function Ee() {
				Yn.helperanimations.rigs && requestAnimationFrame(function() {
					for (var e = 0; e < Tn.currentlevel().rigs; e++) {
						var t = "#rign" + e;
						Yn.helperanimations.dontanimatethis != t ? $(t).attr("class", "level" + Tn.level + " level" + Tn.level + "-rig1" + Tn.currentlevel().rigupslevel) : Me()
					}
				})
			}

			function Se() {
				null === Yn.before && (Yn.before = new Date);
				var e = new Date,
					t = e.getTime() - Yn.before.getTime();
				Yn.before = new Date, Tn.currentlevel().coins = Tn.currentlevel().coins + Yn.persec / 1e3 * t, Tn.currentlevel().alltimecoins = Tn.currentlevel().alltimecoins + Yn.persec / 1e3 * t, Ce(), Yn.musicloaded && Yn.started && !Nn && It()
			}

			function xe() {
				return (Tn.currentlevel().shibes * Tn.currentlevel().shibestrength + Tn.currentlevel().kennels * Tn.currentlevel().kennelstrength + Tn.currentlevel().kittens * Tn.currentlevel().kittenstrength + Tn.currentlevel().rockets * Tn.currentlevel().rocketstrength + Tn.currentlevel().bases * Tn.currentlevel().basestrength + Tn.currentlevel().rigs * Tn.currentlevel().rigstrength) * Tn.currentlevel().extrastrength * Yn.bonuspercent
			}

			function Ne() {
				Yn.persec = (Tn.currentlevel().shibes * Tn.currentlevel().shibestrength + Tn.currentlevel().kennels * Tn.currentlevel().kennelstrength + Tn.currentlevel().kittens * Tn.currentlevel().kittenstrength + Tn.currentlevel().rockets * Tn.currentlevel().rocketstrength + Tn.currentlevel().bases * Tn.currentlevel().basestrength + Tn.currentlevel().rigs * Tn.currentlevel().rigstrength) * Tn.currentlevel().extrastrength * Yn.bonuspercent
			}

			function Ce() {
				requestAnimationFrame(function() {
					Yn.howmanyshop = 0, Tn.currentlevel().coins < Tn.currentlevel().shibecost ? Yn.buybuttons.buyshibe.attr("disabled", !0).addClass("ui-state-disabled") : (Yn.howmanyshop++, Yn.buybuttons.buyshibe.attr("disabled", !1).removeClass("ui-state-disabled")), Tn.currentlevel().coins < Tn.currentlevel().kittencost ? Yn.buybuttons.buykitten.attr("disabled", !0).addClass("ui-state-disabled") : (Yn.howmanyshop++, Yn.buybuttons.buykitten.attr("disabled", !1).removeClass("ui-state-disabled")), Tn.currentlevel().coins < Tn.currentlevel().kennelcost ? Yn.buybuttons.buykennel.attr("disabled", !0).addClass("ui-state-disabled") : (Yn.howmanyshop++, Yn.buybuttons.buykennel.attr("disabled", !1).removeClass("ui-state-disabled")), Tn.currentlevel().coins < Tn.currentlevel().rocketcost ? Yn.buybuttons.buyrocket.attr("disabled", !0).addClass("ui-state-disabled") : (Yn.howmanyshop++, Yn.buybuttons.buyrocket.attr("disabled", !1).removeClass("ui-state-disabled")), Tn.currentlevel().coins < Tn.currentlevel().basecost ? Yn.buybuttons.buybase.attr("disabled", !0).addClass("ui-state-disabled") : (Yn.howmanyshop++, Yn.buybuttons.buybase.attr("disabled", !1).removeClass("ui-state-disabled")), Tn.currentlevel().coins < Tn.currentlevel().rigcost ? Yn.buybuttons.buyrig.attr("disabled", !0).addClass("ui-state-disabled") : (Yn.howmanyshop++, Yn.buybuttons.buyrig.attr("disabled", !1).removeClass("ui-state-disabled")), Yn.howmanyup = 0, Tn.currentlevel().clickupslevel + 1 < Yn.currentlevel().upgrades.clickups.length && Tn.currentlevel().coins < Yn.currentlevel().upgrades.clickups[Tn.currentlevel().clickupslevel + 1].cost ? ($("#upgradeclicks").attr("disabled", !0).addClass("ui-state-disabled"), $("#clickupgradediv").attr("disabled", !0).addClass("ui-state-disabled")) : (Yn.howmanyup++, $("#upgradeclicks").attr("disabled", !1).removeClass("ui-state-disabled"), $("#clickupgradediv").attr("disabled", !0).removeClass("ui-state-disabled")), Tn.currentlevel().shibeupslevel + 1 < Yn.currentlevel().upgrades.shibeups.length && Tn.currentlevel().coins < Yn.currentlevel().upgrades.shibeups[Tn.currentlevel().shibeupslevel + 1].cost ? ($("#upgradeshibes").attr("disabled", !0).addClass("ui-state-disabled"), $("#shibeupgradediv").attr("disabled", !0).addClass("ui-state-disabled")) : (Yn.howmanyup++, $("#upgradeshibes").attr("disabled", !1).removeClass("ui-state-disabled"), $("#shibeupgradediv").attr("disabled", !0).removeClass("ui-state-disabled")), Tn.currentlevel().kennelsupslevel + 1 < Yn.currentlevel().upgrades.kennelsups.length && Tn.currentlevel().coins < Yn.currentlevel().upgrades.kennelsups[Tn.currentlevel().kennelsupslevel + 1].cost ? ($("#upgradekennels").attr("disabled", !0).addClass("ui-state-disabled"), $("#kennelsupgradediv").attr("disabled", !0).addClass("ui-state-disabled")) : (Yn.howmanyup++, $("#upgradekennels").attr("disabled", !1).removeClass("ui-state-disabled"), $("#kennelsupgradediv").attr("disabled", !0).removeClass("ui-state-disabled")), Tn.currentlevel().kittensupslevel + 1 < Yn.currentlevel().upgrades.kittensups.length && Tn.currentlevel().coins < Yn.currentlevel().upgrades.kittensups[Tn.currentlevel().kittensupslevel + 1].cost ? ($("#upgradekittens").attr("disabled", !0).addClass("ui-state-disabled"), $("#kittensupgradediv").attr("disabled", !0).addClass("ui-state-disabled")) : (Yn.howmanyup++, $("#upgradekittens").attr("disabled", !1).removeClass("ui-state-disabled"), $("#kittensupgradediv").attr("disabled", !0).removeClass("ui-state-disabled")), Tn.currentlevel().rocketupslevel + 1 < Yn.currentlevel().upgrades.rocketups.length && Tn.currentlevel().coins < Yn.currentlevel().upgrades.rocketups[Tn.currentlevel().rocketupslevel + 1].cost ? ($("#upgraderockets").attr("disabled", !0).addClass("ui-state-disabled"), $("#rocketupgradediv").attr("disabled", !0).addClass("ui-state-disabled")) : (Yn.howmanyup++, $("#upgraderockets").attr("disabled", !1).removeClass("ui-state-disabled"), $("#rocketupgradediv").attr("disabled", !0).removeClass("ui-state-disabled")), Tn.currentlevel().baseupslevel + 1 < Yn.currentlevel().upgrades.baseups.length && Tn.currentlevel().coins < Yn.currentlevel().upgrades.baseups[Tn.currentlevel().baseupslevel + 1].cost ? ($("#upgradebases").attr("disabled", !0).addClass("ui-state-disabled"), $("#baseupgradediv").attr("disabled", !0).addClass("ui-state-disabled")) : (Yn.howmanyup++, $("#upgradebases").attr("disabled", !1).removeClass("ui-state-disabled"), $("#baseupgradediv").attr("disabled", !0).removeClass("ui-state-disabled")), Tn.currentlevel().rigupslevel + 1 < Yn.currentlevel().upgrades.rigups.length && Tn.currentlevel().coins < Yn.currentlevel().upgrades.rigups[Tn.currentlevel().rigupslevel + 1].cost ? ($("#upgraderigs").attr("disabled", !0).addClass("ui-state-disabled"), $("#rigupgradediv").attr("disabled", !0).addClass("ui-state-disabled")) : (Yn.howmanyup++, $("#upgraderigs").attr("disabled", !1).removeClass("ui-state-disabled"), $("#rigupgradediv").attr("disabled", !0).removeClass("ui-state-disabled")), Tn.currentlevel().extraupslevel < Yn.currentlevel().upgrades.extraups.length && Tn.currentlevel().coins < Yn.currentlevel().upgrades.extraups[Tn.currentlevel().extraupslevel].cost ? ($("#upgradeextras").attr("disabled", !0).addClass("ui-state-disabled"), $("#extraupgradediv").attr("disabled", !0).addClass("ui-state-disabled")) : (Yn.howmanyup++, $("#upgradeextras").attr("disabled", !1).removeClass("ui-state-disabled"), $("#extraupgradediv").attr("disabled", !0).removeClass("ui-state-disabled")), 0 === Tn.currentlevel().shibes ? $("#shibeupgradediv").hide() : $("#shibeupgradediv").show(), 0 === Tn.currentlevel().kennels ? $("#kennelsupgradediv").hide() : $("#kennelsupgradediv").show(), 0 === Tn.currentlevel().kittens ? $("#kittensupgradediv").hide() : $("#kittensupgradediv").show(), 0 === Tn.currentlevel().rockets ? $("#rocketupgradediv").hide() : $("#rocketupgradediv").show(), 0 === Tn.currentlevel().bases ? $("#baseupgradediv").hide() : $("#baseupgradediv").show(), 0 === Tn.currentlevel().rigs ? $("#rigupgradediv").hide() : $("#rigupgradediv").show()
				}), Oe()
			}

			function Oe() {
				var e = "animated bounce duration-5";
				requestAnimationFrame(function() {
					Yn.howmanyup > Yn.howmanyuplasttime && $("#upgradetab").addClass(e).one(On, function() {
						$(this).removeClass(e)
					}), Yn.howmanyshop > Yn.howmanyshoplasttime && $("#shoptab").addClass(e).one(On, function() {
						$(this).removeClass(e)
					}), Yn.howmanyuplasttime = Yn.howmanyup, Yn.howmanyshoplasttime = Yn.howmanyshop
				})
			}

			function Pe(e) {
				var t = "The cost to go to " + e + " is " + Ke(Yn.currentlevel().launchcost) + " " + Yn.currentlevel().modifier + " dogecoins!";
				$("#level-status").children().each(function(e) {
					$(this).attr("title") && $(this).attr("title", t)
				}), $("#progressBar").attr("title", t)
			}

			function He(e, t) {
				this.str = t, this.cond = e, this.shown = !1, Vn.push(this)
			}

			function Ie() {
				Vn = [], Fn = []
			}

			function je() {
				for (var e = 0; e < Vn.length; e++) Vn[e].cond() && !Vn[e].shown && (Ae(Vn[e].str), Vn[e].shown = !0)
			}

			function Ae(e) {
				Fn.push(e), Fn.length > 3 && Fn.shift()
			}

			function Re() {
				Un.hasrunfor > 13 && Fn.length > 0 && Un.currentstr != Fn[0] && (Un.currentstr = Fn.shift(), Ve()), Un.hasrunfor > 120 && fn.hasClass($n) && fn.attr("class", Wn)
			}

			function Ve() {
				Un.hasrunfor = 0, fn.hasClass($n) ? fn.attr("class", Wn).one(On, function() {
					fn.html(Un.currentstr), fn.attr("class", $n)
				}) : (fn.html(Un.currentstr), fn.attr("class", $n))
			}

			function Fe() {
				Ie(), 1 == Tn.level && (new He(function() {
					return Tn.currentlevel().coins > 0 && Yn.started === !0
				}, "You are a poor, but happy shibe."), new He(function() {
					return Tn.currentlevel().coins > 29 && 0 === Tn.currentlevel().shibes && 0 === Tn.currentlevel().kennels
				}, "Consider buying shibes to help you mine ->"), new He(function() {
					return Tn.currentlevel().coins < 200 && Tn.currentlevel().shibes > 0
				}, "The shibes are eager to help!"), new He(function() {
					return Tn.currentlevel().coins >= 200
				}, "Your efforts are paying off."), new He(function() {
					return Tn.currentlevel().coins >= 350
				}, "Young shibes look up to you."), new He(function() {
					return Tn.currentlevel().coins >= 1e3
				}, "Your dogecoins brings all the shibes to the yard."), new He(function() {
					return Tn.currentlevel().coins >= 4e3
				}, "Wow, much coins!"), new He(function() {
					return Tn.currentlevel().coins >= 7300
				}, "Rumour about your Dogecoin Empire is spreading."), new He(function() {
					return Tn.currentlevel().coins >= 8e3
				}, "Vegeta, what does the shibe say about his doge level?"), new He(function() {
					return Tn.currentlevel().coins >= 9001
				}, "Its over 9000!!!!!!!"), new He(function() {
					return Tn.currentlevel().coins >= 14e3
				}, "Your mining operation has alerted several governments."), new He(function() {
					return Tn.currentlevel().coins >= 31e3
				}, "Shibes from all around the world marvel at your glorious dogecoins."), new He(function() {
					return Tn.currentlevel().coins >= 1e5 && 0 === Tn.currentlevel().rockets
				}, "TO THE MOON!"), new He(function() {
					return Tn.currentlevel().rockets > 0 && Tn.currentlevel().coins < 13e4
				}, "TO THE MOON!"), new He(function() {
					return Tn.currentlevel().rockets > 1 && Tn.currentlevel().coins < 2e5
				}, "Most nations of Earth have adopted dogecoin as their official currency."), new He(function() {
					return Tn.currentlevel().coins >= 5e5
				}, "The joy of dogecoin has made politicians better people and as a result marijuana has been legalized all over the world."), new He(function() {
					return 0 === Tn.currentlevel().bases && Tn.currentlevel().rockets > 2
				}, "Scientists believe the interior of the moon consists solely of dogecoins."), new He(function() {
					return Tn.currentlevel().coins >= 1e6
				}, "It ain't easy being a dogeillionaire, but you pull it off."), new He(function() {
					return Tn.currentlevel().coins >= 2e6
				}, "Scientists believe the interior of the moon consists solely of dogecoins."), new He(function() {
					return Tn.currentlevel().bases > 0 && Tn.currentlevel().coins < 1e7
				}, "Your moon base mining operations are ludicrously profitable."), new He(function() {
					return Tn.currentlevel().bases > 4 && Tn.currentlevel().coins < 15e6
				}, "Reports say the moon has shrunk in size. In response, dogecoin entrepreneurs start planting trees on the moon to compensate."), new He(function() {
					return Tn.currentlevel().coins >= 15e6 && 0 === Tn.currentlevel().rigs
				}, "Rumour has it doge went back to the future to invent dogecoin in the past."), new He(function() {
					return Tn.currentlevel().coins >= 35e6 && 0 === Tn.currentlevel().rigs
				}, "Time travel is suggested by top scientists to be a possibility."), new He(function() {
					return Tn.currentlevel().coins >= 45e6 && 0 === Tn.currentlevel().rigs
				}, "Dogecoin becomes the worlds #1 currency. All nations unite in using dogecoin."), new He(function() {
					return Tn.currentlevel().coins >= 65e6 && 0 === Tn.currentlevel().rigs
				}, "The invention of time travel is here. It may damage the universe as we know it. It is also quite expensive."), new He(function() {
					return Tn.currentlevel().coins >= 9e7 && 0 === Tn.currentlevel().rigs
				}, "World peace is established thanks to dogecoin. The world thanks you."), new He(function() {
					return Tn.currentlevel().coins >= 999999999 && 0 === Tn.currentlevel().rigs
				}, "You are now wealthy enough to afford the worlds first time machine."), new He(function() {
					return Tn.currentlevel().rigs > 0 && Tn.currentlevel().coins < 999999999
				}, "No one could predict this."), new He(function() {
					return Tn.currentlevel().rigs > 1 && Tn.currentlevel().coins < 999999999
				}, "First contact with aliens from outer space. As president of the united dogecoin nations, you are the first to greet them."), new He(function() {
					return Tn.currentlevel().rigs > 1 && Tn.currentlevel().coins < 3999999999
				}, "Alien worlds start adopting dogecoin as their main currency. Trading between worlds is done with dogecoins only."), new He(function() {
					return Tn.currentlevel().coins >= 4999999999
				}, "Wars break out in the galaxy, but because of your heavy influence, you talk them down."), new He(function() {
					return Tn.currentlevel().coins >= 9999999999
				}, "Because of your heavy resolve, dogecoin has united the entire known universe."), new He(function() {
					return Tn.currentlevel().coins >= 99999999999999
				}, "Are you still here?"), new He(function() {
					return Tn.currentlevel().coins >= 999999999999999
				}, "All life in the universe cease to exist. Only dogecoin remain."), new He(function() {
					return Tn.currentlevel().coins >= 0xe35fa9319ffff
				}, "It is time to stop playing. You won. Give up."), new He(function() {
					return Tn.currentlevel().coins >= 6999999999999999
				}, "Good thing you didn't give up, or you wouldn't see this. Internet high five!"), new He(function() {
					return Tn.currentlevel().coins >= 8999999999999999
				}, "If Snoop was here, he would be so proud."), new He(function() {
					return Tn.currentlevel().coins >= 2e16
				}, "Good game."), new He(function() {
					return Tn.currentlevel().coins >= 3e16
				}, "This is the last text."), new He(function() {
					return Tn.currentlevel().coins >= 4e16
				}, ":P"), new He(function() {
					return Tn.currentlevel().coins >= 7e16
				}, "You are now wealthy enough to afford some time off."), new He(function() {
					return Tn.currentlevel().coins >= 6e17
				}, "You know this game doesn't end, right? Ever."), new He(function() {
					return Tn.currentlevel().coins >= 9e17
				}, "Because of your enormous amounts of dogecoin, the universe has imploded."), new He(function() {
					return Tn.currentlevel().coins >= 13e17
				}, "A new big bang-event has occured. It is being named the Doge-bang."), new He(function() {
					return Tn.currentlevel().coins >= 2e18
				}, "The new universe just invented dogecoin."), new He(function() {
					return Tn.currentlevel().coins >= 1e19
				}, "Dogecoin is now the universal currency in all universes."), new He(function() {
					return Tn.currentlevel().coins >= 2e19
				}, "The end. Maybe.")), 2 == Tn.level && (new He(function() {
					return Tn.currentlevel().coins >= 0
				}, "So blue, very gray. Such moon!"), new He(function() {
					return Tn.currentlevel().coins >= 200
				}, "Mining on the moon is quite an endeavour, thanks Obama!"), new He(function() {
					return Tn.currentlevel().coins >= 350
				}, "To the moon? No, <strong>ON</strong> the moon!!"), new He(function() {
					return Tn.currentlevel().coins >= 1e3
				}, "A new McDonalds just opened.... on the moon."), new He(function() {
					return Tn.currentlevel().coins >= 4e3
				}, "The japanese are spearheading their own dogecoin space program."), new He(function() {
					return Tn.currentlevel().coins >= 7300
				}, "Your mining operations are slowly carving out a doge-shape on the moon."), new He(function() {
					return Tn.currentlevel().coins >= 8e3
				}, "Chicken is an excellent source of protein."), new He(function() {
					return Tn.currentlevel().coins >= 9001
				}, "It's over 9000 Billion!"), new He(function() {
					return Tn.currentlevel().coins >= 14e3
				}, "The Shiba Inu dog breed was originally bred to flush birds and small game, and was occasionally used to hunt wild boar."), new He(function() {
					return Tn.currentlevel().coins >= 31e3
				}, "A tribal war faction of the Space-Pirateers is causing trouble in the northern dogecoin sector."), new He(function() {
					return Tn.currentlevel().coins >= 1e5 && 0 === Tn.currentlevel().rockets
				}, "Get a Lander Shibe to explore the rest of the solar system ->"), new He(function() {
					return Tn.currentlevel().rockets > 0 && Tn.currentlevel().coins < 13e4
				}, "Yay such explorer! Your Lander Shibe is slowly exploring all celestial bodies in the solar system."), new He(function() {
					return Tn.currentlevel().rockets > 1 && Tn.currentlevel().coins < 2e5
				}, "The Lander Shibe tried landing on one of Venus' moons, but Venus doesn't have any moons!"), new He(function() {
					return Tn.currentlevel().coins >= 5e5
				}, "Did you know that Jupiter is the largest planet in the solar system? Lander Shibe knows. He was there."), new He(function() {
					return 0 === Tn.currentlevel().bases && Tn.currentlevel().rockets > 2
				}, "After exploring the solar system, Lander Shibe believes that Mars has the highest amount of dogecoin hidden below it's crust."), new He(function() {
					return Tn.currentlevel().coins >= 1e6
				}, "Before horses, the Dothraki used to ride dogs into battle. They were called the Dogeraki."), new He(function() {
					return Tn.currentlevel().coins >= 2e6
				}, "Every charity in the solar system is now using dogecoin to give to those in need."), new He(function() {
					return Tn.currentlevel().bases > 0 && Tn.currentlevel().coins < 1e7
				}, "Your Mars base mining operations are ludicrously profitable. Even more so than the old moon base mining operations."), new He(function() {
					return Tn.currentlevel().bases > 4 && Tn.currentlevel().coins < 15e6
				}, "Because of heavy mining, the atmosphere on Mars has slowly started to become breathable to humans (and doges)."), new He(function() {
					return Tn.currentlevel().coins >= 15e6 && 0 === Tn.currentlevel().rigs
				}, "A dog-like intelligent alien race from the Andromeda galaxy came by to get your autograph."), new He(function() {
					return Tn.currentlevel().coins >= 35e6 && 0 === Tn.currentlevel().rigs
				}, "Dogebility drives are slowly being theorized as possible by top (and bottom) scientists."), new He(function() {
					return Tn.currentlevel().coins >= 45e6 && 0 === Tn.currentlevel().rigs
				}, 'The invention of the Dogebility-drive is now considered a bigger event than "The Fappening".'), new He(function() {
					return Tn.currentlevel().coins >= 65e6 && 0 === Tn.currentlevel().rigs
				}, "Dogebility-tests have proven to be inconclusive. The full power of such a drive could tear a hole in the space-time continuum."), new He(function() {
					return Tn.currentlevel().coins >= 9e7 && 0 === Tn.currentlevel().rigs
				}, "Mars is now habitable. The world owes you and has created a statue of Doge twice the size of the statue of liberty in your honor."), new He(function() {
					return Tn.currentlevel().coins >= 999999999 && 0 === Tn.currentlevel().rigs
				}, "You are now wealthy enough to afford the Infinite Dogebility Drive. Results not known."), new He(function() {
					return Tn.currentlevel().rigs > 0 && Tn.currentlevel().coins < 999999999
				}, "The Dogebility drive has proven to be man and doge's greatest accomplishment. Ever. It's better than coffee."), new He(function() {
					return Tn.currentlevel().rigs > 1 && Tn.currentlevel().coins < 999999999
				}, "The Universe is ripe for the taking, thanks to multiple Dogebility drive ships. But you only want more dogecoins."), new He(function() {
					return Tn.currentlevel().rigs > 1 && Tn.currentlevel().coins < 3999999999
				}, "The amount of dogecoin mined by you has made the Guinness Book of Records unreadable."), new He(function() {
					return Tn.currentlevel().coins >= 4999999999
				}, "You have more influence on the universe than Yoda."), new He(function() {
					return Tn.currentlevel().coins >= 9999999999
				}, "The future is unknown.")), 3 == Tn.level && (new He(function() {
					return Tn.currentlevel().coins >= 0 && Yn.started === !0
				}, "Mars landing successful. Commencing rave party."), new He(function() {
					return Tn.currentlevel().coins > 29 && 0 === Tn.currentlevel().shibes && 0 === Tn.currentlevel().kennels
				}, "Consider buying rave shibes to help you mine ->"), new He(function() {
					return Tn.currentlevel().coins >= 200
				}, "This planet is red and water is wet. These are facts."), new He(function() {
					return Tn.currentlevel().coins >= 350
				}, "Sifting through some mars dust, you discovered a cure for cancer. You didn't know this, and promply tossed it away."), new He(function() {
					return Tn.currentlevel().coins >= 1e3
				}, "Having conquered local space travel, you delve deep into other fields such as biology and eastern-european house music."), new He(function() {
					return Tn.currentlevel().coins >= 4e3
				}, "Mining for dogecoin on Mars isn't normal. But on meth it is."), new He(function() {
					return Tn.currentlevel().coins >= 7300
				}, "Russia is attempting to annex parts of the moon."), new He(function() {
					return Tn.currentlevel().coins >= 8e3
				}, "The 2025 alliance of the US and North Korea successfully stopped Russia from annexing the moon."), new He(function() {
					return Tn.currentlevel().coins >= 9001
				}, "It's over 9000 ... TRILLION! Holy batman!"), new He(function() {
					return Tn.currentlevel().coins >= 14e3
				}, "You know nothing, Doge Snow. Get well soon."), new He(function() {
					return Tn.currentlevel().coins >= 31e3
				}, "Shibes from all around the galaxy marvel at your glorious, glorious dogecoins."), new He(function() {
					return Tn.currentlevel().coins >= 1e5 && 0 === Tn.currentlevel().rockets
				}, "TO THE ????"), new He(function() {
					return Tn.currentlevel().rockets > 0 && Tn.currentlevel().coins < 13e4
				}, "TO THE ????"), new He(function() {
					return Tn.currentlevel().rockets > 1 && Tn.currentlevel().coins < 2e5
				}, "Most nations of Earth have adopted dogecoin as their official currency of wow."), new He(function() {
					return Tn.currentlevel().coins >= 5e5
				}, "What's up? Well, it's a direction away from the center of gravity of a celestial object. That's up."), new He(function() {
					return 0 === Tn.currentlevel().bases && Tn.currentlevel().rockets > 2
				}, "To believe the interior of Mars consists MOSTLY of dogecoins would be silly. It consists ONLY of dogecoin."), new He(function() {
					return Tn.currentlevel().coins >= 1e6
				}, "You used to be a poor and happy shibe, now look at you. You're rich and happy! Yay!"), new He(function() {
					return Tn.currentlevel().bases > 0 && Tn.currentlevel().coins < 1e7
				}, "Your space bass rave operations are ludicrously profitable. Like, really profitable."), new He(function() {
					return Tn.currentlevel().bases > 4 && Tn.currentlevel().coins < 15e6
				}, "Neighbouring planets are complaining about the loud music. You wonder how they can hear it. Space."), new He(function() {
					return Tn.currentlevel().coins >= 15e6 && 0 === Tn.currentlevel().rigs
				}, "Hint: If you are cold and don't have warm clothes, go stand in a corner. They are usually 90 degrees."), new He(function() {
					return Tn.currentlevel().coins >= 35e6 && 0 === Tn.currentlevel().rigs
				}, "Life Pro Tip: While driving, you can open beer bottles with your seat belt."), new He(function() {
					return Tn.currentlevel().coins >= 45e6 && 0 === Tn.currentlevel().rigs
				}, "To mine dogecoin, or not to mine dogecoin. That is... not even a question lol! :)"), new He(function() {
					return Tn.currentlevel().coins >= 65e6 && 0 === Tn.currentlevel().rigs
				}, "The first scientifically created galaxy exploring creatures are being researched."), new He(function() {
					return Tn.currentlevel().coins >= 9e7 && 0 === Tn.currentlevel().rigs
				}, "What if it looks like a cow? Is there a cow level?"), new He(function() {
					return Tn.currentlevel().coins >= 999999999 && 0 === Tn.currentlevel().rigs
				}, "The first prototypes of galaxy exploring creatures are completed. It's a time traveling T-Rex with lasers. FREAKIN SWEET!"), new He(function() {
					return Tn.currentlevel().rigs > 0 && Tn.currentlevel().coins < 999999999
				}, "Has science gone too far?!"), new He(function() {
					return Tn.currentlevel().rigs > 1 && Tn.currentlevel().coins < 999999999
				}, "Turns out other galaxies are also made up out of dogecoin. Surprise!"), new He(function() {
					return Tn.currentlevel().rigs > 1 && Tn.currentlevel().coins < 3999999999
				}, "Indexing galaxies: 6 indexed out of a total of 691,481,631,239,020,420,010,240,571,111,866."), new He(function() {
					return Tn.currentlevel().coins >= 4999999999
				}, "We require additional galaxy exploring time travel t-rexes."), new He(function() {
					return Tn.currentlevel().coins >= 9999999999
				}, "It seems you have been living two lives, Mr Doge. In one, you are wow. In the other... such wow."), new He(function() {
					return Tn.currentlevel().coins >= 99999999999999
				}, "Are you STILL here? Okay. Please like and share. For science."), new He(function() {
					return Tn.currentlevel().coins >= 999999999999999
				}, "Mmph mmhh mpph. -The sound of your enemies."), new He(function() {
					return Tn.currentlevel().coins >= 0xe35fa9319ffff
				}, "You just lost the game. ... Just kidding."), new He(function() {
					return Tn.currentlevel().coins >= 6999999999999999
				}, "You just won the game. ... Just kidding."), new He(function() {
					return Tn.currentlevel().coins >= 8999999999999999
				}, "If Snoop was here, he would be even prouder than the proudest snoopelisnoop."), new He(function() {
					return Tn.currentlevel().coins >= 2e16
				}, "Thank you for playing."), new He(function() {
					return Tn.currentlevel().coins >= 3e16
				}, "This is the last text."), new He(function() {
					return Tn.currentlevel().coins >= 4e16
				}, "xD"), new He(function() {
					return Tn.currentlevel().coins >= 6e17
				}, "You know this game doesn't end, right? Ever. Ever ever. Maybe. No. Ever.")), new He(function() {
					return Tn.bonuscoins > 9 || Tn.bonuscoins > 49 || Tn.bonuscoins > 99 || Tn.bonuscoins > 999
				}, "Wow, you have collected " + Ke(Tn.bonuscoins) + " Bonus Coins! Such hero!")
			}

			function $e(e) {
				e.preventDefault(), "mousedown" === e.type && Lt(), Dt() || (Tn.clicks++, Yn.started === !1 && (Yn.started = !0), Bn = Tn.ceffects ? n() < .33 : !1, Gn = Tn.ceffects ? " animated pulse duration-1" : "", requestAnimationFrame(function() {
					Bn && tt(r(Yn.currentlevel().dogefix), En, Math.max(24, 50 * n() + 20)), vn.html(Ke(Tn.clicks)), mn.addClass("noselect"), gn.attr("class", "level" + Tn.level + " level" + Tn.level + "-doge_mine2u" + Tn.currentlevel().clickupslevel + Gn)
				}), Xe(), Tn.currentlevel().alltimecoins = Tn.currentlevel().alltimecoins + Tn.currentlevel().clickstrength * Yn.bonuspercent * Tn.currentlevel().extrastrength, Tn.currentlevel().coins = Tn.currentlevel().coins + Tn.currentlevel().clickstrength * Yn.bonuspercent * Tn.currentlevel().extrastrength, Yn.animatecoins = !1, clearTimeout(Yn.animatecoinstimeout), Be())
			}

			function We() {
				Je()
			}

			function Ue() {
				Jn || (Jn = !0, requestAnimationFrame(function() {
					zn.attr("class", ze()), setTimeout(Ge, 150)
				}))
			}

			function Ge() {
				Jn = !1, requestAnimationFrame(function() {
					zn.attr("class", ""), Yn.animatecoins = !1
				})
			}

			function Be() {
				Yn.animatecoins = !0, Ue()
			}

			function ze() {
				var e = "";
				return e = Tn.currentlevel().coins > 99999 ? "animated nanopulse duration-1" : Tn.currentlevel().coins > 999 ? "animated micropulse duration-1" : "animated minipulse duration-1"
			}

			function Je() {
				requestAnimationFrame(function() {
					$("#miner").attr("class", "level" + Tn.level + " level" + Tn.level + "-doge_mine1u" + Tn.currentlevel().clickupslevel), mn.removeClass("noselect")
				})
			}

			function Ke(e) {
				var t = "";
				e = Math.floor(e), e = Qe(e), e = (e + "").split("").reverse();
				for (var n in e) n % 3 === 0 && n > 0 && (t = "," + t), t = e[n] + t;
				return t
			}

			function qe(e, t) {
				var n = "";
				if (!isFinite(e)) return "Infinity";
				if (e = Math.round(1e7 * e) / 1e7, t > 0) {
					var r = e - Math.floor(e);
					r = Math.round(1e7 * r) / 1e7;
					var o = r ? 1 : 0;
					r = (r.toString() + "0000000").slice(2, 2 + t), 0 === parseInt(r) && (o = 0), n = qe(Math.floor(e)) + (o ? "." + r : "")
				} else {
					e = Math.floor(e), e = Qe(e), e = (e + "").split("").reverse();
					for (var a in e) a % 3 === 0 && a > 0 && (n = "," + n), n = e[a] + n
				}
				return n
			}

			function Qe(e) {
				var t;
				return Math.abs(e) < 1 ? (t = parseInt(e.toString().split("e-")[1]), t && (e *= Math.pow(10, t - 1), e = "0." + new Array(t).join("0") + e.toString().substring(2))) : (t = parseInt(e.toString().split("+")[1]), t > 20 && (t -= 20, e /= Math.pow(10, t), e += new Array(t + 1).join("0"))), e
			}

			function Xe() {
				if (Tn.ceffects) {
					var e = "+" + qe(Math.floor(Tn.currentlevel().clickstrength * Yn.bonuspercent), 2) + Yn.currentlevel().modifier_small;
					new d("miner", e)
				}
			}

			function Ze() {
				Tn.currentlevel().shibes > 0 ? $("#shibes").html(" - " + Tn.currentlevel().shibes) : $("#shibes").html(""), Tn.currentlevel().kennels > 0 ? $("#kennels").html(" - " + Tn.currentlevel().kennels) : $("#kennels").html(""), Tn.currentlevel().kittens > 0 ? $("#kittens").html(" - " + Tn.currentlevel().kittens) : $("#kittens").html(""), Tn.currentlevel().rockets > 0 ? $("#rockets").html(" - " + Tn.currentlevel().rockets) : $("#rockets").html(""), Tn.currentlevel().bases > 0 ? $("#bases").html(" - " + Tn.currentlevel().bases) : $("#bases").html(""), Tn.currentlevel().rigs > 0 ? $("#rigs").html(" - " + Tn.currentlevel().rigs) : $("#rigs").html("")
			}

			function et() {
				var e = mn.find("span.random-text");
				if (e.length > 50) {
					var t = !0;
					e.each(function() {
						t && $(this).remove(), t = !t
					})
				}
			}

			function tt(e, t, r, o, a) {
				var i, s;
				i = "undefined" != typeof o ? o : 100 * n() + "%", s = "undefined" != typeof a ? a : 100 * n() + "%", $('<span class="noselect animated fadeIn duration-6 random-text" style="position: absolute; z-index: 99000; left: ' + s + ";top: " + i + ";font-size: " + r + "px; color: rgb(" + Math.round(255 * n()) + ", " + Math.round(255 * n()) + ", " + Math.round(255 * n()) + ');">' + e + "</span>").appendTo(t).one(On, function() {
					$(this).attr("class", "noselect animated fadeOut duration-6 random-text delay-10").one(On, function() {
						$(this).remove()
					})
				})
			}

			function nt(e) {
				if (!Yn.dontsave)
					if (e === !0) Tn.maxlevel = Tn.maxlevel + 1, Tn.maxlevel > 3 && (Tn.maxlevel = 3), nt();
					else {
						var t = rt();
						localStorage.setItem("dogeminer2015", t), ot()
					}
			}

			function rt() {
				return JSON.stringify(Tn)
			}

			function ot() {
				for (var e = [], t = 0; t < dr.length; t++) e.push(dr[t].id + "myAWESOMEdelimiter" + dr[t].date);
				localStorage.setItem("achis", JSON.stringify(e))
			}

			function at() {
				var e = localStorage.getItem("achis");
				if (null !== e) {
					e = JSON.parse(e);
					for (var t = 0; t < e.length; t++)
						for (var n = 0; n < ur.length; n++)
							if (ur[n].id == e[t].split("myAWESOMEdelimiter")[0]) {
								ur[n].date = e[t].split("myAWESOMEdelimiter")[1], dr.push(ur[n]);
								break
							}
					Jt(), console.log("Achievements successfully loaded.")
				} else console.log("Unable to load achievements.");
				Kn = !0
			}

			function it() {
				$.removeCookie("dogeminer"), $.removeCookie("dogeminer2015"), $.removeCookie("dogeminer-level1"), $.removeCookie("dogeminer-level2"), $.removeCookie("dogeminer-level3"), $.removeCookie("achievements"), $.removeCookie("achis"), $.removeCookie("dogeminer-tutorial"), localStorage.removeItem("dogeminer"), localStorage.removeItem("achis"), localStorage.removeItem("dogeminer2015"), localStorage.removeItem("dogeminer-tutorial"), localStorage.removeItem("dogeminer-level1"), localStorage.removeItem("dogeminer-level2"), localStorage.removeItem("dogeminer-level3")
			}

			function st(e, t) {
				function n(e) {
					if (Tn.level = e.level, Tn.maxlevel = e.maxlevel, Tn.version = Ln, Tn.clicks = e.clicks, Tn.timeplayed = e.timeplayed, Tn.bonuscoins = e.bonuscoins, Tn.ceffects = e.ceffects, Tn.animate = e.animate, Tn.bganim = e.bganim, Tn.sounds = e.sounds, Tn.sounds2 = e.sounds2, Tn.music = e.music, void 0 === e.level1 || null === e.level1) {
						var t = r(1);
						void 0 !== t && (Tn.level1 = t)
					} else Tn.level1 = e.level1;
					if (void 0 === e.level2 || null === e.level2) {
						var n = r(2);
						void 0 !== n && (Tn.level2 = n)
					} else Tn.level2 = e.level2;
					if (void 0 === e.level3 || null === e.level3) {
						var o = r(3);
						void 0 !== o && (Tn.level3 = o)
					} else Tn.level3 = e.level3
				}

				function r(e) {
					var t = localStorage.getItem("dogeminer-level" + e);
					return t = JSON.parse(t), void 0 !== t && null !== t || (t = $.cookie("dogeminer-level" + e), void 0 !== t && (t = JSON.parse(t))), t
				}

				function o() {
					var e;
					return mt() ? (e = localStorage.getItem("dogeminer2015"), e = JSON.parse(e), void 0 !== e && null !== e || (e = $.cookie("dogeminer2015"), void 0 !== e && (e = JSON.parse(e)))) : pt() && (e = localStorage.getItem("dogeminer"), null !== e && (e = JSON.parse(e)), null === e && (e = $.cookie("dogeminer")), void 0 !== e && (e = i(e))), e
				}

				function a(e) {
					return null !== e.sounds && void 0 !== e.sounds || (e.sounds = !0), null !== e.sounds2 && void 0 !== e.sounds2 || (e.sounds2 = !0), null !== e.ceffects && void 0 !== e.ceffects || (e.ceffects = !0), null !== e.bganim && void 0 !== e.bganim || (e.bganim = !0), null !== e.animate && void 0 !== e.animate || (e.animate = !0), null !== e.timeplayed && void 0 !== e.timeplayed || (e.timeplayed = 0), null !== e.bonuscoins && void 0 !== e.bonuscoins || (e.bonuscoins = 0), null !== e.music && void 0 !== e.music || (e.music = !0), e
				}

				function i(e) {
					var t, n, r = !1;
					return void 0 !== e.level1 && (t = !0), void 0 !== e.level2 && (n = !0), void 0 !== e.level3 && (r = !0), void 0 === e.bonuscoins && (e.bonuscoins = t ? e.level1.bonuscoins : 0 + n ? e.level2.bonuscoins : 0 + r ? e.level3.bonuscoins : 0), void 0 === e.clicks && (e.clicks = t ? e.level1.clicks : 0 + n ? e.level2.clicks : 0 + r ? e.level3.clicks : 0), void 0 === e.timeplayed && (e.timeplayed = t ? e.level1.timeplayed : 0 + n ? e.level2.timeplayed : 0 + r ? e.level3.timeplayed : 0), void 0 === e.ceffects && (e.ceffects = t ? e.level1.ceffects : n ? e.level2.ceffects : r ? e.level3.ceffects : !0), void 0 === e.animate && (e.animate = t ? e.level1.animate : n ? e.level2.animate : r ? e.level3.animate : !0), void 0 === e.bganim && (e.bganim = t ? e.level1.bganim : n ? e.level2.bganim : r ? e.level3.bganim : !0), void 0 === e.sounds && (e.sounds = t ? e.level1.sounds : n ? e.level2.sounds : r ? e.level3.sounds : !0), void 0 === e.sounds2 && (e.sounds2 = t ? e.level1.sounds2 : n ? e.level2.sounds2 : r ? e.level3.sounds2 : !0), void 0 === e.music && (e.music = !0), e = a(e)
				}
				Yn.achievementsenabled = !1;
				var s;
				e ? (s = t, s.version < Ln && (s = i(s))) : s = o(), void 0 === s || null === s || (n(s), ut(), Yn.achievementsenabled = !0)
			}

			function lt(e) {
				$("#stylesheet").attr({
					href: e
				})
			}

			function ut() {
				Yn.achievementsenabled = !1, At(), ft(), lt(Yn.currentlevel().theme), Pe(Yn.currentlevel().costtitle), $(".newsline").css("color", Yn.currentlevel().newslinecolor), $(".fund").html(Yn.currentlevel().fundtext), $("#location").html('<font style="color: ' + Yn.currentlevel().currcolor + ';">' + Yn.currentlevel().currlocation + "</font>"), $("#nextlocation").html('<font style="color: ' + Yn.currentlevel().nextcolor + ';">' + Yn.currentlevel().nextlocation + "</font>"), Ne(), Se(), le(), z(), ne(), re(), oe(), ae(), ie(), se(), U(), Ze(), R(), Fe(), Je(), Tn.sounds ? soundManager.unmute() : soundManager.mute(), Tn.sounds ? ($("#muteicon").removeClass("ui-icon-volume-off"), $("#muteicon").addClass("ui-icon-volume-on")) : ($("#muteicon").removeClass("ui-icon-volume-on"), $("#muteicon").addClass("ui-icon-volume-off")), $("#sounds").prop("checked", Tn.sounds), $("#sounds2").prop("checked", Tn.sounds2), $("#music").prop("checked", Tn.music), $("#clickeffects").prop("checked", Tn.ceffects), $("#backgroundanims").prop("checked", Tn.bganim), $("#animations").prop("checked", Tn.animate), $("#timeplayed").html("00:00:00"), Qn = 1, Xn = Yn.currentlevel().imgArr[0], Tn.maxlevel < Tn.level && (Tn.maxlevel = Tn.level), ht(Yn.currentlevel().imgArr) && _t(), 2 == Tn.level && (Yn.moonmusicloaded ? Rt() : Vt()), 3 == Tn.level && (Yn.marsmusicloaded ? Rt() : Ft()), Yn.achievementsenabled = !0
			}

			function dt() {
				Yn.started ? nt() : ct() && (console.log("Found save."), st(), Yn.started = !0)
			}

			function ct() {
				return !(!pt() && !mt())
			}

			function pt() {
				var e = localStorage.getItem("dogeminer");
				if (void 0 === e || null === e) {
					var t = $.cookie("dogeminer");
					return void 0 !== t
				}
				return !0
			}

			function mt() {
				var e = localStorage.getItem("dogeminer2015");
				if (void 0 === e || null === e) {
					var t = $.cookie("dogeminer2015");
					return void 0 !== t
				}
				return !0
			}

			function ht(e) {
				ht.list || (ht.list = []);
				for (var t = 0; t < e.length; t++) {
					var n = new Image;
					n.src = e[t], ht.list.push(n)
				}
				return !0
			}

			function _t() {
				void 0 !== Zn || 0 !== Zn ? (clearInterval(Zn), Zn = setInterval(vt, 15e3)) : Zn = setInterval(vt, 15e3)
			}

			function ft() {
				void 0 === Zn && 0 === Zn || clearInterval(Zn)
			}

			function vt() {
				Tn.animate && Tn.bganim && (1 == er ? (er = 2, Qn >= qn.length - 1 ? Qn = 0 : Qn++, Xn = qn[Qn], $("#BG2").css("background", 'transparent url("' + Xn + '") no-repeat'), $("#BG").attr("class", "gpurender animated fadeOut duration-40")) : (er = 1, Qn >= qn.length - 1 ? Qn = 0 : Qn++, Xn = qn[Qn], $("#BG").css("background", 'transparent url("' + Xn + '") no-repeat'), $("#BG").attr("class", "gpurender animated fadeIn duration-40")))
			}

			function gt() {
				if (Yn.started && !Nn) {
					var e = $("<div/>").css({
						width: "200px",
						height: "210px",
						id: "bonuscoin",
						cursor: "pointer"
					});
					e.addClass("noselect level1 level1-bonuscoin");
					var t = (n() * ($("#wrapper").width() - 400)).toFixed(),
						r = (n() * ($("#wrapper").height() - 400)).toFixed();
					e.attr("id", "bonuscoin"), e.css({
						position: "absolute",
						left: t + "px",
						top: r + "px",
						"z-index": "5",
						display: "none"
					}).appendTo(mn).fadeIn(400).effect("bounce", null, 3e3, null).delay(1).fadeOut(300, function() {
						$(this).remove(), Et()
					}), Tt()
				}
			}

			function yt() {
				Yn.bonusactive = !0, Yn.bonuspercent = 1.5, Yn.bonuspercentnice = 50, Yn.speedvar = .5;
				var e = 6e4;
				N(), Ne(), ue(), clearTimeout(tr), tr = setTimeout(function() {
					bt()
				}, e)
			}

			function bt() {
				Yn.bonusactive = !1, Yn.bonuspercent = 1, Yn.bonuspercentnice = 0, Yn.speedvar = 1, Ne(), N(), ue()
			}

			function Mt() {
				function e(r) {
					0 !== $("#flyingdoge").length && (r ? t() : xt(), setTimeout(function() {
						e(!0)
					}, 500 + 800 * n()))
				}

				function t() {
					var e = $("#flyingdoge").offset();
					if (e.left < $(document).width() - 200) {
						var t = $("<div/>").css({
							width: "100px",
							height: "100px",
							id: "flyingcoin",
							cursor: "pointer"
						});
						t.addClass("noselect bonuscoinsmall");
						var n = e.left + 50,
							r = e.top + 90,
							o = $("#superwrapper").height() + 100;
						t.attr("id", "flyingcoin"), t.css({
							position: "absolute",
							left: n + "px",
							top: r + "px",
							"z-index": "4",
							display: "none"
						}).appendTo("body").fadeIn(10).animate({
							top: "+=" + o
						}, 3e3, function() {}).delay(1).fadeOut(50, function() {
							$(this).remove()
						})
					}
				}
				if (Yn.started && !Nn) {
					var r = $("<div/>").css({
						width: "175px",
						height: "169px",
						id: "flyingdoge",
						cursor: "pointer"
					});
					r.addClass("noselect flyingdoge");
					var o = -400,
						a = 5,
						i = $(document).width() + 200;
					r.attr("id", "flyingdoge"), r.css({
						position: "absolute",
						left: o + "px",
						top: a + "px",
						"z-index": "5",
						display: "none"
					}).appendTo("#superwrapper").fadeIn(100, e(!1)).animate({
						left: "+=" + i
					}, 6e3, function() {}).delay(1).fadeOut(300, function() {
						Nt(), $(this).remove()
					})
				}
			}

			function kt() {
				Yn.bonusactive = !0, Yn.bonuspercent = Yn.bonuspercent + .2, Yn.bonuspercentnice = Yn.bonuspercentnice + 20, Yn.speedvar = Yn.speedvar - .15, Yn.speedvar < .2 && (Yn.speedvar = .2);
				var e = 12e4;
				N(), Ne(), ue(), clearTimeout(tr), tr = setTimeout(function() {
					wt()
				}, e)
			}

			function wt() {
				Yn.bonusactive = !1, Yn.bonuspercent = 1, Yn.bonuspercentnice = 0, Yn.speedvar = 1, Ne(), N(), ue()
			}

			function Dt() {
				if (or = !1, null === Yn.lastclick || void 0 === Yn.lastclick) Yn.lastclick = new Date;
				else {
					Yn.clickcheck = new Date;
					var e = Yn.clickcheck.getTime() - Yn.lastclick.getTime();
					50 > e && (or = !0)
				}
				return Yn.lastclick = new Date, or
			}

			function Lt() {
				Tn.sounds2 && cr[Math.floor(5 * n())].play()
			}

			function Tt() {
				ar = !0;
				var e = soundManager.getSoundById("coinappear");
				e.play({
					volume: 33,
					onfinish: function() {
						Yt()
					}
				})
			}

			function Yt() {
				function e(t) {
					var n = soundManager.getSoundById(t);
					n.play({
						volume: 33,
						onfinish: function() {
							ar && e(t)
						}
					})
				}
				ar && e("coinloop")
			}

			function Et() {
				ar = !1, soundManager.stop("coinloop")
			}

			function St() {
				ar = !1, soundManager.play("cointaken")
			}

			function xt() {
				soundManager.play("flyingdoge")
			}

			function Nt() {
				soundManager.stop("flyingdoge")
			}

			function Ct() {
				soundManager.stop("achievementunlocked"), soundManager.play("achievementunlocked")
			}

			function Ot() {
				soundManager.stop("chaching"), soundManager.play("chaching")
			}

			function Pt() {
				soundManager.stop("chaching"), soundManager.play("chaching")
			}

			function Ht() {
				ir = !1
			}

			function It() {
				if (1 == Tn.level && Tn.sounds && Tn.music && !Yn.musicactive && !Yn.loading_new_level) {
					var e = soundManager.getSoundById("musicintro");
					e.play({
						volume: 33,
						onfinish: function() {
							jt()
						}
					}), Yn.musicactive = !0
				}
				2 != Tn.level && 3 != Tn.level || Tn.sounds && Tn.music && !Yn.musicactive && Rt()
			}

			function jt() {
				function e(t) {
					if (Tn.sounds && Tn.music) {
						var n = soundManager.getSoundById(t);
						n.play({
							volume: 33,
							onfinish: function() {
								Tn.sounds && Tn.music && e(t)
							}
						})
					}
				}
				soundManager.stop("musicintro"), soundManager.stop("earthmusic"), soundManager.stop("moonmusic"), soundManager.stop("marsmusic"), e(Yn.currentlevel().currentmusic)
			}

			function At() {
				soundManager.stop("musicintro"), soundManager.stop("earthmusic"), soundManager.stop("moonmusic"), soundManager.stop("marsmusic"), Yn.playingmusic = !1, Yn.musicactive = !1
			}

			function Rt() {
				Yn.loading_new_level || (Yn.musicactive = !0, jt())
			}

			function Vt() {
				soundManager.createSound({
					id: "moonmusic",
					url: "snd/general/moonmusic.mp3",
					autoLoad: !0,
					autoPlay: !1,
					onload: function() {
						Tn.music = !0, Yn.currentmusic = "moonmusic", Rt()
					}
				})
			}

			function Ft() {
				soundManager.createSound({
					id: "marsmusic",
					url: "snd/general/marsmusic.mp3",
					autoLoad: !0,
					autoPlay: !1,
					onload: function() {
						Tn.music = !0, Yn.currentmusic = "marsmusic", Rt()
					}
				})
			}

			function $t() {
				function e(t) {
					var n = soundManager.getSoundById(t);
					n.play({
						onfinish: function() {
							ir && e(t)
						}
					})
				}!sr && lr && (ir = !0, sr = !0, e("alert"))
			}

			function Wt(e, t, n, r, o, a) {
				this.id = e, this.name = t, this.desc = n, this.img = r, this.cond = o, this.date = a, ur.push(this)
			}

			function Ut(e, t, n, r, o) {
				this.level = e, this.type = t, this.amount = n, this.type2 = r, this.amount2 = o
			}

			function Gt() {
				for (var e, t, n = 0; n < ur.length; n++) e = ur[n], t = e.cond, "coins" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().coins >= t.amount && zt(e), "time" == t.type && void 0 === t.type2 && Tn.timeplayed >= t.amount && zt(e), "coins" == t.type && "time" === t.type2 && t.level == Tn.level && Tn.currentlevel().coins >= t.amount && Tn.timeplayed < t.amount2 && zt(e), "shibes" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().shibes >= t.amount && zt(e), "shibes" == t.type && "time" === t.type2 && t.level == Tn.level && Tn.currentlevel().shibes >= t.amount && Tn.timeplayed <= t.amount2 && zt(e), "shibes" == t.type && "kennels" === t.type2 && t.level == Tn.level && Tn.currentlevel().shibes >= t.amount && Tn.currentlevel().kennels >= t.amount2 && zt(e), "kennels" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().kennels >= t.amount && zt(e), "kennels" == t.type && "time" === t.type2 && t.level == Tn.level && Tn.currentlevel().kennels >= t.amount && Tn.timeplayed <= t.amount2 && zt(e), "kittens" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().kittens >= t.amount && zt(e), "rockets" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().rockets >= t.amount && zt(e), "rockets" == t.type && "bases" === t.type2 && t.level == Tn.level && Tn.currentlevel().rockets >= t.amount && bases >= t.amount2 && zt(e), "bases" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().bases >= t.amount && zt(e), "rigs" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().rigs >= t.amount && zt(e), "clickups" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().clickupslevel >= t.amount && zt(e), "shibeups" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().shibeupslevel >= t.amount && zt(e), "kennelsups" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().kennelsupslevel >= t.amount && zt(e), "kittensups" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().kittensupslevel >= t.amount && zt(e), "rocketups" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().rocketupslevel >= t.amount && zt(e), "baseups" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().baseupslevel >= t.amount && zt(e), "rigups" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().rigupslevel >= t.amount && zt(e), "extraups" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().extraupslevel >= t.amount && zt(e), "clicks" == t.type && "time" === t.type2 && Tn.currentlevel().clicks >= t.amount && Tn.timeplayed < t.amount2 && zt(e), "clicks" == t.type && void 0 === t.type2 && Tn.clicks >= t.amount && zt(e), "bonuscoins" == t.type && void 0 === t.type2 && Tn.bonuscoins >= t.amount && zt(e), "anyups" == t.type && void 0 === t.type2 && t.level == Tn.level && (Tn.currentlevel().clickupslevel > 0 || Tn.currentlevel().shibeupslevel > 0 || Tn.currentlevel().kennelsupslevel > 0 || Tn.currentlevel().kittensupslevel > 0 || Tn.currentlevel().rocketupslevel > 0 || Tn.currentlevel().baseupslevel > 0 || Tn.currentlevel().rigupslevel > 0 || Tn.currentlevel().extraupslevel > 0) && zt(e), "allups" == t.type && void 0 === t.type2 && t.level == Tn.level && Tn.currentlevel().clickupslevel == Yn.currentlevel().upgrades.clickups.length && Tn.currentlevel().shibeupslevel == Yn.currentlevel().upgrades.shibeups.length && Tn.currentlevel().kennelsupslevel == Yn.currentlevel().upgrades.kennelsups.length && Tn.currentlevel().kittensupslevel == Yn.currentlevel().upgrades.kittensups.length && Tn.currentlevel().rocketupslevel == Yn.currentlevel().upgrades.rocketups.length && Tn.currentlevel().baseupslevel == Yn.currentlevel().upgrades.baseups.length && Tn.currentlevel().rigupslevel == Yn.currentlevel().upgrades.rigups.length && Tn.currentlevel().extraupslevel == Yn.currentlevel().upgrades.extraups.length && zt(e), "level" == t.type && void 0 === t.type2 && t.level == Tn.level && zt(e)
			}

			function Bt(e) {
				for (var t = !1, n = 0; n < dr.length; n++) dr[n].id == e && (t = !0);
				return t
			}

			function zt(e) {
				if (Kn && !Bt(e.id)) {
					if (Yn.achievementsenabled) {
						$("#achievementwindow").noty({
							text: '<div><img src="' + e.img + '" style="float:left;margin-left:5px;margin-top:-10px;"/><div style="text-align:center;"><h3 style="position:relative;top:-15px;color:#111111;">Achievement earned</h3><h2 style="position:relative;top:-20px;color:#111111;display:inline;">' + e.name + "</h2></div></div>"
						})
					}
					e.date = dn().format("YYYY-MM-DD, HH:mm:ss"), dr.push(e), Jt()
				}
			}

			function Jt() {
				for (var e = "", t = dr.length - 1; t >= 0; t--) e += '<div id="extraupgradediv" class="ui-state-highlight ui-corner-all upgrade desc" style="margin-top: 5px; padding: 5px 0px">', e += '<img src="' + dr[t].img + '" align="left" />', e += '<div style="width:410px;"><strong>' + dr[t].name + '</strong><br/><span class="desc">' + dr[t].desc + "<br/>Unlocked on: " + dr[t].date + "</span></div>", e += "</div>";
				$("#achiwrapper").html(e)
			}

			function Kt() {
				new Wt(1, "The First 1K", "Get 1,000 dogecoins.", "img/achi/placeholder.png", new Ut(1, "coins", 1e3)), new Wt(2, "It's Over Nine Thousand!", "Get over 9,000 dogecoins.", "img/achi/placeholder.png", new Ut(1, "coins", 9001)), new Wt(3, "One Hundred Thousand Dogecoins", "Get 100,000 dogecoins.", "img/achi/placeholder.png", new Ut(1, "coins", 1e5)), new Wt(293932, "Dogeillionaire", "Get 1,000,000 dogecoins.", "img/achi/placeholder.png", new Ut(1, "coins", 1e6)), new Wt(4, "Money-Maker!", "Get 50,000,000 dogecoins.", "img/achi/placeholder.png", new Ut(1, "coins", 5e6)), new Wt(5, "Cash Cow? More Like Cash Doge!", "Get 100,000,000 dogecoins.", "img/achi/placeholder.png", new Ut(1, "coins", 1e8)), new Wt(6, "Slumdogeillionaire", "Get 500,000,000 dogecoins.", "img/achi/placeholder.png", new Ut(1, "coins", 5e8)), new Wt(7, "One Billion Dogecoins", "Get 1,000,000,000 dogecoins.", "img/achi/placeholder.png", new Ut(1, "coins", 1e9)), new Wt(8, "Fifty Billion Dogecoins", "Get 50,000,000,000 dogecoins.", "img/achi/placeholder.png", new Ut(1, "coins", 5e10)), new Wt(9, "One Hundred Billion Dogecoins", "Get 100,000,000,000 dogecoins.", "img/achi/placeholder.png", new Ut(1, "coins", 1e11)), new Wt(10, "One Trillion Dogecoins", "Get 1,000,000,000,000 dogecoins.", "img/achi/placeholder.png", new Ut(1, "coins", 1e12)), new Wt(11, "One Quadrillion Dogecoins", "Get 1,000,000,000,000,000 dogecoins.", "img/achi/placeholder.png", new Ut(1, "coins", 1e15)), new Wt(12, "One Quintillion Dogecoins", "Get 1,000,000,000,000,000,000 dogecoins. I'm not even mad, that's amazing.", "img/achi/placeholder.png", new Ut(1, "coins", 1e18)), new Wt(13, "One Sextillion Dogecoins", "Get 1,000,000,000,000,000,000,000 dogecoins. Is such a thing even possible?", "img/achi/placeholder.png", new Ut(1, "coins", 1e21)), new Wt(14, "One Septillion Dogecoins", "Get 1,000,000,000,000,000,000,000,000 dogecoins. I think someone is cheating.", "img/achi/placeholder.png", new Ut(1, "coins", 1e24)), new Wt(100, "It's a party!", "Get 10 Mining Shibes.", "img/achi/placeholder.png", new Ut(1, "shibes", 10)), new Wt(101, "Fifty Mining Shibes", "Get 50 Mining Shibes.", "img/achi/placeholder.png", new Ut(1, "shibes", 50)), new Wt(102, "One Hundred Mining Shibes", "Get 100 Mining Shibes.", "img/achi/placeholder.png", new Ut(1, "shibes", 100)), new Wt(103, "Five Hundred Mining Shibes", "Get 500 Mining Shibes.", "img/achi/placeholder.png", new Ut(1, "shibes", 500)), new Wt(104, "One Thousand Mining Shibes", "Get 1,000 Mining Shibes.", "img/achi/placeholder.png", new Ut(1, "shibes", 1e3)), new Wt(105, "1337-Krew", "Get 1,337 Mining Shibes.", "img/achi/placeholder.png", new Ut(1, "shibes", 1337)), new Wt(106, "5,000 Mining Shibes", "Get 5,000 Mining Shibes.", "img/achi/placeholder.png", new Ut(1, "shibes", 5e3)), new Wt(107, "10,000 Mining Shibes", "Get 10,000 Mining Shibes.", "img/achi/placeholder.png", new Ut(1, "shibes", 1e4)), new Wt(200, "Woof Woof", "Get 10 Doge Kennels.", "img/achi/placeholder.png", new Ut(1, "kennels", 10)), new Wt(201, "Fifty Doge Kennels", "Get 50 Doge Kennels.", "img/achi/placeholder.png", new Ut(1, "kennels", 50)), new Wt(202, "One Hundred Doge Kennels", "Get 100 Doge Kennels.", "img/achi/placeholder.png", new Ut(1, "kennels", 100)), new Wt(203, "Five Hundred Doge Kennels", "Get 500 Doge Kennels.", "img/achi/placeholder.png", new Ut(1, "kennels", 500)), new Wt(204, "One Thousand Doge Kennels", "Get 1000 Doge Kennels.", "img/achi/placeholder.png", new Ut(1, "kennels", 1e3)), new Wt(205, "1337-Krew #2", "Get 1337 Doge Kennels.", "img/achi/placeholder.png", new Ut(1, "kennels", 1337)), new Wt(206, "5,000 Doge Kennels", "Get 5,000 Doge Kennels.", "img/achi/placeholder.png", new Ut(1, "kennels", 5e3)), new Wt(207, "10,000 Doge Kennels", "Get 10,000 Doge Kennels.", "img/achi/placeholder.png", new Ut(1, "kennels", 1e4)), new Wt(300, "Mjau", "Get 10 Slave Kittens.", "img/achi/placeholder.png", new Ut(1, "kittens", 10)), new Wt(301, "Fifty Slave Kittens", "Get 50 Slave Kittens.", "img/achi/placeholder.png", new Ut(1, "kittens", 50)), new Wt(302, "One Hundred Slave Kittens", "Get 100 Slave Kittens.", "img/achi/placeholder.png", new Ut(1, "kittens", 100)), new Wt(303, "Five Hundred Slave Kittens", "Get 500 Slave Kittens.", "img/achi/placeholder.png", new Ut(1, "kittens", 500)), new Wt(304, "One Thousand Slave Kittens", "Get 1000 Slave Kittens.", "img/achi/placeholder.png", new Ut(1, "kittens", 1e3)), new Wt(305, "1337-Krew #3", "Get 1337 Slave Kittens.", "img/achi/placeholder.png", new Ut(1, "kittens", 1337)), new Wt(306, "5,000 Slave Kittens", "Get 5,000 Slave Kittens.", "img/achi/placeholder.png", new Ut(1, "kittens", 5e3)), new Wt(307, "10,000 Slave Kittens", "Get 10,000 Slave Kittens.", "img/achi/placeholder.png", new Ut(1, "kittens", 1e4)), new Wt(399, "First Doge In Space", "Get a Space Rocket.", "img/achi/placeholder.png", new Ut(1, "rockets", 1)), new Wt(400, "Space, The Final Frontier", "Get 10 Space Rockets.", "img/achi/placeholder.png", new Ut(1, "rockets", 10)), new Wt(401, "Fifty Space Rockets", "Get 50 Space Rockets.", "img/achi/placeholder.png", new Ut(1, "rockets", 50)), new Wt(402, "One Hundred Space Rockets", "Get 100 Space Rockets.", "img/achi/placeholder.png", new Ut(1, "rockets", 100)), new Wt(403, "Five Hundred Space Rockets", "Get 500 Space Rockets.", "img/achi/placeholder.png", new Ut(1, "rockets", 500)), new Wt(404, "One Thousand Space Rockets", "Get 1000 Space Rockets.", "img/achi/placeholder.png", new Ut(1, "rockets", 1e3)), new Wt(405, "1337-Krew #4", "Get 1337 Space Rockets.", "img/achi/placeholder.png", new Ut(1, "rockets", 1337)), new Wt(406, "5,000 Space Rockets", "Get 5,000 Space Rockets.", "img/achi/placeholder.png", new Ut(1, "rockets", 5e3)), new Wt(407, "10,000 Space Rockets", "Get 10,000 Space Rockets.", "img/achi/placeholder.png", new Ut(1, "rockets", 1e4)), new Wt(500, "Moon Miner", "Get 10 Moon Bases.", "img/achi/placeholder.png", new Ut(1, "bases", 10)), new Wt(501, "Fifty Moon Bases", "Get 50 Moon Bases.", "img/achi/placeholder.png", new Ut(1, "bases", 50)), new Wt(502, "One Hundred Moon Bases", "Get 100 Moon Bases.", "img/achi/placeholder.png", new Ut(1, "bases", 100)), new Wt(503, "Five Hundred Moon Bases", "Get 500 Moon Bases.", "img/achi/placeholder.png", new Ut(1, "bases", 500)), new Wt(504, "One Thousand Moon Bases", "Get 1000 Moon Bases.", "img/achi/placeholder.png", new Ut(1, "bases", 1e3)), new Wt(505, "1337-Krew #5", "Get 1337 Moon Bases.", "img/achi/placeholder.png", new Ut(1, "bases", 1337)), new Wt(506, "5,000 Moon Bases", "Get 5,000 Moon Bases.", "img/achi/placeholder.png", new Ut(1, "bases", 5e3)), new Wt(507, "10,000 Moon Bases", "Get 10,000 Moon Bases.", "img/achi/placeholder.png", new Ut(1, "bases", 1e4)), new Wt(600, "Time Traveller", "Get 10 Time Machines.", "img/achi/placeholder.png", new Ut(1, "rigs", 10)), new Wt(601, "Fifty Time Machines", "Get 50 Time Machines.", "img/achi/placeholder.png", new Ut(1, "rigs", 50)), new Wt(602, "One Hundred Time Machines", "Get 100 Time Machines.", "img/achi/placeholder.png", new Ut(1, "rigs", 100)), new Wt(603, "Five Hundred Time Machines", "Get 500 Time Machines.", "img/achi/placeholder.png", new Ut(1, "rigs", 500)), new Wt(604, "One Thousand Time Machines", "Get 1000 Time Machines.", "img/achi/placeholder.png", new Ut(1, "rigs", 1e3)), new Wt(605, "1337-Krew #6", "Get 1337 Time Machines.", "img/achi/placeholder.png", new Ut(1, "rigs", 1337)), new Wt(606, "5,000 Time Machines", "Get 5,000 Time Machines.", "img/achi/placeholder.png", new Ut(1, "rigs", 5e3)), new Wt(607, "10,000 Time Machines", "Get 10,000 Time Machines.", "img/achi/placeholder.png", new Ut(1, "rigs", 1e4)), new Wt(700, "My First Upgrade", "Purchase an upgrade.", "img/achi/placeholder.png", new Ut(1, "anyups", 0)), new Wt(701, "Mining Enthusiast", "Get all pickaxe upgrades.", "img/achi/placeholder.png", new Ut(1, "clickups", Yn.currentlevel().upgrades.clickups.length)), new Wt(702, "Gotta Upgrade 'Em All", "Get every upgrade.", "img/achi/placeholder.png", new Ut(1, "allups", 0)), new Wt(703, "My Dogecoins Brings All The Shibes To The Yard", "Get all Mining Shibe upgrades.", "img/achi/placeholder.png", new Ut(1, "shibeups", Yn.currentlevel().upgrades.shibeups.length)), new Wt(704, "Maximum Efficiency Kennels", "Get all Doge Kennels upgrades.", "img/achi/placeholder.png", new Ut(1, "kennelsups", Yn.currentlevel().upgrades.kennelsups.length)), new Wt(705, "Kittens Are Also Good At Something", "Get all Slave Kittens upgrades.", "img/achi/placeholder.png", new Ut(1, "kittensups", Yn.currentlevel().upgrades.kittensups.length)), new Wt(706, "Maximum Warp", "Get all Space Rocket upgrades.", "img/achi/placeholder.png", new Ut(1, "rocketups", Yn.currentlevel().upgrades.rocketups.length)), new Wt(707, "Space Man", "Get all Moon Base upgrades.", "img/achi/placeholder.png", new Ut(1, "baseups", Yn.currentlevel().upgrades.baseups.length)), new Wt(708, "What Year Is It?", "Get all Time Machine Mining Rig upgrades.", "img/achi/placeholder.png", new Ut(1, "rigups", Yn.currentlevel().upgrades.rigups.length)), new Wt(709, "Well That Was Expensive", "Get all % increase upgrades.", "img/achi/placeholder.png", new Ut(1, "extraups", Yn.currentlevel().upgrades.extraups.length)), new Wt(800, "Bonus Time", "Grabbed a golden dogecoin for bonus income.", "img/achi/placeholder.png", new Ut(0, "bonuscoins", 1)), new Wt(801, "Much Bonus", "Grab 5 golden dogecoins for bonus income.", "img/achi/placeholder.png", new Ut(0, "bonuscoins", 5)), new Wt(802, "Bonustravaganza", "Grab 10 golden dogecoins for bonus income.", "img/achi/placeholder.png", new Ut(0, "bonuscoins", 10)), new Wt(803, "I Got Luck, Persistence Or Both", "Grab 25 golden dogecoins for bonus income.", "img/achi/placeholder.png", new Ut(0, "bonuscoins", 25)), new Wt(804, "I Love You", "Grab 50 golden dogecoins for bonus income.", "img/achi/placeholder.png", new Ut(0, "bonuscoins", 50)), new Wt(805, "My Time Played Must Be Really High", "Grab 100 golden dogecoins for bonus income.", "img/achi/placeholder.png", new Ut(0, "bonuscoins", 100)), new Wt(900, "Time Flies By", "Play for an hour.", "img/achi/placeholder.png", new Ut(0, "time", 3600)), new Wt(901, "I Hope You Took Breaks", "Play for five hours.", "img/achi/placeholder.png", new Ut(0, "time", 18e3)), new Wt(902, "Why Am I Still Playing", "Play for 24 hours.", "img/achi/placeholder.png", new Ut(0, "time", 86400)), new Wt(903, "24/7", "Play for 7 days.", "img/achi/placeholder.png", new Ut(0, "time", 604800)), new Wt(904, "I'm Awesome", "Play for two weeks.", "img/achi/placeholder.png", new Ut(0, "time", 1209600)), new Wt(905, "I'm Crazy", "Play for a month.", "img/achi/placeholder.png", new Ut(0, "time", 2592e3)), new Wt(906, "I Don't Have A Life", "Play for six months.", "img/achi/placeholder.png", new Ut(0, "time", 15552e3)), new Wt(907, "The Insane", "Play for a year. You are special.", "img/achi/placeholder.png", new Ut(0, "time", 31104e3)), new Wt(1e3, "Click Click Boom", "Click a thousand times.", "img/achi/placeholder.png", new Ut(0, "clicks", 1e3)), new Wt(1001, "Really Good At Clicking", "Click 10,000 times.", "img/achi/placeholder.png", new Ut(0, "clicks", 1e4)), new Wt(1002, "I've Seen Things You People Wouldn't Believe", "Click 100,000 times.", "img/achi/placeholder.png", new Ut(0, "clicks", 1e5)), new Wt(1003, "A Million Clicks Baby", "Click 1,000,000 times.", "img/achi/placeholder.png", new Ut(0, "clicks", 1e6)), new Wt(1004, "Ten Million Clicks", "Click 10,000,000 times.", "img/achi/placeholder.png", new Ut(0, "clicks", 1e7)), new Wt(1005, "One Hundred Million Clicks", "Click 100,000,000 times.", "img/achi/placeholder.png", new Ut(0, "clicks", 1e8)), new Wt(2001, "Next Level Gaming", "Gone to the moon.", "img/achi/placeholder.png", new Ut(2, "level", 0)), new Wt(2100, "Lets Get It Started", "Get 10 Moon Shibes.", "img/achi/placeholder.png", new Ut(2, "shibes", 10)), new Wt(2101, "Fifty Moon Shibes", "Get 50 Moon Shibes.", "img/achi/placeholder.png", new Ut(2, "shibes", 50)), new Wt(2102, "One Hundred Moon Shibes", "Get 100 Moon Shibes.", "img/achi/placeholder.png", new Ut(2, "shibes", 100)), new Wt(2103, "Five Hundred Moon Shibes", "Get 500 Moon Shibes.", "img/achi/placeholder.png", new Ut(2, "shibes", 500)), new Wt(2104, "One Thousand Moon Shibes", "Get 1,000 Moon Shibes.", "img/achi/placeholder.png", new Ut(2, "shibes", 1e3)), new Wt(2105, "1337-MoonKrew", "Get 1,337 Moon Shibes.", "img/achi/placeholder.png", new Ut(2, "shibes", 1337)), new Wt(2106, "5,000 Moon Shibes", "Get 5,000 Moon Shibes.", "img/achi/placeholder.png", new Ut(2, "shibes", 5e3)), new Wt(2107, "10,000 Moon Shibes", "Get 10,000 Moon Shibes.", "img/achi/placeholder.png", new Ut(2, "shibes", 1e4)), new Wt(2200, "Vroom Vroom", "Get 10 Doge Cars.", "img/achi/placeholder.png", new Ut(2, "kennels", 10)), new Wt(2201, "Fifty Doge Cars", "Get 50 Doge Cars.", "img/achi/placeholder.png", new Ut(2, "kennels", 50)), new Wt(2202, "One Hundred Doge Cars", "Get 100 Doge Cars.", "img/achi/placeholder.png", new Ut(2, "kennels", 100)), new Wt(2203, "Five Hundred Doge Cars", "Get 500 Doge Cars.", "img/achi/placeholder.png", new Ut(2, "kennels", 500)), new Wt(2204, "One Thousand Doge Cars", "Get 1000 Doge Cars.", "img/achi/placeholder.png", new Ut(2, "kennels", 1e3)), new Wt(2205, "1337-MoonKrew #2", "Get 1337 Doge Cars.", "img/achi/placeholder.png", new Ut(2, "kennels", 1337)), new Wt(2206, "5,000 Doge Cars", "Get 5,000 Doge Cars.", "img/achi/placeholder.png", new Ut(2, "kennels", 5e3)), new Wt(2207, "10,000 Doge Cars", "Get 10,000 Doge Cars.", "img/achi/placeholder.png", new Ut(2, "kennels", 1e4)), new Wt(2300, "Mjau", "Get 10 Suit Shibes.", "img/achi/placeholder.png", new Ut(2, "kittens", 10)), new Wt(2301, "Fifty Suit Shibes", "Get 50 Suit Shibes.", "img/achi/placeholder.png", new Ut(2, "kittens", 50)), new Wt(2302, "One Hundred Suit Shibes", "Get 100 Suit Shibes.", "img/achi/placeholder.png", new Ut(2, "kittens", 100)), new Wt(2303, "Five Hundred Suit Shibes", "Get 500 Suit Shibes.", "img/achi/placeholder.png", new Ut(2, "kittens", 500)), new Wt(2304, "One Thousand Suit Shibes", "Get 1000 Suit Shibes.", "img/achi/placeholder.png", new Ut(2, "kittens", 1e3)), new Wt(2305, "1337-MoonKrew #3", "Get 1337 Suit Shibes.", "img/achi/placeholder.png", new Ut(2, "kittens", 1337)), new Wt(2306, "5,000 Suit Shibes", "Get 5,000 Suit Shibes.", "img/achi/placeholder.png", new Ut(2, "kittens", 5e3)), new Wt(2307, "10,000 Suit Shibes", "Get 10,000 Suit Shibes.", "img/achi/placeholder.png", new Ut(2, "kittens", 1e4)), new Wt(2399, "Exploratory Doge", "Get a Lander Shibe.", "img/achi/placeholder.png", new Ut(2, "rockets", 1)), new Wt(2400, "Landing To Victory", "Get 10 Lander Shibes.", "img/achi/placeholder.png", new Ut(2, "rockets", 10)), new Wt(2401, "Fifty Lander Shibes", "Get 50 Lander Shibes.", "img/achi/placeholder.png", new Ut(2, "rockets", 50)), new Wt(2402, "One Hundred Lander Shibes", "Get 100 Lander Shibes.", "img/achi/placeholder.png", new Ut(2, "rockets", 100)), new Wt(2403, "Five Hundred Lander Shibes", "Get 500 Lander Shibes.", "img/achi/placeholder.png", new Ut(2, "rockets", 500)), new Wt(2404, "One Thousand Lander Shibes", "Get 1000 Lander Shibes.", "img/achi/placeholder.png", new Ut(2, "rockets", 1e3)), new Wt(2405, "1337-MoonKrew #4", "Get 1337 Lander Shibes.", "img/achi/placeholder.png", new Ut(2, "rockets", 1337)), new Wt(2406, "5,000 Lander Shibes", "Get 5,000 Lander Shibes.", "img/achi/placeholder.png", new Ut(2, "rockets", 5e3)), new Wt(2407, "10,000 Lander Shibes", "Get 10,000 Lander Shibes.", "img/achi/placeholder.png", new Ut(2, "rockets", 1e4)), new Wt(2500, "Mars Miner", "Get 10 Mars Bases.", "img/achi/placeholder.png", new Ut(2, "bases", 10)), new Wt(2501, "Fifty Mars Bases", "Get 50 Mars Bases.", "img/achi/placeholder.png", new Ut(2, "bases", 50)), new Wt(2502, "One Hundred Mars Bases", "Get 100 Mars Bases.", "img/achi/placeholder.png", new Ut(2, "bases", 100)), new Wt(2503, "Five Hundred Mars Bases", "Get 500 Mars Bases.", "img/achi/placeholder.png", new Ut(2, "bases", 500)), new Wt(2504, "One Thousand Mars Bases", "Get 1000 Mars Bases.", "img/achi/placeholder.png", new Ut(2, "bases", 1e3)), new Wt(2505, "1337-MoonKrew #5", "Get 1337 Mars Bases.", "img/achi/placeholder.png", new Ut(2, "bases", 1337)), new Wt(2506, "5,000 Mars Bases", "Get 5,000 Mars Bases.", "img/achi/placeholder.png", new Ut(2, "bases", 5e3)), new Wt(2507, "10,000 Mars Bases", "Get 10,000 Mars Bases.", "img/achi/placeholder.png", new Ut(2, "bases", 1e4)), new Wt(2600, "Universe Traveller", "Get 10 Infinite Dogebility Drives.", "img/achi/placeholder.png", new Ut(2, "rigs", 10)), new Wt(2601, "Fifty Infinite Dogebility Drives", "Get 50 Infinite Dogebility Drives.", "img/achi/placeholder.png", new Ut(2, "rigs", 50)), new Wt(2602, "One Hundred Infinite Dogebility Drives", "Get 100 Infinite Dogebility Drives.", "img/achi/placeholder.png", new Ut(2, "rigs", 100)), new Wt(2603, "Five Hundred Infinite Dogebility Drives", "Get 500 Infinite Dogebility Drives.", "img/achi/placeholder.png", new Ut(2, "rigs", 500)), new Wt(2604, "One Thousand Infinite Dogebility Drives", "Get 1000 Infinite Dogebility Drives.", "img/achi/placeholder.png", new Ut(2, "rigs", 1e3)), new Wt(2605, "1337-MoonKrew #6", "Get 1337 Infinite Dogebility Drives.", "img/achi/placeholder.png", new Ut(2, "rigs", 1337)), new Wt(2606, "5,000 Infinite Dogebility Drives", "Get 5,000 Infinite Dogebility Drives.", "img/achi/placeholder.png", new Ut(2, "rigs", 5e3)), new Wt(2607, "10,000 Infinite Dogebility Drives", "Get 10,000 Infinite Dogebility Drives.", "img/achi/placeholder.png", new Ut(2, "rigs", 1e4)), new Wt(2700, "My First Upgrade On The Moon", "Purchase an upgrade on the Moon.", "img/achi/placeholder.png", new Ut(2, "anyups", 0)), new Wt(2701, "Mining Extraordinaire", "Get all pickaxe upgrades on the Moon.", "img/achi/placeholder.png", new Ut(2, "clickups", Yn.currentlevel().upgrades.clickups.length)), new Wt(2702, "I Think We're Done Here", "Get every upgrade on the Moon.", "img/achi/placeholder.png", new Ut(2, "allups", 0)), new Wt(2703, "Moon Shibes... ASSEMBLE!", "Get all Moon Shibe upgrades.", "img/achi/placeholder.png", new Ut(2, "shibeups", Yn.currentlevel().upgrades.shibeups.length)), new Wt(2704, "Vroom Vroom Mtrfkr", "Get all Doge Car upgrades.", "img/achi/placeholder.png", new Ut(2, "kennelsups", Yn.currentlevel().upgrades.kennelsups.length)), new Wt(2705, "A suite, a shower, a shave... and the feel of a suit", "Get all Suit Shibes upgrades.", "img/achi/placeholder.png", new Ut(2, "kittensups", Yn.currentlevel().upgrades.kittensups.length)), new Wt(2706, "Lander Flander", "Get all Lander Shibe upgrades.", "img/achi/placeholder.png", new Ut(2, "rocketups", Yn.currentlevel().upgrades.rocketups.length)), new Wt(2707, "Mars Man", "Get all Mars Base upgrades.", "img/achi/placeholder.png", new Ut(2, "baseups", Yn.currentlevel().upgrades.baseups.length)), new Wt(2708, "What Universe Is It?", "Get all Infinite Dogebility Drive upgrades.", "img/achi/placeholder.png", new Ut(2, "rigups", Yn.currentlevel().upgrades.rigups.length)), new Wt(2709, "Max Percent", "Get all % increase upgrades.", "img/achi/placeholder.png", new Ut(2, "extraups", Yn.currentlevel().upgrades.extraups.length)), new Wt(3001, "What Took Me So Long", "Gone to Mars.", "img/achi/placeholder.png", new Ut(3, "level", 0)), new Wt(3100, "It's a rave!", "Get 10 Party Shibes.", "img/achi/placeholder.png", new Ut(3, "shibes", 10)), new Wt(3101, "Fifty Party Shibes", "Get 50 Party Shibes.", "img/achi/placeholder.png", new Ut(3, "shibes", 50)), new Wt(3102, "One Hundred Party Shibes", "Get 100 Party Shibes.", "img/achi/placeholder.png", new Ut(3, "shibes", 100)), new Wt(3103, "Five Hundred Party Shibes", "Get 500 Party Shibes.", "img/achi/placeholder.png", new Ut(3, "shibes", 500)), new Wt(3104, "One Thousand Party Shibes", "Get 1,000 Party Shibes.", "img/achi/placeholder.png", new Ut(3, "shibes", 1e3)), new Wt(3105, "1337-MarsKrew", "Get 1,337 Party Shibes.", "img/achi/placeholder.png", new Ut(3, "shibes", 1337)), new Wt(3106, "5,000 Party Shibes", "Get 5,000 Party Shibes.", "img/achi/placeholder.png", new Ut(3, "shibes", 5e3)), new Wt(3107, "10,000 Party Shibes", "Get 10,000 Party Shibes.", "img/achi/placeholder.png", new Ut(3, "shibes", 1e4)), new Wt(3200, "Such Curious", "Get 10 CuriosiDoges.", "img/achi/placeholder.png", new Ut(3, "kennels", 10)), new Wt(3201, "Fifty CuriosiDoges", "Get 50 CuriosiDoges.", "img/achi/placeholder.png", new Ut(3, "kennels", 50)), new Wt(3202, "One Hundred CuriosiDoges", "Get 100 CuriosiDoges.", "img/achi/placeholder.png", new Ut(3, "kennels", 100)), new Wt(3203, "Five Hundred CuriosiDoges", "Get 500 CuriosiDoges.", "img/achi/placeholder.png", new Ut(3, "kennels", 500)), new Wt(3204, "One Thousand CuriosiDoges", "Get 1000 CuriosiDoges.", "img/achi/placeholder.png", new Ut(3, "kennels", 1e3)), new Wt(3205, "1337-MarsKrew #2", "Get 1337 CuriosiDoges.", "img/achi/placeholder.png", new Ut(3, "kennels", 1337)), new Wt(3206, "5,000 CuriosiDoges", "Get 5,000 CuriosiDoges.", "img/achi/placeholder.png", new Ut(3, "kennels", 5e3)), new Wt(3207, "10,000 CuriosiDoges", "Get 10,000 CuriosiDoges.", "img/achi/placeholder.png", new Ut(3, "kennels", 1e4)), new Wt(3300, "Mjau", "Get 10 DJ Kittenz.", "img/achi/placeholder.png", new Ut(3, "kittens", 10)), new Wt(3301, "Fifty DJ Kittenz", "Get 50 DJ Kittenz.", "img/achi/placeholder.png", new Ut(3, "kittens", 50)), new Wt(3302, "One Hundred DJ Kittenz", "Get 100 DJ Kittenz.", "img/achi/placeholder.png", new Ut(3, "kittens", 100)), new Wt(3303, "Five Hundred DJ Kittenz", "Get 500 DJ Kittenz.", "img/achi/placeholder.png", new Ut(3, "kittens", 500)), new Wt(3304, "One Thousand DJ Kittenz", "Get 1000 DJ Kittenz.", "img/achi/placeholder.png", new Ut(3, "kittens", 1e3)), new Wt(3305, "1337-MarsKrew #3", "Get 1337 DJ Kittenz.", "img/achi/placeholder.png", new Ut(3, "kittens", 1337)), new Wt(3306, "5,000 DJ Kittenz", "Get 5,000 DJ Kittenz.", "img/achi/placeholder.png", new Ut(3, "kittens", 5e3)), new Wt(3307, "10,000 DJ Kittenz", "Get 10,000 DJ Kittenz.", "img/achi/placeholder.png", new Ut(3, "kittens", 1e4)), new Wt(3399, "Space Funk Activated", "Get a Space Bass.", "img/achi/placeholder.png", new Ut(3, "rockets", 1)), new Wt(3400, "Music Will Save Us", "Get 10 Space Bass.", "img/achi/placeholder.png", new Ut(3, "rockets", 10)), new Wt(3401, "Fifty Space Bass", "Get 50 Space Bass.", "img/achi/placeholder.png", new Ut(3, "rockets", 50)), new Wt(3402, "One Hundred Space Bass", "Get 100 Space Bass.", "img/achi/placeholder.png", new Ut(3, "rockets", 100)), new Wt(3403, "Five Hundred Space Bass", "Get 500 Space Bass.", "img/achi/placeholder.png", new Ut(3, "rockets", 500)), new Wt(3404, "One Thousand Space Bass", "Get 1000 Space Bass.", "img/achi/placeholder.png", new Ut(3, "rockets", 1e3)), new Wt(3405, "1337-MarsKrew #4", "Get 1337 Space Bass.", "img/achi/placeholder.png", new Ut(3, "rockets", 1337)), new Wt(3406, "5,000 Space Bass", "Get 5,000 Space Bass.", "img/achi/placeholder.png", new Ut(3, "rockets", 5e3)), new Wt(3407, "10,000 Space Bass", "Get 10,000 Space Bass.", "img/achi/placeholder.png", new Ut(3, "rockets", 1e4)), new Wt(3500, "Meta Miner", "Get 10 Meta Shibes.", "img/achi/placeholder.png", new Ut(3, "bases", 10)), new Wt(3501, "Fifty Meta Shibes", "Get 50 Meta Shibes.", "img/achi/placeholder.png", new Ut(3, "bases", 50)), new Wt(3502, "One Hundred Meta Shibes", "Get 100 Meta Shibes.", "img/achi/placeholder.png", new Ut(3, "bases", 100)), new Wt(3503, "Five Hundred Meta Shibes", "Get 500 Meta Shibes.", "img/achi/placeholder.png", new Ut(3, "bases", 500)), new Wt(3504, "One Thousand Meta Shibes", "Get 1000 Meta Shibes.", "img/achi/placeholder.png", new Ut(3, "bases", 1e3)), new Wt(3505, "1337-MarsKrew #5", "Get 1337 Meta Shibes.", "img/achi/placeholder.png", new Ut(3, "bases", 1337)), new Wt(3506, "5,000 Meta Shibes", "Get 5,000 Meta Shibes.", "img/achi/placeholder.png", new Ut(3, "bases", 5e3)), new Wt(3507, "10,000 Meta Shibes", "Get 10,000 Meta Shibes.", "img/achi/placeholder.png", new Ut(3, "bases", 1e4)), new Wt(3600, "Life Found A Way", "Get 10 Time Travel T-Rexes.", "img/achi/placeholder.png", new Ut(3, "rigs", 10)), new Wt(3601, "Fifty Time Travel T-Rexes", "Get 50 Time Travel T-Rexes.", "img/achi/placeholder.png", new Ut(3, "rigs", 50)), new Wt(3602, "One Hundred Time Travel T-Rexes", "Get 100 Time Travel T-Rexes.", "img/achi/placeholder.png", new Ut(3, "rigs", 100)), new Wt(3603, "Five Hundred Time Travel T-Rexes", "Get 500 Time Travel T-Rexes.", "img/achi/placeholder.png", new Ut(3, "rigs", 500)), new Wt(3604, "One Thousand Time Travel T-Rexes", "Get 1000 Time Travel T-Rexes.", "img/achi/placeholder.png", new Ut(3, "rigs", 1e3)), new Wt(3605, "1337-MarsKrew #6", "Get 1337 Time Travel T-Rexes.", "img/achi/placeholder.png", new Ut(3, "rigs", 1337)), new Wt(3606, "5,000 Time Travel T-Rexes", "Get 5,000 Time Travel T-Rexes.", "img/achi/placeholder.png", new Ut(3, "rigs", 5e3)), new Wt(3607, "10,000 Time Travel T-Rexes", "Get 10,000 Time Travel T-Rexes.", "img/achi/placeholder.png", new Ut(3, "rigs", 1e4)), new Wt(3700, "Mars Has Upgrades For Me", "Purchase an upgrade on Mars.", "img/achi/placeholder.png", new Ut(3, "anyups", 0)), new Wt(3701, "Phenomenal Mining", "Get all pickaxe upgrades on Mars.", "img/achi/placeholder.png", new Ut(3, "clickups", Yn.currentlevel().upgrades.clickups.length)), new Wt(3702, "Rare Feat", "Get every upgrade on Mars.", "img/achi/placeholder.png", new Ut(3, "allups", 0)), new Wt(3703, "Party On Dude", "Get all Party Shibe upgrades.", "img/achi/placeholder.png", new Ut(3, "shibeups", Yn.currentlevel().upgrades.shibeups.length)), new Wt(3704, "Curiosity", "Get all CuriosiDoges upgrades.", "img/achi/placeholder.png", new Ut(3, "kennelsups", Yn.currentlevel().upgrades.kennelsups.length)), new Wt(3705, "Chika Chika Wa Wa", "Get all DJ Kittenz upgrades.", "img/achi/placeholder.png", new Ut(3, "kittensups", Yn.currentlevel().upgrades.kittensups.length)), new Wt(3706, "The Bass Is Strong With This One", "Get all Space Bass upgrades.", "img/achi/placeholder.png", new Ut(3, "rocketups", Yn.currentlevel().upgrades.rocketups.length)), new Wt(3707, "Meta Man", "Get all Meta Shibe upgrades.", "img/achi/placeholder.png", new Ut(3, "baseups", Yn.currentlevel().upgrades.baseups.length)), new Wt(3708, "Welcome... to Jurassic Bark.", "Get all Time Travel T-Rex upgrades.", "img/achi/placeholder.png", new Ut(3, "rigups", Yn.currentlevel().upgrades.rigups.length)), new Wt(3709, "I'm Giving Her All She's Got Captain", "Get all % increase upgrades.", "img/achi/placeholder.png", new Ut(3, "extraups", Yn.currentlevel().upgrades.extraups.length))
			}

			function qt() {
				$("#showhidediv").addClass("animated fadeInDown duration-10")
			}

			function Qt() {
				requestAnimationFrame(function() {
					vn.html(Ke(Tn.clicks))
				}), soundManager.setup({
					url: "swf/",
					flashVersion: 9,
					preferFlash: !1,
					onready: Xt,
					ontimeout: function() {
						Yn.canhandlesounds = !1
					}
				})
			}

			function Xt() {
				soundManager.createSound({
					id: "coinappear",
					url: "snd/general/Goldencoin_appear.mp3",
					autoLoad: !0,
					autoPlay: !1,
					onload: function() {}
				}), soundManager.createSound({
					id: "coinloop",
					url: "snd/general/Goldencoin_loop_optimized.mp3",
					autoLoad: !0,
					autoPlay: !1,
					onload: function() {}
				}), soundManager.createSound({
					id: "cointaken",
					url: "snd/general/Goldencoin_taken.mp3",
					autoLoad: !0,
					autoPlay: !1
				}), soundManager.createSound({
					id: "achievementunlocked",
					url: "snd/general/Achievement_unlocked.mp3",
					autoLoad: !0,
					autoPlay: !1,
					onload: function() {}
				}), soundManager.createSound({
					id: "chaching",
					url: "snd/general/chaching.mp3",
					autoLoad: !0,
					autoPlay: !1,
					onload: function() {}
				}), soundManager.createSound({
					id: "alert",
					url: "snd/general/alert.mp3",
					autoLoad: !0,
					autoPlay: !1,
					onload: function() {
						lr = !0
					}
				}), soundManager.createSound({
					id: "flyingdoge",
					url: "snd/general/flyingdoge.mp3",
					autoLoad: !0,
					autoPlay: !1,
					onload: function() {}
				}), pr = soundManager.createSound({
					url: "snd/general/pickaxe_1.mp3",
					autoLoad: !0,
					autoPlay: !1,
					volume: 75
				}), mr = soundManager.createSound({
					url: "snd/general/pickaxe_2.mp3",
					autoLoad: !0,
					autoPlay: !1,
					volume: 75
				}), hr = soundManager.createSound({
					url: "snd/general/pickaxe_3.mp3",
					autoLoad: !0,
					autoPlay: !1,
					volume: 75
				}), _r = soundManager.createSound({
					url: "snd/general/pickaxe_4.mp3",
					autoLoad: !0,
					autoPlay: !1,
					volume: 75
				}), fr = soundManager.createSound({
					url: "snd/general/pickaxe_5.mp3",
					autoLoad: !0,
					autoPlay: !1,
					volume: 75
				}), cr = new Array(pr, mr, hr, _r, fr), Kt(), at(), soundManager.createSound({
					id: "earthmusic",
					url: "snd/general/Musics_loop_mastered.mp3",
					autoLoad: !0,
					autoPlay: !1,
					onload: function() {
						Zt()
					}
				}), soundManager.createSound({
					id: "moonmusic",
					url: "snd/general/moonmusic.mp3",
					autoLoad: !1,
					autoPlay: !1,
					onload: function() {
						Yn.moonmusicloaded = !0
					}
				}), soundManager.createSound({
					id: "marsmusic",
					url: "snd/general/marsmusic.mp3",
					autoLoad: !1,
					autoPlay: !1,
					onload: function() {
						Yn.marsmusicloaded = !0
					}
				})
			}

			function Zt() {
				soundManager.createSound({
					id: "musicintro",
					url: "snd/general/Musics_intro_mastered2.mp3",
					autoLoad: !0,
					autoPlay: !1,
					onload: function() {
						Yn.musicloaded = !0
					}
				})
			}

			function en() {
				var e = !1,
					t = tn();
				t > 1 && (t > Tn.level ? (e = !0, nn(Tn.level + 1)) : Tn.level == t && (e = !0, nn(1))), e || alert("According to our records, you have not visited any other locations. The cost to launch to the moon is 50 BILLION dogecoin! It will launch YOU to the moon (not your helpers).")
			}

			function tn() {
				var e = 1;
				return Tn.level2.alltimecoins > 0 && (e = 2), Tn.level3.alltimecoins > 0 && (e = 3), e
			}

			function nn(e) {
				Yn.persec = 0, Yn.dontsave = !0, Yn.achievementsenabled = !1, Tn.level = e, ut(), Yn.achievementsenabled = !0, Yn.dontsave = !1
			}

			function rn() {
				function e() {
					o = sounds ? "on" : "off";
					var e = "";
					e += '<div id="moondialog" title="Going to the moon, hold on!" style="position:relative">', e += '<span id="moontext"><br/>Preparing to launch, please wait...</span><img src="img/loading.gif" class="toprightimg"/><div id="volumeicon3" class="small" style="position:absolute; left:5px;top:5px;"><a id="quickmute3" href="#"><span id="muteicon3" class="ui-icon ui-icon-volume-' + o + '"></span></a>(Sound recommended)</div></div>', e += '<div id="flyingrocket"></div>', $("#extracontainer").append(e), $("#moondialog").dialog({
						dialogClass: "no-close",
						show: {
							effect: "blind",
							duration: 1e3
						},
						hide: {
							effect: "explode",
							duration: 1e3
						},
						minHeight: 400,
						minWidth: 600,
						resizable: !1,
						draggable: !1,
						modal: !1,
						closeOnEscape: !1
					}), $("#moondialog").jrumble(), $("#quickmute3").click(function() {
						sounds ? ($("#muteicon2").removeClass("ui-icon-volume-on"), $("#muteicon2").addClass("ui-icon-volume-off"), $("#muteicon3").removeClass("ui-icon-volume-on"), $("#muteicon3").addClass("ui-icon-volume-off")) : ($("#muteicon2").removeClass("ui-icon-volume-off"), $("#muteicon2").addClass("ui-icon-volume-on"), $("#muteicon3").removeClass("ui-icon-volume-off"), $("#muteicon3").addClass("ui-icon-volume-on")), B()
					}), Yn.canhandlesounds ? soundManager.createSound({
						id: "moon-launch",
						url: "snd/general/launch.mp3",
						autoLoad: !0,
						autoPlay: !1,
						onload: function() {
							soundManager.play("moon-launch"), t()
						}
					}) : t()
				}

				function t() {
					switch (a) {
						case 0:
							o = sounds ? "on" : "off";
							var e = "";
							e += '<div id="moondialog2" title="Such Speech" style="position:relative">', e += '<span id="moontext2"></span><img src="img/doge_speech.png" style="position:absolute;right:5px;bottom:5px;"/><div id="volumeicon2" class="small" style="position:absolute; left:5px;top:5px;"><a id="quickmute2" href="#"><span id="muteicon2" class="ui-icon ui-icon-volume-' + o + '"></span></a>(Sound recommended)</div></div>', $("#extracontainer").append(e), $("#moondialog2").dialog({
								dialogClass: "no-close",
								show: {
									effect: "slide",
									duration: 2e3,
									direction: "left"
								},
								hide: {
									effect: "slide",
									duration: 2e3,
									direction: "right"
								},
								minHeight: 500,
								minWidth: 600,
								resizable: !1,
								draggable: !1,
								modal: !0,
								closeOnEscape: !1
							}), $("#quickmute2").click(function() {
								sounds ? ($("#muteicon2").removeClass("ui-icon-volume-on"), $("#muteicon2").addClass("ui-icon-volume-off"), $("#muteicon3").removeClass("ui-icon-volume-on"), $("#muteicon3").addClass("ui-icon-volume-off")) : ($("#muteicon2").removeClass("ui-icon-volume-off"), $("#muteicon2").addClass("ui-icon-volume-on"), $("#muteicon3").removeClass("ui-icon-volume-off"), $("#muteicon3").addClass("ui-icon-volume-on")), B()
							});
							break;
						case 2:
							$("#moontext2").append("<br/>WE CHOOSE TO GO TO THE MOON");
							break;
						case 4:
							$("#moontext2").append("<br/>NOT BECAUSE IT IS EASY");
							break;
						case 6:
							$("#moontext2").append("<br/>BUT BECAUSE IT IS <strong>WOW</strong>");
							break;
						case 8:
							$("#moontext2").append("<br/>BECAUSE THAT WOW");
							break;
						case 10:
							$("#moontext2").append("<br/>WILL SERVE TO ORGANIZE");
							break;
						case 12:
							$("#moontext2").append("<br/>A NATION OF SHIBES");
							break;
						case 13:
							$("#moontext2").append("<br/>OF OUR DOGEMINING SKILLS");
							break;
						case 14:
							$("#moondialog2").dialog("close")
					}
					a++, 15 > a ? setTimeout(function() {
						t()
					}, 1e3) : n()
				}

				function n() {
					function e() {
						$("#moondialog2").dialog("destroy"), $("#moondialog").dialog("destroy"), $("#extracontainer").empty()
					}
					switch (i) {
						case 0:
							break;
						case 1:
							$("#moontext").append("<br/>Ignition sequence start.");
							break;
						case 3:
							$("#moontext").append("<br/>6...");
							break;
						case 4:
							$("#moontext").append("<br/>5...");
							break;
						case 5:
							$("#moontext").append("<br/>4...");
							break;
						case 6:
							$("#moontext").append("<br/>3...");
							break;
						case 7:
							$("#moontext").append("<br/>2...");
							break;
						case 8:
							$("#moontext").append("<br/>1...");
							break;
						case 9:
							r(), $("#moontext").append("<br/>0."), $("#moondialog").trigger("startRumble"), $("#moondialog2").dialog("destroy").remove()
					}
					i++, 13 > i ? setTimeout(function() {
						n()
					}, 1100) : setTimeout(function() {
						_t(), $("#moondialog").trigger("stopRumble"), $("#moondialog").dialog("close"), $("#tabs").tabs("option", "active", 0), $("#supermegacontainer").show("shake", null, 1e3, e), Tn.maxlevel < 2 && (Tn.maxlevel = 2), nn(2), Yn.loading_new_level = !1
					}, 3500)
				}

				function r() {
					function e(e, n, r, o) {
						e.css(n), e.animate(r, o, "easeInQuad", t)
					}

					function t() {
						$("#flyingrocket").css({
							display: "none"
						}), $("#flyingrocket").remove()
					}
					var n = $(document).width(),
						r = $(document).height();
					$("#flyingrocket").removeClass("rightsiderocket"), e($("#flyingrocket"), {
						left: -600,
						top: r / 2
					}, {
						left: n - 300,
						top: -600
					}, 3500)
				}
				console.log("Levels.js: Loading level 2!"), Yn.loading_new_level = !0, $("#supermegacontainer").hide("fade", null, 1e3, e), ft(), At(), $("#BG").css("opacity", 0), $("#BG").css("background-image", 'url("./img/bg/bg001.jpg")'), $("#BG2").css("background-image", 'url("./img/bg/bg001.jpg")'), Qn = 1, soundManager.getSoundById("moonmusic").load();
				var o = "",
					a = 0,
					i = 0
			}

			function on() {
				function e() {
					$("#extracontainer").empty(), o = sounds ? "on" : "off";
					var e = "";
					e += '<div id="moondialog" title="Going to Mars, hold on!" style="position:relative">', e += '<span id="moontext"><br/>Preparing to launch, please wait...</span><img src="img/nasadoge_tothemars.png" class="toprightimg" style="margin-top:10px;"/><div id="volumeicon3" class="small" style="position:absolute; left:5px;top:5px;"><a id="quickmute3" href="#"><span id="muteicon3" class="ui-icon ui-icon-volume-' + o + '"></span></a>(Sound recommended)</div></div>', e += '<div id="flyingrocket"></div>', $("#extracontainer").append(e), $("#moondialog").dialog({
						dialogClass: "no-close",
						show: {
							effect: "blind",
							duration: 1e3
						},
						hide: {
							effect: "explode",
							duration: 1e3
						},
						minHeight: 400,
						minWidth: 600,
						resizable: !1,
						draggable: !1,
						modal: !1,
						closeOnEscape: !1
					}), $("#moondialog").jrumble(), $("#quickmute3").click(function() {
						sounds ? ($("#muteicon2").removeClass("ui-icon-volume-on"), $("#muteicon2").addClass("ui-icon-volume-off"), $("#muteicon3").removeClass("ui-icon-volume-on"), $("#muteicon3").addClass("ui-icon-volume-off")) : ($("#muteicon2").removeClass("ui-icon-volume-off"), $("#muteicon2").addClass("ui-icon-volume-on"), $("#muteicon3").removeClass("ui-icon-volume-off"), $("#muteicon3").addClass("ui-icon-volume-on")), B()
					}), Yn.canhandlesounds ? soundManager.createSound({
						id: "mars-launch",
						url: "snd/general/launch_mars.mp3",
						autoLoad: !0,
						autoPlay: !1,
						onload: function() {
							soundManager.play("mars-launch"), t()
						}
					}) : t()
				}

				function t() {
					switch (a) {
						case 0:
							o = sounds ? "on" : "off";
							var e = "";
							e += '<div id="moondialog2" title="Such Speech" style="position:relative">', e += '<span id="moontext2" style="float:right;"></span><img src="img/doge_speech.png" style="position:absolute;left:5px;bottom:5px;"/><div id="volumeicon2" class="small" style="position:absolute; left:5px;top:5px;"><a id="quickmute2" href="#"><span id="muteicon2" class="ui-icon ui-icon-volume-' + o + '"></span></a>(Sound recommended)</div></div>', $("#extracontainer").append(e), $("#moondialog2").dialog({
								dialogClass: "no-close",
								show: {
									effect: "slide",
									duration: 2e3,
									direction: "left"
								},
								hide: {
									effect: "slide",
									duration: 2e3,
									direction: "right"
								},
								minHeight: 500,
								minWidth: 600,
								resizable: !1,
								draggable: !1,
								modal: !0,
								closeOnEscape: !1
							}), $("#quickmute2").click(function() {
								sounds ? ($("#muteicon2").removeClass("ui-icon-volume-on"), $("#muteicon2").addClass("ui-icon-volume-off"), $("#muteicon3").removeClass("ui-icon-volume-on"), $("#muteicon3").addClass("ui-icon-volume-off")) : ($("#muteicon2").removeClass("ui-icon-volume-off"), $("#muteicon2").addClass("ui-icon-volume-on"), $("#muteicon3").removeClass("ui-icon-volume-off"), $("#muteicon3").addClass("ui-icon-volume-on")), B()
							});
							break;
						case 2:
							$("#moontext2").append("<br/>WE CHOOSE TO GO TO MARS");
							break;
						case 4:
							$("#moontext2").append("<br/>NOT BECAUSE IT IS EASY");
							break;
						case 6:
							$("#moontext2").append("<br/>BUT BECAUSE IT IS <strong>WOW</strong>");
							break;
						case 8:
							$("#moontext2").append("<br/>BECAUSE THAT WOW");
							break;
						case 10:
							$("#moontext2").append("<br/>WILL SERVE ORGANIZE");
							break;
						case 11:
							$("#moontext2").append("<br/>A SOLAR SYSTEM OF SHIBES");
							break;
						case 14:
							$("#moontext2").append("<br/>OF OUR DOGEMINING SKILLS"), $("#moondialog2").dialog("close")
					}
					a++, 15 > a ? setTimeout(function() {
						t()
					}, 1e3) : n()
				}

				function n() {
					function e() {
						$("#moondialog2").dialog("destroy"), $("#moondialog").dialog("destroy"), $("#extracontainer").empty()
					}
					switch (i) {
						case 0:
							break;
						case 1:
							$("#moontext").append("<br/>Ignition sequence start.");
							break;
						case 2:
							$("#moontext").append("<br/>6...");
							break;
						case 3:
							$("#moontext").append("<br/>5...");
							break;
						case 4:
							$("#moontext").append("<br/>4...");
							break;
						case 5:
							$("#moontext").append("<br/>3...");
							break;
						case 6:
							$("#moontext").append("<br/>2...");
							break;
						case 7:
							$("#moontext").append("<br/>1...");
							break;
						case 8:
							r(), $("#moontext").append("<br/>0."), $("#moondialog").trigger("startRumble"), $("#moondialog2").dialog("destroy").remove()
					}
					i++, 13 > i ? setTimeout(function() {
						n()
					}, 1100) : setTimeout(function() {
						_t(), $("#moondialog").trigger("stopRumble"), $("#moondialog").dialog("close"), $("#stylesheet").attr({
							href: "css/mars-theme/jquery-ui-1.10.4.custom.min.css"
						}), $("#tabs").tabs("option", "active", 0), $("#supermegacontainer").show("shake", null, 1e3, e), Tn.maxlevel < 3 && (Tn.maxlevel = 3), nn(3), Yn.loading_new_level = !1
					}, 3500)
				}

				function r() {
					function e(e, n, r, o) {
						e.css(n), e.animate(r, o, "easeInQuad", t)
					}

					function t() {
						$("#flyingrocket").css({
							display: "none"
						}), $("#flyingrocket").remove()
					}
					var n = $(document).width(),
						r = $(document).height();
					$("#flyingrocket").addClass("rightsiderocket"), e($("#flyingrocket"), {
						left: n + 600,
						top: r / 2 + 100
					}, {
						left: 100,
						top: -600
					}, 3500)
				}
				console.log("Levels.js: Loading level 3!"), Yn.loading_new_level = !0, $("#supermegacontainer").hide("fade", null, 1e3, e), ft(), At(), $("#BG").css("background-image", 'url("./img/bg/bg103.jpg")'), $("#BG2").css("background-image", 'url("./img/bg/bg103.jpg")'), soundManager.getSoundById("marsmusic").load();
				var o = "",
					a = 0,
					i = 0
			}

			function an() {
				! function() {
					var e = document.createElement("script");
					e.onload = function() {
						var e = new Stats;
						e.domElement.style.cssText = "position:fixed;left:0;top:0;z-index:10000", document.body.appendChild(e.domElement), requestAnimationFrame(function t() {
							e.update(), requestAnimationFrame(t)
						})
					}, e.src = "//rawgit.com/mrdoob/stats.js/master/build/stats.min.js", document.head.appendChild(e)
				}()
			}

			function sn() {
				"localhost" == window.location.host && (vr = !0, console.log("#### Dev mode activated"))
			}
			e.env.NODE_ENV = "production";
			for (var ln = t(2), un = t(34), dn = t(172), cn = 1e6, pn = []; cn--;) pn.push(Math.random());
			var mn = $("body"),
				hn = $("#mined strong"),
				_n = ($(".mined-modifier"), $(".mined-persec")),
				fn = $("#news").find("span"),
				vn = $("#howmanyclicksbro"),
				gn = $("#miner"),
				yn = $("#timeplayed"),
				bn = (mn.append('<div class="such overlay noselect" />').children(".such.overlay.noselect").css({
					position: "fixed",
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					pointerEvents: "none",
					overflow: "hidden"
				}), $.extend(["mine", "wow", "mining", "coins", "v rich", "mining", "doge help", "coins", "yay", "dogecoin", "pickaxe", "master miner", "10/10"], bn)),
				Mn = $.extend(["chezburgr", "plz", "milk", "coins?", "doge cool guy", "kitten help", "no worry", "master doge", "so heavy", "camera", "2/10"], Mn),
				kn = $.extend(["mine", "wow", "mining", "coins", "v rich", "mining", "doge help", "coins", "yay", "dogecoin", "pickaxe", "master miner", "10/10"], kn),
				wn = ($.extend(["mine", "wow", "mining", "coins", "v rich", "mining", "doge help", "coins", "yay", "dogecoin", "pickaxe", "master miner", "10/10"], kn), $.extend(["mine", "wow", "rave", "coins", "v rich", "raving", "doge dance", "coins", "yay", "party", "dogecoin", "glowstick", "master raver", "10/10"], wn)),
				Dn = $.extend(["mine", "wow", "mining", "coins", "v rich", "mining", "doge help", "coins", "yay", "dogecoin", "pickaxe", "master miner", "10/10"], wn),
				Ln = 3,
				Tn = {
					animate: !0,
					bganim: !0,
					bonuscoins: 0,
					ceffects: !0,
					clicks: 0,
					currentlevel: function() {
						return 1 == Tn.level ? Tn.level1 : 2 == Tn.level ? Tn.level2 : 3 == Tn.level ? Tn.level3 : void 0
					},
					level1: l(),
					level2: l(),
					level3: l(),
					level: 1,
					maxlevel: 1,
					music: !0,
					sounds2: !0,
					sounds: !0,
					timeplayed: 0,
					version: 3
				},
				Yn = {
					achievementsenabled: !1,
					animations: {
						shopitem: "animated flash duration-5"
					},
					animatecoins: !1,
					animatecoinstimeout: !1,
					before: null,
					bonusactive: !1,
					bonuspercent: 1,
					bonuspercentnice: 0,
					buybuttons: {
						buyshibe: $("#buyshibe"),
						buykitten: $("#buykitten"),
						buykennel: $("#buykennel"),
						buyrocket: $("#buyrocket"),
						buybase: $("#buybase"),
						buyrig: $("#buyrig")
					},
					canhandlesounds: !0,
					clickcheck: null,
					currentlevel: function() {
						return 1 == Tn.level ? Yn.level1 : 2 == Tn.level ? Yn.level2 : 3 == Tn.level ? Yn.level3 : void 0
					},
					dontsave: !1,
					gamemaxlevel: 3,
					helperanimations: {
						shibes: !0,
						kennels: !0,
						kittens: !0,
						rockets: !0,
						bases: !0,
						rigs: !0,
						dontanimatethis: ""
					},
					helpersettings: {
						max_visible_shibes: 31,
						max_visible_kennels: 13,
						max_visible_kittens: 7,
						max_visible_rockets: 15,
						max_visible_bases: 9,
						max_visible_rigs: 4
					},
					howmanyup: 0,
					howmanyuplasttime: 50,
					howmanyshop: 0,
					howmanyshoplasttime: 50,
					lastclick: null,
					lasttime: null,
					level1: u(1),
					level2: u(2),
					level3: u(3),
					loading_new_level: !1,
					marsmusicloaded: !1,
					moonmusicloaded: !1,
					musicloaded: !1,
					persec: 0,
					progress: 0,
					speedvar: 1,
					started: !1,
					upgradesloaded: !1
				};
			$.cookie.json = !0;
			var En = $(".such.overlay");
			x(), le(), R(), dt(), $("#start-playing").button(), $("#second-part-button").button(), $("#third-part-button").button(), $("#last-part-button").button();
			var Sn = !1,
				xn = !1,
				Nn = !0,
				Cn = 0,
				On = "webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend";
			c(), $("#start-playing").click(function() {
				p()
			}), $("#second-part-button").click(function() {
				m()
			}), $("#third-part-button").click(function() {
				h()
			}), $("#last-part-button").click(function() {
				_()
			}), $(window).on("load", function() {
				$("#loading-indicator").addClass("animated flipOutX duration-5").one(On, function() {
					$("#start-playing").addClass("animated fadeInDown duration-5").attr("style", "visibility:visible;"), $("#start-playing").show(), $(this).remove()
				})
			}), $("#progressBar").hide(), $("#launchbutton").hide(), $("#tipsbutton").click(function() {
				$("#tipsmodal").dialog("open")
			}), $("#tipsmodal").dialog({
				autoOpen: !1,
				show: {
					effect: "fade",
					duration: 500
				},
				hide: {
					effect: "fade",
					duration: 500
				},
				width: 600,
				modal: !0
			}), $("#savemodal").dialog({
				autoOpen: !1,
				show: {
					effect: "fade",
					duration: 200
				},
				hide: {
					effect: "fade",
					duration: 200
				},
				minHeight: 500,
				minWidth: 600
			}), $("#buyshibe").click(function() {
				Tn.currentlevel().coins >= Tn.currentlevel().shibecost && (Tn.currentlevel().shibes++, Tn.currentlevel().coins = Tn.currentlevel().coins - Tn.currentlevel().shibecost, Tn.currentlevel().shibecost = Math.ceil(1.1 * Tn.currentlevel().shibecost), $("#shibes").html(" - " + Tn.currentlevel().shibes), G("#shibesimage", Yn.animations.shopitem), Ne(), Se(), le(), q(), N(), nt(), Ot())
			}), $("#buykennel").click(function() {
				Tn.currentlevel().coins >= Tn.currentlevel().kennelcost && (Tn.currentlevel().kennels++, Tn.currentlevel().coins = Tn.currentlevel().coins - Tn.currentlevel().kennelcost, Tn.currentlevel().kennelcost = Math.ceil(1.1 * Tn.currentlevel().kennelcost), $("#kennels").html(" - " + Tn.currentlevel().kennels), G("#kennelsimage", Yn.animations.shopitem), Ne(), Se(), le(), Q(), N(), nt(), Ot())
			}), $("#buykitten").click(function() {
				Tn.currentlevel().coins >= Tn.currentlevel().kittencost && (Tn.currentlevel().kittens++, Tn.currentlevel().coins = Tn.currentlevel().coins - Tn.currentlevel().kittencost, Tn.currentlevel().kittencost = Math.ceil(1.1 * Tn.currentlevel().kittencost), $("#kittens").html(" - " + Tn.currentlevel().kittens), G("#kittensimage", Yn.animations.shopitem), Ne(), Se(), le(), X(), N(), nt(), Ot())
			}), $("#buyrocket").click(function() {
				Tn.currentlevel().coins >= Tn.currentlevel().rocketcost && (Tn.currentlevel().rockets++, Tn.currentlevel().coins = Tn.currentlevel().coins - Tn.currentlevel().rocketcost, Tn.currentlevel().rocketcost = Math.ceil(1.1 * Tn.currentlevel().rocketcost), $("#rockets").html(" - " + Tn.currentlevel().rockets), G("#rocketsimage", Yn.animations.shopitem), Ne(), Se(), le(), Z(), N(), nt(), Ot())
			}), $("#buybase").click(function() {
				Tn.currentlevel().coins >= Tn.currentlevel().basecost && (Tn.currentlevel().bases++, Tn.currentlevel().coins = Tn.currentlevel().coins - Tn.currentlevel().basecost, Tn.currentlevel().basecost = Math.ceil(1.1 * Tn.currentlevel().basecost), $("#bases").html(" - " + Tn.currentlevel().bases), G("#basesimage", Yn.animations.shopitem), Ne(), Se(), le(), ee(), N(), nt(), Ot())
			}), $("#buyrig").click(function() {
				Tn.currentlevel().coins >= Tn.currentlevel().rigcost && (Tn.currentlevel().rigs++, Tn.currentlevel().coins = Tn.currentlevel().coins - Tn.currentlevel().rigcost, Tn.currentlevel().rigcost = Math.ceil(1.1 * Tn.currentlevel().rigcost), $("#rigs").html(" - " + Tn.currentlevel().rigs), G("#rigsimage", Yn.animations.shopitem), Ne(), Se(), le(), te(), N(), nt(), Ot())
			}), $("#restartbutton").click(function() {
				var e = confirm("Are you sure you want to RESET the game? This deletes your save.");
				if (e) {
					Yn.dontsave = !0, it();
					var t = confirm("Save removed. The page will now refresh.");
					t ? setTimeout(function() {
						location.reload()
					}, 10) : Yn.dontsave = !1
				}
			}), $("#clickeffects").click(function() {
				$("#clickeffects").is(":checked") ? Tn.ceffects = !0 : Tn.ceffects = !1
			}), $("#animations").click(function() {
				$("#animations").is(":checked") ? Tn.animate = !0 : Tn.animate = !1
			}), $("#backgroundanims").click(function() {
				$("#backgroundanims").is(":checked") ? Tn.bganim = !0 : Tn.bganim = !1
			}), $("#sounds").click(function() {
				B()
			}), $("#sounds2").click(function() {
				$("#sounds2").is(":checked") ? Tn.sounds2 = !0 : Tn.sounds2 = !1
			}), $("#music").click(function() {
				$("#music").is(":checked") ? (Tn.music = !0, It()) : (Tn.music = !1, At())
			}), $("#quickmute").click(function() {
				B()
			}), $("#showhidebutton").click(function() {
				function e() {
					$("#social-tooltip").hasClass(a) && $("#social-tooltip").attr("class", o).one(On, function() {
						$(this).css("display", "none")
					})
				}
				var t = "animated fadeOutUp duration-5",
					n = "animated fadeInDown duration-5",
					r = "animated fadeInDown duration-10",
					o = "animated fadeOutUp duration-10",
					a = "animated bob infinite duration-35",
					i = $("#showhidediv");
				i.hasClass(t) ? (e(), i.attr("class", n)) : (i.attr("class", t), $("#social-tooltip").attr("class", r).css("display", "block").one(On, function() {
					$(this).removeClass(r).addClass(a), $(this).click(function() {
						e()
					}), setTimeout(function() {
						e()
					}, 5e3)
				}))
			}), $("#stats").click(function() {
				me()
			});
			for (var Pn = "animated bounceIn", Hn = !1, In = function() {
					return "animated upshake" + Math.floor(6 * n() + 1) + " infinite"
				}, jn = Yn.helpersettings.max_visible_rockets + 1, An = []; jn--;) An.push(In());
			var Rn = !1,
				Vn = [],
				Fn = [];
			Fe();
			var $n = "animated slideInRight duration-5",
				Wn = "animated slideOutLeft duration-5",
				Un = {
					hasrunfor: 0,
					currentstr: "Click on Doge to start mining!"
				};
			Ve(), Un.hasrunfor = 20;
			var Gn = "",
				Bn = !1;
			$("#miner").on("mousedown touchstart", $e), $("#miner").on("mouseup touchend mouseupoutside touchendoutside mouseout", We);
			var zn = $("#mined"),
				Jn = !1,
				Kn = !1,
				qn = (new Array("./img/level1.png"), []);
			1 == Tn.level ? qn = new Array("./img/bg/bg1.jpg", "./img/bg/bg2.jpg", "./img/bg/bg3.jpg", "./img/bg/bg4.jpg", "./img/bg/bg5.jpg", "./img/bg/bg6.jpg", "./img/bg/bg7.jpg", "./img/bg/bg8.jpg", "./img/bg/bg9.jpg") : 2 == Tn.level ? qn = new Array("./img/bg/bg001.jpg", "./img/bg/bg002.jpg?2", "./img/bg/bg003.jpg") : 3 == Tn.level && (qn = new Array("./img/bg/bg101.jpg", "./img/bg/bg102.jpg", "./img/bg/bg103.jpg", "./img/bg/bg104.jpg", "./img/bg/bg105.jpg"));
			var Qn = 1,
				Xn = qn[0];
			$(document).ready(function() {
				$("#launchbutton").text("LAUNCH"), $(".shopbutton").button({
					icons: {
						primary: "ui-icon-cart"
					}
				}), $("#clickeffects").button(), $("#animations").button(), $("#backgroundanims").button(), $("#sounds").button(), $("#sounds2").button(), $("#music").button(), $("#restartbutton").button(), $("#toggle").button(), $("#stats").button(), $("#tabs").tabs(), $("#showhidebutton").button(), $("#launchbutton").button({
					icons: {
						primary: "ui-icon-alert"
					}
				}), $("#exportsave").button(), $("#importsave").button(), $("#achievementswitch").button(), $("#switchlevel").button(), $("#statstab").tabs({
					active: Tn.level - 1
				})
			});
			var Zn, er = 1;
			mn.on("mousedown", "#bonuscoin", function() {
				new d("miner", "Bonus activated for 60 seconds!"), Et(), St(), Tn.bonuscoins++, $("#bonuscoin").delay(50).fadeOut(100).remove(), $(".ui-effects-wrapper").remove(), yt()
			});
			var tr;
			mn.on("mousedown", "#flyingcoin", function() {
				new d("miner", "Special bonus acquired! +20%"), St(), Tn.bonuscoins++, $(this).delay(50).fadeOut(100).remove(), kt()
			});
			var nr = [],
				rr = "38,38,40,40,37,39,37,39,66,65";
			$(document).keydown(function(e) {
				nr.push(e.keyCode), nr.toString().indexOf(rr) >= 0 && ($(document).unbind("keydown", arguments.callee), $.getScript("http://www.cornify.com/js/cornify.js", function() {
					cornify_add(), $(document).keydown(cornify_add), soundManager.createSound({
						id: "BigDoge",
						url: "snd/BigDoge.mp3",
						autoLoad: !0,
						autoPlay: !0
					}), nr = []
				})), nr.length > 1e3 && (nr = [])
			});
			var or, ar = !1,
				ir = !1,
				sr = !1,
				lr = !1,
				ur = [],
				dr = [];
			$.noty.defaults = {
				layout: "center",
				theme: "defaultTheme",
				type: "success",
				text: "html",
				dismissQueue: !0,
				template: '<div class="noty_message noselect"><span class="noty_text"></span><div class="noty_close"></div></div>',
				animation: {
					open: {
						height: "toggle"
					},
					close: {
						height: "toggle"
					},
					easing: "swing",
					speed: 200
				},
				timeout: 4e3,
				force: !1,
				modal: !1,
				maxVisible: 1,
				killer: !1,
				closeWith: ["click"],
				callback: {
					onShow: function() {
						Ct()
					},
					afterShow: function() {},
					onClose: function() {
						var e = {
							to: "#achitab",
							className: "ui-effects-transfer noselect"
						};
						$("#achievementwindow").effect("transfer", e, 500, null)
					},
					afterClose: function() {
						var e = "animated bounce duration-5 delay-2";
						$("#achitab").addClass(e).one(On, function() {
							$(this).removeClass(e)
						})
					}
				},
				buttons: !1
			};
			var cr, pr, mr, hr, _r, fr;
			$("#launchbutton").click(function() {
				Yn.progress = Math.floor(Tn.currentlevel().coins / Yn.currentlevel().launchcost * 100), Yn.progress >= 100 && ($("#launchbutton").hide(), Ht(), 3 == Tn.level && alert("GOOD JOB! But your ???? is in another castle. (Aka it doesnt exist yet... Sorry!) Check the facebook page for news on updates :o)"), 2 == Tn.level && on(), 1 == Tn.level && rn())
			}), $("#exportsave").click(function() {
				var e = rt(),
					t = Base64.encode(e),
					n = '<p>Copy and save this:</p><textarea id="savestring"style="width:100%;height:128px;" readonly>' + t + "</textarea><br/><p>Please note that achievements are currently not saved with this string.</p>";
				$("#savemodal").html(n), $("#savemodal").dialog("open")
			}), $("#importsave").click(function() {
				var e = '<p>Input your save here:</p><textarea id="loadstring"style="width:100%;height:128px;"></textarea><br/><button id="loadbutton">Load</button></div>';
				$("#savemodal").html(e), $("#loadbutton").button(), $("#loadbutton").click(function() {
					Yn.achievementsenabled = !1;
					var e = $("#loadstring").val();
					e = Base64.decode(e);
					var t = JSON.parse(e);
					st(!0, t), $("#savemodal").dialog("close")
				}), $("#savemodal").dialog("open")
			}), $("#switchlevel").click(function() {
				en()
			}), $("#achievementswitch").click(function() {
				Yn.achievementsenabled = !Yn.achievementsenabled
			});
			var vr = !1;
			if (sn(), vr) {
				Yn.achievementsenabled = !1, an(), "#skip" == window.location.hash && (setTimeout(function() {
					p()
				}, 10), setTimeout(function() {
					_()
				}, 50));
				var gr = 65,
					yr = 83,
					br = 68,
					Mr = 66,
					kr = 82;
				$(document).keydown(function(e) {
					e.which == gr && (new d("miner", "+TRIPLED COINS"), Tn.currentlevel().coins = 3 * Tn.currentlevel().coins), e.which == br && (new d("miner", "-DISABLED SAVES"), Yn.dontsave = !0), e.which == yr && (new d("miner", "+ENABLED SAVES"), Yn.dontsave = !1), e.which == Mr && (new d("miner", "+SPAWNED BONUS STUFF"), gt(), Mt()), e.which == kr && (new d("miner", "-REMOVED SAVES"), it())
				})
			}
			var wr = ln.createClass({
					displayName: "Dogecoins",
					getInitialState: function() {
						return {
							data: 0
						}
					},
					componentDidMount: function() {
						this.setCoins(), setInterval(this.setCoins, this.props.pollInterval)
					},
					setCoins: function() {
						this.setState({
							data: Ke(Math.round(Tn.currentlevel().coins, 0)) + " " + Yn.currentlevel().modifier
						})
					},
					render: function() {
						return ln.createElement("div", null, this.state.data)
					}
				}),
				Dr = ln.createClass({
					displayName: "Persec",
					getInitialState: function() {
						return {
							data: 0,
							bonus: !1,
							bonuspercentnice: 0
						}
					},
					componentDidMount: function() {
						this.setPersec(), setInterval(this.setPersec, this.props.pollInterval)
					},
					setPersec: function() {
						this.setState({
							data: qe(Yn.persec, 1) + " " + Yn.currentlevel().modifier,
							bonus: Yn.bonusactive,
							bonuspercentnice: Yn.bonuspercentnice
						})
					},
					render: function() {
						return this.state.bonus ? ln.createElement("div", null, ln.createElement("strong", null, this.state.data, ln.createElement(Lr, {
							data: this.state.bonuspercentnice
						}))) : ln.createElement("div", null, this.state.data)
					}
				}),
				Lr = ln.createClass({
					displayName: "Bonus",
					divStyle: {
						color: "#FF4136"
					},
					render: function() {
						return ln.createElement("div", null, "! (", ln.createElement("span", {
							style: this.divStyle
						}, "+", this.props.data, "% bonus"), ")")
					}
				});
			un.render(ln.createElement(wr, {
				data: Ke(Math.round(Tn.currentlevel().coins, 0)),
				pollInterval: 50
			}), hn[0]), un.render(ln.createElement(Dr, {
				data: qe(Yn.persec, 1),
				pollInterval: 100
			}), _n[0])
		})
	}).call(exports, t(1))
}, function(e, exports) {
	function t() {
		l && a && (l = !1, a.length ? s = a.concat(s) : u = -1, s.length && n())
	}

	function n() {
		if (!l) {
			var e = setTimeout(t);
			l = !0;
			for (var n = s.length; n;) {
				for (a = s, s = []; ++u < n;) a && a[u].run();
				u = -1, n = s.length
			}
			a = null, l = !1, clearTimeout(e)
		}
	}

	function r(e, t) {
		this.fun = e, this.array = t
	}

	function o() {}
	var a, i = e.exports = {},
		s = [],
		l = !1,
		u = -1;
	i.nextTick = function(e) {
		var t = new Array(arguments.length - 1);
		if (arguments.length > 1)
			for (var o = 1; o < arguments.length; o++) t[o - 1] = arguments[o];
		s.push(new r(e, t)), 1 !== s.length || l || setTimeout(n, 0)
	}, r.prototype.run = function() {
		this.fun.apply(null, this.array)
	}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = o, i.addListener = o, i.once = o, i.off = o, i.removeListener = o, i.removeAllListeners = o, i.emit = o, i.binding = function(e) {
		throw new Error("process.binding is not supported")
	}, i.cwd = function() {
		return "/"
	}, i.chdir = function(e) {
		throw new Error("process.chdir is not supported")
	}, i.umask = function() {
		return 0
	}
}, function(e, exports, t) {
	"use strict";
	e.exports = t(3)
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(4),
			o = t(5),
			a = t(17),
			i = t(20),
			s = t(21),
			l = t(26),
			u = t(9),
			d = t(31),
			c = t(32),
			p = t(33),
			m = t(11),
			h = u.createElement,
			_ = u.createFactory,
			f = u.cloneElement;
		if ("production" !== n.env.NODE_ENV) {
			var v = t(27);
			h = v.createElement, _ = v.createFactory, f = v.cloneElement
		}
		var g = r;
		if ("production" !== n.env.NODE_ENV) {
			var y = !1;
			g = function() {
				return "production" !== n.env.NODE_ENV ? m(y, "React.__spread is deprecated and should not be used. Use Object.assign directly or another helper function with similar semantics. You may be seeing this warning due to your compiler. See https://fb.me/react-spread-deprecation for more details.") : void 0, y = !0, r.apply(null, arguments)
			}
		}
		var b = {
			Children: {
				map: o.map,
				forEach: o.forEach,
				count: o.count,
				toArray: o.toArray,
				only: p
			},
			Component: a,
			PureComponent: i,
			createElement: h,
			cloneElement: f,
			isValidElement: u.isValidElement,
			PropTypes: d,
			createClass: s.createClass,
			createFactory: _,
			createMixin: function(e) {
				return e
			},
			DOM: l,
			version: c,
			__spread: g
		};
		e.exports = b
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";

	function t(e) {
		if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
		return Object(e)
	}

	function n() {
		try {
			if (!Object.assign) return !1;
			var e = new String("abc");
			if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
			for (var t = {}, n = 0; 10 > n; n++) t["_" + String.fromCharCode(n)] = n;
			var r = Object.getOwnPropertyNames(t).map(function(e) {
				return t[e]
			});
			if ("0123456789" !== r.join("")) return !1;
			var o = {};
			return "abcdefghijklmnopqrst".split("").forEach(function(e) {
				o[e] = e
			}), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, o)).join("")
		} catch (a) {
			return !1
		}
	}
	var r = Object.prototype.hasOwnProperty,
		o = Object.prototype.propertyIsEnumerable;
	e.exports = n() ? Object.assign : function(e, n) {
		for (var a, i, s = t(e), l = 1; l < arguments.length; l++) {
			a = Object(arguments[l]);
			for (var u in a) r.call(a, u) && (s[u] = a[u]);
			if (Object.getOwnPropertySymbols) {
				i = Object.getOwnPropertySymbols(a);
				for (var d = 0; d < i.length; d++) o.call(a, i[d]) && (s[i[d]] = a[i[d]])
			}
		}
		return s
	}
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		return ("" + e).replace(y, "$&/")
	}

	function r(e, t) {
		this.func = e, this.context = t, this.count = 0
	}

	function o(e, t, n) {
		var r = e.func,
			o = e.context;
		r.call(o, t, e.count++)
	}

	function a(e, t, n) {
		if (null == e) return e;
		var a = r.getPooled(t, n);
		f(e, o, a), r.release(a)
	}

	function i(e, t, n, r) {
		this.result = e, this.keyPrefix = t, this.func = n, this.context = r, this.count = 0
	}

	function s(e, t, r) {
		var o = e.result,
			a = e.keyPrefix,
			i = e.func,
			s = e.context,
			u = i.call(s, t, e.count++);
		Array.isArray(u) ? l(u, o, r, _.thatReturnsArgument) : null != u && (h.isValidElement(u) && (u = h.cloneAndReplaceKey(u, a + (!u.key || t && t.key === u.key ? "" : n(u.key) + "/") + r)), o.push(u))
	}

	function l(e, t, r, o, a) {
		var l = "";
		null != r && (l = n(r) + "/");
		var u = i.getPooled(t, l, o, a);
		f(e, s, u), i.release(u)
	}

	function u(e, t, n) {
		if (null == e) return e;
		var r = [];
		return l(e, r, null, t, n), r
	}

	function d(e, t, n) {
		return null
	}

	function c(e, t) {
		return f(e, d, null)
	}

	function p(e) {
		var t = [];
		return l(e, t, null, _.thatReturnsArgument), t
	}
	var m = t(6),
		h = t(9),
		_ = t(12),
		f = t(14),
		v = m.twoArgumentPooler,
		g = m.fourArgumentPooler,
		y = /\/+/g;
	r.prototype.destructor = function() {
		this.func = null, this.context = null, this.count = 0
	}, m.addPoolingTo(r, v), i.prototype.destructor = function() {
		this.result = null, this.keyPrefix = null, this.func = null, this.context = null, this.count = 0
	}, m.addPoolingTo(i, g);
	var b = {
		forEach: a,
		map: u,
		mapIntoWithKeyPrefixInternal: l,
		count: c,
		toArray: p
	};
	e.exports = b
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(7),
			o = t(8),
			a = function(e) {
				var t = this;
				if (t.instancePool.length) {
					var n = t.instancePool.pop();
					return t.call(n, e), n
				}
				return new t(e)
			},
			i = function(e, t) {
				var n = this;
				if (n.instancePool.length) {
					var r = n.instancePool.pop();
					return n.call(r, e, t), r
				}
				return new n(e, t)
			},
			s = function(e, t, n) {
				var r = this;
				if (r.instancePool.length) {
					var o = r.instancePool.pop();
					return r.call(o, e, t, n), o
				}
				return new r(e, t, n)
			},
			l = function(e, t, n, r) {
				var o = this;
				if (o.instancePool.length) {
					var a = o.instancePool.pop();
					return o.call(a, e, t, n, r), a
				}
				return new o(e, t, n, r)
			},
			u = function(e, t, n, r, o) {
				var a = this;
				if (a.instancePool.length) {
					var i = a.instancePool.pop();
					return a.call(i, e, t, n, r, o), i
				}
				return new a(e, t, n, r, o)
			},
			d = function(e) {
				var t = this;
				e instanceof t ? void 0 : "production" !== n.env.NODE_ENV ? o(!1, "Trying to release an instance into a pool of a different type.") : r("25"), e.destructor(), t.instancePool.length < t.poolSize && t.instancePool.push(e)
			},
			c = 10,
			p = a,
			m = function(e, t) {
				var n = e;
				return n.instancePool = [], n.getPooled = t || p, n.poolSize || (n.poolSize = c), n.release = d, n
			},
			h = {
				addPoolingTo: m,
				oneArgumentPooler: a,
				twoArgumentPooler: i,
				threeArgumentPooler: s,
				fourArgumentPooler: l,
				fiveArgumentPooler: u
			};
		e.exports = h
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";

	function t(e) {
		for (var t = arguments.length - 1, n = "Minified React error #" + e + "; visit http://facebook.github.io/react/docs/error-decoder.html?invariant=" + e, r = 0; t > r; r++) n += "&args[]=" + encodeURIComponent(arguments[r + 1]);
		n += " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
		var o = new Error(n);
		throw o.name = "Invariant Violation", o.framesToPop = 1, o
	}
	e.exports = t
}, function(e, exports, t) {
	(function(t) {
		"use strict";

		function n(e, n, r, o, a, i, s, l) {
			if ("production" !== t.env.NODE_ENV && void 0 === n) throw new Error("invariant requires an error message argument");
			if (!e) {
				var u;
				if (void 0 === n) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
				else {
					var d = [r, o, a, i, s, l],
						c = 0;
					u = new Error(n.replace(/%s/g, function() {
						return d[c++]
					})), u.name = "Invariant Violation"
				}
				throw u.framesToPop = 1, u
			}
		}
		e.exports = n
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			if ("production" !== n.env.NODE_ENV && m.call(e, "ref")) {
				var t = Object.getOwnPropertyDescriptor(e, "ref").get;
				if (t && t.isReactWarning) return !1
			}
			return void 0 !== e.ref
		}

		function o(e) {
			if ("production" !== n.env.NODE_ENV && m.call(e, "key")) {
				var t = Object.getOwnPropertyDescriptor(e, "key").get;
				if (t && t.isReactWarning) return !1
			}
			return void 0 !== e.key
		}

		function a(e, t) {
			var r = function() {
				s || (s = !0, "production" !== n.env.NODE_ENV ? c(!1, "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", t) : void 0)
			};
			r.isReactWarning = !0, Object.defineProperty(e, "key", {
				get: r,
				configurable: !0
			})
		}

		function i(e, t) {
			var r = function() {
				l || (l = !0, "production" !== n.env.NODE_ENV ? c(!1, "%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://fb.me/react-special-props)", t) : void 0)
			};
			r.isReactWarning = !0, Object.defineProperty(e, "ref", {
				get: r,
				configurable: !0
			})
		}
		var s, l, u = t(4),
			d = t(10),
			c = t(11),
			p = t(13),
			m = Object.prototype.hasOwnProperty,
			h = "function" == typeof Symbol && Symbol["for"] && Symbol["for"]("react.element") || 60103,
			_ = {
				key: !0,
				ref: !0,
				__self: !0,
				__source: !0
			},
			f = function(e, t, r, o, a, i, s) {
				var l = {
					$$typeof: h,
					type: e,
					key: t,
					ref: r,
					props: s,
					_owner: i
				};
				if ("production" !== n.env.NODE_ENV) {
					l._store = {};
					var u = Array.isArray(s.children) ? s.children.slice(0) : s.children;
					p ? (Object.defineProperty(l._store, "validated", {
						configurable: !1,
						enumerable: !1,
						writable: !0,
						value: !1
					}), Object.defineProperty(l, "_self", {
						configurable: !1,
						enumerable: !1,
						writable: !1,
						value: o
					}), Object.defineProperty(l, "_shadowChildren", {
						configurable: !1,
						enumerable: !1,
						writable: !1,
						value: u
					}), Object.defineProperty(l, "_source", {
						configurable: !1,
						enumerable: !1,
						writable: !1,
						value: a
					})) : (l._store.validated = !1, l._self = o, l._shadowChildren = u, l._source = a), Object.freeze && (Object.freeze(l.props), Object.freeze(l))
				}
				return l
			};
		f.createElement = function(e, t, s) {
			var l, u = {},
				p = null,
				v = null,
				g = null,
				y = null;
			if (null != t) {
				"production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? c(null == t.__proto__ || t.__proto__ === Object.prototype, "React.createElement(...): Expected props argument to be a plain object. Properties defined in its prototype chain will be ignored.") : void 0), r(t) && (v = t.ref), o(t) && (p = "" + t.key), g = void 0 === t.__self ? null : t.__self, y = void 0 === t.__source ? null : t.__source;
				for (l in t) m.call(t, l) && !_.hasOwnProperty(l) && (u[l] = t[l])
			}
			var b = arguments.length - 2;
			if (1 === b) u.children = s;
			else if (b > 1) {
				for (var M = Array(b), k = 0; b > k; k++) M[k] = arguments[k + 2];
				u.children = M
			}
			if (e && e.defaultProps) {
				var w = e.defaultProps;
				for (l in w) void 0 === u[l] && (u[l] = w[l])
			}
			if ("production" !== n.env.NODE_ENV && (p || v) && ("undefined" == typeof u.$$typeof || u.$$typeof !== h)) {
				var D = "function" == typeof e ? e.displayName || e.name || "Unknown" : e;
				p && a(u, D), v && i(u, D)
			}
			return f(e, p, v, g, y, d.current, u)
		}, f.createFactory = function(e) {
			var t = f.createElement.bind(null, e);
			return t.type = e, t
		}, f.cloneAndReplaceKey = function(e, t) {
			var n = f(e.type, t, e.ref, e._self, e._source, e._owner, e.props);
			return n
		}, f.cloneElement = function(e, t, a) {
			var i, s = u({}, e.props),
				l = e.key,
				p = e.ref,
				h = e._self,
				v = e._source,
				g = e._owner;
			if (null != t) {
				"production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? c(null == t.__proto__ || t.__proto__ === Object.prototype, "React.cloneElement(...): Expected props argument to be a plain object. Properties defined in its prototype chain will be ignored.") : void 0), r(t) && (p = t.ref, g = d.current), o(t) && (l = "" + t.key);
				var y;
				e.type && e.type.defaultProps && (y = e.type.defaultProps);
				for (i in t) m.call(t, i) && !_.hasOwnProperty(i) && (void 0 === t[i] && void 0 !== y ? s[i] = y[i] : s[i] = t[i])
			}
			var b = arguments.length - 2;
			if (1 === b) s.children = a;
			else if (b > 1) {
				for (var M = Array(b), k = 0; b > k; k++) M[k] = arguments[k + 2];
				s.children = M
			}
			return f(e.type, l, p, h, v, g, s)
		}, f.isValidElement = function(e) {
			return "object" == typeof e && null !== e && e.$$typeof === h
		}, f.REACT_ELEMENT_TYPE = h, e.exports = f
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";
	var t = {
		current: null
	};
	e.exports = t
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(12),
			o = r;
		"production" !== n.env.NODE_ENV && ! function() {
			var e = function(e) {
				for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; t > r; r++) n[r - 1] = arguments[r];
				var o = 0,
					a = "Warning: " + e.replace(/%s/g, function() {
						return n[o++]
					});
				"undefined" != typeof console && console.error(a);
				try {
					throw new Error(a)
				} catch (i) {}
			};
			o = function(t, n) {
				if (void 0 === n) throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
				if (0 !== n.indexOf("Failed Composite propType: ") && !t) {
					for (var r = arguments.length, o = Array(r > 2 ? r - 2 : 0), a = 2; r > a; a++) o[a - 2] = arguments[a];
					e.apply(void 0, [n].concat(o))
				}
			}
		}(), e.exports = o
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";

	function t(e) {
		return function() {
			return e
		}
	}
	var n = function() {};
	n.thatReturns = t, n.thatReturnsFalse = t(!1), n.thatReturnsTrue = t(!0), n.thatReturnsNull = t(null), n.thatReturnsThis = function() {
		return this
	}, n.thatReturnsArgument = function(e) {
		return e
	}, e.exports = n
}, function(e, exports, t) {
	(function(t) {
		"use strict";
		var n = !1;
		if ("production" !== t.env.NODE_ENV) try {
			Object.defineProperty({}, "x", {
				get: function() {}
			}), n = !0
		} catch (r) {}
		e.exports = n
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t) {
			return e && "object" == typeof e && null != e.key ? c.escape(e.key) : t.toString(36)
		}

		function o(e, t, a, f) {
			var v = typeof e;
			if ("undefined" !== v && "boolean" !== v || (e = null), null === e || "string" === v || "number" === v || l.isValidElement(e)) return a(f, e, "" === t ? m + r(e, 0) : t), 1;
			var g, y, b = 0,
				M = "" === t ? m : t + h;
			if (Array.isArray(e))
				for (var k = 0; k < e.length; k++) g = e[k], y = M + r(g, k), b += o(g, y, a, f);
			else {
				var w = u(e);
				if (w) {
					var D, L = w.call(e);
					if (w !== e.entries)
						for (var T = 0; !(D = L.next()).done;) g = D.value, y = M + r(g, T++), b += o(g, y, a, f);
					else {
						if ("production" !== n.env.NODE_ENV) {
							var Y = "";
							if (s.current) {
								var E = s.current.getName();
								E && (Y = " Check the render method of `" + E + "`.")
							}
							"production" !== n.env.NODE_ENV ? p(_, "Using Maps as children is not yet fully supported. It is an experimental feature that might be removed. Convert it to a sequence / iterable of keyed ReactElements instead.%s", Y) : void 0, _ = !0
						}
						for (; !(D = L.next()).done;) {
							var S = D.value;
							S && (g = S[1], y = M + c.escape(S[0]) + h + r(g, 0), b += o(g, y, a, f))
						}
					}
				} else if ("object" === v) {
					var x = "";
					if ("production" !== n.env.NODE_ENV && (x = " If you meant to render a collection of children, use an array instead or wrap the object using createFragment(object) from the React add-ons.", e._isReactElement && (x = " It looks like you're using an element created by a different version of React. Make sure to use only one copy of React."), s.current)) {
						var N = s.current.getName();
						N && (x += " Check the render method of `" + N + "`.")
					}
					var C = String(e);
					"production" !== n.env.NODE_ENV ? d(!1, "Objects are not valid as a React child (found: %s).%s", "[object Object]" === C ? "object with keys {" + Object.keys(e).join(", ") + "}" : C, x) : i("31", "[object Object]" === C ? "object with keys {" + Object.keys(e).join(", ") + "}" : C, x)
				}
			}
			return b
		}

		function a(e, t, n) {
			return null == e ? 0 : o(e, "", t, n)
		}
		var i = t(7),
			s = t(10),
			l = t(9),
			u = t(15),
			d = t(8),
			c = t(16),
			p = t(11),
			m = ".",
			h = ":",
			_ = !1;
		e.exports = a
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";

	function t(e) {
		var t = e && (n && e[n] || e[r]);
		return "function" == typeof t ? t : void 0
	}
	var n = "function" == typeof Symbol && Symbol.iterator,
		r = "@@iterator";
	e.exports = t
}, function(e, exports) {
	"use strict";

	function t(e) {
		var t = /[=:]/g,
			n = {
				"=": "=0",
				":": "=2"
			},
			r = ("" + e).replace(t, function(e) {
				return n[e]
			});
		return "$" + r
	}

	function n(e) {
		var t = /(=0|=2)/g,
			n = {
				"=0": "=",
				"=2": ":"
			},
			r = "." === e[0] && "$" === e[1] ? e.substring(2) : e.substring(1);
		return ("" + r).replace(t, function(e) {
			return n[e]
		})
	}
	var r = {
		escape: t,
		unescape: n
	};
	e.exports = r
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t, n) {
			this.props = e, this.context = t, this.refs = s, this.updater = n || a
		}
		var o = t(7),
			a = t(18),
			i = t(13),
			s = t(19),
			l = t(8),
			u = t(11);
		if (r.prototype.isReactComponent = {}, r.prototype.setState = function(e, t) {
				"object" != typeof e && "function" != typeof e && null != e ? "production" !== n.env.NODE_ENV ? l(!1, "setState(...): takes an object of state variables to update or a function which returns an object of state variables.") : o("85") : void 0, this.updater.enqueueSetState(this, e), t && this.updater.enqueueCallback(this, t, "setState")
			}, r.prototype.forceUpdate = function(e) {
				this.updater.enqueueForceUpdate(this), e && this.updater.enqueueCallback(this, e, "forceUpdate")
			}, "production" !== n.env.NODE_ENV) {
			var d = {
					isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
					replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
				},
				c = function(e, t) {
					i && Object.defineProperty(r.prototype, e, {
						get: function() {
							"production" !== n.env.NODE_ENV ? u(!1, "%s(...) is deprecated in plain JavaScript React classes. %s", t[0], t[1]) : void 0
						}
					})
				};
			for (var p in d) d.hasOwnProperty(p) && c(p, d[p])
		}
		e.exports = r
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t) {
			if ("production" !== n.env.NODE_ENV) {
				var r = e.constructor;
				"production" !== n.env.NODE_ENV ? o(!1, "%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.", t, t, r && (r.displayName || r.name) || "ReactClass") : void 0
			}
		}
		var o = t(11),
			a = {
				isMounted: function(e) {
					return !1
				},
				enqueueCallback: function(e, t) {},
				enqueueForceUpdate: function(e) {
					r(e, "forceUpdate")
				},
				enqueueReplaceState: function(e, t) {
					r(e, "replaceState")
				},
				enqueueSetState: function(e, t) {
					r(e, "setState")
				}
			};
		e.exports = a
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(t) {
		"use strict";
		var n = {};
		"production" !== t.env.NODE_ENV && Object.freeze(n), e.exports = n
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n) {
		this.props = e, this.context = t, this.refs = s, this.updater = n || i
	}

	function r() {}
	var o = t(4),
		a = t(17),
		i = t(18),
		s = t(19);
	r.prototype = a.prototype, n.prototype = new r, n.prototype.constructor = n, o(n.prototype, a.prototype), n.prototype.isPureReactComponent = !0, e.exports = n
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t, r) {
			for (var o in t) t.hasOwnProperty(o) && ("production" !== n.env.NODE_ENV ? w("function" == typeof t[o], "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.", e.displayName || "ReactClass", v[r], o) : void 0)
		}

		function o(e, t) {
			var r = Y.hasOwnProperty(t) ? Y[t] : null;
			S.hasOwnProperty(t) && (r !== L.OVERRIDE_BASE ? "production" !== n.env.NODE_ENV ? b(!1, "ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.", t) : p("73", t) : void 0), e && (r !== L.DEFINE_MANY && r !== L.DEFINE_MANY_MERGED ? "production" !== n.env.NODE_ENV ? b(!1, "ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", t) : p("74", t) : void 0)
		}

		function a(e, t) {
			if (t) {
				"function" == typeof t ? "production" !== n.env.NODE_ENV ? b(!1, "ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object.") : p("75") : void 0, _.isValidElement(t) ? "production" !== n.env.NODE_ENV ? b(!1, "ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.") : p("76") : void 0;
				var r = e.prototype,
					a = r.__reactAutoBindPairs;
				t.hasOwnProperty(D) && E.mixins(e, t.mixins);
				for (var i in t)
					if (t.hasOwnProperty(i) && i !== D) {
						var s = t[i],
							d = r.hasOwnProperty(i);
						if (o(d, i), E.hasOwnProperty(i)) E[i](e, s);
						else {
							var c = Y.hasOwnProperty(i),
								m = "function" == typeof s,
								h = m && !c && !d && t.autobind !== !1;
							if (h) a.push(i, s), r[i] = s;
							else if (d) {
								var f = Y[i];
								!c || f !== L.DEFINE_MANY_MERGED && f !== L.DEFINE_MANY ? "production" !== n.env.NODE_ENV ? b(!1, "ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.", f, i) : p("77", f, i) : void 0, f === L.DEFINE_MANY_MERGED ? r[i] = l(r[i], s) : f === L.DEFINE_MANY && (r[i] = u(r[i], s))
							} else r[i] = s, "production" !== n.env.NODE_ENV && "function" == typeof s && t.displayName && (r[i].displayName = t.displayName + "_" + i)
						}
					}
			} else if ("production" !== n.env.NODE_ENV) {
				var v = typeof t,
					g = "object" === v && null !== t;
				"production" !== n.env.NODE_ENV ? w(g, "%s: You're attempting to include a mixin that is either null or not an object. Check the mixins included by the component, as well as any mixins they include themselves. Expected object but got %s.", e.displayName || "ReactClass", null === t ? null : v) : void 0
			}
		}

		function i(e, t) {
			if (t)
				for (var r in t) {
					var o = t[r];
					if (t.hasOwnProperty(r)) {
						var a = r in E;
						a ? "production" !== n.env.NODE_ENV ? b(!1, 'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.', r) : p("78", r) : void 0;
						var i = r in e;
						i ? "production" !== n.env.NODE_ENV ? b(!1, "ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.", r) : p("79", r) : void 0, e[r] = o
					}
				}
		}

		function s(e, t) {
			e && t && "object" == typeof e && "object" == typeof t ? void 0 : "production" !== n.env.NODE_ENV ? b(!1, "mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.") : p("80");
			for (var r in t) t.hasOwnProperty(r) && (void 0 !== e[r] ? "production" !== n.env.NODE_ENV ? b(!1, "mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.", r) : p("81", r) : void 0, e[r] = t[r]);
			return e
		}

		function l(e, t) {
			return function() {
				var n = e.apply(this, arguments),
					r = t.apply(this, arguments);
				if (null == n) return r;
				if (null == r) return n;
				var o = {};
				return s(o, n), s(o, r), o
			}
		}

		function u(e, t) {
			return function() {
				e.apply(this, arguments), t.apply(this, arguments)
			}
		}

		function d(e, t) {
			var r = t.bind(e);
			if ("production" !== n.env.NODE_ENV) {
				r.__reactBoundContext = e, r.__reactBoundMethod = t, r.__reactBoundArguments = null;
				var o = e.constructor.displayName,
					a = r.bind;
				r.bind = function(i) {
					for (var s = arguments.length, l = Array(s > 1 ? s - 1 : 0), u = 1; s > u; u++) l[u - 1] = arguments[u];
					if (i !== e && null !== i) "production" !== n.env.NODE_ENV ? w(!1, "bind(): React component methods may only be bound to the component instance. See %s", o) : void 0;
					else if (!l.length) return "production" !== n.env.NODE_ENV ? w(!1, "bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s", o) : void 0, r;
					var d = a.apply(r, arguments);
					return d.__reactBoundContext = e, d.__reactBoundMethod = t, d.__reactBoundArguments = l, d
				}
			}
			return r
		}

		function c(e) {
			for (var t = e.__reactAutoBindPairs, n = 0; n < t.length; n += 2) {
				var r = t[n],
					o = t[n + 1];
				e[r] = d(e, o)
			}
		}
		var p = t(7),
			m = t(4),
			h = t(17),
			_ = t(9),
			f = t(22),
			v = t(24),
			g = t(18),
			y = t(19),
			b = t(8),
			M = t(23),
			k = t(25),
			w = t(11),
			D = k({
				mixins: null
			}),
			L = M({
				DEFINE_ONCE: null,
				DEFINE_MANY: null,
				OVERRIDE_BASE: null,
				DEFINE_MANY_MERGED: null
			}),
			T = [],
			Y = {
				mixins: L.DEFINE_MANY,
				statics: L.DEFINE_MANY,
				propTypes: L.DEFINE_MANY,
				contextTypes: L.DEFINE_MANY,
				childContextTypes: L.DEFINE_MANY,
				getDefaultProps: L.DEFINE_MANY_MERGED,
				getInitialState: L.DEFINE_MANY_MERGED,
				getChildContext: L.DEFINE_MANY_MERGED,
				render: L.DEFINE_ONCE,
				componentWillMount: L.DEFINE_MANY,
				componentDidMount: L.DEFINE_MANY,
				componentWillReceiveProps: L.DEFINE_MANY,
				shouldComponentUpdate: L.DEFINE_ONCE,
				componentWillUpdate: L.DEFINE_MANY,
				componentDidUpdate: L.DEFINE_MANY,
				componentWillUnmount: L.DEFINE_MANY,
				updateComponent: L.OVERRIDE_BASE
			},
			E = {
				displayName: function(e, t) {
					e.displayName = t
				},
				mixins: function(e, t) {
					if (t)
						for (var n = 0; n < t.length; n++) a(e, t[n])
				},
				childContextTypes: function(e, t) {
					"production" !== n.env.NODE_ENV && r(e, t, f.childContext), e.childContextTypes = m({}, e.childContextTypes, t)
				},
				contextTypes: function(e, t) {
					"production" !== n.env.NODE_ENV && r(e, t, f.context), e.contextTypes = m({}, e.contextTypes, t)
				},
				getDefaultProps: function(e, t) {
					e.getDefaultProps ? e.getDefaultProps = l(e.getDefaultProps, t) : e.getDefaultProps = t
				},
				propTypes: function(e, t) {
					"production" !== n.env.NODE_ENV && r(e, t, f.prop), e.propTypes = m({}, e.propTypes, t)
				},
				statics: function(e, t) {
					i(e, t)
				},
				autobind: function() {}
			},
			S = {
				replaceState: function(e, t) {
					this.updater.enqueueReplaceState(this, e), t && this.updater.enqueueCallback(this, t, "replaceState")
				},
				isMounted: function() {
					return this.updater.isMounted(this)
				}
			},
			x = function() {};
		m(x.prototype, h.prototype, S);
		var N = {
			createClass: function(e) {
				var t = function(e, r, o) {
					"production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? w(this instanceof t, "Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory") : void 0), this.__reactAutoBindPairs.length && c(this), this.props = e, this.context = r, this.refs = y, this.updater = o || g, this.state = null;
					var a = this.getInitialState ? this.getInitialState() : null;
					"production" !== n.env.NODE_ENV && void 0 === a && this.getInitialState._isMockFunction && (a = null), "object" != typeof a || Array.isArray(a) ? "production" !== n.env.NODE_ENV ? b(!1, "%s.getInitialState(): must return an object or null", t.displayName || "ReactCompositeComponent") : p("82", t.displayName || "ReactCompositeComponent") : void 0, this.state = a
				};
				t.prototype = new x, t.prototype.constructor = t, t.prototype.__reactAutoBindPairs = [], T.forEach(a.bind(null, t)), a(t, e), t.getDefaultProps && (t.defaultProps = t.getDefaultProps()), "production" !== n.env.NODE_ENV && (t.getDefaultProps && (t.getDefaultProps.isReactClassApproved = {}), t.prototype.getInitialState && (t.prototype.getInitialState.isReactClassApproved = {})), t.prototype.render ? void 0 : "production" !== n.env.NODE_ENV ? b(!1, "createClass(...): Class specification must implement a `render` method.") : p("83"), "production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? w(!t.prototype.componentShouldUpdate, "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", e.displayName || "A component") : void 0, "production" !== n.env.NODE_ENV ? w(!t.prototype.componentWillRecieveProps, "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", e.displayName || "A component") : void 0);
				for (var r in Y) t.prototype[r] || (t.prototype[r] = null);
				return t
			},
			injection: {
				injectMixin: function(e) {
					T.push(e)
				}
			}
		};
		e.exports = N
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";
	var n = t(23),
		r = n({
			prop: null,
			context: null,
			childContext: null
		});
	e.exports = r
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(8),
			o = function(e) {
				var t, o = {};
				e instanceof Object && !Array.isArray(e) ? void 0 : "production" !== n.env.NODE_ENV ? r(!1, "keyMirror(...): Argument must be an object.") : r(!1);
				for (t in e) e.hasOwnProperty(t) && (o[t] = t);
				return o
			};
		e.exports = o
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(t) {
		"use strict";
		var n = {};
		"production" !== t.env.NODE_ENV && (n = {
			prop: "prop",
			context: "context",
			childContext: "child context"
		}), e.exports = n
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";
	var t = function(e) {
		var t;
		for (t in e)
			if (e.hasOwnProperty(t)) return t;
		return null
	};
	e.exports = t
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(9),
			o = r.createFactory;
		if ("production" !== n.env.NODE_ENV) {
			var a = t(27);
			o = a.createFactory
		}
		var i = {
			a: o("a"),
			abbr: o("abbr"),
			address: o("address"),
			area: o("area"),
			article: o("article"),
			aside: o("aside"),
			audio: o("audio"),
			b: o("b"),
			base: o("base"),
			bdi: o("bdi"),
			bdo: o("bdo"),
			big: o("big"),
			blockquote: o("blockquote"),
			body: o("body"),
			br: o("br"),
			button: o("button"),
			canvas: o("canvas"),
			caption: o("caption"),
			cite: o("cite"),
			code: o("code"),
			col: o("col"),
			colgroup: o("colgroup"),
			data: o("data"),
			datalist: o("datalist"),
			dd: o("dd"),
			del: o("del"),
			details: o("details"),
			dfn: o("dfn"),
			dialog: o("dialog"),
			div: o("div"),
			dl: o("dl"),
			dt: o("dt"),
			em: o("em"),
			embed: o("embed"),
			fieldset: o("fieldset"),
			figcaption: o("figcaption"),
			figure: o("figure"),
			footer: o("footer"),
			form: o("form"),
			h1: o("h1"),
			h2: o("h2"),
			h3: o("h3"),
			h4: o("h4"),
			h5: o("h5"),
			h6: o("h6"),
			head: o("head"),
			header: o("header"),
			hgroup: o("hgroup"),
			hr: o("hr"),
			html: o("html"),
			i: o("i"),
			iframe: o("iframe"),
			img: o("img"),
			input: o("input"),
			ins: o("ins"),
			kbd: o("kbd"),
			keygen: o("keygen"),
			label: o("label"),
			legend: o("legend"),
			li: o("li"),
			link: o("link"),
			main: o("main"),
			map: o("map"),
			mark: o("mark"),
			menu: o("menu"),
			menuitem: o("menuitem"),
			meta: o("meta"),
			meter: o("meter"),
			nav: o("nav"),
			noscript: o("noscript"),
			object: o("object"),
			ol: o("ol"),
			optgroup: o("optgroup"),
			option: o("option"),
			output: o("output"),
			p: o("p"),
			param: o("param"),
			picture: o("picture"),
			pre: o("pre"),
			progress: o("progress"),
			q: o("q"),
			rp: o("rp"),
			rt: o("rt"),
			ruby: o("ruby"),
			s: o("s"),
			samp: o("samp"),
			script: o("script"),
			section: o("section"),
			select: o("select"),
			small: o("small"),
			source: o("source"),
			span: o("span"),
			strong: o("strong"),
			style: o("style"),
			sub: o("sub"),
			summary: o("summary"),
			sup: o("sup"),
			table: o("table"),
			tbody: o("tbody"),
			td: o("td"),
			textarea: o("textarea"),
			tfoot: o("tfoot"),
			th: o("th"),
			thead: o("thead"),
			time: o("time"),
			title: o("title"),
			tr: o("tr"),
			track: o("track"),
			u: o("u"),
			ul: o("ul"),
			"var": o("var"),
			video: o("video"),
			wbr: o("wbr"),
			circle: o("circle"),
			clipPath: o("clipPath"),
			defs: o("defs"),
			ellipse: o("ellipse"),
			g: o("g"),
			image: o("image"),
			line: o("line"),
			linearGradient: o("linearGradient"),
			mask: o("mask"),
			path: o("path"),
			pattern: o("pattern"),
			polygon: o("polygon"),
			polyline: o("polyline"),
			radialGradient: o("radialGradient"),
			rect: o("rect"),
			stop: o("stop"),
			svg: o("svg"),
			text: o("text"),
			tspan: o("tspan")
		};
		e.exports = i
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r() {
			if (l.current) {
				var e = l.current.getName();
				if (e) return " Check the render method of `" + e + "`."
			}
			return ""
		}

		function o(e) {
			var t = r();
			if (!t) {
				var n = "string" == typeof e ? e : e.displayName || e.name;
				n && (t = " Check the top-level render call using <" + n + ">.")
			}
			return t
		}

		function a(e, t) {
			if (e._store && !e._store.validated && null == e.key) {
				e._store.validated = !0;
				var r = f.uniqueKey || (f.uniqueKey = {}),
					a = o(t);
				if (!r[a]) {
					r[a] = !0;
					var i = "";
					e && e._owner && e._owner !== l.current && (i = " It was passed a child from " + e._owner.getName() + "."), "production" !== n.env.NODE_ENV ? _(!1, 'Each child in an array or iterator should have a unique "key" prop.%s%s See https://fb.me/react-warning-keys for more information.%s', a, i, u.getCurrentStackAddendum(e)) : void 0
				}
			}
		}

		function i(e, t) {
			if ("object" == typeof e)
				if (Array.isArray(e))
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						d.isValidElement(r) && a(r, t)
					} else if (d.isValidElement(e)) e._store && (e._store.validated = !0);
					else if (e) {
				var o = h(e);
				if (o && o !== e.entries)
					for (var i, s = o.call(e); !(i = s.next()).done;) d.isValidElement(i.value) && a(i.value, t)
			}
		}

		function s(e) {
			var t = e.type;
			if ("function" == typeof t) {
				var r = t.displayName || t.name;
				t.propTypes && p(t.propTypes, e.props, c.prop, r, e, null), "function" == typeof t.getDefaultProps && ("production" !== n.env.NODE_ENV ? _(t.getDefaultProps.isReactClassApproved, "getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.") : void 0)
			}
		}
		var l = t(10),
			u = t(28),
			d = t(9),
			c = t(22),
			p = t(29),
			m = t(13),
			h = t(15),
			_ = t(11),
			f = {},
			v = {
				createElement: function(e, t, o) {
					var a = "string" == typeof e || "function" == typeof e;
					a || ("production" !== n.env.NODE_ENV ? _(!1, "React.createElement: type should not be null, undefined, boolean, or number. It should be a string (for DOM elements) or a ReactClass (for composite components).%s", r()) : void 0);
					var l = d.createElement.apply(this, arguments);
					if (null == l) return l;
					if (a)
						for (var u = 2; u < arguments.length; u++) i(arguments[u], e);
					return s(l), l
				},
				createFactory: function(e) {
					var t = v.createElement.bind(null, e);
					return t.type = e, "production" !== n.env.NODE_ENV && m && Object.defineProperty(t, "type", {
						enumerable: !1,
						get: function() {
							return "production" !== n.env.NODE_ENV ? _(!1, "Factory.type is deprecated. Access the class directly before passing it to createFactory.") : void 0, Object.defineProperty(this, "type", {
								value: e
							}), e
						}
					}), t
				},
				cloneElement: function(e, t, n) {
					for (var r = d.cloneElement.apply(this, arguments), o = 2; o < arguments.length; o++) i(arguments[o], r.type);
					return s(r), r
				}
			};
		e.exports = v
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			var t = Function.prototype.toString,
				n = Object.prototype.hasOwnProperty,
				r = RegExp("^" + t.call(n).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
			try {
				var o = t.call(e);
				return r.test(o)
			} catch (a) {
				return !1
			}
		}

		function o(e) {
			return "." + e
		}

		function a(e) {
			return parseInt(e.substr(1), 10)
		}

		function i(e) {
			if (L) return v.get(e);
			var t = o(e);
			return y[t]
		}

		function s(e) {
			if (L) v["delete"](e);
			else {
				var t = o(e);
				delete y[t]
			}
		}

		function l(e, t, n) {
			var r = {
				element: t,
				parentID: n,
				text: null,
				childIDs: [],
				isMounted: !1,
				updateCount: 0
			};
			if (L) v.set(e, r);
			else {
				var a = o(e);
				y[a] = r
			}
		}

		function u(e) {
			if (L) g.add(e);
			else {
				var t = o(e);
				b[t] = !0
			}
		}

		function d(e) {
			if (L) g["delete"](e);
			else {
				var t = o(e);
				delete b[t]
			}
		}

		function c() {
			return L ? Array.from(v.keys()) : Object.keys(y).map(a)
		}

		function p() {
			return L ? Array.from(g.keys()) : Object.keys(b).map(a)
		}

		function m(e) {
			var t = i(e);
			if (t) {
				var n = t.childIDs;
				s(e), n.forEach(m)
			}
		}

		function h(e, t, n) {
			return "\n    in " + e + (t ? " (at " + t.fileName.replace(/^.*[\\\/]/, "") + ":" + t.lineNumber + ")" : n ? " (created by " + n + ")" : "")
		}

		function _(e) {
			return null == e ? "#empty" : "string" == typeof e || "number" == typeof e ? "#text" : "string" == typeof e.type ? e.type : e.type.displayName || e.type.name || "Unknown"
		}

		function f(e) {
			var t, r = Y.getDisplayName(e),
				o = Y.getElement(e),
				a = Y.getOwnerID(e);
			return a && (t = Y.getDisplayName(a)), "production" !== n.env.NODE_ENV ? D(o, "ReactComponentTreeHook: Missing React element for debugID %s when building stack", e) : void 0, h(r, o && o._source, t)
		}
		var v, g, y, b, M = t(7),
			k = t(10),
			w = t(8),
			D = t(11),
			L = "function" == typeof Array.from && "function" == typeof Map && r(Map) && null != Map.prototype && "function" == typeof Map.prototype.keys && r(Map.prototype.keys) && "function" == typeof Set && r(Set) && null != Set.prototype && "function" == typeof Set.prototype.keys && r(Set.prototype.keys);
		L ? (v = new Map, g = new Set) : (y = {}, b = {});
		var T = [],
			Y = {
				onSetChildren: function(e, t) {
					var r = i(e);
					r.childIDs = t;
					for (var o = 0; o < t.length; o++) {
						var a = t[o],
							s = i(a);
						s ? void 0 : "production" !== n.env.NODE_ENV ? w(!1, "Expected hook events to fire for the child before its parent includes it in onSetChildren().") : M("140"), null == s.childIDs && "object" == typeof s.element && null != s.element ? "production" !== n.env.NODE_ENV ? w(!1, "Expected onSetChildren() to fire for a container child before its parent includes it in onSetChildren().") : M("141") : void 0, s.isMounted ? void 0 : "production" !== n.env.NODE_ENV ? w(!1, "Expected onMountComponent() to fire for the child before its parent includes it in onSetChildren().") : M("71"), null == s.parentID && (s.parentID = e), s.parentID !== e ? "production" !== n.env.NODE_ENV ? w(!1, "Expected onBeforeMountComponent() parent and onSetChildren() to be consistent (%s has parents %s and %s).", a, s.parentID, e) : M("142", a, s.parentID, e) : void 0
					}
				},
				onBeforeMountComponent: function(e, t, n) {
					l(e, t, n)
				},
				onBeforeUpdateComponent: function(e, t) {
					var n = i(e);
					n && n.isMounted && (n.element = t)
				},
				onMountComponent: function(e) {
					var t = i(e);
					t.isMounted = !0;
					var n = 0 === t.parentID;
					n && u(e)
				},
				onUpdateComponent: function(e) {
					var t = i(e);
					t && t.isMounted && t.updateCount++
				},
				onUnmountComponent: function(e) {
					var t = i(e);
					if (t) {
						t.isMounted = !1;
						var n = 0 === t.parentID;
						n && d(e)
					}
					T.push(e)
				},
				purgeUnmountedComponents: function() {
					if (!Y._preventPurging) {
						for (var e = 0; e < T.length; e++) {
							var t = T[e];
							m(t)
						}
						T.length = 0
					}
				},
				isMounted: function(e) {
					var t = i(e);
					return t ? t.isMounted : !1
				},
				getCurrentStackAddendum: function(e) {
					var t = "";
					if (e) {
						var n = e.type,
							r = "function" == typeof n ? n.displayName || n.name : n,
							o = e._owner;
						t += h(r || "Unknown", e._source, o && o.getName())
					}
					var a = k.current,
						i = a && a._debugID;
					return t += Y.getStackAddendumByID(i)
				},
				getStackAddendumByID: function(e) {
					for (var t = ""; e;) t += f(e), e = Y.getParentID(e);
					return t
				},
				getChildIDs: function(e) {
					var t = i(e);
					return t ? t.childIDs : []
				},
				getDisplayName: function(e) {
					var t = Y.getElement(e);
					return t ? _(t) : null
				},
				getElement: function(e) {
					var t = i(e);
					return t ? t.element : null
				},
				getOwnerID: function(e) {
					var t = Y.getElement(e);
					return t && t._owner ? t._owner._debugID : null
				},
				getParentID: function(e) {
					var t = i(e);
					return t ? t.parentID : null
				},
				getSource: function(e) {
					var t = i(e),
						n = t ? t.element : null,
						r = null != n ? n._source : null;
					return r
				},
				getText: function(e) {
					var t = Y.getElement(e);
					return "string" == typeof t ? t : "number" == typeof t ? "" + t : null
				},
				getUpdateCount: function(e) {
					var t = i(e);
					return t ? t.updateCount : 0
				},
				getRegisteredIDs: c,
				getRootIDs: p
			};
		e.exports = Y
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, r, c, p, m, h) {
			for (var _ in e)
				if (e.hasOwnProperty(_)) {
					var f;
					try {
						"function" != typeof e[_] ? "production" !== n.env.NODE_ENV ? l(!1, "%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.", p || "React class", i[c], _) : a("84", p || "React class", i[c], _) : void 0, f = e[_](r, _, p, c, null, s)
					} catch (v) {
						f = v
					}
					if ("production" !== n.env.NODE_ENV ? u(!f || f instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", i[c], _, typeof f) : void 0, f instanceof Error && !(f.message in d)) {
						d[f.message] = !0;
						var g = "";
						"production" !== n.env.NODE_ENV && (o || (o = t(28)), null !== h ? g = o.getStackAddendumByID(h) : null !== m && (g = o.getCurrentStackAddendum(m))), "production" !== n.env.NODE_ENV ? u(!1, "Failed %s type: %s%s", c, f.message, g) : void 0
					}
				}
		}
		var o, a = t(7),
			i = t(24),
			s = t(30),
			l = t(8),
			u = t(11);
		"undefined" != typeof n && n.env && "test" === n.env.NODE_ENV && (o = t(28));
		var d = {};
		e.exports = r
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";
	var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
	e.exports = t
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t) {
			return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
		}

		function o(e) {
			this.message = e, this.stack = ""
		}

		function a(e) {
			function t(t, a, i, s, l, u, d) {
				if (s = s || Y, u = u || i, "production" !== n.env.NODE_ENV && d !== w && "undefined" != typeof console) {
					var c = s + ":" + i;
					r[c] || ("production" !== n.env.NODE_ENV ? T(!1, "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will not work in the next major version. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.", u, s) : void 0, r[c] = !0)
				}
				if (null == a[i]) {
					var p = k[l];
					return t ? new o("Required " + p + " `" + u + "` was not specified in " + ("`" + s + "`.")) : null
				}
				return e(a, i, s, l, u)
			}
			if ("production" !== n.env.NODE_ENV) var r = {};
			var a = t.bind(null, !1);
			return a.isRequired = t.bind(null, !0), a
		}

		function i(e) {
			function t(t, n, r, a, i, s) {
				var l = t[n],
					u = g(l);
				if (u !== e) {
					var d = k[a],
						c = y(l);
					return new o("Invalid " + d + " `" + i + "` of type " + ("`" + c + "` supplied to `" + r + "`, expected ") + ("`" + e + "`."))
				}
				return null
			}
			return a(t)
		}

		function s() {
			return a(D.thatReturns(null))
		}

		function l(e) {
			function t(t, n, r, a, i) {
				if ("function" != typeof e) return new o("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside arrayOf.");
				var s = t[n];
				if (!Array.isArray(s)) {
					var l = k[a],
						u = g(s);
					return new o("Invalid " + l + " `" + i + "` of type " + ("`" + u + "` supplied to `" + r + "`, expected an array."))
				}
				for (var d = 0; d < s.length; d++) {
					var c = e(s, d, r, a, i + "[" + d + "]", w);
					if (c instanceof Error) return c
				}
				return null
			}
			return a(t)
		}

		function u() {
			function e(e, t, n, r, a) {
				var i = e[t];
				if (!M.isValidElement(i)) {
					var s = k[r],
						l = g(i);
					return new o("Invalid " + s + " `" + a + "` of type " + ("`" + l + "` supplied to `" + n + "`, expected a single ReactElement."))
				}
				return null
			}
			return a(e)
		}

		function d(e) {
			function t(t, n, r, a, i) {
				if (!(t[n] instanceof e)) {
					var s = k[a],
						l = e.name || Y,
						u = b(t[n]);
					return new o("Invalid " + s + " `" + i + "` of type " + ("`" + u + "` supplied to `" + r + "`, expected ") + ("instance of `" + l + "`."))
				}
				return null
			}
			return a(t)
		}

		function c(e) {
			function t(t, n, a, i, s) {
				for (var l = t[n], u = 0; u < e.length; u++)
					if (r(l, e[u])) return null;
				var d = k[i],
					c = JSON.stringify(e);
				return new o("Invalid " + d + " `" + s + "` of value `" + l + "` " + ("supplied to `" + a + "`, expected one of " + c + "."))
			}
			return Array.isArray(e) ? a(t) : ("production" !== n.env.NODE_ENV ? T(!1, "Invalid argument supplied to oneOf, expected an instance of array.") : void 0, D.thatReturnsNull)
		}

		function p(e) {
			function t(t, n, r, a, i) {
				if ("function" != typeof e) return new o("Property `" + i + "` of component `" + r + "` has invalid PropType notation inside objectOf.");
				var s = t[n],
					l = g(s);
				if ("object" !== l) {
					var u = k[a];
					return new o("Invalid " + u + " `" + i + "` of type " + ("`" + l + "` supplied to `" + r + "`, expected an object."))
				}
				for (var d in s)
					if (s.hasOwnProperty(d)) {
						var c = e(s, d, r, a, i + "." + d, w);
						if (c instanceof Error) return c
					}
				return null
			}
			return a(t)
		}

		function m(e) {
			function t(t, n, r, a, i) {
				for (var s = 0; s < e.length; s++) {
					var l = e[s];
					if (null == l(t, n, r, a, i, w)) return null
				}
				var u = k[a];
				return new o("Invalid " + u + " `" + i + "` supplied to " + ("`" + r + "`."))
			}
			return Array.isArray(e) ? a(t) : ("production" !== n.env.NODE_ENV ? T(!1, "Invalid argument supplied to oneOfType, expected an instance of array.") : void 0, D.thatReturnsNull)
		}

		function h() {
			function e(e, t, n, r, a) {
				if (!f(e[t])) {
					var i = k[r];
					return new o("Invalid " + i + " `" + a + "` supplied to " + ("`" + n + "`, expected a ReactNode."))
				}
				return null
			}
			return a(e)
		}

		function _(e) {
			function t(t, n, r, a, i) {
				var s = t[n],
					l = g(s);
				if ("object" !== l) {
					var u = k[a];
					return new o("Invalid " + u + " `" + i + "` of type `" + l + "` " + ("supplied to `" + r + "`, expected `object`."))
				}
				for (var d in e) {
					var c = e[d];
					if (c) {
						var p = c(s, d, r, a, i + "." + d, w);
						if (p) return p
					}
				}
				return null
			}
			return a(t)
		}

		function f(e) {
			switch (typeof e) {
				case "number":
				case "string":
				case "undefined":
					return !0;
				case "boolean":
					return !e;
				case "object":
					if (Array.isArray(e)) return e.every(f);
					if (null === e || M.isValidElement(e)) return !0;
					var t = L(e);
					if (!t) return !1;
					var n, r = t.call(e);
					if (t !== e.entries) {
						for (; !(n = r.next()).done;)
							if (!f(n.value)) return !1
					} else
						for (; !(n = r.next()).done;) {
							var o = n.value;
							if (o && !f(o[1])) return !1
						}
					return !0;
				default:
					return !1
			}
		}

		function v(e, t) {
			return "symbol" === e ? !0 : "Symbol" === t["@@toStringTag"] ? !0 : "function" == typeof Symbol && t instanceof Symbol
		}

		function g(e) {
			var t = typeof e;
			return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : v(t, e) ? "symbol" : t
		}

		function y(e) {
			var t = g(e);
			if ("object" === t) {
				if (e instanceof Date) return "date";
				if (e instanceof RegExp) return "regexp"
			}
			return t
		}

		function b(e) {
			return e.constructor && e.constructor.name ? e.constructor.name : Y
		}
		var M = t(9),
			k = t(24),
			w = t(30),
			D = t(12),
			L = t(15),
			T = t(11),
			Y = "<<anonymous>>",
			E = {
				array: i("array"),
				bool: i("boolean"),
				func: i("function"),
				number: i("number"),
				object: i("object"),
				string: i("string"),
				symbol: i("symbol"),
				any: s(),
				arrayOf: l,
				element: u(),
				instanceOf: d,
				node: h(),
				objectOf: p,
				oneOf: c,
				oneOfType: m,
				shape: _
			};
		o.prototype = Error.prototype, e.exports = E
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";
	e.exports = "15.3.1"
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			return a.isValidElement(e) ? void 0 : "production" !== n.env.NODE_ENV ? i(!1, "React.Children.only expected to receive a single React element child.") : o("143"), e
		}
		var o = t(7),
			a = t(9),
			i = t(8);
		e.exports = r
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";
	e.exports = t(35)
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(36),
			o = t(39),
			a = t(162),
			i = t(59),
			s = t(56),
			l = t(32),
			u = t(167),
			d = t(168),
			c = t(169),
			p = t(11);
		o.inject();
		var m = {
			findDOMNode: u,
			render: a.render,
			unmountComponentAtNode: a.unmountComponentAtNode,
			version: l,
			unstable_batchedUpdates: s.batchedUpdates,
			unstable_renderSubtreeIntoContainer: c
		};
		if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject && __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
				ComponentTree: {
					getClosestInstanceFromNode: r.getClosestInstanceFromNode,
					getNodeFromInstance: function(e) {
						return e._renderedComponent && (e = d(e)), e ? r.getNodeFromInstance(e) : null
					}
				},
				Mount: a,
				Reconciler: i
			}), "production" !== n.env.NODE_ENV) {
			var h = t(49);
			if (h.canUseDOM && window.top === window.self) {
				if ("undefined" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && (navigator.userAgent.indexOf("Chrome") > -1 && -1 === navigator.userAgent.indexOf("Edge") || navigator.userAgent.indexOf("Firefox") > -1)) {
					var _ = -1 === window.location.protocol.indexOf("http") && -1 === navigator.userAgent.indexOf("Firefox");
					console.debug("Download the React DevTools " + (_ ? "and use an HTTP server (instead of a file: URL) " : "") + "for a better development experience: https://fb.me/react-devtools")
				}
				var f = function() {};
				"production" !== n.env.NODE_ENV ? p(-1 !== (f.name || f.toString()).indexOf("testFn"), "It looks like you're using a minified copy of the development build of React. When deploying React apps to production, make sure to use the production build which skips development warnings and is faster. See https://fb.me/react-minification for more details.") : void 0;
				var v = document.documentMode && document.documentMode < 8;
				"production" !== n.env.NODE_ENV ? p(!v, 'Internet Explorer is running in compatibility mode; please add the following tag to your HTML to prevent this from happening: <meta http-equiv="X-UA-Compatible" content="IE=edge" />') : void 0;
				for (var g = [Array.isArray, Array.prototype.every, Array.prototype.forEach, Array.prototype.indexOf, Array.prototype.map, Date.now, Function.prototype.bind, Object.keys, String.prototype.split, String.prototype.trim], y = 0; y < g.length; y++)
					if (!g[y]) {
						"production" !== n.env.NODE_ENV ? p(!1, "One or more ES5 shims expected by React are not available: https://fb.me/react-warning-polyfills") : void 0;
						break
					}
			}
		}
		if ("production" !== n.env.NODE_ENV) {
			var b = t(62),
				M = t(170),
				k = t(171);
			b.debugTool.addHook(M), b.debugTool.addHook(k)
		}
		e.exports = m
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			for (var t; t = e._renderedComponent;) e = t;
			return e
		}

		function o(e, t) {
			var n = r(e);
			n._hostNode = t, t[f] = n
		}

		function a(e) {
			var t = e._hostNode;
			t && (delete t[f], e._hostNode = null)
		}

		function i(e, t) {
			if (!(e._flags & _.hasCachedChildNodes)) {
				var a = e._renderedChildren,
					i = t.firstChild;
				e: for (var s in a)
					if (a.hasOwnProperty(s)) {
						var l = a[s],
							u = r(l)._domID;
						if (0 !== u) {
							for (; null !== i; i = i.nextSibling)
								if (1 === i.nodeType && i.getAttribute(h) === String(u) || 8 === i.nodeType && i.nodeValue === " react-text: " + u + " " || 8 === i.nodeType && i.nodeValue === " react-empty: " + u + " ") {
									o(l, i);
									continue e
								}
								"production" !== n.env.NODE_ENV ? m(!1, "Unable to find element with ID %s.", u) : d("32", u)
						}
					}
				e._flags |= _.hasCachedChildNodes
			}
		}

		function s(e) {
			if (e[f]) return e[f];
			for (var t = []; !e[f];) {
				if (t.push(e), !e.parentNode) return null;
				e = e.parentNode
			}
			for (var n, r; e && (r = e[f]); e = t.pop()) n = r, t.length && i(r, e);
			return n
		}

		function l(e) {
			var t = s(e);
			return null != t && t._hostNode === e ? t : null
		}

		function u(e) {
			if (void 0 === e._hostNode ? "production" !== n.env.NODE_ENV ? m(!1, "getNodeFromInstance: Invalid argument.") : d("33") : void 0, e._hostNode) return e._hostNode;
			for (var t = []; !e._hostNode;) t.push(e), e._hostParent ? void 0 : "production" !== n.env.NODE_ENV ? m(!1, "React DOM tree root should always have a node reference.") : d("34"), e = e._hostParent;
			for (; t.length; e = t.pop()) i(e, e._hostNode);
			return e._hostNode
		}
		var d = t(7),
			c = t(37),
			p = t(38),
			m = t(8),
			h = c.ID_ATTRIBUTE_NAME,
			_ = p,
			f = "__reactInternalInstance$" + Math.random().toString(36).slice(2),
			v = {
				getClosestInstanceFromNode: s,
				getInstanceFromNode: l,
				getNodeFromInstance: u,
				precacheChildNodes: i,
				precacheNode: o,
				uncacheNode: a
			};
		e.exports = v
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t) {
			return (e & t) === t
		}
		var o = t(7),
			a = t(8),
			i = {
				MUST_USE_PROPERTY: 1,
				HAS_BOOLEAN_VALUE: 4,
				HAS_NUMERIC_VALUE: 8,
				HAS_POSITIVE_NUMERIC_VALUE: 24,
				HAS_OVERLOADED_BOOLEAN_VALUE: 32,
				injectDOMPropertyConfig: function(e) {
					var t = i,
						s = e.Properties || {},
						u = e.DOMAttributeNamespaces || {},
						d = e.DOMAttributeNames || {},
						c = e.DOMPropertyNames || {},
						p = e.DOMMutationMethods || {};
					e.isCustomAttribute && l._isCustomAttributeFunctions.push(e.isCustomAttribute);
					for (var m in s) {
						l.properties.hasOwnProperty(m) ? "production" !== n.env.NODE_ENV ? a(!1, "injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.", m) : o("48", m) : void 0;
						var h = m.toLowerCase(),
							_ = s[m],
							f = {
								attributeName: h,
								attributeNamespace: null,
								propertyName: m,
								mutationMethod: null,
								mustUseProperty: r(_, t.MUST_USE_PROPERTY),
								hasBooleanValue: r(_, t.HAS_BOOLEAN_VALUE),
								hasNumericValue: r(_, t.HAS_NUMERIC_VALUE),
								hasPositiveNumericValue: r(_, t.HAS_POSITIVE_NUMERIC_VALUE),
								hasOverloadedBooleanValue: r(_, t.HAS_OVERLOADED_BOOLEAN_VALUE)
							};
						if (f.hasBooleanValue + f.hasNumericValue + f.hasOverloadedBooleanValue <= 1 ? void 0 : "production" !== n.env.NODE_ENV ? a(!1, "DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s", m) : o("50", m), "production" !== n.env.NODE_ENV && (l.getPossibleStandardName[h] = m), d.hasOwnProperty(m)) {
							var v = d[m];
							f.attributeName = v, "production" !== n.env.NODE_ENV && (l.getPossibleStandardName[v] = m)
						}
						u.hasOwnProperty(m) && (f.attributeNamespace = u[m]), c.hasOwnProperty(m) && (f.propertyName = c[m]), p.hasOwnProperty(m) && (f.mutationMethod = p[m]), l.properties[m] = f
					}
				}
			},
			s = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",
			l = {
				ID_ATTRIBUTE_NAME: "data-reactid",
				ROOT_ATTRIBUTE_NAME: "data-reactroot",
				ATTRIBUTE_NAME_START_CHAR: s,
				ATTRIBUTE_NAME_CHAR: s + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",
				properties: {},
				getPossibleStandardName: "production" !== n.env.NODE_ENV ? {} : null,
				_isCustomAttributeFunctions: [],
				isCustomAttribute: function(e) {
					for (var t = 0; t < l._isCustomAttributeFunctions.length; t++) {
						var n = l._isCustomAttributeFunctions[t];
						if (n(e)) return !0
					}
					return !1
				},
				injection: i
			};
		e.exports = l
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";
	var t = {
		hasCachedChildNodes: 1
	};
	e.exports = t
}, function(e, exports, t) {
	"use strict";

	function n() {
		M || (M = !0, f.EventEmitter.injectReactEventListener(_), f.EventPluginHub.injectEventPluginOrder(a), f.EventPluginUtils.injectComponentTree(d), f.EventPluginUtils.injectTreeTraversal(p), f.EventPluginHub.injectEventPluginsByName({
			SimpleEventPlugin: b,
			EnterLeaveEventPlugin: i,
			ChangeEventPlugin: o,
			SelectEventPlugin: y,
			BeforeInputEventPlugin: r
		}), f.HostComponent.injectGenericComponentClass(u), f.HostComponent.injectTextComponentClass(m), f.DOMProperty.injectDOMPropertyConfig(s), f.DOMProperty.injectDOMPropertyConfig(g), f.EmptyComponent.injectEmptyComponentFactory(function(e) {
			return new c(e)
		}), f.Updates.injectReconcileTransaction(v), f.Updates.injectBatchingStrategy(h), f.Component.injectEnvironment(l))
	}
	var r = t(40),
		o = t(55),
		a = t(73),
		i = t(74),
		s = t(79),
		l = t(80),
		u = t(94),
		d = t(36),
		c = t(133),
		p = t(134),
		m = t(135),
		h = t(136),
		_ = t(137),
		f = t(140),
		v = t(141),
		g = t(149),
		y = t(150),
		b = t(151),
		M = !1;
	e.exports = {
		inject: n
	}
}, function(e, exports, t) {
	"use strict";

	function n() {
		var e = window.opera;
		return "object" == typeof e && "function" == typeof e.version && parseInt(e.version(), 10) <= 12
	}

	function r(e) {
		return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey)
	}

	function o(e) {
		switch (e) {
			case Y.topCompositionStart:
				return E.compositionStart;
			case Y.topCompositionEnd:
				return E.compositionEnd;
			case Y.topCompositionUpdate:
				return E.compositionUpdate
		}
	}

	function a(e, t) {
		return e === Y.topKeyDown && t.keyCode === b
	}

	function i(e, t) {
		switch (e) {
			case Y.topKeyUp:
				return -1 !== y.indexOf(t.keyCode);
			case Y.topKeyDown:
				return t.keyCode !== b;
			case Y.topKeyPress:
			case Y.topMouseDown:
			case Y.topBlur:
				return !0;
			default:
				return !1
		}
	}

	function s(e) {
		var t = e.detail;
		return "object" == typeof t && "data" in t ? t.data : null
	}

	function l(e, t, n, r) {
		var l, u;
		if (M ? l = o(e) : x ? i(e, n) && (l = E.compositionEnd) : a(e, n) && (l = E.compositionStart), !l) return null;
		D && (x || l !== E.compositionStart ? l === E.compositionEnd && x && (u = x.getData()) : x = _.getPooled(r));
		var d = f.getPooled(l, t, n, r);
		if (u) d.data = u;
		else {
			var c = s(n);
			null !== c && (d.data = c)
		}
		return m.accumulateTwoPhaseDispatches(d), d
	}

	function u(e, t) {
		switch (e) {
			case Y.topCompositionEnd:
				return s(t);
			case Y.topKeyPress:
				var n = t.which;
				return n !== L ? null : (S = !0, T);
			case Y.topTextInput:
				var r = t.data;
				return r === T && S ? null : r;
			default:
				return null
		}
	}

	function d(e, t) {
		if (x) {
			if (e === Y.topCompositionEnd || i(e, t)) {
				var n = x.getData();
				return _.release(x), x = null, n
			}
			return null
		}
		switch (e) {
			case Y.topPaste:
				return null;
			case Y.topKeyPress:
				return t.which && !r(t) ? String.fromCharCode(t.which) : null;
			case Y.topCompositionEnd:
				return D ? null : t.data;
			default:
				return null
		}
	}

	function c(e, t, n, r) {
		var o;
		if (o = w ? u(e, n) : d(e, n), !o) return null;
		var a = v.getPooled(E.beforeInput, t, n, r);
		return a.data = o, m.accumulateTwoPhaseDispatches(a), a
	}
	var p = t(41),
		m = t(42),
		h = t(49),
		_ = t(50),
		f = t(52),
		v = t(54),
		g = t(25),
		y = [9, 13, 27, 32],
		b = 229,
		M = h.canUseDOM && "CompositionEvent" in window,
		k = null;
	h.canUseDOM && "documentMode" in document && (k = document.documentMode);
	var w = h.canUseDOM && "TextEvent" in window && !k && !n(),
		D = h.canUseDOM && (!M || k && k > 8 && 11 >= k),
		L = 32,
		T = String.fromCharCode(L),
		Y = p.topLevelTypes,
		E = {
			beforeInput: {
				phasedRegistrationNames: {
					bubbled: g({
						onBeforeInput: null
					}),
					captured: g({
						onBeforeInputCapture: null
					})
				},
				dependencies: [Y.topCompositionEnd, Y.topKeyPress, Y.topTextInput, Y.topPaste]
			},
			compositionEnd: {
				phasedRegistrationNames: {
					bubbled: g({
						onCompositionEnd: null
					}),
					captured: g({
						onCompositionEndCapture: null
					})
				},
				dependencies: [Y.topBlur, Y.topCompositionEnd, Y.topKeyDown, Y.topKeyPress, Y.topKeyUp, Y.topMouseDown]
			},
			compositionStart: {
				phasedRegistrationNames: {
					bubbled: g({
						onCompositionStart: null
					}),
					captured: g({
						onCompositionStartCapture: null
					})
				},
				dependencies: [Y.topBlur, Y.topCompositionStart, Y.topKeyDown, Y.topKeyPress, Y.topKeyUp, Y.topMouseDown]
			},
			compositionUpdate: {
				phasedRegistrationNames: {
					bubbled: g({
						onCompositionUpdate: null
					}),
					captured: g({
						onCompositionUpdateCapture: null
					})
				},
				dependencies: [Y.topBlur, Y.topCompositionUpdate, Y.topKeyDown, Y.topKeyPress, Y.topKeyUp, Y.topMouseDown]
			}
		},
		S = !1,
		x = null,
		N = {
			eventTypes: E,
			extractEvents: function(e, t, n, r) {
				return [l(e, t, n, r), c(e, t, n, r)]
			}
		};
	e.exports = N
}, function(e, exports, t) {
	"use strict";
	var n = t(23),
		r = n({
			bubbled: null,
			captured: null
		}),
		o = n({
			topAbort: null,
			topAnimationEnd: null,
			topAnimationIteration: null,
			topAnimationStart: null,
			topBlur: null,
			topCanPlay: null,
			topCanPlayThrough: null,
			topChange: null,
			topClick: null,
			topCompositionEnd: null,
			topCompositionStart: null,
			topCompositionUpdate: null,
			topContextMenu: null,
			topCopy: null,
			topCut: null,
			topDoubleClick: null,
			topDrag: null,
			topDragEnd: null,
			topDragEnter: null,
			topDragExit: null,
			topDragLeave: null,
			topDragOver: null,
			topDragStart: null,
			topDrop: null,
			topDurationChange: null,
			topEmptied: null,
			topEncrypted: null,
			topEnded: null,
			topError: null,
			topFocus: null,
			topInput: null,
			topInvalid: null,
			topKeyDown: null,
			topKeyPress: null,
			topKeyUp: null,
			topLoad: null,
			topLoadedData: null,
			topLoadedMetadata: null,
			topLoadStart: null,
			topMouseDown: null,
			topMouseMove: null,
			topMouseOut: null,
			topMouseOver: null,
			topMouseUp: null,
			topPaste: null,
			topPause: null,
			topPlay: null,
			topPlaying: null,
			topProgress: null,
			topRateChange: null,
			topReset: null,
			topScroll: null,
			topSeeked: null,
			topSeeking: null,
			topSelectionChange: null,
			topStalled: null,
			topSubmit: null,
			topSuspend: null,
			topTextInput: null,
			topTimeUpdate: null,
			topTouchCancel: null,
			topTouchEnd: null,
			topTouchMove: null,
			topTouchStart: null,
			topTransitionEnd: null,
			topVolumeChange: null,
			topWaiting: null,
			topWheel: null
		}),
		a = {
			topLevelTypes: o,
			PropagationPhases: r
		};
	e.exports = a
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t, n) {
			var r = t.dispatchConfig.phasedRegistrationNames[n];
			return b(e, r)
		}

		function o(e, t, o) {
			"production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? g(e, "Dispatching inst must not be null") : void 0);
			var a = t ? y.bubbled : y.captured,
				i = r(e, o, a);
			i && (o._dispatchListeners = f(o._dispatchListeners, i), o._dispatchInstances = f(o._dispatchInstances, e))
		}

		function a(e) {
			e && e.dispatchConfig.phasedRegistrationNames && _.traverseTwoPhase(e._targetInst, o, e)
		}

		function i(e) {
			if (e && e.dispatchConfig.phasedRegistrationNames) {
				var t = e._targetInst,
					n = t ? _.getParentInstance(t) : null;
				_.traverseTwoPhase(n, o, e)
			}
		}

		function s(e, t, n) {
			if (n && n.dispatchConfig.registrationName) {
				var r = n.dispatchConfig.registrationName,
					o = b(e, r);
				o && (n._dispatchListeners = f(n._dispatchListeners, o), n._dispatchInstances = f(n._dispatchInstances, e))
			}
		}

		function l(e) {
			e && e.dispatchConfig.registrationName && s(e._targetInst, null, e)
		}

		function u(e) {
			v(e, a)
		}

		function d(e) {
			v(e, i)
		}

		function c(e, t, n, r) {
			_.traverseEnterLeave(n, r, s, e, t)
		}

		function p(e) {
			v(e, l)
		}
		var m = t(41),
			h = t(43),
			_ = t(45),
			f = t(47),
			v = t(48),
			g = t(11),
			y = m.PropagationPhases,
			b = h.getListener,
			M = {
				accumulateTwoPhaseDispatches: u,
				accumulateTwoPhaseDispatchesSkipTarget: d,
				accumulateDirectDispatches: p,
				accumulateEnterLeaveDispatches: c
			};
		e.exports = M
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(7),
			o = t(44),
			a = t(45),
			i = t(46),
			s = t(47),
			l = t(48),
			u = t(8),
			d = {},
			c = null,
			p = function(e, t) {
				e && (a.executeDispatchesInOrder(e, t), e.isPersistent() || e.constructor.release(e))
			},
			m = function(e) {
				return p(e, !0)
			},
			h = function(e) {
				return p(e, !1)
			},
			_ = function(e) {
				return "." + e._rootNodeID
			},
			f = {
				injection: {
					injectEventPluginOrder: o.injectEventPluginOrder,
					injectEventPluginsByName: o.injectEventPluginsByName
				},
				putListener: function(e, t, a) {
					"function" != typeof a ? "production" !== n.env.NODE_ENV ? u(!1, "Expected %s listener to be a function, instead got type %s", t, typeof a) : r("94", t, typeof a) : void 0;
					var i = _(e),
						s = d[t] || (d[t] = {});
					s[i] = a;
					var l = o.registrationNameModules[t];
					l && l.didPutListener && l.didPutListener(e, t, a)
				},
				getListener: function(e, t) {
					var n = d[t],
						r = _(e);
					return n && n[r]
				},
				deleteListener: function(e, t) {
					var n = o.registrationNameModules[t];
					n && n.willDeleteListener && n.willDeleteListener(e, t);
					var r = d[t];
					if (r) {
						var a = _(e);
						delete r[a]
					}
				},
				deleteAllListeners: function(e) {
					var t = _(e);
					for (var n in d)
						if (d.hasOwnProperty(n) && d[n][t]) {
							var r = o.registrationNameModules[n];
							r && r.willDeleteListener && r.willDeleteListener(e, n), delete d[n][t]
						}
				},
				extractEvents: function(e, t, n, r) {
					for (var a, i = o.plugins, l = 0; l < i.length; l++) {
						var u = i[l];
						if (u) {
							var d = u.extractEvents(e, t, n, r);
							d && (a = s(a, d))
						}
					}
					return a
				},
				enqueueEvents: function(e) {
					e && (c = s(c, e))
				},
				processEventQueue: function(e) {
					var t = c;
					c = null, e ? l(t, m) : l(t, h), c ? "production" !== n.env.NODE_ENV ? u(!1, "processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.") : r("95") : void 0, i.rethrowCaughtError()
				},
				__purge: function() {
					d = {}
				},
				__getListenerBank: function() {
					return d
				}
			};
		e.exports = f
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r() {
			if (l)
				for (var e in u) {
					var t = u[e],
						r = l.indexOf(e);
					if (r > -1 ? void 0 : "production" !== n.env.NODE_ENV ? s(!1, "EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.", e) : i("96", e), !d.plugins[r]) {
						t.extractEvents ? void 0 : "production" !== n.env.NODE_ENV ? s(!1, "EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.", e) : i("97", e), d.plugins[r] = t;
						var a = t.eventTypes;
						for (var c in a) o(a[c], t, c) ? void 0 : "production" !== n.env.NODE_ENV ? s(!1, "EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.", c, e) : i("98", c, e)
					}
				}
		}

		function o(e, t, r) {
			d.eventNameDispatchConfigs.hasOwnProperty(r) ? "production" !== n.env.NODE_ENV ? s(!1, "EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.", r) : i("99", r) : void 0, d.eventNameDispatchConfigs[r] = e;
			var o = e.phasedRegistrationNames;
			if (o) {
				for (var l in o)
					if (o.hasOwnProperty(l)) {
						var u = o[l];
						a(u, t, r)
					}
				return !0
			}
			return e.registrationName ? (a(e.registrationName, t, r), !0) : !1
		}

		function a(e, t, r) {
			if (d.registrationNameModules[e] ? "production" !== n.env.NODE_ENV ? s(!1, "EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.", e) : i("100", e) : void 0, d.registrationNameModules[e] = t, d.registrationNameDependencies[e] = t.eventTypes[r].dependencies, "production" !== n.env.NODE_ENV) {
				var o = e.toLowerCase();
				d.possibleRegistrationNames[o] = e, "onDoubleClick" === e && (d.possibleRegistrationNames.ondblclick = e)
			}
		}
		var i = t(7),
			s = t(8),
			l = null,
			u = {},
			d = {
				plugins: [],
				eventNameDispatchConfigs: {},
				registrationNameModules: {},
				registrationNameDependencies: {},
				possibleRegistrationNames: "production" !== n.env.NODE_ENV ? {} : null,
				injectEventPluginOrder: function(e) {
					l ? "production" !== n.env.NODE_ENV ? s(!1, "EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React.") : i("101") : void 0, l = Array.prototype.slice.call(e), r()
				},
				injectEventPluginsByName: function(e) {
					var t = !1;
					for (var o in e)
						if (e.hasOwnProperty(o)) {
							var a = e[o];
							u.hasOwnProperty(o) && u[o] === a || (u[o] ? "production" !== n.env.NODE_ENV ? s(!1, "EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.", o) : i("102", o) : void 0, u[o] = a, t = !0)
						}
					t && r()
				},
				getPluginModuleForEvent: function(e) {
					var t = e.dispatchConfig;
					if (t.registrationName) return d.registrationNameModules[t.registrationName] || null;
					for (var n in t.phasedRegistrationNames)
						if (t.phasedRegistrationNames.hasOwnProperty(n)) {
							var r = d.registrationNameModules[t.phasedRegistrationNames[n]];
							if (r) return r
						}
					return null
				},
				_resetEventPlugins: function() {
					l = null;
					for (var e in u) u.hasOwnProperty(e) && delete u[e];
					d.plugins.length = 0;
					var t = d.eventNameDispatchConfigs;
					for (var r in t) t.hasOwnProperty(r) && delete t[r];
					var o = d.registrationNameModules;
					for (var a in o) o.hasOwnProperty(a) && delete o[a];
					if ("production" !== n.env.NODE_ENV) {
						var i = d.possibleRegistrationNames;
						for (var s in i) i.hasOwnProperty(s) && delete i[s]
					}
				}
			};
		e.exports = d
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			return e === M.topMouseUp || e === M.topTouchEnd || e === M.topTouchCancel
		}

		function o(e) {
			return e === M.topMouseMove || e === M.topTouchMove
		}

		function a(e) {
			return e === M.topMouseDown || e === M.topTouchStart
		}

		function i(e, t, n, r) {
			var o = e.type || "unknown-event";
			e.currentTarget = k.getNodeFromInstance(r), t ? v.invokeGuardedCallbackWithCatch(o, n, e) : v.invokeGuardedCallback(o, n, e), e.currentTarget = null
		}

		function s(e, t) {
			var r = e._dispatchListeners,
				o = e._dispatchInstances;
			if ("production" !== n.env.NODE_ENV && h(e), Array.isArray(r))
				for (var a = 0; a < r.length && !e.isPropagationStopped(); a++) i(e, t, r[a], o[a]);
			else r && i(e, t, r, o);
			e._dispatchListeners = null, e._dispatchInstances = null
		}

		function l(e) {
			var t = e._dispatchListeners,
				r = e._dispatchInstances;
			if ("production" !== n.env.NODE_ENV && h(e), Array.isArray(t)) {
				for (var o = 0; o < t.length && !e.isPropagationStopped(); o++)
					if (t[o](e, r[o])) return r[o]
			} else if (t && t(e, r)) return r;
			return null
		}

		function u(e) {
			var t = l(e);
			return e._dispatchInstances = null, e._dispatchListeners = null, t
		}

		function d(e) {
			"production" !== n.env.NODE_ENV && h(e);
			var t = e._dispatchListeners,
				r = e._dispatchInstances;
			Array.isArray(t) ? "production" !== n.env.NODE_ENV ? g(!1, "executeDirectDispatch(...): Invalid `event`.") : _("103") : void 0, e.currentTarget = t ? k.getNodeFromInstance(r) : null;
			var o = t ? t(e) : null;
			return e.currentTarget = null, e._dispatchListeners = null, e._dispatchInstances = null, o
		}

		function c(e) {
			return !!e._dispatchListeners
		}
		var p, m, h, _ = t(7),
			f = t(41),
			v = t(46),
			g = t(8),
			y = t(11),
			b = {
				injectComponentTree: function(e) {
					p = e, "production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? y(e && e.getNodeFromInstance && e.getInstanceFromNode, "EventPluginUtils.injection.injectComponentTree(...): Injected module is missing getNodeFromInstance or getInstanceFromNode.") : void 0)
				},
				injectTreeTraversal: function(e) {
					m = e, "production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? y(e && e.isAncestor && e.getLowestCommonAncestor, "EventPluginUtils.injection.injectTreeTraversal(...): Injected module is missing isAncestor or getLowestCommonAncestor.") : void 0)
				}
			},
			M = f.topLevelTypes;
		"production" !== n.env.NODE_ENV && (h = function(e) {
			var t = e._dispatchListeners,
				r = e._dispatchInstances,
				o = Array.isArray(t),
				a = o ? t.length : t ? 1 : 0,
				i = Array.isArray(r),
				s = i ? r.length : r ? 1 : 0;
			"production" !== n.env.NODE_ENV ? y(i === o && s === a, "EventPluginUtils: Invalid `event`.") : void 0
		});
		var k = {
			isEndish: r,
			isMoveish: o,
			isStartish: a,
			executeDirectDispatch: d,
			executeDispatchesInOrder: s,
			executeDispatchesInOrderStopAtTrue: u,
			hasDispatches: c,
			getInstanceFromNode: function(e) {
				return p.getInstanceFromNode(e)
			},
			getNodeFromInstance: function(e) {
				return p.getNodeFromInstance(e)
			},
			isAncestor: function(e, t) {
				return m.isAncestor(e, t)
			},
			getLowestCommonAncestor: function(e, t) {
				return m.getLowestCommonAncestor(e, t)
			},
			getParentInstance: function(e) {
				return m.getParentInstance(e)
			},
			traverseTwoPhase: function(e, t, n) {
				return m.traverseTwoPhase(e, t, n)
			},
			traverseEnterLeave: function(e, t, n, r, o) {
				return m.traverseEnterLeave(e, t, n, r, o)
			},
			injection: b
		};
		e.exports = k
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(t) {
		"use strict";

		function n(e, t, n, o) {
			try {
				return t(n, o)
			} catch (a) {
				return void(null === r && (r = a))
			}
		}
		var r = null,
			o = {
				invokeGuardedCallback: n,
				invokeGuardedCallbackWithCatch: n,
				rethrowCaughtError: function() {
					if (r) {
						var e = r;
						throw r = null, e
					}
				}
			};
		if ("production" !== t.env.NODE_ENV && "undefined" != typeof window && "function" == typeof window.dispatchEvent && "undefined" != typeof document && "function" == typeof document.createEvent) {
			var a = document.createElement("react");
			o.invokeGuardedCallback = function(e, t, n, r) {
				var o = t.bind(null, n, r),
					i = "react-" + e;
				a.addEventListener(i, o, !1);
				var s = document.createEvent("Event");
				s.initEvent(i, !1, !1), a.dispatchEvent(s), a.removeEventListener(i, o, !1)
			}
		}
		e.exports = o
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t) {
			return null == t ? "production" !== n.env.NODE_ENV ? a(!1, "accumulateInto(...): Accumulated items must not be null or undefined.") : o("30") : void 0, null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
		}
		var o = t(7),
			a = t(8);
		e.exports = r
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";

	function t(e, t, n) {
		Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
	}
	e.exports = t
}, function(e, exports) {
	"use strict";
	var t = !("undefined" == typeof window || !window.document || !window.document.createElement),
		n = {
			canUseDOM: t,
			canUseWorkers: "undefined" != typeof Worker,
			canUseEventListeners: t && !(!window.addEventListener && !window.attachEvent),
			canUseViewport: t && !!window.screen,
			isInWorker: !t
		};
	e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		this._root = e, this._startText = this.getText(), this._fallbackText = null
	}
	var r = t(4),
		o = t(6),
		a = t(51);
	r(n.prototype, {
		destructor: function() {
			this._root = null, this._startText = null, this._fallbackText = null
		},
		getText: function() {
			return "value" in this._root ? this._root.value : this._root[a()]
		},
		getData: function() {
			if (this._fallbackText) return this._fallbackText;
			var e, t, n = this._startText,
				r = n.length,
				o = this.getText(),
				a = o.length;
			for (e = 0; r > e && n[e] === o[e]; e++);
			var i = r - e;
			for (t = 1; i >= t && n[r - t] === o[a - t]; t++);
			var s = t > 1 ? 1 - t : void 0;
			return this._fallbackText = o.slice(e, s), this._fallbackText
		}
	}), o.addPoolingTo(n), e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n() {
		return !o && r.canUseDOM && (o = "textContent" in document.documentElement ? "textContent" : "innerText"), o
	}
	var r = t(49),
		o = null;
	e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n, o) {
		return r.call(this, e, t, n, o)
	}
	var r = t(53),
		o = {
			data: null
		};
	r.augmentClass(n, o), e.exports = n
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t, r, o) {
			"production" !== n.env.NODE_ENV && (delete this.nativeEvent, delete this.preventDefault, delete this.stopPropagation), this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = r;
			var a = this.constructor.Interface;
			for (var i in a)
				if (a.hasOwnProperty(i)) {
					"production" !== n.env.NODE_ENV && delete this[i];
					var l = a[i];
					l ? this[i] = l(r) : "target" === i ? this.target = o : this[i] = r[i]
				}
			var u = null != r.defaultPrevented ? r.defaultPrevented : r.returnValue === !1;
			return u ? this.isDefaultPrevented = s.thatReturnsTrue : this.isDefaultPrevented = s.thatReturnsFalse, this.isPropagationStopped = s.thatReturnsFalse, this
		}

		function o(e, t) {
			function r(e) {
				var t = i ? "setting the method" : "setting the property";
				return a(t, "This is effectively a no-op"), e
			}

			function o() {
				var e = i ? "accessing the method" : "accessing the property",
					n = i ? "This is a no-op function" : "This is set to null";
				return a(e, n), t
			}

			function a(t, r) {
				var o = !1;
				"production" !== n.env.NODE_ENV ? l(o, "This synthetic event is reused for performance reasons. If you're seeing this, you're %s `%s` on a released/nullified synthetic event. %s. If you must keep the original synthetic event around, use event.persist(). See https://fb.me/react-event-pooling for more information.", t, e, r) : void 0
			}
			var i = "function" == typeof t;
			return {
				configurable: !0,
				set: r,
				get: o
			}
		}
		var a = t(4),
			i = t(6),
			s = t(12),
			l = t(11),
			u = !1,
			d = "function" == typeof Proxy,
			c = ["dispatchConfig", "_targetInst", "nativeEvent", "isDefaultPrevented", "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"],
			p = {
				type: null,
				target: null,
				currentTarget: s.thatReturnsNull,
				eventPhase: null,
				bubbles: null,
				cancelable: null,
				timeStamp: function(e) {
					return e.timeStamp || Date.now()
				},
				defaultPrevented: null,
				isTrusted: null
			};
		a(r.prototype, {
			preventDefault: function() {
				this.defaultPrevented = !0;
				var e = this.nativeEvent;
				e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, this.isDefaultPrevented = s.thatReturnsTrue)
			},
			stopPropagation: function() {
				var e = this.nativeEvent;
				e && (e.stopPropagation ? e.stopPropagation() : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = s.thatReturnsTrue)
			},
			persist: function() {
				this.isPersistent = s.thatReturnsTrue
			},
			isPersistent: s.thatReturnsFalse,
			destructor: function() {
				var e = this.constructor.Interface;
				for (var t in e) "production" !== n.env.NODE_ENV ? Object.defineProperty(this, t, o(t, e[t])) : this[t] = null;
				for (var r = 0; r < c.length; r++) this[c[r]] = null;
				"production" !== n.env.NODE_ENV && (Object.defineProperty(this, "nativeEvent", o("nativeEvent", null)), Object.defineProperty(this, "preventDefault", o("preventDefault", s)), Object.defineProperty(this, "stopPropagation", o("stopPropagation", s)))
			}
		}), r.Interface = p, "production" !== n.env.NODE_ENV && d && (r = new Proxy(r, {
			construct: function(e, t) {
				return this.apply(e, Object.create(e.prototype), t)
			},
			apply: function(e, t, r) {
				return new Proxy(e.apply(t, r), {
					set: function(e, t, r) {
						return "isPersistent" === t || e.constructor.Interface.hasOwnProperty(t) || -1 !== c.indexOf(t) || ("production" !== n.env.NODE_ENV ? l(u || e.isPersistent(), "This synthetic event is reused for performance reasons. If you're seeing this, you're adding a new property in the synthetic event object. The property is never released. See https://fb.me/react-event-pooling for more information.") : void 0, u = !0), e[t] = r, !0
					}
				})
			}
		})), r.augmentClass = function(e, t) {
			var n = this,
				r = function() {};
			r.prototype = n.prototype;
			var o = new r;
			a(o, e.prototype), e.prototype = o, e.prototype.constructor = e, e.Interface = a({}, n.Interface, t), e.augmentClass = n.augmentClass, i.addPoolingTo(e, i.fourArgumentPooler)
		}, i.addPoolingTo(r, i.fourArgumentPooler), e.exports = r
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n, o) {
		return r.call(this, e, t, n, o)
	}
	var r = t(53),
		o = {
			data: null
		};
	r.augmentClass(n, o), e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		var t = e.nodeName && e.nodeName.toLowerCase();
		return "select" === t || "input" === t && "file" === e.type
	}

	function r(e) {
		var t = w.getPooled(S.change, N, e, D(e));
		y.accumulateTwoPhaseDispatches(t), k.batchedUpdates(o, t)
	}

	function o(e) {
		g.enqueueEvents(e), g.processEventQueue(!1)
	}

	function a(e, t) {
		x = e, N = t, x.attachEvent("onchange", r)
	}

	function i() {
		x && (x.detachEvent("onchange", r), x = null, N = null)
	}

	function s(e, t) {
		return e === E.topChange ? t : void 0
	}

	function l(e, t, n) {
		e === E.topFocus ? (i(), a(t, n)) : e === E.topBlur && i()
	}

	function u(e, t) {
		x = e, N = t, C = e.value, O = Object.getOwnPropertyDescriptor(e.constructor.prototype, "value"), Object.defineProperty(x, "value", I), x.attachEvent ? x.attachEvent("onpropertychange", c) : x.addEventListener("propertychange", c, !1)
	}

	function d() {
		x && (delete x.value, x.detachEvent ? x.detachEvent("onpropertychange", c) : x.removeEventListener("propertychange", c, !1), x = null, N = null, C = null, O = null)
	}

	function c(e) {
		if ("value" === e.propertyName) {
			var t = e.srcElement.value;
			t !== C && (C = t, r(e))
		}
	}

	function p(e, t) {
		return e === E.topInput ? t : void 0
	}

	function m(e, t, n) {
		e === E.topFocus ? (d(), u(t, n)) : e === E.topBlur && d()
	}

	function h(e, t) {
		return e !== E.topSelectionChange && e !== E.topKeyUp && e !== E.topKeyDown || !x || x.value === C ? void 0 : (C = x.value, N)
	}

	function _(e) {
		return e.nodeName && "input" === e.nodeName.toLowerCase() && ("checkbox" === e.type || "radio" === e.type)
	}

	function f(e, t) {
		return e === E.topClick ? t : void 0
	}
	var v = t(41),
		g = t(43),
		y = t(42),
		b = t(49),
		M = t(36),
		k = t(56),
		w = t(53),
		D = t(70),
		L = t(71),
		T = t(72),
		Y = t(25),
		E = v.topLevelTypes,
		S = {
			change: {
				phasedRegistrationNames: {
					bubbled: Y({
						onChange: null
					}),
					captured: Y({
						onChangeCapture: null
					})
				},
				dependencies: [E.topBlur, E.topChange, E.topClick, E.topFocus, E.topInput, E.topKeyDown, E.topKeyUp, E.topSelectionChange]
			}
		},
		x = null,
		N = null,
		C = null,
		O = null,
		P = !1;
	b.canUseDOM && (P = L("change") && (!("documentMode" in document) || document.documentMode > 8));
	var H = !1;
	b.canUseDOM && (H = L("input") && (!("documentMode" in document) || document.documentMode > 11));
	var I = {
			get: function() {
				return O.get.call(this)
			},
			set: function(e) {
				C = "" + e, O.set.call(this, e)
			}
		},
		j = {
			eventTypes: S,
			extractEvents: function(e, t, r, o) {
				var a, i, u = t ? M.getNodeFromInstance(t) : window;
				if (n(u) ? P ? a = s : i = l : T(u) ? H ? a = p : (a = h, i = m) : _(u) && (a = f), a) {
					var d = a(e, t);
					if (d) {
						var c = w.getPooled(S.change, d, r, o);
						return c.type = "change", y.accumulateTwoPhaseDispatches(c), c
					}
				}
				i && i(e, u, t)
			}
		};
	e.exports = j
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r() {
			E.ReactReconcileTransaction && k ? void 0 : "production" !== n.env.NODE_ENV ? v(!1, "ReactUpdates: must inject a reconcile transaction class and batching strategy") : d("123")
		}

		function o() {
			this.reinitializeTransaction(), this.dirtyComponentsLength = null, this.callbackQueue = p.getPooled(), this.reconcileTransaction = E.ReactReconcileTransaction.getPooled(!0)
		}

		function a(e, t, n, o, a, i) {
			r(), k.batchedUpdates(e, t, n, o, a, i)
		}

		function i(e, t) {
			return e._mountOrder - t._mountOrder
		}

		function s(e) {
			var t = e.dirtyComponentsLength;
			t !== g.length ? "production" !== n.env.NODE_ENV ? v(!1, "Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).", t, g.length) : d("124", t, g.length) : void 0, g.sort(i), y++;
			for (var r = 0; t > r; r++) {
				var o = g[r],
					a = o._pendingCallbacks;
				o._pendingCallbacks = null;
				var s;
				if (h.logTopLevelRenders) {
					var l = o;
					o._currentElement.props === o._renderedComponent._currentElement && (l = o._renderedComponent), s = "React update: " + l.getName(), console.time(s)
				}
				if (_.performUpdateIfNecessary(o, e.reconcileTransaction, y), s && console.timeEnd(s), a)
					for (var u = 0; u < a.length; u++) e.callbackQueue.enqueue(a[u], o.getPublicInstance())
			}
		}

		function l(e) {
			return r(), k.isBatchingUpdates ? (g.push(e), void(null == e._updateBatchNumber && (e._updateBatchNumber = y + 1))) : void k.batchedUpdates(l, e)
		}

		function u(e, t) {
			k.isBatchingUpdates ? void 0 : "production" !== n.env.NODE_ENV ? v(!1, "ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched.") : d("125"), b.enqueue(e, t), M = !0
		}
		var d = t(7),
			c = t(4),
			p = t(57),
			m = t(6),
			h = t(58),
			_ = t(59),
			f = t(69),
			v = t(8),
			g = [],
			y = 0,
			b = p.getPooled(),
			M = !1,
			k = null,
			w = {
				initialize: function() {
					this.dirtyComponentsLength = g.length
				},
				close: function() {
					this.dirtyComponentsLength !== g.length ? (g.splice(0, this.dirtyComponentsLength), T()) : g.length = 0
				}
			},
			D = {
				initialize: function() {
					this.callbackQueue.reset()
				},
				close: function() {
					this.callbackQueue.notifyAll()
				}
			},
			L = [w, D];
		c(o.prototype, f.Mixin, {
			getTransactionWrappers: function() {
				return L
			},
			destructor: function() {
				this.dirtyComponentsLength = null, p.release(this.callbackQueue), this.callbackQueue = null, E.ReactReconcileTransaction.release(this.reconcileTransaction), this.reconcileTransaction = null
			},
			perform: function(e, t, n) {
				return f.Mixin.perform.call(this, this.reconcileTransaction.perform, this.reconcileTransaction, e, t, n)
			}
		}), m.addPoolingTo(o);
		var T = function() {
				for (; g.length || M;) {
					if (g.length) {
						var e = o.getPooled();
						e.perform(s, null, e), o.release(e)
					}
					if (M) {
						M = !1;
						var t = b;
						b = p.getPooled(), t.notifyAll(), p.release(t)
					}
				}
			},
			Y = {
				injectReconcileTransaction: function(e) {
					e ? void 0 : "production" !== n.env.NODE_ENV ? v(!1, "ReactUpdates: must provide a reconcile transaction class") : d("126"), E.ReactReconcileTransaction = e
				},
				injectBatchingStrategy: function(e) {
					e ? void 0 : "production" !== n.env.NODE_ENV ? v(!1, "ReactUpdates: must provide a batching strategy") : d("127"), "function" != typeof e.batchedUpdates ? "production" !== n.env.NODE_ENV ? v(!1, "ReactUpdates: must provide a batchedUpdates() function") : d("128") : void 0, "boolean" != typeof e.isBatchingUpdates ? "production" !== n.env.NODE_ENV ? v(!1, "ReactUpdates: must provide an isBatchingUpdates boolean attribute") : d("129") : void 0, k = e
				}
			},
			E = {
				ReactReconcileTransaction: null,
				batchedUpdates: a,
				enqueueUpdate: l,
				flushBatchedUpdates: T,
				injection: Y,
				asap: u
			};
		e.exports = E
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r() {
			this._callbacks = null, this._contexts = null
		}
		var o = t(7),
			a = t(4),
			i = t(6),
			s = t(8);
		a(r.prototype, {
			enqueue: function(e, t) {
				this._callbacks = this._callbacks || [], this._contexts = this._contexts || [], this._callbacks.push(e), this._contexts.push(t)
			},
			notifyAll: function() {
				var e = this._callbacks,
					t = this._contexts;
				if (e) {
					e.length !== t.length ? "production" !== n.env.NODE_ENV ? s(!1, "Mismatched list of contexts in callback queue") : o("24") : void 0, this._callbacks = null, this._contexts = null;
					for (var r = 0; r < e.length; r++) e[r].call(t[r]);
					e.length = 0, t.length = 0
				}
			},
			checkpoint: function() {
				return this._callbacks ? this._callbacks.length : 0
			},
			rollback: function(e) {
				this._callbacks && (this._callbacks.length = e, this._contexts.length = e)
			},
			reset: function() {
				this._callbacks = null, this._contexts = null
			},
			destructor: function() {
				this.reset()
			}
		}), i.addPoolingTo(r), e.exports = r
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";
	var t = {
		logTopLevelRenders: !1
	};
	e.exports = t
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r() {
			o.attachRefs(this, this._currentElement)
		}
		var o = t(60),
			a = t(62),
			i = t(11),
			s = {
				mountComponent: function(e, t, o, i, s, l) {
					"production" !== n.env.NODE_ENV && 0 !== e._debugID && a.debugTool.onBeforeMountComponent(e._debugID, e._currentElement, l);
					var u = e.mountComponent(t, o, i, s, l);
					return e._currentElement && null != e._currentElement.ref && t.getReactMountReady().enqueue(r, e), "production" !== n.env.NODE_ENV && 0 !== e._debugID && a.debugTool.onMountComponent(e._debugID), u
				},
				getHostNode: function(e) {
					return e.getHostNode()
				},
				unmountComponent: function(e, t) {
					"production" !== n.env.NODE_ENV && 0 !== e._debugID && a.debugTool.onBeforeUnmountComponent(e._debugID), o.detachRefs(e, e._currentElement), e.unmountComponent(t), "production" !== n.env.NODE_ENV && 0 !== e._debugID && a.debugTool.onUnmountComponent(e._debugID)
				},
				receiveComponent: function(e, t, i, s) {
					var l = e._currentElement;
					if (t !== l || s !== e._context) {
						"production" !== n.env.NODE_ENV && 0 !== e._debugID && a.debugTool.onBeforeUpdateComponent(e._debugID, t);
						var u = o.shouldUpdateRefs(l, t);
						u && o.detachRefs(e, l), e.receiveComponent(t, i, s), u && e._currentElement && null != e._currentElement.ref && i.getReactMountReady().enqueue(r, e), "production" !== n.env.NODE_ENV && 0 !== e._debugID && a.debugTool.onUpdateComponent(e._debugID)
					}
				},
				performUpdateIfNecessary: function(e, t, r) {
					return e._updateBatchNumber !== r ? void("production" !== n.env.NODE_ENV ? i(null == e._updateBatchNumber || e._updateBatchNumber === r + 1, "performUpdateIfNecessary: Unexpected batch number (current %s, pending %s)", r, e._updateBatchNumber) : void 0) : ("production" !== n.env.NODE_ENV && 0 !== e._debugID && a.debugTool.onBeforeUpdateComponent(e._debugID, e._currentElement), e.performUpdateIfNecessary(t), void("production" !== n.env.NODE_ENV && 0 !== e._debugID && a.debugTool.onUpdateComponent(e._debugID)))
				}
			};
		e.exports = s
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n) {
		"function" == typeof e ? e(t.getPublicInstance()) : o.addComponentAsRefTo(t, e, n)
	}

	function r(e, t, n) {
		"function" == typeof e ? e(null) : o.removeComponentAsRefFrom(t, e, n)
	}
	var o = t(61),
		a = {};
	a.attachRefs = function(e, t) {
		if (null !== t && t !== !1) {
			var r = t.ref;
			null != r && n(r, e, t._owner)
		}
	}, a.shouldUpdateRefs = function(e, t) {
		var n = null === e || e === !1,
			r = null === t || t === !1;
		return n || r || t.ref !== e.ref || "string" == typeof t.ref && t._owner !== e._owner
	}, a.detachRefs = function(e, t) {
		if (null !== t && t !== !1) {
			var n = t.ref;
			null != n && r(n, e, t._owner)
		}
	}, e.exports = a
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(7),
			o = t(8),
			a = {
				isValidOwner: function(e) {
					return !(!e || "function" != typeof e.attachRef || "function" != typeof e.detachRef)
				},
				addComponentAsRefTo: function(e, t, i) {
					a.isValidOwner(i) ? void 0 : "production" !== n.env.NODE_ENV ? o(!1, "addComponentAsRefTo(...): Only a ReactOwner can have refs. You might be adding a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).") : r("119"), i.attachRef(t, e)
				},
				removeComponentAsRefFrom: function(e, t, i) {
					a.isValidOwner(i) ? void 0 : "production" !== n.env.NODE_ENV ? o(!1, "removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might be removing a ref to a component that was not created inside a component's `render` method, or you have multiple copies of React loaded (details: https://fb.me/react-refs-must-have-owner).") : r("120");
					var s = i.getPublicInstance();
					s && s.refs[t] === e.getPublicInstance() && i.detachRef(t)
				}
			};
		e.exports = a
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = null;
		if ("production" !== n.env.NODE_ENV) {
			var o = t(63);
			r = o
		}
		e.exports = {
			debugTool: r
		}
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t, r, o, a, i, s, l) {
			try {
				t.call(r, o, a, i, s, l)
			} catch (u) {
				"production" !== n.env.NODE_ENV ? y(M[e], "Exception thrown by hook while handling %s: %s", e, u + "\n" + u.stack) : void 0, M[e] = !0
			}
		}

		function o(e, t, n, o, a, i) {
			for (var s = 0; s < b.length; s++) {
				var l = b[s],
					u = l[e];
				u && r(e, u, l, t, n, o, a, i)
			}
		}

		function a() {
			_.purgeUnmountedComponents(), h.clearHistory()
		}

		function i(e) {
			return e.reduce(function(e, t) {
				var n = _.getOwnerID(t),
					r = _.getParentID(t);
				return e[t] = {
					displayName: _.getDisplayName(t),
					text: _.getText(t),
					updateCount: _.getUpdateCount(t),
					childIDs: _.getChildIDs(t),
					ownerID: n || _.getOwnerID(r),
					parentID: r
				}, e
			}, {})
		}

		function s() {
			var e = Y,
				t = T || [],
				n = h.getHistory();
			if (0 === L) return Y = null, T = null, void a();
			if (t.length || n.length) {
				var r = _.getRegisteredIDs();
				w.push({
					duration: g() - e,
					measurements: t || [],
					operations: n || [],
					treeSnapshot: i(r)
				})
			}
			a(), Y = g(), T = []
		}

		function l(e) {
			var t = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
			t && 0 === e || e || ("production" !== n.env.NODE_ENV ? y(!1, "ReactDebugTool: debugID may not be empty.") : void 0)
		}

		function u(e, t) {
			0 !== L && (N && !C && ("production" !== n.env.NODE_ENV ? y(!1, "There is an internal error in the React performance measurement code. Did not expect %s timer to start while %s timer is still in progress for %s instance.", t, N || "no", e === E ? "the same" : "another") : void 0, C = !0), S = g(), x = 0, E = e, N = t)
		}

		function d(e, t) {
			0 !== L && (N === t || C || ("production" !== n.env.NODE_ENV ? y(!1, "There is an internal error in the React performance measurement code. We did not expect %s timer to stop while %s timer is still in progress for %s instance. Please report this as a bug in React.", t, N || "no", e === E ? "the same" : "another") : void 0, C = !0), k && T.push({
				timerType: t,
				instanceID: e,
				duration: g() - S - x
			}), S = null, x = null, E = null, N = null)
		}

		function c() {
			var e = {
				startTime: S,
				nestedFlushStartTime: g(),
				debugID: E,
				timerType: N
			};
			D.push(e), S = null, x = null, E = null, N = null
		}

		function p() {
			var e = D.pop(),
				t = e.startTime,
				n = e.nestedFlushStartTime,
				r = e.debugID,
				o = e.timerType,
				a = g() - n;
			S = t, x += a, E = r, N = o
		}
		var m = t(64),
			h = t(65),
			_ = t(28),
			f = t(66),
			v = t(49),
			g = t(67),
			y = t(11),
			b = [],
			M = {},
			k = !1,
			w = [],
			D = [],
			L = 0,
			T = null,
			Y = null,
			E = null,
			S = null,
			x = null,
			N = null,
			C = !1,
			O = {
				addHook: function(e) {
					b.push(e)
				},
				removeHook: function(e) {
					for (var t = 0; t < b.length; t++) b[t] === e && (b.splice(t, 1), t--)
				},
				isProfiling: function() {
					return k
				},
				beginProfiling: function() {
					k || (k = !0, w.length = 0, s(), O.addHook(h))
				},
				endProfiling: function() {
					k && (k = !1, s(), O.removeHook(h))
				},
				getFlushHistory: function() {
					return w
				},
				onBeginFlush: function() {
					L++, s(), c(), o("onBeginFlush")
				},
				onEndFlush: function() {
					s(), L--, p(), o("onEndFlush")
				},
				onBeginLifeCycleTimer: function(e, t) {
					l(e), o("onBeginLifeCycleTimer", e, t), u(e, t)
				},
				onEndLifeCycleTimer: function(e, t) {
					l(e), d(e, t), o("onEndLifeCycleTimer", e, t)
				},
				onError: function(e) {
					null != E && d(E, N), o("onError", e)
				},
				onBeginProcessingChildContext: function() {
					o("onBeginProcessingChildContext")
				},
				onEndProcessingChildContext: function() {
					o("onEndProcessingChildContext")
				},
				onHostOperation: function(e, t, n) {
					l(e), o("onHostOperation", e, t, n)
				},
				onSetState: function() {
					o("onSetState")
				},
				onSetChildren: function(e, t) {
					l(e), t.forEach(l), o("onSetChildren", e, t)
				},
				onBeforeMountComponent: function(e, t, n) {
					l(e), l(n, !0), o("onBeforeMountComponent", e, t, n)
				},
				onMountComponent: function(e) {
					l(e), o("onMountComponent", e)
				},
				onBeforeUpdateComponent: function(e, t) {
					l(e), o("onBeforeUpdateComponent", e, t)
				},
				onUpdateComponent: function(e) {
					l(e), o("onUpdateComponent", e)
				},
				onBeforeUnmountComponent: function(e) {
					l(e), o("onBeforeUnmountComponent", e)
				},
				onUnmountComponent: function(e) {
					l(e), o("onUnmountComponent", e)
				},
				onTestEvent: function() {
					o("onTestEvent")
				}
			};
		O.addDevtool = O.addHook, O.removeDevtool = O.removeHook, O.addHook(m), O.addHook(_), O.addHook(f);
		var P = v.canUseDOM && window.location.href || "";
		/[?&]react_perf\b/.test(P) && O.beginProfiling(), e.exports = O
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(11);
		if ("production" !== n.env.NODE_ENV) var o = !1,
			a = function() {
				"production" !== n.env.NODE_ENV ? r(!o, "setState(...): Cannot call setState() inside getChildContext()") : void 0
			};
		var i = {
			onBeginProcessingChildContext: function() {
				o = !0
			},
			onEndProcessingChildContext: function() {
				o = !1
			},
			onSetState: function() {
				a()
			}
		};
		e.exports = i
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";
	var t = [],
		n = {
			onHostOperation: function(e, n, r) {
				t.push({
					instanceID: e,
					type: n,
					payload: r
				})
			},
			clearHistory: function() {
				n._preventClearing || (t = [])
			},
			getHistory: function() {
				return t
			}
		};
	e.exports = n
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t) {
			if (null != t && void 0 !== t._shadowChildren && t._shadowChildren !== t.props.children) {
				var r = !1;
				if (Array.isArray(t._shadowChildren))
					if (t._shadowChildren.length === t.props.children.length)
						for (var i = 0; i < t._shadowChildren.length; i++) t._shadowChildren[i] !== t.props.children[i] && (r = !0);
					else r = !0;
				Array.isArray(t._shadowChildren) && !r || ("production" !== n.env.NODE_ENV ? a(!1, "Component's children should not be mutated.%s", o.getStackAddendumByID(e)) : void 0)
			}
		}
		var o = t(28),
			a = t(11),
			i = {
				onMountComponent: function(e) {
					r(e, o.getElement(e))
				},
				onUpdateComponent: function(e) {
					r(e, o.getElement(e))
				}
			};
		e.exports = i
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";
	var n, r = t(68);
	n = r.now ? function() {
		return r.now()
	} : function() {
		return Date.now()
	}, e.exports = n
}, function(e, exports, t) {
	"use strict";
	var n, r = t(49);
	r.canUseDOM && (n = window.performance || window.msPerformance || window.webkitPerformance), e.exports = n || {}
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(7),
			o = t(8),
			a = {
				reinitializeTransaction: function() {
					this.transactionWrappers = this.getTransactionWrappers(), this.wrapperInitData ? this.wrapperInitData.length = 0 : this.wrapperInitData = [], this._isInTransaction = !1
				},
				_isInTransaction: !1,
				getTransactionWrappers: null,
				isInTransaction: function() {
					return !!this._isInTransaction
				},
				perform: function(e, t, a, i, s, l, u, d) {
					this.isInTransaction() ? "production" !== n.env.NODE_ENV ? o(!1, "Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.") : r("27") : void 0;
					var c, p;
					try {
						this._isInTransaction = !0, c = !0, this.initializeAll(0), p = e.call(t, a, i, s, l, u, d), c = !1
					} finally {
						try {
							if (c) try {
								this.closeAll(0)
							} catch (m) {} else this.closeAll(0)
						} finally {
							this._isInTransaction = !1
						}
					}
					return p
				},
				initializeAll: function(e) {
					for (var t = this.transactionWrappers, n = e; n < t.length; n++) {
						var r = t[n];
						try {
							this.wrapperInitData[n] = i.OBSERVED_ERROR, this.wrapperInitData[n] = r.initialize ? r.initialize.call(this) : null
						} finally {
							if (this.wrapperInitData[n] === i.OBSERVED_ERROR) try {
								this.initializeAll(n + 1)
							} catch (o) {}
						}
					}
				},
				closeAll: function(e) {
					this.isInTransaction() ? void 0 : "production" !== n.env.NODE_ENV ? o(!1, "Transaction.closeAll(): Cannot close transaction when none are open.") : r("28");
					for (var t = this.transactionWrappers, a = e; a < t.length; a++) {
						var s, l = t[a],
							u = this.wrapperInitData[a];
						try {
							s = !0, u !== i.OBSERVED_ERROR && l.close && l.close.call(this, u), s = !1
						} finally {
							if (s) try {
								this.closeAll(a + 1)
							} catch (d) {}
						}
					}
					this.wrapperInitData.length = 0
				}
			},
			i = {
				Mixin: a,
				OBSERVED_ERROR: {}
			};
		e.exports = i
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";

	function t(e) {
		var t = e.target || e.srcElement || window;
		return t.correspondingUseElement && (t = t.correspondingUseElement), 3 === t.nodeType ? t.parentNode : t
	}
	e.exports = t
}, function(e, exports, t) {
	"use strict";

	function n(e, t) {
		if (!o.canUseDOM || t && !("addEventListener" in document)) return !1;
		var n = "on" + e,
			a = n in document;
		if (!a) {
			var i = document.createElement("div");
			i.setAttribute(n, "return;"), a = "function" == typeof i[n]
		}
		return !a && r && "wheel" === e && (a = document.implementation.hasFeature("Events.wheel", "3.0")), a
	}
	var r, o = t(49);
	o.canUseDOM && (r = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0), e.exports = n
}, function(e, exports) {
	"use strict";

	function t(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase();
		return "input" === t ? !!n[e.type] : "textarea" === t
	}
	var n = {
		color: !0,
		date: !0,
		datetime: !0,
		"datetime-local": !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	};
	e.exports = t
}, function(e, exports, t) {
	"use strict";
	var n = t(25),
		r = [n({
			ResponderEventPlugin: null
		}), n({
			SimpleEventPlugin: null
		}), n({
			TapEventPlugin: null
		}), n({
			EnterLeaveEventPlugin: null
		}), n({
			ChangeEventPlugin: null
		}), n({
			SelectEventPlugin: null
		}), n({
			BeforeInputEventPlugin: null
		})];
	e.exports = r
}, function(e, exports, t) {
	"use strict";
	var n = t(41),
		r = t(42),
		o = t(36),
		a = t(75),
		i = t(25),
		s = n.topLevelTypes,
		l = {
			mouseEnter: {
				registrationName: i({
					onMouseEnter: null
				}),
				dependencies: [s.topMouseOut, s.topMouseOver]
			},
			mouseLeave: {
				registrationName: i({
					onMouseLeave: null
				}),
				dependencies: [s.topMouseOut, s.topMouseOver]
			}
		},
		u = {
			eventTypes: l,
			extractEvents: function(e, t, n, i) {
				if (e === s.topMouseOver && (n.relatedTarget || n.fromElement)) return null;
				if (e !== s.topMouseOut && e !== s.topMouseOver) return null;
				var u;
				if (i.window === i) u = i;
				else {
					var d = i.ownerDocument;
					u = d ? d.defaultView || d.parentWindow : window
				}
				var c, p;
				if (e === s.topMouseOut) {
					c = t;
					var m = n.relatedTarget || n.toElement;
					p = m ? o.getClosestInstanceFromNode(m) : null
				} else c = null, p = t;
				if (c === p) return null;
				var h = null == c ? u : o.getNodeFromInstance(c),
					_ = null == p ? u : o.getNodeFromInstance(p),
					f = a.getPooled(l.mouseLeave, c, n, i);
				f.type = "mouseleave", f.target = h, f.relatedTarget = _;
				var v = a.getPooled(l.mouseEnter, p, n, i);
				return v.type = "mouseenter", v.target = _, v.relatedTarget = h, r.accumulateEnterLeaveDispatches(f, v, c, p), [f, v]
			}
		};
	e.exports = u
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n, o) {
		return r.call(this, e, t, n, o)
	}
	var r = t(76),
		o = t(77),
		a = t(78),
		i = {
			screenX: null,
			screenY: null,
			clientX: null,
			clientY: null,
			ctrlKey: null,
			shiftKey: null,
			altKey: null,
			metaKey: null,
			getModifierState: a,
			button: function(e) {
				var t = e.button;
				return "which" in e ? t : 2 === t ? 2 : 4 === t ? 1 : 0
			},
			buttons: null,
			relatedTarget: function(e) {
				return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
			},
			pageX: function(e) {
				return "pageX" in e ? e.pageX : e.clientX + o.currentScrollLeft
			},
			pageY: function(e) {
				return "pageY" in e ? e.pageY : e.clientY + o.currentScrollTop
			}
		};
	r.augmentClass(n, i), e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n, o) {
		return r.call(this, e, t, n, o)
	}
	var r = t(53),
		o = t(70),
		a = {
			view: function(e) {
				if (e.view) return e.view;
				var t = o(e);
				if (t.window === t) return t;
				var n = t.ownerDocument;
				return n ? n.defaultView || n.parentWindow : window
			},
			detail: function(e) {
				return e.detail || 0
			}
		};
	r.augmentClass(n, a), e.exports = n
}, function(e, exports) {
	"use strict";
	var t = {
		currentScrollLeft: 0,
		currentScrollTop: 0,
		refreshScrollValues: function(e) {
			t.currentScrollLeft = e.x, t.currentScrollTop = e.y
		}
	};
	e.exports = t
}, function(e, exports) {
	"use strict";

	function t(e) {
		var t = this,
			n = t.nativeEvent;
		if (n.getModifierState) return n.getModifierState(e);
		var o = r[e];
		return o ? !!n[o] : !1
	}

	function n(e) {
		return t
	}
	var r = {
		Alt: "altKey",
		Control: "ctrlKey",
		Meta: "metaKey",
		Shift: "shiftKey"
	};
	e.exports = n
}, function(e, exports, t) {
	"use strict";
	var n = t(37),
		r = n.injection.MUST_USE_PROPERTY,
		o = n.injection.HAS_BOOLEAN_VALUE,
		a = n.injection.HAS_NUMERIC_VALUE,
		i = n.injection.HAS_POSITIVE_NUMERIC_VALUE,
		s = n.injection.HAS_OVERLOADED_BOOLEAN_VALUE,
		l = {
			isCustomAttribute: RegExp.prototype.test.bind(new RegExp("^(data|aria)-[" + n.ATTRIBUTE_NAME_CHAR + "]*$")),
			Properties: {
				accept: 0,
				acceptCharset: 0,
				accessKey: 0,
				action: 0,
				allowFullScreen: o,
				allowTransparency: 0,
				alt: 0,
				async: o,
				autoComplete: 0,
				autoPlay: o,
				capture: o,
				cellPadding: 0,
				cellSpacing: 0,
				charSet: 0,
				challenge: 0,
				checked: r | o,
				cite: 0,
				classID: 0,
				className: 0,
				cols: i,
				colSpan: 0,
				content: 0,
				contentEditable: 0,
				contextMenu: 0,
				controls: o,
				coords: 0,
				crossOrigin: 0,
				data: 0,
				dateTime: 0,
				"default": o,
				defer: o,
				dir: 0,
				disabled: o,
				download: s,
				draggable: 0,
				encType: 0,
				form: 0,
				formAction: 0,
				formEncType: 0,
				formMethod: 0,
				formNoValidate: o,
				formTarget: 0,
				frameBorder: 0,
				headers: 0,
				height: 0,
				hidden: o,
				high: 0,
				href: 0,
				hrefLang: 0,
				htmlFor: 0,
				httpEquiv: 0,
				icon: 0,
				id: 0,
				inputMode: 0,
				integrity: 0,
				is: 0,
				keyParams: 0,
				keyType: 0,
				kind: 0,
				label: 0,
				lang: 0,
				list: 0,
				loop: o,
				low: 0,
				manifest: 0,
				marginHeight: 0,
				marginWidth: 0,
				max: 0,
				maxLength: 0,
				media: 0,
				mediaGroup: 0,
				method: 0,
				min: 0,
				minLength: 0,
				multiple: r | o,
				muted: r | o,
				name: 0,
				nonce: 0,
				noValidate: o,
				open: o,
				optimum: 0,
				pattern: 0,
				placeholder: 0,
				poster: 0,
				preload: 0,
				profile: 0,
				radioGroup: 0,
				readOnly: o,
				referrerPolicy: 0,
				rel: 0,
				required: o,
				reversed: o,
				role: 0,
				rows: i,
				rowSpan: a,
				sandbox: 0,
				scope: 0,
				scoped: o,
				scrolling: 0,
				seamless: o,
				selected: r | o,
				shape: 0,
				size: i,
				sizes: 0,
				span: i,
				spellCheck: 0,
				src: 0,
				srcDoc: 0,
				srcLang: 0,
				srcSet: 0,
				start: a,
				step: 0,
				style: 0,
				summary: 0,
				tabIndex: 0,
				target: 0,
				title: 0,
				type: 0,
				useMap: 0,
				value: 0,
				width: 0,
				wmode: 0,
				wrap: 0,
				about: 0,
				datatype: 0,
				inlist: 0,
				prefix: 0,
				property: 0,
				resource: 0,
				"typeof": 0,
				vocab: 0,
				autoCapitalize: 0,
				autoCorrect: 0,
				autoSave: 0,
				color: 0,
				itemProp: 0,
				itemScope: o,
				itemType: 0,
				itemID: 0,
				itemRef: 0,
				results: 0,
				security: 0,
				unselectable: 0
			},
			DOMAttributeNames: {
				acceptCharset: "accept-charset",
				className: "class",
				htmlFor: "for",
				httpEquiv: "http-equiv"
			},
			DOMPropertyNames: {}
		};
	e.exports = l
}, function(e, exports, t) {
	"use strict";
	var n = t(81),
		r = t(93),
		o = {
			processChildrenUpdates: r.dangerouslyProcessChildrenUpdates,
			replaceNodeWithMarkup: n.dangerouslyReplaceNodeWithMarkup
		};
	e.exports = o
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t) {
			return Array.isArray(t) && (t = t[1]), t ? t.nextSibling : e.firstChild
		}

		function o(e, t, n) {
			d.insertTreeBefore(e, t, n)
		}

		function a(e, t, n) {
			Array.isArray(t) ? s(e, t[0], t[1], n) : g(e, t, n)
		}

		function i(e, t) {
			if (Array.isArray(t)) {
				var n = t[1];
				t = t[0], l(e, t, n), e.removeChild(n)
			}
			e.removeChild(t)
		}

		function s(e, t, n, r) {
			for (var o = t;;) {
				var a = o.nextSibling;
				if (g(e, o, r), o === n) break;
				o = a
			}
		}

		function l(e, t, n) {
			for (;;) {
				var r = t.nextSibling;
				if (r === n) break;
				e.removeChild(r)
			}
		}

		function u(e, t, r) {
			var o = e.parentNode,
				a = e.nextSibling;
			a === t ? r && g(o, document.createTextNode(r), a) : r ? (v(a, r), l(o, a, t)) : l(o, e, t), "production" !== n.env.NODE_ENV && h.debugTool.onHostOperation(m.getInstanceFromNode(e)._debugID, "replace text", r)
		}
		var d = t(82),
			c = t(88),
			p = t(92),
			m = t(36),
			h = t(62),
			_ = t(85),
			f = t(84),
			v = t(86),
			g = _(function(e, t, n) {
				e.insertBefore(t, n)
			}),
			y = c.dangerouslyReplaceNodeWithMarkup;
		"production" !== n.env.NODE_ENV && (y = function(e, t, n) {
			if (c.dangerouslyReplaceNodeWithMarkup(e, t), 0 !== n._debugID) h.debugTool.onHostOperation(n._debugID, "replace with", t.toString());
			else {
				var r = m.getInstanceFromNode(t.node);
				0 !== r._debugID && h.debugTool.onHostOperation(r._debugID, "mount", t.toString())
			}
		});
		var b = {
			dangerouslyReplaceNodeWithMarkup: y,
			replaceDelimitedText: u,
			processUpdates: function(e, t) {
				if ("production" !== n.env.NODE_ENV) var s = m.getInstanceFromNode(e)._debugID;
				for (var l = 0; l < t.length; l++) {
					var u = t[l];
					switch (u.type) {
						case p.INSERT_MARKUP:
							o(e, u.content, r(e, u.afterNode)), "production" !== n.env.NODE_ENV && h.debugTool.onHostOperation(s, "insert child", {
								toIndex: u.toIndex,
								content: u.content.toString()
							});
							break;
						case p.MOVE_EXISTING:
							a(e, u.fromNode, r(e, u.afterNode)), "production" !== n.env.NODE_ENV && h.debugTool.onHostOperation(s, "move child", {
								fromIndex: u.fromIndex,
								toIndex: u.toIndex
							});
							break;
						case p.SET_MARKUP:
							f(e, u.content), "production" !== n.env.NODE_ENV && h.debugTool.onHostOperation(s, "replace children", u.content.toString());
							break;
						case p.TEXT_CONTENT:
							v(e, u.content), "production" !== n.env.NODE_ENV && h.debugTool.onHostOperation(s, "replace text", u.content.toString());
							break;
						case p.REMOVE_NODE:
							i(e, u.fromNode), "production" !== n.env.NODE_ENV && h.debugTool.onHostOperation(s, "remove child", {
								fromIndex: u.fromIndex
							})
					}
				}
			}
		};
		e.exports = b
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		if (_) {
			var t = e.node,
				n = e.children;
			if (n.length)
				for (var r = 0; r < n.length; r++) f(t, n[r], null);
			else null != e.html ? d(t, e.html) : null != e.text && p(t, e.text)
		}
	}

	function r(e, t) {
		e.parentNode.replaceChild(t.node, e), n(t)
	}

	function o(e, t) {
		_ ? e.children.push(t) : e.node.appendChild(t.node)
	}

	function a(e, t) {
		_ ? e.html = t : d(e.node, t)
	}

	function i(e, t) {
		_ ? e.text = t : p(e.node, t)
	}

	function s() {
		return this.node.nodeName
	}

	function l(e) {
		return {
			node: e,
			children: [],
			html: null,
			text: null,
			toString: s
		}
	}
	var u = t(83),
		d = t(84),
		c = t(85),
		p = t(86),
		m = 1,
		h = 11,
		_ = "undefined" != typeof document && "number" == typeof document.documentMode || "undefined" != typeof navigator && "string" == typeof navigator.userAgent && /\bEdge\/\d/.test(navigator.userAgent),
		f = c(function(e, t, r) {
			t.node.nodeType === h || t.node.nodeType === m && "object" === t.node.nodeName.toLowerCase() && (null == t.node.namespaceURI || t.node.namespaceURI === u.html) ? (n(t), e.insertBefore(t.node, r)) : (e.insertBefore(t.node, r), n(t))
		});
	l.insertTreeBefore = f, l.replaceChildWithTree = r, l.queueChild = o, l.queueHTML = a, l.queueText = i, e.exports = l
}, function(e, exports) {
	"use strict";
	var t = {
		html: "http://www.w3.org/1999/xhtml",
		mathml: "http://www.w3.org/1998/Math/MathML",
		svg: "http://www.w3.org/2000/svg"
	};
	e.exports = t
}, function(e, exports, t) {
	"use strict";
	var n, r = t(49),
		o = t(83),
		a = /^[ \r\n\t\f]/,
		i = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,
		s = t(85),
		l = s(function(e, t) {
			if (e.namespaceURI !== o.svg || "innerHTML" in e) e.innerHTML = t;
			else {
				n = n || document.createElement("div"), n.innerHTML = "<svg>" + t + "</svg>";
				for (var r = n.firstChild.childNodes, a = 0; a < r.length; a++) e.appendChild(r[a])
			}
		});
	if (r.canUseDOM) {
		var u = document.createElement("div");
		u.innerHTML = " ", "" === u.innerHTML && (l = function(e, t) {
			if (e.parentNode && e.parentNode.replaceChild(e, e), a.test(t) || "<" === t[0] && i.test(t)) {
				e.innerHTML = String.fromCharCode(65279) + t;
				var n = e.firstChild;
				1 === n.data.length ? e.removeChild(n) : n.deleteData(0, 1)
			} else e.innerHTML = t
		}), u = null
	}
	e.exports = l
}, function(e, exports) {
	"use strict";
	var t = function(e) {
		return "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
			MSApp.execUnsafeLocalFunction(function() {
				return e(t, n, r, o)
			})
		} : e
	};
	e.exports = t
}, function(e, exports, t) {
	"use strict";
	var n = t(49),
		r = t(87),
		o = t(84),
		a = function(e, t) {
			if (t) {
				var n = e.firstChild;
				if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
			}
			e.textContent = t
		};
	n.canUseDOM && ("textContent" in document.documentElement || (a = function(e, t) {
		o(e, r(t))
	})), e.exports = a
}, function(e, exports) {
	"use strict";

	function t(e) {
		var t = "" + e,
			n = r.exec(t);
		if (!n) return t;
		var o, a = "",
			i = 0,
			s = 0;
		for (i = n.index; i < t.length; i++) {
			switch (t.charCodeAt(i)) {
				case 34:
					o = "&quot;";
					break;
				case 38:
					o = "&amp;";
					break;
				case 39:
					o = "&#x27;";
					break;
				case 60:
					o = "&lt;";
					break;
				case 62:
					o = "&gt;";
					break;
				default:
					continue
			}
			s !== i && (a += t.substring(s, i)), s = i + 1, a += o
		}
		return s !== i ? a + t.substring(s, i) : a
	}

	function n(e) {
		return "boolean" == typeof e || "number" == typeof e ? "" + e : t(e)
	}
	var r = /["'&<>]/;
	e.exports = n
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(7),
			o = t(82),
			a = t(49),
			i = t(89),
			s = t(12),
			l = t(8),
			u = {
				dangerouslyReplaceNodeWithMarkup: function(e, t) {
					if (a.canUseDOM ? void 0 : "production" !== n.env.NODE_ENV ? l(!1, "dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use ReactDOMServer.renderToString() for server rendering.") : r("56"), t ? void 0 : "production" !== n.env.NODE_ENV ? l(!1, "dangerouslyReplaceNodeWithMarkup(...): Missing markup.") : r("57"), "HTML" === e.nodeName ? "production" !== n.env.NODE_ENV ? l(!1, "dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See ReactDOMServer.renderToString().") : r("58") : void 0, "string" == typeof t) {
						var u = i(t, s)[0];
						e.parentNode.replaceChild(u, e)
					} else o.replaceChildWithTree(e, t)
				}
			};
		e.exports = u
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			var t = e.match(d);
			return t && t[1].toLowerCase()
		}

		function o(e, t) {
			var o = u;
			u ? void 0 : "production" !== n.env.NODE_ENV ? l(!1, "createNodesFromMarkup dummy not initialized") : l(!1);
			var a = r(e),
				d = a && s(a);
			if (d) {
				o.innerHTML = d[1] + e + d[2];
				for (var c = d[0]; c--;) o = o.lastChild
			} else o.innerHTML = e;
			var p = o.getElementsByTagName("script");
			p.length && (t ? void 0 : "production" !== n.env.NODE_ENV ? l(!1, "createNodesFromMarkup(...): Unexpected <script> element rendered.") : l(!1), i(p).forEach(t));
			for (var m = Array.from(o.childNodes); o.lastChild;) o.removeChild(o.lastChild);
			return m
		}
		var a = t(49),
			i = t(90),
			s = t(91),
			l = t(8),
			u = a.canUseDOM ? document.createElement("div") : null,
			d = /^\s*<(\w+)/;
		e.exports = o
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			var t = e.length;
			if (Array.isArray(e) || "object" != typeof e && "function" != typeof e ? "production" !== n.env.NODE_ENV ? i(!1, "toArray: Array-like object expected") : i(!1) : void 0, "number" != typeof t ? "production" !== n.env.NODE_ENV ? i(!1, "toArray: Object needs a length property") : i(!1) : void 0, 0 === t || t - 1 in e ? void 0 : "production" !== n.env.NODE_ENV ? i(!1, "toArray: Object should have keys for indices") : i(!1), "function" == typeof e.callee ? "production" !== n.env.NODE_ENV ? i(!1, "toArray: Object can't be `arguments`. Use rest params (function(...args) {}) or Array.from() instead.") : i(!1) : void 0, e.hasOwnProperty) try {
				return Array.prototype.slice.call(e)
			} catch (r) {}
			for (var o = Array(t), a = 0; t > a; a++) o[a] = e[a];
			return o
		}

		function o(e) {
			return !!e && ("object" == typeof e || "function" == typeof e) && "length" in e && !("setInterval" in e) && "number" != typeof e.nodeType && (Array.isArray(e) || "callee" in e || "item" in e)
		}

		function a(e) {
			return o(e) ? Array.isArray(e) ? e.slice() : r(e) : [e]
		}
		var i = t(8);
		e.exports = a
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			return i ? void 0 : "production" !== n.env.NODE_ENV ? a(!1, "Markup wrapping node not initialized") : a(!1), p.hasOwnProperty(e) || (e = "*"), s.hasOwnProperty(e) || ("*" === e ? i.innerHTML = "<link />" : i.innerHTML = "<" + e + "></" + e + ">", s[e] = !i.firstChild), s[e] ? p[e] : null
		}
		var o = t(49),
			a = t(8),
			i = o.canUseDOM ? document.createElement("div") : null,
			s = {},
			l = [1, '<select multiple="true">', "</select>"],
			u = [1, "<table>", "</table>"],
			d = [3, "<table><tbody><tr>", "</tr></tbody></table>"],
			c = [1, '<svg xmlns="http://www.w3.org/2000/svg">', "</svg>"],
			p = {
				"*": [1, "?<div>", "</div>"],
				area: [1, "<map>", "</map>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				param: [1, "<object>", "</object>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				optgroup: l,
				option: l,
				caption: u,
				colgroup: u,
				tbody: u,
				tfoot: u,
				thead: u,
				td: d,
				th: d
			},
			m = ["circle", "clipPath", "defs", "ellipse", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "text", "tspan"];
		m.forEach(function(e) {
			p[e] = c, s[e] = !0
		}), e.exports = r
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";
	var n = t(23),
		r = n({
			INSERT_MARKUP: null,
			MOVE_EXISTING: null,
			REMOVE_NODE: null,
			SET_MARKUP: null,
			TEXT_CONTENT: null
		});
	e.exports = r
}, function(e, exports, t) {
	"use strict";
	var n = t(81),
		r = t(36),
		o = {
			dangerouslyProcessChildrenUpdates: function(e, t) {
				var o = r.getNodeFromInstance(e);
				n.processUpdates(o, t)
			}
		};
	e.exports = o
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			if (e) {
				var t = e._currentElement._owner || null;
				if (t) {
					var n = t.getName();
					if (n) return " This DOM node was rendered by `" + n + "`."
				}
			}
			return ""
		}

		function o(e) {
			if ("object" == typeof e) {
				if (Array.isArray(e)) return "[" + e.map(o).join(", ") + "]";
				var t = [];
				for (var n in e)
					if (Object.prototype.hasOwnProperty.call(e, n)) {
						var r = /^[a-z$_][\w$_]*$/i.test(n) ? n : JSON.stringify(n);
						t.push(r + ": " + o(e[n]))
					}
				return "{" + t.join(", ") + "}"
			}
			return "string" == typeof e ? JSON.stringify(e) : "function" == typeof e ? "[function object]" : String(e)
		}

		function a(e, t, r) {
			if (null != e && null != t && !G(e, t)) {
				var a, i = r._tag,
					s = r._currentElement._owner;
				s && (a = s.getName());
				var l = a + "|" + i;
				oe.hasOwnProperty(l) || (oe[l] = !0, "production" !== n.env.NODE_ENV ? z(!1, "`%s` was passed a style object that has previously been mutated. Mutating `style` is deprecated. Consider cloning it beforehand. Check the `render` %s. Previous style: %s. Mutated style: %s.", i, s ? "of `" + a + "`" : "using <" + i + ">", o(e), o(t)) : void 0)
			}
		}

		function i(e, t) {
			t && (ue[e._tag] && (null != t.children || null != t.dangerouslySetInnerHTML ? "production" !== n.env.NODE_ENV ? F(!1, "%s is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.%s", e._tag, e._currentElement._owner ? " Check the render method of " + e._currentElement._owner.getName() + "." : "") : v("137", e._tag, e._currentElement._owner ? " Check the render method of " + e._currentElement._owner.getName() + "." : "") : void 0), null != t.dangerouslySetInnerHTML && (null != t.children ? "production" !== n.env.NODE_ENV ? F(!1, "Can only set one of `children` or `props.dangerouslySetInnerHTML`.") : v("60") : void 0, "object" == typeof t.dangerouslySetInnerHTML && te in t.dangerouslySetInnerHTML ? void 0 : "production" !== n.env.NODE_ENV ? F(!1, "`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.") : v("61")), "production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? z(null == t.innerHTML, "Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`.") : void 0, "production" !== n.env.NODE_ENV ? z(t.suppressContentEditableWarning || !t.contentEditable || null == t.children, "A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional.") : void 0, "production" !== n.env.NODE_ENV ? z(null == t.onFocusIn && null == t.onFocusOut, "React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React.") : void 0), null != t.style && "object" != typeof t.style ? "production" !== n.env.NODE_ENV ? F(!1, "The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.%s", r(e)) : v("62", r(e)) : void 0)
		}

		function s(e, t, r, o) {
			if (!(o instanceof A)) {
				"production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? z("onScroll" !== t || W("scroll", !0), "This browser doesn't support the `onScroll` event") : void 0);
				var a = e._hostContainerInfo,
					i = a._node && a._node.nodeType === re,
					s = i ? a._node : a._ownerDocument;
				Q(t, s), o.getReactMountReady().enqueue(l, {
					inst: e,
					registrationName: t,
					listener: r
				})
			}
		}

		function l() {
			var e = this;
			T.putListener(e.inst, e.registrationName, e.listener)
		}

		function u() {
			var e = this;
			C.postMountWrapper(e)
		}

		function d() {
			var e = this;
			H.postMountWrapper(e)
		}

		function c() {
			var e = this;
			O.postMountWrapper(e)
		}

		function p() {
			var e = this;
			e._rootNodeID ? void 0 : "production" !== n.env.NODE_ENV ? F(!1, "Must be mounted to trap events") : v("63");
			var t = q(e);
			switch (t ? void 0 : "production" !== n.env.NODE_ENV ? F(!1, "trapBubbledEvent(...): Requires node to be rendered.") : v("64"), e._tag) {
				case "iframe":
				case "object":
					e._wrapperState.listeners = [E.trapBubbledEvent(L.topLevelTypes.topLoad, "load", t)];
					break;
				case "video":
				case "audio":
					e._wrapperState.listeners = [];
					for (var r in ie) ie.hasOwnProperty(r) && e._wrapperState.listeners.push(E.trapBubbledEvent(L.topLevelTypes[r], ie[r], t));
					break;
				case "source":
					e._wrapperState.listeners = [E.trapBubbledEvent(L.topLevelTypes.topError, "error", t)];
					break;
				case "img":
					e._wrapperState.listeners = [E.trapBubbledEvent(L.topLevelTypes.topError, "error", t), E.trapBubbledEvent(L.topLevelTypes.topLoad, "load", t)];
					break;
				case "form":
					e._wrapperState.listeners = [E.trapBubbledEvent(L.topLevelTypes.topReset, "reset", t), E.trapBubbledEvent(L.topLevelTypes.topSubmit, "submit", t)];
					break;
				case "input":
				case "select":
				case "textarea":
					e._wrapperState.listeners = [E.trapBubbledEvent(L.topLevelTypes.topInvalid, "invalid", t)]
			}
		}

		function m() {
			P.postUpdateWrapper(this)
		}

		function h(e) {
			pe.call(ce, e) || (de.test(e) ? void 0 : "production" !== n.env.NODE_ENV ? F(!1, "Invalid tag: %s", e) : v("65", e), ce[e] = !0)
		}

		function _(e, t) {
			return e.indexOf("-") >= 0 || null != t.is
		}

		function f(e) {
			var t = e.type;
			h(t), this._currentElement = e, this._tag = t.toLowerCase(), this._namespaceURI = null, this._renderedChildren = null, this._previousStyle = null, this._previousStyleCopy = null, this._hostNode = null, this._hostParent = null, this._rootNodeID = 0, this._domID = 0, this._hostContainerInfo = null, this._wrapperState = null, this._topLevelWrapper = null, this._flags = 0, "production" !== n.env.NODE_ENV && (this._ancestorInfo = null, ae.call(this, null))
		}
		var v = t(7),
			g = t(4),
			y = t(95),
			b = t(97),
			M = t(82),
			k = t(83),
			w = t(37),
			D = t(105),
			L = t(41),
			T = t(43),
			Y = t(44),
			E = t(107),
			S = t(110),
			x = t(38),
			N = t(36),
			C = t(112),
			O = t(114),
			P = t(115),
			H = t(116),
			I = t(62),
			j = t(117),
			A = t(129),
			R = t(12),
			V = t(87),
			F = t(8),
			W = t(71),
			U = t(25),
			G = t(124),
			B = t(132),
			z = t(11),
			J = x,
			K = T.deleteListener,
			q = N.getNodeFromInstance,
			Q = E.listenTo,
			X = Y.registrationNameModules,
			Z = {
				string: !0,
				number: !0
			},
			ee = U({
				style: null
			}),
			te = U({
				__html: null
			}),
			ne = {
				children: null,
				dangerouslySetInnerHTML: null,
				suppressContentEditableWarning: null
			},
			re = 11,
			oe = {},
			ae = R;
		"production" !== n.env.NODE_ENV && (ae = function(e) {
			var t = null != this._contentDebugID,
				n = this._debugID,
				r = -n;
			return null == e ? (t && I.debugTool.onUnmountComponent(this._contentDebugID), void(this._contentDebugID = null)) : (this._contentDebugID = r, void(t ? (I.debugTool.onBeforeUpdateComponent(r, e), I.debugTool.onUpdateComponent(r)) : (I.debugTool.onBeforeMountComponent(r, e, n), I.debugTool.onMountComponent(r), I.debugTool.onSetChildren(n, [r]))))
		});
		var ie = {
				topAbort: "abort",
				topCanPlay: "canplay",
				topCanPlayThrough: "canplaythrough",
				topDurationChange: "durationchange",
				topEmptied: "emptied",
				topEncrypted: "encrypted",
				topEnded: "ended",
				topError: "error",
				topLoadedData: "loadeddata",
				topLoadedMetadata: "loadedmetadata",
				topLoadStart: "loadstart",
				topPause: "pause",
				topPlay: "play",
				topPlaying: "playing",
				topProgress: "progress",
				topRateChange: "ratechange",
				topSeeked: "seeked",
				topSeeking: "seeking",
				topStalled: "stalled",
				topSuspend: "suspend",
				topTimeUpdate: "timeupdate",
				topVolumeChange: "volumechange",
				topWaiting: "waiting"
			},
			se = {
				area: !0,
				base: !0,
				br: !0,
				col: !0,
				embed: !0,
				hr: !0,
				img: !0,
				input: !0,
				keygen: !0,
				link: !0,
				meta: !0,
				param: !0,
				source: !0,
				track: !0,
				wbr: !0
			},
			le = {
				listing: !0,
				pre: !0,
				textarea: !0
			},
			ue = g({
				menuitem: !0
			}, se),
			de = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
			ce = {},
			pe = {}.hasOwnProperty,
			me = 1;
		f.displayName = "ReactDOMComponent", f.Mixin = {
			mountComponent: function(e, t, r, o) {
				this._rootNodeID = me++, this._domID = r._idCounter++, this._hostParent = t, this._hostContainerInfo = r;
				var a = this._currentElement.props;
				switch (this._tag) {
					case "audio":
					case "form":
					case "iframe":
					case "img":
					case "link":
					case "object":
					case "source":
					case "video":
						this._wrapperState = {
							listeners: null
						}, e.getReactMountReady().enqueue(p, this);
						break;
					case "button":
						a = S.getHostProps(this, a, t);
						break;
					case "input":
						C.mountWrapper(this, a, t), a = C.getHostProps(this, a), e.getReactMountReady().enqueue(p, this);
						break;
					case "option":
						O.mountWrapper(this, a, t), a = O.getHostProps(this, a);
						break;
					case "select":
						P.mountWrapper(this, a, t), a = P.getHostProps(this, a), e.getReactMountReady().enqueue(p, this);
						break;
					case "textarea":
						H.mountWrapper(this, a, t), a = H.getHostProps(this, a), e.getReactMountReady().enqueue(p, this)
				}
				i(this, a);
				var s, l;
				if (null != t ? (s = t._namespaceURI, l = t._tag) : r._tag && (s = r._namespaceURI, l = r._tag), (null == s || s === k.svg && "foreignobject" === l) && (s = k.html), s === k.html && ("svg" === this._tag ? s = k.svg : "math" === this._tag && (s = k.mathml)), this._namespaceURI = s, "production" !== n.env.NODE_ENV) {
					var m;
					null != t ? m = t._ancestorInfo : r._tag && (m = r._ancestorInfo), m && B(this._tag, this, m), this._ancestorInfo = B.updatedAncestorInfo(m, this._tag, this)
				}
				var h;
				if (e.useCreateElement) {
					var _, f = r._ownerDocument;
					if (s === k.html)
						if ("script" === this._tag) {
							var v = f.createElement("div"),
								g = this._currentElement.type;
							v.innerHTML = "<" + g + "></" + g + ">", _ = v.removeChild(v.firstChild)
						} else _ = a.is ? f.createElement(this._currentElement.type, a.is) : f.createElement(this._currentElement.type);
					else _ = f.createElementNS(s, this._currentElement.type);
					N.precacheNode(this, _), this._flags |= J.hasCachedChildNodes, this._hostParent || D.setAttributeForRoot(_), this._updateDOMProperties(null, a, e);
					var b = M(_);
					this._createInitialChildren(e, a, o, b), h = b
				} else {
					var w = this._createOpenTagMarkupAndPutListeners(e, a),
						L = this._createContentMarkup(e, a, o);
					h = !L && se[this._tag] ? w + "/>" : w + ">" + L + "</" + this._currentElement.type + ">"
				}
				switch (this._tag) {
					case "input":
						e.getReactMountReady().enqueue(u, this), a.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
						break;
					case "textarea":
						e.getReactMountReady().enqueue(d, this), a.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
						break;
					case "select":
						a.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
						break;
					case "button":
						a.autoFocus && e.getReactMountReady().enqueue(y.focusDOMComponent, this);
						break;
					case "option":
						e.getReactMountReady().enqueue(c, this)
				}
				return h
			},
			_createOpenTagMarkupAndPutListeners: function(e, t) {
				var r = "<" + this._currentElement.type;
				for (var o in t)
					if (t.hasOwnProperty(o)) {
						var a = t[o];
						if (null != a)
							if (X.hasOwnProperty(o)) a && s(this, o, a, e);
							else {
								o === ee && (a && ("production" !== n.env.NODE_ENV && (this._previousStyle = a), a = this._previousStyleCopy = g({}, t.style)), a = b.createMarkupForStyles(a, this));
								var i = null;
								null != this._tag && _(this._tag, t) ? ne.hasOwnProperty(o) || (i = D.createMarkupForCustomAttribute(o, a)) : i = D.createMarkupForProperty(o, a), i && (r += " " + i)
							}
					}
				return e.renderToStaticMarkup ? r : (this._hostParent || (r += " " + D.createMarkupForRoot()), r += " " + D.createMarkupForID(this._domID))
			},
			_createContentMarkup: function(e, t, r) {
				var o = "",
					a = t.dangerouslySetInnerHTML;
				if (null != a) null != a.__html && (o = a.__html);
				else {
					var i = Z[typeof t.children] ? t.children : null,
						s = null != i ? null : t.children;
					if (null != i) o = V(i), "production" !== n.env.NODE_ENV && ae.call(this, i);
					else if (null != s) {
						var l = this.mountChildren(s, e, r);
						o = l.join("")
					}
				}
				return le[this._tag] && "\n" === o.charAt(0) ? "\n" + o : o
			},
			_createInitialChildren: function(e, t, r, o) {
				var a = t.dangerouslySetInnerHTML;
				if (null != a) null != a.__html && M.queueHTML(o, a.__html);
				else {
					var i = Z[typeof t.children] ? t.children : null,
						s = null != i ? null : t.children;
					if (null != i) "production" !== n.env.NODE_ENV && ae.call(this, i), M.queueText(o, i);
					else if (null != s)
						for (var l = this.mountChildren(s, e, r), u = 0; u < l.length; u++) M.queueChild(o, l[u])
				}
			},
			receiveComponent: function(e, t, n) {
				var r = this._currentElement;
				this._currentElement = e, this.updateComponent(t, r, e, n)
			},
			updateComponent: function(e, t, n, r) {
				var o = t.props,
					a = this._currentElement.props;
				switch (this._tag) {
					case "button":
						o = S.getHostProps(this, o), a = S.getHostProps(this, a);
						break;
					case "input":
						o = C.getHostProps(this, o), a = C.getHostProps(this, a);
						break;
					case "option":
						o = O.getHostProps(this, o), a = O.getHostProps(this, a);
						break;
					case "select":
						o = P.getHostProps(this, o), a = P.getHostProps(this, a);
						break;
					case "textarea":
						o = H.getHostProps(this, o), a = H.getHostProps(this, a)
				}
				switch (i(this, a), this._updateDOMProperties(o, a, e), this._updateDOMChildren(o, a, e, r), this._tag) {
					case "input":
						C.updateWrapper(this);
						break;
					case "textarea":
						H.updateWrapper(this);
						break;
					case "select":
						e.getReactMountReady().enqueue(m, this)
				}
			},
			_updateDOMProperties: function(e, t, r) {
				var o, i, l;
				for (o in e)
					if (!t.hasOwnProperty(o) && e.hasOwnProperty(o) && null != e[o])
						if (o === ee) {
							var u = this._previousStyleCopy;
							for (i in u) u.hasOwnProperty(i) && (l = l || {}, l[i] = "");
							this._previousStyleCopy = null
						} else X.hasOwnProperty(o) ? e[o] && K(this, o) : _(this._tag, e) ? ne.hasOwnProperty(o) || D.deleteValueForAttribute(q(this), o) : (w.properties[o] || w.isCustomAttribute(o)) && D.deleteValueForProperty(q(this), o);
				for (o in t) {
					var d = t[o],
						c = o === ee ? this._previousStyleCopy : null != e ? e[o] : void 0;
					if (t.hasOwnProperty(o) && d !== c && (null != d || null != c))
						if (o === ee)
							if (d ? ("production" !== n.env.NODE_ENV && (a(this._previousStyleCopy, this._previousStyle, this), this._previousStyle = d), d = this._previousStyleCopy = g({}, d)) : this._previousStyleCopy = null, c) {
								for (i in c) !c.hasOwnProperty(i) || d && d.hasOwnProperty(i) || (l = l || {}, l[i] = "");
								for (i in d) d.hasOwnProperty(i) && c[i] !== d[i] && (l = l || {}, l[i] = d[i])
							} else l = d;
					else if (X.hasOwnProperty(o)) d ? s(this, o, d, r) : c && K(this, o);
					else if (_(this._tag, t)) ne.hasOwnProperty(o) || D.setValueForAttribute(q(this), o, d);
					else if (w.properties[o] || w.isCustomAttribute(o)) {
						var p = q(this);
						null != d ? D.setValueForProperty(p, o, d) : D.deleteValueForProperty(p, o)
					}
				}
				l && b.setValueForStyles(q(this), l, this)
			},
			_updateDOMChildren: function(e, t, r, o) {
				var a = Z[typeof e.children] ? e.children : null,
					i = Z[typeof t.children] ? t.children : null,
					s = e.dangerouslySetInnerHTML && e.dangerouslySetInnerHTML.__html,
					l = t.dangerouslySetInnerHTML && t.dangerouslySetInnerHTML.__html,
					u = null != a ? null : e.children,
					d = null != i ? null : t.children,
					c = null != a || null != s,
					p = null != i || null != l;
				null != u && null == d ? this.updateChildren(null, r, o) : c && !p && (this.updateTextContent(""), "production" !== n.env.NODE_ENV && I.debugTool.onSetChildren(this._debugID, [])), null != i ? a !== i && (this.updateTextContent("" + i), "production" !== n.env.NODE_ENV && ae.call(this, i)) : null != l ? (s !== l && this.updateMarkup("" + l), "production" !== n.env.NODE_ENV && I.debugTool.onSetChildren(this._debugID, [])) : null != d && ("production" !== n.env.NODE_ENV && ae.call(this, null), this.updateChildren(d, r, o))
			},
			getHostNode: function() {
				return q(this)
			},
			unmountComponent: function(e) {
				switch (this._tag) {
					case "audio":
					case "form":
					case "iframe":
					case "img":
					case "link":
					case "object":
					case "source":
					case "video":
						var t = this._wrapperState.listeners;
						if (t)
							for (var r = 0; r < t.length; r++) t[r].remove();
						break;
					case "html":
					case "head":
					case "body":
						"production" !== n.env.NODE_ENV ? F(!1, "<%s> tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.", this._tag) : v("66", this._tag)
				}
				this.unmountChildren(e), N.uncacheNode(this), T.deleteAllListeners(this), this._rootNodeID = 0, this._domID = 0, this._wrapperState = null, "production" !== n.env.NODE_ENV && ae.call(this, null)
			},
			getPublicInstance: function() {
				return q(this)
			}
		}, g(f.prototype, f.Mixin, j.Mixin), e.exports = f
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";
	var n = t(36),
		r = t(96),
		o = {
			focusDOMComponent: function() {
				r(n.getNodeFromInstance(this))
			}
		};
	e.exports = o
}, function(e, exports) {
	"use strict";

	function t(e) {
		try {
			e.focus()
		} catch (t) {}
	}
	e.exports = t
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(98),
			o = t(49),
			a = t(62),
			i = t(99),
			s = t(101),
			l = t(102),
			u = t(104),
			d = t(11),
			c = u(function(e) {
				return l(e)
			}),
			p = !1,
			m = "cssFloat";
		if (o.canUseDOM) {
			var h = document.createElement("div").style;
			try {
				h.font = ""
			} catch (_) {
				p = !0
			}
			void 0 === document.documentElement.style.cssFloat && (m = "styleFloat")
		}
		if ("production" !== n.env.NODE_ENV) var f = /^(?:webkit|moz|o)[A-Z]/,
			v = /;\s*$/,
			g = {},
			y = {},
			b = !1,
			M = function(e, t) {
				g.hasOwnProperty(e) && g[e] || (g[e] = !0, "production" !== n.env.NODE_ENV ? d(!1, "Unsupported style property %s. Did you mean %s?%s", e, i(e), L(t)) : void 0)
			},
			k = function(e, t) {
				g.hasOwnProperty(e) && g[e] || (g[e] = !0, "production" !== n.env.NODE_ENV ? d(!1, "Unsupported vendor-prefixed style property %s. Did you mean %s?%s", e, e.charAt(0).toUpperCase() + e.slice(1), L(t)) : void 0)
			},
			w = function(e, t, r) {
				y.hasOwnProperty(t) && y[t] || (y[t] = !0, "production" !== n.env.NODE_ENV ? d(!1, 'Style property values shouldn\'t contain a semicolon.%s Try "%s: %s" instead.', L(r), e, t.replace(v, "")) : void 0)
			},
			D = function(e, t, r) {
				b || (b = !0, "production" !== n.env.NODE_ENV ? d(!1, "`NaN` is an invalid value for the `%s` css style property.%s", e, L(r)) : void 0)
			},
			L = function(e) {
				if (e) {
					var t = e.getName();
					if (t) return " Check the render method of `" + t + "`."
				}
				return ""
			},
			T = function(e, t, n) {
				var r;
				n && (r = n._currentElement._owner), e.indexOf("-") > -1 ? M(e, r) : f.test(e) ? k(e, r) : v.test(t) && w(e, t, r), "number" == typeof t && isNaN(t) && D(e, t, r)
			};
		var Y = {
			createMarkupForStyles: function(e, t) {
				var r = "";
				for (var o in e)
					if (e.hasOwnProperty(o)) {
						var a = e[o];
						"production" !== n.env.NODE_ENV && T(o, a, t), null != a && (r += c(o) + ":", r += s(o, a, t) + ";")
					}
				return r || null
			},
			setValueForStyles: function(e, t, o) {
				"production" !== n.env.NODE_ENV && a.debugTool.onHostOperation(o._debugID, "update styles", t);
				var i = e.style;
				for (var l in t)
					if (t.hasOwnProperty(l)) {
						"production" !== n.env.NODE_ENV && T(l, t[l], o);
						var u = s(l, t[l], o);
						if ("float" !== l && "cssFloat" !== l || (l = m), u) i[l] = u;
						else {
							var d = p && r.shorthandPropertyExpansions[l];
							if (d)
								for (var c in d) i[c] = "";
							else i[l] = ""
						}
					}
			}
		};
		e.exports = Y
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";

	function t(e, t) {
		return e + t.charAt(0).toUpperCase() + t.substring(1)
	}
	var n = {
			animationIterationCount: !0,
			borderImageOutset: !0,
			borderImageSlice: !0,
			borderImageWidth: !0,
			boxFlex: !0,
			boxFlexGroup: !0,
			boxOrdinalGroup: !0,
			columnCount: !0,
			flex: !0,
			flexGrow: !0,
			flexPositive: !0,
			flexShrink: !0,
			flexNegative: !0,
			flexOrder: !0,
			gridRow: !0,
			gridColumn: !0,
			fontWeight: !0,
			lineClamp: !0,
			lineHeight: !0,
			opacity: !0,
			order: !0,
			orphans: !0,
			tabSize: !0,
			widows: !0,
			zIndex: !0,
			zoom: !0,
			fillOpacity: !0,
			floodOpacity: !0,
			stopOpacity: !0,
			strokeDasharray: !0,
			strokeDashoffset: !0,
			strokeMiterlimit: !0,
			strokeOpacity: !0,
			strokeWidth: !0
		},
		r = ["Webkit", "ms", "Moz", "O"];
	Object.keys(n).forEach(function(e) {
		r.forEach(function(r) {
			n[t(r, e)] = n[e]
		})
	});
	var o = {
			background: {
				backgroundAttachment: !0,
				backgroundColor: !0,
				backgroundImage: !0,
				backgroundPositionX: !0,
				backgroundPositionY: !0,
				backgroundRepeat: !0
			},
			backgroundPosition: {
				backgroundPositionX: !0,
				backgroundPositionY: !0
			},
			border: {
				borderWidth: !0,
				borderStyle: !0,
				borderColor: !0
			},
			borderBottom: {
				borderBottomWidth: !0,
				borderBottomStyle: !0,
				borderBottomColor: !0
			},
			borderLeft: {
				borderLeftWidth: !0,
				borderLeftStyle: !0,
				borderLeftColor: !0
			},
			borderRight: {
				borderRightWidth: !0,
				borderRightStyle: !0,
				borderRightColor: !0
			},
			borderTop: {
				borderTopWidth: !0,
				borderTopStyle: !0,
				borderTopColor: !0
			},
			font: {
				fontStyle: !0,
				fontVariant: !0,
				fontWeight: !0,
				fontSize: !0,
				lineHeight: !0,
				fontFamily: !0
			},
			outline: {
				outlineWidth: !0,
				outlineStyle: !0,
				outlineColor: !0
			}
		},
		a = {
			isUnitlessNumber: n,
			shorthandPropertyExpansions: o
		};
	e.exports = a
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		return r(e.replace(o, "ms-"))
	}
	var r = t(100),
		o = /^-ms-/;
	e.exports = n
}, function(e, exports) {
	"use strict";

	function t(e) {
		return e.replace(n, function(e, t) {
			return t.toUpperCase()
		})
	}
	var n = /-(.)/g;
	e.exports = t
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t, r) {
			var o = null == t || "boolean" == typeof t || "" === t;
			if (o) return "";
			var l = isNaN(t);
			if (l || 0 === t || i.hasOwnProperty(e) && i[e]) return "" + t;
			if ("string" == typeof t) {
				if ("production" !== n.env.NODE_ENV && r && "0" !== t) {
					var u = r._currentElement._owner,
						d = u ? u.getName() : null;
					d && !s[d] && (s[d] = {});
					var c = !1;
					if (d) {
						var p = s[d];
						c = p[e], c || (p[e] = !0)
					}
					c || ("production" !== n.env.NODE_ENV ? a(!1, "a `%s` tag (owner: `%s`) was passed a numeric string value for CSS property `%s` (value: `%s`) which will be treated as a unitless number in a future version of React.", r._currentElement.type, d || "unknown", e, t) : void 0)
				}
				t = t.trim()
			}
			return t + "px"
		}
		var o = t(98),
			a = t(11),
			i = o.isUnitlessNumber,
			s = {};
		e.exports = r
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		return r(e).replace(o, "-ms-")
	}
	var r = t(103),
		o = /^ms-/;
	e.exports = n
}, function(e, exports) {
	"use strict";

	function t(e) {
		return e.replace(n, "-$1").toLowerCase()
	}
	var n = /([A-Z])/g;
	e.exports = t
}, function(e, exports) {
	"use strict";

	function t(e) {
		var t = {};
		return function(n) {
			return t.hasOwnProperty(n) || (t[n] = e.call(this, n)), t[n]
		}
	}
	e.exports = t
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			return p.hasOwnProperty(e) ? !0 : c.hasOwnProperty(e) ? !1 : d.test(e) ? (p[e] = !0, !0) : (c[e] = !0, "production" !== n.env.NODE_ENV ? u(!1, "Invalid attribute name: `%s`", e) : void 0, !1)
		}

		function o(e, t) {
			return null == t || e.hasBooleanValue && !t || e.hasNumericValue && isNaN(t) || e.hasPositiveNumericValue && 1 > t || e.hasOverloadedBooleanValue && t === !1
		}
		var a = t(37),
			i = t(36),
			s = t(62),
			l = t(106),
			u = t(11),
			d = new RegExp("^[" + a.ATTRIBUTE_NAME_START_CHAR + "][" + a.ATTRIBUTE_NAME_CHAR + "]*$"),
			c = {},
			p = {},
			m = {
				createMarkupForID: function(e) {
					return a.ID_ATTRIBUTE_NAME + "=" + l(e)
				},
				setAttributeForID: function(e, t) {
					e.setAttribute(a.ID_ATTRIBUTE_NAME, t)
				},
				createMarkupForRoot: function() {
					return a.ROOT_ATTRIBUTE_NAME + '=""'
				},
				setAttributeForRoot: function(e) {
					e.setAttribute(a.ROOT_ATTRIBUTE_NAME, "")
				},
				createMarkupForProperty: function(e, t) {
					var n = a.properties.hasOwnProperty(e) ? a.properties[e] : null;
					if (n) {
						if (o(n, t)) return "";
						var r = n.attributeName;
						return n.hasBooleanValue || n.hasOverloadedBooleanValue && t === !0 ? r + '=""' : r + "=" + l(t)
					}
					return a.isCustomAttribute(e) ? null == t ? "" : e + "=" + l(t) : null
				},
				createMarkupForCustomAttribute: function(e, t) {
					return r(e) && null != t ? e + "=" + l(t) : ""
				},
				setValueForProperty: function(e, t, r) {
					var l = a.properties.hasOwnProperty(t) ? a.properties[t] : null;
					if (l) {
						var u = l.mutationMethod;
						if (u) u(e, r);
						else {
							if (o(l, r)) return void this.deleteValueForProperty(e, t);
							if (l.mustUseProperty) e[l.propertyName] = r;
							else {
								var d = l.attributeName,
									c = l.attributeNamespace;
								c ? e.setAttributeNS(c, d, "" + r) : l.hasBooleanValue || l.hasOverloadedBooleanValue && r === !0 ? e.setAttribute(d, "") : e.setAttribute(d, "" + r)
							}
						}
					} else if (a.isCustomAttribute(t)) return void m.setValueForAttribute(e, t, r);
					if ("production" !== n.env.NODE_ENV) {
						var p = {};
						p[t] = r, s.debugTool.onHostOperation(i.getInstanceFromNode(e)._debugID, "update attribute", p)
					}
				},
				setValueForAttribute: function(e, t, o) {
					if (r(t) && (null == o ? e.removeAttribute(t) : e.setAttribute(t, "" + o), "production" !== n.env.NODE_ENV)) {
						var a = {};
						a[t] = o, s.debugTool.onHostOperation(i.getInstanceFromNode(e)._debugID, "update attribute", a)
					}
				},
				deleteValueForAttribute: function(e, t) {
					e.removeAttribute(t), "production" !== n.env.NODE_ENV && s.debugTool.onHostOperation(i.getInstanceFromNode(e)._debugID, "remove attribute", t)
				},
				deleteValueForProperty: function(e, t) {
					var r = a.properties.hasOwnProperty(t) ? a.properties[t] : null;
					if (r) {
						var o = r.mutationMethod;
						if (o) o(e, void 0);
						else if (r.mustUseProperty) {
							var l = r.propertyName;
							r.hasBooleanValue ? e[l] = !1 : e[l] = ""
						} else e.removeAttribute(r.attributeName)
					} else a.isCustomAttribute(t) && e.removeAttribute(t);
					"production" !== n.env.NODE_ENV && s.debugTool.onHostOperation(i.getInstanceFromNode(e)._debugID, "remove attribute", t)
				}
			};
		e.exports = m
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		return '"' + r(e) + '"'
	}
	var r = t(87);
	e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		return Object.prototype.hasOwnProperty.call(e, _) || (e[_] = m++, c[e[_]] = {}), c[e[_]]
	}
	var r, o = t(4),
		a = t(41),
		i = t(44),
		s = t(108),
		l = t(77),
		u = t(109),
		d = t(71),
		c = {},
		p = !1,
		m = 0,
		h = {
			topAbort: "abort",
			topAnimationEnd: u("animationend") || "animationend",
			topAnimationIteration: u("animationiteration") || "animationiteration",
			topAnimationStart: u("animationstart") || "animationstart",
			topBlur: "blur",
			topCanPlay: "canplay",
			topCanPlayThrough: "canplaythrough",
			topChange: "change",
			topClick: "click",
			topCompositionEnd: "compositionend",
			topCompositionStart: "compositionstart",
			topCompositionUpdate: "compositionupdate",
			topContextMenu: "contextmenu",
			topCopy: "copy",
			topCut: "cut",
			topDoubleClick: "dblclick",
			topDrag: "drag",
			topDragEnd: "dragend",
			topDragEnter: "dragenter",
			topDragExit: "dragexit",
			topDragLeave: "dragleave",
			topDragOver: "dragover",
			topDragStart: "dragstart",
			topDrop: "drop",
			topDurationChange: "durationchange",
			topEmptied: "emptied",
			topEncrypted: "encrypted",
			topEnded: "ended",
			topError: "error",
			topFocus: "focus",
			topInput: "input",
			topKeyDown: "keydown",
			topKeyPress: "keypress",
			topKeyUp: "keyup",
			topLoadedData: "loadeddata",
			topLoadedMetadata: "loadedmetadata",
			topLoadStart: "loadstart",
			topMouseDown: "mousedown",
			topMouseMove: "mousemove",
			topMouseOut: "mouseout",
			topMouseOver: "mouseover",
			topMouseUp: "mouseup",
			topPaste: "paste",
			topPause: "pause",
			topPlay: "play",
			topPlaying: "playing",
			topProgress: "progress",
			topRateChange: "ratechange",
			topScroll: "scroll",
			topSeeked: "seeked",
			topSeeking: "seeking",
			topSelectionChange: "selectionchange",
			topStalled: "stalled",
			topSuspend: "suspend",
			topTextInput: "textInput",
			topTimeUpdate: "timeupdate",
			topTouchCancel: "touchcancel",
			topTouchEnd: "touchend",
			topTouchMove: "touchmove",
			topTouchStart: "touchstart",
			topTransitionEnd: u("transitionend") || "transitionend",
			topVolumeChange: "volumechange",
			topWaiting: "waiting",
			topWheel: "wheel"
		},
		_ = "_reactListenersID" + String(Math.random()).slice(2),
		f = o({}, s, {
			ReactEventListener: null,
			injection: {
				injectReactEventListener: function(e) {
					e.setHandleTopLevel(f.handleTopLevel), f.ReactEventListener = e
				}
			},
			setEnabled: function(e) {
				f.ReactEventListener && f.ReactEventListener.setEnabled(e)
			},
			isEnabled: function() {
				return !(!f.ReactEventListener || !f.ReactEventListener.isEnabled())
			},
			listenTo: function(e, t) {
				for (var r = t, o = n(r), s = i.registrationNameDependencies[e], l = a.topLevelTypes, u = 0; u < s.length; u++) {
					var c = s[u];
					o.hasOwnProperty(c) && o[c] || (c === l.topWheel ? d("wheel") ? f.ReactEventListener.trapBubbledEvent(l.topWheel, "wheel", r) : d("mousewheel") ? f.ReactEventListener.trapBubbledEvent(l.topWheel, "mousewheel", r) : f.ReactEventListener.trapBubbledEvent(l.topWheel, "DOMMouseScroll", r) : c === l.topScroll ? d("scroll", !0) ? f.ReactEventListener.trapCapturedEvent(l.topScroll, "scroll", r) : f.ReactEventListener.trapBubbledEvent(l.topScroll, "scroll", f.ReactEventListener.WINDOW_HANDLE) : c === l.topFocus || c === l.topBlur ? (d("focus", !0) ? (f.ReactEventListener.trapCapturedEvent(l.topFocus, "focus", r), f.ReactEventListener.trapCapturedEvent(l.topBlur, "blur", r)) : d("focusin") && (f.ReactEventListener.trapBubbledEvent(l.topFocus, "focusin", r), f.ReactEventListener.trapBubbledEvent(l.topBlur, "focusout", r)), o[l.topBlur] = !0, o[l.topFocus] = !0) : h.hasOwnProperty(c) && f.ReactEventListener.trapBubbledEvent(c, h[c], r), o[c] = !0)
				}
			},
			trapBubbledEvent: function(e, t, n) {
				return f.ReactEventListener.trapBubbledEvent(e, t, n)
			},
			trapCapturedEvent: function(e, t, n) {
				return f.ReactEventListener.trapCapturedEvent(e, t, n)
			},
			ensureScrollValueMonitoring: function() {
				if (void 0 === r && (r = document.createEvent && "pageX" in document.createEvent("MouseEvent")), !r && !p) {
					var e = l.refreshScrollValues;
					f.ReactEventListener.monitorScrollValue(e), p = !0
				}
			}
		});
	e.exports = f
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		r.enqueueEvents(e), r.processEventQueue(!1)
	}
	var r = t(43),
		o = {
			handleTopLevel: function(e, t, o, a) {
				var i = r.extractEvents(e, t, o, a);
				n(i)
			}
		};
	e.exports = o
}, function(e, exports, t) {
	"use strict";

	function n(e, t) {
		var n = {};
		return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n["ms" + e] = "MS" + t, n["O" + e] = "o" + t.toLowerCase(), n
	}

	function r(e) {
		if (i[e]) return i[e];
		if (!a[e]) return e;
		var t = a[e];
		for (var n in t)
			if (t.hasOwnProperty(n) && n in s) return i[e] = t[n];
		return ""
	}
	var o = t(49),
		a = {
			animationend: n("Animation", "AnimationEnd"),
			animationiteration: n("Animation", "AnimationIteration"),
			animationstart: n("Animation", "AnimationStart"),
			transitionend: n("Transition", "TransitionEnd")
		},
		i = {},
		s = {};
	o.canUseDOM && (s = document.createElement("div").style, "AnimationEvent" in window || (delete a.animationend.animation, delete a.animationiteration.animation, delete a.animationstart.animation), "TransitionEvent" in window || delete a.transitionend.transition), e.exports = r
}, function(e, exports, t) {
	"use strict";
	var n = t(111),
		r = {
			getHostProps: n.getHostProps
		};
	e.exports = r
}, function(e, exports) {
	"use strict";
	var t = {
			onClick: !0,
			onDoubleClick: !0,
			onMouseDown: !0,
			onMouseMove: !0,
			onMouseUp: !0,
			onClickCapture: !0,
			onDoubleClickCapture: !0,
			onMouseDownCapture: !0,
			onMouseMoveCapture: !0,
			onMouseUpCapture: !0
		},
		n = {
			getHostProps: function(e, n) {
				if (!n.disabled) return n;
				var r = {};
				for (var o in n) !t[o] && n.hasOwnProperty(o) && (r[o] = n[o]);
				return r
			}
		};
	e.exports = n
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r() {
			this._rootNodeID && M.updateWrapper(this)
		}

		function o(e) {
			var t = "checkbox" === e.type || "radio" === e.type;
			return t ? void 0 !== e.checked : void 0 !== e.value
		}

		function a(e) {
			var t = this._currentElement.props,
				o = d.executeOnChange(t, e);
			p.asap(r, this);
			var a = t.name;
			if ("radio" === t.type && null != a) {
				for (var s = c.getNodeFromInstance(this), l = s; l.parentNode;) l = l.parentNode;
				for (var u = l.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), h = 0; h < u.length; h++) {
					var _ = u[h];
					if (_ !== s && _.form === s.form) {
						var f = c.getInstanceFromNode(_);
						f ? void 0 : "production" !== n.env.NODE_ENV ? m(!1, "ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.") : i("90"), p.asap(r, f)
					}
				}
			}
			return o
		}
		var i = t(7),
			s = t(4),
			l = t(111),
			u = t(105),
			d = t(113),
			c = t(36),
			p = t(56),
			m = t(8),
			h = t(11),
			_ = !1,
			f = !1,
			v = !1,
			g = !1,
			y = !1,
			b = !1,
			M = {
				getHostProps: function(e, t) {
					var n = d.getValue(t),
						r = d.getChecked(t),
						o = s({
							type: void 0,
							step: void 0,
							min: void 0,
							max: void 0
						}, l.getHostProps(e, t), {
							defaultChecked: void 0,
							defaultValue: void 0,
							value: null != n ? n : e._wrapperState.initialValue,
							checked: null != r ? r : e._wrapperState.initialChecked,
							onChange: e._wrapperState.onChange
						});
					return o
				},
				mountWrapper: function(e, t) {
					if ("production" !== n.env.NODE_ENV) {
						d.checkPropTypes("input", t, e._currentElement._owner);
						var r = e._currentElement._owner;
						void 0 === t.valueLink || _ || ("production" !== n.env.NODE_ENV ? h(!1, "`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.") : void 0, _ = !0), void 0 === t.checkedLink || f || ("production" !== n.env.NODE_ENV ? h(!1, "`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead.") : void 0, f = !0), void 0 === t.checked || void 0 === t.defaultChecked || g || ("production" !== n.env.NODE_ENV ? h(!1, "%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", r && r.getName() || "A component", t.type) : void 0, g = !0), void 0 === t.value || void 0 === t.defaultValue || v || ("production" !== n.env.NODE_ENV ? h(!1, "%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://fb.me/react-controlled-components", r && r.getName() || "A component", t.type) : void 0, v = !0)
					}
					var i = t.defaultValue;
					e._wrapperState = {
						initialChecked: null != t.checked ? t.checked : t.defaultChecked,
						initialValue: null != t.value ? t.value : i,
						listeners: null,
						onChange: a.bind(e)
					}, "production" !== n.env.NODE_ENV && (e._wrapperState.controlled = o(t))
				},
				updateWrapper: function(e) {
					var t = e._currentElement.props;
					if ("production" !== n.env.NODE_ENV) {
						var r = o(t),
							a = e._currentElement._owner;
						e._wrapperState.controlled || !r || b || ("production" !== n.env.NODE_ENV ? h(!1, "%s is changing an uncontrolled input of type %s to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components", a && a.getName() || "A component", t.type) : void 0, b = !0), !e._wrapperState.controlled || r || y || ("production" !== n.env.NODE_ENV ? h(!1, "%s is changing a controlled input of type %s to be uncontrolled. Input elements should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://fb.me/react-controlled-components", a && a.getName() || "A component", t.type) : void 0, y = !0)
					}
					var i = t.checked;
					null != i && u.setValueForProperty(c.getNodeFromInstance(e), "checked", i || !1);
					var s = c.getNodeFromInstance(e),
						l = d.getValue(t);
					if (null != l) {
						var p = "" + l;
						p !== s.value && (s.value = p)
					} else null == t.value && null != t.defaultValue && (s.defaultValue = "" + t.defaultValue), null == t.checked && null != t.defaultChecked && (s.defaultChecked = !!t.defaultChecked)
				},
				postMountWrapper: function(e) {
					var t = e._currentElement.props,
						n = c.getNodeFromInstance(e);
					switch (t.type) {
						case "submit":
						case "reset":
							break;
						case "color":
						case "date":
						case "datetime":
						case "datetime-local":
						case "month":
						case "time":
						case "week":
							n.value = "", n.value = n.defaultValue;
							break;
						default:
							n.value = n.value
					}
					var r = n.name;
					"" !== r && (n.name = ""), n.defaultChecked = !n.defaultChecked, n.defaultChecked = !n.defaultChecked, "" !== r && (n.name = r)
				}
			};
		e.exports = M
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			null != e.checkedLink && null != e.valueLink ? "production" !== n.env.NODE_ENV ? c(!1, "Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa.") : s("87") : void 0
		}

		function o(e) {
			r(e), null != e.value || null != e.onChange ? "production" !== n.env.NODE_ENV ? c(!1, "Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink.") : s("88") : void 0
		}

		function a(e) {
			r(e), null != e.checked || null != e.onChange ? "production" !== n.env.NODE_ENV ? c(!1, "Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink") : s("89") : void 0
		}

		function i(e) {
			if (e) {
				var t = e.getName();
				if (t) return " Check the render method of `" + t + "`."
			}
			return ""
		}
		var s = t(7),
			l = t(31),
			u = t(22),
			d = t(30),
			c = t(8),
			p = t(11),
			m = {
				button: !0,
				checkbox: !0,
				image: !0,
				hidden: !0,
				radio: !0,
				reset: !0,
				submit: !0
			},
			h = {
				value: function(e, t, n) {
					return !e[t] || m[e.type] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")
				},
				checked: function(e, t, n) {
					return !e[t] || e.onChange || e.readOnly || e.disabled ? null : new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")
				},
				onChange: l.func
			},
			_ = {},
			f = {
				checkPropTypes: function(e, t, r) {
					for (var o in h) {
						if (h.hasOwnProperty(o)) var a = h[o](t, o, e, u.prop, null, d);
						if (a instanceof Error && !(a.message in _)) {
							_[a.message] = !0;
							var s = i(r);
							"production" !== n.env.NODE_ENV ? p(!1, "Failed form propType: %s%s", a.message, s) : void 0
						}
					}
				},
				getValue: function(e) {
					return e.valueLink ? (o(e), e.valueLink.value) : e.value
				},
				getChecked: function(e) {
					return e.checkedLink ? (a(e), e.checkedLink.value) : e.checked
				},
				executeOnChange: function(e, t) {
					return e.valueLink ? (o(e), e.valueLink.requestChange(t.target.value)) : e.checkedLink ? (a(e), e.checkedLink.requestChange(t.target.checked)) : e.onChange ? e.onChange.call(void 0, t) : void 0
				}
			};
		e.exports = f
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			var t = "";
			return a.forEach(e, function(e) {
				null != e && ("string" == typeof e || "number" == typeof e ? t += e : u || (u = !0, "production" !== n.env.NODE_ENV ? l(!1, "Only strings and numbers are supported as <option> children.") : void 0))
			}), t
		}
		var o = t(4),
			a = t(5),
			i = t(36),
			s = t(115),
			l = t(11),
			u = !1,
			d = {
				mountWrapper: function(e, t, o) {
					"production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? l(null == t.selected, "Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.") : void 0);
					var a = null;
					if (null != o) {
						var i = o;
						"optgroup" === i._tag && (i = i._hostParent), null != i && "select" === i._tag && (a = s.getSelectValueContext(i))
					}
					var u = null;
					if (null != a) {
						var d;
						if (d = null != t.value ? t.value + "" : r(t.children), u = !1, Array.isArray(a)) {
							for (var c = 0; c < a.length; c++)
								if ("" + a[c] === d) {
									u = !0;
									break
								}
						} else u = "" + a === d
					}
					e._wrapperState = {
						selected: u
					}
				},
				postMountWrapper: function(e) {
					var t = e._currentElement.props;
					if (null != t.value) {
						var n = i.getNodeFromInstance(e);
						n.setAttribute("value", t.value)
					}
				},
				getHostProps: function(e, t) {
					var n = o({
						selected: void 0,
						children: void 0
					}, t);
					null != e._wrapperState.selected && (n.selected = e._wrapperState.selected);
					var a = r(t.children);
					return a && (n.children = a), n
				}
			};
		e.exports = d
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r() {
			if (this._rootNodeID && this._wrapperState.pendingUpdate) {
				this._wrapperState.pendingUpdate = !1;
				var e = this._currentElement.props,
					t = d.getValue(e);
				null != t && i(this, Boolean(e.multiple), t)
			}
		}

		function o(e) {
			if (e) {
				var t = e.getName();
				if (t) return " Check the render method of `" + t + "`."
			}
			return ""
		}

		function a(e, t) {
			var r = e._currentElement._owner;
			d.checkPropTypes("select", t, r), void 0 === t.valueLink || h || ("production" !== n.env.NODE_ENV ? m(!1, "`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead.") : void 0, h = !0);
			for (var a = 0; a < f.length; a++) {
				var i = f[a];
				if (null != t[i]) {
					var s = Array.isArray(t[i]);
					t.multiple && !s ? "production" !== n.env.NODE_ENV ? m(!1, "The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", i, o(r)) : void 0 : !t.multiple && s && ("production" !== n.env.NODE_ENV ? m(!1, "The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", i, o(r)) : void 0)
				}
			}
		}

		function i(e, t, n) {
			var r, o, a = c.getNodeFromInstance(e).options;
			if (t) {
				for (r = {}, o = 0; o < n.length; o++) r["" + n[o]] = !0;
				for (o = 0; o < a.length; o++) {
					var i = r.hasOwnProperty(a[o].value);
					a[o].selected !== i && (a[o].selected = i)
				}
			} else {
				for (r = "" + n, o = 0; o < a.length; o++)
					if (a[o].value === r) return void(a[o].selected = !0);
				a.length && (a[0].selected = !0)
			}
		}

		function s(e) {
			var t = this._currentElement.props,
				n = d.executeOnChange(t, e);
			return this._rootNodeID && (this._wrapperState.pendingUpdate = !0), p.asap(r, this), n
		}
		var l = t(4),
			u = t(111),
			d = t(113),
			c = t(36),
			p = t(56),
			m = t(11),
			h = !1,
			_ = !1,
			f = ["value", "defaultValue"],
			v = {
				getHostProps: function(e, t) {
					return l({}, u.getHostProps(e, t), {
						onChange: e._wrapperState.onChange,
						value: void 0
					})
				},
				mountWrapper: function(e, t) {
					"production" !== n.env.NODE_ENV && a(e, t);
					var r = d.getValue(t);
					e._wrapperState = {
						pendingUpdate: !1,
						initialValue: null != r ? r : t.defaultValue,
						listeners: null,
						onChange: s.bind(e),
						wasMultiple: Boolean(t.multiple)
					}, void 0 === t.value || void 0 === t.defaultValue || _ || ("production" !== n.env.NODE_ENV ? m(!1, "Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://fb.me/react-controlled-components") : void 0, _ = !0)
				},
				getSelectValueContext: function(e) {
					return e._wrapperState.initialValue
				},
				postUpdateWrapper: function(e) {
					var t = e._currentElement.props;
					e._wrapperState.initialValue = void 0;
					var n = e._wrapperState.wasMultiple;
					e._wrapperState.wasMultiple = Boolean(t.multiple);
					var r = d.getValue(t);
					null != r ? (e._wrapperState.pendingUpdate = !1, i(e, Boolean(t.multiple), r)) : n !== Boolean(t.multiple) && (null != t.defaultValue ? i(e, Boolean(t.multiple), t.defaultValue) : i(e, Boolean(t.multiple), t.multiple ? [] : ""))
				}
			};
		e.exports = v
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r() {
			this._rootNodeID && _.updateWrapper(this)
		}

		function o(e) {
			var t = this._currentElement.props,
				n = l.executeOnChange(t, e);
			return d.asap(r, this), n
		}
		var a = t(7),
			i = t(4),
			s = t(111),
			l = t(113),
			u = t(36),
			d = t(56),
			c = t(8),
			p = t(11),
			m = !1,
			h = !1,
			_ = {
				getHostProps: function(e, t) {
					null != t.dangerouslySetInnerHTML ? "production" !== n.env.NODE_ENV ? c(!1, "`dangerouslySetInnerHTML` does not make sense on <textarea>.") : a("91") : void 0;
					var r = i({}, s.getHostProps(e, t), {
						value: void 0,
						defaultValue: void 0,
						children: "" + e._wrapperState.initialValue,
						onChange: e._wrapperState.onChange
					});
					return r
				},
				mountWrapper: function(e, t) {
					"production" !== n.env.NODE_ENV && (l.checkPropTypes("textarea", t, e._currentElement._owner), void 0 === t.valueLink || m || ("production" !== n.env.NODE_ENV ? p(!1, "`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead.") : void 0, m = !0), void 0 === t.value || void 0 === t.defaultValue || h || ("production" !== n.env.NODE_ENV ? p(!1, "Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://fb.me/react-controlled-components") : void 0, h = !0));
					var r = l.getValue(t),
						i = r;
					if (null == r) {
						var s = t.defaultValue,
							u = t.children;
						null != u && ("production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? p(!1, "Use the `defaultValue` or `value` props instead of setting children on <textarea>.") : void 0), null != s ? "production" !== n.env.NODE_ENV ? c(!1, "If you supply `defaultValue` on a <textarea>, do not pass children.") : a("92") : void 0, Array.isArray(u) && (u.length <= 1 ? void 0 : "production" !== n.env.NODE_ENV ? c(!1, "<textarea> can only have at most one child.") : a("93"), u = u[0]), s = "" + u), null == s && (s = ""), i = s
					}
					e._wrapperState = {
						initialValue: "" + i,
						listeners: null,
						onChange: o.bind(e)
					}
				},
				updateWrapper: function(e) {
					var t = e._currentElement.props,
						n = u.getNodeFromInstance(e),
						r = l.getValue(t);
					if (null != r) {
						var o = "" + r;
						o !== n.value && (n.value = o), null == t.defaultValue && (n.defaultValue = o)
					}
					null != t.defaultValue && (n.defaultValue = t.defaultValue)
				},
				postMountWrapper: function(e) {
					var t = u.getNodeFromInstance(e);
					t.value = t.textContent
				}
			};
		e.exports = _
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t, n) {
			return {
				type: h.INSERT_MARKUP,
				content: e,
				fromIndex: null,
				fromNode: null,
				toIndex: n,
				afterNode: t
			}
		}

		function o(e, t, n) {
			return {
				type: h.MOVE_EXISTING,
				content: null,
				fromIndex: e._mountIndex,
				fromNode: f.getHostNode(e),
				toIndex: n,
				afterNode: t
			}
		}

		function a(e, t) {
			return {
				type: h.REMOVE_NODE,
				content: null,
				fromIndex: e._mountIndex,
				fromNode: t,
				toIndex: null,
				afterNode: null
			}
		}

		function i(e) {
			return {
				type: h.SET_MARKUP,
				content: e,
				fromIndex: null,
				fromNode: null,
				toIndex: null,
				afterNode: null
			}
		}

		function s(e) {
			return {
				type: h.TEXT_CONTENT,
				content: e,
				fromIndex: null,
				fromNode: null,
				toIndex: null,
				afterNode: null
			}
		}

		function l(e, t) {
			return t && (e = e || [], e.push(t)), e
		}

		function u(e, t) {
			c.processChildrenUpdates(e, t)
		}
		var d = t(7),
			c = t(118),
			p = t(119),
			m = t(62),
			h = t(92),
			_ = t(10),
			f = t(59),
			v = t(120),
			g = t(12),
			y = t(128),
			b = t(8),
			M = g;
		if ("production" !== n.env.NODE_ENV) {
			var k = function(e) {
				if (!e._debugID) {
					var t;
					(t = p.get(e)) && (e = t)
				}
				return e._debugID
			};
			M = function(e) {
				var t = k(this);
				0 !== t && m.debugTool.onSetChildren(t, e ? Object.keys(e).map(function(t) {
					return e[t]._debugID
				}) : [])
			}
		}
		var w = {
			Mixin: {
				_reconcilerInstantiateChildren: function(e, t, r) {
					if ("production" !== n.env.NODE_ENV) {
						var o = k(this);
						if (this._currentElement) try {
							return _.current = this._currentElement._owner, v.instantiateChildren(e, t, r, o)
						} finally {
							_.current = null
						}
					}
					return v.instantiateChildren(e, t, r)
				},
				_reconcilerUpdateChildren: function(e, t, r, o, a, i) {
					var s, l = 0;
					if ("production" !== n.env.NODE_ENV && (l = k(this), this._currentElement)) {
						try {
							_.current = this._currentElement._owner, s = y(t, l)
						} finally {
							_.current = null
						}
						return v.updateChildren(e, s, r, o, a, this, this._hostContainerInfo, i, l), s
					}
					return s = y(t, l), v.updateChildren(e, s, r, o, a, this, this._hostContainerInfo, i, l), s
				},
				mountChildren: function(e, t, r) {
					var o = this._reconcilerInstantiateChildren(e, t, r);
					this._renderedChildren = o;
					var a = [],
						i = 0;
					for (var s in o)
						if (o.hasOwnProperty(s)) {
							var l = o[s],
								u = 0;
							"production" !== n.env.NODE_ENV && (u = k(this));
							var d = f.mountComponent(l, t, this, this._hostContainerInfo, r, u);
							l._mountIndex = i++, a.push(d)
						}
					return "production" !== n.env.NODE_ENV && M.call(this, o), a
				},
				updateTextContent: function(e) {
					var t = this._renderedChildren;
					v.unmountChildren(t, !1);
					for (var r in t) t.hasOwnProperty(r) && ("production" !== n.env.NODE_ENV ? b(!1, "updateTextContent called on non-empty component.") : d("118"));
					var o = [s(e)];
					u(this, o)
				},
				updateMarkup: function(e) {
					var t = this._renderedChildren;
					v.unmountChildren(t, !1);
					for (var r in t) t.hasOwnProperty(r) && ("production" !== n.env.NODE_ENV ? b(!1, "updateTextContent called on non-empty component.") : d("118"));
					var o = [i(e)];
					u(this, o)
				},
				updateChildren: function(e, t, n) {
					this._updateChildren(e, t, n)
				},
				_updateChildren: function(e, t, r) {
					var o = this._renderedChildren,
						a = {},
						i = [],
						s = this._reconcilerUpdateChildren(o, e, i, a, t, r);
					if (s || o) {
						var d, c = null,
							p = 0,
							m = 0,
							h = 0,
							_ = null;
						for (d in s)
							if (s.hasOwnProperty(d)) {
								var v = o && o[d],
									g = s[d];
								v === g ? (c = l(c, this.moveChild(v, _, p, m)), m = Math.max(v._mountIndex, m), v._mountIndex = p) : (v && (m = Math.max(v._mountIndex, m)), c = l(c, this._mountChildAtIndex(g, i[h], _, p, t, r)), h++), p++, _ = f.getHostNode(g)
							}
						for (d in a) a.hasOwnProperty(d) && (c = l(c, this._unmountChild(o[d], a[d])));
						c && u(this, c), this._renderedChildren = s, "production" !== n.env.NODE_ENV && M.call(this, s)
					}
				},
				unmountChildren: function(e) {
					var t = this._renderedChildren;
					v.unmountChildren(t, e), this._renderedChildren = null
				},
				moveChild: function(e, t, n, r) {
					return e._mountIndex < r ? o(e, t, n) : void 0
				},
				createChild: function(e, t, n) {
					return r(n, t, e._mountIndex)
				},
				removeChild: function(e, t) {
					return a(e, t)
				},
				_mountChildAtIndex: function(e, t, n, r, o, a) {
					return e._mountIndex = r, this.createChild(e, n, t)
				},
				_unmountChild: function(e, t) {
					var n = this.removeChild(e, t);
					return e._mountIndex = null, n
				}
			}
		};
		e.exports = w
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(7),
			o = t(8),
			a = !1,
			i = {
				replaceNodeWithMarkup: null,
				processChildrenUpdates: null,
				injection: {
					injectEnvironment: function(e) {
						a ? "production" !== n.env.NODE_ENV ? o(!1, "ReactCompositeComponent: injectEnvironment() can only be called once.") : r("104") : void 0, i.replaceNodeWithMarkup = e.replaceNodeWithMarkup, i.processChildrenUpdates = e.processChildrenUpdates, a = !0
					}
				}
			};
		e.exports = i
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";
	var t = {
		remove: function(e) {
			e._reactInternalInstance = void 0
		},
		get: function(e) {
			return e._reactInternalInstance
		},
		has: function(e) {
			return void 0 !== e._reactInternalInstance
		},
		set: function(e, t) {
			e._reactInternalInstance = t
		}
	};
	e.exports = t
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, r, a, l) {
			var u = void 0 === e[a];
			"production" !== n.env.NODE_ENV && (o || (o = t(28)), u || ("production" !== n.env.NODE_ENV ? d(!1, "flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.%s", s.unescape(a), o.getStackAddendumByID(l)) : void 0)), null != r && u && (e[a] = i(r, !0))
		}
		var o, a = t(59),
			i = t(121),
			s = t(16),
			l = t(125),
			u = t(14),
			d = t(11);
		"undefined" != typeof n && n.env && "test" === n.env.NODE_ENV && (o = t(28));
		var c = {
			instantiateChildren: function(e, t, o, a) {
				if (null == e) return null;
				var i = {};
				return "production" !== n.env.NODE_ENV ? u(e, function(e, t, n) {
					return r(e, t, n, a)
				}, i) : u(e, r, i), i
			},
			updateChildren: function(e, t, n, r, o, s, u, d, c) {
				if (t || e) {
					var p, m;
					for (p in t)
						if (t.hasOwnProperty(p)) {
							m = e && e[p];
							var h = m && m._currentElement,
								_ = t[p];
							if (null != m && l(h, _)) a.receiveComponent(m, _, o, d), t[p] = m;
							else {
								m && (r[p] = a.getHostNode(m), a.unmountComponent(m, !1));
								var f = i(_, !0);
								t[p] = f;
								var v = a.mountComponent(f, o, s, u, d, c);
								n.push(v)
							}
						}
					for (p in e) !e.hasOwnProperty(p) || t && t.hasOwnProperty(p) || (m = e[p], r[p] = a.getHostNode(m), a.unmountComponent(m, !1))
				}
			},
			unmountChildren: function(e, t) {
				for (var n in e)
					if (e.hasOwnProperty(n)) {
						var r = e[n];
						a.unmountComponent(r, t)
					}
			}
		};
		e.exports = c
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			if (e) {
				var t = e.getName();
				if (t) return " Check the render method of `" + t + "`."
			}
			return ""
		}

		function o(e) {
			return "function" == typeof e && "undefined" != typeof e.prototype && "function" == typeof e.prototype.mountComponent && "function" == typeof e.prototype.receiveComponent
		}

		function a(e, t) {
			var s;
			if (null === e || e === !1) s = u.create(a);
			else if ("object" == typeof e) {
				var l = e;
				!l || "function" != typeof l.type && "string" != typeof l.type ? "production" !== n.env.NODE_ENV ? c(!1, "Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", null == l.type ? l.type : typeof l.type, r(l._owner)) : i("130", null == l.type ? l.type : typeof l.type, r(l._owner)) : void 0, "string" == typeof l.type ? s = d.createInternalComponent(l) : o(l.type) ? (s = new l.type(l), s.getHostNode || (s.getHostNode = s.getNativeNode)) : s = new m(l)
			} else "string" == typeof e || "number" == typeof e ? s = d.createInstanceForText(e) : "production" !== n.env.NODE_ENV ? c(!1, "Encountered invalid React node of type %s", typeof e) : i("131", typeof e);
			return "production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? p("function" == typeof s.mountComponent && "function" == typeof s.receiveComponent && "function" == typeof s.getHostNode && "function" == typeof s.unmountComponent, "Only React Components can be mounted.") : void 0), s._mountIndex = 0, s._mountImage = null, "production" !== n.env.NODE_ENV && (s._debugID = t ? h++ : 0), "production" !== n.env.NODE_ENV && Object.preventExtensions && Object.preventExtensions(s), s
		}
		var i = t(7),
			s = t(4),
			l = t(122),
			u = t(126),
			d = t(127),
			c = t(8),
			p = t(11),
			m = function(e) {
				this.construct(e)
			};
		s(m.prototype, l.Mixin, {
			_instantiateReactComponent: a
		});
		var h = 1;
		e.exports = a
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {}

		function o(e, t) {
			"production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? L(null === t || t === !1 || m.isValidElement(t), "%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.", e.displayName || e.name || "Component") : void 0, "production" !== n.env.NODE_ENV ? L(!e.childContextTypes, "%s(...): childContextTypes cannot be defined on a functional component.", e.displayName || e.name || "Component") : void 0)
		}

		function a() {
			var e = this._instance;
			0 !== this._debugID && f.debugTool.onBeginLifeCycleTimer(this._debugID, "componentDidMount"), e.componentDidMount(), 0 !== this._debugID && f.debugTool.onEndLifeCycleTimer(this._debugID, "componentDidMount")
		}

		function i(e, t, n) {
			var r = this._instance;
			0 !== this._debugID && f.debugTool.onBeginLifeCycleTimer(this._debugID, "componentDidUpdate"), r.componentDidUpdate(e, t, n), 0 !== this._debugID && f.debugTool.onEndLifeCycleTimer(this._debugID, "componentDidUpdate")
		}

		function s(e) {
			return !(!e.prototype || !e.prototype.isReactComponent)
		}

		function l(e) {
			return !(!e.prototype || !e.prototype.isPureReactComponent)
		}
		var u = t(7),
			d = t(4),
			c = t(118),
			p = t(10),
			m = t(9),
			h = t(46),
			_ = t(119),
			f = t(62),
			v = t(123),
			g = t(22),
			y = t(59),
			b = t(29),
			M = t(19),
			k = t(8),
			w = t(124),
			D = t(125),
			L = t(11),
			T = {
				ImpureClass: 0,
				PureClass: 1,
				StatelessFunctional: 2
			};
		r.prototype.render = function() {
			var e = _.get(this)._currentElement.type,
				t = e(this.props, this.context, this.updater);
			return o(e, t), t
		};
		var Y = 1,
			E = {
				construct: function(e) {
					this._currentElement = e, this._rootNodeID = 0, this._compositeType = null, this._instance = null, this._hostParent = null, this._hostContainerInfo = null, this._updateBatchNumber = null, this._pendingElement = null, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._renderedNodeType = null, this._renderedComponent = null, this._context = null, this._mountOrder = 0, this._topLevelWrapper = null, this._pendingCallbacks = null, this._calledComponentWillUnmount = !1, "production" !== n.env.NODE_ENV && (this._warnedAboutRefsInRender = !1)
				},
				mountComponent: function(e, t, i, d) {
					this._context = d, this._mountOrder = Y++, this._hostParent = t, this._hostContainerInfo = i;
					var c, p = this._currentElement.props,
						h = this._processContext(d),
						f = this._currentElement.type,
						v = e.getUpdateQueue(),
						g = s(f),
						y = this._constructComponent(g, p, h, v);
					if (g || null != y && null != y.render ? l(f) ? this._compositeType = T.PureClass : this._compositeType = T.ImpureClass : (c = y, o(f, c), null === y || y === !1 || m.isValidElement(y) ? void 0 : "production" !== n.env.NODE_ENV ? k(!1, "%s(...): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.", f.displayName || f.name || "Component") : u("105", f.displayName || f.name || "Component"), y = new r(f), this._compositeType = T.StatelessFunctional), "production" !== n.env.NODE_ENV) {
						null == y.render && ("production" !== n.env.NODE_ENV ? L(!1, "%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", f.displayName || f.name || "Component") : void 0);
						var b = y.props !== p,
							w = f.displayName || f.name || "Component";
						"production" !== n.env.NODE_ENV ? L(void 0 === y.props || !b, "%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", w, w) : void 0
					}
					y.props = p, y.context = h, y.refs = M, y.updater = v, this._instance = y, _.set(y, this), "production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? L(!y.getInitialState || y.getInitialState.isReactClassApproved, "getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", this.getName() || "a component") : void 0, "production" !== n.env.NODE_ENV ? L(!y.getDefaultProps || y.getDefaultProps.isReactClassApproved, "getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", this.getName() || "a component") : void 0, "production" !== n.env.NODE_ENV ? L(!y.propTypes, "propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", this.getName() || "a component") : void 0, "production" !== n.env.NODE_ENV ? L(!y.contextTypes, "contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", this.getName() || "a component") : void 0, "production" !== n.env.NODE_ENV ? L("function" != typeof y.componentShouldUpdate, "%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", this.getName() || "A component") : void 0, "production" !== n.env.NODE_ENV ? L("function" != typeof y.componentDidUnmount, "%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", this.getName() || "A component") : void 0, "production" !== n.env.NODE_ENV ? L("function" != typeof y.componentWillRecieveProps, "%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", this.getName() || "A component") : void 0);
					var D = y.state;
					void 0 === D && (y.state = D = null), "object" != typeof D || Array.isArray(D) ? "production" !== n.env.NODE_ENV ? k(!1, "%s.state: must be set to an object or null", this.getName() || "ReactCompositeComponent") : u("106", this.getName() || "ReactCompositeComponent") : void 0, this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1;
					var E;
					return E = y.unstable_handleError ? this.performInitialMountWithErrorHandling(c, t, i, e, d) : this.performInitialMount(c, t, i, e, d), y.componentDidMount && ("production" !== n.env.NODE_ENV ? e.getReactMountReady().enqueue(a, this) : e.getReactMountReady().enqueue(y.componentDidMount, y)), E
				},
				_constructComponent: function(e, t, r, o) {
					if ("production" === n.env.NODE_ENV) return this._constructComponentWithoutOwner(e, t, r, o);
					p.current = this;
					try {
						return this._constructComponentWithoutOwner(e, t, r, o)
					} finally {
						p.current = null
					}
				},
				_constructComponentWithoutOwner: function(e, t, r, o) {
					var a, i = this._currentElement.type;
					return e ? ("production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onBeginLifeCycleTimer(this._debugID, "ctor"), a = new i(t, r, o), "production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onEndLifeCycleTimer(this._debugID, "ctor")) : ("production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onBeginLifeCycleTimer(this._debugID, "render"), a = i(t, r, o), "production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onEndLifeCycleTimer(this._debugID, "render")), a
				},
				performInitialMountWithErrorHandling: function(e, t, r, o, a) {
					var i, s = o.checkpoint();
					try {
						i = this.performInitialMount(e, t, r, o, a)
					} catch (l) {
						"production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onError(), o.rollback(s), this._instance.unstable_handleError(l), this._pendingStateQueue && (this._instance.state = this._processPendingState(this._instance.props, this._instance.context)), s = o.checkpoint(), this._renderedComponent.unmountComponent(!0), o.rollback(s), i = this.performInitialMount(e, t, r, o, a)
					}
					return i
				},
				performInitialMount: function(e, t, r, o, a) {
					var i = this._instance;
					i.componentWillMount && ("production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onBeginLifeCycleTimer(this._debugID, "componentWillMount"), i.componentWillMount(), "production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onEndLifeCycleTimer(this._debugID, "componentWillMount"), this._pendingStateQueue && (i.state = this._processPendingState(i.props, i.context))), void 0 === e && (e = this._renderValidatedComponent());
					var s = v.getType(e);
					this._renderedNodeType = s;
					var l = this._instantiateReactComponent(e, s !== v.EMPTY);
					this._renderedComponent = l;
					var u = 0;
					"production" !== n.env.NODE_ENV && (u = this._debugID);
					var d = y.mountComponent(l, o, t, r, this._processChildContext(a), u);
					return "production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onSetChildren(this._debugID, 0 !== l._debugID ? [l._debugID] : []), d
				},
				getHostNode: function() {
					return y.getHostNode(this._renderedComponent)
				},
				unmountComponent: function(e) {
					if (this._renderedComponent) {
						var t = this._instance;
						if (t.componentWillUnmount && !t._calledComponentWillUnmount) {
							if (t._calledComponentWillUnmount = !0, "production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onBeginLifeCycleTimer(this._debugID, "componentWillUnmount"), e) {
								var r = this.getName() + ".componentWillUnmount()";
								h.invokeGuardedCallback(r, t.componentWillUnmount.bind(t))
							} else t.componentWillUnmount();
							"production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onEndLifeCycleTimer(this._debugID, "componentWillUnmount")
						}
						this._renderedComponent && (y.unmountComponent(this._renderedComponent, e), this._renderedNodeType = null, this._renderedComponent = null, this._instance = null), this._pendingStateQueue = null, this._pendingReplaceState = !1, this._pendingForceUpdate = !1, this._pendingCallbacks = null, this._pendingElement = null, this._context = null, this._rootNodeID = 0, this._topLevelWrapper = null, _.remove(t)
					}
				},
				_maskContext: function(e) {
					var t = this._currentElement.type,
						n = t.contextTypes;
					if (!n) return M;
					var r = {};
					for (var o in n) r[o] = e[o];
					return r
				},
				_processContext: function(e) {
					var t = this._maskContext(e);
					if ("production" !== n.env.NODE_ENV) {
						var r = this._currentElement.type;
						r.contextTypes && this._checkContextTypes(r.contextTypes, t, g.context)
					}
					return t
				},
				_processChildContext: function(e) {
					var t = this._currentElement.type,
						r = this._instance;
					"production" !== n.env.NODE_ENV && f.debugTool.onBeginProcessingChildContext();
					var o = r.getChildContext && r.getChildContext();
					if ("production" !== n.env.NODE_ENV && f.debugTool.onEndProcessingChildContext(), o) {
						"object" != typeof t.childContextTypes ? "production" !== n.env.NODE_ENV ? k(!1, "%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", this.getName() || "ReactCompositeComponent") : u("107", this.getName() || "ReactCompositeComponent") : void 0, "production" !== n.env.NODE_ENV && this._checkContextTypes(t.childContextTypes, o, g.childContext);
						for (var a in o) a in t.childContextTypes ? void 0 : "production" !== n.env.NODE_ENV ? k(!1, '%s.getChildContext(): key "%s" is not defined in childContextTypes.', this.getName() || "ReactCompositeComponent", a) : u("108", this.getName() || "ReactCompositeComponent", a);
						return d({}, e, o)
					}
					return e
				},
				_checkContextTypes: function(e, t, n) {
					b(e, t, n, this.getName(), null, this._debugID)
				},
				receiveComponent: function(e, t, n) {
					var r = this._currentElement,
						o = this._context;
					this._pendingElement = null, this.updateComponent(t, r, e, o, n)
				},
				performUpdateIfNecessary: function(e) {
					null != this._pendingElement ? y.receiveComponent(this, this._pendingElement, e, this._context) : null !== this._pendingStateQueue || this._pendingForceUpdate ? this.updateComponent(e, this._currentElement, this._currentElement, this._context, this._context) : this._updateBatchNumber = null
				},
				updateComponent: function(e, t, r, o, a) {
					var i = this._instance;
					null == i ? "production" !== n.env.NODE_ENV ? k(!1, "Attempted to update component `%s` that has already been unmounted (or failed to mount).", this.getName() || "ReactCompositeComponent") : u("136", this.getName() || "ReactCompositeComponent") : void 0;
					var s, l = !1;
					this._context === a ? s = i.context : (s = this._processContext(a), l = !0);
					var d = t.props,
						c = r.props;
					t !== r && (l = !0), l && i.componentWillReceiveProps && ("production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onBeginLifeCycleTimer(this._debugID, "componentWillReceiveProps"), i.componentWillReceiveProps(c, s), "production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onEndLifeCycleTimer(this._debugID, "componentWillReceiveProps"));
					var p = this._processPendingState(c, s),
						m = !0;
					this._pendingForceUpdate || (i.shouldComponentUpdate ? ("production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onBeginLifeCycleTimer(this._debugID, "shouldComponentUpdate"), m = i.shouldComponentUpdate(c, p, s), "production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onEndLifeCycleTimer(this._debugID, "shouldComponentUpdate")) : this._compositeType === T.PureClass && (m = !w(d, c) || !w(i.state, p))), "production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? L(void 0 !== m, "%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", this.getName() || "ReactCompositeComponent") : void 0), this._updateBatchNumber = null, m ? (this._pendingForceUpdate = !1, this._performComponentUpdate(r, c, p, s, e, a)) : (this._currentElement = r, this._context = a, i.props = c, i.state = p, i.context = s)
				},
				_processPendingState: function(e, t) {
					var n = this._instance,
						r = this._pendingStateQueue,
						o = this._pendingReplaceState;
					if (this._pendingReplaceState = !1, this._pendingStateQueue = null, !r) return n.state;
					if (o && 1 === r.length) return r[0];
					for (var a = d({}, o ? r[0] : n.state), i = o ? 1 : 0; i < r.length; i++) {
						var s = r[i];
						d(a, "function" == typeof s ? s.call(n, a, e, t) : s)
					}
					return a
				},
				_performComponentUpdate: function(e, t, r, o, a, s) {
					var l, u, d, c = this._instance,
						p = Boolean(c.componentDidUpdate);
					p && (l = c.props, u = c.state, d = c.context), c.componentWillUpdate && ("production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onBeginLifeCycleTimer(this._debugID, "componentWillUpdate"), c.componentWillUpdate(t, r, o), "production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onEndLifeCycleTimer(this._debugID, "componentWillUpdate")), this._currentElement = e, this._context = s, c.props = t, c.state = r, c.context = o, this._updateRenderedComponent(a, s), p && ("production" !== n.env.NODE_ENV ? a.getReactMountReady().enqueue(i.bind(this, l, u, d), this) : a.getReactMountReady().enqueue(c.componentDidUpdate.bind(c, l, u, d), c))
				},
				_updateRenderedComponent: function(e, t) {
					var r = this._renderedComponent,
						o = r._currentElement,
						a = this._renderValidatedComponent();
					if (D(o, a)) y.receiveComponent(r, a, e, this._processChildContext(t));
					else {
						var i = y.getHostNode(r);
						y.unmountComponent(r, !1);
						var s = v.getType(a);
						this._renderedNodeType = s;
						var l = this._instantiateReactComponent(a, s !== v.EMPTY);
						this._renderedComponent = l;
						var u = 0;
						"production" !== n.env.NODE_ENV && (u = this._debugID);
						var d = y.mountComponent(l, e, this._hostParent, this._hostContainerInfo, this._processChildContext(t), u);
						"production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onSetChildren(this._debugID, 0 !== l._debugID ? [l._debugID] : []), this._replaceNodeWithMarkup(i, d, r)
					}
				},
				_replaceNodeWithMarkup: function(e, t, n) {
					c.replaceNodeWithMarkup(e, t, n)
				},
				_renderValidatedComponentWithoutOwnerOrContext: function() {
					var e = this._instance;
					"production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onBeginLifeCycleTimer(this._debugID, "render");
					var t = e.render();
					return "production" !== n.env.NODE_ENV && 0 !== this._debugID && f.debugTool.onEndLifeCycleTimer(this._debugID, "render"), "production" !== n.env.NODE_ENV && void 0 === t && e.render._isMockFunction && (t = null), t
				},
				_renderValidatedComponent: function() {
					var e;
					if ("production" !== n.env.NODE_ENV || this._compositeType !== T.StatelessFunctional) {
						p.current = this;
						try {
							e = this._renderValidatedComponentWithoutOwnerOrContext()
						} finally {
							p.current = null
						}
					} else e = this._renderValidatedComponentWithoutOwnerOrContext();
					return null === e || e === !1 || m.isValidElement(e) ? void 0 : "production" !== n.env.NODE_ENV ? k(!1, "%s.render(): A valid React element (or null) must be returned. You may have returned undefined, an array or some other invalid object.", this.getName() || "ReactCompositeComponent") : u("109", this.getName() || "ReactCompositeComponent"), e
				},
				attachRef: function(e, t) {
					var r = this.getPublicInstance();
					null == r ? "production" !== n.env.NODE_ENV ? k(!1, "Stateless function components cannot have refs.") : u("110") : void 0;
					var o = t.getPublicInstance();
					if ("production" !== n.env.NODE_ENV) {
						var a = t && t.getName ? t.getName() : "a component";
						"production" !== n.env.NODE_ENV ? L(null != o, 'Stateless function components cannot be given refs (See ref "%s" in %s created by %s). Attempts to access this ref will fail.', e, a, this.getName()) : void 0
					}
					var i = r.refs === M ? r.refs = {} : r.refs;
					i[e] = o
				},
				detachRef: function(e) {
					var t = this.getPublicInstance().refs;
					delete t[e]
				},
				getName: function() {
					var e = this._currentElement.type,
						t = this._instance && this._instance.constructor;
					return e.displayName || t && t.displayName || e.name || t && t.name || null
				},
				getPublicInstance: function() {
					var e = this._instance;
					return this._compositeType === T.StatelessFunctional ? null : e
				},
				_instantiateReactComponent: null
			},
			S = {
				Mixin: E
			};
		e.exports = S
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(7),
			o = t(9),
			a = t(8),
			i = {
				HOST: 0,
				COMPOSITE: 1,
				EMPTY: 2,
				getType: function(e) {
					return null === e || e === !1 ? i.EMPTY : o.isValidElement(e) ? "function" == typeof e.type ? i.COMPOSITE : i.HOST : void("production" !== n.env.NODE_ENV ? a(!1, "Unexpected node: %s", e) : r("26", e))
				}
			};
		e.exports = i
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";

	function t(e, t) {
		return e === t ? 0 !== e || 1 / e === 1 / t : e !== e && t !== t
	}

	function n(e, n) {
		if (t(e, n)) return !0;
		if ("object" != typeof e || null === e || "object" != typeof n || null === n) return !1;
		var o = Object.keys(e),
			a = Object.keys(n);
		if (o.length !== a.length) return !1;
		for (var i = 0; i < o.length; i++)
			if (!r.call(n, o[i]) || !t(e[o[i]], n[o[i]])) return !1;
		return !0
	}
	var r = Object.prototype.hasOwnProperty;
	e.exports = n
}, function(e, exports) {
	"use strict";

	function t(e, t) {
		var n = null === e || e === !1,
			r = null === t || t === !1;
		if (n || r) return n === r;
		var o = typeof e,
			a = typeof t;
		return "string" === o || "number" === o ? "string" === a || "number" === a : "object" === a && e.type === t.type && e.key === t.key
	}
	e.exports = t
}, function(e, exports) {
	"use strict";
	var t, n = {
			injectEmptyComponentFactory: function(e) {
				t = e
			}
		},
		r = {
			create: function(e) {
				return t(e)
			}
		};
	r.injection = n, e.exports = r
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			return u ? void 0 : "production" !== n.env.NODE_ENV ? l(!1, "There is no registered component for the tag %s", e.type) : i("111", e.type), new u(e)
		}

		function o(e) {
			return new c(e)
		}

		function a(e) {
			return e instanceof c
		}
		var i = t(7),
			s = t(4),
			l = t(8),
			u = null,
			d = {},
			c = null,
			p = {
				injectGenericComponentClass: function(e) {
					u = e
				},
				injectTextComponentClass: function(e) {
					c = e
				},
				injectComponentClasses: function(e) {
					s(d, e)
				}
			},
			m = {
				createInternalComponent: r,
				createInstanceForText: o,
				isTextComponent: a,
				injection: p
			};
		e.exports = m
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, r, o, s) {
			if (e && "object" == typeof e) {
				var u = e,
					d = void 0 === u[o];
				"production" !== n.env.NODE_ENV && (a || (a = t(28)), d || ("production" !== n.env.NODE_ENV ? l(!1, "flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.%s", i.unescape(o), a.getStackAddendumByID(s)) : void 0)), d && null != r && (u[o] = r)
			}
		}

		function o(e, t) {
			if (null == e) return e;
			var o = {};
			return "production" !== n.env.NODE_ENV ? s(e, function(e, n, o) {
				return r(e, n, o, t)
			}, o) : s(e, r, o), o
		}
		var a, i = t(16),
			s = t(14),
			l = t(11);
		"undefined" != typeof n && n.env && "test" === n.env.NODE_ENV && (a = t(28)), e.exports = o
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			this.reinitializeTransaction(), this.renderToStaticMarkup = e, this.useCreateElement = !1, this.updateQueue = new l(this)
		}
		var o = t(4),
			a = t(6),
			i = t(69),
			s = t(62),
			l = t(130),
			u = [];
		"production" !== n.env.NODE_ENV && u.push({
			initialize: s.debugTool.onBeginFlush,
			close: s.debugTool.onEndFlush
		});
		var d = {
				enqueue: function() {}
			},
			c = {
				getTransactionWrappers: function() {
					return u
				},
				getReactMountReady: function() {
					return d
				},
				getUpdateQueue: function() {
					return this.updateQueue
				},
				destructor: function() {},
				checkpoint: function() {},
				rollback: function() {}
			};
		o(r.prototype, i.Mixin, c), a.addPoolingTo(r), e.exports = r
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t) {
			if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
		}

		function o(e, t) {
			if ("production" !== n.env.NODE_ENV) {
				var r = e.constructor;
				"production" !== n.env.NODE_ENV ? i(!1, "%s(...): Can only update a mounting component. This usually means you called %s() outside componentWillMount() on the server. This is a no-op. Please check the code for the %s component.", t, t, r && (r.displayName || r.name) || "ReactClass") : void 0
			}
		}
		var a = t(131),
			i = (t(69), t(11)),
			s = function() {
				function e(t) {
					r(this, e), this.transaction = t
				}
				return e.prototype.isMounted = function(e) {
					return !1
				}, e.prototype.enqueueCallback = function(e, t, n) {
					this.transaction.isInTransaction() && a.enqueueCallback(e, t, n)
				}, e.prototype.enqueueForceUpdate = function(e) {
					this.transaction.isInTransaction() ? a.enqueueForceUpdate(e) : o(e, "forceUpdate")
				}, e.prototype.enqueueReplaceState = function(e, t) {
					this.transaction.isInTransaction() ? a.enqueueReplaceState(e, t) : o(e, "replaceState")
				}, e.prototype.enqueueSetState = function(e, t) {
					this.transaction.isInTransaction() ? a.enqueueSetState(e, t) : o(e, "setState")
				}, e
			}();
		e.exports = s
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			d.enqueueUpdate(e)
		}

		function o(e) {
			var t = typeof e;
			if ("object" !== t) return t;
			var n = e.constructor && e.constructor.name || t,
				r = Object.keys(e);
			return r.length > 0 && r.length < 20 ? n + " (keys: " + r.join(", ") + ")" : n
		}

		function a(e, t) {
			var r = l.get(e);
			if (!r) {
				if ("production" !== n.env.NODE_ENV) {
					var o = e.constructor;
					"production" !== n.env.NODE_ENV ? p(!t, "%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op. Please check the code for the %s component.", t, t, o && (o.displayName || o.name) || "ReactClass") : void 0
				}
				return null
			}
			return "production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? p(null == s.current, "%s(...): Cannot update during an existing state transition (such as within `render` or another component's constructor). Render methods should be a pure function of props and state; constructor side-effects are an anti-pattern, but can be moved to `componentWillMount`.", t) : void 0), r
		}
		var i = t(7),
			s = t(10),
			l = t(119),
			u = t(62),
			d = t(56),
			c = t(8),
			p = t(11),
			m = {
				isMounted: function(e) {
					if ("production" !== n.env.NODE_ENV) {
						var t = s.current;
						null !== t && ("production" !== n.env.NODE_ENV ? p(t._warnedAboutRefsInRender, "%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", t.getName() || "A component") : void 0, t._warnedAboutRefsInRender = !0)
					}
					var r = l.get(e);
					return r ? !!r._renderedComponent : !1
				},
				enqueueCallback: function(e, t, n) {
					m.validateCallback(t, n);
					var o = a(e);
					return o ? (o._pendingCallbacks ? o._pendingCallbacks.push(t) : o._pendingCallbacks = [t], void r(o)) : null
				},
				enqueueCallbackInternal: function(e, t) {
					e._pendingCallbacks ? e._pendingCallbacks.push(t) : e._pendingCallbacks = [t], r(e)
				},
				enqueueForceUpdate: function(e) {
					var t = a(e, "forceUpdate");
					t && (t._pendingForceUpdate = !0, r(t))
				},
				enqueueReplaceState: function(e, t) {
					var n = a(e, "replaceState");
					n && (n._pendingStateQueue = [t], n._pendingReplaceState = !0, r(n))
				},
				enqueueSetState: function(e, t) {
					"production" !== n.env.NODE_ENV && (u.debugTool.onSetState(), "production" !== n.env.NODE_ENV ? p(null != t, "setState(...): You passed an undefined or null state object; instead, use forceUpdate().") : void 0);
					var o = a(e, "setState");
					if (o) {
						var i = o._pendingStateQueue || (o._pendingStateQueue = []);
						i.push(t), r(o)
					}
				},
				enqueueElementInternal: function(e, t, n) {
					e._pendingElement = t, e._context = n, r(e)
				},
				validateCallback: function(e, t) {
					e && "function" != typeof e ? "production" !== n.env.NODE_ENV ? c(!1, "%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, o(e)) : i("122", t, o(e)) : void 0
				}
			};
		e.exports = m
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(4),
			o = t(12),
			a = t(11),
			i = o;
		if ("production" !== n.env.NODE_ENV) {
			var s = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"],
				l = ["applet", "caption", "html", "table", "td", "th", "marquee", "object", "template", "foreignObject", "desc", "title"],
				u = l.concat(["button"]),
				d = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"],
				c = {
					current: null,
					formTag: null,
					aTagInScope: null,
					buttonTagInScope: null,
					nobrTagInScope: null,
					pTagInButtonScope: null,
					listItemTagAutoclosing: null,
					dlItemTagAutoclosing: null
				},
				p = function(e, t, n) {
					var o = r({}, e || c),
						a = {
							tag: t,
							instance: n
						};
					return -1 !== l.indexOf(t) && (o.aTagInScope = null, o.buttonTagInScope = null, o.nobrTagInScope = null), -1 !== u.indexOf(t) && (o.pTagInButtonScope = null), -1 !== s.indexOf(t) && "address" !== t && "div" !== t && "p" !== t && (o.listItemTagAutoclosing = null, o.dlItemTagAutoclosing = null), o.current = a, "form" === t && (o.formTag = a), "a" === t && (o.aTagInScope = a), "button" === t && (o.buttonTagInScope = a), "nobr" === t && (o.nobrTagInScope = a), "p" === t && (o.pTagInButtonScope = a), "li" === t && (o.listItemTagAutoclosing = a), "dd" !== t && "dt" !== t || (o.dlItemTagAutoclosing = a), o
				},
				m = function(e, t) {
					switch (t) {
						case "select":
							return "option" === e || "optgroup" === e || "#text" === e;
						case "optgroup":
							return "option" === e || "#text" === e;
						case "option":
							return "#text" === e;
						case "tr":
							return "th" === e || "td" === e || "style" === e || "script" === e || "template" === e;
						case "tbody":
						case "thead":
						case "tfoot":
							return "tr" === e || "style" === e || "script" === e || "template" === e;
						case "colgroup":
							return "col" === e || "template" === e;
						case "table":
							return "caption" === e || "colgroup" === e || "tbody" === e || "tfoot" === e || "thead" === e || "style" === e || "script" === e || "template" === e;
						case "head":
							return "base" === e || "basefont" === e || "bgsound" === e || "link" === e || "meta" === e || "title" === e || "noscript" === e || "noframes" === e || "style" === e || "script" === e || "template" === e;
						case "html":
							return "head" === e || "body" === e;
						case "#document":
							return "html" === e
					}
					switch (e) {
						case "h1":
						case "h2":
						case "h3":
						case "h4":
						case "h5":
						case "h6":
							return "h1" !== t && "h2" !== t && "h3" !== t && "h4" !== t && "h5" !== t && "h6" !== t;
						case "rp":
						case "rt":
							return -1 === d.indexOf(t);
						case "body":
						case "caption":
						case "col":
						case "colgroup":
						case "frame":
						case "head":
						case "html":
						case "tbody":
						case "td":
						case "tfoot":
						case "th":
						case "thead":
						case "tr":
							return null == t
					}
					return !0
				},
				h = function(e, t) {
					switch (e) {
						case "address":
						case "article":
						case "aside":
						case "blockquote":
						case "center":
						case "details":
						case "dialog":
						case "dir":
						case "div":
						case "dl":
						case "fieldset":
						case "figcaption":
						case "figure":
						case "footer":
						case "header":
						case "hgroup":
						case "main":
						case "menu":
						case "nav":
						case "ol":
						case "p":
						case "section":
						case "summary":
						case "ul":
						case "pre":
						case "listing":
						case "table":
						case "hr":
						case "xmp":
						case "h1":
						case "h2":
						case "h3":
						case "h4":
						case "h5":
						case "h6":
							return t.pTagInButtonScope;
						case "form":
							return t.formTag || t.pTagInButtonScope;
						case "li":
							return t.listItemTagAutoclosing;
						case "dd":
						case "dt":
							return t.dlItemTagAutoclosing;
						case "button":
							return t.buttonTagInScope;
						case "a":
							return t.aTagInScope;
						case "nobr":
							return t.nobrTagInScope
					}
					return null
				},
				_ = function(e) {
					if (!e) return [];
					var t = [];
					do t.push(e); while (e = e._currentElement._owner);
					return t.reverse(), t
				},
				f = {};
			i = function(e, t, r) {
				r = r || c;
				var o = r.current,
					i = o && o.tag,
					s = m(e, i) ? null : o,
					l = s ? null : h(e, r),
					u = s || l;
				if (u) {
					var d, p = u.tag,
						v = u.instance,
						g = t && t._currentElement._owner,
						y = v && v._currentElement._owner,
						b = _(g),
						M = _(y),
						k = Math.min(b.length, M.length),
						w = -1;
					for (d = 0; k > d && b[d] === M[d]; d++) w = d;
					var D = "(unknown)",
						L = b.slice(w + 1).map(function(e) {
							return e.getName() || D
						}),
						T = M.slice(w + 1).map(function(e) {
							return e.getName() || D
						}),
						Y = [].concat(-1 !== w ? b[w].getName() || D : [], T, p, l ? ["..."] : [], L, e).join(" > "),
						E = !!s + "|" + e + "|" + p + "|" + Y;
					if (f[E]) return;
					f[E] = !0;
					var S = e;
					if ("#text" !== e && (S = "<" + e + ">"), s) {
						var x = "";
						"table" === p && "tr" === e && (x += " Add a <tbody> to your code to match the DOM tree generated by the browser."), "production" !== n.env.NODE_ENV ? a(!1, "validateDOMNesting(...): %s cannot appear as a child of <%s>. See %s.%s", S, p, Y, x) : void 0
					} else "production" !== n.env.NODE_ENV ? a(!1, "validateDOMNesting(...): %s cannot appear as a descendant of <%s>. See %s.", S, p, Y) : void 0
				}
			}, i.updatedAncestorInfo = p, i.isTagValidInContext = function(e, t) {
				t = t || c;
				var n = t.current,
					r = n && n.tag;
				return m(e, r) && !h(e, t)
			}
		}
		e.exports = i
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";
	var n = t(4),
		r = t(82),
		o = t(36),
		a = function(e) {
			this._currentElement = null, this._hostNode = null, this._hostParent = null, this._hostContainerInfo = null, this._domID = 0
		};
	n(a.prototype, {
		mountComponent: function(e, t, n, a) {
			var i = n._idCounter++;
			this._domID = i, this._hostParent = t, this._hostContainerInfo = n;
			var s = " react-empty: " + this._domID + " ";
			if (e.useCreateElement) {
				var l = n._ownerDocument,
					u = l.createComment(s);
				return o.precacheNode(this, u), r(u)
			}
			return e.renderToStaticMarkup ? "" : "<!--" + s + "-->"
		},
		receiveComponent: function() {},
		getHostNode: function() {
			return o.getNodeFromInstance(this)
		},
		unmountComponent: function() {
			o.uncacheNode(this)
		}
	}), e.exports = a
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t) {
			"_hostNode" in e ? void 0 : "production" !== n.env.NODE_ENV ? u(!1, "getNodeFromInstance: Invalid argument.") : l("33"), "_hostNode" in t ? void 0 : "production" !== n.env.NODE_ENV ? u(!1, "getNodeFromInstance: Invalid argument.") : l("33");
			for (var r = 0, o = e; o; o = o._hostParent) r++;
			for (var a = 0, i = t; i; i = i._hostParent) a++;
			for (; r - a > 0;) e = e._hostParent, r--;
			for (; a - r > 0;) t = t._hostParent, a--;
			for (var s = r; s--;) {
				if (e === t) return e;
				e = e._hostParent, t = t._hostParent
			}
			return null
		}

		function o(e, t) {
			"_hostNode" in e ? void 0 : "production" !== n.env.NODE_ENV ? u(!1, "isAncestor: Invalid argument.") : l("35"), "_hostNode" in t ? void 0 : "production" !== n.env.NODE_ENV ? u(!1, "isAncestor: Invalid argument.") : l("35");
			for (; t;) {
				if (t === e) return !0;
				t = t._hostParent
			}
			return !1
		}

		function a(e) {
			return "_hostNode" in e ? void 0 : "production" !== n.env.NODE_ENV ? u(!1, "getParentInstance: Invalid argument.") : l("36"), e._hostParent
		}

		function i(e, t, n) {
			for (var r = []; e;) r.push(e), e = e._hostParent;
			var o;
			for (o = r.length; o-- > 0;) t(r[o], !1, n);
			for (o = 0; o < r.length; o++) t(r[o], !0, n)
		}

		function s(e, t, n, o, a) {
			for (var i = e && t ? r(e, t) : null, s = []; e && e !== i;) s.push(e), e = e._hostParent;
			for (var l = []; t && t !== i;) l.push(t), t = t._hostParent;
			var u;
			for (u = 0; u < s.length; u++) n(s[u], !0, o);
			for (u = l.length; u-- > 0;) n(l[u], !1, a)
		}
		var l = t(7),
			u = t(8);
		e.exports = {
			isAncestor: o,
			getLowestCommonAncestor: r,
			getParentInstance: a,
			traverseTwoPhase: i,
			traverseEnterLeave: s
		}
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(7),
			o = t(4),
			a = t(81),
			i = t(82),
			s = t(36),
			l = t(87),
			u = t(8),
			d = t(132),
			c = function(e) {
				this._currentElement = e, this._stringText = "" + e, this._hostNode = null, this._hostParent = null, this._domID = 0, this._mountIndex = 0, this._closingComment = null, this._commentNodes = null
			};
		o(c.prototype, {
			mountComponent: function(e, t, r, o) {
				if ("production" !== n.env.NODE_ENV) {
					var a;
					null != t ? a = t._ancestorInfo : null != r && (a = r._ancestorInfo), a && d("#text", this, a)
				}
				var u = r._idCounter++,
					c = " react-text: " + u + " ",
					p = " /react-text ";
				if (this._domID = u, this._hostParent = t, e.useCreateElement) {
					var m = r._ownerDocument,
						h = m.createComment(c),
						_ = m.createComment(p),
						f = i(m.createDocumentFragment());
					return i.queueChild(f, i(h)), this._stringText && i.queueChild(f, i(m.createTextNode(this._stringText))), i.queueChild(f, i(_)), s.precacheNode(this, h), this._closingComment = _, f
				}
				var v = l(this._stringText);
				return e.renderToStaticMarkup ? v : "<!--" + c + "-->" + v + "<!--" + p + "-->"
			},
			receiveComponent: function(e, t) {
				if (e !== this._currentElement) {
					this._currentElement = e;
					var n = "" + e;
					if (n !== this._stringText) {
						this._stringText = n;
						var r = this.getHostNode();
						a.replaceDelimitedText(r[0], r[1], n)
					}
				}
			},
			getHostNode: function() {
				var e = this._commentNodes;
				if (e) return e;
				if (!this._closingComment)
					for (var t = s.getNodeFromInstance(this), o = t.nextSibling;;) {
						if (null == o ? "production" !== n.env.NODE_ENV ? u(!1, "Missing closing comment for text component %s", this._domID) : r("67", this._domID) : void 0, 8 === o.nodeType && " /react-text " === o.nodeValue) {
							this._closingComment = o;
							break
						}
						o = o.nextSibling
					}
				return e = [this._hostNode, this._closingComment], this._commentNodes = e, e
			},
			unmountComponent: function() {
				this._closingComment = null, this._commentNodes = null, s.uncacheNode(this)
			}
		}), e.exports = c
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";

	function n() {
		this.reinitializeTransaction()
	}
	var r = t(4),
		o = t(56),
		a = t(69),
		i = t(12),
		s = {
			initialize: i,
			close: function() {
				c.isBatchingUpdates = !1
			}
		},
		l = {
			initialize: i,
			close: o.flushBatchedUpdates.bind(o)
		},
		u = [l, s];
	r(n.prototype, a.Mixin, {
		getTransactionWrappers: function() {
			return u
		}
	});
	var d = new n,
		c = {
			isBatchingUpdates: !1,
			batchedUpdates: function(e, t, n, r, o, a) {
				var i = c.isBatchingUpdates;
				c.isBatchingUpdates = !0, i ? e(t, n, r, o, a) : d.perform(e, null, t, n, r, o, a)
			}
		};
	e.exports = c
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		for (; e._hostParent;) e = e._hostParent;
		var t = d.getNodeFromInstance(e),
			n = t.parentNode;
		return d.getClosestInstanceFromNode(n)
	}

	function r(e, t) {
		this.topLevelType = e, this.nativeEvent = t, this.ancestors = []
	}

	function o(e) {
		var t = p(e.nativeEvent),
			r = d.getClosestInstanceFromNode(t),
			o = r;
		do e.ancestors.push(o), o = o && n(o); while (o);
		for (var a = 0; a < e.ancestors.length; a++) r = e.ancestors[a], h._handleTopLevel(e.topLevelType, r, e.nativeEvent, p(e.nativeEvent))
	}

	function a(e) {
		var t = m(window);
		e(t)
	}
	var i = t(4),
		s = t(138),
		l = t(49),
		u = t(6),
		d = t(36),
		c = t(56),
		p = t(70),
		m = t(139);
	i(r.prototype, {
		destructor: function() {
			this.topLevelType = null, this.nativeEvent = null, this.ancestors.length = 0
		}
	}), u.addPoolingTo(r, u.twoArgumentPooler);
	var h = {
		_enabled: !0,
		_handleTopLevel: null,
		WINDOW_HANDLE: l.canUseDOM ? window : null,
		setHandleTopLevel: function(e) {
			h._handleTopLevel = e
		},
		setEnabled: function(e) {
			h._enabled = !!e
		},
		isEnabled: function() {
			return h._enabled
		},
		trapBubbledEvent: function(e, t, n) {
			var r = n;
			return r ? s.listen(r, t, h.dispatchEvent.bind(null, e)) : null
		},
		trapCapturedEvent: function(e, t, n) {
			var r = n;
			return r ? s.capture(r, t, h.dispatchEvent.bind(null, e)) : null
		},
		monitorScrollValue: function(e) {
			var t = a.bind(null, e);
			s.listen(window, "scroll", t)
		},
		dispatchEvent: function(e, t) {
			if (h._enabled) {
				var n = r.getPooled(e, t);
				try {
					c.batchedUpdates(o, n)
				} finally {
					r.release(n)
				}
			}
		}
	};
	e.exports = h
}, function(e, exports, t) {
	(function(n) {
		"use strict";
		var r = t(12),
			o = {
				listen: function(e, t, n) {
					return e.addEventListener ? (e.addEventListener(t, n, !1), {
						remove: function() {
							e.removeEventListener(t, n, !1)
						}
					}) : e.attachEvent ? (e.attachEvent("on" + t, n), {
						remove: function() {
							e.detachEvent("on" + t, n)
						}
					}) : void 0
				},
				capture: function(e, t, o) {
					return e.addEventListener ? (e.addEventListener(t, o, !0), {
						remove: function() {
							e.removeEventListener(t, o, !0)
						}
					}) : ("production" !== n.env.NODE_ENV && console.error("Attempted to listen to events during the capture phase on a browser that does not support the capture phase. Your application will not receive some events."), {
						remove: r
					})
				},
				registerDefault: function() {}
			};
		e.exports = o
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";

	function t(e) {
		return e === window ? {
			x: window.pageXOffset || document.documentElement.scrollLeft,
			y: window.pageYOffset || document.documentElement.scrollTop
		} : {
			x: e.scrollLeft,
			y: e.scrollTop
		}
	}
	e.exports = t
}, function(e, exports, t) {
	"use strict";
	var n = t(37),
		r = t(43),
		o = t(45),
		a = t(118),
		i = t(21),
		s = t(126),
		l = t(107),
		u = t(127),
		d = t(56),
		c = {
			Component: a.injection,
			Class: i.injection,
			DOMProperty: n.injection,
			EmptyComponent: s.injection,
			EventPluginHub: r.injection,
			EventPluginUtils: o.injection,
			EventEmitter: l.injection,
			HostComponent: u.injection,
			Updates: d.injection
		};
	e.exports = c
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			this.reinitializeTransaction(), this.renderToStaticMarkup = !1, this.reactMountReady = a.getPooled(null), this.useCreateElement = e
		}
		var o = t(4),
			a = t(57),
			i = t(6),
			s = t(107),
			l = t(142),
			u = t(62),
			d = t(69),
			c = t(131),
			p = {
				initialize: l.getSelectionInformation,
				close: l.restoreSelection
			},
			m = {
				initialize: function() {
					var e = s.isEnabled();
					return s.setEnabled(!1), e
				},
				close: function(e) {
					s.setEnabled(e)
				}
			},
			h = {
				initialize: function() {
					this.reactMountReady.reset()
				},
				close: function() {
					this.reactMountReady.notifyAll()
				}
			},
			_ = [p, m, h];
		"production" !== n.env.NODE_ENV && _.push({
			initialize: u.debugTool.onBeginFlush,
			close: u.debugTool.onEndFlush
		});
		var f = {
			getTransactionWrappers: function() {
				return _
			},
			getReactMountReady: function() {
				return this.reactMountReady
			},
			getUpdateQueue: function() {
				return c
			},
			checkpoint: function() {
				return this.reactMountReady.checkpoint()
			},
			rollback: function(e) {
				this.reactMountReady.rollback(e)
			},
			destructor: function() {
				a.release(this.reactMountReady), this.reactMountReady = null
			}
		};
		o(r.prototype, d.Mixin, f), i.addPoolingTo(r), e.exports = r
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		return o(document.documentElement, e)
	}
	var r = t(143),
		o = t(145),
		a = t(96),
		i = t(148),
		s = {
			hasSelectionCapabilities: function(e) {
				var t = e && e.nodeName && e.nodeName.toLowerCase();
				return t && ("input" === t && "text" === e.type || "textarea" === t || "true" === e.contentEditable)
			},
			getSelectionInformation: function() {
				var e = i();
				return {
					focusedElem: e,
					selectionRange: s.hasSelectionCapabilities(e) ? s.getSelection(e) : null
				}
			},
			restoreSelection: function(e) {
				var t = i(),
					r = e.focusedElem,
					o = e.selectionRange;
				t !== r && n(r) && (s.hasSelectionCapabilities(r) && s.setSelection(r, o), a(r))
			},
			getSelection: function(e) {
				var t;
				if ("selectionStart" in e) t = {
					start: e.selectionStart,
					end: e.selectionEnd
				};
				else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
					var n = document.selection.createRange();
					n.parentElement() === e && (t = {
						start: -n.moveStart("character", -e.value.length),
						end: -n.moveEnd("character", -e.value.length)
					})
				} else t = r.getOffsets(e);
				return t || {
					start: 0,
					end: 0
				}
			},
			setSelection: function(e, t) {
				var n = t.start,
					o = t.end;
				if (void 0 === o && (o = n), "selectionStart" in e) e.selectionStart = n, e.selectionEnd = Math.min(o, e.value.length);
				else if (document.selection && e.nodeName && "input" === e.nodeName.toLowerCase()) {
					var a = e.createTextRange();
					a.collapse(!0), a.moveStart("character", n), a.moveEnd("character", o - n), a.select()
				} else r.setOffsets(e, t)
			}
		};
	e.exports = s
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n, r) {
		return e === n && t === r
	}

	function r(e) {
		var t = document.selection,
			n = t.createRange(),
			r = n.text.length,
			o = n.duplicate();
		o.moveToElementText(e), o.setEndPoint("EndToStart", n);
		var a = o.text.length,
			i = a + r;
		return {
			start: a,
			end: i
		}
	}

	function o(e) {
		var t = window.getSelection && window.getSelection();
		if (!t || 0 === t.rangeCount) return null;
		var r = t.anchorNode,
			o = t.anchorOffset,
			a = t.focusNode,
			i = t.focusOffset,
			s = t.getRangeAt(0);
		try {
			s.startContainer.nodeType, s.endContainer.nodeType
		} catch (l) {
			return null
		}
		var u = n(t.anchorNode, t.anchorOffset, t.focusNode, t.focusOffset),
			d = u ? 0 : s.toString().length,
			c = s.cloneRange();
		c.selectNodeContents(e), c.setEnd(s.startContainer, s.startOffset);
		var p = n(c.startContainer, c.startOffset, c.endContainer, c.endOffset),
			m = p ? 0 : c.toString().length,
			h = m + d,
			_ = document.createRange();
		_.setStart(r, o), _.setEnd(a, i);
		var f = _.collapsed;
		return {
			start: f ? h : m,
			end: f ? m : h
		}
	}

	function a(e, t) {
		var n, r, o = document.selection.createRange().duplicate();
		void 0 === t.end ? (n = t.start, r = n) : t.start > t.end ? (n = t.end, r = t.start) : (n = t.start, r = t.end), o.moveToElementText(e), o.moveStart("character", n), o.setEndPoint("EndToStart", o), o.moveEnd("character", r - n), o.select()
	}

	function i(e, t) {
		if (window.getSelection) {
			var n = window.getSelection(),
				r = e[u()].length,
				o = Math.min(t.start, r),
				a = void 0 === t.end ? o : Math.min(t.end, r);
			if (!n.extend && o > a) {
				var i = a;
				a = o, o = i
			}
			var s = l(e, o),
				d = l(e, a);
			if (s && d) {
				var c = document.createRange();
				c.setStart(s.node, s.offset), n.removeAllRanges(), o > a ? (n.addRange(c), n.extend(d.node, d.offset)) : (c.setEnd(d.node, d.offset), n.addRange(c))
			}
		}
	}
	var s = t(49),
		l = t(144),
		u = t(51),
		d = s.canUseDOM && "selection" in document && !("getSelection" in window),
		c = {
			getOffsets: d ? r : o,
			setOffsets: d ? a : i
		};
	e.exports = c
}, function(e, exports) {
	"use strict";

	function t(e) {
		for (; e && e.firstChild;) e = e.firstChild;
		return e
	}

	function n(e) {
		for (; e;) {
			if (e.nextSibling) return e.nextSibling;
			e = e.parentNode
		}
	}

	function r(e, r) {
		for (var o = t(e), a = 0, i = 0; o;) {
			if (3 === o.nodeType) {
				if (i = a + o.textContent.length, r >= a && i >= r) return {
					node: o,
					offset: r - a
				};
				a = i
			}
			o = t(n(o))
		}
	}
	e.exports = r
}, function(e, exports, t) {
	"use strict";

	function n(e, t) {
		return e && t ? e === t ? !0 : r(e) ? !1 : r(t) ? n(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(16 & e.compareDocumentPosition(t)) : !1 : !1
	}
	var r = t(146);
	e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		return r(e) && 3 == e.nodeType
	}
	var r = t(147);
	e.exports = n
}, function(e, exports) {
	"use strict";

	function t(e) {
		return !(!e || !("function" == typeof Node ? e instanceof Node : "object" == typeof e && "number" == typeof e.nodeType && "string" == typeof e.nodeName))
	}
	e.exports = t
}, function(e, exports) {
	"use strict";

	function t() {
		if ("undefined" == typeof document) return null;
		try {
			return document.activeElement || document.body
		} catch (e) {
			return document.body
		}
	}
	e.exports = t
}, function(e, exports) {
	"use strict";
	var t = {
			xlink: "http://www.w3.org/1999/xlink",
			xml: "http://www.w3.org/XML/1998/namespace"
		},
		n = {
			accentHeight: "accent-height",
			accumulate: 0,
			additive: 0,
			alignmentBaseline: "alignment-baseline",
			allowReorder: "allowReorder",
			alphabetic: 0,
			amplitude: 0,
			arabicForm: "arabic-form",
			ascent: 0,
			attributeName: "attributeName",
			attributeType: "attributeType",
			autoReverse: "autoReverse",
			azimuth: 0,
			baseFrequency: "baseFrequency",
			baseProfile: "baseProfile",
			baselineShift: "baseline-shift",
			bbox: 0,
			begin: 0,
			bias: 0,
			by: 0,
			calcMode: "calcMode",
			capHeight: "cap-height",
			clip: 0,
			clipPath: "clip-path",
			clipRule: "clip-rule",
			clipPathUnits: "clipPathUnits",
			colorInterpolation: "color-interpolation",
			colorInterpolationFilters: "color-interpolation-filters",
			colorProfile: "color-profile",
			colorRendering: "color-rendering",
			contentScriptType: "contentScriptType",
			contentStyleType: "contentStyleType",
			cursor: 0,
			cx: 0,
			cy: 0,
			d: 0,
			decelerate: 0,
			descent: 0,
			diffuseConstant: "diffuseConstant",
			direction: 0,
			display: 0,
			divisor: 0,
			dominantBaseline: "dominant-baseline",
			dur: 0,
			dx: 0,
			dy: 0,
			edgeMode: "edgeMode",
			elevation: 0,
			enableBackground: "enable-background",
			end: 0,
			exponent: 0,
			externalResourcesRequired: "externalResourcesRequired",
			fill: 0,
			fillOpacity: "fill-opacity",
			fillRule: "fill-rule",
			filter: 0,
			filterRes: "filterRes",
			filterUnits: "filterUnits",
			floodColor: "flood-color",
			floodOpacity: "flood-opacity",
			focusable: 0,
			fontFamily: "font-family",
			fontSize: "font-size",
			fontSizeAdjust: "font-size-adjust",
			fontStretch: "font-stretch",
			fontStyle: "font-style",
			fontVariant: "font-variant",
			fontWeight: "font-weight",
			format: 0,
			from: 0,
			fx: 0,
			fy: 0,
			g1: 0,
			g2: 0,
			glyphName: "glyph-name",
			glyphOrientationHorizontal: "glyph-orientation-horizontal",
			glyphOrientationVertical: "glyph-orientation-vertical",
			glyphRef: "glyphRef",
			gradientTransform: "gradientTransform",
			gradientUnits: "gradientUnits",
			hanging: 0,
			horizAdvX: "horiz-adv-x",
			horizOriginX: "horiz-origin-x",
			ideographic: 0,
			imageRendering: "image-rendering",
			"in": 0,
			in2: 0,
			intercept: 0,
			k: 0,
			k1: 0,
			k2: 0,
			k3: 0,
			k4: 0,
			kernelMatrix: "kernelMatrix",
			kernelUnitLength: "kernelUnitLength",
			kerning: 0,
			keyPoints: "keyPoints",
			keySplines: "keySplines",
			keyTimes: "keyTimes",
			lengthAdjust: "lengthAdjust",
			letterSpacing: "letter-spacing",
			lightingColor: "lighting-color",
			limitingConeAngle: "limitingConeAngle",
			local: 0,
			markerEnd: "marker-end",
			markerMid: "marker-mid",
			markerStart: "marker-start",
			markerHeight: "markerHeight",
			markerUnits: "markerUnits",
			markerWidth: "markerWidth",
			mask: 0,
			maskContentUnits: "maskContentUnits",
			maskUnits: "maskUnits",
			mathematical: 0,
			mode: 0,
			numOctaves: "numOctaves",
			offset: 0,
			opacity: 0,
			operator: 0,
			order: 0,
			orient: 0,
			orientation: 0,
			origin: 0,
			overflow: 0,
			overlinePosition: "overline-position",
			overlineThickness: "overline-thickness",
			paintOrder: "paint-order",
			panose1: "panose-1",
			pathLength: "pathLength",
			patternContentUnits: "patternContentUnits",
			patternTransform: "patternTransform",
			patternUnits: "patternUnits",
			pointerEvents: "pointer-events",
			points: 0,
			pointsAtX: "pointsAtX",
			pointsAtY: "pointsAtY",
			pointsAtZ: "pointsAtZ",
			preserveAlpha: "preserveAlpha",
			preserveAspectRatio: "preserveAspectRatio",
			primitiveUnits: "primitiveUnits",
			r: 0,
			radius: 0,
			refX: "refX",
			refY: "refY",
			renderingIntent: "rendering-intent",
			repeatCount: "repeatCount",
			repeatDur: "repeatDur",
			requiredExtensions: "requiredExtensions",
			requiredFeatures: "requiredFeatures",
			restart: 0,
			result: 0,
			rotate: 0,
			rx: 0,
			ry: 0,
			scale: 0,
			seed: 0,
			shapeRendering: "shape-rendering",
			slope: 0,
			spacing: 0,
			specularConstant: "specularConstant",
			specularExponent: "specularExponent",
			speed: 0,
			spreadMethod: "spreadMethod",
			startOffset: "startOffset",
			stdDeviation: "stdDeviation",
			stemh: 0,
			stemv: 0,
			stitchTiles: "stitchTiles",
			stopColor: "stop-color",
			stopOpacity: "stop-opacity",
			strikethroughPosition: "strikethrough-position",
			strikethroughThickness: "strikethrough-thickness",
			string: 0,
			stroke: 0,
			strokeDasharray: "stroke-dasharray",
			strokeDashoffset: "stroke-dashoffset",
			strokeLinecap: "stroke-linecap",
			strokeLinejoin: "stroke-linejoin",
			strokeMiterlimit: "stroke-miterlimit",
			strokeOpacity: "stroke-opacity",
			strokeWidth: "stroke-width",
			surfaceScale: "surfaceScale",
			systemLanguage: "systemLanguage",
			tableValues: "tableValues",
			targetX: "targetX",
			targetY: "targetY",
			textAnchor: "text-anchor",
			textDecoration: "text-decoration",
			textRendering: "text-rendering",
			textLength: "textLength",
			to: 0,
			transform: 0,
			u1: 0,
			u2: 0,
			underlinePosition: "underline-position",
			underlineThickness: "underline-thickness",
			unicode: 0,
			unicodeBidi: "unicode-bidi",
			unicodeRange: "unicode-range",
			unitsPerEm: "units-per-em",
			vAlphabetic: "v-alphabetic",
			vHanging: "v-hanging",
			vIdeographic: "v-ideographic",
			vMathematical: "v-mathematical",
			values: 0,
			vectorEffect: "vector-effect",
			version: 0,
			vertAdvY: "vert-adv-y",
			vertOriginX: "vert-origin-x",
			vertOriginY: "vert-origin-y",
			viewBox: "viewBox",
			viewTarget: "viewTarget",
			visibility: 0,
			widths: 0,
			wordSpacing: "word-spacing",
			writingMode: "writing-mode",
			x: 0,
			xHeight: "x-height",
			x1: 0,
			x2: 0,
			xChannelSelector: "xChannelSelector",
			xlinkActuate: "xlink:actuate",
			xlinkArcrole: "xlink:arcrole",
			xlinkHref: "xlink:href",
			xlinkRole: "xlink:role",
			xlinkShow: "xlink:show",
			xlinkTitle: "xlink:title",
			xlinkType: "xlink:type",
			xmlBase: "xml:base",
			xmlns: 0,
			xmlnsXlink: "xmlns:xlink",
			xmlLang: "xml:lang",
			xmlSpace: "xml:space",
			y: 0,
			y1: 0,
			y2: 0,
			yChannelSelector: "yChannelSelector",
			z: 0,
			zoomAndPan: "zoomAndPan"
		},
		r = {
			Properties: {},
			DOMAttributeNamespaces: {
				xlinkActuate: t.xlink,
				xlinkArcrole: t.xlink,
				xlinkHref: t.xlink,
				xlinkRole: t.xlink,
				xlinkShow: t.xlink,
				xlinkTitle: t.xlink,
				xlinkType: t.xlink,
				xmlBase: t.xml,
				xmlLang: t.xml,
				xmlSpace: t.xml
			},
			DOMAttributeNames: {}
		};
	Object.keys(n).forEach(function(e) {
		r.Properties[e] = 0, n[e] && (r.DOMAttributeNames[e] = n[e])
	}), e.exports = r
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		if ("selectionStart" in e && l.hasSelectionCapabilities(e)) return {
			start: e.selectionStart,
			end: e.selectionEnd
		};
		if (window.getSelection) {
			var t = window.getSelection();
			return {
				anchorNode: t.anchorNode,
				anchorOffset: t.anchorOffset,
				focusNode: t.focusNode,
				focusOffset: t.focusOffset
			}
		}
		if (document.selection) {
			var n = document.selection.createRange();
			return {
				parentElement: n.parentElement(),
				text: n.text,
				top: n.boundingTop,
				left: n.boundingLeft
			}
		}
	}

	function r(e, t) {
		if (b || null == v || v !== d()) return null;
		var r = n(v);
		if (!y || !m(y, r)) {
			y = r;
			var o = u.getPooled(f.select, g, e, t);
			return o.type = "select", o.target = v, a.accumulateTwoPhaseDispatches(o), o
		}
		return null
	}
	var o = t(41),
		a = t(42),
		i = t(49),
		s = t(36),
		l = t(142),
		u = t(53),
		d = t(148),
		c = t(72),
		p = t(25),
		m = t(124),
		h = o.topLevelTypes,
		_ = i.canUseDOM && "documentMode" in document && document.documentMode <= 11,
		f = {
			select: {
				phasedRegistrationNames: {
					bubbled: p({
						onSelect: null
					}),
					captured: p({
						onSelectCapture: null
					})
				},
				dependencies: [h.topBlur, h.topContextMenu, h.topFocus, h.topKeyDown, h.topMouseDown, h.topMouseUp, h.topSelectionChange]
			}
		},
		v = null,
		g = null,
		y = null,
		b = !1,
		M = !1,
		k = p({
			onSelect: null
		}),
		w = {
			eventTypes: f,
			extractEvents: function(e, t, n, o) {
				if (!M) return null;
				var a = t ? s.getNodeFromInstance(t) : window;
				switch (e) {
					case h.topFocus:
						(c(a) || "true" === a.contentEditable) && (v = a, g = t, y = null);
						break;
					case h.topBlur:
						v = null, g = null, y = null;
						break;
					case h.topMouseDown:
						b = !0;
						break;
					case h.topContextMenu:
					case h.topMouseUp:
						return b = !1, r(n, o);
					case h.topSelectionChange:
						if (_) break;
					case h.topKeyDown:
					case h.topKeyUp:
						return r(n, o)
				}
				return null
			},
			didPutListener: function(e, t, n) {
				t === k && (M = !0)
			}
		};
	e.exports = w
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			return "." + e._rootNodeID
		}
		var o = t(7),
			a = t(41),
			i = t(138),
			s = t(42),
			l = t(36),
			u = t(152),
			d = t(153),
			c = t(53),
			p = t(154),
			m = t(155),
			h = t(75),
			_ = t(158),
			f = t(159),
			v = t(160),
			g = t(76),
			y = t(161),
			b = t(12),
			M = t(156),
			k = t(8),
			w = t(25),
			D = a.topLevelTypes,
			L = {
				abort: {
					phasedRegistrationNames: {
						bubbled: w({
							onAbort: !0
						}),
						captured: w({
							onAbortCapture: !0
						})
					}
				},
				animationEnd: {
					phasedRegistrationNames: {
						bubbled: w({
							onAnimationEnd: !0
						}),
						captured: w({
							onAnimationEndCapture: !0
						})
					}
				},
				animationIteration: {
					phasedRegistrationNames: {
						bubbled: w({
							onAnimationIteration: !0
						}),
						captured: w({
							onAnimationIterationCapture: !0
						})
					}
				},
				animationStart: {
					phasedRegistrationNames: {
						bubbled: w({
							onAnimationStart: !0
						}),
						captured: w({
							onAnimationStartCapture: !0
						})
					}
				},
				blur: {
					phasedRegistrationNames: {
						bubbled: w({
							onBlur: !0
						}),
						captured: w({
							onBlurCapture: !0
						})
					}
				},
				canPlay: {
					phasedRegistrationNames: {
						bubbled: w({
							onCanPlay: !0
						}),
						captured: w({
							onCanPlayCapture: !0
						})
					}
				},
				canPlayThrough: {
					phasedRegistrationNames: {
						bubbled: w({
							onCanPlayThrough: !0
						}),
						captured: w({
							onCanPlayThroughCapture: !0
						})
					}
				},
				click: {
					phasedRegistrationNames: {
						bubbled: w({
							onClick: !0
						}),
						captured: w({
							onClickCapture: !0
						})
					}
				},
				contextMenu: {
					phasedRegistrationNames: {
						bubbled: w({
							onContextMenu: !0
						}),
						captured: w({
							onContextMenuCapture: !0
						})
					}
				},
				copy: {
					phasedRegistrationNames: {
						bubbled: w({
							onCopy: !0
						}),
						captured: w({
							onCopyCapture: !0
						})
					}
				},
				cut: {
					phasedRegistrationNames: {
						bubbled: w({
							onCut: !0
						}),
						captured: w({
							onCutCapture: !0
						})
					}
				},
				doubleClick: {
					phasedRegistrationNames: {
						bubbled: w({
							onDoubleClick: !0
						}),
						captured: w({
							onDoubleClickCapture: !0
						})
					}
				},
				drag: {
					phasedRegistrationNames: {
						bubbled: w({
							onDrag: !0
						}),
						captured: w({
							onDragCapture: !0
						})
					}
				},
				dragEnd: {
					phasedRegistrationNames: {
						bubbled: w({
							onDragEnd: !0
						}),
						captured: w({
							onDragEndCapture: !0
						})
					}
				},
				dragEnter: {
					phasedRegistrationNames: {
						bubbled: w({
							onDragEnter: !0
						}),
						captured: w({
							onDragEnterCapture: !0
						})
					}
				},
				dragExit: {
					phasedRegistrationNames: {
						bubbled: w({
							onDragExit: !0
						}),
						captured: w({
							onDragExitCapture: !0
						})
					}
				},
				dragLeave: {
					phasedRegistrationNames: {
						bubbled: w({
							onDragLeave: !0
						}),
						captured: w({
							onDragLeaveCapture: !0
						})
					}
				},
				dragOver: {
					phasedRegistrationNames: {
						bubbled: w({
							onDragOver: !0
						}),
						captured: w({
							onDragOverCapture: !0
						})
					}
				},
				dragStart: {
					phasedRegistrationNames: {
						bubbled: w({
							onDragStart: !0
						}),
						captured: w({
							onDragStartCapture: !0
						})
					}
				},
				drop: {
					phasedRegistrationNames: {
						bubbled: w({
							onDrop: !0
						}),
						captured: w({
							onDropCapture: !0
						})
					}
				},
				durationChange: {
					phasedRegistrationNames: {
						bubbled: w({
							onDurationChange: !0
						}),
						captured: w({
							onDurationChangeCapture: !0
						})
					}
				},
				emptied: {
					phasedRegistrationNames: {
						bubbled: w({
							onEmptied: !0
						}),
						captured: w({
							onEmptiedCapture: !0
						})
					}
				},
				encrypted: {
					phasedRegistrationNames: {
						bubbled: w({
							onEncrypted: !0
						}),
						captured: w({
							onEncryptedCapture: !0
						})
					}
				},
				ended: {
					phasedRegistrationNames: {
						bubbled: w({
							onEnded: !0
						}),
						captured: w({
							onEndedCapture: !0
						})
					}
				},
				error: {
					phasedRegistrationNames: {
						bubbled: w({
							onError: !0
						}),
						captured: w({
							onErrorCapture: !0
						})
					}
				},
				focus: {
					phasedRegistrationNames: {
						bubbled: w({
							onFocus: !0
						}),
						captured: w({
							onFocusCapture: !0
						})
					}
				},
				input: {
					phasedRegistrationNames: {
						bubbled: w({
							onInput: !0
						}),
						captured: w({
							onInputCapture: !0
						})
					}
				},
				invalid: {
					phasedRegistrationNames: {
						bubbled: w({
							onInvalid: !0
						}),
						captured: w({
							onInvalidCapture: !0
						})
					}
				},
				keyDown: {
					phasedRegistrationNames: {
						bubbled: w({
							onKeyDown: !0
						}),
						captured: w({
							onKeyDownCapture: !0
						})
					}
				},
				keyPress: {
					phasedRegistrationNames: {
						bubbled: w({
							onKeyPress: !0
						}),
						captured: w({
							onKeyPressCapture: !0
						})
					}
				},
				keyUp: {
					phasedRegistrationNames: {
						bubbled: w({
							onKeyUp: !0
						}),
						captured: w({
							onKeyUpCapture: !0
						})
					}
				},
				load: {
					phasedRegistrationNames: {
						bubbled: w({
							onLoad: !0
						}),
						captured: w({
							onLoadCapture: !0
						})
					}
				},
				loadedData: {
					phasedRegistrationNames: {
						bubbled: w({
							onLoadedData: !0
						}),
						captured: w({
							onLoadedDataCapture: !0
						})
					}
				},
				loadedMetadata: {
					phasedRegistrationNames: {
						bubbled: w({
							onLoadedMetadata: !0
						}),
						captured: w({
							onLoadedMetadataCapture: !0
						})
					}
				},
				loadStart: {
					phasedRegistrationNames: {
						bubbled: w({
							onLoadStart: !0
						}),
						captured: w({
							onLoadStartCapture: !0
						})
					}
				},
				mouseDown: {
					phasedRegistrationNames: {
						bubbled: w({
							onMouseDown: !0
						}),
						captured: w({
							onMouseDownCapture: !0
						})
					}
				},
				mouseMove: {
					phasedRegistrationNames: {
						bubbled: w({
							onMouseMove: !0
						}),
						captured: w({
							onMouseMoveCapture: !0
						})
					}
				},
				mouseOut: {
					phasedRegistrationNames: {
						bubbled: w({
							onMouseOut: !0
						}),
						captured: w({
							onMouseOutCapture: !0
						})
					}
				},
				mouseOver: {
					phasedRegistrationNames: {
						bubbled: w({
							onMouseOver: !0
						}),
						captured: w({
							onMouseOverCapture: !0
						})
					}
				},
				mouseUp: {
					phasedRegistrationNames: {
						bubbled: w({
							onMouseUp: !0
						}),
						captured: w({
							onMouseUpCapture: !0
						})
					}
				},
				paste: {
					phasedRegistrationNames: {
						bubbled: w({
							onPaste: !0
						}),
						captured: w({
							onPasteCapture: !0
						})
					}
				},
				pause: {
					phasedRegistrationNames: {
						bubbled: w({
							onPause: !0
						}),
						captured: w({
							onPauseCapture: !0
						})
					}
				},
				play: {
					phasedRegistrationNames: {
						bubbled: w({
							onPlay: !0
						}),
						captured: w({
							onPlayCapture: !0
						})
					}
				},
				playing: {
					phasedRegistrationNames: {
						bubbled: w({
							onPlaying: !0
						}),
						captured: w({
							onPlayingCapture: !0
						})
					}
				},
				progress: {
					phasedRegistrationNames: {
						bubbled: w({
							onProgress: !0
						}),
						captured: w({
							onProgressCapture: !0
						})
					}
				},
				rateChange: {
					phasedRegistrationNames: {
						bubbled: w({
							onRateChange: !0
						}),
						captured: w({
							onRateChangeCapture: !0
						})
					}
				},
				reset: {
					phasedRegistrationNames: {
						bubbled: w({
							onReset: !0
						}),
						captured: w({
							onResetCapture: !0
						})
					}
				},
				scroll: {
					phasedRegistrationNames: {
						bubbled: w({
							onScroll: !0
						}),
						captured: w({
							onScrollCapture: !0
						})
					}
				},
				seeked: {
					phasedRegistrationNames: {
						bubbled: w({
							onSeeked: !0
						}),
						captured: w({
							onSeekedCapture: !0
						})
					}
				},
				seeking: {
					phasedRegistrationNames: {
						bubbled: w({
							onSeeking: !0
						}),
						captured: w({
							onSeekingCapture: !0
						})
					}
				},
				stalled: {
					phasedRegistrationNames: {
						bubbled: w({
							onStalled: !0
						}),
						captured: w({
							onStalledCapture: !0
						})
					}
				},
				submit: {
					phasedRegistrationNames: {
						bubbled: w({
							onSubmit: !0
						}),
						captured: w({
							onSubmitCapture: !0
						})
					}
				},
				suspend: {
					phasedRegistrationNames: {
						bubbled: w({
							onSuspend: !0
						}),
						captured: w({
							onSuspendCapture: !0
						})
					}
				},
				timeUpdate: {
					phasedRegistrationNames: {
						bubbled: w({
							onTimeUpdate: !0
						}),
						captured: w({
							onTimeUpdateCapture: !0
						})
					}
				},
				touchCancel: {
					phasedRegistrationNames: {
						bubbled: w({
							onTouchCancel: !0
						}),
						captured: w({
							onTouchCancelCapture: !0
						})
					}
				},
				touchEnd: {
					phasedRegistrationNames: {
						bubbled: w({
							onTouchEnd: !0
						}),
						captured: w({
							onTouchEndCapture: !0
						})
					}
				},
				touchMove: {
					phasedRegistrationNames: {
						bubbled: w({
							onTouchMove: !0
						}),
						captured: w({
							onTouchMoveCapture: !0
						})
					}
				},
				touchStart: {
					phasedRegistrationNames: {
						bubbled: w({
							onTouchStart: !0
						}),
						captured: w({
							onTouchStartCapture: !0
						})
					}
				},
				transitionEnd: {
					phasedRegistrationNames: {
						bubbled: w({
							onTransitionEnd: !0
						}),
						captured: w({
							onTransitionEndCapture: !0
						})
					}
				},
				volumeChange: {
					phasedRegistrationNames: {
						bubbled: w({
							onVolumeChange: !0
						}),
						captured: w({
							onVolumeChangeCapture: !0
						})
					}
				},
				waiting: {
					phasedRegistrationNames: {
						bubbled: w({
							onWaiting: !0
						}),
						captured: w({
							onWaitingCapture: !0
						})
					}
				},
				wheel: {
					phasedRegistrationNames: {
						bubbled: w({
							onWheel: !0
						}),
						captured: w({
							onWheelCapture: !0
						})
					}
				}
			},
			T = {
				topAbort: L.abort,
				topAnimationEnd: L.animationEnd,
				topAnimationIteration: L.animationIteration,
				topAnimationStart: L.animationStart,
				topBlur: L.blur,
				topCanPlay: L.canPlay,
				topCanPlayThrough: L.canPlayThrough,
				topClick: L.click,
				topContextMenu: L.contextMenu,
				topCopy: L.copy,
				topCut: L.cut,
				topDoubleClick: L.doubleClick,
				topDrag: L.drag,
				topDragEnd: L.dragEnd,
				topDragEnter: L.dragEnter,
				topDragExit: L.dragExit,
				topDragLeave: L.dragLeave,
				topDragOver: L.dragOver,
				topDragStart: L.dragStart,
				topDrop: L.drop,
				topDurationChange: L.durationChange,
				topEmptied: L.emptied,
				topEncrypted: L.encrypted,
				topEnded: L.ended,
				topError: L.error,
				topFocus: L.focus,
				topInput: L.input,
				topInvalid: L.invalid,
				topKeyDown: L.keyDown,
				topKeyPress: L.keyPress,
				topKeyUp: L.keyUp,
				topLoad: L.load,
				topLoadedData: L.loadedData,
				topLoadedMetadata: L.loadedMetadata,
				topLoadStart: L.loadStart,
				topMouseDown: L.mouseDown,
				topMouseMove: L.mouseMove,
				topMouseOut: L.mouseOut,
				topMouseOver: L.mouseOver,
				topMouseUp: L.mouseUp,
				topPaste: L.paste,
				topPause: L.pause,
				topPlay: L.play,
				topPlaying: L.playing,
				topProgress: L.progress,
				topRateChange: L.rateChange,
				topReset: L.reset,
				topScroll: L.scroll,
				topSeeked: L.seeked,
				topSeeking: L.seeking,
				topStalled: L.stalled,
				topSubmit: L.submit,
				topSuspend: L.suspend,
				topTimeUpdate: L.timeUpdate,
				topTouchCancel: L.touchCancel,
				topTouchEnd: L.touchEnd,
				topTouchMove: L.touchMove,
				topTouchStart: L.touchStart,
				topTransitionEnd: L.transitionEnd,
				topVolumeChange: L.volumeChange,
				topWaiting: L.waiting,
				topWheel: L.wheel
			};
		for (var Y in T) T[Y].dependencies = [Y];
		var E = w({
				onClick: null
			}),
			S = {},
			x = {
				eventTypes: L,
				extractEvents: function(e, t, r, a) {
					var i = T[e];
					if (!i) return null;
					var l;
					switch (e) {
						case D.topAbort:
						case D.topCanPlay:
						case D.topCanPlayThrough:
						case D.topDurationChange:
						case D.topEmptied:
						case D.topEncrypted:
						case D.topEnded:
						case D.topError:
						case D.topInput:
						case D.topInvalid:
						case D.topLoad:
						case D.topLoadedData:
						case D.topLoadedMetadata:
						case D.topLoadStart:
						case D.topPause:
						case D.topPlay:
						case D.topPlaying:
						case D.topProgress:
						case D.topRateChange:
						case D.topReset:
						case D.topSeeked:
						case D.topSeeking:
						case D.topStalled:
						case D.topSubmit:
						case D.topSuspend:
						case D.topTimeUpdate:
						case D.topVolumeChange:
						case D.topWaiting:
							l = c;
							break;
						case D.topKeyPress:
							if (0 === M(r)) return null;
						case D.topKeyDown:
						case D.topKeyUp:
							l = m;
							break;
						case D.topBlur:
						case D.topFocus:
							l = p;
							break;
						case D.topClick:
							if (2 === r.button) return null;
						case D.topContextMenu:
						case D.topDoubleClick:
						case D.topMouseDown:
						case D.topMouseMove:
						case D.topMouseOut:
						case D.topMouseOver:
						case D.topMouseUp:
							l = h;
							break;
						case D.topDrag:
						case D.topDragEnd:
						case D.topDragEnter:
						case D.topDragExit:
						case D.topDragLeave:
						case D.topDragOver:
						case D.topDragStart:
						case D.topDrop:
							l = _;
							break;
						case D.topTouchCancel:
						case D.topTouchEnd:
						case D.topTouchMove:
						case D.topTouchStart:
							l = f;
							break;
						case D.topAnimationEnd:
						case D.topAnimationIteration:
						case D.topAnimationStart:
							l = u;
							break;
						case D.topTransitionEnd:
							l = v;
							break;
						case D.topScroll:
							l = g;
							break;
						case D.topWheel:
							l = y;
							break;
						case D.topCopy:
						case D.topCut:
						case D.topPaste:
							l = d
					}
					l ? void 0 : "production" !== n.env.NODE_ENV ? k(!1, "SimpleEventPlugin: Unhandled event type, `%s`.", e) : o("86", e);
					var b = l.getPooled(i, t, r, a);
					return s.accumulateTwoPhaseDispatches(b), b
				},
				didPutListener: function(e, t, n) {
					if (t === E) {
						var o = r(e),
							a = l.getNodeFromInstance(e);
						S[o] || (S[o] = i.listen(a, "click", b))
					}
				},
				willDeleteListener: function(e, t) {
					if (t === E) {
						var n = r(e);
						S[n].remove(), delete S[n]
					}
				}
			};
		e.exports = x
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n, o) {
		return r.call(this, e, t, n, o)
	}
	var r = t(53),
		o = {
			animationName: null,
			elapsedTime: null,
			pseudoElement: null
		};
	r.augmentClass(n, o), e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n, o) {
		return r.call(this, e, t, n, o)
	}
	var r = t(53),
		o = {
			clipboardData: function(e) {
				return "clipboardData" in e ? e.clipboardData : window.clipboardData
			}
		};
	r.augmentClass(n, o), e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n, o) {
		return r.call(this, e, t, n, o)
	}
	var r = t(76),
		o = {
			relatedTarget: null
		};
	r.augmentClass(n, o), e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n, o) {
		return r.call(this, e, t, n, o)
	}
	var r = t(76),
		o = t(156),
		a = t(157),
		i = t(78),
		s = {
			key: a,
			location: null,
			ctrlKey: null,
			shiftKey: null,
			altKey: null,
			metaKey: null,
			repeat: null,
			locale: null,
			getModifierState: i,
			charCode: function(e) {
				return "keypress" === e.type ? o(e) : 0
			},
			keyCode: function(e) {
				return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
			},
			which: function(e) {
				return "keypress" === e.type ? o(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
			}
		};
	r.augmentClass(n, s), e.exports = n
}, function(e, exports) {
	"use strict";

	function t(e) {
		var t, n = e.keyCode;
		return "charCode" in e ? (t = e.charCode, 0 === t && 13 === n && (t = 13)) : t = n, t >= 32 || 13 === t ? t : 0
	}
	e.exports = t
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		if (e.key) {
			var t = o[e.key] || e.key;
			if ("Unidentified" !== t) return t
		}
		if ("keypress" === e.type) {
			var n = r(e);
			return 13 === n ? "Enter" : String.fromCharCode(n)
		}
		return "keydown" === e.type || "keyup" === e.type ? a[e.keyCode] || "Unidentified" : ""
	}
	var r = t(156),
		o = {
			Esc: "Escape",
			Spacebar: " ",
			Left: "ArrowLeft",
			Up: "ArrowUp",
			Right: "ArrowRight",
			Down: "ArrowDown",
			Del: "Delete",
			Win: "OS",
			Menu: "ContextMenu",
			Apps: "ContextMenu",
			Scroll: "ScrollLock",
			MozPrintableKey: "Unidentified"
		},
		a = {
			8: "Backspace",
			9: "Tab",
			12: "Clear",
			13: "Enter",
			16: "Shift",
			17: "Control",
			18: "Alt",
			19: "Pause",
			20: "CapsLock",
			27: "Escape",
			32: " ",
			33: "PageUp",
			34: "PageDown",
			35: "End",
			36: "Home",
			37: "ArrowLeft",
			38: "ArrowUp",
			39: "ArrowRight",
			40: "ArrowDown",
			45: "Insert",
			46: "Delete",
			112: "F1",
			113: "F2",
			114: "F3",
			115: "F4",
			116: "F5",
			117: "F6",
			118: "F7",
			119: "F8",
			120: "F9",
			121: "F10",
			122: "F11",
			123: "F12",
			144: "NumLock",
			145: "ScrollLock",
			224: "Meta"
		};
	e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n, o) {
		return r.call(this, e, t, n, o)
	}
	var r = t(75),
		o = {
			dataTransfer: null
		};
	r.augmentClass(n, o), e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n, o) {
		return r.call(this, e, t, n, o)
	}
	var r = t(76),
		o = t(78),
		a = {
			touches: null,
			targetTouches: null,
			changedTouches: null,
			altKey: null,
			metaKey: null,
			ctrlKey: null,
			shiftKey: null,
			getModifierState: o
		};
	r.augmentClass(n, a), e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n, o) {
		return r.call(this, e, t, n, o)
	}
	var r = t(53),
		o = {
			propertyName: null,
			elapsedTime: null,
			pseudoElement: null
		};
	r.augmentClass(n, o), e.exports = n
}, function(e, exports, t) {
	"use strict";

	function n(e, t, n, o) {
		return r.call(this, e, t, n, o)
	}
	var r = t(75),
		o = {
			deltaX: function(e) {
				return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
			},
			deltaY: function(e) {
				return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
			},
			deltaZ: null,
			deltaMode: null
		};
	r.augmentClass(n, o), e.exports = n
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t) {
			for (var n = Math.min(e.length, t.length), r = 0; n > r; r++)
				if (e.charAt(r) !== t.charAt(r)) return r;
			return e.length === t.length ? -1 : n
		}

		function o(e) {
			return e ? e.nodeType === V ? e.documentElement : e.firstChild : null
		}

		function a(e) {
			return e.getAttribute && e.getAttribute(j) || ""
		}

		function i(e, t, n, r, o) {
			var a;
			if (D.logTopLevelRenders) {
				var i = e._currentElement.props,
					s = i.type;
				a = "React mount: " + ("string" == typeof s ? s : s.displayName || s.name), console.time(a)
			}
			var l = E.mountComponent(e, n, null, M(e, t), o, 0);
			a && console.timeEnd(a), e._renderedComponent._topLevelWrapper = e, B._mountImageIntoNode(l, t, e, r, n)
		}

		function s(e, t, n, r) {
			var o = x.ReactReconcileTransaction.getPooled(!n && k.useCreateElement);
			o.perform(i, null, e, t, o, n, r), x.ReactReconcileTransaction.release(o)
		}

		function l(e, t, r) {
			for ("production" !== n.env.NODE_ENV && T.debugTool.onBeginFlush(), E.unmountComponent(e, r), "production" !== n.env.NODE_ENV && T.debugTool.onEndFlush(), t.nodeType === V && (t = t.documentElement); t.lastChild;) t.removeChild(t.lastChild)
		}

		function u(e) {
			var t = o(e);
			if (t) {
				var n = b.getInstanceFromNode(t);
				return !(!n || !n._hostParent)
			}
		}

		function d(e) {
			var t = o(e);
			return !(!t || !p(t) || b.getInstanceFromNode(t))
		}

		function c(e) {
			return !(!e || e.nodeType !== R && e.nodeType !== V && e.nodeType !== F)
		}

		function p(e) {
			return c(e) && (e.hasAttribute(A) || e.hasAttribute(j))
		}

		function m(e) {
			var t = o(e),
				n = t && b.getInstanceFromNode(t);
			return n && !n._hostParent ? n : null
		}

		function h(e) {
			var t = m(e);
			return t ? t._hostContainerInfo._topLevelWrapper : null
		}
		var _ = t(7),
			f = t(82),
			v = t(37),
			g = t(107),
			y = t(10),
			b = t(36),
			M = t(163),
			k = t(164),
			w = t(9),
			D = t(58),
			L = t(119),
			T = t(62),
			Y = t(165),
			E = t(59),
			S = t(131),
			x = t(56),
			N = t(19),
			C = t(121),
			O = t(8),
			P = t(84),
			H = t(125),
			I = t(11),
			j = v.ID_ATTRIBUTE_NAME,
			A = v.ROOT_ATTRIBUTE_NAME,
			R = 1,
			V = 9,
			F = 11,
			W = {},
			U = 1,
			G = function() {
				this.rootID = U++
			};
		G.prototype.isReactComponent = {}, "production" !== n.env.NODE_ENV && (G.displayName = "TopLevelWrapper"), G.prototype.render = function() {
			return this.props
		};
		var B = {
			TopLevelWrapper: G,
			_instancesByReactRootID: W,
			scrollMonitor: function(e, t) {
				t()
			},
			_updateRootComponent: function(e, t, n, r, o) {
				return B.scrollMonitor(r, function() {
					S.enqueueElementInternal(e, t, n), o && S.enqueueCallbackInternal(e, o)
				}), e
			},
			_renderNewRootComponent: function(e, t, r, o) {
				"production" !== n.env.NODE_ENV ? I(null == y.current, "_renderNewRootComponent(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate. Check the render method of %s.", y.current && y.current.getName() || "ReactCompositeComponent") : void 0, c(t) ? void 0 : "production" !== n.env.NODE_ENV ? O(!1, "_registerComponent(...): Target container is not a DOM element.") : _("37"), g.ensureScrollValueMonitoring();
				var a = C(e, !1);
				x.batchedUpdates(s, a, t, r, o);
				var i = a._instance.rootID;
				return W[i] = a, a
			},
			renderSubtreeIntoContainer: function(e, t, r, o) {
				return null != e && L.has(e) ? void 0 : "production" !== n.env.NODE_ENV ? O(!1, "parentComponent must be a valid React Component") : _("38"), B._renderSubtreeIntoContainer(e, t, r, o)
			},
			_renderSubtreeIntoContainer: function(e, t, r, i) {
				S.validateCallback(i, "ReactDOM.render"), w.isValidElement(t) ? void 0 : "production" !== n.env.NODE_ENV ? O(!1, "ReactDOM.render(): Invalid component element.%s", "string" == typeof t ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />." : "function" == typeof t ? " Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />." : null != t && void 0 !== t.props ? " This may be caused by unintentionally loading two independent copies of React." : "") : _("39", "string" == typeof t ? " Instead of passing a string like 'div', pass React.createElement('div') or <div />." : "function" == typeof t ? " Instead of passing a class like Foo, pass React.createElement(Foo) or <Foo />." : null != t && void 0 !== t.props ? " This may be caused by unintentionally loading two independent copies of React." : ""), "production" !== n.env.NODE_ENV ? I(!r || !r.tagName || "BODY" !== r.tagName.toUpperCase(), "render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.") : void 0;
				var s, l = w(G, null, null, null, null, null, t);
				if (e) {
					var d = L.get(e);
					s = d._processChildContext(d._context)
				} else s = N;
				var c = h(r);
				if (c) {
					var p = c._currentElement,
						m = p.props;
					if (H(m, t)) {
						var f = c._renderedComponent.getPublicInstance(),
							v = i && function() {
								i.call(f)
							};
						return B._updateRootComponent(c, l, s, r, v), f
					}
					B.unmountComponentAtNode(r)
				}
				var g = o(r),
					y = g && !!a(g),
					b = u(r);
				if ("production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? I(!b, "render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render.") : void 0, !y || g.nextSibling))
					for (var M = g; M;) {
						if (a(M)) {
							"production" !== n.env.NODE_ENV ? I(!1, "render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.") : void 0;
							break
						}
						M = M.nextSibling
					}
				var k = y && !c && !b,
					D = B._renderNewRootComponent(l, r, k, s)._renderedComponent.getPublicInstance();
				return i && i.call(D), D
			},
			render: function(e, t, n) {
				return B._renderSubtreeIntoContainer(null, e, t, n)
			},
			unmountComponentAtNode: function(e) {
				"production" !== n.env.NODE_ENV ? I(null == y.current, "unmountComponentAtNode(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate. Check the render method of %s.", y.current && y.current.getName() || "ReactCompositeComponent") : void 0, c(e) ? void 0 : "production" !== n.env.NODE_ENV ? O(!1, "unmountComponentAtNode(...): Target container is not a DOM element.") : _("40"), "production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? I(!d(e), "unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.") : void 0);
				var t = h(e);
				if (!t) {
					var r = u(e),
						o = 1 === e.nodeType && e.hasAttribute(A);
					return "production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? I(!r, "unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", o ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.") : void 0), !1
				}
				return delete W[t._instance.rootID], x.batchedUpdates(l, t, e, !1), !0
			},
			_mountImageIntoNode: function(e, t, a, i, s) {
				if (c(t) ? void 0 : "production" !== n.env.NODE_ENV ? O(!1, "mountComponentIntoNode(...): Target container is not valid.") : _("41"), i) {
					var l = o(t);
					if (Y.canReuseMarkup(e, l)) return void b.precacheNode(a, l);
					var u = l.getAttribute(Y.CHECKSUM_ATTR_NAME);
					l.removeAttribute(Y.CHECKSUM_ATTR_NAME);
					var d = l.outerHTML;
					l.setAttribute(Y.CHECKSUM_ATTR_NAME, u);
					var p = e;
					if ("production" !== n.env.NODE_ENV) {
						var m;
						t.nodeType === R ? (m = document.createElement("div"), m.innerHTML = e, p = m.innerHTML) : (m = document.createElement("iframe"), document.body.appendChild(m), m.contentDocument.write(e), p = m.contentDocument.documentElement.outerHTML, document.body.removeChild(m))
					}
					var h = r(p, d),
						v = " (client) " + p.substring(h - 20, h + 20) + "\n (server) " + d.substring(h - 20, h + 20);
					t.nodeType === V ? "production" !== n.env.NODE_ENV ? O(!1, "You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s", v) : _("42", v) : void 0, "production" !== n.env.NODE_ENV && ("production" !== n.env.NODE_ENV ? I(!1, "React attempted to reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server:\n%s", v) : void 0)
				}
				if (t.nodeType === V ? "production" !== n.env.NODE_ENV ? O(!1, "You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See ReactDOMServer.renderToString() for server rendering.") : _("43") : void 0, s.useCreateElement) {
					for (; t.lastChild;) t.removeChild(t.lastChild);
					f.insertTreeBefore(t, e, null)
				} else P(t, e), b.precacheNode(a, t.firstChild);
				if ("production" !== n.env.NODE_ENV) {
					var g = b.getInstanceFromNode(t.firstChild);
					0 !== g._debugID && T.debugTool.onHostOperation(g._debugID, "mount", e.toString())
				}
			}
		};
		e.exports = B
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t) {
			var r = {
				_topLevelWrapper: e,
				_idCounter: 1,
				_ownerDocument: t ? t.nodeType === a ? t : t.ownerDocument : null,
				_node: t,
				_tag: t ? t.nodeName.toLowerCase() : null,
				_namespaceURI: t ? t.namespaceURI : null
			};
			return "production" !== n.env.NODE_ENV && (r._ancestorInfo = t ? o.updatedAncestorInfo(null, r._tag, null) : null), r
		}
		var o = t(132),
			a = 9;
		e.exports = r
	}).call(exports, t(1))
}, function(e, exports) {
	"use strict";
	var t = {
		useCreateElement: !0
	};
	e.exports = t
}, function(e, exports, t) {
	"use strict";
	var n = t(166),
		r = /\/?>/,
		o = /^<\!\-\-/,
		a = {
			CHECKSUM_ATTR_NAME: "data-react-checksum",
			addChecksumToMarkup: function(e) {
				var t = n(e);
				return o.test(e) ? e : e.replace(r, " " + a.CHECKSUM_ATTR_NAME + '="' + t + '"$&')
			},
			canReuseMarkup: function(e, t) {
				var r = t.getAttribute(a.CHECKSUM_ATTR_NAME);
				r = r && parseInt(r, 10);
				var o = n(e);
				return o === r
			}
		};
	e.exports = a
}, function(e, exports) {
	"use strict";

	function t(e) {
		for (var t = 1, r = 0, o = 0, a = e.length, i = -4 & a; i > o;) {
			for (var s = Math.min(o + 4096, i); s > o; o += 4) r += (t += e.charCodeAt(o)) + (t += e.charCodeAt(o + 1)) + (t += e.charCodeAt(o + 2)) + (t += e.charCodeAt(o + 3));
			t %= n, r %= n
		}
		for (; a > o; o++) r += t += e.charCodeAt(o);
		return t %= n, r %= n, t | r << 16
	}
	var n = 65521;
	e.exports = t
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e) {
			if ("production" !== n.env.NODE_ENV) {
				var t = a.current;
				null !== t && ("production" !== n.env.NODE_ENV ? d(t._warnedAboutRefsInRender, "%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", t.getName() || "A component") : void 0, t._warnedAboutRefsInRender = !0)
			}
			if (null == e) return null;
			if (1 === e.nodeType) return e;
			var r = s.get(e);
			return r ? (r = l(r), r ? i.getNodeFromInstance(r) : null) : void("function" == typeof e.render ? "production" !== n.env.NODE_ENV ? u(!1, "findDOMNode was called on an unmounted component.") : o("44") : "production" !== n.env.NODE_ENV ? u(!1, "Element appears to be neither ReactComponent nor DOMNode (keys: %s)", Object.keys(e)) : o("45", Object.keys(e)))
		}
		var o = t(7),
			a = t(10),
			i = t(36),
			s = t(119),
			l = t(168),
			u = t(8),
			d = t(11);
		e.exports = r
	}).call(exports, t(1))
}, function(e, exports, t) {
	"use strict";

	function n(e) {
		for (var t;
			(t = e._renderedNodeType) === r.COMPOSITE;) e = e._renderedComponent;
		return t === r.HOST ? e._renderedComponent : t === r.EMPTY ? null : void 0
	}
	var r = t(123);
	e.exports = n
}, function(e, exports, t) {
	"use strict";
	var n = t(162);
	e.exports = n.renderSubtreeIntoContainer
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t) {
			null != t && "string" == typeof t.type && (t.type.indexOf("-") >= 0 || t.props.is || c(e, t))
		}
		var o = t(37),
			a = t(44),
			i = t(28),
			s = t(11);
		if ("production" !== n.env.NODE_ENV) var l = {
				children: !0,
				dangerouslySetInnerHTML: !0,
				key: !0,
				ref: !0,
				autoFocus: !0,
				defaultValue: !0,
				valueLink: !0,
				defaultChecked: !0,
				checkedLink: !0,
				innerHTML: !0,
				suppressContentEditableWarning: !0,
				onFocusIn: !0,
				onFocusOut: !0
			},
			u = {},
			d = function(e, t, r) {
				if (o.properties.hasOwnProperty(t) || o.isCustomAttribute(t)) return !0;
				if (l.hasOwnProperty(t) && l[t] || u.hasOwnProperty(t) && u[t]) return !0;
				if (a.registrationNameModules.hasOwnProperty(t)) return !0;
				u[t] = !0;
				var d = t.toLowerCase(),
					c = o.isCustomAttribute(d) ? d : o.getPossibleStandardName.hasOwnProperty(d) ? o.getPossibleStandardName[d] : null,
					p = a.possibleRegistrationNames.hasOwnProperty(d) ? a.possibleRegistrationNames[d] : null;
				return null != c ? ("production" !== n.env.NODE_ENV ? s(!1, "Unknown DOM property %s. Did you mean %s?%s", t, c, i.getStackAddendumByID(r)) : void 0, !0) : null != p ? ("production" !== n.env.NODE_ENV ? s(!1, "Unknown event handler property %s. Did you mean `%s`?%s", t, p, i.getStackAddendumByID(r)) : void 0, !0) : !1
			};
		var c = function(e, t) {
				var r = [];
				for (var o in t.props) {
					var a = d(t.type, o, e);
					a || r.push(o)
				}
				var l = r.map(function(e) {
					return "`" + e + "`"
				}).join(", ");
				1 === r.length ? "production" !== n.env.NODE_ENV ? s(!1, "Unknown prop %s on <%s> tag. Remove this prop from the element. For details, see https://fb.me/react-unknown-prop%s", l, t.type, i.getStackAddendumByID(e)) : void 0 : r.length > 1 && ("production" !== n.env.NODE_ENV ? s(!1, "Unknown props %s on <%s> tag. Remove these props from the element. For details, see https://fb.me/react-unknown-prop%s", l, t.type, i.getStackAddendumByID(e)) : void 0)
			},
			p = {
				onBeforeMountComponent: function(e, t) {
					r(e, t)
				},
				onBeforeUpdateComponent: function(e, t) {
					r(e, t)
				}
			};
		e.exports = p
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(n) {
		"use strict";

		function r(e, t) {
			null != t && ("input" !== t.type && "textarea" !== t.type && "select" !== t.type || null == t.props || null !== t.props.value || i || ("production" !== n.env.NODE_ENV ? a(!1, "`value` prop on `%s` should not be null. Consider using the empty string to clear the component or `undefined` for uncontrolled components.%s", t.type, o.getStackAddendumByID(e)) : void 0, i = !0))
		}
		var o = t(28),
			a = t(11),
			i = !1,
			s = {
				onBeforeMountComponent: function(e, t) {
					r(e, t)
				},
				onBeforeUpdateComponent: function(e, t) {
					r(e, t)
				}
			};
		e.exports = s
	}).call(exports, t(1))
}, function(e, exports, t) {
	(function(e) {
		! function(t, n) {
			e.exports = n()
		}(this, function() {
			"use strict";

			function n() {
				return ur.apply(null, arguments)
			}

			function r(e) {
				ur = e
			}

			function o(e) {
				return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
			}

			function a(e) {
				return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
			}

			function i(e, t) {
				var n, r = [];
				for (n = 0; n < e.length; ++n) r.push(t(e[n], n));
				return r
			}

			function s(e, t) {
				return Object.prototype.hasOwnProperty.call(e, t)
			}

			function l(e, t) {
				for (var n in t) s(t, n) && (e[n] = t[n]);
				return s(t, "toString") && (e.toString = t.toString), s(t, "valueOf") && (e.valueOf = t.valueOf), e
			}

			function u(e, t, n, r) {
				return Ae(e, t, n, r, !0).utc()
			}

			function d() {
				return {
					empty: !1,
					unusedTokens: [],
					unusedInput: [],
					overflow: -2,
					charsLeftOver: 0,
					nullInput: !1,
					invalidMonth: null,
					invalidFormat: !1,
					userInvalidated: !1,
					iso: !1,
					parsedDateParts: [],
					meridiem: null
				}
			}

			function c(e) {
				return null == e._pf && (e._pf = d()), e._pf
			}

			function p(e) {
				if (null == e._isValid) {
					var t = c(e),
						n = dr.call(t.parsedDateParts, function(e) {
							return null != e
						});
					e._isValid = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n), e._strict && (e._isValid = e._isValid && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour)
				}
				return e._isValid
			}

			function m(e) {
				var t = u(NaN);
				return null != e ? l(c(t), e) : c(t).userInvalidated = !0, t
			}

			function h(e) {
				return void 0 === e
			}

			function _(e, t) {
				var n, r, o;
				if (h(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), h(t._i) || (e._i = t._i), h(t._f) || (e._f = t._f), h(t._l) || (e._l = t._l), h(t._strict) || (e._strict = t._strict), h(t._tzm) || (e._tzm = t._tzm), h(t._isUTC) || (e._isUTC = t._isUTC), h(t._offset) || (e._offset = t._offset), h(t._pf) || (e._pf = c(t)), h(t._locale) || (e._locale = t._locale), cr.length > 0)
					for (n in cr) r = cr[n], o = t[r], h(o) || (e[r] = o);
				return e
			}

			function f(e) {
				_(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), pr === !1 && (pr = !0, n.updateOffset(this), pr = !1)
			}

			function v(e) {
				return e instanceof f || null != e && null != e._isAMomentObject
			}

			function g(e) {
				return 0 > e ? Math.ceil(e) : Math.floor(e)
			}

			function y(e) {
				var t = +e,
					n = 0;
				return 0 !== t && isFinite(t) && (n = g(t)), n
			}

			function b(e, t, n) {
				var r, o = Math.min(e.length, t.length),
					a = Math.abs(e.length - t.length),
					i = 0;
				for (r = 0; o > r; r++)(n && e[r] !== t[r] || !n && y(e[r]) !== y(t[r])) && i++;
				return i + a
			}

			function M(e) {
				n.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
			}

			function k(e, t) {
				var r = !0;
				return l(function() {
					return null != n.deprecationHandler && n.deprecationHandler(null, e), r && (M(e + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), r = !1), t.apply(this, arguments)
				}, t)
			}

			function w(e, t) {
				null != n.deprecationHandler && n.deprecationHandler(e, t), mr[e] || (M(t), mr[e] = !0)
			}

			function D(e) {
				return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
			}

			function L(e) {
				return "[object Object]" === Object.prototype.toString.call(e)
			}

			function T(e) {
				var t, n;
				for (n in e) t = e[n], D(t) ? this[n] = t : this["_" + n] = t;
				this._config = e, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
			}

			function Y(e, t) {
				var n, r = l({}, e);
				for (n in t) s(t, n) && (L(e[n]) && L(t[n]) ? (r[n] = {}, l(r[n], e[n]), l(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
				return r
			}

			function E(e) {
				null != e && this.set(e)
			}

			function S(e) {
				return e ? e.toLowerCase().replace("_", "-") : e
			}

			function x(e) {
				for (var t, n, r, o, a = 0; a < e.length;) {
					for (o = S(e[a]).split("-"), t = o.length, n = S(e[a + 1]), n = n ? n.split("-") : null; t > 0;) {
						if (r = N(o.slice(0, t).join("-"))) return r;
						if (n && n.length >= t && b(o, n, !0) >= t - 1) break;
						t--
					}
					a++
				}
				return null
			}

			function N(n) {
				var r = null;
				if (!vr[n] && "undefined" != typeof e && e && e.exports) try {
					r = _r._abbr, t(174)("./" + n), C(r)
				} catch (o) {}
				return vr[n]
			}

			function C(e, t) {
				var n;
				return e && (n = h(t) ? H(e) : O(e, t), n && (_r = n)), _r._abbr
			}

			function O(e, t) {
				return null !== t ? (t.abbr = e, null != vr[e] ? (w("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), t = Y(vr[e]._config, t)) : null != t.parentLocale && (null != vr[t.parentLocale] ? t = Y(vr[t.parentLocale]._config, t) : w("parentLocaleUndefined", "specified parentLocale is not defined yet")), vr[e] = new E(t), C(e), vr[e]) : (delete vr[e], null)
			}

			function P(e, t) {
				if (null != t) {
					var n;
					null != vr[e] && (t = Y(vr[e]._config, t)), n = new E(t), n.parentLocale = vr[e], vr[e] = n, C(e)
				} else null != vr[e] && (null != vr[e].parentLocale ? vr[e] = vr[e].parentLocale : null != vr[e] && delete vr[e]);
				return vr[e]
			}

			function H(e) {
				var t;
				if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return _r;
				if (!o(e)) {
					if (t = N(e)) return t;
					e = [e]
				}
				return x(e)
			}

			function I() {
				return hr(vr)
			}

			function j(e, t) {
				var n = e.toLowerCase();
				gr[n] = gr[n + "s"] = gr[t] = e
			}

			function A(e) {
				return "string" == typeof e ? gr[e] || gr[e.toLowerCase()] : void 0
			}

			function R(e) {
				var t, n, r = {};
				for (n in e) s(e, n) && (t = A(n), t && (r[t] = e[n]));
				return r
			}

			function V(e, t) {
				return function(r) {
					return null != r ? (W(this, e, r), n.updateOffset(this, t), this) : F(this, e)
				}
			}

			function F(e, t) {
				return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
			}

			function W(e, t, n) {
				e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n)
			}

			function U(e, t) {
				var n;
				if ("object" == typeof e)
					for (n in e) this.set(n, e[n]);
				else if (e = A(e), D(this[e])) return this[e](t);
				return this
			}

			function G(e, t, n) {
				var r = "" + Math.abs(e),
					o = t - r.length,
					a = e >= 0;
				return (a ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, o)).toString().substr(1) + r
			}

			function B(e, t, n, r) {
				var o = r;
				"string" == typeof r && (o = function() {
					return this[r]()
				}), e && (kr[e] = o), t && (kr[t[0]] = function() {
					return G(o.apply(this, arguments), t[1], t[2])
				}), n && (kr[n] = function() {
					return this.localeData().ordinal(o.apply(this, arguments), e)
				})
			}

			function z(e) {
				return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
			}

			function J(e) {
				var t, n, r = e.match(yr);
				for (t = 0, n = r.length; n > t; t++) kr[r[t]] ? r[t] = kr[r[t]] : r[t] = z(r[t]);
				return function(t) {
					var o, a = "";
					for (o = 0; n > o; o++) a += r[o] instanceof Function ? r[o].call(t, e) : r[o];
					return a
				}
			}

			function K(e, t) {
				return e.isValid() ? (t = q(t, e.localeData()), Mr[t] = Mr[t] || J(t), Mr[t](e)) : e.localeData().invalidDate()
			}

			function q(e, t) {
				function n(e) {
					return t.longDateFormat(e) || e
				}
				var r = 5;
				for (br.lastIndex = 0; r >= 0 && br.test(e);) e = e.replace(br, n), br.lastIndex = 0, r -= 1;
				return e
			}

			function Q(e, t, n) {
				Vr[e] = D(t) ? t : function(e, r) {
					return e && n ? n : t
				}
			}

			function X(e, t) {
				return s(Vr, e) ? Vr[e](t._strict, t._locale) : new RegExp(Z(e))
			}

			function Z(e) {
				return ee(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, o) {
					return t || n || r || o
				}))
			}

			function ee(e) {
				return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
			}

			function te(e, t) {
				var n, r = t;
				for ("string" == typeof e && (e = [e]), "number" == typeof t && (r = function(e, n) {
						n[t] = y(e)
					}), n = 0; n < e.length; n++) Fr[e[n]] = r
			}

			function ne(e, t) {
				te(e, function(e, n, r, o) {
					r._w = r._w || {}, t(e, r._w, r, o)
				})
			}

			function re(e, t, n) {
				null != t && s(Fr, e) && Fr[e](t, n._a, n, e)
			}

			function oe(e, t) {
				return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
			}

			function ae(e, t) {
				return o(this._months) ? this._months[e.month()] : this._months[Qr.test(t) ? "format" : "standalone"][e.month()]
			}

			function ie(e, t) {
				return o(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Qr.test(t) ? "format" : "standalone"][e.month()]
			}

			function se(e, t, n) {
				var r, o, a, i = e.toLocaleLowerCase();
				if (!this._monthsParse)
					for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; 12 > r; ++r) a = u([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(a, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(a, "").toLocaleLowerCase();
				return n ? "MMM" === t ? (o = fr.call(this._shortMonthsParse, i), -1 !== o ? o : null) : (o = fr.call(this._longMonthsParse, i), -1 !== o ? o : null) : "MMM" === t ? (o = fr.call(this._shortMonthsParse, i), -1 !== o ? o : (o = fr.call(this._longMonthsParse, i), -1 !== o ? o : null)) : (o = fr.call(this._longMonthsParse, i), -1 !== o ? o : (o = fr.call(this._shortMonthsParse, i), -1 !== o ? o : null))
			}

			function le(e, t, n) {
				var r, o, a;
				if (this._monthsParseExact) return se.call(this, e, t, n);
				for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; 12 > r; r++) {
					if (o = u([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(o, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(o, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (a = "^" + this.months(o, "") + "|^" + this.monthsShort(o, ""), this._monthsParse[r] = new RegExp(a.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r;
					if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r;
					if (!n && this._monthsParse[r].test(e)) return r
				}
			}

			function ue(e, t) {
				var n;
				if (!e.isValid()) return e;
				if ("string" == typeof t)
					if (/^\d+$/.test(t)) t = y(t);
					else if (t = e.localeData().monthsParse(t), "number" != typeof t) return e;
				return n = Math.min(e.date(), oe(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e
			}

			function de(e) {
				return null != e ? (ue(this, e), n.updateOffset(this, !0), this) : F(this, "Month")
			}

			function ce() {
				return oe(this.year(), this.month())
			}

			function pe(e) {
				return this._monthsParseExact ? (s(this, "_monthsRegex") || he.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex
			}

			function me(e) {
				return this._monthsParseExact ? (s(this, "_monthsRegex") || he.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex
			}

			function he() {
				function e(e, t) {
					return t.length - e.length
				}
				var t, n, r = [],
					o = [],
					a = [];
				for (t = 0; 12 > t; t++) n = u([2e3, t]), r.push(this.monthsShort(n, "")), o.push(this.months(n, "")), a.push(this.months(n, "")), a.push(this.monthsShort(n, ""));
				for (r.sort(e), o.sort(e), a.sort(e), t = 0; 12 > t; t++) r[t] = ee(r[t]), o[t] = ee(o[t]), a[t] = ee(a[t]);
				this._monthsRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i")
			}

			function _e(e) {
				var t, n = e._a;
				return n && -2 === c(e).overflow && (t = n[Wr] < 0 || n[Wr] > 11 ? Wr : n[Ur] < 1 || n[Ur] > oe(n[$r], n[Wr]) ? Ur : n[Gr] < 0 || n[Gr] > 24 || 24 === n[Gr] && (0 !== n[Br] || 0 !== n[zr] || 0 !== n[Jr]) ? Gr : n[Br] < 0 || n[Br] > 59 ? Br : n[zr] < 0 || n[zr] > 59 ? zr : n[Jr] < 0 || n[Jr] > 999 ? Jr : -1, c(e)._overflowDayOfYear && ($r > t || t > Ur) && (t = Ur), c(e)._overflowWeeks && -1 === t && (t = Kr), c(e)._overflowWeekday && -1 === t && (t = qr), c(e).overflow = t), e
			}

			function fe(e) {
				var t, n, r, o, a, i, s = e._i,
					l = no.exec(s) || ro.exec(s);
				if (l) {
					for (c(e).iso = !0, t = 0, n = ao.length; n > t; t++)
						if (ao[t][1].exec(l[1])) {
							o = ao[t][0], r = ao[t][2] !== !1;
							break
						}
					if (null == o) return void(e._isValid = !1);
					if (l[3]) {
						for (t = 0, n = io.length; n > t; t++)
							if (io[t][1].exec(l[3])) {
								a = (l[2] || " ") + io[t][0];
								break
							}
						if (null == a) return void(e._isValid = !1)
					}
					if (!r && null != a) return void(e._isValid = !1);
					if (l[4]) {
						if (!oo.exec(l[4])) return void(e._isValid = !1);
						i = "Z"
					}
					e._f = o + (a || "") + (i || ""), Ne(e)
				} else e._isValid = !1
			}

			function ve(e) {
				var t = so.exec(e._i);
				return null !== t ? void(e._d = new Date(+t[1])) : (fe(e), void(e._isValid === !1 && (delete e._isValid, n.createFromInputFallback(e))))
			}

			function ge(e, t, n, r, o, a, i) {
				var s = new Date(e, t, n, r, o, a, i);
				return 100 > e && e >= 0 && isFinite(s.getFullYear()) && s.setFullYear(e), s
			}

			function ye(e) {
				var t = new Date(Date.UTC.apply(null, arguments));
				return 100 > e && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
			}

			function be(e) {
				return Me(e) ? 366 : 365
			}

			function Me(e) {
				return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
			}

			function ke() {
				return Me(this.year())
			}

			function we(e, t, n) {
				var r = 7 + t - n,
					o = (7 + ye(e, 0, r).getUTCDay() - t) % 7;
				return -o + r - 1
			}

			function De(e, t, n, r, o) {
				var a, i, s = (7 + n - r) % 7,
					l = we(e, r, o),
					u = 1 + 7 * (t - 1) + s + l;
				return 0 >= u ? (a = e - 1, i = be(a) + u) : u > be(e) ? (a = e + 1, i = u - be(e)) : (a = e, i = u), {
					year: a,
					dayOfYear: i
				}
			}

			function Le(e, t, n) {
				var r, o, a = we(e.year(), t, n),
					i = Math.floor((e.dayOfYear() - a - 1) / 7) + 1;
				return 1 > i ? (o = e.year() - 1, r = i + Te(o, t, n)) : i > Te(e.year(), t, n) ? (r = i - Te(e.year(), t, n), o = e.year() + 1) : (o = e.year(), r = i), {
					week: r,
					year: o
				}
			}

			function Te(e, t, n) {
				var r = we(e, t, n),
					o = we(e + 1, t, n);
				return (be(e) - r + o) / 7
			}

			function Ye(e, t, n) {
				return null != e ? e : null != t ? t : n
			}

			function Ee(e) {
				var t = new Date(n.now());
				return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()]
			}

			function Se(e) {
				var t, n, r, o, a = [];
				if (!e._d) {
					for (r = Ee(e), e._w && null == e._a[Ur] && null == e._a[Wr] && xe(e), e._dayOfYear && (o = Ye(e._a[$r], r[$r]), e._dayOfYear > be(o) && (c(e)._overflowDayOfYear = !0), n = ye(o, 0, e._dayOfYear), e._a[Wr] = n.getUTCMonth(), e._a[Ur] = n.getUTCDate()), t = 0; 3 > t && null == e._a[t]; ++t) e._a[t] = a[t] = r[t];
					for (; 7 > t; t++) e._a[t] = a[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
					24 === e._a[Gr] && 0 === e._a[Br] && 0 === e._a[zr] && 0 === e._a[Jr] && (e._nextDay = !0, e._a[Gr] = 0), e._d = (e._useUTC ? ye : ge).apply(null, a), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[Gr] = 24)
				}
			}

			function xe(e) {
				var t, n, r, o, a, i, s, l;
				t = e._w, null != t.GG || null != t.W || null != t.E ? (a = 1, i = 4, n = Ye(t.GG, e._a[$r], Le(Re(), 1, 4).year), r = Ye(t.W, 1), o = Ye(t.E, 1), (1 > o || o > 7) && (l = !0)) : (a = e._locale._week.dow, i = e._locale._week.doy, n = Ye(t.gg, e._a[$r], Le(Re(), a, i).year), r = Ye(t.w, 1), null != t.d ? (o = t.d, (0 > o || o > 6) && (l = !0)) : null != t.e ? (o = t.e + a, (t.e < 0 || t.e > 6) && (l = !0)) : o = a), 1 > r || r > Te(n, a, i) ? c(e)._overflowWeeks = !0 : null != l ? c(e)._overflowWeekday = !0 : (s = De(n, r, o, a, i), e._a[$r] = s.year, e._dayOfYear = s.dayOfYear)
			}

			function Ne(e) {
				if (e._f === n.ISO_8601) return void fe(e);
				e._a = [], c(e).empty = !0;
				var t, r, o, a, i, s = "" + e._i,
					l = s.length,
					u = 0;
				for (o = q(e._f, e._locale).match(yr) || [], t = 0; t < o.length; t++) a = o[t], r = (s.match(X(a, e)) || [])[0], r && (i = s.substr(0, s.indexOf(r)), i.length > 0 && c(e).unusedInput.push(i), s = s.slice(s.indexOf(r) + r.length), u += r.length), kr[a] ? (r ? c(e).empty = !1 : c(e).unusedTokens.push(a), re(a, r, e)) : e._strict && !r && c(e).unusedTokens.push(a);
				c(e).charsLeftOver = l - u, s.length > 0 && c(e).unusedInput.push(s), c(e).bigHour === !0 && e._a[Gr] <= 12 && e._a[Gr] > 0 && (c(e).bigHour = void 0), c(e).parsedDateParts = e._a.slice(0), c(e).meridiem = e._meridiem, e._a[Gr] = Ce(e._locale, e._a[Gr], e._meridiem), Se(e), _e(e)
			}

			function Ce(e, t, n) {
				var r;
				return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (r = e.isPM(n), r && 12 > t && (t += 12), r || 12 !== t || (t = 0), t) : t
			}

			function Oe(e) {
				var t, n, r, o, a;
				if (0 === e._f.length) return c(e).invalidFormat = !0, void(e._d = new Date(NaN));
				for (o = 0; o < e._f.length; o++) a = 0, t = _({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[o], Ne(t), p(t) && (a += c(t).charsLeftOver, a += 10 * c(t).unusedTokens.length, c(t).score = a, (null == r || r > a) && (r = a, n = t));
				l(e, n || t)
			}

			function Pe(e) {
				if (!e._d) {
					var t = R(e._i);
					e._a = i([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
						return e && parseInt(e, 10)
					}), Se(e)
				}
			}

			function He(e) {
				var t = new f(_e(Ie(e)));
				return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t
			}

			function Ie(e) {
				var t = e._i,
					n = e._f;
				return e._locale = e._locale || H(e._l), null === t || void 0 === n && "" === t ? m({
					nullInput: !0
				}) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), v(t) ? new f(_e(t)) : (o(n) ? Oe(e) : n ? Ne(e) : a(t) ? e._d = t : je(e), p(e) || (e._d = null), e))
			}

			function je(e) {
				var t = e._i;
				void 0 === t ? e._d = new Date(n.now()) : a(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? ve(e) : o(t) ? (e._a = i(t.slice(0), function(e) {
					return parseInt(e, 10)
				}), Se(e)) : "object" == typeof t ? Pe(e) : "number" == typeof t ? e._d = new Date(t) : n.createFromInputFallback(e)
			}

			function Ae(e, t, n, r, o) {
				var a = {};
				return "boolean" == typeof n && (r = n, n = void 0), a._isAMomentObject = !0, a._useUTC = a._isUTC = o, a._l = n, a._i = e, a._f = t, a._strict = r, He(a)
			}

			function Re(e, t, n, r) {
				return Ae(e, t, n, r, !1)
			}

			function Ve(e, t) {
				var n, r;
				if (1 === t.length && o(t[0]) && (t = t[0]), !t.length) return Re();
				for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]);
				return n
			}

			function Fe() {
				var e = [].slice.call(arguments, 0);
				return Ve("isBefore", e)
			}

			function $e() {
				var e = [].slice.call(arguments, 0);
				return Ve("isAfter", e)
			}

			function We(e) {
				var t = R(e),
					n = t.year || 0,
					r = t.quarter || 0,
					o = t.month || 0,
					a = t.week || 0,
					i = t.day || 0,
					s = t.hour || 0,
					l = t.minute || 0,
					u = t.second || 0,
					d = t.millisecond || 0;
				this._milliseconds = +d + 1e3 * u + 6e4 * l + 1e3 * s * 60 * 60, this._days = +i + 7 * a, this._months = +o + 3 * r + 12 * n, this._data = {}, this._locale = H(), this._bubble()
			}

			function Ue(e) {
				return e instanceof We
			}

			function Ge(e, t) {
				B(e, 0, 0, function() {
					var e = this.utcOffset(),
						n = "+";
					return 0 > e && (e = -e, n = "-"), n + G(~~(e / 60), 2) + t + G(~~e % 60, 2)
				})
			}

			function Be(e, t) {
				var n = (t || "").match(e) || [],
					r = n[n.length - 1] || [],
					o = (r + "").match(mo) || ["-", 0, 0],
					a = +(60 * o[1]) + y(o[2]);
				return "+" === o[0] ? a : -a
			}

			function ze(e, t) {
				var r, o;
				return t._isUTC ? (r = t.clone(), o = (v(e) || a(e) ? e.valueOf() : Re(e).valueOf()) - r.valueOf(), r._d.setTime(r._d.valueOf() + o), n.updateOffset(r, !1), r) : Re(e).local()
			}

			function Je(e) {
				return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
			}

			function Ke(e, t) {
				var r, o = this._offset || 0;
				return this.isValid() ? null != e ? ("string" == typeof e ? e = Be(jr, e) : Math.abs(e) < 16 && (e = 60 * e), !this._isUTC && t && (r = Je(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), o !== e && (!t || this._changeInProgress ? pt(this, it(e - o, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, n.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? o : Je(this) : null != e ? this : NaN
			}

			function qe(e, t) {
				return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
			}

			function Qe(e) {
				return this.utcOffset(0, e)
			}

			function Xe(e) {
				return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Je(this), "m")), this
			}

			function Ze() {
				return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Be(Ir, this._i)), this
			}

			function et(e) {
				return this.isValid() ? (e = e ? Re(e).utcOffset() : 0, (this.utcOffset() - e) % 60 === 0) : !1
			}

			function tt() {
				return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
			}

			function nt() {
				if (!h(this._isDSTShifted)) return this._isDSTShifted;
				var e = {};
				if (_(e, this), e = Ie(e), e._a) {
					var t = e._isUTC ? u(e._a) : Re(e._a);
					this._isDSTShifted = this.isValid() && b(e._a, t.toArray()) > 0
				} else this._isDSTShifted = !1;
				return this._isDSTShifted
			}

			function rt() {
				return this.isValid() ? !this._isUTC : !1
			}

			function ot() {
				return this.isValid() ? this._isUTC : !1
			}

			function at() {
				return this.isValid() ? this._isUTC && 0 === this._offset : !1
			}

			function it(e, t) {
				var n, r, o, a = e,
					i = null;
				return Ue(e) ? a = {
					ms: e._milliseconds,
					d: e._days,
					M: e._months
				} : "number" == typeof e ? (a = {}, t ? a[t] = e : a.milliseconds = e) : (i = ho.exec(e)) ? (n = "-" === i[1] ? -1 : 1, a = {
					y: 0,
					d: y(i[Ur]) * n,
					h: y(i[Gr]) * n,
					m: y(i[Br]) * n,
					s: y(i[zr]) * n,
					ms: y(i[Jr]) * n
				}) : (i = _o.exec(e)) ? (n = "-" === i[1] ? -1 : 1, a = {
					y: st(i[2], n),
					M: st(i[3], n),
					w: st(i[4], n),
					d: st(i[5], n),
					h: st(i[6], n),
					m: st(i[7], n),
					s: st(i[8], n)
				}) : null == a ? a = {} : "object" == typeof a && ("from" in a || "to" in a) && (o = ut(Re(a.from), Re(a.to)), a = {}, a.ms = o.milliseconds, a.M = o.months), r = new We(a), Ue(e) && s(e, "_locale") && (r._locale = e._locale), r
			}

			function st(e, t) {
				var n = e && parseFloat(e.replace(",", "."));
				return (isNaN(n) ? 0 : n) * t
			}

			function lt(e, t) {
				var n = {
					milliseconds: 0,
					months: 0
				};
				return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n
			}

			function ut(e, t) {
				var n;
				return e.isValid() && t.isValid() ? (t = ze(t, e), e.isBefore(t) ? n = lt(e, t) : (n = lt(t, e), n.milliseconds = -n.milliseconds, n.months = -n.months), n) : {
					milliseconds: 0,
					months: 0
				}
			}

			function dt(e) {
				return 0 > e ? -1 * Math.round(-1 * e) : Math.round(e)
			}

			function ct(e, t) {
				return function(n, r) {
					var o, a;
					return null === r || isNaN(+r) || (w(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period)."), a = n, n = r, r = a), n = "string" == typeof n ? +n : n, o = it(n, r), pt(this, o, e), this
				}
			}

			function pt(e, t, r, o) {
				var a = t._milliseconds,
					i = dt(t._days),
					s = dt(t._months);
				e.isValid() && (o = null == o ? !0 : o, a && e._d.setTime(e._d.valueOf() + a * r), i && W(e, "Date", F(e, "Date") + i * r), s && ue(e, F(e, "Month") + s * r), o && n.updateOffset(e, i || s))
			}

			function mt(e, t) {
				var n = e || Re(),
					r = ze(n, this).startOf("day"),
					o = this.diff(r, "days", !0),
					a = -6 > o ? "sameElse" : -1 > o ? "lastWeek" : 0 > o ? "lastDay" : 1 > o ? "sameDay" : 2 > o ? "nextDay" : 7 > o ? "nextWeek" : "sameElse",
					i = t && (D(t[a]) ? t[a]() : t[a]);
				return this.format(i || this.localeData().calendar(a, this, Re(n)))
			}

			function ht() {
				return new f(this)
			}

			function _t(e, t) {
				var n = v(e) ? e : Re(e);
				return this.isValid() && n.isValid() ? (t = A(h(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) : !1
			}

			function ft(e, t) {
				var n = v(e) ? e : Re(e);
				return this.isValid() && n.isValid() ? (t = A(h(t) ? "millisecond" : t), "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) : !1
			}

			function vt(e, t, n, r) {
				return r = r || "()", ("(" === r[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === r[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
			}

			function gt(e, t) {
				var n, r = v(e) ? e : Re(e);
				return this.isValid() && r.isValid() ? (t = A(t || "millisecond"), "millisecond" === t ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) : !1
			}

			function yt(e, t) {
				return this.isSame(e, t) || this.isAfter(e, t)
			}

			function bt(e, t) {
				return this.isSame(e, t) || this.isBefore(e, t)
			}

			function Mt(e, t, n) {
				var r, o, a, i;
				return this.isValid() ? (r = ze(e, this), r.isValid() ? (o = 6e4 * (r.utcOffset() - this.utcOffset()), t = A(t), "year" === t || "month" === t || "quarter" === t ? (i = kt(this, r), "quarter" === t ? i /= 3 : "year" === t && (i /= 12)) : (a = this - r, i = "second" === t ? a / 1e3 : "minute" === t ? a / 6e4 : "hour" === t ? a / 36e5 : "day" === t ? (a - o) / 864e5 : "week" === t ? (a - o) / 6048e5 : a), n ? i : g(i)) : NaN) : NaN
			}

			function kt(e, t) {
				var n, r, o = 12 * (t.year() - e.year()) + (t.month() - e.month()),
					a = e.clone().add(o, "months");
				return 0 > t - a ? (n = e.clone().add(o - 1, "months"), r = (t - a) / (a - n)) : (n = e.clone().add(o + 1, "months"), r = (t - a) / (n - a)), -(o + r) || 0
			}

			function wt() {
				return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
			}

			function Dt() {
				var e = this.clone().utc();
				return 0 < e.year() && e.year() <= 9999 ? D(Date.prototype.toISOString) ? this.toDate().toISOString() : K(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : K(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
			}

			function Lt(e) {
				e || (e = this.isUtc() ? n.defaultFormatUtc : n.defaultFormat);
				var t = K(this, e);
				return this.localeData().postformat(t)
			}

			function Tt(e, t) {
				return this.isValid() && (v(e) && e.isValid() || Re(e).isValid()) ? it({
					to: this,
					from: e
				}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
			}

			function Yt(e) {
				return this.from(Re(), e)
			}

			function Et(e, t) {
				return this.isValid() && (v(e) && e.isValid() || Re(e).isValid()) ? it({
					from: this,
					to: e
				}).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
			}

			function St(e) {
				return this.to(Re(), e)
			}

			function xt(e) {
				var t;
				return void 0 === e ? this._locale._abbr : (t = H(e), null != t && (this._locale = t), this)
			}

			function Nt() {
				return this._locale
			}

			function Ct(e) {
				switch (e = A(e)) {
					case "year":
						this.month(0);
					case "quarter":
					case "month":
						this.date(1);
					case "week":
					case "isoWeek":
					case "day":
					case "date":
						this.hours(0);
					case "hour":
						this.minutes(0);
					case "minute":
						this.seconds(0);
					case "second":
						this.milliseconds(0)
				}
				return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
			}

			function Ot(e) {
				return e = A(e), void 0 === e || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
			}

			function Pt() {
				return this._d.valueOf() - 6e4 * (this._offset || 0)
			}

			function Ht() {
				return Math.floor(this.valueOf() / 1e3)
			}

			function It() {
				return this._offset ? new Date(this.valueOf()) : this._d
			}

			function jt() {
				var e = this;
				return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
			}

			function At() {
				var e = this;
				return {
					years: e.year(),
					months: e.month(),
					date: e.date(),
					hours: e.hours(),
					minutes: e.minutes(),
					seconds: e.seconds(),
					milliseconds: e.milliseconds()
				}
			}

			function Rt() {
				return this.isValid() ? this.toISOString() : null
			}

			function Vt() {
				return p(this)
			}

			function Ft() {
				return l({}, c(this))
			}

			function $t() {
				return c(this).overflow
			}

			function Wt() {
				return {
					input: this._i,
					format: this._f,
					locale: this._locale,
					isUTC: this._isUTC,
					strict: this._strict
				}
			}

			function Ut(e, t) {
				B(0, [e, e.length], 0, t)
			}

			function Gt(e) {
				return Kt.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
			}

			function Bt(e) {
				return Kt.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
			}

			function zt() {
				return Te(this.year(), 1, 4)
			}

			function Jt() {
				var e = this.localeData()._week;
				return Te(this.year(), e.dow, e.doy)
			}

			function Kt(e, t, n, r, o) {
				var a;
				return null == e ? Le(this, r, o).year : (a = Te(e, r, o), t > a && (t = a), qt.call(this, e, t, n, r, o))
			}

			function qt(e, t, n, r, o) {
				var a = De(e, t, n, r, o),
					i = ye(a.year, 0, a.dayOfYear);
				return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this
			}

			function Qt(e) {
				return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
			}

			function Xt(e) {
				return Le(e, this._week.dow, this._week.doy).week
			}

			function Zt() {
				return this._week.dow
			}

			function en() {
				return this._week.doy
			}

			function tn(e) {
				var t = this.localeData().week(this);
				return null == e ? t : this.add(7 * (e - t), "d")
			}

			function nn(e) {
				var t = Le(this, 1, 4).week;
				return null == e ? t : this.add(7 * (e - t), "d")
			}

			function rn(e, t) {
				return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e), "number" == typeof e ? e : null) : parseInt(e, 10);
			}

			function on(e, t) {
				return o(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()]
			}

			function an(e) {
				return this._weekdaysShort[e.day()]
			}

			function sn(e) {
				return this._weekdaysMin[e.day()]
			}

			function ln(e, t, n) {
				var r, o, a, i = e.toLocaleLowerCase();
				if (!this._weekdaysParse)
					for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; 7 > r; ++r) a = u([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(a, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(a, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(a, "").toLocaleLowerCase();
				return n ? "dddd" === t ? (o = fr.call(this._weekdaysParse, i), -1 !== o ? o : null) : "ddd" === t ? (o = fr.call(this._shortWeekdaysParse, i), -1 !== o ? o : null) : (o = fr.call(this._minWeekdaysParse, i), -1 !== o ? o : null) : "dddd" === t ? (o = fr.call(this._weekdaysParse, i), -1 !== o ? o : (o = fr.call(this._shortWeekdaysParse, i), -1 !== o ? o : (o = fr.call(this._minWeekdaysParse, i), -1 !== o ? o : null))) : "ddd" === t ? (o = fr.call(this._shortWeekdaysParse, i), -1 !== o ? o : (o = fr.call(this._weekdaysParse, i), -1 !== o ? o : (o = fr.call(this._minWeekdaysParse, i), -1 !== o ? o : null))) : (o = fr.call(this._minWeekdaysParse, i), -1 !== o ? o : (o = fr.call(this._weekdaysParse, i), -1 !== o ? o : (o = fr.call(this._shortWeekdaysParse, i), -1 !== o ? o : null)))
			}

			function un(e, t, n) {
				var r, o, a;
				if (this._weekdaysParseExact) return ln.call(this, e, t, n);
				for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; 7 > r; r++) {
					if (o = u([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(o, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(o, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(o, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[r] || (a = "^" + this.weekdays(o, "") + "|^" + this.weekdaysShort(o, "") + "|^" + this.weekdaysMin(o, ""), this._weekdaysParse[r] = new RegExp(a.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r;
					if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r;
					if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r;
					if (!n && this._weekdaysParse[r].test(e)) return r
				}
			}

			function dn(e) {
				if (!this.isValid()) return null != e ? this : NaN;
				var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
				return null != e ? (e = rn(e, this.localeData()), this.add(e - t, "d")) : t
			}

			function cn(e) {
				if (!this.isValid()) return null != e ? this : NaN;
				var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
				return null == e ? t : this.add(e - t, "d")
			}

			function pn(e) {
				return this.isValid() ? null == e ? this.day() || 7 : this.day(this.day() % 7 ? e : e - 7) : null != e ? this : NaN
			}

			function mn(e) {
				return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || fn.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex
			}

			function hn(e) {
				return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || fn.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex
			}

			function _n(e) {
				return this._weekdaysParseExact ? (s(this, "_weekdaysRegex") || fn.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex
			}

			function fn() {
				function e(e, t) {
					return t.length - e.length
				}
				var t, n, r, o, a, i = [],
					s = [],
					l = [],
					d = [];
				for (t = 0; 7 > t; t++) n = u([2e3, 1]).day(t), r = this.weekdaysMin(n, ""), o = this.weekdaysShort(n, ""), a = this.weekdays(n, ""), i.push(r), s.push(o), l.push(a), d.push(r), d.push(o), d.push(a);
				for (i.sort(e), s.sort(e), l.sort(e), d.sort(e), t = 0; 7 > t; t++) s[t] = ee(s[t]), l[t] = ee(l[t]), d[t] = ee(d[t]);
				this._weekdaysRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")
			}

			function vn(e) {
				var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
				return null == e ? t : this.add(e - t, "d")
			}

			function gn() {
				return this.hours() % 12 || 12
			}

			function yn() {
				return this.hours() || 24
			}

			function bn(e, t) {
				B(e, 0, 0, function() {
					return this.localeData().meridiem(this.hours(), this.minutes(), t)
				})
			}

			function Mn(e, t) {
				return t._meridiemParse
			}

			function kn(e) {
				return "p" === (e + "").toLowerCase().charAt(0)
			}

			function wn(e, t, n) {
				return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
			}

			function Dn(e, t) {
				t[Jr] = y(1e3 * ("0." + e))
			}

			function Ln() {
				return this._isUTC ? "UTC" : ""
			}

			function Tn() {
				return this._isUTC ? "Coordinated Universal Time" : ""
			}

			function Yn(e) {
				return Re(1e3 * e)
			}

			function En() {
				return Re.apply(null, arguments).parseZone()
			}

			function Sn(e, t, n) {
				var r = this._calendar[e];
				return D(r) ? r.call(t, n) : r
			}

			function xn(e) {
				var t = this._longDateFormat[e],
					n = this._longDateFormat[e.toUpperCase()];
				return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
					return e.slice(1)
				}), this._longDateFormat[e])
			}

			function Nn() {
				return this._invalidDate
			}

			function Cn(e) {
				return this._ordinal.replace("%d", e)
			}

			function On(e) {
				return e
			}

			function Pn(e, t, n, r) {
				var o = this._relativeTime[n];
				return D(o) ? o(e, t, n, r) : o.replace(/%d/i, e)
			}

			function Hn(e, t) {
				var n = this._relativeTime[e > 0 ? "future" : "past"];
				return D(n) ? n(t) : n.replace(/%s/i, t)
			}

			function In(e, t, n, r) {
				var o = H(),
					a = u().set(r, t);
				return o[n](a, e)
			}

			function jn(e, t, n) {
				if ("number" == typeof e && (t = e, e = void 0), e = e || "", null != t) return In(e, t, n, "month");
				var r, o = [];
				for (r = 0; 12 > r; r++) o[r] = In(e, r, n, "month");
				return o
			}

			function An(e, t, n, r) {
				"boolean" == typeof e ? ("number" == typeof t && (n = t, t = void 0), t = t || "") : (t = e, n = t, e = !1, "number" == typeof t && (n = t, t = void 0), t = t || "");
				var o = H(),
					a = e ? o._week.dow : 0;
				if (null != n) return In(t, (n + a) % 7, r, "day");
				var i, s = [];
				for (i = 0; 7 > i; i++) s[i] = In(t, (i + a) % 7, r, "day");
				return s
			}

			function Rn(e, t) {
				return jn(e, t, "months")
			}

			function Vn(e, t) {
				return jn(e, t, "monthsShort")
			}

			function Fn(e, t, n) {
				return An(e, t, n, "weekdays")
			}

			function $n(e, t, n) {
				return An(e, t, n, "weekdaysShort")
			}

			function Wn(e, t, n) {
				return An(e, t, n, "weekdaysMin")
			}

			function Un() {
				var e = this._data;
				return this._milliseconds = $o(this._milliseconds), this._days = $o(this._days), this._months = $o(this._months), e.milliseconds = $o(e.milliseconds), e.seconds = $o(e.seconds), e.minutes = $o(e.minutes), e.hours = $o(e.hours), e.months = $o(e.months), e.years = $o(e.years), this
			}

			function Gn(e, t, n, r) {
				var o = it(t, n);
				return e._milliseconds += r * o._milliseconds, e._days += r * o._days, e._months += r * o._months, e._bubble()
			}

			function Bn(e, t) {
				return Gn(this, e, t, 1)
			}

			function zn(e, t) {
				return Gn(this, e, t, -1)
			}

			function Jn(e) {
				return 0 > e ? Math.floor(e) : Math.ceil(e)
			}

			function Kn() {
				var e, t, n, r, o, a = this._milliseconds,
					i = this._days,
					s = this._months,
					l = this._data;
				return a >= 0 && i >= 0 && s >= 0 || 0 >= a && 0 >= i && 0 >= s || (a += 864e5 * Jn(Qn(s) + i), i = 0, s = 0), l.milliseconds = a % 1e3, e = g(a / 1e3), l.seconds = e % 60, t = g(e / 60), l.minutes = t % 60, n = g(t / 60), l.hours = n % 24, i += g(n / 24), o = g(qn(i)), s += o, i -= Jn(Qn(o)), r = g(s / 12), s %= 12, l.days = i, l.months = s, l.years = r, this
			}

			function qn(e) {
				return 4800 * e / 146097
			}

			function Qn(e) {
				return 146097 * e / 4800
			}

			function Xn(e) {
				var t, n, r = this._milliseconds;
				if (e = A(e), "month" === e || "year" === e) return t = this._days + r / 864e5, n = this._months + qn(t), "month" === e ? n : n / 12;
				switch (t = this._days + Math.round(Qn(this._months)), e) {
					case "week":
						return t / 7 + r / 6048e5;
					case "day":
						return t + r / 864e5;
					case "hour":
						return 24 * t + r / 36e5;
					case "minute":
						return 1440 * t + r / 6e4;
					case "second":
						return 86400 * t + r / 1e3;
					case "millisecond":
						return Math.floor(864e5 * t) + r;
					default:
						throw new Error("Unknown unit " + e)
				}
			}

			function Zn() {
				return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * y(this._months / 12)
			}

			function er(e) {
				return function() {
					return this.as(e)
				}
			}

			function tr(e) {
				return e = A(e), this[e + "s"]()
			}

			function nr(e) {
				return function() {
					return this._data[e]
				}
			}

			function rr() {
				return g(this.days() / 7)
			}

			function or(e, t, n, r, o) {
				return o.relativeTime(t || 1, !!n, e, r)
			}

			function ar(e, t, n) {
				var r = it(e).abs(),
					o = oa(r.as("s")),
					a = oa(r.as("m")),
					i = oa(r.as("h")),
					s = oa(r.as("d")),
					l = oa(r.as("M")),
					u = oa(r.as("y")),
					d = o < aa.s && ["s", o] || 1 >= a && ["m"] || a < aa.m && ["mm", a] || 1 >= i && ["h"] || i < aa.h && ["hh", i] || 1 >= s && ["d"] || s < aa.d && ["dd", s] || 1 >= l && ["M"] || l < aa.M && ["MM", l] || 1 >= u && ["y"] || ["yy", u];
				return d[2] = t, d[3] = +e > 0, d[4] = n, or.apply(null, d)
			}

			function ir(e, t) {
				return void 0 === aa[e] ? !1 : void 0 === t ? aa[e] : (aa[e] = t, !0)
			}

			function sr(e) {
				var t = this.localeData(),
					n = ar(this, !e, t);
				return e && (n = t.pastFuture(+this, n)), t.postformat(n)
			}

			function lr() {
				var e, t, n, r = ia(this._milliseconds) / 1e3,
					o = ia(this._days),
					a = ia(this._months);
				e = g(r / 60), t = g(e / 60), r %= 60, e %= 60, n = g(a / 12), a %= 12;
				var i = n,
					s = a,
					l = o,
					u = t,
					d = e,
					c = r,
					p = this.asSeconds();
				return p ? (0 > p ? "-" : "") + "P" + (i ? i + "Y" : "") + (s ? s + "M" : "") + (l ? l + "D" : "") + (u || d || c ? "T" : "") + (u ? u + "H" : "") + (d ? d + "M" : "") + (c ? c + "S" : "") : "P0D"
			}
			var ur, dr;
			dr = Array.prototype.some ? Array.prototype.some : function(e) {
				for (var t = Object(this), n = t.length >>> 0, r = 0; n > r; r++)
					if (r in t && e.call(this, t[r], r, t)) return !0;
				return !1
			};
			var cr = n.momentProperties = [],
				pr = !1,
				mr = {};
			n.suppressDeprecationWarnings = !1, n.deprecationHandler = null;
			var hr;
			hr = Object.keys ? Object.keys : function(e) {
				var t, n = [];
				for (t in e) s(e, t) && n.push(t);
				return n
			};
			var _r, fr, vr = {},
				gr = {},
				yr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
				br = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
				Mr = {},
				kr = {},
				wr = /\d/,
				Dr = /\d\d/,
				Lr = /\d{3}/,
				Tr = /\d{4}/,
				Yr = /[+-]?\d{6}/,
				Er = /\d\d?/,
				Sr = /\d\d\d\d?/,
				xr = /\d\d\d\d\d\d?/,
				Nr = /\d{1,3}/,
				Cr = /\d{1,4}/,
				Or = /[+-]?\d{1,6}/,
				Pr = /\d+/,
				Hr = /[+-]?\d+/,
				Ir = /Z|[+-]\d\d:?\d\d/gi,
				jr = /Z|[+-]\d\d(?::?\d\d)?/gi,
				Ar = /[+-]?\d+(\.\d{1,3})?/,
				Rr = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
				Vr = {},
				Fr = {},
				$r = 0,
				Wr = 1,
				Ur = 2,
				Gr = 3,
				Br = 4,
				zr = 5,
				Jr = 6,
				Kr = 7,
				qr = 8;
			fr = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
				var t;
				for (t = 0; t < this.length; ++t)
					if (this[t] === e) return t;
				return -1
			}, B("M", ["MM", 2], "Mo", function() {
				return this.month() + 1
			}), B("MMM", 0, 0, function(e) {
				return this.localeData().monthsShort(this, e)
			}), B("MMMM", 0, 0, function(e) {
				return this.localeData().months(this, e)
			}), j("month", "M"), Q("M", Er), Q("MM", Er, Dr), Q("MMM", function(e, t) {
				return t.monthsShortRegex(e)
			}), Q("MMMM", function(e, t) {
				return t.monthsRegex(e)
			}), te(["M", "MM"], function(e, t) {
				t[Wr] = y(e) - 1
			}), te(["MMM", "MMMM"], function(e, t, n, r) {
				var o = n._locale.monthsParse(e, r, n._strict);
				null != o ? t[Wr] = o : c(n).invalidMonth = e
			});
			var Qr = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
				Xr = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
				Zr = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
				eo = Rr,
				to = Rr,
				no = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
				ro = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
				oo = /Z|[+-]\d\d(?::?\d\d)?/,
				ao = [
					["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
					["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
					["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
					["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
					["YYYY-DDD", /\d{4}-\d{3}/],
					["YYYY-MM", /\d{4}-\d\d/, !1],
					["YYYYYYMMDD", /[+-]\d{10}/],
					["YYYYMMDD", /\d{8}/],
					["GGGG[W]WWE", /\d{4}W\d{3}/],
					["GGGG[W]WW", /\d{4}W\d{2}/, !1],
					["YYYYDDD", /\d{7}/]
				],
				io = [
					["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
					["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
					["HH:mm:ss", /\d\d:\d\d:\d\d/],
					["HH:mm", /\d\d:\d\d/],
					["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
					["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
					["HHmmss", /\d\d\d\d\d\d/],
					["HHmm", /\d\d\d\d/],
					["HH", /\d\d/]
				],
				so = /^\/?Date\((\-?\d+)/i;
			n.createFromInputFallback = k("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(e) {
				e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
			}), B("Y", 0, 0, function() {
				var e = this.year();
				return 9999 >= e ? "" + e : "+" + e
			}), B(0, ["YY", 2], 0, function() {
				return this.year() % 100
			}), B(0, ["YYYY", 4], 0, "year"), B(0, ["YYYYY", 5], 0, "year"), B(0, ["YYYYYY", 6, !0], 0, "year"), j("year", "y"), Q("Y", Hr), Q("YY", Er, Dr), Q("YYYY", Cr, Tr), Q("YYYYY", Or, Yr), Q("YYYYYY", Or, Yr), te(["YYYYY", "YYYYYY"], $r), te("YYYY", function(e, t) {
				t[$r] = 2 === e.length ? n.parseTwoDigitYear(e) : y(e)
			}), te("YY", function(e, t) {
				t[$r] = n.parseTwoDigitYear(e)
			}), te("Y", function(e, t) {
				t[$r] = parseInt(e, 10)
			}), n.parseTwoDigitYear = function(e) {
				return y(e) + (y(e) > 68 ? 1900 : 2e3)
			};
			var lo = V("FullYear", !0);
			n.ISO_8601 = function() {};
			var uo = k("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
					var e = Re.apply(null, arguments);
					return this.isValid() && e.isValid() ? this > e ? this : e : m()
				}),
				co = k("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
					var e = Re.apply(null, arguments);
					return this.isValid() && e.isValid() ? e > this ? this : e : m()
				}),
				po = function() {
					return Date.now ? Date.now() : +new Date
				};
			Ge("Z", ":"), Ge("ZZ", ""), Q("Z", jr), Q("ZZ", jr), te(["Z", "ZZ"], function(e, t, n) {
				n._useUTC = !0, n._tzm = Be(jr, e)
			});
			var mo = /([\+\-]|\d\d)/gi;
			n.updateOffset = function() {};
			var ho = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
				_o = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
			it.fn = We.prototype;
			var fo = ct(1, "add"),
				vo = ct(-1, "subtract");
			n.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", n.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
			var go = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
				return void 0 === e ? this.localeData() : this.locale(e)
			});
			B(0, ["gg", 2], 0, function() {
				return this.weekYear() % 100
			}), B(0, ["GG", 2], 0, function() {
				return this.isoWeekYear() % 100
			}), Ut("gggg", "weekYear"), Ut("ggggg", "weekYear"), Ut("GGGG", "isoWeekYear"), Ut("GGGGG", "isoWeekYear"), j("weekYear", "gg"), j("isoWeekYear", "GG"), Q("G", Hr), Q("g", Hr), Q("GG", Er, Dr), Q("gg", Er, Dr), Q("GGGG", Cr, Tr), Q("gggg", Cr, Tr), Q("GGGGG", Or, Yr), Q("ggggg", Or, Yr), ne(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
				t[r.substr(0, 2)] = y(e)
			}), ne(["gg", "GG"], function(e, t, r, o) {
				t[o] = n.parseTwoDigitYear(e)
			}), B("Q", 0, "Qo", "quarter"), j("quarter", "Q"), Q("Q", wr), te("Q", function(e, t) {
				t[Wr] = 3 * (y(e) - 1)
			}), B("w", ["ww", 2], "wo", "week"), B("W", ["WW", 2], "Wo", "isoWeek"), j("week", "w"), j("isoWeek", "W"), Q("w", Er), Q("ww", Er, Dr), Q("W", Er), Q("WW", Er, Dr), ne(["w", "ww", "W", "WW"], function(e, t, n, r) {
				t[r.substr(0, 1)] = y(e)
			});
			var yo = {
				dow: 0,
				doy: 6
			};
			B("D", ["DD", 2], "Do", "date"), j("date", "D"), Q("D", Er), Q("DD", Er, Dr), Q("Do", function(e, t) {
				return e ? t._ordinalParse : t._ordinalParseLenient
			}), te(["D", "DD"], Ur), te("Do", function(e, t) {
				t[Ur] = y(e.match(Er)[0], 10)
			});
			var bo = V("Date", !0);
			B("d", 0, "do", "day"), B("dd", 0, 0, function(e) {
				return this.localeData().weekdaysMin(this, e)
			}), B("ddd", 0, 0, function(e) {
				return this.localeData().weekdaysShort(this, e)
			}), B("dddd", 0, 0, function(e) {
				return this.localeData().weekdays(this, e)
			}), B("e", 0, 0, "weekday"), B("E", 0, 0, "isoWeekday"), j("day", "d"), j("weekday", "e"), j("isoWeekday", "E"), Q("d", Er), Q("e", Er), Q("E", Er), Q("dd", function(e, t) {
				return t.weekdaysMinRegex(e)
			}), Q("ddd", function(e, t) {
				return t.weekdaysShortRegex(e)
			}), Q("dddd", function(e, t) {
				return t.weekdaysRegex(e)
			}), ne(["dd", "ddd", "dddd"], function(e, t, n, r) {
				var o = n._locale.weekdaysParse(e, r, n._strict);
				null != o ? t.d = o : c(n).invalidWeekday = e
			}), ne(["d", "e", "E"], function(e, t, n, r) {
				t[r] = y(e)
			});
			var Mo = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
				ko = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
				wo = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
				Do = Rr,
				Lo = Rr,
				To = Rr;
			B("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), j("dayOfYear", "DDD"), Q("DDD", Nr), Q("DDDD", Lr), te(["DDD", "DDDD"], function(e, t, n) {
				n._dayOfYear = y(e)
			}), B("H", ["HH", 2], 0, "hour"), B("h", ["hh", 2], 0, gn), B("k", ["kk", 2], 0, yn), B("hmm", 0, 0, function() {
				return "" + gn.apply(this) + G(this.minutes(), 2)
			}), B("hmmss", 0, 0, function() {
				return "" + gn.apply(this) + G(this.minutes(), 2) + G(this.seconds(), 2)
			}), B("Hmm", 0, 0, function() {
				return "" + this.hours() + G(this.minutes(), 2)
			}), B("Hmmss", 0, 0, function() {
				return "" + this.hours() + G(this.minutes(), 2) + G(this.seconds(), 2)
			}), bn("a", !0), bn("A", !1), j("hour", "h"), Q("a", Mn), Q("A", Mn), Q("H", Er), Q("h", Er), Q("HH", Er, Dr), Q("hh", Er, Dr), Q("hmm", Sr), Q("hmmss", xr), Q("Hmm", Sr), Q("Hmmss", xr), te(["H", "HH"], Gr), te(["a", "A"], function(e, t, n) {
				n._isPm = n._locale.isPM(e), n._meridiem = e
			}), te(["h", "hh"], function(e, t, n) {
				t[Gr] = y(e), c(n).bigHour = !0
			}), te("hmm", function(e, t, n) {
				var r = e.length - 2;
				t[Gr] = y(e.substr(0, r)), t[Br] = y(e.substr(r)), c(n).bigHour = !0
			}), te("hmmss", function(e, t, n) {
				var r = e.length - 4,
					o = e.length - 2;
				t[Gr] = y(e.substr(0, r)), t[Br] = y(e.substr(r, 2)), t[zr] = y(e.substr(o)), c(n).bigHour = !0
			}), te("Hmm", function(e, t, n) {
				var r = e.length - 2;
				t[Gr] = y(e.substr(0, r)), t[Br] = y(e.substr(r))
			}), te("Hmmss", function(e, t, n) {
				var r = e.length - 4,
					o = e.length - 2;
				t[Gr] = y(e.substr(0, r)), t[Br] = y(e.substr(r, 2)), t[zr] = y(e.substr(o))
			});
			var Yo = /[ap]\.?m?\.?/i,
				Eo = V("Hours", !0);
			B("m", ["mm", 2], 0, "minute"), j("minute", "m"), Q("m", Er), Q("mm", Er, Dr), te(["m", "mm"], Br);
			var So = V("Minutes", !1);
			B("s", ["ss", 2], 0, "second"), j("second", "s"), Q("s", Er), Q("ss", Er, Dr), te(["s", "ss"], zr);
			var xo = V("Seconds", !1);
			B("S", 0, 0, function() {
				return ~~(this.millisecond() / 100)
			}), B(0, ["SS", 2], 0, function() {
				return ~~(this.millisecond() / 10)
			}), B(0, ["SSS", 3], 0, "millisecond"), B(0, ["SSSS", 4], 0, function() {
				return 10 * this.millisecond()
			}), B(0, ["SSSSS", 5], 0, function() {
				return 100 * this.millisecond()
			}), B(0, ["SSSSSS", 6], 0, function() {
				return 1e3 * this.millisecond()
			}), B(0, ["SSSSSSS", 7], 0, function() {
				return 1e4 * this.millisecond()
			}), B(0, ["SSSSSSSS", 8], 0, function() {
				return 1e5 * this.millisecond()
			}), B(0, ["SSSSSSSSS", 9], 0, function() {
				return 1e6 * this.millisecond()
			}), j("millisecond", "ms"), Q("S", Nr, wr), Q("SS", Nr, Dr), Q("SSS", Nr, Lr);
			var No;
			for (No = "SSSS"; No.length <= 9; No += "S") Q(No, Pr);
			for (No = "S"; No.length <= 9; No += "S") te(No, Dn);
			var Co = V("Milliseconds", !1);
			B("z", 0, 0, "zoneAbbr"), B("zz", 0, 0, "zoneName");
			var Oo = f.prototype;
			Oo.add = fo, Oo.calendar = mt, Oo.clone = ht, Oo.diff = Mt, Oo.endOf = Ot, Oo.format = Lt, Oo.from = Tt, Oo.fromNow = Yt, Oo.to = Et, Oo.toNow = St, Oo.get = U, Oo.invalidAt = $t, Oo.isAfter = _t, Oo.isBefore = ft, Oo.isBetween = vt, Oo.isSame = gt, Oo.isSameOrAfter = yt, Oo.isSameOrBefore = bt, Oo.isValid = Vt, Oo.lang = go, Oo.locale = xt, Oo.localeData = Nt, Oo.max = co, Oo.min = uo, Oo.parsingFlags = Ft, Oo.set = U, Oo.startOf = Ct, Oo.subtract = vo, Oo.toArray = jt, Oo.toObject = At, Oo.toDate = It, Oo.toISOString = Dt, Oo.toJSON = Rt, Oo.toString = wt, Oo.unix = Ht, Oo.valueOf = Pt, Oo.creationData = Wt, Oo.year = lo, Oo.isLeapYear = ke, Oo.weekYear = Gt, Oo.isoWeekYear = Bt, Oo.quarter = Oo.quarters = Qt, Oo.month = de, Oo.daysInMonth = ce, Oo.week = Oo.weeks = tn, Oo.isoWeek = Oo.isoWeeks = nn, Oo.weeksInYear = Jt, Oo.isoWeeksInYear = zt, Oo.date = bo, Oo.day = Oo.days = dn, Oo.weekday = cn, Oo.isoWeekday = pn, Oo.dayOfYear = vn, Oo.hour = Oo.hours = Eo, Oo.minute = Oo.minutes = So, Oo.second = Oo.seconds = xo, Oo.millisecond = Oo.milliseconds = Co, Oo.utcOffset = Ke, Oo.utc = Qe, Oo.local = Xe, Oo.parseZone = Ze, Oo.hasAlignedHourOffset = et, Oo.isDST = tt, Oo.isDSTShifted = nt, Oo.isLocal = rt, Oo.isUtcOffset = ot, Oo.isUtc = at, Oo.isUTC = at, Oo.zoneAbbr = Ln, Oo.zoneName = Tn, Oo.dates = k("dates accessor is deprecated. Use date instead.", bo), Oo.months = k("months accessor is deprecated. Use month instead", de), Oo.years = k("years accessor is deprecated. Use year instead", lo), Oo.zone = k("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", qe);
			var Po = Oo,
				Ho = {
					sameDay: "[Today at] LT",
					nextDay: "[Tomorrow at] LT",
					nextWeek: "dddd [at] LT",
					lastDay: "[Yesterday at] LT",
					lastWeek: "[Last] dddd [at] LT",
					sameElse: "L"
				},
				Io = {
					LTS: "h:mm:ss A",
					LT: "h:mm A",
					L: "MM/DD/YYYY",
					LL: "MMMM D, YYYY",
					LLL: "MMMM D, YYYY h:mm A",
					LLLL: "dddd, MMMM D, YYYY h:mm A"
				},
				jo = "Invalid date",
				Ao = "%d",
				Ro = /\d{1,2}/,
				Vo = {
					future: "in %s",
					past: "%s ago",
					s: "a few seconds",
					m: "a minute",
					mm: "%d minutes",
					h: "an hour",
					hh: "%d hours",
					d: "a day",
					dd: "%d days",
					M: "a month",
					MM: "%d months",
					y: "a year",
					yy: "%d years"
				},
				Fo = E.prototype;
			Fo._calendar = Ho, Fo.calendar = Sn, Fo._longDateFormat = Io, Fo.longDateFormat = xn, Fo._invalidDate = jo, Fo.invalidDate = Nn, Fo._ordinal = Ao, Fo.ordinal = Cn, Fo._ordinalParse = Ro, Fo.preparse = On, Fo.postformat = On, Fo._relativeTime = Vo, Fo.relativeTime = Pn, Fo.pastFuture = Hn, Fo.set = T, Fo.months = ae, Fo._months = Xr, Fo.monthsShort = ie, Fo._monthsShort = Zr, Fo.monthsParse = le, Fo._monthsRegex = to, Fo.monthsRegex = me, Fo._monthsShortRegex = eo, Fo.monthsShortRegex = pe, Fo.week = Xt, Fo._week = yo, Fo.firstDayOfYear = en, Fo.firstDayOfWeek = Zt, Fo.weekdays = on, Fo._weekdays = Mo, Fo.weekdaysMin = sn, Fo._weekdaysMin = wo, Fo.weekdaysShort = an, Fo._weekdaysShort = ko, Fo.weekdaysParse = un, Fo._weekdaysRegex = Do, Fo.weekdaysRegex = mn, Fo._weekdaysShortRegex = Lo, Fo.weekdaysShortRegex = hn, Fo._weekdaysMinRegex = To, Fo.weekdaysMinRegex = _n, Fo.isPM = kn, Fo._meridiemParse = Yo, Fo.meridiem = wn, C("en", {
				ordinalParse: /\d{1,2}(th|st|nd|rd)/,
				ordinal: function(e) {
					var t = e % 10,
						n = 1 === y(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
					return e + n
				}
			}), n.lang = k("moment.lang is deprecated. Use moment.locale instead.", C), n.langData = k("moment.langData is deprecated. Use moment.localeData instead.", H);
			var $o = Math.abs,
				Wo = er("ms"),
				Uo = er("s"),
				Go = er("m"),
				Bo = er("h"),
				zo = er("d"),
				Jo = er("w"),
				Ko = er("M"),
				qo = er("y"),
				Qo = nr("milliseconds"),
				Xo = nr("seconds"),
				Zo = nr("minutes"),
				ea = nr("hours"),
				ta = nr("days"),
				na = nr("months"),
				ra = nr("years"),
				oa = Math.round,
				aa = {
					s: 45,
					m: 45,
					h: 22,
					d: 26,
					M: 11
				},
				ia = Math.abs,
				sa = We.prototype;
			sa.abs = Un, sa.add = Bn, sa.subtract = zn, sa.as = Xn, sa.asMilliseconds = Wo, sa.asSeconds = Uo, sa.asMinutes = Go, sa.asHours = Bo, sa.asDays = zo, sa.asWeeks = Jo, sa.asMonths = Ko, sa.asYears = qo, sa.valueOf = Zn, sa._bubble = Kn, sa.get = tr, sa.milliseconds = Qo, sa.seconds = Xo, sa.minutes = Zo, sa.hours = ea, sa.days = ta, sa.weeks = rr, sa.months = na, sa.years = ra, sa.humanize = sr, sa.toISOString = lr, sa.toString = lr, sa.toJSON = lr, sa.locale = xt, sa.localeData = Nt, sa.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", lr), sa.lang = go, B("X", 0, 0, "unix"), B("x", 0, 0, "valueOf"), Q("x", Hr), Q("X", Ar), te("X", function(e, t, n) {
				n._d = new Date(1e3 * parseFloat(e, 10))
			}), te("x", function(e, t, n) {
				n._d = new Date(y(e))
			}), n.version = "2.13.0", r(Re), n.fn = Po, n.min = Fe, n.max = $e, n.now = po, n.utc = u, n.unix = Yn, n.months = Rn, n.isDate = a, n.locale = C, n.invalid = m, n.duration = it, n.isMoment = v, n.weekdays = Fn, n.parseZone = En, n.localeData = H, n.isDuration = Ue, n.monthsShort = Vn, n.weekdaysMin = Wn, n.defineLocale = O, n.updateLocale = P, n.locales = I, n.weekdaysShort = $n, n.normalizeUnits = A, n.relativeTimeThreshold = ir, n.prototype = Po;
			var la = n;
			return la
		})
	}).call(exports, t(173)(e))
}, function(e, exports) {
	e.exports = function(e) {
		return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children = [], e.webpackPolyfill = 1), e
	}
}, function(e, exports, t) {
	function n(e) {
		return t(r(e))
	}

	function r(e) {
		return o[e] || function() {
			throw new Error("Cannot find module '" + e + "'.")
		}()
	}
	var o = {
		"./af": 175,
		"./af.js": 175,
		"./ar": 176,
		"./ar-ma": 177,
		"./ar-ma.js": 177,
		"./ar-sa": 178,
		"./ar-sa.js": 178,
		"./ar-tn": 179,
		"./ar-tn.js": 179,
		"./ar.js": 176,
		"./az": 180,
		"./az.js": 180,
		"./be": 181,
		"./be.js": 181,
		"./bg": 182,
		"./bg.js": 182,
		"./bn": 183,
		"./bn.js": 183,
		"./bo": 184,
		"./bo.js": 184,
		"./br": 185,
		"./br.js": 185,
		"./bs": 186,
		"./bs.js": 186,
		"./ca": 187,
		"./ca.js": 187,
		"./cs": 188,
		"./cs.js": 188,
		"./cv": 189,
		"./cv.js": 189,
		"./cy": 190,
		"./cy.js": 190,
		"./da": 191,
		"./da.js": 191,
		"./de": 192,
		"./de-at": 193,
		"./de-at.js": 193,
		"./de.js": 192,
		"./dv": 194,
		"./dv.js": 194,
		"./el": 195,
		"./el.js": 195,
		"./en-au": 196,
		"./en-au.js": 196,
		"./en-ca": 197,
		"./en-ca.js": 197,
		"./en-gb": 198,
		"./en-gb.js": 198,
		"./en-ie": 199,
		"./en-ie.js": 199,
		"./en-nz": 200,
		"./en-nz.js": 200,
		"./eo": 201,
		"./eo.js": 201,
		"./es": 202,
		"./es.js": 202,
		"./et": 203,
		"./et.js": 203,
		"./eu": 204,
		"./eu.js": 204,
		"./fa": 205,
		"./fa.js": 205,
		"./fi": 206,
		"./fi.js": 206,
		"./fo": 207,
		"./fo.js": 207,
		"./fr": 208,
		"./fr-ca": 209,
		"./fr-ca.js": 209,
		"./fr-ch": 210,
		"./fr-ch.js": 210,
		"./fr.js": 208,
		"./fy": 211,
		"./fy.js": 211,
		"./gd": 212,
		"./gd.js": 212,
		"./gl": 213,
		"./gl.js": 213,
		"./he": 214,
		"./he.js": 214,
		"./hi": 215,
		"./hi.js": 215,
		"./hr": 216,
		"./hr.js": 216,
		"./hu": 217,
		"./hu.js": 217,
		"./hy-am": 218,
		"./hy-am.js": 218,
		"./id": 219,
		"./id.js": 219,
		"./is": 220,
		"./is.js": 220,
		"./it": 221,
		"./it.js": 221,
		"./ja": 222,
		"./ja.js": 222,
		"./jv": 223,
		"./jv.js": 223,
		"./ka": 224,
		"./ka.js": 224,
		"./kk": 225,
		"./kk.js": 225,
		"./km": 226,
		"./km.js": 226,
		"./ko": 227,
		"./ko.js": 227,
		"./ky": 228,
		"./ky.js": 228,
		"./lb": 229,
		"./lb.js": 229,
		"./lo": 230,
		"./lo.js": 230,
		"./lt": 231,
		"./lt.js": 231,
		"./lv": 232,
		"./lv.js": 232,
		"./me": 233,
		"./me.js": 233,
		"./mk": 234,
		"./mk.js": 234,
		"./ml": 235,
		"./ml.js": 235,
		"./mr": 236,
		"./mr.js": 236,
		"./ms": 237,
		"./ms-my": 238,
		"./ms-my.js": 238,
		"./ms.js": 237,
		"./my": 239,
		"./my.js": 239,
		"./nb": 240,
		"./nb.js": 240,
		"./ne": 241,
		"./ne.js": 241,
		"./nl": 242,
		"./nl.js": 242,
		"./nn": 243,
		"./nn.js": 243,
		"./pa-in": 244,
		"./pa-in.js": 244,
		"./pl": 245,
		"./pl.js": 245,
		"./pt": 246,
		"./pt-br": 247,
		"./pt-br.js": 247,
		"./pt.js": 246,
		"./ro": 248,
		"./ro.js": 248,
		"./ru": 249,
		"./ru.js": 249,
		"./se": 250,
		"./se.js": 250,
		"./si": 251,
		"./si.js": 251,
		"./sk": 252,
		"./sk.js": 252,
		"./sl": 253,
		"./sl.js": 253,
		"./sq": 254,
		"./sq.js": 254,
		"./sr": 255,
		"./sr-cyrl": 256,
		"./sr-cyrl.js": 256,
		"./sr.js": 255,
		"./ss": 257,
		"./ss.js": 257,
		"./sv": 258,
		"./sv.js": 258,
		"./sw": 259,
		"./sw.js": 259,
		"./ta": 260,
		"./ta.js": 260,
		"./te": 261,
		"./te.js": 261,
		"./th": 262,
		"./th.js": 262,
		"./tl-ph": 263,
		"./tl-ph.js": 263,
		"./tlh": 264,
		"./tlh.js": 264,
		"./tr": 265,
		"./tr.js": 265,
		"./tzl": 266,
		"./tzl.js": 266,
		"./tzm": 267,
		"./tzm-latn": 268,
		"./tzm-latn.js": 268,
		"./tzm.js": 267,
		"./uk": 269,
		"./uk.js": 269,
		"./uz": 270,
		"./uz.js": 270,
		"./vi": 271,
		"./vi.js": 271,
		"./x-pseudo": 272,
		"./x-pseudo.js": 272,
		"./zh-cn": 273,
		"./zh-cn.js": 273,
		"./zh-tw": 274,
		"./zh-tw.js": 274
	};
	n.keys = function() {
		return Object.keys(o)
	}, n.resolve = r, e.exports = n, n.id = 174
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("af", {
			months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
			weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
			weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
			meridiemParse: /vm|nm/i,
			isPM: function(e) {
				return /^nm$/i.test(e)
			},
			meridiem: function(e, t, n) {
				return 12 > e ? n ? "vm" : "VM" : n ? "nm" : "NM"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Vandag om] LT",
				nextDay: "[MÃ´re om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[Gister om] LT",
				lastWeek: "[Laas] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oor %s",
				past: "%s gelede",
				s: "'n paar sekondes",
				m: "'n minuut",
				mm: "%d minute",
				h: "'n uur",
				hh: "%d ure",
				d: "'n dag",
				dd: "%d dae",
				M: "'n maand",
				MM: "%d maande",
				y: "'n jaar",
				yy: "%d jaar"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function(e) {
				return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "Ù¡",
				2: "Ù¢",
				3: "Ù£",
				4: "Ù¤",
				5: "Ù¥",
				6: "Ù¦",
				7: "Ù§",
				8: "Ù¨",
				9: "Ù©",
				0: "Ù "
			},
			n = {
				"Ù¡": "1",
				"Ù¢": "2",
				"Ù£": "3",
				"Ù¤": "4",
				"Ù¥": "5",
				"Ù¦": "6",
				"Ù§": "7",
				"Ù¨": "8",
				"Ù©": "9",
				"Ù ": "0"
			},
			r = function(e) {
				return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && 10 >= e % 100 ? 3 : e % 100 >= 11 ? 4 : 5
			},
			o = {
				s: ["Ø£Ù‚Ù„ Ù…Ù† Ø«Ø§Ù†ÙŠØ©", "Ø«Ø§Ù†ÙŠØ© ÙˆØ§Ø­Ø¯Ø©", ["Ø«Ø§Ù†ÙŠØªØ§Ù†", "Ø«Ø§Ù†ÙŠØªÙŠÙ†"], "%d Ø«ÙˆØ§Ù†", "%d Ø«Ø§Ù†ÙŠØ©", "%d Ø«Ø§Ù†ÙŠØ©"],
				m: ["Ø£Ù‚Ù„ Ù…Ù† Ø¯Ù‚ÙŠÙ‚Ø©", "Ø¯Ù‚ÙŠÙ‚Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø¯Ù‚ÙŠÙ‚ØªØ§Ù†", "Ø¯Ù‚ÙŠÙ‚ØªÙŠÙ†"], "%d Ø¯Ù‚Ø§Ø¦Ù‚", "%d Ø¯Ù‚ÙŠÙ‚Ø©", "%d Ø¯Ù‚ÙŠÙ‚Ø©"],
				h: ["Ø£Ù‚Ù„ Ù…Ù† Ø³Ø§Ø¹Ø©", "Ø³Ø§Ø¹Ø© ÙˆØ§Ø­Ø¯Ø©", ["Ø³Ø§Ø¹ØªØ§Ù†", "Ø³Ø§Ø¹ØªÙŠÙ†"], "%d Ø³Ø§Ø¹Ø§Øª", "%d Ø³Ø§Ø¹Ø©", "%d Ø³Ø§Ø¹Ø©"],
				d: ["Ø£Ù‚Ù„ Ù…Ù† ÙŠÙˆÙ…", "ÙŠÙˆÙ… ÙˆØ§Ø­Ø¯", ["ÙŠÙˆÙ…Ø§Ù†", "ÙŠÙˆÙ…ÙŠÙ†"], "%d Ø£ÙŠØ§Ù…", "%d ÙŠÙˆÙ…Ù‹Ø§", "%d ÙŠÙˆÙ…"],
				M: ["Ø£Ù‚Ù„ Ù…Ù† Ø´Ù‡Ø±", "Ø´Ù‡Ø± ÙˆØ§Ø­Ø¯", ["Ø´Ù‡Ø±Ø§Ù†", "Ø´Ù‡Ø±ÙŠÙ†"], "%d Ø£Ø´Ù‡Ø±", "%d Ø´Ù‡Ø±Ø§", "%d Ø´Ù‡Ø±"],
				y: ["Ø£Ù‚Ù„ Ù…Ù† Ø¹Ø§Ù…", "Ø¹Ø§Ù… ÙˆØ§Ø­Ø¯", ["Ø¹Ø§Ù…Ø§Ù†", "Ø¹Ø§Ù…ÙŠÙ†"], "%d Ø£Ø¹ÙˆØ§Ù…", "%d Ø¹Ø§Ù…Ù‹Ø§", "%d Ø¹Ø§Ù…"]
			},
			a = function(e) {
				return function(t, n, a, i) {
					var s = r(t),
						l = o[e][r(t)];
					return 2 === s && (l = l[n ? 0 : 1]), l.replace(/%d/i, t)
				}
			},
			i = ["ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ ÙŠÙ†Ø§ÙŠØ±", "Ø´Ø¨Ø§Ø· ÙØ¨Ø±Ø§ÙŠØ±", "Ø¢Ø°Ø§Ø± Ù…Ø§Ø±Ø³", "Ù†ÙŠØ³Ø§Ù† Ø£Ø¨Ø±ÙŠÙ„", "Ø£ÙŠØ§Ø± Ù…Ø§ÙŠÙˆ", "Ø­Ø²ÙŠØ±Ø§Ù† ÙŠÙˆÙ†ÙŠÙˆ", "ØªÙ…ÙˆØ² ÙŠÙˆÙ„ÙŠÙˆ", "Ø¢Ø¨ Ø£ØºØ³Ø·Ø³", "Ø£ÙŠÙ„ÙˆÙ„ Ø³Ø¨ØªÙ…Ø¨Ø±", "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø£ÙˆÙ„ Ø£ÙƒØªÙˆØ¨Ø±", "ØªØ´Ø±ÙŠÙ† Ø§Ù„Ø«Ø§Ù†ÙŠ Ù†ÙˆÙÙ…Ø¨Ø±", "ÙƒØ§Ù†ÙˆÙ† Ø§Ù„Ø£ÙˆÙ„ Ø¯ÙŠØ³Ù…Ø¨Ø±"],
			s = e.defineLocale("ar", {
				months: i,
				monthsShort: i,
				weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
				weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
				weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/â€M/â€YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				meridiemParse: /Øµ|Ù…/,
				isPM: function(e) {
					return "Ù…" === e
				},
				meridiem: function(e, t, n) {
					return 12 > e ? "Øµ" : "Ù…"
				},
				calendar: {
					sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
					nextDay: "[ØºØ¯Ù‹Ø§ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
					nextWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
					lastDay: "[Ø£Ù…Ø³ Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
					lastWeek: "dddd [Ø¹Ù†Ø¯ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "Ø¨Ø¹Ø¯ %s",
					past: "Ù…Ù†Ø° %s",
					s: a("s"),
					m: a("m"),
					mm: a("m"),
					h: a("h"),
					hh: a("h"),
					d: a("d"),
					dd: a("d"),
					M: a("M"),
					MM: a("M"),
					y: a("y"),
					yy: a("y")
				},
				preparse: function(e) {
					return e.replace(/\u200f/g, "").replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function(e) {
						return n[e]
					}).replace(/ØŒ/g, ",")
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					}).replace(/,/g, "ØŒ")
				},
				week: {
					dow: 6,
					doy: 12
				}
			});
		return s
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ar-ma", {
			months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
			monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆØ²_ØºØ´Øª_Ø´ØªÙ†Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙ†Ø¨Ø±_Ø¯Ø¬Ù†Ø¨Ø±".split("_"),
			weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥ØªÙ†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
			weekdaysShort: "Ø§Ø­Ø¯_Ø§ØªÙ†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
			weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
				nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
				nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
				lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
				lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ÙÙŠ %s",
				past: "Ù…Ù†Ø° %s",
				s: "Ø«ÙˆØ§Ù†",
				m: "Ø¯Ù‚ÙŠÙ‚Ø©",
				mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
				h: "Ø³Ø§Ø¹Ø©",
				hh: "%d Ø³Ø§Ø¹Ø§Øª",
				d: "ÙŠÙˆÙ…",
				dd: "%d Ø£ÙŠØ§Ù…",
				M: "Ø´Ù‡Ø±",
				MM: "%d Ø£Ø´Ù‡Ø±",
				y: "Ø³Ù†Ø©",
				yy: "%d Ø³Ù†ÙˆØ§Øª"
			},
			week: {
				dow: 6,
				doy: 12
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "Ù¡",
				2: "Ù¢",
				3: "Ù£",
				4: "Ù¤",
				5: "Ù¥",
				6: "Ù¦",
				7: "Ù§",
				8: "Ù¨",
				9: "Ù©",
				0: "Ù "
			},
			n = {
				"Ù¡": "1",
				"Ù¢": "2",
				"Ù£": "3",
				"Ù¤": "4",
				"Ù¥": "5",
				"Ù¦": "6",
				"Ù§": "7",
				"Ù¨": "8",
				"Ù©": "9",
				"Ù ": "0"
			},
			r = e.defineLocale("ar-sa", {
				months: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
				monthsShort: "ÙŠÙ†Ø§ÙŠØ±_ÙØ¨Ø±Ø§ÙŠØ±_Ù…Ø§Ø±Ø³_Ø£Ø¨Ø±ÙŠÙ„_Ù…Ø§ÙŠÙˆ_ÙŠÙˆÙ†ÙŠÙˆ_ÙŠÙˆÙ„ÙŠÙˆ_Ø£ØºØ³Ø·Ø³_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
				weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
				weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
				weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				meridiemParse: /Øµ|Ù…/,
				isPM: function(e) {
					return "Ù…" === e
				},
				meridiem: function(e, t, n) {
					return 12 > e ? "Øµ" : "Ù…"
				},
				calendar: {
					sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
					nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
					nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
					lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
					lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "ÙÙŠ %s",
					past: "Ù…Ù†Ø° %s",
					s: "Ø«ÙˆØ§Ù†",
					m: "Ø¯Ù‚ÙŠÙ‚Ø©",
					mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
					h: "Ø³Ø§Ø¹Ø©",
					hh: "%d Ø³Ø§Ø¹Ø§Øª",
					d: "ÙŠÙˆÙ…",
					dd: "%d Ø£ÙŠØ§Ù…",
					M: "Ø´Ù‡Ø±",
					MM: "%d Ø£Ø´Ù‡Ø±",
					y: "Ø³Ù†Ø©",
					yy: "%d Ø³Ù†ÙˆØ§Øª"
				},
				preparse: function(e) {
					return e.replace(/[Ù¡Ù¢Ù£Ù¤Ù¥Ù¦Ù§Ù¨Ù©Ù ]/g, function(e) {
						return n[e]
					}).replace(/ØŒ/g, ",")
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					}).replace(/,/g, "ØŒ")
				},
				week: {
					dow: 6,
					doy: 12
				}
			});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ar-tn", {
			months: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
			monthsShort: "Ø¬Ø§Ù†ÙÙŠ_ÙÙŠÙØ±ÙŠ_Ù…Ø§Ø±Ø³_Ø£ÙØ±ÙŠÙ„_Ù…Ø§ÙŠ_Ø¬ÙˆØ§Ù†_Ø¬ÙˆÙŠÙ„ÙŠØ©_Ø£ÙˆØª_Ø³Ø¨ØªÙ…Ø¨Ø±_Ø£ÙƒØªÙˆØ¨Ø±_Ù†ÙˆÙÙ…Ø¨Ø±_Ø¯ÙŠØ³Ù…Ø¨Ø±".split("_"),
			weekdays: "Ø§Ù„Ø£Ø­Ø¯_Ø§Ù„Ø¥Ø«Ù†ÙŠÙ†_Ø§Ù„Ø«Ù„Ø§Ø«Ø§Ø¡_Ø§Ù„Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø§Ù„Ø®Ù…ÙŠØ³_Ø§Ù„Ø¬Ù…Ø¹Ø©_Ø§Ù„Ø³Ø¨Øª".split("_"),
			weekdaysShort: "Ø£Ø­Ø¯_Ø¥Ø«Ù†ÙŠÙ†_Ø«Ù„Ø§Ø«Ø§Ø¡_Ø£Ø±Ø¨Ø¹Ø§Ø¡_Ø®Ù…ÙŠØ³_Ø¬Ù…Ø¹Ø©_Ø³Ø¨Øª".split("_"),
			weekdaysMin: "Ø­_Ù†_Ø«_Ø±_Ø®_Ø¬_Ø³".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Ø§Ù„ÙŠÙˆÙ… Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
				nextDay: "[ØºØ¯Ø§ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
				nextWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
				lastDay: "[Ø£Ù…Ø³ Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
				lastWeek: "dddd [Ø¹Ù„Ù‰ Ø§Ù„Ø³Ø§Ø¹Ø©] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ÙÙŠ %s",
				past: "Ù…Ù†Ø° %s",
				s: "Ø«ÙˆØ§Ù†",
				m: "Ø¯Ù‚ÙŠÙ‚Ø©",
				mm: "%d Ø¯Ù‚Ø§Ø¦Ù‚",
				h: "Ø³Ø§Ø¹Ø©",
				hh: "%d Ø³Ø§Ø¹Ø§Øª",
				d: "ÙŠÙˆÙ…",
				dd: "%d Ø£ÙŠØ§Ù…",
				M: "Ø´Ù‡Ø±",
				MM: "%d Ø£Ø´Ù‡Ø±",
				y: "Ø³Ù†Ø©",
				yy: "%d Ø³Ù†ÙˆØ§Øª"
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "-inci",
				5: "-inci",
				8: "-inci",
				70: "-inci",
				80: "-inci",
				2: "-nci",
				7: "-nci",
				20: "-nci",
				50: "-nci",
				3: "-Ã¼ncÃ¼",
				4: "-Ã¼ncÃ¼",
				100: "-Ã¼ncÃ¼",
				6: "-ncÄ±",
				9: "-uncu",
				10: "-uncu",
				30: "-uncu",
				60: "-Ä±ncÄ±",
				90: "-Ä±ncÄ±"
			},
			n = e.defineLocale("az", {
				months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
				monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
				weekdays: "Bazar_Bazar ertÉ™si_Ã‡É™rÅŸÉ™nbÉ™ axÅŸamÄ±_Ã‡É™rÅŸÉ™nbÉ™_CÃ¼mÉ™ axÅŸamÄ±_CÃ¼mÉ™_ÅžÉ™nbÉ™".split("_"),
				weekdaysShort: "Baz_BzE_Ã‡Ax_Ã‡É™r_CAx_CÃ¼m_ÅžÉ™n".split("_"),
				weekdaysMin: "Bz_BE_Ã‡A_Ã‡É™_CA_CÃ¼_ÅžÉ™".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[bugÃ¼n saat] LT",
					nextDay: "[sabah saat] LT",
					nextWeek: "[gÉ™lÉ™n hÉ™ftÉ™] dddd [saat] LT",
					lastDay: "[dÃ¼nÉ™n] LT",
					lastWeek: "[keÃ§É™n hÉ™ftÉ™] dddd [saat] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s sonra",
					past: "%s É™vvÉ™l",
					s: "birneÃ§É™ saniyyÉ™",
					m: "bir dÉ™qiqÉ™",
					mm: "%d dÉ™qiqÉ™",
					h: "bir saat",
					hh: "%d saat",
					d: "bir gÃ¼n",
					dd: "%d gÃ¼n",
					M: "bir ay",
					MM: "%d ay",
					y: "bir il",
					yy: "%d il"
				},
				meridiemParse: /gecÉ™|sÉ™hÉ™r|gÃ¼ndÃ¼z|axÅŸam/,
				isPM: function(e) {
					return /^(gÃ¼ndÃ¼z|axÅŸam)$/.test(e)
				},
				meridiem: function(e, t, n) {
					return 4 > e ? "gecÉ™" : 12 > e ? "sÉ™hÉ™r" : 17 > e ? "gÃ¼ndÃ¼z" : "axÅŸam"
				},
				ordinalParse: /\d{1,2}-(Ä±ncÄ±|inci|nci|Ã¼ncÃ¼|ncÄ±|uncu)/,
				ordinal: function(e) {
					if (0 === e) return e + "-Ä±ncÄ±";
					var n = e % 10,
						r = e % 100 - n,
						o = e >= 100 ? 100 : null;
					return e + (t[n] || t[r] || t[o])
				},
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t) {
			var n = e.split("_");
			return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
		}

		function n(e, n, r) {
			var o = {
				mm: n ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ_Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñ‹_Ñ…Ð²Ñ–Ð»Ñ–Ð½",
				hh: n ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ_Ð³Ð°Ð´Ð·Ñ–Ð½Ñ‹_Ð³Ð°Ð´Ð·Ñ–Ð½",
				dd: "Ð´Ð·ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð·Ñ‘Ð½",
				MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ñ‹_Ð¼ÐµÑÑÑ†Ð°Ñž",
				yy: "Ð³Ð¾Ð´_Ð³Ð°Ð´Ñ‹_Ð³Ð°Ð´Ð¾Ñž"
			};
			return "m" === r ? n ? "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ð°" : "Ñ…Ð²Ñ–Ð»Ñ–Ð½Ñƒ" : "h" === r ? n ? "Ð³Ð°Ð´Ð·Ñ–Ð½Ð°" : "Ð³Ð°Ð´Ð·Ñ–Ð½Ñƒ" : e + " " + t(o[r], +e)
		}
		var r = e.defineLocale("be", {
			months: {
				format: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½Ñ_Ð»ÑŽÑ‚Ð°Ð³Ð°_ÑÐ°ÐºÐ°Ð²Ñ–ÐºÐ°_ÐºÑ€Ð°ÑÐ°Ð²Ñ–ÐºÐ°_Ñ‚Ñ€Ð°ÑžÐ½Ñ_Ñ‡ÑÑ€Ð²ÐµÐ½Ñ_Ð»Ñ–Ð¿ÐµÐ½Ñ_Ð¶Ð½Ñ–ÑžÐ½Ñ_Ð²ÐµÑ€Ð°ÑÐ½Ñ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–ÐºÐ°_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´Ð°_ÑÐ½ÐµÐ¶Ð½Ñ".split("_"),
				standalone: "ÑÑ‚ÑƒÐ´Ð·ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ñ‹_ÑÐ°ÐºÐ°Ð²Ñ–Ðº_ÐºÑ€Ð°ÑÐ°Ð²Ñ–Ðº_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÑÑ€Ð²ÐµÐ½ÑŒ_Ð»Ñ–Ð¿ÐµÐ½ÑŒ_Ð¶Ð½Ñ–Ð²ÐµÐ½ÑŒ_Ð²ÐµÑ€Ð°ÑÐµÐ½ÑŒ_ÐºÐ°ÑÑ‚Ñ€Ñ‹Ñ‡Ð½Ñ–Ðº_Ð»Ñ–ÑÑ‚Ð°Ð¿Ð°Ð´_ÑÐ½ÐµÐ¶Ð°Ð½ÑŒ".split("_")
			},
			monthsShort: "ÑÑ‚ÑƒÐ´_Ð»ÑŽÑ‚_ÑÐ°Ðº_ÐºÑ€Ð°Ñ_Ñ‚Ñ€Ð°Ð²_Ñ‡ÑÑ€Ð²_Ð»Ñ–Ð¿_Ð¶Ð½Ñ–Ð²_Ð²ÐµÑ€_ÐºÐ°ÑÑ‚_Ð»Ñ–ÑÑ‚_ÑÐ½ÐµÐ¶".split("_"),
			weekdays: {
				format: "Ð½ÑÐ´Ð·ÐµÐ»ÑŽ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ñƒ_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ñƒ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
				standalone: "Ð½ÑÐ´Ð·ÐµÐ»Ñ_Ð¿Ð°Ð½ÑÐ´Ð·ÐµÐ»Ð°Ðº_Ð°ÑžÑ‚Ð¾Ñ€Ð°Ðº_ÑÐµÑ€Ð°Ð´Ð°_Ñ‡Ð°Ñ†Ð²ÐµÑ€_Ð¿ÑÑ‚Ð½Ñ–Ñ†Ð°_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
				isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½ÑƒÑŽ)? ?\] ?dddd/
			},
			weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
			weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð°Ñ‚_ÑÑ€_Ñ‡Ñ†_Ð¿Ñ‚_ÑÐ±".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY Ð³.",
				LLL: "D MMMM YYYY Ð³., HH:mm",
				LLLL: "dddd, D MMMM YYYY Ð³., HH:mm"
			},
			calendar: {
				sameDay: "[Ð¡Ñ‘Ð½Ð½Ñ Ñž] LT",
				nextDay: "[Ð—Ð°ÑžÑ‚Ñ€Ð° Ñž] LT",
				lastDay: "[Ð£Ñ‡Ð¾Ñ€Ð° Ñž] LT",
				nextWeek: function() {
					return "[Ð£] dddd [Ñž] LT"
				},
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»ÑƒÑŽ] dddd [Ñž] LT";
						case 1:
						case 2:
						case 4:
							return "[Ð£ Ð¼Ñ–Ð½ÑƒÐ»Ñ‹] dddd [Ñž] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "Ð¿Ñ€Ð°Ð· %s",
				past: "%s Ñ‚Ð°Ð¼Ñƒ",
				s: "Ð½ÐµÐºÐ°Ð»ÑŒÐºÑ– ÑÐµÐºÑƒÐ½Ð´",
				m: n,
				mm: n,
				h: n,
				hh: n,
				d: "Ð´Ð·ÐµÐ½ÑŒ",
				dd: n,
				M: "Ð¼ÐµÑÑÑ†",
				MM: n,
				y: "Ð³Ð¾Ð´",
				yy: n
			},
			meridiemParse: /Ð½Ð¾Ñ‡Ñ‹|Ñ€Ð°Ð½Ñ–Ñ†Ñ‹|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°/,
			isPM: function(e) {
				return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð°Ñ€Ð°)$/.test(e)
			},
			meridiem: function(e, t, n) {
				return 4 > e ? "Ð½Ð¾Ñ‡Ñ‹" : 12 > e ? "Ñ€Ð°Ð½Ñ–Ñ†Ñ‹" : 17 > e ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð°Ñ€Ð°"
			},
			ordinalParse: /\d{1,2}-(Ñ–|Ñ‹|Ð³Ð°)/,
			ordinal: function(e, t) {
				switch (t) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? e + "-Ñ‹" : e + "-Ñ–";
					case "D":
						return e + "-Ð³Ð°";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("bg", {
			months: "ÑÐ½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
			monthsShort: "ÑÐ½Ñ€_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_ÑŽÐ½Ð¸_ÑŽÐ»Ð¸_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
			weekdays: "Ð½ÐµÐ´ÐµÐ»Ñ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÑÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÑŠÑ€Ñ‚ÑŠÐº_Ð¿ÐµÑ‚ÑŠÐº_ÑÑŠÐ±Ð¾Ñ‚Ð°".split("_"),
			weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ñ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÑŠÐ±".split("_"),
			weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Ð”Ð½ÐµÑ Ð²] LT",
				nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²] LT",
				nextWeek: "dddd [Ð²] LT",
				lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð°Ñ‚Ð°] dddd [Ð²] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[Ð’ Ð¸Ð·Ð¼Ð¸Ð½Ð°Ð»Ð¸Ñ] dddd [Ð²] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "ÑÐ»ÐµÐ´ %s",
				past: "Ð¿Ñ€ÐµÐ´Ð¸ %s",
				s: "Ð½ÑÐºÐ¾Ð»ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
				m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
				mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
				h: "Ñ‡Ð°Ñ",
				hh: "%d Ñ‡Ð°ÑÐ°",
				d: "Ð´ÐµÐ½",
				dd: "%d Ð´Ð½Ð¸",
				M: "Ð¼ÐµÑÐµÑ†",
				MM: "%d Ð¼ÐµÑÐµÑ†Ð°",
				y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",
				yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
			},
			ordinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
			ordinal: function(e) {
				var t = e % 10,
					n = e % 100;
				return 0 === e ? e + "-ÐµÐ²" : 0 === n ? e + "-ÐµÐ½" : n > 10 && 20 > n ? e + "-Ñ‚Ð¸" : 1 === t ? e + "-Ð²Ð¸" : 2 === t ? e + "-Ñ€Ð¸" : 7 === t || 8 === t ? e + "-Ð¼Ð¸" : e + "-Ñ‚Ð¸"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "à§§",
				2: "à§¨",
				3: "à§©",
				4: "à§ª",
				5: "à§«",
				6: "à§¬",
				7: "à§­",
				8: "à§®",
				9: "à§¯",
				0: "à§¦"
			},
			n = {
				"à§§": "1",
				"à§¨": "2",
				"à§©": "3",
				"à§ª": "4",
				"à§«": "5",
				"à§¬": "6",
				"à§­": "7",
				"à§®": "8",
				"à§¯": "9",
				"à§¦": "0"
			},
			r = e.defineLocale("bn", {
				months: "à¦œà¦¾à¦¨à§à§Ÿà¦¾à¦°à§€_à¦«à§‡à¦¬à§à§Ÿà¦¾à¦°à§€_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà§à¦°à¦¿à¦²_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²à¦¾à¦‡_à¦…à¦—à¦¾à¦¸à§à¦Ÿ_à¦¸à§‡à¦ªà§à¦Ÿà§‡à¦®à§à¦¬à¦°_à¦…à¦•à§à¦Ÿà§‹à¦¬à¦°_à¦¨à¦­à§‡à¦®à§à¦¬à¦°_à¦¡à¦¿à¦¸à§‡à¦®à§à¦¬à¦°".split("_"),
				monthsShort: "à¦œà¦¾à¦¨à§_à¦«à§‡à¦¬_à¦®à¦¾à¦°à§à¦š_à¦à¦ªà¦°_à¦®à§‡_à¦œà§à¦¨_à¦œà§à¦²_à¦…à¦—_à¦¸à§‡à¦ªà§à¦Ÿ_à¦…à¦•à§à¦Ÿà§‹_à¦¨à¦­_à¦¡à¦¿à¦¸à§‡à¦®à§".split("_"),
				weekdays: "à¦°à¦¬à¦¿à¦¬à¦¾à¦°_à¦¸à§‹à¦®à¦¬à¦¾à¦°_à¦®à¦™à§à¦—à¦²à¦¬à¦¾à¦°_à¦¬à§à¦§à¦¬à¦¾à¦°_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à§à¦¤à¦¿à¦¬à¦¾à¦°_à¦¶à§à¦•à§à¦°à¦¬à¦¾à¦°_à¦¶à¦¨à¦¿à¦¬à¦¾à¦°".split("_"),
				weekdaysShort: "à¦°à¦¬à¦¿_à¦¸à§‹à¦®_à¦®à¦™à§à¦—à¦²_à¦¬à§à¦§_à¦¬à§ƒà¦¹à¦¸à§à¦ªà¦¤à§à¦¤à¦¿_à¦¶à§à¦•à§à¦°_à¦¶à¦¨à¦¿".split("_"),
				weekdaysMin: "à¦°à¦¬_à¦¸à¦®_à¦®à¦™à§à¦—_à¦¬à§_à¦¬à§à¦°à¦¿à¦¹_à¦¶à§_à¦¶à¦¨à¦¿".split("_"),
				longDateFormat: {
					LT: "A h:mm à¦¸à¦®à§Ÿ",
					LTS: "A h:mm:ss à¦¸à¦®à§Ÿ",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ",
					LLLL: "dddd, D MMMM YYYY, A h:mm à¦¸à¦®à§Ÿ"
				},
				calendar: {
					sameDay: "[à¦†à¦œ] LT",
					nextDay: "[à¦†à¦—à¦¾à¦®à§€à¦•à¦¾à¦²] LT",
					nextWeek: "dddd, LT",
					lastDay: "[à¦—à¦¤à¦•à¦¾à¦²] LT",
					lastWeek: "[à¦—à¦¤] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s à¦ªà¦°à§‡",
					past: "%s à¦†à¦—à§‡",
					s: "à¦•à§Ÿà§‡à¦• à¦¸à§‡à¦•à§‡à¦¨à§à¦¡",
					m: "à¦à¦• à¦®à¦¿à¦¨à¦¿à¦Ÿ",
					mm: "%d à¦®à¦¿à¦¨à¦¿à¦Ÿ",
					h: "à¦à¦• à¦˜à¦¨à§à¦Ÿà¦¾",
					hh: "%d à¦˜à¦¨à§à¦Ÿà¦¾",
					d: "à¦à¦• à¦¦à¦¿à¦¨",
					dd: "%d à¦¦à¦¿à¦¨",
					M: "à¦à¦• à¦®à¦¾à¦¸",
					MM: "%d à¦®à¦¾à¦¸",
					y: "à¦à¦• à¦¬à¦›à¦°",
					yy: "%d à¦¬à¦›à¦°"
				},
				preparse: function(e) {
					return e.replace(/[à§§à§¨à§©à§ªà§«à§¬à§­à§®à§¯à§¦]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /à¦°à¦¾à¦¤|à¦¸à¦•à¦¾à¦²|à¦¦à§à¦ªà§à¦°|à¦¬à¦¿à¦•à¦¾à¦²|à¦°à¦¾à¦¤/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "à¦°à¦¾à¦¤" === t && e >= 4 || "à¦¦à§à¦ªà§à¦°" === t && 5 > e || "à¦¬à¦¿à¦•à¦¾à¦²" === t ? e + 12 : e
				},
				meridiem: function(e, t, n) {
					return 4 > e ? "à¦°à¦¾à¦¤" : 10 > e ? "à¦¸à¦•à¦¾à¦²" : 17 > e ? "à¦¦à§à¦ªà§à¦°" : 20 > e ? "à¦¬à¦¿à¦•à¦¾à¦²" : "à¦°à¦¾à¦¤"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "à¼¡",
				2: "à¼¢",
				3: "à¼£",
				4: "à¼¤",
				5: "à¼¥",
				6: "à¼¦",
				7: "à¼§",
				8: "à¼¨",
				9: "à¼©",
				0: "à¼ "
			},
			n = {
				"à¼¡": "1",
				"à¼¢": "2",
				"à¼£": "3",
				"à¼¤": "4",
				"à¼¥": "5",
				"à¼¦": "6",
				"à¼§": "7",
				"à¼¨": "8",
				"à¼©": "9",
				"à¼ ": "0"
			},
			r = e.defineLocale("bo", {
				months: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
				monthsShort: "à½Ÿà¾³à¼‹à½–à¼‹à½‘à½„à¼‹à½”à½¼_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½‰à½²à½¦à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‚à½¦à½´à½˜à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½žà½²à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½£à¾”à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à¾²à½´à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½‘à½´à½“à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½¢à¾’à¾±à½‘à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½‘à½‚à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½…à½²à½‚à¼‹à½”_à½Ÿà¾³à¼‹à½–à¼‹à½–à½…à½´à¼‹à½‚à½‰à½²à½¦à¼‹à½”".split("_"),
				weekdays: "à½‚à½Ÿà½ à¼‹à½‰à½²à¼‹à½˜à¼‹_à½‚à½Ÿà½ à¼‹à½Ÿà¾³à¼‹à½–à¼‹_à½‚à½Ÿà½ à¼‹à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½‚à½Ÿà½ à¼‹à½£à¾·à½‚à¼‹à½”à¼‹_à½‚à½Ÿà½ à¼‹à½•à½´à½¢à¼‹à½–à½´_à½‚à½Ÿà½ à¼‹à½”à¼‹à½¦à½„à½¦à¼‹_à½‚à½Ÿà½ à¼‹à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
				weekdaysShort: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
				weekdaysMin: "à½‰à½²à¼‹à½˜à¼‹_à½Ÿà¾³à¼‹à½–à¼‹_à½˜à½²à½‚à¼‹à½‘à½˜à½¢à¼‹_à½£à¾·à½‚à¼‹à½”à¼‹_à½•à½´à½¢à¼‹à½–à½´_à½”à¼‹à½¦à½„à½¦à¼‹_à½¦à¾¤à½ºà½“à¼‹à½”à¼‹".split("_"),
				longDateFormat: {
					LT: "A h:mm",
					LTS: "A h:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm",
					LLLL: "dddd, D MMMM YYYY, A h:mm"
				},
				calendar: {
					sameDay: "[à½‘à½²à¼‹à½¢à½²à½„] LT",
					nextDay: "[à½¦à½„à¼‹à½‰à½²à½“] LT",
					nextWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½¢à¾—à½ºà½¦à¼‹à½˜], LT",
					lastDay: "[à½à¼‹à½¦à½„] LT",
					lastWeek: "[à½–à½‘à½´à½“à¼‹à½•à¾²à½‚à¼‹à½˜à½à½ à¼‹à½˜] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s à½£à¼‹",
					past: "%s à½¦à¾”à½“à¼‹à½£",
					s: "à½£à½˜à¼‹à½¦à½„",
					m: "à½¦à¾à½¢à¼‹à½˜à¼‹à½‚à½…à½²à½‚",
					mm: "%d à½¦à¾à½¢à¼‹à½˜",
					h: "à½†à½´à¼‹à½šà½¼à½‘à¼‹à½‚à½…à½²à½‚",
					hh: "%d à½†à½´à¼‹à½šà½¼à½‘",
					d: "à½‰à½²à½“à¼‹à½‚à½…à½²à½‚",
					dd: "%d à½‰à½²à½“à¼‹",
					M: "à½Ÿà¾³à¼‹à½–à¼‹à½‚à½…à½²à½‚",
					MM: "%d à½Ÿà¾³à¼‹à½–",
					y: "à½£à½¼à¼‹à½‚à½…à½²à½‚",
					yy: "%d à½£à½¼"
				},
				preparse: function(e) {
					return e.replace(/[à¼¡à¼¢à¼£à¼¤à¼¥à¼¦à¼§à¼¨à¼©à¼ ]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /à½˜à½šà½“à¼‹à½˜à½¼|à½žà½¼à½‚à½¦à¼‹à½€à½¦|à½‰à½²à½“à¼‹à½‚à½´à½„|à½‘à½‚à½¼à½„à¼‹à½‘à½‚|à½˜à½šà½“à¼‹à½˜à½¼/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "à½˜à½šà½“à¼‹à½˜à½¼" === t && e >= 4 || "à½‰à½²à½“à¼‹à½‚à½´à½„" === t && 5 > e || "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" === t ? e + 12 : e
				},
				meridiem: function(e, t, n) {
					return 4 > e ? "à½˜à½šà½“à¼‹à½˜à½¼" : 10 > e ? "à½žà½¼à½‚à½¦à¼‹à½€à½¦" : 17 > e ? "à½‰à½²à½“à¼‹à½‚à½´à½„" : 20 > e ? "à½‘à½‚à½¼à½„à¼‹à½‘à½‚" : "à½˜à½šà½“à¼‹à½˜à½¼"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n) {
			var r = {
				mm: "munutenn",
				MM: "miz",
				dd: "devezh"
			};
			return e + " " + o(r[n], e)
		}

		function n(e) {
			switch (r(e)) {
				case 1:
				case 3:
				case 4:
				case 5:
				case 9:
					return e + " bloaz";
				default:
					return e + " vloaz"
			}
		}

		function r(e) {
			return e > 9 ? r(e % 10) : e
		}

		function o(e, t) {
			return 2 === t ? a(e) : e
		}

		function a(e) {
			var t = {
				m: "v",
				b: "v",
				d: "z"
			};
			return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
		}
		var i = e.defineLocale("br", {
			months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
			monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
			weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
			weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h[e]mm A",
				LTS: "h[e]mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D [a viz] MMMM YYYY",
				LLL: "D [a viz] MMMM YYYY h[e]mm A",
				LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
			},
			calendar: {
				sameDay: "[Hiziv da] LT",
				nextDay: "[Warc'hoazh da] LT",
				nextWeek: "dddd [da] LT",
				lastDay: "[Dec'h da] LT",
				lastWeek: "dddd [paset da] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "a-benn %s",
				past: "%s 'zo",
				s: "un nebeud segondennoÃ¹",
				m: "ur vunutenn",
				mm: t,
				h: "un eur",
				hh: "%d eur",
				d: "un devezh",
				dd: t,
				M: "ur miz",
				MM: t,
				y: "ur bloaz",
				yy: n
			},
			ordinalParse: /\d{1,2}(aÃ±|vet)/,
			ordinal: function(e) {
				var t = 1 === e ? "aÃ±" : "vet";
				return e + t
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return i
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n) {
			var r = e + " ";
			switch (n) {
				case "m":
					return t ? "jedna minuta" : "jedne minute";
				case "mm":
					return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
				case "h":
					return t ? "jedan sat" : "jednog sata";
				case "hh":
					return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
				case "dd":
					return r += 1 === e ? "dan" : "dana";
				case "MM":
					return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
				case "yy":
					return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
			}
		}
		var n = e.defineLocale("bs", {
			months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function() {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juÄer u] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
							return "[proÅ¡lu] dddd [u] LT";
						case 6:
							return "[proÅ¡le] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[proÅ¡li] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "dan",
				dd: t,
				M: "mjesec",
				MM: t,
				y: "godinu",
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ca", {
			months: "gener_febrer_marÃ§_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
			monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
			weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
			weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: function() {
					return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextDay: function() {
					return "[demÃ  a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				nextWeek: function() {
					return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastDay: function() {
					return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				lastWeek: function() {
					return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en %s",
				past: "fa %s",
				s: "uns segons",
				m: "un minut",
				mm: "%d minuts",
				h: "una hora",
				hh: "%d hores",
				d: "un dia",
				dd: "%d dies",
				M: "un mes",
				MM: "%d mesos",
				y: "un any",
				yy: "%d anys"
			},
			ordinalParse: /\d{1,2}(r|n|t|Ã¨|a)/,
			ordinal: function(e, t) {
				var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "Ã¨";
				return "w" !== t && "W" !== t || (n = "a"), e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e) {
			return e > 1 && 5 > e && 1 !== ~~(e / 10)
		}

		function n(e, n, r, o) {
			var a = e + " ";
			switch (r) {
				case "s":
					return n || o ? "pÃ¡r sekund" : "pÃ¡r sekundami";
				case "m":
					return n ? "minuta" : o ? "minutu" : "minutou";
				case "mm":
					return n || o ? a + (t(e) ? "minuty" : "minut") : a + "minutami";
				case "h":
					return n ? "hodina" : o ? "hodinu" : "hodinou";
				case "hh":
					return n || o ? a + (t(e) ? "hodiny" : "hodin") : a + "hodinami";
				case "d":
					return n || o ? "den" : "dnem";
				case "dd":
					return n || o ? a + (t(e) ? "dny" : "dnÃ­") : a + "dny";
				case "M":
					return n || o ? "mÄ›sÃ­c" : "mÄ›sÃ­cem";
				case "MM":
					return n || o ? a + (t(e) ? "mÄ›sÃ­ce" : "mÄ›sÃ­cÅ¯") : a + "mÄ›sÃ­ci";
				case "y":
					return n || o ? "rok" : "rokem";
				case "yy":
					return n || o ? a + (t(e) ? "roky" : "let") : a + "lety"
			}
		}
		var r = "leden_Ãºnor_bÅ™ezen_duben_kvÄ›ten_Äerven_Äervenec_srpen_zÃ¡Å™Ã­_Å™Ã­jen_listopad_prosinec".split("_"),
			o = "led_Ãºno_bÅ™e_dub_kvÄ›_Ävn_Ävc_srp_zÃ¡Å™_Å™Ã­j_lis_pro".split("_"),
			a = e.defineLocale("cs", {
				months: r,
				monthsShort: o,
				monthsParse: function(e, t) {
					var n, r = [];
					for (n = 0; 12 > n; n++) r[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$", "i");
					return r
				}(r, o),
				shortMonthsParse: function(e) {
					var t, n = [];
					for (t = 0; 12 > t; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
					return n
				}(o),
				longMonthsParse: function(e) {
					var t, n = [];
					for (t = 0; 12 > t; t++) n[t] = new RegExp("^" + e[t] + "$", "i");
					return n
				}(r),
				weekdays: "nedÄ›le_pondÄ›lÃ­_ÃºterÃ½_stÅ™eda_Ätvrtek_pÃ¡tek_sobota".split("_"),
				weekdaysShort: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
				weekdaysMin: "ne_po_Ãºt_st_Ät_pÃ¡_so".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd D. MMMM YYYY H:mm"
				},
				calendar: {
					sameDay: "[dnes v] LT",
					nextDay: "[zÃ­tra v] LT",
					nextWeek: function() {
						switch (this.day()) {
							case 0:
								return "[v nedÄ›li v] LT";
							case 1:
							case 2:
								return "[v] dddd [v] LT";
							case 3:
								return "[ve stÅ™edu v] LT";
							case 4:
								return "[ve Ätvrtek v] LT";
							case 5:
								return "[v pÃ¡tek v] LT";
							case 6:
								return "[v sobotu v] LT"
						}
					},
					lastDay: "[vÄera v] LT",
					lastWeek: function() {
						switch (this.day()) {
							case 0:
								return "[minulou nedÄ›li v] LT";
							case 1:
							case 2:
								return "[minulÃ©] dddd [v] LT";
							case 3:
								return "[minulou stÅ™edu v] LT";
							case 4:
							case 5:
								return "[minulÃ½] dddd [v] LT";
							case 6:
								return "[minulou sobotu v] LT"
						}
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "za %s",
					past: "pÅ™ed %s",
					s: n,
					m: n,
					mm: n,
					h: n,
					hh: n,
					d: n,
					dd: n,
					M: n,
					MM: n,
					y: n,
					yy: n
				},
				ordinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return a
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("cv", {
			months: "ÐºÓ‘Ñ€Ð»Ð°Ñ‡_Ð½Ð°Ñ€Ó‘Ñ_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€Ñ‚Ð¼Ðµ_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€Ð»Ð°_Ð°Ð²Ó‘Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°ÑˆÑ‚Ð°Ð²".split("_"),
			monthsShort: "ÐºÓ‘Ñ€_Ð½Ð°Ñ€_Ð¿ÑƒÑˆ_Ð°ÐºÐ°_Ð¼Ð°Ð¹_Ò«Ó—Ñ€_ÑƒÑ‚Ó‘_Ò«ÑƒÑ€_Ð°Ð²Ð½_ÑŽÐ¿Ð°_Ñ‡Ó³Ðº_Ñ€Ð°Ñˆ".split("_"),
			weekdays: "Ð²Ñ‹Ñ€ÑÐ°Ñ€Ð½Ð¸ÐºÑƒÐ½_Ñ‚ÑƒÐ½Ñ‚Ð¸ÐºÑƒÐ½_Ñ‹Ñ‚Ð»Ð°Ñ€Ð¸ÐºÑƒÐ½_ÑŽÐ½ÐºÑƒÐ½_ÐºÓ—Ò«Ð½ÐµÑ€Ð½Ð¸ÐºÑƒÐ½_ÑÑ€Ð½ÐµÐºÑƒÐ½_ÑˆÓ‘Ð¼Ð°Ñ‚ÐºÑƒÐ½".split("_"),
			weekdaysShort: "Ð²Ñ‹Ñ€_Ñ‚ÑƒÐ½_Ñ‹Ñ‚Ð»_ÑŽÐ½_ÐºÓ—Ò«_ÑÑ€Ð½_ÑˆÓ‘Ð¼".split("_"),
			weekdaysMin: "Ð²Ñ€_Ñ‚Ð½_Ñ‹Ñ‚_ÑŽÐ½_ÐºÒ«_ÑÑ€_ÑˆÐ¼".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—]",
				LLL: "YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm",
				LLLL: "dddd, YYYY [Ò«ÑƒÐ»Ñ…Ð¸] MMMM [ÑƒÐ¹Ó‘Ñ…Ó—Ð½] D[-Ð¼Ó—ÑˆÓ—], HH:mm"
			},
			calendar: {
				sameDay: "[ÐŸÐ°ÑÐ½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
				nextDay: "[Ð«Ñ€Ð°Ð½] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
				lastDay: "[Ó–Ð½ÐµÑ€] LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
				nextWeek: "[ÒªÐ¸Ñ‚ÐµÑ] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
				lastWeek: "[Ð˜Ñ€Ñ‚Ð½Ó—] dddd LT [ÑÐµÑ…ÐµÑ‚Ñ€Ðµ]",
				sameElse: "L"
			},
			relativeTime: {
				future: function(e) {
					var t = /ÑÐµÑ…ÐµÑ‚$/i.exec(e) ? "Ñ€ÐµÐ½" : /Ò«ÑƒÐ»$/i.exec(e) ? "Ñ‚Ð°Ð½" : "Ñ€Ð°Ð½";
					return e + t
				},
				past: "%s ÐºÐ°ÑÐ»Ð»Ð°",
				s: "Ð¿Ó—Ñ€-Ð¸Ðº Ò«ÐµÐºÐºÑƒÐ½Ñ‚",
				m: "Ð¿Ó—Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
				mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
				h: "Ð¿Ó—Ñ€ ÑÐµÑ…ÐµÑ‚",
				hh: "%d ÑÐµÑ…ÐµÑ‚",
				d: "Ð¿Ó—Ñ€ ÐºÑƒÐ½",
				dd: "%d ÐºÑƒÐ½",
				M: "Ð¿Ó—Ñ€ ÑƒÐ¹Ó‘Ñ…",
				MM: "%d ÑƒÐ¹Ó‘Ñ…",
				y: "Ð¿Ó—Ñ€ Ò«ÑƒÐ»",
				yy: "%d Ò«ÑƒÐ»"
			},
			ordinalParse: /\d{1,2}-Ð¼Ó—Ñˆ/,
			ordinal: "%d-Ð¼Ó—Ñˆ",
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("cy", {
			months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
			monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
			weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
			weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Heddiw am] LT",
				nextDay: "[Yfory am] LT",
				nextWeek: "dddd [am] LT",
				lastDay: "[Ddoe am] LT",
				lastWeek: "dddd [diwethaf am] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "mewn %s",
				past: "%s yn Ã´l",
				s: "ychydig eiliadau",
				m: "munud",
				mm: "%d munud",
				h: "awr",
				hh: "%d awr",
				d: "diwrnod",
				dd: "%d diwrnod",
				M: "mis",
				MM: "%d mis",
				y: "blwyddyn",
				yy: "%d flynedd"
			},
			ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
			ordinal: function(e) {
				var t = e,
					n = "",
					r = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
				return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = r[t]), e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("da", {
			months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
			weekdaysShort: "sÃ¸n_man_tir_ons_tor_fre_lÃ¸r".split("_"),
			weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd [d.] D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[I dag kl.] LT",
				nextDay: "[I morgen kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[I gÃ¥r kl.] LT",
				lastWeek: "[sidste] dddd [kl] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "fÃ¥ sekunder",
				m: "et minut",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dage",
				M: "en mÃ¥ned",
				MM: "%d mÃ¥neder",
				y: "et Ã¥r",
				yy: "%d Ã¥r"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, r) {
			var o = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? o[n][0] : o[n][1]
		}
		var n = e.defineLocale("de", {
			months: "Januar_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, r) {
			var o = {
				m: ["eine Minute", "einer Minute"],
				h: ["eine Stunde", "einer Stunde"],
				d: ["ein Tag", "einem Tag"],
				dd: [e + " Tage", e + " Tagen"],
				M: ["ein Monat", "einem Monat"],
				MM: [e + " Monate", e + " Monaten"],
				y: ["ein Jahr", "einem Jahr"],
				yy: [e + " Jahre", e + " Jahren"]
			};
			return t ? o[n][0] : o[n][1]
		}
		var n = e.defineLocale("de-at", {
			months: "JÃ¤nner_Februar_MÃ¤rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "JÃ¤n._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY HH:mm",
				LLLL: "dddd, D. MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um] LT [Uhr]",
				sameElse: "L",
				nextDay: "[morgen um] LT [Uhr]",
				nextWeek: "dddd [um] LT [Uhr]",
				lastDay: "[gestern um] LT [Uhr]",
				lastWeek: "[letzten] dddd [um] LT [Uhr]"
			},
			relativeTime: {
				future: "in %s",
				past: "vor %s",
				s: "ein paar Sekunden",
				m: t,
				mm: "%d Minuten",
				h: t,
				hh: "%d Stunden",
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = ["Þ–Þ¬Þ‚ÞªÞ‡Þ¦ÞƒÞ©", "ÞŠÞ¬Þ„Þ°ÞƒÞªÞ‡Þ¦ÞƒÞ©", "Þ‰Þ§ÞƒÞ¨Þ—Þª", "Þ‡Þ­Þ•Þ°ÞƒÞ©ÞÞª", "Þ‰Þ­", "Þ–Þ«Þ‚Þ°", "Þ–ÞªÞÞ¦Þ‡Þ¨", "Þ‡Þ¯ÞŽÞ¦ÞÞ°Þ“Þª", "ÞÞ¬Þ•Þ°Þ“Þ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‡Þ®Þ†Þ°Þ“Þ¯Þ„Þ¦ÞƒÞª", "Þ‚Þ®ÞˆÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª", "Þ‘Þ¨ÞÞ¬Þ‰Þ°Þ„Þ¦ÞƒÞª"],
			n = ["Þ‡Þ§Þ‹Þ¨Þ‡Þ°ÞŒÞ¦", "Þ€Þ¯Þ‰Þ¦", "Þ‡Þ¦Þ‚Þ°ÞŽÞ§ÞƒÞ¦", "Þ„ÞªÞ‹Þ¦", "Þ„ÞªÞƒÞ§ÞÞ°ÞŠÞ¦ÞŒÞ¨", "Þ€ÞªÞ†ÞªÞƒÞª", "Þ€Þ®Þ‚Þ¨Þ€Þ¨ÞƒÞª"],
			r = e.defineLocale("dv", {
				months: t,
				monthsShort: t,
				weekdays: n,
				weekdaysShort: n,
				weekdaysMin: "Þ‡Þ§Þ‹Þ¨_Þ€Þ¯Þ‰Þ¦_Þ‡Þ¦Þ‚Þ°_Þ„ÞªÞ‹Þ¦_Þ„ÞªÞƒÞ§_Þ€ÞªÞ†Þª_Þ€Þ®Þ‚Þ¨".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "D/M/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				meridiemParse: /Þ‰Þ†|Þ‰ÞŠ/,
				isPM: function(e) {
					return "Þ‰ÞŠ" === e
				},
				meridiem: function(e, t, n) {
					return 12 > e ? "Þ‰Þ†" : "Þ‰ÞŠ"
				},
				calendar: {
					sameDay: "[Þ‰Þ¨Þ‡Þ¦Þ‹Þª] LT",
					nextDay: "[Þ‰Þ§Þ‹Þ¦Þ‰Þ§] LT",
					nextWeek: "dddd LT",
					lastDay: "[Þ‡Þ¨Þ‡Þ°Þ”Þ¬] LT",
					lastWeek: "[ÞŠÞ§Þ‡Þ¨ÞŒÞªÞˆÞ¨] dddd LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "ÞŒÞ¬ÞƒÞ­ÞŽÞ¦Þ‡Þ¨ %s",
					past: "Þ†ÞªÞƒÞ¨Þ‚Þ° %s",
					s: "ÞÞ¨Þ†ÞªÞ‚Þ°ÞŒÞªÞ†Þ®Þ…Þ¬Þ‡Þ°",
					m: "Þ‰Þ¨Þ‚Þ¨Þ“Þ¬Þ‡Þ°",
					mm: "Þ‰Þ¨Þ‚Þ¨Þ“Þª %d",
					h: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞ¬Þ‡Þ°",
					hh: "ÞŽÞ¦Þ‘Þ¨Þ‡Þ¨ÞƒÞª %d",
					d: "Þ‹ÞªÞˆÞ¦Þ€Þ¬Þ‡Þ°",
					dd: "Þ‹ÞªÞˆÞ¦ÞÞ° %d",
					M: "Þ‰Þ¦Þ€Þ¬Þ‡Þ°",
					MM: "Þ‰Þ¦ÞÞ° %d",
					y: "Þ‡Þ¦Þ€Þ¦ÞƒÞ¬Þ‡Þ°",
					yy: "Þ‡Þ¦Þ€Þ¦ÞƒÞª %d"
				},
				preparse: function(e) {
					return e.replace(/ØŒ/g, ",")
				},
				postformat: function(e) {
					return e.replace(/,/g, "ØŒ")
				},
				week: {
					dow: 7,
					doy: 12
				}
			});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e) {
			return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
		}
		var n = e.defineLocale("el", {
			monthsNominativeEl: "Î™Î±Î½Î¿Ï…Î¬ÏÎ¹Î¿Ï‚_Î¦ÎµÎ²ÏÎ¿Ï…Î¬ÏÎ¹Î¿Ï‚_ÎœÎ¬ÏÏ„Î¹Î¿Ï‚_Î‘Ï€ÏÎ¯Î»Î¹Î¿Ï‚_ÎœÎ¬Î¹Î¿Ï‚_Î™Î¿ÏÎ½Î¹Î¿Ï‚_Î™Î¿ÏÎ»Î¹Î¿Ï‚_Î‘ÏÎ³Î¿Ï…ÏƒÏ„Î¿Ï‚_Î£ÎµÏ€Ï„Î­Î¼Î²ÏÎ¹Î¿Ï‚_ÎŸÎºÏ„ÏŽÎ²ÏÎ¹Î¿Ï‚_ÎÎ¿Î­Î¼Î²ÏÎ¹Î¿Ï‚_Î”ÎµÎºÎ­Î¼Î²ÏÎ¹Î¿Ï‚".split("_"),
			monthsGenitiveEl: "Î™Î±Î½Î¿Ï…Î±ÏÎ¯Î¿Ï…_Î¦ÎµÎ²ÏÎ¿Ï…Î±ÏÎ¯Î¿Ï…_ÎœÎ±ÏÏ„Î¯Î¿Ï…_Î‘Ï€ÏÎ¹Î»Î¯Î¿Ï…_ÎœÎ±ÎÎ¿Ï…_Î™Î¿Ï…Î½Î¯Î¿Ï…_Î™Î¿Ï…Î»Î¯Î¿Ï…_Î‘Ï…Î³Î¿ÏÏƒÏ„Î¿Ï…_Î£ÎµÏ€Ï„ÎµÎ¼Î²ÏÎ¯Î¿Ï…_ÎŸÎºÏ„Ï‰Î²ÏÎ¯Î¿Ï…_ÎÎ¿ÎµÎ¼Î²ÏÎ¯Î¿Ï…_Î”ÎµÎºÎµÎ¼Î²ÏÎ¯Î¿Ï…".split("_"),
			months: function(e, t) {
				return /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()]
			},
			monthsShort: "Î™Î±Î½_Î¦ÎµÎ²_ÎœÎ±Ï_Î‘Ï€Ï_ÎœÎ±ÏŠ_Î™Î¿Ï…Î½_Î™Î¿Ï…Î»_Î‘Ï…Î³_Î£ÎµÏ€_ÎŸÎºÏ„_ÎÎ¿Îµ_Î”ÎµÎº".split("_"),
			weekdays: "ÎšÏ…ÏÎ¹Î±ÎºÎ®_Î”ÎµÏ…Ï„Î­ÏÎ±_Î¤ÏÎ¯Ï„Î·_Î¤ÎµÏ„Î¬ÏÏ„Î·_Î Î­Î¼Ï€Ï„Î·_Î Î±ÏÎ±ÏƒÎºÎµÏ…Î®_Î£Î¬Î²Î²Î±Ï„Î¿".split("_"),
			weekdaysShort: "ÎšÏ…Ï_Î”ÎµÏ…_Î¤ÏÎ¹_Î¤ÎµÏ„_Î ÎµÎ¼_Î Î±Ï_Î£Î±Î²".split("_"),
			weekdaysMin: "ÎšÏ…_Î”Îµ_Î¤Ï_Î¤Îµ_Î Îµ_Î Î±_Î£Î±".split("_"),
			meridiem: function(e, t, n) {
				return e > 11 ? n ? "Î¼Î¼" : "ÎœÎœ" : n ? "Ï€Î¼" : "Î Îœ"
			},
			isPM: function(e) {
				return "Î¼" === (e + "").toLowerCase()[0]
			},
			meridiemParse: /[Î Îœ]\.?Îœ?\.?/i,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendarEl: {
				sameDay: "[Î£Î®Î¼ÎµÏÎ± {}] LT",
				nextDay: "[Î‘ÏÏÎ¹Î¿ {}] LT",
				nextWeek: "dddd [{}] LT",
				lastDay: "[Î§Î¸ÎµÏ‚ {}] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 6:
							return "[Ï„Î¿ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î¿] dddd [{}] LT";
						default:
							return "[Ï„Î·Î½ Ï€ÏÎ¿Î·Î³Î¿ÏÎ¼ÎµÎ½Î·] dddd [{}] LT"
					}
				},
				sameElse: "L"
			},
			calendar: function(e, n) {
				var r = this._calendarEl[e],
					o = n && n.hours();
				return t(r) && (r = r.apply(n)), r.replace("{}", o % 12 === 1 ? "ÏƒÏ„Î·" : "ÏƒÏ„Î¹Ï‚")
			},
			relativeTime: {
				future: "ÏƒÎµ %s",
				past: "%s Ï€ÏÎ¹Î½",
				s: "Î»Î¯Î³Î± Î´ÎµÏ…Ï„ÎµÏÏŒÎ»ÎµÏ€Ï„Î±",
				m: "Î­Î½Î± Î»ÎµÏ€Ï„ÏŒ",
				mm: "%d Î»ÎµÏ€Ï„Î¬",
				h: "Î¼Î¯Î± ÏŽÏÎ±",
				hh: "%d ÏŽÏÎµÏ‚",
				d: "Î¼Î¯Î± Î¼Î­ÏÎ±",
				dd: "%d Î¼Î­ÏÎµÏ‚",
				M: "Î­Î½Î±Ï‚ Î¼Î®Î½Î±Ï‚",
				MM: "%d Î¼Î®Î½ÎµÏ‚",
				y: "Î­Î½Î±Ï‚ Ï‡ÏÏŒÎ½Î¿Ï‚",
				yy: "%d Ï‡ÏÏŒÎ½Î¹Î±"
			},
			ordinalParse: /\d{1,2}Î·/,
			ordinal: "%dÎ·",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("en-au", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("en-ca", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "YYYY-MM-DD",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY h:mm A",
				LLLL: "dddd, MMMM D, YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("en-gb", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("en-ie", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("en-nz", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("eo", {
			months: "januaro_februaro_marto_aprilo_majo_junio_julio_aÅ­gusto_septembro_oktobro_novembro_decembro".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aÅ­g_sep_okt_nov_dec".split("_"),
			weekdays: "DimanÄ‰o_Lundo_Mardo_Merkredo_Ä´aÅ­do_Vendredo_Sabato".split("_"),
			weekdaysShort: "Dim_Lun_Mard_Merk_Ä´aÅ­_Ven_Sab".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Ä´a_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D[-an de] MMMM, YYYY",
				LLL: "D[-an de] MMMM, YYYY HH:mm",
				LLLL: "dddd, [la] D[-an de] MMMM, YYYY HH:mm"
			},
			meridiemParse: /[ap]\.t\.m/i,
			isPM: function(e) {
				return "p" === e.charAt(0).toLowerCase()
			},
			meridiem: function(e, t, n) {
				return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
			},
			calendar: {
				sameDay: "[HodiaÅ­ je] LT",
				nextDay: "[MorgaÅ­ je] LT",
				nextWeek: "dddd [je] LT",
				lastDay: "[HieraÅ­ je] LT",
				lastWeek: "[pasinta] dddd [je] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "je %s",
				past: "antaÅ­ %s",
				s: "sekundoj",
				m: "minuto",
				mm: "%d minutoj",
				h: "horo",
				hh: "%d horoj",
				d: "tago",
				dd: "%d tagoj",
				M: "monato",
				MM: "%d monatoj",
				y: "jaro",
				yy: "%d jaroj"
			},
			ordinalParse: /\d{1,2}a/,
			ordinal: "%da",
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
			n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
			r = e.defineLocale("es", {
				months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
				monthsShort: function(e, r) {
					return /-MMM-/.test(r) ? n[e.month()] : t[e.month()]
				},
				monthsParseExact: !0,
				weekdays: "domingo_lunes_martes_miÃ©rcoles_jueves_viernes_sÃ¡bado".split("_"),
				weekdaysShort: "dom._lun._mar._miÃ©._jue._vie._sÃ¡b.".split("_"),
				weekdaysMin: "do_lu_ma_mi_ju_vi_sÃ¡".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D [de] MMMM [de] YYYY",
					LLL: "D [de] MMMM [de] YYYY H:mm",
					LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
				},
				calendar: {
					sameDay: function() {
						return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextDay: function() {
						return "[maÃ±ana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					nextWeek: function() {
						return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastDay: function() {
						return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					lastWeek: function() {
						return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "en %s",
					past: "hace %s",
					s: "unos segundos",
					m: "un minuto",
					mm: "%d minutos",
					h: "una hora",
					hh: "%d horas",
					d: "un dÃ­a",
					dd: "%d dÃ­as",
					M: "un mes",
					MM: "%d meses",
					y: "un aÃ±o",
					yy: "%d aÃ±os"
				},
				ordinalParse: /\d{1,2}Âº/,
				ordinal: "%dÂº",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, r) {
			var o = {
				s: ["mÃµne sekundi", "mÃµni sekund", "paar sekundit"],
				m: ["Ã¼he minuti", "Ã¼ks minut"],
				mm: [e + " minuti", e + " minutit"],
				h: ["Ã¼he tunni", "tund aega", "Ã¼ks tund"],
				hh: [e + " tunni", e + " tundi"],
				d: ["Ã¼he pÃ¤eva", "Ã¼ks pÃ¤ev"],
				M: ["kuu aja", "kuu aega", "Ã¼ks kuu"],
				MM: [e + " kuu", e + " kuud"],
				y: ["Ã¼he aasta", "aasta", "Ã¼ks aasta"],
				yy: [e + " aasta", e + " aastat"]
			};
			return t ? o[n][2] ? o[n][2] : o[n][1] : r ? o[n][0] : o[n][1]
		}
		var n = e.defineLocale("et", {
			months: "jaanuar_veebruar_mÃ¤rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
			monthsShort: "jaan_veebr_mÃ¤rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
			weekdays: "pÃ¼hapÃ¤ev_esmaspÃ¤ev_teisipÃ¤ev_kolmapÃ¤ev_neljapÃ¤ev_reede_laupÃ¤ev".split("_"),
			weekdaysShort: "P_E_T_K_N_R_L".split("_"),
			weekdaysMin: "P_E_T_K_N_R_L".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[TÃ¤na,] LT",
				nextDay: "[Homme,] LT",
				nextWeek: "[JÃ¤rgmine] dddd LT",
				lastDay: "[Eile,] LT",
				lastWeek: "[Eelmine] dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s pÃ¤rast",
				past: "%s tagasi",
				s: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: "%d pÃ¤eva",
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("eu", {
			months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
			monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
			monthsParseExact: !0,
			weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
			weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
			weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY[ko] MMMM[ren] D[a]",
				LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
				LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
				l: "YYYY-M-D",
				ll: "YYYY[ko] MMM D[a]",
				lll: "YYYY[ko] MMM D[a] HH:mm",
				llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
			},
			calendar: {
				sameDay: "[gaur] LT[etan]",
				nextDay: "[bihar] LT[etan]",
				nextWeek: "dddd LT[etan]",
				lastDay: "[atzo] LT[etan]",
				lastWeek: "[aurreko] dddd LT[etan]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s barru",
				past: "duela %s",
				s: "segundo batzuk",
				m: "minutu bat",
				mm: "%d minutu",
				h: "ordu bat",
				hh: "%d ordu",
				d: "egun bat",
				dd: "%d egun",
				M: "hilabete bat",
				MM: "%d hilabete",
				y: "urte bat",
				yy: "%d urte"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "Û±",
				2: "Û²",
				3: "Û³",
				4: "Û´",
				5: "Ûµ",
				6: "Û¶",
				7: "Û·",
				8: "Û¸",
				9: "Û¹",
				0: "Û°"
			},
			n = {
				"Û±": "1",
				"Û²": "2",
				"Û³": "3",
				"Û´": "4",
				"Ûµ": "5",
				"Û¶": "6",
				"Û·": "7",
				"Û¸": "8",
				"Û¹": "9",
				"Û°": "0"
			},
			r = e.defineLocale("fa", {
				months: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
				monthsShort: "Ú˜Ø§Ù†ÙˆÛŒÙ‡_ÙÙˆØ±ÛŒÙ‡_Ù…Ø§Ø±Ø³_Ø¢ÙˆØ±ÛŒÙ„_Ù…Ù‡_Ú˜ÙˆØ¦Ù†_Ú˜ÙˆØ¦ÛŒÙ‡_Ø§ÙˆØª_Ø³Ù¾ØªØ§Ù…Ø¨Ø±_Ø§Ú©ØªØ¨Ø±_Ù†ÙˆØ§Ù…Ø¨Ø±_Ø¯Ø³Ø§Ù…Ø¨Ø±".split("_"),
				weekdays: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
				weekdaysShort: "ÛŒÚ©â€ŒØ´Ù†Ø¨Ù‡_Ø¯ÙˆØ´Ù†Ø¨Ù‡_Ø³Ù‡â€ŒØ´Ù†Ø¨Ù‡_Ú†Ù‡Ø§Ø±Ø´Ù†Ø¨Ù‡_Ù¾Ù†Ø¬â€ŒØ´Ù†Ø¨Ù‡_Ø¬Ù…Ø¹Ù‡_Ø´Ù†Ø¨Ù‡".split("_"),
				weekdaysMin: "ÛŒ_Ø¯_Ø³_Ú†_Ù¾_Ø¬_Ø´".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				meridiemParse: /Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±|Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/,
				isPM: function(e) {
					return /Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±/.test(e)
				},
				meridiem: function(e, t, n) {
					return 12 > e ? "Ù‚Ø¨Ù„ Ø§Ø² Ø¸Ù‡Ø±" : "Ø¨Ø¹Ø¯ Ø§Ø² Ø¸Ù‡Ø±"
				},
				calendar: {
					sameDay: "[Ø§Ù…Ø±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
					nextDay: "[ÙØ±Ø¯Ø§ Ø³Ø§Ø¹Øª] LT",
					nextWeek: "dddd [Ø³Ø§Ø¹Øª] LT",
					lastDay: "[Ø¯ÛŒØ±ÙˆØ² Ø³Ø§Ø¹Øª] LT",
					lastWeek: "dddd [Ù¾ÛŒØ´] [Ø³Ø§Ø¹Øª] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "Ø¯Ø± %s",
					past: "%s Ù¾ÛŒØ´",
					s: "Ú†Ù†Ø¯ÛŒÙ† Ø«Ø§Ù†ÛŒÙ‡",
					m: "ÛŒÚ© Ø¯Ù‚ÛŒÙ‚Ù‡",
					mm: "%d Ø¯Ù‚ÛŒÙ‚Ù‡",
					h: "ÛŒÚ© Ø³Ø§Ø¹Øª",
					hh: "%d Ø³Ø§Ø¹Øª",
					d: "ÛŒÚ© Ø±ÙˆØ²",
					dd: "%d Ø±ÙˆØ²",
					M: "ÛŒÚ© Ù…Ø§Ù‡",
					MM: "%d Ù…Ø§Ù‡",
					y: "ÛŒÚ© Ø³Ø§Ù„",
					yy: "%d Ø³Ø§Ù„"
				},
				preparse: function(e) {
					return e.replace(/[Û°-Û¹]/g, function(e) {
						return n[e]
					}).replace(/ØŒ/g, ",")
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					}).replace(/,/g, "ØŒ")
				},
				ordinalParse: /\d{1,2}Ù…/,
				ordinal: "%dÙ…",
				week: {
					dow: 6,
					doy: 12
				}
			});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, r, o) {
			var a = "";
			switch (r) {
				case "s":
					return o ? "muutaman sekunnin" : "muutama sekunti";
				case "m":
					return o ? "minuutin" : "minuutti";
				case "mm":
					a = o ? "minuutin" : "minuuttia";
					break;
				case "h":
					return o ? "tunnin" : "tunti";
				case "hh":
					a = o ? "tunnin" : "tuntia";
					break;
				case "d":
					return o ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤";
				case "dd":
					a = o ? "pÃ¤ivÃ¤n" : "pÃ¤ivÃ¤Ã¤";
					break;
				case "M":
					return o ? "kuukauden" : "kuukausi";
				case "MM":
					a = o ? "kuukauden" : "kuukautta";
					break;
				case "y":
					return o ? "vuoden" : "vuosi";
				case "yy":
					a = o ? "vuoden" : "vuotta"
			}
			return a = n(e, o) + " " + a
		}

		function n(e, t) {
			return 10 > e ? t ? o[e] : r[e] : e
		}
		var r = "nolla yksi kaksi kolme neljÃ¤ viisi kuusi seitsemÃ¤n kahdeksan yhdeksÃ¤n".split(" "),
			o = ["nolla", "yhden", "kahden", "kolmen", "neljÃ¤n", "viiden", "kuuden", r[7], r[8], r[9]],
			a = e.defineLocale("fi", {
				months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesÃ¤kuu_heinÃ¤kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
				monthsShort: "tammi_helmi_maalis_huhti_touko_kesÃ¤_heinÃ¤_elo_syys_loka_marras_joulu".split("_"),
				weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
				weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
				weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
				longDateFormat: {
					LT: "HH.mm",
					LTS: "HH.mm.ss",
					L: "DD.MM.YYYY",
					LL: "Do MMMM[ta] YYYY",
					LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
					LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
					l: "D.M.YYYY",
					ll: "Do MMM YYYY",
					lll: "Do MMM YYYY, [klo] HH.mm",
					llll: "ddd, Do MMM YYYY, [klo] HH.mm"
				},
				calendar: {
					sameDay: "[tÃ¤nÃ¤Ã¤n] [klo] LT",
					nextDay: "[huomenna] [klo] LT",
					nextWeek: "dddd [klo] LT",
					lastDay: "[eilen] [klo] LT",
					lastWeek: "[viime] dddd[na] [klo] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s pÃ¤Ã¤stÃ¤",
					past: "%s sitten",
					s: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: t,
					dd: t,
					M: t,
					MM: t,
					y: t,
					yy: t
				},
				ordinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return a
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("fo", {
			months: "januar_februar_mars_aprÃ­l_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sunnudagur_mÃ¡nadagur_tÃ½sdagur_mikudagur_hÃ³sdagur_frÃ­ggjadagur_leygardagur".split("_"),
			weekdaysShort: "sun_mÃ¡n_tÃ½s_mik_hÃ³s_frÃ­_ley".split("_"),
			weekdaysMin: "su_mÃ¡_tÃ½_mi_hÃ³_fr_le".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D. MMMM, YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Ã dag kl.] LT",
				nextDay: "[Ã morgin kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[Ã gjÃ¡r kl.] LT",
				lastWeek: "[sÃ­Ã°stu] dddd [kl] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "um %s",
				past: "%s sÃ­Ã°ani",
				s: "fÃ¡ sekund",
				m: "ein minutt",
				mm: "%d minuttir",
				h: "ein tÃ­mi",
				hh: "%d tÃ­mar",
				d: "ein dagur",
				dd: "%d dagar",
				M: "ein mÃ¡naÃ°i",
				MM: "%d mÃ¡naÃ°ir",
				y: "eitt Ã¡r",
				yy: "%d Ã¡r"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("fr", {
			months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
			monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd'hui Ã ] LT",
				nextDay: "[Demain Ã ] LT",
				nextWeek: "dddd [Ã ] LT",
				lastDay: "[Hier Ã ] LT",
				lastWeek: "dddd [dernier Ã ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|)/,
			ordinal: function(e) {
				return e + (1 === e ? "er" : "")
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("fr-ca", {
			months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
			monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd'hui Ã ] LT",
				nextDay: "[Demain Ã ] LT",
				nextWeek: "dddd [Ã ] LT",
				lastDay: "[Hier Ã ] LT",
				lastWeek: "dddd [dernier Ã ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|e)/,
			ordinal: function(e) {
				return e + (1 === e ? "er" : "e")
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("fr-ch", {
			months: "janvier_fÃ©vrier_mars_avril_mai_juin_juillet_aoÃ»t_septembre_octobre_novembre_dÃ©cembre".split("_"),
			monthsShort: "janv._fÃ©vr._mars_avr._mai_juin_juil._aoÃ»t_sept._oct._nov._dÃ©c.".split("_"),
			monthsParseExact: !0,
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd'hui Ã ] LT",
				nextDay: "[Demain Ã ] LT",
				nextWeek: "dddd [Ã ] LT",
				lastDay: "[Hier Ã ] LT",
				lastWeek: "dddd [dernier Ã ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|e)/,
			ordinal: function(e) {
				return e + (1 === e ? "er" : "e")
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
			n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			r = e.defineLocale("fy", {
				months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
				monthsShort: function(e, r) {
					return /-MMM-/.test(r) ? n[e.month()] : t[e.month()]
				},
				monthsParseExact: !0,
				weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
				weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
				weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD-MM-YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[hjoed om] LT",
					nextDay: "[moarn om] LT",
					nextWeek: "dddd [om] LT",
					lastDay: "[juster om] LT",
					lastWeek: "[Ã´frÃ»ne] dddd [om] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "oer %s",
					past: "%s lyn",
					s: "in pear sekonden",
					m: "ien minÃºt",
					mm: "%d minuten",
					h: "ien oere",
					hh: "%d oeren",
					d: "ien dei",
					dd: "%d dagen",
					M: "ien moanne",
					MM: "%d moannen",
					y: "ien jier",
					yy: "%d jierren"
				},
				ordinalParse: /\d{1,2}(ste|de)/,
				ordinal: function(e) {
					return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = ["Am Faoilleach", "An Gearran", "Am MÃ rt", "An Giblean", "An CÃ¨itean", "An t-Ã’gmhios", "An t-Iuchar", "An LÃ¹nastal", "An t-Sultain", "An DÃ mhair", "An t-Samhain", "An DÃ¹bhlachd"],
			n = ["Faoi", "Gear", "MÃ rt", "Gibl", "CÃ¨it", "Ã’gmh", "Iuch", "LÃ¹n", "Sult", "DÃ mh", "Samh", "DÃ¹bh"],
			r = ["DidÃ²mhnaich", "Diluain", "DimÃ irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
			o = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
			a = ["DÃ²", "Lu", "MÃ ", "Ci", "Ar", "Ha", "Sa"],
			i = e.defineLocale("gd", {
				months: t,
				monthsShort: n,
				monthsParseExact: !0,
				weekdays: r,
				weekdaysShort: o,
				weekdaysMin: a,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[An-diugh aig] LT",
					nextDay: "[A-mÃ ireach aig] LT",
					nextWeek: "dddd [aig] LT",
					lastDay: "[An-dÃ¨ aig] LT",
					lastWeek: "dddd [seo chaidh] [aig] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "ann an %s",
					past: "bho chionn %s",
					s: "beagan diogan",
					m: "mionaid",
					mm: "%d mionaidean",
					h: "uair",
					hh: "%d uairean",
					d: "latha",
					dd: "%d latha",
					M: "mÃ¬os",
					MM: "%d mÃ¬osan",
					y: "bliadhna",
					yy: "%d bliadhna"
				},
				ordinalParse: /\d{1,2}(d|na|mh)/,
				ordinal: function(e) {
					var t = 1 === e ? "d" : e % 10 === 2 ? "na" : "mh";
					return e + t
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return i
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("gl", {
			months: "Xaneiro_Febreiro_Marzo_Abril_Maio_XuÃ±o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
			monthsShort: "Xan._Feb._Mar._Abr._Mai._XuÃ±._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "Domingo_Luns_Martes_MÃ©rcores_Xoves_Venres_SÃ¡bado".split("_"),
			weekdaysShort: "Dom._Lun._Mar._MÃ©r._Xov._Ven._SÃ¡b.".split("_"),
			weekdaysMin: "Do_Lu_Ma_MÃ©_Xo_Ve_SÃ¡".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: function() {
					return "[hoxe " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
				},
				nextDay: function() {
					return "[maÃ±Ã¡ " + (1 !== this.hours() ? "Ã¡s" : "Ã¡") + "] LT"
				},
				nextWeek: function() {
					return "dddd [" + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
				},
				lastDay: function() {
					return "[onte " + (1 !== this.hours() ? "Ã¡" : "a") + "] LT"
				},
				lastWeek: function() {
					return "[o] dddd [pasado " + (1 !== this.hours() ? "Ã¡s" : "a") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function(e) {
					return "uns segundos" === e ? "nuns segundos" : "en " + e
				},
				past: "hai %s",
				s: "uns segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "unha hora",
				hh: "%d horas",
				d: "un dÃ­a",
				dd: "%d dÃ­as",
				M: "un mes",
				MM: "%d meses",
				y: "un ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}Âº/,
			ordinal: "%dÂº",
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("he", {
			months: "×™× ×•××¨_×¤×‘×¨×•××¨_×ž×¨×¥_××¤×¨×™×œ_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×•×¡×˜_×¡×¤×˜×ž×‘×¨_××•×§×˜×•×‘×¨_× ×•×‘×ž×‘×¨_×“×¦×ž×‘×¨".split("_"),
			monthsShort: "×™× ×•×³_×¤×‘×¨×³_×ž×¨×¥_××¤×¨×³_×ž××™_×™×•× ×™_×™×•×œ×™_××•×’×³_×¡×¤×˜×³_××•×§×³_× ×•×‘×³_×“×¦×ž×³".split("_"),
			weekdays: "×¨××©×•×Ÿ_×©× ×™_×©×œ×™×©×™_×¨×‘×™×¢×™_×—×ž×™×©×™_×©×™×©×™_×©×‘×ª".split("_"),
			weekdaysShort: "××³_×‘×³_×’×³_×“×³_×”×³_×•×³_×©×³".split("_"),
			weekdaysMin: "×_×‘_×’_×“_×”_×•_×©".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [×‘]MMMM YYYY",
				LLL: "D [×‘]MMMM YYYY HH:mm",
				LLLL: "dddd, D [×‘]MMMM YYYY HH:mm",
				l: "D/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[×”×™×•× ×‘Ö¾]LT",
				nextDay: "[×ž×—×¨ ×‘Ö¾]LT",
				nextWeek: "dddd [×‘×©×¢×”] LT",
				lastDay: "[××ª×ž×•×œ ×‘Ö¾]LT",
				lastWeek: "[×‘×™×•×] dddd [×”××—×¨×•×Ÿ ×‘×©×¢×”] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "×‘×¢×•×“ %s",
				past: "×œ×¤× ×™ %s",
				s: "×ž×¡×¤×¨ ×©× ×™×•×ª",
				m: "×“×§×”",
				mm: "%d ×“×§×•×ª",
				h: "×©×¢×”",
				hh: function(e) {
					return 2 === e ? "×©×¢×ª×™×™×" : e + " ×©×¢×•×ª"
				},
				d: "×™×•×",
				dd: function(e) {
					return 2 === e ? "×™×•×ž×™×™×" : e + " ×™×ž×™×"
				},
				M: "×—×•×“×©",
				MM: function(e) {
					return 2 === e ? "×—×•×“×©×™×™×" : e + " ×—×•×“×©×™×"
				},
				y: "×©× ×”",
				yy: function(e) {
					return 2 === e ? "×©× ×ª×™×™×" : e % 10 === 0 && 10 !== e ? e + " ×©× ×”" : e + " ×©× ×™×"
				}
			},
			meridiemParse: /××—×”"×¦|×œ×¤× ×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×œ×¤× ×™ ×”×¦×”×¨×™×™×|×œ×¤× ×•×ª ×‘×•×§×¨|×‘×‘×•×§×¨|×‘×¢×¨×‘/i,
			isPM: function(e) {
				return /^(××—×”"×¦|××—×¨×™ ×”×¦×”×¨×™×™×|×‘×¢×¨×‘)$/.test(e)
			},
			meridiem: function(e, t, n) {
				return 5 > e ? "×œ×¤× ×•×ª ×‘×•×§×¨" : 10 > e ? "×‘×‘×•×§×¨" : 12 > e ? n ? '×œ×¤× ×”"×¦' : "×œ×¤× ×™ ×”×¦×”×¨×™×™×" : 18 > e ? n ? '××—×”"×¦' : "××—×¨×™ ×”×¦×”×¨×™×™×" : "×‘×¢×¨×‘"
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "à¥§",
				2: "à¥¨",
				3: "à¥©",
				4: "à¥ª",
				5: "à¥«",
				6: "à¥¬",
				7: "à¥­",
				8: "à¥®",
				9: "à¥¯",
				0: "à¥¦"
			},
			n = {
				"à¥§": "1",
				"à¥¨": "2",
				"à¥©": "3",
				"à¥ª": "4",
				"à¥«": "5",
				"à¥¬": "6",
				"à¥­": "7",
				"à¥®": "8",
				"à¥¯": "9",
				"à¥¦": "0"
			},
			r = e.defineLocale("hi", {
				months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¤¼à¤°à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆà¤²_à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤¸à¥à¤¤_à¤¸à¤¿à¤¤à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‚à¤¬à¤°_à¤¨à¤µà¤®à¥à¤¬à¤°_à¤¦à¤¿à¤¸à¤®à¥à¤¬à¤°".split("_"),
				monthsShort: "à¤œà¤¨._à¤«à¤¼à¤°._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¥ˆ._à¤®à¤ˆ_à¤œà¥‚à¤¨_à¤œà¥à¤²._à¤…à¤—._à¤¸à¤¿à¤¤._à¤…à¤•à¥à¤Ÿà¥‚._à¤¨à¤µ._à¤¦à¤¿à¤¸.".split("_"),
				monthsParseExact: !0,
				weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤²à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
				weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤²_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
				weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
				longDateFormat: {
					LT: "A h:mm à¤¬à¤œà¥‡",
					LTS: "A h:mm:ss à¤¬à¤œà¥‡",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm à¤¬à¤œà¥‡",
					LLLL: "dddd, D MMMM YYYY, A h:mm à¤¬à¤œà¥‡"
				},
				calendar: {
					sameDay: "[à¤†à¤œ] LT",
					nextDay: "[à¤•à¤²] LT",
					nextWeek: "dddd, LT",
					lastDay: "[à¤•à¤²] LT",
					lastWeek: "[à¤ªà¤¿à¤›à¤²à¥‡] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s à¤®à¥‡à¤‚",
					past: "%s à¤ªà¤¹à¤²à¥‡",
					s: "à¤•à¥à¤› à¤¹à¥€ à¤•à¥à¤·à¤£",
					m: "à¤à¤• à¤®à¤¿à¤¨à¤Ÿ",
					mm: "%d à¤®à¤¿à¤¨à¤Ÿ",
					h: "à¤à¤• à¤˜à¤‚à¤Ÿà¤¾",
					hh: "%d à¤˜à¤‚à¤Ÿà¥‡",
					d: "à¤à¤• à¤¦à¤¿à¤¨",
					dd: "%d à¤¦à¤¿à¤¨",
					M: "à¤à¤• à¤®à¤¹à¥€à¤¨à¥‡",
					MM: "%d à¤®à¤¹à¥€à¤¨à¥‡",
					y: "à¤à¤• à¤µà¤°à¥à¤·",
					yy: "%d à¤µà¤°à¥à¤·"
				},
				preparse: function(e) {
					return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /à¤°à¤¾à¤¤|à¤¸à¥à¤¬à¤¹|à¤¦à¥‹à¤ªà¤¹à¤°|à¤¶à¤¾à¤®/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "à¤°à¤¾à¤¤" === t ? 4 > e ? e : e + 12 : "à¤¸à¥à¤¬à¤¹" === t ? e : "à¤¦à¥‹à¤ªà¤¹à¤°" === t ? e >= 10 ? e : e + 12 : "à¤¶à¤¾à¤®" === t ? e + 12 : void 0
				},
				meridiem: function(e, t, n) {
					return 4 > e ? "à¤°à¤¾à¤¤" : 10 > e ? "à¤¸à¥à¤¬à¤¹" : 17 > e ? "à¤¦à¥‹à¤ªà¤¹à¤°" : 20 > e ? "à¤¶à¤¾à¤®" : "à¤°à¤¾à¤¤"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n) {
			var r = e + " ";
			switch (n) {
				case "m":
					return t ? "jedna minuta" : "jedne minute";
				case "mm":
					return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
				case "h":
					return t ? "jedan sat" : "jednog sata";
				case "hh":
					return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
				case "dd":
					return r += 1 === e ? "dan" : "dana";
				case "MM":
					return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
				case "yy":
					return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
			}
		}
		var n = e.defineLocale("hr", {
			months: {
				format: "sijeÄnja_veljaÄe_oÅ¾ujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
				standalone: "sijeÄanj_veljaÄa_oÅ¾ujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
			},
			monthsShort: "sij._velj._oÅ¾u._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u] LT",
				nextDay: "[sutra u] LT",
				nextWeek: function() {
					switch (this.day()) {
						case 0:
							return "[u] [nedjelju] [u] LT";
						case 3:
							return "[u] [srijedu] [u] LT";
						case 6:
							return "[u] [subotu] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[u] dddd [u] LT"
					}
				},
				lastDay: "[juÄer u] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
							return "[proÅ¡lu] dddd [u] LT";
						case 6:
							return "[proÅ¡le] [subote] [u] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[proÅ¡li] dddd [u] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za %s",
				past: "prije %s",
				s: "par sekundi",
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: "dan",
				dd: t,
				M: "mjesec",
				MM: t,
				y: "godinu",
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, r) {
			var o = e;
			switch (n) {
				case "s":
					return r || t ? "nÃ©hÃ¡ny mÃ¡sodperc" : "nÃ©hÃ¡ny mÃ¡sodperce";
				case "m":
					return "egy" + (r || t ? " perc" : " perce");
				case "mm":
					return o + (r || t ? " perc" : " perce");
				case "h":
					return "egy" + (r || t ? " Ã³ra" : " Ã³rÃ¡ja");
				case "hh":
					return o + (r || t ? " Ã³ra" : " Ã³rÃ¡ja");
				case "d":
					return "egy" + (r || t ? " nap" : " napja");
				case "dd":
					return o + (r || t ? " nap" : " napja");
				case "M":
					return "egy" + (r || t ? " hÃ³nap" : " hÃ³napja");
				case "MM":
					return o + (r || t ? " hÃ³nap" : " hÃ³napja");
				case "y":
					return "egy" + (r || t ? " Ã©v" : " Ã©ve");
				case "yy":
					return o + (r || t ? " Ã©v" : " Ã©ve")
			}
			return ""
		}

		function n(e) {
			return (e ? "" : "[mÃºlt] ") + "[" + r[this.day()] + "] LT[-kor]"
		}
		var r = "vasÃ¡rnap hÃ©tfÅ‘n kedden szerdÃ¡n csÃ¼tÃ¶rtÃ¶kÃ¶n pÃ©nteken szombaton".split(" "),
			o = e.defineLocale("hu", {
				months: "januÃ¡r_februÃ¡r_mÃ¡rcius_Ã¡prilis_mÃ¡jus_jÃºnius_jÃºlius_augusztus_szeptember_oktÃ³ber_november_december".split("_"),
				monthsShort: "jan_feb_mÃ¡rc_Ã¡pr_mÃ¡j_jÃºn_jÃºl_aug_szept_okt_nov_dec".split("_"),
				weekdays: "vasÃ¡rnap_hÃ©tfÅ‘_kedd_szerda_csÃ¼tÃ¶rtÃ¶k_pÃ©ntek_szombat".split("_"),
				weekdaysShort: "vas_hÃ©t_kedd_sze_csÃ¼t_pÃ©n_szo".split("_"),
				weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "YYYY.MM.DD.",
					LL: "YYYY. MMMM D.",
					LLL: "YYYY. MMMM D. H:mm",
					LLLL: "YYYY. MMMM D., dddd H:mm"
				},
				meridiemParse: /de|du/i,
				isPM: function(e) {
					return "u" === e.charAt(1).toLowerCase()
				},
				meridiem: function(e, t, n) {
					return 12 > e ? n === !0 ? "de" : "DE" : n === !0 ? "du" : "DU"
				},
				calendar: {
					sameDay: "[ma] LT[-kor]",
					nextDay: "[holnap] LT[-kor]",
					nextWeek: function() {
						return n.call(this, !0)
					},
					lastDay: "[tegnap] LT[-kor]",
					lastWeek: function() {
						return n.call(this, !1)
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "%s mÃºlva",
					past: "%s",
					s: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: t,
					dd: t,
					M: t,
					MM: t,
					y: t,
					yy: t
				},
				ordinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 7
				}
			});
		return o
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("hy-am", {
			months: {
				format: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€Õ«_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€Õ«_Õ´Õ¡Ö€Õ¿Õ«_Õ¡ÕºÖ€Õ«Õ¬Õ«_Õ´Õ¡ÕµÕ«Õ½Õ«_Õ°Õ¸Ö‚Õ¶Õ«Õ½Õ«_Õ°Õ¸Ö‚Õ¬Õ«Õ½Õ«_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½Õ«_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€Õ«_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€Õ«".split("_"),
				standalone: "Õ°Õ¸Ö‚Õ¶Õ¾Õ¡Ö€_ÖƒÕ¥Õ¿Ö€Õ¾Õ¡Ö€_Õ´Õ¡Ö€Õ¿_Õ¡ÕºÖ€Õ«Õ¬_Õ´Õ¡ÕµÕ«Õ½_Õ°Õ¸Ö‚Õ¶Õ«Õ½_Õ°Õ¸Ö‚Õ¬Õ«Õ½_Ö…Õ£Õ¸Õ½Õ¿Õ¸Õ½_Õ½Õ¥ÕºÕ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ°Õ¸Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€_Õ¶Õ¸ÕµÕ¥Õ´Õ¢Õ¥Ö€_Õ¤Õ¥Õ¯Õ¿Õ¥Õ´Õ¢Õ¥Ö€".split("_")
			},
			monthsShort: "Õ°Õ¶Õ¾_ÖƒÕ¿Ö€_Õ´Ö€Õ¿_Õ¡ÕºÖ€_Õ´ÕµÕ½_Õ°Õ¶Õ½_Õ°Õ¬Õ½_Ö…Õ£Õ½_Õ½ÕºÕ¿_Õ°Õ¯Õ¿_Õ¶Õ´Õ¢_Õ¤Õ¯Õ¿".split("_"),
			weekdays: "Õ¯Õ«Ö€Õ¡Õ¯Õ«_Õ¥Ö€Õ¯Õ¸Ö‚Õ·Õ¡Õ¢Õ©Õ«_Õ¥Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ¹Õ¸Ö€Õ¥Ö„Õ·Õ¡Õ¢Õ©Õ«_Õ°Õ«Õ¶Õ£Õ·Õ¡Õ¢Õ©Õ«_Õ¸Ö‚Ö€Õ¢Õ¡Õ©_Õ·Õ¡Õ¢Õ¡Õ©".split("_"),
			weekdaysShort: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
			weekdaysMin: "Õ¯Ö€Õ¯_Õ¥Ö€Õ¯_Õ¥Ö€Ö„_Õ¹Ö€Ö„_Õ°Õ¶Õ£_Õ¸Ö‚Ö€Õ¢_Õ·Õ¢Õ©".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY Õ©.",
				LLL: "D MMMM YYYY Õ©., HH:mm",
				LLLL: "dddd, D MMMM YYYY Õ©., HH:mm"
			},
			calendar: {
				sameDay: "[Õ¡ÕµÕ½Ö…Ö€] LT",
				nextDay: "[Õ¾Õ¡Õ²Õ¨] LT",
				lastDay: "[Õ¥Ö€Õ¥Õ¯] LT",
				nextWeek: function() {
					return "dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
				},
				lastWeek: function() {
					return "[Õ¡Õ¶ÖÕ¡Õ®] dddd [Ö…Ö€Õ¨ ÕªÕ¡Õ´Õ¨] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s Õ°Õ¥Õ¿Õ¸",
				past: "%s Õ¡Õ¼Õ¡Õ»",
				s: "Õ´Õ« Ö„Õ¡Õ¶Õ« Õ¾Õ¡ÕµÖ€Õ¯ÕµÕ¡Õ¶",
				m: "Ö€Õ¸ÕºÕ¥",
				mm: "%d Ö€Õ¸ÕºÕ¥",
				h: "ÕªÕ¡Õ´",
				hh: "%d ÕªÕ¡Õ´",
				d: "Ö…Ö€",
				dd: "%d Ö…Ö€",
				M: "Õ¡Õ´Õ«Õ½",
				MM: "%d Õ¡Õ´Õ«Õ½",
				y: "Õ¿Õ¡Ö€Õ«",
				yy: "%d Õ¿Õ¡Ö€Õ«"
			},
			meridiemParse: /Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡|Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡|ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶/,
			isPM: function(e) {
				return /^(ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡|Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶)$/.test(e)
			},
			meridiem: function(e) {
				return 4 > e ? "Õ£Õ«Õ·Õ¥Ö€Õ¾Õ¡" : 12 > e ? "Õ¡Õ¼Õ¡Õ¾Õ¸Õ¿Õ¾Õ¡" : 17 > e ? "ÖÕ¥Ö€Õ¥Õ¯Õ¾Õ¡" : "Õ¥Ö€Õ¥Õ¯Õ¸ÕµÕ¡Õ¶"
			},
			ordinalParse: /\d{1,2}|\d{1,2}-(Õ«Õ¶|Ö€Õ¤)/,
			ordinal: function(e, t) {
				switch (t) {
					case "DDD":
					case "w":
					case "W":
					case "DDDo":
						return 1 === e ? e + "-Õ«Õ¶" : e + "-Ö€Õ¤";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("id", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|siang|sore|malam/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return 11 > e ? "pagi" : 15 > e ? "siang" : 19 > e ? "sore" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Besok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kemarin pukul] LT",
				lastWeek: "dddd [lalu pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lalu",
				s: "beberapa detik",
				m: "semenit",
				mm: "%d menit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e) {
			return e % 100 === 11 ? !0 : e % 10 !== 1
		}

		function n(e, n, r, o) {
			var a = e + " ";
			switch (r) {
				case "s":
					return n || o ? "nokkrar sekÃºndur" : "nokkrum sekÃºndum";
				case "m":
					return n ? "mÃ­nÃºta" : "mÃ­nÃºtu";
				case "mm":
					return t(e) ? a + (n || o ? "mÃ­nÃºtur" : "mÃ­nÃºtum") : n ? a + "mÃ­nÃºta" : a + "mÃ­nÃºtu";
				case "hh":
					return t(e) ? a + (n || o ? "klukkustundir" : "klukkustundum") : a + "klukkustund";
				case "d":
					return n ? "dagur" : o ? "dag" : "degi";
				case "dd":
					return t(e) ? n ? a + "dagar" : a + (o ? "daga" : "dÃ¶gum") : n ? a + "dagur" : a + (o ? "dag" : "degi");
				case "M":
					return n ? "mÃ¡nuÃ°ur" : o ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i";
				case "MM":
					return t(e) ? n ? a + "mÃ¡nuÃ°ir" : a + (o ? "mÃ¡nuÃ°i" : "mÃ¡nuÃ°um") : n ? a + "mÃ¡nuÃ°ur" : a + (o ? "mÃ¡nuÃ°" : "mÃ¡nuÃ°i");
				case "y":
					return n || o ? "Ã¡r" : "Ã¡ri";
				case "yy":
					return t(e) ? a + (n || o ? "Ã¡r" : "Ã¡rum") : a + (n || o ? "Ã¡r" : "Ã¡ri")
			}
		}
		var r = e.defineLocale("is", {
			months: "janÃºar_febrÃºar_mars_aprÃ­l_maÃ­_jÃºnÃ­_jÃºlÃ­_Ã¡gÃºst_september_oktÃ³ber_nÃ³vember_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_maÃ­_jÃºn_jÃºl_Ã¡gÃº_sep_okt_nÃ³v_des".split("_"),
			weekdays: "sunnudagur_mÃ¡nudagur_Ã¾riÃ°judagur_miÃ°vikudagur_fimmtudagur_fÃ¶studagur_laugardagur".split("_"),
			weekdaysShort: "sun_mÃ¡n_Ã¾ri_miÃ°_fim_fÃ¶s_lau".split("_"),
			weekdaysMin: "Su_MÃ¡_Ãžr_Mi_Fi_FÃ¶_La".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
			},
			calendar: {
				sameDay: "[Ã­ dag kl.] LT",
				nextDay: "[Ã¡ morgun kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[Ã­ gÃ¦r kl.] LT",
				lastWeek: "[sÃ­Ã°asta] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "eftir %s",
				past: "fyrir %s sÃ­Ã°an",
				s: n,
				m: n,
				mm: n,
				h: "klukkustund",
				hh: n,
				d: n,
				dd: n,
				M: n,
				MM: n,
				y: n,
				yy: n
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("it", {
			months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
			monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
			weekdays: "Domenica_LunedÃ¬_MartedÃ¬_MercoledÃ¬_GiovedÃ¬_VenerdÃ¬_Sabato".split("_"),
			weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
			weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Oggi alle] LT",
				nextDay: "[Domani alle] LT",
				nextWeek: "dddd [alle] LT",
				lastDay: "[Ieri alle] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 0:
							return "[la scorsa] dddd [alle] LT";
						default:
							return "[lo scorso] dddd [alle] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function(e) {
					return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
				},
				past: "%s fa",
				s: "alcuni secondi",
				m: "un minuto",
				mm: "%d minuti",
				h: "un'ora",
				hh: "%d ore",
				d: "un giorno",
				dd: "%d giorni",
				M: "un mese",
				MM: "%d mesi",
				y: "un anno",
				yy: "%d anni"
			},
			ordinalParse: /\d{1,2}Âº/,
			ordinal: "%dÂº",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ja", {
			months: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
			monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
			weekdays: "æ—¥æ›œæ—¥_æœˆæ›œæ—¥_ç«æ›œæ—¥_æ°´æ›œæ—¥_æœ¨æ›œæ—¥_é‡‘æ›œæ—¥_åœŸæ›œæ—¥".split("_"),
			weekdaysShort: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
			weekdaysMin: "æ—¥_æœˆ_ç«_æ°´_æœ¨_é‡‘_åœŸ".split("_"),
			longDateFormat: {
				LT: "Ahæ™‚måˆ†",
				LTS: "Ahæ™‚måˆ†sç§’",
				L: "YYYY/MM/DD",
				LL: "YYYYå¹´MæœˆDæ—¥",
				LLL: "YYYYå¹´MæœˆDæ—¥Ahæ™‚måˆ†",
				LLLL: "YYYYå¹´MæœˆDæ—¥Ahæ™‚måˆ† dddd"
			},
			meridiemParse: /åˆå‰|åˆå¾Œ/i,
			isPM: function(e) {
				return "åˆå¾Œ" === e
			},
			meridiem: function(e, t, n) {
				return 12 > e ? "åˆå‰" : "åˆå¾Œ"
			},
			calendar: {
				sameDay: "[ä»Šæ—¥] LT",
				nextDay: "[æ˜Žæ—¥] LT",
				nextWeek: "[æ¥é€±]dddd LT",
				lastDay: "[æ˜¨æ—¥] LT",
				lastWeek: "[å‰é€±]dddd LT",
				sameElse: "L"
			},
			ordinalParse: /\d{1,2}æ—¥/,
			ordinal: function(e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "æ—¥";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%så¾Œ",
				past: "%så‰",
				s: "æ•°ç§’",
				m: "1åˆ†",
				mm: "%dåˆ†",
				h: "1æ™‚é–“",
				hh: "%dæ™‚é–“",
				d: "1æ—¥",
				dd: "%dæ—¥",
				M: "1ãƒ¶æœˆ",
				MM: "%dãƒ¶æœˆ",
				y: "1å¹´",
				yy: "%då¹´"
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("jv", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
			weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /enjing|siyang|sonten|ndalu/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return 11 > e ? "enjing" : 15 > e ? "siyang" : 19 > e ? "sonten" : "ndalu"
			},
			calendar: {
				sameDay: "[Dinten puniko pukul] LT",
				nextDay: "[Mbenjang pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kala wingi pukul] LT",
				lastWeek: "dddd [kepengker pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "wonten ing %s",
				past: "%s ingkang kepengker",
				s: "sawetawis detik",
				m: "setunggal menit",
				mm: "%d menit",
				h: "setunggal jam",
				hh: "%d jam",
				d: "sedinten",
				dd: "%d dinten",
				M: "sewulan",
				MM: "%d wulan",
				y: "setaun",
				yy: "%d taun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ka", {
			months: {
				standalone: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ˜_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ˜_áƒ›áƒáƒ áƒ¢áƒ˜_áƒáƒžáƒ áƒ˜áƒšáƒ˜_áƒ›áƒáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ˜_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ˜_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ˜_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ˜".split("_"),
				format: "áƒ˜áƒáƒœáƒ•áƒáƒ áƒ¡_áƒ—áƒ”áƒ‘áƒ”áƒ áƒ•áƒáƒšáƒ¡_áƒ›áƒáƒ áƒ¢áƒ¡_áƒáƒžáƒ áƒ˜áƒšáƒ˜áƒ¡_áƒ›áƒáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒœáƒ˜áƒ¡áƒ¡_áƒ˜áƒ•áƒšáƒ˜áƒ¡áƒ¡_áƒáƒ’áƒ•áƒ˜áƒ¡áƒ¢áƒ¡_áƒ¡áƒ”áƒ¥áƒ¢áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒáƒ¥áƒ¢áƒáƒ›áƒ‘áƒ”áƒ áƒ¡_áƒœáƒáƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡_áƒ“áƒ”áƒ™áƒ”áƒ›áƒ‘áƒ”áƒ áƒ¡".split("_")
			},
			monthsShort: "áƒ˜áƒáƒœ_áƒ—áƒ”áƒ‘_áƒ›áƒáƒ _áƒáƒžáƒ _áƒ›áƒáƒ˜_áƒ˜áƒ•áƒœ_áƒ˜áƒ•áƒš_áƒáƒ’áƒ•_áƒ¡áƒ”áƒ¥_áƒáƒ¥áƒ¢_áƒœáƒáƒ”_áƒ“áƒ”áƒ™".split("_"),
			weekdays: {
				standalone: "áƒ™áƒ•áƒ˜áƒ áƒ_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ˜_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ˜_áƒ¨áƒáƒ‘áƒáƒ—áƒ˜".split("_"),
				format: "áƒ™áƒ•áƒ˜áƒ áƒáƒ¡_áƒáƒ áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ¡áƒáƒ›áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒáƒ—áƒ®áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒ®áƒ£áƒ—áƒ¨áƒáƒ‘áƒáƒ—áƒ¡_áƒžáƒáƒ áƒáƒ¡áƒ™áƒ”áƒ•áƒ¡_áƒ¨áƒáƒ‘áƒáƒ—áƒ¡".split("_"),
				isFormat: /(áƒ¬áƒ˜áƒœáƒ|áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’)/
			},
			weekdaysShort: "áƒ™áƒ•áƒ˜_áƒáƒ áƒ¨_áƒ¡áƒáƒ›_áƒáƒ—áƒ®_áƒ®áƒ£áƒ—_áƒžáƒáƒ _áƒ¨áƒáƒ‘".split("_"),
			weekdaysMin: "áƒ™áƒ•_áƒáƒ _áƒ¡áƒ_áƒáƒ—_áƒ®áƒ£_áƒžáƒ_áƒ¨áƒ".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[áƒ“áƒ¦áƒ”áƒ¡] LT[-áƒ–áƒ”]",
				nextDay: "[áƒ®áƒ•áƒáƒš] LT[-áƒ–áƒ”]",
				lastDay: "[áƒ’áƒ£áƒ¨áƒ˜áƒœ] LT[-áƒ–áƒ”]",
				nextWeek: "[áƒ¨áƒ”áƒ›áƒ“áƒ”áƒ’] dddd LT[-áƒ–áƒ”]",
				lastWeek: "[áƒ¬áƒ˜áƒœáƒ] dddd LT-áƒ–áƒ”",
				sameElse: "L"
			},
			relativeTime: {
				future: function(e) {
					return /(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ¬áƒ”áƒšáƒ˜)/.test(e) ? e.replace(/áƒ˜$/, "áƒ¨áƒ˜") : e + "áƒ¨áƒ˜"
				},
				past: function(e) {
					return /(áƒ¬áƒáƒ›áƒ˜|áƒ¬áƒ£áƒ—áƒ˜|áƒ¡áƒáƒáƒ—áƒ˜|áƒ“áƒ¦áƒ”|áƒ—áƒ•áƒ”)/.test(e) ? e.replace(/(áƒ˜|áƒ”)$/, "áƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : /áƒ¬áƒ”áƒšáƒ˜/.test(e) ? e.replace(/áƒ¬áƒ”áƒšáƒ˜$/, "áƒ¬áƒšáƒ˜áƒ¡ áƒ¬áƒ˜áƒœ") : void 0
				},
				s: "áƒ áƒáƒ›áƒ“áƒ”áƒœáƒ˜áƒ›áƒ” áƒ¬áƒáƒ›áƒ˜",
				m: "áƒ¬áƒ£áƒ—áƒ˜",
				mm: "%d áƒ¬áƒ£áƒ—áƒ˜",
				h: "áƒ¡áƒáƒáƒ—áƒ˜",
				hh: "%d áƒ¡áƒáƒáƒ—áƒ˜",
				d: "áƒ“áƒ¦áƒ”",
				dd: "%d áƒ“áƒ¦áƒ”",
				M: "áƒ—áƒ•áƒ”",
				MM: "%d áƒ—áƒ•áƒ”",
				y: "áƒ¬áƒ”áƒšáƒ˜",
				yy: "%d áƒ¬áƒ”áƒšáƒ˜"
			},
			ordinalParse: /0|1-áƒšáƒ˜|áƒ›áƒ”-\d{1,2}|\d{1,2}-áƒ”/,
			ordinal: function(e) {
				return 0 === e ? e : 1 === e ? e + "-áƒšáƒ˜" : 20 > e || 100 >= e && e % 20 === 0 || e % 100 === 0 ? "áƒ›áƒ”-" + e : e + "-áƒ”"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				0: "-ÑˆÑ–",
				1: "-ÑˆÑ–",
				2: "-ÑˆÑ–",
				3: "-ÑˆÑ–",
				4: "-ÑˆÑ–",
				5: "-ÑˆÑ–",
				6: "-ÑˆÑ‹",
				7: "-ÑˆÑ–",
				8: "-ÑˆÑ–",
				9: "-ÑˆÑ‹",
				10: "-ÑˆÑ‹",
				20: "-ÑˆÑ‹",
				30: "-ÑˆÑ‹",
				40: "-ÑˆÑ‹",
				50: "-ÑˆÑ–",
				60: "-ÑˆÑ‹",
				70: "-ÑˆÑ–",
				80: "-ÑˆÑ–",
				90: "-ÑˆÑ‹",
				100: "-ÑˆÑ–"
			},
			n = e.defineLocale("kk", {
				months: "Ò›Ð°Ò£Ñ‚Ð°Ñ€_Ð°Ò›Ð¿Ð°Ð½_Ð½Ð°ÑƒÑ€Ñ‹Ð·_ÑÓ™ÑƒÑ–Ñ€_Ð¼Ð°Ð¼Ñ‹Ñ€_Ð¼Ð°ÑƒÑÑ‹Ð¼_ÑˆÑ–Ð»Ð´Ðµ_Ñ‚Ð°Ð¼Ñ‹Ð·_Ò›Ñ‹Ñ€ÐºÒ¯Ð¹ÐµÐº_Ò›Ð°Ð·Ð°Ð½_Ò›Ð°Ñ€Ð°ÑˆÐ°_Ð¶ÐµÐ»Ñ‚Ð¾Ò›ÑÐ°Ð½".split("_"),
				monthsShort: "Ò›Ð°Ò£_Ð°Ò›Ð¿_Ð½Ð°Ñƒ_ÑÓ™Ñƒ_Ð¼Ð°Ð¼_Ð¼Ð°Ñƒ_ÑˆÑ–Ð»_Ñ‚Ð°Ð¼_Ò›Ñ‹Ñ€_Ò›Ð°Ð·_Ò›Ð°Ñ€_Ð¶ÐµÐ»".split("_"),
				weekdays: "Ð¶ÐµÐºÑÐµÐ½Ð±Ñ–_Ð´Ò¯Ð¹ÑÐµÐ½Ð±Ñ–_ÑÐµÐ¹ÑÐµÐ½Ð±Ñ–_ÑÓ™Ñ€ÑÐµÐ½Ð±Ñ–_Ð±ÐµÐ¹ÑÐµÐ½Ð±Ñ–_Ð¶Ò±Ð¼Ð°_ÑÐµÐ½Ð±Ñ–".split("_"),
				weekdaysShort: "Ð¶ÐµÐº_Ð´Ò¯Ð¹_ÑÐµÐ¹_ÑÓ™Ñ€_Ð±ÐµÐ¹_Ð¶Ò±Ð¼_ÑÐµÐ½".split("_"),
				weekdaysMin: "Ð¶Ðº_Ð´Ð¹_ÑÐ¹_ÑÑ€_Ð±Ð¹_Ð¶Ð¼_ÑÐ½".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[Ð‘Ò¯Ð³Ñ–Ð½ ÑÐ°Ò“Ð°Ñ‚] LT",
					nextDay: "[Ð•Ñ€Ñ‚ÐµÒ£ ÑÐ°Ò“Ð°Ñ‚] LT",
					nextWeek: "dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
					lastDay: "[ÐšÐµÑˆÐµ ÑÐ°Ò“Ð°Ñ‚] LT",
					lastWeek: "[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ò£] dddd [ÑÐ°Ò“Ð°Ñ‚] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s Ñ–ÑˆÑ–Ð½Ð´Ðµ",
					past: "%s Ð±Ò±Ñ€Ñ‹Ð½",
					s: "Ð±Ñ–Ñ€Ð½ÐµÑˆÐµ ÑÐµÐºÑƒÐ½Ð´",
					m: "Ð±Ñ–Ñ€ Ð¼Ð¸Ð½ÑƒÑ‚",
					mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚",
					h: "Ð±Ñ–Ñ€ ÑÐ°Ò“Ð°Ñ‚",
					hh: "%d ÑÐ°Ò“Ð°Ñ‚",
					d: "Ð±Ñ–Ñ€ ÐºÒ¯Ð½",
					dd: "%d ÐºÒ¯Ð½",
					M: "Ð±Ñ–Ñ€ Ð°Ð¹",
					MM: "%d Ð°Ð¹",
					y: "Ð±Ñ–Ñ€ Ð¶Ñ‹Ð»",
					yy: "%d Ð¶Ñ‹Ð»"
				},
				ordinalParse: /\d{1,2}-(ÑˆÑ–|ÑˆÑ‹)/,
				ordinal: function(e) {
					var n = e % 10,
						r = e >= 100 ? 100 : null;
					return e + (t[e] || t[n] || t[r])
				},
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("km", {
			months: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
			monthsShort: "áž˜áž€ážšáž¶_áž€áž»áž˜áŸ’áž—áŸˆ_áž˜áž¸áž“áž¶_áž˜áŸážŸáž¶_áž§ážŸáž—áž¶_áž˜áž·ážáž»áž“áž¶_áž€áž€áŸ’áž€ážŠáž¶_ážŸáž¸áž áž¶_áž€áž‰áŸ’áž‰áž¶_ážáž»áž›áž¶_ážœáž·áž…áŸ’áž†áž·áž€áž¶_áž’áŸ’áž“áž¼".split("_"),
			weekdays: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
			weekdaysShort: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
			weekdaysMin: "áž¢áž¶áž‘áž·ážáŸ’áž™_áž…áŸáž“áŸ’áž‘_áž¢áž„áŸ’áž‚áž¶ážš_áž–áž»áž’_áž–áŸ’ážšáž ážŸáŸ’áž”ážáž·áŸ_ážŸáž»áž€áŸ’ážš_ážŸáŸ…ážšáŸ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ážáŸ’áž„áŸƒáž“áŸáŸ‡ áž˜áŸ‰áŸ„áž„] LT",
				nextDay: "[ážŸáŸ’áž¢áŸ‚áž€ áž˜áŸ‰áŸ„áž„] LT",
				nextWeek: "dddd [áž˜áŸ‰áŸ„áž„] LT",
				lastDay: "[áž˜áŸ’ážŸáž·áž›áž˜áž·áž‰ áž˜áŸ‰áŸ„áž„] LT",
				lastWeek: "dddd [ážŸáž”áŸ’ážáž¶áž áŸáž˜áž»áž“] [áž˜áŸ‰áŸ„áž„] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sáž‘áŸ€áž",
				past: "%sáž˜áž»áž“",
				s: "áž”áŸ‰áž»áž“áŸ’áž˜áž¶áž“ážœáž·áž“áž¶áž‘áž¸",
				m: "áž˜áž½áž™áž“áž¶áž‘áž¸",
				mm: "%d áž“áž¶áž‘áž¸",
				h: "áž˜áž½áž™áž˜áŸ‰áŸ„áž„",
				hh: "%d áž˜áŸ‰áŸ„áž„",
				d: "áž˜áž½áž™ážáŸ’áž„áŸƒ",
				dd: "%d ážáŸ’áž„áŸƒ",
				M: "áž˜áž½áž™ážáŸ‚",
				MM: "%d ážáŸ‚",
				y: "áž˜áž½áž™áž†áŸ’áž“áž¶áŸ†",
				yy: "%d áž†áŸ’áž“áž¶áŸ†"
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ko", {
			months: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
			monthsShort: "1ì›”_2ì›”_3ì›”_4ì›”_5ì›”_6ì›”_7ì›”_8ì›”_9ì›”_10ì›”_11ì›”_12ì›”".split("_"),
			weekdays: "ì¼ìš”ì¼_ì›”ìš”ì¼_í™”ìš”ì¼_ìˆ˜ìš”ì¼_ëª©ìš”ì¼_ê¸ˆìš”ì¼_í† ìš”ì¼".split("_"),
			weekdaysShort: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
			weekdaysMin: "ì¼_ì›”_í™”_ìˆ˜_ëª©_ê¸ˆ_í† ".split("_"),
			longDateFormat: {
				LT: "A hì‹œ më¶„",
				LTS: "A hì‹œ më¶„ sì´ˆ",
				L: "YYYY.MM.DD",
				LL: "YYYYë…„ MMMM Dì¼",
				LLL: "YYYYë…„ MMMM Dì¼ A hì‹œ më¶„",
				LLLL: "YYYYë…„ MMMM Dì¼ dddd A hì‹œ më¶„"
			},
			calendar: {
				sameDay: "ì˜¤ëŠ˜ LT",
				nextDay: "ë‚´ì¼ LT",
				nextWeek: "dddd LT",
				lastDay: "ì–´ì œ LT",
				lastWeek: "ì§€ë‚œì£¼ dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s í›„",
				past: "%s ì „",
				s: "ëª‡ ì´ˆ",
				ss: "%dì´ˆ",
				m: "ì¼ë¶„",
				mm: "%dë¶„",
				h: "í•œ ì‹œê°„",
				hh: "%dì‹œê°„",
				d: "í•˜ë£¨",
				dd: "%dì¼",
				M: "í•œ ë‹¬",
				MM: "%dë‹¬",
				y: "ì¼ ë…„",
				yy: "%dë…„"
			},
			ordinalParse: /\d{1,2}ì¼/,
			ordinal: "%dì¼",
			meridiemParse: /ì˜¤ì „|ì˜¤í›„/,
			isPM: function(e) {
				return "ì˜¤í›„" === e
			},
			meridiem: function(e, t, n) {
				return 12 > e ? "ì˜¤ì „" : "ì˜¤í›„"
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				0: "-Ñ‡Ò¯",
				1: "-Ñ‡Ð¸",
				2: "-Ñ‡Ð¸",
				3: "-Ñ‡Ò¯",
				4: "-Ñ‡Ò¯",
				5: "-Ñ‡Ð¸",
				6: "-Ñ‡Ñ‹",
				7: "-Ñ‡Ð¸",
				8: "-Ñ‡Ð¸",
				9: "-Ñ‡Ñƒ",
				10: "-Ñ‡Ñƒ",
				20: "-Ñ‡Ñ‹",
				30: "-Ñ‡Ñƒ",
				40: "-Ñ‡Ñ‹",
				50: "-Ñ‡Ò¯",
				60: "-Ñ‡Ñ‹",
				70: "-Ñ‡Ð¸",
				80: "-Ñ‡Ð¸",
				90: "-Ñ‡Ñƒ",
				100: "-Ñ‡Ò¯"
			},
			n = e.defineLocale("ky", {
				months: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_"),
				monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
				weekdays: "Ð–ÐµÐºÑˆÐµÐ¼Ð±Ð¸_Ð”Ò¯Ð¹ÑˆÓ©Ð¼Ð±Ò¯_Ð¨ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð¨Ð°Ñ€ÑˆÐµÐ¼Ð±Ð¸_Ð‘ÐµÐ¹ÑˆÐµÐ¼Ð±Ð¸_Ð–ÑƒÐ¼Ð°_Ð˜ÑˆÐµÐ¼Ð±Ð¸".split("_"),
				weekdaysShort: "Ð–ÐµÐº_Ð”Ò¯Ð¹_Ð¨ÐµÐ¹_Ð¨Ð°Ñ€_Ð‘ÐµÐ¹_Ð–ÑƒÐ¼_Ð˜ÑˆÐµ".split("_"),
				weekdaysMin: "Ð–Ðº_Ð”Ð¹_Ð¨Ð¹_Ð¨Ñ€_Ð‘Ð¹_Ð–Ð¼_Ð˜Ñˆ".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[Ð‘Ò¯Ð³Ò¯Ð½ ÑÐ°Ð°Ñ‚] LT",
					nextDay: "[Ð­Ñ€Ñ‚ÐµÒ£ ÑÐ°Ð°Ñ‚] LT",
					nextWeek: "dddd [ÑÐ°Ð°Ñ‚] LT",
					lastDay: "[ÐšÐµÑ‡Ðµ ÑÐ°Ð°Ñ‚] LT",
					lastWeek: "[Ó¨Ñ‚ÐºÐµÐ½ Ð°Ð¿Ñ‚Ð°Ð½Ñ‹Ð½] dddd [ÐºÒ¯Ð½Ò¯] [ÑÐ°Ð°Ñ‚] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s Ð¸Ñ‡Ð¸Ð½Ð´Ðµ",
					past: "%s Ð¼ÑƒÑ€ÑƒÐ½",
					s: "Ð±Ð¸Ñ€Ð½ÐµÑ‡Ðµ ÑÐµÐºÑƒÐ½Ð´",
					m: "Ð±Ð¸Ñ€ Ð¼Ò¯Ð½Ó©Ñ‚",
					mm: "%d Ð¼Ò¯Ð½Ó©Ñ‚",
					h: "Ð±Ð¸Ñ€ ÑÐ°Ð°Ñ‚",
					hh: "%d ÑÐ°Ð°Ñ‚",
					d: "Ð±Ð¸Ñ€ ÐºÒ¯Ð½",
					dd: "%d ÐºÒ¯Ð½",
					M: "Ð±Ð¸Ñ€ Ð°Ð¹",
					MM: "%d Ð°Ð¹",
					y: "Ð±Ð¸Ñ€ Ð¶Ñ‹Ð»",
					yy: "%d Ð¶Ñ‹Ð»"
				},
				ordinalParse: /\d{1,2}-(Ñ‡Ð¸|Ñ‡Ñ‹|Ñ‡Ò¯|Ñ‡Ñƒ)/,
				ordinal: function(e) {
					var n = e % 10,
						r = e >= 100 ? 100 : null;
					return e + (t[e] || t[n] || t[r])
				},
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, r) {
			var o = {
				m: ["eng Minutt", "enger Minutt"],
				h: ["eng Stonn", "enger Stonn"],
				d: ["een Dag", "engem Dag"],
				M: ["ee Mount", "engem Mount"],
				y: ["ee Joer", "engem Joer"]
			};
			return t ? o[n][0] : o[n][1]
		}

		function n(e) {
			var t = e.substr(0, e.indexOf(" "));
			return o(t) ? "a " + e : "an " + e
		}

		function r(e) {
			var t = e.substr(0, e.indexOf(" "));
			return o(t) ? "viru " + e : "virun " + e
		}

		function o(e) {
			if (e = parseInt(e, 10), isNaN(e)) return !1;
			if (0 > e) return !0;
			if (10 > e) return e >= 4 && 7 >= e;
			if (100 > e) {
				var t = e % 10,
					n = e / 10;
				return o(0 === t ? n : t)
			}
			if (1e4 > e) {
				for (; e >= 10;) e /= 10;
				return o(e)
			}
			return e /= 1e3, o(e)
		}
		var a = e.defineLocale("lb", {
			months: "Januar_Februar_MÃ¤erz_AbrÃ«ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			monthsParseExact: !0,
			weekdays: "Sonndeg_MÃ©indeg_DÃ«nschdeg_MÃ«ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
			weekdaysShort: "So._MÃ©._DÃ«._MÃ«._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_MÃ©_DÃ«_MÃ«_Do_Fr_Sa".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm [Auer]",
				LTS: "H:mm:ss [Auer]",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm [Auer]",
				LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
			},
			calendar: {
				sameDay: "[Haut um] LT",
				sameElse: "L",
				nextDay: "[Muer um] LT",
				nextWeek: "dddd [um] LT",
				lastDay: "[GÃ«schter um] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 2:
						case 4:
							return "[Leschten] dddd [um] LT";
						default:
							return "[Leschte] dddd [um] LT"
					}
				}
			},
			relativeTime: {
				future: n,
				past: r,
				s: "e puer Sekonnen",
				m: t,
				mm: "%d Minutten",
				h: t,
				hh: "%d Stonnen",
				d: t,
				dd: "%d Deeg",
				M: t,
				MM: "%d MÃ©int",
				y: t,
				yy: "%d Joer"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return a
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("lo", {
			months: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
			monthsShort: "àº¡àº±àº‡àºàº­àº™_àºàº¸àº¡àºžàº²_àº¡àºµàº™àº²_à»€àº¡àºªàº²_àºžàº¶àº”àºªàº°àºžàº²_àº¡àº´àº–àº¸àº™àº²_àºà»àº¥àº°àºàº»àº”_àºªàº´àº‡àº«àº²_àºàº±àº™àºàº²_àº•àº¸àº¥àº²_àºžàº°àºˆàº´àº_àº—àº±àº™àº§àº²".split("_"),
			weekdays: "àº­àº²àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
			weekdaysShort: "àº—àº´àº”_àºˆàº±àº™_àº­àº±àº‡àº„àº²àº™_àºžàº¸àº”_àºžàº°àº«àº±àº”_àºªàº¸àº_à»€àºªàº»àº²".split("_"),
			weekdaysMin: "àº—_àºˆ_àº­àº„_àºž_àºžàº«_àºªàº_àºª".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "àº§àº±àº™dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /àº•àº­àº™à»€àºŠàº»à»‰àº²|àº•àº­àº™à»àº¥àº‡/,
			isPM: function(e) {
				return "àº•àº­àº™à»àº¥àº‡" === e
			},
			meridiem: function(e, t, n) {
				return 12 > e ? "àº•àº­àº™à»€àºŠàº»à»‰àº²" : "àº•àº­àº™à»àº¥àº‡"
			},
			calendar: {
				sameDay: "[àº¡àº·à»‰àº™àºµà»‰à»€àº§àº¥àº²] LT",
				nextDay: "[àº¡àº·à»‰àº­àº·à»ˆàº™à»€àº§àº¥àº²] LT",
				nextWeek: "[àº§àº±àº™]dddd[à»œà»‰àº²à»€àº§àº¥àº²] LT",
				lastDay: "[àº¡àº·à»‰àº§àº²àº™àº™àºµà»‰à»€àº§àº¥àº²] LT",
				lastWeek: "[àº§àº±àº™]dddd[à»àº¥à»‰àº§àº™àºµà»‰à»€àº§àº¥àº²] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "àº­àºµàº %s",
				past: "%sàºœà»ˆàº²àº™àº¡àº²",
				s: "àºšà»à»ˆà»€àº—àº»à»ˆàº²à»ƒàº”àº§àº´àº™àº²àº—àºµ",
				m: "1 àº™àº²àº—àºµ",
				mm: "%d àº™àº²àº—àºµ",
				h: "1 àºŠàº»à»ˆàº§à»‚àº¡àº‡",
				hh: "%d àºŠàº»à»ˆàº§à»‚àº¡àº‡",
				d: "1 àº¡àº·à»‰",
				dd: "%d àº¡àº·à»‰",
				M: "1 à»€àº”àº·àº­àº™",
				MM: "%d à»€àº”àº·àº­àº™",
				y: "1 àº›àºµ",
				yy: "%d àº›àºµ"
			},
			ordinalParse: /(àº—àºµà»ˆ)\d{1,2}/,
			ordinal: function(e) {
				return "àº—àºµà»ˆ" + e
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, r) {
			return t ? "kelios sekundÄ—s" : r ? "keliÅ³ sekundÅ¾iÅ³" : "kelias sekundes"
		}

		function n(e, t, n, r) {
			return t ? o(n)[0] : r ? o(n)[1] : o(n)[2]
		}

		function r(e) {
			return e % 10 === 0 || e > 10 && 20 > e
		}

		function o(e) {
			return i[e].split("_")
		}

		function a(e, t, a, i) {
			var s = e + " ";
			return 1 === e ? s + n(e, t, a[0], i) : t ? s + (r(e) ? o(a)[1] : o(a)[0]) : i ? s + o(a)[1] : s + (r(e) ? o(a)[1] : o(a)[2])
		}
		var i = {
				m: "minutÄ—_minutÄ—s_minutÄ™",
				mm: "minutÄ—s_minuÄiÅ³_minutes",
				h: "valanda_valandos_valandÄ…",
				hh: "valandos_valandÅ³_valandas",
				d: "diena_dienos_dienÄ…",
				dd: "dienos_dienÅ³_dienas",
				M: "mÄ—nuo_mÄ—nesio_mÄ—nesÄ¯",
				MM: "mÄ—nesiai_mÄ—nesiÅ³_mÄ—nesius",
				y: "metai_metÅ³_metus",
				yy: "metai_metÅ³_metus"
			},
			s = e.defineLocale("lt", {
				months: {
					format: "sausio_vasario_kovo_balandÅ¾io_geguÅ¾Ä—s_birÅ¾elio_liepos_rugpjÅ«Äio_rugsÄ—jo_spalio_lapkriÄio_gruodÅ¾io".split("_"),
					standalone: "sausis_vasaris_kovas_balandis_geguÅ¾Ä—_birÅ¾elis_liepa_rugpjÅ«tis_rugsÄ—jis_spalis_lapkritis_gruodis".split("_")
				},
				monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
				weekdays: {
					format: "sekmadienÄ¯_pirmadienÄ¯_antradienÄ¯_treÄiadienÄ¯_ketvirtadienÄ¯_penktadienÄ¯_Å¡eÅ¡tadienÄ¯".split("_"),
					standalone: "sekmadienis_pirmadienis_antradienis_treÄiadienis_ketvirtadienis_penktadienis_Å¡eÅ¡tadienis".split("_"),
					isFormat: /dddd HH:mm/
				},
				weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Å eÅ¡".split("_"),
				weekdaysMin: "S_P_A_T_K_Pn_Å ".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "YYYY-MM-DD",
					LL: "YYYY [m.] MMMM D [d.]",
					LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
					LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
					l: "YYYY-MM-DD",
					ll: "YYYY [m.] MMMM D [d.]",
					lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
					llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
				},
				calendar: {
					sameDay: "[Å iandien] LT",
					nextDay: "[Rytoj] LT",
					nextWeek: "dddd LT",
					lastDay: "[Vakar] LT",
					lastWeek: "[PraÄ—jusÄ¯] dddd LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "po %s",
					past: "prieÅ¡ %s",
					s: t,
					m: n,
					mm: a,
					h: n,
					hh: a,
					d: n,
					dd: a,
					M: n,
					MM: a,
					y: n,
					yy: a
				},
				ordinalParse: /\d{1,2}-oji/,
				ordinal: function(e) {
					return e + "-oji"
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return s
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n) {
			return n ? t % 10 === 1 && 11 !== t ? e[2] : e[3] : t % 10 === 1 && 11 !== t ? e[0] : e[1]
		}

		function n(e, n, r) {
			return e + " " + t(a[r], e, n)
		}

		function r(e, n, r) {
			return t(a[r], e, n)
		}

		function o(e, t) {
			return t ? "daÅ¾as sekundes" : "daÅ¾Äm sekundÄ“m"
		}
		var a = {
				m: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
				mm: "minÅ«tes_minÅ«tÄ“m_minÅ«te_minÅ«tes".split("_"),
				h: "stundas_stundÄm_stunda_stundas".split("_"),
				hh: "stundas_stundÄm_stunda_stundas".split("_"),
				d: "dienas_dienÄm_diena_dienas".split("_"),
				dd: "dienas_dienÄm_diena_dienas".split("_"),
				M: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
				MM: "mÄ“neÅ¡a_mÄ“neÅ¡iem_mÄ“nesis_mÄ“neÅ¡i".split("_"),
				y: "gada_gadiem_gads_gadi".split("_"),
				yy: "gada_gadiem_gads_gadi".split("_")
			},
			i = e.defineLocale("lv", {
				months: "janvÄris_februÄris_marts_aprÄ«lis_maijs_jÅ«nijs_jÅ«lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
				monthsShort: "jan_feb_mar_apr_mai_jÅ«n_jÅ«l_aug_sep_okt_nov_dec".split("_"),
				weekdays: "svÄ“tdiena_pirmdiena_otrdiena_treÅ¡diena_ceturtdiena_piektdiena_sestdiena".split("_"),
				weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
				weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY.",
					LL: "YYYY. [gada] D. MMMM",
					LLL: "YYYY. [gada] D. MMMM, HH:mm",
					LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
				},
				calendar: {
					sameDay: "[Å odien pulksten] LT",
					nextDay: "[RÄ«t pulksten] LT",
					nextWeek: "dddd [pulksten] LT",
					lastDay: "[Vakar pulksten] LT",
					lastWeek: "[PagÄjuÅ¡Ä] dddd [pulksten] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "pÄ“c %s",
					past: "pirms %s",
					s: o,
					m: r,
					mm: n,
					h: r,
					hh: n,
					d: r,
					dd: n,
					M: r,
					MM: n,
					y: r,
					yy: n
				},
				ordinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return i
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				words: {
					m: ["jedan minut", "jednog minuta"],
					mm: ["minut", "minuta", "minuta"],
					h: ["jedan sat", "jednog sata"],
					hh: ["sat", "sata", "sati"],
					dd: ["dan", "dana", "dana"],
					MM: ["mjesec", "mjeseca", "mjeseci"],
					yy: ["godina", "godine", "godina"]
				},
				correctGrammaticalCase: function(e, t) {
					return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
				},
				translate: function(e, n, r) {
					var o = t.words[r];
					return 1 === r.length ? n ? o[0] : o[1] : e + " " + t.correctGrammaticalCase(e, o)
				}
			},
			n = e.defineLocale("me", {
				months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
				monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
				monthsParseExact: !0,
				weekdays: "nedjelja_ponedjeljak_utorak_srijeda_Äetvrtak_petak_subota".split("_"),
				weekdaysShort: "ned._pon._uto._sri._Äet._pet._sub.".split("_"),
				weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD. MM. YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd, D. MMMM YYYY H:mm"
				},
				calendar: {
					sameDay: "[danas u] LT",
					nextDay: "[sjutra u] LT",
					nextWeek: function() {
						switch (this.day()) {
							case 0:
								return "[u] [nedjelju] [u] LT";
							case 3:
								return "[u] [srijedu] [u] LT";
							case 6:
								return "[u] [subotu] [u] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[u] dddd [u] LT"
						}
					},
					lastDay: "[juÄe u] LT",
					lastWeek: function() {
						var e = ["[proÅ¡le] [nedjelje] [u] LT", "[proÅ¡log] [ponedjeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srijede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"];
						return e[this.day()]
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "za %s",
					past: "prije %s",
					s: "nekoliko sekundi",
					m: t.translate,
					mm: t.translate,
					h: t.translate,
					hh: t.translate,
					d: "dan",
					dd: t.translate,
					M: "mjesec",
					MM: t.translate,
					y: "godinu",
					yy: t.translate
				},
				ordinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("mk", {
			months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€Ð¸_Ñ„ÐµÐ²Ñ€ÑƒÐ°Ñ€Ð¸_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½Ð¸_Ñ˜ÑƒÐ»Ð¸_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð²Ñ€Ð¸_Ð¾ÐºÑ‚Ð¾Ð¼Ð²Ñ€Ð¸_Ð½Ð¾ÐµÐ¼Ð²Ñ€Ð¸_Ð´ÐµÐºÐµÐ¼Ð²Ñ€Ð¸".split("_"),
			monthsShort: "Ñ˜Ð°Ð½_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³_ÑÐµÐ¿_Ð¾ÐºÑ‚_Ð½Ð¾Ðµ_Ð´ÐµÐº".split("_"),
			weekdays: "Ð½ÐµÐ´ÐµÐ»Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»Ð½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð¾Ðº_Ð¿ÐµÑ‚Ð¾Ðº_ÑÐ°Ð±Ð¾Ñ‚Ð°".split("_"),
			weekdaysShort: "Ð½ÐµÐ´_Ð¿Ð¾Ð½_Ð²Ñ‚Ð¾_ÑÑ€Ðµ_Ñ‡ÐµÑ‚_Ð¿ÐµÑ‚_ÑÐ°Ð±".split("_"),
			weekdaysMin: "Ð½e_Ð¿o_Ð²Ñ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_Ña".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[Ð”ÐµÐ½ÐµÑ Ð²Ð¾] LT",
				nextDay: "[Ð£Ñ‚Ñ€Ðµ Ð²Ð¾] LT",
				nextWeek: "[Ð’Ð¾] dddd [Ð²Ð¾] LT",
				lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²Ð¾] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
						case 6:
							return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð°Ñ‚Ð°] dddd [Ð²Ð¾] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[Ð˜Ð·Ð¼Ð¸Ð½Ð°Ñ‚Ð¸Ð¾Ñ‚] dddd [Ð²Ð¾] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "Ð¿Ð¾ÑÐ»Ðµ %s",
				past: "Ð¿Ñ€ÐµÐ´ %s",
				s: "Ð½ÐµÐºÐ¾Ð»ÐºÑƒ ÑÐµÐºÑƒÐ½Ð´Ð¸",
				m: "Ð¼Ð¸Ð½ÑƒÑ‚Ð°",
				mm: "%d Ð¼Ð¸Ð½ÑƒÑ‚Ð¸",
				h: "Ñ‡Ð°Ñ",
				hh: "%d Ñ‡Ð°ÑÐ°",
				d: "Ð´ÐµÐ½",
				dd: "%d Ð´ÐµÐ½Ð°",
				M: "Ð¼ÐµÑÐµÑ†",
				MM: "%d Ð¼ÐµÑÐµÑ†Ð¸",
				y: "Ð³Ð¾Ð´Ð¸Ð½Ð°",
				yy: "%d Ð³Ð¾Ð´Ð¸Ð½Ð¸"
			},
			ordinalParse: /\d{1,2}-(ÐµÐ²|ÐµÐ½|Ñ‚Ð¸|Ð²Ð¸|Ñ€Ð¸|Ð¼Ð¸)/,
			ordinal: function(e) {
				var t = e % 10,
					n = e % 100;
				return 0 === e ? e + "-ÐµÐ²" : 0 === n ? e + "-ÐµÐ½" : n > 10 && 20 > n ? e + "-Ñ‚Ð¸" : 1 === t ? e + "-Ð²Ð¸" : 2 === t ? e + "-Ñ€Ð¸" : 7 === t || 8 === t ? e + "-Ð¼Ð¸" : e + "-Ñ‚Ð¸"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ml", {
			months: "à´œà´¨àµà´µà´°à´¿_à´«àµ†à´¬àµà´°àµà´µà´°à´¿_à´®à´¾àµ¼à´šàµà´šàµ_à´à´ªàµà´°à´¿àµ½_à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ_à´“à´—à´¸àµà´±àµà´±àµ_à´¸àµ†à´ªàµà´±àµà´±à´‚à´¬àµ¼_à´’à´•àµà´Ÿàµ‹à´¬àµ¼_à´¨à´µà´‚à´¬àµ¼_à´¡à´¿à´¸à´‚à´¬àµ¼".split("_"),
			monthsShort: "à´œà´¨àµ._à´«àµ†à´¬àµà´°àµ._à´®à´¾àµ¼._à´à´ªàµà´°à´¿._à´®àµ‡à´¯àµ_à´œàµ‚àµº_à´œàµ‚à´²àµˆ._à´“à´—._à´¸àµ†à´ªàµà´±àµà´±._à´’à´•àµà´Ÿàµ‹._à´¨à´µà´‚._à´¡à´¿à´¸à´‚.".split("_"),
			monthsParseExact: !0,
			weekdays: "à´žà´¾à´¯à´±à´¾à´´àµà´š_à´¤à´¿à´™àµà´•à´³à´¾à´´àµà´š_à´šàµŠà´µàµà´µà´¾à´´àµà´š_à´¬àµà´§à´¨à´¾à´´àµà´š_à´µàµà´¯à´¾à´´à´¾à´´àµà´š_à´µàµ†à´³àµà´³à´¿à´¯à´¾à´´àµà´š_à´¶à´¨à´¿à´¯à´¾à´´àµà´š".split("_"),
			weekdaysShort: "à´žà´¾à´¯àµ¼_à´¤à´¿à´™àµà´•àµ¾_à´šàµŠà´µàµà´µ_à´¬àµà´§àµ»_à´µàµà´¯à´¾à´´à´‚_à´µàµ†à´³àµà´³à´¿_à´¶à´¨à´¿".split("_"),
			weekdaysMin: "à´žà´¾_à´¤à´¿_à´šàµŠ_à´¬àµ_à´µàµà´¯à´¾_à´µàµ†_à´¶".split("_"),
			longDateFormat: {
				LT: "A h:mm -à´¨àµ",
				LTS: "A h:mm:ss -à´¨àµ",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm -à´¨àµ",
				LLLL: "dddd, D MMMM YYYY, A h:mm -à´¨àµ"
			},
			calendar: {
				sameDay: "[à´‡à´¨àµà´¨àµ] LT",
				nextDay: "[à´¨à´¾à´³àµ†] LT",
				nextWeek: "dddd, LT",
				lastDay: "[à´‡à´¨àµà´¨à´²àµ†] LT",
				lastWeek: "[à´•à´´à´¿à´žàµà´ž] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s à´•à´´à´¿à´žàµà´žàµ",
				past: "%s à´®àµàµ»à´ªàµ",
				s: "à´…àµ½à´ª à´¨à´¿à´®à´¿à´·à´™àµà´™àµ¾",
				m: "à´’à´°àµ à´®à´¿à´¨à´¿à´±àµà´±àµ",
				mm: "%d à´®à´¿à´¨à´¿à´±àµà´±àµ",
				h: "à´’à´°àµ à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
				hh: "%d à´®à´£à´¿à´•àµà´•àµ‚àµ¼",
				d: "à´’à´°àµ à´¦à´¿à´µà´¸à´‚",
				dd: "%d à´¦à´¿à´µà´¸à´‚",
				M: "à´’à´°àµ à´®à´¾à´¸à´‚",
				MM: "%d à´®à´¾à´¸à´‚",
				y: "à´’à´°àµ à´µàµ¼à´·à´‚",
				yy: "%d à´µàµ¼à´·à´‚"
			},
			meridiemParse: /à´°à´¾à´¤àµà´°à´¿|à´°à´¾à´µà´¿à´²àµ†|à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ|à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚|à´°à´¾à´¤àµà´°à´¿/i,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "à´°à´¾à´¤àµà´°à´¿" === t && e >= 4 || "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" === t || "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" === t ? e + 12 : e
			},
			meridiem: function(e, t, n) {
				return 4 > e ? "à´°à´¾à´¤àµà´°à´¿" : 12 > e ? "à´°à´¾à´µà´¿à´²àµ†" : 17 > e ? "à´‰à´šàµà´š à´•à´´à´¿à´žàµà´žàµ" : 20 > e ? "à´µàµˆà´•àµà´¨àµà´¨àµ‡à´°à´‚" : "à´°à´¾à´¤àµà´°à´¿"
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, r) {
			var o = "";
			if (t) switch (n) {
				case "s":
					o = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦";
					break;
				case "m":
					o = "à¤à¤• à¤®à¤¿à¤¨à¤¿à¤Ÿ";
					break;
				case "mm":
					o = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¥‡";
					break;
				case "h":
					o = "à¤à¤• à¤¤à¤¾à¤¸";
					break;
				case "hh":
					o = "%d à¤¤à¤¾à¤¸";
					break;
				case "d":
					o = "à¤à¤• à¤¦à¤¿à¤µà¤¸";
					break;
				case "dd":
					o = "%d à¤¦à¤¿à¤µà¤¸";
					break;
				case "M":
					o = "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾";
					break;
				case "MM":
					o = "%d à¤®à¤¹à¤¿à¤¨à¥‡";
					break;
				case "y":
					o = "à¤à¤• à¤µà¤°à¥à¤·";
					break;
				case "yy":
					o = "%d à¤µà¤°à¥à¤·à¥‡"
			} else switch (n) {
				case "s":
					o = "à¤•à¤¾à¤¹à¥€ à¤¸à¥‡à¤•à¤‚à¤¦à¤¾à¤‚";
					break;
				case "m":
					o = "à¤à¤•à¤¾ à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾";
					break;
				case "mm":
					o = "%d à¤®à¤¿à¤¨à¤¿à¤Ÿà¤¾à¤‚";
					break;
				case "h":
					o = "à¤à¤•à¤¾ à¤¤à¤¾à¤¸à¤¾";
					break;
				case "hh":
					o = "%d à¤¤à¤¾à¤¸à¤¾à¤‚";
					break;
				case "d":
					o = "à¤à¤•à¤¾ à¤¦à¤¿à¤µà¤¸à¤¾";
					break;
				case "dd":
					o = "%d à¤¦à¤¿à¤µà¤¸à¤¾à¤‚";
					break;
				case "M":
					o = "à¤à¤•à¤¾ à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾";
					break;
				case "MM":
					o = "%d à¤®à¤¹à¤¿à¤¨à¥à¤¯à¤¾à¤‚";
					break;
				case "y":
					o = "à¤à¤•à¤¾ à¤µà¤°à¥à¤·à¤¾";
					break;
				case "yy":
					o = "%d à¤µà¤°à¥à¤·à¤¾à¤‚"
			}
			return o.replace(/%d/i, e)
		}
		var n = {
				1: "à¥§",
				2: "à¥¨",
				3: "à¥©",
				4: "à¥ª",
				5: "à¥«",
				6: "à¥¬",
				7: "à¥­",
				8: "à¥®",
				9: "à¥¯",
				0: "à¥¦"
			},
			r = {
				"à¥§": "1",
				"à¥¨": "2",
				"à¥©": "3",
				"à¥ª": "4",
				"à¥«": "5",
				"à¥¬": "6",
				"à¥­": "7",
				"à¥®": "8",
				"à¥¯": "9",
				"à¥¦": "0"
			},
			o = e.defineLocale("mr", {
				months: "à¤œà¤¾à¤¨à¥‡à¤µà¤¾à¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤¾à¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤à¤ªà¥à¤°à¤¿à¤²_à¤®à¥‡_à¤œà¥‚à¤¨_à¤œà¥à¤²à¥ˆ_à¤‘à¤—à¤¸à¥à¤Ÿ_à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚à¤¬à¤°_à¤‘à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤‚à¤¬à¤°".split("_"),
				monthsShort: "à¤œà¤¾à¤¨à¥‡._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š._à¤à¤ªà¥à¤°à¤¿._à¤®à¥‡._à¤œà¥‚à¤¨._à¤œà¥à¤²à¥ˆ._à¤‘à¤—._à¤¸à¤ªà¥à¤Ÿà¥‡à¤‚._à¤‘à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤µà¥à¤¹à¥‡à¤‚._à¤¡à¤¿à¤¸à¥‡à¤‚.".split("_"),
				monthsParseExact: !0,
				weekdays: "à¤°à¤µà¤¿à¤µà¤¾à¤°_à¤¸à¥‹à¤®à¤µà¤¾à¤°_à¤®à¤‚à¤—à¤³à¤µà¤¾à¤°_à¤¬à¥à¤§à¤µà¤¾à¤°_à¤—à¥à¤°à¥‚à¤µà¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤µà¤¾à¤°_à¤¶à¤¨à¤¿à¤µà¤¾à¤°".split("_"),
				weekdaysShort: "à¤°à¤µà¤¿_à¤¸à¥‹à¤®_à¤®à¤‚à¤—à¤³_à¤¬à¥à¤§_à¤—à¥à¤°à¥‚_à¤¶à¥à¤•à¥à¤°_à¤¶à¤¨à¤¿".split("_"),
				weekdaysMin: "à¤°_à¤¸à¥‹_à¤®à¤‚_à¤¬à¥_à¤—à¥_à¤¶à¥_à¤¶".split("_"),
				longDateFormat: {
					LT: "A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
					LTS: "A h:mm:ss à¤µà¤¾à¤œà¤¤à¤¾",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾",
					LLLL: "dddd, D MMMM YYYY, A h:mm à¤µà¤¾à¤œà¤¤à¤¾"
				},
				calendar: {
					sameDay: "[à¤†à¤œ] LT",
					nextDay: "[à¤‰à¤¦à¥à¤¯à¤¾] LT",
					nextWeek: "dddd, LT",
					lastDay: "[à¤•à¤¾à¤²] LT",
					lastWeek: "[à¤®à¤¾à¤—à¥€à¤²] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%sà¤®à¤§à¥à¤¯à¥‡",
					past: "%sà¤ªà¥‚à¤°à¥à¤µà¥€",
					s: t,
					m: t,
					mm: t,
					h: t,
					hh: t,
					d: t,
					dd: t,
					M: t,
					MM: t,
					y: t,
					yy: t
				},
				preparse: function(e) {
					return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(e) {
						return r[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return n[e]
					})
				},
				meridiemParse: /à¤°à¤¾à¤¤à¥à¤°à¥€|à¤¸à¤•à¤¾à¤³à¥€|à¤¦à¥à¤ªà¤¾à¤°à¥€|à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¥à¤°à¥€" === t ? 4 > e ? e : e + 12 : "à¤¸à¤•à¤¾à¤³à¥€" === t ? e : "à¤¦à¥à¤ªà¤¾à¤°à¥€" === t ? e >= 10 ? e : e + 12 : "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" === t ? e + 12 : void 0
				},
				meridiem: function(e, t, n) {
					return 4 > e ? "à¤°à¤¾à¤¤à¥à¤°à¥€" : 10 > e ? "à¤¸à¤•à¤¾à¤³à¥€" : 17 > e ? "à¤¦à¥à¤ªà¤¾à¤°à¥€" : 20 > e ? "à¤¸à¤¾à¤¯à¤‚à¤•à¤¾à¤³à¥€" : "à¤°à¤¾à¤¤à¥à¤°à¥€"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return o
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ms", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ms-my", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return 11 > e ? "pagi" : 15 > e ? "tengahari" : 19 > e ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Esok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kelmarin pukul] LT",
				lastWeek: "dddd [lepas pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lepas",
				s: "beberapa saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "á",
				2: "á‚",
				3: "áƒ",
				4: "á„",
				5: "á…",
				6: "á†",
				7: "á‡",
				8: "áˆ",
				9: "á‰",
				0: "á€"
			},
			n = {
				"á": "1",
				"á‚": "2",
				"áƒ": "3",
				"á„": "4",
				"á…": "5",
				"á†": "6",
				"á‡": "7",
				"áˆ": "8",
				"á‰": "9",
				"á€": "0"
			},
			r = e.defineLocale("my", {
				months: "á€‡á€”á€ºá€”á€á€«á€›á€®_á€–á€±á€–á€±á€¬á€ºá€á€«á€›á€®_á€™á€á€º_á€§á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€‡á€°á€œá€­á€¯á€„á€º_á€žá€¼á€‚á€¯á€á€º_á€…á€€á€ºá€á€„á€ºá€˜á€¬_á€¡á€±á€¬á€€á€ºá€á€­á€¯á€˜á€¬_á€”á€­á€¯á€á€„á€ºá€˜á€¬_á€’á€®á€‡á€„á€ºá€˜á€¬".split("_"),
				monthsShort: "á€‡á€”á€º_á€–á€±_á€™á€á€º_á€•á€¼á€®_á€™á€±_á€‡á€½á€”á€º_á€œá€­á€¯á€„á€º_á€žá€¼_á€…á€€á€º_á€¡á€±á€¬á€€á€º_á€”á€­á€¯_á€’á€®".split("_"),
				weekdays: "á€á€”á€„á€ºá€¹á€‚á€”á€½á€±_á€á€”á€„á€ºá€¹á€œá€¬_á€¡á€„á€ºá€¹á€‚á€«_á€—á€¯á€’á€¹á€“á€Ÿá€°á€¸_á€€á€¼á€¬á€žá€•á€á€±á€¸_á€žá€±á€¬á€€á€¼á€¬_á€…á€”á€±".split("_"),
				weekdaysShort: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
				weekdaysMin: "á€”á€½á€±_á€œá€¬_á€‚á€«_á€Ÿá€°á€¸_á€€á€¼á€¬_á€žá€±á€¬_á€”á€±".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[á€šá€”á€±.] LT [á€™á€¾á€¬]",
					nextDay: "[á€™á€”á€€á€ºá€–á€¼á€”á€º] LT [á€™á€¾á€¬]",
					nextWeek: "dddd LT [á€™á€¾á€¬]",
					lastDay: "[á€™á€”á€±.á€€] LT [á€™á€¾á€¬]",
					lastWeek: "[á€•á€¼á€®á€¸á€á€²á€·á€žá€±á€¬] dddd LT [á€™á€¾á€¬]",
					sameElse: "L"
				},
				relativeTime: {
					future: "á€œá€¬á€™á€Šá€ºá€· %s á€™á€¾á€¬",
					past: "á€œá€½á€”á€ºá€á€²á€·á€žá€±á€¬ %s á€€",
					s: "á€…á€€á€¹á€€á€”á€º.á€¡á€”á€Šá€ºá€¸á€„á€šá€º",
					m: "á€á€…á€ºá€™á€­á€”á€…á€º",
					mm: "%d á€™á€­á€”á€…á€º",
					h: "á€á€…á€ºá€”á€¬á€›á€®",
					hh: "%d á€”á€¬á€›á€®",
					d: "á€á€…á€ºá€›á€€á€º",
					dd: "%d á€›á€€á€º",
					M: "á€á€…á€ºá€œ",
					MM: "%d á€œ",
					y: "á€á€…á€ºá€”á€¾á€…á€º",
					yy: "%d á€”á€¾á€…á€º"
				},
				preparse: function(e) {
					return e.replace(/[áá‚áƒá„á…á†á‡áˆá‰á€]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("nb", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
			monthsParseExact: !0,
			weekdays: "sÃ¸ndag_mandag_tirsdag_onsdag_torsdag_fredag_lÃ¸rdag".split("_"),
			weekdaysShort: "sÃ¸._ma._ti._on._to._fr._lÃ¸.".split("_"),
			weekdaysMin: "sÃ¸_ma_ti_on_to_fr_lÃ¸".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[i dag kl.] LT",
				nextDay: "[i morgen kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[i gÃ¥r kl.] LT",
				lastWeek: "[forrige] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s siden",
				s: "noen sekunder",
				m: "ett minutt",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dager",
				M: "en mÃ¥ned",
				MM: "%d mÃ¥neder",
				y: "ett Ã¥r",
				yy: "%d Ã¥r"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "à¥§",
				2: "à¥¨",
				3: "à¥©",
				4: "à¥ª",
				5: "à¥«",
				6: "à¥¬",
				7: "à¥­",
				8: "à¥®",
				9: "à¥¯",
				0: "à¥¦"
			},
			n = {
				"à¥§": "1",
				"à¥¨": "2",
				"à¥©": "3",
				"à¥ª": "4",
				"à¥«": "5",
				"à¥¬": "6",
				"à¥­": "7",
				"à¥®": "8",
				"à¥¯": "9",
				"à¥¦": "0"
			},
			r = e.defineLocale("ne", {
				months: "à¤œà¤¨à¤µà¤°à¥€_à¤«à¥‡à¤¬à¥à¤°à¥à¤µà¤°à¥€_à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿à¤²_à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ_à¤…à¤—à¤·à¥à¤Ÿ_à¤¸à¥‡à¤ªà¥à¤Ÿà¥‡à¤®à¥à¤¬à¤°_à¤…à¤•à¥à¤Ÿà¥‹à¤¬à¤°_à¤¨à¥‹à¤­à¥‡à¤®à¥à¤¬à¤°_à¤¡à¤¿à¤¸à¥‡à¤®à¥à¤¬à¤°".split("_"),
				monthsShort: "à¤œà¤¨._à¤«à¥‡à¤¬à¥à¤°à¥._à¤®à¤¾à¤°à¥à¤š_à¤…à¤ªà¥à¤°à¤¿._à¤®à¤ˆ_à¤œà¥à¤¨_à¤œà¥à¤²à¤¾à¤ˆ._à¤…à¤—._à¤¸à¥‡à¤ªà¥à¤Ÿ._à¤…à¤•à¥à¤Ÿà¥‹._à¤¨à¥‹à¤­à¥‡._à¤¡à¤¿à¤¸à¥‡.".split("_"),
				monthsParseExact: !0,
				weekdays: "à¤†à¤‡à¤¤à¤¬à¤¾à¤°_à¤¸à¥‹à¤®à¤¬à¤¾à¤°_à¤®à¤™à¥à¤—à¤²à¤¬à¤¾à¤°_à¤¬à¥à¤§à¤¬à¤¾à¤°_à¤¬à¤¿à¤¹à¤¿à¤¬à¤¾à¤°_à¤¶à¥à¤•à¥à¤°à¤¬à¤¾à¤°_à¤¶à¤¨à¤¿à¤¬à¤¾à¤°".split("_"),
				weekdaysShort: "à¤†à¤‡à¤¤._à¤¸à¥‹à¤®._à¤®à¤™à¥à¤—à¤²._à¤¬à¥à¤§._à¤¬à¤¿à¤¹à¤¿._à¤¶à¥à¤•à¥à¤°._à¤¶à¤¨à¤¿.".split("_"),
				weekdaysMin: "à¤†._à¤¸à¥‹._à¤®à¤‚._à¤¬à¥._à¤¬à¤¿._à¤¶à¥._à¤¶.".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
					LTS: "Aà¤•à¥‹ h:mm:ss à¤¬à¤œà¥‡",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡",
					LLLL: "dddd, D MMMM YYYY, Aà¤•à¥‹ h:mm à¤¬à¤œà¥‡"
				},
				preparse: function(e) {
					return e.replace(/[à¥§à¥¨à¥©à¥ªà¥«à¥¬à¥­à¥®à¥¯à¥¦]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /à¤°à¤¾à¤¤à¤¿|à¤¬à¤¿à¤¹à¤¾à¤¨|à¤¦à¤¿à¤‰à¤à¤¸à¥‹|à¤¸à¤¾à¤à¤/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "à¤°à¤¾à¤¤à¤¿" === t ? 4 > e ? e : e + 12 : "à¤¬à¤¿à¤¹à¤¾à¤¨" === t ? e : "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" === t ? e >= 10 ? e : e + 12 : "à¤¸à¤¾à¤à¤" === t ? e + 12 : void 0
				},
				meridiem: function(e, t, n) {
					return 3 > e ? "à¤°à¤¾à¤¤à¤¿" : 12 > e ? "à¤¬à¤¿à¤¹à¤¾à¤¨" : 16 > e ? "à¤¦à¤¿à¤‰à¤à¤¸à¥‹" : 20 > e ? "à¤¸à¤¾à¤à¤" : "à¤°à¤¾à¤¤à¤¿"
				},
				calendar: {
					sameDay: "[à¤†à¤œ] LT",
					nextDay: "[à¤­à¥‹à¤²à¤¿] LT",
					nextWeek: "[à¤†à¤‰à¤à¤¦à¥‹] dddd[,] LT",
					lastDay: "[à¤¹à¤¿à¤œà¥‹] LT",
					lastWeek: "[à¤—à¤à¤•à¥‹] dddd[,] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%sà¤®à¤¾",
					past: "%s à¤…à¤—à¤¾à¤¡à¤¿",
					s: "à¤•à¥‡à¤¹à¥€ à¤•à¥à¤·à¤£",
					m: "à¤à¤• à¤®à¤¿à¤¨à¥‡à¤Ÿ",
					mm: "%d à¤®à¤¿à¤¨à¥‡à¤Ÿ",
					h: "à¤à¤• à¤˜à¤£à¥à¤Ÿà¤¾",
					hh: "%d à¤˜à¤£à¥à¤Ÿà¤¾",
					d: "à¤à¤• à¤¦à¤¿à¤¨",
					dd: "%d à¤¦à¤¿à¤¨",
					M: "à¤à¤• à¤®à¤¹à¤¿à¤¨à¤¾",
					MM: "%d à¤®à¤¹à¤¿à¤¨à¤¾",
					y: "à¤à¤• à¤¬à¤°à¥à¤·",
					yy: "%d à¤¬à¤°à¥à¤·"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
			n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
			r = e.defineLocale("nl", {
				months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
				monthsShort: function(e, r) {
					return /-MMM-/.test(r) ? n[e.month()] : t[e.month()]
				},
				monthsParseExact: !0,
				weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
				weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
				weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD-MM-YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[vandaag om] LT",
					nextDay: "[morgen om] LT",
					nextWeek: "dddd [om] LT",
					lastDay: "[gisteren om] LT",
					lastWeek: "[afgelopen] dddd [om] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "over %s",
					past: "%s geleden",
					s: "een paar seconden",
					m: "Ã©Ã©n minuut",
					mm: "%d minuten",
					h: "Ã©Ã©n uur",
					hh: "%d uur",
					d: "Ã©Ã©n dag",
					dd: "%d dagen",
					M: "Ã©Ã©n maand",
					MM: "%d maanden",
					y: "Ã©Ã©n jaar",
					yy: "%d jaar"
				},
				ordinalParse: /\d{1,2}(ste|de)/,
				ordinal: function(e) {
					return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
				},
				week: {
					dow: 1,
					doy: 4
				}
			});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("nn", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sundag_mÃ¥ndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
			weekdaysShort: "sun_mÃ¥n_tys_ons_tor_fre_lau".split("_"),
			weekdaysMin: "su_mÃ¥_ty_on_to_fr_lÃ¸".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] H:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[I dag klokka] LT",
				nextDay: "[I morgon klokka] LT",
				nextWeek: "dddd [klokka] LT",
				lastDay: "[I gÃ¥r klokka] LT",
				lastWeek: "[FÃ¸regÃ¥ande] dddd [klokka] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "%s sidan",
				s: "nokre sekund",
				m: "eit minutt",
				mm: "%d minutt",
				h: "ein time",
				hh: "%d timar",
				d: "ein dag",
				dd: "%d dagar",
				M: "ein mÃ¥nad",
				MM: "%d mÃ¥nader",
				y: "eit Ã¥r",
				yy: "%d Ã¥r"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "à©§",
				2: "à©¨",
				3: "à©©",
				4: "à©ª",
				5: "à©«",
				6: "à©¬",
				7: "à©­",
				8: "à©®",
				9: "à©¯",
				0: "à©¦"
			},
			n = {
				"à©§": "1",
				"à©¨": "2",
				"à©©": "3",
				"à©ª": "4",
				"à©«": "5",
				"à©¬": "6",
				"à©­": "7",
				"à©®": "8",
				"à©¯": "9",
				"à©¦": "0"
			},
			r = e.defineLocale("pa-in", {
				months: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
				monthsShort: "à¨œà¨¨à¨µà¨°à©€_à¨«à¨¼à¨°à¨µà¨°à©€_à¨®à¨¾à¨°à¨š_à¨…à¨ªà©à¨°à©ˆà¨²_à¨®à¨ˆ_à¨œà©‚à¨¨_à¨œà©à¨²à¨¾à¨ˆ_à¨…à¨—à¨¸à¨¤_à¨¸à¨¤à©°à¨¬à¨°_à¨…à¨•à¨¤à©‚à¨¬à¨°_à¨¨à¨µà©°à¨¬à¨°_à¨¦à¨¸à©°à¨¬à¨°".split("_"),
				weekdays: "à¨à¨¤à¨µà¨¾à¨°_à¨¸à©‹à¨®à¨µà¨¾à¨°_à¨®à©°à¨—à¨²à¨µà¨¾à¨°_à¨¬à©à¨§à¨µà¨¾à¨°_à¨µà©€à¨°à¨µà¨¾à¨°_à¨¸à¨¼à©à©±à¨•à¨°à¨µà¨¾à¨°_à¨¸à¨¼à¨¨à©€à¨šà¨°à¨µà¨¾à¨°".split("_"),
				weekdaysShort: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
				weekdaysMin: "à¨à¨¤_à¨¸à©‹à¨®_à¨®à©°à¨—à¨²_à¨¬à©à¨§_à¨µà©€à¨°_à¨¸à¨¼à©à¨•à¨°_à¨¸à¨¼à¨¨à©€".split("_"),
				longDateFormat: {
					LT: "A h:mm à¨µà¨œà©‡",
					LTS: "A h:mm:ss à¨µà¨œà©‡",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, A h:mm à¨µà¨œà©‡",
					LLLL: "dddd, D MMMM YYYY, A h:mm à¨µà¨œà©‡"
				},
				calendar: {
					sameDay: "[à¨…à¨œ] LT",
					nextDay: "[à¨•à¨²] LT",
					nextWeek: "dddd, LT",
					lastDay: "[à¨•à¨²] LT",
					lastWeek: "[à¨ªà¨¿à¨›à¨²à©‡] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s à¨µà¨¿à©±à¨š",
					past: "%s à¨ªà¨¿à¨›à¨²à©‡",
					s: "à¨•à©à¨ à¨¸à¨•à¨¿à©°à¨Ÿ",
					m: "à¨‡à¨• à¨®à¨¿à©°à¨Ÿ",
					mm: "%d à¨®à¨¿à©°à¨Ÿ",
					h: "à¨‡à©±à¨• à¨˜à©°à¨Ÿà¨¾",
					hh: "%d à¨˜à©°à¨Ÿà©‡",
					d: "à¨‡à©±à¨• à¨¦à¨¿à¨¨",
					dd: "%d à¨¦à¨¿à¨¨",
					M: "à¨‡à©±à¨• à¨®à¨¹à©€à¨¨à¨¾",
					MM: "%d à¨®à¨¹à©€à¨¨à©‡",
					y: "à¨‡à©±à¨• à¨¸à¨¾à¨²",
					yy: "%d à¨¸à¨¾à¨²"
				},
				preparse: function(e) {
					return e.replace(/[à©§à©¨à©©à©ªà©«à©¬à©­à©®à©¯à©¦]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /à¨°à¨¾à¨¤|à¨¸à¨µà©‡à¨°|à¨¦à©à¨ªà¨¹à¨¿à¨°|à¨¸à¨¼à¨¾à¨®/,
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "à¨°à¨¾à¨¤" === t ? 4 > e ? e : e + 12 : "à¨¸à¨µà©‡à¨°" === t ? e : "à¨¦à©à¨ªà¨¹à¨¿à¨°" === t ? e >= 10 ? e : e + 12 : "à¨¸à¨¼à¨¾à¨®" === t ? e + 12 : void 0
				},
				meridiem: function(e, t, n) {
					return 4 > e ? "à¨°à¨¾à¨¤" : 10 > e ? "à¨¸à¨µà©‡à¨°" : 17 > e ? "à¨¦à©à¨ªà¨¹à¨¿à¨°" : 20 > e ? "à¨¸à¨¼à¨¾à¨®" : "à¨°à¨¾à¨¤"
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e) {
			return 5 > e % 10 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
		}

		function n(e, n, r) {
			var o = e + " ";
			switch (r) {
				case "m":
					return n ? "minuta" : "minutÄ™";
				case "mm":
					return o + (t(e) ? "minuty" : "minut");
				case "h":
					return n ? "godzina" : "godzinÄ™";
				case "hh":
					return o + (t(e) ? "godziny" : "godzin");
				case "MM":
					return o + (t(e) ? "miesiÄ…ce" : "miesiÄ™cy");
				case "yy":
					return o + (t(e) ? "lata" : "lat")
			}
		}
		var r = "styczeÅ„_luty_marzec_kwiecieÅ„_maj_czerwiec_lipiec_sierpieÅ„_wrzesieÅ„_paÅºdziernik_listopad_grudzieÅ„".split("_"),
			o = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrzeÅ›nia_paÅºdziernika_listopada_grudnia".split("_"),
			a = e.defineLocale("pl", {
				months: function(e, t) {
					return "" === t ? "(" + o[e.month()] + "|" + r[e.month()] + ")" : /D MMMM/.test(t) ? o[e.month()] : r[e.month()]
				},
				monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paÅº_lis_gru".split("_"),
				weekdays: "niedziela_poniedziaÅ‚ek_wtorek_Å›roda_czwartek_piÄ…tek_sobota".split("_"),
				weekdaysShort: "nie_pon_wt_Å›r_czw_pt_sb".split("_"),
				weekdaysMin: "Nd_Pn_Wt_Åšr_Cz_Pt_So".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[DziÅ› o] LT",
					nextDay: "[Jutro o] LT",
					nextWeek: "[W] dddd [o] LT",
					lastDay: "[Wczoraj o] LT",
					lastWeek: function() {
						switch (this.day()) {
							case 0:
								return "[W zeszÅ‚Ä… niedzielÄ™ o] LT";
							case 3:
								return "[W zeszÅ‚Ä… Å›rodÄ™ o] LT";
							case 6:
								return "[W zeszÅ‚Ä… sobotÄ™ o] LT";
							default:
								return "[W zeszÅ‚y] dddd [o] LT"
						}
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "za %s",
					past: "%s temu",
					s: "kilka sekund",
					m: n,
					mm: n,
					h: n,
					hh: n,
					d: "1 dzieÅ„",
					dd: "%d dni",
					M: "miesiÄ…c",
					MM: n,
					y: "rok",
					yy: n
				},
				ordinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return a
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("pt", {
			months: "Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingo_Segunda-Feira_TerÃ§a-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_SÃ¡bado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
			weekdaysMin: "Dom_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡b".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hoje Ã s] LT",
				nextDay: "[AmanhÃ£ Ã s] LT",
				nextWeek: "dddd [Ã s] LT",
				lastDay: "[Ontem Ã s] LT",
				lastWeek: function() {
					return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "hÃ¡ %s",
				s: "segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mÃªs",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}Âº/,
			ordinal: "%dÂº",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("pt-br", {
			months: "Janeiro_Fevereiro_MarÃ§o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingo_Segunda-feira_TerÃ§a-feira_Quarta-feira_Quinta-feira_Sexta-feira_SÃ¡bado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_SÃ¡b".split("_"),
			weekdaysMin: "Dom_2Âª_3Âª_4Âª_5Âª_6Âª_SÃ¡b".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [de] MMMM [de] YYYY",
				LLL: "D [de] MMMM [de] YYYY [Ã s] HH:mm",
				LLLL: "dddd, D [de] MMMM [de] YYYY [Ã s] HH:mm"
			},
			calendar: {
				sameDay: "[Hoje Ã s] LT",
				nextDay: "[AmanhÃ£ Ã s] LT",
				nextWeek: "dddd [Ã s] LT",
				lastDay: "[Ontem Ã s] LT",
				lastWeek: function() {
					return 0 === this.day() || 6 === this.day() ? "[Ãšltimo] dddd [Ã s] LT" : "[Ãšltima] dddd [Ã s] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em %s",
				past: "%s atrÃ¡s",
				s: "poucos segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mÃªs",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}Âº/,
			ordinal: "%dÂº"
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n) {
			var r = {
					mm: "minute",
					hh: "ore",
					dd: "zile",
					MM: "luni",
					yy: "ani"
				},
				o = " ";
			return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (o = " de "), e + o + r[n]
		}
		var n = e.defineLocale("ro", {
			months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
			monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "duminicÄƒ_luni_marÈ›i_miercuri_joi_vineri_sÃ¢mbÄƒtÄƒ".split("_"),
			weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_SÃ¢m".split("_"),
			weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_SÃ¢".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[azi la] LT",
				nextDay: "[mÃ¢ine la] LT",
				nextWeek: "dddd [la] LT",
				lastDay: "[ieri la] LT",
				lastWeek: "[fosta] dddd [la] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "peste %s",
				past: "%s Ã®n urmÄƒ",
				s: "cÃ¢teva secunde",
				m: "un minut",
				mm: t,
				h: "o orÄƒ",
				hh: t,
				d: "o zi",
				dd: t,
				M: "o lunÄƒ",
				MM: t,
				y: "un an",
				yy: t
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t) {
			var n = e.split("_");
			return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
		}

		function n(e, n, r) {
			var o = {
				mm: n ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ_Ð¼Ð¸Ð½ÑƒÑ‚Ñ‹_Ð¼Ð¸Ð½ÑƒÑ‚",
				hh: "Ñ‡Ð°Ñ_Ñ‡Ð°ÑÐ°_Ñ‡Ð°ÑÐ¾Ð²",
				dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ_Ð´Ð½ÐµÐ¹",
				MM: "Ð¼ÐµÑÑÑ†_Ð¼ÐµÑÑÑ†Ð°_Ð¼ÐµÑÑÑ†ÐµÐ²",
				yy: "Ð³Ð¾Ð´_Ð³Ð¾Ð´Ð°_Ð»ÐµÑ‚"
			};
			return "m" === r ? n ? "Ð¼Ð¸Ð½ÑƒÑ‚Ð°" : "Ð¼Ð¸Ð½ÑƒÑ‚Ñƒ" : e + " " + t(o[r], +e)
		}
		var r = [/^ÑÐ½Ð²/i, /^Ñ„ÐµÐ²/i, /^Ð¼Ð°Ñ€/i, /^Ð°Ð¿Ñ€/i, /^Ð¼Ð°[Ð¹Ñ]/i, /^Ð¸ÑŽÐ½/i, /^Ð¸ÑŽÐ»/i, /^Ð°Ð²Ð³/i, /^ÑÐµÐ½/i, /^Ð¾ÐºÑ‚/i, /^Ð½Ð¾Ñ/i, /^Ð´ÐµÐº/i],
			o = e.defineLocale("ru", {
				months: {
					format: "ÑÐ½Ð²Ð°Ñ€Ñ_Ñ„ÐµÐ²Ñ€Ð°Ð»Ñ_Ð¼Ð°Ñ€Ñ‚Ð°_Ð°Ð¿Ñ€ÐµÐ»Ñ_Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³ÑƒÑÑ‚Ð°_ÑÐµÐ½Ñ‚ÑÐ±Ñ€Ñ_Ð¾ÐºÑ‚ÑÐ±Ñ€Ñ_Ð½Ð¾ÑÐ±Ñ€Ñ_Ð´ÐµÐºÐ°Ð±Ñ€Ñ".split("_"),
					standalone: "ÑÐ½Ð²Ð°Ñ€ÑŒ_Ñ„ÐµÐ²Ñ€Ð°Ð»ÑŒ_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»ÑŒ_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€ÑŒ_Ð¾ÐºÑ‚ÑÐ±Ñ€ÑŒ_Ð½Ð¾ÑÐ±Ñ€ÑŒ_Ð´ÐµÐºÐ°Ð±Ñ€ÑŒ".split("_")
				},
				monthsShort: {
					format: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ_Ð¸ÑŽÐ½Ñ_Ð¸ÑŽÐ»Ñ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_"),
					standalone: "ÑÐ½Ð²._Ñ„ÐµÐ²Ñ€._Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€._Ð¼Ð°Ð¹_Ð¸ÑŽÐ½ÑŒ_Ð¸ÑŽÐ»ÑŒ_Ð°Ð²Ð³._ÑÐµÐ½Ñ‚._Ð¾ÐºÑ‚._Ð½Ð¾ÑÐ±._Ð´ÐµÐº.".split("_")
				},
				weekdays: {
					standalone: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ð°_ÑÑƒÐ±Ð±Ð¾Ñ‚Ð°".split("_"),
					format: "Ð²Ð¾ÑÐºÑ€ÐµÑÐµÐ½ÑŒÐµ_Ð¿Ð¾Ð½ÐµÐ´ÐµÐ»ÑŒÐ½Ð¸Ðº_Ð²Ñ‚Ð¾Ñ€Ð½Ð¸Ðº_ÑÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³_Ð¿ÑÑ‚Ð½Ð¸Ñ†Ñƒ_ÑÑƒÐ±Ð±Ð¾Ñ‚Ñƒ".split("_"),
					isFormat: /\[ ?[Ð’Ð²] ?(?:Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ|ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ|ÑÑ‚Ñƒ)? ?\] ?dddd/
				},
				weekdaysShort: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
				weekdaysMin: "Ð²Ñ_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
				monthsParse: r,
				longMonthsParse: r,
				shortMonthsParse: r,
				monthsRegex: /^(ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|ÑÐµÐ½Ñ‚\.|Ñ„ÐµÐ²Ñ€\.|Ð½Ð¾ÑÐ±\.|Ð¸ÑŽÐ½ÑŒ|ÑÐ½Ð².|Ð¸ÑŽÐ»ÑŒ|Ð´ÐµÐº.|Ð°Ð²Ð³.|Ð°Ð¿Ñ€.|Ð¼Ð°Ñ€Ñ‚Ð°|Ð¼Ð°Ñ€[.Ñ‚]|Ð¾ÐºÑ‚.|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹])/i,
				monthsShortRegex: /^(ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|ÑÐµÐ½Ñ‚\.|Ñ„ÐµÐ²Ñ€\.|Ð½Ð¾ÑÐ±\.|Ð¸ÑŽÐ½ÑŒ|ÑÐ½Ð².|Ð¸ÑŽÐ»ÑŒ|Ð´ÐµÐº.|Ð°Ð²Ð³.|Ð°Ð¿Ñ€.|Ð¼Ð°Ñ€Ñ‚Ð°|Ð¼Ð°Ñ€[.Ñ‚]|Ð¾ÐºÑ‚.|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹])/i,
				monthsStrictRegex: /^(ÑÐµÐ½Ñ‚ÑÐ±Ñ€[ÑÑŒ]|Ð¾ÐºÑ‚ÑÐ±Ñ€[ÑÑŒ]|Ð´ÐµÐºÐ°Ð±Ñ€[ÑÑŒ]|Ñ„ÐµÐ²Ñ€Ð°Ð»[ÑÑŒ]|ÑÐ½Ð²Ð°Ñ€[ÑÑŒ]|Ð°Ð¿Ñ€ÐµÐ»[ÑÑŒ]|Ð°Ð²Ð³ÑƒÑÑ‚Ð°?|Ð½Ð¾ÑÐ±Ñ€[ÑÑŒ]|Ð¼Ð°Ñ€Ñ‚Ð°?|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¸ÑŽÐ»[ÑÑŒ]|Ð¼Ð°[ÑÐ¹])/i,
				monthsShortStrictRegex: /^(Ð½Ð¾ÑÐ±\.|Ñ„ÐµÐ²Ñ€\.|ÑÐµÐ½Ñ‚\.|Ð¸ÑŽÐ»ÑŒ|ÑÐ½Ð²\.|Ð¸ÑŽÐ½[ÑÑŒ]|Ð¼Ð°Ñ€[.Ñ‚]|Ð°Ð²Ð³\.|Ð°Ð¿Ñ€\.|Ð¾ÐºÑ‚\.|Ð´ÐµÐº\.|Ð¼Ð°[ÑÐ¹])/i,
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY Ð³.",
					LLL: "D MMMM YYYY Ð³., HH:mm",
					LLLL: "dddd, D MMMM YYYY Ð³., HH:mm"
				},
				calendar: {
					sameDay: "[Ð¡ÐµÐ³Ð¾Ð´Ð½Ñ Ð²] LT",
					nextDay: "[Ð—Ð°Ð²Ñ‚Ñ€Ð° Ð²] LT",
					lastDay: "[Ð’Ñ‡ÐµÑ€Ð° Ð²] LT",
					nextWeek: function(e) {
						if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd [Ð²] LT" : "[Ð’] dddd [Ð²] LT";
						switch (this.day()) {
							case 0:
								return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÐµÐµ] dddd [Ð²] LT";
							case 1:
							case 2:
							case 4:
								return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰Ð¸Ð¹] dddd [Ð²] LT";
							case 3:
							case 5:
							case 6:
								return "[Ð’ ÑÐ»ÐµÐ´ÑƒÑŽÑ‰ÑƒÑŽ] dddd [Ð²] LT"
						}
					},
					lastWeek: function(e) {
						if (e.week() === this.week()) return 2 === this.day() ? "[Ð’Ð¾] dddd [Ð²] LT" : "[Ð’] dddd [Ð²] LT";
						switch (this.day()) {
							case 0:
								return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ðµ] dddd [Ð²] LT";
							case 1:
							case 2:
							case 4:
								return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»Ñ‹Ð¹] dddd [Ð²] LT";
							case 3:
							case 5:
							case 6:
								return "[Ð’ Ð¿Ñ€Ð¾ÑˆÐ»ÑƒÑŽ] dddd [Ð²] LT"
						}
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "Ñ‡ÐµÑ€ÐµÐ· %s",
					past: "%s Ð½Ð°Ð·Ð°Ð´",
					s: "Ð½ÐµÑÐºÐ¾Ð»ÑŒÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´",
					m: n,
					mm: n,
					h: "Ñ‡Ð°Ñ",
					hh: n,
					d: "Ð´ÐµÐ½ÑŒ",
					dd: n,
					M: "Ð¼ÐµÑÑÑ†",
					MM: n,
					y: "Ð³Ð¾Ð´",
					yy: n
				},
				meridiemParse: /Ð½Ð¾Ñ‡Ð¸|ÑƒÑ‚Ñ€Ð°|Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°/i,
				isPM: function(e) {
					return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡ÐµÑ€Ð°)$/.test(e)
				},
				meridiem: function(e, t, n) {
					return 4 > e ? "Ð½Ð¾Ñ‡Ð¸" : 12 > e ? "ÑƒÑ‚Ñ€Ð°" : 17 > e ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡ÐµÑ€Ð°"
				},
				ordinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾|Ñ)/,
				ordinal: function(e, t) {
					switch (t) {
						case "M":
						case "d":
						case "DDD":
							return e + "-Ð¹";
						case "D":
							return e + "-Ð³Ð¾";
						case "w":
						case "W":
							return e + "-Ñ";
						default:
							return e
					}
				},
				week: {
					dow: 1,
					doy: 7
				}
			});
		return o
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("se", {
			months: "oÄ‘Ä‘ajagemÃ¡nnu_guovvamÃ¡nnu_njukÄamÃ¡nnu_cuoÅ‹omÃ¡nnu_miessemÃ¡nnu_geassemÃ¡nnu_suoidnemÃ¡nnu_borgemÃ¡nnu_ÄakÄamÃ¡nnu_golggotmÃ¡nnu_skÃ¡bmamÃ¡nnu_juovlamÃ¡nnu".split("_"),
			monthsShort: "oÄ‘Ä‘j_guov_njuk_cuo_mies_geas_suoi_borg_ÄakÄ_golg_skÃ¡b_juov".split("_"),
			weekdays: "sotnabeaivi_vuossÃ¡rga_maÅ‹Å‹ebÃ¡rga_gaskavahkku_duorastat_bearjadat_lÃ¡vvardat".split("_"),
			weekdaysShort: "sotn_vuos_maÅ‹_gask_duor_bear_lÃ¡v".split("_"),
			weekdaysMin: "s_v_m_g_d_b_L".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "MMMM D. [b.] YYYY",
				LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
				LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
			},
			calendar: {
				sameDay: "[otne ti] LT",
				nextDay: "[ihttin ti] LT",
				nextWeek: "dddd [ti] LT",
				lastDay: "[ikte ti] LT",
				lastWeek: "[ovddit] dddd [ti] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s geaÅ¾es",
				past: "maÅ‹it %s",
				s: "moadde sekunddat",
				m: "okta minuhta",
				mm: "%d minuhtat",
				h: "okta diimmu",
				hh: "%d diimmut",
				d: "okta beaivi",
				dd: "%d beaivvit",
				M: "okta mÃ¡nnu",
				MM: "%d mÃ¡nut",
				y: "okta jahki",
				yy: "%d jagit"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("si", {
			months: "à¶¢à¶±à·€à·à¶»à·’_à¶´à·™à¶¶à¶»à·€à·à¶»à·’_à¶¸à·à¶»à·Šà¶­à·”_à¶…à¶´à·Šâ€à¶»à·šà¶½à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·à·ƒà·Šà¶­à·”_à·ƒà·à¶´à·Šà¶­à·à¶¸à·Šà¶¶à¶»à·Š_à¶”à¶šà·Šà¶­à·à¶¶à¶»à·Š_à¶±à·œà·€à·à¶¸à·Šà¶¶à¶»à·Š_à¶¯à·™à·ƒà·à¶¸à·Šà¶¶à¶»à·Š".split("_"),
			monthsShort: "à¶¢à¶±_à¶´à·™à¶¶_à¶¸à·à¶»à·Š_à¶…à¶´à·Š_à¶¸à·à¶ºà·’_à¶¢à·–à¶±à·’_à¶¢à·–à¶½à·’_à¶…à¶œà·_à·ƒà·à¶´à·Š_à¶”à¶šà·Š_à¶±à·œà·€à·_à¶¯à·™à·ƒà·".split("_"),
			weekdays: "à¶‰à¶»à·’à¶¯à·_à·ƒà¶³à·”à¶¯à·_à¶…à¶Ÿà·„à¶»à·”à·€à·à¶¯à·_à¶¶à¶¯à·à¶¯à·_à¶¶à·Šâ€à¶»à·„à·ƒà·Šà¶´à¶­à·’à¶±à·Šà¶¯à·_à·ƒà·’à¶šà·”à¶»à·à¶¯à·_à·ƒà·™à¶±à·ƒà·”à¶»à·à¶¯à·".split("_"),
			weekdaysShort: "à¶‰à¶»à·’_à·ƒà¶³à·”_à¶…à¶Ÿ_à¶¶à¶¯à·_à¶¶à·Šâ€à¶»à·„_à·ƒà·’à¶šà·”_à·ƒà·™à¶±".split("_"),
			weekdaysMin: "à¶‰_à·ƒ_à¶…_à¶¶_à¶¶à·Šâ€à¶»_à·ƒà·’_à·ƒà·™".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "a h:mm",
				LTS: "a h:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY MMMM D",
				LLL: "YYYY MMMM D, a h:mm",
				LLLL: "YYYY MMMM D [à·€à·à¶±à·’] dddd, a h:mm:ss"
			},
			calendar: {
				sameDay: "[à¶…à¶¯] LT[à¶§]",
				nextDay: "[à·„à·™à¶§] LT[à¶§]",
				nextWeek: "dddd LT[à¶§]",
				lastDay: "[à¶Šà¶ºà·š] LT[à¶§]",
				lastWeek: "[à¶´à·ƒà·”à¶œà·’à¶º] dddd LT[à¶§]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%sà¶šà·’à¶±à·Š",
				past: "%sà¶šà¶§ à¶´à·™à¶»",
				s: "à¶­à¶­à·Šà¶´à¶» à¶šà·’à·„à·’à¶´à¶º",
				m: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·”à·€",
				mm: "à¶¸à·’à¶±à·’à¶­à·Šà¶­à·” %d",
				h: "à¶´à·à¶º",
				hh: "à¶´à·à¶º %d",
				d: "à¶¯à·’à¶±à¶º",
				dd: "à¶¯à·’à¶± %d",
				M: "à¶¸à·à·ƒà¶º",
				MM: "à¶¸à·à·ƒ %d",
				y: "à·€à·ƒà¶»",
				yy: "à·€à·ƒà¶» %d"
			},
			ordinalParse: /\d{1,2} à·€à·à¶±à·’/,
			ordinal: function(e) {
				return e + " à·€à·à¶±à·’"
			},
			meridiemParse: /à¶´à·™à¶» à·€à¶»à·”|à¶´à·ƒà·Š à·€à¶»à·”|à¶´à·™.à·€|à¶´.à·€./,
			isPM: function(e) {
				return "à¶´.à·€." === e || "à¶´à·ƒà·Š à·€à¶»à·”" === e
			},
			meridiem: function(e, t, n) {
				return e > 11 ? n ? "à¶´.à·€." : "à¶´à·ƒà·Š à·€à¶»à·”" : n ? "à¶´à·™.à·€." : "à¶´à·™à¶» à·€à¶»à·”"
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e) {
			return e > 1 && 5 > e
		}

		function n(e, n, r, o) {
			var a = e + " ";
			switch (r) {
				case "s":
					return n || o ? "pÃ¡r sekÃºnd" : "pÃ¡r sekundami";
				case "m":
					return n ? "minÃºta" : o ? "minÃºtu" : "minÃºtou";
				case "mm":
					return n || o ? a + (t(e) ? "minÃºty" : "minÃºt") : a + "minÃºtami";
				case "h":
					return n ? "hodina" : o ? "hodinu" : "hodinou";
				case "hh":
					return n || o ? a + (t(e) ? "hodiny" : "hodÃ­n") : a + "hodinami";
				case "d":
					return n || o ? "deÅˆ" : "dÅˆom";
				case "dd":
					return n || o ? a + (t(e) ? "dni" : "dnÃ­") : a + "dÅˆami";
				case "M":
					return n || o ? "mesiac" : "mesiacom";
				case "MM":
					return n || o ? a + (t(e) ? "mesiace" : "mesiacov") : a + "mesiacmi";
				case "y":
					return n || o ? "rok" : "rokom";
				case "yy":
					return n || o ? a + (t(e) ? "roky" : "rokov") : a + "rokmi"
			}
		}
		var r = "januÃ¡r_februÃ¡r_marec_aprÃ­l_mÃ¡j_jÃºn_jÃºl_august_september_oktÃ³ber_november_december".split("_"),
			o = "jan_feb_mar_apr_mÃ¡j_jÃºn_jÃºl_aug_sep_okt_nov_dec".split("_"),
			a = e.defineLocale("sk", {
				months: r,
				monthsShort: o,
				weekdays: "nedeÄ¾a_pondelok_utorok_streda_Å¡tvrtok_piatok_sobota".split("_"),
				weekdaysShort: "ne_po_ut_st_Å¡t_pi_so".split("_"),
				weekdaysMin: "ne_po_ut_st_Å¡t_pi_so".split("_"),
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd D. MMMM YYYY H:mm"
				},
				calendar: {
					sameDay: "[dnes o] LT",
					nextDay: "[zajtra o] LT",
					nextWeek: function() {
						switch (this.day()) {
							case 0:
								return "[v nedeÄ¾u o] LT";
							case 1:
							case 2:
								return "[v] dddd [o] LT";
							case 3:
								return "[v stredu o] LT";
							case 4:
								return "[vo Å¡tvrtok o] LT";
							case 5:
								return "[v piatok o] LT";
							case 6:
								return "[v sobotu o] LT"
						}
					},
					lastDay: "[vÄera o] LT",
					lastWeek: function() {
						switch (this.day()) {
							case 0:
								return "[minulÃº nedeÄ¾u o] LT";
							case 1:
							case 2:
								return "[minulÃ½] dddd [o] LT";
							case 3:
								return "[minulÃº stredu o] LT";
							case 4:
							case 5:
								return "[minulÃ½] dddd [o] LT";
							case 6:
								return "[minulÃº sobotu o] LT"
						}
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "za %s",
					past: "pred %s",
					s: n,
					m: n,
					mm: n,
					h: n,
					hh: n,
					d: n,
					dd: n,
					M: n,
					MM: n,
					y: n,
					yy: n
				},
				ordinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return a
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, r) {
			var o = e + " ";
			switch (n) {
				case "s":
					return t || r ? "nekaj sekund" : "nekaj sekundami";
				case "m":
					return t ? "ena minuta" : "eno minuto";
				case "mm":
					return o += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : 5 > e ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami";
				case "h":
					return t ? "ena ura" : "eno uro";
				case "hh":
					return o += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : 5 > e ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami";
				case "d":
					return t || r ? "en dan" : "enim dnem";
				case "dd":
					return o += 1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi";
				case "M":
					return t || r ? "en mesec" : "enim mesecem";
				case "MM":
					return o += 1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : 5 > e ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci";
				case "y":
					return t || r ? "eno leto" : "enim letom";
				case "yy":
					return o += 1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : 5 > e ? t || r ? "leta" : "leti" : t || r ? "let" : "leti"
			}
		}
		var n = e.defineLocale("sl", {
			months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
			monthsParseExact: !0,
			weekdays: "nedelja_ponedeljek_torek_sreda_Äetrtek_petek_sobota".split("_"),
			weekdaysShort: "ned._pon._tor._sre._Äet._pet._sob.".split("_"),
			weekdaysMin: "ne_po_to_sr_Äe_pe_so".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD. MM. YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY H:mm",
				LLLL: "dddd, D. MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danes ob] LT",
				nextDay: "[jutri ob] LT",
				nextWeek: function() {
					switch (this.day()) {
						case 0:
							return "[v] [nedeljo] [ob] LT";
						case 3:
							return "[v] [sredo] [ob] LT";
						case 6:
							return "[v] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[v] dddd [ob] LT"
					}
				},
				lastDay: "[vÄeraj ob] LT",
				lastWeek: function() {
					switch (this.day()) {
						case 0:
							return "[prejÅ¡njo] [nedeljo] [ob] LT";
						case 3:
							return "[prejÅ¡njo] [sredo] [ob] LT";
						case 6:
							return "[prejÅ¡njo] [soboto] [ob] LT";
						case 1:
						case 2:
						case 4:
						case 5:
							return "[prejÅ¡nji] dddd [ob] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "Äez %s",
				past: "pred %s",
				s: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("sq", {
			months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_NÃ«ntor_Dhjetor".split("_"),
			monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_NÃ«n_Dhj".split("_"),
			weekdays: "E Diel_E HÃ«nÃ«_E MartÃ«_E MÃ«rkurÃ«_E Enjte_E Premte_E ShtunÃ«".split("_"),
			weekdaysShort: "Die_HÃ«n_Mar_MÃ«r_Enj_Pre_Sht".split("_"),
			weekdaysMin: "D_H_Ma_MÃ«_E_P_Sh".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /PD|MD/,
			isPM: function(e) {
				return "M" === e.charAt(0)
			},
			meridiem: function(e, t, n) {
				return 12 > e ? "PD" : "MD"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Sot nÃ«] LT",
				nextDay: "[NesÃ«r nÃ«] LT",
				nextWeek: "dddd [nÃ«] LT",
				lastDay: "[Dje nÃ«] LT",
				lastWeek: "dddd [e kaluar nÃ«] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "nÃ« %s",
				past: "%s mÃ« parÃ«",
				s: "disa sekonda",
				m: "njÃ« minutÃ«",
				mm: "%d minuta",
				h: "njÃ« orÃ«",
				hh: "%d orÃ«",
				d: "njÃ« ditÃ«",
				dd: "%d ditÃ«",
				M: "njÃ« muaj",
				MM: "%d muaj",
				y: "njÃ« vit",
				yy: "%d vite"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				words: {
					m: ["jedan minut", "jedne minute"],
					mm: ["minut", "minute", "minuta"],
					h: ["jedan sat", "jednog sata"],
					hh: ["sat", "sata", "sati"],
					dd: ["dan", "dana", "dana"],
					MM: ["mesec", "meseca", "meseci"],
					yy: ["godina", "godine", "godina"]
				},
				correctGrammaticalCase: function(e, t) {
					return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
				},
				translate: function(e, n, r) {
					var o = t.words[r];
					return 1 === r.length ? n ? o[0] : o[1] : e + " " + t.correctGrammaticalCase(e, o)
				}
			},
			n = e.defineLocale("sr", {
				months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
				monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
				monthsParseExact: !0,
				weekdays: "nedelja_ponedeljak_utorak_sreda_Äetvrtak_petak_subota".split("_"),
				weekdaysShort: "ned._pon._uto._sre._Äet._pet._sub.".split("_"),
				weekdaysMin: "ne_po_ut_sr_Äe_pe_su".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD. MM. YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd, D. MMMM YYYY H:mm"
				},
				calendar: {
					sameDay: "[danas u] LT",
					nextDay: "[sutra u] LT",
					nextWeek: function() {
						switch (this.day()) {
							case 0:
								return "[u] [nedelju] [u] LT";
							case 3:
								return "[u] [sredu] [u] LT";
							case 6:
								return "[u] [subotu] [u] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[u] dddd [u] LT"
						}
					},
					lastDay: "[juÄe u] LT",
					lastWeek: function() {
						var e = ["[proÅ¡le] [nedelje] [u] LT", "[proÅ¡log] [ponedeljka] [u] LT", "[proÅ¡log] [utorka] [u] LT", "[proÅ¡le] [srede] [u] LT", "[proÅ¡log] [Äetvrtka] [u] LT", "[proÅ¡log] [petka] [u] LT", "[proÅ¡le] [subote] [u] LT"];
						return e[this.day()]
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "za %s",
					past: "pre %s",
					s: "nekoliko sekundi",
					m: t.translate,
					mm: t.translate,
					h: t.translate,
					hh: t.translate,
					d: "dan",
					dd: t.translate,
					M: "mesec",
					MM: t.translate,
					y: "godinu",
					yy: t.translate
				},
				ordinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				words: {
					m: ["Ñ˜ÐµÐ´Ð°Ð½ Ð¼Ð¸Ð½ÑƒÑ‚", "Ñ˜ÐµÐ´Ð½Ðµ Ð¼Ð¸Ð½ÑƒÑ‚Ðµ"],
					mm: ["Ð¼Ð¸Ð½ÑƒÑ‚", "Ð¼Ð¸Ð½ÑƒÑ‚Ðµ", "Ð¼Ð¸Ð½ÑƒÑ‚Ð°"],
					h: ["Ñ˜ÐµÐ´Ð°Ð½ ÑÐ°Ñ‚", "Ñ˜ÐµÐ´Ð½Ð¾Ð³ ÑÐ°Ñ‚Ð°"],
					hh: ["ÑÐ°Ñ‚", "ÑÐ°Ñ‚Ð°", "ÑÐ°Ñ‚Ð¸"],
					dd: ["Ð´Ð°Ð½", "Ð´Ð°Ð½Ð°", "Ð´Ð°Ð½Ð°"],
					MM: ["Ð¼ÐµÑÐµÑ†", "Ð¼ÐµÑÐµÑ†Ð°", "Ð¼ÐµÑÐµÑ†Ð¸"],
					yy: ["Ð³Ð¾Ð´Ð¸Ð½Ð°", "Ð³Ð¾Ð´Ð¸Ð½Ðµ", "Ð³Ð¾Ð´Ð¸Ð½Ð°"]
				},
				correctGrammaticalCase: function(e, t) {
					return 1 === e ? t[0] : e >= 2 && 4 >= e ? t[1] : t[2]
				},
				translate: function(e, n, r) {
					var o = t.words[r];
					return 1 === r.length ? n ? o[0] : o[1] : e + " " + t.correctGrammaticalCase(e, o)
				}
			},
			n = e.defineLocale("sr-cyrl", {
				months: "Ñ˜Ð°Ð½ÑƒÐ°Ñ€_Ñ„ÐµÐ±Ñ€ÑƒÐ°Ñ€_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€Ð¸Ð»_Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ¿Ñ‚ÐµÐ¼Ð±Ð°Ñ€_Ð¾ÐºÑ‚Ð¾Ð±Ð°Ñ€_Ð½Ð¾Ð²ÐµÐ¼Ð±Ð°Ñ€_Ð´ÐµÑ†ÐµÐ¼Ð±Ð°Ñ€".split("_"),
				monthsShort: "Ñ˜Ð°Ð½._Ñ„ÐµÐ±._Ð¼Ð°Ñ€._Ð°Ð¿Ñ€._Ð¼Ð°Ñ˜_Ñ˜ÑƒÐ½_Ñ˜ÑƒÐ»_Ð°Ð²Ð³._ÑÐµÐ¿._Ð¾ÐºÑ‚._Ð½Ð¾Ð²._Ð´ÐµÑ†.".split("_"),
				monthsParseExact: !0,
				weekdays: "Ð½ÐµÐ´ÐµÑ™Ð°_Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™Ð°Ðº_ÑƒÑ‚Ð¾Ñ€Ð°Ðº_ÑÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚Ð°Ðº_Ð¿ÐµÑ‚Ð°Ðº_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
				weekdaysShort: "Ð½ÐµÐ´._Ð¿Ð¾Ð½._ÑƒÑ‚Ð¾._ÑÑ€Ðµ._Ñ‡ÐµÑ‚._Ð¿ÐµÑ‚._ÑÑƒÐ±.".split("_"),
				weekdaysMin: "Ð½Ðµ_Ð¿Ð¾_ÑƒÑ‚_ÑÑ€_Ñ‡Ðµ_Ð¿Ðµ_ÑÑƒ".split("_"),
				weekdaysParseExact: !0,
				longDateFormat: {
					LT: "H:mm",
					LTS: "H:mm:ss",
					L: "DD. MM. YYYY",
					LL: "D. MMMM YYYY",
					LLL: "D. MMMM YYYY H:mm",
					LLLL: "dddd, D. MMMM YYYY H:mm"
				},
				calendar: {
					sameDay: "[Ð´Ð°Ð½Ð°Ñ Ñƒ] LT",
					nextDay: "[ÑÑƒÑ‚Ñ€Ð° Ñƒ] LT",
					nextWeek: function() {
						switch (this.day()) {
							case 0:
								return "[Ñƒ] [Ð½ÐµÐ´ÐµÑ™Ñƒ] [Ñƒ] LT";
							case 3:
								return "[Ñƒ] [ÑÑ€ÐµÐ´Ñƒ] [Ñƒ] LT";
							case 6:
								return "[Ñƒ] [ÑÑƒÐ±Ð¾Ñ‚Ñƒ] [Ñƒ] LT";
							case 1:
							case 2:
							case 4:
							case 5:
								return "[Ñƒ] dddd [Ñƒ] LT"
						}
					},
					lastDay: "[Ñ˜ÑƒÑ‡Ðµ Ñƒ] LT",
					lastWeek: function() {
						var e = ["[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [Ð½ÐµÐ´ÐµÑ™Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿Ð¾Ð½ÐµÐ´ÐµÑ™ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [ÑƒÑ‚Ð¾Ñ€ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑ€ÐµÐ´Ðµ] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ñ‡ÐµÑ‚Ð²Ñ€Ñ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ð¾Ð³] [Ð¿ÐµÑ‚ÐºÐ°] [Ñƒ] LT", "[Ð¿Ñ€Ð¾ÑˆÐ»Ðµ] [ÑÑƒÐ±Ð¾Ñ‚Ðµ] [Ñƒ] LT"];
						return e[this.day()]
					},
					sameElse: "L"
				},
				relativeTime: {
					future: "Ð·Ð° %s",
					past: "Ð¿Ñ€Ðµ %s",
					s: "Ð½ÐµÐºÐ¾Ð»Ð¸ÐºÐ¾ ÑÐµÐºÑƒÐ½Ð´Ð¸",
					m: t.translate,
					mm: t.translate,
					h: t.translate,
					hh: t.translate,
					d: "Ð´Ð°Ð½",
					dd: t.translate,
					M: "Ð¼ÐµÑÐµÑ†",
					MM: t.translate,
					y: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
					yy: t.translate
				},
				ordinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("ss", {
			months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
			monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
			weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
			weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
			weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd, D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Namuhla nga] LT",
				nextDay: "[Kusasa nga] LT",
				nextWeek: "dddd [nga] LT",
				lastDay: "[Itolo nga] LT",
				lastWeek: "dddd [leliphelile] [nga] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "nga %s",
				past: "wenteka nga %s",
				s: "emizuzwana lomcane",
				m: "umzuzu",
				mm: "%d emizuzu",
				h: "lihora",
				hh: "%d emahora",
				d: "lilanga",
				dd: "%d emalanga",
				M: "inyanga",
				MM: "%d tinyanga",
				y: "umnyaka",
				yy: "%d iminyaka"
			},
			meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
			meridiem: function(e, t, n) {
				return 11 > e ? "ekuseni" : 15 > e ? "emini" : 19 > e ? "entsambama" : "ebusuku"
			},
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
			},
			ordinalParse: /\d{1,2}/,
			ordinal: "%d",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("sv", {
			months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "sÃ¶ndag_mÃ¥ndag_tisdag_onsdag_torsdag_fredag_lÃ¶rdag".split("_"),
			weekdaysShort: "sÃ¶n_mÃ¥n_tis_ons_tor_fre_lÃ¶r".split("_"),
			weekdaysMin: "sÃ¶_mÃ¥_ti_on_to_fr_lÃ¶".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Idag] LT",
				nextDay: "[Imorgon] LT",
				lastDay: "[IgÃ¥r] LT",
				nextWeek: "[PÃ¥] dddd LT",
				lastWeek: "[I] dddd[s] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "fÃ¶r %s sedan",
				s: "nÃ¥gra sekunder",
				m: "en minut",
				mm: "%d minuter",
				h: "en timme",
				hh: "%d timmar",
				d: "en dag",
				dd: "%d dagar",
				M: "en mÃ¥nad",
				MM: "%d mÃ¥nader",
				y: "ett Ã¥r",
				yy: "%d Ã¥r"
			},
			ordinalParse: /\d{1,2}(e|a)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("sw", {
			months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
			weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
			weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[leo saa] LT",
				nextDay: "[kesho saa] LT",
				nextWeek: "[wiki ijayo] dddd [saat] LT",
				lastDay: "[jana] LT",
				lastWeek: "[wiki iliyopita] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s baadaye",
				past: "tokea %s",
				s: "hivi punde",
				m: "dakika moja",
				mm: "dakika %d",
				h: "saa limoja",
				hh: "masaa %d",
				d: "siku moja",
				dd: "masiku %d",
				M: "mwezi mmoja",
				MM: "miezi %d",
				y: "mwaka mmoja",
				yy: "miaka %d"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "à¯§",
				2: "à¯¨",
				3: "à¯©",
				4: "à¯ª",
				5: "à¯«",
				6: "à¯¬",
				7: "à¯­",
				8: "à¯®",
				9: "à¯¯",
				0: "à¯¦"
			},
			n = {
				"à¯§": "1",
				"à¯¨": "2",
				"à¯©": "3",
				"à¯ª": "4",
				"à¯«": "5",
				"à¯¬": "6",
				"à¯­": "7",
				"à¯®": "8",
				"à¯¯": "9",
				"à¯¦": "0"
			},
			r = e.defineLocale("ta", {
				months: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
				monthsShort: "à®œà®©à®µà®°à®¿_à®ªà®¿à®ªà¯à®°à®µà®°à®¿_à®®à®¾à®°à¯à®šà¯_à®à®ªà¯à®°à®²à¯_à®®à¯‡_à®œà¯‚à®©à¯_à®œà¯‚à®²à¯ˆ_à®†à®•à®¸à¯à®Ÿà¯_à®šà¯†à®ªà¯à®Ÿà¯†à®®à¯à®ªà®°à¯_à®…à®•à¯à®Ÿà¯‡à®¾à®ªà®°à¯_à®¨à®µà®®à¯à®ªà®°à¯_à®Ÿà®¿à®šà®®à¯à®ªà®°à¯".split("_"),
				weekdays: "à®žà®¾à®¯à®¿à®±à¯à®±à¯à®•à¯à®•à®¿à®´à®®à¯ˆ_à®¤à®¿à®™à¯à®•à®Ÿà¯à®•à®¿à®´à®®à¯ˆ_à®šà¯†à®µà¯à®µà®¾à®¯à¯à®•à®¿à®´à®®à¯ˆ_à®ªà¯à®¤à®©à¯à®•à®¿à®´à®®à¯ˆ_à®µà®¿à®¯à®¾à®´à®•à¯à®•à®¿à®´à®®à¯ˆ_à®µà¯†à®³à¯à®³à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ_à®šà®©à®¿à®•à¯à®•à®¿à®´à®®à¯ˆ".split("_"),
				weekdaysShort: "à®žà®¾à®¯à®¿à®±à¯_à®¤à®¿à®™à¯à®•à®³à¯_à®šà¯†à®µà¯à®µà®¾à®¯à¯_à®ªà¯à®¤à®©à¯_à®µà®¿à®¯à®¾à®´à®©à¯_à®µà¯†à®³à¯à®³à®¿_à®šà®©à®¿".split("_"),
				weekdaysMin: "à®žà®¾_à®¤à®¿_à®šà¯†_à®ªà¯_à®µà®¿_à®µà¯†_à®š".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD/MM/YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY, HH:mm",
					LLLL: "dddd, D MMMM YYYY, HH:mm"
				},
				calendar: {
					sameDay: "[à®‡à®©à¯à®±à¯] LT",
					nextDay: "[à®¨à®¾à®³à¯ˆ] LT",
					nextWeek: "dddd, LT",
					lastDay: "[à®¨à¯‡à®±à¯à®±à¯] LT",
					lastWeek: "[à®•à®Ÿà®¨à¯à®¤ à®µà®¾à®°à®®à¯] dddd, LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s à®‡à®²à¯",
					past: "%s à®®à¯à®©à¯",
					s: "à®’à®°à¯ à®šà®¿à®² à®µà®¿à®¨à®¾à®Ÿà®¿à®•à®³à¯",
					m: "à®’à®°à¯ à®¨à®¿à®®à®¿à®Ÿà®®à¯",
					mm: "%d à®¨à®¿à®®à®¿à®Ÿà®™à¯à®•à®³à¯",
					h: "à®’à®°à¯ à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
					hh: "%d à®®à®£à®¿ à®¨à¯‡à®°à®®à¯",
					d: "à®’à®°à¯ à®¨à®¾à®³à¯",
					dd: "%d à®¨à®¾à®Ÿà¯à®•à®³à¯",
					M: "à®’à®°à¯ à®®à®¾à®¤à®®à¯",
					MM: "%d à®®à®¾à®¤à®™à¯à®•à®³à¯",
					y: "à®’à®°à¯ à®µà®°à¯à®Ÿà®®à¯",
					yy: "%d à®†à®£à¯à®Ÿà¯à®•à®³à¯"
				},
				ordinalParse: /\d{1,2}à®µà®¤à¯/,
				ordinal: function(e) {
					return e + "à®µà®¤à¯"
				},
				preparse: function(e) {
					return e.replace(/[à¯§à¯¨à¯©à¯ªà¯«à¯¬à¯­à¯®à¯¯à¯¦]/g, function(e) {
						return n[e]
					})
				},
				postformat: function(e) {
					return e.replace(/\d/g, function(e) {
						return t[e]
					})
				},
				meridiemParse: /à®¯à®¾à®®à®®à¯|à®µà¯ˆà®•à®±à¯ˆ|à®•à®¾à®²à¯ˆ|à®¨à®£à¯à®ªà®•à®²à¯|à®Žà®±à¯à®ªà®¾à®Ÿà¯|à®®à®¾à®²à¯ˆ/,
				meridiem: function(e, t, n) {
					return 2 > e ? " à®¯à®¾à®®à®®à¯" : 6 > e ? " à®µà¯ˆà®•à®±à¯ˆ" : 10 > e ? " à®•à®¾à®²à¯ˆ" : 14 > e ? " à®¨à®£à¯à®ªà®•à®²à¯" : 18 > e ? " à®Žà®±à¯à®ªà®¾à®Ÿà¯" : 22 > e ? " à®®à®¾à®²à¯ˆ" : " à®¯à®¾à®®à®®à¯"
				},
				meridiemHour: function(e, t) {
					return 12 === e && (e = 0), "à®¯à®¾à®®à®®à¯" === t ? 2 > e ? e : e + 12 : "à®µà¯ˆà®•à®±à¯ˆ" === t || "à®•à®¾à®²à¯ˆ" === t ? e : "à®¨à®£à¯à®ªà®•à®²à¯" === t && e >= 10 ? e : e + 12
				},
				week: {
					dow: 0,
					doy: 6
				}
			});
		return r
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("te", {
			months: "à°œà°¨à°µà°°à°¿_à°«à°¿à°¬à±à°°à°µà°°à°¿_à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿à°²à±_à°®à±‡_à°œà±‚à°¨à±_à°œà±‚à°²à±†à±–_à°†à°—à°¸à±à°Ÿà±_à°¸à±†à°ªà±à°Ÿà±†à°‚à°¬à°°à±_à°…à°•à±à°Ÿà±‹à°¬à°°à±_à°¨à°µà°‚à°¬à°°à±_à°¡à°¿à°¸à±†à°‚à°¬à°°à±".split("_"),
			monthsShort: "à°œà°¨._à°«à°¿à°¬à±à°°._à°®à°¾à°°à±à°šà°¿_à°à°ªà±à°°à°¿._à°®à±‡_à°œà±‚à°¨à±_à°œà±‚à°²à±†à±–_à°†à°—._à°¸à±†à°ªà±._à°…à°•à±à°Ÿà±‹._à°¨à°µ._à°¡à°¿à°¸à±†.".split("_"),
			monthsParseExact: !0,
			weekdays: "à°†à°¦à°¿à°µà°¾à°°à°‚_à°¸à±‹à°®à°µà°¾à°°à°‚_à°®à°‚à°—à°³à°µà°¾à°°à°‚_à°¬à±à°§à°µà°¾à°°à°‚_à°—à±à°°à±à°µà°¾à°°à°‚_à°¶à±à°•à±à°°à°µà°¾à°°à°‚_à°¶à°¨à°¿à°µà°¾à°°à°‚".split("_"),
			weekdaysShort: "à°†à°¦à°¿_à°¸à±‹à°®_à°®à°‚à°—à°³_à°¬à±à°§_à°—à±à°°à±_à°¶à±à°•à±à°°_à°¶à°¨à°¿".split("_"),
			weekdaysMin: "à°†_à°¸à±‹_à°®à°‚_à°¬à±_à°—à±_à°¶à±_à°¶".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm",
				LLLL: "dddd, D MMMM YYYY, A h:mm"
			},
			calendar: {
				sameDay: "[à°¨à±‡à°¡à±] LT",
				nextDay: "[à°°à±‡à°ªà±] LT",
				nextWeek: "dddd, LT",
				lastDay: "[à°¨à°¿à°¨à±à°¨] LT",
				lastWeek: "[à°—à°¤] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s à°²à±‹",
				past: "%s à°•à±à°°à°¿à°¤à°‚",
				s: "à°•à±Šà°¨à±à°¨à°¿ à°•à±à°·à°£à°¾à°²à±",
				m: "à°’à°• à°¨à°¿à°®à°¿à°·à°‚",
				mm: "%d à°¨à°¿à°®à°¿à°·à°¾à°²à±",
				h: "à°’à°• à°—à°‚à°Ÿ",
				hh: "%d à°—à°‚à°Ÿà°²à±",
				d: "à°’à°• à°°à±‹à°œà±",
				dd: "%d à°°à±‹à°œà±à°²à±",
				M: "à°’à°• à°¨à±†à°²",
				MM: "%d à°¨à±†à°²à°²à±",
				y: "à°’à°• à°¸à°‚à°µà°¤à±à°¸à°°à°‚",
				yy: "%d à°¸à°‚à°µà°¤à±à°¸à°°à°¾à°²à±"
			},
			ordinalParse: /\d{1,2}à°µ/,
			ordinal: "%dà°µ",
			meridiemParse: /à°°à°¾à°¤à±à°°à°¿|à°‰à°¦à°¯à°‚|à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚|à°¸à°¾à°¯à°‚à°¤à±à°°à°‚/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "à°°à°¾à°¤à±à°°à°¿" === t ? 4 > e ? e : e + 12 : "à°‰à°¦à°¯à°‚" === t ? e : "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" === t ? e >= 10 ? e : e + 12 : "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				return 4 > e ? "à°°à°¾à°¤à±à°°à°¿" : 10 > e ? "à°‰à°¦à°¯à°‚" : 17 > e ? "à°®à°§à±à°¯à°¾à°¹à±à°¨à°‚" : 20 > e ? "à°¸à°¾à°¯à°‚à°¤à±à°°à°‚" : "à°°à°¾à°¤à±à°°à°¿"
			},
			week: {
				dow: 0,
				doy: 6
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("th", {
			months: "à¸¡à¸à¸£à¸²à¸„à¸¡_à¸à¸¸à¸¡à¸ à¸²à¸žà¸±à¸™à¸˜à¹Œ_à¸¡à¸µà¸™à¸²à¸„à¸¡_à¹€à¸¡à¸©à¸²à¸¢à¸™_à¸žà¸¤à¸©à¸ à¸²à¸„à¸¡_à¸¡à¸´à¸–à¸¸à¸™à¸²à¸¢à¸™_à¸à¸£à¸à¸Žà¸²à¸„à¸¡_à¸ªà¸´à¸‡à¸«à¸²à¸„à¸¡_à¸à¸±à¸™à¸¢à¸²à¸¢à¸™_à¸•à¸¸à¸¥à¸²à¸„à¸¡_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²à¸¢à¸™_à¸˜à¸±à¸™à¸§à¸²à¸„à¸¡".split("_"),
			monthsShort: "à¸¡à¸à¸£à¸²_à¸à¸¸à¸¡à¸ à¸²_à¸¡à¸µà¸™à¸²_à¹€à¸¡à¸©à¸²_à¸žà¸¤à¸©à¸ à¸²_à¸¡à¸´à¸–à¸¸à¸™à¸²_à¸à¸£à¸à¸Žà¸²_à¸ªà¸´à¸‡à¸«à¸²_à¸à¸±à¸™à¸¢à¸²_à¸•à¸¸à¸¥à¸²_à¸žà¸¤à¸¨à¸ˆà¸´à¸à¸²_à¸˜à¸±à¸™à¸§à¸²".split("_"),
			monthsParseExact: !0,
			weekdays: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ªà¸šà¸”à¸µ_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
			weekdaysShort: "à¸­à¸²à¸—à¸´à¸•à¸¢à¹Œ_à¸ˆà¸±à¸™à¸—à¸£à¹Œ_à¸­à¸±à¸‡à¸„à¸²à¸£_à¸žà¸¸à¸˜_à¸žà¸¤à¸«à¸±à¸ª_à¸¨à¸¸à¸à¸£à¹Œ_à¹€à¸ªà¸²à¸£à¹Œ".split("_"),
			weekdaysMin: "à¸­à¸²._à¸ˆ._à¸­._à¸ž._à¸žà¸¤._à¸¨._à¸ª.".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ",
				LTS: "H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ s à¸§à¸´à¸™à¸²à¸—à¸µ",
				L: "YYYY/MM/DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY à¹€à¸§à¸¥à¸² H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ",
				LLLL: "à¸§à¸±à¸™ddddà¸—à¸µà¹ˆ D MMMM YYYY à¹€à¸§à¸¥à¸² H à¸™à¸²à¸¬à¸´à¸à¸² m à¸™à¸²à¸—à¸µ"
			},
			meridiemParse: /à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡|à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡/,
			isPM: function(e) {
				return "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡" === e
			},
			meridiem: function(e, t, n) {
				return 12 > e ? "à¸à¹ˆà¸­à¸™à¹€à¸—à¸µà¹ˆà¸¢à¸‡" : "à¸«à¸¥à¸±à¸‡à¹€à¸—à¸µà¹ˆà¸¢à¸‡"
			},
			calendar: {
				sameDay: "[à¸§à¸±à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
				nextDay: "[à¸žà¸£à¸¸à¹ˆà¸‡à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
				nextWeek: "dddd[à¸«à¸™à¹‰à¸² à¹€à¸§à¸¥à¸²] LT",
				lastDay: "[à¹€à¸¡à¸·à¹ˆà¸­à¸§à¸²à¸™à¸™à¸µà¹‰ à¹€à¸§à¸¥à¸²] LT",
				lastWeek: "[à¸§à¸±à¸™]dddd[à¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§ à¹€à¸§à¸¥à¸²] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "à¸­à¸µà¸ %s",
				past: "%sà¸—à¸µà¹ˆà¹à¸¥à¹‰à¸§",
				s: "à¹„à¸¡à¹ˆà¸à¸µà¹ˆà¸§à¸´à¸™à¸²à¸—à¸µ",
				m: "1 à¸™à¸²à¸—à¸µ",
				mm: "%d à¸™à¸²à¸—à¸µ",
				h: "1 à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
				hh: "%d à¸Šà¸±à¹ˆà¸§à¹‚à¸¡à¸‡",
				d: "1 à¸§à¸±à¸™",
				dd: "%d à¸§à¸±à¸™",
				M: "1 à¹€à¸”à¸·à¸­à¸™",
				MM: "%d à¹€à¸”à¸·à¸­à¸™",
				y: "1 à¸›à¸µ",
				yy: "%d à¸›à¸µ"
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("tl-ph", {
			months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
			monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
			weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
			weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
			weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "MM/D/YYYY",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY HH:mm",
				LLLL: "dddd, MMMM DD, YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Ngayon sa] LT",
				nextDay: "[Bukas sa] LT",
				nextWeek: "dddd [sa] LT",
				lastDay: "[Kahapon sa] LT",
				lastWeek: "dddd [huling linggo] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "sa loob ng %s",
				past: "%s ang nakalipas",
				s: "ilang segundo",
				m: "isang minuto",
				mm: "%d minuto",
				h: "isang oras",
				hh: "%d oras",
				d: "isang araw",
				dd: "%d araw",
				M: "isang buwan",
				MM: "%d buwan",
				y: "isang taon",
				yy: "%d taon"
			},
			ordinalParse: /\d{1,2}/,
			ordinal: function(e) {
				return e
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e) {
			var t = e;
			return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq"
		}

		function n(e) {
			var t = e;
			return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Huâ€™" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret"
		}

		function r(e, t, n, r) {
			var a = o(e);
			switch (n) {
				case "mm":
					return a + " tup";
				case "hh":
					return a + " rep";
				case "dd":
					return a + " jaj";
				case "MM":
					return a + " jar";
				case "yy":
					return a + " DIS"
			}
		}

		function o(e) {
			var t = Math.floor(e % 1e3 / 100),
				n = Math.floor(e % 100 / 10),
				r = e % 10,
				o = "";
			return t > 0 && (o += a[t] + "vatlh"), n > 0 && (o += ("" !== o ? " " : "") + a[n] + "maH"), r > 0 && (o += ("" !== o ? " " : "") + a[r]), "" === o ? "pagh" : o
		}
		var a = "pagh_waâ€™_chaâ€™_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_"),
			i = e.defineLocale("tlh", {
				months: "teraâ€™ jar waâ€™_teraâ€™ jar chaâ€™_teraâ€™ jar wej_teraâ€™ jar loS_teraâ€™ jar vagh_teraâ€™ jar jav_teraâ€™ jar Soch_teraâ€™ jar chorgh_teraâ€™ jar Hut_teraâ€™ jar waâ€™maH_teraâ€™ jar waâ€™maH waâ€™_teraâ€™ jar waâ€™maH chaâ€™".split("_"),
				monthsShort: "jar waâ€™_jar chaâ€™_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar waâ€™maH_jar waâ€™maH waâ€™_jar waâ€™maH chaâ€™".split("_"),
				monthsParseExact: !0,
				weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
				weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
				weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[DaHjaj] LT",
					nextDay: "[waâ€™leS] LT",
					nextWeek: "LLL",
					lastDay: "[waâ€™Huâ€™] LT",
					lastWeek: "LLL",
					sameElse: "L"
				},
				relativeTime: {
					future: t,
					past: n,
					s: "puS lup",
					m: "waâ€™ tup",
					mm: r,
					h: "waâ€™ rep",
					hh: r,
					d: "waâ€™ jaj",
					dd: r,
					M: "waâ€™ jar",
					MM: r,
					y: "waâ€™ DIS",
					yy: r
				},
				ordinalParse: /\d{1,2}\./,
				ordinal: "%d.",
				week: {
					dow: 1,
					doy: 4
				}
			});
		return i
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = {
				1: "'inci",
				5: "'inci",
				8: "'inci",
				70: "'inci",
				80: "'inci",
				2: "'nci",
				7: "'nci",
				20: "'nci",
				50: "'nci",
				3: "'Ã¼ncÃ¼",
				4: "'Ã¼ncÃ¼",
				100: "'Ã¼ncÃ¼",
				6: "'ncÄ±",
				9: "'uncu",
				10: "'uncu",
				30: "'uncu",
				60: "'Ä±ncÄ±",
				90: "'Ä±ncÄ±"
			},
			n = e.defineLocale("tr", {
				months: "Ocak_Åžubat_Mart_Nisan_MayÄ±s_Haziran_Temmuz_AÄŸustos_EylÃ¼l_Ekim_KasÄ±m_AralÄ±k".split("_"),
				monthsShort: "Oca_Åžub_Mar_Nis_May_Haz_Tem_AÄŸu_Eyl_Eki_Kas_Ara".split("_"),
				weekdays: "Pazar_Pazartesi_SalÄ±_Ã‡arÅŸamba_PerÅŸembe_Cuma_Cumartesi".split("_"),
				weekdaysShort: "Paz_Pts_Sal_Ã‡ar_Per_Cum_Cts".split("_"),
				weekdaysMin: "Pz_Pt_Sa_Ã‡a_Pe_Cu_Ct".split("_"),
				longDateFormat: {
					LT: "HH:mm",
					LTS: "HH:mm:ss",
					L: "DD.MM.YYYY",
					LL: "D MMMM YYYY",
					LLL: "D MMMM YYYY HH:mm",
					LLLL: "dddd, D MMMM YYYY HH:mm"
				},
				calendar: {
					sameDay: "[bugÃ¼n saat] LT",
					nextDay: "[yarÄ±n saat] LT",
					nextWeek: "[haftaya] dddd [saat] LT",
					lastDay: "[dÃ¼n] LT",
					lastWeek: "[geÃ§en hafta] dddd [saat] LT",
					sameElse: "L"
				},
				relativeTime: {
					future: "%s sonra",
					past: "%s Ã¶nce",
					s: "birkaÃ§ saniye",
					m: "bir dakika",
					mm: "%d dakika",
					h: "bir saat",
					hh: "%d saat",
					d: "bir gÃ¼n",
					dd: "%d gÃ¼n",
					M: "bir ay",
					MM: "%d ay",
					y: "bir yÄ±l",
					yy: "%d yÄ±l"
				},
				ordinalParse: /\d{1,2}'(inci|nci|Ã¼ncÃ¼|ncÄ±|uncu|Ä±ncÄ±)/,
				ordinal: function(e) {
					if (0 === e) return e + "'Ä±ncÄ±";
					var n = e % 10,
						r = e % 100 - n,
						o = e >= 100 ? 100 : null;
					return e + (t[n] || t[r] || t[o])
				},
				week: {
					dow: 1,
					doy: 7
				}
			});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t, n, r) {
			var o = {
				s: ["viensas secunds", "'iensas secunds"],
				m: ["'n mÃ­ut", "'iens mÃ­ut"],
				mm: [e + " mÃ­uts", "" + e + " mÃ­uts"],
				h: ["'n Ã¾ora", "'iensa Ã¾ora"],
				hh: [e + " Ã¾oras", "" + e + " Ã¾oras"],
				d: ["'n ziua", "'iensa ziua"],
				dd: [e + " ziuas", "" + e + " ziuas"],
				M: ["'n mes", "'iens mes"],
				MM: [e + " mesen", "" + e + " mesen"],
				y: ["'n ar", "'iens ar"],
				yy: [e + " ars", "" + e + " ars"]
			};
			return r ? o[n][0] : t ? o[n][0] : o[n][1]
		}
		var n = e.defineLocale("tzl", {
			months: "Januar_Fevraglh_MarÃ§_AvrÃ¯u_Mai_GÃ¼n_Julia_Guscht_Setemvar_ListopÃ¤ts_Noemvar_Zecemvar".split("_"),
			monthsShort: "Jan_Fev_Mar_Avr_Mai_GÃ¼n_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
			weekdays: "SÃºladi_LÃºneÃ§i_Maitzi_MÃ¡rcuri_XhÃºadi_ViÃ©nerÃ§i_SÃ¡turi".split("_"),
			weekdaysShort: "SÃºl_LÃºn_Mai_MÃ¡r_XhÃº_ViÃ©_SÃ¡t".split("_"),
			weekdaysMin: "SÃº_LÃº_Ma_MÃ¡_Xh_Vi_SÃ¡".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM [dallas] YYYY",
				LLL: "D. MMMM [dallas] YYYY HH.mm",
				LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
			},
			meridiemParse: /d\'o|d\'a/i,
			isPM: function(e) {
				return "d'o" === e.toLowerCase()
			},
			meridiem: function(e, t, n) {
				return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
			},
			calendar: {
				sameDay: "[oxhi Ã ] LT",
				nextDay: "[demÃ  Ã ] LT",
				nextWeek: "dddd [Ã ] LT",
				lastDay: "[ieiri Ã ] LT",
				lastWeek: "[sÃ¼r el] dddd [lasteu Ã ] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "osprei %s",
				past: "ja%s",
				s: t,
				m: t,
				mm: t,
				h: t,
				hh: t,
				d: t,
				dd: t,
				M: t,
				MM: t,
				y: t,
				yy: t
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		});
		return n
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("tzm", {
			months: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
			monthsShort: "âµ‰âµâµâ´°âµ¢âµ”_â´±âµ•â´°âµ¢âµ•_âµŽâ´°âµ•âµš_âµ‰â´±âµ”âµ‰âµ”_âµŽâ´°âµ¢âµ¢âµ“_âµ¢âµ“âµâµ¢âµ“_âµ¢âµ“âµâµ¢âµ“âµ£_âµ–âµ“âµ›âµœ_âµ›âµ“âµœâ´°âµâ´±âµ‰âµ”_â´½âµŸâµ“â´±âµ•_âµâµ“âµ¡â´°âµâ´±âµ‰âµ”_â´·âµ“âµŠâµâ´±âµ‰âµ”".split("_"),
			weekdays: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
			weekdaysShort: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
			weekdaysMin: "â´°âµ™â´°âµŽâ´°âµ™_â´°âµ¢âµâ´°âµ™_â´°âµ™âµ‰âµâ´°âµ™_â´°â´½âµ”â´°âµ™_â´°â´½âµ¡â´°âµ™_â´°âµ™âµ‰âµŽâµ¡â´°âµ™_â´°âµ™âµ‰â´¹âµ¢â´°âµ™".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[â´°âµ™â´·âµ… â´´] LT",
				nextDay: "[â´°âµ™â´½â´° â´´] LT",
				nextWeek: "dddd [â´´] LT",
				lastDay: "[â´°âµšâ´°âµâµœ â´´] LT",
				lastWeek: "dddd [â´´] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "â´·â´°â´·âµ… âµ™ âµ¢â´°âµ %s",
				past: "âµ¢â´°âµ %s",
				s: "âµ‰âµŽâµ‰â´½",
				m: "âµŽâµ‰âµâµ“â´º",
				mm: "%d âµŽâµ‰âµâµ“â´º",
				h: "âµ™â´°âµ„â´°",
				hh: "%d âµœâ´°âµ™âµ™â´°âµ„âµ‰âµ",
				d: "â´°âµ™âµ™",
				dd: "%d oâµ™âµ™â´°âµ",
				M: "â´°âµ¢oâµ“âµ”",
				MM: "%d âµ‰âµ¢âµ¢âµ‰âµ”âµ",
				y: "â´°âµ™â´³â´°âµ™",
				yy: "%d âµ‰âµ™â´³â´°âµ™âµ"
			},
			week: {
				dow: 6,
				doy: 12
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("tzm-latn", {
			months: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
			monthsShort: "innayr_brË¤ayrË¤_marË¤sË¤_ibrir_mayyw_ywnyw_ywlywz_É£wÅ¡t_Å¡wtanbir_ktË¤wbrË¤_nwwanbir_dwjnbir".split("_"),
			weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
			weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
			weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiá¸yas".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[asdkh g] LT",
				nextDay: "[aska g] LT",
				nextWeek: "dddd [g] LT",
				lastDay: "[assant g] LT",
				lastWeek: "dddd [g] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dadkh s yan %s",
				past: "yan %s",
				s: "imik",
				m: "minuá¸",
				mm: "%d minuá¸",
				h: "saÉ›a",
				hh: "%d tassaÉ›in",
				d: "ass",
				dd: "%d ossan",
				M: "ayowr",
				MM: "%d iyyirn",
				y: "asgas",
				yy: "%d isgasn"
			},
			week: {
				dow: 6,
				doy: 12
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";

		function t(e, t) {
			var n = e.split("_");
			return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && 4 >= t % 10 && (10 > t % 100 || t % 100 >= 20) ? n[1] : n[2]
		}

		function n(e, n, r) {
			var o = {
				mm: n ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ_Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð¸_Ñ…Ð²Ð¸Ð»Ð¸Ð½",
				hh: n ? "Ð³Ð¾Ð´Ð¸Ð½Ð°_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ_Ð³Ð¾Ð´Ð¸Ð½Ð¸_Ð³Ð¾Ð´Ð¸Ð½",
				dd: "Ð´ÐµÐ½ÑŒ_Ð´Ð½Ñ–_Ð´Ð½Ñ–Ð²",
				MM: "Ð¼Ñ–ÑÑÑ†ÑŒ_Ð¼Ñ–ÑÑÑ†Ñ–_Ð¼Ñ–ÑÑÑ†Ñ–Ð²",
				yy: "Ñ€Ñ–Ðº_Ñ€Ð¾ÐºÐ¸_Ñ€Ð¾ÐºÑ–Ð²"
			};
			return "m" === r ? n ? "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ð°" : "Ñ…Ð²Ð¸Ð»Ð¸Ð½Ñƒ" : "h" === r ? n ? "Ð³Ð¾Ð´Ð¸Ð½Ð°" : "Ð³Ð¾Ð´Ð¸Ð½Ñƒ" : e + " " + t(o[r], +e)
		}

		function r(e, t) {
			var n = {
					nominative: "Ð½ÐµÐ´Ñ–Ð»Ñ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ð°_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ_ÑÑƒÐ±Ð¾Ñ‚Ð°".split("_"),
					accusative: "Ð½ÐµÐ´Ñ–Ð»ÑŽ_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»Ð¾Ðº_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€Ð¾Ðº_ÑÐµÑ€ÐµÐ´Ñƒ_Ñ‡ÐµÑ‚Ð²ÐµÑ€_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†ÑŽ_ÑÑƒÐ±Ð¾Ñ‚Ñƒ".split("_"),
					genitive: "Ð½ÐµÐ´Ñ–Ð»Ñ–_Ð¿Ð¾Ð½ÐµÐ´Ñ–Ð»ÐºÐ°_Ð²Ñ–Ð²Ñ‚Ð¾Ñ€ÐºÐ°_ÑÐµÑ€ÐµÐ´Ð¸_Ñ‡ÐµÑ‚Ð²ÐµÑ€Ð³Ð°_Ð¿â€™ÑÑ‚Ð½Ð¸Ñ†Ñ–_ÑÑƒÐ±Ð¾Ñ‚Ð¸".split("_")
				},
				r = /(\[[Ð’Ð²Ð£Ñƒ]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:Ð¼Ð¸Ð½ÑƒÐ»Ð¾Ñ—|Ð½Ð°ÑÑ‚ÑƒÐ¿Ð½Ð¾Ñ—)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
			return n[r][e.day()]
		}

		function o(e) {
			return function() {
				return e + "Ð¾" + (11 === this.hours() ? "Ð±" : "") + "] LT"
			}
		}
		var a = e.defineLocale("uk", {
			months: {
				format: "ÑÑ–Ñ‡Ð½Ñ_Ð»ÑŽÑ‚Ð¾Ð³Ð¾_Ð±ÐµÑ€ÐµÐ·Ð½Ñ_ÐºÐ²Ñ–Ñ‚Ð½Ñ_Ñ‚Ñ€Ð°Ð²Ð½Ñ_Ñ‡ÐµÑ€Ð²Ð½Ñ_Ð»Ð¸Ð¿Ð½Ñ_ÑÐµÑ€Ð¿Ð½Ñ_Ð²ÐµÑ€ÐµÑÐ½Ñ_Ð¶Ð¾Ð²Ñ‚Ð½Ñ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´Ð°_Ð³Ñ€ÑƒÐ´Ð½Ñ".split("_"),
				standalone: "ÑÑ–Ñ‡ÐµÐ½ÑŒ_Ð»ÑŽÑ‚Ð¸Ð¹_Ð±ÐµÑ€ÐµÐ·ÐµÐ½ÑŒ_ÐºÐ²Ñ–Ñ‚ÐµÐ½ÑŒ_Ñ‚Ñ€Ð°Ð²ÐµÐ½ÑŒ_Ñ‡ÐµÑ€Ð²ÐµÐ½ÑŒ_Ð»Ð¸Ð¿ÐµÐ½ÑŒ_ÑÐµÑ€Ð¿ÐµÐ½ÑŒ_Ð²ÐµÑ€ÐµÑÐµÐ½ÑŒ_Ð¶Ð¾Ð²Ñ‚ÐµÐ½ÑŒ_Ð»Ð¸ÑÑ‚Ð¾Ð¿Ð°Ð´_Ð³Ñ€ÑƒÐ´ÐµÐ½ÑŒ".split("_")
			},
			monthsShort: "ÑÑ–Ñ‡_Ð»ÑŽÑ‚_Ð±ÐµÑ€_ÐºÐ²Ñ–Ñ‚_Ñ‚Ñ€Ð°Ð²_Ñ‡ÐµÑ€Ð²_Ð»Ð¸Ð¿_ÑÐµÑ€Ð¿_Ð²ÐµÑ€_Ð¶Ð¾Ð²Ñ‚_Ð»Ð¸ÑÑ‚_Ð³Ñ€ÑƒÐ´".split("_"),
			weekdays: r,
			weekdaysShort: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
			weekdaysMin: "Ð½Ð´_Ð¿Ð½_Ð²Ñ‚_ÑÑ€_Ñ‡Ñ‚_Ð¿Ñ‚_ÑÐ±".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY Ñ€.",
				LLL: "D MMMM YYYY Ñ€., HH:mm",
				LLLL: "dddd, D MMMM YYYY Ñ€., HH:mm"
			},
			calendar: {
				sameDay: o("[Ð¡ÑŒÐ¾Ð³Ð¾Ð´Ð½Ñ– "),
				nextDay: o("[Ð—Ð°Ð²Ñ‚Ñ€Ð° "),
				lastDay: o("[Ð’Ñ‡Ð¾Ñ€Ð° "),
				nextWeek: o("[Ð£] dddd ["),
				lastWeek: function() {
					switch (this.day()) {
						case 0:
						case 3:
						case 5:
						case 6:
							return o("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ñ—] dddd [").call(this);
						case 1:
						case 2:
						case 4:
							return o("[ÐœÐ¸Ð½ÑƒÐ»Ð¾Ð³Ð¾] dddd [").call(this)
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "Ð·Ð° %s",
				past: "%s Ñ‚Ð¾Ð¼Ñƒ",
				s: "Ð´ÐµÐºÑ–Ð»ÑŒÐºÐ° ÑÐµÐºÑƒÐ½Ð´",
				m: n,
				mm: n,
				h: "Ð³Ð¾Ð´Ð¸Ð½Ñƒ",
				hh: n,
				d: "Ð´ÐµÐ½ÑŒ",
				dd: n,
				M: "Ð¼Ñ–ÑÑÑ†ÑŒ",
				MM: n,
				y: "Ñ€Ñ–Ðº",
				yy: n
			},
			meridiemParse: /Ð½Ð¾Ñ‡Ñ–|Ñ€Ð°Ð½ÐºÑƒ|Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°/,
			isPM: function(e) {
				return /^(Ð´Ð½Ñ|Ð²ÐµÑ‡Ð¾Ñ€Ð°)$/.test(e)
			},
			meridiem: function(e, t, n) {
				return 4 > e ? "Ð½Ð¾Ñ‡Ñ–" : 12 > e ? "Ñ€Ð°Ð½ÐºÑƒ" : 17 > e ? "Ð´Ð½Ñ" : "Ð²ÐµÑ‡Ð¾Ñ€Ð°"
			},
			ordinalParse: /\d{1,2}-(Ð¹|Ð³Ð¾)/,
			ordinal: function(e, t) {
				switch (t) {
					case "M":
					case "d":
					case "DDD":
					case "w":
					case "W":
						return e + "-Ð¹";
					case "D":
						return e + "-Ð³Ð¾";
					default:
						return e
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return a
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("uz", {
			months: "ÑÐ½Ð²Ð°Ñ€_Ñ„ÐµÐ²Ñ€Ð°Ð»_Ð¼Ð°Ñ€Ñ‚_Ð°Ð¿Ñ€ÐµÐ»_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³ÑƒÑÑ‚_ÑÐµÐ½Ñ‚ÑÐ±Ñ€_Ð¾ÐºÑ‚ÑÐ±Ñ€_Ð½Ð¾ÑÐ±Ñ€_Ð´ÐµÐºÐ°Ð±Ñ€".split("_"),
			monthsShort: "ÑÐ½Ð²_Ñ„ÐµÐ²_Ð¼Ð°Ñ€_Ð°Ð¿Ñ€_Ð¼Ð°Ð¹_Ð¸ÑŽÐ½_Ð¸ÑŽÐ»_Ð°Ð²Ð³_ÑÐµÐ½_Ð¾ÐºÑ‚_Ð½Ð¾Ñ_Ð´ÐµÐº".split("_"),
			weekdays: "Ð¯ÐºÑˆÐ°Ð½Ð±Ð°_Ð”ÑƒÑˆÐ°Ð½Ð±Ð°_Ð¡ÐµÑˆÐ°Ð½Ð±Ð°_Ð§Ð¾Ñ€ÑˆÐ°Ð½Ð±Ð°_ÐŸÐ°Ð¹ÑˆÐ°Ð½Ð±Ð°_Ð–ÑƒÐ¼Ð°_Ð¨Ð°Ð½Ð±Ð°".split("_"),
			weekdaysShort: "Ð¯ÐºÑˆ_Ð”ÑƒÑˆ_Ð¡ÐµÑˆ_Ð§Ð¾Ñ€_ÐŸÐ°Ð¹_Ð–ÑƒÐ¼_Ð¨Ð°Ð½".split("_"),
			weekdaysMin: "Ð¯Ðº_Ð”Ñƒ_Ð¡Ðµ_Ð§Ð¾_ÐŸÐ°_Ð–Ñƒ_Ð¨Ð°".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "D MMMM YYYY, dddd HH:mm"
			},
			calendar: {
				sameDay: "[Ð‘ÑƒÐ³ÑƒÐ½ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
				nextDay: "[Ð­Ñ€Ñ‚Ð°Ð³Ð°] LT [Ð´Ð°]",
				nextWeek: "dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
				lastDay: "[ÐšÐµÑ‡Ð° ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
				lastWeek: "[Ð£Ñ‚Ð³Ð°Ð½] dddd [ÐºÑƒÐ½Ð¸ ÑÐ¾Ð°Ñ‚] LT [Ð´Ð°]",
				sameElse: "L"
			},
			relativeTime: {
				future: "Ð¯ÐºÐ¸Ð½ %s Ð¸Ñ‡Ð¸Ð´Ð°",
				past: "Ð‘Ð¸Ñ€ Ð½ÐµÑ‡Ð° %s Ð¾Ð»Ð´Ð¸Ð½",
				s: "Ñ„ÑƒÑ€ÑÐ°Ñ‚",
				m: "Ð±Ð¸Ñ€ Ð´Ð°ÐºÐ¸ÐºÐ°",
				mm: "%d Ð´Ð°ÐºÐ¸ÐºÐ°",
				h: "Ð±Ð¸Ñ€ ÑÐ¾Ð°Ñ‚",
				hh: "%d ÑÐ¾Ð°Ñ‚",
				d: "Ð±Ð¸Ñ€ ÐºÑƒÐ½",
				dd: "%d ÐºÑƒÐ½",
				M: "Ð±Ð¸Ñ€ Ð¾Ð¹",
				MM: "%d Ð¾Ð¹",
				y: "Ð±Ð¸Ñ€ Ð¹Ð¸Ð»",
				yy: "%d Ð¹Ð¸Ð»"
			},
			week: {
				dow: 1,
				doy: 7
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("vi", {
			months: "thÃ¡ng 1_thÃ¡ng 2_thÃ¡ng 3_thÃ¡ng 4_thÃ¡ng 5_thÃ¡ng 6_thÃ¡ng 7_thÃ¡ng 8_thÃ¡ng 9_thÃ¡ng 10_thÃ¡ng 11_thÃ¡ng 12".split("_"),
			monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
			monthsParseExact: !0,
			weekdays: "chá»§ nháº­t_thá»© hai_thá»© ba_thá»© tÆ°_thá»© nÄƒm_thá»© sÃ¡u_thá»© báº£y".split("_"),
			weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysParseExact: !0,
			meridiemParse: /sa|ch/i,
			isPM: function(e) {
				return /^ch$/i.test(e)
			},
			meridiem: function(e, t, n) {
				return 12 > e ? n ? "sa" : "SA" : n ? "ch" : "CH"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM [nÄƒm] YYYY",
				LLL: "D MMMM [nÄƒm] YYYY HH:mm",
				LLLL: "dddd, D MMMM [nÄƒm] YYYY HH:mm",
				l: "DD/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[HÃ´m nay lÃºc] LT",
				nextDay: "[NgÃ y mai lÃºc] LT",
				nextWeek: "dddd [tuáº§n tá»›i lÃºc] LT",
				lastDay: "[HÃ´m qua lÃºc] LT",
				lastWeek: "dddd [tuáº§n rá»“i lÃºc] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s tá»›i",
				past: "%s trÆ°á»›c",
				s: "vÃ i giÃ¢y",
				m: "má»™t phÃºt",
				mm: "%d phÃºt",
				h: "má»™t giá»",
				hh: "%d giá»",
				d: "má»™t ngÃ y",
				dd: "%d ngÃ y",
				M: "má»™t thÃ¡ng",
				MM: "%d thÃ¡ng",
				y: "má»™t nÄƒm",
				yy: "%d nÄƒm"
			},
			ordinalParse: /\d{1,2}/,
			ordinal: function(e) {
				return e
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("x-pseudo", {
			months: "J~Ã¡Ã±ÃºÃ¡~rÃ½_F~Ã©brÃº~Ã¡rÃ½_~MÃ¡rc~h_Ãp~rÃ­l_~MÃ¡Ã½_~JÃºÃ±Ã©~_JÃºl~Ã½_ÃÃº~gÃºst~_SÃ©p~tÃ©mb~Ã©r_Ã“~ctÃ³b~Ã©r_Ã‘~Ã³vÃ©m~bÃ©r_~DÃ©cÃ©~mbÃ©r".split("_"),
			monthsShort: "J~Ã¡Ã±_~FÃ©b_~MÃ¡r_~Ãpr_~MÃ¡Ã½_~JÃºÃ±_~JÃºl_~ÃÃºg_~SÃ©p_~Ã“ct_~Ã‘Ã³v_~DÃ©c".split("_"),
			monthsParseExact: !0,
			weekdays: "S~ÃºÃ±dÃ¡~Ã½_MÃ³~Ã±dÃ¡Ã½~_TÃºÃ©~sdÃ¡Ã½~_WÃ©d~Ã±Ã©sd~Ã¡Ã½_T~hÃºrs~dÃ¡Ã½_~FrÃ­d~Ã¡Ã½_S~Ã¡tÃºr~dÃ¡Ã½".split("_"),
			weekdaysShort: "S~ÃºÃ±_~MÃ³Ã±_~TÃºÃ©_~WÃ©d_~ThÃº_~FrÃ­_~SÃ¡t".split("_"),
			weekdaysMin: "S~Ãº_MÃ³~_TÃº_~WÃ©_T~h_Fr~_SÃ¡".split("_"),
			weekdaysParseExact: !0,
			longDateFormat: {
				LT: "HH:mm",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[T~Ã³dÃ¡~Ã½ Ã¡t] LT",
				nextDay: "[T~Ã³mÃ³~rrÃ³~w Ã¡t] LT",
				nextWeek: "dddd [Ã¡t] LT",
				lastDay: "[Ã~Ã©st~Ã©rdÃ¡~Ã½ Ã¡t] LT",
				lastWeek: "[L~Ã¡st] dddd [Ã¡t] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "Ã­~Ã± %s",
				past: "%s Ã¡~gÃ³",
				s: "Ã¡ ~fÃ©w ~sÃ©cÃ³~Ã±ds",
				m: "Ã¡ ~mÃ­Ã±~ÃºtÃ©",
				mm: "%d m~Ã­Ã±Ãº~tÃ©s",
				h: "Ã¡~Ã± hÃ³~Ãºr",
				hh: "%d h~Ã³Ãºrs",
				d: "Ã¡ ~dÃ¡Ã½",
				dd: "%d d~Ã¡Ã½s",
				M: "Ã¡ ~mÃ³Ã±~th",
				MM: "%d m~Ã³Ã±t~hs",
				y: "Ã¡ ~Ã½Ã©Ã¡r",
				yy: "%d Ã½~Ã©Ã¡rs"
			},
			ordinalParse: /\d{1,2}(th|st|nd|rd)/,
			ordinal: function(e) {
				var t = e % 10,
					n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
				return e + n
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("zh-cn", {
			months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
			monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
			weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
			weekdaysShort: "å‘¨æ—¥_å‘¨ä¸€_å‘¨äºŒ_å‘¨ä¸‰_å‘¨å››_å‘¨äº”_å‘¨å…­".split("_"),
			weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
			longDateFormat: {
				LT: "Ahç‚¹mmåˆ†",
				LTS: "Ahç‚¹måˆ†sç§’",
				L: "YYYY-MM-DD",
				LL: "YYYYå¹´MMMDæ—¥",
				LLL: "YYYYå¹´MMMDæ—¥Ahç‚¹mmåˆ†",
				LLLL: "YYYYå¹´MMMDæ—¥ddddAhç‚¹mmåˆ†",
				l: "YYYY-MM-DD",
				ll: "YYYYå¹´MMMDæ—¥",
				lll: "YYYYå¹´MMMDæ—¥Ahç‚¹mmåˆ†",
				llll: "YYYYå¹´MMMDæ—¥ddddAhç‚¹mmåˆ†"
			},
			meridiemParse: /å‡Œæ™¨|æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "å‡Œæ™¨" === t || "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : e >= 11 ? e : e + 12
			},
			meridiem: function(e, t, n) {
				var r = 100 * e + t;
				return 600 > r ? "å‡Œæ™¨" : 900 > r ? "æ—©ä¸Š" : 1130 > r ? "ä¸Šåˆ" : 1230 > r ? "ä¸­åˆ" : 1800 > r ? "ä¸‹åˆ" : "æ™šä¸Š"
			},
			calendar: {
				sameDay: function() {
					return 0 === this.minutes() ? "[ä»Šå¤©]Ah[ç‚¹æ•´]" : "[ä»Šå¤©]LT"
				},
				nextDay: function() {
					return 0 === this.minutes() ? "[æ˜Žå¤©]Ah[ç‚¹æ•´]" : "[æ˜Žå¤©]LT"
				},
				lastDay: function() {
					return 0 === this.minutes() ? "[æ˜¨å¤©]Ah[ç‚¹æ•´]" : "[æ˜¨å¤©]LT"
				},
				nextWeek: function() {
					var t, n;
					return t = e().startOf("week"), n = this.diff(t, "days") >= 7 ? "[ä¸‹]" : "[æœ¬]", 0 === this.minutes() ? n + "dddAhç‚¹æ•´" : n + "dddAhç‚¹mm"
				},
				lastWeek: function() {
					var t, n;
					return t = e().startOf("week"), n = this.unix() < t.unix() ? "[ä¸Š]" : "[æœ¬]", 0 === this.minutes() ? n + "dddAhç‚¹æ•´" : n + "dddAhç‚¹mm"
				},
				sameElse: "LL"
			},
			ordinalParse: /\d{1,2}(æ—¥|æœˆ|å‘¨)/,
			ordinal: function(e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "æ—¥";
					case "M":
						return e + "æœˆ";
					case "w":
					case "W":
						return e + "å‘¨";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%så†…",
				past: "%så‰",
				s: "å‡ ç§’",
				m: "1 åˆ†é’Ÿ",
				mm: "%d åˆ†é’Ÿ",
				h: "1 å°æ—¶",
				hh: "%d å°æ—¶",
				d: "1 å¤©",
				dd: "%d å¤©",
				M: "1 ä¸ªæœˆ",
				MM: "%d ä¸ªæœˆ",
				y: "1 å¹´",
				yy: "%d å¹´"
			},
			week: {
				dow: 1,
				doy: 4
			}
		});
		return t
	})
}, function(e, exports, t) {
	! function(e, n) {
		n(t(172))
	}(this, function(e) {
		"use strict";
		var t = e.defineLocale("zh-tw", {
			months: "ä¸€æœˆ_äºŒæœˆ_ä¸‰æœˆ_å››æœˆ_äº”æœˆ_å…­æœˆ_ä¸ƒæœˆ_å…«æœˆ_ä¹æœˆ_åæœˆ_åä¸€æœˆ_åäºŒæœˆ".split("_"),
			monthsShort: "1æœˆ_2æœˆ_3æœˆ_4æœˆ_5æœˆ_6æœˆ_7æœˆ_8æœˆ_9æœˆ_10æœˆ_11æœˆ_12æœˆ".split("_"),
			weekdays: "æ˜ŸæœŸæ—¥_æ˜ŸæœŸä¸€_æ˜ŸæœŸäºŒ_æ˜ŸæœŸä¸‰_æ˜ŸæœŸå››_æ˜ŸæœŸäº”_æ˜ŸæœŸå…­".split("_"),
			weekdaysShort: "é€±æ—¥_é€±ä¸€_é€±äºŒ_é€±ä¸‰_é€±å››_é€±äº”_é€±å…­".split("_"),
			weekdaysMin: "æ—¥_ä¸€_äºŒ_ä¸‰_å››_äº”_å…­".split("_"),
			longDateFormat: {
				LT: "Ahé»žmmåˆ†",
				LTS: "Ahé»žmåˆ†sç§’",
				L: "YYYYå¹´MMMDæ—¥",
				LL: "YYYYå¹´MMMDæ—¥",
				LLL: "YYYYå¹´MMMDæ—¥Ahé»žmmåˆ†",
				LLLL: "YYYYå¹´MMMDæ—¥ddddAhé»žmmåˆ†",
				l: "YYYYå¹´MMMDæ—¥",
				ll: "YYYYå¹´MMMDæ—¥",
				lll: "YYYYå¹´MMMDæ—¥Ahé»žmmåˆ†",
				llll: "YYYYå¹´MMMDæ—¥ddddAhé»žmmåˆ†"
			},
			meridiemParse: /æ—©ä¸Š|ä¸Šåˆ|ä¸­åˆ|ä¸‹åˆ|æ™šä¸Š/,
			meridiemHour: function(e, t) {
				return 12 === e && (e = 0), "æ—©ä¸Š" === t || "ä¸Šåˆ" === t ? e : "ä¸­åˆ" === t ? e >= 11 ? e : e + 12 : "ä¸‹åˆ" === t || "æ™šä¸Š" === t ? e + 12 : void 0
			},
			meridiem: function(e, t, n) {
				var r = 100 * e + t;
				return 900 > r ? "æ—©ä¸Š" : 1130 > r ? "ä¸Šåˆ" : 1230 > r ? "ä¸­åˆ" : 1800 > r ? "ä¸‹åˆ" : "æ™šä¸Š"
			},
			calendar: {
				sameDay: "[ä»Šå¤©]LT",
				nextDay: "[æ˜Žå¤©]LT",
				nextWeek: "[ä¸‹]ddddLT",
				lastDay: "[æ˜¨å¤©]LT",
				lastWeek: "[ä¸Š]ddddLT",
				sameElse: "L"
			},
			ordinalParse: /\d{1,2}(æ—¥|æœˆ|é€±)/,
			ordinal: function(e, t) {
				switch (t) {
					case "d":
					case "D":
					case "DDD":
						return e + "æ—¥";
					case "M":
						return e + "æœˆ";
					case "w":
					case "W":
						return e + "é€±";
					default:
						return e
				}
			},
			relativeTime: {
				future: "%så…§",
				past: "%så‰",
				s: "å¹¾ç§’",
				m: "1åˆ†é˜",
				mm: "%dåˆ†é˜",
				h: "1å°æ™‚",
				hh: "%då°æ™‚",
				d: "1å¤©",
				dd: "%då¤©",
				M: "1å€‹æœˆ",
				MM: "%då€‹æœˆ",
				y: "1å¹´",
				yy: "%då¹´"
			}
		});
		return t
	})
}]);

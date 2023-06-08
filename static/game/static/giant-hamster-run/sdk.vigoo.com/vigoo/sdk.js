var vigoo;
(function (vigoo) {
	var _Login_callback = null;
	var _Login_offline_callback = null;
	var _ShowVideoAdv_callback = null;
	var _ShowTitleAdv_callback = null;
	var _ShowExcitationVideoAdv_callback = null;
	var _ShowScreenVideo_callback = null;
	var _Register = false;
	var _GameAd = { adBreak: null, adConfig: null };
	function Register() {
		if (_Register) {
			return;
		}
		var onmessage = function (e) {
			var ret = e.data;
			if (!ret) {
				return;
			}
			console.log('sdk: sdk get msg: ', ret);
			var cmd = ret.cmd;
			if (cmd === 'Login_out') {
				if (_Login_callback) {
					_Login_callback(ret.data);
				}
				if (ret.advConfig) {
					initInternalAdv(ret.advConfig);
				}
			} else if (cmd === 'Login_offline_out') {
				if (_Login_offline_callback) {
					_Login_offline_callback(ret.data);
				}
				if (ret.advConfig) {
					initInternalAdv(ret.advConfig);
				}
			} else if (cmd === 'ShowVideoAdv_out') {
				if (_ShowVideoAdv_callback) {
					_ShowVideoAdv_callback(ret.data);
				}
			} else if (cmd === 'ShowTitleAdv_out') {
				if (_ShowTitleAdv_callback) {
					_ShowTitleAdv_callback(ret.data);
				}
			} else if (cmd === 'ShowExcitationVideoAdv_out') {
				if (_ShowExcitationVideoAdv_callback) {
					_ShowExcitationVideoAdv_callback(ret.data);
				}
			} else if (cmd === 'ShowScreenVideo_out') {
				if (_ShowScreenVideo_callback) {
					_ShowScreenVideo_callback(ret.data);
				}
			} else if (cmd === 'ShowExcitationVideoInternalAdv_out') {
				var adType = ret.data && ret.data.adType;
				var adData = ret.data && ret.data.adData;
				if (adType === 'GameAd') {
					GameAdReword(adData);
				}
			} else if (cmd === 'ShowScreenVideoInternal_out') {
				var adType = ret.data && ret.data.adType;
				var adData = ret.data && ret.data.adData;
				if (adType === 'GameAd') {
					GameAdNext(adData);
				}
			} else if (cmd === 'CallMethod_out') {
				var methodName = ret.data && ret.data.methodName;
				var methodData = ret.data && ret.data.methodData;
				switch (methodName) {
					case 'GameAdadConfig':
						GameAdadConfig && GameAdadConfig(methodData);
						break;
					default:
						break;
				}
			}
		};
		if (typeof window.addEventListener != 'undefined') {
			window.addEventListener('message', onmessage, false);
		} else if (typeof window['attachEvent'] != 'undefined') {
			window['attachEvent']('message', onmessage);
		}
		_Register = true;
	}
	vigoo.Register = Register;
	function Login(callback) {
		Register();
		_Login_callback = callback;
		var param = { cmd: 'Login' };
		window.parent.postMessage(param, '*');
	}
	vigoo.Login = Login;
	function LoginOffline(callback) {
		Register();
		_Login_offline_callback = callback;
		var param = { cmd: 'Login_offline' };
		window.parent.postMessage(param, '*');
	}
	vigoo.LoginOffline = LoginOffline;
	function HideLoading() {
		var param = { cmd: 'HideLoading' };
		window.parent.postMessage(param, '*');
	}
	vigoo.HideLoading = HideLoading;
	function Share() {
		var param = { cmd: 'Share' };
		window.parent.postMessage(param, '*');
	}
	vigoo.Share = Share;
	function ShowVideoAdv(callback) {
		_ShowVideoAdv_callback = callback;
		var param = { cmd: 'ShowVideoAdv' };
		window.parent.postMessage(param, '*');
	}
	vigoo.ShowVideoAdv = ShowVideoAdv;
	function ShowBannerAdv(bannerAdvSize) {
		var param = { cmd: 'ShowBannerAdv', bannerAdvSize: bannerAdvSize };
		window.parent.postMessage(param, '*');
	}
	vigoo.ShowBannerAdv = ShowBannerAdv;
	function HideBannerAdv() {
		var param = { cmd: 'HideBannerAdv' };
		window.parent.postMessage(param, '*');
	}
	vigoo.HideBannerAdv = HideBannerAdv;
	function ShowTitleAdv(callback) {
		_ShowTitleAdv_callback = callback;
		var param = { cmd: 'ShowTitleAdv' };
		window.parent.postMessage(param, '*');
	}
	vigoo.ShowTitleAdv = ShowTitleAdv;
	function ShowExcitationVideoAdv(callback) {
		_ShowExcitationVideoAdv_callback = callback;
		var param = { cmd: 'ShowExcitationVideoAdv' };
		window.parent.postMessage(param, '*');
	}
	vigoo.ShowExcitationVideoAdv = ShowExcitationVideoAdv;
	function ShowScreenVideo(nodeName, callback) {
		_ShowScreenVideo_callback = callback;
		var param = { cmd: 'ShowScreenVideo', nodeName: nodeName };
		window.parent.postMessage(param, '*');
	}
	vigoo.ShowScreenVideo = ShowScreenVideo;
	function initInternalAdv(data) {
		if (data === void 0) {
			data = {};
		}
		if (typeof data != 'object') return;
		var pubId = data.pubId,
			GameAdConfig = data.GameAdConfig;
		var frequency = GameAdConfig.frequency,
			adChannel = GameAdConfig.adChannel;
		var script = document.createElement('script');
		script.async = true;
		script.setAttribute('data-ad-client', 'ca-pub-' + pubId);
		if (GameAdConfig) {
			script.setAttribute('data-ad-frequency-hint', frequency);
			script.setAttribute('data-ad-channel', adChannel);
		}
		script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
		document.head.appendChild(script);
		window.adsbygoogle = window.adsbygoogle || [];
		if (GameAdConfig) {
			initGameAd();
		}
	}
	function initGameAd() {
		_GameAd.adBreak = _GameAd.adConfig = function (o) {
			window.adsbygoogle.push(o);
		};
		_GameAd.adConfig({ preloadAdBreaks: 'on' });
		console.log('sdk initGameAd _GameAd', _GameAd);
	}
	function GameAdNext(data) {
		if (data === void 0) {
			data = {};
		}
		if (!_GameAd.adBreak) {
			console.log('adBreak not found');
			return;
		}
		var beforeAd = function () {
			console.log('call  beforeAd <next>');
			var param = { cmd: 'GameAdCallback', data: { adStyle: 'next', cbNode: 'beforeAd' } };
			window.parent.postMessage(param, '*');
		};
		var afterAd = function () {
			console.log('call afterAd <next>');
			var param = { cmd: 'GameAdCallback', data: { adStyle: 'next', cbNode: 'afterAd' } };
			window.parent.postMessage(param, '*');
		};
		var adBreakDone = function (placementInfo) {
			console.log('call adBreakDone <next>');
			var param = {
				cmd: 'GameAdCallback',
				data: { adStyle: 'next', cbNode: 'adBreakDone', data: placementInfo }
			};
			window.parent.postMessage(param, '*');
		};
		console.log('call adBreak <next>');
		_GameAd.adBreak &&
			_GameAd.adBreak({
				type: 'next',
				name: 'game_next',
				beforeAd: beforeAd,
				afterAd: afterAd,
				adBreakDone: adBreakDone
			});
	}
	function GameAdReword(data) {
		if (data === void 0) {
			data = {};
		}
		if (!_GameAd.adBreak) {
			console.log('adBreak not found');
			return;
		}
		var beforeReward = function (showAdFn) {
			console.log('call  beforeReward <reward>', showAdFn);
			var param = { cmd: 'GameAdCallback', data: { adStyle: 'reward', cbNode: 'beforeReward' } };
			window.parent.postMessage(param, '*');
			showAdFn();
		};
		var beforeAd = function () {
			console.log('call  beforeAd <reward>');
			var param = { cmd: 'GameAdCallback', data: { adStyle: 'reward', cbNode: 'beforeAd' } };
			window.parent.postMessage(param, '*');
		};
		var adDismissed = function () {
			console.log('call adDismissed <reward>');
			var param = { cmd: 'GameAdCallback', data: { adStyle: 'reward', cbNode: 'adDismissed' } };
			window.parent.postMessage(param, '*');
		};
		var adViewed = function () {
			console.log('call adViewed <reward>');
			var param = { cmd: 'GameAdCallback', data: { adStyle: 'reward', cbNode: 'adViewed' } };
			window.parent.postMessage(param, '*');
		};
		var afterAd = function () {
			console.log('call afterAd <reward>');
			var param = { cmd: 'GameAdCallback', data: { adStyle: 'reward', cbNode: 'afterAd' } };
			window.parent.postMessage(param, '*');
		};
		var adBreakDone = function (placementInfo) {
			console.log('call adBreakDone <reward>');
			var param = {
				cmd: 'GameAdCallback',
				data: { adStyle: 'reward', cbNode: 'adBreakDone', data: placementInfo }
			};
			window.parent.postMessage(param, '*');
		};
		console.log('call adBreak <reward>');
		_GameAd.adBreak &&
			_GameAd.adBreak({
				type: 'reward',
				name: 'game_reward',
				beforeReward: beforeReward,
				beforeAd: beforeAd,
				adDismissed: adDismissed,
				adViewed: adViewed,
				afterAd: afterAd,
				adBreakDone: adBreakDone
			});
	}
	function GameAdadConfig(config) {
		console.log('sdk: GameAdadConfig', config);
		_GameAd.adConfig && _GameAd.adConfig(config);
	}
})(vigoo || (vigoo = {}));

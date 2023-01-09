function SeasunDcLogger() {
	console.log('SeasunDcLogger start');
}
SeasunDcLogger.getRequest = function (url) {
	console.log(' getRequest = ' + url);
	if (!window['wx']) {
		try {
			var xmlhttp = null;
			try {
				xmlhttp = new XMLHttpRequest();
			} catch (e2) {
				try {
					xmlhttp = ActiveXobject('Msxml12.SeasunDcLogger._onError = function (error) {XMLHTTP');
				} catch (e3) {
					try {
						xmlhttp = ActiveXobject('Microsoft.XMLHTTP');
					} catch (e4) {
						if (console) {
							console.log('SeasunDcLogger.getRequest() Error');
						}
					}
				}
			}
			if (xmlhttp) {
				try {
					xmlhttp.onreadystatechange = function () {
						if (xmlhttp.readyState == 4 && xmlhttp.status < 400) {
							if (console) {
								console.log('SeasunDcLogger.getRequest() OK');
							}
						}
					};
					xmlhttp.open('GET', url, true);
					xmlhttp.send(null);
					console.log('SeasunDcLogger.getRequest() xmlhttp send OK');
				} catch (e5) {
					if (console) {
						console.log('SeasunDcLogger.getRequest() Error');
					}
				}
			}
		} catch (e1) {
			var script = document.createElement('script');
			script.src = url;
			document.body.insertBefore(script, document.body.firstChild);
		}
	} else {
		console.log('getRequest url = ' + url);
		wx.request({
			url: url,
			method: 'GET',
			header: { 'content-type': 'application/x-www-form-urlencoded' },
			success: function (res) {
				console.log('SeasunDcLogger.getRequest() script send OK = ' + res.data);
			},
			fail: function (res) {
				console.log('SeasunDcLogger.getRequest() script send fail ');
			}
		});
	}
};
SeasunDcLogger.handleResponse = function (response) {
	console.log(response);
};
SeasunDcLogger.customSetInterval = function (fun, interval) {
	return setInterval(fun, interval);
};
SeasunDcLogger.setLocalStorage = function (key, value) {
	if (window['wx']) {
		try {
			wx.setStorageSync(key, value);
		} catch (e) {}
	} else localStorage.setItem(key, value);
};
SeasunDcLogger.getLocalStorage = function (key) {
	if (window['wx']) {
		try {
			var value = wx.getStorageSync(key);
			if (value) {
				return value;
			} else return '';
		} catch (e) {
			return '';
		}
	} else return localStorage.getItem(key);
};
SeasunDcLogger.onError = function (key) {
	try {
		if (console) console.log(error);
	} catch (error) {}
};
SeasunDcLogger.heartbeatThreadId = null;
SeasunDcLogger._dcLoggerConfig = null;
SeasunDcLogger._dcLog = [];
SeasunDcLogger.heartbeat = null;
SeasunDcLogger.deviceId = null;
SeasunDcLogger.config = function (config) {
	try {
		if (!config) {
			throw 'config is null.';
		}
		SeasunDcLogger._AgentInfo._init();
		SeasunDcLogger._dcLoggerConfig = config;
		if (config.getRequest) {
			SeasunDcLogger.getRequest = config.getRequest;
		}
		if (config.handleResponse) {
			SeasunDcLogger.handleResponse = config.handleResponse;
		}
		if (config.customSetInterval) {
			SeasunDcLogger.customSetInterval = config.customSetInterval;
		}
		if (config.setLocalStorage) {
			SeasunDcLogger.setLocalStorage = config.setLocalStorage;
		}
		if (config.getLocalStorage) {
			SeasunDcLogger.getLocalStorage = config.getLocalStorage;
		}
		if (config.onError) {
			SeasunDcLogger.onError = config.onError;
		}
		SeasunDcLogger.deviceId = SeasunDcLogger.getLocalStorage('SeasunDcLogger.deviceId');
		console.log(' SeasunDcLogger.deviceId = ' + SeasunDcLogger.deviceId);
		if (!SeasunDcLogger.deviceId) {
			SeasunDcLogger.deviceId = SeasunDcLogger._guid();
			SeasunDcLogger.setLocalStorage('SeasunDcLogger.deviceId', SeasunDcLogger.deviceId);
		}
	} catch (error) {
		SeasunDcLogger._onError(error);
	}
};
SeasunDcLogger.push = function (log) {
	try {
		if (SeasunDcLogger._dcLog === undefined) {
			return;
		}
		console.log('SeasunDcLogger.push log.msgType = ' + log.msgType);
		SeasunDcLogger._dcLog.push(log);
	} catch (error) {
		SeasunDcLogger._onError(error);
	}
};
SeasunDcLogger.consume = function () {
	try {
		if (SeasunDcLogger._dcLog === undefined || SeasunDcLogger._dcLog.length == 0) {
			return;
		}
		if (!(SeasunDcLogger._dcLoggerConfig && SeasunDcLogger._dcLoggerConfig.appId)) {
			return;
		}
		var toSendMessages = [];
		var toSendBase64Message = null;
		var log = SeasunDcLogger._dcLog.shift();
		while (log != undefined) {
			console.log(' SeasunDcLogger.sendHeartbeat() 0 log.msgType=  ' + log.msgType);
			SeasunDcLogger.updateRoleInfo(log);
			if (log.msgType && 'role.login' == log.msgType) {
				console.log(' SeasunDcLogger.sendHeartbeat() 1 ');
				SeasunDcLogger.sendHeartbeat();
			}
			if (log.msgType && 'role.logout' == log.msgType) {
				console.log(' SeasunDcLogger.sendHeartbeat() 2 ');
				SeasunDcLogger.heartbeat = null;
			}
			var logMsg = SeasunDcLogger.buildMessage(log);
			toSendMessages.push(logMsg);
			toSendBase64Message = encodeURIComponent(
				JSON.stringify(toSendMessages, SeasunDcLogger._replacer)
			);
			SeasunDcLogger.send(toSendBase64Message);
			toSendMessages = [];
			toSendBase64Message = null;
			log = SeasunDcLogger._dcLog.shift();
		}
		if (toSendBase64Message && toSendBase64Message.length > 0) {
			SeasunDcLogger.send(toSendBase64Message);
		}
	} catch (error) {
		SeasunDcLogger._onError(error);
	}
};
SeasunDcLogger.updateRoleInfo = function (log) {
	console.log('updateRoleInfo heartbeat log = ' + log);
	try {
		if (!log) {
			console.log('updateRoleInfo heartbeat return ');
			return;
		}
		if (log.msgType && 'role.login' == log.msgType) {
			console.log('updateRoleInfo heartbeat -------------1-------------- ');
			SeasunDcLogger.heartbeat = SeasunDcLogger._deepClone(log);
			console.log('updateRoleInfo heartbeat --------------2------------- ');
			SeasunDcLogger.heartbeat.msgType = 'device.heartbeat';
			console.log('updateRoleInfo heartbeat --------------3------------- ');
			SeasunDcLogger.heartbeat.onlineSessionId = SeasunDcLogger._guid();
			console.log(
				'SeasunDcLogger.heartbeat.onlineSessionId = ' + SeasunDcLogger.heartbeat.onlineSessionId
			);
		} else {
			if (!SeasunDcLogger.heartbeat) {
				return;
			}
			if (log.roleName) {
				SeasunDcLogger.heartbeat.roleName = log.roleName;
			}
			if (log.roleType) {
				SeasunDcLogger.heartbeat.roleType = log.roleType;
			}
			if (log.roleLevel) {
				SeasunDcLogger.heartbeat.roleLevel = log.roleLevel;
			}
			if (log.roleVipLevel) {
				SeasunDcLogger.heartbeat.roleVipLevel = log.roleVipLevel;
			}
			if (log.zone) {
				SeasunDcLogger.heartbeat.zone = log.zone;
			}
			if (log.zoneName) {
				SeasunDcLogger.heartbeat.zoneName = log.zoneName;
			}
			if (log.roleName) {
				SeasunDcLogger.heartbeat.roleName = log.roleName;
			}
			if (log.server) {
				SeasunDcLogger.heartbeat.server = log.server;
			}
			if (log.serverName) {
				SeasunDcLogger.heartbeat.serverName = log.serverName;
			}
			if (log.partyId) {
				SeasunDcLogger.heartbeat.partyId = log.partyId;
			}
			if (log.gender) {
				SeasunDcLogger.heartbeat.gender = log.gender;
			}
			if (log.battleScore) {
				SeasunDcLogger.heartbeat.battleScore = log.battleScore;
			}
		}
	} catch (error) {
		SeasunDcLogger._onError(error);
	}
};
SeasunDcLogger.buildMessage = function (logInfo) {
	try {
		if (logInfo) {
			if (SeasunDcLogger._AgentInfo) {
				logInfo.os = SeasunDcLogger._AgentInfo.OSname;
				logInfo.browserName = SeasunDcLogger._AgentInfo.browserName;
				logInfo.browserVer = SeasunDcLogger._AgentInfo.browserVer;
			}
			logInfo.deviceScreen =
				'' + window.document.body.clientWidth + '*' + window.document.body.clientHeight;
			logInfo.msgId = SeasunDcLogger._guid();
			logInfo.msgVersion = '3.0.0';
			logInfo.dataSdkVersion = '2.0.0';
			logInfo.dataSdkLanguage = 'js';
			logInfo.datasource = 'client';
			logInfo.appId = SeasunDcLogger._dcLoggerConfig.appId;
			logInfo.appVersion = SeasunDcLogger._dcLoggerConfig.appVersion;
			logInfo.channel = SeasunDcLogger._dcLoggerConfig.channel;
			logInfo.commonAttributes = SeasunDcLogger._dcLoggerConfig.commonAttributes;
			logInfo.userAgent = window.navigator.userAgent;
			console.log('logInfo.userAgent = ' + logInfo.userAgent);
			logInfo.deviceId = SeasunDcLogger.deviceId;
			logInfo.timestamp = new Date();
			logInfo.timestamp.toJSON = function () {
				return SeasunDcLogger._dateFtt('yyyy-MM-dd hh:mm:ss.S', logInfo.timestamp);
			};
		}
		return logInfo;
	} catch (error) {
		SeasunDcLogger._onError(error);
	}
};
SeasunDcLogger.send = function (message) {
	try {
		if (!message) {
			return;
		}
		var defaultUrl = '//h5-statistics.kingsoft.com/jspush';
		defaultUrl = 'https:' + defaultUrl;
		var url = SeasunDcLogger._dcLoggerConfig.reportUrl || defaultUrl;
		var inserUrl =
			url +
			'?appId=' +
			SeasunDcLogger._dcLoggerConfig.appId +
			'&data=' +
			message +
			'&df=js_batch&callback=SeasunDcLogger.handleResponse&time=' +
			Number(new Date());
		SeasunDcLogger.getRequest(inserUrl);
	} catch (error) {
		SeasunDcLogger._onError(error);
	}
};
SeasunDcLogger.sendHeartbeat = function () {
	try {
		console.log(
			'SeasunDcLogger.heartbeat 1 SeasunDcLogger.heartbeat = ' + SeasunDcLogger.heartbeat
		);
		if (!SeasunDcLogger.heartbeat) {
			console.log('SeasunDcLogger.heartbeat 2');
			return;
		}
		console.log('SeasunDcLogger.heartbeat 3');
		if (SeasunDcLogger._dcLog === undefined) {
			console.log('SeasunDcLogger.heartbeat 4');
			return;
		}
		console.log('SeasunDcLogger.heartbeat');
		console.log(SeasunDcLogger.heartbeat);
		SeasunDcLogger._dcLog.push(SeasunDcLogger.heartbeat);
	} catch (error) {
		SeasunDcLogger._onError(error);
	}
};
SeasunDcLogger.start = function () {
	try {
		var interval = 1000 * 1;
		if (SeasunDcLogger._dcLoggerConfig.interval) {
			interval = SeasunDcLogger._dcLoggerConfig.interval;
		}
		var connectInfo = { msgType: 'device.connect', currentUrl: window.location.href };
		SeasunDcLogger._dcLog.push(connectInfo);
		SeasunDcLogger.customSetInterval(SeasunDcLogger.consume, interval);
		SeasunDcLogger.customSetInterval(SeasunDcLogger.sendHeartbeat, 1000 * 60 * 5);
	} catch (error) {
		SeasunDcLogger._onError(error);
	}
};
SeasunDcLogger.end = function () {
	try {
		SeasunDcLogger.consume();
	} catch (error) {
		SeasunDcLogger._onError(error);
	}
};
SeasunDcLogger._onError = function (error) {
	try {
		SeasunDcLogger.onError(error);
	} catch (err) {}
};
SeasunDcLogger._dateFtt = function (fmt, date) {
	var o = {
		'M+': date.getMonth() + 1,
		'd+': date.getDate(),
		'h+': date.getHours(),
		'm+': date.getMinutes(),
		's+': date.getSeconds(),
		'q+': Math.floor((date.getMonth() + 3) / 3),
		S: date.getMilliseconds()
	};
	if (/(y+)/.test(fmt))
		fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
	for (var k in o)
		if (new RegExp('(' + k + ')').test(fmt))
			fmt = fmt.replace(
				RegExp.$1,
				RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
			);
	return fmt;
};
SeasunDcLogger._isClass = function (o) {
	if (o === null) return 'Null';
	if (o === undefined) return 'Undefined';
	return Object.prototype.toString.call(o).slice(8, -1);
};
SeasunDcLogger._deepClone = function (obj) {
	var result,
		oClass = SeasunDcLogger._isClass(obj);
	if (oClass === 'Object') {
		result = {};
	} else if (oClass === 'Array') {
		result = [];
	} else {
		return obj;
	}
	for (var key in obj) {
		var copy = obj[key];
		if (SeasunDcLogger._isClass(copy) == 'Object') {
			result[key] = arguments.callee(copy);
		} else if (SeasunDcLogger._isClass(copy) == 'Array') {
			result[key] = arguments.callee(copy);
		} else {
			result[key] = obj[key];
		}
	}
	return result;
};
SeasunDcLogger._replacer = function (key, value) {
	if (typeof value === 'string' && (value === '' || value === null)) {
		return undefined;
	}
	return value;
};
SeasunDcLogger._guid = function () {
	return (
		SeasunDcLogger._s4n(3) +
		'-' +
		SeasunDcLogger._s4n(1) +
		'-' +
		SeasunDcLogger._s4n(1) +
		'-' +
		SeasunDcLogger._s4n(3)
	);
};
SeasunDcLogger._s4n = function (n) {
	var result = '';
	for (var i = 0; i < n; i++) {
		result = result + (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
	}
	return result;
};
SeasunDcLogger._AgentInfo = {
	deviceType: '',
	OSname: '',
	browserName: '',
	browserVer: '',
	adaptType: 0,
	_init: function () {
		try {
			SeasunDcLogger._AgentInfo.setDeviceAndOS();
			SeasunDcLogger._AgentInfo.setBrowser();
		} catch (err) {
			console.log(err);
		}
	},
	setDeviceAndOS: function () {
		var name = 'unknown';
		if (window['wx']) {
			var res = wx.getSystemInfoSync();
			SeasunDcLogger._AgentInfo.OSname = res.system;
			SeasunDcLogger._AgentInfo.deviceType = 'mobile';
			return;
		}
		if (window.navigator.userAgent.indexOf('Android') != -1) {
			name = 'Android';
		} else if (window.navigator.userAgent.indexOf('iPhone') != -1) {
			name = 'iPhone';
		} else if (window.navigator.userAgent.indexOf('SymbianOS') != -1) {
			name = 'SymbianOS';
		} else if (window.navigator.userAgent.indexOf('Windows Phone') != -1) {
			name = 'Windows Phone';
		} else if (window.navigator.userAgent.indexOf('iPad') != -1) {
			name = 'iPad';
		} else if (window.navigator.userAgent.indexOf('iPod') != -1) {
			name = 'iPod';
		}
		if (name != 'unknown') {
			SeasunDcLogger._AgentInfo.OSname = name;
			SeasunDcLogger._AgentInfo.deviceType = 'mobile';
			return;
		}
		if (window.navigator.userAgent.indexOf('Windows NT 10.0') != -1) {
			name = 'Windows 10';
		} else if (window.navigator.userAgent.indexOf('Windows NT 6.2') != -1) {
			name = 'Windows 8';
		} else if (window.navigator.userAgent.indexOf('Windows NT 6.1') != -1) {
			name = 'Windows 7';
		} else if (window.navigator.userAgent.indexOf('Windows NT 6.0') != -1) {
			name = 'Windows Vista';
		} else if (window.navigator.userAgent.indexOf('Windows NT 5.1') != -1) {
			name = 'Windows XP';
		} else if (window.navigator.userAgent.indexOf('Windows NT 5.0') != -1) {
			name = 'Windows 2000';
		} else if (window.navigator.userAgent.indexOf('Mac') != -1) {
			name = 'Mac/iOS';
		} else if (window.navigator.userAgent.indexOf('X11') != -1) {
			name = 'UNIX';
		} else if (window.navigator.userAgent.indexOf('Linux') != -1) {
			name = 'Linux';
		}
		SeasunDcLogger._AgentInfo.OSname = name;
		SeasunDcLogger._AgentInfo.deviceType = 'pc';
	},
	setBrowser: function () {
		var nAgt = navigator.userAgent;
		var browserName = navigator.appName;
		var fullVersion = '' + parseFloat(navigator.appVersion);
		var majorVersion = parseInt(navigator.appVersion, 10);
		var nameOffset, verOffset, ix;
		if ((verOffset = nAgt.indexOf('Opera')) != -1) {
			browserName = 'Opera';
			fullVersion = nAgt.substring(verOffset + 6);
			if ((verOffset = nAgt.indexOf('Version')) != -1) fullVersion = nAgt.substring(verOffset + 8);
		} else if (nAgt.indexOf('Trident') != -1) {
			if ((verOffset = nAgt.indexOf('MSIE')) != -1) {
				fullVersion = nAgt.substring(verOffset + 5);
			} else {
				fullVersion = '11.0';
			}
			if (fullVersion == 5) {
				fullVersion = '11.0';
			}
			browserName = 'IE';
		} else if ((verOffset = nAgt.indexOf('Chrome')) != -1) {
			browserName = 'Chrome';
			fullVersion = nAgt.substring(verOffset + 7);
		} else if ((verOffset = nAgt.indexOf('Safari')) != -1) {
			browserName = 'Safari';
			fullVersion = nAgt.substring(verOffset + 7);
			if ((verOffset = nAgt.indexOf('Version')) != -1) fullVersion = nAgt.substring(verOffset + 8);
		} else if ((verOffset = nAgt.indexOf('Firefox')) != -1) {
			browserName = 'Firefox';
			fullVersion = nAgt.substring(verOffset + 8);
		} else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) < (verOffset = nAgt.lastIndexOf('/'))) {
			browserName = nAgt.substring(nameOffset, verOffset);
			fullVersion = nAgt.substring(verOffset + 1);
			if (browserName.toLowerCase() == browserName.toUpperCase()) {
				browserName = navigator.appName;
			}
		}
		if ((ix = fullVersion.indexOf(';')) != -1) fullVersion = fullVersion.substring(0, ix);
		if ((ix = fullVersion.indexOf(' ')) != -1) fullVersion = fullVersion.substring(0, ix);
		majorVersion = parseInt('' + fullVersion, 10);
		if (isNaN(majorVersion)) {
			fullVersion = '' + parseFloat(navigator.appVersion);
			majorVersion = parseInt(navigator.appVersion, 10);
		}
		if (window['wx']) {
			var res = wx.getSystemInfoSync();
			browserName = 'wx';
			fullVersion = res.version;
		}
		SeasunDcLogger._AgentInfo.browserName = browserName;
		SeasunDcLogger._AgentInfo.browserVer = fullVersion;
	},
	isMobile: function () {
		if (SeasunDcLogger._AgentInfo.deviceType == 'mobile') {
			return true;
		}
		return false;
	},
	setAdaptType: function () {
		if (screen.width <= 374) {
			SeasunDcLogger._AgentInfo.adaptType = 0;
		} else if (screen.width <= 413) {
			SeasunDcLogger._AgentInfo.adaptType = 1;
		} else {
			SeasunDcLogger._AgentInfo.adaptType = 2;
		}
	}
};
window.SeasunDcLogger = SeasunDcLogger;

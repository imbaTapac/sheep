'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

// example of simple includes for js
function sayHello() {
	if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
		var args = ['\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \n\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];
		window.console.log.apply(console, args);
	} else if (window.console) {
		window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');
	}
}
// module.exports = sayHello;
/*! jQuery v3.0.0 | (c) jQuery Foundation | jquery.org/license */
!function (a, b) {
	"use strict";
	"object" == (typeof module === 'undefined' ? 'undefined' : _typeof(module)) && "object" == _typeof(module.exports) ? module.exports = a.document ? b(a, !0) : function (a) {
		if (!a.document) throw new Error("jQuery requires a window with a document");return b(a);
	} : b(a);
}("undefined" != typeof window ? window : undefined, function (a, b) {
	"use strict";
	var c = [],
	    d = a.document,
	    e = Object.getPrototypeOf,
	    f = c.slice,
	    g = c.concat,
	    h = c.push,
	    i = c.indexOf,
	    j = {},
	    k = j.toString,
	    l = j.hasOwnProperty,
	    m = l.toString,
	    n = m.call(Object),
	    o = {};function p(a, b) {
		b = b || d;var c = b.createElement("script");c.text = a, b.head.appendChild(c).parentNode.removeChild(c);
	}var q = "3.0.0",
	    r = function r(a, b) {
		return new r.fn.init(a, b);
	},
	    s = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
	    t = /^-ms-/,
	    u = /-([a-z])/g,
	    v = function v(a, b) {
		return b.toUpperCase();
	};r.fn = r.prototype = { jquery: q, constructor: r, length: 0, toArray: function toArray() {
			return f.call(this);
		}, get: function get(a) {
			return null != a ? 0 > a ? this[a + this.length] : this[a] : f.call(this);
		}, pushStack: function pushStack(a) {
			var b = r.merge(this.constructor(), a);return b.prevObject = this, b;
		}, each: function each(a) {
			return r.each(this, a);
		}, map: function map(a) {
			return this.pushStack(r.map(this, function (b, c) {
				return a.call(b, c, b);
			}));
		}, slice: function slice() {
			return this.pushStack(f.apply(this, arguments));
		}, first: function first() {
			return this.eq(0);
		}, last: function last() {
			return this.eq(-1);
		}, eq: function eq(a) {
			var b = this.length,
			    c = +a + (0 > a ? b : 0);return this.pushStack(c >= 0 && b > c ? [this[c]] : []);
		}, end: function end() {
			return this.prevObject || this.constructor();
		}, push: h, sort: c.sort, splice: c.splice }, r.extend = r.fn.extend = function () {
		var a,
		    b,
		    c,
		    d,
		    e,
		    f,
		    g = arguments[0] || {},
		    h = 1,
		    i = arguments.length,
		    j = !1;for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == (typeof g === 'undefined' ? 'undefined' : _typeof(g)) || r.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++) {
			if (null != (a = arguments[h])) for (b in a) {
				c = g[b], d = a[b], g !== d && (j && d && (r.isPlainObject(d) || (e = r.isArray(d))) ? (e ? (e = !1, f = c && r.isArray(c) ? c : []) : f = c && r.isPlainObject(c) ? c : {}, g[b] = r.extend(j, f, d)) : void 0 !== d && (g[b] = d));
			}
		}return g;
	}, r.extend({ expando: "jQuery" + (q + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(a) {
			throw new Error(a);
		}, noop: function noop() {}, isFunction: function isFunction(a) {
			return "function" === r.type(a);
		}, isArray: Array.isArray, isWindow: function isWindow(a) {
			return null != a && a === a.window;
		}, isNumeric: function isNumeric(a) {
			var b = r.type(a);return ("number" === b || "string" === b) && !isNaN(a - parseFloat(a));
		}, isPlainObject: function isPlainObject(a) {
			var b, c;return a && "[object Object]" === k.call(a) ? (b = e(a)) ? (c = l.call(b, "constructor") && b.constructor, "function" == typeof c && m.call(c) === n) : !0 : !1;
		}, isEmptyObject: function isEmptyObject(a) {
			var b;for (b in a) {
				return !1;
			}return !0;
		}, type: function type(a) {
			return null == a ? a + "" : "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) || "function" == typeof a ? j[k.call(a)] || "object" : typeof a === 'undefined' ? 'undefined' : _typeof(a);
		}, globalEval: function globalEval(a) {
			p(a);
		}, camelCase: function camelCase(a) {
			return a.replace(t, "ms-").replace(u, v);
		}, nodeName: function nodeName(a, b) {
			return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase();
		}, each: function each(a, b) {
			var c,
			    d = 0;if (w(a)) {
				for (c = a.length; c > d; d++) {
					if (b.call(a[d], d, a[d]) === !1) break;
				}
			} else for (d in a) {
				if (b.call(a[d], d, a[d]) === !1) break;
			}return a;
		}, trim: function trim(a) {
			return null == a ? "" : (a + "").replace(s, "");
		}, makeArray: function makeArray(a, b) {
			var c = b || [];return null != a && (w(Object(a)) ? r.merge(c, "string" == typeof a ? [a] : a) : h.call(c, a)), c;
		}, inArray: function inArray(a, b, c) {
			return null == b ? -1 : i.call(b, a, c);
		}, merge: function merge(a, b) {
			for (var c = +b.length, d = 0, e = a.length; c > d; d++) {
				a[e++] = b[d];
			}return a.length = e, a;
		}, grep: function grep(a, b, c) {
			for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) {
				d = !b(a[f], f), d !== h && e.push(a[f]);
			}return e;
		}, map: function map(a, b, c) {
			var d,
			    e,
			    f = 0,
			    h = [];if (w(a)) for (d = a.length; d > f; f++) {
				e = b(a[f], f, c), null != e && h.push(e);
			} else for (f in a) {
				e = b(a[f], f, c), null != e && h.push(e);
			}return g.apply([], h);
		}, guid: 1, proxy: function proxy(a, b) {
			var c, d, e;return "string" == typeof b && (c = a[b], b = a, a = c), r.isFunction(a) ? (d = f.call(arguments, 2), e = function e() {
				return a.apply(b || this, d.concat(f.call(arguments)));
			}, e.guid = a.guid = a.guid || r.guid++, e) : void 0;
		}, now: Date.now, support: o }), "function" == typeof Symbol && (r.fn[Symbol.iterator] = c[Symbol.iterator]), r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (a, b) {
		j["[object " + b + "]"] = b.toLowerCase();
	});function w(a) {
		var b = !!a && "length" in a && a.length,
		    c = r.type(a);return "function" === c || r.isWindow(a) ? !1 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a;
	}var x = function (a) {
		var b,
		    c,
		    d,
		    e,
		    f,
		    g,
		    h,
		    i,
		    j,
		    k,
		    l,
		    m,
		    n,
		    o,
		    p,
		    q,
		    r,
		    s,
		    t,
		    u = "sizzle" + 1 * new Date(),
		    v = a.document,
		    w = 0,
		    x = 0,
		    y = ha(),
		    z = ha(),
		    A = ha(),
		    B = function B(a, b) {
			return a === b && (l = !0), 0;
		},
		    C = {}.hasOwnProperty,
		    D = [],
		    E = D.pop,
		    F = D.push,
		    G = D.push,
		    H = D.slice,
		    I = function I(a, b) {
			for (var c = 0, d = a.length; d > c; c++) {
				if (a[c] === b) return c;
			}return -1;
		},
		    J = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
		    K = "[\\x20\\t\\r\\n\\f]",
		    L = "(?:\\\\.|[\\w-]|[^\x00-\\xa0])+",
		    M = "\\[" + K + "*(" + L + ")(?:" + K + "*([*^$|!~]?=)" + K + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + L + "))|)" + K + "*\\]",
		    N = ":(" + L + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + M + ")*)|.*)\\)|)",
		    O = new RegExp(K + "+", "g"),
		    P = new RegExp("^" + K + "+|((?:^|[^\\\\])(?:\\\\.)*)" + K + "+$", "g"),
		    Q = new RegExp("^" + K + "*," + K + "*"),
		    R = new RegExp("^" + K + "*([>+~]|" + K + ")" + K + "*"),
		    S = new RegExp("=" + K + "*([^\\]'\"]*?)" + K + "*\\]", "g"),
		    T = new RegExp(N),
		    U = new RegExp("^" + L + "$"),
		    V = { ID: new RegExp("^#(" + L + ")"), CLASS: new RegExp("^\\.(" + L + ")"), TAG: new RegExp("^(" + L + "|[*])"), ATTR: new RegExp("^" + M), PSEUDO: new RegExp("^" + N), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + K + "*(even|odd|(([+-]|)(\\d*)n|)" + K + "*(?:([+-]|)" + K + "*(\\d+)|))" + K + "*\\)|)", "i"), bool: new RegExp("^(?:" + J + ")$", "i"), needsContext: new RegExp("^" + K + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + K + "*((?:-\\d)?\\d*)" + K + "*\\)|)(?=[^-]|$)", "i") },
		    W = /^(?:input|select|textarea|button)$/i,
		    X = /^h\d$/i,
		    Y = /^[^{]+\{\s*\[native \w/,
		    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    $ = /[+~]/,
		    _ = new RegExp("\\\\([\\da-f]{1,6}" + K + "?|(" + K + ")|.)", "ig"),
		    aa = function aa(a, b, c) {
			var d = "0x" + b - 65536;return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320);
		},
		    ba = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		    ca = function ca(a, b) {
			return b ? "\x00" === a ? '\uFFFD' : a.slice(0, -1) + "\\" + a.charCodeAt(a.length - 1).toString(16) + " " : "\\" + a;
		},
		    da = function da() {
			m();
		},
		    ea = ta(function (a) {
			return a.disabled === !0;
		}, { dir: "parentNode", next: "legend" });try {
			G.apply(D = H.call(v.childNodes), v.childNodes), D[v.childNodes.length].nodeType;
		} catch (fa) {
			G = { apply: D.length ? function (a, b) {
					F.apply(a, H.call(b));
				} : function (a, b) {
					var c = a.length,
					    d = 0;while (a[c++] = b[d++]) {}a.length = c - 1;
				} };
		}function ga(a, b, d, e) {
			var f,
			    h,
			    j,
			    k,
			    l,
			    o,
			    r,
			    s = b && b.ownerDocument,
			    w = b ? b.nodeType : 9;if (d = d || [], "string" != typeof a || !a || 1 !== w && 9 !== w && 11 !== w) return d;if (!e && ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, p)) {
				if (11 !== w && (l = Z.exec(a))) if (f = l[1]) {
					if (9 === w) {
						if (!(j = b.getElementById(f))) return d;if (j.id === f) return d.push(j), d;
					} else if (s && (j = s.getElementById(f)) && t(b, j) && j.id === f) return d.push(j), d;
				} else {
					if (l[2]) return G.apply(d, b.getElementsByTagName(a)), d;if ((f = l[3]) && c.getElementsByClassName && b.getElementsByClassName) return G.apply(d, b.getElementsByClassName(f)), d;
				}if (c.qsa && !A[a + " "] && (!q || !q.test(a))) {
					if (1 !== w) s = b, r = a;else if ("object" !== b.nodeName.toLowerCase()) {
						(k = b.getAttribute("id")) ? k = k.replace(ba, ca) : b.setAttribute("id", k = u), o = g(a), h = o.length;while (h--) {
							o[h] = "#" + k + " " + sa(o[h]);
						}r = o.join(","), s = $.test(a) && qa(b.parentNode) || b;
					}if (r) try {
						return G.apply(d, s.querySelectorAll(r)), d;
					} catch (x) {} finally {
						k === u && b.removeAttribute("id");
					}
				}
			}return i(a.replace(P, "$1"), b, d, e);
		}function ha() {
			var a = [];function b(c, e) {
				return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e;
			}return b;
		}function ia(a) {
			return a[u] = !0, a;
		}function ja(a) {
			var b = n.createElement("fieldset");try {
				return !!a(b);
			} catch (c) {
				return !1;
			} finally {
				b.parentNode && b.parentNode.removeChild(b), b = null;
			}
		}function ka(a, b) {
			var c = a.split("|"),
			    e = c.length;while (e--) {
				d.attrHandle[c[e]] = b;
			}
		}function la(a, b) {
			var c = b && a,
			    d = c && 1 === a.nodeType && 1 === b.nodeType && a.sourceIndex - b.sourceIndex;if (d) return d;if (c) while (c = c.nextSibling) {
				if (c === b) return -1;
			}return a ? 1 : -1;
		}function ma(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return "input" === c && b.type === a;
			};
		}function na(a) {
			return function (b) {
				var c = b.nodeName.toLowerCase();return ("input" === c || "button" === c) && b.type === a;
			};
		}function oa(a) {
			return function (b) {
				return "label" in b && b.disabled === a || "form" in b && b.disabled === a || "form" in b && b.disabled === !1 && (b.isDisabled === a || b.isDisabled !== !a && ("label" in b || !ea(b)) !== a);
			};
		}function pa(a) {
			return ia(function (b) {
				return b = +b, ia(function (c, d) {
					var e,
					    f = a([], c.length, b),
					    g = f.length;while (g--) {
						c[e = f[g]] && (c[e] = !(d[e] = c[e]));
					}
				});
			});
		}function qa(a) {
			return a && "undefined" != typeof a.getElementsByTagName && a;
		}c = ga.support = {}, f = ga.isXML = function (a) {
			var b = a && (a.ownerDocument || a).documentElement;return b ? "HTML" !== b.nodeName : !1;
		}, m = ga.setDocument = function (a) {
			var b,
			    e,
			    g = a ? a.ownerDocument || a : v;return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = n.documentElement, p = !f(n), v !== n && (e = n.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", da, !1) : e.attachEvent && e.attachEvent("onunload", da)), c.attributes = ja(function (a) {
				return a.className = "i", !a.getAttribute("className");
			}), c.getElementsByTagName = ja(function (a) {
				return a.appendChild(n.createComment("")), !a.getElementsByTagName("*").length;
			}), c.getElementsByClassName = Y.test(n.getElementsByClassName), c.getById = ja(function (a) {
				return o.appendChild(a).id = u, !n.getElementsByName || !n.getElementsByName(u).length;
			}), c.getById ? (d.find.ID = function (a, b) {
				if ("undefined" != typeof b.getElementById && p) {
					var c = b.getElementById(a);return c ? [c] : [];
				}
			}, d.filter.ID = function (a) {
				var b = a.replace(_, aa);return function (a) {
					return a.getAttribute("id") === b;
				};
			}) : (delete d.find.ID, d.filter.ID = function (a) {
				var b = a.replace(_, aa);return function (a) {
					var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");return c && c.value === b;
				};
			}), d.find.TAG = c.getElementsByTagName ? function (a, b) {
				return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0;
			} : function (a, b) {
				var c,
				    d = [],
				    e = 0,
				    f = b.getElementsByTagName(a);if ("*" === a) {
					while (c = f[e++]) {
						1 === c.nodeType && d.push(c);
					}return d;
				}return f;
			}, d.find.CLASS = c.getElementsByClassName && function (a, b) {
				return "undefined" != typeof b.getElementsByClassName && p ? b.getElementsByClassName(a) : void 0;
			}, r = [], q = [], (c.qsa = Y.test(n.querySelectorAll)) && (ja(function (a) {
				o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\r\\' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + K + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + K + "*(?:value|" + J + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]");
			}), ja(function (a) {
				a.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b = n.createElement("input");b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + K + "*[*^$|!~]?="), 2 !== a.querySelectorAll(":enabled").length && q.push(":enabled", ":disabled"), o.appendChild(a).disabled = !0, 2 !== a.querySelectorAll(":disabled").length && q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:");
			})), (c.matchesSelector = Y.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
				c.disconnectedMatch = s.call(a, "*"), s.call(a, "[s!='']:x"), r.push("!=", N);
			}), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = Y.test(o.compareDocumentPosition), t = b || Y.test(o.contains) ? function (a, b) {
				var c = 9 === a.nodeType ? a.documentElement : a,
				    d = b && b.parentNode;return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)));
			} : function (a, b) {
				if (b) while (b = b.parentNode) {
					if (b === a) return !0;
				}return !1;
			}, B = b ? function (a, b) {
				if (a === b) return l = !0, 0;var d = !a.compareDocumentPosition - !b.compareDocumentPosition;return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === n || a.ownerDocument === v && t(v, a) ? -1 : b === n || b.ownerDocument === v && t(v, b) ? 1 : k ? I(k, a) - I(k, b) : 0 : 4 & d ? -1 : 1);
			} : function (a, b) {
				if (a === b) return l = !0, 0;var c,
				    d = 0,
				    e = a.parentNode,
				    f = b.parentNode,
				    g = [a],
				    h = [b];if (!e || !f) return a === n ? -1 : b === n ? 1 : e ? -1 : f ? 1 : k ? I(k, a) - I(k, b) : 0;if (e === f) return la(a, b);c = a;while (c = c.parentNode) {
					g.unshift(c);
				}c = b;while (c = c.parentNode) {
					h.unshift(c);
				}while (g[d] === h[d]) {
					d++;
				}return d ? la(g[d], h[d]) : g[d] === v ? -1 : h[d] === v ? 1 : 0;
			}, n) : n;
		}, ga.matches = function (a, b) {
			return ga(a, null, null, b);
		}, ga.matchesSelector = function (a, b) {
			if ((a.ownerDocument || a) !== n && m(a), b = b.replace(S, "='$1']"), c.matchesSelector && p && !A[b + " "] && (!r || !r.test(b)) && (!q || !q.test(b))) try {
				var d = s.call(a, b);if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d;
			} catch (e) {}return ga(b, n, null, [a]).length > 0;
		}, ga.contains = function (a, b) {
			return (a.ownerDocument || a) !== n && m(a), t(a, b);
		}, ga.attr = function (a, b) {
			(a.ownerDocument || a) !== n && m(a);var e = d.attrHandle[b.toLowerCase()],
			    f = e && C.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null;
		}, ga.escape = function (a) {
			return (a + "").replace(ba, ca);
		}, ga.error = function (a) {
			throw new Error("Syntax error, unrecognized expression: " + a);
		}, ga.uniqueSort = function (a) {
			var b,
			    d = [],
			    e = 0,
			    f = 0;if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
				while (b = a[f++]) {
					b === a[f] && (e = d.push(f));
				}while (e--) {
					a.splice(d[e], 1);
				}
			}return k = null, a;
		}, e = ga.getText = function (a) {
			var b,
			    c = "",
			    d = 0,
			    f = a.nodeType;if (f) {
				if (1 === f || 9 === f || 11 === f) {
					if ("string" == typeof a.textContent) return a.textContent;for (a = a.firstChild; a; a = a.nextSibling) {
						c += e(a);
					}
				} else if (3 === f || 4 === f) return a.nodeValue;
			} else while (b = a[d++]) {
				c += e(b);
			}return c;
		}, d = ga.selectors = { cacheLength: 50, createPseudo: ia, match: V, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(a) {
					return a[1] = a[1].replace(_, aa), a[3] = (a[3] || a[4] || a[5] || "").replace(_, aa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4);
				}, CHILD: function CHILD(a) {
					return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a;
				}, PSEUDO: function PSEUDO(a) {
					var b,
					    c = !a[6] && a[2];return V.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && T.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3));
				} }, filter: { TAG: function TAG(a) {
					var b = a.replace(_, aa).toLowerCase();return "*" === a ? function () {
						return !0;
					} : function (a) {
						return a.nodeName && a.nodeName.toLowerCase() === b;
					};
				}, CLASS: function CLASS(a) {
					var b = y[a + " "];return b || (b = new RegExp("(^|" + K + ")" + a + "(" + K + "|$)")) && y(a, function (a) {
						return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "");
					});
				}, ATTR: function ATTR(a, b, c) {
					return function (d) {
						var e = ga.attr(d, a);return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(O, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0;
					};
				}, CHILD: function CHILD(a, b, c, d, e) {
					var f = "nth" !== a.slice(0, 3),
					    g = "last" !== a.slice(-4),
					    h = "of-type" === b;return 1 === d && 0 === e ? function (a) {
						return !!a.parentNode;
					} : function (b, c, i) {
						var j,
						    k,
						    l,
						    m,
						    n,
						    o,
						    p = f !== g ? "nextSibling" : "previousSibling",
						    q = b.parentNode,
						    r = h && b.nodeName.toLowerCase(),
						    s = !i && !h,
						    t = !1;if (q) {
							if (f) {
								while (p) {
									m = b;while (m = m[p]) {
										if (h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) return !1;
									}o = p = "only" === a && !o && "nextSibling";
								}return !0;
							}if (o = [g ? q.firstChild : q.lastChild], g && s) {
								m = q, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n && j[2], m = n && q.childNodes[n];while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
									if (1 === m.nodeType && ++t && m === b) {
										k[a] = [w, n, t];break;
									}
								}
							} else if (s && (m = b, l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), j = k[a] || [], n = j[0] === w && j[1], t = n), t === !1) while (m = ++n && m && m[p] || (t = n = 0) || o.pop()) {
								if ((h ? m.nodeName.toLowerCase() === r : 1 === m.nodeType) && ++t && (s && (l = m[u] || (m[u] = {}), k = l[m.uniqueID] || (l[m.uniqueID] = {}), k[a] = [w, t]), m === b)) break;
							}return t -= e, t === d || t % d === 0 && t / d >= 0;
						}
					};
				}, PSEUDO: function PSEUDO(a, b) {
					var c,
					    e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
						var d,
						    f = e(a, b),
						    g = f.length;while (g--) {
							d = I(a, f[g]), a[d] = !(c[d] = f[g]);
						}
					}) : function (a) {
						return e(a, 0, c);
					}) : e;
				} }, pseudos: { not: ia(function (a) {
					var b = [],
					    c = [],
					    d = h(a.replace(P, "$1"));return d[u] ? ia(function (a, b, c, e) {
						var f,
						    g = d(a, null, e, []),
						    h = a.length;while (h--) {
							(f = g[h]) && (a[h] = !(b[h] = f));
						}
					}) : function (a, e, f) {
						return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop();
					};
				}), has: ia(function (a) {
					return function (b) {
						return ga(a, b).length > 0;
					};
				}), contains: ia(function (a) {
					return a = a.replace(_, aa), function (b) {
						return (b.textContent || b.innerText || e(b)).indexOf(a) > -1;
					};
				}), lang: ia(function (a) {
					return U.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(_, aa).toLowerCase(), function (b) {
						var c;do {
							if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
						} while ((b = b.parentNode) && 1 === b.nodeType);return !1;
					};
				}), target: function target(b) {
					var c = a.location && a.location.hash;return c && c.slice(1) === b.id;
				}, root: function root(a) {
					return a === o;
				}, focus: function focus(a) {
					return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex);
				}, enabled: oa(!1), disabled: oa(!0), checked: function checked(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && !!a.checked || "option" === b && !!a.selected;
				}, selected: function selected(a) {
					return a.parentNode && a.parentNode.selectedIndex, a.selected === !0;
				}, empty: function empty(a) {
					for (a = a.firstChild; a; a = a.nextSibling) {
						if (a.nodeType < 6) return !1;
					}return !0;
				}, parent: function parent(a) {
					return !d.pseudos.empty(a);
				}, header: function header(a) {
					return X.test(a.nodeName);
				}, input: function input(a) {
					return W.test(a.nodeName);
				}, button: function button(a) {
					var b = a.nodeName.toLowerCase();return "input" === b && "button" === a.type || "button" === b;
				}, text: function text(a) {
					var b;return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase());
				}, first: pa(function () {
					return [0];
				}), last: pa(function (a, b) {
					return [b - 1];
				}), eq: pa(function (a, b, c) {
					return [0 > c ? c + b : c];
				}), even: pa(function (a, b) {
					for (var c = 0; b > c; c += 2) {
						a.push(c);
					}return a;
				}), odd: pa(function (a, b) {
					for (var c = 1; b > c; c += 2) {
						a.push(c);
					}return a;
				}), lt: pa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; --d >= 0;) {
						a.push(d);
					}return a;
				}), gt: pa(function (a, b, c) {
					for (var d = 0 > c ? c + b : c; ++d < b;) {
						a.push(d);
					}return a;
				}) } }, d.pseudos.nth = d.pseudos.eq;for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
			d.pseudos[b] = ma(b);
		}for (b in { submit: !0, reset: !0 }) {
			d.pseudos[b] = na(b);
		}function ra() {}ra.prototype = d.filters = d.pseudos, d.setFilters = new ra(), g = ga.tokenize = function (a, b) {
			var c,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = z[a + " "];if (k) return b ? 0 : k.slice(0);h = a, i = [], j = d.preFilter;while (h) {
				c && !(e = Q.exec(h)) || (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = R.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(P, " ") }), h = h.slice(c.length));for (g in d.filter) {
					!(e = V[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
				}if (!c) break;
			}return b ? h.length : h ? ga.error(a) : z(a, i).slice(0);
		};function sa(a) {
			for (var b = 0, c = a.length, d = ""; c > b; b++) {
				d += a[b].value;
			}return d;
		}function ta(a, b, c) {
			var d = b.dir,
			    e = b.next,
			    f = e || d,
			    g = c && "parentNode" === f,
			    h = x++;return b.first ? function (b, c, e) {
				while (b = b[d]) {
					if (1 === b.nodeType || g) return a(b, c, e);
				}
			} : function (b, c, i) {
				var j,
				    k,
				    l,
				    m = [w, h];if (i) {
					while (b = b[d]) {
						if ((1 === b.nodeType || g) && a(b, c, i)) return !0;
					}
				} else while (b = b[d]) {
					if (1 === b.nodeType || g) if (l = b[u] || (b[u] = {}), k = l[b.uniqueID] || (l[b.uniqueID] = {}), e && e === b.nodeName.toLowerCase()) b = b[d] || b;else {
						if ((j = k[f]) && j[0] === w && j[1] === h) return m[2] = j[2];if (k[f] = m, m[2] = a(b, c, i)) return !0;
					}
				}
			};
		}function ua(a) {
			return a.length > 1 ? function (b, c, d) {
				var e = a.length;while (e--) {
					if (!a[e](b, c, d)) return !1;
				}return !0;
			} : a[0];
		}function va(a, b, c) {
			for (var d = 0, e = b.length; e > d; d++) {
				ga(a, b[d], c);
			}return c;
		}function wa(a, b, c, d, e) {
			for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++) {
				(f = a[h]) && (c && !c(f, d, e) || (g.push(f), j && b.push(h)));
			}return g;
		}function xa(a, b, c, d, e, f) {
			return d && !d[u] && (d = xa(d)), e && !e[u] && (e = xa(e, f)), ia(function (f, g, h, i) {
				var j,
				    k,
				    l,
				    m = [],
				    n = [],
				    o = g.length,
				    p = f || va(b || "*", h.nodeType ? [h] : h, []),
				    q = !a || !f && b ? p : wa(p, m, a, h, i),
				    r = c ? e || (f ? a : o || d) ? [] : g : q;if (c && c(q, r, h, i), d) {
					j = wa(r, n), d(j, [], h, i), k = j.length;while (k--) {
						(l = j[k]) && (r[n[k]] = !(q[n[k]] = l));
					}
				}if (f) {
					if (e || a) {
						if (e) {
							j = [], k = r.length;while (k--) {
								(l = r[k]) && j.push(q[k] = l);
							}e(null, r = [], j, i);
						}k = r.length;while (k--) {
							(l = r[k]) && (j = e ? I(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l));
						}
					}
				} else r = wa(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : G.apply(g, r);
			});
		}function ya(a) {
			for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = ta(function (a) {
				return a === b;
			}, h, !0), l = ta(function (a) {
				return I(b, a) > -1;
			}, h, !0), m = [function (a, c, d) {
				var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));return b = null, e;
			}]; f > i; i++) {
				if (c = d.relative[a[i].type]) m = [ta(ua(m), c)];else {
					if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
						for (e = ++i; f > e; e++) {
							if (d.relative[a[e].type]) break;
						}return xa(i > 1 && ua(m), i > 1 && sa(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(P, "$1"), c, e > i && ya(a.slice(i, e)), f > e && ya(a = a.slice(e)), f > e && sa(a));
					}m.push(c);
				}
			}return ua(m);
		}function za(a, b) {
			var c = b.length > 0,
			    e = a.length > 0,
			    f = function f(_f, g, h, i, k) {
				var l,
				    o,
				    q,
				    r = 0,
				    s = "0",
				    t = _f && [],
				    u = [],
				    v = j,
				    x = _f || e && d.find.TAG("*", k),
				    y = w += null == v ? 1 : Math.random() || .1,
				    z = x.length;for (k && (j = g === n || g || k); s !== z && null != (l = x[s]); s++) {
					if (e && l) {
						o = 0, g || l.ownerDocument === n || (m(l), h = !p);while (q = a[o++]) {
							if (q(l, g || n, h)) {
								i.push(l);break;
							}
						}k && (w = y);
					}c && ((l = !q && l) && r--, _f && t.push(l));
				}if (r += s, c && s !== r) {
					o = 0;while (q = b[o++]) {
						q(t, u, g, h);
					}if (_f) {
						if (r > 0) while (s--) {
							t[s] || u[s] || (u[s] = E.call(i));
						}u = wa(u);
					}G.apply(i, u), k && !_f && u.length > 0 && r + b.length > 1 && ga.uniqueSort(i);
				}return k && (w = y, j = v), t;
			};return c ? ia(f) : f;
		}return h = ga.compile = function (a, b) {
			var c,
			    d = [],
			    e = [],
			    f = A[a + " "];if (!f) {
				b || (b = g(a)), c = b.length;while (c--) {
					f = ya(b[c]), f[u] ? d.push(f) : e.push(f);
				}f = A(a, za(e, d)), f.selector = a;
			}return f;
		}, i = ga.select = function (a, b, e, f) {
			var i,
			    j,
			    k,
			    l,
			    m,
			    n = "function" == typeof a && a,
			    o = !f && g(a = n.selector || a);if (e = e || [], 1 === o.length) {
				if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
					if (b = (d.find.ID(k.matches[0].replace(_, aa), b) || [])[0], !b) return e;n && (b = b.parentNode), a = a.slice(j.shift().value.length);
				}i = V.needsContext.test(a) ? 0 : j.length;while (i--) {
					if (k = j[i], d.relative[l = k.type]) break;if ((m = d.find[l]) && (f = m(k.matches[0].replace(_, aa), $.test(j[0].type) && qa(b.parentNode) || b))) {
						if (j.splice(i, 1), a = f.length && sa(j), !a) return G.apply(e, f), e;break;
					}
				}
			}return (n || h(a, o))(f, b, !p, e, !b || $.test(a) && qa(b.parentNode) || b), e;
		}, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
			return 1 & a.compareDocumentPosition(n.createElement("fieldset"));
		}), ja(function (a) {
			return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href");
		}) || ka("type|href|height|width", function (a, b, c) {
			return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2);
		}), c.attributes && ja(function (a) {
			return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value");
		}) || ka("value", function (a, b, c) {
			return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue;
		}), ja(function (a) {
			return null == a.getAttribute("disabled");
		}) || ka(J, function (a, b, c) {
			var d;return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null;
		}), ga;
	}(a);r.find = x, r.expr = x.selectors, r.expr[":"] = r.expr.pseudos, r.uniqueSort = r.unique = x.uniqueSort, r.text = x.getText, r.isXMLDoc = x.isXML, r.contains = x.contains, r.escapeSelector = x.escape;var y = function y(a, b, c) {
		var d = [],
		    e = void 0 !== c;while ((a = a[b]) && 9 !== a.nodeType) {
			if (1 === a.nodeType) {
				if (e && r(a).is(c)) break;d.push(a);
			}
		}return d;
	},
	    z = function z(a, b) {
		for (var c = []; a; a = a.nextSibling) {
			1 === a.nodeType && a !== b && c.push(a);
		}return c;
	},
	    A = r.expr.match.needsContext,
	    B = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
	    C = /^.[^:#\[\.,]*$/;function D(a, b, c) {
		if (r.isFunction(b)) return r.grep(a, function (a, d) {
			return !!b.call(a, d, a) !== c;
		});if (b.nodeType) return r.grep(a, function (a) {
			return a === b !== c;
		});if ("string" == typeof b) {
			if (C.test(b)) return r.filter(b, a, c);b = r.filter(b, a);
		}return r.grep(a, function (a) {
			return i.call(b, a) > -1 !== c && 1 === a.nodeType;
		});
	}r.filter = function (a, b, c) {
		var d = b[0];return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? r.find.matchesSelector(d, a) ? [d] : [] : r.find.matches(a, r.grep(b, function (a) {
			return 1 === a.nodeType;
		}));
	}, r.fn.extend({ find: function find(a) {
			var b,
			    c,
			    d = this.length,
			    e = this;if ("string" != typeof a) return this.pushStack(r(a).filter(function () {
				for (b = 0; d > b; b++) {
					if (r.contains(e[b], this)) return !0;
				}
			}));for (c = this.pushStack([]), b = 0; d > b; b++) {
				r.find(a, e[b], c);
			}return d > 1 ? r.uniqueSort(c) : c;
		}, filter: function filter(a) {
			return this.pushStack(D(this, a || [], !1));
		}, not: function not(a) {
			return this.pushStack(D(this, a || [], !0));
		}, is: function is(a) {
			return !!D(this, "string" == typeof a && A.test(a) ? r(a) : a || [], !1).length;
		} });var E,
	    F = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
	    G = r.fn.init = function (a, b, c) {
		var e, f;if (!a) return this;if (c = c || E, "string" == typeof a) {
			if (e = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : F.exec(a), !e || !e[1] && b) return !b || b.jquery ? (b || c).find(a) : this.constructor(b).find(a);if (e[1]) {
				if (b = b instanceof r ? b[0] : b, r.merge(this, r.parseHTML(e[1], b && b.nodeType ? b.ownerDocument || b : d, !0)), B.test(e[1]) && r.isPlainObject(b)) for (e in b) {
					r.isFunction(this[e]) ? this[e](b[e]) : this.attr(e, b[e]);
				}return this;
			}return f = d.getElementById(e[2]), f && (this[0] = f, this.length = 1), this;
		}return a.nodeType ? (this[0] = a, this.length = 1, this) : r.isFunction(a) ? void 0 !== c.ready ? c.ready(a) : a(r) : r.makeArray(a, this);
	};G.prototype = r.fn, E = r(d);var H = /^(?:parents|prev(?:Until|All))/,
	    I = { children: !0, contents: !0, next: !0, prev: !0 };r.fn.extend({ has: function has(a) {
			var b = r(a, this),
			    c = b.length;return this.filter(function () {
				for (var a = 0; c > a; a++) {
					if (r.contains(this, b[a])) return !0;
				}
			});
		}, closest: function closest(a, b) {
			var c,
			    d = 0,
			    e = this.length,
			    f = [],
			    g = "string" != typeof a && r(a);if (!A.test(a)) for (; e > d; d++) {
				for (c = this[d]; c && c !== b; c = c.parentNode) {
					if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && r.find.matchesSelector(c, a))) {
						f.push(c);break;
					}
				}
			}return this.pushStack(f.length > 1 ? r.uniqueSort(f) : f);
		}, index: function index(a) {
			return a ? "string" == typeof a ? i.call(r(a), this[0]) : i.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
		}, add: function add(a, b) {
			return this.pushStack(r.uniqueSort(r.merge(this.get(), r(a, b))));
		}, addBack: function addBack(a) {
			return this.add(null == a ? this.prevObject : this.prevObject.filter(a));
		} });function J(a, b) {
		while ((a = a[b]) && 1 !== a.nodeType) {}return a;
	}r.each({ parent: function parent(a) {
			var b = a.parentNode;return b && 11 !== b.nodeType ? b : null;
		}, parents: function parents(a) {
			return y(a, "parentNode");
		}, parentsUntil: function parentsUntil(a, b, c) {
			return y(a, "parentNode", c);
		}, next: function next(a) {
			return J(a, "nextSibling");
		}, prev: function prev(a) {
			return J(a, "previousSibling");
		}, nextAll: function nextAll(a) {
			return y(a, "nextSibling");
		}, prevAll: function prevAll(a) {
			return y(a, "previousSibling");
		}, nextUntil: function nextUntil(a, b, c) {
			return y(a, "nextSibling", c);
		}, prevUntil: function prevUntil(a, b, c) {
			return y(a, "previousSibling", c);
		}, siblings: function siblings(a) {
			return z((a.parentNode || {}).firstChild, a);
		}, children: function children(a) {
			return z(a.firstChild);
		}, contents: function contents(a) {
			return a.contentDocument || r.merge([], a.childNodes);
		} }, function (a, b) {
		r.fn[a] = function (c, d) {
			var e = r.map(this, b, c);return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = r.filter(d, e)), this.length > 1 && (I[a] || r.uniqueSort(e), H.test(a) && e.reverse()), this.pushStack(e);
		};
	});var K = /\S+/g;function L(a) {
		var b = {};return r.each(a.match(K) || [], function (a, c) {
			b[c] = !0;
		}), b;
	}r.Callbacks = function (a) {
		a = "string" == typeof a ? L(a) : r.extend({}, a);var b,
		    c,
		    d,
		    e,
		    f = [],
		    g = [],
		    h = -1,
		    i = function i() {
			for (e = a.once, d = b = !0; g.length; h = -1) {
				c = g.shift();while (++h < f.length) {
					f[h].apply(c[0], c[1]) === !1 && a.stopOnFalse && (h = f.length, c = !1);
				}
			}a.memory || (c = !1), b = !1, e && (f = c ? [] : "");
		},
		    j = { add: function add() {
				return f && (c && !b && (h = f.length - 1, g.push(c)), function d(b) {
					r.each(b, function (b, c) {
						r.isFunction(c) ? a.unique && j.has(c) || f.push(c) : c && c.length && "string" !== r.type(c) && d(c);
					});
				}(arguments), c && !b && i()), this;
			}, remove: function remove() {
				return r.each(arguments, function (a, b) {
					var c;while ((c = r.inArray(b, f, c)) > -1) {
						f.splice(c, 1), h >= c && h--;
					}
				}), this;
			}, has: function has(a) {
				return a ? r.inArray(a, f) > -1 : f.length > 0;
			}, empty: function empty() {
				return f && (f = []), this;
			}, disable: function disable() {
				return e = g = [], f = c = "", this;
			}, disabled: function disabled() {
				return !f;
			}, lock: function lock() {
				return e = g = [], c || b || (f = c = ""), this;
			}, locked: function locked() {
				return !!e;
			}, fireWith: function fireWith(a, c) {
				return e || (c = c || [], c = [a, c.slice ? c.slice() : c], g.push(c), b || i()), this;
			}, fire: function fire() {
				return j.fireWith(this, arguments), this;
			}, fired: function fired() {
				return !!d;
			} };return j;
	};function M(a) {
		return a;
	}function N(a) {
		throw a;
	}function O(a, b, c) {
		var d;try {
			a && r.isFunction(d = a.promise) ? d.call(a).done(b).fail(c) : a && r.isFunction(d = a.then) ? d.call(a, b, c) : b.call(void 0, a);
		} catch (a) {
			c.call(void 0, a);
		}
	}r.extend({ Deferred: function Deferred(b) {
			var c = [["notify", "progress", r.Callbacks("memory"), r.Callbacks("memory"), 2], ["resolve", "done", r.Callbacks("once memory"), r.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", r.Callbacks("once memory"), r.Callbacks("once memory"), 1, "rejected"]],
			    d = "pending",
			    e = { state: function state() {
					return d;
				}, always: function always() {
					return f.done(arguments).fail(arguments), this;
				}, "catch": function _catch(a) {
					return e.then(null, a);
				}, pipe: function pipe() {
					var a = arguments;return r.Deferred(function (b) {
						r.each(c, function (c, d) {
							var e = r.isFunction(a[d[4]]) && a[d[4]];f[d[1]](function () {
								var a = e && e.apply(this, arguments);a && r.isFunction(a.promise) ? a.promise().progress(b.notify).done(b.resolve).fail(b.reject) : b[d[0] + "With"](this, e ? [a] : arguments);
							});
						}), a = null;
					}).promise();
				}, then: function then(b, d, e) {
					var f = 0;function g(b, c, d, e) {
						return function () {
							var h = this,
							    i = arguments,
							    j = function j() {
								var a, j;if (!(f > b)) {
									if (a = d.apply(h, i), a === c.promise()) throw new TypeError("Thenable self-resolution");j = a && ("object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) || "function" == typeof a) && a.then, r.isFunction(j) ? e ? j.call(a, g(f, c, M, e), g(f, c, N, e)) : (f++, j.call(a, g(f, c, M, e), g(f, c, N, e), g(f, c, M, c.notifyWith))) : (d !== M && (h = void 0, i = [a]), (e || c.resolveWith)(h, i));
								}
							},
							    k = e ? j : function () {
								try {
									j();
								} catch (a) {
									r.Deferred.exceptionHook && r.Deferred.exceptionHook(a, k.stackTrace), b + 1 >= f && (d !== N && (h = void 0, i = [a]), c.rejectWith(h, i));
								}
							};b ? k() : (r.Deferred.getStackHook && (k.stackTrace = r.Deferred.getStackHook()), a.setTimeout(k));
						};
					}return r.Deferred(function (a) {
						c[0][3].add(g(0, a, r.isFunction(e) ? e : M, a.notifyWith)), c[1][3].add(g(0, a, r.isFunction(b) ? b : M)), c[2][3].add(g(0, a, r.isFunction(d) ? d : N));
					}).promise();
				}, promise: function promise(a) {
					return null != a ? r.extend(a, e) : e;
				} },
			    f = {};return r.each(c, function (a, b) {
				var g = b[2],
				    h = b[5];e[b[1]] = g.add, h && g.add(function () {
					d = h;
				}, c[3 - a][2].disable, c[0][2].lock), g.add(b[3].fire), f[b[0]] = function () {
					return f[b[0] + "With"](this === f ? void 0 : this, arguments), this;
				}, f[b[0] + "With"] = g.fireWith;
			}), e.promise(f), b && b.call(f, f), f;
		}, when: function when(a) {
			var b = arguments.length,
			    c = b,
			    d = Array(c),
			    e = f.call(arguments),
			    g = r.Deferred(),
			    h = function h(a) {
				return function (c) {
					d[a] = this, e[a] = arguments.length > 1 ? f.call(arguments) : c, --b || g.resolveWith(d, e);
				};
			};if (1 >= b && (O(a, g.done(h(c)).resolve, g.reject), "pending" === g.state() || r.isFunction(e[c] && e[c].then))) return g.then();while (c--) {
				O(e[c], h(c), g.reject);
			}return g.promise();
		} });var P = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook = function (b, c) {
		a.console && a.console.warn && b && P.test(b.name) && a.console.warn("jQuery.Deferred exception: " + b.message, b.stack, c);
	};var Q = r.Deferred();r.fn.ready = function (a) {
		return Q.then(a), this;
	}, r.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(a) {
			a ? r.readyWait++ : r.ready(!0);
		}, ready: function ready(a) {
			(a === !0 ? --r.readyWait : r.isReady) || (r.isReady = !0, a !== !0 && --r.readyWait > 0 || Q.resolveWith(d, [r]));
		} }), r.ready.then = Q.then;function R() {
		d.removeEventListener("DOMContentLoaded", R), a.removeEventListener("load", R), r.ready();
	}"complete" === d.readyState || "loading" !== d.readyState && !d.documentElement.doScroll ? a.setTimeout(r.ready) : (d.addEventListener("DOMContentLoaded", R), a.addEventListener("load", R));var S = function S(a, b, c, d, e, f, g) {
		var h = 0,
		    i = a.length,
		    j = null == c;if ("object" === r.type(c)) {
			e = !0;for (h in c) {
				S(a, b, h, c[h], !0, f, g);
			}
		} else if (void 0 !== d && (e = !0, r.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function b(a, _b, c) {
			return j.call(r(a), c);
		})), b)) for (; i > h; h++) {
			b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
		}return e ? a : j ? b.call(a) : i ? b(a[0], c) : f;
	},
	    T = function T(a) {
		return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType;
	};function U() {
		this.expando = r.expando + U.uid++;
	}U.uid = 1, U.prototype = { cache: function cache(a) {
			var b = a[this.expando];return b || (b = {}, T(a) && (a.nodeType ? a[this.expando] = b : Object.defineProperty(a, this.expando, { value: b, configurable: !0 }))), b;
		}, set: function set(a, b, c) {
			var d,
			    e = this.cache(a);if ("string" == typeof b) e[r.camelCase(b)] = c;else for (d in b) {
				e[r.camelCase(d)] = b[d];
			}return e;
		}, get: function get(a, b) {
			return void 0 === b ? this.cache(a) : a[this.expando] && a[this.expando][r.camelCase(b)];
		}, access: function access(a, b, c) {
			return void 0 === b || b && "string" == typeof b && void 0 === c ? this.get(a, b) : (this.set(a, b, c), void 0 !== c ? c : b);
		}, remove: function remove(a, b) {
			var c,
			    d = a[this.expando];if (void 0 !== d) {
				if (void 0 !== b) {
					r.isArray(b) ? b = b.map(r.camelCase) : (b = r.camelCase(b), b = b in d ? [b] : b.match(K) || []), c = b.length;while (c--) {
						delete d[b[c]];
					}
				}(void 0 === b || r.isEmptyObject(d)) && (a.nodeType ? a[this.expando] = void 0 : delete a[this.expando]);
			}
		}, hasData: function hasData(a) {
			var b = a[this.expando];return void 0 !== b && !r.isEmptyObject(b);
		} };var V = new U(),
	    W = new U(),
	    X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    Y = /[A-Z]/g;function Z(a, b, c) {
		var d;if (void 0 === c && 1 === a.nodeType) if (d = "data-" + b.replace(Y, "-$&").toLowerCase(), c = a.getAttribute(d), "string" == typeof c) {
			try {
				c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : X.test(c) ? JSON.parse(c) : c;
			} catch (e) {}W.set(a, b, c);
		} else c = void 0;return c;
	}r.extend({ hasData: function hasData(a) {
			return W.hasData(a) || V.hasData(a);
		}, data: function data(a, b, c) {
			return W.access(a, b, c);
		}, removeData: function removeData(a, b) {
			W.remove(a, b);
		}, _data: function _data(a, b, c) {
			return V.access(a, b, c);
		}, _removeData: function _removeData(a, b) {
			V.remove(a, b);
		} }), r.fn.extend({ data: function data(a, b) {
			var c,
			    d,
			    e,
			    f = this[0],
			    g = f && f.attributes;if (void 0 === a) {
				if (this.length && (e = W.get(f), 1 === f.nodeType && !V.get(f, "hasDataAttrs"))) {
					c = g.length;while (c--) {
						g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = r.camelCase(d.slice(5)), Z(f, d, e[d])));
					}V.set(f, "hasDataAttrs", !0);
				}return e;
			}return "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) ? this.each(function () {
				W.set(this, a);
			}) : S(this, function (b) {
				var c;if (f && void 0 === b) {
					if (c = W.get(f, a), void 0 !== c) return c;if (c = Z(f, a), void 0 !== c) return c;
				} else this.each(function () {
					W.set(this, a, b);
				});
			}, null, b, arguments.length > 1, null, !0);
		}, removeData: function removeData(a) {
			return this.each(function () {
				W.remove(this, a);
			});
		} }), r.extend({ queue: function queue(a, b, c) {
			var d;return a ? (b = (b || "fx") + "queue", d = V.get(a, b), c && (!d || r.isArray(c) ? d = V.access(a, b, r.makeArray(c)) : d.push(c)), d || []) : void 0;
		}, dequeue: function dequeue(a, b) {
			b = b || "fx";var c = r.queue(a, b),
			    d = c.length,
			    e = c.shift(),
			    f = r._queueHooks(a, b),
			    g = function g() {
				r.dequeue(a, b);
			};"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire();
		}, _queueHooks: function _queueHooks(a, b) {
			var c = b + "queueHooks";return V.get(a, c) || V.access(a, c, { empty: r.Callbacks("once memory").add(function () {
					V.remove(a, [b + "queue", c]);
				}) });
		} }), r.fn.extend({ queue: function queue(a, b) {
			var c = 2;return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? r.queue(this[0], a) : void 0 === b ? this : this.each(function () {
				var c = r.queue(this, a, b);r._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && r.dequeue(this, a);
			});
		}, dequeue: function dequeue(a) {
			return this.each(function () {
				r.dequeue(this, a);
			});
		}, clearQueue: function clearQueue(a) {
			return this.queue(a || "fx", []);
		}, promise: function promise(a, b) {
			var c,
			    d = 1,
			    e = r.Deferred(),
			    f = this,
			    g = this.length,
			    h = function h() {
				--d || e.resolveWith(f, [f]);
			};"string" != typeof a && (b = a, a = void 0), a = a || "fx";while (g--) {
				c = V.get(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
			}return h(), e.promise(b);
		} });var $ = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
	    _ = new RegExp("^(?:([+-])=|)(" + $ + ")([a-z%]*)$", "i"),
	    aa = ["Top", "Right", "Bottom", "Left"],
	    ba = function ba(a, b) {
		return a = b || a, "none" === a.style.display || "" === a.style.display && r.contains(a.ownerDocument, a) && "none" === r.css(a, "display");
	},
	    ca = function ca(a, b, c, d) {
		var e,
		    f,
		    g = {};for (f in b) {
			g[f] = a.style[f], a.style[f] = b[f];
		}e = c.apply(a, d || []);for (f in b) {
			a.style[f] = g[f];
		}return e;
	};function da(a, b, c, d) {
		var e,
		    f = 1,
		    g = 20,
		    h = d ? function () {
			return d.cur();
		} : function () {
			return r.css(a, b, "");
		},
		    i = h(),
		    j = c && c[3] || (r.cssNumber[b] ? "" : "px"),
		    k = (r.cssNumber[b] || "px" !== j && +i) && _.exec(r.css(a, b));if (k && k[3] !== j) {
			j = j || k[3], c = c || [], k = +i || 1;do {
				f = f || ".5", k /= f, r.style(a, b, k + j);
			} while (f !== (f = h() / i) && 1 !== f && --g);
		}return c && (k = +k || +i || 0, e = c[1] ? k + (c[1] + 1) * c[2] : +c[2], d && (d.unit = j, d.start = k, d.end = e)), e;
	}var ea = {};function fa(a) {
		var b,
		    c = a.ownerDocument,
		    d = a.nodeName,
		    e = ea[d];return e ? e : (b = c.body.appendChild(c.createElement(d)), e = r.css(b, "display"), b.parentNode.removeChild(b), "none" === e && (e = "block"), ea[d] = e, e);
	}function ga(a, b) {
		for (var c, d, e = [], f = 0, g = a.length; g > f; f++) {
			d = a[f], d.style && (c = d.style.display, b ? ("none" === c && (e[f] = V.get(d, "display") || null, e[f] || (d.style.display = "")), "" === d.style.display && ba(d) && (e[f] = fa(d))) : "none" !== c && (e[f] = "none", V.set(d, "display", c)));
		}for (f = 0; g > f; f++) {
			null != e[f] && (a[f].style.display = e[f]);
		}return a;
	}r.fn.extend({ show: function show() {
			return ga(this, !0);
		}, hide: function hide() {
			return ga(this);
		}, toggle: function toggle(a) {
			return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
				ba(this) ? r(this).show() : r(this).hide();
			});
		} });var ha = /^(?:checkbox|radio)$/i,
	    ia = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
	    ja = /^$|\/(?:java|ecma)script/i,
	    ka = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };ka.optgroup = ka.option, ka.tbody = ka.tfoot = ka.colgroup = ka.caption = ka.thead, ka.th = ka.td;function la(a, b) {
		var c = "undefined" != typeof a.getElementsByTagName ? a.getElementsByTagName(b || "*") : "undefined" != typeof a.querySelectorAll ? a.querySelectorAll(b || "*") : [];return void 0 === b || b && r.nodeName(a, b) ? r.merge([a], c) : c;
	}function ma(a, b) {
		for (var c = 0, d = a.length; d > c; c++) {
			V.set(a[c], "globalEval", !b || V.get(b[c], "globalEval"));
		}
	}var na = /<|&#?\w+;/;function oa(a, b, c, d, e) {
		for (var f, g, h, i, j, k, l = b.createDocumentFragment(), m = [], n = 0, o = a.length; o > n; n++) {
			if (f = a[n], f || 0 === f) if ("object" === r.type(f)) r.merge(m, f.nodeType ? [f] : f);else if (na.test(f)) {
				g = g || l.appendChild(b.createElement("div")), h = (ia.exec(f) || ["", ""])[1].toLowerCase(), i = ka[h] || ka._default, g.innerHTML = i[1] + r.htmlPrefilter(f) + i[2], k = i[0];while (k--) {
					g = g.lastChild;
				}r.merge(m, g.childNodes), g = l.firstChild, g.textContent = "";
			} else m.push(b.createTextNode(f));
		}l.textContent = "", n = 0;while (f = m[n++]) {
			if (d && r.inArray(f, d) > -1) e && e.push(f);else if (j = r.contains(f.ownerDocument, f), g = la(l.appendChild(f), "script"), j && ma(g), c) {
				k = 0;while (f = g[k++]) {
					ja.test(f.type || "") && c.push(f);
				}
			}
		}return l;
	}!function () {
		var a = d.createDocumentFragment(),
		    b = a.appendChild(d.createElement("div")),
		    c = d.createElement("input");c.setAttribute("type", "radio"), c.setAttribute("checked", "checked"), c.setAttribute("name", "t"), b.appendChild(c), o.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, b.innerHTML = "<textarea>x</textarea>", o.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue;
	}();var pa = d.documentElement,
	    qa = /^key/,
	    ra = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	    sa = /^([^.]*)(?:\.(.+)|)/;function ta() {
		return !0;
	}function ua() {
		return !1;
	}function va() {
		try {
			return d.activeElement;
		} catch (a) {}
	}function wa(a, b, c, d, e, f) {
		var g, h;if ("object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b))) {
			"string" != typeof c && (d = d || c, c = void 0);for (h in b) {
				wa(a, h, c, d, b[h], f);
			}return a;
		}if (null == d && null == e ? (e = c, d = c = void 0) : null == e && ("string" == typeof c ? (e = d, d = void 0) : (e = d, d = c, c = void 0)), e === !1) e = ua;else if (!e) return a;return 1 === f && (g = e, e = function e(a) {
			return r().off(a), g.apply(this, arguments);
		}, e.guid = g.guid || (g.guid = r.guid++)), a.each(function () {
			r.event.add(this, b, e, d, c);
		});
	}r.event = { global: {}, add: function add(a, b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    n,
			    o,
			    p,
			    q = V.get(a);if (q) {
				c.handler && (f = c, c = f.handler, e = f.selector), e && r.find.matchesSelector(pa, e), c.guid || (c.guid = r.guid++), (i = q.events) || (i = q.events = {}), (g = q.handle) || (g = q.handle = function (b) {
					return "undefined" != typeof r && r.event.triggered !== b.type ? r.event.dispatch.apply(a, arguments) : void 0;
				}), b = (b || "").match(K) || [""], j = b.length;while (j--) {
					h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n && (l = r.event.special[n] || {}, n = (e ? l.delegateType : l.bindType) || n, l = r.event.special[n] || {}, k = r.extend({ type: n, origType: p, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && r.expr.match.needsContext.test(e), namespace: o.join(".") }, f), (m = i[n]) || (m = i[n] = [], m.delegateCount = 0, l.setup && l.setup.call(a, d, o, g) !== !1 || a.addEventListener && a.addEventListener(n, g)), l.add && (l.add.call(a, k), k.handler.guid || (k.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, k) : m.push(k), r.event.global[n] = !0);
				}
			}
		}, remove: function remove(a, b, c, d, e) {
			var f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    n,
			    o,
			    p,
			    q = V.hasData(a) && V.get(a);if (q && (i = q.events)) {
				b = (b || "").match(K) || [""], j = b.length;while (j--) {
					if (h = sa.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
						l = r.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = i[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), g = f = m.length;while (f--) {
							k = m[f], !e && p !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1), k.selector && m.delegateCount--, l.remove && l.remove.call(a, k));
						}g && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || r.removeEvent(a, n, q.handle), delete i[n]);
					} else for (n in i) {
						r.event.remove(a, n + b[j], c, d, !0);
					}
				}r.isEmptyObject(i) && V.remove(a, "handle events");
			}
		}, dispatch: function dispatch(a) {
			var b = r.event.fix(a),
			    c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i = new Array(arguments.length),
			    j = (V.get(this, "events") || {})[b.type] || [],
			    k = r.event.special[b.type] || {};for (i[0] = b, c = 1; c < arguments.length; c++) {
				i[c] = arguments[c];
			}if (b.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, b) !== !1) {
				h = r.event.handlers.call(this, b, j), c = 0;while ((f = h[c++]) && !b.isPropagationStopped()) {
					b.currentTarget = f.elem, d = 0;while ((g = f.handlers[d++]) && !b.isImmediatePropagationStopped()) {
						b.rnamespace && !b.rnamespace.test(g.namespace) || (b.handleObj = g, b.data = g.data, e = ((r.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i), void 0 !== e && (b.result = e) === !1 && (b.preventDefault(), b.stopPropagation()));
					}
				}return k.postDispatch && k.postDispatch.call(this, b), b.result;
			}
		}, handlers: function handlers(a, b) {
			var c,
			    d,
			    e,
			    f,
			    g = [],
			    h = b.delegateCount,
			    i = a.target;if (h && i.nodeType && ("click" !== a.type || isNaN(a.button) || a.button < 1)) for (; i !== this; i = i.parentNode || this) {
				if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
					for (d = [], c = 0; h > c; c++) {
						f = b[c], e = f.selector + " ", void 0 === d[e] && (d[e] = f.needsContext ? r(e, this).index(i) > -1 : r.find(e, this, null, [i]).length), d[e] && d.push(f);
					}d.length && g.push({ elem: i, handlers: d });
				}
			}return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g;
		}, addProp: function addProp(a, b) {
			Object.defineProperty(r.Event.prototype, a, { enumerable: !0, configurable: !0, get: r.isFunction(b) ? function () {
					return this.originalEvent ? b(this.originalEvent) : void 0;
				} : function () {
					return this.originalEvent ? this.originalEvent[a] : void 0;
				}, set: function set(b) {
					Object.defineProperty(this, a, { enumerable: !0, configurable: !0, writable: !0, value: b });
				} });
		}, fix: function fix(a) {
			return a[r.expando] ? a : new r.Event(a);
		}, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
					return this !== va() && this.focus ? (this.focus(), !1) : void 0;
				}, delegateType: "focusin" }, blur: { trigger: function trigger() {
					return this === va() && this.blur ? (this.blur(), !1) : void 0;
				}, delegateType: "focusout" }, click: { trigger: function trigger() {
					return "checkbox" === this.type && this.click && r.nodeName(this, "input") ? (this.click(), !1) : void 0;
				}, _default: function _default(a) {
					return r.nodeName(a.target, "a");
				} }, beforeunload: { postDispatch: function postDispatch(a) {
					void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result);
				} } } }, r.removeEvent = function (a, b, c) {
		a.removeEventListener && a.removeEventListener(b, c);
	}, r.Event = function (a, b) {
		return this instanceof r.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ta : ua, this.target = a.target && 3 === a.target.nodeType ? a.target.parentNode : a.target, this.currentTarget = a.currentTarget, this.relatedTarget = a.relatedTarget) : this.type = a, b && r.extend(this, b), this.timeStamp = a && a.timeStamp || r.now(), void (this[r.expando] = !0)) : new r.Event(a, b);
	}, r.Event.prototype = { constructor: r.Event, isDefaultPrevented: ua, isPropagationStopped: ua, isImmediatePropagationStopped: ua, isSimulated: !1, preventDefault: function preventDefault() {
			var a = this.originalEvent;this.isDefaultPrevented = ta, a && !this.isSimulated && a.preventDefault();
		}, stopPropagation: function stopPropagation() {
			var a = this.originalEvent;this.isPropagationStopped = ta, a && !this.isSimulated && a.stopPropagation();
		}, stopImmediatePropagation: function stopImmediatePropagation() {
			var a = this.originalEvent;this.isImmediatePropagationStopped = ta, a && !this.isSimulated && a.stopImmediatePropagation(), this.stopPropagation();
		} }, r.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, "char": !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function which(a) {
			var b = a.button;return null == a.which && qa.test(a.type) ? null != a.charCode ? a.charCode : a.keyCode : !a.which && void 0 !== b && ra.test(a.type) ? 1 & b ? 1 : 2 & b ? 3 : 4 & b ? 2 : 0 : a.which;
		} }, r.event.addProp), r.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (a, b) {
		r.event.special[a] = { delegateType: b, bindType: b, handle: function handle(a) {
				var c,
				    d = this,
				    e = a.relatedTarget,
				    f = a.handleObj;return e && (e === d || r.contains(d, e)) || (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c;
			} };
	}), r.fn.extend({ on: function on(a, b, c, d) {
			return wa(this, a, b, c, d);
		}, one: function one(a, b, c, d) {
			return wa(this, a, b, c, d, 1);
		}, off: function off(a, b, c) {
			var d, e;if (a && a.preventDefault && a.handleObj) return d = a.handleObj, r(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;if ("object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a))) {
				for (e in a) {
					this.off(e, b, a[e]);
				}return this;
			}return b !== !1 && "function" != typeof b || (c = b, b = void 0), c === !1 && (c = ua), this.each(function () {
				r.event.remove(this, a, c, b);
			});
		} });var xa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
	    ya = /<script|<style|<link/i,
	    za = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    Aa = /^true\/(.*)/,
	    Ba = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ca(a, b) {
		return r.nodeName(a, "table") && r.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a : a;
	}function Da(a) {
		return a.type = (null !== a.getAttribute("type")) + "/" + a.type, a;
	}function Ea(a) {
		var b = Aa.exec(a.type);return b ? a.type = b[1] : a.removeAttribute("type"), a;
	}function Fa(a, b) {
		var c, d, e, f, g, h, i, j;if (1 === b.nodeType) {
			if (V.hasData(a) && (f = V.access(a), g = V.set(b, f), j = f.events)) {
				delete g.handle, g.events = {};for (e in j) {
					for (c = 0, d = j[e].length; d > c; c++) {
						r.event.add(b, e, j[e][c]);
					}
				}
			}W.hasData(a) && (h = W.access(a), i = r.extend({}, h), W.set(b, i));
		}
	}function Ga(a, b) {
		var c = b.nodeName.toLowerCase();"input" === c && ha.test(a.type) ? b.checked = a.checked : "input" !== c && "textarea" !== c || (b.defaultValue = a.defaultValue);
	}function Ha(a, b, c, d) {
		b = g.apply([], b);var e,
		    f,
		    h,
		    i,
		    j,
		    k,
		    l = 0,
		    m = a.length,
		    n = m - 1,
		    q = b[0],
		    s = r.isFunction(q);if (s || m > 1 && "string" == typeof q && !o.checkClone && za.test(q)) return a.each(function (e) {
			var f = a.eq(e);s && (b[0] = q.call(this, e, f.html())), Ha(f, b, c, d);
		});if (m && (e = oa(b, a[0].ownerDocument, !1, a, d), f = e.firstChild, 1 === e.childNodes.length && (e = f), f || d)) {
			for (h = r.map(la(e, "script"), Da), i = h.length; m > l; l++) {
				j = e, l !== n && (j = r.clone(j, !0, !0), i && r.merge(h, la(j, "script"))), c.call(a[l], j, l);
			}if (i) for (k = h[h.length - 1].ownerDocument, r.map(h, Ea), l = 0; i > l; l++) {
				j = h[l], ja.test(j.type || "") && !V.access(j, "globalEval") && r.contains(k, j) && (j.src ? r._evalUrl && r._evalUrl(j.src) : p(j.textContent.replace(Ba, ""), k));
			}
		}return a;
	}function Ia(a, b, c) {
		for (var d, e = b ? r.filter(b, a) : a, f = 0; null != (d = e[f]); f++) {
			c || 1 !== d.nodeType || r.cleanData(la(d)), d.parentNode && (c && r.contains(d.ownerDocument, d) && ma(la(d, "script")), d.parentNode.removeChild(d));
		}return a;
	}r.extend({ htmlPrefilter: function htmlPrefilter(a) {
			return a.replace(xa, "<$1></$2>");
		}, clone: function clone(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h = a.cloneNode(!0),
			    i = r.contains(a.ownerDocument, a);if (!(o.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || r.isXMLDoc(a))) for (g = la(h), f = la(a), d = 0, e = f.length; e > d; d++) {
				Ga(f[d], g[d]);
			}if (b) if (c) for (f = f || la(a), g = g || la(h), d = 0, e = f.length; e > d; d++) {
				Fa(f[d], g[d]);
			} else Fa(a, h);return g = la(h, "script"), g.length > 0 && ma(g, !i && la(a, "script")), h;
		}, cleanData: function cleanData(a) {
			for (var b, c, d, e = r.event.special, f = 0; void 0 !== (c = a[f]); f++) {
				if (T(c)) {
					if (b = c[V.expando]) {
						if (b.events) for (d in b.events) {
							e[d] ? r.event.remove(c, d) : r.removeEvent(c, d, b.handle);
						}c[V.expando] = void 0;
					}c[W.expando] && (c[W.expando] = void 0);
				}
			}
		} }), r.fn.extend({ detach: function detach(a) {
			return Ia(this, a, !0);
		}, remove: function remove(a) {
			return Ia(this, a);
		}, text: function text(a) {
			return S(this, function (a) {
				return void 0 === a ? r.text(this) : this.empty().each(function () {
					1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = a);
				});
			}, null, a, arguments.length);
		}, append: function append() {
			return Ha(this, arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ca(this, a);b.appendChild(a);
				}
			});
		}, prepend: function prepend() {
			return Ha(this, arguments, function (a) {
				if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
					var b = Ca(this, a);b.insertBefore(a, b.firstChild);
				}
			});
		}, before: function before() {
			return Ha(this, arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this);
			});
		}, after: function after() {
			return Ha(this, arguments, function (a) {
				this.parentNode && this.parentNode.insertBefore(a, this.nextSibling);
			});
		}, empty: function empty() {
			for (var a, b = 0; null != (a = this[b]); b++) {
				1 === a.nodeType && (r.cleanData(la(a, !1)), a.textContent = "");
			}return this;
		}, clone: function clone(a, b) {
			return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
				return r.clone(this, a, b);
			});
		}, html: function html(a) {
			return S(this, function (a) {
				var b = this[0] || {},
				    c = 0,
				    d = this.length;if (void 0 === a && 1 === b.nodeType) return b.innerHTML;if ("string" == typeof a && !ya.test(a) && !ka[(ia.exec(a) || ["", ""])[1].toLowerCase()]) {
					a = r.htmlPrefilter(a);try {
						for (; d > c; c++) {
							b = this[c] || {}, 1 === b.nodeType && (r.cleanData(la(b, !1)), b.innerHTML = a);
						}b = 0;
					} catch (e) {}
				}b && this.empty().append(a);
			}, null, a, arguments.length);
		}, replaceWith: function replaceWith() {
			var a = [];return Ha(this, arguments, function (b) {
				var c = this.parentNode;r.inArray(this, a) < 0 && (r.cleanData(la(this)), c && c.replaceChild(b, this));
			}, a);
		} }), r.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (a, b) {
		r.fn[a] = function (a) {
			for (var c, d = [], e = r(a), f = e.length - 1, g = 0; f >= g; g++) {
				c = g === f ? this : this.clone(!0), r(e[g])[b](c), h.apply(d, c.get());
			}return this.pushStack(d);
		};
	});var Ja = /^margin/,
	    Ka = new RegExp("^(" + $ + ")(?!px)[a-z%]+$", "i"),
	    La = function La(b) {
		var c = b.ownerDocument.defaultView;return c && c.opener || (c = a), c.getComputedStyle(b);
	};!function () {
		function b() {
			if (i) {
				i.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", i.innerHTML = "", pa.appendChild(h);var b = a.getComputedStyle(i);c = "1%" !== b.top, g = "2px" === b.marginLeft, e = "4px" === b.width, i.style.marginRight = "50%", f = "4px" === b.marginRight, pa.removeChild(h), i = null;
			}
		}var c,
		    e,
		    f,
		    g,
		    h = d.createElement("div"),
		    i = d.createElement("div");i.style && (i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", o.clearCloneStyle = "content-box" === i.style.backgroundClip, h.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", h.appendChild(i), r.extend(o, { pixelPosition: function pixelPosition() {
				return b(), c;
			}, boxSizingReliable: function boxSizingReliable() {
				return b(), e;
			}, pixelMarginRight: function pixelMarginRight() {
				return b(), f;
			}, reliableMarginLeft: function reliableMarginLeft() {
				return b(), g;
			} }));
	}();function Ma(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.style;return c = c || La(a), c && (g = c.getPropertyValue(b) || c[b], "" !== g || r.contains(a.ownerDocument, a) || (g = r.style(a, b)), !o.pixelMarginRight() && Ka.test(g) && Ja.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 !== g ? g + "" : g;
	}function Na(a, b) {
		return { get: function get() {
				return a() ? void delete this.get : (this.get = b).apply(this, arguments);
			} };
	}var Oa = /^(none|table(?!-c[ea]).+)/,
	    Pa = { position: "absolute", visibility: "hidden", display: "block" },
	    Qa = { letterSpacing: "0", fontWeight: "400" },
	    Ra = ["Webkit", "Moz", "ms"],
	    Sa = d.createElement("div").style;function Ta(a) {
		if (a in Sa) return a;var b = a[0].toUpperCase() + a.slice(1),
		    c = Ra.length;while (c--) {
			if (a = Ra[c] + b, a in Sa) return a;
		}
	}function Ua(a, b, c) {
		var d = _.exec(b);return d ? Math.max(0, d[2] - (c || 0)) + (d[3] || "px") : b;
	}function Va(a, b, c, d, e) {
		for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) {
			"margin" === c && (g += r.css(a, c + aa[f], !0, e)), d ? ("content" === c && (g -= r.css(a, "padding" + aa[f], !0, e)), "margin" !== c && (g -= r.css(a, "border" + aa[f] + "Width", !0, e))) : (g += r.css(a, "padding" + aa[f], !0, e), "padding" !== c && (g += r.css(a, "border" + aa[f] + "Width", !0, e)));
		}return g;
	}function Wa(a, b, c) {
		var d,
		    e = !0,
		    f = La(a),
		    g = "border-box" === r.css(a, "boxSizing", !1, f);if (a.getClientRects().length && (d = a.getBoundingClientRect()[b]), 0 >= d || null == d) {
			if (d = Ma(a, b, f), (0 > d || null == d) && (d = a.style[b]), Ka.test(d)) return d;e = g && (o.boxSizingReliable() || d === a.style[b]), d = parseFloat(d) || 0;
		}return d + Va(a, b, c || (g ? "border" : "content"), e, f) + "px";
	}r.extend({ cssHooks: { opacity: { get: function get(a, b) {
					if (b) {
						var c = Ma(a, "opacity");return "" === c ? "1" : c;
					}
				} } }, cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { "float": "cssFloat" }, style: function style(a, b, c, d) {
			if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
				var e,
				    f,
				    g,
				    h = r.camelCase(b),
				    i = a.style;return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], void 0 === c ? g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c === 'undefined' ? 'undefined' : _typeof(c), "string" === f && (e = _.exec(c)) && e[1] && (c = da(a, b, e), f = "number"), null != c && c === c && ("number" === f && (c += e && e[3] || (r.cssNumber[h] ? "" : "px")), o.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), g && "set" in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)), void 0);
			}
		}, css: function css(a, b, c, d) {
			var e,
			    f,
			    g,
			    h = r.camelCase(b);return b = r.cssProps[h] || (r.cssProps[h] = Ta(h) || h), g = r.cssHooks[b] || r.cssHooks[h], g && "get" in g && (e = g.get(a, !0, c)), void 0 === e && (e = Ma(a, b, d)), "normal" === e && b in Qa && (e = Qa[b]), "" === c || c ? (f = parseFloat(e), c === !0 || isFinite(f) ? f || 0 : e) : e;
		} }), r.each(["height", "width"], function (a, b) {
		r.cssHooks[b] = { get: function get(a, c, d) {
				return c ? !Oa.test(r.css(a, "display")) || a.getClientRects().length && a.getBoundingClientRect().width ? Wa(a, b, d) : ca(a, Pa, function () {
					return Wa(a, b, d);
				}) : void 0;
			}, set: function set(a, c, d) {
				var e,
				    f = d && La(a),
				    g = d && Va(a, b, d, "border-box" === r.css(a, "boxSizing", !1, f), f);return g && (e = _.exec(c)) && "px" !== (e[3] || "px") && (a.style[b] = c, c = r.css(a, b)), Ua(a, c, g);
			} };
	}), r.cssHooks.marginLeft = Na(o.reliableMarginLeft, function (a, b) {
		return b ? (parseFloat(Ma(a, "marginLeft")) || a.getBoundingClientRect().left - ca(a, { marginLeft: 0 }, function () {
			return a.getBoundingClientRect().left;
		})) + "px" : void 0;
	}), r.each({ margin: "", padding: "", border: "Width" }, function (a, b) {
		r.cssHooks[a + b] = { expand: function expand(c) {
				for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) {
					e[a + aa[d] + b] = f[d] || f[d - 2] || f[0];
				}return e;
			} }, Ja.test(a) || (r.cssHooks[a + b].set = Ua);
	}), r.fn.extend({ css: function css(a, b) {
			return S(this, function (a, b, c) {
				var d,
				    e,
				    f = {},
				    g = 0;if (r.isArray(b)) {
					for (d = La(a), e = b.length; e > g; g++) {
						f[b[g]] = r.css(a, b[g], !1, d);
					}return f;
				}return void 0 !== c ? r.style(a, b, c) : r.css(a, b);
			}, a, b, arguments.length > 1);
		} });function Xa(a, b, c, d, e) {
		return new Xa.prototype.init(a, b, c, d, e);
	}r.Tween = Xa, Xa.prototype = { constructor: Xa, init: function init(a, b, c, d, e, f) {
			this.elem = a, this.prop = c, this.easing = e || r.easing._default, this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (r.cssNumber[c] ? "" : "px");
		}, cur: function cur() {
			var a = Xa.propHooks[this.prop];return a && a.get ? a.get(this) : Xa.propHooks._default.get(this);
		}, run: function run(a) {
			var b,
			    c = Xa.propHooks[this.prop];return this.options.duration ? this.pos = b = r.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Xa.propHooks._default.set(this), this;
		} }, Xa.prototype.init.prototype = Xa.prototype, Xa.propHooks = { _default: { get: function get(a) {
				var b;return 1 !== a.elem.nodeType || null != a.elem[a.prop] && null == a.elem.style[a.prop] ? a.elem[a.prop] : (b = r.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0);
			}, set: function set(a) {
				r.fx.step[a.prop] ? r.fx.step[a.prop](a) : 1 !== a.elem.nodeType || null == a.elem.style[r.cssProps[a.prop]] && !r.cssHooks[a.prop] ? a.elem[a.prop] = a.now : r.style(a.elem, a.prop, a.now + a.unit);
			} } }, Xa.propHooks.scrollTop = Xa.propHooks.scrollLeft = { set: function set(a) {
			a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now);
		} }, r.easing = { linear: function linear(a) {
			return a;
		}, swing: function swing(a) {
			return .5 - Math.cos(a * Math.PI) / 2;
		}, _default: "swing" }, r.fx = Xa.prototype.init, r.fx.step = {};var Ya,
	    Za,
	    $a = /^(?:toggle|show|hide)$/,
	    _a = /queueHooks$/;function ab() {
		Za && (a.requestAnimationFrame(ab), r.fx.tick());
	}function bb() {
		return a.setTimeout(function () {
			Ya = void 0;
		}), Ya = r.now();
	}function cb(a, b) {
		var c,
		    d = 0,
		    e = { height: a };for (b = b ? 1 : 0; 4 > d; d += 2 - b) {
			c = aa[d], e["margin" + c] = e["padding" + c] = a;
		}return b && (e.opacity = e.width = a), e;
	}function db(a, b, c) {
		for (var d, e = (gb.tweeners[b] || []).concat(gb.tweeners["*"]), f = 0, g = e.length; g > f; f++) {
			if (d = e[f].call(c, b, a)) return d;
		}
	}function eb(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h,
		    i,
		    j,
		    k,
		    l = "width" in b || "height" in b,
		    m = this,
		    n = {},
		    o = a.style,
		    p = a.nodeType && ba(a),
		    q = V.get(a, "fxshow");c.queue || (g = r._queueHooks(a, "fx"), null == g.unqueued && (g.unqueued = 0, h = g.empty.fire, g.empty.fire = function () {
			g.unqueued || h();
		}), g.unqueued++, m.always(function () {
			m.always(function () {
				g.unqueued--, r.queue(a, "fx").length || g.empty.fire();
			});
		}));for (d in b) {
			if (e = b[d], $a.test(e)) {
				if (delete b[d], f = f || "toggle" === e, e === (p ? "hide" : "show")) {
					if ("show" !== e || !q || void 0 === q[d]) continue;p = !0;
				}n[d] = q && q[d] || r.style(a, d);
			}
		}if (i = !r.isEmptyObject(b), i || !r.isEmptyObject(n)) {
			l && 1 === a.nodeType && (c.overflow = [o.overflow, o.overflowX, o.overflowY], j = q && q.display, null == j && (j = V.get(a, "display")), k = r.css(a, "display"), "none" === k && (j ? k = j : (ga([a], !0), j = a.style.display || j, k = r.css(a, "display"), ga([a]))), ("inline" === k || "inline-block" === k && null != j) && "none" === r.css(a, "float") && (i || (m.done(function () {
				o.display = j;
			}), null == j && (k = o.display, j = "none" === k ? "" : k)), o.display = "inline-block")), c.overflow && (o.overflow = "hidden", m.always(function () {
				o.overflow = c.overflow[0], o.overflowX = c.overflow[1], o.overflowY = c.overflow[2];
			})), i = !1;for (d in n) {
				i || (q ? "hidden" in q && (p = q.hidden) : q = V.access(a, "fxshow", { display: j }), f && (q.hidden = !p), p && ga([a], !0), m.done(function () {
					p || ga([a]), V.remove(a, "fxshow");for (d in n) {
						r.style(a, d, n[d]);
					}
				})), i = db(p ? q[d] : 0, d, m), d in q || (q[d] = i.start, p && (i.end = i.start, i.start = 0));
			}
		}
	}function fb(a, b) {
		var c, d, e, f, g;for (c in a) {
			if (d = r.camelCase(c), e = b[d], f = a[c], r.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = r.cssHooks[d], g && "expand" in g) {
				f = g.expand(f), delete a[d];for (c in f) {
					c in a || (a[c] = f[c], b[c] = e);
				}
			} else b[d] = e;
		}
	}function gb(a, b, c) {
		var d,
		    e,
		    f = 0,
		    g = gb.prefilters.length,
		    h = r.Deferred().always(function () {
			delete i.elem;
		}),
		    i = function i() {
			if (e) return !1;for (var b = Ya || bb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) {
				j.tweens[g].run(f);
			}return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1);
		},
		    j = h.promise({ elem: a, props: r.extend({}, b), opts: r.extend(!0, { specialEasing: {}, easing: r.easing._default }, c), originalProperties: b, originalOptions: c, startTime: Ya || bb(), duration: c.duration, tweens: [], createTween: function createTween(b, c) {
				var d = r.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);return j.tweens.push(d), d;
			}, stop: function stop(b) {
				var c = 0,
				    d = b ? j.tweens.length : 0;if (e) return this;for (e = !0; d > c; c++) {
					j.tweens[c].run(1);
				}return b ? (h.notifyWith(a, [j, 1, 0]), h.resolveWith(a, [j, b])) : h.rejectWith(a, [j, b]), this;
			} }),
		    k = j.props;for (fb(k, j.opts.specialEasing); g > f; f++) {
			if (d = gb.prefilters[f].call(j, a, k, j.opts)) return r.isFunction(d.stop) && (r._queueHooks(j.elem, j.opts.queue).stop = r.proxy(d.stop, d)), d;
		}return r.map(k, db, j), r.isFunction(j.opts.start) && j.opts.start.call(a, j), r.fx.timer(r.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always);
	}r.Animation = r.extend(gb, { tweeners: { "*": [function (a, b) {
				var c = this.createTween(a, b);return da(c.elem, a, _.exec(b), c), c;
			}] }, tweener: function tweener(a, b) {
			r.isFunction(a) ? (b = a, a = ["*"]) : a = a.match(K);for (var c, d = 0, e = a.length; e > d; d++) {
				c = a[d], gb.tweeners[c] = gb.tweeners[c] || [], gb.tweeners[c].unshift(b);
			}
		}, prefilters: [eb], prefilter: function prefilter(a, b) {
			b ? gb.prefilters.unshift(a) : gb.prefilters.push(a);
		} }), r.speed = function (a, b, c) {
		var e = a && "object" == (typeof a === 'undefined' ? 'undefined' : _typeof(a)) ? r.extend({}, a) : { complete: c || !c && b || r.isFunction(a) && a, duration: a, easing: c && b || b && !r.isFunction(b) && b };return r.fx.off || d.hidden ? e.duration = 0 : e.duration = "number" == typeof e.duration ? e.duration : e.duration in r.fx.speeds ? r.fx.speeds[e.duration] : r.fx.speeds._default, null != e.queue && e.queue !== !0 || (e.queue = "fx"), e.old = e.complete, e.complete = function () {
			r.isFunction(e.old) && e.old.call(this), e.queue && r.dequeue(this, e.queue);
		}, e;
	}, r.fn.extend({ fadeTo: function fadeTo(a, b, c, d) {
			return this.filter(ba).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d);
		}, animate: function animate(a, b, c, d) {
			var e = r.isEmptyObject(a),
			    f = r.speed(b, c, d),
			    g = function g() {
				var b = gb(this, r.extend({}, a), f);(e || V.get(this, "finish")) && b.stop(!0);
			};return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g);
		}, stop: function stop(a, b, c) {
			var d = function d(a) {
				var b = a.stop;delete a.stop, b(c);
			};return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
				var b = !0,
				    e = null != a && a + "queueHooks",
				    f = r.timers,
				    g = V.get(this);if (e) g[e] && g[e].stop && d(g[e]);else for (e in g) {
					g[e] && g[e].stop && _a.test(e) && d(g[e]);
				}for (e = f.length; e--;) {
					f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
				}!b && c || r.dequeue(this, a);
			});
		}, finish: function finish(a) {
			return a !== !1 && (a = a || "fx"), this.each(function () {
				var b,
				    c = V.get(this),
				    d = c[a + "queue"],
				    e = c[a + "queueHooks"],
				    f = r.timers,
				    g = d ? d.length : 0;for (c.finish = !0, r.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) {
					f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
				}for (b = 0; g > b; b++) {
					d[b] && d[b].finish && d[b].finish.call(this);
				}delete c.finish;
			});
		} }), r.each(["toggle", "show", "hide"], function (a, b) {
		var c = r.fn[b];r.fn[b] = function (a, d, e) {
			return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(cb(b, !0), a, d, e);
		};
	}), r.each({ slideDown: cb("show"), slideUp: cb("hide"), slideToggle: cb("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (a, b) {
		r.fn[a] = function (a, c, d) {
			return this.animate(b, a, c, d);
		};
	}), r.timers = [], r.fx.tick = function () {
		var a,
		    b = 0,
		    c = r.timers;for (Ya = r.now(); b < c.length; b++) {
			a = c[b], a() || c[b] !== a || c.splice(b--, 1);
		}c.length || r.fx.stop(), Ya = void 0;
	}, r.fx.timer = function (a) {
		r.timers.push(a), a() ? r.fx.start() : r.timers.pop();
	}, r.fx.interval = 13, r.fx.start = function () {
		Za || (Za = a.requestAnimationFrame ? a.requestAnimationFrame(ab) : a.setInterval(r.fx.tick, r.fx.interval));
	}, r.fx.stop = function () {
		a.cancelAnimationFrame ? a.cancelAnimationFrame(Za) : a.clearInterval(Za), Za = null;
	}, r.fx.speeds = { slow: 600, fast: 200, _default: 400 }, r.fn.delay = function (b, c) {
		return b = r.fx ? r.fx.speeds[b] || b : b, c = c || "fx", this.queue(c, function (c, d) {
			var e = a.setTimeout(c, b);d.stop = function () {
				a.clearTimeout(e);
			};
		});
	}, function () {
		var a = d.createElement("input"),
		    b = d.createElement("select"),
		    c = b.appendChild(d.createElement("option"));a.type = "checkbox", o.checkOn = "" !== a.value, o.optSelected = c.selected, a = d.createElement("input"), a.value = "t", a.type = "radio", o.radioValue = "t" === a.value;
	}();var hb,
	    ib = r.expr.attrHandle;r.fn.extend({ attr: function attr(a, b) {
			return S(this, r.attr, a, b, arguments.length > 1);
		}, removeAttr: function removeAttr(a) {
			return this.each(function () {
				r.removeAttr(this, a);
			});
		} }), r.extend({ attr: function attr(a, b, c) {
			var d,
			    e,
			    f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return "undefined" == typeof a.getAttribute ? r.prop(a, b, c) : (1 === f && r.isXMLDoc(a) || (e = r.attrHooks[b.toLowerCase()] || (r.expr.match.bool.test(b) ? hb : void 0)), void 0 !== c ? null === c ? void r.removeAttr(a, b) : e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : (a.setAttribute(b, c + ""), c) : e && "get" in e && null !== (d = e.get(a, b)) ? d : (d = r.find.attr(a, b), null == d ? void 0 : d));
		}, attrHooks: { type: { set: function set(a, b) {
					if (!o.radioValue && "radio" === b && r.nodeName(a, "input")) {
						var c = a.value;return a.setAttribute("type", b), c && (a.value = c), b;
					}
				} } }, removeAttr: function removeAttr(a, b) {
			var c,
			    d = 0,
			    e = b && b.match(K);if (e && 1 === a.nodeType) while (c = e[d++]) {
				a.removeAttribute(c);
			}
		} }), hb = { set: function set(a, b, c) {
			return b === !1 ? r.removeAttr(a, c) : a.setAttribute(c, c), c;
		} }, r.each(r.expr.match.bool.source.match(/\w+/g), function (a, b) {
		var c = ib[b] || r.find.attr;ib[b] = function (a, b, d) {
			var e,
			    f,
			    g = b.toLowerCase();return d || (f = ib[g], ib[g] = e, e = null != c(a, b, d) ? g : null, ib[g] = f), e;
		};
	});var jb = /^(?:input|select|textarea|button)$/i,
	    kb = /^(?:a|area)$/i;r.fn.extend({ prop: function prop(a, b) {
			return S(this, r.prop, a, b, arguments.length > 1);
		}, removeProp: function removeProp(a) {
			return this.each(function () {
				delete this[r.propFix[a] || a];
			});
		} }), r.extend({ prop: function prop(a, b, c) {
			var d,
			    e,
			    f = a.nodeType;if (3 !== f && 8 !== f && 2 !== f) return 1 === f && r.isXMLDoc(a) || (b = r.propFix[b] || b, e = r.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b];
		}, propHooks: { tabIndex: { get: function get(a) {
					var b = r.find.attr(a, "tabindex");return b ? parseInt(b, 10) : jb.test(a.nodeName) || kb.test(a.nodeName) && a.href ? 0 : -1;
				} } }, propFix: { "for": "htmlFor", "class": "className" } }), o.optSelected || (r.propHooks.selected = { get: function get(a) {
			var b = a.parentNode;return b && b.parentNode && b.parentNode.selectedIndex, null;
		}, set: function set(a) {
			var b = a.parentNode;b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex);
		} }), r.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		r.propFix[this.toLowerCase()] = this;
	});var lb = /[\t\r\n\f]/g;function mb(a) {
		return a.getAttribute && a.getAttribute("class") || "";
	}r.fn.extend({ addClass: function addClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i = 0;if (r.isFunction(a)) return this.each(function (b) {
				r(this).addClass(a.call(this, b, mb(this)));
			});if ("string" == typeof a && a) {
				b = a.match(K) || [];while (c = this[i++]) {
					if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
						g = 0;while (f = b[g++]) {
							d.indexOf(" " + f + " ") < 0 && (d += f + " ");
						}h = r.trim(d), e !== h && c.setAttribute("class", h);
					}
				}
			}return this;
		}, removeClass: function removeClass(a) {
			var b,
			    c,
			    d,
			    e,
			    f,
			    g,
			    h,
			    i = 0;if (r.isFunction(a)) return this.each(function (b) {
				r(this).removeClass(a.call(this, b, mb(this)));
			});if (!arguments.length) return this.attr("class", "");if ("string" == typeof a && a) {
				b = a.match(K) || [];while (c = this[i++]) {
					if (e = mb(c), d = 1 === c.nodeType && (" " + e + " ").replace(lb, " ")) {
						g = 0;while (f = b[g++]) {
							while (d.indexOf(" " + f + " ") > -1) {
								d = d.replace(" " + f + " ", " ");
							}
						}h = r.trim(d), e !== h && c.setAttribute("class", h);
					}
				}
			}return this;
		}, toggleClass: function toggleClass(a, b) {
			var c = typeof a === 'undefined' ? 'undefined' : _typeof(a);return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : r.isFunction(a) ? this.each(function (c) {
				r(this).toggleClass(a.call(this, c, mb(this), b), b);
			}) : this.each(function () {
				var b, d, e, f;if ("string" === c) {
					d = 0, e = r(this), f = a.match(K) || [];while (b = f[d++]) {
						e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
					}
				} else void 0 !== a && "boolean" !== c || (b = mb(this), b && V.set(this, "__className__", b), this.setAttribute && this.setAttribute("class", b || a === !1 ? "" : V.get(this, "__className__") || ""));
			});
		}, hasClass: function hasClass(a) {
			var b,
			    c,
			    d = 0;b = " " + a + " ";while (c = this[d++]) {
				if (1 === c.nodeType && (" " + mb(c) + " ").replace(lb, " ").indexOf(b) > -1) return !0;
			}return !1;
		} });var nb = /\r/g,
	    ob = /[\x20\t\r\n\f]+/g;r.fn.extend({ val: function val(a) {
			var b,
			    c,
			    d,
			    e = this[0];{
				if (arguments.length) return d = r.isFunction(a), this.each(function (c) {
					var e;1 === this.nodeType && (e = d ? a.call(this, c, r(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : r.isArray(e) && (e = r.map(e, function (a) {
						return null == a ? "" : a + "";
					})), b = r.valHooks[this.type] || r.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e));
				});if (e) return b = r.valHooks[e.type] || r.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(nb, "") : null == c ? "" : c);
			}
		} }), r.extend({ valHooks: { option: { get: function get(a) {
					var b = r.find.attr(a, "value");return null != b ? b : r.trim(r.text(a)).replace(ob, " ");
				} }, select: { get: function get(a) {
					for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++) {
						if (c = d[i], (c.selected || i === e) && !c.disabled && (!c.parentNode.disabled || !r.nodeName(c.parentNode, "optgroup"))) {
							if (b = r(c).val(), f) return b;g.push(b);
						}
					}return g;
				}, set: function set(a, b) {
					var c,
					    d,
					    e = a.options,
					    f = r.makeArray(b),
					    g = e.length;while (g--) {
						d = e[g], (d.selected = r.inArray(r.valHooks.option.get(d), f) > -1) && (c = !0);
					}return c || (a.selectedIndex = -1), f;
				} } } }), r.each(["radio", "checkbox"], function () {
		r.valHooks[this] = { set: function set(a, b) {
				return r.isArray(b) ? a.checked = r.inArray(r(a).val(), b) > -1 : void 0;
			} }, o.checkOn || (r.valHooks[this].get = function (a) {
			return null === a.getAttribute("value") ? "on" : a.value;
		});
	});var pb = /^(?:focusinfocus|focusoutblur)$/;r.extend(r.event, { trigger: function trigger(b, c, e, f) {
			var g,
			    h,
			    i,
			    j,
			    k,
			    m,
			    n,
			    o = [e || d],
			    p = l.call(b, "type") ? b.type : b,
			    q = l.call(b, "namespace") ? b.namespace.split(".") : [];if (h = i = e = e || d, 3 !== e.nodeType && 8 !== e.nodeType && !pb.test(p + r.event.triggered) && (p.indexOf(".") > -1 && (q = p.split("."), p = q.shift(), q.sort()), k = p.indexOf(":") < 0 && "on" + p, b = b[r.expando] ? b : new r.Event(p, "object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && b), b.isTrigger = f ? 2 : 3, b.namespace = q.join("."), b.rnamespace = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = e), c = null == c ? [b] : r.makeArray(c, [b]), n = r.event.special[p] || {}, f || !n.trigger || n.trigger.apply(e, c) !== !1)) {
				if (!f && !n.noBubble && !r.isWindow(e)) {
					for (j = n.delegateType || p, pb.test(j + p) || (h = h.parentNode); h; h = h.parentNode) {
						o.push(h), i = h;
					}i === (e.ownerDocument || d) && o.push(i.defaultView || i.parentWindow || a);
				}g = 0;while ((h = o[g++]) && !b.isPropagationStopped()) {
					b.type = g > 1 ? j : n.bindType || p, m = (V.get(h, "events") || {})[b.type] && V.get(h, "handle"), m && m.apply(h, c), m = k && h[k], m && m.apply && T(h) && (b.result = m.apply(h, c), b.result === !1 && b.preventDefault());
				}return b.type = p, f || b.isDefaultPrevented() || n._default && n._default.apply(o.pop(), c) !== !1 || !T(e) || k && r.isFunction(e[p]) && !r.isWindow(e) && (i = e[k], i && (e[k] = null), r.event.triggered = p, e[p](), r.event.triggered = void 0, i && (e[k] = i)), b.result;
			}
		}, simulate: function simulate(a, b, c) {
			var d = r.extend(new r.Event(), c, { type: a, isSimulated: !0 });r.event.trigger(d, null, b);
		} }), r.fn.extend({ trigger: function trigger(a, b) {
			return this.each(function () {
				r.event.trigger(a, b, this);
			});
		}, triggerHandler: function triggerHandler(a, b) {
			var c = this[0];return c ? r.event.trigger(a, b, c, !0) : void 0;
		} }), r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (a, b) {
		r.fn[b] = function (a, c) {
			return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b);
		};
	}), r.fn.extend({ hover: function hover(a, b) {
			return this.mouseenter(a).mouseleave(b || a);
		} }), o.focusin = "onfocusin" in a, o.focusin || r.each({ focus: "focusin", blur: "focusout" }, function (a, b) {
		var c = function c(a) {
			r.event.simulate(b, a.target, r.event.fix(a));
		};r.event.special[b] = { setup: function setup() {
				var d = this.ownerDocument || this,
				    e = V.access(d, b);e || d.addEventListener(a, c, !0), V.access(d, b, (e || 0) + 1);
			}, teardown: function teardown() {
				var d = this.ownerDocument || this,
				    e = V.access(d, b) - 1;e ? V.access(d, b, e) : (d.removeEventListener(a, c, !0), V.remove(d, b));
			} };
	});var qb = a.location,
	    rb = r.now(),
	    sb = /\?/;r.parseXML = function (b) {
		var c;if (!b || "string" != typeof b) return null;try {
			c = new a.DOMParser().parseFromString(b, "text/xml");
		} catch (d) {
			c = void 0;
		}return c && !c.getElementsByTagName("parsererror").length || r.error("Invalid XML: " + b), c;
	};var tb = /\[\]$/,
	    ub = /\r?\n/g,
	    vb = /^(?:submit|button|image|reset|file)$/i,
	    wb = /^(?:input|select|textarea|keygen)/i;function xb(a, b, c, d) {
		var e;if (r.isArray(b)) r.each(b, function (b, e) {
			c || tb.test(a) ? d(a, e) : xb(a + "[" + ("object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) && null != e ? b : "") + "]", e, c, d);
		});else if (c || "object" !== r.type(b)) d(a, b);else for (e in b) {
			xb(a + "[" + e + "]", b[e], c, d);
		}
	}r.param = function (a, b) {
		var c,
		    d = [],
		    e = function e(a, b) {
			var c = r.isFunction(b) ? b() : b;d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(null == c ? "" : c);
		};if (r.isArray(a) || a.jquery && !r.isPlainObject(a)) r.each(a, function () {
			e(this.name, this.value);
		});else for (c in a) {
			xb(c, a[c], b, e);
		}return d.join("&");
	}, r.fn.extend({ serialize: function serialize() {
			return r.param(this.serializeArray());
		}, serializeArray: function serializeArray() {
			return this.map(function () {
				var a = r.prop(this, "elements");return a ? r.makeArray(a) : this;
			}).filter(function () {
				var a = this.type;return this.name && !r(this).is(":disabled") && wb.test(this.nodeName) && !vb.test(a) && (this.checked || !ha.test(a));
			}).map(function (a, b) {
				var c = r(this).val();return null == c ? null : r.isArray(c) ? r.map(c, function (a) {
					return { name: b.name, value: a.replace(ub, "\r\n") };
				}) : { name: b.name, value: c.replace(ub, "\r\n") };
			}).get();
		} });var yb = /%20/g,
	    zb = /#.*$/,
	    Ab = /([?&])_=[^&]*/,
	    Bb = /^(.*?):[ \t]*([^\r\n]*)$/gm,
	    Cb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    Db = /^(?:GET|HEAD)$/,
	    Eb = /^\/\//,
	    Fb = {},
	    Gb = {},
	    Hb = "*/".concat("*"),
	    Ib = d.createElement("a");Ib.href = qb.href;function Jb(a) {
		return function (b, c) {
			"string" != typeof b && (c = b, b = "*");var d,
			    e = 0,
			    f = b.toLowerCase().match(K) || [];if (r.isFunction(c)) while (d = f[e++]) {
				"+" === d[0] ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c);
			}
		};
	}function Kb(a, b, c, d) {
		var e = {},
		    f = a === Gb;function g(h) {
			var i;return e[h] = !0, r.each(a[h] || [], function (a, h) {
				var j = h(b, c, d);return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1);
			}), i;
		}return g(b.dataTypes[0]) || !e["*"] && g("*");
	}function Lb(a, b) {
		var c,
		    d,
		    e = r.ajaxSettings.flatOptions || {};for (c in b) {
			void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
		}return d && r.extend(!0, a, d), a;
	}function Mb(a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    h = a.contents,
		    i = a.dataTypes;while ("*" === i[0]) {
			i.shift(), void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
		}if (d) for (e in h) {
			if (h[e] && h[e].test(d)) {
				i.unshift(e);break;
			}
		}if (i[0] in c) f = i[0];else {
			for (e in c) {
				if (!i[0] || a.converters[e + " " + i[0]]) {
					f = e;break;
				}g || (g = e);
			}f = f || g;
		}return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0;
	}function Nb(a, b, c, d) {
		var e,
		    f,
		    g,
		    h,
		    i,
		    j = {},
		    k = a.dataTypes.slice();if (k[1]) for (g in a.converters) {
			j[g.toLowerCase()] = a.converters[g];
		}f = k.shift();while (f) {
			if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift()) if ("*" === f) f = i;else if ("*" !== i && i !== f) {
				if (g = j[i + " " + f] || j["* " + f], !g) for (e in j) {
					if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
						g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));break;
					}
				}if (g !== !0) if (g && a["throws"]) b = g(b);else try {
					b = g(b);
				} catch (l) {
					return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f };
				}
			}
		}return { state: "success", data: b };
	}r.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: qb.href, type: "GET", isLocal: Cb.test(qb.protocol), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Hb, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": JSON.parse, "text xml": r.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(a, b) {
			return b ? Lb(Lb(a, r.ajaxSettings), b) : Lb(r.ajaxSettings, a);
		}, ajaxPrefilter: Jb(Fb), ajaxTransport: Jb(Gb), ajax: function ajax(b, c) {
			"object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && (c = b, b = void 0), c = c || {};var e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k,
			    l,
			    m,
			    n,
			    o = r.ajaxSetup({}, c),
			    p = o.context || o,
			    q = o.context && (p.nodeType || p.jquery) ? r(p) : r.event,
			    s = r.Deferred(),
			    t = r.Callbacks("once memory"),
			    u = o.statusCode || {},
			    v = {},
			    w = {},
			    x = "canceled",
			    y = { readyState: 0, getResponseHeader: function getResponseHeader(a) {
					var b;if (k) {
						if (!h) {
							h = {};while (b = Bb.exec(g)) {
								h[b[1].toLowerCase()] = b[2];
							}
						}b = h[a.toLowerCase()];
					}return null == b ? null : b;
				}, getAllResponseHeaders: function getAllResponseHeaders() {
					return k ? g : null;
				}, setRequestHeader: function setRequestHeader(a, b) {
					return null == k && (a = w[a.toLowerCase()] = w[a.toLowerCase()] || a, v[a] = b), this;
				}, overrideMimeType: function overrideMimeType(a) {
					return null == k && (o.mimeType = a), this;
				}, statusCode: function statusCode(a) {
					var b;if (a) if (k) y.always(a[y.status]);else for (b in a) {
						u[b] = [u[b], a[b]];
					}return this;
				}, abort: function abort(a) {
					var b = a || x;return e && e.abort(b), A(0, b), this;
				} };if (s.promise(y), o.url = ((b || o.url || qb.href) + "").replace(Eb, qb.protocol + "//"), o.type = c.method || c.type || o.method || o.type, o.dataTypes = (o.dataType || "*").toLowerCase().match(K) || [""], null == o.crossDomain) {
				j = d.createElement("a");try {
					j.href = o.url, j.href = j.href, o.crossDomain = Ib.protocol + "//" + Ib.host != j.protocol + "//" + j.host;
				} catch (z) {
					o.crossDomain = !0;
				}
			}if (o.data && o.processData && "string" != typeof o.data && (o.data = r.param(o.data, o.traditional)), Kb(Fb, o, c, y), k) return y;l = r.event && o.global, l && 0 === r.active++ && r.event.trigger("ajaxStart"), o.type = o.type.toUpperCase(), o.hasContent = !Db.test(o.type), f = o.url.replace(zb, ""), o.hasContent ? o.data && o.processData && 0 === (o.contentType || "").indexOf("application/x-www-form-urlencoded") && (o.data = o.data.replace(yb, "+")) : (n = o.url.slice(f.length), o.data && (f += (sb.test(f) ? "&" : "?") + o.data, delete o.data), o.cache === !1 && (f = f.replace(Ab, ""), n = (sb.test(f) ? "&" : "?") + "_=" + rb++ + n), o.url = f + n), o.ifModified && (r.lastModified[f] && y.setRequestHeader("If-Modified-Since", r.lastModified[f]), r.etag[f] && y.setRequestHeader("If-None-Match", r.etag[f])), (o.data && o.hasContent && o.contentType !== !1 || c.contentType) && y.setRequestHeader("Content-Type", o.contentType), y.setRequestHeader("Accept", o.dataTypes[0] && o.accepts[o.dataTypes[0]] ? o.accepts[o.dataTypes[0]] + ("*" !== o.dataTypes[0] ? ", " + Hb + "; q=0.01" : "") : o.accepts["*"]);for (m in o.headers) {
				y.setRequestHeader(m, o.headers[m]);
			}if (o.beforeSend && (o.beforeSend.call(p, y, o) === !1 || k)) return y.abort();if (x = "abort", t.add(o.complete), y.done(o.success), y.fail(o.error), e = Kb(Gb, o, c, y)) {
				if (y.readyState = 1, l && q.trigger("ajaxSend", [y, o]), k) return y;o.async && o.timeout > 0 && (i = a.setTimeout(function () {
					y.abort("timeout");
				}, o.timeout));try {
					k = !1, e.send(v, A);
				} catch (z) {
					if (k) throw z;A(-1, z);
				}
			} else A(-1, "No Transport");function A(b, c, d, h) {
				var j,
				    m,
				    n,
				    v,
				    w,
				    x = c;k || (k = !0, i && a.clearTimeout(i), e = void 0, g = h || "", y.readyState = b > 0 ? 4 : 0, j = b >= 200 && 300 > b || 304 === b, d && (v = Mb(o, y, d)), v = Nb(o, v, y, j), j ? (o.ifModified && (w = y.getResponseHeader("Last-Modified"), w && (r.lastModified[f] = w), w = y.getResponseHeader("etag"), w && (r.etag[f] = w)), 204 === b || "HEAD" === o.type ? x = "nocontent" : 304 === b ? x = "notmodified" : (x = v.state, m = v.data, n = v.error, j = !n)) : (n = x, !b && x || (x = "error", 0 > b && (b = 0))), y.status = b, y.statusText = (c || x) + "", j ? s.resolveWith(p, [m, x, y]) : s.rejectWith(p, [y, x, n]), y.statusCode(u), u = void 0, l && q.trigger(j ? "ajaxSuccess" : "ajaxError", [y, o, j ? m : n]), t.fireWith(p, [y, x]), l && (q.trigger("ajaxComplete", [y, o]), --r.active || r.event.trigger("ajaxStop")));
			}return y;
		}, getJSON: function getJSON(a, b, c) {
			return r.get(a, b, c, "json");
		}, getScript: function getScript(a, b) {
			return r.get(a, void 0, b, "script");
		} }), r.each(["get", "post"], function (a, b) {
		r[b] = function (a, c, d, e) {
			return r.isFunction(c) && (e = e || d, d = c, c = void 0), r.ajax(r.extend({ url: a, type: b, dataType: e, data: c, success: d }, r.isPlainObject(a) && a));
		};
	}), r._evalUrl = function (a) {
		return r.ajax({ url: a, type: "GET", dataType: "script", cache: !0, async: !1, global: !1, "throws": !0 });
	}, r.fn.extend({ wrapAll: function wrapAll(a) {
			var b;return this[0] && (r.isFunction(a) && (a = a.call(this[0])), b = r(a, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
				var a = this;while (a.firstElementChild) {
					a = a.firstElementChild;
				}return a;
			}).append(this)), this;
		}, wrapInner: function wrapInner(a) {
			return r.isFunction(a) ? this.each(function (b) {
				r(this).wrapInner(a.call(this, b));
			}) : this.each(function () {
				var b = r(this),
				    c = b.contents();c.length ? c.wrapAll(a) : b.append(a);
			});
		}, wrap: function wrap(a) {
			var b = r.isFunction(a);return this.each(function (c) {
				r(this).wrapAll(b ? a.call(this, c) : a);
			});
		}, unwrap: function unwrap(a) {
			return this.parent(a).not("body").each(function () {
				r(this).replaceWith(this.childNodes);
			}), this;
		} }), r.expr.pseudos.hidden = function (a) {
		return !r.expr.pseudos.visible(a);
	}, r.expr.pseudos.visible = function (a) {
		return !!(a.offsetWidth || a.offsetHeight || a.getClientRects().length);
	}, r.ajaxSettings.xhr = function () {
		try {
			return new a.XMLHttpRequest();
		} catch (b) {}
	};var Ob = { 0: 200, 1223: 204 },
	    Pb = r.ajaxSettings.xhr();o.cors = !!Pb && "withCredentials" in Pb, o.ajax = Pb = !!Pb, r.ajaxTransport(function (b) {
		var _c, d;return o.cors || Pb && !b.crossDomain ? { send: function send(e, f) {
				var g,
				    h = b.xhr();if (h.open(b.type, b.url, b.async, b.username, b.password), b.xhrFields) for (g in b.xhrFields) {
					h[g] = b.xhrFields[g];
				}b.mimeType && h.overrideMimeType && h.overrideMimeType(b.mimeType), b.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest");for (g in e) {
					h.setRequestHeader(g, e[g]);
				}_c = function c(a) {
					return function () {
						_c && (_c = d = h.onload = h.onerror = h.onabort = h.onreadystatechange = null, "abort" === a ? h.abort() : "error" === a ? "number" != typeof h.status ? f(0, "error") : f(h.status, h.statusText) : f(Ob[h.status] || h.status, h.statusText, "text" !== (h.responseType || "text") || "string" != typeof h.responseText ? { binary: h.response } : { text: h.responseText }, h.getAllResponseHeaders()));
					};
				}, h.onload = _c(), d = h.onerror = _c("error"), void 0 !== h.onabort ? h.onabort = d : h.onreadystatechange = function () {
					4 === h.readyState && a.setTimeout(function () {
						_c && d();
					});
				}, _c = _c("abort");try {
					h.send(b.hasContent && b.data || null);
				} catch (i) {
					if (_c) throw i;
				}
			}, abort: function abort() {
				_c && _c();
			} } : void 0;
	}), r.ajaxPrefilter(function (a) {
		a.crossDomain && (a.contents.script = !1);
	}), r.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function textScript(a) {
				return r.globalEval(a), a;
			} } }), r.ajaxPrefilter("script", function (a) {
		void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET");
	}), r.ajaxTransport("script", function (a) {
		if (a.crossDomain) {
			var b, _c2;return { send: function send(e, f) {
					b = r("<script>").prop({ charset: a.scriptCharset, src: a.url }).on("load error", _c2 = function c(a) {
						b.remove(), _c2 = null, a && f("error" === a.type ? 404 : 200, a.type);
					}), d.head.appendChild(b[0]);
				}, abort: function abort() {
					_c2 && _c2();
				} };
		}
	});var Qb = [],
	    Rb = /(=)\?(?=&|$)|\?\?/;r.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
			var a = Qb.pop() || r.expando + "_" + rb++;return this[a] = !0, a;
		} }), r.ajaxPrefilter("json jsonp", function (b, c, d) {
		var e,
		    f,
		    g,
		    h = b.jsonp !== !1 && (Rb.test(b.url) ? "url" : "string" == typeof b.data && 0 === (b.contentType || "").indexOf("application/x-www-form-urlencoded") && Rb.test(b.data) && "data");return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = r.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(Rb, "$1" + e) : b.jsonp !== !1 && (b.url += (sb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
			return g || r.error(e + " was not called"), g[0];
		}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
			g = arguments;
		}, d.always(function () {
			void 0 === f ? r(a).removeProp(e) : a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, Qb.push(e)), g && r.isFunction(f) && f(g[0]), g = f = void 0;
		}), "script") : void 0;
	}), o.createHTMLDocument = function () {
		var a = d.implementation.createHTMLDocument("").body;return a.innerHTML = "<form></form><form></form>", 2 === a.childNodes.length;
	}(), r.parseHTML = function (a, b, c) {
		if ("string" != typeof a) return [];"boolean" == typeof b && (c = b, b = !1);var e, f, g;return b || (o.createHTMLDocument ? (b = d.implementation.createHTMLDocument(""), e = b.createElement("base"), e.href = d.location.href, b.head.appendChild(e)) : b = d), f = B.exec(a), g = !c && [], f ? [b.createElement(f[1])] : (f = oa([a], b, g), g && g.length && r(g).remove(), r.merge([], f.childNodes));
	}, r.fn.load = function (a, b, c) {
		var d,
		    e,
		    f,
		    g = this,
		    h = a.indexOf(" ");return h > -1 && (d = r.trim(a.slice(h)), a = a.slice(0, h)), r.isFunction(b) ? (c = b, b = void 0) : b && "object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) && (e = "POST"), g.length > 0 && r.ajax({ url: a, type: e || "GET", dataType: "html", data: b }).done(function (a) {
			f = arguments, g.html(d ? r("<div>").append(r.parseHTML(a)).find(d) : a);
		}).always(c && function (a, b) {
			g.each(function () {
				c.apply(this, f || [a.responseText, b, a]);
			});
		}), this;
	}, r.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
		r.fn[b] = function (a) {
			return this.on(b, a);
		};
	}), r.expr.pseudos.animated = function (a) {
		return r.grep(r.timers, function (b) {
			return a === b.elem;
		}).length;
	};function Sb(a) {
		return r.isWindow(a) ? a : 9 === a.nodeType && a.defaultView;
	}r.offset = { setOffset: function setOffset(a, b, c) {
			var d,
			    e,
			    f,
			    g,
			    h,
			    i,
			    j,
			    k = r.css(a, "position"),
			    l = r(a),
			    m = {};"static" === k && (a.style.position = "relative"), h = l.offset(), f = r.css(a, "top"), i = r.css(a, "left"), j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), r.isFunction(b) && (b = b.call(a, c, r.extend({}, h))), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m);
		} }, r.fn.extend({ offset: function offset(a) {
			if (arguments.length) return void 0 === a ? this : this.each(function (b) {
				r.offset.setOffset(this, a, b);
			});var b,
			    c,
			    d,
			    e,
			    f = this[0];if (f) return f.getClientRects().length ? (d = f.getBoundingClientRect(), d.width || d.height ? (e = f.ownerDocument, c = Sb(e), b = e.documentElement, { top: d.top + c.pageYOffset - b.clientTop, left: d.left + c.pageXOffset - b.clientLeft }) : d) : { top: 0, left: 0 };
		}, position: function position() {
			if (this[0]) {
				var a,
				    b,
				    c = this[0],
				    d = { top: 0, left: 0 };return "fixed" === r.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), r.nodeName(a[0], "html") || (d = a.offset()), d = { top: d.top + r.css(a[0], "borderTopWidth", !0), left: d.left + r.css(a[0], "borderLeftWidth", !0) }), { top: b.top - d.top - r.css(c, "marginTop", !0), left: b.left - d.left - r.css(c, "marginLeft", !0) };
			}
		}, offsetParent: function offsetParent() {
			return this.map(function () {
				var a = this.offsetParent;while (a && "static" === r.css(a, "position")) {
					a = a.offsetParent;
				}return a || pa;
			});
		} }), r.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (a, b) {
		var c = "pageYOffset" === b;r.fn[a] = function (d) {
			return S(this, function (a, d, e) {
				var f = Sb(a);return void 0 === e ? f ? f[b] : a[d] : void (f ? f.scrollTo(c ? f.pageXOffset : e, c ? e : f.pageYOffset) : a[d] = e);
			}, a, d, arguments.length);
		};
	}), r.each(["top", "left"], function (a, b) {
		r.cssHooks[b] = Na(o.pixelPosition, function (a, c) {
			return c ? (c = Ma(a, b), Ka.test(c) ? r(a).position()[b] + "px" : c) : void 0;
		});
	}), r.each({ Height: "height", Width: "width" }, function (a, b) {
		r.each({ padding: "inner" + a, content: b, "": "outer" + a }, function (c, d) {
			r.fn[d] = function (e, f) {
				var g = arguments.length && (c || "boolean" != typeof e),
				    h = c || (e === !0 || f === !0 ? "margin" : "border");return S(this, function (b, c, e) {
					var f;return r.isWindow(b) ? 0 === d.indexOf("outer") ? b["inner" + a] : b.document.documentElement["client" + a] : 9 === b.nodeType ? (f = b.documentElement, Math.max(b.body["scroll" + a], f["scroll" + a], b.body["offset" + a], f["offset" + a], f["client" + a])) : void 0 === e ? r.css(b, c, h) : r.style(b, c, e, h);
				}, b, g ? e : void 0, g);
			};
		});
	}), r.fn.extend({ bind: function bind(a, b, c) {
			return this.on(a, null, b, c);
		}, unbind: function unbind(a, b) {
			return this.off(a, null, b);
		}, delegate: function delegate(a, b, c, d) {
			return this.on(b, a, c, d);
		}, undelegate: function undelegate(a, b, c) {
			return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c);
		} }), r.parseJSON = JSON.parse, "function" == typeof define && define.amd && define("jquery", [], function () {
		return r;
	});var Tb = a.jQuery,
	    Ub = a.$;return r.noConflict = function (b) {
		return a.$ === r && (a.$ = Ub), b && a.jQuery === r && (a.jQuery = Tb), r;
	}, b || (a.jQuery = a.$ = r), r;
});
/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.6.0
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
!function (a) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery);
}(function (a) {
	"use strict";
	var b = window.Slick || {};b = function () {
		function c(c, d) {
			var f,
			    e = this;e.defaults = { accessibility: !0, adaptiveHeight: !1, appendArrows: a(c), appendDots: a(c), arrows: !0, asNavFor: null, prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>', nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>', autoplay: !1, autoplaySpeed: 3e3, centerMode: !1, centerPadding: "50px", cssEase: "ease", customPaging: function customPaging(b, c) {
					return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1);
				}, dots: !1, dotsClass: "slick-dots", draggable: !0, easing: "linear", edgeFriction: .35, fade: !1, focusOnSelect: !1, infinite: !0, initialSlide: 0, lazyLoad: "ondemand", mobileFirst: !1, pauseOnHover: !0, pauseOnFocus: !0, pauseOnDotsHover: !1, respondTo: "window", responsive: null, rows: 1, rtl: !1, slide: "", slidesPerRow: 1, slidesToShow: 1, slidesToScroll: 1, speed: 500, swipe: !0, swipeToSlide: !1, touchMove: !0, touchThreshold: 5, useCSS: !0, useTransform: !0, variableWidth: !1, vertical: !1, verticalSwiping: !1, waitForAnimate: !0, zIndex: 1e3 }, e.initials = { animating: !1, dragging: !1, autoPlayTimer: null, currentDirection: 0, currentLeft: null, currentSlide: 0, direction: 1, $dots: null, listWidth: null, listHeight: null, loadIndex: 0, $nextArrow: null, $prevArrow: null, slideCount: null, slideWidth: null, $slideTrack: null, $slides: null, sliding: !1, slideOffset: 0, swipeLeft: null, $list: null, touchObject: {}, transformsEnabled: !1, unslicked: !1 }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0);
		}var b = 0;return c;
	}(), b.prototype.activateADA = function () {
		var a = this;a.$slideTrack.find(".slick-active").attr({ "aria-hidden": "false" }).find("a, input, button, select").attr({ tabindex: "0" });
	}, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
		var e = this;if ("boolean" == typeof c) d = c, c = null;else if (0 > c || c >= e.slideCount) return !1;e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b);
		}), e.$slidesCache = e.$slides, e.reinit();
	}, b.prototype.animateHeight = function () {
		var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.animate({ height: b }, a.options.speed);
		}
	}, b.prototype.animateSlide = function (b, c) {
		var d = {},
		    e = this;e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({ left: b }, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({ top: b }, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({ animStart: e.currentLeft }).animate({ animStart: b }, { duration: e.options.speed, easing: e.options.easing, step: function step(a) {
				a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d));
			}, complete: function complete() {
				c && c.call();
			} })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
			e.disableTransition(), c.call();
		}, e.options.speed));
	}, b.prototype.getNavTarget = function () {
		var b = this,
		    c = b.options.asNavFor;return c && null !== c && (c = a(c).not(b.$slider)), c;
	}, b.prototype.asNavFor = function (b) {
		var c = this,
		    d = c.getNavTarget();null !== d && "object" == (typeof d === 'undefined' ? 'undefined' : _typeof(d)) && d.each(function () {
			var c = a(this).slick("getSlick");c.unslicked || c.slideHandler(b, !0);
		});
	}, b.prototype.applyTransition = function (a) {
		var b = this,
		    c = {};b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
	}, b.prototype.autoPlay = function () {
		var a = this;a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed));
	}, b.prototype.autoPlayClear = function () {
		var a = this;a.autoPlayTimer && clearInterval(a.autoPlayTimer);
	}, b.prototype.autoPlayIterator = function () {
		var a = this,
		    b = a.currentSlide + a.options.slidesToScroll;a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b));
	}, b.prototype.buildArrows = function () {
		var b = this;b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({ "aria-disabled": "true", tabindex: "-1" }));
	}, b.prototype.buildDots = function () {
		var c,
		    d,
		    b = this;if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
			for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1) {
				d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
			}b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
		}
	}, b.prototype.buildOut = function () {
		var b = this;b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "");
		}), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable");
	}, b.prototype.buildRows = function () {
		var b,
		    c,
		    d,
		    e,
		    f,
		    g,
		    h,
		    a = this;if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
			for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
				var i = document.createElement("div");for (c = 0; c < a.options.rows; c++) {
					var j = document.createElement("div");for (d = 0; d < a.options.slidesPerRow; d++) {
						var k = b * h + (c * a.options.slidesPerRow + d);g.get(k) && j.appendChild(g.get(k));
					}i.appendChild(j);
				}e.appendChild(i);
			}a.$slider.empty().append(e), a.$slider.children().children().children().css({ width: 100 / a.options.slidesPerRow + "%", display: "inline-block" });
		}
	}, b.prototype.checkResponsive = function (b, c) {
		var e,
		    f,
		    g,
		    d = this,
		    h = !1,
		    i = d.$slider.width(),
		    j = window.innerWidth || a(window).width();if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
			f = null;for (e in d.breakpoints) {
				d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
			}null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h]);
		}
	}, b.prototype.changeSlide = function (b, c) {
		var f,
		    g,
		    h,
		    d = this,
		    e = a(b.currentTarget);switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {case "previous":
				g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);break;case "next":
				g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);break;case "index":
				var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");break;default:
				return;}
	}, b.prototype.checkNavigable = function (a) {
		var c,
		    d,
		    b = this;if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1];else for (var e in c) {
			if (a < c[e]) {
				a = d;break;
			}d = c[e];
		}return a;
	}, b.prototype.cleanUpEvents = function () {
		var b = this;b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition);
	}, b.prototype.cleanUpSlideEvents = function () {
		var b = this;b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1));
	}, b.prototype.cleanUpRows = function () {
		var b,
		    a = this;a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b));
	}, b.prototype.clickHandler = function (a) {
		var b = this;b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault());
	}, b.prototype.destroy = function (b) {
		var c = this;c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
			a(this).attr("style", a(this).data("originalStyling"));
		}), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c]);
	}, b.prototype.disableTransition = function (a) {
		var b = this,
		    c = {};c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c);
	}, b.prototype.fadeSlide = function (a, b) {
		var c = this;c.cssTransitions === !1 ? (c.$slides.eq(a).css({ zIndex: c.options.zIndex }), c.$slides.eq(a).animate({ opacity: 1 }, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({ opacity: 1, zIndex: c.options.zIndex }), b && setTimeout(function () {
			c.disableTransition(a), b.call();
		}, c.options.speed));
	}, b.prototype.fadeSlideOut = function (a) {
		var b = this;b.cssTransitions === !1 ? b.$slides.eq(a).animate({ opacity: 0, zIndex: b.options.zIndex - 2 }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({ opacity: 0, zIndex: b.options.zIndex - 2 }));
	}, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
		var b = this;null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit());
	}, b.prototype.focusHandler = function () {
		var b = this;b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
			c.stopImmediatePropagation();var d = a(this);setTimeout(function () {
				b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay());
			}, 0);
		});
	}, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
		var a = this;return a.currentSlide;
	}, b.prototype.getDotCount = function () {
		var a = this,
		    b = 0,
		    c = 0,
		    d = 0;if (a.options.infinite === !0) for (; b < a.slideCount;) {
			++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		} else if (a.options.centerMode === !0) d = a.slideCount;else if (a.options.asNavFor) for (; b < a.slideCount;) {
			++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		} else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);return d - 1;
	}, b.prototype.getLeft = function (a) {
		var c,
		    d,
		    f,
		    b = this,
		    e = 0;return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c;
	}, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
		var b = this;return b.options[a];
	}, b.prototype.getNavigableIndexes = function () {
		var e,
		    a = this,
		    b = 0,
		    c = 0,
		    d = [];for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;) {
			d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		}return d;
	}, b.prototype.getSlick = function () {
		return this;
	}, b.prototype.getSlideCount = function () {
		var c,
		    d,
		    e,
		    b = this;return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
			return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0;
		}), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll;
	}, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
		var c = this;c.changeSlide({ data: { message: "index", index: parseInt(a) } }, b);
	}, b.prototype.init = function (b) {
		var c = this;a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay());
	}, b.prototype.initADA = function () {
		var b = this;b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({ "aria-hidden": "true", tabindex: "-1" }).find("a, input, button, select").attr({ tabindex: "-1" }), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
			a(this).attr({ role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c });
		}), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
			a(this).attr({ role: "presentation", "aria-selected": "false", "aria-controls": "navigation" + b.instanceUid + c, id: "slick-slide" + b.instanceUid + c });
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA();
	}, b.prototype.initArrowEvents = function () {
		var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", { message: "previous" }, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", { message: "next" }, a.changeSlide));
	}, b.prototype.initDotEvents = function () {
		var b = this;b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", { message: "index" }, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1));
	}, b.prototype.initSlideEvents = function () {
		var b = this;b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)));
	}, b.prototype.initializeEvents = function () {
		var b = this;b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", { action: "start" }, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", { action: "move" }, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", { action: "end" }, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", { action: "end" }, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition);
	}, b.prototype.initUI = function () {
		var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show();
	}, b.prototype.keyHandler = function (a) {
		var b = this;a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({ data: { message: b.options.rtl === !0 ? "next" : "previous" } }) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({ data: { message: b.options.rtl === !0 ? "previous" : "next" } }));
	}, b.prototype.lazyLoad = function () {
		function g(c) {
			a("img[data-lazy]", c).each(function () {
				var c = a(this),
				    d = a(this).attr("data-lazy"),
				    e = document.createElement("img");e.onload = function () {
					c.animate({ opacity: 0 }, 100, function () {
						c.attr("src", d).animate({ opacity: 1 }, 200, function () {
							c.removeAttr("data-lazy").removeClass("slick-loading");
						}), b.$slider.trigger("lazyLoaded", [b, c, d]);
					});
				}, e.onerror = function () {
					c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d]);
				}, e.src = d;
			});
		}var c,
		    d,
		    e,
		    f,
		    b = this;b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d));
	}, b.prototype.loadSlider = function () {
		var a = this;a.setPosition(), a.$slideTrack.css({ opacity: 1 }), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad();
	}, b.prototype.next = b.prototype.slickNext = function () {
		var a = this;a.changeSlide({ data: { message: "next" } });
	}, b.prototype.orientationChange = function () {
		var a = this;a.checkResponsive(), a.setPosition();
	}, b.prototype.pause = b.prototype.slickPause = function () {
		var a = this;a.autoPlayClear(), a.paused = !0;
	}, b.prototype.play = b.prototype.slickPlay = function () {
		var a = this;a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1;
	}, b.prototype.postSlide = function (a) {
		var b = this;b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA());
	}, b.prototype.prev = b.prototype.slickPrev = function () {
		var a = this;a.changeSlide({ data: { message: "previous" } });
	}, b.prototype.preventDefault = function (a) {
		a.preventDefault();
	}, b.prototype.progressiveLazyLoad = function (b) {
		b = b || 1;var e,
		    f,
		    g,
		    c = this,
		    d = a("img[data-lazy]", c.$slider);d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
			e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad();
		}, g.onerror = function () {
			3 > b ? setTimeout(function () {
				c.progressiveLazyLoad(b + 1);
			}, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad());
		}, g.src = f) : c.$slider.trigger("allImagesLoaded", [c]);
	}, b.prototype.refresh = function (b) {
		var d,
		    e,
		    c = this;e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, { currentSlide: d }), c.init(), b || c.changeSlide({ data: { message: "index", index: d } }, !1);
	}, b.prototype.registerBreakpoints = function () {
		var c,
		    d,
		    e,
		    b = this,
		    f = b.options.responsive || null;if ("array" === a.type(f) && f.length) {
			b.respondTo = b.options.respondTo || "window";for (c in f) {
				if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
					for (; e >= 0;) {
						b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
					}b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings;
				}
			}b.breakpoints.sort(function (a, c) {
				return b.options.mobileFirst ? a - c : c - a;
			});
		}
	}, b.prototype.reinit = function () {
		var b = this;b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b]);
	}, b.prototype.resize = function () {
		var b = this;a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
			b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition();
		}, 50));
	}, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
		var d = this;return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit());
	}, b.prototype.setCSS = function (a) {
		var d,
		    e,
		    b = this,
		    c = {};b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)));
	}, b.prototype.setDimensions = function () {
		var a = this;a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({ padding: "0px " + a.options.centerPadding }) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({ padding: a.options.centerPadding + " 0px" })), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b);
	}, b.prototype.setFade = function () {
		var c,
		    b = this;b.$slides.each(function (d, e) {
			c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({ position: "relative", right: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 }) : a(e).css({ position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0 });
		}), b.$slides.eq(b.currentSlide).css({ zIndex: b.options.zIndex - 1, opacity: 1 });
	}, b.prototype.setHeight = function () {
		var a = this;if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);a.$list.css("height", b);
		}
	}, b.prototype.setOption = b.prototype.slickSetOption = function () {
		var c,
		    d,
		    e,
		    f,
		    h,
		    b = this,
		    g = !1;if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f;else if ("multiple" === h) a.each(e, function (a, c) {
			b.options[a] = c;
		});else if ("responsive" === h) for (d in f) {
			if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]];else {
				for (c = b.options.responsive.length - 1; c >= 0;) {
					b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
				}b.options.responsive.push(f[d]);
			}
		}g && (b.unload(), b.reinit());
	}, b.prototype.setPosition = function () {
		var a = this;a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a]);
	}, b.prototype.setProps = function () {
		var a = this,
		    b = document.body.style;a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1;
	}, b.prototype.setSlideClasses = function (a) {
		var c,
		    d,
		    e,
		    f,
		    b = this;d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a, d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad();
	}, b.prototype.setupInfinite = function () {
		var c,
		    d,
		    e,
		    b = this;if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
			for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1) {
				d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
			}for (c = 0; e > c; c += 1) {
				d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
			}b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
				a(this).attr("id", "");
			});
		}
	}, b.prototype.interrupt = function (a) {
		var b = this;a || b.autoPlay(), b.interrupted = a;
	}, b.prototype.selectHandler = function (b) {
		var c = this,
		    d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
		    e = parseInt(d.attr("data-slick-index"));return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e);
	}, b.prototype.slideHandler = function (a, b, c) {
		var d,
		    e,
		    f,
		    g,
		    j,
		    h = null,
		    i = this;return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d);
		}) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
			i.postSlide(d);
		}) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
			i.postSlide(e);
		})) : i.postSlide(e), void i.animateHeight()) : void (c !== !0 ? i.animateSlide(h, function () {
			i.postSlide(e);
		}) : i.postSlide(e))));
	}, b.prototype.startLoad = function () {
		var a = this;a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading");
	}, b.prototype.swipeDirection = function () {
		var a,
		    b,
		    c,
		    d,
		    e = this;return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical";
	}, b.prototype.swipeEnd = function (a) {
		var c,
		    d,
		    b = this;if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX) return !1;if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
			switch (d = b.swipeDirection()) {case "left":case "down":
					c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;break;case "right":case "up":
					c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1;}"vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]));
		} else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {});
	}, b.prototype.swipeHandler = function (a) {
		var b = this;if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {case "start":
				b.swipeStart(a);break;case "move":
				b.swipeMove(a);break;case "end":
				b.swipeEnd(a);}
	}, b.prototype.swipeMove = function (a) {
		var d,
		    e,
		    f,
		    g,
		    h,
		    b = this;return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0);
	}, b.prototype.swipeStart = function (a) {
		var c,
		    b = this;return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void (b.dragging = !0));
	}, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
		var a = this;null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit());
	}, b.prototype.unload = function () {
		var b = this;a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "");
	}, b.prototype.unslick = function (a) {
		var b = this;b.$slider.trigger("unslick", [b, a]), b.destroy();
	}, b.prototype.updateArrows = function () {
		var b,
		    a = this;b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")));
	}, b.prototype.updateDots = function () {
		var a = this;null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"));
	}, b.prototype.visibility = function () {
		var a = this;a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1);
	}, a.fn.slick = function () {
		var f,
		    g,
		    a = this,
		    c = arguments[0],
		    d = Array.prototype.slice.call(arguments, 1),
		    e = a.length;for (f = 0; e > f; f++) {
			if ("object" == (typeof c === 'undefined' ? 'undefined' : _typeof(c)) || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g) return g;
		}return a;
	};
});
/*!
 * @copyright Copyright (c) 2016 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.17
 */
(function () {
	if (window && window.addEventListener) {
		var c = Object.create(null),
		    l,
		    p,
		    a = function a() {
			clearTimeout(p);p = setTimeout(l, 100);
		},
		    q = function q() {},
		    t = function t() {
			var e;window.addEventListener("resize", a, !1);window.addEventListener("orientationchange", a, !1);window.MutationObserver ? (e = new MutationObserver(a), e.observe(document.documentElement, { childList: !0, subtree: !0, attributes: !0 }), q = function q() {
				try {
					e.disconnect(), window.removeEventListener("resize", a, !1), window.removeEventListener("orientationchange", a, !1);
				} catch (c) {}
			}) : (document.documentElement.addEventListener("DOMSubtreeModified", a, !1), q = function q() {
				document.documentElement.removeEventListener("DOMSubtreeModified", a, !1);window.removeEventListener("resize", a, !1);window.removeEventListener("orientationchange", a, !1);
			});
		},
		    u = function u(e) {
			var c,
			    a = location.hostname;if (window.XMLHttpRequest) {
				c = new XMLHttpRequest();var m = document.createElement("a");m.href = e;e = m.hostname;c = void 0 === c.withCredentials && "" !== e && e !== a ? XDomainRequest || void 0 : XMLHttpRequest;
			}return c;
		};
		l = function l() {
			function e() {
				--n;0 === n && t();
			}function a(b) {
				return function () {
					!0 !== c[b.base] && b.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + b.hash);
				};
			}function l(b) {
				return function () {
					var c = document.body,
					    a = document.createElement("x");b.onload = null;a.innerHTML = b.responseText;if (a = a.getElementsByTagName("svg")[0]) a.setAttribute("aria-hidden", "true"), a.style.position = "absolute", a.style.width = 0, a.style.height = 0, a.style.overflow = "hidden", c.insertBefore(a, c.firstChild);e();
				};
			}function m(a) {
				return function () {
					a.onerror = null;a.ontimeout = null;e();
				};
			}var d,
			    f,
			    g,
			    h,
			    n = 0,
			    b,
			    k;q();k = document.getElementsByTagName("use");for (h = 0; h < k.length; h += 1) {
				try {
					f = k[h].getBoundingClientRect();
				} catch (v) {
					f = !1;
				}g = k[h].getAttributeNS("http://www.w3.org/1999/xlink", "href").split("#");d = g[0];g = g[1];b = f && 0 === f.left && 0 === f.right && 0 === f.top && 0 === f.bottom;f && 0 === f.width && 0 === f.height && !b ? d.length && (b = c[d], !0 !== b && setTimeout(a({ useEl: k[h], base: d, hash: g }), 0), void 0 === b && (g = u(d), void 0 !== g && (b = new g(), c[d] = b, b.onload = l(b), b.onerror = m(b), b.ontimeout = m(b), b.open("GET", d), b.send(), n += 1))) : b || (void 0 === c[d] ? c[d] = !0 : c[d].onload && (c[d].abort(), c[d].onload = void 0, c[d] = !0));
			}k = "";n += 1;e();
		};window.addEventListener("load", function r() {
			window.removeEventListener("load", r, !1);p = setTimeout(l, 0);
		}, !1);
	}
})();
/*! jQuery UI - v1.12.1 - 2017-05-15
* http://jqueryui.com
* Includes: widget.js, keycode.js, unique-id.js, widgets/datepicker.js, widgets/tabs.js
* Copyright jQuery Foundation and other contributors; Licensed MIT */

(function (t) {
	"function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery);
})(function (t) {
	function e(t) {
		for (var e, i; t.length && t[0] !== document;) {
			if (e = t.css("position"), ("absolute" === e || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;t = t.parent();
		}return 0;
	}function i() {
		this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"));
	}function s(e) {
		var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";return e.on("mouseout", i, function () {
			t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover");
		}).on("mouseover", i, n);
	}function n() {
		t.datepicker._isDisabledDatepicker(l.inline ? l.dpDiv.parent()[0] : l.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"));
	}function o(e, i) {
		t.extend(e, i);for (var s in i) {
			null == i[s] && (e[s] = i[s]);
		}return e;
	}t.ui = t.ui || {}, t.ui.version = "1.12.1";var a = 0,
	    r = Array.prototype.slice;t.cleanData = function (e) {
		return function (i) {
			var s, n, o;for (o = 0; null != (n = i[o]); o++) {
				try {
					s = t._data(n, "events"), s && s.remove && t(n).triggerHandler("remove");
				} catch (a) {}
			}e(i);
		};
	}(t.cleanData), t.widget = function (e, i, s) {
		var n,
		    o,
		    a,
		    r = {},
		    l = e.split(".")[0];e = e.split(".")[1];var h = l + "-" + e;return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function (e) {
			return !!t.data(e, h);
		}, t[l] = t[l] || {}, n = t[l][e], o = t[l][e] = function (t, e) {
			return this._createWidget ? (arguments.length && this._createWidget(t, e), void 0) : new o(t, e);
		}, t.extend(o, n, { version: s.version, _proto: t.extend({}, s), _childConstructors: [] }), a = new i(), a.options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
			return t.isFunction(s) ? (r[e] = function () {
				function t() {
					return i.prototype[e].apply(this, arguments);
				}function n(t) {
					return i.prototype[e].apply(this, t);
				}return function () {
					var e,
					    i = this._super,
					    o = this._superApply;return this._super = t, this._superApply = n, e = s.apply(this, arguments), this._super = i, this._superApply = o, e;
				};
			}(), void 0) : (r[e] = s, void 0);
		}), o.prototype = t.widget.extend(a, { widgetEventPrefix: n ? a.widgetEventPrefix || e : e }, r, { constructor: o, namespace: l, widgetName: e, widgetFullName: h }), n ? (t.each(n._childConstructors, function (e, i) {
			var s = i.prototype;t.widget(s.namespace + "." + s.widgetName, o, i._proto);
		}), delete n._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o;
	}, t.widget.extend = function (e) {
		for (var i, s, n = r.call(arguments, 1), o = 0, a = n.length; a > o; o++) {
			for (i in n[o]) {
				s = n[o][i], n[o].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
			}
		}return e;
	}, t.widget.bridge = function (e, i) {
		var s = i.prototype.widgetFullName || e;t.fn[e] = function (n) {
			var o = "string" == typeof n,
			    a = r.call(arguments, 1),
			    l = this;return o ? this.length || "instance" !== n ? this.each(function () {
				var i,
				    o = t.data(this, s);return "instance" === n ? (l = o, !1) : o ? t.isFunction(o[n]) && "_" !== n.charAt(0) ? (i = o[n].apply(o, a), i !== o && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + n + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; " + "attempted to call method '" + n + "'");
			}) : l = void 0 : (a.length && (n = t.widget.extend.apply(null, [n].concat(a))), this.each(function () {
				var e = t.data(this, s);e ? (e.option(n || {}), e._init && e._init()) : t.data(this, s, new i(n, this));
			})), l;
		};
	}, t.Widget = function () {}, t.Widget._childConstructors = [], t.Widget.prototype = { widgetName: "widget", widgetEventPrefix: "", defaultElement: "<div>", options: { classes: {}, disabled: !1, create: null }, _createWidget: function _createWidget(e, i) {
			i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = a++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function remove(t) {
					t.target === i && this.destroy();
				} }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init();
		}, _getCreateOptions: function _getCreateOptions() {
			return {};
		}, _getCreateEventData: t.noop, _create: t.noop, _init: t.noop, destroy: function destroy() {
			var e = this;this._destroy(), t.each(this.classesElementLookup, function (t, i) {
				e._removeClass(i, t);
			}), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace);
		}, _destroy: t.noop, widget: function widget() {
			return this.element;
		}, option: function option(e, i) {
			var s,
			    n,
			    o,
			    a = e;if (0 === arguments.length) return t.widget.extend({}, this.options);if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
				for (n = a[e] = t.widget.extend({}, this.options[e]), o = 0; s.length - 1 > o; o++) {
					n[s[o]] = n[s[o]] || {}, n = n[s[o]];
				}if (e = s.pop(), 1 === arguments.length) return void 0 === n[e] ? null : n[e];n[e] = i;
			} else {
				if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];a[e] = i;
			}return this._setOptions(a), this;
		}, _setOptions: function _setOptions(t) {
			var e;for (e in t) {
				this._setOption(e, t[e]);
			}return this;
		}, _setOption: function _setOption(t, e) {
			return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this;
		}, _setOptionClasses: function _setOptionClasses(e) {
			var i, s, n;for (i in e) {
				n = this.classesElementLookup[i], e[i] !== this.options.classes[i] && n && n.length && (s = t(n.get()), this._removeClass(n, i), s.addClass(this._classes({ element: s, keys: i, classes: e, add: !0 })));
			}
		}, _setOptionDisabled: function _setOptionDisabled(t) {
			this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"));
		}, enable: function enable() {
			return this._setOptions({ disabled: !1 });
		}, disable: function disable() {
			return this._setOptions({ disabled: !0 });
		}, _classes: function _classes(e) {
			function i(i, o) {
				var a, r;for (r = 0; i.length > r; r++) {
					a = n.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), n.classesElementLookup[i[r]] = a, s.push(i[r]), o && e.classes[i[r]] && s.push(e.classes[i[r]]);
				}
			}var s = [],
			    n = this;return e = t.extend({ element: this.element, classes: this.options.classes || {} }, e), this._on(e.element, { remove: "_untrackClassesElement" }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ");
		}, _untrackClassesElement: function _untrackClassesElement(e) {
			var i = this;t.each(i.classesElementLookup, function (s, n) {
				-1 !== t.inArray(e.target, n) && (i.classesElementLookup[s] = t(n.not(e.target).get()));
			});
		}, _removeClass: function _removeClass(t, e, i) {
			return this._toggleClass(t, e, i, !1);
		}, _addClass: function _addClass(t, e, i) {
			return this._toggleClass(t, e, i, !0);
		}, _toggleClass: function _toggleClass(t, e, i, s) {
			s = "boolean" == typeof s ? s : i;var n = "string" == typeof t || null === t,
			    o = { extra: n ? e : i, keys: n ? t : e, element: n ? this.element : t, add: s };return o.element.toggleClass(this._classes(o), s), this;
		}, _on: function _on(e, i, s) {
			var n,
			    o = this;"boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = n = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), t.each(s, function (s, a) {
				function r() {
					return e || o.options.disabled !== !0 && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0;
				}"string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);var l = s.match(/^([\w:-]*)\s*(.*)$/),
				    h = l[1] + o.eventNamespace,
				    c = l[2];c ? n.on(h, c, r) : i.on(h, r);
			});
		}, _off: function _off(e, i) {
			i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get());
		}, _delay: function _delay(t, e) {
			function i() {
				return ("string" == typeof t ? s[t] : t).apply(s, arguments);
			}var s = this;return setTimeout(i, e || 0);
		}, _hoverable: function _hoverable(e) {
			this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function mouseenter(e) {
					this._addClass(t(e.currentTarget), null, "ui-state-hover");
				}, mouseleave: function mouseleave(e) {
					this._removeClass(t(e.currentTarget), null, "ui-state-hover");
				} });
		}, _focusable: function _focusable(e) {
			this.focusable = this.focusable.add(e), this._on(e, { focusin: function focusin(e) {
					this._addClass(t(e.currentTarget), null, "ui-state-focus");
				}, focusout: function focusout(e) {
					this._removeClass(t(e.currentTarget), null, "ui-state-focus");
				} });
		}, _trigger: function _trigger(e, i, s) {
			var n,
			    o,
			    a = this.options[e];if (s = s || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent) for (n in o) {
				n in i || (i[n] = o[n]);
			}return this.element.trigger(i, s), !(t.isFunction(a) && a.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented());
		} }, t.each({ show: "fadeIn", hide: "fadeOut" }, function (e, i) {
		t.Widget.prototype["_" + e] = function (s, n, o) {
			"string" == typeof n && (n = { effect: n });var a,
			    r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : e;n = n || {}, "number" == typeof n && (n = { duration: n }), a = !t.isEmptyObject(n), n.complete = o, n.delay && s.delay(n.delay), a && t.effects && t.effects.effect[r] ? s[e](n) : r !== e && s[r] ? s[r](n.duration, n.easing, o) : s.queue(function (i) {
				t(this)[e](), o && o.call(s[0]), i();
			});
		};
	}), t.widget, t.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, t.fn.extend({ uniqueId: function () {
			var t = 0;return function () {
				return this.each(function () {
					this.id || (this.id = "ui-id-" + ++t);
				});
			};
		}(), removeUniqueId: function removeUniqueId() {
			return this.each(function () {
				/^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id");
			});
		} }), t.extend(t.ui, { datepicker: { version: "1.12.1" } });var l;t.extend(i.prototype, { markerClassName: "hasDatepicker", maxRows: 4, _widgetDatepicker: function _widgetDatepicker() {
			return this.dpDiv;
		}, setDefaults: function setDefaults(t) {
			return o(this._defaults, t || {}), this;
		}, _attachDatepicker: function _attachDatepicker(e, i) {
			var s, n, o;s = e.nodeName.toLowerCase(), n = "div" === s || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), n), o.settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, o) : n && this._inlineDatepicker(e, o);
		}, _newInst: function _newInst(e, i) {
			var n = e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1");return { id: n, input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv };
		}, _connectDatepicker: function _connectDatepicker(e, i) {
			var s = t(e);i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e));
		}, _attachments: function _attachments(e, i) {
			var s,
			    n,
			    o,
			    a = this._get(i, "appendText"),
			    r = this._get(i, "isRTL");i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), s = this._get(i, "showOn"), ("focus" === s || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (n = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: n, title: n }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({ src: o, alt: n, title: n }) : n)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
				return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1;
			}));
		}, _autoSize: function _autoSize(t) {
			if (this._get(t, "autoSize") && !t.inline) {
				var e,
				    i,
				    s,
				    n,
				    o = new Date(2009, 11, 20),
				    a = this._get(t, "dateFormat");a.match(/[DM]/) && (e = function e(t) {
					for (i = 0, s = 0, n = 0; t.length > n; n++) {
						t[n].length > i && (i = t[n].length, s = n);
					}return s;
				}, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length);
			}
		}, _inlineDatepicker: function _inlineDatepicker(e, i) {
			var s = t(e);s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"));
		}, _dialogDatepicker: function _dialogDatepicker(e, i, s, n, a) {
			var r,
			    l,
			    h,
			    c,
			    u,
			    d = this._dialogInst;return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), o(d.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this;
		}, _destroyDatepicker: function _destroyDatepicker(e) {
			var i,
			    s = t(e),
			    n = t.data(e, "datepicker");s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (n.append.remove(), n.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), l === n && (l = null));
		}, _enableDatepicker: function _enableDatepicker(e) {
			var i,
			    s,
			    n = t(e),
			    o = t.data(e, "datepicker");n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function () {
				this.disabled = !1;
			}).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
				return t === e ? null : t;
			}));
		}, _disableDatepicker: function _disableDatepicker(e) {
			var i,
			    s,
			    n = t(e),
			    o = t.data(e, "datepicker");n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function () {
				this.disabled = !0;
			}).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (s = n.children("." + this._inlineClass), s.children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
				return t === e ? null : t;
			}), this._disabledInputs[this._disabledInputs.length] = e);
		}, _isDisabledDatepicker: function _isDisabledDatepicker(t) {
			if (!t) return !1;for (var e = 0; this._disabledInputs.length > e; e++) {
				if (this._disabledInputs[e] === t) return !0;
			}return !1;
		}, _getInst: function _getInst(e) {
			try {
				return t.data(e, "datepicker");
			} catch (i) {
				throw "Missing instance data for this datepicker";
			}
		}, _optionDatepicker: function _optionDatepicker(e, i, s) {
			var n,
			    a,
			    r,
			    l,
			    h = this._getInst(e);return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (n = i || {}, "string" == typeof i && (n = {}, n[i] = s), h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), o(h.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== n.dateFormat && void 0 === n.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h)), void 0);
		}, _changeDatepicker: function _changeDatepicker(t, e, i) {
			this._optionDatepicker(t, e, i);
		}, _refreshDatepicker: function _refreshDatepicker(t) {
			var e = this._getInst(t);e && this._updateDatepicker(e);
		}, _setDateDatepicker: function _setDateDatepicker(t, e) {
			var i = this._getInst(t);i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i));
		}, _getDateDatepicker: function _getDateDatepicker(t, e) {
			var i = this._getInst(t);return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null;
		}, _doKeyDown: function _doKeyDown(e) {
			var i,
			    s,
			    n,
			    o = t.datepicker._getInst(e.target),
			    a = !0,
			    r = o.dpDiv.is(".ui-datepicker-rtl");if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {case 9:
					t.datepicker._hideDatepicker(), a = !1;break;case 13:
					return n = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), n[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, n[0]), i = t.datepicker._get(o, "onSelect"), i ? (s = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [s, o])) : t.datepicker._hideDatepicker(), !1;case 27:
					t.datepicker._hideDatepicker();break;case 33:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");break;case 34:
					t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");break;case 35:
					(e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;break;case 36:
					(e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;break;case 37:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");break;case 38:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;break;case 39:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");break;case 40:
					(e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;break;default:
					a = !1;} else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;a && (e.preventDefault(), e.stopPropagation());
		}, _doKeyPress: function _doKeyPress(e) {
			var i,
			    s,
			    n = t.datepicker._getInst(e.target);return t.datepicker._get(n, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(n, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0;
		}, _doKeyUp: function _doKeyUp(e) {
			var i,
			    s = t.datepicker._getInst(e.target);if (s.input.val() !== s.lastVal) try {
				i = t.datepicker.parseDate(t.datepicker._get(s, "dateFormat"), s.input ? s.input.val() : null, t.datepicker._getFormatConfig(s)), i && (t.datepicker._setDateFromField(s), t.datepicker._updateAlternate(s), t.datepicker._updateDatepicker(s));
			} catch (n) {}return !0;
		}, _showDatepicker: function _showDatepicker(i) {
			if (i = i.target || i, "input" !== i.nodeName.toLowerCase() && (i = t("input", i.parentNode)[0]), !t.datepicker._isDisabledDatepicker(i) && t.datepicker._lastInput !== i) {
				var s, n, a, r, l, h, c;s = t.datepicker._getInst(i), t.datepicker._curInst && t.datepicker._curInst !== s && (t.datepicker._curInst.dpDiv.stop(!0, !0), s && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), n = t.datepicker._get(s, "beforeShow"), a = n ? n.apply(i, [i, s]) : {}, a !== !1 && (o(s.settings, a), s.lastVal = null, t.datepicker._lastInput = i, t.datepicker._setDateFromField(s), t.datepicker._inDialog && (i.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(i), t.datepicker._pos[1] += i.offsetHeight), r = !1, t(i).parents().each(function () {
					return r |= "fixed" === t(this).css("position"), !r;
				}), l = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }, t.datepicker._pos = null, s.dpDiv.empty(), s.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t.datepicker._updateDatepicker(s), l = t.datepicker._checkOffset(s, l, r), s.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: l.left + "px", top: l.top + "px" }), s.inline || (h = t.datepicker._get(s, "showAnim"), c = t.datepicker._get(s, "duration"), s.dpDiv.css("z-index", e(t(i)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? s.dpDiv.show(h, t.datepicker._get(s, "showOptions"), c) : s.dpDiv[h || "show"](h ? c : null), t.datepicker._shouldFocusInput(s) && s.input.trigger("focus"), t.datepicker._curInst = s));
			}
		}, _updateDatepicker: function _updateDatepicker(e) {
			this.maxRows = 4, l = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);var i,
			    s = this._getNumberOfMonths(e),
			    o = s[1],
			    a = 17,
			    r = e.dpDiv.find("." + this._dayOverClass + " a");r.length > 0 && n.apply(r.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), o > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + o).css("width", a * o + "em"), e.dpDiv[(1 !== s[0] || 1 !== s[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
				i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null;
			}, 0));
		}, _shouldFocusInput: function _shouldFocusInput(t) {
			return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus");
		}, _checkOffset: function _checkOffset(e, i, s) {
			var n = e.dpDiv.outerWidth(),
			    o = e.dpDiv.outerHeight(),
			    a = e.input ? e.input.outerWidth() : 0,
			    r = e.input ? e.input.outerHeight() : 0,
			    l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
			    h = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());return i.left -= this._get(e, "isRTL") ? n - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + n > l && l > n ? Math.abs(i.left + n - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0), i;
		}, _findPos: function _findPos(e) {
			for (var i, s = this._getInst(e), n = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) {
				e = e[n ? "previousSibling" : "nextSibling"];
			}return i = t(e).offset(), [i.left, i.top];
		}, _hideDatepicker: function _hideDatepicker(e) {
			var i,
			    s,
			    n,
			    o,
			    a = this._curInst;!a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), n = function n() {
				t.datepicker._tidyDialog(a);
			}, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, n) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, n), i || n(), this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1);
		}, _tidyDialog: function _tidyDialog(t) {
			t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar");
		}, _checkExternalClick: function _checkExternalClick(e) {
			if (t.datepicker._curInst) {
				var i = t(e.target),
				    s = t.datepicker._getInst(i[0]);(i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker();
			}
		}, _adjustDate: function _adjustDate(e, i, s) {
			var n = t(e),
			    o = this._getInst(n[0]);this._isDisabledDatepicker(n[0]) || (this._adjustInstDate(o, i + ("M" === s ? this._get(o, "showCurrentAtPos") : 0), s), this._updateDatepicker(o));
		}, _gotoToday: function _gotoToday(e) {
			var i,
			    s = t(e),
			    n = this._getInst(s[0]);this._get(n, "gotoCurrent") && n.currentDay ? (n.selectedDay = n.currentDay, n.drawMonth = n.selectedMonth = n.currentMonth, n.drawYear = n.selectedYear = n.currentYear) : (i = new Date(), n.selectedDay = i.getDate(), n.drawMonth = n.selectedMonth = i.getMonth(), n.drawYear = n.selectedYear = i.getFullYear()), this._notifyChange(n), this._adjustDate(s);
		}, _selectMonthYear: function _selectMonthYear(e, i, s) {
			var n = t(e),
			    o = this._getInst(n[0]);o["selected" + ("M" === s ? "Month" : "Year")] = o["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(n);
		}, _selectDay: function _selectDay(e, i, s, n) {
			var o,
			    a = t(e);t(n).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", n).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = s, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)));
		}, _clearDate: function _clearDate(e) {
			var i = t(e);this._selectDate(i, "");
		}, _selectDate: function _selectDate(e, i) {
			var s,
			    n = t(e),
			    o = this._getInst(n[0]);i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), s = this._get(o, "onSelect"), s ? s.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != _typeof(o.input[0]) && o.input.trigger("focus"), this._lastInput = null);
		}, _updateAlternate: function _updateAlternate(e) {
			var i,
			    s,
			    n,
			    o = this._get(e, "altField");o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), n = this.formatDate(i, s, this._getFormatConfig(e)), t(o).val(n));
		}, noWeekends: function noWeekends(t) {
			var e = t.getDay();return [e > 0 && 6 > e, ""];
		}, iso8601Week: function iso8601Week(t) {
			var e,
			    i = new Date(t.getTime());return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1;
		}, parseDate: function parseDate(e, i, s) {
			if (null == e || null == i) throw "Invalid arguments";if (i = "object" == (typeof i === 'undefined' ? 'undefined' : _typeof(i)) ? "" + i : i + "", "" === i) return null;var n,
			    o,
			    a,
			    r,
			    l = 0,
			    h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
			    c = "string" != typeof h ? h : new Date().getFullYear() % 100 + parseInt(h, 10),
			    u = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
			    d = (s ? s.dayNames : null) || this._defaults.dayNames,
			    p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
			    f = (s ? s.monthNames : null) || this._defaults.monthNames,
			    g = -1,
			    m = -1,
			    _ = -1,
			    v = -1,
			    b = !1,
			    y = function y(t) {
				var i = e.length > n + 1 && e.charAt(n + 1) === t;return i && n++, i;
			},
			    w = function w(t) {
				var e = y(t),
				    s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
				    n = "y" === t ? s : 1,
				    o = RegExp("^\\d{" + n + "," + s + "}"),
				    a = i.substring(l).match(o);if (!a) throw "Missing number at position " + l;return l += a[0].length, parseInt(a[0], 10);
			},
			    k = function k(e, s, n) {
				var o = -1,
				    a = t.map(y(e) ? n : s, function (t, e) {
					return [[e, t]];
				}).sort(function (t, e) {
					return -(t[1].length - e[1].length);
				});if (t.each(a, function (t, e) {
					var s = e[1];return i.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (o = e[0], l += s.length, !1) : void 0;
				}), -1 !== o) return o + 1;throw "Unknown name at position " + l;
			},
			    x = function x() {
				if (i.charAt(l) !== e.charAt(n)) throw "Unexpected literal at position " + l;l++;
			};for (n = 0; e.length > n; n++) {
				if (b) "'" !== e.charAt(n) || y("'") ? x() : b = !1;else switch (e.charAt(n)) {case "d":
						_ = w("d");break;case "D":
						k("D", u, d);break;case "o":
						v = w("o");break;case "m":
						m = w("m");break;case "M":
						m = k("M", p, f);break;case "y":
						g = w("y");break;case "@":
						r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();break;case "!":
						r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, _ = r.getDate();break;case "'":
						y("'") ? x() : b = !0;break;default:
						x();}
			}if (i.length > l && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;if (-1 === g ? g = new Date().getFullYear() : 100 > g && (g += new Date().getFullYear() - new Date().getFullYear() % 100 + (c >= g ? 0 : -100)), v > -1) for (m = 1, _ = v;;) {
				if (o = this._getDaysInMonth(g, m - 1), o >= _) break;m++, _ -= o;
			}if (r = this._daylightSavingAdjust(new Date(g, m - 1, _)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== _) throw "Invalid date";return r;
		}, ATOM: "yy-mm-dd", COOKIE: "D, dd M yy", ISO_8601: "yy-mm-dd", RFC_822: "D, d M y", RFC_850: "DD, dd-M-y", RFC_1036: "D, d M y", RFC_1123: "D, d M yy", RFC_2822: "D, d M yy", RSS: "D, d M y", TICKS: "!", TIMESTAMP: "@", W3C: "yy-mm-dd", _ticksTo1970: 1e7 * 60 * 60 * 24 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)), formatDate: function formatDate(t, e, i) {
			if (!e) return "";var s,
			    n = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
			    o = (i ? i.dayNames : null) || this._defaults.dayNames,
			    a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
			    r = (i ? i.monthNames : null) || this._defaults.monthNames,
			    l = function l(e) {
				var i = t.length > s + 1 && t.charAt(s + 1) === e;return i && s++, i;
			},
			    h = function h(t, e, i) {
				var s = "" + e;if (l(t)) for (; i > s.length;) {
					s = "0" + s;
				}return s;
			},
			    c = function c(t, e, i, s) {
				return l(t) ? s[e] : i[e];
			},
			    u = "",
			    d = !1;if (e) for (s = 0; t.length > s; s++) {
				if (d) "'" !== t.charAt(s) || l("'") ? u += t.charAt(s) : d = !1;else switch (t.charAt(s)) {case "d":
						u += h("d", e.getDate(), 2);break;case "D":
						u += c("D", e.getDay(), n, o);break;case "o":
						u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);break;case "m":
						u += h("m", e.getMonth() + 1, 2);break;case "M":
						u += c("M", e.getMonth(), a, r);break;case "y":
						u += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;break;case "@":
						u += e.getTime();break;case "!":
						u += 1e4 * e.getTime() + this._ticksTo1970;break;case "'":
						l("'") ? u += "'" : d = !0;break;default:
						u += t.charAt(s);}
			}return u;
		}, _possibleChars: function _possibleChars(t) {
			var e,
			    i = "",
			    s = !1,
			    n = function n(i) {
				var s = t.length > e + 1 && t.charAt(e + 1) === i;return s && e++, s;
			};for (e = 0; t.length > e; e++) {
				if (s) "'" !== t.charAt(e) || n("'") ? i += t.charAt(e) : s = !1;else switch (t.charAt(e)) {case "d":case "m":case "y":case "@":
						i += "0123456789";break;case "D":case "M":
						return null;case "'":
						n("'") ? i += "'" : s = !0;break;default:
						i += t.charAt(e);}
			}return i;
		}, _get: function _get(t, e) {
			return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e];
		}, _setDateFromField: function _setDateFromField(t, e) {
			if (t.input.val() !== t.lastVal) {
				var i = this._get(t, "dateFormat"),
				    s = t.lastVal = t.input ? t.input.val() : null,
				    n = this._getDefaultDate(t),
				    o = n,
				    a = this._getFormatConfig(t);
				try {
					o = this.parseDate(i, s, a) || n;
				} catch (r) {
					s = e ? "" : s;
				}t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = s ? o.getDate() : 0, t.currentMonth = s ? o.getMonth() : 0, t.currentYear = s ? o.getFullYear() : 0, this._adjustInstDate(t);
			}
		}, _getDefaultDate: function _getDefaultDate(t) {
			return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date()));
		}, _determineDate: function _determineDate(e, i, s) {
			var n = function n(t) {
				var e = new Date();return e.setDate(e.getDate() + t), e;
			},
			    o = function o(i) {
				try {
					return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e));
				} catch (s) {}for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date(), o = n.getFullYear(), a = n.getMonth(), r = n.getDate(), l = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, h = l.exec(i); h;) {
					switch (h[2] || "d") {case "d":case "D":
							r += parseInt(h[1], 10);break;case "w":case "W":
							r += 7 * parseInt(h[1], 10);break;case "m":case "M":
							a += parseInt(h[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));break;case "y":case "Y":
							o += parseInt(h[1], 10), r = Math.min(r, t.datepicker._getDaysInMonth(o, a));}h = l.exec(i);
				}return new Date(o, a, r);
			},
			    a = null == i || "" === i ? s : "string" == typeof i ? o(i) : "number" == typeof i ? isNaN(i) ? s : n(i) : new Date(i.getTime());return a = a && "Invalid Date" == "" + a ? s : a, a && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a);
		}, _daylightSavingAdjust: function _daylightSavingAdjust(t) {
			return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null;
		}, _setDate: function _setDate(t, e, i) {
			var s = !e,
			    n = t.selectedMonth,
			    o = t.selectedYear,
			    a = this._restrictMinMax(t, this._determineDate(t, e, new Date()));t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), n === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t));
		}, _getDate: function _getDate(t) {
			var e = !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));return e;
		}, _attachHandlers: function _attachHandlers(e) {
			var i = this._get(e, "stepMonths"),
			    s = "#" + e.id.replace(/\\\\/g, "\\");e.dpDiv.find("[data-handler]").map(function () {
				var e = { prev: function prev() {
						t.datepicker._adjustDate(s, -i, "M");
					}, next: function next() {
						t.datepicker._adjustDate(s, +i, "M");
					}, hide: function hide() {
						t.datepicker._hideDatepicker();
					}, today: function today() {
						t.datepicker._gotoToday(s);
					}, selectDay: function selectDay() {
						return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1;
					}, selectMonth: function selectMonth() {
						return t.datepicker._selectMonthYear(s, this, "M"), !1;
					}, selectYear: function selectYear() {
						return t.datepicker._selectMonthYear(s, this, "Y"), !1;
					} };t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")]);
			});
		}, _generateHTML: function _generateHTML(t) {
			var e,
			    i,
			    s,
			    n,
			    o,
			    a,
			    r,
			    l,
			    h,
			    c,
			    u,
			    d,
			    p,
			    f,
			    g,
			    m,
			    _,
			    v,
			    b,
			    y,
			    w,
			    k,
			    x,
			    C,
			    D,
			    T,
			    I,
			    P,
			    M,
			    S,
			    N,
			    H,
			    A,
			    z,
			    O,
			    E,
			    W,
			    F,
			    L,
			    R = new Date(),
			    Y = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
			    B = this._get(t, "isRTL"),
			    j = this._get(t, "showButtonPanel"),
			    q = this._get(t, "hideIfNoPrevNext"),
			    K = this._get(t, "navigationAsDateFormat"),
			    U = this._getNumberOfMonths(t),
			    V = this._get(t, "showCurrentAtPos"),
			    X = this._get(t, "stepMonths"),
			    $ = 1 !== U[0] || 1 !== U[1],
			    G = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
			    J = this._getMinMaxDate(t, "min"),
			    Q = this._getMinMaxDate(t, "max"),
			    Z = t.drawMonth - V,
			    te = t.drawYear;if (0 > Z && (Z += 12, te--), Q) for (e = this._daylightSavingAdjust(new Date(Q.getFullYear(), Q.getMonth() - U[0] * U[1] + 1, Q.getDate())), e = J && J > e ? J : e; this._daylightSavingAdjust(new Date(te, Z, 1)) > e;) {
				Z--, 0 > Z && (Z = 11, te--);
			}for (t.drawMonth = Z, t.drawYear = te, i = this._get(t, "prevText"), i = K ? this.formatDate(i, this._daylightSavingAdjust(new Date(te, Z - X, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, te, Z) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", n = this._get(t, "nextText"), n = K ? this.formatDate(n, this._daylightSavingAdjust(new Date(te, Z + X, 1)), this._getFormatConfig(t)) : n, o = this._canAdjustMonth(t, 1, te, Z) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + n + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + n + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? G : Y, a = K ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = j ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), _ = this._get(t, "showOtherMonths"), v = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), y = "", k = 0; U[0] > k; k++) {
				for (x = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
					if (D = this._daylightSavingAdjust(new Date(te, Z, t.selectedDay)), T = " ui-corner-all", I = "", $) {
						if (I += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {case 0:
								I += " ui-datepicker-group-first", T = " ui-corner-" + (B ? "right" : "left");break;case U[1] - 1:
								I += " ui-datepicker-group-last", T = " ui-corner-" + (B ? "left" : "right");break;default:
								I += " ui-datepicker-group-middle", T = "";}I += "'>";
					}for (I += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + T + "'>" + (/all|left/.test(T) && 0 === k ? B ? o : s : "") + (/all|right/.test(T) && 0 === k ? B ? s : o : "") + this._generateMonthYearHeader(t, Z, te, J, Q, k > 0 || C > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead>" + "<tr>", P = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) {
						M = (w + c) % 7, P += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + ">" + "<span title='" + d[M] + "'>" + p[M] + "</span></th>";
					}for (I += P + "</tr></thead><tbody>", S = this._getDaysInMonth(te, Z), te === t.selectedYear && Z === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, S)), N = (this._getFirstDayOfMonth(te, Z) - c + 7) % 7, H = Math.ceil((N + S) / 7), A = $ ? this.maxRows > H ? this.maxRows : H : H, this.maxRows = A, z = this._daylightSavingAdjust(new Date(te, Z, 1 - N)), O = 0; A > O; O++) {
						for (I += "<tr>", E = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(z) + "</td>" : "", w = 0; 7 > w; w++) {
							W = m ? m.apply(t.input ? t.input[0] : null, [z]) : [!0, ""], F = z.getMonth() !== Z, L = F && !v || !W[0] || J && J > z || Q && z > Q, E += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (z.getTime() === D.getTime() && Z === t.selectedMonth && t._keyEvent || b.getTime() === z.getTime() && b.getTime() === D.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !_ ? "" : " " + W[1] + (z.getTime() === G.getTime() ? " " + this._currentClass : "") + (z.getTime() === Y.getTime() ? " ui-datepicker-today" : "")) + "'" + (F && !_ || !W[2] ? "" : " title='" + W[2].replace(/'/g, "&#39;") + "'") + (L ? "" : " data-handler='selectDay' data-event='click' data-month='" + z.getMonth() + "' data-year='" + z.getFullYear() + "'") + ">" + (F && !_ ? "&#xa0;" : L ? "<span class='ui-state-default'>" + z.getDate() + "</span>" : "<a class='ui-state-default" + (z.getTime() === Y.getTime() ? " ui-state-highlight" : "") + (z.getTime() === G.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + "' href='#'>" + z.getDate() + "</a>") + "</td>", z.setDate(z.getDate() + 1), z = this._daylightSavingAdjust(z);
						}I += E + "</tr>";
					}Z++, Z > 11 && (Z = 0, te++), I += "</tbody></table>" + ($ ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), x += I;
				}y += x;
			}return y += h, t._keyEvent = !1, y;
		}, _generateMonthYearHeader: function _generateMonthYearHeader(t, e, i, s, n, o, a, r) {
			var l,
			    h,
			    c,
			    u,
			    d,
			    p,
			    f,
			    g,
			    m = this._get(t, "changeMonth"),
			    _ = this._get(t, "changeYear"),
			    v = this._get(t, "showMonthAfterYear"),
			    b = "<div class='ui-datepicker-title'>",
			    y = "";if (o || !m) y += "<span class='ui-datepicker-month'>" + a[e] + "</span>";else {
				for (l = s && s.getFullYear() === i, h = n && n.getFullYear() === i, y += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++) {
					(!l || c >= s.getMonth()) && (!h || n.getMonth() >= c) && (y += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
				}y += "</select>";
			}if (v || (b += y + (!o && m && _ ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", o || !_) b += "<span class='ui-datepicker-year'>" + i + "</span>";else {
				for (u = this._get(t, "yearRange").split(":"), d = new Date().getFullYear(), p = function p(t) {
					var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10);return isNaN(e) ? d : e;
				}, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, g = n ? Math.min(g, n.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) {
					t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
				}t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null;
			}return b += this._get(t, "yearSuffix"), v && (b += (!o && m && _ ? "" : "&#xa0;") + y), b += "</div>";
		}, _adjustInstDate: function _adjustInstDate(t, e, i) {
			var s = t.selectedYear + ("Y" === i ? e : 0),
			    n = t.selectedMonth + ("M" === i ? e : 0),
			    o = Math.min(t.selectedDay, this._getDaysInMonth(s, n)) + ("D" === i ? e : 0),
			    a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, n, o)));t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t);
		}, _restrictMinMax: function _restrictMinMax(t, e) {
			var i = this._getMinMaxDate(t, "min"),
			    s = this._getMinMaxDate(t, "max"),
			    n = i && i > e ? i : e;return s && n > s ? s : n;
		}, _notifyChange: function _notifyChange(t) {
			var e = this._get(t, "onChangeMonthYear");e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t]);
		}, _getNumberOfMonths: function _getNumberOfMonths(t) {
			var e = this._get(t, "numberOfMonths");return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e;
		}, _getMinMaxDate: function _getMinMaxDate(t, e) {
			return this._determineDate(t, this._get(t, e + "Date"), null);
		}, _getDaysInMonth: function _getDaysInMonth(t, e) {
			return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate();
		}, _getFirstDayOfMonth: function _getFirstDayOfMonth(t, e) {
			return new Date(t, e, 1).getDay();
		}, _canAdjustMonth: function _canAdjustMonth(t, e, i, s) {
			var n = this._getNumberOfMonths(t),
			    o = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : n[0] * n[1]), 1));return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o);
		}, _isInRange: function _isInRange(t, e) {
			var i,
			    s,
			    n = this._getMinMaxDate(t, "min"),
			    o = this._getMinMaxDate(t, "max"),
			    a = null,
			    r = null,
			    l = this._get(t, "yearRange");return l && (i = l.split(":"), s = new Date().getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!n || e.getTime() >= n.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear());
		}, _getFormatConfig: function _getFormatConfig(t) {
			var e = this._get(t, "shortYearCutoff");return e = "string" != typeof e ? e : new Date().getFullYear() % 100 + parseInt(e, 10), { shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") };
		}, _formatDate: function _formatDate(t, e, i, s) {
			e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);var n = e ? "object" == (typeof e === 'undefined' ? 'undefined' : _typeof(e)) ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));return this.formatDate(this._get(t, "dateFormat"), n, this._getFormatConfig(t));
		} }), t.fn.datepicker = function (e) {
		if (!this.length) return this;t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);var i = Array.prototype.slice.call(arguments, 1);return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
			"string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e);
		}) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i));
	}, t.datepicker = new i(), t.datepicker.initialized = !1, t.datepicker.uuid = new Date().getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.escapeSelector = function () {
		var t = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g;return function (e) {
			return e.replace(t, "\\$1");
		};
	}(), t.ui.safeActiveElement = function (t) {
		var e;try {
			e = t.activeElement;
		} catch (i) {
			e = t.body;
		}return e || (e = t.body), e.nodeName || (e = t.body), e;
	}, t.widget("ui.tabs", { version: "1.12.1", delay: 300, options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null }, _isLocal: function () {
			var t = /#.*$/;return function (e) {
				var i, s;i = e.href.replace(t, ""), s = location.href.replace(t, "");try {
					i = decodeURIComponent(i);
				} catch (n) {}try {
					s = decodeURIComponent(s);
				} catch (n) {}return e.hash.length > 1 && i === s;
			};
		}(), _create: function _create() {
			var e = this,
			    i = this.options;this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
				return e.tabs.index(t);
			}))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active);
		}, _initialActive: function _initialActive() {
			var e = this.options.active,
			    i = this.options.collapsible,
			    s = location.hash.substring(1);return null === e && (s && this.tabs.each(function (i, n) {
				return t(n).attr("aria-controls") === s ? (e = i, !1) : void 0;
			}), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = this.tabs.length ? 0 : !1)), e !== !1 && (e = this.tabs.index(this.tabs.eq(e)), -1 === e && (e = i ? !1 : 0)), !i && e === !1 && this.anchors.length && (e = 0), e;
		}, _getCreateEventData: function _getCreateEventData() {
			return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() };
		}, _tabKeydown: function _tabKeydown(e) {
			var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
			    s = this.tabs.index(i),
			    n = !0;if (!this._handlePageNav(e)) {
				switch (e.keyCode) {case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:
						s++;break;case t.ui.keyCode.UP:case t.ui.keyCode.LEFT:
						n = !1, s--;break;case t.ui.keyCode.END:
						s = this.anchors.length - 1;break;case t.ui.keyCode.HOME:
						s = 0;break;case t.ui.keyCode.SPACE:
						return e.preventDefault(), clearTimeout(this.activating), this._activate(s), void 0;case t.ui.keyCode.ENTER:
						return e.preventDefault(), clearTimeout(this.activating), this._activate(s === this.options.active ? !1 : s), void 0;default:
						return;}e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, n), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
					this.option("active", s);
				}, this.delay));
			}
		}, _panelKeydown: function _panelKeydown(e) {
			this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"));
		}, _handlePageNav: function _handlePageNav(e) {
			return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0;
		}, _findNextTab: function _findNextTab(e, i) {
			function s() {
				return e > n && (e = 0), 0 > e && (e = n), e;
			}for (var n = this.tabs.length - 1; -1 !== t.inArray(s(), this.options.disabled);) {
				e = i ? e + 1 : e - 1;
			}return e;
		}, _focusNextTab: function _focusNextTab(t, e) {
			return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t;
		}, _setOption: function _setOption(t, e) {
			return "active" === t ? (this._activate(e), void 0) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || this.options.active !== !1 || this._activate(0)), "event" === t && this._setupEvents(e), "heightStyle" === t && this._setupHeightStyle(e), void 0);
		}, _sanitizeSelector: function _sanitizeSelector(t) {
			return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "";
		}, refresh: function refresh() {
			var e = this.options,
			    i = this.tablist.children(":has(a[href])");e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
				return i.index(t);
			}), this._processTabs(), e.active !== !1 && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh();
		}, _refresh: function _refresh() {
			this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0);
		}, _processTabs: function _processTabs() {
			var e = this,
			    i = this.tabs,
			    s = this.anchors,
			    n = this.panels;this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
				t(this).is(".ui-state-disabled") && e.preventDefault();
			}).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
				t(this).closest("li").is(".ui-state-disabled") && this.blur();
			}), this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
				return t("a", this)[0];
			}).attr({ role: "presentation", tabIndex: -1 }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, s) {
				var n,
				    o,
				    a,
				    r = t(s).uniqueId().attr("id"),
				    l = t(s).closest("li"),
				    h = l.attr("aria-controls");e._isLocal(s) ? (n = s.hash, a = n.substring(1), o = e.element.find(e._sanitizeSelector(n))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, n = "#" + a, o = e.element.find(n), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({ "aria-controls": a, "aria-labelledby": r }), o.attr("aria-labelledby", r);
			}), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(n.not(this.panels)));
		}, _getList: function _getList() {
			return this.tablist || this.element.find("ol, ul").eq(0);
		}, _createPanel: function _createPanel(e) {
			return t("<div>").attr("id", e).data("ui-tabs-destroy", !0);
		}, _setOptionDisabled: function _setOptionDisabled(e) {
			var i, s, n;for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), n = 0; s = this.tabs[n]; n++) {
				i = t(s), e === !0 || -1 !== t.inArray(n, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
			}this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, e === !0);
		}, _setupEvents: function _setupEvents(e) {
			var i = {};e && t.each(e.split(" "), function (t, e) {
				i[e] = "_eventHandler";
			}), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function click(t) {
					t.preventDefault();
				} }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs);
		}, _setupHeightStyle: function _setupHeightStyle(e) {
			var i,
			    s = this.element.parent();"fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
				var e = t(this),
				    s = e.css("position");"absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0));
			}), this.element.children().not(this.panels).each(function () {
				i -= t(this).outerHeight(!0);
			}), this.panels.each(function () {
				t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()));
			}).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
				i = Math.max(i, t(this).height("").height());
			}).height(i));
		}, _eventHandler: function _eventHandler(e) {
			var i = this.options,
			    s = this.active,
			    n = t(e.currentTarget),
			    o = n.closest("li"),
			    a = o[0] === s[0],
			    r = a && i.collapsible,
			    l = r ? t() : this._getPanelForTab(o),
			    h = s.length ? this._getPanelForTab(s) : t(),
			    c = { oldTab: s, oldPanel: h, newTab: r ? t() : o, newPanel: l };e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", e, c) === !1 || (i.active = r ? !1 : this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, c));
		}, _toggle: function _toggle(e, i) {
			function s() {
				o.running = !1, o._trigger("activate", e, i);
			}function n() {
				o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, s) : (a.show(), s());
			}var o = this,
			    a = i.newPanel,
			    r = i.oldPanel;this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
				o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), n();
			}) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), n()), r.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
				return 0 === t(this).attr("tabIndex");
			}).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 });
		}, _activate: function _activate(e) {
			var i,
			    s = this._findActive(e);s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }));
		}, _findActive: function _findActive(e) {
			return e === !1 ? t() : this.tabs.eq(e);
		}, _getIndex: function _getIndex(e) {
			return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e;
		}, _destroy: function _destroy() {
			this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
				t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded");
			}), this.tabs.each(function () {
				var e = t(this),
				    i = e.data("ui-tabs-aria-controls");i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls");
			}), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "");
		}, enable: function enable(e) {
			var i = this.options.disabled;i !== !1 && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
				return t !== e ? t : null;
			}) : t.map(this.tabs, function (t, i) {
				return i !== e ? i : null;
			})), this._setOptionDisabled(i));
		}, disable: function disable(e) {
			var i = this.options.disabled;if (i !== !0) {
				if (void 0 === e) i = !0;else {
					if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;i = t.isArray(i) ? t.merge([e], i).sort() : [e];
				}this._setOptionDisabled(i);
			}
		}, load: function load(e, i) {
			e = this._getIndex(e);var s = this,
			    n = this.tabs.eq(e),
			    o = n.find(".ui-tabs-anchor"),
			    a = this._getPanelForTab(n),
			    r = { tab: n, panel: a },
			    l = function l(t, e) {
				"abort" === e && s.panels.stop(!1, !0), s._removeClass(n, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr;
			};this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(n, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, n) {
				setTimeout(function () {
					a.html(t), s._trigger("load", i, r), l(n, e);
				}, 1);
			}).fail(function (t, e) {
				setTimeout(function () {
					l(t, e);
				}, 1);
			})));
		}, _ajaxSettings: function _ajaxSettings(e, i, s) {
			var n = this;return { url: e.attr("href").replace(/#.*$/, ""), beforeSend: function beforeSend(e, o) {
					return n._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, s));
				} };
		}, _getPanelForTab: function _getPanelForTab(e) {
			var i = t(e).attr("aria-controls");return this.element.find(this._sanitizeSelector("#" + i));
		} }), t.uiBackCompat !== !1 && t.widget("ui.tabs", t.ui.tabs, { _processTabs: function _processTabs() {
			this._superApply(arguments), this._addClass(this.tabs, "ui-tab");
		} }), t.ui.tabs;
});
/* jQuery ui-datepicker extension */

/**
 *
 * https://gist.github.com/Artemeey/8bacd37964a8069a2eeee8c9b0bd2e44/
 *
 * Version: 1.0 (15.06.2016)
 * Requires: jQuery v1.8+
 * Requires: jQuery-UI v1.10+
 *
 * Copyright (c) 2016 Artemeey
 * Under MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 *
 * sample:
 * $('.datepicker').datepicker({
		range:'period', // 'period' or 'multiple'
		onSelect:function(dateText, inst, extensionRange){
			// range - new argument!
			switch(inst.settings.range){
				case 'period':
					console.log(extensionRange.startDateText);
					console.log(extensionRange.endDateText);
					console.log(extensionRange.startDate);
					console.log(extensionRange.endDate);
					break;
				case 'multiple':
					console.log(extensionRange.dates); // object, width UTC-TIME keys
					console.log(extensionRange.datesText); // object, width UTC-TIME keys
					break;
			}
		}
	});
 *
 * extension styles:
 * .selected
 * .selected-start
 * .selected-end
 * .first-of-month
 * .last-of-month
 *
 */

$.datepicker._get_original = $.datepicker._get, $.datepicker._get = function (t, e) {
	var i = $.datepicker._get_original(t, e),
	    a = t.settings.range;if (!a) return i;var s = this;switch (a) {case "period":case "multiple":
			var n = $(this.dpDiv).data("datepickerExtensionRange");switch (n || (n = new _datepickerExtension(), $(this.dpDiv).data("datepickerExtensionRange", n)), n.range = a, n.range_multiple_max = t.settings.range_multiple_max || 0, e) {case "onSelect":
					var r = i;r || (r = function r() {}), i = function i(t, e) {
						n.onSelect(t, e), r(t, e, n), s._datepickerShowing = !1, setTimeout(function () {
							s._updateDatepicker(e), s._datepickerShowing = !0;
						}), n.setClassActive(e);
					};break;case "beforeShowDay":
					var r = i;r || (r = function r() {
						return [!0, ""];
					}), i = function i(t) {
						var e = r(t);return e = n.fillDay(t, e);
					};break;case "beforeShow":
					var r = i;r || (r = function r() {}), i = function i(t, e) {
						r(t, e), n.setClassActive(e);
					};break;case "onChangeMonthYear":
					var r = i;r || (r = function r() {}), i = function i(t, e, _i) {
						r(t, e, _i), n.setClassActive(_i);
					};}}return i;
}, $.datepicker._setDate_original = $.datepicker._setDate, $.datepicker._setDate = function (t, e, i) {
	var a = t.settings.range;if (!a) return $.datepicker._setDate_original(t, e, i);var s = this.dpDiv.data("datepickerExtensionRange");if (!s) return $.datepicker._setDate_original(t, e, i);switch (a) {case "period":
			("object" != (typeof e === 'undefined' ? 'undefined' : _typeof(e)) || void 0 == e.length) && (e = [e, e]), s.step = 0, $.datepicker._setDate_original(t, e[0], i), s.startDate = this._getDate(t), s.startDateText = this._formatDate(t), $.datepicker._setDate_original(t, e[1], i), s.endDate = this._getDate(t), s.endDateText = this._formatDate(t), s.setClassActive(t);break;case "multiple":
			("object" != (typeof e === 'undefined' ? 'undefined' : _typeof(e)) || void 0 == e.length) && (e = [e]), s.dates = [], s.datesText = [];var n = this;$.map(e, function (e) {
				$.datepicker._setDate_original(t, e, i), s.dates.push(n._getDate(t)), s.datesText.push(n._formatDate(t));
			}), s.setClassActive(t);}
};var _datepickerExtension = function _datepickerExtension() {
	this.range = !1, this.range_multiple_max = 0, this.step = 0, this.dates = [], this.datesText = [], this.startDate = null, this.endDate = null, this.startDateText = "", this.endDateText = "", this.onSelect = function (t, e) {
		switch (this.range) {case "period":
				return this.onSelectPeriod(t, e);case "multiple":
				return this.onSelectMultiple(t, e);}
	}, this.onSelectPeriod = function (t, e) {
		this.step++, this.step %= 2, this.step ? (this.startDate = this.getSelectedDate(e), this.endDate = this.startDate, this.startDateText = t, this.endDateText = this.startDateText) : (this.endDate = this.getSelectedDate(e), this.endDateText = t, this.startDate.getTime() > this.endDate.getTime() && (this.endDate = this.startDate, this.startDate = this.getSelectedDate(e), this.endDateText = this.startDateText, this.startDateText = t));
	}, this.onSelectMultiple = function (t, e) {
		var i = this.getSelectedDate(e),
		    a = -1;$.map(this.dates, function (t, e) {
			t.getTime() == i.getTime() && (a = e);
		});var s = $.inArray(t, this.datesText);-1 != a ? this.dates.splice(a, 1) : this.dates.push(i), -1 != s ? this.datesText.splice(s, 1) : this.datesText.push(t), this.range_multiple_max && this.dates.length > this.range_multiple_max && (this.dates.splice(0, 1), this.datesText.splice(0, 1));
	}, this.fillDay = function (t, e) {
		var i = e[1];switch (1 == t.getDate() && (i += " first-of-month"), t.getDate() == new Date(t.getFullYear(), t.getMonth() + 1, 0).getDate() && (i += " last-of-month"), e[1] = i.trim(), this.range) {case "period":
				return this.fillDayPeriod(t, e);case "multiple":
				return this.fillDayMultiple(t, e);}
	}, this.fillDayPeriod = function (t, e) {
		if (!this.startDate || !this.endDate) return e;var i = e[1];return t >= this.startDate && t <= this.endDate && (i += " selected"), t.getTime() == this.startDate.getTime() && (i += " selected-start"), t.getTime() == this.endDate.getTime() && (i += " selected-end"), e[1] = i.trim(), e;
	}, this.fillDayMultiple = function (t, e) {
		var i = e[1],
		    a = !1;return $.map(this.dates, function (e) {
			e.getTime() == t.getTime() && (a = !0);
		}), a && (i += " selected selected-start selected-end"), e[1] = i.trim(), e;
	}, this.getSelectedDate = function (t) {
		return new Date(t.selectedYear, t.selectedMonth, t.selectedDay);
	}, this.setClassActive = function (t) {
		var e = this;setTimeout(function () {
			$("td.selected > *", t.dpDiv).addClass("ui-state-active"), "multiple" == e.range && $("td:not(.selected)", t.dpDiv).removeClass("ui-datepicker-current-day").children().removeClass("ui-state-active");
		});
	};
};
/*
 * MultiDatesPicker v1.6.4
 * http://multidatespickr.sourceforge.net/
 * 
 * Copyright 2014, Luca Lauretta
 * Dual licensed under the MIT or GPL version 2 licenses.
 */
(function ($) {
	$.extend($.ui, { multiDatesPicker: { version: "1.6.4" } });

	$.fn.multiDatesPicker = function (method) {
		var mdp_arguments = arguments;
		var ret = this;
		var today_date = new Date();
		var day_zero = new Date(0);
		var mdp_events = {};

		function removeDate(date, type) {
			if (!type) type = 'picked';
			date = dateConvert.call(this, date);
			for (var i = 0; i < this.multiDatesPicker.dates[type].length; i++) {
				if (!methods.compareDates(this.multiDatesPicker.dates[type][i], date)) return this.multiDatesPicker.dates[type].splice(i, 1).pop();
			}
		}
		function removeIndex(index, type) {
			if (!type) type = 'picked';
			return this.multiDatesPicker.dates[type].splice(index, 1).pop();
		}
		function addDate(date, type, no_sort) {
			if (!type) type = 'picked';
			date = dateConvert.call(this, date);

			// @todo: use jQuery UI datepicker method instead
			date.setHours(0);
			date.setMinutes(0);
			date.setSeconds(0);
			date.setMilliseconds(0);

			if (methods.gotDate.call(this, date, type) === false) {
				this.multiDatesPicker.dates[type].push(date);
				if (!no_sort) this.multiDatesPicker.dates[type].sort(methods.compareDates);
			}
		}
		function sortDates(type) {
			if (!type) type = 'picked';
			this.multiDatesPicker.dates[type].sort(methods.compareDates);
		}
		function dateConvert(date, desired_type, date_format) {
			if (!desired_type) desired_type = 'object'; /*
                                               if(!date_format && (typeof date == 'string')) {
                                               date_format = $(this).datepicker('option', 'dateFormat');
                                               if(!date_format) date_format = $.datepicker._defaults.dateFormat;
                                               }
                                               */
			return methods.dateConvert.call(this, date, desired_type, date_format);
		}

		var methods = {
			init: function init(options) {
				var $this = $(this);
				this.multiDatesPicker.changed = false;

				var mdp_events = {
					beforeShow: function beforeShow(input, inst) {
						this.multiDatesPicker.changed = false;
						if (this.multiDatesPicker.originalBeforeShow) this.multiDatesPicker.originalBeforeShow.call(this, input, inst);
					},
					onSelect: function onSelect(dateText, inst) {
						var $this = $(this);
						this.multiDatesPicker.changed = true;

						if (dateText) {
							$this.multiDatesPicker('toggleDate', dateText);
							this.multiDatesPicker.changed = true;
							// @todo: this will be optimized when I'll move methods to the singleton.
						}

						if (this.multiDatesPicker.mode == 'normal' && this.multiDatesPicker.pickableRange) {
							if (this.multiDatesPicker.dates.picked.length > 0) {
								var min_date = this.multiDatesPicker.dates.picked[0],
								    max_date = new Date(min_date.getTime());

								methods.sumDays(max_date, this.multiDatesPicker.pickableRange - 1);

								// counts the number of disabled dates in the range
								if (this.multiDatesPicker.adjustRangeToDisabled) {
									var c_disabled,
									    disabled = this.multiDatesPicker.dates.disabled.slice(0);
									do {
										c_disabled = 0;
										for (var i = 0; i < disabled.length; i++) {
											if (disabled[i].getTime() <= max_date.getTime()) {
												if (min_date.getTime() <= disabled[i].getTime() && disabled[i].getTime() <= max_date.getTime()) {
													c_disabled++;
												}
												disabled.splice(i, 1);
												i--;
											}
										}
										max_date.setDate(max_date.getDate() + c_disabled);
									} while (c_disabled != 0);
								}

								if (this.multiDatesPicker.maxDate && max_date > this.multiDatesPicker.maxDate) max_date = this.multiDatesPicker.maxDate;

								$this.datepicker("option", "minDate", min_date).datepicker("option", "maxDate", max_date);
							} else {
								$this.datepicker("option", "minDate", this.multiDatesPicker.minDate).datepicker("option", "maxDate", this.multiDatesPicker.maxDate);
							}
						}

						if (this.multiDatesPicker.originalOnSelect && dateText) this.multiDatesPicker.originalOnSelect.call(this, dateText, inst);
					},
					beforeShowDay: function beforeShowDay(date) {
						var $this = $(this),
						    gotThisDate = $this.multiDatesPicker('gotDate', date) !== false,
						    isDisabledCalendar = $this.datepicker('option', 'disabled'),
						    isDisabledDate = $this.multiDatesPicker('gotDate', date, 'disabled') !== false,
						    areAllSelected = this.multiDatesPicker.maxPicks <= this.multiDatesPicker.dates.picked.length;

						var bsdReturn = [true, '', null];
						if (this.multiDatesPicker.originalBeforeShowDay) bsdReturn = this.multiDatesPicker.originalBeforeShowDay.call(this, date);

						bsdReturn[1] = gotThisDate ? 'ui-state-highlight ' + bsdReturn[1] : bsdReturn[1];
						bsdReturn[0] = bsdReturn[0] && !(isDisabledCalendar || isDisabledDate || areAllSelected && !bsdReturn[1]);
						return bsdReturn;
					}
				};

				// value have to be extracted before datepicker is initiated
				if ($this.val()) var inputDates = $this.val();

				if (options) {
					// value have to be extracted before datepicker is initiated
					//if(options.altField) var inputDates = $(options.altField).val();
					if (options.separator) this.multiDatesPicker.separator = options.separator;
					if (!this.multiDatesPicker.separator) this.multiDatesPicker.separator = ', ';

					this.multiDatesPicker.originalBeforeShow = options.beforeShow;
					this.multiDatesPicker.originalOnSelect = options.onSelect;
					this.multiDatesPicker.originalBeforeShowDay = options.beforeShowDay;
					this.multiDatesPicker.originalOnClose = options.onClose;

					// datepicker init
					$this.datepicker(options);

					this.multiDatesPicker.minDate = $.datepicker._determineDate(this, options.minDate, null);
					this.multiDatesPicker.maxDate = $.datepicker._determineDate(this, options.maxDate, null);
					if (options.addDates) methods.addDates.call(this, options.addDates);

					if (options.addDisabledDates) methods.addDates.call(this, options.addDisabledDates, 'disabled');

					methods.setMode.call(this, options);
				} else {
					$this.datepicker();
				}
				$this.datepicker('option', mdp_events);

				// adds any dates found in the input or alt field
				if (inputDates) $this.multiDatesPicker('value', inputDates);

				// generates the new string of added dates
				var inputs_values = $this.multiDatesPicker('value');

				// fills the input field back with all the dates in the calendar
				$this.val(inputs_values);

				// Fixes the altField filled with defaultDate by default
				var altFieldOption = $this.datepicker('option', 'altField');
				if (altFieldOption) $(altFieldOption).val(inputs_values);

				// Updates the calendar view
				$this.datepicker('refresh');
			},
			compareDates: function compareDates(date1, date2) {
				date1 = dateConvert.call(this, date1);
				date2 = dateConvert.call(this, date2);
				// return > 0 means date1 is later than date2 
				// return == 0 means date1 is the same day as date2 
				// return < 0 means date1 is earlier than date2 
				var diff = date1.getFullYear() - date2.getFullYear();
				if (!diff) {
					diff = date1.getMonth() - date2.getMonth();
					if (!diff) diff = date1.getDate() - date2.getDate();
				}
				return diff;
			},
			sumDays: function sumDays(date, n_days) {
				var origDateType = typeof date === 'undefined' ? 'undefined' : _typeof(date);
				obj_date = dateConvert.call(this, date);
				obj_date.setDate(obj_date.getDate() + n_days);
				return dateConvert.call(this, obj_date, origDateType);
			},
			dateConvert: function dateConvert(date, desired_format, dateFormat) {
				var from_format = typeof date === 'undefined' ? 'undefined' : _typeof(date);
				var $this = $(this);

				if (from_format == desired_format) {
					if (from_format == 'object') {
						try {
							date.getTime();
						} catch (e) {
							$.error('Received date is in a non supported format!');
							return false;
						}
					}
					return date;
				}

				if (typeof date == 'undefined') date = new Date(0);

				if (desired_format != 'string' && desired_format != 'object' && desired_format != 'number') $.error('Date format "' + desired_format + '" not supported!');

				if (!dateFormat) {
					// thanks to bibendus83 -> http://sourceforge.net/tracker/index.php?func=detail&aid=3213174&group_id=358205&atid=1495382
					var dp_dateFormat = $this.datepicker('option', 'dateFormat');
					if (dp_dateFormat) {
						dateFormat = dp_dateFormat;
					} else {
						dateFormat = $.datepicker._defaults.dateFormat;
					}
				}

				// converts to object as a neutral format
				switch (from_format) {
					case 'object':
						break;
					case 'string':
						date = $.datepicker.parseDate(dateFormat, date);break;
					case 'number':
						date = new Date(date);break;
					default:
						$.error('Conversion from "' + desired_format + '" format not allowed on jQuery.multiDatesPicker');
				}
				// then converts to the desired format
				switch (desired_format) {
					case 'object':
						return date;
					case 'string':
						return $.datepicker.formatDate(dateFormat, date);
					case 'number':
						return date.getTime();
					default:
						$.error('Conversion to "' + desired_format + '" format not allowed on jQuery.multiDatesPicker');
				}
				return false;
			},
			gotDate: function gotDate(date, type) {
				if (!type) type = 'picked';
				for (var i = 0; i < this.multiDatesPicker.dates[type].length; i++) {
					if (methods.compareDates.call(this, this.multiDatesPicker.dates[type][i], date) === 0) {
						return i;
					}
				}
				return false;
			},
			value: function value(_value) {
				if (_value && typeof _value == 'string') {
					methods.addDates.call(this, _value.split(this.multiDatesPicker.separator));
				} else {
					var dates = methods.getDates.call(this, 'string');
					return dates.length ? dates.join(this.multiDatesPicker.separator) : "";
				}
			},
			getDates: function getDates(format, type) {
				if (!format) format = 'string';
				if (!type) type = 'picked';
				switch (format) {
					case 'object':
						return this.multiDatesPicker.dates[type];
					case 'string':
					case 'number':
						var o_dates = new Array();
						for (var i in this.multiDatesPicker.dates[type]) {
							o_dates.push(dateConvert.call(this, this.multiDatesPicker.dates[type][i], format));
						}return o_dates;

					default:
						$.error('Format "' + format + '" not supported!');
				}
			},
			addDates: function addDates(dates, type) {
				if (dates.length > 0) {
					if (!type) type = 'picked';
					switch (typeof dates === 'undefined' ? 'undefined' : _typeof(dates)) {
						case 'object':
						case 'array':
							if (dates.length) {
								for (var i = 0; i < dates.length; i++) {
									addDate.call(this, dates[i], type, true);
								}sortDates.call(this, type);
								break;
							} // else does the same as 'string'
						case 'string':
						case 'number':
							addDate.call(this, dates, type);
							break;
						default:
							$.error('Date format "' + (typeof dates === 'undefined' ? 'undefined' : _typeof(dates)) + '" not allowed on jQuery.multiDatesPicker');
					}
					//$(this).datepicker('refresh');
				} else {
					$.error('Empty array of dates received.');
				}
			},
			removeDates: function removeDates(dates, type) {
				if (!type) type = 'picked';
				var removed = [];
				if (Object.prototype.toString.call(dates) === '[object Array]') {
					for (var i in dates.sort(function (a, b) {
						return b - a;
					})) {
						removed.push(removeDate.call(this, dates[i], type));
					}
				} else {
					removed.push(removeDate.call(this, dates, type));
				}
				return removed;
			},
			removeIndexes: function removeIndexes(indexes, type) {
				if (!type) type = 'picked';
				var removed = [];
				if (Object.prototype.toString.call(indexes) === '[object Array]') {
					for (var i in indexes.sort(function (a, b) {
						return b - a;
					})) {
						removed.push(removeIndex.call(this, indexes[i], type));
					}
				} else {
					removed.push(removeIndex.call(this, indexes, type));
				}
				return removed;
			},
			resetDates: function resetDates(type) {
				if (!type) type = 'picked';
				this.multiDatesPicker.dates[type] = [];
			},
			toggleDate: function toggleDate(date, type) {
				if (!type) type = 'picked';

				switch (this.multiDatesPicker.mode) {
					case 'daysRange':
						this.multiDatesPicker.dates[type] = []; // deletes all picked/disabled dates
						var end = this.multiDatesPicker.autoselectRange[1];
						var begin = this.multiDatesPicker.autoselectRange[0];
						if (end < begin) {
							// switch
							end = this.multiDatesPicker.autoselectRange[0];
							begin = this.multiDatesPicker.autoselectRange[1];
						}
						for (var i = begin; i < end; i++) {
							methods.addDates.call(this, methods.sumDays.call(this, date, i), type);
						}break;
					default:
						if (methods.gotDate.call(this, date) === false) // adds dates
							methods.addDates.call(this, date, type);else // removes dates
							methods.removeDates.call(this, date, type);
						break;
				}
			},
			setMode: function setMode(options) {
				var $this = $(this);
				if (options.mode) this.multiDatesPicker.mode = options.mode;

				switch (this.multiDatesPicker.mode) {
					case 'normal':
						for (option in options) {
							switch (option) {
								case 'maxPicks':
								case 'minPicks':
								case 'pickableRange':
								case 'adjustRangeToDisabled':
									this.multiDatesPicker[option] = options[option];
									break;
								//default: $.error('Option ' + option + ' ignored for mode "'.options.mode.'".');
							}
						}break;
					case 'daysRange':
					case 'weeksRange':
						var mandatory = 1;
						for (option in options) {
							switch (option) {
								case 'autoselectRange':
									mandatory--;
								case 'pickableRange':
								case 'adjustRangeToDisabled':
									this.multiDatesPicker[option] = options[option];
									break;
								//default: $.error('Option ' + option + ' does not exist for setMode on jQuery.multiDatesPicker');
							}
						}if (mandatory > 0) $.error('Some mandatory options not specified!');
						break;
				}

				/*
    if(options.pickableRange) {
    	$this.datepicker("option", "maxDate", options.pickableRange);
    	$this.datepicker("option", "minDate", this.multiDatesPicker.minDate);
    }
    */

				if (mdp_events.onSelect) mdp_events.onSelect();
			},
			destroy: function destroy() {
				this.multiDatesPicker = null;
				$(this).datepicker('destroy');
			}
		};

		this.each(function () {
			var $this = $(this);
			if (!this.multiDatesPicker) {
				this.multiDatesPicker = {
					dates: {
						picked: [],
						disabled: []
					},
					mode: 'normal',
					adjustRangeToDisabled: true
				};
			}

			if (methods[method]) {
				var exec_result = methods[method].apply(this, Array.prototype.slice.call(mdp_arguments, 1));
				switch (method) {
					case 'removeDates':
					case 'removeIndexes':
					case 'resetDates':
					case 'toggleDate':
					case 'addDates':
						var altField = $this.datepicker('option', 'altField');
						// @todo: should use altFormat for altField
						var dates_string = methods.value.call(this);
						if (altField !== undefined && altField != "") {
							$(altField).val(dates_string);
						}
						$this.val(dates_string);

						$.datepicker._refreshDatepicker(this);
				}
				switch (method) {
					case 'removeDates':
					case 'getDates':
					case 'gotDate':
					case 'sumDays':
					case 'compareDates':
					case 'dateConvert':
					case 'value':
						ret = exec_result;
				}
				return exec_result;
			} else if ((typeof method === 'undefined' ? 'undefined' : _typeof(method)) === 'object' || !method) {
				return methods.init.apply(this, mdp_arguments);
			} else {
				$.error('Method ' + method + ' does not exist on jQuery.multiDatesPicker');
			}
			return false;
		});

		return ret;
	};

	var PROP_NAME = 'multiDatesPicker';
	var dpuuid = new Date().getTime();
	var instActive;

	$.multiDatesPicker = { version: false };
	//$.multiDatesPicker = new MultiDatesPicker(); // singleton instance
	$.multiDatesPicker.initialized = false;
	$.multiDatesPicker.uuid = new Date().getTime();
	$.multiDatesPicker.version = $.ui.multiDatesPicker.version;

	// allows MDP not to hide everytime a date is picked
	$.multiDatesPicker._hideDatepicker = $.datepicker._hideDatepicker;
	$.datepicker._hideDatepicker = function () {
		var target = this._curInst.input[0];
		var mdp = target.multiDatesPicker;
		if (!mdp || this._curInst.inline === false && !mdp.changed) {
			return $.multiDatesPicker._hideDatepicker.apply(this, arguments);
		} else {
			mdp.changed = false;
			$.datepicker._refreshDatepicker(target);
			return;
		}
	};

	// Workaround for #4055
	// Add another global to avoid noConflict issues with inline event handlers
	window['DP_jQuery_' + dpuuid] = $;
})(jQuery);
(function () {

	'use strict';

	var
	/** @const */FormatOptions = ['decimals', 'thousand', 'mark', 'prefix', 'postfix', 'encoder', 'decoder', 'negativeBefore', 'negative', 'edit', 'undo'];

	// General

	// Reverse a string
	function strReverse(a) {
		return a.split('').reverse().join('');
	}

	// Check if a string starts with a specified prefix.
	function strStartsWith(input, match) {
		return input.substring(0, match.length) === match;
	}

	// Check is a string ends in a specified postfix.
	function strEndsWith(input, match) {
		return input.slice(-1 * match.length) === match;
	}

	// Throw an error if formatting options are incompatible.
	function throwEqualError(F, a, b) {
		if ((F[a] || F[b]) && F[a] === F[b]) {
			throw new Error(a);
		}
	}

	// Check if a number is finite and not NaN
	function isValidNumber(input) {
		return typeof input === 'number' && isFinite(input);
	}

	// Provide rounding-accurate toFixed method.
	function toFixed(value, decimals) {
		var scale = Math.pow(10, decimals);
		return (Math.round(value * scale) / scale).toFixed(decimals);
	}

	// Formatting

	// Accept a number as input, output formatted string.
	function formatTo(decimals, thousand, mark, prefix, postfix, encoder, decoder, negativeBefore, negative, edit, undo, input) {

		var originalInput = input,
		    inputIsNegative,
		    inputPieces,
		    inputBase,
		    inputDecimals = '',
		    output = '';

		// Apply user encoder to the input.
		// Expected outcome: number.
		if (encoder) {
			input = encoder(input);
		}

		// Stop if no valid number was provided, the number is infinite or NaN.
		if (!isValidNumber(input)) {
			return false;
		}

		// Rounding away decimals might cause a value of -0
		// when using very small ranges. Remove those cases.
		if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
			input = 0;
		}

		// Formatting is done on absolute numbers,
		// decorated by an optional negative symbol.
		if (input < 0) {
			inputIsNegative = true;
			input = Math.abs(input);
		}

		// Reduce the number of decimals to the specified option.
		if (decimals !== false) {
			input = toFixed(input, decimals);
		}

		// Transform the number into a string, so it can be split.
		input = input.toString();

		// Break the number on the decimal separator.
		if (input.indexOf('.') !== -1) {
			inputPieces = input.split('.');

			inputBase = inputPieces[0];

			if (mark) {
				inputDecimals = mark + inputPieces[1];
			}
		} else {

			// If it isn't split, the entire number will do.
			inputBase = input;
		}

		// Group numbers in sets of three.
		if (thousand) {
			inputBase = strReverse(inputBase).match(/.{1,3}/g);
			inputBase = strReverse(inputBase.join(strReverse(thousand)));
		}

		// If the number is negative, prefix with negation symbol.
		if (inputIsNegative && negativeBefore) {
			output += negativeBefore;
		}

		// Prefix the number
		if (prefix) {
			output += prefix;
		}

		// Normal negative option comes after the prefix. Defaults to '-'.
		if (inputIsNegative && negative) {
			output += negative;
		}

		// Append the actual number.
		output += inputBase;
		output += inputDecimals;

		// Apply the postfix.
		if (postfix) {
			output += postfix;
		}

		// Run the output through a user-specified post-formatter.
		if (edit) {
			output = edit(output, originalInput);
		}

		// All done.
		return output;
	}

	// Accept a sting as input, output decoded number.
	function formatFrom(decimals, thousand, mark, prefix, postfix, encoder, decoder, negativeBefore, negative, edit, undo, input) {

		var originalInput = input,
		    inputIsNegative,
		    output = '';

		// User defined pre-decoder. Result must be a non empty string.
		if (undo) {
			input = undo(input);
		}

		// Test the input. Can't be empty.
		if (!input || typeof input !== 'string') {
			return false;
		}

		// If the string starts with the negativeBefore value: remove it.
		// Remember is was there, the number is negative.
		if (negativeBefore && strStartsWith(input, negativeBefore)) {
			input = input.replace(negativeBefore, '');
			inputIsNegative = true;
		}

		// Repeat the same procedure for the prefix.
		if (prefix && strStartsWith(input, prefix)) {
			input = input.replace(prefix, '');
		}

		// And again for negative.
		if (negative && strStartsWith(input, negative)) {
			input = input.replace(negative, '');
			inputIsNegative = true;
		}

		// Remove the postfix.
		// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice
		if (postfix && strEndsWith(input, postfix)) {
			input = input.slice(0, -1 * postfix.length);
		}

		// Remove the thousand grouping.
		if (thousand) {
			input = input.split(thousand).join('');
		}

		// Set the decimal separator back to period.
		if (mark) {
			input = input.replace(mark, '.');
		}

		// Prepend the negative symbol.
		if (inputIsNegative) {
			output += '-';
		}

		// Add the number
		output += input;

		// Trim all non-numeric characters (allow '.' and '-');
		output = output.replace(/[^0-9\.\-.]/g, '');

		// The value contains no parse-able number.
		if (output === '') {
			return false;
		}

		// Covert to number.
		output = Number(output);

		// Run the user-specified post-decoder.
		if (decoder) {
			output = decoder(output);
		}

		// Check is the output is valid, otherwise: return false.
		if (!isValidNumber(output)) {
			return false;
		}

		return output;
	}

	// Framework

	// Validate formatting options
	function validate(inputOptions) {

		var i,
		    optionName,
		    optionValue,
		    filteredOptions = {};

		for (i = 0; i < FormatOptions.length; i += 1) {

			optionName = FormatOptions[i];
			optionValue = inputOptions[optionName];

			if (optionValue === undefined) {

				// Only default if negativeBefore isn't set.
				if (optionName === 'negative' && !filteredOptions.negativeBefore) {
					filteredOptions[optionName] = '-';
					// Don't set a default for mark when 'thousand' is set.
				} else if (optionName === 'mark' && filteredOptions.thousand !== '.') {
					filteredOptions[optionName] = '.';
				} else {
					filteredOptions[optionName] = false;
				}

				// Floating points in JS are stable up to 7 decimals.
			} else if (optionName === 'decimals') {
				if (optionValue >= 0 && optionValue < 8) {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}

				// These options, when provided, must be functions.
			} else if (optionName === 'encoder' || optionName === 'decoder' || optionName === 'edit' || optionName === 'undo') {
				if (typeof optionValue === 'function') {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}

				// Other options are strings.
			} else {

				if (typeof optionValue === 'string') {
					filteredOptions[optionName] = optionValue;
				} else {
					throw new Error(optionName);
				}
			}
		}

		// Some values can't be extracted from a
		// string if certain combinations are present.
		throwEqualError(filteredOptions, 'mark', 'thousand');
		throwEqualError(filteredOptions, 'prefix', 'negative');
		throwEqualError(filteredOptions, 'prefix', 'negativeBefore');

		return filteredOptions;
	}

	// Pass all options as function arguments
	function passAll(options, method, input) {
		var i,
		    args = [];

		// Add all options in order of FormatOptions
		for (i = 0; i < FormatOptions.length; i += 1) {
			args.push(options[FormatOptions[i]]);
		}

		// Append the input, then call the method, presenting all
		// options as arguments.
		args.push(input);
		return method.apply('', args);
	}

	/** @constructor */
	function wNumb(options) {

		if (!(this instanceof wNumb)) {
			return new wNumb(options);
		}

		if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== "object") {
			return;
		}

		options = validate(options);

		// Call 'formatTo' with proper arguments.
		this.to = function (input) {
			return passAll(options, formatTo, input);
		};

		// Call 'formatFrom' with proper arguments.
		this.from = function (input) {
			return passAll(options, formatFrom, input);
		};
	}

	/** @export */
	window.wNumb = wNumb;
})();

/*! nouislider - 9.2.0 - 2017-01-11 10:35:35 */

!function (a) {
	"function" == typeof define && define.amd ? define([], a) : "object" == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ? module.exports = a() : window.noUiSlider = a();
}(function () {
	"use strict";
	function a(a, b) {
		var c = document.createElement("div");return j(c, b), a.appendChild(c), c;
	}function b(a) {
		return a.filter(function (a) {
			return !this[a] && (this[a] = !0);
		}, {});
	}function c(a, b) {
		return Math.round(a / b) * b;
	}function d(a, b) {
		var c = a.getBoundingClientRect(),
		    d = a.ownerDocument,
		    e = d.documentElement,
		    f = m();return (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent) && (f.x = 0), b ? c.top + f.y - e.clientTop : c.left + f.x - e.clientLeft
		);
	}function e(a) {
		return "number" == typeof a && !isNaN(a) && isFinite(a);
	}function f(a, b, c) {
		c > 0 && (j(a, b), setTimeout(function () {
			k(a, b);
		}, c));
	}function g(a) {
		return Math.max(Math.min(a, 100), 0);
	}function h(a) {
		return Array.isArray(a) ? a : [a];
	}function i(a) {
		a = String(a);var b = a.split(".");return b.length > 1 ? b[1].length : 0;
	}function j(a, b) {
		a.classList ? a.classList.add(b) : a.className += " " + b;
	}function k(a, b) {
		a.classList ? a.classList.remove(b) : a.className = a.className.replace(new RegExp("(^|\\b)" + b.split(" ").join("|") + "(\\b|$)", "gi"), " ");
	}function l(a, b) {
		return a.classList ? a.classList.contains(b) : new RegExp("\\b" + b + "\\b").test(a.className);
	}function m() {
		var a = void 0 !== window.pageXOffset,
		    b = "CSS1Compat" === (document.compatMode || ""),
		    c = a ? window.pageXOffset : b ? document.documentElement.scrollLeft : document.body.scrollLeft,
		    d = a ? window.pageYOffset : b ? document.documentElement.scrollTop : document.body.scrollTop;return { x: c, y: d };
	}function n() {
		return window.navigator.pointerEnabled ? { start: "pointerdown", move: "pointermove", end: "pointerup" } : window.navigator.msPointerEnabled ? { start: "MSPointerDown", move: "MSPointerMove", end: "MSPointerUp" } : { start: "mousedown touchstart", move: "mousemove touchmove", end: "mouseup touchend" };
	}function o(a, b) {
		return 100 / (b - a);
	}function p(a, b) {
		return 100 * b / (a[1] - a[0]);
	}function q(a, b) {
		return p(a, a[0] < 0 ? b + Math.abs(a[0]) : b - a[0]);
	}function r(a, b) {
		return b * (a[1] - a[0]) / 100 + a[0];
	}function s(a, b) {
		for (var c = 1; a >= b[c];) {
			c += 1;
		}return c;
	}function t(a, b, c) {
		if (c >= a.slice(-1)[0]) return 100;var d,
		    e,
		    f,
		    g,
		    h = s(c, a);return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], f + q([d, e], c) / o(f, g);
	}function u(a, b, c) {
		if (c >= 100) return a.slice(-1)[0];var d,
		    e,
		    f,
		    g,
		    h = s(c, b);return d = a[h - 1], e = a[h], f = b[h - 1], g = b[h], r([d, e], (c - f) * o(f, g));
	}function v(a, b, d, e) {
		if (100 === e) return e;var f,
		    g,
		    h = s(e, a);return d ? (f = a[h - 1], g = a[h], e - f > (g - f) / 2 ? g : f) : b[h - 1] ? a[h - 1] + c(e - a[h - 1], b[h - 1]) : e;
	}function w(a, b, c) {
		var d;if ("number" == typeof b && (b = [b]), "[object Array]" !== Object.prototype.toString.call(b)) throw new Error("noUiSlider (" + U + "): 'range' contains invalid value.");if (d = "min" === a ? 0 : "max" === a ? 100 : parseFloat(a), !e(d) || !e(b[0])) throw new Error("noUiSlider (" + U + "): 'range' value isn't numeric.");c.xPct.push(d), c.xVal.push(b[0]), d ? c.xSteps.push(!isNaN(b[1]) && b[1]) : isNaN(b[1]) || (c.xSteps[0] = b[1]), c.xHighestCompleteStep.push(0);
	}function x(a, b, c) {
		if (!b) return !0;c.xSteps[a] = p([c.xVal[a], c.xVal[a + 1]], b) / o(c.xPct[a], c.xPct[a + 1]);var d = (c.xVal[a + 1] - c.xVal[a]) / c.xNumSteps[a],
		    e = Math.ceil(Number(d.toFixed(3)) - 1),
		    f = c.xVal[a] + c.xNumSteps[a] * e;c.xHighestCompleteStep[a] = f;
	}function y(a, b, c, d) {
		this.xPct = [], this.xVal = [], this.xSteps = [d || !1], this.xNumSteps = [!1], this.xHighestCompleteStep = [], this.snap = b, this.direction = c;var e,
		    f = [];for (e in a) {
			a.hasOwnProperty(e) && f.push([a[e], e]);
		}for (f.length && "object" == _typeof(f[0][0]) ? f.sort(function (a, b) {
			return a[0][0] - b[0][0];
		}) : f.sort(function (a, b) {
			return a[0] - b[0];
		}), e = 0; e < f.length; e++) {
			w(f[e][1], f[e][0], this);
		}for (this.xNumSteps = this.xSteps.slice(0), e = 0; e < this.xNumSteps.length; e++) {
			x(e, this.xNumSteps[e], this);
		}
	}function z(a, b) {
		if (!e(b)) throw new Error("noUiSlider (" + U + "): 'step' is not numeric.");a.singleStep = b;
	}function A(a, b) {
		if ("object" != (typeof b === 'undefined' ? 'undefined' : _typeof(b)) || Array.isArray(b)) throw new Error("noUiSlider (" + U + "): 'range' is not an object.");if (void 0 === b.min || void 0 === b.max) throw new Error("noUiSlider (" + U + "): Missing 'min' or 'max' in 'range'.");if (b.min === b.max) throw new Error("noUiSlider (" + U + "): 'range' 'min' and 'max' cannot be equal.");a.spectrum = new y(b, a.snap, a.dir, a.singleStep);
	}function B(a, b) {
		if (b = h(b), !Array.isArray(b) || !b.length) throw new Error("noUiSlider (" + U + "): 'start' option is incorrect.");a.handles = b.length, a.start = b;
	}function C(a, b) {
		if (a.snap = b, "boolean" != typeof b) throw new Error("noUiSlider (" + U + "): 'snap' option must be a boolean.");
	}function D(a, b) {
		if (a.animate = b, "boolean" != typeof b) throw new Error("noUiSlider (" + U + "): 'animate' option must be a boolean.");
	}function E(a, b) {
		if (a.animationDuration = b, "number" != typeof b) throw new Error("noUiSlider (" + U + "): 'animationDuration' option must be a number.");
	}function F(a, b) {
		var c,
		    d = [!1];if ("lower" === b ? b = [!0, !1] : "upper" === b && (b = [!1, !0]), b === !0 || b === !1) {
			for (c = 1; c < a.handles; c++) {
				d.push(b);
			}d.push(!1);
		} else {
			if (!Array.isArray(b) || !b.length || b.length !== a.handles + 1) throw new Error("noUiSlider (" + U + "): 'connect' option doesn't match handle count.");d = b;
		}a.connect = d;
	}function G(a, b) {
		switch (b) {case "horizontal":
				a.ort = 0;break;case "vertical":
				a.ort = 1;break;default:
				throw new Error("noUiSlider (" + U + "): 'orientation' option is invalid.");}
	}function H(a, b) {
		if (!e(b)) throw new Error("noUiSlider (" + U + "): 'margin' option must be numeric.");if (0 !== b && (a.margin = a.spectrum.getMargin(b), !a.margin)) throw new Error("noUiSlider (" + U + "): 'margin' option is only supported on linear sliders.");
	}function I(a, b) {
		if (!e(b)) throw new Error("noUiSlider (" + U + "): 'limit' option must be numeric.");if (a.limit = a.spectrum.getMargin(b), !a.limit || a.handles < 2) throw new Error("noUiSlider (" + U + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
	}function J(a, b) {
		if (!e(b)) throw new Error("noUiSlider (" + U + "): 'padding' option must be numeric.");if (0 !== b) {
			if (a.padding = a.spectrum.getMargin(b), !a.padding) throw new Error("noUiSlider (" + U + "): 'padding' option is only supported on linear sliders.");if (a.padding < 0) throw new Error("noUiSlider (" + U + "): 'padding' option must be a positive number.");if (a.padding >= 50) throw new Error("noUiSlider (" + U + "): 'padding' option must be less than half the range.");
		}
	}function K(a, b) {
		switch (b) {case "ltr":
				a.dir = 0;break;case "rtl":
				a.dir = 1;break;default:
				throw new Error("noUiSlider (" + U + "): 'direction' option was not recognized.");}
	}function L(a, b) {
		if ("string" != typeof b) throw new Error("noUiSlider (" + U + "): 'behaviour' must be a string containing options.");var c = b.indexOf("tap") >= 0,
		    d = b.indexOf("drag") >= 0,
		    e = b.indexOf("fixed") >= 0,
		    f = b.indexOf("snap") >= 0,
		    g = b.indexOf("hover") >= 0;if (e) {
			if (2 !== a.handles) throw new Error("noUiSlider (" + U + "): 'fixed' behaviour must be used with 2 handles");H(a, a.start[1] - a.start[0]);
		}a.events = { tap: c || f, drag: d, fixed: e, snap: f, hover: g };
	}function M(a, b) {
		if (b !== !1) if (b === !0) {
			a.tooltips = [];for (var c = 0; c < a.handles; c++) {
				a.tooltips.push(!0);
			}
		} else {
			if (a.tooltips = h(b), a.tooltips.length !== a.handles) throw new Error("noUiSlider (" + U + "): must pass a formatter for all handles.");a.tooltips.forEach(function (a) {
				if ("boolean" != typeof a && ("object" != (typeof a === 'undefined' ? 'undefined' : _typeof(a)) || "function" != typeof a.to)) throw new Error("noUiSlider (" + U + "): 'tooltips' must be passed a formatter or 'false'.");
			});
		}
	}function N(a, b) {
		if (a.format = b, "function" == typeof b.to && "function" == typeof b.from) return !0;throw new Error("noUiSlider (" + U + "): 'format' requires 'to' and 'from' methods.");
	}function O(a, b) {
		if (void 0 !== b && "string" != typeof b && b !== !1) throw new Error("noUiSlider (" + U + "): 'cssPrefix' must be a string or `false`.");a.cssPrefix = b;
	}function P(a, b) {
		if (void 0 !== b && "object" != (typeof b === 'undefined' ? 'undefined' : _typeof(b))) throw new Error("noUiSlider (" + U + "): 'cssClasses' must be an object.");if ("string" == typeof a.cssPrefix) {
			a.cssClasses = {};for (var c in b) {
				b.hasOwnProperty(c) && (a.cssClasses[c] = a.cssPrefix + b[c]);
			}
		} else a.cssClasses = b;
	}function Q(a, b) {
		if (b !== !0 && b !== !1) throw new Error("noUiSlider (" + U + "): 'useRequestAnimationFrame' option should be true (default) or false.");a.useRequestAnimationFrame = b;
	}function R(a) {
		var b = { margin: 0, limit: 0, padding: 0, animate: !0, animationDuration: 300, format: V },
		    c = { step: { r: !1, t: z }, start: { r: !0, t: B }, connect: { r: !0, t: F }, direction: { r: !0, t: K }, snap: { r: !1, t: C }, animate: { r: !1, t: D }, animationDuration: { r: !1, t: E }, range: { r: !0, t: A }, orientation: { r: !1, t: G }, margin: { r: !1, t: H }, limit: { r: !1, t: I }, padding: { r: !1, t: J }, behaviour: { r: !0, t: L }, format: { r: !1, t: N }, tooltips: { r: !1, t: M }, cssPrefix: { r: !1, t: O }, cssClasses: { r: !1, t: P }, useRequestAnimationFrame: { r: !1, t: Q } },
		    d = { connect: !1, direction: "ltr", behaviour: "tap", orientation: "horizontal", cssPrefix: "noUi-", cssClasses: { target: "target", base: "base", origin: "origin", handle: "handle", handleLower: "handle-lower", handleUpper: "handle-upper", horizontal: "horizontal", vertical: "vertical", background: "background", connect: "connect", ltr: "ltr", rtl: "rtl", draggable: "draggable", drag: "state-drag", tap: "state-tap", active: "active", tooltip: "tooltip", pips: "pips", pipsHorizontal: "pips-horizontal", pipsVertical: "pips-vertical", marker: "marker", markerHorizontal: "marker-horizontal", markerVertical: "marker-vertical", markerNormal: "marker-normal", markerLarge: "marker-large", markerSub: "marker-sub", value: "value", valueHorizontal: "value-horizontal", valueVertical: "value-vertical", valueNormal: "value-normal", valueLarge: "value-large", valueSub: "value-sub" }, useRequestAnimationFrame: !0 };Object.keys(c).forEach(function (e) {
			if (void 0 === a[e] && void 0 === d[e]) {
				if (c[e].r) throw new Error("noUiSlider (" + U + "): '" + e + "' is required.");return !0;
			}c[e].t(b, void 0 === a[e] ? d[e] : a[e]);
		}), b.pips = a.pips;var e = [["left", "top"], ["right", "bottom"]];return b.style = e[b.dir][b.ort], b.styleOposite = e[b.dir ? 0 : 1][b.ort], b;
	}function S(c, e, i) {
		function o(b, c) {
			var d = a(b, e.cssClasses.origin),
			    f = a(d, e.cssClasses.handle);return f.setAttribute("data-handle", c), 0 === c ? j(f, e.cssClasses.handleLower) : c === e.handles - 1 && j(f, e.cssClasses.handleUpper), d;
		}function p(b, c) {
			return !!c && a(b, e.cssClasses.connect);
		}function q(a, b) {
			ca = [], da = [], da.push(p(b, a[0]));for (var c = 0; c < e.handles; c++) {
				ca.push(o(b, c)), ia[c] = c, da.push(p(b, a[c + 1]));
			}
		}function r(b) {
			j(b, e.cssClasses.target), 0 === e.dir ? j(b, e.cssClasses.ltr) : j(b, e.cssClasses.rtl), 0 === e.ort ? j(b, e.cssClasses.horizontal) : j(b, e.cssClasses.vertical), ba = a(b, e.cssClasses.base);
		}function s(b, c) {
			return !!e.tooltips[c] && a(b.firstChild, e.cssClasses.tooltip);
		}function t() {
			var a = ca.map(s);$("update", function (b, c, d) {
				if (a[c]) {
					var f = b[c];e.tooltips[c] !== !0 && (f = e.tooltips[c].to(d[c])), a[c].innerHTML = f;
				}
			});
		}function u(a, b, c) {
			if ("range" === a || "steps" === a) return ka.xVal;if ("count" === a) {
				if (!b) throw new Error("noUiSlider (" + U + "): 'values' required for mode 'count'.");var d,
				    e = 100 / (b - 1),
				    f = 0;for (b = []; (d = f++ * e) <= 100;) {
					b.push(d);
				}a = "positions";
			}return "positions" === a ? b.map(function (a) {
				return ka.fromStepping(c ? ka.getStep(a) : a);
			}) : "values" === a ? c ? b.map(function (a) {
				return ka.fromStepping(ka.getStep(ka.toStepping(a)));
			}) : b : void 0;
		}function v(a, c, d) {
			function e(a, b) {
				return (a + b).toFixed(7) / 1;
			}var f = {},
			    g = ka.xVal[0],
			    h = ka.xVal[ka.xVal.length - 1],
			    i = !1,
			    j = !1,
			    k = 0;return d = b(d.slice().sort(function (a, b) {
				return a - b;
			})), d[0] !== g && (d.unshift(g), i = !0), d[d.length - 1] !== h && (d.push(h), j = !0), d.forEach(function (b, g) {
				var h,
				    l,
				    m,
				    n,
				    o,
				    p,
				    q,
				    r,
				    s,
				    t,
				    u = b,
				    v = d[g + 1];if ("steps" === c && (h = ka.xNumSteps[g]), h || (h = v - u), u !== !1 && void 0 !== v) for (h = Math.max(h, 1e-7), l = u; l <= v; l = e(l, h)) {
					for (n = ka.toStepping(l), o = n - k, r = o / a, s = Math.round(r), t = o / s, m = 1; m <= s; m += 1) {
						p = k + m * t, f[p.toFixed(5)] = ["x", 0];
					}q = d.indexOf(l) > -1 ? 1 : "steps" === c ? 2 : 0, !g && i && (q = 0), l === v && j || (f[n.toFixed(5)] = [l, q]), k = n;
				}
			}), f;
		}function w(a, b, c) {
			function d(a, b) {
				var c = b === e.cssClasses.value,
				    d = c ? m : n,
				    f = c ? k : l;return b + " " + d[e.ort] + " " + f[a];
			}function f(a, b, c) {
				return 'class="' + d(c[1], b) + '" style="' + e.style + ": " + a + '%"';
			}function g(a, d) {
				d[1] = d[1] && b ? b(d[0], d[1]) : d[1], i += "<div " + f(a, e.cssClasses.marker, d) + "></div>", d[1] && (i += "<div " + f(a, e.cssClasses.value, d) + ">" + c.to(d[0]) + "</div>");
			}var h = document.createElement("div"),
			    i = "",
			    k = [e.cssClasses.valueNormal, e.cssClasses.valueLarge, e.cssClasses.valueSub],
			    l = [e.cssClasses.markerNormal, e.cssClasses.markerLarge, e.cssClasses.markerSub],
			    m = [e.cssClasses.valueHorizontal, e.cssClasses.valueVertical],
			    n = [e.cssClasses.markerHorizontal, e.cssClasses.markerVertical];return j(h, e.cssClasses.pips), j(h, 0 === e.ort ? e.cssClasses.pipsHorizontal : e.cssClasses.pipsVertical), Object.keys(a).forEach(function (b) {
				g(b, a[b]);
			}), h.innerHTML = i, h;
		}function x(a) {
			var b = a.mode,
			    c = a.density || 1,
			    d = a.filter || !1,
			    e = a.values || !1,
			    f = a.stepped || !1,
			    g = u(b, e, f),
			    h = v(c, b, g),
			    i = a.format || { to: Math.round };return ga.appendChild(w(h, d, i));
		}function y() {
			var a = ba.getBoundingClientRect(),
			    b = "offset" + ["Width", "Height"][e.ort];return 0 === e.ort ? a.width || ba[b] : a.height || ba[b];
		}function z(a, b, c, d) {
			var f = function f(b) {
				return !ga.hasAttribute("disabled") && !l(ga, e.cssClasses.tap) && !!(b = A(b, d.pageOffset)) && !(a === fa.start && void 0 !== b.buttons && b.buttons > 1) && (!d.hover || !b.buttons) && (b.calcPoint = b.points[e.ort], void c(b, d));
			},
			    g = [];return a.split(" ").forEach(function (a) {
				b.addEventListener(a, f, !1), g.push([a, f]);
			}), g;
		}function A(a, b) {
			a.preventDefault();var c,
			    d,
			    e = 0 === a.type.indexOf("touch"),
			    f = 0 === a.type.indexOf("mouse"),
			    g = 0 === a.type.indexOf("pointer");if (0 === a.type.indexOf("MSPointer") && (g = !0), e) {
				if (a.touches.length > 1) return !1;c = a.changedTouches[0].pageX, d = a.changedTouches[0].pageY;
			}return b = b || m(), (f || g) && (c = a.clientX + b.x, d = a.clientY + b.y), a.pageOffset = b, a.points = [c, d], a.cursor = f || g, a;
		}function B(a) {
			var b = a - d(ba, e.ort),
			    c = 100 * b / y();return e.dir ? 100 - c : c;
		}function C(a) {
			var b = 100,
			    c = !1;return ca.forEach(function (d, e) {
				if (!d.hasAttribute("disabled")) {
					var f = Math.abs(ha[e] - a);f < b && (c = e, b = f);
				}
			}), c;
		}function D(a, b, c, d) {
			var e = c.slice(),
			    f = [!a, a],
			    g = [a, !a];d = d.slice(), a && d.reverse(), d.length > 1 ? d.forEach(function (a, c) {
				var d = M(e, a, e[a] + b, f[c], g[c]);d === !1 ? b = 0 : (b = d - e[a], e[a] = d);
			}) : f = g = [!0];var h = !1;d.forEach(function (a, d) {
				h = Q(a, c[a] + b, f[d], g[d]) || h;
			}), h && d.forEach(function (a) {
				E("update", a), E("slide", a);
			});
		}function E(a, b, c) {
			Object.keys(ma).forEach(function (d) {
				var f = d.split(".")[0];a === f && ma[d].forEach(function (a) {
					a.call(ea, la.map(e.format.to), b, la.slice(), c || !1, ha.slice());
				});
			});
		}function F(a, b) {
			"mouseout" === a.type && "HTML" === a.target.nodeName && null === a.relatedTarget && H(a, b);
		}function G(a, b) {
			if (navigator.appVersion.indexOf("MSIE 9") === -1 && 0 === a.buttons && 0 !== b.buttonsProperty) return H(a, b);var c = (e.dir ? -1 : 1) * (a.calcPoint - b.startCalcPoint),
			    d = 100 * c / b.baseSize;D(c > 0, d, b.locations, b.handleNumbers);
		}function H(a, b) {
			ja && (k(ja, e.cssClasses.active), ja = !1), a.cursor && (document.body.style.cursor = "", document.body.removeEventListener("selectstart", document.body.noUiListener)), document.documentElement.noUiListeners.forEach(function (a) {
				document.documentElement.removeEventListener(a[0], a[1]);
			}), k(ga, e.cssClasses.drag), P(), b.handleNumbers.forEach(function (a) {
				E("set", a), E("change", a), E("end", a);
			});
		}function I(a, b) {
			if (1 === b.handleNumbers.length) {
				var c = ca[b.handleNumbers[0]];if (c.hasAttribute("disabled")) return !1;ja = c.children[0], j(ja, e.cssClasses.active);
			}a.preventDefault(), a.stopPropagation();var d = z(fa.move, document.documentElement, G, { startCalcPoint: a.calcPoint, baseSize: y(), pageOffset: a.pageOffset, handleNumbers: b.handleNumbers, buttonsProperty: a.buttons, locations: ha.slice() }),
			    f = z(fa.end, document.documentElement, H, { handleNumbers: b.handleNumbers }),
			    g = z("mouseout", document.documentElement, F, { handleNumbers: b.handleNumbers });if (document.documentElement.noUiListeners = d.concat(f, g), a.cursor) {
				document.body.style.cursor = getComputedStyle(a.target).cursor, ca.length > 1 && j(ga, e.cssClasses.drag);var h = function h() {
					return !1;
				};document.body.noUiListener = h, document.body.addEventListener("selectstart", h, !1);
			}b.handleNumbers.forEach(function (a) {
				E("start", a);
			});
		}function J(a) {
			a.stopPropagation();var b = B(a.calcPoint),
			    c = C(b);return c !== !1 && (e.events.snap || f(ga, e.cssClasses.tap, e.animationDuration), Q(c, b, !0, !0), P(), E("slide", c, !0), E("set", c, !0), E("change", c, !0), E("update", c, !0), void (e.events.snap && I(a, { handleNumbers: [c] })));
		}function K(a) {
			var b = B(a.calcPoint),
			    c = ka.getStep(b),
			    d = ka.fromStepping(c);Object.keys(ma).forEach(function (a) {
				"hover" === a.split(".")[0] && ma[a].forEach(function (a) {
					a.call(ea, d);
				});
			});
		}function L(a) {
			a.fixed || ca.forEach(function (a, b) {
				z(fa.start, a.children[0], I, { handleNumbers: [b] });
			}), a.tap && z(fa.start, ba, J, {}), a.hover && z(fa.move, ba, K, { hover: !0 }), a.drag && da.forEach(function (b, c) {
				if (b !== !1 && 0 !== c && c !== da.length - 1) {
					var d = ca[c - 1],
					    f = ca[c],
					    g = [b];j(b, e.cssClasses.draggable), a.fixed && (g.push(d.children[0]), g.push(f.children[0])), g.forEach(function (a) {
						z(fa.start, a, I, { handles: [d, f], handleNumbers: [c - 1, c] });
					});
				}
			});
		}function M(a, b, c, d, f) {
			return ca.length > 1 && (d && b > 0 && (c = Math.max(c, a[b - 1] + e.margin)), f && b < ca.length - 1 && (c = Math.min(c, a[b + 1] - e.margin))), ca.length > 1 && e.limit && (d && b > 0 && (c = Math.min(c, a[b - 1] + e.limit)), f && b < ca.length - 1 && (c = Math.max(c, a[b + 1] - e.limit))), e.padding && (0 === b && (c = Math.max(c, e.padding)), b === ca.length - 1 && (c = Math.min(c, 100 - e.padding))), c = ka.getStep(c), c = g(c), c !== a[b] && c;
		}function N(a) {
			return a + "%";
		}function O(a, b) {
			ha[a] = b, la[a] = ka.fromStepping(b);var c = function c() {
				ca[a].style[e.style] = N(b), S(a), S(a + 1);
			};window.requestAnimationFrame && e.useRequestAnimationFrame ? window.requestAnimationFrame(c) : c();
		}function P() {
			ia.forEach(function (a) {
				var b = ha[a] > 50 ? -1 : 1,
				    c = 3 + (ca.length + b * a);ca[a].childNodes[0].style.zIndex = c;
			});
		}function Q(a, b, c, d) {
			return b = M(ha, a, b, c, d), b !== !1 && (O(a, b), !0);
		}function S(a) {
			if (da[a]) {
				var b = 0,
				    c = 100;0 !== a && (b = ha[a - 1]), a !== da.length - 1 && (c = ha[a]), da[a].style[e.style] = N(b), da[a].style[e.styleOposite] = N(100 - c);
			}
		}function T(a, b) {
			null !== a && a !== !1 && ("number" == typeof a && (a = String(a)), a = e.format.from(a), a === !1 || isNaN(a) || Q(b, ka.toStepping(a), !1, !1));
		}function V(a, b) {
			var c = h(a),
			    d = void 0 === ha[0];b = void 0 === b || !!b, c.forEach(T), e.animate && !d && f(ga, e.cssClasses.tap, e.animationDuration), ia.forEach(function (a) {
				Q(a, ha[a], !0, !1);
			}), P(), ia.forEach(function (a) {
				E("update", a), null !== c[a] && b && E("set", a);
			});
		}function W(a) {
			V(e.start, a);
		}function X() {
			var a = la.map(e.format.to);return 1 === a.length ? a[0] : a;
		}function Y() {
			for (var a in e.cssClasses) {
				e.cssClasses.hasOwnProperty(a) && k(ga, e.cssClasses[a]);
			}for (; ga.firstChild;) {
				ga.removeChild(ga.firstChild);
			}delete ga.noUiSlider;
		}function Z() {
			return ha.map(function (a, b) {
				var c = ka.getNearbySteps(a),
				    d = la[b],
				    e = c.thisStep.step,
				    f = null;e !== !1 && d + e > c.stepAfter.startValue && (e = c.stepAfter.startValue - d), f = d > c.thisStep.startValue ? c.thisStep.step : c.stepBefore.step !== !1 && d - c.stepBefore.highestStep, 100 === a ? e = null : 0 === a && (f = null);var g = ka.countStepDecimals();return null !== e && e !== !1 && (e = Number(e.toFixed(g))), null !== f && f !== !1 && (f = Number(f.toFixed(g))), [f, e];
			});
		}function $(a, b) {
			ma[a] = ma[a] || [], ma[a].push(b), "update" === a.split(".")[0] && ca.forEach(function (a, b) {
				E("update", b);
			});
		}function _(a) {
			var b = a && a.split(".")[0],
			    c = b && a.substring(b.length);Object.keys(ma).forEach(function (a) {
				var d = a.split(".")[0],
				    e = a.substring(d.length);b && b !== d || c && c !== e || delete ma[a];
			});
		}function aa(a, b) {
			var c = X(),
			    d = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format"];d.forEach(function (b) {
				void 0 !== a[b] && (i[b] = a[b]);
			});var f = R(i);d.forEach(function (b) {
				void 0 !== a[b] && (e[b] = f[b]);
			}), f.spectrum.direction = ka.direction, ka = f.spectrum, e.margin = f.margin, e.limit = f.limit, e.padding = f.padding, ha = [], V(a.start || c, b);
		}var ba,
		    ca,
		    da,
		    ea,
		    fa = n(),
		    ga = c,
		    ha = [],
		    ia = [],
		    ja = !1,
		    ka = e.spectrum,
		    la = [],
		    ma = {};if (ga.noUiSlider) throw new Error("noUiSlider (" + U + "): Slider was already initialized.");return r(ga), q(e.connect, ba), ea = { destroy: Y, steps: Z, on: $, off: _, get: X, set: V, reset: W, __moveHandles: function __moveHandles(a, b, c) {
				D(a, b, ha, c);
			}, options: i, updateOptions: aa, target: ga, pips: x }, L(e.events), V(e.start), e.pips && x(e.pips), e.tooltips && t(), ea;
	}function T(a, b) {
		if (!a.nodeName) throw new Error("noUiSlider (" + U + "): create requires a single element.");var c = R(b, a),
		    d = S(a, c, b);return a.noUiSlider = d, d;
	}var U = "9.2.0";y.prototype.getMargin = function (a) {
		var b = this.xNumSteps[0];if (b && a / b % 1 !== 0) throw new Error("noUiSlider (" + U + "): 'limit', 'margin' and 'padding' must be divisible by step.");return 2 === this.xPct.length && p(this.xVal, a);
	}, y.prototype.toStepping = function (a) {
		return a = t(this.xVal, this.xPct, a);
	}, y.prototype.fromStepping = function (a) {
		return u(this.xVal, this.xPct, a);
	}, y.prototype.getStep = function (a) {
		return a = v(this.xPct, this.xSteps, this.snap, a);
	}, y.prototype.getNearbySteps = function (a) {
		var b = s(a, this.xPct);return { stepBefore: { startValue: this.xVal[b - 2], step: this.xNumSteps[b - 2], highestStep: this.xHighestCompleteStep[b - 2] }, thisStep: { startValue: this.xVal[b - 1], step: this.xNumSteps[b - 1], highestStep: this.xHighestCompleteStep[b - 1] }, stepAfter: { startValue: this.xVal[b - 0], step: this.xNumSteps[b - 0], highestStep: this.xHighestCompleteStep[b - 0] } };
	}, y.prototype.countStepDecimals = function () {
		var a = this.xNumSteps.map(i);return Math.max.apply(null, a);
	}, y.prototype.convert = function (a) {
		return this.getStep(this.toStepping(a));
	};var V = { to: function to(a) {
			return void 0 !== a && a.toFixed(2);
		}, from: Number };return { version: U, create: T };
});
/* globals JQClass */
/*! Simple JavaScript Inheritance
 * By John Resig http://ejohn.org/
 * MIT Licensed.
 */
// Inspired by base2 and Prototype
(function () {
	'use strict';

	var initializing = false;

	// The base JQClass implementation (does nothing)
	window.JQClass = function () {};

	// Collection of derived classes
	JQClass.classes = {};

	// Create a new JQClass that inherits from this class
	JQClass.extend = function extender(prop) {
		var base = this.prototype;

		// Instantiate a base class (but only create the instance, don't run the init constructor)
		initializing = true;
		var prototype = new this();
		initializing = false;

		// Copy the properties over onto the new prototype
		for (var name in prop) {
			// jshint loopfunc:true
			// Check if we're overwriting an existing function
			if (typeof prop[name] === 'function' && typeof base[name] === 'function') {
				prototype[name] = function (name, fn) {
					return function () {
						var __super = this._super;
						// Add a new ._super() method that is the same method but on the super-class
						this._super = function (args) {
							return base[name].apply(this, args || []);
						};
						var ret = fn.apply(this, arguments);
						// The method only needs to be bound temporarily, so we remove it when we're done executing
						this._super = __super;
						return ret;
					};
				}(name, prop[name]);
				// Check if we're overwriting existing default options.
			} else if (_typeof(prop[name]) === 'object' && _typeof(base[name]) === 'object' && name === 'defaultOptions') {
				var obj1 = base[name];
				var obj2 = prop[name];
				var obj3 = {};
				var key;
				for (key in obj1) {
					// jshint forin:false
					obj3[key] = obj1[key];
				}
				for (key in obj2) {
					// jshint forin:false
					obj3[key] = obj2[key];
				}
				prototype[name] = obj3;
			} else {
				prototype[name] = prop[name];
			}
		}

		// The dummy class constructor
		function JQClass() {
			// All construction is actually done in the init method
			if (!initializing && this._init) {
				this._init.apply(this, arguments);
			}
		}

		// Populate our constructed prototype object
		JQClass.prototype = prototype;

		// Enforce the constructor to be what we expect
		JQClass.prototype.constructor = JQClass;

		// And make this class extendable
		JQClass.extend = extender;

		return JQClass;
	};
})();
/*! Abstract base class for collection plugins v1.0.2.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) December 2013.
	Licensed under the MIT license (http://keith-wood.name/licence.html). */
(function ($) {
	// Ensure $, encapsulate
	'use strict';

	/** <p>Abstract base class for collection plugins v1.0.2.</p>
 	<p>Written by Keith Wood (wood.keith{at}optusnet.com.au) December 2013.</p>
 	<p>Licensed under the MIT license (http://keith-wood.name/licence.html).</p>
 	<p>Use {@link $.JQPlugin.createPlugin} to create new plugins using this framework.</p>
 	<p>This base class provides common functionality such as:</p>
 	<ul>
 		<li>Creates jQuery bridge - allowing you to invoke your plugin on a collection of elements.</li>
 		<li>Handles initialisation including reading settings from metadata -
 			an instance object is attached to the affected element(s) containing all the necessary data.</li>
 		<li>Handles option retrieval and update - options can be set through default values,
 			through inline metadata, or through instantiation settings.<br>
 			Metadata is specified as an attribute on the element:
 			<code>data-&lt;pluginName>="&lt;option name>: '&lt;value>', ..."</code>.
 			Dates should be specified as strings in this format: <code>'new Date(y, m-1, d)'</code>.</li>
 		<li>Handles method calling - inner functions starting with '_'are inaccessible,
 			whereas others can be called via <code>$(selector).pluginName('functionName')</code>.</li>
 		<li>Handles plugin destruction - removing all trace of the plugin.</li>
 	</ul>
 	@module JQPlugin
 	@abstract */

	JQClass.classes.JQPlugin = JQClass.extend({

		/** Name to identify this plugin.
  	@example name: 'tabs' */
		name: 'plugin',

		/** Default options for instances of this plugin (default: {}).
  	@example defaultOptions: {
  selectedClass: 'selected',
  triggers: 'click'
  } */
		defaultOptions: {},

		/** Options dependent on the locale.
  	Indexed by language and (optional) country code, with '' denoting the default language (English/US).
  	Normally additional languages would be provided as separate files to all them to be included as needed.
  	@example regionalOptions: {
  '': {
    greeting: 'Hi'
  }
  } */
		regionalOptions: {},

		/** Whether or not a deep merge should be performed when accumulating options.
  	The default is <code>true</code> but can be overridden in a sub-class. */
		deepMerge: true,

		/** Retrieve a marker class for affected elements.
  	In the format: <code>is-&lt;pluginName&gt;</code>.
  	@protected
  	@return {string} The marker class. */
		_getMarker: function _getMarker() {
			return 'is-' + this.name;
		},

		/** Initialise the plugin.
  	Create the jQuery bridge - plugin name <code>xyz</code>
  	produces singleton <code>$.xyz</code> and collection function <code>$.fn.xyz</code>.
  	@protected */
		_init: function _init() {
			// Apply default localisations
			$.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[''] || {});
			// Camel-case the name
			var jqName = camelCase(this.name);
			// Expose jQuery singleton manager
			$[jqName] = this;
			// Expose jQuery collection plugin
			$.fn[jqName] = function (options) {
				var otherArgs = Array.prototype.slice.call(arguments, 1);
				var inst = this;
				var returnValue = this;
				this.each(function () {
					if (typeof options === 'string') {
						if (options[0] === '_' || !$[jqName][options]) {
							throw 'Unknown method: ' + options;
						}
						var methodValue = $[jqName][options].apply($[jqName], [this].concat(otherArgs));
						if (methodValue !== inst && methodValue !== undefined) {
							returnValue = methodValue;
							return false;
						}
					} else {
						$[jqName]._attach(this, options);
					}
				});
				return returnValue;
			};
		},

		/** Set default options for all subsequent instances.
  	@param {object} options The new default options.
  	@example $.pluginName.setDefaults({name: value, ...}) */
		setDefaults: function setDefaults(options) {
			$.extend(this.defaultOptions, options || {});
		},

		/** Initialise an element. Called internally only.
  	Adds an instance object as data named for the plugin.
  	Override {@linkcode module:JQPlugin~_postAttach|_postAttach} for plugin-specific processing.
  	@private
  	@param {Element} elem The element to enhance.
  	@param {object} options Overriding settings. */
		_attach: function _attach(elem, options) {
			elem = $(elem);
			if (elem.hasClass(this._getMarker())) {
				return;
			}
			elem.addClass(this._getMarker());
			options = $.extend(this.deepMerge, {}, this.defaultOptions, this._getMetadata(elem), options || {});
			var inst = $.extend({ name: this.name, elem: elem, options: options }, this._instSettings(elem, options));
			elem.data(this.name, inst); // Save instance against element
			this._postAttach(elem, inst);
			this.option(elem, options);
		},

		/** Retrieve additional instance settings.
  	Override this in a sub-class to provide extra settings.
  	These are added directly to the instance object.
  	Default attributes of an instance object are shown as properties below:
  	@protected
  	@param {jQuery} elem The current jQuery element.
  	@param {object} options The instance options.
  	@return {object} Any extra instance values.
  	@property {Element} elem The element to which this instance applies.
  	@property {string} name The name of this plugin.
  	@property {object} options The accumulated options for this instance.
  	@example _instSettings: function(elem, options) {
  return {nav: elem.find(options.navSelector)};
  } */
		_instSettings: function _instSettings(elem, options) {
			// jshint unused:false
			return {};
		},

		/** Plugin specific post initialisation.
  	Override this in a sub-class to perform extra activities.
  	This is where you would implement your plugin's main functionality.
  	@protected
  	@param {jQuery} elem The current jQuery element.
  	@param {object} inst The instance settings.
  	@example _postAttach: function(elem, inst) {
  elem.on('click.' + this.name, function() {
    ...
  });
  } */
		_postAttach: function _postAttach(elem, inst) {// jshint unused:false
		},

		/** Retrieve metadata configuration from the element.
  	Metadata is specified as an attribute:
  	<code>data-&lt;pluginName>="&lt;option name>: '&lt;value>', ..."</code>.
  	Dates should be specified as strings in this format: <code>'new Date(y, m-1, d)'</code>.
  	@private
  	@param {jQuery} elem The source element.
  	@return {object} The inline configuration or {}. */
		_getMetadata: function _getMetadata(elem) {
			try {
				var data = elem.data(this.name.toLowerCase()) || '';
				data = data.replace(/(\\?)'/g, function (e, t) {
					return t ? '\'' : '"';
				}).replace(/([a-zA-Z0-9]+):/g, function (match, group, i) {
					var count = data.substring(0, i).match(/"/g); // Handle embedded ':'
					return !count || count.length % 2 === 0 ? '"' + group + '":' : group + ':';
				}).replace(/\\:/g, ':');
				data = $.parseJSON('{' + data + '}');
				for (var key in data) {
					if (data.hasOwnProperty(key)) {
						var value = data[key];
						if (typeof value === 'string' && value.match(/^new Date\(([-0-9,\s]*)\)$/)) {
							// Convert dates
							data[key] = eval(value); // jshint ignore:line
						}
					}
				}
				return data;
			} catch (e) {
				return {};
			}
		},

		/** Retrieve the instance data for element.
  	@protected
  	@param {Element} elem The source element.
  	@return {object} The instance data or <code>{}</code> if none. */
		_getInst: function _getInst(elem) {
			return $(elem).data(this.name) || {};
		},

		/** Retrieve or reconfigure the settings for a plugin.
  	If new settings are provided they are applied to the instance options.
  	If an option name only is provided the value of that option is returned.
  	If no name or value is provided, all options are returned.
  	Override {@linkcode module:JQPlugin~_optionsChanged|_optionsChanged}
  	for plugin-specific processing when option values change.
  	@param {Element} elem The source element.
  	@param {object|string} [name] The collection of new option values or the name of a single option.
  	@param {any} [value] The value for a single named option.
  	@return {any|object} If retrieving a single value or all options.
  	@example $(selector).plugin('option', 'name', value) // Set one option
  $(selector).plugin('option', {name: value, ...}) // Set multiple options
  var value = $(selector).plugin('option', 'name') // Get one option
  var options = $(selector).plugin('option') // Get all options */
		option: function option(elem, name, value) {
			elem = $(elem);
			var inst = elem.data(this.name);
			var options = name || {};
			if (!name || typeof name === 'string' && typeof value === 'undefined') {
				options = (inst || {}).options;
				return options && name ? options[name] : options;
			}
			if (!elem.hasClass(this._getMarker())) {
				return;
			}
			if (typeof name === 'string') {
				options = {};
				options[name] = value;
			}
			this._optionsChanged(elem, inst, options);
			$.extend(inst.options, options);
		},

		/** Plugin specific options processing.
  	Old value available in <code>inst.options[name]</code>, new value in <code>options[name]</code>.
  	Override this in a sub-class to perform extra activities.
  	@protected
  	@param {jQuery} elem The current jQuery element.
  	@param {object} inst The instance settings.
  	@param {object} options The new options.
  	@example _optionsChanged: function(elem, inst, options) {
  if (options.name != inst.options.name) {
    elem.removeClass(inst.options.name).addClass(options.name);
  }
  } */
		_optionsChanged: function _optionsChanged(elem, inst, options) {// jshint unused:false
		},

		/** Remove all trace of the plugin.
  	Override {@linkcode module:JQPlugin~_preDestroy|_preDestroy} for plugin-specific processing.
  	@param {Element} elem The source element.
  	@example $(selector).plugin('destroy') */
		destroy: function destroy(elem) {
			elem = $(elem);
			if (!elem.hasClass(this._getMarker())) {
				return;
			}
			this._preDestroy(elem, this._getInst(elem));
			elem.removeData(this.name).removeClass(this._getMarker());
		},

		/** Plugin specific pre destruction.
  	It is invoked as part of the {@linkcode module:JQPlugin~destroy|destroy} processing.
  	Override this in a sub-class to perform extra activities and undo everything that was
  	done in the {@linkcode module:JQPlugin~_postAttach|_postAttach} or
  	{@linkcode module:JQPlugin~_optionsChanged|_optionsChanged} functions.
  	@protected
  	@param {jQuery} elem The current jQuery element.
  	@param {object} inst The instance settings.
  	@example _preDestroy: function(elem, inst) {
  elem.off('.' + this.name);
  } */
		_preDestroy: function _preDestroy(elem, inst) {// jshint unused:false
		}
	});

	/** Convert names from hyphenated to camel-case.
 	@private
 	@param {string} value The original hyphenated name.
 	@return {string} The camel-case version. */
	function camelCase(name) {
		return name.replace(/-([a-z])/g, function (match, group) {
			return group.toUpperCase();
		});
	}

	/** Expose the plugin base.
 	@namespace $.JQPlugin */
	$.JQPlugin = {

		/** Create a new collection plugin.
  	@memberof $.JQPlugin
  	@param {string} [superClass='JQPlugin'] The name of the parent class to inherit from.
  	@param {object} overrides The property/function overrides for the new class.
  		See {@link module:JQPlugin|JQPlugin} for the base functionality.
  	@example $.JQPlugin.createPlugin({ // Define the plugin
  name: 'tabs',
  defaultOptions: {selectedClass: 'selected'},
  _initSettings: function(elem, options) { return {...}; },
  _postAttach: function(elem, inst) { ... }
  });
  $('selector').tabs(); // And instantiate it */
		createPlugin: function createPlugin(superClass, overrides) {
			if ((typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)) === 'object') {
				overrides = superClass;
				superClass = 'JQPlugin';
			}
			superClass = camelCase(superClass);
			var className = camelCase(overrides.name);
			JQClass.classes[className] = JQClass.classes[superClass].extend(overrides);
			new JQClass.classes[className](); // jshint ignore:line
		}
	};
})(jQuery);
/*! http://keith-wood.name/datepick.html
	Date picker for jQuery v5.1.1.
	Written by Keith Wood (wood.keith{at}optusnet.com.au) February 2010.
	Licensed under the MIT (http://keith-wood.name/licence.html) licence. 
	Please attribute the author if you use it. */

(function ($) {
	// Hide scope, no $ conflict
	'use strict';

	var pluginName = 'datepick';

	/** Create the datepicker plugin.
 	<p>Sets an input field to popup a calendar for date entry,
 		or a <code>div</code> or <code>span</code> to show an inline calendar.</p>
 	<p>Expects HTML like:</p>
 	<pre>&lt;input type="text"></pre>
 	<p>or</p>
 	<pre>&lt;div>&lt;/div></pre>
 	<p>Provide inline configuration like:</p>
 	<pre>&lt;input type="text" data-datepick="name: 'value',..."/></pre>
 	@module Datepick
 	@augments JQPlugin
 	@example $(selector).datepick()
 $(selector).datepick({minDate: 0, maxDate: '+1m +1w'}) */
	$.JQPlugin.createPlugin({

		/** The name of the plugin.
  	@default 'datepick' */
		name: pluginName,

		/** Default template for generating a datepicker.
  	Insert anywhere: '{l10n:name}' to insert localised value for name,
  	'{link:name}' to insert a link trigger for command name,
  	'{button:name}' to insert a button trigger for command name,
  	'{popup:start}...{popup:end}' to mark a section for inclusion in a popup datepicker only,
  	'{inline:start}...{inline:end}' to mark a section for inclusion in an inline datepicker only.
  	@property {string} picker Overall structure: '{months}' to insert calendar months.
  	@property {string} monthRow One row of months: '{months}' to insert calendar months.
  	@property {string} month A single month: '{monthHeader<em>:dateFormat</em>}' to insert the month header -
  				<em>dateFormat</em> is optional and defaults to 'MM yyyy',
  				'{weekHeader}' to insert a week header, '{weeks}' to insert the month's weeks.
  	@property {string} weekHeader A week header: '{days}' to insert individual day names.
  	@property {string} dayHeader Individual day header: '{day}' to insert day name.
  	@property {string} week One week of the month: '{days}' to insert the week's days,
  				'{weekOfYear}' to insert week of year.
  	@property {string} day An individual day: '{day}' to insert day value.
  	@property {string} monthSelector jQuery selector, relative to picker, for a single month.
  	@property {string} daySelector jQuery selector, relative to picker, for individual days.
  	@property {string} rtlClass Class for right-to-left (RTL) languages.
  	@property {string} multiClass Class for multi-month datepickers.
  	@property {string} defaultClass Class for selectable dates.
  	@property {string} selectedClass Class for currently selected dates.
  	@property {string} highlightedClass Class for highlighted dates.
  	@property {string} todayClass Class for today.
  	@property {string} otherMonthClass Class for days from other months.
  	@property {string} weekendClass Class for days on weekends.
  	@property {string} commandClass Class prefix for commands.
  	@property {string} commandButtonClass Extra class(es) for commands that are buttons.
  	@property {string} commandLinkClass Extra class(es) for commands that are links.
  	@property {string} disabledClass Class for disabled commands. */
		defaultRenderer: {
			picker: '<div class="datepick">' + '<div class="datepick-nav">{link:prev}{link:today}{link:next}</div>{months}' + '{popup:start}<div class="datepick-ctrl">{link:clear}{link:close}</div>{popup:end}' + '<div class="datepick-clear-fix"></div></div>',
			monthRow: '<div class="datepick-month-row">{months}</div>',
			month: '<div class="datepick-month"><div class="datepick-month-header">{monthHeader}</div>' + '<table><thead>{weekHeader}</thead><tbody>{weeks}</tbody></table></div>',
			weekHeader: '<tr>{days}</tr>',
			dayHeader: '<th>{day}</th>',
			week: '<tr>{days}</tr>',
			day: '<td>{day}</td>',
			monthSelector: '.datepick-month',
			daySelector: 'td',
			rtlClass: 'datepick-rtl',
			multiClass: 'datepick-multi',
			defaultClass: '',
			selectedClass: 'datepick-selected',
			highlightedClass: 'datepick-highlight',
			todayClass: 'datepick-today',
			otherMonthClass: 'datepick-other-month',
			weekendClass: 'datepick-weekend',
			commandClass: 'datepick-cmd',
			commandButtonClass: '',
			commandLinkClass: '',
			disabledClass: 'datepick-disabled'
		},

		/** Command actions that may be added to a layout by name.
  	<ul>
  	<li>prev - Show the previous month (based on <code>monthsToStep</code> option) - <em>PageUp</em></li>
  	<li>prevJump - Show the previous year (based on <code>monthsToJump</code> option) - <em>Ctrl+PageUp</em></li>
  	<li>next - Show the next month (based on <code>monthsToStep</code> option) - <em>PageDown</em></li>
  	<li>nextJump - Show the next year (based on <code>monthsToJump</code> option) - <em>Ctrl+PageDown</em></li>
  	<li>current - Show the currently selected month or today's if none selected - <em>Ctrl+Home</em></li>
  	<li>today - Show today's month - <em>Ctrl+Home</em></li>
  	<li>clear - Erase the date and close the datepicker popup - <em>Ctrl+End</em></li>
  	<li>close - Close the datepicker popup - <em>Esc</em></li>
  	<li>prevWeek - Move the cursor to the previous week - <em>Ctrl+Up</em></li>
  	<li>prevDay - Move the cursor to the previous day - <em>Ctrl+Left</em></li>
  	<li>nextDay - Move the cursor to the next day - <em>Ctrl+Right</em></li>
  	<li>nextWeek - Move the cursor to the next week - <em>Ctrl+Down</em></li>
  	</ul>
  	The command name is the key name and is used to add the command to a layout
  	with '{button:name}' or '{link:name}'. Each has the following attributes:
  	@property {string} text The field in the regional settings for the displayed text.
  	@property {string} status The field in the regional settings for the status text.
  	@property {object} keystroke The keystroke to trigger the action.
  	@property {number} keystroke.keyCode The code for the keystroke.
  	@property {boolean} keystroke.ctrlKey <code>true</code> if <em>Ctrl</em> is required,
  	@property {boolean} keystroke.altKey <code>true</code> if <em>Alt</em> is required,
  	@property {boolean} keystroke.shiftKey <code>true</code> if <em>Shift</em> is required.
  	@property {DatepickCommandEnabled} enabled The function that indicates the command is enabled.
  	@property {DatepickCommandDate} date The function to get the date associated with this action.
  	@property {DatepickCommandAction} action The function that implements the action. */
		commands: {
			prev: { text: 'prevText', status: 'prevStatus', // Previous month
				keystroke: { keyCode: 33 }, // Page up
				enabled: function enabled(inst) {
					var minDate = inst.curMinDate();
					return !minDate || plugin.add(plugin.day(plugin._applyMonthsOffset(plugin.add(plugin.newDate(inst.drawDate), 1 - inst.options.monthsToStep, 'm'), inst), 1), -1, 'd').getTime() >= minDate.getTime();
				},
				date: function date(inst) {
					return plugin.day(plugin._applyMonthsOffset(plugin.add(plugin.newDate(inst.drawDate), -inst.options.monthsToStep, 'm'), inst), 1);
				},
				action: function action(inst) {
					plugin.changeMonth(this, -inst.options.monthsToStep);
				}
			},
			prevJump: { text: 'prevJumpText', status: 'prevJumpStatus', // Previous year
				keystroke: { keyCode: 33, ctrlKey: true }, // Ctrl + Page up
				enabled: function enabled(inst) {
					var minDate = inst.curMinDate();
					return !minDate || plugin.add(plugin.day(plugin._applyMonthsOffset(plugin.add(plugin.newDate(inst.drawDate), 1 - inst.options.monthsToJump, 'm'), inst), 1), -1, 'd').getTime() >= minDate.getTime();
				},
				date: function date(inst) {
					return plugin.day(plugin._applyMonthsOffset(plugin.add(plugin.newDate(inst.drawDate), -inst.options.monthsToJump, 'm'), inst), 1);
				},
				action: function action(inst) {
					plugin.changeMonth(this, -inst.options.monthsToJump);
				}
			},
			next: { text: 'nextText', status: 'nextStatus', // Next month
				keystroke: { keyCode: 34 }, // Page down
				enabled: function enabled(inst) {
					var maxDate = inst.get('maxDate');
					return !maxDate || plugin.day(plugin._applyMonthsOffset(plugin.add(plugin.newDate(inst.drawDate), inst.options.monthsToStep, 'm'), inst), 1).getTime() <= maxDate.getTime();
				},
				date: function date(inst) {
					return plugin.day(plugin._applyMonthsOffset(plugin.add(plugin.newDate(inst.drawDate), inst.options.monthsToStep, 'm'), inst), 1);
				},
				action: function action(inst) {
					plugin.changeMonth(this, inst.options.monthsToStep);
				}
			},
			nextJump: { text: 'nextJumpText', status: 'nextJumpStatus', // Next year
				keystroke: { keyCode: 34, ctrlKey: true }, // Ctrl + Page down
				enabled: function enabled(inst) {
					var maxDate = inst.get('maxDate');
					return !maxDate || plugin.day(plugin._applyMonthsOffset(plugin.add(plugin.newDate(inst.drawDate), inst.options.monthsToJump, 'm'), inst), 1).getTime() <= maxDate.getTime();
				},
				date: function date(inst) {
					return plugin.day(plugin._applyMonthsOffset(plugin.add(plugin.newDate(inst.drawDate), inst.options.monthsToJump, 'm'), inst), 1);
				},
				action: function action(inst) {
					plugin.changeMonth(this, inst.options.monthsToJump);
				}
			},
			current: { text: 'currentText', status: 'currentStatus', // Current month
				keystroke: { keyCode: 36, ctrlKey: true }, // Ctrl + Home
				enabled: function enabled(inst) {
					var minDate = inst.curMinDate();
					var maxDate = inst.get('maxDate');
					var curDate = inst.selectedDates[0] || plugin.today();
					return (!minDate || curDate.getTime() >= minDate.getTime()) && (!maxDate || curDate.getTime() <= maxDate.getTime());
				},
				date: function date(inst) {
					return inst.selectedDates[0] || plugin.today();
				},
				action: function action(inst) {
					var curDate = inst.selectedDates[0] || plugin.today();
					plugin.showMonth(this, curDate.getFullYear(), curDate.getMonth() + 1);
				}
			},
			today: { text: 'todayText', status: 'todayStatus', // Today's month
				keystroke: { keyCode: 36, ctrlKey: true }, // Ctrl + Home
				enabled: function enabled(inst) {
					var minDate = inst.curMinDate();
					var maxDate = inst.get('maxDate');
					return (!minDate || plugin.today().getTime() >= minDate.getTime()) && (!maxDate || plugin.today().getTime() <= maxDate.getTime());
				},
				date: function date() {
					return plugin.today();
				},
				action: function action() {
					plugin.showMonth(this);
				}
			},
			clear: { text: 'clearText', status: 'clearStatus', // Clear the datepicker
				keystroke: { keyCode: 35, ctrlKey: true }, // Ctrl + End
				enabled: function enabled() {
					return true;
				},
				date: function date() {
					return null;
				},
				action: function action() {
					plugin.clear(this);
				}
			},
			close: { text: 'closeText', status: 'closeStatus', // Close the datepicker
				keystroke: { keyCode: 27 }, // Escape
				enabled: function enabled() {
					return true;
				},
				date: function date() {
					return null;
				},
				action: function action() {
					plugin.hide(this);
				}
			},
			prevWeek: { text: 'prevWeekText', status: 'prevWeekStatus', // Previous week
				keystroke: { keyCode: 38, ctrlKey: true }, // Ctrl + Up
				enabled: function enabled(inst) {
					var minDate = inst.curMinDate();
					return !minDate || plugin.add(plugin.newDate(inst.drawDate), -7, 'd').getTime() >= minDate.getTime();
				},
				date: function date(inst) {
					return plugin.add(plugin.newDate(inst.drawDate), -7, 'd');
				},
				action: function action() {
					plugin.changeDay(this, -7);
				}
			},
			prevDay: { text: 'prevDayText', status: 'prevDayStatus', // Previous day
				keystroke: { keyCode: 37, ctrlKey: true }, // Ctrl + Left
				enabled: function enabled(inst) {
					var minDate = inst.curMinDate();
					return !minDate || plugin.add(plugin.newDate(inst.drawDate), -1, 'd').getTime() >= minDate.getTime();
				},
				date: function date(inst) {
					return plugin.add(plugin.newDate(inst.drawDate), -1, 'd');
				},
				action: function action() {
					plugin.changeDay(this, -1);
				}
			},
			nextDay: { text: 'nextDayText', status: 'nextDayStatus', // Next day
				keystroke: { keyCode: 39, ctrlKey: true }, // Ctrl + Right
				enabled: function enabled(inst) {
					var maxDate = inst.get('maxDate');
					return !maxDate || plugin.add(plugin.newDate(inst.drawDate), 1, 'd').getTime() <= maxDate.getTime();
				},
				date: function date(inst) {
					return plugin.add(plugin.newDate(inst.drawDate), 1, 'd');
				},
				action: function action() {
					plugin.changeDay(this, 1);
				}
			},
			nextWeek: { text: 'nextWeekText', status: 'nextWeekStatus', // Next week
				keystroke: { keyCode: 40, ctrlKey: true }, // Ctrl + Down
				enabled: function enabled(inst) {
					var maxDate = inst.get('maxDate');
					return !maxDate || plugin.add(plugin.newDate(inst.drawDate), 7, 'd').getTime() <= maxDate.getTime();
				},
				date: function date(inst) {
					return plugin.add(plugin.newDate(inst.drawDate), 7, 'd');
				},
				action: function action() {
					plugin.changeDay(this, 7);
				}
			}
		},

		/** Determine whether a {@linkcode module:Datepick~commands|command} is enabled.
  	@callback DatepickCommandEnabled
  	@global
  	@param {object} inst The current instance settings.
  	@return {boolean} <code>true</code> if this command is enabled, <code>false</code> if not.
  	@example enabled: function(inst) {
  return !!inst.curMinDate();
  } */

		/** Calculate the representative date for a {@linkcode module:Datepick~commands|command}.
  	@callback DatepickCommandDate
  	@global
  	@param {object} inst The current instance settings.
  	@return {Date} A date appropriate for this command.
  	@example date: function(inst) {
  return inst.curMinDate();
  } */

		/** Perform the action for a {@linkcode module:Datepick~commands|command}.
  	@callback DatepickCommandAction
  	@global
  	@param {object} inst The current instance settings.
  	@example action: function(inst) {
  $.datepick.setDate(inst.elem, inst.curMinDate());
  } */

		/** Calculate the week of the year for a date.
  	Use it with the {@linkcode module:Datepick~defaultOptions|calculateWeek} option.
  	@callback DatepickCalculateWeek
  	@global
  	@param {Date} date The date to evaluate.
  	@return {number} The week of the year.
  	@example calculateWeek: function(date) {
  return Math.floor(($.datepick.dayOfYear(date) - 1) / 7) + 1;
  } */

		/** Determine where the first month shows in a multi-month calendar.
  	Use it with the {@linkcode module:Datepick~defaultOptions|monthsOffset} option.
  	@callback DatepickMonthsOffset
  	@global
  	@param {Date} date The first date to be shown.
  	@return {number} The offset within the calendar for the first month - first position is 0.
  	@example monthsToShow: 3,
  monthsToStep: 3,
  monthsOffset: function(date) { // Always start on the quarter
  return date.getMonth() % 3;
  } */

		/** Provide information about an individual date shown in the calendar.
  	Use it with the {@linkcode module:Datepick~defaultOptions|onDate} option.
  	@callback DatepickOnDate
  	@global
  	@param {Date} date The date to evaluate.
  	@return {object} Information about that date, with the properties above.
  	@property selectable {boolean} <code>true</code> if this date can be selected.
  	@property dateClass {string} Class(es) to be applied to the date.
  	@property content {string} The date cell content.
  	@property tooltip {string} A popup tooltip for the date.
  	@example onDate: function(date) {
  return {selectable: date.getDay() > 0 && date.getDay() &lt; 5,
    dateClass: date.getDay() == 4 ? 'last-day' : ''};
  } */

		/** Update the datepicker display.
  	Use it with the {@linkcode module:Datepick~defaultOptions|onShow} option.
  	@callback DatepickOnShow
  	@global
  	@param {jQuery} picker The datepicker <code>div</code> to be shown.
  	@param {object} inst The current instance settings.
  	@example onShow: function(picker, inst) {
  picker.append('&lt;button type="button">Hi&lt;/button>').
    find('button:last').click(function() {
      alert('Hi!');
    });
  } */

		/** React to navigating through the months/years.
  	Use it with the {@linkcode module:Datepick~defaultOptions|onChangeMonthYear} option.
  	@callback DatepickOnChangeMonthYear
  	@global
  	@param {number} year The new year.
  	@param {number} month The new month (1 to 12).
  	@example onChangeMonthYear: function(year, month) {
  alert('Now in ' + month + '/' + year);
  } */

		/** Datepicker on select callback.
  	Triggered when a date is selected.
  	Use it with the {@linkcode module:Datepick~defaultOptions|onSelect} option.
  	@callback DatepickOnSelect
  	@global
  	@param {Date[]} dates The selected date(s).
  	@example onSelect: function(dates) {
  alert('Selected ' + dates);
  } */

		/** Datepicker on close callback.
  	Triggered when a popup calendar is closed.
  	Use it with the {@linkcode module:Datepick~defaultOptions|onClose} option.
  	@callback DatepickOnClose
  	@global
  	@param {Date[]} dates The selected date(s).
  	@example onClose: function(dates) {
  alert('Selected ' + dates);
  } */

		/** Default settings for the plugin.
  	@property {string} [pickerClass=''] CSS class to add to this instance of the datepicker.
  	@property {boolean} [showOnFocus=true] <code>true</code> for popup on focus, <code>false</code> for not.
  	@property {string|Element|jQuery} [showTrigger=null] Element to be cloned for a trigger,
  				<code>null</code> for none.
  	@property {string} [showAnim='show'] Name of jQuery animation for popup, '' for no animation.
  	@property {object} [showOptions=null] Options for enhanced animations.
  	@property {string|number} [showSpeed='normal'] Duration of display/closure, named value or milliseconds.
  	@property {string|Element|jQuery} [popupContainer=null] The element to which a popup calendar is added,
  				<code>null</code> for body.
  	@property {string} [alignment='bottom'] Alignment of popup - with nominated corner of input:
  				'top' or 'bottom' aligns depending on language direction,
  				'topLeft', 'topRight', 'bottomLeft', 'bottomRight'.
  	@property {boolean} [fixedWeeks=false] <code>true</code> to always show 6 weeks,
  				<code>false</code> to only show as many as are needed.
  	@property {number} [firstDay=0] First day of the week, 0 = Sunday, 1 = Monday, etc.
  	@property {DatepickCalculateWeek} [calculateWeek=this.iso8601Week] Calculate week of the year from a date,
  				<code>null</code> for ISO8601.
  	@property {number|number[]} [monthsToShow=1] How many months to show, cols or [rows, cols].
  	@property {number|DatepickMonthsOffset} [monthsOffset=0] How many months to offset the primary month by;
  				may be a function that takes the date and returns the offset.
  	@property {number} [monthsToStep=1] How many months to move when prev/next clicked.
  	@property {number} [monthsToJump=12] How many months to move when large prev/next clicked.
  	@property {boolean} [useMouseWheel=true] <code>true</code> to use mousewheel if available,
  				<code>false</code> to never use it.
  	@property {boolean} [changeMonth=true] <code>true</code> to change month/year via drop-down,
  				<code>false</code> for navigation only.
  	@property {string} [yearRange='c-10:c+10'] Range of years to show in drop-down: 'any' for direct text entry
  				or 'start:end', where start/end are '±nn' for relative to today
  				or 'c±nn' for relative to the currently selected date
  				or 'nnnn' for an absolute year.
  	@property {string|number} [shortYearCutoff='+10'] Cutoff for two-digit year in the current century.
  				If expressed as a string it is offset from the current year.
  				If expressed as a number it is used directly.
  				Use -1 to always use 1900 as the base year, or use 100 to disable the functionality.
  				Any short year ('yy') entered is transformed into a full year in the current century
  				if less than or equal to this cutoff value, and the previous century otherwise.
  	@property {boolean} [showOtherMonths=false] <code>true</code> to show dates from other months,
  				<code>false</code> to not show them.
  	@property {boolean} [selectOtherMonths=false] <code>true</code> to allow selection of dates
  				from other months too.
  	@property {string|number|Date} [defaultDate=null] Date to show if no other selected.
  				If expressed as a string it is parsed using the current
  				{@linkcode module:Datepick~regionalOptions|dateFormat}.
  				If expressed as a number it is offset that number of days from today.
  				If expressed as a <code>Date</code> it is used directly.
  	@property {boolean} [selectDefaultDate=false] <code>true</code> to pre-select the default date
  				if no other is chosen.
  	@property {string|number|Date} [minDate=null] The minimum selectable date.
  				See the allowed values in <code>defaultDate</code> above.
  	@property {string|number|Date} [maxDate=null] The maximum selectable date.
  				See the allowed values in <code>defaultDate</code> above.
  	@property {string} [dateFormat='mm/dd/yyyy'] Format for dates.
  				See {@linkcode module:Datepick~formatDate|formatDate} for allowed formats.
  	@property {boolean} [autoSize=false] <code>true</code> to size the input field according to
  				the {@linkcode module:Datepick~regionalOptions|dateFormat}.
  	@property {boolean} [rangeSelect=false] Allows for selecting a date range on one date picker.
  	@property {string} [rangeSeparator=' - '] Text between two dates in a range when displayed.
  	@property {number} [multiSelect=0] Maximum number of selectable dates for multiple independent dates,
  				zero for single select. If specified,
  				<code>multiSelect</code> takes precedence over <code>rangeSelect</code>.
  	@property {string} [multiSeparator=','] Text between multiple dates.
  	@property {DatepickOnDate} [onDate=null] Callback as each date is added to the display calendar.
  				This allows you to customise the behaviour and presentation of each date.
  	@property {DatepickOnShow} [onShow=null] Callback just before a datepicker is shown.
  				This allows you to customise the datepicker before display.
  	@property {DatepickOnChangeMonthYear} [onChangeMonthYear=null] Callback when a new month/year is selected.
  				This allows you to perform other actions when the calendar changes.
  	@property {DatepickOnSelect} [onSelect=null] Callback when a date is selected.
  	@property {DatepickOnClose} [onClose=null] Callback when a datepicker is closed.
  	@property {string|Element|jQuery} [altField=null] Alternate field to update in synch with the datepicker.
  	@property {string} [altFormat=null] Date format for alternate field, defaults to
  				{@linkcode module:Datepick~regionalOptions|dateFormat}.
  				This allows you to display one (human-friendly) format,
  				while automatically maintaining another (computer-friendly) format.
  	@property {boolean} [constrainInput=true] <code>true</code> to constrain typed input to
  				{@linkcode module:Datepick~regionalOptions|dateFormat} allowed characters.
  	@property {boolean} [commandsAsDateFormat=false] <code>true</code> to apply
  				{@linkcode module:Datepick~formatDate|formatDate} to the command texts.
  	@property {object} [commands=this.commands] Command actions that may be added to a layout by name. */
		defaultOptions: {
			pickerClass: '',
			showOnFocus: true,
			showTrigger: null,
			showAnim: 'show',
			showOptions: {},
			showSpeed: 'normal',
			popupContainer: null,
			alignment: 'bottom',
			fixedWeeks: false,
			firstDay: 0,
			calculateWeek: null, // this.iso8601Week,
			monthsToShow: 1,
			monthsOffset: 0,
			monthsToStep: 1,
			monthsToJump: 12,
			useMouseWheel: true,
			changeMonth: true,
			yearRange: 'c-10:c+10',
			shortYearCutoff: '+10',
			showOtherMonths: false,
			selectOtherMonths: false,
			defaultDate: null,
			selectDefaultDate: false,
			minDate: null,
			maxDate: null,
			dateFormat: 'mm/dd/yyyy',
			autoSize: false,
			rangeSelect: false,
			rangeSeparator: ' - ',
			multiSelect: 0,
			multiSeparator: ',',
			onDate: null,
			onShow: null,
			onChangeMonthYear: null,
			onSelect: null,
			onClose: null,
			altField: null,
			altFormat: null,
			constrainInput: true,
			commandsAsDateFormat: false,
			commands: {} // this.commands
		},

		/** Localisations for the plugin.
  	Entries are objects indexed by the language code ('' being the default US/English).
  	Each object has the following attributes.
  	@property {string[]} [monthNames=['January','February',...,'November','December']]
  				The long names of the months.
  	@property {string[]} [monthNamesShort=['Jan','Feb',...,'Nov','Dec']]
  				The short names of the months.
  	@property {string[]} [dayNames=['Sunday','Monday',...,'Friday','Saturday']]
  				The long names of the days of the week.
  	@property {string[]} [dayNamesShort=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']]
  				The short names of the days of the week.
  	@property {string[]} [dayNamesMin=['Su','Mo','Tu','We','Th','Fr','Sa']]
  				The minimal names of the days of the week.
  	@property {string} [dateFormat='mm/dd/yyyy'] See options on {@linkcode module:Datepick~formatDate|formatDate}.
  	@property {number} [firstDay=0] The first day of the week, Sun = 0, Mon = 1, etc.
  	@property {string} [renderer=this.defaultRenderer] The rendering templates.
  	@property {string} [prevText='&lt;Prev'] Text for the previous month command.
  	@property {string} [prevStatus='Show the previous month'] Status text for the previous month command.
  	@property {string} [prevJumpText='&lt;&lt;'] Text for the previous year command.
  	@property {string} [prevJumpStatus='Show the previous year'] Status text for the previous year command.
  	@property {string} [nextText='Next&gt;'] Text for the next month command.
  	@property {string} [nextStatus='Show the next month'] Status text for the next month command.
  	@property {string} [nextJumpText='&gt;&gt;'] Text for the next year command.
  	@property {string} [nextJumpStatus='Show the next year'] Status text for the next year command.
  	@property {string} [currentText='Current'] Text for the current month command.
  	@property {string} [currentStatus='Show the current month'] Status text for the current month command.
  	@property {string} [todayText='Today'] Text for the today's month command.
  	@property {string} [todayStatus='Show today\'s month'] Status text for the today's month command.
  	@property {string} [clearText='Clear'] Text for the clear command.
  	@property {string} [clearStatus='Clear all the dates'] Status text for the clear command.
  	@property {string} [closeText='Close'] Text for the close command.
  	@property {string} [closeStatus='Close the datepicker'] Status text for the close command.
  	@property {string} [yearStatus='Change the year'] Status text for year selection.
  	@property {string} [earlierText='&#160;&#160;▲'] Text for earlier years.
  	@property {string} [laterText='&#160;&#160;▼'] Text for later years.
  	@property {string} [monthStatus='Change the month'] Status text for month selection.
  	@property {string} [weekText='Wk'] Text for week of the year column header.
  	@property {string} [weekStatus='Week of the year'] Status text for week of the year column header.
  	@property {string} [dayStatus='Select DD,&#160;M&#160;d,&#160;yyyy'] Status text for selectable days.
  	@property {string} [defaultStatus='Select a date'] Status text shown by default.
  	@property {boolean} [isRTL=false] <code>true</code> if language is written right-to-left. */
		regionalOptions: { // Available regional settings, indexed by language/country code
			'': { // Default regional settings - English/US
				monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
				dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
				dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
				dateFormat: 'mm/dd/yyyy',
				firstDay: 0,
				renderer: {}, // this.defaultRenderer
				prevText: '&lt;Prev',
				prevStatus: 'Show the previous month',
				prevJumpText: '&lt;&lt;',
				prevJumpStatus: 'Show the previous year',
				nextText: 'Next&gt;',
				nextStatus: 'Show the next month',
				nextJumpText: '&gt;&gt;',
				nextJumpStatus: 'Show the next year',
				currentText: 'Current',
				currentStatus: 'Show the current month',
				todayText: 'Today',
				todayStatus: 'Show today\'s month',
				clearText: 'Clear',
				clearStatus: 'Clear all the dates',
				closeText: 'Close',
				closeStatus: 'Close the datepicker',
				yearStatus: 'Change the year',
				earlierText: '&#160;&#160;▲',
				laterText: '&#160;&#160;▼',
				monthStatus: 'Change the month',
				weekText: 'Wk',
				weekStatus: 'Week of the year',
				dayStatus: 'Select DD, M d, yyyy',
				defaultStatus: 'Select a date',
				isRTL: false
			}
		},

		_disabled: [],

		_popupClass: pluginName + '-popup', // Marker for popup division
		_triggerClass: pluginName + '-trigger', // Marker for trigger element
		_disableClass: pluginName + '-disable', // Marker for disabled element
		_monthYearClass: pluginName + '-month-year', // Marker for month/year inputs
		_curMonthClass: pluginName + '-month-', // Marker for current month/year
		_anyYearClass: pluginName + '-any-year', // Marker for year direct input
		_curDoWClass: pluginName + '-dow-', // Marker for day of week

		_ticksTo1970: ((1970 - 1) * 365 + Math.floor(1970 / 4) - Math.floor(1970 / 100) + Math.floor(1970 / 400)) * 24 * 60 * 60 * 10000000,
		_msPerDay: 24 * 60 * 60 * 1000,

		/** The {@linkcode module:Datepick~formatDate|date format} for use with Atom (RFC 3339/ISO 8601): yyyy-mm-dd. */
		ATOM: 'yyyy-mm-dd',
		/** The {@linkcode module:Datepick~formatDate|date format} for use with cookies: D, dd M yyyy. */
		COOKIE: 'D, dd M yyyy',
		/** The {@linkcode module:Datepick~formatDate|date format} for full display: DD, MM d, yyyy. */
		FULL: 'DD, MM d, yyyy',
		/** The {@linkcode module:Datepick~formatDate|date format} for use with ISO 8601: yyyy-mm-dd. */
		ISO_8601: 'yyyy-mm-dd',
		/** The {@linkcode module:Datepick~formatDate|date format} for Julian dates: J. */
		JULIAN: 'J',
		/** The {@linkcode module:Datepick~formatDate|date format} for use with RFC 822: D, d M yy. */
		RFC_822: 'D, d M yy',
		/** The {@linkcode module:Datepick~formatDate|date format} for use with RFC 850: DD, dd-M-yy. */
		RFC_850: 'DD, dd-M-yy',
		/** The {@linkcode module:Datepick~formatDate|date format} for use with RFC 1036: D, d M yy. */
		RFC_1036: 'D, d M yy',
		/** The {@linkcode module:Datepick~formatDate|date format} for use with RFC 1123: D, d M yyyy. */
		RFC_1123: 'D, d M yyyy',
		/** The {@linkcode module:Datepick~formatDate|date format} for use with RFC 2822: D, d M yyyy. */
		RFC_2822: 'D, d M yyyy',
		/** The {@linkcode module:Datepick~formatDate|date format} for use with RSS (RFC 822): D, d M yy. */
		RSS: 'D, d M yy',
		/** The {@linkcode module:Datepick~formatDate|date format} for Windows ticks: !. */
		TICKS: '!',
		/** The {@linkcode module:Datepick~formatDate|date format} for Unix timestamp: @. */
		TIMESTAMP: '@',
		/** The {@linkcode module:Datepick~formatDate|date format} for use with W3C (ISO 8601): yyyy-mm-dd. */
		W3C: 'yyyy-mm-dd',

		/** Format a date object into a string value.
  	The format can be combinations of the following:
  	<ul>
  	<li>d  - day of month (no leading zero)</li>
  	<li>dd - day of month (two digit)</li>
  	<li>o  - day of year (no leading zeros)</li>
  	<li>oo - day of year (three digit)</li>
  	<li>D  - day name short</li>
  	<li>DD - day name long</li>
  	<li>w  - week of year (no leading zero)</li>
  	<li>ww - week of year (two digit)</li>
  	<li>m  - month of year (no leading zero)</li>
  	<li>mm - month of year (two digit)</li>
  	<li>M  - month name short</li>
  	<li>MM - month name long</li>
  	<li>yy - year (two digit)</li>
  	<li>yyyy - year (four digit)</li>
  	<li>@  - Unix timestamp (s since 01/01/1970)</li>
  	<li>!  - Windows ticks (100ns since 01/01/0001)</li>
  	<li>'...' - literal text</li>
  	<li>'' - single quote</li>
  	</ul>
  	@param {string} [format=defaultOptions.dateFormat] The desired format of the date.
  	@param {Date} date The date value to format.
  	@param {object} [settings] With these properties:
  	@param {string[]} [settings.dayNames] Names of the days from Sunday.
  	@param {string[]} [settings.dayNamesShort] Abbreviated names of the days from Sunday.
  	@param {string[]} [settings.monthNames] Names of the months.
  	@param {string[]} [settings.monthNamesShort] Abbreviated names of the months.
  	@param {DatepickCalculateWeek} [settings.calculateWeek] Function that determines week of the year.
  	@return {string} The date in the above format.
  	@example var display = $.datepick.formatDate('yyyy-mm-dd', new Date(2014, 12-1, 25)) */
		formatDate: function formatDate(format, date, settings) {
			if (typeof format !== 'string') {
				settings = date;
				date = format;
				format = '';
			}
			if (!date) {
				return '';
			}
			format = format || this.defaultOptions.dateFormat;
			settings = settings || {};
			var dayNamesShort = settings.dayNamesShort || this.defaultOptions.dayNamesShort;
			var dayNames = settings.dayNames || this.defaultOptions.dayNames;
			var monthNamesShort = settings.monthNamesShort || this.defaultOptions.monthNamesShort;
			var monthNames = settings.monthNames || this.defaultOptions.monthNames;
			var calculateWeek = settings.calculateWeek || this.defaultOptions.calculateWeek;
			// Check whether a format character is doubled
			var doubled = function doubled(match, step) {
				var matches = 1;
				while (iFormat + matches < format.length && format.charAt(iFormat + matches) === match) {
					matches++;
				}
				iFormat += matches - 1;
				return Math.floor(matches / (step || 1)) > 1;
			};
			// Format a number, with leading zeroes if necessary
			var formatNumber = function formatNumber(match, value, len, step) {
				var num = '' + value;
				if (doubled(match, step)) {
					while (num.length < len) {
						num = '0' + num;
					}
				}
				return num;
			};
			// Format a name, short or long as requested
			var formatName = function formatName(match, value, shortNames, longNames) {
				return doubled(match) ? longNames[value] : shortNames[value];
			};
			var output = '';
			var literal = false;
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === '\'' && !doubled('\'')) {
						literal = false;
					} else {
						output += format.charAt(iFormat);
					}
				} else {
					switch (format.charAt(iFormat)) {
						case 'd':
							output += formatNumber('d', date.getDate(), 2);
							break;
						case 'D':
							output += formatName('D', date.getDay(), dayNamesShort, dayNames);
							break;
						case 'o':
							output += formatNumber('o', this.dayOfYear(date), 3);
							break;
						case 'w':
							output += formatNumber('w', calculateWeek(date), 2);
							break;
						case 'm':
							output += formatNumber('m', date.getMonth() + 1, 2);
							break;
						case 'M':
							output += formatName('M', date.getMonth(), monthNamesShort, monthNames);
							break;
						case 'y':
							output += doubled('y', 2) ? date.getFullYear() : (date.getFullYear() % 100 < 10 ? '0' : '') + date.getFullYear() % 100;
							break;
						case '@':
							output += Math.floor(date.getTime() / 1000);
							break;
						case '!':
							output += date.getTime() * 10000 + this._ticksTo1970;
							break;
						case '\'':
							if (doubled('\'')) {
								output += '\'';
							} else {
								literal = true;
							}
							break;
						default:
							output += format.charAt(iFormat);
					}
				}
			}
			return output;
		},

		/** Parse a string value into a date object.
  	See {@linkcode module:Datepick~formatDate|formatDate} for the possible formats, plus:
  	<ul>
  	<li>* - ignore rest of string</li>
  	</ul>
  	@param {string} format The expected format of the date ('' for default datepicker format).
  	@param {string} value The date in the above format.
  	@param {object} [settings] With these properties:
  	@param {number} [settings.shortYearCutoff] The cutoff year for determining the century.
  	@param {string[]} [settings.dayNames] The names of the days from Sunday.
  	@param {string[]} [settings.dayNamesShort] The abbreviated names of the days from Sunday.
  	@param {string[]} [settings.monthNames] The Names of the months.
  	@param {string[]} [settings.monthNamesShort] The abbreviated names of the months.
  	@return {Date} The extracted date value or <code>null</code> if value is blank.
  	@throws Errors if the format and/or value are missing, if the value doesn't match the format,
  			or if the date is invalid.
  	@example var date = $.datepick.parseDate('dd/mm/yyyy', '25/12/2014') */
		parseDate: function parseDate(format, value, settings) {
			if (typeof value === 'undefined' || value === null) {
				throw 'Invalid arguments';
			}
			value = (typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' ? value.toString() : value + '';
			if (value === '') {
				return null;
			}
			format = format || this.defaultOptions.dateFormat;
			settings = settings || {};
			var shortYearCutoff = settings.shortYearCutoff || this.defaultOptions.shortYearCutoff;
			shortYearCutoff = typeof shortYearCutoff !== 'string' ? shortYearCutoff : this.today().getFullYear() % 100 + parseInt(shortYearCutoff, 10);
			var dayNamesShort = settings.dayNamesShort || this.defaultOptions.dayNamesShort;
			var dayNames = settings.dayNames || this.defaultOptions.dayNames;
			var monthNamesShort = settings.monthNamesShort || this.defaultOptions.monthNamesShort;
			var monthNames = settings.monthNames || this.defaultOptions.monthNames;
			var year = -1;
			var month = -1;
			var day = -1;
			var doy = -1;
			var shortYear = false;
			var literal = false;
			var date = null;
			// Check whether a format character is doubled
			var doubled = function doubled(match, step) {
				var matches = 1;
				while (iFormat + matches < format.length && format.charAt(iFormat + matches) === match) {
					matches++;
				}
				iFormat += matches - 1;
				return Math.floor(matches / (step || 1)) > 1;
			};
			// Extract a number from the string value
			var getNumber = function getNumber(match, step) {
				var isDoubled = doubled(match, step);
				var size = [2, 3, isDoubled ? 4 : 2, 11, 20]['oy@!'.indexOf(match) + 1];
				var digits = new RegExp('^-?\\d{1,' + size + '}');
				var num = value.substring(iValue).match(digits);
				if (!num) {
					throw 'Missing number at position {0}'.replace(/\{0\}/, iValue);
				}
				iValue += num[0].length;
				return parseInt(num[0], 10);
			};
			// Extract a name from the string value and convert to an index
			var getName = function getName(match, shortNames, longNames, step) {
				var names = doubled(match, step) ? longNames : shortNames;
				for (var i = 0; i < names.length; i++) {
					if (value.substr(iValue, names[i].length).toLowerCase() === names[i].toLowerCase()) {
						iValue += names[i].length;
						return i + 1;
					}
				}
				throw 'Unknown name at position {0}'.replace(/\{0\}/, iValue);
			};
			// Confirm that a literal character matches the string value
			var checkLiteral = function checkLiteral() {
				if (value.charAt(iValue) !== format.charAt(iFormat)) {
					throw 'Unexpected literal at position {0}'.replace(/\{0\}/, iValue);
				}
				iValue++;
			};
			var iValue = 0;
			for (var iFormat = 0; iFormat < format.length; iFormat++) {
				if (literal) {
					if (format.charAt(iFormat) === '\'' && !doubled('\'')) {
						literal = false;
					} else {
						checkLiteral();
					}
				} else {
					switch (format.charAt(iFormat)) {
						case 'd':
							day = getNumber('d');
							break;
						case 'D':
							getName('D', dayNamesShort, dayNames);
							break;
						case 'o':
							doy = getNumber('o');
							break;
						case 'w':
							getNumber('w');
							break;
						case 'm':
							month = getNumber('m');
							break;
						case 'M':
							month = getName('M', monthNamesShort, monthNames);
							break;
						case 'y':
							var iSave = iFormat;
							shortYear = !doubled('y', 2);
							iFormat = iSave;
							year = getNumber('y', 2);
							break;
						case '@':
							date = this._normaliseDate(new Date(getNumber('@') * 1000));
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case '!':
							date = this._normaliseDate(new Date((getNumber('!') - this._ticksTo1970) / 10000));
							year = date.getFullYear();
							month = date.getMonth() + 1;
							day = date.getDate();
							break;
						case '*':
							iValue = value.length;
							break;
						case '\'':
							if (doubled('\'')) {
								checkLiteral();
							} else {
								literal = true;
							}
							break;
						default:
							checkLiteral();
					}
				}
			}
			if (iValue < value.length) {
				throw 'Additional text found at end';
			}
			if (year === -1) {
				year = this.today().getFullYear();
			} else if (year < 100 && shortYear) {
				year += shortYearCutoff === -1 ? 1900 : this.today().getFullYear() - this.today().getFullYear() % 100 - (year <= shortYearCutoff ? 0 : 100);
			}
			if (doy > -1) {
				month = 1;
				day = doy;
				for (var dim = this.daysInMonth(year, month); day > dim; dim = this.daysInMonth(year, month)) {
					month++;
					day -= dim;
				}
			}
			date = this.newDate(year, month, day);
			if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) {
				throw 'Invalid date';
			}
			return date;
		},

		/** A date may be specified as an exact value or a relative one.
  	@param {Date|number|string} dateSpec The date as a <code>Date</code>,
  			or as a string in the current {@linkcode module:Datepick~regionalOptions|dateFormat},
  			or as a numeric offset - in days from today,
  			or as a string of amounts and periods, e.g. '+1m +2w',
  			using 'd' for days, 'w' for weeks, 'm' for months, and 'y' for years.
  	@param {Date} [defaultDate] The date to use if no other supplied, may be <code>null</code>.
  	@param {Date} [currentDate] The current date as a possible basis for relative dates,
  			if <code>null</code> today is used.
  	@param {string} [dateFormat] The expected date format - see {@linkcode module:Datepick~formatDate|formatDate}.
  	@param {object} [settings] With these properties:
  	@param {number} [settings.shortYearCutoff] The cutoff year for determining the century.
  	@param {string[]} [settings.dayNamesShort] Abbreviated names of the days from Sunday.
  	@param {string[]} [settings.dayNames] Names of the days from Sunday.
  	@param {string[]} [settings.monthNamesShort] Abbreviated names of the months.
  	@param {string[]} [settings.monthNames] Names of the months.
  	@return {Date} The decoded date.
  	@example var date = $.datepick.determineDate('+1m +2w', new Date()) */
		determineDate: function determineDate(dateSpec, defaultDate, currentDate, dateFormat, settings) {
			if (currentDate && (typeof currentDate === 'undefined' ? 'undefined' : _typeof(currentDate)) !== 'object') {
				settings = dateFormat;
				dateFormat = currentDate;
				currentDate = null;
			}
			if (typeof dateFormat !== 'string') {
				settings = dateFormat;
				dateFormat = '';
			}
			var offsetString = function offsetString(offset) {
				try {
					return plugin.parseDate(dateFormat, offset, settings);
				} catch (e) {
					// Ignore
				}
				offset = offset.toLowerCase();
				var date = (offset.match(/^c/) && currentDate ? plugin.newDate(currentDate) : null) || plugin.today();
				var pattern = /([+-]?[0-9]+)\s*(d|w|m|y)?/g;
				var matches = null;
				while (matches = pattern.exec(offset)) {
					date = plugin.add(date, parseInt(matches[1], 10), matches[2] || 'd');
				}
				return date;
			};
			defaultDate = defaultDate ? plugin.newDate(defaultDate) : null;
			dateSpec = typeof dateSpec === 'undefined' ? defaultDate : typeof dateSpec === 'string' ? offsetString(dateSpec) : typeof dateSpec === 'number' ? isNaN(dateSpec) || dateSpec === Infinity || dateSpec === -Infinity ? defaultDate : plugin.add(plugin.today(), dateSpec, 'd') : plugin.newDate(dateSpec);
			return dateSpec;
		},

		/** Find the number of days in a given month.
  	@param {Date|number} year The date to get days for or the full year.
  	@param {number} [month] The month (1 to 12), if the year is a number.
  	@return {number} The number of days in this month.
  	@example var days = $.datepick.daysInMonth(2014, 12)
  var days = $.datepick.daysInMonth(new Date(2014, 12-1, 25)) */
		daysInMonth: function daysInMonth(year, month) {
			month = year.getFullYear ? year.getMonth() + 1 : month;
			year = year.getFullYear ? year.getFullYear() : year;
			return this.newDate(year, month + 1, 0).getDate();
		},

		/** Calculate the day of the year for a date.
  	@param {Date|number} year The date to get the day-of-year for or the full year.
  	@param {number} [month] The month (1-12), if the year is a number.
  	@param {number} [day] The day, if the year is a number.
  	@return {number} The day of the year.
  	@example var doy = $.datepick.dayOfYear(2014, 12, 25)
  var doy = $.datepick.dayOfYear(new Date(2014, 12-1, 25)) */
		dayOfYear: function dayOfYear(year, month, day) {
			var date = year.getFullYear ? year : plugin.newDate(year, month, day);
			var newYear = plugin.newDate(date.getFullYear(), 1, 1);
			return Math.floor((date.getTime() - newYear.getTime()) / plugin._msPerDay) + 1;
		},

		/** Set as <code>calculateWeek</code> to determine the week of the year based on the ISO 8601 definition.
  	@param {Date|number} year The date to get the week for or the full year.
  	@param {number} [month] The month (1-12), if the year is a number.
  	@param {number} [day] The day, if the year is a number.
  	@return {number} The number of the week within the year that contains this date.
  	@example var week = $.datepick.iso8601Week(2014, 12, 25)
  var week = $.datepick.iso8601Week(new Date(2014, 12-1, 25)) */
		iso8601Week: function iso8601Week(year, month, day) {
			var checkDate = year.getFullYear ? new Date(year.getTime()) : plugin.newDate(year, month, day);
			// Find Thursday of this week starting on Monday
			checkDate.setDate(checkDate.getDate() + 4 - (checkDate.getDay() || 7));
			var time = checkDate.getTime();
			checkDate.setMonth(0, 1); // Compare with Jan 1
			return Math.floor(Math.round((time - checkDate) / plugin._msPerDay) / 7) + 1;
		},

		/** Return today's date.
  	@return {Date} Today.
  	@example var today = $.datepick.today() */
		today: function today() {
			return this._normaliseDate(new Date());
		},

		/** Return a new date.
  	@param {Date|number} year The date to clone or the year.
  	@param {number} [month] The month (1-12), if the year is a number.
  	@param {number} [day] The day, if the year is a number.
  	@return {Date} The date.
  	@example $.datepick.newDate(oldDate)
  $.datepick.newDate(2014, 12, 25) */
		newDate: function newDate(year, month, day) {
			return !year ? null : year.getFullYear ? this._normaliseDate(new Date(year.getTime())) : new Date(year, month - 1, day, 12);
		},

		/** Standardise a date into a common format - time portion is 12 noon.
  	@private
  	@param {Date} date The date to standardise.
  	@return {Date} The normalised date. */
		_normaliseDate: function _normaliseDate(date) {
			if (date) {
				date.setHours(12, 0, 0, 0);
			}
			return date;
		},

		/** Set the year for a date.
  	@param {Date} date The original date.
  	@param {number} year The new year.
  	@return {Date} The updated date.
  	@example $.datepick.year(date, 2014) */
		year: function year(date, _year) {
			date.setFullYear(_year);
			return this._normaliseDate(date);
		},

		/** Set the month for a date.
  	@param {Date} date The original date.
  	@param {number} month The new month (1-12).
  	@return {Date} The updated date.
  	@example $.datepick.month(date, 12) */
		month: function month(date, _month) {
			date.setMonth(_month - 1);
			return this._normaliseDate(date);
		},

		/** Set the day for a date.
  	@param {Date} date The original date.
  	@param {number} day The new day of the month.
  	@return {Date} The updated date.
  	@example $.datepick.day(date, 25) */
		day: function day(date, _day) {
			date.setDate(_day);
			return this._normaliseDate(date);
		},

		/** Add a number of periods to a date.
  	@param {Date} date The original date.
  	@param {number} amount The number of periods.
  	@param {string} period The type of period 'd' for days, 'w' for weeks, 'm' for months, 'y' for years.
  	@return {Date} The updated date.
  	@example $.datepick.add(date, 10, 'd') */
		add: function add(date, amount, period) {
			if (period === 'd' || period === 'w') {
				this._normaliseDate(date);
				date.setDate(date.getDate() + amount * (period === 'w' ? 7 : 1));
			} else {
				var year = date.getFullYear() + (period === 'y' ? amount : 0);
				var month = date.getMonth() + (period === 'm' ? amount : 0);
				date.setTime(plugin.newDate(year, month + 1, Math.min(date.getDate(), this.daysInMonth(year, month + 1))).getTime());
			}
			return date;
		},

		/** Apply the months offset value to a date.
  	@private
  	@param {Date} date The original date.
  	@param {object} inst The current instance settings.
  	@return {Date} The updated date. */
		_applyMonthsOffset: function _applyMonthsOffset(date, inst) {
			var monthsOffset = inst.options.monthsOffset;
			if ($.isFunction(monthsOffset)) {
				monthsOffset = monthsOffset.apply(inst.elem[0], [date]);
			}
			return plugin.add(date, -monthsOffset, 'm');
		},

		_init: function _init() {
			this.defaultOptions.commands = this.commands;
			this.defaultOptions.calculateWeek = this.iso8601Week;
			this.regionalOptions[''].renderer = this.defaultRenderer;
			this._super();
		},

		_instSettings: function _instSettings(elem) {
			return { selectedDates: [], drawDate: null, pickingRange: false,
				inline: $.inArray(elem[0].nodeName.toLowerCase(), ['div', 'span']) > -1,
				get: function get(name) {
					// Get a setting value, computing if necessary
					if ($.inArray(name, ['defaultDate', 'minDate', 'maxDate']) > -1) {
						// Decode date settings
						return plugin.determineDate(this.options[name], null, this.selectedDates[0], this.options.dateFormat, this.getConfig());
					}
					return this.options[name];
				},
				curMinDate: function curMinDate() {
					return this.pickingRange ? this.selectedDates[0] : this.get('minDate');
				},
				getConfig: function getConfig() {
					return { dayNamesShort: this.options.dayNamesShort, dayNames: this.options.dayNames,
						monthNamesShort: this.options.monthNamesShort, monthNames: this.options.monthNames,
						calculateWeek: this.options.calculateWeek,
						shortYearCutoff: this.options.shortYearCutoff };
				}
			};
		},

		_postAttach: function _postAttach(elem, inst) {
			if (inst.inline) {
				inst.drawDate = plugin._checkMinMax(plugin.newDate(inst.selectedDates[0] || inst.get('defaultDate') || plugin.today()), inst);
				inst.prevDate = plugin.newDate(inst.drawDate);
				this._update(elem[0]);
				if ($.fn.mousewheel) {
					elem.mousewheel(this._doMouseWheel);
				}
			} else {
				this._attachments(elem, inst);
				elem.on('keydown.' + inst.name, this._keyDown).on('keypress.' + inst.name, this._keyPress).on('keyup.' + inst.name, this._keyUp);
				if (elem.attr('disabled')) {
					this.disable(elem[0]);
				}
			}
		},

		_optionsChanged: function _optionsChanged(elem, inst, options) {
			if (options.calendar && options.calendar !== inst.options.calendar) {
				var discardDate = function discardDate(name) {
					return _typeof(inst.options[name]) === 'object' ? null : inst.options[name];
				};
				options = $.extend({ defaultDate: discardDate('defaultDate'),
					minDate: discardDate('minDate'), maxDate: discardDate('maxDate') }, options);
				inst.selectedDates = [];
				inst.drawDate = null;
			}
			var dates = inst.selectedDates;
			$.extend(inst.options, options);
			this.setDate(elem[0], dates, null, false, true);
			inst.pickingRange = false;
			inst.drawDate = plugin.newDate(this._checkMinMax((inst.options.defaultDate ? inst.get('defaultDate') : inst.drawDate) || inst.get('defaultDate') || plugin.today(), inst));
			if (!inst.inline) {
				this._attachments(elem, inst);
			}
			if (inst.inline || inst.div) {
				this._update(elem[0]);
			}
		},

		/** Attach events and trigger, if necessary.
  	@private
  	@param {jQuery} elem The control to affect.
  	@param {object} inst The current instance settings. */
		_attachments: function _attachments(elem, inst) {
			elem.off('focus.' + inst.name);
			if (inst.options.showOnFocus) {
				elem.on('focus.' + inst.name, this.show);
			}
			if (inst.trigger) {
				inst.trigger.remove();
			}
			var trigger = inst.options.showTrigger;
			inst.trigger = !trigger ? $([]) : $(trigger).clone().removeAttr('id').addClass(this._triggerClass)[inst.options.isRTL ? 'insertBefore' : 'insertAfter'](elem).click(function () {
				if (!plugin.isDisabled(elem[0])) {
					plugin[plugin.curInst === inst ? 'hide' : 'show'](elem[0]);
				}
			});
			this._autoSize(elem, inst);
			var dates = this._extractDates(inst, elem.val());
			if (dates) {
				this.setDate(elem[0], dates, null, true);
			}
			var defaultDate = inst.get('defaultDate');
			if (inst.options.selectDefaultDate && defaultDate && inst.selectedDates.length === 0) {
				this.setDate(elem[0], plugin.newDate(defaultDate || plugin.today()));
			}
		},

		/** Apply the maximum length for the date format.
  	@private
  	@param {jQuery} elem The control to affect.
  	@param {object} inst The current instance settings. */
		_autoSize: function _autoSize(elem, inst) {
			if (inst.options.autoSize && !inst.inline) {
				var date = plugin.newDate(2009, 10, 20); // Ensure double digits
				var dateFormat = inst.options.dateFormat;
				if (dateFormat.match(/[DM]/)) {
					var findMax = function findMax(names) {
						var max = 0;
						var maxI = 0;
						for (var i = 0; i < names.length; i++) {
							if (names[i].length > max) {
								max = names[i].length;
								maxI = i;
							}
						}
						return maxI;
					};
					date.setMonth(findMax(inst.options[dateFormat.match(/MM/) ? // Longest month
					'monthNames' : 'monthNamesShort']));
					date.setDate(findMax(inst.options[dateFormat.match(/DD/) ? // Longest day
					'dayNames' : 'dayNamesShort']) + 20 - date.getDay());
				}
				inst.elem.attr('size', plugin.formatDate(dateFormat, date, inst.getConfig()).length);
			}
		},

		_preDestroy: function _preDestroy(elem, inst) {
			if (inst.trigger) {
				inst.trigger.remove();
			}
			elem.empty().off('.' + inst.name);
			if (inst.inline && $.fn.mousewheel) {
				elem.unmousewheel();
			}
			if (!inst.inline && inst.options.autoSize) {
				elem.removeAttr('size');
			}
		},

		/** Apply multiple event functions.
  	@param {function} fns The functions to apply.
  	@example onShow: $.datepick.multipleEvents(fn1, fn2, ...) */
		multipleEvents: function multipleEvents() {
			var funcs = arguments;
			return function () {
				for (var i = 0; i < funcs.length; i++) {
					funcs[i].apply(this, arguments);
				}
			};
		},

		/** Enable the control.
  	@param {Element} elem The control to affect.
  	@example $(selector).datepick('enable') */
		enable: function enable(elem) {
			elem = $(elem);
			if (!elem.hasClass(this._getMarker())) {
				return;
			}
			var inst = this._getInst(elem);
			if (inst.inline) {
				elem.children('.' + this._disableClass).remove().end().find('button,select').prop('disabled', false).end().find('a').attr('href', '#');
			} else {
				elem.prop('disabled', false);
				inst.trigger.filter('button.' + this._triggerClass).prop('disabled', false).end().filter('img.' + this._triggerClass).css({ opacity: '1.0', cursor: '' });
			}
			this._disabled = $.map(this._disabled, function (value) {
				return value === elem[0] ? null : value;
			}); // Delete entry
		},

		/** Disable the control.
  	@param {Element} elem The control to affect.
  	@example $(selector).datepick('disable') */
		disable: function disable(elem) {
			elem = $(elem);
			if (!elem.hasClass(this._getMarker())) {
				return;
			}
			var inst = this._getInst(elem);
			if (inst.inline) {
				var inline = elem.children(':last');
				var offset = inline.offset();
				var relOffset = { left: 0, top: 0 };
				inline.parents().each(function () {
					if ($(this).css('position') === 'relative') {
						relOffset = $(this).offset();
						return false;
					}
				});
				var zIndex = elem.css('zIndex');
				zIndex = (zIndex === 'auto' ? 0 : parseInt(zIndex, 10)) + 1;
				elem.prepend('<div class="' + this._disableClass + '" style="' + 'width: ' + inline.outerWidth() + 'px; height: ' + inline.outerHeight() + 'px; left: ' + (offset.left - relOffset.left) + 'px; top: ' + (offset.top - relOffset.top) + 'px; z-index: ' + zIndex + '"></div>').find('button,select').prop('disabled', true).end().find('a').removeAttr('href');
			} else {
				elem.prop('disabled', true);
				inst.trigger.filter('button.' + this._triggerClass).prop('disabled', true).end().filter('img.' + this._triggerClass).css({ opacity: '0.5', cursor: 'default' });
			}
			this._disabled = $.map(this._disabled, function (value) {
				return value === elem[0] ? null : value;
			}); // Delete entry
			this._disabled.push(elem[0]);
		},

		/** Is the first field in a jQuery collection disabled as a datepicker?
  	@param {Element} elem The control to examine.
  	@return {boolean} <code>true</code> if disabled, <code>false</code> if enabled.
  	@example if ($(selector).datepick('isDisabled')) {...} */
		isDisabled: function isDisabled(elem) {
			return elem && $.inArray(elem, this._disabled) > -1;
		},

		/** Show a popup datepicker.
  	@param {Element|Event} elem The control to use or a focus event (internal).
  	@example $(selector).datepick('show') */
		show: function show(elem) {
			elem = $(elem.target || elem);
			var inst = plugin._getInst(elem);
			if (plugin.curInst === inst) {
				return;
			}
			if (plugin.curInst) {
				plugin.hide(plugin.curInst, true);
			}
			if (!$.isEmptyObject(inst)) {
				// Retrieve existing date(s)
				inst.lastVal = null;
				inst.selectedDates = plugin._extractDates(inst, elem.val());
				inst.pickingRange = false;
				inst.drawDate = plugin._checkMinMax(plugin.newDate(inst.selectedDates[0] || inst.get('defaultDate') || plugin.today()), inst);
				inst.prevDate = plugin.newDate(inst.drawDate);
				plugin.curInst = inst;
				// Generate content
				plugin._update(elem[0], true);
				// Adjust position before showing
				var offset = plugin._checkOffset(inst);
				inst.div.css({ left: offset.left, top: offset.top });
				// And display
				var showAnim = inst.options.showAnim;
				var showSpeed = inst.options.showSpeed;
				showSpeed = showSpeed === 'normal' && $.ui && parseInt($.ui.version.substring(2)) >= 8 ? '_default' : showSpeed;
				if ($.effects && ($.effects[showAnim] || $.effects.effect && $.effects.effect[showAnim])) {
					var data = inst.div.data(); // Update old effects data
					for (var key in data) {
						if (key.match(/^ec\.storage\./)) {
							data[key] = inst._mainDiv.css(key.replace(/ec\.storage\./, ''));
						}
					}
					inst.div.data(data).show(showAnim, inst.options.showOptions, showSpeed);
				} else {
					inst.div[showAnim || 'show'](showAnim ? showSpeed : 0);
				}
			}
		},

		/** Extract possible dates from a string.
  	@private
  	@param {object} inst The current instance settings.
  	@param {string} text The text to extract from.
  	@return {Date[]} The extracted dates. */
		_extractDates: function _extractDates(inst, datesText) {
			if (datesText === inst.lastVal) {
				return;
			}
			inst.lastVal = datesText;
			datesText = datesText.split(inst.options.multiSelect ? inst.options.multiSeparator : inst.options.rangeSelect ? inst.options.rangeSeparator : '\x00');
			var dates = [];
			for (var i = 0; i < datesText.length; i++) {
				try {
					var date = plugin.parseDate(inst.options.dateFormat, datesText[i], inst.getConfig());
					if (date) {
						var found = false;
						for (var j = 0; j < dates.length; j++) {
							if (dates[j].getTime() === date.getTime()) {
								found = true;
								break;
							}
						}
						if (!found) {
							dates.push(date);
						}
					}
				} catch (e) {
					// Ignore
				}
			}
			dates.splice(inst.options.multiSelect || (inst.options.rangeSelect ? 2 : 1), dates.length);
			if (inst.options.rangeSelect && dates.length === 1) {
				dates[1] = dates[0];
			}
			return dates;
		},

		/** Update the datepicker display.
  	@private
  	@param {Event|Element} elem A focus event or the control to use.
  	@param {boolean} hidden <code>true</code> to initially hide the datepicker. */
		_update: function _update(elem, hidden) {
			elem = $(elem.target || elem);
			var inst = plugin._getInst(elem);
			if (!$.isEmptyObject(inst)) {
				if (inst.inline || plugin.curInst === inst) {
					if ($.isFunction(inst.options.onChangeMonthYear) && (!inst.prevDate || inst.prevDate.getFullYear() !== inst.drawDate.getFullYear() || inst.prevDate.getMonth() !== inst.drawDate.getMonth())) {
						inst.options.onChangeMonthYear.apply(elem[0], [inst.drawDate.getFullYear(), inst.drawDate.getMonth() + 1]);
					}
				}
				if (inst.inline) {
					var index = $('a, :input', elem).index($(':focus', elem));
					elem.html(this._generateContent(elem[0], inst));
					var focus = elem.find('a, :input');
					focus.eq(Math.max(Math.min(index, focus.length - 1), 0)).focus();
				} else if (plugin.curInst === inst) {
					if (!inst.div) {
						inst.div = $('<div></div>').addClass(this._popupClass).css({ display: hidden ? 'none' : 'static', position: 'absolute',
							left: elem.offset().left, top: elem.offset().top + elem.outerHeight() }).appendTo($(inst.options.popupContainer || 'body'));
						if ($.fn.mousewheel) {
							inst.div.mousewheel(this._doMouseWheel);
						}
					}
					inst.div.html(this._generateContent(elem[0], inst));
					elem.focus();
				}
			}
		},

		/** Update the input field and any alternate field with the current dates.
  	@private
  	@param {Element} elem The control to use.
  	@param {boolean} keyUp <code>true</code> if coming from <code>keyUp</code> processing (internal). */
		_updateInput: function _updateInput(elem, keyUp) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst)) {
				var value = '';
				var altValue = '';
				var sep = inst.options.multiSelect ? inst.options.multiSeparator : inst.options.rangeSeparator;
				var altFormat = inst.options.altFormat || inst.options.dateFormat;
				for (var i = 0; i < inst.selectedDates.length; i++) {
					value += keyUp ? '' : (i > 0 ? sep : '') + plugin.formatDate(inst.options.dateFormat, inst.selectedDates[i], inst.getConfig());
					altValue += (i > 0 ? sep : '') + plugin.formatDate(altFormat, inst.selectedDates[i], inst.getConfig());
				}
				if (!inst.inline && !keyUp) {
					$(elem).val(value);
				}
				$(inst.options.altField).val(altValue);
				if ($.isFunction(inst.options.onSelect) && !keyUp && !inst.inSelect) {
					inst.inSelect = true; // Prevent endless loops
					inst.options.onSelect.apply(elem, [inst.selectedDates]);
					inst.inSelect = false;
				}
			}
		},

		/** Retrieve the size of left and top borders for an element.
  	@private
  	@param {jQuery} elem The element of interest.
  	@return {number[]} The left and top borders. */
		_getBorders: function _getBorders(elem) {
			var convert = function convert(value) {
				return { thin: 1, medium: 3, thick: 5 }[value] || value;
			};
			return [parseFloat(convert(elem.css('border-left-width'))), parseFloat(convert(elem.css('border-top-width')))];
		},

		/** Check positioning to remain on the screen.
  	@private
  	@param {object} inst The current instance settings.
  	@return {object} The updated offset for the datepicker. */
		_checkOffset: function _checkOffset(inst) {
			var base = inst.elem.is(':hidden') && inst.trigger ? inst.trigger : inst.elem;
			var offset = base.offset();
			var browserWidth = $(window).width();
			var browserHeight = $(window).height();
			if (browserWidth === 0) {
				return offset;
			}
			var isFixed = false;
			$(inst.elem).parents().each(function () {
				isFixed = isFixed || $(this).css('position') === 'fixed';
				return !isFixed;
			});
			var scrollX = document.documentElement.scrollLeft || document.body.scrollLeft;
			var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
			var above = offset.top - (isFixed ? scrollY : 0) - inst.div.outerHeight();
			var below = offset.top - (isFixed ? scrollY : 0) + base.outerHeight();
			var alignL = offset.left - (isFixed ? scrollX : 0);
			var alignR = offset.left - (isFixed ? scrollX : 0) + base.outerWidth() - inst.div.outerWidth();
			var tooWide = offset.left - scrollX + inst.div.outerWidth() > browserWidth;
			var tooHigh = offset.top - scrollY + inst.elem.outerHeight() + inst.div.outerHeight() > browserHeight;
			inst.div.css('position', isFixed ? 'fixed' : 'absolute');
			var alignment = inst.options.alignment;
			if (alignment === 'topLeft') {
				offset = { left: alignL, top: above };
			} else if (alignment === 'topRight') {
				offset = { left: alignR, top: above };
			} else if (alignment === 'bottomLeft') {
				offset = { left: alignL, top: below };
			} else if (alignment === 'bottomRight') {
				offset = { left: alignR, top: below };
			} else if (alignment === 'top') {
				offset = { left: inst.options.isRTL || tooWide ? alignR : alignL, top: above };
			} else {
				// bottom
				offset = { left: inst.options.isRTL || tooWide ? alignR : alignL,
					top: tooHigh ? above : below };
			}
			offset.left = Math.max(isFixed ? 0 : scrollX, offset.left);
			offset.top = Math.max(isFixed ? 0 : scrollY, offset.top);
			return offset;
		},

		/** Close date picker if clicked elsewhere.
  	@private
  	@param {MouseEvent} event The mouse click to check. */
		_checkExternalClick: function _checkExternalClick(event) {
			if (!plugin.curInst) {
				return;
			}
			var elem = $(event.target);
			if (elem.closest('.' + plugin._popupClass + ',.' + plugin._triggerClass).length === 0 && !elem.hasClass(plugin._getMarker())) {
				plugin.hide(plugin.curInst);
			}
		},

		/** Hide a popup datepicker.
  	@param {Element|object} elem The control to use or the current instance settings.
  	@param {boolean} [immediate=false] <code>true</code> to close immediately without animation (internal).
  	@example $(selector).datepick('hide') */
		hide: function hide(elem, immediate) {
			if (!elem) {
				return;
			}
			var inst = this._getInst(elem);
			if ($.isEmptyObject(inst)) {
				inst = elem;
			}
			if (inst && inst === plugin.curInst) {
				var showAnim = immediate ? '' : inst.options.showAnim;
				var showSpeed = inst.options.showSpeed;
				showSpeed = showSpeed === 'normal' && $.ui && parseInt($.ui.version.substring(2)) >= 8 ? '_default' : showSpeed;
				var postProcess = function postProcess() {
					if (!inst.div) {
						return;
					}
					inst.div.remove();
					inst.div = null;
					plugin.curInst = null;
					if ($.isFunction(inst.options.onClose)) {
						inst.options.onClose.apply(elem, [inst.selectedDates]);
					}
				};
				inst.div.stop();
				if ($.effects && ($.effects[showAnim] || $.effects.effect && $.effects.effect[showAnim])) {
					inst.div.hide(showAnim, inst.options.showOptions, showSpeed, postProcess);
				} else {
					var hideAnim = showAnim === 'slideDown' ? 'slideUp' : showAnim === 'fadeIn' ? 'fadeOut' : 'hide';
					inst.div[hideAnim](showAnim ? showSpeed : '', postProcess);
				}
				if (!showAnim) {
					postProcess();
				}
			}
		},

		/** Handle keystrokes in the datepicker.
  	@private
  	@param {KeyEvent} event The keystroke.
  	@return {boolean} <code>true</code> if not handled, <code>false</code> if handled. */
		_keyDown: function _keyDown(event) {
			var elem = event.data && event.data.elem || event.target;
			var inst = plugin._getInst(elem);
			var handled = false;
			var command = null;
			if (inst.inline || inst.div) {
				if (event.keyCode === 9) {
					// Tab - close
					plugin.hide(elem);
				} else if (event.keyCode === 13) {
					// Enter - select
					plugin.selectDate(elem, $('a.' + inst.options.renderer.highlightedClass, inst.div)[0]);
					handled = true;
				} else {
					// Command keystrokes
					for (var key in inst.options.commands) {
						if (inst.options.commands.hasOwnProperty(key)) {
							command = inst.options.commands[key];
							/* jshint -W018 */ // Dislikes !!
							if (command.keystroke.keyCode === event.keyCode && !!command.keystroke.ctrlKey === !!(event.ctrlKey || event.metaKey) && !!command.keystroke.altKey === event.altKey && !!command.keystroke.shiftKey === event.shiftKey) {
								/* jshint +W018 */
								plugin.performAction(elem, key);
								handled = true;
								break;
							}
						}
					}
				}
			} else {
				// Show on 'current' keystroke
				command = inst.options.commands.current;
				/* jshint -W018 */ // Dislikes !!
				if (command.keystroke.keyCode === event.keyCode && !!command.keystroke.ctrlKey === !!(event.ctrlKey || event.metaKey) && !!command.keystroke.altKey === event.altKey && !!command.keystroke.shiftKey === event.shiftKey) {
					/* jshint +W018 */
					plugin.show(elem);
					handled = true;
				}
			}
			inst.ctrlKey = event.keyCode < 48 && event.keyCode !== 32 || event.ctrlKey || event.metaKey;
			if (handled) {
				event.preventDefault();
				event.stopPropagation();
			}
			return !handled;
		},

		/** Filter keystrokes in the datepicker.
  	@private
  	@param {KeyEvent} event The keystroke.
  	@return {boolean} <code>true</code> if allowed, <code>false</code> if not allowed. */
		_keyPress: function _keyPress(event) {
			var inst = plugin._getInst(event.data && event.data.elem || event.target);
			if (!$.isEmptyObject(inst) && inst.options.constrainInput) {
				var ch = String.fromCharCode(event.keyCode || event.charCode);
				var allowedChars = plugin._allowedChars(inst);
				return event.metaKey || inst.ctrlKey || ch < ' ' || !allowedChars || allowedChars.indexOf(ch) > -1;
			}
			return true;
		},

		/** Determine the set of characters allowed by the date format.
  	@private
  	@param {object} inst The current instance settings.
  	@return {string} The set of allowed characters, or <code>null</code> if anything allowed. */
		_allowedChars: function _allowedChars(inst) {
			var allowedChars = inst.options.multiSelect ? inst.options.multiSeparator : inst.options.rangeSelect ? inst.options.rangeSeparator : '';
			var literal = false;
			var hasNum = false;
			var dateFormat = inst.options.dateFormat;
			for (var i = 0; i < dateFormat.length; i++) {
				var ch = dateFormat.charAt(i);
				if (literal) {
					if (ch === '\'' && dateFormat.charAt(i + 1) !== '\'') {
						literal = false;
					} else {
						allowedChars += ch;
					}
				} else {
					switch (ch) {
						case 'd':
						case 'm':
						case 'o':
						case 'w':
							allowedChars += hasNum ? '' : '0123456789';
							hasNum = true;
							break;
						case 'y':
						case '@':
						case '!':
							allowedChars += (hasNum ? '' : '0123456789') + '-';
							hasNum = true;
							break;
						case 'J':
							allowedChars += (hasNum ? '' : '0123456789') + '-.';
							hasNum = true;
							break;
						case 'D':
						case 'M':
						case 'Y':
							return null; // Accept anything
						case '\'':
							if (dateFormat.charAt(i + 1) === '\'') {
								allowedChars += '\'';
							} else {
								literal = true;
							}
							break;
						default:
							allowedChars += ch;
					}
				}
			}
			return allowedChars;
		},

		/** Synchronise datepicker with the field.
  	@private
  	@param {KeyEvent} event The keystroke.
  	@return {boolean} <code>true</code> if allowed, <code>false</code> if not allowed. */
		_keyUp: function _keyUp(event) {
			var elem = event.data && event.data.elem || event.target;
			var inst = plugin._getInst(elem);
			if (!$.isEmptyObject(inst) && !inst.ctrlKey && inst.lastVal !== inst.elem.val()) {
				try {
					var dates = plugin._extractDates(inst, inst.elem.val());
					if (dates.length > 0) {
						plugin.setDate(elem, dates, null, true);
					}
				} catch (e) {
					// Ignore
				}
			}
			return true;
		},

		/** Increment/decrement month/year on mouse wheel activity.
  	@private
  	@param {event} event The mouse wheel event.
  	@param {number} delta The amount of change. */
		_doMouseWheel: function _doMouseWheel(event, delta) {
			var elem = plugin.curInst && plugin.curInst.elem[0] || $(event.target).closest('.' + plugin._getMarker())[0];
			if (plugin.isDisabled(elem)) {
				return;
			}
			var inst = plugin._getInst(elem);
			if (inst.options.useMouseWheel) {
				delta = delta < 0 ? -1 : +1;
				plugin.changeMonth(elem, -inst.options[event.ctrlKey ? 'monthsToJump' : 'monthsToStep'] * delta);
			}
			event.preventDefault();
		},

		/** Clear an input and close a popup datepicker.
  	@param {Element} elem The control to use.
  	@example $(selector).datepick('clear') */
		clear: function clear(elem) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst)) {
				inst.selectedDates = [];
				this.hide(elem);
				var defaultDate = inst.get('defaultDate');
				if (inst.options.selectDefaultDate && defaultDate) {
					this.setDate(elem, plugin.newDate(defaultDate || plugin.today()));
				} else {
					this._updateInput(elem);
				}
			}
		},

		/** Retrieve the selected date(s) for a datepicker.
  	@param {Element} elem The control to examine.
  	@return {Date[]} The selected date(s).
  	@example var dates = $(selector).datepick('getDate') */
		getDate: function getDate(elem) {
			var inst = this._getInst(elem);
			return !$.isEmptyObject(inst) ? inst.selectedDates : [];
		},

		/** Set the selected date(s) for a datepicker.
  	@param {Element} elem The control to examine.
  	@param {Date|number|string|array} dates The selected date(s), as a <code>Date</code>,
  			or as a string in the current {@linkcode module:Datepick~regionalOptions|dateFormat}
  			or as a numeric offset - in days from today,
  			or as a string of amounts and periods, e.g. '+1m +2w',
  			using 'd' for days, 'w' for weeks, 'm' for months, and 'y' for years,
  			or as an array of these.
  	@param {Date|number|string} [endDate] The ending date for a range.
  	@param {boolean} [keyUp=false] <code>true</code> if coming from <code>keyUp</code> processing (internal).
  	@param {boolean} [setOpt=false] <code>true</code> if coming from option processing (internal).
  	@example $(selector).datepick('setDate', new Date(2014, 12-1, 25))
  $(selector).datepick('setDate', '12/25/2014', '01/01/2015')
  $(selector).datepick('setDate', [date1, date2, date3]) */
		setDate: function setDate(elem, dates, endDate, keyUp, setOpt) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst)) {
				if (!$.isArray(dates)) {
					dates = [dates];
					if (endDate) {
						dates.push(endDate);
					}
				}
				var minDate = inst.get('minDate');
				var maxDate = inst.get('maxDate');
				var curDate = inst.selectedDates[0];
				inst.selectedDates = [];
				for (var i = 0; i < dates.length; i++) {
					var date = plugin.determineDate(dates[i], null, curDate, inst.options.dateFormat, inst.getConfig());
					if (date) {
						if ((!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime())) {
							var found = false;
							for (var j = 0; j < inst.selectedDates.length; j++) {
								if (inst.selectedDates[j].getTime() === date.getTime()) {
									found = true;
									break;
								}
							}
							if (!found) {
								inst.selectedDates.push(date);
							}
						}
					}
				}
				inst.selectedDates.splice(inst.options.multiSelect || (inst.options.rangeSelect ? 2 : 1), inst.selectedDates.length);
				if (inst.options.rangeSelect) {
					switch (inst.selectedDates.length) {
						case 1:
							inst.selectedDates[1] = inst.selectedDates[0];
							break;
						case 2:
							inst.selectedDates[1] = inst.selectedDates[0].getTime() > inst.selectedDates[1].getTime() ? inst.selectedDates[0] : inst.selectedDates[1];
							break;
					}
					inst.pickingRange = false;
				}
				inst.prevDate = inst.drawDate ? plugin.newDate(inst.drawDate) : null;
				inst.drawDate = this._checkMinMax(plugin.newDate(inst.selectedDates[0] || inst.get('defaultDate') || plugin.today()), inst);
				if (!setOpt) {
					this._update(elem);
					this._updateInput(elem, keyUp);
				}
			}
		},

		/** Determine whether a date is selectable for this datepicker.
  	@private
  	@param {Element} elem The control to check.
  	@param {Date|string|number} date The date to check.
  	@return {boolean} <code>true</code> if selectable, <code>false</code> if not.
  	@example var selectable = $(selector).datepick('isSelectable', date) */
		isSelectable: function isSelectable(elem, date) {
			var inst = this._getInst(elem);
			if ($.isEmptyObject(inst)) {
				return false;
			}
			date = plugin.determineDate(date, inst.selectedDates[0] || this.today(), null, inst.options.dateFormat, inst.getConfig());
			return this._isSelectable(elem, date, inst.options.onDate, inst.get('minDate'), inst.get('maxDate'));
		},

		/** Internally determine whether a date is selectable for this datepicker.
  	@private
  	@param {Element} elem the control to check.
  	@param {Date} date The date to check.
  	@param {DatepickOnDate|boolean} onDate Any {@linkcode module:Datepick~defaultOptions|onDate} callback
  			or <code>callback.selectable</code>.
  	@param {Date} minDate The minimum allowed date.
  	@param {Date} maxDate The maximum allowed date.
  	@return {boolean} <code>true</code> if selectable, <code>false</code> if not. */
		_isSelectable: function _isSelectable(elem, date, onDate, minDate, maxDate) {
			var dateInfo = typeof onDate === 'boolean' ? { selectable: onDate } : !$.isFunction(onDate) ? {} : onDate.apply(elem, [date, true]);
			return dateInfo.selectable !== false && (!minDate || date.getTime() >= minDate.getTime()) && (!maxDate || date.getTime() <= maxDate.getTime());
		},

		/** Perform a {@linkcode module:Datepick~commands|named action} for a datepicker.
  	@param {element} elem The control to affect.
  	@param {string} action The name of the action.
  	@example $(selector).datepick('performAction', 'prev') */
		performAction: function performAction(elem, action) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst) && !this.isDisabled(elem)) {
				var commands = inst.options.commands;
				if (commands[action] && commands[action].enabled.apply(elem, [inst])) {
					commands[action].action.apply(elem, [inst]);
				}
			}
		},

		/** Set the currently shown month and day, defaulting to today.
  	@param {Element} elem The control to affect.
  	@param {number} [year] The year to show.
  	@param {number} [month] The month to show (1-12).
  	@param {number} [day] The day to show.
  	@example $(selector).datepick('showMonth', 2014, 12, 25) */
		showMonth: function showMonth(elem, year, month, day) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst) && (typeof day !== 'undefined' || inst.drawDate.getFullYear() !== year || inst.drawDate.getMonth() + 1 !== month)) {
				inst.prevDate = plugin.newDate(inst.drawDate);
				var show = this._checkMinMax(typeof year !== 'undefined' ? plugin.newDate(year, month, 1) : plugin.today(), inst);
				inst.drawDate = plugin.newDate(show.getFullYear(), show.getMonth() + 1, typeof day !== 'undefined' ? day : Math.min(inst.drawDate.getDate(), plugin.daysInMonth(show.getFullYear(), show.getMonth() + 1)));
				this._update(elem);
			}
		},

		/** Adjust the currently shown month.
  	@param {Element} elem The control to affect.
  	@param {number} offset The number of months to change by.
  	@example $(selector).datepick('changeMonth', 2)*/
		changeMonth: function changeMonth(elem, offset) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst)) {
				var date = plugin.add(plugin.newDate(inst.drawDate), offset, 'm');
				this.showMonth(elem, date.getFullYear(), date.getMonth() + 1);
			}
		},

		/** Adjust the currently shown day.
  	@param {Element} elem The control to affect.
  	@param {number} offset The number of days to change by.
  	@example $(selector).datepick('changeDay', 7)*/
		changeDay: function changeDay(elem, offset) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst)) {
				var date = plugin.add(plugin.newDate(inst.drawDate), offset, 'd');
				this.showMonth(elem, date.getFullYear(), date.getMonth() + 1, date.getDate());
			}
		},

		/** Restrict a date to the minimum/maximum specified.
  	@private
  	@param {Date} date The date to check.
  	@param {object} inst The current instance settings. */
		_checkMinMax: function _checkMinMax(date, inst) {
			var minDate = inst.get('minDate');
			var maxDate = inst.get('maxDate');
			date = minDate && date.getTime() < minDate.getTime() ? plugin.newDate(minDate) : date;
			date = maxDate && date.getTime() > maxDate.getTime() ? plugin.newDate(maxDate) : date;
			return date;
		},

		/** Retrieve the date associated with an entry in the datepicker.
  	@param {Element} elem The control to examine.
  	@param {Element} target The selected datepicker element.
  	@return {Date} The corresponding date, or <code>null</code>.
  	@example var date = $(selector).datepick('retrieveDate', $('div.datepick-popup a:contains(10)')[0]) */
		retrieveDate: function retrieveDate(elem, target) {
			var inst = this._getInst(elem);
			return $.isEmptyObject(inst) ? null : this._normaliseDate(new Date(parseInt(target.className.replace(/^.*dp(-?\d+).*$/, '$1'), 10)));
		},

		/** Select a date for this datepicker.
  	@param {Element} elem The control to examine.
  	@param {Element} target The selected datepicker element.
  	@example $(selector).datepick('selectDate', $('div.datepick-popup a:contains(10)')[0]) */
		selectDate: function selectDate(elem, target) {
			var inst = this._getInst(elem);
			if (!$.isEmptyObject(inst) && !this.isDisabled(elem)) {
				var date = this.retrieveDate(elem, target);
				if (inst.options.multiSelect) {
					var found = false;
					for (var i = 0; i < inst.selectedDates.length; i++) {
						if (date.getTime() === inst.selectedDates[i].getTime()) {
							inst.selectedDates.splice(i, 1);
							found = true;
							break;
						}
					}
					if (!found && inst.selectedDates.length < inst.options.multiSelect) {
						inst.selectedDates.push(date);
					}
				} else if (inst.options.rangeSelect) {
					if (inst.pickingRange) {
						inst.selectedDates[1] = date;
					} else {
						inst.selectedDates = [date, date];
					}
					inst.pickingRange = !inst.pickingRange;
				} else {
					inst.selectedDates = [date];
				}
				inst.prevDate = inst.drawDate = plugin.newDate(date);
				this._updateInput(elem);
				if (inst.inline || inst.pickingRange || inst.selectedDates.length < (inst.options.multiSelect || (inst.options.rangeSelect ? 2 : 1))) {
					this._update(elem);
				} else {
					this.hide(elem);
				}
			}
		},

		/** Generate the datepicker content for this control.
  	@private
  	@param {Element} elem The control to affect.
  	@param {object} inst The current instance settings.
  	@return {jQuery} The datepicker content */
		_generateContent: function _generateContent(elem, inst) {
			var monthsToShow = inst.options.monthsToShow;
			monthsToShow = $.isArray(monthsToShow) ? monthsToShow : [1, monthsToShow];
			inst.drawDate = this._checkMinMax(inst.drawDate || inst.get('defaultDate') || plugin.today(), inst);
			var drawDate = plugin._applyMonthsOffset(plugin.newDate(inst.drawDate), inst);
			// Generate months
			var monthRows = '';
			for (var row = 0; row < monthsToShow[0]; row++) {
				var months = '';
				for (var col = 0; col < monthsToShow[1]; col++) {
					months += this._generateMonth(elem, inst, drawDate.getFullYear(), drawDate.getMonth() + 1, inst.options.renderer, row === 0 && col === 0);
					plugin.add(drawDate, 1, 'm');
				}
				monthRows += this._prepare(inst.options.renderer.monthRow, inst).replace(/\{months\}/, months);
			}
			var picker = this._prepare(inst.options.renderer.picker, inst).replace(/\{months\}/, monthRows).replace(/\{weekHeader\}/g, this._generateDayHeaders(inst, inst.options.renderer));
			// Add commands
			var addCommand = function addCommand(type, open, close, name, classes) {
				if (picker.indexOf('{' + type + ':' + name + '}') === -1) {
					return;
				}
				var command = inst.options.commands[name];
				var date = inst.options.commandsAsDateFormat ? command.date.apply(elem, [inst]) : null;
				picker = picker.replace(new RegExp('\\{' + type + ':' + name + '\\}', 'g'), '<' + open + (command.status ? ' title="' + inst.options[command.status] + '"' : '') + ' class="' + inst.options.renderer.commandClass + ' ' + inst.options.renderer.commandClass + '-' + name + ' ' + classes + (command.enabled(inst) ? '' : ' ' + inst.options.renderer.disabledClass) + '">' + (date ? plugin.formatDate(inst.options[command.text], date, inst.getConfig()) : inst.options[command.text]) + '</' + close + '>');
			};
			for (var key in inst.options.commands) {
				if (inst.options.commands.hasOwnProperty(key)) {
					addCommand('button', 'button type="button"', 'button', key, inst.options.renderer.commandButtonClass);
					addCommand('link', 'a href="javascript:void(0)"', 'a', key, inst.options.renderer.commandLinkClass);
				}
			}
			picker = $(picker);
			if (monthsToShow[1] > 1) {
				var count = 0;
				$(inst.options.renderer.monthSelector, picker).each(function () {
					var nth = ++count % monthsToShow[1];
					$(this).addClass(nth === 1 ? 'first' : nth === 0 ? 'last' : '');
				});
			}
			// Add datepicker behaviour
			var self = this;
			function removeHighlight() {
				/* jshint -W040 */
				(inst.inline ? $(this).closest('.' + self._getMarker()) : inst.div).find(inst.options.renderer.daySelector + ' a').removeClass(inst.options.renderer.highlightedClass);
				/* jshint +W040 */
			}
			picker.find(inst.options.renderer.daySelector + ' a').hover(function () {
				removeHighlight.apply(this);
				$(this).addClass(inst.options.renderer.highlightedClass);
			}, removeHighlight).click(function () {
				self.selectDate(elem, this);
			}).end().find('select.' + this._monthYearClass + ':not(.' + this._anyYearClass + ')').change(function () {
				var monthYear = $(this).val().split('/');
				self.showMonth(elem, parseInt(monthYear[1], 10), parseInt(monthYear[0], 10));
			}).end().find('select.' + this._anyYearClass).click(function () {
				$(this).css('visibility', 'hidden').next('input').css({ left: this.offsetLeft, top: this.offsetTop,
					width: this.offsetWidth, height: this.offsetHeight }).show().focus();
			}).end().find('input.' + self._monthYearClass).change(function () {
				try {
					var year = parseInt($(this).val(), 10);
					year = isNaN(year) ? inst.drawDate.getFullYear() : year;
					self.showMonth(elem, year, inst.drawDate.getMonth() + 1, inst.drawDate.getDate());
				} catch (e) {
					window.alert(e);
				}
			}).keydown(function (event) {
				if (event.keyCode === 13) {
					// Enter
					$(event.elem).change();
				} else if (event.keyCode === 27) {
					// Escape
					$(event.elem).hide().prev('select').css('visibility', 'visible');
					inst.elem.focus();
				}
			});
			// Add keyboard handling
			var data = { elem: inst.elem[0] };
			picker.keydown(data, this._keyDown).keypress(data, this._keyPress).keyup(data, this._keyUp);
			// Add command behaviour
			picker.find('.' + inst.options.renderer.commandClass).click(function () {
				if (!$(this).hasClass(inst.options.renderer.disabledClass)) {
					var action = this.className.replace(new RegExp('^.*' + inst.options.renderer.commandClass + '-([^ ]+).*$'), '$1');
					plugin.performAction(elem, action);
				}
			});
			// Add classes
			if (inst.options.isRTL) {
				picker.addClass(inst.options.renderer.rtlClass);
			}
			if (monthsToShow[0] * monthsToShow[1] > 1) {
				picker.addClass(inst.options.renderer.multiClass);
			}
			if (inst.options.pickerClass) {
				picker.addClass(inst.options.pickerClass);
			}
			// Resize
			$('body').append(picker);
			var width = 0;
			picker.find(inst.options.renderer.monthSelector).each(function () {
				width += $(this).outerWidth();
			});
			picker.width(width / monthsToShow[0]);
			// Pre-show customisation
			if ($.isFunction(inst.options.onShow)) {
				inst.options.onShow.apply(elem, [picker, inst]);
			}
			return picker;
		},

		/** Generate the content for a single month.
  	@private
  	@param {Element} elem The control to affect.
  	@param {object} inst The current instance settings.
  	@param {number} year The year to generate.
  	@param {number} month The month to generate.
  	@param {object} renderer The rendering templates.
  	@param {boolean} first <code>true</code> if first of multiple months.
  	@return {string} The month content. */
		_generateMonth: function _generateMonth(elem, inst, year, month, renderer, first) {
			var daysInMonth = plugin.daysInMonth(year, month);
			var monthsToShow = inst.options.monthsToShow;
			monthsToShow = $.isArray(monthsToShow) ? monthsToShow : [1, monthsToShow];
			var fixedWeeks = inst.options.fixedWeeks || monthsToShow[0] * monthsToShow[1] > 1;
			var firstDay = inst.options.firstDay;
			var leadDays = (plugin.newDate(year, month, 1).getDay() - firstDay + 7) % 7;
			var numWeeks = fixedWeeks ? 6 : Math.ceil((leadDays + daysInMonth) / 7);
			var selectOtherMonths = inst.options.selectOtherMonths && inst.options.showOtherMonths;
			var minDate = inst.pickingRange ? inst.selectedDates[0] : inst.get('minDate');
			var maxDate = inst.get('maxDate');
			var showWeeks = renderer.week.indexOf('{weekOfYear}') > -1;
			var today = plugin.today();
			var drawDate = plugin.newDate(year, month, 1);
			plugin.add(drawDate, -leadDays - (fixedWeeks && drawDate.getDay() === firstDay ? 7 : 0), 'd');
			var ts = drawDate.getTime();
			// Generate weeks
			var weeks = '';
			for (var week = 0; week < numWeeks; week++) {
				var weekOfYear = !showWeeks ? '' : '<span class="dp' + ts + '">' + ($.isFunction(inst.options.calculateWeek) ? inst.options.calculateWeek(drawDate) : 0) + '</span>';
				var days = '';
				for (var day = 0; day < 7; day++) {
					var selected = false;
					if (inst.options.rangeSelect && inst.selectedDates.length > 0) {
						selected = drawDate.getTime() >= inst.selectedDates[0] && drawDate.getTime() <= inst.selectedDates[1];
					} else {
						for (var i = 0; i < inst.selectedDates.length; i++) {
							if (inst.selectedDates[i].getTime() === drawDate.getTime()) {
								selected = true;
								break;
							}
						}
					}
					var dateInfo = !$.isFunction(inst.options.onDate) ? {} : inst.options.onDate.apply(elem, [drawDate, drawDate.getMonth() + 1 === month]);
					var selectable = (selectOtherMonths || drawDate.getMonth() + 1 === month) && this._isSelectable(elem, drawDate, dateInfo.selectable, minDate, maxDate);
					days += this._prepare(renderer.day, inst).replace(/\{day\}/g, (selectable ? '<a href="javascript:void(0)"' : '<span') + ' class="dp' + ts + ' ' + (dateInfo.dateClass || '') + (selected && (selectOtherMonths || drawDate.getMonth() + 1 === month) ? ' ' + renderer.selectedClass : '') + (selectable ? ' ' + renderer.defaultClass : '') + ((drawDate.getDay() || 7) < 6 ? '' : ' ' + renderer.weekendClass) + (drawDate.getMonth() + 1 === month ? '' : ' ' + renderer.otherMonthClass) + (drawDate.getTime() === today.getTime() && drawDate.getMonth() + 1 === month ? ' ' + renderer.todayClass : '') + (drawDate.getTime() === inst.drawDate.getTime() && drawDate.getMonth() + 1 === month ? ' ' + renderer.highlightedClass : '') + '"' + (dateInfo.title || inst.options.dayStatus && selectable ? ' title="' + (dateInfo.title || plugin.formatDate(inst.options.dayStatus, drawDate, inst.getConfig())) + '"' : '') + '>' + (inst.options.showOtherMonths || drawDate.getMonth() + 1 === month ? dateInfo.content || drawDate.getDate() : '&#160;') + (selectable ? '</a>' : '</span>'));
					plugin.add(drawDate, 1, 'd');
					ts = drawDate.getTime();
				}
				weeks += this._prepare(renderer.week, inst).replace(/\{days\}/g, days).replace(/\{weekOfYear\}/g, weekOfYear);
			}
			var monthHeader = this._prepare(renderer.month, inst).match(/\{monthHeader(:[^\}]+)?\}/);
			monthHeader = monthHeader[0].length <= 13 ? 'MM yyyy' : monthHeader[0].substring(13, monthHeader[0].length - 1);
			monthHeader = first ? this._generateMonthSelection(inst, year, month, minDate, maxDate, monthHeader, renderer) : plugin.formatDate(monthHeader, plugin.newDate(year, month, 1), inst.getConfig());
			var weekHeader = this._prepare(renderer.weekHeader, inst).replace(/\{days\}/g, this._generateDayHeaders(inst, renderer));
			return this._prepare(renderer.month, inst).replace(/\{monthHeader(:[^\}]+)?\}/g, monthHeader).replace(/\{weekHeader\}/g, weekHeader).replace(/\{weeks\}/g, weeks);
		},

		/** Generate the HTML for the day headers.
  	@private
  	@param {object} inst The current instance settings.
  	@param {object} renderer The rendering templates.
  	@return {string} A week's worth of day headers. */
		_generateDayHeaders: function _generateDayHeaders(inst, renderer) {
			var header = '';
			for (var day = 0; day < 7; day++) {
				var dow = (day + inst.options.firstDay) % 7;
				header += this._prepare(renderer.dayHeader, inst).replace(/\{day\}/g, '<span class="' + this._curDoWClass + dow + '" title="' + inst.options.dayNames[dow] + '">' + inst.options.dayNamesMin[dow] + '</span>');
			}
			return header;
		},

		/** Generate selection controls for month.
  	@private
  	@param {object} inst The current instance settings.
  	@param {number} year The year to generate.
  	@param {number} month The month to generate.
  	@param {Date} minDate The minimum date allowed.
  	@param {Date} maxDate The maximum date allowed.
  	@param {string} monthHeader The month/year format.
  	@return {string} The month selection content. */
		_generateMonthSelection: function _generateMonthSelection(inst, year, month, minDate, maxDate, monthHeader) {
			if (!inst.options.changeMonth) {
				return plugin.formatDate(monthHeader, plugin.newDate(year, month, 1), inst.getConfig());
			}
			// Months
			var monthNames = inst.options['monthNames' + (monthHeader.match(/mm/i) ? '' : 'Short')];
			var html = monthHeader.replace(/m+/i, '\\x2E').replace(/y+/i, '\\x2F');
			var selector = '<select class="' + this._monthYearClass + '" title="' + inst.options.monthStatus + '">';
			for (var m = 1; m <= 12; m++) {
				if ((!minDate || plugin.newDate(year, m, plugin.daysInMonth(year, m)).getTime() >= minDate.getTime()) && (!maxDate || plugin.newDate(year, m, 1).getTime() <= maxDate.getTime())) {
					selector += '<option value="' + m + '/' + year + '"' + (month === m ? ' selected="selected"' : '') + '>' + monthNames[m - 1] + '</option>';
				}
			}
			selector += '</select>';
			html = html.replace(/\\x2E/, selector);
			// Years
			var yearRange = inst.options.yearRange;
			if (yearRange === 'any') {
				selector = '<select class="' + this._monthYearClass + ' ' + this._anyYearClass + '" title="' + inst.options.yearStatus + '">' + '<option>' + year + '</option></select>' + '<input class="' + this._monthYearClass + ' ' + this._curMonthClass + month + '" value="' + year + '">';
			} else {
				yearRange = yearRange.split(':');
				var todayYear = plugin.today().getFullYear();
				var start = yearRange[0].match('c[+-].*') ? year + parseInt(yearRange[0].substring(1), 10) : (yearRange[0].match('[+-].*') ? todayYear : 0) + parseInt(yearRange[0], 10);
				var end = yearRange[1].match('c[+-].*') ? year + parseInt(yearRange[1].substring(1), 10) : (yearRange[1].match('[+-].*') ? todayYear : 0) + parseInt(yearRange[1], 10);
				selector = '<select class="' + this._monthYearClass + '" title="' + inst.options.yearStatus + '">';
				start = plugin.add(plugin.newDate(start + 1, 1, 1), -1, 'd');
				end = plugin.newDate(end, 1, 1);
				var addYear = function addYear(y, yDisplay) {
					if (y !== 0) {
						selector += '<option value="' + month + '/' + y + '"' + (year === y ? ' selected="selected"' : '') + '>' + (yDisplay || y) + '</option>';
					}
				};
				var earlierLater = null;
				var y = null;
				if (start.getTime() < end.getTime()) {
					start = (minDate && minDate.getTime() > start.getTime() ? minDate : start).getFullYear();
					end = (maxDate && maxDate.getTime() < end.getTime() ? maxDate : end).getFullYear();
					earlierLater = Math.floor((end - start) / 2);
					if (!minDate || minDate.getFullYear() < start) {
						addYear(start - earlierLater, inst.options.earlierText);
					}
					for (y = start; y <= end; y++) {
						addYear(y);
					}
					if (!maxDate || maxDate.getFullYear() > end) {
						addYear(end + earlierLater, inst.options.laterText);
					}
				} else {
					start = (maxDate && maxDate.getTime() < start.getTime() ? maxDate : start).getFullYear();
					end = (minDate && minDate.getTime() > end.getTime() ? minDate : end).getFullYear();
					earlierLater = Math.floor((start - end) / 2);
					if (!maxDate || maxDate.getFullYear() > start) {
						addYear(start + earlierLater, inst.options.earlierText);
					}
					for (y = start; y >= end; y--) {
						addYear(y);
					}
					if (!minDate || minDate.getFullYear() < end) {
						addYear(end - earlierLater, inst.options.laterText);
					}
				}
				selector += '</select>';
			}
			html = html.replace(/\\x2F/, selector);
			return html;
		},

		/** Prepare a render template for use.
  	Exclude popup/inline sections that are not applicable.
  	Localise text of the form: {l10n:name}.
  	@private
  	@param {string} text The text to localise.
  	@param {object} inst The current instance settings.
  	@return {string} The localised text. */
		_prepare: function _prepare(text, inst) {
			var replaceSection = function replaceSection(type, retain) {
				while (true) {
					var start = text.indexOf('{' + type + ':start}');
					if (start === -1) {
						return;
					}
					var end = text.substring(start).indexOf('{' + type + ':end}');
					if (end > -1) {
						text = text.substring(0, start) + (retain ? text.substr(start + type.length + 8, end - type.length - 8) : '') + text.substring(start + end + type.length + 6);
					}
				}
			};
			replaceSection('inline', inst.inline);
			replaceSection('popup', !inst.inline);
			var pattern = /\{l10n:([^\}]+)\}/;
			var matches = null;
			while (matches = pattern.exec(text)) {
				text = text.replace(matches[0], inst.options[matches[1]]);
			}
			return text;
		}
	});

	var plugin = $.datepick; // Singleton instance

	$(function () {
		$(document).on('mousedown.' + pluginName, plugin._checkExternalClick).on('resize.' + pluginName, function () {
			plugin.hide(plugin.curInst);
		});
	});
})(jQuery);

/*!
* inputmask.min.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.7-24
*/

!function (a) {
	"function" == typeof define && define.amd ? define(["./dependencyLibs/inputmask.dependencyLib", "./global/window", "./global/document"], a) : "object" == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ? module.exports = a(require("./dependencyLibs/inputmask.dependencyLib"), require("./global/window"), require("./global/document")) : window.Inputmask = a(window.dependencyLib || jQuery, window, document);
}(function (a, b, c, d) {
	function e(b, c, g) {
		if (!(this instanceof e)) return new e(b, c, g);this.el = d, this.events = {}, this.maskset = d, this.refreshValue = !1, !0 !== g && (a.isPlainObject(b) ? c = b : (c = c || {}, c.alias = b), this.opts = a.extend(!0, {}, this.defaults, c), this.noMasksCache = c && c.definitions !== d, this.userOptions = c || {}, this.isRTL = this.opts.numericInput, f(this.opts.alias, c, this.opts));
	}function f(b, c, g) {
		var h = e.prototype.aliases[b];return h ? (h.alias && f(h.alias, d, g), a.extend(!0, g, h), a.extend(!0, g, c), !0) : (null === g.mask && (g.mask = b), !1);
	}function g(b, c) {
		function f(b, f, g) {
			var h = !1;if (null !== b && "" !== b || (h = null !== g.regex, h ? (b = g.regex, b = b.replace(/^(\^)(.*)(\$)$/, "$2")) : b = "*{*}"), 1 === b.length && !1 === g.greedy && 0 !== g.repeat && (g.placeholder = ""), g.repeat > 0 || "*" === g.repeat || "+" === g.repeat) {
				var i = "*" === g.repeat ? 0 : "+" === g.repeat ? 1 : g.repeat;b = g.groupmarker.start + b + g.groupmarker.end + g.quantifiermarker.start + i + "," + g.repeat + g.quantifiermarker.end;
			}var j,
			    k = h ? "regex_" + g.regex : g.numericInput ? b.split("").reverse().join("") : b;return e.prototype.masksCache[k] === d || !0 === c ? (j = { mask: b, maskToken: e.prototype.analyseMask(b, h, g), validPositions: {}, _buffer: d, buffer: d, tests: {}, metadata: f, maskLength: d }, !0 !== c && (e.prototype.masksCache[k] = j, j = a.extend(!0, {}, e.prototype.masksCache[k]))) : j = a.extend(!0, {}, e.prototype.masksCache[k]), j;
		}if (a.isFunction(b.mask) && (b.mask = b.mask(b)), a.isArray(b.mask)) {
			if (b.mask.length > 1) {
				b.keepStatic = null === b.keepStatic || b.keepStatic;var g = b.groupmarker.start;return a.each(b.numericInput ? b.mask.reverse() : b.mask, function (c, e) {
					g.length > 1 && (g += b.groupmarker.end + b.alternatormarker + b.groupmarker.start), e.mask === d || a.isFunction(e.mask) ? g += e : g += e.mask;
				}), g += b.groupmarker.end, f(g, b.mask, b);
			}b.mask = b.mask.pop();
		}return b.mask && b.mask.mask !== d && !a.isFunction(b.mask.mask) ? f(b.mask.mask, b.mask, b) : f(b.mask, b.mask, b);
	}function h(f, g, i) {
		function n(a, b, c) {
			b = b || 0;var e,
			    f,
			    g,
			    h = [],
			    j = 0,
			    k = q();-1 === (U = X !== d ? X.maxLength : d) && (U = d);do {
				!0 === a && o().validPositions[j] ? (g = o().validPositions[j], f = g.match, e = g.locator.slice(), h.push(!0 === c ? g.input : !1 === c ? f.nativeDef : I(j, f))) : (g = t(j, e, j - 1), f = g.match, e = g.locator.slice(), (!1 === i.jitMasking || j < k || "number" == typeof i.jitMasking && isFinite(i.jitMasking) && i.jitMasking > j) && h.push(!1 === c ? f.nativeDef : I(j, f))), j++;
			} while ((U === d || j < U) && (null !== f.fn || "" !== f.def) || b > j);return "" === h[h.length - 1] && h.pop(), o().maskLength = j + 1, h;
		}function o() {
			return g;
		}function p(a) {
			var b = o();b.buffer = d, !0 !== a && (b.validPositions = {}, b.p = 0);
		}function q(a, b, c) {
			var e = -1,
			    f = -1,
			    g = c || o().validPositions;a === d && (a = -1);for (var h in g) {
				var i = parseInt(h);g[i] && (b || !0 !== g[i].generatedInput) && (i <= a && (e = i), i >= a && (f = i));
			}return -1 !== e && a - e > 1 || f < a ? e : f;
		}function r(b, c, e, f) {
			var g,
			    h = b,
			    j = a.extend(!0, {}, o().validPositions),
			    k = !1;for (o().p = b, g = c - 1; g >= h; g--) {
				o().validPositions[g] !== d && (!0 !== e && (!o().validPositions[g].match.optionality && function (a) {
					var b = o().validPositions[a];if (b !== d && null === b.match.fn) {
						var c = o().validPositions[a - 1],
						    e = o().validPositions[a + 1];return c !== d && e !== d;
					}return !1;
				}(g) || !1 === i.canClearPosition(o(), g, q(), f, i)) || delete o().validPositions[g]);
			}for (p(!0), g = h + 1; g <= q();) {
				for (; o().validPositions[h] !== d;) {
					h++;
				}if (g < h && (g = h + 1), o().validPositions[g] === d && D(g)) g++;else {
					var l = t(g);!1 === k && j[h] && j[h].match.def === l.match.def ? (o().validPositions[h] = a.extend(!0, {}, j[h]), o().validPositions[h].input = l.input, delete o().validPositions[g], g++) : v(h, l.match.def) ? !1 !== C(h, l.input || I(g), !0) && (delete o().validPositions[g], g++, k = !0) : D(g) || (g++, h--), h++;
				}
			}p(!0);
		}function s(a, b) {
			for (var c, e = a, f = q(), g = o().validPositions[f] || w(0)[0], h = g.alternation !== d ? g.locator[g.alternation].toString().split(",") : [], j = 0; j < e.length && (c = e[j], !(c.match && (i.greedy && !0 !== c.match.optionalQuantifier || (!1 === c.match.optionality || !1 === c.match.newBlockMarker) && !0 !== c.match.optionalQuantifier) && (g.alternation === d || g.alternation !== c.alternation || c.locator[g.alternation] !== d && B(c.locator[g.alternation].toString().split(","), h))) || !0 === b && (null !== c.match.fn || /[0-9a-bA-Z]/.test(c.match.def))); j++) {}return c;
		}function t(a, b, c) {
			return o().validPositions[a] || s(w(a, b ? b.slice() : b, c));
		}function u(a) {
			return o().validPositions[a] ? o().validPositions[a] : w(a)[0];
		}function v(a, b) {
			for (var c = !1, d = w(a), e = 0; e < d.length; e++) {
				if (d[e].match && d[e].match.def === b) {
					c = !0;break;
				}
			}return c;
		}function w(b, c, e) {
			function f(c, e, g, j) {
				function l(g, j, q) {
					function r(b, c) {
						var d = 0 === a.inArray(b, c.matches);return d || a.each(c.matches, function (a, e) {
							if (!0 === e.isQuantifier && (d = r(b, c.matches[a - 1]))) return !1;
						}), d;
					}function s(b, c, e) {
						var f, g;if (o().validPositions[b - 1] && e && o().tests[b]) for (var h = o().validPositions[b - 1].locator, i = o().tests[b][0].locator, j = 0; j < e; j++) {
							if (h[j] !== i[j]) return h.slice(e + 1);
						}return (o().tests[b] || o().validPositions[b]) && a.each(o().tests[b] || [o().validPositions[b]], function (a, b) {
							var h = e !== d ? e : b.alternation,
							    i = b.locator[h] !== d ? b.locator[h].toString().indexOf(c) : -1;(g === d || i < g) && -1 !== i && (f = b, g = i);
						}), f ? f.locator.slice((e !== d ? e : f.alternation) + 1) : e !== d ? s(b, c) : d;
					}if (k > 1e4) throw "Inputmask: There is probably an error in your mask definition or in the code. Create an issue on github with an example of the mask you are using. " + o().mask;if (k === b && g.matches === d) return m.push({ match: g, locator: j.reverse(), cd: p }), !0;if (g.matches !== d) {
						if (g.isGroup && q !== g) {
							if (g = l(c.matches[a.inArray(g, c.matches) + 1], j)) return !0;
						} else if (g.isOptional) {
							var t = g;if (g = f(g, e, j, q)) {
								if (h = m[m.length - 1].match, !r(h, t)) return !0;n = !0, k = b;
							}
						} else if (g.isAlternator) {
							var u,
							    v = g,
							    w = [],
							    x = m.slice(),
							    y = j.length,
							    z = e.length > 0 ? e.shift() : -1;if (-1 === z || "string" == typeof z) {
								var A,
								    B = k,
								    C = e.slice(),
								    D = [];if ("string" == typeof z) D = z.split(",");else for (A = 0; A < v.matches.length; A++) {
									D.push(A);
								}for (var E = 0; E < D.length; E++) {
									if (A = parseInt(D[E]), m = [], e = s(k, A, y) || C.slice(), !0 !== (g = l(v.matches[A] || c.matches[A], [A].concat(j), q) || g) && g !== d && D[D.length - 1] < v.matches.length) {
										var F = a.inArray(g, c.matches) + 1;c.matches.length > F && (g = l(c.matches[F], [F].concat(j.slice(1, j.length)), q)) && (D.push(F.toString()), a.each(m, function (a, b) {
											b.alternation = j.length - 1;
										}));
									}u = m.slice(), k = B, m = [];for (var G = 0; G < u.length; G++) {
										var H = u[G],
										    I = !1;H.alternation = H.alternation || y;for (var J = 0; J < w.length; J++) {
											var K = w[J];if ("string" != typeof z || -1 !== a.inArray(H.locator[H.alternation].toString(), D)) {
												if (function (a, b) {
													return a.match.nativeDef === b.match.nativeDef || a.match.def === b.match.nativeDef || a.match.nativeDef === b.match.def;
												}(H, K)) {
													I = !0, H.alternation == K.alternation && -1 === K.locator[K.alternation].toString().indexOf(H.locator[H.alternation]) && (K.locator[K.alternation] = K.locator[K.alternation] + "," + H.locator[H.alternation], K.alternation = H.alternation), H.match.nativeDef === K.match.def && (H.locator[H.alternation] = K.locator[K.alternation], w.splice(w.indexOf(K), 1, H));break;
												}if (H.match.def === K.match.def) {
													I = !1;break;
												}if (function (a, c) {
													return null === a.match.fn && null !== c.match.fn && c.match.fn.test(a.match.def, o(), b, !1, i, !1);
												}(H, K) || function (a, c) {
													return null !== a.match.fn && null !== c.match.fn && c.match.fn.test(a.match.def.replace(/[\[\]]/g, ""), o(), b, !1, i, !1);
												}(H, K)) {
													H.alternation == K.alternation && -1 === H.locator[H.alternation].toString().indexOf(K.locator[K.alternation].toString().split("")[0]) && (H.na = H.na || H.locator[H.alternation].toString(), -1 === H.na.indexOf(H.locator[H.alternation].toString().split("")[0]) && (H.na = H.na + "," + H.locator[K.alternation].toString().split("")[0]), I = !0, H.locator[H.alternation] = K.locator[K.alternation].toString().split("")[0] + "," + H.locator[H.alternation], w.splice(w.indexOf(K), 0, H));break;
												}
											}
										}I || w.push(H);
									}
								}"string" == typeof z && (w = a.map(w, function (b, c) {
									if (isFinite(c)) {
										var e = b.alternation,
										    f = b.locator[e].toString().split(",");b.locator[e] = d, b.alternation = d;for (var g = 0; g < f.length; g++) {
											-1 !== a.inArray(f[g], D) && (b.locator[e] !== d ? (b.locator[e] += ",", b.locator[e] += f[g]) : b.locator[e] = parseInt(f[g]), b.alternation = e);
										}if (b.locator[e] !== d) return b;
									}
								})), m = x.concat(w), k = b, n = m.length > 0, g = w.length > 0, e = C.slice();
							} else g = l(v.matches[z] || c.matches[z], [z].concat(j), q);if (g) return !0;
						} else if (g.isQuantifier && q !== c.matches[a.inArray(g, c.matches) - 1]) for (var L = g, M = e.length > 0 ? e.shift() : 0; M < (isNaN(L.quantifier.max) ? M + 1 : L.quantifier.max) && k <= b; M++) {
							var N = c.matches[a.inArray(L, c.matches) - 1];if (g = l(N, [M].concat(j), N)) {
								if (h = m[m.length - 1].match, h.optionalQuantifier = M > L.quantifier.min - 1, r(h, N)) {
									if (M > L.quantifier.min - 1) {
										n = !0, k = b;break;
									}return !0;
								}return !0;
							}
						} else if (g = f(g, e, j, q)) return !0;
					} else k++;
				}for (var q = e.length > 0 ? e.shift() : 0; q < c.matches.length; q++) {
					if (!0 !== c.matches[q].isQuantifier) {
						var r = l(c.matches[q], [q].concat(g), j);if (r && k === b) return r;if (k > b) break;
					}
				}
			}function g(a) {
				if (i.keepStatic && b > 0 && a.length > 1 + ("" === a[a.length - 1].match.def ? 1 : 0) && !0 !== a[0].match.optionality && !0 !== a[0].match.optionalQuantifier && null === a[0].match.fn && !/[0-9a-bA-Z]/.test(a[0].match.def)) {
					if (o().validPositions[b - 1] === d) return [s(a)];if (o().validPositions[b - 1].alternation === a[0].alternation) return [s(a)];if (o().validPositions[b - 1]) return [s(a)];
				}return a;
			}var h,
			    j = o().maskToken,
			    k = c ? e : 0,
			    l = c ? c.slice() : [0],
			    m = [],
			    n = !1,
			    p = c ? c.join("") : "";if (b > -1) {
				if (c === d) {
					for (var q, r = b - 1; (q = o().validPositions[r] || o().tests[r]) === d && r > -1;) {
						r--;
					}q !== d && r > -1 && (l = function (b) {
						var c = [];return a.isArray(b) || (b = [b]), b.length > 0 && (b[0].alternation === d ? (c = s(b.slice()).locator.slice(), 0 === c.length && (c = b[0].locator.slice())) : a.each(b, function (a, b) {
							if ("" !== b.def) if (0 === c.length) c = b.locator.slice();else for (var d = 0; d < c.length; d++) {
								b.locator[d] && -1 === c[d].toString().indexOf(b.locator[d]) && (c[d] += "," + b.locator[d]);
							}
						})), c;
					}(q), p = l.join(""), k = r);
				}if (o().tests[b] && o().tests[b][0].cd === p) return g(o().tests[b]);for (var t = l.shift(); t < j.length; t++) {
					if (f(j[t], l, [t]) && k === b || k > b) break;
				}
			}return (0 === m.length || n) && m.push({ match: { fn: null, cardinality: 0, optionality: !0, casing: null, def: "", placeholder: "" }, locator: [], cd: p }), c !== d && o().tests[b] ? g(a.extend(!0, [], m)) : (o().tests[b] = a.extend(!0, [], m), g(o().tests[b]));
		}function x() {
			return o()._buffer === d && (o()._buffer = n(!1, 1), o().buffer === d && (o().buffer = o()._buffer.slice())), o()._buffer;
		}function y(a) {
			return o().buffer !== d && !0 !== a || (o().buffer = n(!0, q(), !0)), o().buffer;
		}function z(a, b, c) {
			var e, f;if (!0 === a) p(), a = 0, b = c.length;else for (e = a; e < b; e++) {
				delete o().validPositions[e];
			}for (f = a, e = a; e < b; e++) {
				if (p(!0), c[e] !== i.skipOptionalPartCharacter) {
					var g = C(f, c[e], !0, !0);!1 !== g && (p(!0), f = g.caret !== d ? g.caret : g.pos + 1);
				}
			}
		}function A(b, c, d) {
			switch (i.casing || c.casing) {case "upper":
					b = b.toUpperCase();break;case "lower":
					b = b.toLowerCase();break;case "title":
					var f = o().validPositions[d - 1];b = 0 === d || f && f.input === String.fromCharCode(e.keyCode.SPACE) ? b.toUpperCase() : b.toLowerCase();break;default:
					if (a.isFunction(i.casing)) {
						var g = Array.prototype.slice.call(arguments);g.push(o().validPositions), b = i.casing.apply(this, g);
					}}return b;
		}function B(b, c, e) {
			for (var f, g = i.greedy ? c : c.slice(0, 1), h = !1, j = e !== d ? e.split(",") : [], k = 0; k < j.length; k++) {
				-1 !== (f = b.indexOf(j[k])) && b.splice(f, 1);
			}for (var l = 0; l < b.length; l++) {
				if (-1 !== a.inArray(b[l], g)) {
					h = !0;break;
				}
			}return h;
		}function C(b, c, f, g, h) {
			function j(a) {
				var b = Y ? a.begin - a.end > 1 || a.begin - a.end == 1 : a.end - a.begin > 1 || a.end - a.begin == 1;return b && 0 === a.begin && a.end === o().maskLength ? "full" : b;
			}function k(c, e, f) {
				var h = !1;return a.each(w(c), function (k, m) {
					for (var n = m.match, s = e ? 1 : 0, t = "", u = n.cardinality; u > s; u--) {
						t += G(c - (u - 1));
					}if (e && (t += e), y(!0), !1 !== (h = null != n.fn ? n.fn.test(t, o(), c, f, i, j(b)) : (e === n.def || e === i.skipOptionalPartCharacter) && "" !== n.def && { c: I(c, n, !0) || n.def, pos: c })) {
						var v = h.c !== d ? h.c : e;v = v === i.skipOptionalPartCharacter && null === n.fn ? I(c, n, !0) || n.def : v;var w = c,
						    x = y();if (h.remove !== d && (a.isArray(h.remove) || (h.remove = [h.remove]), a.each(h.remove.sort(function (a, b) {
							return b - a;
						}), function (a, b) {
							r(b, b + 1, !0);
						})), h.insert !== d && (a.isArray(h.insert) || (h.insert = [h.insert]), a.each(h.insert.sort(function (a, b) {
							return a - b;
						}), function (a, b) {
							C(b.pos, b.c, !0, g);
						})), h.refreshFromBuffer) {
							var B = h.refreshFromBuffer;if (z(!0 === B ? B : B.start, B.end, x), h.pos === d && h.c === d) return h.pos = q(), !1;if ((w = h.pos !== d ? h.pos : c) !== c) return h = a.extend(h, C(w, v, !0, g)), !1;
						} else if (!0 !== h && h.pos !== d && h.pos !== c && (w = h.pos, z(c, w, y().slice()), w !== c)) return h = a.extend(h, C(w, v, !0)), !1;return (!0 === h || h.pos !== d || h.c !== d) && (k > 0 && p(!0), l(w, a.extend({}, m, { input: A(v, n, w) }), g, j(b)) || (h = !1), !1);
					}
				}), h;
			}function l(b, c, e, f) {
				if (f || i.insertMode && o().validPositions[b] !== d && e === d) {
					var g,
					    h = a.extend(!0, {}, o().validPositions),
					    j = q(d, !0);for (g = b; g <= j; g++) {
						delete o().validPositions[g];
					}o().validPositions[b] = a.extend(!0, {}, c);var k,
					    l = !0,
					    n = o().validPositions,
					    r = !1,
					    s = o().maskLength;for (g = k = b; g <= j; g++) {
						var t = h[g];if (t !== d) for (var u = k; u < o().maskLength && (null === t.match.fn && n[g] && (!0 === n[g].match.optionalQuantifier || !0 === n[g].match.optionality) || null != t.match.fn);) {
							if (u++, !1 === r && h[u] && h[u].match.def === t.match.def) o().validPositions[u] = a.extend(!0, {}, h[u]), o().validPositions[u].input = t.input, m(u), k = u, l = !0;else if (v(u, t.match.def)) {
								var w = C(u, t.input, !0, !0);l = !1 !== w, k = w.caret || w.insert ? q() : u, r = !0;
							} else if (!(l = !0 === t.generatedInput) && u >= o().maskLength - 1) break;if (o().maskLength < s && (o().maskLength = s), l) break;
						}if (!l) break;
					}if (!l) return o().validPositions = a.extend(!0, {}, h), p(!0), !1;
				} else o().validPositions[b] = a.extend(!0, {}, c);return p(!0), !0;
			}function m(b) {
				for (var c = b - 1; c > -1 && !o().validPositions[c]; c--) {}var e, f;for (c++; c < b; c++) {
					o().validPositions[c] === d && (!1 === i.jitMasking || i.jitMasking > c) && (f = w(c, t(c - 1).locator, c - 1).slice(), "" === f[f.length - 1].match.def && f.pop(), (e = s(f)) && (e.match.def === i.radixPointDefinitionSymbol || !D(c, !0) || a.inArray(i.radixPoint, y()) < c && e.match.fn && e.match.fn.test(I(c), o(), c, !1, i)) && !1 !== (u = k(c, I(c, e.match, !0) || (null == e.match.fn ? e.match.def : "" !== I(c) ? I(c) : y()[c]), !0)) && (o().validPositions[u.pos || c].generatedInput = !0));
				}
			}f = !0 === f;var n = b;b.begin !== d && (n = Y && !j(b) ? b.end : b.begin);var u = !0,
			    x = a.extend(!0, {}, o().validPositions);if (a.isFunction(i.preValidation) && !f && !0 !== g && (u = i.preValidation(y(), n, c, j(b), i)), !0 === u) {
				if (m(n), j(b) && (P(d, e.keyCode.DELETE, b), n = o().p), n < o().maskLength && (U === d || n < U) && (u = k(n, c, f), (!f || !0 === g) && !1 === u)) {
					var F = o().validPositions[n];if (!F || null !== F.match.fn || F.match.def !== c && c !== i.skipOptionalPartCharacter) {
						if ((i.insertMode || o().validPositions[E(n)] === d) && !D(n, !0)) for (var H = n + 1, J = E(n); H <= J; H++) {
							if (!1 !== (u = k(H, c, f))) {
								!function (b, c) {
									var e = o().validPositions[c];if (e) for (var f = e.locator, g = f.length, h = b; h < c; h++) {
										if (o().validPositions[h] === d && !D(h, !0)) {
											var i = w(h).slice(),
											    j = s(i, !0),
											    m = -1;"" === i[i.length - 1].match.def && i.pop(), a.each(i, function (a, b) {
												for (var c = 0; c < g; c++) {
													if (b.locator[c] === d || !B(b.locator[c].toString().split(","), f[c].toString().split(","), b.na)) {
														var e = f[c],
														    h = j.locator[c],
														    i = b.locator[c];e - h > Math.abs(e - i) && (j = b);break;
													}m < c && (m = c, j = b);
												}
											}), j = a.extend({}, j, { input: I(h, j.match, !0) || j.match.def }), j.generatedInput = !0, l(h, j, !0), o().validPositions[c] = d, k(c, e.input, !0);
										}
									}
								}(n, u.pos !== d ? u.pos : H), n = H;break;
							}
						}
					} else u = { caret: E(n) };
				}!1 === u && i.keepStatic && !f && !0 !== h && (u = function (b, c, e) {
					var f,
					    h,
					    j,
					    k,
					    l,
					    m,
					    n,
					    r,
					    s = a.extend(!0, {}, o().validPositions),
					    t = !1,
					    u = q();for (k = o().validPositions[u]; u >= 0; u--) {
						if ((j = o().validPositions[u]) && j.alternation !== d) {
							if (f = u, h = o().validPositions[f].alternation, k.locator[j.alternation] !== j.locator[j.alternation]) break;k = j;
						}
					}if (h !== d) {
						r = parseInt(f);var v = k.locator[k.alternation || h] !== d ? k.locator[k.alternation || h] : n[0];v.length > 0 && (v = v.split(",")[0]);var x = o().validPositions[r],
						    y = o().validPositions[r - 1];a.each(w(r, y ? y.locator : d, r - 1), function (f, j) {
							n = j.locator[h] ? j.locator[h].toString().split(",") : [];for (var k = 0; k < n.length; k++) {
								var u = [],
								    w = 0,
								    y = 0,
								    z = !1;if (v < n[k] && (j.na === d || -1 === a.inArray(n[k], j.na.split(",")) || -1 === a.inArray(v.toString(), n))) {
									o().validPositions[r] = a.extend(!0, {}, j);var A = o().validPositions[r].locator;for (o().validPositions[r].locator[h] = parseInt(n[k]), null == j.match.fn ? (x.input !== j.match.def && (z = !0, !0 !== x.generatedInput && u.push(x.input)), y++, o().validPositions[r].generatedInput = !/[0-9a-bA-Z]/.test(j.match.def), o().validPositions[r].input = j.match.def) : o().validPositions[r].input = x.input, l = r + 1; l < q(d, !0) + 1; l++) {
										m = o().validPositions[l], m && !0 !== m.generatedInput && /[0-9a-bA-Z]/.test(m.input) ? u.push(m.input) : l < b && w++, delete o().validPositions[l];
									}for (z && u[0] === j.match.def && u.shift(), p(!0), t = !0; u.length > 0;) {
										var B = u.shift();if (B !== i.skipOptionalPartCharacter && !(t = C(q(d, !0) + 1, B, !1, g, !0))) break;
									}if (t) {
										o().validPositions[r].locator = A;var D = q(b) + 1;for (l = r + 1; l < q() + 1; l++) {
											((m = o().validPositions[l]) === d || null == m.match.fn) && l < b + (y - w) && y++;
										}b += y - w, t = C(b > D ? D : b, c, e, g, !0);
									}if (t) return !1;p(), o().validPositions = a.extend(!0, {}, s);
								}
							}
						});
					}return t;
				}(n, c, f)), !0 === u && (u = { pos: n });
			}if (a.isFunction(i.postValidation) && !1 !== u && !f && !0 !== g) {
				var K = i.postValidation(y(!0), u, i);if (K.refreshFromBuffer && K.buffer) {
					var L = K.refreshFromBuffer;z(!0 === L ? L : L.start, L.end, K.buffer);
				}u = !0 === K ? u : K;
			}return u && u.pos === d && (u.pos = n), !1 === u && (p(!0), o().validPositions = a.extend(!0, {}, x)), u;
		}function D(a, b) {
			var c = t(a).match;if ("" === c.def && (c = u(a).match), null != c.fn) return c.fn;if (!0 !== b && a > -1) {
				var d = w(a);return d.length > 1 + ("" === d[d.length - 1].match.def ? 1 : 0);
			}return !1;
		}function E(a, b) {
			var c = o().maskLength;if (a >= c) return c;var d = a;for (w(c + 1).length > 1 && (n(!0, c + 1, !0), c = o().maskLength); ++d < c && (!0 === b && (!0 !== u(d).match.newBlockMarker || !D(d)) || !0 !== b && !D(d));) {}return d;
		}function F(a, b) {
			var c,
			    d = a;if (d <= 0) return 0;for (; --d > 0 && (!0 === b && !0 !== u(d).match.newBlockMarker || !0 !== b && !D(d) && (c = w(d), c.length < 2 || 2 === c.length && "" === c[1].match.def));) {}return d;
		}function G(a) {
			return o().validPositions[a] === d ? I(a) : o().validPositions[a].input;
		}function H(b, c, e, f, g) {
			if (f && a.isFunction(i.onBeforeWrite)) {
				var h = i.onBeforeWrite(f, c, e, i);if (h) {
					if (h.refreshFromBuffer) {
						var j = h.refreshFromBuffer;z(!0 === j ? j : j.start, j.end, h.buffer || c), c = y(!0);
					}e !== d && (e = h.caret !== d ? h.caret : e);
				}
			}b !== d && (b.inputmask._valueSet(c.join("")), e === d || f !== d && "blur" === f.type ? R(b, c, e) : m && "input" === f.type ? setTimeout(function () {
				L(b, e);
			}, 0) : L(b, e), !0 === g && ($ = !0, a(b).trigger("input")));
		}function I(b, c, e) {
			if (c = c || u(b).match, c.placeholder !== d || !0 === e) return a.isFunction(c.placeholder) ? c.placeholder(i) : c.placeholder;if (null === c.fn) {
				if (b > -1 && o().validPositions[b] === d) {
					var f,
					    g = w(b),
					    h = [];if (g.length > 1 + ("" === g[g.length - 1].match.def ? 1 : 0)) for (var j = 0; j < g.length; j++) {
						if (!0 !== g[j].match.optionality && !0 !== g[j].match.optionalQuantifier && (null === g[j].match.fn || f === d || !1 !== g[j].match.fn.test(f.match.def, o(), b, !0, i)) && (h.push(g[j]), null === g[j].match.fn && (f = g[j]), h.length > 1 && /[0-9a-bA-Z]/.test(h[0].match.def))) return i.placeholder.charAt(b % i.placeholder.length);
					}
				}return c.def;
			}return i.placeholder.charAt(b % i.placeholder.length);
		}function J(b, f, g, h, j) {
			function k(a, b) {
				return -1 !== x().slice(a, E(a)).join("").indexOf(b) && !D(a) && u(a).match.nativeDef === b.charAt(b.length - 1);
			}var l = h.slice(),
			    m = "",
			    n = 0,
			    r = d;if (p(), o().p = E(-1), !g) if (!0 !== i.autoUnmask) {
				var s = x().slice(0, E(-1)).join(""),
				    v = l.join("").match(new RegExp("^" + e.escapeRegex(s), "g"));v && v.length > 0 && (l.splice(0, v.length * s.length), n = E(n));
			} else n = E(n);if (a.each(l, function (c, e) {
				if (e !== d) {
					var f = new a.Event("_checkval");f.which = e.charCodeAt(0), m += e;var h = q(d, !0),
					    j = o().validPositions[h],
					    l = t(h + 1, j ? j.locator.slice() : d, h);if (!k(n, m) || g || i.autoUnmask) {
						var s = g ? c : null == l.match.fn && l.match.optionality && h + 1 < o().p ? h + 1 : o().p;r = ca.keypressEvent.call(b, f, !0, !1, g, s), n = s + 1, m = "";
					} else r = ca.keypressEvent.call(b, f, !0, !1, !0, h + 1);if (!1 !== r && !g && a.isFunction(i.onBeforeWrite)) {
						var u = r.forwardPosition;if (r = i.onBeforeWrite(f, y(), r.forwardPosition, i), r.forwardPosition = u, r && r.refreshFromBuffer) {
							var v = r.refreshFromBuffer;z(!0 === v ? v : v.start, v.end, r.buffer), p(!0), r.caret && (o().p = r.caret, r.forwardPosition = r.caret);
						}
					}
				}
			}), f) {
				var w = d;c.activeElement === b && r && (w = i.numericInput ? F(r.forwardPosition) : r.forwardPosition), H(b, y(), w, j || new a.Event("checkval"), j && "input" === j.type);
			}
		}function K(b) {
			if (b) {
				if (b.inputmask === d) return b.value;b.inputmask && b.inputmask.refreshValue && ca.setValueEvent.call(b);
			}var c = [],
			    e = o().validPositions;for (var f in e) {
				e[f].match && null != e[f].match.fn && c.push(e[f].input);
			}var g = 0 === c.length ? "" : (Y ? c.reverse() : c).join("");if (a.isFunction(i.onUnMask)) {
				var h = (Y ? y().slice().reverse() : y()).join("");g = i.onUnMask(h, g, i);
			}return g;
		}function L(a, e, f, g) {
			function h(a) {
				if (!0 !== g && Y && "number" == typeof a && (!i.greedy || "" !== i.placeholder)) {
					a = y().join("").length - a;
				}return a;
			}var k;if (e === d) return a.setSelectionRange ? (e = a.selectionStart, f = a.selectionEnd) : b.getSelection ? (k = b.getSelection().getRangeAt(0), k.commonAncestorContainer.parentNode !== a && k.commonAncestorContainer !== a || (e = k.startOffset, f = k.endOffset)) : c.selection && c.selection.createRange && (k = c.selection.createRange(), e = 0 - k.duplicate().moveStart("character", -a.inputmask._valueGet().length), f = e + k.text.length), { begin: h(e), end: h(f) };if (e.begin !== d && (f = e.end, e = e.begin), "number" == typeof e) {
				e = h(e), f = h(f), f = "number" == typeof f ? f : e;var l = parseInt(((a.ownerDocument.defaultView || b).getComputedStyle ? (a.ownerDocument.defaultView || b).getComputedStyle(a, null) : a.currentStyle).fontSize) * f;if (a.scrollLeft = l > a.scrollWidth ? l : 0, j || !1 !== i.insertMode || e !== f || f++, a.setSelectionRange) a.selectionStart = e, a.selectionEnd = f;else if (b.getSelection) {
					if (k = c.createRange(), a.firstChild === d || null === a.firstChild) {
						var m = c.createTextNode("");a.appendChild(m);
					}k.setStart(a.firstChild, e < a.inputmask._valueGet().length ? e : a.inputmask._valueGet().length), k.setEnd(a.firstChild, f < a.inputmask._valueGet().length ? f : a.inputmask._valueGet().length), k.collapse(!0);var n = b.getSelection();n.removeAllRanges(), n.addRange(k);
				} else a.createTextRange && (k = a.createTextRange(), k.collapse(!0), k.moveEnd("character", f), k.moveStart("character", e), k.select());R(a, d, { begin: e, end: f });
			}
		}function M(b) {
			var c,
			    e,
			    f = y(),
			    g = f.length,
			    h = q(),
			    i = {},
			    j = o().validPositions[h],
			    k = j !== d ? j.locator.slice() : d;for (c = h + 1; c < f.length; c++) {
				e = t(c, k, c - 1), k = e.locator.slice(), i[c] = a.extend(!0, {}, e);
			}var l = j && j.alternation !== d ? j.locator[j.alternation] : d;for (c = g - 1; c > h && (e = i[c], (e.match.optionality || e.match.optionalQuantifier && e.match.newBlockMarker || l && (l !== i[c].locator[j.alternation] && null != e.match.fn || null === e.match.fn && e.locator[j.alternation] && B(e.locator[j.alternation].toString().split(","), l.toString().split(",")) && "" !== w(c)[0].def)) && f[c] === I(c, e.match)); c--) {
				g--;
			}return b ? { l: g, def: i[g] ? i[g].match : d } : g;
		}function N(a) {
			for (var b, c = M(), e = a.length, f = o().validPositions[q()]; c < e && !D(c, !0) && (b = f !== d ? t(c, f.locator.slice(""), f) : u(c)) && !0 !== b.match.optionality && (!0 !== b.match.optionalQuantifier && !0 !== b.match.newBlockMarker || c + 1 === e && "" === (f !== d ? t(c + 1, f.locator.slice(""), f) : u(c + 1)).match.def);) {
				c++;
			}for (; (b = o().validPositions[c - 1]) && b && b.match.optionality && b.input === i.skipOptionalPartCharacter;) {
				c--;
			}return a.splice(c), a;
		}function O(b) {
			if (a.isFunction(i.isComplete)) return i.isComplete(b, i);if ("*" === i.repeat) return d;var c = !1,
			    e = M(!0),
			    f = F(e.l);if (e.def === d || e.def.newBlockMarker || e.def.optionality || e.def.optionalQuantifier) {
				c = !0;for (var g = 0; g <= f; g++) {
					var h = t(g).match;if (null !== h.fn && o().validPositions[g] === d && !0 !== h.optionality && !0 !== h.optionalQuantifier || null === h.fn && b[g] !== I(g, h)) {
						c = !1;break;
					}
				}
			}return c;
		}function P(b, c, f, g) {
			if ((i.numericInput || Y) && (c === e.keyCode.BACKSPACE ? c = e.keyCode.DELETE : c === e.keyCode.DELETE && (c = e.keyCode.BACKSPACE), Y)) {
				var h = f.end;f.end = f.begin, f.begin = h;
			}c === e.keyCode.BACKSPACE && (f.end - f.begin < 1 || !1 === i.insertMode) ? (f.begin = F(f.begin), o().validPositions[f.begin] !== d && o().validPositions[f.begin].input === i.groupSeparator && f.begin--) : c === e.keyCode.DELETE && f.begin === f.end && (f.end = D(f.end, !0) && o().validPositions[f.end] && o().validPositions[f.end].input !== i.radixPoint ? f.end + 1 : E(f.end) + 1, o().validPositions[f.begin] !== d && o().validPositions[f.begin].input === i.groupSeparator && f.end++), r(f.begin, f.end, !1, g), !0 !== g && function () {
				if (i.keepStatic) {
					for (var c = [], e = q(-1, !0), f = a.extend(!0, {}, o().validPositions), g = o().validPositions[e]; e >= 0; e--) {
						var h = o().validPositions[e];if (h) {
							if (!0 !== h.generatedInput && /[0-9a-bA-Z]/.test(h.input) && c.push(h.input), delete o().validPositions[e], h.alternation !== d && h.locator[h.alternation] !== g.locator[h.alternation]) break;g = h;
						}
					}if (e > -1) for (o().p = E(q(-1, !0)); c.length > 0;) {
						var j = new a.Event("keypress");j.which = c.pop().charCodeAt(0), ca.keypressEvent.call(b, j, !0, !1, !1, o().p);
					} else o().validPositions = a.extend(!0, {}, f);
				}
			}();var j = q(f.begin, !0);if (j < f.begin) o().p = E(j);else if (!0 !== g) for (o().p = f.begin; o().p < j && o().validPositions[o().p] === d;) {
				o().p++;
			}
		}function Q(d) {
			function e(a) {
				var b,
				    e = c.createElement("span");for (var f in h) {
					isNaN(f) && -1 !== f.indexOf("font") && (e.style[f] = h[f]);
				}e.style.textTransform = h.textTransform, e.style.letterSpacing = h.letterSpacing, e.style.position = "absolute", e.style.height = "auto", e.style.width = "auto", e.style.visibility = "hidden", e.style.whiteSpace = "nowrap", c.body.appendChild(e);var g,
				    i = d.inputmask._valueGet(),
				    j = 0;for (b = 0, g = i.length; b <= g; b++) {
					if (e.innerHTML += i.charAt(b) || "_", e.offsetWidth >= a) {
						var k = a - j,
						    l = e.offsetWidth - a;e.innerHTML = i.charAt(b), k -= e.offsetWidth / 3, b = k < l ? b - 1 : b;break;
					}j = e.offsetWidth;
				}return c.body.removeChild(e), b;
			}function f() {
				V.style.position = "absolute", V.style.top = g.top + "px", V.style.left = g.left + "px", V.style.width = parseInt(d.offsetWidth) - parseInt(h.paddingLeft) - parseInt(h.paddingRight) - parseInt(h.borderLeftWidth) - parseInt(h.borderRightWidth) + "px", V.style.height = parseInt(d.offsetHeight) - parseInt(h.paddingTop) - parseInt(h.paddingBottom) - parseInt(h.borderTopWidth) - parseInt(h.borderBottomWidth) + "px", V.style.lineHeight = V.style.height, V.style.zIndex = isNaN(h.zIndex) ? -1 : h.zIndex - 1, V.style.webkitAppearance = "textfield", V.style.mozAppearance = "textfield", V.style.Appearance = "textfield";
			}var g = a(d).position(),
			    h = (d.ownerDocument.defaultView || b).getComputedStyle(d, null);V = c.createElement("div"), c.body.appendChild(V);for (var j in h) {
				h.hasOwnProperty(j) && isNaN(j) && "cssText" !== j && -1 == j.indexOf("webkit") && (V.style[j] = h[j]);
			}d.style.backgroundColor = "transparent", d.style.color = "transparent", d.style.webkitAppearance = "caret", d.style.mozAppearance = "caret", d.style.Appearance = "caret", f(), a(b).on("resize", function (c) {
				g = a(d).position(), h = (d.ownerDocument.defaultView || b).getComputedStyle(d, null), f();
			}), a(d).on("click", function (a) {
				return L(d, e(a.clientX)), ca.clickEvent.call(this, [a]);
			}), a(d).on("keydown", function (a) {
				a.shiftKey || !1 === i.insertMode || setTimeout(function () {
					R(d);
				}, 0);
			});
		}function R(a, b, e) {
			function f() {
				h || null !== k.fn && l.input !== d ? h && null !== k.fn && l.input !== d && (h = !1, g += "</span>") : (h = !0, g += "<span class='im-static''>");
			}if (V !== d) {
				b = b || y(), e === d ? e = L(a) : e.begin === d && (e = { begin: e, end: e });var g = "",
				    h = !1;if ("" != b) {
					var j,
					    k,
					    l,
					    m = 0,
					    n = q();do {
						m === e.begin && c.activeElement === a && (g += "<span class='im-caret' style='border-right-width: 1px;border-right-style: solid;'></span>"), o().validPositions[m] ? (l = o().validPositions[m], k = l.match, j = l.locator.slice(), f(), g += l.input) : (l = t(m, j, m - 1), k = l.match, j = l.locator.slice(), (!1 === i.jitMasking || m < n || "number" == typeof i.jitMasking && isFinite(i.jitMasking) && i.jitMasking > m) && (f(), g += I(m, k))), m++;
					} while ((U === d || m < U) && (null !== k.fn || "" !== k.def) || n > m);
				}V.innerHTML = g;
			}
		}g = g || this.maskset, i = i || this.opts;var S,
		    T,
		    U,
		    V,
		    W,
		    X = this.el,
		    Y = this.isRTL,
		    Z = !1,
		    $ = !1,
		    _ = !1,
		    aa = !1,
		    ba = { on: function on(b, c, f) {
				var g = function g(b) {
					if (this.inputmask === d && "FORM" !== this.nodeName) {
						var c = a.data(this, "_inputmask_opts");c ? new e(c).mask(this) : ba.off(this);
					} else {
						if ("setvalue" === b.type || "FORM" === this.nodeName || !(this.disabled || this.readOnly && !("keydown" === b.type && b.ctrlKey && 67 === b.keyCode || !1 === i.tabThrough && b.keyCode === e.keyCode.TAB))) {
							switch (b.type) {case "input":
									if (!0 === $) return $ = !1, b.preventDefault();break;case "keydown":
									Z = !1, $ = !1;break;case "keypress":
									if (!0 === Z) return b.preventDefault();Z = !0;break;case "click":
									if (k || l) {
										var g = this,
										    h = arguments;return setTimeout(function () {
											f.apply(g, h);
										}, 0), !1;
									}}var j = f.apply(this, arguments);return !1 === j && (b.preventDefault(), b.stopPropagation()), j;
						}b.preventDefault();
					}
				};b.inputmask.events[c] = b.inputmask.events[c] || [], b.inputmask.events[c].push(g), -1 !== a.inArray(c, ["submit", "reset"]) ? null != b.form && a(b.form).on(c, g) : a(b).on(c, g);
			}, off: function off(b, c) {
				if (b.inputmask && b.inputmask.events) {
					var d;c ? (d = [], d[c] = b.inputmask.events[c]) : d = b.inputmask.events, a.each(d, function (c, d) {
						for (; d.length > 0;) {
							var e = d.pop();-1 !== a.inArray(c, ["submit", "reset"]) ? null != b.form && a(b.form).off(c, e) : a(b).off(c, e);
						}delete b.inputmask.events[c];
					});
				}
			} },
		    ca = { keydownEvent: function keydownEvent(b) {
				var d = this,
				    f = a(d),
				    g = b.keyCode,
				    h = L(d);if (g === e.keyCode.BACKSPACE || g === e.keyCode.DELETE || l && g === e.keyCode.BACKSPACE_SAFARI || b.ctrlKey && g === e.keyCode.X && !function (a) {
					var b = c.createElement("input"),
					    d = "on" + a,
					    e = d in b;return e || (b.setAttribute(d, "return;"), e = "function" == typeof b[d]), b = null, e;
				}("cut")) b.preventDefault(), P(d, g, h), H(d, y(!0), o().p, b, d.inputmask._valueGet() !== y().join("")), d.inputmask._valueGet() === x().join("") ? f.trigger("cleared") : !0 === O(y()) && f.trigger("complete");else if (g === e.keyCode.END || g === e.keyCode.PAGE_DOWN) {
					b.preventDefault();var j = E(q());i.insertMode || j !== o().maskLength || b.shiftKey || j--, L(d, b.shiftKey ? h.begin : j, j, !0);
				} else g === e.keyCode.HOME && !b.shiftKey || g === e.keyCode.PAGE_UP ? (b.preventDefault(), L(d, 0, b.shiftKey ? h.begin : 0, !0)) : (i.undoOnEscape && g === e.keyCode.ESCAPE || 90 === g && b.ctrlKey) && !0 !== b.altKey ? (J(d, !0, !1, S.split("")), f.trigger("click")) : g !== e.keyCode.INSERT || b.shiftKey || b.ctrlKey ? !0 === i.tabThrough && g === e.keyCode.TAB ? (!0 === b.shiftKey ? (null === u(h.begin).match.fn && (h.begin = E(h.begin)), h.end = F(h.begin, !0), h.begin = F(h.end, !0)) : (h.begin = E(h.begin, !0), h.end = E(h.begin, !0), h.end < o().maskLength && h.end--), h.begin < o().maskLength && (b.preventDefault(), L(d, h.begin, h.end))) : b.shiftKey || !1 === i.insertMode && (g === e.keyCode.RIGHT ? setTimeout(function () {
					var a = L(d);L(d, a.begin);
				}, 0) : g === e.keyCode.LEFT && setTimeout(function () {
					var a = L(d);L(d, Y ? a.begin + 1 : a.begin - 1);
				}, 0)) : (i.insertMode = !i.insertMode, L(d, i.insertMode || h.begin !== o().maskLength ? h.begin : h.begin - 1));i.onKeyDown.call(this, b, y(), L(d).begin, i), _ = -1 !== a.inArray(g, i.ignorables);
			}, keypressEvent: function keypressEvent(b, c, f, g, h) {
				var j = this,
				    k = a(j),
				    l = b.which || b.charCode || b.keyCode;if (!(!0 === c || b.ctrlKey && b.altKey) && (b.ctrlKey || b.metaKey || _)) return l === e.keyCode.ENTER && S !== y().join("") && (S = y().join(""), setTimeout(function () {
					k.trigger("change");
				}, 0)), !0;if (l) {
					46 === l && !1 === b.shiftKey && "" !== i.radixPoint && (l = i.radixPoint.charCodeAt(0));var m,
					    n = c ? { begin: h, end: h } : L(j),
					    q = String.fromCharCode(l);o().writeOutBuffer = !0;var r = C(n, q, g);if (!1 !== r && (p(!0), m = r.caret !== d ? r.caret : c ? r.pos + 1 : E(r.pos), o().p = m), !1 !== f && (setTimeout(function () {
						i.onKeyValidation.call(j, l, r, i);
					}, 0), o().writeOutBuffer && !1 !== r)) {
						var s = y();H(j, s, i.numericInput && r.caret === d ? F(m) : m, b, !0 !== c), !0 !== c && setTimeout(function () {
							!0 === O(s) && k.trigger("complete");
						}, 0);
					}if (b.preventDefault(), c) return !1 !== r && (r.forwardPosition = m), r;
				}
			}, pasteEvent: function pasteEvent(c) {
				var d,
				    e = this,
				    f = c.originalEvent || c,
				    g = a(e),
				    h = e.inputmask._valueGet(!0),
				    j = L(e);Y && (d = j.end, j.end = j.begin, j.begin = d);var k = h.substr(0, j.begin),
				    l = h.substr(j.end, h.length);if (k === (Y ? x().reverse() : x()).slice(0, j.begin).join("") && (k = ""), l === (Y ? x().reverse() : x()).slice(j.end).join("") && (l = ""), Y && (d = k, k = l, l = d), b.clipboardData && b.clipboardData.getData) h = k + b.clipboardData.getData("Text") + l;else {
					if (!f.clipboardData || !f.clipboardData.getData) return !0;h = k + f.clipboardData.getData("text/plain") + l;
				}var m = h;if (a.isFunction(i.onBeforePaste)) {
					if (!1 === (m = i.onBeforePaste(h, i))) return c.preventDefault();m || (m = h);
				}return J(e, !1, !1, Y ? m.split("").reverse() : m.toString().split("")), H(e, y(), E(q()), c, S !== y().join("")), !0 === O(y()) && g.trigger("complete"), c.preventDefault();
			}, inputFallBackEvent: function inputFallBackEvent(b) {
				var c = this,
				    d = c.inputmask._valueGet();if (y().join("") !== d) {
					var f = L(c);if ("." === d.charAt(f.begin - 1) && "" !== i.radixPoint && (d = d.split(""), d[f.begin - 1] = i.radixPoint.charAt(0), d = d.join("")), d.charAt(f.begin - 1) === i.radixPoint && d.length > y().length) {
						var g = new a.Event("keypress");return g.which = i.radixPoint.charCodeAt(0), ca.keypressEvent.call(c, g, !0, !0, !1, f.begin), !1;
					}if (d = d.replace(new RegExp("(" + e.escapeRegex(x().join("")) + ")*"), ""), k) {
						var h = d.replace(y().join(""), "");if (1 === h.length) {
							var g = new a.Event("keypress");return g.which = h.charCodeAt(0), ca.keypressEvent.call(c, g, !0, !0, !1, o().validPositions[f.begin - 1] ? f.begin : f.begin - 1), !1;
						}
					}if (f.begin > d.length && (L(c, d.length), f = L(c)), y().length - d.length != 1 || d.charAt(f.begin) === y()[f.begin] || d.charAt(f.begin + 1) === y()[f.begin] || D(f.begin)) {
						var j = [],
						    l = [],
						    p = y().join(""),
						    q = n(!0, 1).join("");for (j.push(d.substr(0, f.begin)), j.push(d.substr(f.begin)), l.push(p.substr(0, f.begin)), l.push(p.substr(f.begin)); null === d.match(e.escapeRegex(q) + "$");) {
							q = q.slice(1);
						}d = d.replace(q, ""), a.isFunction(i.onBeforeMask) && (d = i.onBeforeMask(d, i) || d), J(c, !0, !1, d.split(""), b);var r = L(c).begin,
						    s = c.inputmask._valueGet(),
						    t = s.indexOf(j[0]);if (0 === t && r !== j[0].length) L(c, j[0].length), m && setTimeout(function () {
							L(c, j[0].length);
						}, 0);else {
							for (; null === s.match(e.escapeRegex(j[1]) + "$");) {
								j[1] = j[1].substr(1);
							}var u = s.indexOf(j[1]);-1 !== u && "" !== j[1] && r > u && u > t && (L(c, u), m && setTimeout(function () {
								L(c, u);
							}, 0));
						}!0 === O(y()) && a(c).trigger("complete");
					} else b.keyCode = e.keyCode.BACKSPACE, ca.keydownEvent.call(c, b);b.preventDefault();
				}
			}, setValueEvent: function setValueEvent(b) {
				this.inputmask.refreshValue = !1;var c = this,
				    d = c.inputmask._valueGet(!0);a.isFunction(i.onBeforeMask) && (d = i.onBeforeMask(d, i) || d), d = d.split(""), J(c, !0, !1, Y ? d.reverse() : d), S = y().join(""), (i.clearMaskOnLostFocus || i.clearIncomplete) && c.inputmask._valueGet() === x().join("") && c.inputmask._valueSet("");
			}, focusEvent: function focusEvent(a) {
				var b = this,
				    c = b.inputmask._valueGet();i.showMaskOnFocus && (!i.showMaskOnHover || i.showMaskOnHover && "" === c) && (b.inputmask._valueGet() !== y().join("") ? H(b, y(), E(q())) : !1 === aa && L(b, E(q()))), !0 === i.positionCaretOnTab && !1 === aa && (H(b, y(), L(b)), ca.clickEvent.apply(b, [a, !0])), S = y().join("");
			}, mouseleaveEvent: function mouseleaveEvent(a) {
				var b = this;if (aa = !1, i.clearMaskOnLostFocus && c.activeElement !== b) {
					var d = y().slice(),
					    e = b.inputmask._valueGet();e !== b.getAttribute("placeholder") && "" !== e && (-1 === q() && e === x().join("") ? d = [] : N(d), H(b, d));
				}
			}, clickEvent: function clickEvent(b, e) {
				function f(b) {
					if ("" !== i.radixPoint) {
						var c = o().validPositions;if (c[b] === d || c[b].input === I(b)) {
							if (b < E(-1)) return !0;var e = a.inArray(i.radixPoint, y());if (-1 !== e) {
								for (var f in c) {
									if (e < f && c[f].input !== I(f)) return !1;
								}return !0;
							}
						}
					}return !1;
				}var g = this;setTimeout(function () {
					if (c.activeElement === g) {
						var a = L(g);if (e && (Y ? a.end = a.begin : a.begin = a.end), a.begin === a.end) switch (i.positionCaretOnClick) {case "none":
								break;case "radixFocus":
								if (f(a.begin)) {
									var b = y().join("").indexOf(i.radixPoint);L(g, i.numericInput ? E(b) : b);break;
								}default:
								var h = a.begin,
								    j = q(h, !0),
								    k = E(j);if (h < k) L(g, D(h) || D(h - 1) ? h : E(h));else {
									var l = I(k),
									    m = o().validPositions[j],
									    n = t(k, m ? m.match.locator : d, m);if ("" !== l && y()[k] !== l && !0 !== n.match.optionalQuantifier || !D(k) && n.match.def === l) {
										var p = E(k);h >= p && (k = p);
									}L(g, k);
								}}
					}
				}, 0);
			}, dblclickEvent: function dblclickEvent(a) {
				var b = this;setTimeout(function () {
					L(b, 0, E(q()));
				}, 0);
			}, cutEvent: function cutEvent(d) {
				var f = this,
				    g = a(f),
				    h = L(f),
				    i = d.originalEvent || d,
				    j = b.clipboardData || i.clipboardData,
				    k = Y ? y().slice(h.end, h.begin) : y().slice(h.begin, h.end);j.setData("text", Y ? k.reverse().join("") : k.join("")), c.execCommand && c.execCommand("copy"), P(f, e.keyCode.DELETE, h), H(f, y(), o().p, d, S !== y().join("")), f.inputmask._valueGet() === x().join("") && g.trigger("cleared");
			}, blurEvent: function blurEvent(b) {
				var c = a(this),
				    e = this;if (e.inputmask) {
					var f = e.inputmask._valueGet(),
					    g = y().slice();"" !== f && (i.clearMaskOnLostFocus && (-1 === q() && f === x().join("") ? g = [] : N(g)), !1 === O(g) && (setTimeout(function () {
						c.trigger("incomplete");
					}, 0), i.clearIncomplete && (p(), g = i.clearMaskOnLostFocus ? [] : x().slice())), H(e, g, d, b)), S !== y().join("") && (S = g.join(""), c.trigger("change"));
				}
			}, mouseenterEvent: function mouseenterEvent(a) {
				var b = this;aa = !0, c.activeElement !== b && i.showMaskOnHover && b.inputmask._valueGet() !== y().join("") && H(b, y());
			}, submitEvent: function submitEvent(a) {
				S !== y().join("") && T.trigger("change"), i.clearMaskOnLostFocus && -1 === q() && X.inputmask._valueGet && X.inputmask._valueGet() === x().join("") && X.inputmask._valueSet(""), i.removeMaskOnSubmit && (X.inputmask._valueSet(X.inputmask.unmaskedvalue(), !0), setTimeout(function () {
					H(X, y());
				}, 0));
			}, resetEvent: function resetEvent(a) {
				X.inputmask.refreshValue = !0, setTimeout(function () {
					T.trigger("setvalue");
				}, 0);
			} };if (f !== d) switch (f.action) {case "isComplete":
				return X = f.el, O(y());case "unmaskedvalue":
				return X !== d && f.value === d || (W = f.value, W = (a.isFunction(i.onBeforeMask) ? i.onBeforeMask(W, i) || W : W).split(""), J(d, !1, !1, Y ? W.reverse() : W), a.isFunction(i.onBeforeWrite) && i.onBeforeWrite(d, y(), 0, i)), K(X);case "mask":
				!function (b) {
					ba.off(b);var e = function (b, e) {
						var f = b.getAttribute("type"),
						    g = "INPUT" === b.tagName && -1 !== a.inArray(f, e.supportsInputType) || b.isContentEditable || "TEXTAREA" === b.tagName;if (!g) if ("INPUT" === b.tagName) {
							var h = c.createElement("input");h.setAttribute("type", f), g = "text" === h.type, h = null;
						} else g = "partial";return !1 !== g && function (b) {
							function f() {
								return this.inputmask ? this.inputmask.opts.autoUnmask ? this.inputmask.unmaskedvalue() : -1 !== q() || !0 !== e.nullable ? c.activeElement === this && e.clearMaskOnLostFocus ? (Y ? N(y().slice()).reverse() : N(y().slice())).join("") : h.call(this) : "" : h.call(this);
							}function g(b) {
								i.call(this, b), this.inputmask && a(this).trigger("setvalue");
							}var h, i;if (!b.inputmask.__valueGet) {
								if (!0 !== e.noValuePatching) {
									if (Object.getOwnPropertyDescriptor) {
										"function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = "object" == _typeof("test".__proto__) ? function (a) {
											return a.__proto__;
										} : function (a) {
											return a.constructor.prototype;
										});var j = Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(b), "value") : d;j && j.get && j.set ? (h = j.get, i = j.set, Object.defineProperty(b, "value", { get: f, set: g, configurable: !0 })) : "INPUT" !== b.tagName && (h = function h() {
											return this.textContent;
										}, i = function i(a) {
											this.textContent = a;
										}, Object.defineProperty(b, "value", { get: f, set: g, configurable: !0 }));
									} else c.__lookupGetter__ && b.__lookupGetter__("value") && (h = b.__lookupGetter__("value"), i = b.__lookupSetter__("value"), b.__defineGetter__("value", f), b.__defineSetter__("value", g));b.inputmask.__valueGet = h, b.inputmask.__valueSet = i;
								}b.inputmask._valueGet = function (a) {
									return Y && !0 !== a ? h.call(this.el).split("").reverse().join("") : h.call(this.el);
								}, b.inputmask._valueSet = function (a, b) {
									i.call(this.el, null === a || a === d ? "" : !0 !== b && Y ? a.split("").reverse().join("") : a);
								}, h === d && (h = function h() {
									return this.value;
								}, i = function i(a) {
									this.value = a;
								}, function (b) {
									if (a.valHooks && (a.valHooks[b] === d || !0 !== a.valHooks[b].inputmaskpatch)) {
										var c = a.valHooks[b] && a.valHooks[b].get ? a.valHooks[b].get : function (a) {
											return a.value;
										},
										    f = a.valHooks[b] && a.valHooks[b].set ? a.valHooks[b].set : function (a, b) {
											return a.value = b, a;
										};a.valHooks[b] = { get: function get(a) {
												if (a.inputmask) {
													if (a.inputmask.opts.autoUnmask) return a.inputmask.unmaskedvalue();var b = c(a);return -1 !== q(d, d, a.inputmask.maskset.validPositions) || !0 !== e.nullable ? b : "";
												}return c(a);
											}, set: function set(b, c) {
												var d,
												    e = a(b);return d = f(b, c), b.inputmask && e.trigger("setvalue"), d;
											}, inputmaskpatch: !0 };
									}
								}(b.type), function (b) {
									ba.on(b, "mouseenter", function (b) {
										var c = a(this);this.inputmask._valueGet() !== y().join("") && c.trigger("setvalue");
									});
								}(b));
							}
						}(b), g;
					}(b, i);if (!1 !== e && (X = b, T = a(X), !0 === i.colorMask && Q(X), m && (X.hasOwnProperty("inputmode") && (X.inputmode = i.inputmode, X.setAttribute("inputmode", i.inputmode)), "rtfm" === i.androidHack && (!0 !== i.colorMask && Q(X), X.type = "password")), !0 === e && (ba.on(X, "submit", ca.submitEvent), ba.on(X, "reset", ca.resetEvent), ba.on(X, "mouseenter", ca.mouseenterEvent), ba.on(X, "blur", ca.blurEvent), ba.on(X, "focus", ca.focusEvent), ba.on(X, "mouseleave", ca.mouseleaveEvent), !0 !== i.colorMask && ba.on(X, "click", ca.clickEvent), ba.on(X, "dblclick", ca.dblclickEvent), ba.on(X, "paste", ca.pasteEvent), ba.on(X, "dragdrop", ca.pasteEvent), ba.on(X, "drop", ca.pasteEvent), ba.on(X, "cut", ca.cutEvent), ba.on(X, "complete", i.oncomplete), ba.on(X, "incomplete", i.onincomplete), ba.on(X, "cleared", i.oncleared), m || !0 === i.inputEventOnly || (ba.on(X, "keydown", ca.keydownEvent), ba.on(X, "keypress", ca.keypressEvent)), ba.on(X, "compositionstart", a.noop), ba.on(X, "compositionupdate", a.noop), ba.on(X, "compositionend", a.noop), ba.on(X, "keyup", a.noop), ba.on(X, "input", ca.inputFallBackEvent), ba.on(X, "beforeinput", a.noop)), ba.on(X, "setvalue", ca.setValueEvent), S = x().join(""), "" !== X.inputmask._valueGet(!0) || !1 === i.clearMaskOnLostFocus || c.activeElement === X)) {
						var f = a.isFunction(i.onBeforeMask) ? i.onBeforeMask(X.inputmask._valueGet(!0), i) || X.inputmask._valueGet(!0) : X.inputmask._valueGet(!0);"" !== f && J(X, !0, !1, Y ? f.split("").reverse() : f.split(""));var g = y().slice();S = g.join(""), !1 === O(g) && i.clearIncomplete && p(), i.clearMaskOnLostFocus && c.activeElement !== X && (-1 === q() ? g = [] : N(g)), H(X, g), c.activeElement === X && L(X, E(q()));
					}
				}(X);break;case "format":
				return W = (a.isFunction(i.onBeforeMask) ? i.onBeforeMask(f.value, i) || f.value : f.value).split(""), J(d, !0, !1, Y ? W.reverse() : W), f.metadata ? { value: Y ? y().slice().reverse().join("") : y().join(""), metadata: h.call(this, { action: "getmetadata" }, g, i) } : Y ? y().slice().reverse().join("") : y().join("");case "isValid":
				f.value ? (W = f.value.split(""), J(d, !0, !0, Y ? W.reverse() : W)) : f.value = y().join("");for (var da = y(), ea = M(), fa = da.length - 1; fa > ea && !D(fa); fa--) {}return da.splice(ea, fa + 1 - ea), O(da) && f.value === y().join("");case "getemptymask":
				return x().join("");case "remove":
				if (X && X.inputmask) {
					T = a(X), X.inputmask._valueSet(i.autoUnmask ? K(X) : X.inputmask._valueGet(!0)), ba.off(X);Object.getOwnPropertyDescriptor && Object.getPrototypeOf ? Object.getOwnPropertyDescriptor(Object.getPrototypeOf(X), "value") && X.inputmask.__valueGet && Object.defineProperty(X, "value", { get: X.inputmask.__valueGet, set: X.inputmask.__valueSet, configurable: !0 }) : c.__lookupGetter__ && X.__lookupGetter__("value") && X.inputmask.__valueGet && (X.__defineGetter__("value", X.inputmask.__valueGet), X.__defineSetter__("value", X.inputmask.__valueSet)), X.inputmask = d;
				}return X;case "getmetadata":
				if (a.isArray(g.metadata)) {
					var ga = n(!0, 0, !1).join("");return a.each(g.metadata, function (a, b) {
						if (b.mask === ga) return ga = b, !1;
					}), ga;
				}return g.metadata;}
	}var i = navigator.userAgent,
	    j = /mobile/i.test(i),
	    k = /iemobile/i.test(i),
	    l = /iphone/i.test(i) && !k,
	    m = /android/i.test(i) && !k;return e.prototype = { dataAttribute: "data-inputmask", defaults: { placeholder: "_", optionalmarker: { start: "[", end: "]" }, quantifiermarker: { start: "{", end: "}" }, groupmarker: { start: "(", end: ")" }, alternatormarker: "|", escapeChar: "\\", mask: null, regex: null, oncomplete: a.noop, onincomplete: a.noop, oncleared: a.noop, repeat: 0, greedy: !0, autoUnmask: !1, removeMaskOnSubmit: !1, clearMaskOnLostFocus: !0, insertMode: !0, clearIncomplete: !1, alias: null, onKeyDown: a.noop, onBeforeMask: null, onBeforePaste: function onBeforePaste(b, c) {
				return a.isFunction(c.onBeforeMask) ? c.onBeforeMask(b, c) : b;
			}, onBeforeWrite: null, onUnMask: null, showMaskOnFocus: !0, showMaskOnHover: !0, onKeyValidation: a.noop, skipOptionalPartCharacter: " ", numericInput: !1, rightAlign: !1, undoOnEscape: !0, radixPoint: "", radixPointDefinitionSymbol: d, groupSeparator: "", keepStatic: null, positionCaretOnTab: !0, tabThrough: !1, supportsInputType: ["text", "tel", "password"], ignorables: [8, 9, 13, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 93, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 0, 229], isComplete: null, canClearPosition: a.noop, preValidation: null, postValidation: null, staticDefinitionSymbol: d, jitMasking: !1, nullable: !0, inputEventOnly: !1, noValuePatching: !1, positionCaretOnClick: "lvp", casing: null, inputmode: "verbatim", colorMask: !1, androidHack: !1 }, definitions: { 9: { validator: "[0-9]", cardinality: 1, definitionSymbol: "*" }, a: { validator: '[A-Za-z\u0410-\u044F\u0401\u0451\xC0-\xFF\xB5]', cardinality: 1, definitionSymbol: "*" }, "*": { validator: function validator() {
					return !0;
				}, cardinality: 1 } }, aliases: {}, masksCache: {}, mask: function mask(i) {
			function j(c, e, g, h) {
				function i(a, e) {
					null !== (e = e !== d ? e : c.getAttribute(h + "-" + a)) && ("string" == typeof e && (0 === a.indexOf("on") ? e = b[e] : "false" === e ? e = !1 : "true" === e && (e = !0)), g[a] = e);
				}("rtl" === c.dir || e.rightAlign) && (c.style.textAlign = "right"), ("rtl" === c.dir || e.numericInput) && (c.dir = "ltr", c.removeAttribute("dir"), e.isRTL = !0);var j,
				    k,
				    l,
				    m,
				    n = c.getAttribute(h);if (n && "" !== n && (n = n.replace(new RegExp("'", "g"), '"'), k = JSON.parse("{" + n + "}")), k) {
					l = d;for (m in k) {
						if ("alias" === m.toLowerCase()) {
							l = k[m];break;
						}
					}
				}i("alias", l), g.alias && f(g.alias, g, e);for (j in e) {
					if (k) {
						l = d;for (m in k) {
							if (m.toLowerCase() === j.toLowerCase()) {
								l = k[m];break;
							}
						}
					}i(j, l);
				}return a.extend(!0, e, g), e;
			}var k = this;return "string" == typeof i && (i = c.getElementById(i) || c.querySelectorAll(i)), i = i.nodeName ? [i] : i, a.each(i, function (b, c) {
				var f = a.extend(!0, {}, k.opts);j(c, f, a.extend(!0, {}, k.userOptions), k.dataAttribute);var i = g(f, k.noMasksCache);i !== d && (c.inputmask !== d && c.inputmask.remove(), c.inputmask = new e(d, d, !0), c.inputmask.opts = f, c.inputmask.noMasksCache = k.noMasksCache, c.inputmask.userOptions = a.extend(!0, {}, k.userOptions), c.inputmask.isRTL = f.isRTL, c.inputmask.el = c, c.inputmask.maskset = i, a.data(c, "_inputmask_opts", f), h.call(c.inputmask, { action: "mask" }));
			}), i && i[0] ? i[0].inputmask || this : this;
		}, option: function option(b, c) {
			return "string" == typeof b ? this.opts[b] : "object" == (typeof b === 'undefined' ? 'undefined' : _typeof(b)) ? (a.extend(this.userOptions, b), this.el && !0 !== c && this.mask(this.el), this) : void 0;
		}, unmaskedvalue: function unmaskedvalue(a) {
			return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, { action: "unmaskedvalue", value: a });
		}, remove: function remove() {
			return h.call(this, { action: "remove" });
		}, getemptymask: function getemptymask() {
			return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, { action: "getemptymask" });
		}, hasMaskedValue: function hasMaskedValue() {
			return !this.opts.autoUnmask;
		}, isComplete: function isComplete() {
			return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, { action: "isComplete" });
		}, getmetadata: function getmetadata() {
			return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, { action: "getmetadata" });
		}, isValid: function isValid(a) {
			return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, { action: "isValid", value: a });
		}, format: function format(a, b) {
			return this.maskset = this.maskset || g(this.opts, this.noMasksCache), h.call(this, { action: "format", value: a, metadata: b });
		}, analyseMask: function analyseMask(b, c, f) {
			function g(a, b, c, d) {
				this.matches = [], this.openGroup = a || !1, this.alternatorGroup = !1, this.isGroup = a || !1, this.isOptional = b || !1, this.isQuantifier = c || !1, this.isAlternator = d || !1, this.quantifier = { min: 1, max: 1 };
			}function h(b, g, h) {
				h = h !== d ? h : b.matches.length;var i = b.matches[h - 1];if (c) 0 === g.indexOf("[") || u ? b.matches.splice(h++, 0, { fn: new RegExp(g, f.casing ? "i" : ""), cardinality: 1, optionality: b.isOptional, newBlockMarker: i === d || i.def !== g, casing: null, def: g, placeholder: d, nativeDef: g }) : a.each(g.split(""), function (a, c) {
					i = b.matches[h - 1], b.matches.splice(h++, 0, { fn: null, cardinality: 0, optionality: b.isOptional, newBlockMarker: i === d || i.def !== c && null !== i.fn, casing: null, def: f.staticDefinitionSymbol || c, placeholder: f.staticDefinitionSymbol !== d ? c : d, nativeDef: c });
				}), u = !1;else {
					var j = (f.definitions ? f.definitions[g] : d) || e.prototype.definitions[g];if (j && !u) {
						for (var k = j.prevalidator, l = k ? k.length : 0, m = 1; m < j.cardinality; m++) {
							var n = l >= m ? k[m - 1] : [],
							    o = n.validator,
							    p = n.cardinality;b.matches.splice(h++, 0, { fn: o ? "string" == typeof o ? new RegExp(o, f.casing ? "i" : "") : new function () {
									this.test = o;
								}() : new RegExp("."), cardinality: p || 1, optionality: b.isOptional, newBlockMarker: i === d || i.def !== (j.definitionSymbol || g), casing: j.casing, def: j.definitionSymbol || g, placeholder: j.placeholder, nativeDef: g }), i = b.matches[h - 1];
						}b.matches.splice(h++, 0, { fn: j.validator ? "string" == typeof j.validator ? new RegExp(j.validator, f.casing ? "i" : "") : new function () {
								this.test = j.validator;
							}() : new RegExp("."), cardinality: j.cardinality, optionality: b.isOptional, newBlockMarker: i === d || i.def !== (j.definitionSymbol || g), casing: j.casing, def: j.definitionSymbol || g, placeholder: j.placeholder, nativeDef: g });
					} else b.matches.splice(h++, 0, { fn: null, cardinality: 0, optionality: b.isOptional, newBlockMarker: i === d || i.def !== g && null !== i.fn, casing: null, def: f.staticDefinitionSymbol || g, placeholder: f.staticDefinitionSymbol !== d ? g : d, nativeDef: g }), u = !1;
				}
			}function i(b) {
				b && b.matches && a.each(b.matches, function (a, e) {
					var g = b.matches[a + 1];(g === d || g.matches === d || !1 === g.isQuantifier) && e && e.isGroup && (e.isGroup = !1, c || (h(e, f.groupmarker.start, 0), !0 !== e.openGroup && h(e, f.groupmarker.end))), i(e);
				});
			}function j() {
				if (w.length > 0) {
					if (o = w[w.length - 1], h(o, m), o.isAlternator) {
						p = w.pop();for (var a = 0; a < p.matches.length; a++) {
							p.matches[a].isGroup = !1;
						}w.length > 0 ? (o = w[w.length - 1], o.matches.push(p)) : v.matches.push(p);
					}
				} else h(v, m);
			}function k(a) {
				a.matches = a.matches.reverse();for (var b in a.matches) {
					if (a.matches.hasOwnProperty(b)) {
						var c = parseInt(b);if (a.matches[b].isQuantifier && a.matches[c + 1] && a.matches[c + 1].isGroup) {
							var e = a.matches[b];a.matches.splice(b, 1), a.matches.splice(c + 1, 0, e);
						}a.matches[b].matches !== d ? a.matches[b] = k(a.matches[b]) : a.matches[b] = function (a) {
							return a === f.optionalmarker.start ? a = f.optionalmarker.end : a === f.optionalmarker.end ? a = f.optionalmarker.start : a === f.groupmarker.start ? a = f.groupmarker.end : a === f.groupmarker.end && (a = f.groupmarker.start), a;
						}(a.matches[b]);
					}
				}return a;
			}var l,
			    m,
			    n,
			    o,
			    p,
			    q,
			    r,
			    s = /(?:[?*+]|\{[0-9\+\*]+(?:,[0-9\+\*]*)?\})|[^.?*+^${[]()|\\]+|./g,
			    t = /\[\^?]?(?:[^\\\]]+|\\[\S\s]?)*]?|\\(?:0(?:[0-3][0-7]{0,2}|[4-7][0-7]?)?|[1-9][0-9]*|x[0-9A-Fa-f]{2}|u[0-9A-Fa-f]{4}|c[A-Za-z]|[\S\s]?)|\((?:\?[:=!]?)?|(?:[?*+]|\{[0-9]+(?:,[0-9]*)?\})\??|[^.?*+^${[()|\\]+|./g,
			    u = !1,
			    v = new g(),
			    w = [],
			    x = [];for (c && (f.optionalmarker.start = d, f.optionalmarker.end = d); l = c ? t.exec(b) : s.exec(b);) {
				if (m = l[0], c) switch (m.charAt(0)) {case "?":
						m = "{0,1}";break;case "+":case "*":
						m = "{" + m + "}";}if (u) j();else switch (m.charAt(0)) {case f.escapeChar:
						u = !0, c && j();break;case f.optionalmarker.end:case f.groupmarker.end:
						if (n = w.pop(), n.openGroup = !1, n !== d) {
							if (w.length > 0) {
								if (o = w[w.length - 1], o.matches.push(n), o.isAlternator) {
									p = w.pop();for (var y = 0; y < p.matches.length; y++) {
										p.matches[y].isGroup = !1, p.matches[y].alternatorGroup = !1;
									}w.length > 0 ? (o = w[w.length - 1], o.matches.push(p)) : v.matches.push(p);
								}
							} else v.matches.push(n);
						} else j();break;case f.optionalmarker.start:
						w.push(new g(!1, !0));break;case f.groupmarker.start:
						w.push(new g(!0));break;case f.quantifiermarker.start:
						var z = new g(!1, !1, !0);m = m.replace(/[{}]/g, "");var A = m.split(","),
						    B = isNaN(A[0]) ? A[0] : parseInt(A[0]),
						    C = 1 === A.length ? B : isNaN(A[1]) ? A[1] : parseInt(A[1]);if ("*" !== C && "+" !== C || (B = "*" === C ? 0 : 1), z.quantifier = { min: B, max: C }, w.length > 0) {
							var D = w[w.length - 1].matches;l = D.pop(), l.isGroup || (r = new g(!0), r.matches.push(l), l = r), D.push(l), D.push(z);
						} else l = v.matches.pop(), l.isGroup || (r = new g(!0), r.matches.push(l), l = r), v.matches.push(l), v.matches.push(z);break;case f.alternatormarker:
						if (w.length > 0) {
							o = w[w.length - 1];var E = o.matches[o.matches.length - 1];q = o.openGroup && (E.matches === d || !1 === E.isGroup && !1 === E.isAlternator) ? w.pop() : o.matches.pop();
						} else q = v.matches.pop();if (q.isAlternator) w.push(q);else if (q.alternatorGroup ? (p = w.pop(), q.alternatorGroup = !1) : p = new g(!1, !1, !1, !0), p.matches.push(q), w.push(p), q.openGroup) {
							q.openGroup = !1;var F = new g(!0);F.alternatorGroup = !0, w.push(F);
						}break;default:
						j();}
			}for (; w.length > 0;) {
				n = w.pop(), v.matches.push(n);
			}return v.matches.length > 0 && (i(v), x.push(v)), (f.numericInput || f.isRTL) && k(x[0]), x;
		} }, e.extendDefaults = function (b) {
		a.extend(!0, e.prototype.defaults, b);
	}, e.extendDefinitions = function (b) {
		a.extend(!0, e.prototype.definitions, b);
	}, e.extendAliases = function (b) {
		a.extend(!0, e.prototype.aliases, b);
	}, e.format = function (a, b, c) {
		return e(b).format(a, c);
	}, e.unmask = function (a, b) {
		return e(b).unmaskedvalue(a);
	}, e.isValid = function (a, b) {
		return e(b).isValid(a);
	}, e.remove = function (b) {
		a.each(b, function (a, b) {
			b.inputmask && b.inputmask.remove();
		});
	}, e.escapeRegex = function (a) {
		var b = ["/", ".", "*", "+", "?", "|", "(", ")", "[", "]", "{", "}", "\\", "$", "^"];return a.replace(new RegExp("(\\" + b.join("|\\") + ")", "gim"), "\\$1");
	}, e.keyCode = { ALT: 18, BACKSPACE: 8, BACKSPACE_SAFARI: 127, CAPS_LOCK: 20, COMMA: 188, COMMAND: 91, COMMAND_LEFT: 91, COMMAND_RIGHT: 93, CONTROL: 17, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, INSERT: 45, LEFT: 37, MENU: 93, NUMPAD_ADD: 107, NUMPAD_DECIMAL: 110, NUMPAD_DIVIDE: 111, NUMPAD_ENTER: 108, NUMPAD_MULTIPLY: 106, NUMPAD_SUBTRACT: 109, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SHIFT: 16, SPACE: 32, TAB: 9, UP: 38, WINDOWS: 91, X: 88 }, e;
});
/*!
* jquery.inputmask.js
* https://github.com/RobinHerbots/Inputmask
* Copyright (c) 2010 - 2017 Robin Herbots
* Licensed under the MIT license (http://www.opensource.org/licenses/mit-license.php)
* Version: 3.3.7-24
*/

!function (factory) {
	"function" == typeof define && define.amd ? define(["jquery", "./inputmask"], factory) : "object" == (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) ? module.exports = factory(require("jquery"), require("./inputmask")) : factory(jQuery, window.Inputmask);
}(function ($, Inputmask) {
	return void 0 === $.fn.inputmask && ($.fn.inputmask = function (fn, options) {
		var nptmask,
		    input = this[0];
		if (void 0 === options && (options = {}), "string" == typeof fn) switch (fn) {
			case "unmaskedvalue":
				return input && input.inputmask ? input.inputmask.unmaskedvalue() : $(input).val();

			case "remove":
				return this.each(function () {
					this.inputmask && this.inputmask.remove();
				});

			case "getemptymask":
				return input && input.inputmask ? input.inputmask.getemptymask() : "";

			case "hasMaskedValue":
				return !(!input || !input.inputmask) && input.inputmask.hasMaskedValue();

			case "isComplete":
				return !input || !input.inputmask || input.inputmask.isComplete();

			case "getmetadata":
				return input && input.inputmask ? input.inputmask.getmetadata() : void 0;

			case "setvalue":
				$(input).val(options), input && void 0 === input.inputmask && $(input).triggerHandler("setvalue");
				break;

			case "option":
				if ("string" != typeof options) return this.each(function () {
					if (void 0 !== this.inputmask) return this.inputmask.option(options);
				});
				if (input && void 0 !== input.inputmask) return input.inputmask.option(options);
				break;

			default:
				return options.alias = fn, nptmask = new Inputmask(options), this.each(function () {
					nptmask.mask(this);
				});
		} else {
			if ("object" == (typeof fn === 'undefined' ? 'undefined' : _typeof(fn))) return nptmask = new Inputmask(fn), void 0 === fn.mask && void 0 === fn.alias ? this.each(function () {
				if (void 0 !== this.inputmask) return this.inputmask.option(fn);
				nptmask.mask(this);
			}) : this.each(function () {
				nptmask.mask(this);
			});
			if (void 0 === fn) return this.each(function () {
				nptmask = new Inputmask(options), nptmask.mask(this);
			});
		}
	}), $.fn.inputmask;
});

$('select.js-select-simple').each(function () {
	var $this = $(this),
	    numberOfOptions = $(this).children('option').length,
	    $styledSelect = $this.next('div.select-view').detach();

	$this.addClass('select-hidden');
	$this.wrap('<div class="select_wrapper"></div>');
	$this.after($styledSelect);

	$styledSelect.text($this.children('option').eq(0).text());

	var $list = $('<ul />');
	$list.addClass('select-options').insertAfter($styledSelect);
	for (var i = 0; i < numberOfOptions; i++) {
		$('<li />', {
			text: $this.children('option').eq(i).text(),
			rel: $this.children('option').eq(i).val()
		}).appendTo($list);
	}

	var $listItems = $list.children('li');

	$styledSelect.click(function (e) {
		e.stopPropagation();
		$('div.select-view.active').not(this).each(function () {
			$(this).removeClass('active').next('ul.select-options').hide();
		});
		$(this).toggleClass('active').next('ul.select-options').toggle(300);
	});

	$listItems.click(function (e) {
		$styledSelect.removeClass("select_placeholder");
		$(this).addClass("active");
		$listItems.not(this).removeAttr("class");
		e.stopPropagation();
		$styledSelect.text($(this).text()).removeClass('active');
		$this.val($(this).attr('rel'));
		$list.hide();
	});

	$(document).click(function () {
		$styledSelect.removeClass('active');
		$list.hide();
	});
}); /*select.each*/

$('select.js-select-multiple').each(function () {
	var $this = $(this),
	    $inlineValueContainer = $(this).parents(".js-multi-select-wrapper").find(".js-value-container"),
	    $inlineValue = $inlineValueContainer.find(".js-inline-value"),
	    numberOfOptions = $(this).children('option').length,
	    $styledSelect = $this.next('div.select-view').detach();

	$this.attr("multiple", "");

	$this.addClass('select-hidden');
	$this.wrap('<div class="select_wrapper"></div>');
	//$this.after('<div class="select-view  select_placeholder"></div>');
	$this.after($styledSelect);

	// var $styledSelect = $this.next('div.select-view');
	$styledSelect.text($this.children('option').eq(0).text());

	var $list = $('<ul />');
	$list.addClass('select-options').insertAfter($styledSelect);
	for (var i = 0; i < numberOfOptions; i++) {
		$('<li />', {
			text: $this.children('option').eq(i).text(),
			rel: $this.children('option').eq(i).val()
		}).appendTo($list);
	}

	var $listItems = $list.children('li');

	$styledSelect.click(function (e) {
		e.stopPropagation();
		$('div.select-view.active').not(this).each(function () {
			$(this).removeClass('active').next('ul.select-options').hide();
		});
		$(this).toggleClass('active').next('ul.select-options').toggle(300);
	});

	$listItems.click(function (e) {
		e.stopPropagation();
		var rel = $(this).attr("rel"),
		    optText = $(this).html();

		$styledSelect.removeClass("select_placeholder");
		if ($(this).hasClass("active")) {
			$(this).removeClass("active");
			//console.log(optText);
			$this.find("option[value = " + rel + "]").attr("selected", false);
			$inlineValueContainer.find(".js-inline-value").each(function () {
				if ($(this).html() == optText) $(this).remove();
			});
		} else {
			$(this).addClass("active");
			$this.find("option[value = " + rel + "]").attr("selected", true);
			$inlineValueContainer.append("<div class='inline-value inline-value--small js-inline-value'>" + optText + "</div>");
		}
		//$list.hide();
	});

	$inlineValueContainer.on("click", ".js-inline-value", function () {
		var text = $(this).html();
		//$this.find("option").eq(deleteIndex).attr("selected", false);
		$listItems.each(function () {
			if ($(this).html() == text) $(this).removeClass("active");
		});
		$this.find("option").each(function () {
			if ($(this).html() == text) $(this).attr("selected", false);
		});

		$(this).remove();
	});

	$(document).click(function () {
		$styledSelect.removeClass('active');
		$list.hide();
	});
}); /*select.each*/
$(".js-popup-link").click(function (e, name) {
	e.preventDefault();
	var $this = $(this),

	// for open from slider
	slideIndex = +$this.attr("data-slide-index");

	openPopup($this, slideIndex);
});

// remove in production
$(".js-remove-in-back-end").click(function (e, name) {
	e.preventDefault();
	openPopup("js-popup-select-method");
});

function openPopup(temp, slideIndex) {

	var locWindowWidth = $(document).width(),
	    $popupOpen;

	if ((typeof temp === 'undefined' ? 'undefined' : _typeof(temp)) == "object") {
		var $linkObj = temp,
		    dataPopupOpen = $linkObj.attr("data-popup-open"),
		    $parentPopup = $linkObj.parents(".js-popup");

		$popupOpen = $(".js-popup[data-popup = " + dataPopupOpen + "]");
	} else {
		$popupOpen = $(".js-popup." + temp + "");
	};

	//mobile close dropdownmenu
	if (locWindowWidth < 992) {
		$(".js-nav-respons").slideUp(50);
	};

	// if open popup from other popup
	if ($parentPopup) {
		$parentPopup.fadeOut(50);
		//$parentPopup.find(".js-field-wrap-validate").removeClass("field-error field-error--sign");
	};

	if (locWindowWidth >= 992) {
		$popupOpen.fadeIn(150).addClass("popup-is-open");
		$("body").addClass("is-hidden");
	} else {
		if ($popupOpen.hasClass("js-popup-gallery")) {} else {
			$popupOpen.fadeIn(150).addClass("popup-is-open");
			$("body").addClass("is-hidden");
		}
	}

	// if popup has gallery
	if ($popupOpen.hasClass("js-popup-gallery") && locWindowWidth >= 992) {
		var mainSlider = $popupOpen.find(".js-popup-main-slider"),
		    tumbSlider = $popupOpen.find(".js-popup-tumb-slider");

		if (mainSlider.hasClass("slick-initialized") && tumbSlider.hasClass("slick-initialized")) {
			return;
		} else {
			mainSlider.slick({
				prevArrow: "<div class='slick-prev-custom slick-arrow-custom'>Previous</div>",
				nextArrow: "<div class='slick-next-custom slick-arrow-custom'>Previous</div>",
				asNavFor: tumbSlider

			});
			tumbSlider.slick({
				arrows: false,
				asNavFor: mainSlider,
				slidesToShow: 4,
				slidesToScroll: 1,
				focusOnSelect: true,
				centerMode: true,
				variableWidth: true
			});
		};
		//slide to 
		mainSlider.slick('slickGoTo', slideIndex);
		tumbSlider.slick('slickGoTo', slideIndex);
	}
};
// class open  
//openPopup("js-popup-gallery, slideIndex")


$(".js-popup").on("click", function () {
	var $this = $(this),
	    locWidth = $(document).width();
	$this.removeClass("popup-is-open");
	$this.fadeOut(150);
	$("body").removeClass("is-hidden");
	//$this.find(".js-field-wrap-validate").removeClass("field-error field-error--sign");


	// if popup gallery
	if ($this.hasClass("js-popup-gallery") && locWidth >= 992) {
		//console.log(222)
		var mainSlider = $this.find(".js-popup-main-slider"),
		    tumbSlider = $this.find(".js-popup-tumb-slider");
		mainSlider.slick("unslick");
		tumbSlider.slick("unslick");
	}
});

$(".js-btn-close").on("click", function (e) {
	e.preventDefault();
	$(this).parents(".js-popup").trigger("click");
});
// multiple select
$(".js-multiple-container").each(function () {
	var $this = $(this),
	    $inlineValueContainer = $this.next(".js-value-container"),
	    valueInput = $this.find(".js-value-input"),
	    visibleInput = $this.find(".js-field-visible"),
	    addBtn = $this.find(".js-multiple-add-btn"),
	    valueArr = [],
	    strResult;

	addBtn.on("click", function () {
		var $this = $(this),
		    tempValue = visibleInput.val();

		visibleInput.val("");
		$inlineValueContainer.empty();
		//console.log(tempValue)
		if (tempValue != " " && tempValue.length >= 3 && valueArr.indexOf(tempValue) === -1) {
			valueArr.push(tempValue);
		};
		//console.log(valueArr);
		for (var i = 0; i < valueArr.length; i++) {
			if ($inlineValueContainer.hasClass("js-value-container-small")) {
				$inlineValueContainer.append("<div class='inline-value inline-value--small js-inline-value'>" + valueArr[i] + "</div>");
			} else {
				$inlineValueContainer.append("<div class='inline-value js-inline-value'>" + valueArr[i] + "</div>");
			}
		};
		strResult = valueArr.join(";");
		valueInput.val("" + strResult + "");
	});

	visibleInput.keyup(function (e) {
		if (event.keyCode == 13) {
			e.preventDefault();
			addBtn.trigger("click");
			return false;
		}
	});

	$inlineValueContainer.on("click", ".js-inline-value", function () {
		var $this = $(this),
		    inlineValue = $this.html(),
		    deleteIndex = valueArr.indexOf(inlineValue);

		valueArr.splice(deleteIndex, 1);
		strResult = valueArr.join(';');
		valueInput.val(strResult);

		$this.remove();
	});
});
// multiple select

function createMediumCalendar() {
	// field publication dates  calendar 
	var publicationDates,
	    $inlineDatesContainer = $(".js-date-container1"),
	    publicDatesTextarea = $(".js-publ-dates"),
	    publicationDatepicker = $('#date_range');

	publicationDatepicker.datepicker({
		range: 'multiple',
		dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
		dateFormat: "M dd, yy",
		showOtherMonths: true,
		onSelect: function onSelect(dateText, inst, extensionRange) {
			// extensionRange - объект расширения
			publicationDates = extensionRange.datesText;
			publicationDates.sort();

			$('textarea.js-publ-dates').val(extensionRange.datesText.join(';'));
			$inlineDatesContainer.empty();
			for (var i = 0; i < publicationDates.length; i++) {
				$inlineDatesContainer.append("<div class='inline-value js-inline-value'>" + publicationDates[i] + "</div>");
			};
		}
	});
	// объект расширения (хранит состояние календаря)
	//var extensionRange = $('#date_range').datepicker('widget').data('datepickerExtensionRange');
	//if (extensionRange.datesText) $('[name=publ-dates]').val(extensionRange.datesText.join('\n'));

	// remove current day from datepicker select and date textarea
	var currentDay = publicationDatepicker.find("td.ui-datepicker-current-day");
	currentDay.trigger("click");

	$(".js-date-container1").on("click", ".js-inline-value", function () {

		var $this = $(this),
		    value = $this.html(),
		    deleteIndex = publicationDates.indexOf(value),
		    publicDatesString;

		publicationDates.splice(deleteIndex, 1);
		publicDatesString = publicationDates.join(';');
		publicDatesTextarea.val(publicDatesString);

		publicationDatepicker.datepicker("setDate", publicationDates);
		$this.remove();
	});

	$(".js-calendar1").on("click", function (e) {
		e.stopPropagation();
		$(this).toggleClass("is-open");
	});
	//$(".js-dropbox-calendar1").on("click", function(e){
	//  e.stopPropagation();
	//});
	// field publication dates  calendar
};
createMediumCalendar();

function createSpacelCalendar(arr) {

	var disableDatesArr = arr;

	var $inlineDatesContainer = $(".js-spacel-dates-cont"),
	    spacelPrice = $(".js-spacel-price").html(),
	    totalCost = $(".js-scalendar-total-cost"),
	    $spacelDatesTextarea = $(".js-spacel-dates-textarea"),
	    monthLinks = $(".js-scalendar-month");

	$("#spacel-calendar").datepick({
		altField: '#spacel-alt',
		multiSelect: 999,
		dateFormat: 'M dd, yy',
		multiSeparator: ';',
		dayNamesMin: ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'],
		onDate: function onDate(date, inMonth) {
			if (inMonth) {
				for (var i = 0; i < disableDatesArr.length; i++) {
					if (date.getMonth() + 1 == disableDatesArr[i][0] && date.getDate() == disableDatesArr[i][1]) {
						return {
							dateClass: 'disable',
							selectable: false
						};
					}
				}
			}
			return {};
		},
		//onDate: function(date, inMonth){
		//    console.log($.datepick.daysInMonth(date))
		//    if (inMonth) { 
		//        //console.log(date.getFullYear());
		//        for (var i = 0; i < natDays.length; i++) { 
		//            if (date.getMonth() + 1 == natDays[i][0] && 
		//                date.getFullYear() == natDays[i][2] &&
		//                $.datepick.daysInMonth(date) == natDays[i][1]) { 
		//                console.log($.datepick.daysInMonth(date))
		//                return {
		//                    dateClass: 'disable', 
		//                    selectable: false
		//                }; 
		//            } 
		//        } 
		//    } 
		//    return {}; 
		//},
		onSelect: function onSelect(dates) {
			var selectedDatesArr = [],
			    textareaStrValue = $spacelDatesTextarea.val();

			$inlineDatesContainer.empty();
			selectedDatesArr = textareaStrValue.split(';');
			selectedDatesArr.sort();
			// /console.log(selectedDatesArr.length);

			for (var i = 0; i < selectedDatesArr.length; i++) {
				$inlineDatesContainer.append("<span>" + selectedDatesArr[i] + ";</span> ");
			};

			if (selectedDatesArr == "") {
				$inlineDatesContainer.addClass("scalendar__hidden");
				totalCost.html("0");
			} else {
				$inlineDatesContainer.removeClass("scalendar__hidden");
				totalCost.html(selectedDatesArr.length * spacelPrice);
			}
		}

	});

	var date = new Date(),
	    actualYear = date.getFullYear(),
	    actualMonth = date.getMonth();

	monthLinks.eq(actualMonth).addClass("is-active");

	monthLinks.on("click", function (e) {
		e.preventDefault();
		var $thisLink = $(this),
		    thisIndex = $thisLink.index() + 1,
		    $selectMonth = $(".datepick-month-year");

		monthLinks.removeClass("is-active");
		$thisLink.addClass("is-active");

		//$selectMonth.find("option").removeAttr("selected");
		//$selectMonth.find("option").eq(thisIndex).attr("selected", "selected");
		//console.log($selectMonth.find("option").eq(thisIndex).val())

		//$("#spacel-calendar").datepick('changeMonth', +1)
		$("#spacel-calendar").datepick('showMonth', actualYear, thisIndex);
	});
};
createSpacelCalendar([[1, 26, 2017], [2, 6, 2017], [3, 17, 2017], [4, 27, 2017], [5, 25, 2017], [6, 6, 2017], [7, 4, 2017], [8, 17, 2017], [9, 7, 2017], [10, 1, 2017], [11, 22, 2017], [12, 12, 2018]]);

//var disableArr = ["May 24, 17", "May 25, 17", "May 26, 17"]; 


//function nationalDays(date, inMonth) { 
//
//    if (inMonth) { 
//        for (var i = 0; i < natDays.length; i++) { 
//            if (date.getMonth() + 1 == natDays[i][0] && 
//                date.getDate() == natDays[i][1]) { 
//                return {
//                    dateClass: 'disable', 
//                    selectable: false, 
//                    title: natDays[i][3]}; 
//                } 
//            } 
//        } 
//        return {}; 
//    };
//multidatespicker with disable dates
//function createSpacelCalendar() {
//    // field publication dates  calendar 
//    var publicationDates,
//    $inlineDatesContainer = $(".js-spacel-dates-cont"),
//    publicDatesTextarea = $(".js-spacel-dates"),
//    publicationDatepicker = $('#spacel-calendar'),
//    spacelPrice = $(".js-spacel-price").html(),
//    totalCost = $(".js-scalendar-total-cost"),
//    array  = ["MAY 23, 2017", "MAY 24, 2017", "MAY 25, 2017"];
//
//    publicationDatepicker.datepicker({
//        range: 'multiple',
//        dayNamesMin: ["S", "M", "T", "W", "T", "F", "S"],
//        dateFormat: "M dd, yy",
//        showOtherMonths: false,
//        //onSelect: function(selectedDate, el){
//        //    //console.log(selectedDate, el)
//        //    //$(this).addClass("is-selected");
//        //}
//
//        //onSelect: function(dateText, inst, extensionRange) {
//        //    //console.log(inst)
//        //    // extensionRange - объект расширения
//        //    publicationDates = extensionRange.datesText;
//        //    publicationDates.sort();
//        //    $('textarea.js-spacel-dates').val(extensionRange.datesText.join(';'));
//        //    $inlineDatesContainer.empty();
//        //    for (var i = 0; i < publicationDates.length; i++) {
//        //        $inlineDatesContainer.append("<span>" + publicationDates[i] + ";</span> ")
//        //    };
//        //    // hide container if it empty
//        //    if (!$inlineDatesContainer.html() == "") {
//        //        $inlineDatesContainer.removeClass("scalendar__hidden");
//        //    } else {
//        //        $inlineDatesContainer.addClass("scalendar__hidden");
//        //    }
//        //    // show total cost
//        //    totalCost.html(publicationDates.length * spacelPrice);
//        //},
//       //beforeShowDay : function(input, inst){
//       //    console.log(inst);
//       //    return []
//       //}
//    });
//
//    var currentDay = publicationDatepicker.find("td.ui-datepicker-current-day");
//    //currentDay.trigger("click");
//    currentDay.removeAttr("data-event");
//
//};

//createSpacelCalendar();
function adsTabs() {
	var adsContent = $('.js-adst-tab');

	$(adsContent).each(function () {
		$(this).find('.js-adst-tab__link').first().addClass('is-active');

		$(this).find('.js-adst-tab__content').first().addClass('is-active').fadeIn(300);
	});

	$('.js-adst-tab__link').on('click', function () {
		var self = $(this);

		$(this).addClass('is-active').siblings().removeClass('is-active');

		$(this).closest('.js-adst-tab').find('.js-adst-tab__content').each(function () {
			if ($(this).data('content') == $(self).data('target-content')) {
				$(this).addClass('is-active').fadeIn(300).siblings('.js-adst-tab__content').removeClass('is-active').hide();
			}
		});
	});
};

adsTabs();

$('.js-adstnav__link-create').on("click", function () {
	$('.adstnav_hide').hide();
	$('.title-adm_hide').hide();
});

if ($(".js-filter").hasClass("js-filter")) {
	var setSliderHandle = function setSliderHandle(i, value) {
		var r = [null, null];
		r[i] = value;
		priceSlider.noUiSlider.set(r);
	};

	// Listen to keydown events on the input field.


	var setSliderHandle = function setSliderHandle(i, value) {
		var r = [null, null];
		r[i] = value;
		dateSlider.noUiSlider.set(r);
	};

	// Listen to keydown events on the input field.


	var priceSlider = document.getElementById('priceSlider'),
	    priceInputMin = document.getElementById('priceInputMin'),
	    priceInputMax = document.getElementById('priceInputMax'),
	    inputs = [priceInputMin, priceInputMax],
	    dateSlider = document.getElementById('dateSlider'),
	    dateInputMin = document.getElementById('dateInputMin'),
	    dateInputMax = document.getElementById('dateInputMax'),
	    dateinputs = [dateInputMin, dateInputMax];

	noUiSlider.create(priceSlider, {
		start: [100, 500],
		connect: true,
		range: {
			'min': [0],
			'max': [600]
		},
		format: wNumb({
			decimals: 0,
			thousand: ' '
		})
	});

	priceSlider.noUiSlider.on('update', function (values, handle) {
		inputs[handle].value = values[handle];
	});

	inputs.forEach(function (input, handle) {

		input.addEventListener('change', function () {
			setSliderHandle(handle, this.value);
		});

		input.addEventListener('keydown', function (e) {

			var values = priceSlider.noUiSlider.get();
			var value = Number(values[handle]);

			// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
			var steps = priceSlider.noUiSlider.steps();

			// [down, up]
			var step = steps[handle];

			var position;

			// 13 is enter,
			// 38 is key up,
			// 40 is key down.
			switch (e.which) {

				case 13:
					setSliderHandle(handle, this.value);
					break;

				case 38:

					// Get step to go increase slider value (up)
					position = step[1];

					// false = no step is set
					if (position === false) {
						position = 1;
					}

					// null = edge of slider
					if (position !== null) {
						setSliderHandle(handle, value + position);
					}

					break;

				case 40:

					position = step[0];

					if (position === false) {
						position = 1;
					}

					if (position !== null) {
						setSliderHandle(handle, value - position);
					}

					break;
			}
		});
	});

	// date slider 

	noUiSlider.create(dateSlider, {
		start: [2, 10],
		connect: true,
		range: {
			'min': [0],
			'max': [12]
		},
		format: wNumb({
			decimals: 0,
			thousand: ' '
		})
	});

	dateSlider.noUiSlider.on('update', function (values, handle) {
		dateinputs[handle].value = values[handle];
	});

	dateinputs.forEach(function (input, handle) {

		input.addEventListener('change', function () {
			setSliderHandle(handle, this.value);
		});

		input.addEventListener('keydown', function (e) {

			var values = dateSlider.noUiSlider.get();
			var value = Number(values[handle]);

			// [[handle0_down, handle0_up], [handle1_down, handle1_up]]
			var steps = dateSlider.noUiSlider.steps();

			// [down, up]
			var step = steps[handle];

			var position;

			// 13 is enter,
			// 38 is key up,
			// 40 is key down.
			switch (e.which) {

				case 13:
					setSliderHandle(handle, this.value);
					break;

				case 38:

					// Get step to go increase slider value (up)
					position = step[1];

					// false = no step is set
					if (position === false) {
						position = 1;
					}

					// null = edge of slider
					if (position !== null) {
						setSliderHandle(handle, value + position);
					}

					break;

				case 40:

					position = step[0];

					if (position === false) {
						position = 1;
					}

					if (position !== null) {
						setSliderHandle(handle, value - position);
					}

					break;
			}
		});
	});
};
function accountTabs() {
	var adsContent = $('.js-account-tab');

	$(adsContent).each(function () {
		$(this).find('.js-account-tab__link').first().addClass('is-active');

		$(this).find('.js-account-tab__content').first().addClass('is-active').fadeIn(300);
	});

	$('.js-account-tab__link').on('click', function () {
		var self = $(this);

		$(this).addClass('is-active').siblings().removeClass('is-active');

		$(this).closest('.js-account-tab').find('.js-account-tab__content').each(function () {
			if ($(this).data('account') == $(self).data('target-account')) {
				$(this).addClass('is-active').fadeIn(300).siblings('.js-account-tab__content').removeClass('is-active').hide();
			}
		});
	});
};

accountTabs();

function createAccoTabs() {
	var createAcc = $('.js-create-account');

	$(createAcc).each(function () {
		$(this).find('.js-create-acc-nav__link').first().addClass('is-active');

		$(this).find('.js-create-acc_content').first().addClass('is-active').fadeIn(300);
	});

	$('.js-create-acc-nav__link').on('click', function () {
		var self = $(this);

		$(this).addClass('is-active').siblings().removeClass('is-active');

		$(this).closest('.js-create-account').find('.js-create-acc_content').each(function () {
			if ($(this).data('create-acc') == $(self).data('target-acc')) {
				$(this).addClass('is-active').fadeIn(300).siblings('.js-create-acc_content').removeClass('is-active').hide();
			}
		});
	});
};

createAccoTabs();

sayHello();

$(document).ready(function () {

	$(".js-spaces-tabs").tabs();

	// $(".js-spaces-menu-link").on("click",function(){
	// $(".js-spaces-btn").removeClass("spaces-btn-active");
	// 
	// var buttonClass=$(this).data("button");
	// $(".js-spaces-buttons").find("."+buttonClass).addClass("spaces-btn-active");
	// });
	// $(".js-specific-check").on("click", function(){
	// 	var specificBlock = $(this).data("block");
	// 	if($(this).is(":checked")) {
	// 		$("."+specificBlock).show(200);
	// 	}
	// 	else { 
	// 		$("."+specificBlock).hide(200);
	// 	}
	// })

	$("[name='type-gender']").on("click", function () {
		if ($(this).hasClass("js-specific-check")) {
			$(".js-specific-gender-data").show(200);
		} else {
			$(".js-specific-gender-data").hide(200);
		}
	});

	$("[name='type-age']").on("click", function () {
		if ($(this).hasClass("js-specific-check")) {
			$(".js-specific-age-data").show(200);
		} else {
			$(".js-specific-age-data").hide(200);
		}
	});

	$("[name='type-income']").on("click", function () {
		if ($(this).hasClass("js-specific-check")) {
			$(".js-specific-income-data").show(200);
		} else {
			$(".js-specific-income-data").hide(200);
		}
	});

	$(".specific-location .js-specific-check").on("click", function () {
		if ($(this).is(':checked')) {
			$(".js-specific-location-data").show(200);
		} else {
			$(".js-specific-location-data").hide(200);
		}
	});

	$(".js-location-place, .js-location-add").on("click", function () {
		$(".specific-location .js-specific-check").prop("checked", false);
		$(".js-specific-location-data").hide(200);
	});

	$(".specific-title .js-specific-check").on("click", function () {
		if ($(this).is(':checked')) {
			$(".js-specific-title-data").show(200);
		} else {
			$(".js-specific-title-data").hide(200);
		}
	});

	var windowWidth = $(document).width();

	//jQuery(function() {
	//    jQuery.support.placeholder = false;
	//    test = document.createElement('input');
	//    if('placeholder' in test) jQuery.support.placeholder = true;
	//});


	// close on bod
	$(document).click(function () {
		$(".js-close-body-click").removeClass("is-open");
	});

	$(".js-hslider").slick({
		prevArrow: "<div class='custom-prev'></div>",
		nextArrow: "<div class='custom-next'></div>",
		responsive: [{
			breakpoint: 992,
			settings: "unslick"
		}]

	});

	$(".js-mob-slider").slick({
		prevArrow: "<div class='custom-prev'></div>",
		nextArrow: "<div class='custom-next'></div>",
		responsive: [{
			breakpoint: 5000,
			settings: "unslick"
		}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				infinite: true,
				dots: true,
				arrows: false
			}

		}]

	});
	// header responsive menu


	var responseMenu = $(".js-nav-respons"),
	    headerLeft = $(".js-header-left").clone(true),
	    headerRight = $(".js-header-right").clone(true);
	//closeBtn = $(".js-menu-close");

	responseMenu.prepend(headerLeft);
	responseMenu.append(headerRight);

	$(window).resize(function () {
		var locWindowWidth = $(document).width();
		if (locWindowWidth >= 992) {
			$("body").removeClass("is-hidden");
			$(".js-nav-respons").slideUp(0);

			$(".js-hslider").slick('refresh');
		}
	});

	$(".js-burger").on("click", function () {
		$("body").addClass("is-hidden");
		$(".js-nav-respons").slideDown(300);
	});

	$(".js-burger-close").on("click", function () {
		$("body").removeClass("is-hidden");
		$(".js-nav-respons").slideUp(300);
	});
	// header responsive menu

	// user adm droplist


	$(".js-user-adm").on("click", function (e) {
		e.stopPropagation();
		var locWindowWidth = $(document).width();
		if (locWindowWidth >= 992) {
			var $this = $(this);
			$this.toggleClass("is-open");
			// $this.find(".js-user-droplist").toggleClass("is-open");
		}
	});

	// user adm droplist

	// mob sidebar menu
	$(".js-sb-mob-menu").on("click", function (e) {
		e.stopPropagation();
		var locWindowWidth = $(document).width();
		if (locWindowWidth < 992) {
			var $this = $(this);
			$this.toggleClass("is-open");
			// $this.find(".js-user-droplist").toggleClass("is-open");
		}
	});

	// mob sidebar menu

	// faq tabs
	$("#faq-tabs").tabs();
	// faq tabs

	// faq mobile tab nav
	var faqTabs = $(".js-faq-tabs"),
	    faqNavValue = faqTabs.find(".js-tab-nav li.ui-tabs-active a").attr("data-custom-name"),
	    faqTabNav = faqTabs.find(".js-tab-nav"),
	    faqTabNavBtn = faqTabs.find(".js-tab-nav-btn"),
	    faqNavLink = faqTabs.find(".js-tab-link");

	faqTabNavBtn.html(faqNavValue); // duplication first time

	faqTabNavBtn.on("click", function () {
		var $this = $(this);
		$this.toggleClass("is-open");
		faqTabNav.slideToggle(300);
	});

	if (windowWidth <= 991) {
		faqNavLink.on("click", function () {
			faqNavValue = $(this).attr("data-custom-name");
			faqTabNavBtn.html(faqNavValue);
			faqTabNavBtn.removeClass("is-open");
			faqTabNav.slideUp(0);
		});
	};
	// faq mobile tab nav

	// marketplace tabs
	$(".js-marketplace-tabs").tabs({
		active: 0
	});
	// marketplace tabs

	// mp special view

	$(".js-marketplace-tabs").on("click", ".js-tab-nav-link", function () {
		var $mpSpecView = $(".js-mp-spec-view"),
		    $filter = $(".js-filter");

		if ($(this).hasClass("js-tab-spec-link")) {
			$mpSpecView.removeClass("mp-spec-view--hidden");
			$(this).parent().siblings("li").removeClass("item-full");
			$(this).parent().removeClass("item-full");
			$filter.removeClass("filter--small");
		} else {
			$mpSpecView.addClass("mp-spec-view--hidden");
			$(this).parent().siblings("li").addClass("item-full");
			$(this).parent().addClass("item-full");
			$filter.addClass("filter--small");
		}
	});
	// mp special view

	// faq dropblock
	$(".js-dropblock").on("click", function () {
		var $this = $(this);
		$this.toggleClass("is-open");
		$this.find(".js-dropblock-text").slideToggle(300);
	});
	// faq dropblock

	// add fields
	$(".js-btn-add").on("click", function (e) {
		e.preventDefault();
		var $this = $(this),
		    $inputCopy = $this.prev("input").clone(true);
		$inputCopy.removeClass("js-validate");
		$inputCopy.val("");
		//console.log($inputCopy);
		$this.before($inputCopy);
	});
	// add fields


	// upload image
	$('.js-upload-input').change(function () {

		var $input = $(this)[0],
		    $this = $(this),
		    $previewImg = $this.siblings(".js-upl-preview-img"),
		    $resetBtn = $this.parent().next(".js-btn-reset-upload");

		if ($input.files && $input.files[0]) {
			//if ( input.files[0].type.match('image.*') ) {
			var reader = new FileReader();
			$this.addClass("js-valid-loaded");
			reader.onload = function (e) {
				$previewImg.attr('src', e.target.result).addClass("is-show");
				$resetBtn.addClass("is-show");
			};
			reader.readAsDataURL($input.files[0]);
			//} else console.log('is not image mime type');
		} else {
			$previewImg.attr('src', "#");
			$previewImg.removeClass("is-show");
			$resetBtn.removeClass("is-show");
			$this.removeClass("js-valid-loaded");
		}
	});

	$(".js-btn-reset-upload").on("click", function () {
		var $this = $(this);

		$this.prev("label").find(".js-upl-preview-img").attr("src", "#").removeClass("is-show");
		$this.prev("label").find(".js-upload-input").val("").removeClass("js-valid-loaded");
		$this.removeClass("is-show");
	});
	// upload image

	if ($('.adsnav__link-create').hasClass('is-active')) {
		$('.adsnav_hide').hide();
		$('.title-adm_hide').hide();
		console.log('sdaf');
	} else {
		$('.adsnav_hide').fadeIn(300);
		$('.title-adm_hide').fadeIn(300);
	};

	$('.adsnav__link-create').on("click", function () {
		$('.adsnav_hide').hide();
		$('.title-adm_hide').hide();
	});

	// space listing inline slider
	$(".js-spacel-slider").slick({
		prevArrow: "<div class='slick-prev-custom slick-arrow-custom'>Previous</div>",
		nextArrow: "<div class='slick-next-custom slick-arrow-custom'>Previous</div>"
	});

	$(".js-show-content").on("click", function (e) {
		e.preventDefault();
		var $this = $(this);

		$(".js-hidden-content").slideToggle();
	});

	// stop propagation
	$(".js-stopPropagation").on("click", function (e) {
		e.stopPropagation();
	});

	// profile sliders
	$(".js-profile-slider").slick({
		prevArrow: "<div class='slick-prev-custom slick-arrow-custom'>Previous</div>",
		nextArrow: "<div class='slick-next-custom slick-arrow-custom'>Previous</div>",
		asNavFor: '.js-profile-tumb-slider'
	});
	$(".js-profile-tumb-slider").slick({
		asNavFor: '.js-profile-slider',
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		focusOnSelect: true,
		centerMode: true,
		variableWidth: true
	});
	// profile sliders

	$(".js-inputmask").inputmask();

	//ready
});
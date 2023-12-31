(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/algoliasearch/dist/algoliasearch.umd.js
  var require_algoliasearch_umd = __commonJS({
    "node_modules/algoliasearch/dist/algoliasearch.umd.js"(exports, module) {
      !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).algoliasearch = e();
      }(exports, function() {
        "use strict";
        function t(t2, e2, r2) {
          return e2 in t2 ? Object.defineProperty(t2, e2, { value: r2, enumerable: true, configurable: true, writable: true }) : t2[e2] = r2, t2;
        }
        function e(t2, e2) {
          var r2 = Object.keys(t2);
          if (Object.getOwnPropertySymbols) {
            var n2 = Object.getOwnPropertySymbols(t2);
            e2 && (n2 = n2.filter(function(e3) {
              return Object.getOwnPropertyDescriptor(t2, e3).enumerable;
            })), r2.push.apply(r2, n2);
          }
          return r2;
        }
        function r(r2) {
          for (var n2 = 1; n2 < arguments.length; n2++) {
            var a2 = null != arguments[n2] ? arguments[n2] : {};
            n2 % 2 ? e(Object(a2), true).forEach(function(e2) {
              t(r2, e2, a2[e2]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r2, Object.getOwnPropertyDescriptors(a2)) : e(Object(a2)).forEach(function(t2) {
              Object.defineProperty(r2, t2, Object.getOwnPropertyDescriptor(a2, t2));
            });
          }
          return r2;
        }
        function n(t2, e2) {
          if (null == t2)
            return {};
          var r2, n2, a2 = function(t3, e3) {
            if (null == t3)
              return {};
            var r3, n3, a3 = {}, o3 = Object.keys(t3);
            for (n3 = 0; n3 < o3.length; n3++)
              r3 = o3[n3], e3.indexOf(r3) >= 0 || (a3[r3] = t3[r3]);
            return a3;
          }(t2, e2);
          if (Object.getOwnPropertySymbols) {
            var o2 = Object.getOwnPropertySymbols(t2);
            for (n2 = 0; n2 < o2.length; n2++)
              r2 = o2[n2], e2.indexOf(r2) >= 0 || Object.prototype.propertyIsEnumerable.call(t2, r2) && (a2[r2] = t2[r2]);
          }
          return a2;
        }
        function a(t2, e2) {
          return function(t3) {
            if (Array.isArray(t3))
              return t3;
          }(t2) || function(t3, e3) {
            if (!(Symbol.iterator in Object(t3) || "[object Arguments]" === Object.prototype.toString.call(t3)))
              return;
            var r2 = [], n2 = true, a2 = false, o2 = void 0;
            try {
              for (var i2, u2 = t3[Symbol.iterator](); !(n2 = (i2 = u2.next()).done) && (r2.push(i2.value), !e3 || r2.length !== e3); n2 = true)
                ;
            } catch (t4) {
              a2 = true, o2 = t4;
            } finally {
              try {
                n2 || null == u2.return || u2.return();
              } finally {
                if (a2)
                  throw o2;
              }
            }
            return r2;
          }(t2, e2) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }();
        }
        function o(t2) {
          return function(t3) {
            if (Array.isArray(t3)) {
              for (var e2 = 0, r2 = new Array(t3.length); e2 < t3.length; e2++)
                r2[e2] = t3[e2];
              return r2;
            }
          }(t2) || function(t3) {
            if (Symbol.iterator in Object(t3) || "[object Arguments]" === Object.prototype.toString.call(t3))
              return Array.from(t3);
          }(t2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
          }();
        }
        function i(t2) {
          var e2, r2 = "algoliasearch-client-js-".concat(t2.key), n2 = function() {
            return void 0 === e2 && (e2 = t2.localStorage || window.localStorage), e2;
          }, o2 = function() {
            return JSON.parse(n2().getItem(r2) || "{}");
          };
          return { get: function(t3, e3) {
            var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } };
            return Promise.resolve().then(function() {
              var r4 = JSON.stringify(t3), n3 = o2()[r4];
              return Promise.all([n3 || e3(), void 0 !== n3]);
            }).then(function(t4) {
              var e4 = a(t4, 2), n3 = e4[0], o3 = e4[1];
              return Promise.all([n3, o3 || r3.miss(n3)]);
            }).then(function(t4) {
              return a(t4, 1)[0];
            });
          }, set: function(t3, e3) {
            return Promise.resolve().then(function() {
              var a2 = o2();
              return a2[JSON.stringify(t3)] = e3, n2().setItem(r2, JSON.stringify(a2)), e3;
            });
          }, delete: function(t3) {
            return Promise.resolve().then(function() {
              var e3 = o2();
              delete e3[JSON.stringify(t3)], n2().setItem(r2, JSON.stringify(e3));
            });
          }, clear: function() {
            return Promise.resolve().then(function() {
              n2().removeItem(r2);
            });
          } };
        }
        function u(t2) {
          var e2 = o(t2.caches), r2 = e2.shift();
          return void 0 === r2 ? { get: function(t3, e3) {
            var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } }, n2 = e3();
            return n2.then(function(t4) {
              return Promise.all([t4, r3.miss(t4)]);
            }).then(function(t4) {
              return a(t4, 1)[0];
            });
          }, set: function(t3, e3) {
            return Promise.resolve(e3);
          }, delete: function(t3) {
            return Promise.resolve();
          }, clear: function() {
            return Promise.resolve();
          } } : { get: function(t3, n2) {
            var a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } };
            return r2.get(t3, n2, a2).catch(function() {
              return u({ caches: e2 }).get(t3, n2, a2);
            });
          }, set: function(t3, n2) {
            return r2.set(t3, n2).catch(function() {
              return u({ caches: e2 }).set(t3, n2);
            });
          }, delete: function(t3) {
            return r2.delete(t3).catch(function() {
              return u({ caches: e2 }).delete(t3);
            });
          }, clear: function() {
            return r2.clear().catch(function() {
              return u({ caches: e2 }).clear();
            });
          } };
        }
        function s() {
          var t2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: true }, e2 = {};
          return { get: function(r2, n2) {
            var a2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
              return Promise.resolve();
            } }, o2 = JSON.stringify(r2);
            if (o2 in e2)
              return Promise.resolve(t2.serializable ? JSON.parse(e2[o2]) : e2[o2]);
            var i2 = n2(), u2 = a2 && a2.miss || function() {
              return Promise.resolve();
            };
            return i2.then(function(t3) {
              return u2(t3);
            }).then(function() {
              return i2;
            });
          }, set: function(r2, n2) {
            return e2[JSON.stringify(r2)] = t2.serializable ? JSON.stringify(n2) : n2, Promise.resolve(n2);
          }, delete: function(t3) {
            return delete e2[JSON.stringify(t3)], Promise.resolve();
          }, clear: function() {
            return e2 = {}, Promise.resolve();
          } };
        }
        function c(t2, e2, r2) {
          var n2 = { "x-algolia-api-key": r2, "x-algolia-application-id": e2 };
          return { headers: function() {
            return t2 === m.WithinHeaders ? n2 : {};
          }, queryParameters: function() {
            return t2 === m.WithinQueryParameters ? n2 : {};
          } };
        }
        function f(t2) {
          var e2 = 0;
          return t2(function r2() {
            return e2++, new Promise(function(n2) {
              setTimeout(function() {
                n2(t2(r2));
              }, Math.min(100 * e2, 1e3));
            });
          });
        }
        function d(t2) {
          var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t3, e3) {
            return Promise.resolve();
          };
          return Object.assign(t2, { wait: function(r2) {
            return d(t2.then(function(t3) {
              return Promise.all([e2(t3, r2), t3]);
            }).then(function(t3) {
              return t3[1];
            }));
          } });
        }
        function l(t2) {
          for (var e2 = t2.length - 1; e2 > 0; e2--) {
            var r2 = Math.floor(Math.random() * (e2 + 1)), n2 = t2[e2];
            t2[e2] = t2[r2], t2[r2] = n2;
          }
          return t2;
        }
        function p(t2, e2) {
          return e2 ? (Object.keys(e2).forEach(function(r2) {
            t2[r2] = e2[r2](t2);
          }), t2) : t2;
        }
        function h(t2) {
          for (var e2 = arguments.length, r2 = new Array(e2 > 1 ? e2 - 1 : 0), n2 = 1; n2 < e2; n2++)
            r2[n2 - 1] = arguments[n2];
          var a2 = 0;
          return t2.replace(/%s/g, function() {
            return encodeURIComponent(r2[a2++]);
          });
        }
        var m = { WithinQueryParameters: 0, WithinHeaders: 1 };
        function y(t2, e2) {
          var r2 = t2 || {}, n2 = r2.data || {};
          return Object.keys(r2).forEach(function(t3) {
            -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(t3) && (n2[t3] = r2[t3]);
          }), { data: Object.entries(n2).length > 0 ? n2 : void 0, timeout: r2.timeout || e2, headers: r2.headers || {}, queryParameters: r2.queryParameters || {}, cacheable: r2.cacheable };
        }
        var g = { Read: 1, Write: 2, Any: 3 }, v = 1, b = 2, P = 3;
        function w(t2) {
          var e2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
          return r(r({}, t2), {}, { status: e2, lastUpdate: Date.now() });
        }
        function O(t2) {
          return "string" == typeof t2 ? { protocol: "https", url: t2, accept: g.Any } : { protocol: t2.protocol || "https", url: t2.url, accept: t2.accept || g.Any };
        }
        var I = "DELETE", x = "GET", j = "POST", D = "PUT";
        function q(t2, e2) {
          return Promise.all(e2.map(function(e3) {
            return t2.get(e3, function() {
              return Promise.resolve(w(e3));
            });
          })).then(function(t3) {
            var r2 = t3.filter(function(t4) {
              return function(t5) {
                return t5.status === v || Date.now() - t5.lastUpdate > 12e4;
              }(t4);
            }), n2 = t3.filter(function(t4) {
              return function(t5) {
                return t5.status === P && Date.now() - t5.lastUpdate <= 12e4;
              }(t4);
            }), a2 = [].concat(o(r2), o(n2));
            return { getTimeout: function(t4, e3) {
              return (0 === n2.length && 0 === t4 ? 1 : n2.length + 3 + t4) * e3;
            }, statelessHosts: a2.length > 0 ? a2.map(function(t4) {
              return O(t4);
            }) : e2 };
          });
        }
        function S(t2, e2, n2, a2) {
          var i2 = [], u2 = function(t3, e3) {
            if (t3.method === x || void 0 === t3.data && void 0 === e3.data)
              return;
            var n3 = Array.isArray(t3.data) ? t3.data : r(r({}, t3.data), e3.data);
            return JSON.stringify(n3);
          }(n2, a2), s2 = function(t3, e3) {
            var n3 = r(r({}, t3.headers), e3.headers), a3 = {};
            return Object.keys(n3).forEach(function(t4) {
              var e4 = n3[t4];
              a3[t4.toLowerCase()] = e4;
            }), a3;
          }(t2, a2), c2 = n2.method, f2 = n2.method !== x ? {} : r(r({}, n2.data), a2.data), d2 = r(r(r({ "x-algolia-agent": t2.userAgent.value }, t2.queryParameters), f2), a2.queryParameters), l2 = 0, p2 = function e3(r2, o2) {
            var f3 = r2.pop();
            if (void 0 === f3)
              throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: R(i2) };
            var p3 = { data: u2, headers: s2, method: c2, url: N(f3, n2.path, d2), connectTimeout: o2(l2, t2.timeouts.connect), responseTimeout: o2(l2, a2.timeout) }, h2 = function(t3) {
              var e4 = { request: p3, response: t3, host: f3, triesLeft: r2.length };
              return i2.push(e4), e4;
            }, m2 = { onSuccess: function(t3) {
              return function(t4) {
                try {
                  return JSON.parse(t4.content);
                } catch (e4) {
                  throw function(t5, e5) {
                    return { name: "DeserializationError", message: t5, response: e5 };
                  }(e4.message, t4);
                }
              }(t3);
            }, onRetry: function(n3) {
              var a3 = h2(n3);
              return n3.isTimedOut && l2++, Promise.all([t2.logger.info("Retryable failure", A(a3)), t2.hostsCache.set(f3, w(f3, n3.isTimedOut ? P : b))]).then(function() {
                return e3(r2, o2);
              });
            }, onFail: function(t3) {
              throw h2(t3), function(t4, e4) {
                var r3 = t4.content, n3 = t4.status, a3 = r3;
                try {
                  a3 = JSON.parse(r3).message;
                } catch (t5) {
                }
                return function(t5, e5, r4) {
                  return { name: "ApiError", message: t5, status: e5, transporterStackTrace: r4 };
                }(a3, n3, e4);
              }(t3, R(i2));
            } };
            return t2.requester.send(p3).then(function(t3) {
              return function(t4, e4) {
                return function(t5) {
                  var e5 = t5.status;
                  return t5.isTimedOut || function(t6) {
                    var e6 = t6.isTimedOut, r3 = t6.status;
                    return !e6 && 0 == ~~r3;
                  }(t5) || 2 != ~~(e5 / 100) && 4 != ~~(e5 / 100);
                }(t4) ? e4.onRetry(t4) : 2 == ~~(t4.status / 100) ? e4.onSuccess(t4) : e4.onFail(t4);
              }(t3, m2);
            });
          };
          return q(t2.hostsCache, e2).then(function(t3) {
            return p2(o(t3.statelessHosts).reverse(), t3.getTimeout);
          });
        }
        function k(t2) {
          var e2 = t2.hostsCache, r2 = t2.logger, n2 = t2.requester, o2 = t2.requestsCache, i2 = t2.responsesCache, u2 = t2.timeouts, s2 = t2.userAgent, c2 = t2.hosts, f2 = t2.queryParameters, d2 = { hostsCache: e2, logger: r2, requester: n2, requestsCache: o2, responsesCache: i2, timeouts: u2, userAgent: s2, headers: t2.headers, queryParameters: f2, hosts: c2.map(function(t3) {
            return O(t3);
          }), read: function(t3, e3) {
            var r3 = y(e3, d2.timeouts.read), n3 = function() {
              return S(d2, d2.hosts.filter(function(t4) {
                return 0 != (t4.accept & g.Read);
              }), t3, r3);
            };
            if (true !== (void 0 !== r3.cacheable ? r3.cacheable : t3.cacheable))
              return n3();
            var o3 = { request: t3, mappedRequestOptions: r3, transporter: { queryParameters: d2.queryParameters, headers: d2.headers } };
            return d2.responsesCache.get(o3, function() {
              return d2.requestsCache.get(o3, function() {
                return d2.requestsCache.set(o3, n3()).then(function(t4) {
                  return Promise.all([d2.requestsCache.delete(o3), t4]);
                }, function(t4) {
                  return Promise.all([d2.requestsCache.delete(o3), Promise.reject(t4)]);
                }).then(function(t4) {
                  var e4 = a(t4, 2);
                  e4[0];
                  return e4[1];
                });
              });
            }, { miss: function(t4) {
              return d2.responsesCache.set(o3, t4);
            } });
          }, write: function(t3, e3) {
            return S(d2, d2.hosts.filter(function(t4) {
              return 0 != (t4.accept & g.Write);
            }), t3, y(e3, d2.timeouts.write));
          } };
          return d2;
        }
        function T(t2) {
          var e2 = { value: "Algolia for JavaScript (".concat(t2, ")"), add: function(t3) {
            var r2 = "; ".concat(t3.segment).concat(void 0 !== t3.version ? " (".concat(t3.version, ")") : "");
            return -1 === e2.value.indexOf(r2) && (e2.value = "".concat(e2.value).concat(r2)), e2;
          } };
          return e2;
        }
        function N(t2, e2, r2) {
          var n2 = E(r2), a2 = "".concat(t2.protocol, "://").concat(t2.url, "/").concat("/" === e2.charAt(0) ? e2.substr(1) : e2);
          return n2.length && (a2 += "?".concat(n2)), a2;
        }
        function E(t2) {
          return Object.keys(t2).map(function(e2) {
            return h("%s=%s", e2, (r2 = t2[e2], "[object Object]" === Object.prototype.toString.call(r2) || "[object Array]" === Object.prototype.toString.call(r2) ? JSON.stringify(t2[e2]) : t2[e2]));
            var r2;
          }).join("&");
        }
        function R(t2) {
          return t2.map(function(t3) {
            return A(t3);
          });
        }
        function A(t2) {
          var e2 = t2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
          return r(r({}, t2), {}, { request: r(r({}, t2.request), {}, { headers: r(r({}, t2.request.headers), e2) }) });
        }
        var C = function(t2) {
          return function(e2, r2) {
            return t2.transporter.write({ method: j, path: "2/abtests", data: e2 }, r2);
          };
        }, U = function(t2) {
          return function(e2, r2) {
            return t2.transporter.write({ method: I, path: h("2/abtests/%s", e2) }, r2);
          };
        }, z = function(t2) {
          return function(e2, r2) {
            return t2.transporter.read({ method: x, path: h("2/abtests/%s", e2) }, r2);
          };
        }, J = function(t2) {
          return function(e2) {
            return t2.transporter.read({ method: x, path: "2/abtests" }, e2);
          };
        }, F = function(t2) {
          return function(e2, r2) {
            return t2.transporter.write({ method: j, path: h("2/abtests/%s/stop", e2) }, r2);
          };
        }, H = function(t2) {
          return function(e2) {
            return t2.transporter.read({ method: x, path: "1/strategies/personalization" }, e2);
          };
        }, M = function(t2) {
          return function(e2, r2) {
            return t2.transporter.write({ method: j, path: "1/strategies/personalization", data: e2 }, r2);
          };
        };
        function K(t2) {
          return function e2(r2) {
            return t2.request(r2).then(function(n2) {
              if (void 0 !== t2.batch && t2.batch(n2.hits), !t2.shouldStop(n2))
                return n2.cursor ? e2({ cursor: n2.cursor }) : e2({ page: (r2.page || 0) + 1 });
            });
          }({});
        }
        var W = function(t2) {
          return function(e2, a2) {
            var o2 = a2 || {}, i2 = o2.queryParameters, u2 = n(o2, ["queryParameters"]), s2 = r({ acl: e2 }, void 0 !== i2 ? { queryParameters: i2 } : {});
            return d(t2.transporter.write({ method: j, path: "1/keys", data: s2 }, u2), function(e3, r2) {
              return f(function(n2) {
                return tt(t2)(e3.key, r2).catch(function(t3) {
                  if (404 !== t3.status)
                    throw t3;
                  return n2();
                });
              });
            });
          };
        }, B = function(t2) {
          return function(e2, r2, n2) {
            var a2 = y(n2);
            return a2.queryParameters["X-Algolia-User-ID"] = e2, t2.transporter.write({ method: j, path: "1/clusters/mapping", data: { cluster: r2 } }, a2);
          };
        }, Q = function(t2) {
          return function(e2, r2, n2) {
            return t2.transporter.write({ method: j, path: "1/clusters/mapping/batch", data: { users: e2, cluster: r2 } }, n2);
          };
        }, G = function(t2) {
          return function(e2, r2) {
            return d(t2.transporter.write({ method: j, path: h("/1/dictionaries/%s/batch", e2), data: { clearExistingDictionaryEntries: true, requests: { action: "addEntry", body: [] } } }, r2), function(e3, r3) {
              return jt(t2)(e3.taskID, r3);
            });
          };
        }, L = function(t2) {
          return function(e2, r2, n2) {
            return d(t2.transporter.write({ method: j, path: h("1/indexes/%s/operation", e2), data: { operation: "copy", destination: r2 } }, n2), function(r3, n3) {
              return ut(t2)(e2, { methods: { waitTask: de } }).waitTask(r3.taskID, n3);
            });
          };
        }, V = function(t2) {
          return function(e2, n2, a2) {
            return L(t2)(e2, n2, r(r({}, a2), {}, { scope: [pe.Rules] }));
          };
        }, _ = function(t2) {
          return function(e2, n2, a2) {
            return L(t2)(e2, n2, r(r({}, a2), {}, { scope: [pe.Settings] }));
          };
        }, X = function(t2) {
          return function(e2, n2, a2) {
            return L(t2)(e2, n2, r(r({}, a2), {}, { scope: [pe.Synonyms] }));
          };
        }, Y = function(t2) {
          return function(e2, r2) {
            return e2.method === x ? t2.transporter.read(e2, r2) : t2.transporter.write(e2, r2);
          };
        }, Z = function(t2) {
          return function(e2, r2) {
            return d(t2.transporter.write({ method: I, path: h("1/keys/%s", e2) }, r2), function(r3, n2) {
              return f(function(r4) {
                return tt(t2)(e2, n2).then(r4).catch(function(t3) {
                  if (404 !== t3.status)
                    throw t3;
                });
              });
            });
          };
        }, $ = function(t2) {
          return function(e2, r2, n2) {
            var a2 = r2.map(function(t3) {
              return { action: "deleteEntry", body: { objectID: t3 } };
            });
            return d(t2.transporter.write({ method: j, path: h("/1/dictionaries/%s/batch", e2), data: { clearExistingDictionaryEntries: false, requests: a2 } }, n2), function(e3, r3) {
              return jt(t2)(e3.taskID, r3);
            });
          };
        }, tt = function(t2) {
          return function(e2, r2) {
            return t2.transporter.read({ method: x, path: h("1/keys/%s", e2) }, r2);
          };
        }, et = function(t2) {
          return function(e2, r2) {
            return t2.transporter.read({ method: x, path: h("1/task/%s", e2.toString()) }, r2);
          };
        }, rt = function(t2) {
          return function(e2) {
            return t2.transporter.read({ method: x, path: "/1/dictionaries/*/settings" }, e2);
          };
        }, nt = function(t2) {
          return function(e2) {
            return t2.transporter.read({ method: x, path: "1/logs" }, e2);
          };
        }, at = function(t2) {
          return function(e2) {
            return t2.transporter.read({ method: x, path: "1/clusters/mapping/top" }, e2);
          };
        }, ot = function(t2) {
          return function(e2, r2) {
            return t2.transporter.read({ method: x, path: h("1/clusters/mapping/%s", e2) }, r2);
          };
        }, it = function(t2) {
          return function(e2) {
            var r2 = e2 || {}, a2 = r2.retrieveMappings, o2 = n(r2, ["retrieveMappings"]);
            return true === a2 && (o2.getClusters = true), t2.transporter.read({ method: x, path: "1/clusters/mapping/pending" }, o2);
          };
        }, ut = function(t2) {
          return function(e2) {
            var r2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n2 = { transporter: t2.transporter, appId: t2.appId, indexName: e2 };
            return p(n2, r2.methods);
          };
        }, st = function(t2) {
          return function(e2) {
            return t2.transporter.read({ method: x, path: "1/keys" }, e2);
          };
        }, ct = function(t2) {
          return function(e2) {
            return t2.transporter.read({ method: x, path: "1/clusters" }, e2);
          };
        }, ft = function(t2) {
          return function(e2) {
            return t2.transporter.read({ method: x, path: "1/indexes" }, e2);
          };
        }, dt = function(t2) {
          return function(e2) {
            return t2.transporter.read({ method: x, path: "1/clusters/mapping" }, e2);
          };
        }, lt = function(t2) {
          return function(e2, r2, n2) {
            return d(t2.transporter.write({ method: j, path: h("1/indexes/%s/operation", e2), data: { operation: "move", destination: r2 } }, n2), function(r3, n3) {
              return ut(t2)(e2, { methods: { waitTask: de } }).waitTask(r3.taskID, n3);
            });
          };
        }, pt = function(t2) {
          return function(e2, r2) {
            return d(t2.transporter.write({ method: j, path: "1/indexes/*/batch", data: { requests: e2 } }, r2), function(e3, r3) {
              return Promise.all(Object.keys(e3.taskID).map(function(n2) {
                return ut(t2)(n2, { methods: { waitTask: de } }).waitTask(e3.taskID[n2], r3);
              }));
            });
          };
        }, ht = function(t2) {
          return function(e2, r2) {
            return t2.transporter.read({ method: j, path: "1/indexes/*/objects", data: { requests: e2 } }, r2);
          };
        }, mt = function(t2) {
          return function(e2, n2) {
            var a2 = e2.map(function(t3) {
              return r(r({}, t3), {}, { params: E(t3.params || {}) });
            });
            return t2.transporter.read({ method: j, path: "1/indexes/*/queries", data: { requests: a2 }, cacheable: true }, n2);
          };
        }, yt = function(t2) {
          return function(e2, a2) {
            return Promise.all(e2.map(function(e3) {
              var o2 = e3.params, i2 = o2.facetName, u2 = o2.facetQuery, s2 = n(o2, ["facetName", "facetQuery"]);
              return ut(t2)(e3.indexName, { methods: { searchForFacetValues: ue } }).searchForFacetValues(i2, u2, r(r({}, a2), s2));
            }));
          };
        }, gt = function(t2) {
          return function(e2, r2) {
            var n2 = y(r2);
            return n2.queryParameters["X-Algolia-User-ID"] = e2, t2.transporter.write({ method: I, path: "1/clusters/mapping" }, n2);
          };
        }, vt = function(t2) {
          return function(e2, r2, n2) {
            var a2 = r2.map(function(t3) {
              return { action: "addEntry", body: t3 };
            });
            return d(t2.transporter.write({ method: j, path: h("/1/dictionaries/%s/batch", e2), data: { clearExistingDictionaryEntries: true, requests: a2 } }, n2), function(e3, r3) {
              return jt(t2)(e3.taskID, r3);
            });
          };
        }, bt = function(t2) {
          return function(e2, r2) {
            return d(t2.transporter.write({ method: j, path: h("1/keys/%s/restore", e2) }, r2), function(r3, n2) {
              return f(function(r4) {
                return tt(t2)(e2, n2).catch(function(t3) {
                  if (404 !== t3.status)
                    throw t3;
                  return r4();
                });
              });
            });
          };
        }, Pt = function(t2) {
          return function(e2, r2, n2) {
            var a2 = r2.map(function(t3) {
              return { action: "addEntry", body: t3 };
            });
            return d(t2.transporter.write({ method: j, path: h("/1/dictionaries/%s/batch", e2), data: { clearExistingDictionaryEntries: false, requests: a2 } }, n2), function(e3, r3) {
              return jt(t2)(e3.taskID, r3);
            });
          };
        }, wt = function(t2) {
          return function(e2, r2, n2) {
            return t2.transporter.read({ method: j, path: h("/1/dictionaries/%s/search", e2), data: { query: r2 }, cacheable: true }, n2);
          };
        }, Ot = function(t2) {
          return function(e2, r2) {
            return t2.transporter.read({ method: j, path: "1/clusters/mapping/search", data: { query: e2 } }, r2);
          };
        }, It = function(t2) {
          return function(e2, r2) {
            return d(t2.transporter.write({ method: D, path: "/1/dictionaries/*/settings", data: e2 }, r2), function(e3, r3) {
              return jt(t2)(e3.taskID, r3);
            });
          };
        }, xt = function(t2) {
          return function(e2, r2) {
            var a2 = Object.assign({}, r2), o2 = r2 || {}, i2 = o2.queryParameters, u2 = n(o2, ["queryParameters"]), s2 = i2 ? { queryParameters: i2 } : {}, c2 = ["acl", "indexes", "referers", "restrictSources", "queryParameters", "description", "maxQueriesPerIPPerHour", "maxHitsPerQuery"];
            return d(t2.transporter.write({ method: D, path: h("1/keys/%s", e2), data: s2 }, u2), function(r3, n2) {
              return f(function(r4) {
                return tt(t2)(e2, n2).then(function(t3) {
                  return function(t4) {
                    return Object.keys(a2).filter(function(t5) {
                      return -1 !== c2.indexOf(t5);
                    }).every(function(e3) {
                      if (Array.isArray(t4[e3]) && Array.isArray(a2[e3])) {
                        var r5 = t4[e3];
                        return r5.length === a2[e3].length && r5.every(function(t5, r6) {
                          return t5 === a2[e3][r6];
                        });
                      }
                      return t4[e3] === a2[e3];
                    });
                  }(t3) ? Promise.resolve() : r4();
                });
              });
            });
          };
        }, jt = function(t2) {
          return function(e2, r2) {
            return f(function(n2) {
              return et(t2)(e2, r2).then(function(t3) {
                return "published" !== t3.status ? n2() : void 0;
              });
            });
          };
        }, Dt = function(t2) {
          return function(e2, r2) {
            return d(t2.transporter.write({ method: j, path: h("1/indexes/%s/batch", t2.indexName), data: { requests: e2 } }, r2), function(e3, r3) {
              return de(t2)(e3.taskID, r3);
            });
          };
        }, qt = function(t2) {
          return function(e2) {
            return K(r(r({ shouldStop: function(t3) {
              return void 0 === t3.cursor;
            } }, e2), {}, { request: function(r2) {
              return t2.transporter.read({ method: j, path: h("1/indexes/%s/browse", t2.indexName), data: r2 }, e2);
            } }));
          };
        }, St = function(t2) {
          return function(e2) {
            var n2 = r({ hitsPerPage: 1e3 }, e2);
            return K(r(r({ shouldStop: function(t3) {
              return t3.hits.length < n2.hitsPerPage;
            } }, n2), {}, { request: function(e3) {
              return se(t2)("", r(r({}, n2), e3)).then(function(t3) {
                return r(r({}, t3), {}, { hits: t3.hits.map(function(t4) {
                  return delete t4._highlightResult, t4;
                }) });
              });
            } }));
          };
        }, kt = function(t2) {
          return function(e2) {
            var n2 = r({ hitsPerPage: 1e3 }, e2);
            return K(r(r({ shouldStop: function(t3) {
              return t3.hits.length < n2.hitsPerPage;
            } }, n2), {}, { request: function(e3) {
              return ce(t2)("", r(r({}, n2), e3)).then(function(t3) {
                return r(r({}, t3), {}, { hits: t3.hits.map(function(t4) {
                  return delete t4._highlightResult, t4;
                }) });
              });
            } }));
          };
        }, Tt = function(t2) {
          return function(e2, r2, a2) {
            var o2 = a2 || {}, i2 = o2.batchSize, u2 = n(o2, ["batchSize"]), s2 = { taskIDs: [], objectIDs: [] };
            return d(function n2() {
              var a3, o3 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, c2 = [];
              for (a3 = o3; a3 < e2.length && (c2.push(e2[a3]), c2.length !== (i2 || 1e3)); a3++)
                ;
              return 0 === c2.length ? Promise.resolve(s2) : Dt(t2)(c2.map(function(t3) {
                return { action: r2, body: t3 };
              }), u2).then(function(t3) {
                return s2.objectIDs = s2.objectIDs.concat(t3.objectIDs), s2.taskIDs.push(t3.taskID), a3++, n2(a3);
              });
            }(), function(e3, r3) {
              return Promise.all(e3.taskIDs.map(function(e4) {
                return de(t2)(e4, r3);
              }));
            });
          };
        }, Nt = function(t2) {
          return function(e2) {
            return d(t2.transporter.write({ method: j, path: h("1/indexes/%s/clear", t2.indexName) }, e2), function(e3, r2) {
              return de(t2)(e3.taskID, r2);
            });
          };
        }, Et = function(t2) {
          return function(e2) {
            var r2 = e2 || {}, a2 = r2.forwardToReplicas, o2 = y(n(r2, ["forwardToReplicas"]));
            return a2 && (o2.queryParameters.forwardToReplicas = 1), d(t2.transporter.write({ method: j, path: h("1/indexes/%s/rules/clear", t2.indexName) }, o2), function(e3, r3) {
              return de(t2)(e3.taskID, r3);
            });
          };
        }, Rt = function(t2) {
          return function(e2) {
            var r2 = e2 || {}, a2 = r2.forwardToReplicas, o2 = y(n(r2, ["forwardToReplicas"]));
            return a2 && (o2.queryParameters.forwardToReplicas = 1), d(t2.transporter.write({ method: j, path: h("1/indexes/%s/synonyms/clear", t2.indexName) }, o2), function(e3, r3) {
              return de(t2)(e3.taskID, r3);
            });
          };
        }, At = function(t2) {
          return function(e2, r2) {
            return d(t2.transporter.write({ method: j, path: h("1/indexes/%s/deleteByQuery", t2.indexName), data: e2 }, r2), function(e3, r3) {
              return de(t2)(e3.taskID, r3);
            });
          };
        }, Ct = function(t2) {
          return function(e2) {
            return d(t2.transporter.write({ method: I, path: h("1/indexes/%s", t2.indexName) }, e2), function(e3, r2) {
              return de(t2)(e3.taskID, r2);
            });
          };
        }, Ut = function(t2) {
          return function(e2, r2) {
            return d(zt(t2)([e2], r2).then(function(t3) {
              return { taskID: t3.taskIDs[0] };
            }), function(e3, r3) {
              return de(t2)(e3.taskID, r3);
            });
          };
        }, zt = function(t2) {
          return function(e2, r2) {
            var n2 = e2.map(function(t3) {
              return { objectID: t3 };
            });
            return Tt(t2)(n2, le.DeleteObject, r2);
          };
        }, Jt = function(t2) {
          return function(e2, r2) {
            var a2 = r2 || {}, o2 = a2.forwardToReplicas, i2 = y(n(a2, ["forwardToReplicas"]));
            return o2 && (i2.queryParameters.forwardToReplicas = 1), d(t2.transporter.write({ method: I, path: h("1/indexes/%s/rules/%s", t2.indexName, e2) }, i2), function(e3, r3) {
              return de(t2)(e3.taskID, r3);
            });
          };
        }, Ft = function(t2) {
          return function(e2, r2) {
            var a2 = r2 || {}, o2 = a2.forwardToReplicas, i2 = y(n(a2, ["forwardToReplicas"]));
            return o2 && (i2.queryParameters.forwardToReplicas = 1), d(t2.transporter.write({ method: I, path: h("1/indexes/%s/synonyms/%s", t2.indexName, e2) }, i2), function(e3, r3) {
              return de(t2)(e3.taskID, r3);
            });
          };
        }, Ht = function(t2) {
          return function(e2) {
            return Lt(t2)(e2).then(function() {
              return true;
            }).catch(function(t3) {
              if (404 !== t3.status)
                throw t3;
              return false;
            });
          };
        }, Mt = function(t2) {
          return function(e2, r2, n2) {
            return t2.transporter.read({ method: j, path: h("1/answers/%s/prediction", t2.indexName), data: { query: e2, queryLanguages: r2 }, cacheable: true }, n2);
          };
        }, Kt = function(t2) {
          return function(e2, o2) {
            var i2 = o2 || {}, u2 = i2.query, s2 = i2.paginate, c2 = n(i2, ["query", "paginate"]), f2 = 0;
            return function n2() {
              return ie(t2)(u2 || "", r(r({}, c2), {}, { page: f2 })).then(function(t3) {
                for (var r2 = 0, o3 = Object.entries(t3.hits); r2 < o3.length; r2++) {
                  var i3 = a(o3[r2], 2), u3 = i3[0], c3 = i3[1];
                  if (e2(c3))
                    return { object: c3, position: parseInt(u3, 10), page: f2 };
                }
                if (f2++, false === s2 || f2 >= t3.nbPages)
                  throw { name: "ObjectNotFoundError", message: "Object not found." };
                return n2();
              });
            }();
          };
        }, Wt = function(t2) {
          return function(e2, r2) {
            return t2.transporter.read({ method: x, path: h("1/indexes/%s/%s", t2.indexName, e2) }, r2);
          };
        }, Bt = function() {
          return function(t2, e2) {
            for (var r2 = 0, n2 = Object.entries(t2.hits); r2 < n2.length; r2++) {
              var o2 = a(n2[r2], 2), i2 = o2[0];
              if (o2[1].objectID === e2)
                return parseInt(i2, 10);
            }
            return -1;
          };
        }, Qt = function(t2) {
          return function(e2, a2) {
            var o2 = a2 || {}, i2 = o2.attributesToRetrieve, u2 = n(o2, ["attributesToRetrieve"]), s2 = e2.map(function(e3) {
              return r({ indexName: t2.indexName, objectID: e3 }, i2 ? { attributesToRetrieve: i2 } : {});
            });
            return t2.transporter.read({ method: j, path: "1/indexes/*/objects", data: { requests: s2 } }, u2);
          };
        }, Gt = function(t2) {
          return function(e2, r2) {
            return t2.transporter.read({ method: x, path: h("1/indexes/%s/rules/%s", t2.indexName, e2) }, r2);
          };
        }, Lt = function(t2) {
          return function(e2) {
            return t2.transporter.read({ method: x, path: h("1/indexes/%s/settings", t2.indexName), data: { getVersion: 2 } }, e2);
          };
        }, Vt = function(t2) {
          return function(e2, r2) {
            return t2.transporter.read({ method: x, path: h("1/indexes/%s/synonyms/%s", t2.indexName, e2) }, r2);
          };
        }, _t = function(t2) {
          return function(e2, r2) {
            return d(Xt(t2)([e2], r2).then(function(t3) {
              return { objectID: t3.objectIDs[0], taskID: t3.taskIDs[0] };
            }), function(e3, r3) {
              return de(t2)(e3.taskID, r3);
            });
          };
        }, Xt = function(t2) {
          return function(e2, r2) {
            var a2 = r2 || {}, o2 = a2.createIfNotExists, i2 = n(a2, ["createIfNotExists"]), u2 = o2 ? le.PartialUpdateObject : le.PartialUpdateObjectNoCreate;
            return Tt(t2)(e2, u2, i2);
          };
        }, Yt = function(t2) {
          return function(e2, i2) {
            var u2 = i2 || {}, s2 = u2.safe, c2 = u2.autoGenerateObjectIDIfNotExist, f2 = u2.batchSize, l2 = n(u2, ["safe", "autoGenerateObjectIDIfNotExist", "batchSize"]), p2 = function(e3, r2, n2, a2) {
              return d(t2.transporter.write({ method: j, path: h("1/indexes/%s/operation", e3), data: { operation: n2, destination: r2 } }, a2), function(e4, r3) {
                return de(t2)(e4.taskID, r3);
              });
            }, m2 = Math.random().toString(36).substring(7), y2 = "".concat(t2.indexName, "_tmp_").concat(m2), g2 = ee({ appId: t2.appId, transporter: t2.transporter, indexName: y2 }), v2 = [], b2 = p2(t2.indexName, y2, "copy", r(r({}, l2), {}, { scope: ["settings", "synonyms", "rules"] }));
            return v2.push(b2), d((s2 ? b2.wait(l2) : b2).then(function() {
              var t3 = g2(e2, r(r({}, l2), {}, { autoGenerateObjectIDIfNotExist: c2, batchSize: f2 }));
              return v2.push(t3), s2 ? t3.wait(l2) : t3;
            }).then(function() {
              var e3 = p2(y2, t2.indexName, "move", l2);
              return v2.push(e3), s2 ? e3.wait(l2) : e3;
            }).then(function() {
              return Promise.all(v2);
            }).then(function(t3) {
              var e3 = a(t3, 3), r2 = e3[0], n2 = e3[1], i3 = e3[2];
              return { objectIDs: n2.objectIDs, taskIDs: [r2.taskID].concat(o(n2.taskIDs), [i3.taskID]) };
            }), function(t3, e3) {
              return Promise.all(v2.map(function(t4) {
                return t4.wait(e3);
              }));
            });
          };
        }, Zt = function(t2) {
          return function(e2, n2) {
            return ne(t2)(e2, r(r({}, n2), {}, { clearExistingRules: true }));
          };
        }, $t = function(t2) {
          return function(e2, n2) {
            return oe(t2)(e2, r(r({}, n2), {}, { clearExistingSynonyms: true }));
          };
        }, te = function(t2) {
          return function(e2, r2) {
            return d(ee(t2)([e2], r2).then(function(t3) {
              return { objectID: t3.objectIDs[0], taskID: t3.taskIDs[0] };
            }), function(e3, r3) {
              return de(t2)(e3.taskID, r3);
            });
          };
        }, ee = function(t2) {
          return function(e2, r2) {
            var a2 = r2 || {}, o2 = a2.autoGenerateObjectIDIfNotExist, i2 = n(a2, ["autoGenerateObjectIDIfNotExist"]), u2 = o2 ? le.AddObject : le.UpdateObject;
            if (u2 === le.UpdateObject) {
              var s2 = true, c2 = false, f2 = void 0;
              try {
                for (var l2, p2 = e2[Symbol.iterator](); !(s2 = (l2 = p2.next()).done); s2 = true) {
                  if (void 0 === l2.value.objectID)
                    return d(Promise.reject({ name: "MissingObjectIDError", message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option." }));
                }
              } catch (t3) {
                c2 = true, f2 = t3;
              } finally {
                try {
                  s2 || null == p2.return || p2.return();
                } finally {
                  if (c2)
                    throw f2;
                }
              }
            }
            return Tt(t2)(e2, u2, i2);
          };
        }, re = function(t2) {
          return function(e2, r2) {
            return ne(t2)([e2], r2);
          };
        }, ne = function(t2) {
          return function(e2, r2) {
            var a2 = r2 || {}, o2 = a2.forwardToReplicas, i2 = a2.clearExistingRules, u2 = y(n(a2, ["forwardToReplicas", "clearExistingRules"]));
            return o2 && (u2.queryParameters.forwardToReplicas = 1), i2 && (u2.queryParameters.clearExistingRules = 1), d(t2.transporter.write({ method: j, path: h("1/indexes/%s/rules/batch", t2.indexName), data: e2 }, u2), function(e3, r3) {
              return de(t2)(e3.taskID, r3);
            });
          };
        }, ae = function(t2) {
          return function(e2, r2) {
            return oe(t2)([e2], r2);
          };
        }, oe = function(t2) {
          return function(e2, r2) {
            var a2 = r2 || {}, o2 = a2.forwardToReplicas, i2 = a2.clearExistingSynonyms, u2 = a2.replaceExistingSynonyms, s2 = y(n(a2, ["forwardToReplicas", "clearExistingSynonyms", "replaceExistingSynonyms"]));
            return o2 && (s2.queryParameters.forwardToReplicas = 1), (u2 || i2) && (s2.queryParameters.replaceExistingSynonyms = 1), d(t2.transporter.write({ method: j, path: h("1/indexes/%s/synonyms/batch", t2.indexName), data: e2 }, s2), function(e3, r3) {
              return de(t2)(e3.taskID, r3);
            });
          };
        }, ie = function(t2) {
          return function(e2, r2) {
            return t2.transporter.read({ method: j, path: h("1/indexes/%s/query", t2.indexName), data: { query: e2 }, cacheable: true }, r2);
          };
        }, ue = function(t2) {
          return function(e2, r2, n2) {
            return t2.transporter.read({ method: j, path: h("1/indexes/%s/facets/%s/query", t2.indexName, e2), data: { facetQuery: r2 }, cacheable: true }, n2);
          };
        }, se = function(t2) {
          return function(e2, r2) {
            return t2.transporter.read({ method: j, path: h("1/indexes/%s/rules/search", t2.indexName), data: { query: e2 } }, r2);
          };
        }, ce = function(t2) {
          return function(e2, r2) {
            return t2.transporter.read({ method: j, path: h("1/indexes/%s/synonyms/search", t2.indexName), data: { query: e2 } }, r2);
          };
        }, fe = function(t2) {
          return function(e2, r2) {
            var a2 = r2 || {}, o2 = a2.forwardToReplicas, i2 = y(n(a2, ["forwardToReplicas"]));
            return o2 && (i2.queryParameters.forwardToReplicas = 1), d(t2.transporter.write({ method: D, path: h("1/indexes/%s/settings", t2.indexName), data: e2 }, i2), function(e3, r3) {
              return de(t2)(e3.taskID, r3);
            });
          };
        }, de = function(t2) {
          return function(e2, r2) {
            return f(function(n2) {
              return function(t3) {
                return function(e3, r3) {
                  return t3.transporter.read({ method: x, path: h("1/indexes/%s/task/%s", t3.indexName, e3.toString()) }, r3);
                };
              }(t2)(e2, r2).then(function(t3) {
                return "published" !== t3.status ? n2() : void 0;
              });
            });
          };
        }, le = { AddObject: "addObject", UpdateObject: "updateObject", PartialUpdateObject: "partialUpdateObject", PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate", DeleteObject: "deleteObject", DeleteIndex: "delete", ClearIndex: "clear" }, pe = { Settings: "settings", Synonyms: "synonyms", Rules: "rules" }, he = 1, me = 2, ye = 3;
        function ge(t2, e2, n2) {
          var a2, o2 = { appId: t2, apiKey: e2, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(t3) {
            return new Promise(function(e3) {
              var r2 = new XMLHttpRequest();
              r2.open(t3.method, t3.url, true), Object.keys(t3.headers).forEach(function(e4) {
                return r2.setRequestHeader(e4, t3.headers[e4]);
              });
              var n3, a3 = function(t4, n4) {
                return setTimeout(function() {
                  r2.abort(), e3({ status: 0, content: n4, isTimedOut: true });
                }, 1e3 * t4);
              }, o3 = a3(t3.connectTimeout, "Connection timeout");
              r2.onreadystatechange = function() {
                r2.readyState > r2.OPENED && void 0 === n3 && (clearTimeout(o3), n3 = a3(t3.responseTimeout, "Socket timeout"));
              }, r2.onerror = function() {
                0 === r2.status && (clearTimeout(o3), clearTimeout(n3), e3({ content: r2.responseText || "Network request failed", status: r2.status, isTimedOut: false }));
              }, r2.onload = function() {
                clearTimeout(o3), clearTimeout(n3), e3({ content: r2.responseText, status: r2.status, isTimedOut: false });
              }, r2.send(t3.data);
            });
          } }, logger: (a2 = ye, { debug: function(t3, e3) {
            return he >= a2 && console.debug(t3, e3), Promise.resolve();
          }, info: function(t3, e3) {
            return me >= a2 && console.info(t3, e3), Promise.resolve();
          }, error: function(t3, e3) {
            return console.error(t3, e3), Promise.resolve();
          } }), responsesCache: s(), requestsCache: s({ serializable: false }), hostsCache: u({ caches: [i({ key: "".concat("4.17.2", "-").concat(t2) }), s()] }), userAgent: T("4.17.2").add({ segment: "Browser" }) }, f2 = r(r({}, o2), n2), d2 = function() {
            return function(t3) {
              return function(t4) {
                var e3 = t4.region || "us", n3 = c(m.WithinHeaders, t4.appId, t4.apiKey), a3 = k(r(r({ hosts: [{ url: "personalization.".concat(e3, ".algolia.com") }] }, t4), {}, { headers: r(r(r({}, n3.headers()), { "content-type": "application/json" }), t4.headers), queryParameters: r(r({}, n3.queryParameters()), t4.queryParameters) }));
                return p({ appId: t4.appId, transporter: a3 }, t4.methods);
              }(r(r(r({}, o2), t3), {}, { methods: { getPersonalizationStrategy: H, setPersonalizationStrategy: M } }));
            };
          };
          return function(t3) {
            var e3 = t3.appId, n3 = c(void 0 !== t3.authMode ? t3.authMode : m.WithinHeaders, e3, t3.apiKey), a3 = k(r(r({ hosts: [{ url: "".concat(e3, "-dsn.algolia.net"), accept: g.Read }, { url: "".concat(e3, ".algolia.net"), accept: g.Write }].concat(l([{ url: "".concat(e3, "-1.algolianet.com") }, { url: "".concat(e3, "-2.algolianet.com") }, { url: "".concat(e3, "-3.algolianet.com") }])) }, t3), {}, { headers: r(r(r({}, n3.headers()), { "content-type": "application/x-www-form-urlencoded" }), t3.headers), queryParameters: r(r({}, n3.queryParameters()), t3.queryParameters) }));
            return p({ transporter: a3, appId: e3, addAlgoliaAgent: function(t4, e4) {
              a3.userAgent.add({ segment: t4, version: e4 });
            }, clearCache: function() {
              return Promise.all([a3.requestsCache.clear(), a3.responsesCache.clear()]).then(function() {
              });
            } }, t3.methods);
          }(r(r({}, f2), {}, { methods: { search: mt, searchForFacetValues: yt, multipleBatch: pt, multipleGetObjects: ht, multipleQueries: mt, copyIndex: L, copySettings: _, copySynonyms: X, copyRules: V, moveIndex: lt, listIndices: ft, getLogs: nt, listClusters: ct, multipleSearchForFacetValues: yt, getApiKey: tt, addApiKey: W, listApiKeys: st, updateApiKey: xt, deleteApiKey: Z, restoreApiKey: bt, assignUserID: B, assignUserIDs: Q, getUserID: ot, searchUserIDs: Ot, listUserIDs: dt, getTopUserIDs: at, removeUserID: gt, hasPendingMappings: it, clearDictionaryEntries: G, deleteDictionaryEntries: $, getDictionarySettings: rt, getAppTask: et, replaceDictionaryEntries: vt, saveDictionaryEntries: Pt, searchDictionaryEntries: wt, setDictionarySettings: It, waitAppTask: jt, customRequest: Y, initIndex: function(t3) {
            return function(e3) {
              return ut(t3)(e3, { methods: { batch: Dt, delete: Ct, findAnswers: Mt, getObject: Wt, getObjects: Qt, saveObject: te, saveObjects: ee, search: ie, searchForFacetValues: ue, waitTask: de, setSettings: fe, getSettings: Lt, partialUpdateObject: _t, partialUpdateObjects: Xt, deleteObject: Ut, deleteObjects: zt, deleteBy: At, clearObjects: Nt, browseObjects: qt, getObjectPosition: Bt, findObject: Kt, exists: Ht, saveSynonym: ae, saveSynonyms: oe, getSynonym: Vt, searchSynonyms: ce, browseSynonyms: kt, deleteSynonym: Ft, clearSynonyms: Rt, replaceAllObjects: Yt, replaceAllSynonyms: $t, searchRules: se, getRule: Gt, deleteRule: Jt, saveRule: re, saveRules: ne, replaceAllRules: Zt, browseRules: St, clearRules: Et } });
            };
          }, initAnalytics: function() {
            return function(t3) {
              return function(t4) {
                var e3 = t4.region || "us", n3 = c(m.WithinHeaders, t4.appId, t4.apiKey), a3 = k(r(r({ hosts: [{ url: "analytics.".concat(e3, ".algolia.com") }] }, t4), {}, { headers: r(r(r({}, n3.headers()), { "content-type": "application/json" }), t4.headers), queryParameters: r(r({}, n3.queryParameters()), t4.queryParameters) }));
                return p({ appId: t4.appId, transporter: a3 }, t4.methods);
              }(r(r(r({}, o2), t3), {}, { methods: { addABTest: C, getABTest: z, getABTests: J, stopABTest: F, deleteABTest: U } }));
            };
          }, initPersonalization: d2, initRecommendation: function() {
            return function(t3) {
              return f2.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."), d2()(t3);
            };
          } } }));
        }
        return ge.version = "4.17.2", ge;
      });
    }
  });

  // ns-hugo:/Users/taracharter/Documents/Projects/det-mlde/themes/hpe-pach-emdash/assets/js/search/groupedHitsWidget.js
  function groupedHitsWidget({ container, attribute }) {
    return {
      render({ results }) {
        const groupedHits = results.hits.reduce((accumulator, currentItem) => {
          const key = currentItem[attribute];
          if (!accumulator[key]) {
            accumulator[key] = [];
          }
          accumulator[key].push(currentItem);
          return accumulator;
        }, {});
        const hitsContainer = document.querySelector(container);
        hitsContainer.innerHTML = "";
        for (const group in groupedHits) {
          const groupTitle = document.createElement("h2");
          groupTitle.classList.add("hpe-bg-gradient", "mb-3", "p-3", "rounded-1");
          groupTitle.textContent = group;
          hitsContainer.appendChild(groupTitle);
          const hitsList = document.createElement("ul");
          groupedHits[group].forEach((hit) => {
            const hitElement = document.createElement("li");
            hitElement.innerHTML = `
            <a href="${hit.relURI}" class="card c-move-l">
            <div class="c-sp-1">
              <h3>${hit.title}</h3>
              <p>${hit.description}</p>
            </div>
          </a>
            `;
            hitsList.appendChild(hitElement);
          });
          hitsContainer.appendChild(hitsList);
        }
      },
      dispose() {
        const hitsContainer = document.querySelector(container);
        hitsContainer.innerHTML = "";
      }
    };
  }

  // ns-hugo:/Users/taracharter/Documents/Projects/det-mlde/themes/hpe-pach-emdash/assets/js/search/refinementTemplate.js
  function refinementTemplate(refinement) {
    return `
        <div class="py-1" style="cursor: pointer;">
        <input type="checkbox" id="${refinement.label}" name="${refinement.label}" value="${refinement.label}" ${refinement.isRefined ? "checked" : ""}>
        <label for="${refinement.label}">${refinement.label} <span class="black xs rounded-1 sp-1 outlined-white">${refinement.count} </span> </label>
        </div>
        `;
  }

  // ns-hugo:/Users/taracharter/Documents/Projects/det-mlde/themes/hpe-pach-emdash/assets/js/search/configureIndex.js
  var import_algoliasearch = __toESM(require_algoliasearch_umd());
  var client = (0, import_algoliasearch.default)(
    "RUV2F528SR",
    "1f21e218181a4f87c5496cd574a88c70"
  );
  var index = client.initIndex("hpe-latest");

  // <stdin>
  var indexName = document.getElementById("activeVersion")?.getAttribute("data-algolia") || "hpe-latest";
  var darkModeColor = localStorage.getItem("theme-dark-mode") === "true" ? "black" : "white";
  function handleSearch(helper) {
    const searchResultsContainer = document.getElementById("searchResultsContainer");
    const searchBox = document.querySelector(".ais-SearchBox-input");
    searchResultsContainer.classList.add(darkModeColor);
    searchResultsContainer.style.display = helper.state.query ? "block" : "none";
    document.addEventListener("keydown", (event) => {
      if (event.key === "/") {
        searchBox.focus();
        event.preventDefault();
      }
    });
  }
  var search = instantsearch({
    indexName,
    searchClient: client,
    searchFunction(helper) {
      handleSearch(helper);
      if (helper.state.query) {
        helper.search();
      }
    }
  });
  var widgets = [
    groupedHitsWidget({
      container: "#searchPageHits",
      attribute: "parent"
    }),
    instantsearch.widgets.searchBox({
      container: "#main-searchbox",
      placeholder: "Search articles",
      autofocus: false,
      templates: {
        submit: "",
        reset: "",
        loadingIndicator: ""
      },
      cssClasses: {
        form: ["spread"],
        submit: ["is-hidden"],
        reset: ["is-hidden"],
        input: ["sp-1", "inherit-color", "meow"]
      }
    }),
    instantsearch.widgets.stats({
      container: "#stats",
      templates: {
        text({ nbHits, nbPages, processingTimeMS }) {
          return `
          \u26A1\uFE0F ${nbHits} results found across ${nbPages} pages in ${processingTimeMS}ms. Docs version: ${indexName}.
        `;
        }
      }
    }),
    instantsearch.widgets.refinementList({
      container: "#categories",
      attribute: "tags",
      autoHideContainer: false,
      templates: {
        header: "Tags",
        item: refinementTemplate
      },
      cssClasses: {
        root: ["sticky", "pt-5"]
      }
    }),
    instantsearch.widgets.pagination({
      container: "#pagination"
    })
  ];
  widgets.forEach((widget) => search.addWidget(widget));
  search.start();
})();
/*! Bundled license information:

algoliasearch/dist/algoliasearch.umd.js:
  (*! algoliasearch.umd.js | 4.17.2 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript *)
*/

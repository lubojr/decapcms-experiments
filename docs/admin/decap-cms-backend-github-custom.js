var $o = Object.defineProperty;
var Uo = (r, e, t) => e in r ? $o(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var _e = (r, e, t) => (Uo(r, typeof e != "symbol" ? e + "" : e, t), t);
import Mt from "react";
import { APIError as pe, unsentRequest as zi, requestWithBackoff as Bo, getAllResponses as Qo, generateContentKey as Vo, parseContentKey as Qn, localForage as Sr, CMS_BRANCH_PREFIX as we, EditorialWorkflowError as hr, statusToLabel as bt, isCMSLabel as at, branchFromContentKey as se, labelToStatus as Go, readFileMetadata as Ko, basename as Or, contentKeyFromBranch as Hi, PreviewState as Vn, throwOnConflictingBranches as Yi, DEFAULT_PR_BODY as Tr, MERGE_COMMIT_MESSAGE as Wo, readFile as zo, Cursor as Ho, asyncLock as Yo, entriesByFolder as Gn, CURSOR_COMPATIBILITY_SYMBOL as Jo, entriesByFiles as Kn, getMediaAsBlob as Wn, blobToFileObj as zn, getBlobSHA as Xo, getMediaDisplayURL as Zo, runWithLock as Et, unpublishedEntries as es, getPreviewStatus as ts, filterByExtension as Hn } from "decap-cms-lib-util";
import ve from "prop-types";
import Hr from "@emotion/styled";
import { NetlifyAuthenticator as rs } from "decap-cms-lib-auth";
import { AuthenticationPage as ns, Icon as is } from "decap-cms-ui-default";
import { trim as Ji, trimStart as Lt, last as Yn, initial as as, result as os, partial as ss } from "lodash";
var wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ht(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var kr = { exports: {} }, Je = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jn;
function us() {
  if (Jn)
    return Je;
  Jn = 1;
  var r = Mt, e = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, c) {
    var l, h = {}, p = null, m = null;
    c !== void 0 && (p = "" + c), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (l in u)
      n.call(u, l) && !a.hasOwnProperty(l) && (h[l] = u[l]);
    if (s && s.defaultProps)
      for (l in u = s.defaultProps, u)
        h[l] === void 0 && (h[l] = u[l]);
    return { $$typeof: e, type: s, key: p, ref: m, props: h, _owner: i.current };
  }
  return Je.Fragment = t, Je.jsx = o, Je.jsxs = o, Je;
}
var Xe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xn;
function cs() {
  return Xn || (Xn = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Mt, e = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), l = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), y = Symbol.iterator, b = "@@iterator";
    function w(f) {
      if (f === null || typeof f != "object")
        return null;
      var v = y && f[y] || f[b];
      return typeof v == "function" ? v : null;
    }
    var T = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(f) {
      {
        for (var v = arguments.length, S = new Array(v > 1 ? v - 1 : 0), P = 1; P < v; P++)
          S[P - 1] = arguments[P];
        x("error", f, S);
      }
    }
    function x(f, v, S) {
      {
        var P = T.ReactDebugCurrentFrame, q = P.getStackAddendum();
        q !== "" && (v += "%s", S = S.concat([q]));
        var U = S.map(function(A) {
          return String(A);
        });
        U.unshift("Warning: " + v), Function.prototype.apply.call(console[f], console, U);
      }
    }
    var k = !1, C = !1, j = !1, M = !1, L = !1, I;
    I = Symbol.for("react.module.reference");
    function J(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === n || f === a || L || f === i || f === c || f === l || M || f === m || k || C || j || typeof f == "object" && f !== null && (f.$$typeof === p || f.$$typeof === h || f.$$typeof === o || f.$$typeof === s || f.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === I || f.getModuleId !== void 0));
    }
    function Oe(f, v, S) {
      var P = f.displayName;
      if (P)
        return P;
      var q = v.displayName || v.name || "";
      return q !== "" ? S + "(" + q + ")" : S;
    }
    function X(f) {
      return f.displayName || "Context";
    }
    function $(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case c:
          return "Suspense";
        case l:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case s:
            var v = f;
            return X(v) + ".Consumer";
          case o:
            var S = f;
            return X(S._context) + ".Provider";
          case u:
            return Oe(f, f.render, "ForwardRef");
          case h:
            var P = f.displayName || null;
            return P !== null ? P : $(f.type) || "Memo";
          case p: {
            var q = f, U = q._payload, A = q._init;
            try {
              return $(A(U));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Te = Object.assign, ze = 0, wn, Rn, Sn, On, Tn, kn, Nn;
    function Pn() {
    }
    Pn.__reactDisabledLog = !0;
    function ho() {
      {
        if (ze === 0) {
          wn = console.log, Rn = console.info, Sn = console.warn, On = console.error, Tn = console.group, kn = console.groupCollapsed, Nn = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: Pn,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        ze++;
      }
    }
    function po() {
      {
        if (ze--, ze === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Te({}, f, {
              value: wn
            }),
            info: Te({}, f, {
              value: Rn
            }),
            warn: Te({}, f, {
              value: Sn
            }),
            error: Te({}, f, {
              value: On
            }),
            group: Te({}, f, {
              value: Tn
            }),
            groupCollapsed: Te({}, f, {
              value: kn
            }),
            groupEnd: Te({}, f, {
              value: Nn
            })
          });
        }
        ze < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var nr = T.ReactCurrentDispatcher, ir;
    function mt(f, v, S) {
      {
        if (ir === void 0)
          try {
            throw Error();
          } catch (q) {
            var P = q.stack.trim().match(/\n( *(at )?)/);
            ir = P && P[1] || "";
          }
        return `
` + ir + f;
      }
    }
    var ar = !1, vt;
    {
      var mo = typeof WeakMap == "function" ? WeakMap : Map;
      vt = new mo();
    }
    function Cn(f, v) {
      if (!f || ar)
        return "";
      {
        var S = vt.get(f);
        if (S !== void 0)
          return S;
      }
      var P;
      ar = !0;
      var q = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var U;
      U = nr.current, nr.current = null, ho();
      try {
        if (v) {
          var A = function() {
            throw Error();
          };
          if (Object.defineProperty(A.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(A, []);
            } catch (Z) {
              P = Z;
            }
            Reflect.construct(f, [], A);
          } else {
            try {
              A.call();
            } catch (Z) {
              P = Z;
            }
            f.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Z) {
            P = Z;
          }
          f();
        }
      } catch (Z) {
        if (Z && P && typeof Z.stack == "string") {
          for (var D = Z.stack.split(`
`), H = P.stack.split(`
`), V = D.length - 1, G = H.length - 1; V >= 1 && G >= 0 && D[V] !== H[G]; )
            G--;
          for (; V >= 1 && G >= 0; V--, G--)
            if (D[V] !== H[G]) {
              if (V !== 1 || G !== 1)
                do
                  if (V--, G--, G < 0 || D[V] !== H[G]) {
                    var ne = `
` + D[V].replace(" at new ", " at ");
                    return f.displayName && ne.includes("<anonymous>") && (ne = ne.replace("<anonymous>", f.displayName)), typeof f == "function" && vt.set(f, ne), ne;
                  }
                while (V >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        ar = !1, nr.current = U, po(), Error.prepareStackTrace = q;
      }
      var Ae = f ? f.displayName || f.name : "", ke = Ae ? mt(Ae) : "";
      return typeof f == "function" && vt.set(f, ke), ke;
    }
    function vo(f, v, S) {
      return Cn(f, !1);
    }
    function yo(f) {
      var v = f.prototype;
      return !!(v && v.isReactComponent);
    }
    function yt(f, v, S) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return Cn(f, yo(f));
      if (typeof f == "string")
        return mt(f);
      switch (f) {
        case c:
          return mt("Suspense");
        case l:
          return mt("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case u:
            return vo(f.render);
          case h:
            return yt(f.type, v, S);
          case p: {
            var P = f, q = P._payload, U = P._init;
            try {
              return yt(U(q), v, S);
            } catch {
            }
          }
        }
      return "";
    }
    var He = Object.prototype.hasOwnProperty, xn = {}, Dn = T.ReactDebugCurrentFrame;
    function gt(f) {
      if (f) {
        var v = f._owner, S = yt(f.type, f._source, v ? v.type : null);
        Dn.setExtraStackFrame(S);
      } else
        Dn.setExtraStackFrame(null);
    }
    function go(f, v, S, P, q) {
      {
        var U = Function.call.bind(He);
        for (var A in f)
          if (U(f, A)) {
            var D = void 0;
            try {
              if (typeof f[A] != "function") {
                var H = Error((P || "React class") + ": " + S + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw H.name = "Invariant Violation", H;
              }
              D = f[A](v, A, P, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (V) {
              D = V;
            }
            D && !(D instanceof Error) && (gt(q), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", P || "React class", S, A, typeof D), gt(null)), D instanceof Error && !(D.message in xn) && (xn[D.message] = !0, gt(q), R("Failed %s type: %s", S, D.message), gt(null));
          }
      }
    }
    var bo = Array.isArray;
    function or(f) {
      return bo(f);
    }
    function Eo(f) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, S = v && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return S;
      }
    }
    function wo(f) {
      try {
        return In(f), !1;
      } catch {
        return !0;
      }
    }
    function In(f) {
      return "" + f;
    }
    function An(f) {
      if (wo(f))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Eo(f)), In(f);
    }
    var Ye = T.ReactCurrentOwner, Ro = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _n, Fn, sr;
    sr = {};
    function So(f) {
      if (He.call(f, "ref")) {
        var v = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function Oo(f) {
      if (He.call(f, "key")) {
        var v = Object.getOwnPropertyDescriptor(f, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function To(f, v) {
      if (typeof f.ref == "string" && Ye.current && v && Ye.current.stateNode !== v) {
        var S = $(Ye.current.type);
        sr[S] || (R('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $(Ye.current.type), f.ref), sr[S] = !0);
      }
    }
    function ko(f, v) {
      {
        var S = function() {
          _n || (_n = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        S.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function No(f, v) {
      {
        var S = function() {
          Fn || (Fn = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        S.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var Po = function(f, v, S, P, q, U, A) {
      var D = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: f,
        key: v,
        ref: S,
        props: A,
        // Record the component responsible for creating this element.
        _owner: U
      };
      return D._store = {}, Object.defineProperty(D._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(D, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: P
      }), Object.defineProperty(D, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: q
      }), Object.freeze && (Object.freeze(D.props), Object.freeze(D)), D;
    };
    function Co(f, v, S, P, q) {
      {
        var U, A = {}, D = null, H = null;
        S !== void 0 && (An(S), D = "" + S), Oo(v) && (An(v.key), D = "" + v.key), So(v) && (H = v.ref, To(v, q));
        for (U in v)
          He.call(v, U) && !Ro.hasOwnProperty(U) && (A[U] = v[U]);
        if (f && f.defaultProps) {
          var V = f.defaultProps;
          for (U in V)
            A[U] === void 0 && (A[U] = V[U]);
        }
        if (D || H) {
          var G = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          D && ko(A, G), H && No(A, G);
        }
        return Po(f, D, H, q, P, Ye.current, A);
      }
    }
    var ur = T.ReactCurrentOwner, qn = T.ReactDebugCurrentFrame;
    function Ie(f) {
      if (f) {
        var v = f._owner, S = yt(f.type, f._source, v ? v.type : null);
        qn.setExtraStackFrame(S);
      } else
        qn.setExtraStackFrame(null);
    }
    var cr;
    cr = !1;
    function lr(f) {
      return typeof f == "object" && f !== null && f.$$typeof === e;
    }
    function Mn() {
      {
        if (ur.current) {
          var f = $(ur.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function xo(f) {
      return "";
    }
    var Ln = {};
    function Do(f) {
      {
        var v = Mn();
        if (!v) {
          var S = typeof f == "string" ? f : f.displayName || f.name;
          S && (v = `

Check the top-level render call using <` + S + ">.");
        }
        return v;
      }
    }
    function jn(f, v) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var S = Do(v);
        if (Ln[S])
          return;
        Ln[S] = !0;
        var P = "";
        f && f._owner && f._owner !== ur.current && (P = " It was passed a child from " + $(f._owner.type) + "."), Ie(f), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, P), Ie(null);
      }
    }
    function $n(f, v) {
      {
        if (typeof f != "object")
          return;
        if (or(f))
          for (var S = 0; S < f.length; S++) {
            var P = f[S];
            lr(P) && jn(P, v);
          }
        else if (lr(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var q = w(f);
          if (typeof q == "function" && q !== f.entries)
            for (var U = q.call(f), A; !(A = U.next()).done; )
              lr(A.value) && jn(A.value, v);
        }
      }
    }
    function Io(f) {
      {
        var v = f.type;
        if (v == null || typeof v == "string")
          return;
        var S;
        if (typeof v == "function")
          S = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === h))
          S = v.propTypes;
        else
          return;
        if (S) {
          var P = $(v);
          go(S, f.props, "prop", P, f);
        } else if (v.PropTypes !== void 0 && !cr) {
          cr = !0;
          var q = $(v);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", q || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ao(f) {
      {
        for (var v = Object.keys(f.props), S = 0; S < v.length; S++) {
          var P = v[S];
          if (P !== "children" && P !== "key") {
            Ie(f), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", P), Ie(null);
            break;
          }
        }
        f.ref !== null && (Ie(f), R("Invalid attribute `ref` supplied to `React.Fragment`."), Ie(null));
      }
    }
    var Un = {};
    function Bn(f, v, S, P, q, U) {
      {
        var A = J(f);
        if (!A) {
          var D = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (D += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var H = xo();
          H ? D += H : D += Mn();
          var V;
          f === null ? V = "null" : or(f) ? V = "array" : f !== void 0 && f.$$typeof === e ? (V = "<" + ($(f.type) || "Unknown") + " />", D = " Did you accidentally export a JSX literal instead of a component?") : V = typeof f, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", V, D);
        }
        var G = Co(f, v, S, q, U);
        if (G == null)
          return G;
        if (A) {
          var ne = v.children;
          if (ne !== void 0)
            if (P)
              if (or(ne)) {
                for (var Ae = 0; Ae < ne.length; Ae++)
                  $n(ne[Ae], f);
                Object.freeze && Object.freeze(ne);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              $n(ne, f);
        }
        if (He.call(v, "key")) {
          var ke = $(f), Z = Object.keys(v).filter(function(jo) {
            return jo !== "key";
          }), fr = Z.length > 0 ? "{key: someKey, " + Z.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Un[ke + fr]) {
            var Lo = Z.length > 0 ? "{" + Z.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, fr, ke, Lo, ke), Un[ke + fr] = !0;
          }
        }
        return f === n ? Ao(G) : Io(G), G;
      }
    }
    function _o(f, v, S) {
      return Bn(f, v, S, !0);
    }
    function Fo(f, v, S) {
      return Bn(f, v, S, !1);
    }
    var qo = Fo, Mo = _o;
    Xe.Fragment = n, Xe.jsx = qo, Xe.jsxs = Mo;
  }()), Xe;
}
process.env.NODE_ENV === "production" ? kr.exports = us() : kr.exports = cs();
var he = kr.exports, Xi = { exports: {} };
(function(r, e) {
  (function(t) {
    var n = function(a) {
      setTimeout(a, 0);
    };
    typeof process < "u" && process && typeof process.nextTick == "function" && (n = process.nextTick);
    function i(a) {
      var o = {
        capacity: a || 1,
        current: 0,
        queue: [],
        firstHere: !1,
        take: function() {
          if (o.firstHere === !1) {
            o.current++, o.firstHere = !0;
            var s = 1;
          } else
            var s = 0;
          var u = { n: 1 };
          typeof arguments[0] == "function" ? u.task = arguments[0] : u.n = arguments[0], arguments.length >= 2 && (typeof arguments[1] == "function" ? u.task = arguments[1] : u.n = arguments[1]);
          var c = u.task;
          if (u.task = function() {
            c(o.leave);
          }, o.current + u.n - s > o.capacity)
            return s === 1 && (o.current--, o.firstHere = !1), o.queue.push(u);
          o.current += u.n - s, u.task(o.leave), s === 1 && (o.firstHere = !1);
        },
        leave: function(s) {
          if (s = s || 1, o.current -= s, !o.queue.length) {
            if (o.current < 0)
              throw new Error("leave called too many times.");
            return;
          }
          var u = o.queue[0];
          u.n + o.current > o.capacity || (o.queue.shift(), o.current += u.n, n(u.task));
        },
        available: function(s) {
          return s = s || 1, o.current + s <= o.capacity;
        }
      };
      return o;
    }
    r.exports = i;
  })();
})(Xi);
var ls = Xi.exports;
const Nr = /* @__PURE__ */ Ht(ls);
var fs = typeof wt == "object" && wt && wt.Object === Object && wt, hs = fs, ps = hs, ds = typeof self == "object" && self && self.Object === Object && self, ms = ps || ds || Function("return this")(), vs = ms, ys = vs, gs = ys.Symbol, Yr = gs;
function bs(r, e) {
  for (var t = -1, n = r == null ? 0 : r.length, i = Array(n); ++t < n; )
    i[t] = e(r[t], t, r);
  return i;
}
var Es = bs, ws = Array.isArray, Rs = ws, Zn = Yr, Zi = Object.prototype, Ss = Zi.hasOwnProperty, Os = Zi.toString, Ze = Zn ? Zn.toStringTag : void 0;
function Ts(r) {
  var e = Ss.call(r, Ze), t = r[Ze];
  try {
    r[Ze] = void 0;
    var n = !0;
  } catch {
  }
  var i = Os.call(r);
  return n && (e ? r[Ze] = t : delete r[Ze]), i;
}
var ks = Ts, Ns = Object.prototype, Ps = Ns.toString;
function Cs(r) {
  return Ps.call(r);
}
var xs = Cs, ei = Yr, Ds = ks, Is = xs, As = "[object Null]", _s = "[object Undefined]", ti = ei ? ei.toStringTag : void 0;
function Fs(r) {
  return r == null ? r === void 0 ? _s : As : ti && ti in Object(r) ? Ds(r) : Is(r);
}
var qs = Fs;
function Ms(r) {
  return r != null && typeof r == "object";
}
var Ls = Ms, js = qs, $s = Ls, Us = "[object Symbol]";
function Bs(r) {
  return typeof r == "symbol" || $s(r) && js(r) == Us;
}
var Qs = Bs, ri = Yr, Vs = Es, Gs = Rs, Ks = Qs, Ws = 1 / 0, ni = ri ? ri.prototype : void 0, ii = ni ? ni.toString : void 0;
function ea(r) {
  if (typeof r == "string")
    return r;
  if (Gs(r))
    return Vs(r, ea) + "";
  if (Ks(r))
    return ii ? ii.call(r) : "";
  var e = r + "";
  return e == "0" && 1 / r == -Ws ? "-0" : e;
}
var ta = ea;
function zs(r, e, t) {
  var n = -1, i = r.length;
  e < 0 && (e = -e > i ? 0 : i + e), t = t > i ? i : t, t < 0 && (t += i), i = e > t ? 0 : t - e >>> 0, e >>>= 0;
  for (var a = Array(i); ++n < i; )
    a[n] = r[n + e];
  return a;
}
var Hs = zs, Ys = Hs;
function Js(r, e, t) {
  var n = r.length;
  return t = t === void 0 ? n : t, !e && t >= n ? r : Ys(r, e, t);
}
var Xs = Js;
function Zs(r, e, t, n) {
  for (var i = r.length, a = t + (n ? 1 : -1); n ? a-- : ++a < i; )
    if (e(r[a], a, r))
      return a;
  return -1;
}
var eu = Zs;
function tu(r) {
  return r !== r;
}
var ru = tu;
function nu(r, e, t) {
  for (var n = t - 1, i = r.length; ++n < i; )
    if (r[n] === e)
      return n;
  return -1;
}
var iu = nu, au = eu, ou = ru, su = iu;
function uu(r, e, t) {
  return e === e ? su(r, e, t) : au(r, ou, t);
}
var cu = uu, lu = cu;
function fu(r, e) {
  for (var t = -1, n = r.length; ++t < n && lu(e, r[t], 0) > -1; )
    ;
  return t;
}
var hu = fu;
function pu(r) {
  return r.split("");
}
var du = pu, mu = "\\ud800-\\udfff", vu = "\\u0300-\\u036f", yu = "\\ufe20-\\ufe2f", gu = "\\u20d0-\\u20ff", bu = vu + yu + gu, Eu = "\\ufe0e\\ufe0f", wu = "\\u200d", Ru = RegExp("[" + wu + mu + bu + Eu + "]");
function Su(r) {
  return Ru.test(r);
}
var Ou = Su, ra = "\\ud800-\\udfff", Tu = "\\u0300-\\u036f", ku = "\\ufe20-\\ufe2f", Nu = "\\u20d0-\\u20ff", Pu = Tu + ku + Nu, Cu = "\\ufe0e\\ufe0f", xu = "[" + ra + "]", Pr = "[" + Pu + "]", Cr = "\\ud83c[\\udffb-\\udfff]", Du = "(?:" + Pr + "|" + Cr + ")", na = "[^" + ra + "]", ia = "(?:\\ud83c[\\udde6-\\uddff]){2}", aa = "[\\ud800-\\udbff][\\udc00-\\udfff]", Iu = "\\u200d", oa = Du + "?", sa = "[" + Cu + "]?", Au = "(?:" + Iu + "(?:" + [na, ia, aa].join("|") + ")" + sa + oa + ")*", _u = sa + oa + Au, Fu = "(?:" + [na + Pr + "?", Pr, ia, aa, xu].join("|") + ")", qu = RegExp(Cr + "(?=" + Cr + ")|" + Fu + _u, "g");
function Mu(r) {
  return r.match(qu) || [];
}
var Lu = Mu, ju = du, $u = Ou, Uu = Lu;
function Bu(r) {
  return $u(r) ? Uu(r) : ju(r);
}
var Qu = Bu, Vu = ta;
function Gu(r) {
  return r == null ? "" : Vu(r);
}
var Ku = Gu, Wu = ta, zu = Xs, Hu = hu, ai = Qu, Yu = Ku, Ju = /^\s+/;
function Xu(r, e, t) {
  if (r = Yu(r), r && (t || e === void 0))
    return r.replace(Ju, "");
  if (!r || !(e = Wu(e)))
    return r;
  var n = ai(r), i = Hu(n, ai(e));
  return zu(n, i).join("");
}
var Zu = Xu;
const ec = /* @__PURE__ */ Ht(Zu);
var tc = /* @__PURE__ */ function() {
  function r(e, t) {
    for (var n = 0; n < t.length; n++) {
      var i = t[n];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, t, n) {
    return t && r(e.prototype, t), n && r(e, n), e;
  };
}(), rc = nc(["", ""], ["", ""]);
function nc(r, e) {
  return Object.freeze(Object.defineProperties(r, { raw: { value: Object.freeze(e) } }));
}
function ic(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
var ee = function() {
  function r() {
    for (var e = this, t = arguments.length, n = Array(t), i = 0; i < t; i++)
      n[i] = arguments[i];
    return ic(this, r), this.tag = function(a) {
      for (var o = arguments.length, s = Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++)
        s[u - 1] = arguments[u];
      return typeof a == "function" ? e.interimTag.bind(e, a) : typeof a == "string" ? e.transformEndResult(a) : (a = a.map(e.transformString.bind(e)), e.transformEndResult(a.reduce(e.processSubstitutions.bind(e, s))));
    }, n.length > 0 && Array.isArray(n[0]) && (n = n[0]), this.transformers = n.map(function(a) {
      return typeof a == "function" ? a() : a;
    }), this.tag;
  }
  return tc(r, [{
    key: "interimTag",
    /**
     * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
     * template tag to our own template tag.
     * @param  {Function}        nextTag          - the received template tag
     * @param  {Array<String>}   template         - the template to process
     * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
     * @return {*}                                - the final processed value
     */
    value: function(t, n) {
      for (var i = arguments.length, a = Array(i > 2 ? i - 2 : 0), o = 2; o < i; o++)
        a[o - 2] = arguments[o];
      return this.tag(rc, t.apply(void 0, [n].concat(a)));
    }
    /**
     * Performs bulk processing on the tagged template, transforming each substitution and then
     * concatenating the resulting values into a string.
     * @param  {Array<*>} substitutions - an array of all remaining substitutions present in this template
     * @param  {String}   resultSoFar   - this iteration's result string so far
     * @param  {String}   remainingPart - the template chunk after the current substitution
     * @return {String}                 - the result of joining this iteration's processed substitution with the result
     */
  }, {
    key: "processSubstitutions",
    value: function(t, n, i) {
      var a = this.transformSubstitution(t.shift(), n);
      return "".concat(n, a, i);
    }
    /**
     * Iterate through each transformer, applying the transformer's `onString` method to the template
     * strings before all substitutions are processed.
     * @param {String}  str - The input string
     * @return {String}     - The final results of processing each transformer
     */
  }, {
    key: "transformString",
    value: function(t) {
      var n = function(a, o) {
        return o.onString ? o.onString(a) : a;
      };
      return this.transformers.reduce(n, t);
    }
    /**
     * When a substitution is encountered, iterates through each transformer and applies the transformer's
     * `onSubstitution` method to the substitution.
     * @param  {*}      substitution - The current substitution
     * @param  {String} resultSoFar  - The result up to and excluding this substitution.
     * @return {*}                   - The final result of applying all substitution transformations.
     */
  }, {
    key: "transformSubstitution",
    value: function(t, n) {
      var i = function(o, s) {
        return s.onSubstitution ? s.onSubstitution(o, n) : o;
      };
      return this.transformers.reduce(i, t);
    }
    /**
     * Iterates through each transformer, applying the transformer's `onEndResult` method to the
     * template literal after all substitutions have finished processing.
     * @param  {String} endResult - The processed template, just before it is returned from the tag
     * @return {String}           - The final results of processing each transformer
     */
  }, {
    key: "transformEndResult",
    value: function(t) {
      var n = function(a, o) {
        return o.onEndResult ? o.onEndResult(a) : a;
      };
      return this.transformers.reduce(n, t);
    }
  }]), r;
}(), te = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return {
    onEndResult: function(n) {
      if (e === "")
        return n.trim();
      if (e = e.toLowerCase(), e === "start" || e === "left")
        return n.replace(/^\s*/, "");
      if (e === "end" || e === "right")
        return n.replace(/\s*$/, "");
      throw new Error("Side not supported: " + e);
    }
  };
};
function ac(r) {
  if (Array.isArray(r)) {
    for (var e = 0, t = Array(r.length); e < r.length; e++)
      t[e] = r[e];
    return t;
  } else
    return Array.from(r);
}
var Re = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "initial";
  return {
    onEndResult: function(n) {
      if (e === "initial") {
        var i = n.match(/^[^\S\n]*(?=\S)/gm), a = i && Math.min.apply(Math, ac(i.map(function(s) {
          return s.length;
        })));
        if (a) {
          var o = new RegExp("^.{" + a + "}", "gm");
          return n.replace(o, "");
        }
        return n;
      }
      if (e === "all")
        return n.replace(/^[^\S\n]+/gm, "");
      throw new Error("Unknown type: " + e);
    }
  };
}, Ge = function(e, t) {
  return {
    onEndResult: function(i) {
      if (e == null || t == null)
        throw new Error("replaceResultTransformer requires at least 2 arguments.");
      return i.replace(e, t);
    }
  };
}, Fe = function(e, t) {
  return {
    onSubstitution: function(i, a) {
      if (e == null || t == null)
        throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");
      return i == null ? i : i.toString().replace(e, t);
    }
  };
}, oc = {
  separator: "",
  conjunction: "",
  serial: !1
}, fe = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : oc;
  return {
    onSubstitution: function(n, i) {
      if (Array.isArray(n)) {
        var a = n.length, o = e.separator, s = e.conjunction, u = e.serial, c = i.match(/(\n?[^\S\n]+)$/);
        if (c ? n = n.join(o + c[1]) : n = n.join(o + " "), s && a > 1) {
          var l = n.lastIndexOf(o);
          n = n.slice(0, l) + (u ? o : "") + " " + s + n.slice(l + 1);
        }
      }
      return n;
    }
  };
}, ua = function(e) {
  return {
    onSubstitution: function(n, i) {
      return typeof n == "string" && n.includes(e) && (n = n.split(e)), n;
    }
  };
}, oi = function(e) {
  return e != null && !Number.isNaN(e) && typeof e != "boolean";
}, sc = function() {
  return {
    onSubstitution: function(t) {
      return Array.isArray(t) ? t.filter(oi) : oi(t) ? t : "";
    }
  };
};
new ee(fe({ separator: "," }), Re, te);
new ee(fe({ separator: ",", conjunction: "and" }), Re, te);
new ee(fe({ separator: ",", conjunction: "or" }), Re, te);
new ee(ua(`
`), sc, fe, Re, te);
new ee(ua(`
`), fe, Re, te, Fe(/&/g, "&amp;"), Fe(/</g, "&lt;"), Fe(/>/g, "&gt;"), Fe(/"/g, "&quot;"), Fe(/'/g, "&#x27;"), Fe(/`/g, "&#x60;"));
var uc = new ee(Ge(/(?:\n(?:\s*))+/g, " "), te);
const xr = uc;
new ee(Ge(/(?:\n\s*)/g, ""), te);
new ee(fe({ separator: "," }), Ge(/(?:\s+)/g, " "), te);
new ee(fe({ separator: ",", conjunction: "or" }), Ge(/(?:\s+)/g, " "), te);
new ee(fe({ separator: ",", conjunction: "and" }), Ge(/(?:\s+)/g, " "), te);
new ee(fe, Re, te);
new ee(fe, Ge(/(?:\s+)/g, " "), te);
var cc = new ee(Re, te);
new ee(Re("all"), te);
const lc = Hr(is)`
  margin-right: 18px;
`, fc = Hr.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  flex-grow: 0.2;
`, hc = Hr.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
  align-items: center;
`;
class Jr extends Mt.Component {
  constructor() {
    super(...arguments);
    _e(this, "state", {});
    _e(this, "getPermissionToFork", () => new Promise((t, n) => {
      this.setState({
        requestingFork: !0,
        approveFork: () => {
          this.setState({ requestingFork: !1 }), t();
        },
        refuseFork: () => {
          this.setState({ requestingFork: !1 }), n();
        }
      });
    }));
    _e(this, "handleLogin", (t) => {
      t.preventDefault();
      const n = {
        base_url: this.props.base_url,
        site_id: document.location.host.split(":")[0] === "localhost" ? "demo.decapcms.org" : this.props.siteId,
        auth_endpoint: this.props.authEndpoint
      }, i = new rs(n), { open_authoring: a = !1, auth_scope: o = "" } = this.props.config.backend, s = o || (a ? "public_repo" : "repo");
      i.authenticate({ provider: "github", scope: s }, (u, c) => {
        if (u) {
          this.setState({ loginError: u.toString() });
          return;
        }
        if (a)
          return this.loginWithOpenAuthoring(c).then(() => this.props.onLogin(c));
        this.props.onLogin(c);
      });
    });
    _e(this, "renderLoginButton", () => {
      const { inProgress: t, t: n } = this.props;
      return t || this.state.findingFork ? n("auth.loggingIn") : /* @__PURE__ */ he.jsxs(Mt.Fragment, { children: [
        /* @__PURE__ */ he.jsx(lc, { type: "github" }),
        n("auth.loginWithGitHub")
      ] });
    });
  }
  loginWithOpenAuthoring(t) {
    const { backend: n } = this.props;
    return this.setState({ findingFork: !0 }), n.authenticateWithFork({ userData: t, getPermissionToFork: this.getPermissionToFork }).catch((i) => {
      throw this.setState({ findingFork: !1 }), console.error(i), i;
    });
  }
  getAuthenticationPageRenderArgs() {
    const { requestingFork: t } = this.state;
    if (t) {
      const { approveFork: n, refuseFork: i } = this.state;
      return {
        renderPageContent: ({ LoginButton: a, TextButton: o, showAbortButton: s }) => /* @__PURE__ */ he.jsxs(fc, { children: [
          /* @__PURE__ */ he.jsx("p", { children: "Open Authoring is enabled: we need to use a fork on your github account. (If a fork already exists, we'll use that.)" }),
          /* @__PURE__ */ he.jsxs(hc, { children: [
            /* @__PURE__ */ he.jsx(a, { onClick: n, children: "Fork the repo" }),
            s && /* @__PURE__ */ he.jsx(o, { onClick: i, children: "Don't fork the repo" })
          ] })
        ] })
      };
    }
    return {
      renderButtonContent: this.renderLoginButton
    };
  }
  render() {
    const { inProgress: t, config: n, t: i } = this.props, { loginError: a, requestingFork: o, findingFork: s } = this.state;
    return /* @__PURE__ */ he.jsx(
      ns,
      {
        onLogin: this.handleLogin,
        loginDisabled: t || s || o,
        loginErrorMessage: a,
        logoUrl: n.logo_url,
        siteUrl: n.site_url,
        ...this.getAuthenticationPageRenderArgs(),
        t: i
      }
    );
  }
}
_e(Jr, "propTypes", {
  onLogin: ve.func.isRequired,
  inProgress: ve.bool,
  base_url: ve.string,
  siteId: ve.string,
  authEndpoint: ve.string,
  config: ve.object.isRequired,
  clearHash: ve.func,
  t: ve.func.isRequired
});
const ca = "3.7.7", pc = ca, Ke = typeof Buffer == "function", si = typeof TextDecoder == "function" ? new TextDecoder() : void 0, ui = typeof TextEncoder == "function" ? new TextEncoder() : void 0, dc = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", rt = Array.prototype.slice.call(dc), Rt = ((r) => {
  let e = {};
  return r.forEach((t, n) => e[t] = n), e;
})(rt), mc = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/, z = String.fromCharCode.bind(String), ci = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : (r) => new Uint8Array(Array.prototype.slice.call(r, 0)), la = (r) => r.replace(/=/g, "").replace(/[+\/]/g, (e) => e == "+" ? "-" : "_"), fa = (r) => r.replace(/[^A-Za-z0-9\+\/]/g, ""), ha = (r) => {
  let e, t, n, i, a = "";
  const o = r.length % 3;
  for (let s = 0; s < r.length; ) {
    if ((t = r.charCodeAt(s++)) > 255 || (n = r.charCodeAt(s++)) > 255 || (i = r.charCodeAt(s++)) > 255)
      throw new TypeError("invalid character found");
    e = t << 16 | n << 8 | i, a += rt[e >> 18 & 63] + rt[e >> 12 & 63] + rt[e >> 6 & 63] + rt[e & 63];
  }
  return o ? a.slice(0, o - 3) + "===".substring(o) : a;
}, Xr = typeof btoa == "function" ? (r) => btoa(r) : Ke ? (r) => Buffer.from(r, "binary").toString("base64") : ha, Dr = Ke ? (r) => Buffer.from(r).toString("base64") : (r) => {
  let t = [];
  for (let n = 0, i = r.length; n < i; n += 4096)
    t.push(z.apply(null, r.subarray(n, n + 4096)));
  return Xr(t.join(""));
}, Ot = (r, e = !1) => e ? la(Dr(r)) : Dr(r), vc = (r) => {
  if (r.length < 2) {
    var e = r.charCodeAt(0);
    return e < 128 ? r : e < 2048 ? z(192 | e >>> 6) + z(128 | e & 63) : z(224 | e >>> 12 & 15) + z(128 | e >>> 6 & 63) + z(128 | e & 63);
  } else {
    var e = 65536 + (r.charCodeAt(0) - 55296) * 1024 + (r.charCodeAt(1) - 56320);
    return z(240 | e >>> 18 & 7) + z(128 | e >>> 12 & 63) + z(128 | e >>> 6 & 63) + z(128 | e & 63);
  }
}, yc = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, pa = (r) => r.replace(yc, vc), li = Ke ? (r) => Buffer.from(r, "utf8").toString("base64") : ui ? (r) => Dr(ui.encode(r)) : (r) => Xr(pa(r)), Le = (r, e = !1) => e ? la(li(r)) : li(r), fi = (r) => Le(r, !0), gc = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g, bc = (r) => {
  switch (r.length) {
    case 4:
      var e = (7 & r.charCodeAt(0)) << 18 | (63 & r.charCodeAt(1)) << 12 | (63 & r.charCodeAt(2)) << 6 | 63 & r.charCodeAt(3), t = e - 65536;
      return z((t >>> 10) + 55296) + z((t & 1023) + 56320);
    case 3:
      return z((15 & r.charCodeAt(0)) << 12 | (63 & r.charCodeAt(1)) << 6 | 63 & r.charCodeAt(2));
    default:
      return z((31 & r.charCodeAt(0)) << 6 | 63 & r.charCodeAt(1));
  }
}, da = (r) => r.replace(gc, bc), ma = (r) => {
  if (r = r.replace(/\s+/g, ""), !mc.test(r))
    throw new TypeError("malformed base64.");
  r += "==".slice(2 - (r.length & 3));
  let e, t = "", n, i;
  for (let a = 0; a < r.length; )
    e = Rt[r.charAt(a++)] << 18 | Rt[r.charAt(a++)] << 12 | (n = Rt[r.charAt(a++)]) << 6 | (i = Rt[r.charAt(a++)]), t += n === 64 ? z(e >> 16 & 255) : i === 64 ? z(e >> 16 & 255, e >> 8 & 255) : z(e >> 16 & 255, e >> 8 & 255, e & 255);
  return t;
}, Zr = typeof atob == "function" ? (r) => atob(fa(r)) : Ke ? (r) => Buffer.from(r, "base64").toString("binary") : ma, va = Ke ? (r) => ci(Buffer.from(r, "base64")) : (r) => ci(Zr(r).split("").map((e) => e.charCodeAt(0))), ya = (r) => va(ga(r)), Ec = Ke ? (r) => Buffer.from(r, "base64").toString("utf8") : si ? (r) => si.decode(va(r)) : (r) => da(Zr(r)), ga = (r) => fa(r.replace(/[-_]/g, (e) => e == "-" ? "+" : "/")), Ir = (r) => Ec(ga(r)), wc = (r) => {
  if (typeof r != "string")
    return !1;
  const e = r.replace(/\s+/g, "").replace(/={0,2}$/, "");
  return !/[^\s0-9a-zA-Z\+/]/.test(e) || !/[^\s0-9a-zA-Z\-_]/.test(e);
}, ba = (r) => ({
  value: r,
  enumerable: !1,
  writable: !0,
  configurable: !0
}), Ea = function() {
  const r = (e, t) => Object.defineProperty(String.prototype, e, ba(t));
  r("fromBase64", function() {
    return Ir(this);
  }), r("toBase64", function(e) {
    return Le(this, e);
  }), r("toBase64URI", function() {
    return Le(this, !0);
  }), r("toBase64URL", function() {
    return Le(this, !0);
  }), r("toUint8Array", function() {
    return ya(this);
  });
}, wa = function() {
  const r = (e, t) => Object.defineProperty(Uint8Array.prototype, e, ba(t));
  r("toBase64", function(e) {
    return Ot(this, e);
  }), r("toBase64URI", function() {
    return Ot(this, !0);
  }), r("toBase64URL", function() {
    return Ot(this, !0);
  });
}, Rc = () => {
  Ea(), wa();
}, pr = {
  version: ca,
  VERSION: pc,
  atob: Zr,
  atobPolyfill: ma,
  btoa: Xr,
  btoaPolyfill: ha,
  fromBase64: Ir,
  toBase64: Le,
  encode: Le,
  encodeURI: fi,
  encodeURL: fi,
  utob: pa,
  btou: da,
  decode: Ir,
  isValid: wc,
  fromUint8Array: Ot,
  toUint8Array: ya,
  extendString: Ea,
  extendUint8Array: wa,
  extendBuiltins: Rc
}, ue = "GitHub", qe = -1;
var nt = /* @__PURE__ */ ((r) => (r.Open = "open", r.Closed = "closed", r.All = "all", r))(nt || {});
function hi(r, e) {
  return r.labels.some((t) => at(t.name, e));
}
function Sc(r, e) {
  return r.labels.every((t) => !at(t.name, e));
}
function pi(r) {
  return r.reduce((t, n) => (n.status === "removed" ? t.push({ sha: null, path: n.filename }) : n.status === "renamed" ? (t.push({ sha: null, path: n.previous_filename }), t.push({ sha: n.sha, path: n.filename })) : t.push({ sha: n.sha, path: n.filename }), t), []);
}
let di = !1;
const zt = class zt {
  constructor(e) {
    this.filterOpenAuthoringBranches = async (i) => {
      try {
        const a = await this.getBranchPullRequest(i), { state: o, merged_at: s } = a;
        return a.number !== qe && o === "closed" && s ? (await this.deleteBranch(i), { branch: i, filter: !1 }) : { branch: i, filter: !0 };
      } catch {
        return { branch: i, filter: !1 };
      }
    }, this.apiRoot = e.apiRoot || "https://api.github.com", this.token = e.token || "", this.tokenKeyword = e.tokenKeyword || "token", this.branch = e.branch || "master", this.useOpenAuthoring = e.useOpenAuthoring, this.repo = e.repo || "", this.originRepo = e.originRepo || this.repo, this.repoURL = `/repos/${this.repo}`, this.originRepoURL = `/repos/${this.originRepo}`;
    const [t, n] = [this.repo.split("/"), this.originRepo.split("/")];
    this.repoOwner = t[0], this.repoName = t[1], this.originRepoOwner = n[0], this.originRepoName = n[1], this.mergeMethod = e.squashMerges ? "squash" : "merge", this.cmsLabelPrefix = e.cmsLabelPrefix, this.initialWorkflowStatus = e.initialWorkflowStatus, this.baseUrl = e.baseUrl, this.getUser = e.getUser;
  }
  user() {
    return this._userPromise || (this._userPromise = this.getUser({ token: this.token })), this._userPromise;
  }
  async hasWriteAccess() {
    try {
      const e = await this.request(this.repoURL);
      return this.repoOwner = e.owner.login, e.permissions.push;
    } catch (e) {
      throw console.error("Problem fetching repo data from GitHub"), e;
    }
  }
  reset() {
  }
  requestHeaders(e = {}) {
    const t = {
      "Content-Type": "application/json; charset=utf-8",
      ...e
    };
    return this.token && (t.Authorization = `${this.tokenKeyword} ${this.token}`), Promise.resolve(t);
  }
  parseJsonResponse(e) {
    return e.json().then((t) => e.ok ? t : Promise.reject(t));
  }
  urlFor(e, t) {
    const n = [];
    if (t.params)
      for (const i in t.params)
        n.push(`${i}=${encodeURIComponent(t.params[i])}`);
    return n.length && (e += `?${n.join("&")}`), this.apiRoot + e;
  }
  parseResponse(e) {
    const t = e.headers.get("Content-Type");
    return t && t.match(/json/) ? this.parseJsonResponse(e) : e.text().then((i) => e.ok ? i : Promise.reject(i));
  }
  handleRequestError(e, t) {
    throw new pe(e.message, t, ue);
  }
  buildRequest(e) {
    return e;
  }
  async request(e, t = {}, n = (i) => this.parseResponse(i)) {
    t = { cache: "no-cache", ...t };
    const i = await this.requestHeaders(t.headers || {}), a = this.urlFor(e, t);
    let o = 500;
    try {
      const s = zi.fromFetchArguments(a, {
        ...t,
        headers: i
      }), u = await Bo(this, s);
      return o = u.status, await n(u);
    } catch (s) {
      return this.handleRequestError(s, o);
    }
  }
  nextUrlProcessor() {
    return (e) => e;
  }
  async requestAllPages(e, t = {}) {
    t = { cache: "no-cache", ...t };
    const n = await this.requestHeaders(t.headers || {}), i = this.urlFor(e, t), a = await Qo(
      i,
      { ...t, headers: n },
      "next",
      this.nextUrlProcessor()
    ), o = await Promise.all(
      a.map((s) => this.parseResponse(s))
    );
    return [].concat(...o);
  }
  generateContentKey(e, t) {
    const n = Vo(e, t);
    return this.useOpenAuthoring ? `${this.repo}/${n}` : n;
  }
  parseContentKey(e) {
    return this.useOpenAuthoring ? Qn(e.slice(this.repo.length + 1)) : Qn(e);
  }
  checkMetadataRef() {
    return this.request(`${this.repoURL}/git/refs/meta/_decap_cms`).then((e) => e.object).catch(() => {
      const e = {
        raw: `# Decap CMS

This tree is used by the Decap CMS to store metadata information for specific files and branches.`
      };
      return this.uploadBlob(e).then(
        (t) => this.request(`${this.repoURL}/git/trees`, {
          method: "POST",
          body: JSON.stringify({
            tree: [{ path: "README.md", mode: "100644", type: "blob", sha: t.sha }]
          })
        })
      ).then((t) => this.commit("First Commit", t)).then((t) => this.createRef("meta", "_decap_cms", t.sha)).then((t) => t.object);
    });
  }
  async storeMetadata(e, t) {
    return this._metadataSemaphore || (this._metadataSemaphore = Nr(1)), new Promise(
      (n, i) => {
        var a;
        return (a = this._metadataSemaphore) == null ? void 0 : a.take(async () => {
          var o;
          try {
            const s = await this.checkMetadataRef(), u = { path: `${e}.json`, raw: JSON.stringify(t) };
            await this.uploadBlob(u);
            const c = await this.updateTree(s.sha, [u]), { sha: l } = await this.commit(`Updating “${e}” metadata`, c);
            await this.patchRef("meta", "_decap_cms", l), await Sr.setItem(`gh.meta.${e}`, {
              expires: Date.now() + 3e5,
              // In 5 minutes
              data: t
            }), (o = this._metadataSemaphore) == null || o.leave(), n();
          } catch (s) {
            i(s);
          }
        });
      }
    );
  }
  deleteMetadata(e) {
    return this._metadataSemaphore || (this._metadataSemaphore = Nr(1)), new Promise(
      (t) => {
        var n;
        return (n = this._metadataSemaphore) == null ? void 0 : n.take(async () => {
          var i, a;
          try {
            const o = await this.checkMetadataRef(), s = { path: `${e}.json`, sha: null }, u = await this.updateTree(o.sha, [s]), { sha: c } = await this.commit(`Deleting “${e}” metadata`, u);
            await this.patchRef("meta", "_decap_cms", c), (i = this._metadataSemaphore) == null || i.leave(), t();
          } catch {
            (a = this._metadataSemaphore) == null || a.leave(), t();
          }
        });
      }
    );
  }
  async retrieveMetadataOld(e) {
    console.log(
      "%c Checking for MetaData files",
      "line-height: 30px;text-align: center;font-weight: bold"
    );
    const t = {
      params: { ref: "refs/meta/_decap_cms" },
      headers: { Accept: "application/vnd.github.v3.raw" }
    };
    function n(s) {
      throw s.message === "Not Found" && console.log(
        "%c %s does not have metadata",
        "line-height: 30px;text-align: center;font-weight: bold",
        e
      ), s;
    }
    if (!this.useOpenAuthoring)
      return await this.request(
        `${this.repoURL}/contents/${e}.json`,
        t
      ).then((u) => JSON.parse(u)).catch(n);
    const [i, a] = e.split("/");
    return this.request(
      `/repos/${i}/${a}/contents/${e}.json`,
      t
    ).then((s) => JSON.parse(s)).catch(n);
  }
  async getPullRequests(e, t, n) {
    return (await this.requestAllPages(
      `${this.originRepoURL}/pulls`,
      {
        params: {
          ...e ? { head: await this.getHeadReference(e) } : {},
          base: this.branch,
          state: t,
          per_page: 100
        }
      }
    )).filter(
      (a) => a.head.ref.startsWith(`${we}/`) && n(a)
    );
  }
  async getOpenAuthoringPullRequest(e, t) {
    const n = await this.getBranch(e).catch(() => {
      throw new hr("content is not under editorial workflow", !0);
    }), i = t.filter((a) => a.head.sha === n.commit.sha)[0];
    if (i) {
      i.labels = i.labels.filter((o) => !at(o.name, this.cmsLabelPrefix));
      const a = i.state === "closed" ? { name: bt(this.initialWorkflowStatus, this.cmsLabelPrefix) } : { name: bt("pending_review", this.cmsLabelPrefix) };
      return i.labels.push(a), i;
    } else
      try {
        return {
          head: { sha: n.commit.sha },
          number: qe,
          labels: [{ name: bt(this.initialWorkflowStatus, this.cmsLabelPrefix) }],
          state: "open"
          /* Open */
        };
      } catch {
        throw new hr("content is not under editorial workflow", !0);
      }
  }
  async getBranchPullRequest(e) {
    if (this.useOpenAuthoring) {
      const t = await this.getPullRequests(e, "all", () => !0);
      return this.getOpenAuthoringPullRequest(e, t);
    } else {
      const t = await this.getPullRequests(
        e,
        "open",
        (n) => hi(n, this.cmsLabelPrefix)
      );
      if (t.length <= 0)
        throw new hr("content is not under editorial workflow", !0);
      return t[0];
    }
  }
  async getPullRequestCommits(e) {
    if (e === qe)
      return [];
    try {
      return await this.request(
        `${this.originRepoURL}/pulls/${e}/commits`
      );
    } catch (t) {
      return console.log(t), [];
    }
  }
  async getPullRequestAuthor(e) {
    var t;
    if ((t = e.user) != null && t.login)
      try {
        const n = await this.user();
        return n.name || n.login;
      } catch {
        return;
      }
  }
  async retrieveUnpublishedEntryData(e) {
    const { collection: t, slug: n } = this.parseContentKey(e), i = se(e), a = await this.getBranchPullRequest(i), [{ files: o }, s] = await Promise.all([
      this.getDifferences(this.branch, a.head.sha),
      this.getPullRequestAuthor(a)
    ]), u = await Promise.all(o.map((p) => this.diffFromFile(p))), c = a.labels.find((p) => at(p.name, this.cmsLabelPrefix)), l = Go(c.name, this.cmsLabelPrefix), h = a.updated_at;
    return {
      collection: t,
      slug: n,
      status: l,
      diffs: u.map((p) => ({ path: p.path, newFile: p.newFile, id: p.sha })),
      updatedAt: h,
      pullRequestAuthor: s
    };
  }
  async readFile(e, t, {
    branch: n = this.branch,
    repoURL: i = this.repoURL,
    parseText: a = !0
  } = {}) {
    return t || (t = await this.getFileSha(e, { repoURL: i, branch: n })), await this.fetchBlobContent({ sha: t, repoURL: i, parseText: a });
  }
  async readFileMetadata(e, t) {
    return await Ko(t, async () => {
      try {
        const a = await this.request(
          `${this.originRepoURL}/commits`,
          {
            params: { path: e, sha: this.branch }
          }
        ), { commit: o } = a[0];
        return {
          author: o.author.name || o.author.email,
          updatedOn: o.author.date
        };
      } catch {
        return { author: "", updatedOn: "" };
      }
    }, Sr);
  }
  async fetchBlobContent({ sha: e, repoURL: t, parseText: n }) {
    const i = await this.request(`${t}/git/blobs/${e}`, {
      cache: "force-cache"
    });
    if (n)
      return pr.decode(i.content);
    {
      const a = pr.atob(i.content), o = new Uint8Array(a.length);
      for (let u = 0; u < a.length; u++)
        o[u] = a.charCodeAt(u);
      return new Blob([o]);
    }
  }
  async listFiles(e, { repoURL: t = this.repoURL, branch: n = this.branch, depth: i = 1 } = {}) {
    const a = Ji(e, "/");
    try {
      return (await this.request(
        `${t}/git/trees/${n}:${a}`,
        {
          // GitHub API supports recursive=1 for getting the entire recursive tree
          // or omitting it to get the non-recursive tree
          params: i > 1 ? { recursive: 1 } : {}
        }
      )).tree.filter((s) => s.type === "blob" && s.path.split("/").length <= i).map((s) => ({
        type: s.type,
        id: s.sha,
        name: Or(s.path),
        path: `${a}/${s.path}`,
        size: s.size
      }));
    } catch (o) {
      if (o && o.status === 404)
        return console.log("This 404 was expected and handled appropriately."), [];
      throw o;
    }
  }
  async migrateToVersion1(e, t) {
    const n = e.head.ref.slice(4), i = `${t.collection}/${n}`, a = `cms/${i}`;
    await this.getBranch(a).catch(() => {
    }) || await this.createBranch(a, e.head.sha);
    const s = (await this.getPullRequests(a, "all", () => !0))[0] || await this.createPR(e.title, a), u = {
      ...t,
      pr: {
        number: s.number,
        head: s.head.sha
      },
      branch: a,
      version: "1"
    };
    return await this.storeMetadata(i, u), await this.closePR(e.number), await this.deleteBranch(e.head.ref), await this.deleteMetadata(n), { metadata: u, pullRequest: s };
  }
  async migrateToPullRequestLabels(e, t) {
    await this.setPullRequestStatus(e, t.status);
    const n = e.head.ref.slice(4);
    await this.deleteMetadata(n);
  }
  async migratePullRequest(e, t) {
    const { number: n } = e;
    console.log(`Migrating Pull Request '${n}' (${t})`);
    const i = Hi(e.head.ref);
    let a = await this.retrieveMetadataOld(i).catch(() => {
    });
    if (!a) {
      console.log(`Skipped migrating Pull Request '${n}' (${t})`);
      return;
    }
    let o = n;
    if (!a.version) {
      console.log(`Migrating Pull Request '${n}' to version 1`);
      try {
        ({ metadata: a, pullRequest: e } = await this.migrateToVersion1(e, a));
      } catch (s) {
        console.log(`Failed to migrate Pull Request '${n}' to version 1. See error below.`), console.error(s);
        return;
      }
      o = e.number, console.log(
        `Done migrating Pull Request '${n}' to version 1. New pull request '${o}' created.`
      );
    }
    a.version === "1" && (console.log(`Migrating Pull Request '${o}' to labels`), await this.migrateToPullRequestLabels(e, a), console.log(`Done migrating Pull Request '${o}' to labels`)), console.log(
      `Done migrating Pull Request '${n === o ? o : `${n} => ${o}`}'`
    );
  }
  async getOpenAuthoringBranches() {
    return await this.requestAllPages(
      `${this.repoURL}/git/refs/heads/cms/${this.repo}`
    ).catch(() => []);
  }
  async listUnpublishedBranches() {
    console.log(
      "%c Checking for Unpublished entries",
      "line-height: 30px;text-align: center;font-weight: bold"
    );
    let e;
    if (this.useOpenAuthoring)
      e = (await this.getOpenAuthoringBranches()).map((i) => i.ref.slice(11)), e = (await Promise.all(
        e.map((i) => this.filterOpenAuthoringBranches(i))
      )).filter((i) => i.filter).map((i) => i.branch);
    else {
      const t = await this.getPullRequests(
        void 0,
        "open",
        (a) => !a.head.repo.fork && Sc(a, this.cmsLabelPrefix)
      );
      let n = 0;
      for (const a of t)
        di || (di = !0, alert(xr`
            Decap CMS is adding labels to ${t.length} of your Editorial Workflow
            entries. The "Workflow" tab will be unavailable during this migration. You may use other
            areas of the CMS during this time. Note that closing the CMS will pause the migration.
          `)), n = n + 1, await this.migratePullRequest(a, `${n} of ${t.length}`);
      e = (await this.getPullRequests(
        void 0,
        "open",
        (a) => hi(a, this.cmsLabelPrefix)
      )).map((a) => a.head.ref);
    }
    return e;
  }
  /**
   * Retrieve statuses for a given SHA. Unrelated to the editorial workflow
   * concept of entry "status". Useful for things like deploy preview links.
   */
  async getStatuses(e, t) {
    const n = this.generateContentKey(e, t), i = se(n), o = (await this.getBranchPullRequest(i)).head.sha;
    return (await this.request(
      `${this.originRepoURL}/commits/${o}/status`
    )).statuses.map((u) => ({
      context: u.context,
      target_url: u.target_url,
      state: u.state === "success" ? Vn.Success : Vn.Other
    }));
  }
  async persistFiles(e, t, n) {
    const i = t.concat(e), a = i.map((o) => this.uploadBlob(o));
    if (await Promise.all(a), n.useWorkflow) {
      const o = t.map(
        ({ sha: u, path: c }) => ({
          path: Lt(c, "/"),
          sha: u
        })
      ), s = e[0].slug;
      return this.editorialWorkflowGit(i, s, o, n);
    } else
      return this.getDefaultBranch().then(
        (o) => this.updateTree(o.commit.sha, i)
      ).then((o) => this.commit(n.commitMessage, o)).then((o) => this.patchBranch(this.branch, o.sha));
  }
  async getFileSha(e, { repoURL: t = this.repoURL, branch: n = this.branch } = {}) {
    const i = e.split("/"), a = Yn(i), o = as(i).join("/"), s = encodeURIComponent(o), u = `${t}/git/trees/${n}:${s}`, l = (await this.request(u)).tree.find((h) => h.path === a);
    if (l)
      return l.sha;
    throw new pe("Not Found", 404, ue);
  }
  async deleteFiles(e, t) {
    if (this.useOpenAuthoring)
      return Promise.reject("Cannot delete published entries as an Open Authoring user!");
    const n = await this.getDefaultBranch(), i = e.map((s) => ({ path: s, sha: null })), a = await this.updateTree(n.commit.sha, i), o = await this.commit(t, a);
    await this.patchBranch(this.branch, o.sha);
  }
  async createBranchAndPullRequest(e, t, n) {
    return await this.createBranch(e, t), this.createPR(n, e);
  }
  async updatePullRequestLabels(e, t) {
    await this.request(`${this.repoURL}/issues/${e}/labels`, {
      method: "PUT",
      body: JSON.stringify({ labels: t })
    });
  }
  // async since it is overridden in a child class
  async diffFromFile(e) {
    return {
      path: e.filename,
      newFile: e.status === "added",
      sha: e.sha,
      // media files diffs don't have a patch attribute, except svg files
      // renamed files don't have a patch attribute too
      binary: e.status !== "renamed" && !e.patch || e.filename.endsWith(".svg")
    };
  }
  async editorialWorkflowGit(e, t, n, i) {
    const a = this.generateContentKey(i.collectionName, t), o = se(a);
    if (i.unpublished || !1) {
      const { files: u } = await this.getDifferences(
        this.branch,
        await this.getHeadReference(o)
      ), c = await Promise.all(u.map((b) => this.diffFromFile(b))), l = [];
      for (const b of c.filter((w) => w.binary))
        n.some((w) => w.path === b.path) || l.push({ path: b.path, sha: null });
      const h = await this.rebaseBranch(o), p = l.concat(e), m = await this.updateTree(h.sha, p, o), y = await this.commit(i.commitMessage, m);
      return this.patchBranch(o, y.sha, { force: !0 });
    } else {
      const u = await this.getDefaultBranch(), c = await this.updateTree(u.commit.sha, e), l = await this.commit(i.commitMessage, c);
      if (this.useOpenAuthoring)
        await this.createBranch(o, l.sha);
      else {
        const h = await this.createBranchAndPullRequest(
          o,
          l.sha,
          i.commitMessage
        );
        await this.setPullRequestStatus(h, i.status || this.initialWorkflowStatus);
      }
    }
  }
  async getDifferences(e, t) {
    const n = this.useOpenAuthoring ? 10 : 1;
    for (let i = 1; i <= n; i++)
      try {
        return await this.request(
          `${this.originRepoURL}/compare/${e}...${t}`
        );
      } catch (a) {
        if (i === n)
          throw console.warn(`Reached maximum number of attempts '${n}' for getDifferences`), a;
        await new Promise((o) => setTimeout(o, i * 500));
      }
    throw new pe("Not Found", 404, ue);
  }
  async rebaseSingleCommit(e, t) {
    const n = await this.getDifferences(t.parents[0].sha, t.sha), i = pi(n.files);
    if (i.length > 0) {
      const a = await this.updateTree(e.sha, i), { message: o, author: s, committer: u } = t.commit;
      return await this.createCommit(
        o,
        a.sha,
        [e.sha],
        s,
        u
      );
    } else
      return t;
  }
  /**
   * Rebase an array of commits one-by-one, starting from a given base SHA
   */
  async rebaseCommits(e, t) {
    return t.length === 0 || t[0].parents[0].sha === e.sha ? Yn(t) : t.reduce((i, a) => i.then((o) => {
      const s = o, u = a;
      return this.rebaseSingleCommit(s, u);
    }), Promise.resolve(e));
  }
  async rebaseBranch(e) {
    try {
      const { base_commit: t, commits: n } = await this.getDifferences(
        this.branch,
        await this.getHeadReference(e)
      );
      return await this.rebaseCommits(t, n);
    } catch (t) {
      throw console.error(t), t;
    }
  }
  async setPullRequestStatus(e, t) {
    const n = [
      ...e.labels.filter((i) => !at(i.name, this.cmsLabelPrefix)).map((i) => i.name),
      bt(t, this.cmsLabelPrefix)
    ];
    await this.updatePullRequestLabels(e.number, n);
  }
  async updateUnpublishedEntryStatus(e, t, n) {
    var s, u;
    const i = this.generateContentKey(e, t), a = se(i), o = await this.getBranchPullRequest(a);
    if (!this.useOpenAuthoring)
      await this.setPullRequestStatus(o, n);
    else {
      if (status === "pending_publish")
        throw new Error('Open Authoring entries may not be set to the status "pending_publish".');
      if (o.number !== qe) {
        const { state: c } = o;
        c === "open" && n === "draft" && await this.closePR(o.number), c === "closed" && n === "pending_review" && await this.openPR(o.number);
      } else if (n === "pending_review") {
        const c = se(i), h = ((u = (s = (await this.getDifferences(this.branch, await this.getHeadReference(c))).commits[0]) == null ? void 0 : s.commit) == null ? void 0 : u.message) || zt.DEFAULT_COMMIT_MESSAGE;
        await this.createPR(h, c);
      }
    }
  }
  async deleteUnpublishedEntry(e, t) {
    const n = this.generateContentKey(e, t), i = se(n), a = await this.getBranchPullRequest(i);
    a.number !== qe && await this.closePR(a.number), await this.deleteBranch(i);
  }
  async publishUnpublishedEntry(e, t) {
    const n = this.generateContentKey(e, t), i = se(n), a = await this.getBranchPullRequest(i);
    await this.mergePR(a), await this.deleteBranch(i);
  }
  async createRef(e, t, n) {
    return await this.request(`${this.repoURL}/git/refs`, {
      method: "POST",
      body: JSON.stringify({ ref: `refs/${e}/${t}`, sha: n })
    });
  }
  async patchRef(e, t, n, i = {}) {
    const a = i.force || !1;
    return await this.request(
      `${this.repoURL}/git/refs/${e}/${encodeURIComponent(t)}`,
      {
        method: "PATCH",
        body: JSON.stringify({ sha: n, force: a })
      }
    );
  }
  deleteRef(e, t) {
    return this.request(`${this.repoURL}/git/refs/${e}/${encodeURIComponent(t)}`, {
      method: "DELETE"
    });
  }
  async getBranch(e) {
    return await this.request(
      `${this.repoURL}/branches/${encodeURIComponent(e)}`
    );
  }
  async getDefaultBranch() {
    return await this.request(
      `${this.originRepoURL}/branches/${encodeURIComponent(this.branch)}`
    );
  }
  async backupBranch(e) {
    try {
      const t = await this.getBranch(e);
      await this.createBranch(
        t.name.replace(
          new RegExp(`${we}/`),
          `${we}_${Date.now()}/`
        ),
        t.commit.sha
      );
    } catch (t) {
      console.warn(t);
    }
  }
  async createBranch(e, t) {
    try {
      return await this.createRef("heads", e, t);
    } catch (n) {
      const i = String(n.message || "");
      if (i === "Reference update failed")
        await Yi(e, (a) => this.getBranch(a), ue);
      else if (i === "Reference already exists" && e.startsWith(`${we}/`))
        try {
          return await this.backupBranch(e), await this.patchBranch(e, t, { force: !0 });
        } catch (a) {
          console.log(a);
        }
      throw n;
    }
  }
  assertCmsBranch(e) {
    return e.startsWith(`${we}/`);
  }
  patchBranch(e, t, n = {}) {
    const i = n.force || !1;
    if (i && !this.assertCmsBranch(e))
      throw Error(`Only CMS branches can be force updated, cannot force update ${e}`);
    return this.patchRef("heads", e, t, { force: i });
  }
  deleteBranch(e) {
    return this.deleteRef("heads", e).catch((t) => t.message === "Reference does not exist" ? Promise.resolve() : (console.error(t), Promise.reject(t)));
  }
  async getHeadReference(e) {
    return `${this.repoOwner}:${e}`;
  }
  async createPR(e, t) {
    return await this.request(`${this.originRepoURL}/pulls`, {
      method: "POST",
      body: JSON.stringify({
        title: e,
        body: Tr,
        head: await this.getHeadReference(t),
        base: this.branch
      })
    });
  }
  async openPR(e) {
    return console.log("%c Re-opening PR", "line-height: 30px;text-align: center;font-weight: bold"), await this.request(
      `${this.originRepoURL}/pulls/${e}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          state: "open"
          /* Open */
        })
      }
    );
  }
  async closePR(e) {
    return console.log("%c Deleting PR", "line-height: 30px;text-align: center;font-weight: bold"), await this.request(
      `${this.originRepoURL}/pulls/${e}`,
      {
        method: "PATCH",
        body: JSON.stringify({
          state: "closed"
          /* Closed */
        })
      }
    );
  }
  async mergePR(e) {
    console.log("%c Merging PR", "line-height: 30px;text-align: center;font-weight: bold");
    try {
      return await this.request(
        `${this.originRepoURL}/pulls/${e.number}/merge`,
        {
          method: "PUT",
          body: JSON.stringify({
            commit_message: Wo,
            sha: e.head.sha,
            merge_method: this.mergeMethod
          })
        }
      );
    } catch (t) {
      if (t instanceof pe && t.status === 405)
        return this.forceMergePR(e);
      throw t;
    }
  }
  async forceMergePR(e) {
    const t = await this.getDifferences(e.base.sha, e.head.sha), n = pi(t.files);
    let i = `Automatically generated. Merged on Decap CMS

Force merge of:`;
    return n.forEach((a) => {
      i += `
* "${a.path}"`;
    }), console.log(
      "%c Automatic merge not possible - Forcing merge.",
      "line-height: 30px;text-align: center;font-weight: bold"
    ), this.getDefaultBranch().then((a) => this.updateTree(a.commit.sha, n)).then((a) => this.commit(i, a)).then((a) => this.patchBranch(this.branch, a.sha));
  }
  toBase64(e) {
    return Promise.resolve(pr.encode(e));
  }
  async uploadBlob(e) {
    const t = await os(
      e,
      "toBase64",
      ss(this.toBase64, e.raw)
    ), n = await this.request(`${this.repoURL}/git/blobs`, {
      method: "POST",
      body: JSON.stringify({
        content: t,
        encoding: "base64"
      })
    });
    return e.sha = n.sha, e;
  }
  async updateTree(e, t, n = this.branch) {
    const i = [], a = t.reduce((s, u) => {
      const c = {
        path: Lt(u.path, "/"),
        mode: "100644",
        type: "blob",
        sha: u.sha
      };
      return u.newPath ? i.push({ from: u.path, to: u.newPath, sha: u.sha }) : s.push(c), s;
    }, []);
    for (const { from: s, to: u, sha: c } of i) {
      const l = __dirname(s), h = __dirname(u), p = await this.listFiles(l, { branch: n, depth: 100 });
      for (const m of p)
        a.push({
          path: m.path,
          mode: "100644",
          type: "blob",
          sha: null
        }), a.push({
          path: m.path.replace(l, h),
          mode: "100644",
          type: "blob",
          sha: m.path === s ? c : m.id
        });
    }
    return { ...await this.createTree(e, a), parentSha: e };
  }
  async createTree(e, t) {
    return await this.request(`${this.repoURL}/git/trees`, {
      method: "POST",
      body: JSON.stringify({ base_tree: e, tree: t })
    });
  }
  commit(e, t) {
    const n = t.parentSha ? [t.parentSha] : [];
    return this.createCommit(e, t.sha, n);
  }
  async createCommit(e, t, n, i, a) {
    return await this.request(
      `${this.repoURL}/git/commits`,
      {
        method: "POST",
        body: JSON.stringify({ message: e, tree: t, parents: n, author: i, committer: a })
      }
    );
  }
  async getUnpublishedEntrySha(e, t) {
    const n = this.generateContentKey(e, t), i = se(n);
    return (await this.getBranchPullRequest(i)).head.sha;
  }
};
zt.DEFAULT_COMMIT_MESSAGE = "Automatically generated by Decap CMS";
let st = zt;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Ar = function(r, e) {
  return Ar = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, n) {
    t.__proto__ = n;
  } || function(t, n) {
    for (var i in n)
      n.hasOwnProperty(i) && (t[i] = n[i]);
  }, Ar(r, e);
};
function de(r, e) {
  Ar(r, e);
  function t() {
    this.constructor = r;
  }
  r.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var g = function() {
  return g = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, g.apply(this, arguments);
};
function Ra(r, e) {
  var t = {};
  for (var n in r)
    Object.prototype.hasOwnProperty.call(r, n) && e.indexOf(n) < 0 && (t[n] = r[n]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(r); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, n[i]) && (t[n[i]] = r[n[i]]);
  return t;
}
function be(r, e, t, n) {
  function i(a) {
    return a instanceof t ? a : new t(function(o) {
      o(a);
    });
  }
  return new (t || (t = Promise))(function(a, o) {
    function s(l) {
      try {
        c(n.next(l));
      } catch (h) {
        o(h);
      }
    }
    function u(l) {
      try {
        c(n.throw(l));
      } catch (h) {
        o(h);
      }
    }
    function c(l) {
      l.done ? a(l.value) : i(l.value).then(s, u);
    }
    c((n = n.apply(r, [])).next());
  });
}
function Ee(r, e) {
  var t = { label: 0, sent: function() {
    if (a[0] & 1)
      throw a[1];
    return a[1];
  }, trys: [], ops: [] }, n, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(c) {
    return function(l) {
      return u([c, l]);
    };
  }
  function u(c) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; t; )
      try {
        if (n = 1, i && (a = c[0] & 2 ? i.return : c[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, c[1])).done)
          return a;
        switch (i = 0, a && (c = [c[0] & 2, a.value]), c[0]) {
          case 0:
          case 1:
            a = c;
            break;
          case 4:
            return t.label++, { value: c[1], done: !1 };
          case 5:
            t.label++, i = c[1], c = [0];
            continue;
          case 7:
            c = t.ops.pop(), t.trys.pop();
            continue;
          default:
            if (a = t.trys, !(a = a.length > 0 && a[a.length - 1]) && (c[0] === 6 || c[0] === 2)) {
              t = 0;
              continue;
            }
            if (c[0] === 3 && (!a || c[1] > a[0] && c[1] < a[3])) {
              t.label = c[1];
              break;
            }
            if (c[0] === 6 && t.label < a[1]) {
              t.label = a[1], a = c;
              break;
            }
            if (a && t.label < a[2]) {
              t.label = a[2], t.ops.push(c);
              break;
            }
            a[2] && t.ops.pop(), t.trys.pop();
            continue;
        }
        c = e.call(r, t);
      } catch (l) {
        c = [6, l], i = 0;
      } finally {
        n = a = 0;
      }
    if (c[0] & 5)
      throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function en() {
  for (var r = 0, e = 0, t = arguments.length; e < t; e++)
    r += arguments[e].length;
  for (var n = Array(r), i = 0, e = 0; e < t; e++)
    for (var a = arguments[e], o = 0, s = a.length; o < s; o++, i++)
      n[i] = a[o];
  return n;
}
var _r = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : void 0;
function Tt(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Tt = function(t) {
    return typeof t;
  } : Tt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Tt(r);
}
var Oc = 10, Sa = 2;
function tn(r) {
  return Yt(r, []);
}
function Yt(r, e) {
  switch (Tt(r)) {
    case "string":
      return JSON.stringify(r);
    case "function":
      return r.name ? "[function ".concat(r.name, "]") : "[function]";
    case "object":
      return r === null ? "null" : Tc(r, e);
    default:
      return String(r);
  }
}
function Tc(r, e) {
  if (e.indexOf(r) !== -1)
    return "[Circular]";
  var t = [].concat(e, [r]), n = Pc(r);
  if (n !== void 0) {
    var i = n.call(r);
    if (i !== r)
      return typeof i == "string" ? i : Yt(i, t);
  } else if (Array.isArray(r))
    return Nc(r, t);
  return kc(r, t);
}
function kc(r, e) {
  var t = Object.keys(r);
  if (t.length === 0)
    return "{}";
  if (e.length > Sa)
    return "[" + Cc(r) + "]";
  var n = t.map(function(i) {
    var a = Yt(r[i], e);
    return i + ": " + a;
  });
  return "{ " + n.join(", ") + " }";
}
function Nc(r, e) {
  if (r.length === 0)
    return "[]";
  if (e.length > Sa)
    return "[Array]";
  for (var t = Math.min(Oc, r.length), n = r.length - t, i = [], a = 0; a < t; ++a)
    i.push(Yt(r[a], e));
  return n === 1 ? i.push("... 1 more item") : n > 1 && i.push("... ".concat(n, " more items")), "[" + i.join(", ") + "]";
}
function Pc(r) {
  var e = r[String(_r)];
  if (typeof e == "function")
    return e;
  if (typeof r.inspect == "function")
    return r.inspect;
}
function Cc(r) {
  var e = Object.prototype.toString.call(r).replace(/^\[object /, "").replace(/]$/, "");
  if (e === "Object" && typeof r.constructor == "function") {
    var t = r.constructor.name;
    if (typeof t == "string" && t !== "")
      return t;
  }
  return e;
}
function xc(r, e) {
  var t = !!r;
  if (!t)
    throw new Error("Unexpected invariant triggered.");
}
function Oa(r) {
  var e = r.prototype.toJSON;
  typeof e == "function" || xc(0), r.prototype.inspect = e, _r && (r.prototype[_r] = e);
}
var Ta = /* @__PURE__ */ function() {
  function r(t, n, i) {
    this.start = t.start, this.end = n.end, this.startToken = t, this.endToken = n, this.source = i;
  }
  var e = r.prototype;
  return e.toJSON = function() {
    return {
      start: this.start,
      end: this.end
    };
  }, r;
}();
Oa(Ta);
var Q = /* @__PURE__ */ function() {
  function r(t, n, i, a, o, s, u) {
    this.kind = t, this.start = n, this.end = i, this.line = a, this.column = o, this.value = u, this.prev = s, this.next = null;
  }
  var e = r.prototype;
  return e.toJSON = function() {
    return {
      kind: this.kind,
      value: this.value,
      line: this.line,
      column: this.column
    };
  }, r;
}();
Oa(Q);
function mi(r) {
  return r != null && typeof r.kind == "string";
}
var Dc = {
  Name: [],
  Document: ["definitions"],
  OperationDefinition: ["name", "variableDefinitions", "directives", "selectionSet"],
  VariableDefinition: ["variable", "type", "defaultValue", "directives"],
  Variable: ["name"],
  SelectionSet: ["selections"],
  Field: ["alias", "name", "arguments", "directives", "selectionSet"],
  Argument: ["name", "value"],
  FragmentSpread: ["name", "directives"],
  InlineFragment: ["typeCondition", "directives", "selectionSet"],
  FragmentDefinition: [
    "name",
    // Note: fragment variable definitions are experimental and may be changed
    // or removed in the future.
    "variableDefinitions",
    "typeCondition",
    "directives",
    "selectionSet"
  ],
  IntValue: [],
  FloatValue: [],
  StringValue: [],
  BooleanValue: [],
  NullValue: [],
  EnumValue: [],
  ListValue: ["values"],
  ObjectValue: ["fields"],
  ObjectField: ["name", "value"],
  Directive: ["name", "arguments"],
  NamedType: ["name"],
  ListType: ["type"],
  NonNullType: ["type"],
  SchemaDefinition: ["description", "directives", "operationTypes"],
  OperationTypeDefinition: ["type"],
  ScalarTypeDefinition: ["description", "name", "directives"],
  ObjectTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
  FieldDefinition: ["description", "name", "arguments", "type", "directives"],
  InputValueDefinition: ["description", "name", "type", "defaultValue", "directives"],
  InterfaceTypeDefinition: ["description", "name", "interfaces", "directives", "fields"],
  UnionTypeDefinition: ["description", "name", "directives", "types"],
  EnumTypeDefinition: ["description", "name", "directives", "values"],
  EnumValueDefinition: ["description", "name", "directives"],
  InputObjectTypeDefinition: ["description", "name", "directives", "fields"],
  DirectiveDefinition: ["description", "name", "arguments", "locations"],
  SchemaExtension: ["directives", "operationTypes"],
  ScalarTypeExtension: ["name", "directives"],
  ObjectTypeExtension: ["name", "interfaces", "directives", "fields"],
  InterfaceTypeExtension: ["name", "interfaces", "directives", "fields"],
  UnionTypeExtension: ["name", "directives", "types"],
  EnumTypeExtension: ["name", "directives", "values"],
  InputObjectTypeExtension: ["name", "directives", "fields"]
}, ka = Object.freeze({});
function me(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Dc, n = void 0, i = Array.isArray(r), a = [r], o = -1, s = [], u = void 0, c = void 0, l = void 0, h = [], p = [], m = r;
  do {
    o++;
    var y = o === a.length, b = y && s.length !== 0;
    if (y) {
      if (c = p.length === 0 ? void 0 : h[h.length - 1], u = l, l = p.pop(), b) {
        if (i)
          u = u.slice();
        else {
          for (var w = {}, T = 0, R = Object.keys(u); T < R.length; T++) {
            var x = R[T];
            w[x] = u[x];
          }
          u = w;
        }
        for (var k = 0, C = 0; C < s.length; C++) {
          var j = s[C][0], M = s[C][1];
          i && (j -= k), i && M === null ? (u.splice(j, 1), k++) : u[j] = M;
        }
      }
      o = n.index, a = n.keys, s = n.edits, i = n.inArray, n = n.prev;
    } else {
      if (c = l ? i ? o : a[o] : void 0, u = l ? l[c] : m, u == null)
        continue;
      l && h.push(c);
    }
    var L = void 0;
    if (!Array.isArray(u)) {
      if (!mi(u))
        throw new Error("Invalid AST Node: ".concat(tn(u), "."));
      var I = Ic(e, u.kind, y);
      if (I) {
        if (L = I.call(e, u, c, l, h, p), L === ka)
          break;
        if (L === !1) {
          if (!y) {
            h.pop();
            continue;
          }
        } else if (L !== void 0 && (s.push([c, L]), !y))
          if (mi(L))
            u = L;
          else {
            h.pop();
            continue;
          }
      }
    }
    if (L === void 0 && b && s.push([c, u]), y)
      h.pop();
    else {
      var J;
      n = {
        inArray: i,
        index: o,
        keys: a,
        edits: s,
        prev: n
      }, i = Array.isArray(u), a = i ? u : (J = t[u.kind]) !== null && J !== void 0 ? J : [], o = -1, s = [], l && p.push(l), l = u;
    }
  } while (n !== void 0);
  return s.length !== 0 && (m = s[s.length - 1][1]), m;
}
function Ic(r, e, t) {
  var n = r[e];
  if (n) {
    if (!t && typeof n == "function")
      return n;
    var i = t ? n.leave : n.enter;
    if (typeof i == "function")
      return i;
  } else {
    var a = t ? r.leave : r.enter;
    if (a) {
      if (typeof a == "function")
        return a;
      var o = a[e];
      if (typeof o == "function")
        return o;
    }
  }
}
var dr = "Invariant Violation", vi = Object.setPrototypeOf, Ac = vi === void 0 ? function(r, e) {
  return r.__proto__ = e, r;
} : vi, _ = (
  /** @class */
  function(r) {
    de(e, r);
    function e(t) {
      t === void 0 && (t = dr);
      var n = r.call(this, typeof t == "number" ? dr + ": " + t + " (see https://github.com/apollographql/invariant-packages)" : t) || this;
      return n.framesToPop = 1, n.name = dr, Ac(n, e.prototype), n;
    }
    return e;
  }(Error)
);
function E(r, e) {
  if (!r)
    throw new _(e);
}
function yi(r) {
  return function() {
    return console[r].apply(console, arguments);
  };
}
(function(r) {
  r.warn = yi("warn"), r.error = yi("error");
})(E || (E = {}));
var gi = { env: {} };
if (typeof process == "object")
  gi = process;
else
  try {
    Function("stub", "process = stub")(gi);
  } catch {
  }
var _c = function(r, e) {
  e || (e = {}), typeof e == "function" && (e = { cmp: e });
  var t = typeof e.cycles == "boolean" ? e.cycles : !1, n = e.cmp && /* @__PURE__ */ function(a) {
    return function(o) {
      return function(s, u) {
        var c = { key: s, value: o[s] }, l = { key: u, value: o[u] };
        return a(c, l);
      };
    };
  }(e.cmp), i = [];
  return function a(o) {
    if (o && o.toJSON && typeof o.toJSON == "function" && (o = o.toJSON()), o !== void 0) {
      if (typeof o == "number")
        return isFinite(o) ? "" + o : "null";
      if (typeof o != "object")
        return JSON.stringify(o);
      var s, u;
      if (Array.isArray(o)) {
        for (u = "[", s = 0; s < o.length; s++)
          s && (u += ","), u += a(o[s]) || "null";
        return u + "]";
      }
      if (o === null)
        return "null";
      if (i.indexOf(o) !== -1) {
        if (t)
          return JSON.stringify("__cycle__");
        throw new TypeError("Converting circular structure to JSON");
      }
      var c = i.push(o) - 1, l = Object.keys(o).sort(n && n(o));
      for (u = "", s = 0; s < l.length; s++) {
        var h = l[s], p = a(o[h]);
        p && (u && (u += ","), u += JSON.stringify(h) + ":" + p);
      }
      return i.splice(c, 1), "{" + u + "}";
    }
  }(r);
};
const Fc = /* @__PURE__ */ Ht(_c);
var Na = Object.prototype, bi = Na.toString, qc = Na.hasOwnProperty, Fr = /* @__PURE__ */ new Map();
function ie(r, e) {
  try {
    return qr(r, e);
  } finally {
    Fr.clear();
  }
}
function qr(r, e) {
  if (r === e)
    return !0;
  var t = bi.call(r), n = bi.call(e);
  if (t !== n)
    return !1;
  switch (t) {
    case "[object Array]":
      if (r.length !== e.length)
        return !1;
    case "[object Object]": {
      if (Ei(r, e))
        return !0;
      var i = Object.keys(r), a = Object.keys(e), o = i.length;
      if (o !== a.length)
        return !1;
      for (var s = 0; s < o; ++s)
        if (!qc.call(e, i[s]))
          return !1;
      for (var s = 0; s < o; ++s) {
        var u = i[s];
        if (!qr(r[u], e[u]))
          return !1;
      }
      return !0;
    }
    case "[object Error]":
      return r.name === e.name && r.message === e.message;
    case "[object Number]":
      if (r !== r)
        return e !== e;
    case "[object Boolean]":
    case "[object Date]":
      return +r == +e;
    case "[object RegExp]":
    case "[object String]":
      return r == "" + e;
    case "[object Map]":
    case "[object Set]": {
      if (r.size !== e.size)
        return !1;
      if (Ei(r, e))
        return !0;
      for (var c = r.entries(), l = t === "[object Map]"; ; ) {
        var h = c.next();
        if (h.done)
          break;
        var p = h.value, m = p[0], y = p[1];
        if (!e.has(m) || l && !qr(y, e.get(m)))
          return !1;
      }
      return !0;
    }
  }
  return !1;
}
function Ei(r, e) {
  var t = Fr.get(r);
  if (t) {
    if (t.has(e))
      return !0;
  } else
    Fr.set(r, t = /* @__PURE__ */ new Set());
  return t.add(e), !1;
}
function Mc(r) {
  return r.kind === "StringValue";
}
function Lc(r) {
  return r.kind === "BooleanValue";
}
function jc(r) {
  return r.kind === "IntValue";
}
function $c(r) {
  return r.kind === "FloatValue";
}
function Uc(r) {
  return r.kind === "Variable";
}
function Bc(r) {
  return r.kind === "ObjectValue";
}
function Qc(r) {
  return r.kind === "ListValue";
}
function Vc(r) {
  return r.kind === "EnumValue";
}
function Gc(r) {
  return r.kind === "NullValue";
}
function Ue(r, e, t, n) {
  if (jc(t) || $c(t))
    r[e.value] = Number(t.value);
  else if (Lc(t) || Mc(t))
    r[e.value] = t.value;
  else if (Bc(t)) {
    var i = {};
    t.fields.map(function(o) {
      return Ue(i, o.name, o.value, n);
    }), r[e.value] = i;
  } else if (Uc(t)) {
    var a = (n || {})[t.name.value];
    r[e.value] = a;
  } else if (Qc(t))
    r[e.value] = t.values.map(function(o) {
      var s = {};
      return Ue(s, e, o, n), s[e.value];
    });
  else if (Vc(t))
    r[e.value] = t.value;
  else if (Gc(t))
    r[e.value] = null;
  else
    throw process.env.NODE_ENV === "production" ? new _(17) : new _('The inline argument "' + e.value + '" of kind "' + t.kind + '"is not supported. Use variables instead of inline arguments to overcome this limitation.');
}
function Kc(r, e) {
  var t = null;
  r.directives && (t = {}, r.directives.forEach(function(i) {
    t[i.name.value] = {}, i.arguments && i.arguments.forEach(function(a) {
      var o = a.name, s = a.value;
      return Ue(t[i.name.value], o, s, e);
    });
  }));
  var n = null;
  return r.arguments && r.arguments.length && (n = {}, r.arguments.forEach(function(i) {
    var a = i.name, o = i.value;
    return Ue(n, a, o, e);
  })), Pa(r.name.value, n, t);
}
var Wc = [
  "connection",
  "include",
  "skip",
  "client",
  "rest",
  "export"
];
function Pa(r, e, t) {
  if (t && t.connection && t.connection.key)
    if (t.connection.filter && t.connection.filter.length > 0) {
      var n = t.connection.filter ? t.connection.filter : [];
      n.sort();
      var i = e, a = {};
      return n.forEach(function(u) {
        a[u] = i[u];
      }), t.connection.key + "(" + JSON.stringify(a) + ")";
    } else
      return t.connection.key;
  var o = r;
  if (e) {
    var s = Fc(e);
    o += "(" + s + ")";
  }
  return t && Object.keys(t).forEach(function(u) {
    Wc.indexOf(u) === -1 && (t[u] && Object.keys(t[u]).length ? o += "@" + u + "(" + JSON.stringify(t[u]) + ")" : o += "@" + u);
  }), o;
}
function rn(r, e) {
  if (r.arguments && r.arguments.length) {
    var t = {};
    return r.arguments.forEach(function(n) {
      var i = n.name, a = n.value;
      return Ue(t, i, a, e);
    }), t;
  }
  return null;
}
function ut(r) {
  return r.alias ? r.alias.value : r.name.value;
}
function xe(r) {
  return r.kind === "Field";
}
function Jt(r) {
  return r.kind === "InlineFragment";
}
function jt(r) {
  return r && r.type === "id" && typeof r.generated == "boolean";
}
function kt(r, e) {
  return e === void 0 && (e = !1), g({ type: "id", generated: e }, typeof r == "string" ? { id: r, typename: void 0 } : r);
}
function zc(r) {
  return r != null && typeof r == "object" && r.type === "json";
}
function Hc(r, e) {
  if (r.directives && r.directives.length) {
    var t = {};
    return r.directives.forEach(function(n) {
      t[n.name.value] = rn(n, e);
    }), t;
  }
  return null;
}
function nn(r, e) {
  return e === void 0 && (e = {}), Zc(r.directives).every(function(t) {
    var n = t.directive, i = t.ifArgument, a = !1;
    return i.value.kind === "Variable" ? (a = e[i.value.name.value], process.env.NODE_ENV === "production" ? E(a !== void 0, 13) : E(a !== void 0, "Invalid variable referenced in @" + n.name.value + " directive.")) : a = i.value.value, n.name.value === "skip" ? !a : a;
  });
}
function Yc(r) {
  var e = [];
  return me(r, {
    Directive: function(t) {
      e.push(t.name.value);
    }
  }), e;
}
function $t(r, e) {
  return Yc(e).some(function(t) {
    return r.indexOf(t) > -1;
  });
}
function Jc(r) {
  return r && $t(["client"], r) && $t(["export"], r);
}
function Xc(r) {
  var e = r.name.value;
  return e === "skip" || e === "include";
}
function Zc(r) {
  return r ? r.filter(Xc).map(function(e) {
    var t = e.arguments, n = e.name.value;
    process.env.NODE_ENV === "production" ? E(t && t.length === 1, 14) : E(t && t.length === 1, "Incorrect number of arguments for the @" + n + " directive.");
    var i = t[0];
    process.env.NODE_ENV === "production" ? E(i.name && i.name.value === "if", 15) : E(i.name && i.name.value === "if", "Invalid argument for the @" + n + " directive.");
    var a = i.value;
    return process.env.NODE_ENV === "production" ? E(a && (a.kind === "Variable" || a.kind === "BooleanValue"), 16) : E(a && (a.kind === "Variable" || a.kind === "BooleanValue"), "Argument for the @" + n + " directive must be a variable or a boolean value."), { directive: e, ifArgument: i };
  }) : [];
}
function wi(r, e) {
  var t = e, n = [];
  r.definitions.forEach(function(a) {
    if (a.kind === "OperationDefinition")
      throw process.env.NODE_ENV === "production" ? new _(11) : new _("Found a " + a.operation + " operation" + (a.name ? " named '" + a.name.value + "'" : "") + ". No operations are allowed when using a fragment as a query. Only fragments are allowed.");
    a.kind === "FragmentDefinition" && n.push(a);
  }), typeof t > "u" && (process.env.NODE_ENV === "production" ? E(n.length === 1, 12) : E(n.length === 1, "Found " + n.length + " fragments. `fragmentName` must be provided when there is not exactly 1 fragment."), t = n[0].name.value);
  var i = g(g({}, r), { definitions: en([
    {
      kind: "OperationDefinition",
      operation: "query",
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "FragmentSpread",
            name: {
              kind: "Name",
              value: t
            }
          }
        ]
      }
    }
  ], r.definitions) });
  return i;
}
function an(r) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  return e.forEach(function(n) {
    typeof n > "u" || n === null || Object.keys(n).forEach(function(i) {
      r[i] = n[i];
    });
  }), r;
}
function pt(r) {
  process.env.NODE_ENV === "production" ? E(r && r.kind === "Document", 2) : E(r && r.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql');
  var e = r.definitions.filter(function(t) {
    return t.kind !== "FragmentDefinition";
  }).map(function(t) {
    if (t.kind !== "OperationDefinition")
      throw process.env.NODE_ENV === "production" ? new _(3) : new _('Schema type definitions not allowed in queries. Found: "' + t.kind + '"');
    return t;
  });
  return process.env.NODE_ENV === "production" ? E(e.length <= 1, 4) : E(e.length <= 1, "Ambiguous GraphQL document: contains " + e.length + " operations"), r;
}
function dt(r) {
  return pt(r), r.definitions.filter(function(e) {
    return e.kind === "OperationDefinition";
  })[0];
}
function on(r) {
  return r.definitions.filter(function(e) {
    return e.kind === "OperationDefinition" && e.name;
  }).map(function(e) {
    return e.name.value;
  })[0] || null;
}
function Xt(r) {
  return r.definitions.filter(function(e) {
    return e.kind === "FragmentDefinition";
  });
}
function el(r) {
  var e = dt(r);
  return process.env.NODE_ENV === "production" ? E(e && e.operation === "query", 6) : E(e && e.operation === "query", "Must contain a query definition."), e;
}
function tl(r) {
  process.env.NODE_ENV === "production" ? E(r.kind === "Document", 7) : E(r.kind === "Document", 'Expecting a parsed GraphQL document. Perhaps you need to wrap the query string in a "gql" tag? http://docs.apollostack.com/apollo-client/core.html#gql'), process.env.NODE_ENV === "production" ? E(r.definitions.length <= 1, 8) : E(r.definitions.length <= 1, "Fragment must have exactly one definition.");
  var e = r.definitions[0];
  return process.env.NODE_ENV === "production" ? E(e.kind === "FragmentDefinition", 9) : E(e.kind === "FragmentDefinition", "Must be a fragment definition."), e;
}
function sn(r) {
  pt(r);
  for (var e, t = 0, n = r.definitions; t < n.length; t++) {
    var i = n[t];
    if (i.kind === "OperationDefinition") {
      var a = i.operation;
      if (a === "query" || a === "mutation" || a === "subscription")
        return i;
    }
    i.kind === "FragmentDefinition" && !e && (e = i);
  }
  if (e)
    return e;
  throw process.env.NODE_ENV === "production" ? new _(10) : new _("Expected a parsed GraphQL query with a query, mutation, subscription, or a fragment.");
}
function Zt(r) {
  r === void 0 && (r = []);
  var e = {};
  return r.forEach(function(t) {
    e[t.name.value] = t;
  }), e;
}
function un(r) {
  if (r && r.variableDefinitions && r.variableDefinitions.length) {
    var e = r.variableDefinitions.filter(function(t) {
      var n = t.defaultValue;
      return n;
    }).map(function(t) {
      var n = t.variable, i = t.defaultValue, a = {};
      return Ue(a, n.name, i), a;
    });
    return an.apply(void 0, en([{}], e));
  }
  return {};
}
function Ri(r, e, t) {
  var n = 0;
  return r.forEach(function(i, a) {
    e.call(this, i, a, r) && (r[n++] = i);
  }, t), r.length = n, r;
}
var rl = {
  kind: "Field",
  name: {
    kind: "Name",
    value: "__typename"
  }
};
function Ca(r, e) {
  return r.selectionSet.selections.every(function(t) {
    return t.kind === "FragmentSpread" && Ca(e[t.name.value], e);
  });
}
function cn(r) {
  return Ca(dt(r) || tl(r), Zt(Xt(r))) ? null : r;
}
function Si(r) {
  return function(t) {
    return r.some(function(n) {
      return n.name && n.name === t.name.value || n.test && n.test(t);
    });
  };
}
function xa(r, e) {
  var t = /* @__PURE__ */ Object.create(null), n = [], i = /* @__PURE__ */ Object.create(null), a = [], o = cn(me(e, {
    Variable: {
      enter: function(s, u, c) {
        c.kind !== "VariableDefinition" && (t[s.name.value] = !0);
      }
    },
    Field: {
      enter: function(s) {
        if (r && s.directives) {
          var u = r.some(function(c) {
            return c.remove;
          });
          if (u && s.directives && s.directives.some(Si(r)))
            return s.arguments && s.arguments.forEach(function(c) {
              c.value.kind === "Variable" && n.push({
                name: c.value.name.value
              });
            }), s.selectionSet && Da(s.selectionSet).forEach(function(c) {
              a.push({
                name: c.name.value
              });
            }), null;
        }
      }
    },
    FragmentSpread: {
      enter: function(s) {
        i[s.name.value] = !0;
      }
    },
    Directive: {
      enter: function(s) {
        if (Si(r)(s))
          return null;
      }
    }
  }));
  return o && Ri(n, function(s) {
    return !t[s.name];
  }).length && (o = sl(n, o)), o && Ri(a, function(s) {
    return !i[s.name];
  }).length && (o = ul(a, o)), o;
}
function nl(r) {
  return me(pt(r), {
    SelectionSet: {
      enter: function(e, t, n) {
        if (!(n && n.kind === "OperationDefinition")) {
          var i = e.selections;
          if (i) {
            var a = i.some(function(s) {
              return xe(s) && (s.name.value === "__typename" || s.name.value.lastIndexOf("__", 0) === 0);
            });
            if (!a) {
              var o = n;
              if (!(xe(o) && o.directives && o.directives.some(function(s) {
                return s.name.value === "export";
              })))
                return g(g({}, e), { selections: en(i, [rl]) });
            }
          }
        }
      }
    }
  });
}
var il = {
  test: function(r) {
    var e = r.name.value === "connection";
    return e && (!r.arguments || !r.arguments.some(function(t) {
      return t.name.value === "key";
    })) && (process.env.NODE_ENV === "production" || E.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.")), e;
  }
};
function al(r) {
  return xa([il], pt(r));
}
function ol(r) {
  return function(t) {
    return r.some(function(n) {
      return t.value && t.value.kind === "Variable" && t.value.name && (n.name === t.value.name.value || n.test && n.test(t));
    });
  };
}
function sl(r, e) {
  var t = ol(r);
  return cn(me(e, {
    OperationDefinition: {
      enter: function(n) {
        return g(g({}, n), { variableDefinitions: n.variableDefinitions.filter(function(i) {
          return !r.some(function(a) {
            return a.name === i.variable.name.value;
          });
        }) });
      }
    },
    Field: {
      enter: function(n) {
        var i = r.some(function(o) {
          return o.remove;
        });
        if (i) {
          var a = 0;
          if (n.arguments.forEach(function(o) {
            t(o) && (a += 1);
          }), a === 1)
            return null;
        }
      }
    },
    Argument: {
      enter: function(n) {
        if (t(n))
          return null;
      }
    }
  }));
}
function ul(r, e) {
  function t(n) {
    if (r.some(function(i) {
      return i.name === n.name.value;
    }))
      return null;
  }
  return cn(me(e, {
    FragmentSpread: { enter: t },
    FragmentDefinition: { enter: t }
  }));
}
function Da(r) {
  var e = [];
  return r.selections.forEach(function(t) {
    (xe(t) || Jt(t)) && t.selectionSet ? Da(t.selectionSet).forEach(function(n) {
      return e.push(n);
    }) : t.kind === "FragmentSpread" && e.push(t);
  }), e;
}
function cl(r) {
  var e = sn(r), t = e.operation;
  if (t === "query")
    return r;
  var n = me(r, {
    OperationDefinition: {
      enter: function(i) {
        return g(g({}, i), { operation: "query" });
      }
    }
  });
  return n;
}
function ll(r) {
  pt(r);
  var e = xa([
    {
      test: function(t) {
        return t.name.value === "client";
      },
      remove: !0
    }
  ], r);
  return e && (e = me(e, {
    FragmentDefinition: {
      enter: function(t) {
        if (t.selectionSet) {
          var n = t.selectionSet.selections.every(function(i) {
            return xe(i) && i.name.value === "__typename";
          });
          if (n)
            return null;
        }
      }
    }
  })), e;
}
var ln = typeof WeakMap == "function" && !(typeof navigator == "object" && navigator.product === "ReactNative"), fl = Object.prototype.toString;
function hl(r) {
  return Mr(r, /* @__PURE__ */ new Map());
}
function Mr(r, e) {
  switch (fl.call(r)) {
    case "[object Array]": {
      if (e.has(r))
        return e.get(r);
      var t = r.slice(0);
      return e.set(r, t), t.forEach(function(i, a) {
        t[a] = Mr(i, e);
      }), t;
    }
    case "[object Object]": {
      if (e.has(r))
        return e.get(r);
      var n = Object.create(Object.getPrototypeOf(r));
      return e.set(r, n), Object.keys(r).forEach(function(i) {
        n[i] = Mr(r[i], e);
      }), n;
    }
    default:
      return r;
  }
}
function pl() {
  return typeof process < "u" && process.env.NODE_ENV ? process.env.NODE_ENV : "development";
}
function fn(r) {
  return pl() === r;
}
function dl() {
  return fn("production") === !0;
}
function ml() {
  return fn("development") === !0;
}
function Ia() {
  return fn("test") === !0;
}
function Lr(r) {
  try {
    return r();
  } catch (e) {
    console.error && console.error(e);
  }
}
function Pe(r) {
  return r.errors && r.errors.length;
}
function Aa(r) {
  return Object.freeze(r), Object.getOwnPropertyNames(r).forEach(function(e) {
    r[e] !== null && (typeof r[e] == "object" || typeof r[e] == "function") && !Object.isFrozen(r[e]) && Aa(r[e]);
  }), r;
}
function vl(r) {
  if (ml() || Ia()) {
    var e = typeof Symbol == "function" && typeof Symbol("") == "string";
    if (!e)
      return Aa(r);
  }
  return r;
}
var yl = Object.prototype.hasOwnProperty;
function Oi() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r[e] = arguments[e];
  return hn(r);
}
function hn(r) {
  var e = r[0] || {}, t = r.length;
  if (t > 1) {
    var n = [];
    e = jr(e, n);
    for (var i = 1; i < t; ++i)
      e = _a(e, r[i], n);
  }
  return e;
}
function Ti(r) {
  return r !== null && typeof r == "object";
}
function _a(r, e, t) {
  return Ti(e) && Ti(r) ? (Object.isExtensible && !Object.isExtensible(r) && (r = jr(r, t)), Object.keys(e).forEach(function(n) {
    var i = e[n];
    if (yl.call(r, n)) {
      var a = r[n];
      i !== a && (r[n] = _a(jr(a, t), i, t));
    } else
      r[n] = i;
  }), r) : e;
}
function jr(r, e) {
  return r !== null && typeof r == "object" && e.indexOf(r) < 0 && (Array.isArray(r) ? r = r.slice(0) : r = g({ __proto__: Object.getPrototypeOf(r) }, r), e.push(r)), r;
}
var er = {};
Object.defineProperty(er, "__esModule", {
  value: !0
});
er.Observable = void 0;
function pn(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ki(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
  }
}
function dn(r, e, t) {
  return e && ki(r.prototype, e), t && ki(r, t), r;
}
var mn = function() {
  return typeof Symbol == "function";
}, vn = function(r) {
  return mn() && !!Symbol[r];
}, yn = function(r) {
  return vn(r) ? Symbol[r] : "@@" + r;
};
mn() && !vn("observable") && (Symbol.observable = Symbol("observable"));
var gl = yn("iterator"), $r = yn("observable"), Fa = yn("species");
function Ut(r, e) {
  var t = r[e];
  if (t != null) {
    if (typeof t != "function")
      throw new TypeError(t + " is not a function");
    return t;
  }
}
function et(r) {
  var e = r.constructor;
  return e !== void 0 && (e = e[Fa], e === null && (e = void 0)), e !== void 0 ? e : tr;
}
function bl(r) {
  return r instanceof tr;
}
function Be(r) {
  Be.log ? Be.log(r) : setTimeout(function() {
    throw r;
  });
}
function Nt(r) {
  Promise.resolve().then(function() {
    try {
      r();
    } catch (e) {
      Be(e);
    }
  });
}
function qa(r) {
  var e = r._cleanup;
  if (e !== void 0 && (r._cleanup = void 0, !!e))
    try {
      if (typeof e == "function")
        e();
      else {
        var t = Ut(e, "unsubscribe");
        t && t.call(e);
      }
    } catch (n) {
      Be(n);
    }
}
function Ur(r) {
  r._observer = void 0, r._queue = void 0, r._state = "closed";
}
function El(r) {
  var e = r._queue;
  if (e) {
    r._queue = void 0, r._state = "ready";
    for (var t = 0; t < e.length && (Ma(r, e[t].type, e[t].value), r._state !== "closed"); ++t)
      ;
  }
}
function Ma(r, e, t) {
  r._state = "running";
  var n = r._observer;
  try {
    var i = Ut(n, e);
    switch (e) {
      case "next":
        i && i.call(n, t);
        break;
      case "error":
        if (Ur(r), i)
          i.call(n, t);
        else
          throw t;
        break;
      case "complete":
        Ur(r), i && i.call(n);
        break;
    }
  } catch (a) {
    Be(a);
  }
  r._state === "closed" ? qa(r) : r._state === "running" && (r._state = "ready");
}
function mr(r, e, t) {
  if (r._state !== "closed") {
    if (r._state === "buffering") {
      r._queue.push({
        type: e,
        value: t
      });
      return;
    }
    if (r._state !== "ready") {
      r._state = "buffering", r._queue = [{
        type: e,
        value: t
      }], Nt(function() {
        return El(r);
      });
      return;
    }
    Ma(r, e, t);
  }
}
var wl = /* @__PURE__ */ function() {
  function r(e, t) {
    pn(this, r), this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing";
    var n = new Rl(this);
    try {
      this._cleanup = t.call(void 0, n);
    } catch (i) {
      n.error(i);
    }
    this._state === "initializing" && (this._state = "ready");
  }
  return dn(r, [{
    key: "unsubscribe",
    value: function() {
      this._state !== "closed" && (Ur(this), qa(this));
    }
  }, {
    key: "closed",
    get: function() {
      return this._state === "closed";
    }
  }]), r;
}(), Rl = /* @__PURE__ */ function() {
  function r(e) {
    pn(this, r), this._subscription = e;
  }
  return dn(r, [{
    key: "next",
    value: function(t) {
      mr(this._subscription, "next", t);
    }
  }, {
    key: "error",
    value: function(t) {
      mr(this._subscription, "error", t);
    }
  }, {
    key: "complete",
    value: function() {
      mr(this._subscription, "complete");
    }
  }, {
    key: "closed",
    get: function() {
      return this._subscription._state === "closed";
    }
  }]), r;
}(), tr = /* @__PURE__ */ function() {
  function r(e) {
    if (pn(this, r), !(this instanceof r))
      throw new TypeError("Observable cannot be called as a function");
    if (typeof e != "function")
      throw new TypeError("Observable initializer must be a function");
    this._subscriber = e;
  }
  return dn(r, [{
    key: "subscribe",
    value: function(t) {
      return (typeof t != "object" || t === null) && (t = {
        next: t,
        error: arguments[1],
        complete: arguments[2]
      }), new wl(t, this._subscriber);
    }
  }, {
    key: "forEach",
    value: function(t) {
      var n = this;
      return new Promise(function(i, a) {
        if (typeof t != "function") {
          a(new TypeError(t + " is not a function"));
          return;
        }
        function o() {
          s.unsubscribe(), i();
        }
        var s = n.subscribe({
          next: function(u) {
            try {
              t(u, o);
            } catch (c) {
              a(c), s.unsubscribe();
            }
          },
          error: a,
          complete: i
        });
      });
    }
  }, {
    key: "map",
    value: function(t) {
      var n = this;
      if (typeof t != "function")
        throw new TypeError(t + " is not a function");
      var i = et(this);
      return new i(function(a) {
        return n.subscribe({
          next: function(o) {
            try {
              o = t(o);
            } catch (s) {
              return a.error(s);
            }
            a.next(o);
          },
          error: function(o) {
            a.error(o);
          },
          complete: function() {
            a.complete();
          }
        });
      });
    }
  }, {
    key: "filter",
    value: function(t) {
      var n = this;
      if (typeof t != "function")
        throw new TypeError(t + " is not a function");
      var i = et(this);
      return new i(function(a) {
        return n.subscribe({
          next: function(o) {
            try {
              if (!t(o))
                return;
            } catch (s) {
              return a.error(s);
            }
            a.next(o);
          },
          error: function(o) {
            a.error(o);
          },
          complete: function() {
            a.complete();
          }
        });
      });
    }
  }, {
    key: "reduce",
    value: function(t) {
      var n = this;
      if (typeof t != "function")
        throw new TypeError(t + " is not a function");
      var i = et(this), a = arguments.length > 1, o = !1, s = arguments[1], u = s;
      return new i(function(c) {
        return n.subscribe({
          next: function(l) {
            var h = !o;
            if (o = !0, !h || a)
              try {
                u = t(u, l);
              } catch (p) {
                return c.error(p);
              }
            else
              u = l;
          },
          error: function(l) {
            c.error(l);
          },
          complete: function() {
            if (!o && !a)
              return c.error(new TypeError("Cannot reduce an empty sequence"));
            c.next(u), c.complete();
          }
        });
      });
    }
  }, {
    key: "concat",
    value: function() {
      for (var t = this, n = arguments.length, i = new Array(n), a = 0; a < n; a++)
        i[a] = arguments[a];
      var o = et(this);
      return new o(function(s) {
        var u, c = 0;
        function l(h) {
          u = h.subscribe({
            next: function(p) {
              s.next(p);
            },
            error: function(p) {
              s.error(p);
            },
            complete: function() {
              c === i.length ? (u = void 0, s.complete()) : l(o.from(i[c++]));
            }
          });
        }
        return l(t), function() {
          u && (u.unsubscribe(), u = void 0);
        };
      });
    }
  }, {
    key: "flatMap",
    value: function(t) {
      var n = this;
      if (typeof t != "function")
        throw new TypeError(t + " is not a function");
      var i = et(this);
      return new i(function(a) {
        var o = [], s = n.subscribe({
          next: function(c) {
            if (t)
              try {
                c = t(c);
              } catch (h) {
                return a.error(h);
              }
            var l = i.from(c).subscribe({
              next: function(h) {
                a.next(h);
              },
              error: function(h) {
                a.error(h);
              },
              complete: function() {
                var h = o.indexOf(l);
                h >= 0 && o.splice(h, 1), u();
              }
            });
            o.push(l);
          },
          error: function(c) {
            a.error(c);
          },
          complete: function() {
            u();
          }
        });
        function u() {
          s.closed && o.length === 0 && a.complete();
        }
        return function() {
          o.forEach(function(c) {
            return c.unsubscribe();
          }), s.unsubscribe();
        };
      });
    }
  }, {
    key: $r,
    value: function() {
      return this;
    }
  }], [{
    key: "from",
    value: function(t) {
      var n = typeof this == "function" ? this : r;
      if (t == null)
        throw new TypeError(t + " is not an object");
      var i = Ut(t, $r);
      if (i) {
        var a = i.call(t);
        if (Object(a) !== a)
          throw new TypeError(a + " is not an object");
        return bl(a) && a.constructor === n ? a : new n(function(o) {
          return a.subscribe(o);
        });
      }
      if (vn("iterator") && (i = Ut(t, gl), i))
        return new n(function(o) {
          Nt(function() {
            if (!o.closed) {
              var s = !0, u = !1, c = void 0;
              try {
                for (var l = i.call(t)[Symbol.iterator](), h; !(s = (h = l.next()).done); s = !0) {
                  var p = h.value;
                  if (o.next(p), o.closed)
                    return;
                }
              } catch (m) {
                u = !0, c = m;
              } finally {
                try {
                  !s && l.return != null && l.return();
                } finally {
                  if (u)
                    throw c;
                }
              }
              o.complete();
            }
          });
        });
      if (Array.isArray(t))
        return new n(function(o) {
          Nt(function() {
            if (!o.closed) {
              for (var s = 0; s < t.length; ++s)
                if (o.next(t[s]), o.closed)
                  return;
              o.complete();
            }
          });
        });
      throw new TypeError(t + " is not observable");
    }
  }, {
    key: "of",
    value: function() {
      for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
        n[i] = arguments[i];
      var a = typeof this == "function" ? this : r;
      return new a(function(o) {
        Nt(function() {
          if (!o.closed) {
            for (var s = 0; s < n.length; ++s)
              if (o.next(n[s]), o.closed)
                return;
            o.complete();
          }
        });
      });
    }
  }, {
    key: Fa,
    get: function() {
      return this;
    }
  }]), r;
}();
er.Observable = tr;
mn() && Object.defineProperty(tr, Symbol("extensions"), {
  value: {
    symbol: $r,
    hostReportError: Be
  },
  configurable: !0
});
var Sl = er.Observable;
const Ol = /* @__PURE__ */ Ht(Sl);
var Y = Ol;
function Tl(r) {
  for (var e = [
    "query",
    "operationName",
    "variables",
    "extensions",
    "context"
  ], t = 0, n = Object.keys(r); t < n.length; t++) {
    var i = n[t];
    if (e.indexOf(i) < 0)
      throw process.env.NODE_ENV === "production" ? new _(2) : new _("illegal argument: " + i);
  }
  return r;
}
var kl = function(r) {
  de(e, r);
  function e(t, n) {
    var i = r.call(this, t) || this;
    return i.link = n, i;
  }
  return e;
}(Error);
function Bt(r) {
  return r.request.length <= 1;
}
function Ni(r) {
  return new Y(function(e) {
    e.error(r);
  });
}
function Nl(r) {
  var e = {
    variables: r.variables || {},
    extensions: r.extensions || {},
    operationName: r.operationName,
    query: r.query
  };
  return e.operationName || (e.operationName = typeof e.query != "string" ? on(e.query) : ""), e;
}
function Pl(r, e) {
  var t = g({}, r), n = function(a) {
    typeof a == "function" ? t = g({}, t, a(t)) : t = g({}, t, a);
  }, i = function() {
    return g({}, t);
  };
  return Object.defineProperty(e, "setContext", {
    enumerable: !1,
    value: n
  }), Object.defineProperty(e, "getContext", {
    enumerable: !1,
    value: i
  }), Object.defineProperty(e, "toKey", {
    enumerable: !1,
    value: function() {
      return Cl(e);
    }
  }), e;
}
function Cl(r) {
  var e = r.query, t = r.variables, n = r.operationName;
  return JSON.stringify([n, e, t]);
}
function La(r, e) {
  return e ? e(r) : Y.of();
}
function ct(r) {
  return typeof r == "function" ? new ce(r) : r;
}
function ja() {
  return new ce(function() {
    return Y.of();
  });
}
function xl(r) {
  return r.length === 0 ? ja() : r.map(ct).reduce(function(e, t) {
    return e.concat(t);
  });
}
function Pi(r, e, t) {
  var n = ct(e), i = ct(t || new ce(La));
  return Bt(n) && Bt(i) ? new ce(function(a) {
    return r(a) ? n.request(a) || Y.of() : i.request(a) || Y.of();
  }) : new ce(function(a, o) {
    return r(a) ? n.request(a, o) || Y.of() : i.request(a, o) || Y.of();
  });
}
var Dl = function(r, e) {
  var t = ct(r);
  if (Bt(t))
    return process.env.NODE_ENV === "production" || E.warn(new kl("You are calling concat on a terminating link, which will have no effect", t)), t;
  var n = ct(e);
  return Bt(n) ? new ce(function(i) {
    return t.request(i, function(a) {
      return n.request(a) || Y.of();
    }) || Y.of();
  }) : new ce(function(i, a) {
    return t.request(i, function(o) {
      return n.request(o, a) || Y.of();
    }) || Y.of();
  });
}, ce = function() {
  function r(e) {
    e && (this.request = e);
  }
  return r.prototype.split = function(e, t, n) {
    return this.concat(Pi(e, t, n || new r(La)));
  }, r.prototype.concat = function(e) {
    return Dl(this, e);
  }, r.prototype.request = function(e, t) {
    throw process.env.NODE_ENV === "production" ? new _(1) : new _("request is not implemented");
  }, r.empty = ja, r.from = xl, r.split = Pi, r.execute = Qt, r;
}();
function Qt(r, e) {
  return r.request(Pl(e.context, Nl(Tl(e)))) || Y.of();
}
function Il(r) {
  var e, t = r.Symbol;
  return typeof t == "function" ? t.observable ? e = t.observable : (e = t("observable"), t.observable = e) : e = "@@observable", e;
}
var Me;
typeof self < "u" ? Me = self : typeof window < "u" ? Me = window : typeof global < "u" ? Me = global : typeof module < "u" ? Me = module : Me = Function("return this")();
var Al = Il(Me), K;
(function(r) {
  r[r.loading = 1] = "loading", r[r.setVariables = 2] = "setVariables", r[r.fetchMore = 3] = "fetchMore", r[r.refetch = 4] = "refetch", r[r.poll = 6] = "poll", r[r.ready = 7] = "ready", r[r.error = 8] = "error";
})(K || (K = {}));
function $a(r) {
  return r < 7;
}
var lt = function(r) {
  de(e, r);
  function e() {
    return r !== null && r.apply(this, arguments) || this;
  }
  return e.prototype[Al] = function() {
    return this;
  }, e.prototype["@@observable"] = function() {
    return this;
  }, e;
}(Y);
function je(r) {
  return Array.isArray(r) && r.length > 0;
}
function _l(r) {
  return r.hasOwnProperty("graphQLErrors");
}
var Fl = function(r) {
  var e = "";
  return je(r.graphQLErrors) && r.graphQLErrors.forEach(function(t) {
    var n = t ? t.message : "Error message not found.";
    e += "GraphQL error: " + n + `
`;
  }), r.networkError && (e += "Network error: " + r.networkError.message + `
`), e = e.replace(/\n$/, ""), e;
}, ge = function(r) {
  de(e, r);
  function e(t) {
    var n = t.graphQLErrors, i = t.networkError, a = t.errorMessage, o = t.extraInfo, s = r.call(this, a) || this;
    return s.graphQLErrors = n || [], s.networkError = i || null, a ? s.message = a : s.message = Fl(s), s.extraInfo = o, s.__proto__ = e.prototype, s;
  }
  return e;
}(Error), Ce;
(function(r) {
  r[r.normal = 1] = "normal", r[r.refetch = 2] = "refetch", r[r.poll = 3] = "poll";
})(Ce || (Ce = {}));
var ql = function(r, e) {
  return e === void 0 && (e = "none"), r && (r.networkError || e === "none" && je(r.graphQLErrors));
}, Ml = function(r) {
  de(e, r);
  function e(t) {
    var n = t.queryManager, i = t.options, a = t.shouldSubscribe, o = a === void 0 ? !0 : a, s = r.call(this, function(c) {
      return s.onSubscribe(c);
    }) || this;
    s.observers = /* @__PURE__ */ new Set(), s.subscriptions = /* @__PURE__ */ new Set(), s.isTornDown = !1, s.options = i, s.variables = i.variables || {}, s.queryId = n.generateQueryId(), s.shouldSubscribe = o;
    var u = dt(i.query);
    return s.queryName = u && u.name && u.name.value, s.queryManager = n, s;
  }
  return e.prototype.result = function() {
    var t = this;
    return new Promise(function(n, i) {
      var a = {
        next: function(s) {
          n(s), t.observers.delete(a), t.observers.size || t.queryManager.removeQuery(t.queryId), setTimeout(function() {
            o.unsubscribe();
          }, 0);
        },
        error: i
      }, o = t.subscribe(a);
    });
  }, e.prototype.currentResult = function() {
    var t = this.getCurrentResult();
    return t.data === void 0 && (t.data = {}), t;
  }, e.prototype.getCurrentResult = function() {
    if (this.isTornDown) {
      var t = this.lastResult;
      return {
        data: !this.lastError && t && t.data || void 0,
        error: this.lastError,
        loading: !1,
        networkStatus: K.error
      };
    }
    var n = this.queryManager.getCurrentQueryResult(this), i = n.data, a = n.partial, o = this.queryManager.queryStore.get(this.queryId), s, u = this.options.fetchPolicy, c = u === "network-only" || u === "no-cache";
    if (o) {
      var l = o.networkStatus;
      if (ql(o, this.options.errorPolicy))
        return {
          data: void 0,
          loading: !1,
          networkStatus: l,
          error: new ge({
            graphQLErrors: o.graphQLErrors,
            networkError: o.networkError
          })
        };
      o.variables && (this.options.variables = g(g({}, this.options.variables), o.variables), this.variables = this.options.variables), s = {
        data: i,
        loading: $a(l),
        networkStatus: l
      }, o.graphQLErrors && this.options.errorPolicy === "all" && (s.errors = o.graphQLErrors);
    } else {
      var h = c || a && u !== "cache-only";
      s = {
        data: i,
        loading: h,
        networkStatus: h ? K.loading : K.ready
      };
    }
    return a || this.updateLastResult(g(g({}, s), { stale: !1 })), g(g({}, s), { partial: a });
  }, e.prototype.isDifferentFromLastResult = function(t) {
    var n = this.lastResultSnapshot;
    return !(n && t && n.networkStatus === t.networkStatus && n.stale === t.stale && ie(n.data, t.data));
  }, e.prototype.getLastResult = function() {
    return this.lastResult;
  }, e.prototype.getLastError = function() {
    return this.lastError;
  }, e.prototype.resetLastResults = function() {
    delete this.lastResult, delete this.lastResultSnapshot, delete this.lastError, this.isTornDown = !1;
  }, e.prototype.resetQueryStoreErrors = function() {
    var t = this.queryManager.queryStore.get(this.queryId);
    t && (t.networkError = null, t.graphQLErrors = []);
  }, e.prototype.refetch = function(t) {
    var n = this.options.fetchPolicy;
    return n === "cache-only" ? Promise.reject(process.env.NODE_ENV === "production" ? new _(1) : new _("cache-only fetchPolicy option should not be used together with query refetch.")) : (n !== "no-cache" && n !== "cache-and-network" && (n = "network-only"), ie(this.variables, t) || (this.variables = g(g({}, this.variables), t)), ie(this.options.variables, this.variables) || (this.options.variables = g(g({}, this.options.variables), this.variables)), this.queryManager.fetchQuery(this.queryId, g(g({}, this.options), { fetchPolicy: n }), Ce.refetch));
  }, e.prototype.fetchMore = function(t) {
    var n = this;
    process.env.NODE_ENV === "production" ? E(t.updateQuery, 2) : E(t.updateQuery, "updateQuery option is required. This function defines how to update the query data with the new results.");
    var i = g(g({}, t.query ? t : g(g(g({}, this.options), t), { variables: g(g({}, this.variables), t.variables) })), { fetchPolicy: "network-only" }), a = this.queryManager.generateQueryId();
    return this.queryManager.fetchQuery(a, i, Ce.normal, this.queryId).then(function(o) {
      return n.updateQuery(function(s) {
        return t.updateQuery(s, {
          fetchMoreResult: o.data,
          variables: i.variables
        });
      }), n.queryManager.stopQuery(a), o;
    }, function(o) {
      throw n.queryManager.stopQuery(a), o;
    });
  }, e.prototype.subscribeToMore = function(t) {
    var n = this, i = this.queryManager.startGraphQLSubscription({
      query: t.document,
      variables: t.variables
    }).subscribe({
      next: function(a) {
        var o = t.updateQuery;
        o && n.updateQuery(function(s, u) {
          var c = u.variables;
          return o(s, {
            subscriptionData: a,
            variables: c
          });
        });
      },
      error: function(a) {
        if (t.onError) {
          t.onError(a);
          return;
        }
        process.env.NODE_ENV === "production" || E.error("Unhandled GraphQL subscription error", a);
      }
    });
    return this.subscriptions.add(i), function() {
      n.subscriptions.delete(i) && i.unsubscribe();
    };
  }, e.prototype.setOptions = function(t) {
    var n = this.options.fetchPolicy;
    this.options = g(g({}, this.options), t), t.pollInterval ? this.startPolling(t.pollInterval) : t.pollInterval === 0 && this.stopPolling();
    var i = t.fetchPolicy;
    return this.setVariables(this.options.variables, n !== i && (n === "cache-only" || n === "standby" || i === "network-only"), t.fetchResults);
  }, e.prototype.setVariables = function(t, n, i) {
    return n === void 0 && (n = !1), i === void 0 && (i = !0), this.isTornDown = !1, t = t || this.variables, !n && ie(t, this.variables) ? this.observers.size && i ? this.result() : Promise.resolve() : (this.variables = this.options.variables = t, this.observers.size ? this.queryManager.fetchQuery(this.queryId, this.options) : Promise.resolve());
  }, e.prototype.updateQuery = function(t) {
    var n = this.queryManager, i = n.getQueryWithPreviousResult(this.queryId), a = i.previousResult, o = i.variables, s = i.document, u = Lr(function() {
      return t(a, { variables: o });
    });
    u && (n.dataStore.markUpdateQueryResult(s, o, u), n.broadcastQueries());
  }, e.prototype.stopPolling = function() {
    this.queryManager.stopPollingQuery(this.queryId), this.options.pollInterval = void 0;
  }, e.prototype.startPolling = function(t) {
    Ci(this), this.options.pollInterval = t, this.queryManager.startPollingQuery(this.options, this.queryId);
  }, e.prototype.updateLastResult = function(t) {
    var n = this.lastResult;
    return this.lastResult = t, this.lastResultSnapshot = this.queryManager.assumeImmutableResults ? t : hl(t), n;
  }, e.prototype.onSubscribe = function(t) {
    var n = this;
    try {
      var i = t._subscription._observer;
      i && !i.error && (i.error = Ll);
    } catch {
    }
    var a = !this.observers.size;
    return this.observers.add(t), t.next && this.lastResult && t.next(this.lastResult), t.error && this.lastError && t.error(this.lastError), a && this.setUpQuery(), function() {
      n.observers.delete(t) && !n.observers.size && n.tearDownQuery();
    };
  }, e.prototype.setUpQuery = function() {
    var t = this, n = this, i = n.queryManager, a = n.queryId;
    this.shouldSubscribe && i.addObservableQuery(a, this), this.options.pollInterval && (Ci(this), i.startPollingQuery(this.options, a));
    var o = function(s) {
      t.updateLastResult(g(g({}, t.lastResult), { errors: s.graphQLErrors, networkStatus: K.error, loading: !1 })), vr(t.observers, "error", t.lastError = s);
    };
    i.observeQuery(a, this.options, {
      next: function(s) {
        if (t.lastError || t.isDifferentFromLastResult(s)) {
          var u = t.updateLastResult(s), c = t.options, l = c.query, h = c.variables, p = c.fetchPolicy;
          i.transform(l).hasClientExports ? i.getLocalState().addExportedVariables(l, h).then(function(m) {
            var y = t.variables;
            t.variables = t.options.variables = m, !s.loading && u && p !== "cache-only" && i.transform(l).serverQuery && !ie(y, m) ? t.refetch() : vr(t.observers, "next", s);
          }) : vr(t.observers, "next", s);
        }
      },
      error: o
    }).catch(o);
  }, e.prototype.tearDownQuery = function() {
    var t = this.queryManager;
    this.isTornDown = !0, t.stopPollingQuery(this.queryId), this.subscriptions.forEach(function(n) {
      return n.unsubscribe();
    }), this.subscriptions.clear(), t.removeObservableQuery(this.queryId), t.stopQuery(this.queryId), this.observers.clear();
  }, e;
}(lt);
function Ll(r) {
  process.env.NODE_ENV === "production" || E.error("Unhandled error", r.message, r.stack);
}
function vr(r, e, t) {
  var n = [];
  r.forEach(function(i) {
    return i[e] && n.push(i);
  }), n.forEach(function(i) {
    return i[e](t);
  });
}
function Ci(r) {
  var e = r.options.fetchPolicy;
  process.env.NODE_ENV === "production" ? E(e !== "cache-first" && e !== "cache-only", 3) : E(e !== "cache-first" && e !== "cache-only", "Queries that specify the cache-first and cache-only fetchPolicies cannot also be polling queries.");
}
var jl = function() {
  function r() {
    this.store = {};
  }
  return r.prototype.getStore = function() {
    return this.store;
  }, r.prototype.get = function(e) {
    return this.store[e];
  }, r.prototype.initMutation = function(e, t, n) {
    this.store[e] = {
      mutation: t,
      variables: n || {},
      loading: !0,
      error: null
    };
  }, r.prototype.markMutationError = function(e, t) {
    var n = this.store[e];
    n && (n.loading = !1, n.error = t);
  }, r.prototype.markMutationResult = function(e) {
    var t = this.store[e];
    t && (t.loading = !1, t.error = null);
  }, r.prototype.reset = function() {
    this.store = {};
  }, r;
}(), $l = function() {
  function r() {
    this.store = {};
  }
  return r.prototype.getStore = function() {
    return this.store;
  }, r.prototype.get = function(e) {
    return this.store[e];
  }, r.prototype.initQuery = function(e) {
    var t = this.store[e.queryId];
    process.env.NODE_ENV === "production" ? E(!t || t.document === e.document || ie(t.document, e.document), 19) : E(!t || t.document === e.document || ie(t.document, e.document), "Internal Error: may not update existing query string in store");
    var n = !1, i = null;
    e.storePreviousVariables && t && t.networkStatus !== K.loading && (ie(t.variables, e.variables) || (n = !0, i = t.variables));
    var a;
    n ? a = K.setVariables : e.isPoll ? a = K.poll : e.isRefetch ? a = K.refetch : a = K.loading;
    var o = [];
    t && t.graphQLErrors && (o = t.graphQLErrors), this.store[e.queryId] = {
      document: e.document,
      variables: e.variables,
      previousVariables: i,
      networkError: null,
      graphQLErrors: o,
      networkStatus: a,
      metadata: e.metadata
    }, typeof e.fetchMoreForQueryId == "string" && this.store[e.fetchMoreForQueryId] && (this.store[e.fetchMoreForQueryId].networkStatus = K.fetchMore);
  }, r.prototype.markQueryResult = function(e, t, n) {
    !this.store || !this.store[e] || (this.store[e].networkError = null, this.store[e].graphQLErrors = je(t.errors) ? t.errors : [], this.store[e].previousVariables = null, this.store[e].networkStatus = K.ready, typeof n == "string" && this.store[n] && (this.store[n].networkStatus = K.ready));
  }, r.prototype.markQueryError = function(e, t, n) {
    !this.store || !this.store[e] || (this.store[e].networkError = t, this.store[e].networkStatus = K.error, typeof n == "string" && this.markQueryResultClient(n, !0));
  }, r.prototype.markQueryResultClient = function(e, t) {
    var n = this.store && this.store[e];
    n && (n.networkError = null, n.previousVariables = null, t && (n.networkStatus = K.ready));
  }, r.prototype.stopQuery = function(e) {
    delete this.store[e];
  }, r.prototype.reset = function(e) {
    var t = this;
    Object.keys(this.store).forEach(function(n) {
      e.indexOf(n) < 0 ? t.stopQuery(n) : t.store[n].networkStatus = K.loading;
    });
  }, r;
}();
function Ul(r) {
  return r.charAt(0).toUpperCase() + r.slice(1);
}
var Ua = function() {
  function r(e) {
    var t = e.cache, n = e.client, i = e.resolvers, a = e.fragmentMatcher;
    this.cache = t, n && (this.client = n), i && this.addResolvers(i), a && this.setFragmentMatcher(a);
  }
  return r.prototype.addResolvers = function(e) {
    var t = this;
    this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(n) {
      t.resolvers = Oi(t.resolvers, n);
    }) : this.resolvers = Oi(this.resolvers, e);
  }, r.prototype.setResolvers = function(e) {
    this.resolvers = {}, this.addResolvers(e);
  }, r.prototype.getResolvers = function() {
    return this.resolvers || {};
  }, r.prototype.runResolvers = function(e) {
    var t = e.document, n = e.remoteResult, i = e.context, a = e.variables, o = e.onlyRunForcedResolvers, s = o === void 0 ? !1 : o;
    return be(this, void 0, void 0, function() {
      return Ee(this, function(u) {
        return t ? [2, this.resolveDocument(t, n.data, i, a, this.fragmentMatcher, s).then(function(c) {
          return g(g({}, n), { data: c.result });
        })] : [2, n];
      });
    });
  }, r.prototype.setFragmentMatcher = function(e) {
    this.fragmentMatcher = e;
  }, r.prototype.getFragmentMatcher = function() {
    return this.fragmentMatcher;
  }, r.prototype.clientQuery = function(e) {
    if ($t(["client"], e)) {
      if (this.resolvers)
        return e;
      process.env.NODE_ENV === "production" || E.warn("Found @client directives in a query but no ApolloClient resolvers were specified. This means ApolloClient local resolver handling has been disabled, and @client directives will be passed through to your link chain.");
    }
    return null;
  }, r.prototype.serverQuery = function(e) {
    return this.resolvers ? ll(e) : e;
  }, r.prototype.prepareContext = function(e) {
    e === void 0 && (e = {});
    var t = this.cache, n = g(g({}, e), { cache: t, getCacheKey: function(i) {
      if (t.config)
        return t.config.dataIdFromObject(i);
      process.env.NODE_ENV === "production" ? E(!1, 6) : E(!1, "To use context.getCacheKey, you need to use a cache that has a configurable dataIdFromObject, like apollo-cache-inmemory.");
    } });
    return n;
  }, r.prototype.addExportedVariables = function(e, t, n) {
    return t === void 0 && (t = {}), n === void 0 && (n = {}), be(this, void 0, void 0, function() {
      return Ee(this, function(i) {
        return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(n), t).then(function(a) {
          return g(g({}, t), a.exportedVariables);
        })] : [2, g({}, t)];
      });
    });
  }, r.prototype.shouldForceResolvers = function(e) {
    var t = !1;
    return me(e, {
      Directive: {
        enter: function(n) {
          if (n.name.value === "client" && n.arguments && (t = n.arguments.some(function(i) {
            return i.name.value === "always" && i.value.kind === "BooleanValue" && i.value.value === !0;
          }), t))
            return ka;
        }
      }
    }), t;
  }, r.prototype.buildRootValueFromCache = function(e, t) {
    return this.cache.diff({
      query: cl(e),
      variables: t,
      returnPartialData: !0,
      optimistic: !1
    }).result;
  }, r.prototype.resolveDocument = function(e, t, n, i, a, o) {
    return n === void 0 && (n = {}), i === void 0 && (i = {}), a === void 0 && (a = function() {
      return !0;
    }), o === void 0 && (o = !1), be(this, void 0, void 0, function() {
      var s, u, c, l, h, p, m, y, b;
      return Ee(this, function(w) {
        return s = sn(e), u = Xt(e), c = Zt(u), l = s.operation, h = l ? Ul(l) : "Query", p = this, m = p.cache, y = p.client, b = {
          fragmentMap: c,
          context: g(g({}, n), {
            cache: m,
            client: y
          }),
          variables: i,
          fragmentMatcher: a,
          defaultOperationType: h,
          exportedVariables: {},
          onlyRunForcedResolvers: o
        }, [2, this.resolveSelectionSet(s.selectionSet, t, b).then(function(T) {
          return {
            result: T,
            exportedVariables: b.exportedVariables
          };
        })];
      });
    });
  }, r.prototype.resolveSelectionSet = function(e, t, n) {
    return be(this, void 0, void 0, function() {
      var i, a, o, s, u, c = this;
      return Ee(this, function(l) {
        return i = n.fragmentMap, a = n.context, o = n.variables, s = [t], u = function(h) {
          return be(c, void 0, void 0, function() {
            var p, m;
            return Ee(this, function(y) {
              return nn(h, o) ? xe(h) ? [2, this.resolveField(h, t, n).then(function(b) {
                var w;
                typeof b < "u" && s.push((w = {}, w[ut(h)] = b, w));
              })] : (Jt(h) ? p = h : (p = i[h.name.value], process.env.NODE_ENV === "production" ? E(p, 7) : E(p, "No fragment named " + h.name.value)), p && p.typeCondition && (m = p.typeCondition.name.value, n.fragmentMatcher(t, m, a)) ? [2, this.resolveSelectionSet(p.selectionSet, t, n).then(function(b) {
                s.push(b);
              })] : [2]) : [2];
            });
          });
        }, [2, Promise.all(e.selections.map(u)).then(function() {
          return hn(s);
        })];
      });
    });
  }, r.prototype.resolveField = function(e, t, n) {
    return be(this, void 0, void 0, function() {
      var i, a, o, s, u, c, l, h, p, m = this;
      return Ee(this, function(y) {
        return i = n.variables, a = e.name.value, o = ut(e), s = a !== o, u = t[o] || t[a], c = Promise.resolve(u), (!n.onlyRunForcedResolvers || this.shouldForceResolvers(e)) && (l = t.__typename || n.defaultOperationType, h = this.resolvers && this.resolvers[l], h && (p = h[s ? a : o], p && (c = Promise.resolve(p(t, rn(e, i), n.context, { field: e, fragmentMap: n.fragmentMap }))))), [2, c.then(function(b) {
          if (b === void 0 && (b = u), e.directives && e.directives.forEach(function(w) {
            w.name.value === "export" && w.arguments && w.arguments.forEach(function(T) {
              T.name.value === "as" && T.value.kind === "StringValue" && (n.exportedVariables[T.value.value] = b);
            });
          }), !e.selectionSet || b == null)
            return b;
          if (Array.isArray(b))
            return m.resolveSubSelectedArray(e, b, n);
          if (e.selectionSet)
            return m.resolveSelectionSet(e.selectionSet, b, n);
        })];
      });
    });
  }, r.prototype.resolveSubSelectedArray = function(e, t, n) {
    var i = this;
    return Promise.all(t.map(function(a) {
      if (a === null)
        return null;
      if (Array.isArray(a))
        return i.resolveSubSelectedArray(e, a, n);
      if (e.selectionSet)
        return i.resolveSelectionSet(e.selectionSet, a, n);
    }));
  }, r;
}();
function xi(r) {
  var e = /* @__PURE__ */ new Set(), t = null;
  return new lt(function(n) {
    return e.add(n), t = t || r.subscribe({
      next: function(i) {
        e.forEach(function(a) {
          return a.next && a.next(i);
        });
      },
      error: function(i) {
        e.forEach(function(a) {
          return a.error && a.error(i);
        });
      },
      complete: function() {
        e.forEach(function(i) {
          return i.complete && i.complete();
        });
      }
    }), function() {
      e.delete(n) && !e.size && t && (t.unsubscribe(), t = null);
    };
  });
}
function Bl(r, e) {
  return new lt(function(t) {
    var n = t.next, i = t.error, a = t.complete, o = 0, s = !1, u = {
      next: function(l) {
        ++o, new Promise(function(h) {
          h(e(l));
        }).then(function(h) {
          --o, n && n.call(t, h), s && u.complete();
        }, function(h) {
          --o, i && i.call(t, h);
        });
      },
      error: function(l) {
        i && i.call(t, l);
      },
      complete: function() {
        s = !0, o || a && a.call(t);
      }
    }, c = r.subscribe(u);
    return function() {
      return c.unsubscribe();
    };
  });
}
var Ql = Object.prototype.hasOwnProperty, Vl = function() {
  function r(e) {
    var t = e.link, n = e.queryDeduplication, i = n === void 0 ? !1 : n, a = e.store, o = e.onBroadcast, s = o === void 0 ? function() {
    } : o, u = e.ssrMode, c = u === void 0 ? !1 : u, l = e.clientAwareness, h = l === void 0 ? {} : l, p = e.localState, m = e.assumeImmutableResults;
    this.mutationStore = new jl(), this.queryStore = new $l(), this.clientAwareness = {}, this.idCounter = 1, this.queries = /* @__PURE__ */ new Map(), this.fetchQueryRejectFns = /* @__PURE__ */ new Map(), this.transformCache = new (ln ? WeakMap : Map)(), this.inFlightLinkObservables = /* @__PURE__ */ new Map(), this.pollingInfoByQueryId = /* @__PURE__ */ new Map(), this.link = t, this.queryDeduplication = i, this.dataStore = a, this.onBroadcast = s, this.clientAwareness = h, this.localState = p || new Ua({ cache: a.getCache() }), this.ssrMode = c, this.assumeImmutableResults = !!m;
  }
  return r.prototype.stop = function() {
    var e = this;
    this.queries.forEach(function(t, n) {
      e.stopQueryNoBroadcast(n);
    }), this.fetchQueryRejectFns.forEach(function(t) {
      t(process.env.NODE_ENV === "production" ? new _(8) : new _("QueryManager stopped while query was in flight"));
    });
  }, r.prototype.mutate = function(e) {
    var t = e.mutation, n = e.variables, i = e.optimisticResponse, a = e.updateQueries, o = e.refetchQueries, s = o === void 0 ? [] : o, u = e.awaitRefetchQueries, c = u === void 0 ? !1 : u, l = e.update, h = e.errorPolicy, p = h === void 0 ? "none" : h, m = e.fetchPolicy, y = e.context, b = y === void 0 ? {} : y;
    return be(this, void 0, void 0, function() {
      var w, T, R, x = this;
      return Ee(this, function(k) {
        switch (k.label) {
          case 0:
            return process.env.NODE_ENV === "production" ? E(t, 9) : E(t, "mutation option is required. You must specify your GraphQL document in the mutation option."), process.env.NODE_ENV === "production" ? E(!m || m === "no-cache", 10) : E(!m || m === "no-cache", "Mutations only support a 'no-cache' fetchPolicy. If you don't want to disable the cache, remove your fetchPolicy setting to proceed with the default mutation behavior."), w = this.generateQueryId(), t = this.transform(t).document, this.setQuery(w, function() {
              return { document: t };
            }), n = this.getVariables(t, n), this.transform(t).hasClientExports ? [4, this.localState.addExportedVariables(t, n, b)] : [3, 2];
          case 1:
            n = k.sent(), k.label = 2;
          case 2:
            return T = function() {
              var C = {};
              return a && x.queries.forEach(function(j, M) {
                var L = j.observableQuery;
                if (L) {
                  var I = L.queryName;
                  I && Ql.call(a, I) && (C[M] = {
                    updater: a[I],
                    query: x.queryStore.get(M)
                  });
                }
              }), C;
            }, this.mutationStore.initMutation(w, t, n), this.dataStore.markMutationInit({
              mutationId: w,
              document: t,
              variables: n,
              updateQueries: T(),
              update: l,
              optimisticResponse: i
            }), this.broadcastQueries(), R = this, [2, new Promise(function(C, j) {
              var M, L;
              R.getObservableFromLink(t, g(g({}, b), { optimisticResponse: i }), n, !1).subscribe({
                next: function(I) {
                  if (Pe(I) && p === "none") {
                    L = new ge({
                      graphQLErrors: I.errors
                    });
                    return;
                  }
                  R.mutationStore.markMutationResult(w), m !== "no-cache" && R.dataStore.markMutationResult({
                    mutationId: w,
                    result: I,
                    document: t,
                    variables: n,
                    updateQueries: T(),
                    update: l
                  }), M = I;
                },
                error: function(I) {
                  R.mutationStore.markMutationError(w, I), R.dataStore.markMutationComplete({
                    mutationId: w,
                    optimisticResponse: i
                  }), R.broadcastQueries(), R.setQuery(w, function() {
                    return { document: null };
                  }), j(new ge({
                    networkError: I
                  }));
                },
                complete: function() {
                  if (L && R.mutationStore.markMutationError(w, L), R.dataStore.markMutationComplete({
                    mutationId: w,
                    optimisticResponse: i
                  }), R.broadcastQueries(), L) {
                    j(L);
                    return;
                  }
                  typeof s == "function" && (s = s(M));
                  var I = [];
                  je(s) && s.forEach(function(J) {
                    if (typeof J == "string")
                      R.queries.forEach(function(X) {
                        var $ = X.observableQuery;
                        $ && $.queryName === J && I.push($.refetch());
                      });
                    else {
                      var Oe = {
                        query: J.query,
                        variables: J.variables,
                        fetchPolicy: "network-only"
                      };
                      J.context && (Oe.context = J.context), I.push(R.query(Oe));
                    }
                  }), Promise.all(c ? I : []).then(function() {
                    R.setQuery(w, function() {
                      return { document: null };
                    }), p === "ignore" && M && Pe(M) && delete M.errors, C(M);
                  });
                }
              });
            })];
        }
      });
    });
  }, r.prototype.fetchQuery = function(e, t, n, i) {
    return be(this, void 0, void 0, function() {
      var a, o, s, u, c, l, h, p, m, y, b, w, T, R, x, k, C, j, M = this;
      return Ee(this, function(L) {
        switch (L.label) {
          case 0:
            return a = t.metadata, o = a === void 0 ? null : a, s = t.fetchPolicy, u = s === void 0 ? "cache-first" : s, c = t.context, l = c === void 0 ? {} : c, h = this.transform(t.query).document, p = this.getVariables(h, t.variables), this.transform(h).hasClientExports ? [4, this.localState.addExportedVariables(h, p, l)] : [3, 2];
          case 1:
            p = L.sent(), L.label = 2;
          case 2:
            if (t = g(g({}, t), { variables: p }), y = u === "network-only" || u === "no-cache", b = y, y || (w = this.dataStore.getCache().diff({
              query: h,
              variables: p,
              returnPartialData: !0,
              optimistic: !1
            }), T = w.complete, R = w.result, b = !T || u === "cache-and-network", m = R), x = b && u !== "cache-only" && u !== "standby", $t(["live"], h) && (x = !0), k = this.idCounter++, C = u !== "no-cache" ? this.updateQueryWatch(e, h, t) : void 0, this.setQuery(e, function() {
              return {
                document: h,
                lastRequestId: k,
                invalidated: !0,
                cancel: C
              };
            }), this.invalidate(i), this.queryStore.initQuery({
              queryId: e,
              document: h,
              storePreviousVariables: x,
              variables: p,
              isPoll: n === Ce.poll,
              isRefetch: n === Ce.refetch,
              metadata: o,
              fetchMoreForQueryId: i
            }), this.broadcastQueries(), x) {
              if (j = this.fetchRequest({
                requestId: k,
                queryId: e,
                document: h,
                options: t,
                fetchMoreForQueryId: i
              }).catch(function(I) {
                throw _l(I) ? I : (k >= M.getQuery(e).lastRequestId && (M.queryStore.markQueryError(e, I, i), M.invalidate(e), M.invalidate(i), M.broadcastQueries()), new ge({ networkError: I }));
              }), u !== "cache-and-network")
                return [2, j];
              j.catch(function() {
              });
            }
            return this.queryStore.markQueryResultClient(e, !x), this.invalidate(e), this.invalidate(i), this.transform(h).hasForcedResolvers ? [2, this.localState.runResolvers({
              document: h,
              remoteResult: { data: m },
              context: l,
              variables: p,
              onlyRunForcedResolvers: !0
            }).then(function(I) {
              return M.markQueryResult(e, I, t, i), M.broadcastQueries(), I;
            })] : (this.broadcastQueries(), [2, { data: m }]);
        }
      });
    });
  }, r.prototype.markQueryResult = function(e, t, n, i) {
    var a = n.fetchPolicy, o = n.variables, s = n.errorPolicy;
    a === "no-cache" ? this.setQuery(e, function() {
      return {
        newData: { result: t.data, complete: !0 }
      };
    }) : this.dataStore.markQueryResult(t, this.getQuery(e).document, o, i, s === "ignore" || s === "all");
  }, r.prototype.queryListenerForObserver = function(e, t, n) {
    var i = this;
    function a(o, s) {
      if (n[o])
        try {
          n[o](s);
        } catch (u) {
          process.env.NODE_ENV === "production" || E.error(u);
        }
      else
        o === "error" && (process.env.NODE_ENV === "production" || E.error(s));
    }
    return function(o, s) {
      if (i.invalidate(e, !1), !!o) {
        var u = i.getQuery(e), c = u.observableQuery, l = u.document, h = c ? c.options.fetchPolicy : t.fetchPolicy;
        if (h !== "standby") {
          var p = $a(o.networkStatus), m = c && c.getLastResult(), y = !!(m && m.networkStatus !== o.networkStatus), b = t.returnPartialData || !s && o.previousVariables || y && t.notifyOnNetworkStatusChange || h === "cache-only" || h === "cache-and-network";
          if (!(p && !b)) {
            var w = je(o.graphQLErrors), T = c && c.options.errorPolicy || t.errorPolicy || "none";
            if (T === "none" && w || o.networkError)
              return a("error", new ge({
                graphQLErrors: o.graphQLErrors,
                networkError: o.networkError
              }));
            try {
              var R = void 0, x = void 0;
              if (s)
                h !== "no-cache" && h !== "network-only" && i.setQuery(e, function() {
                  return { newData: null };
                }), R = s.result, x = !s.complete;
              else {
                var k = c && c.getLastError(), C = T !== "none" && (k && k.graphQLErrors) !== o.graphQLErrors;
                if (m && m.data && !C)
                  R = m.data, x = !1;
                else {
                  var j = i.dataStore.getCache().diff({
                    query: l,
                    variables: o.previousVariables || o.variables,
                    returnPartialData: !0,
                    optimistic: !0
                  });
                  R = j.result, x = !j.complete;
                }
              }
              var M = x && !(t.returnPartialData || h === "cache-only"), L = {
                data: M ? m && m.data : R,
                loading: p,
                networkStatus: o.networkStatus,
                stale: M
              };
              T === "all" && w && (L.errors = o.graphQLErrors), a("next", L);
            } catch (I) {
              a("error", new ge({ networkError: I }));
            }
          }
        }
      }
    };
  }, r.prototype.transform = function(e) {
    var t = this.transformCache;
    if (!t.has(e)) {
      var n = this.dataStore.getCache(), i = n.transformDocument(e), a = al(n.transformForLink(i)), o = this.localState.clientQuery(i), s = this.localState.serverQuery(a), u = {
        document: i,
        hasClientExports: Jc(i),
        hasForcedResolvers: this.localState.shouldForceResolvers(i),
        clientQuery: o,
        serverQuery: s,
        defaultVars: un(dt(i))
      }, c = function(l) {
        l && !t.has(l) && t.set(l, u);
      };
      c(e), c(i), c(o), c(s);
    }
    return t.get(e);
  }, r.prototype.getVariables = function(e, t) {
    return g(g({}, this.transform(e).defaultVars), t);
  }, r.prototype.watchQuery = function(e, t) {
    t === void 0 && (t = !0), process.env.NODE_ENV === "production" ? E(e.fetchPolicy !== "standby", 11) : E(e.fetchPolicy !== "standby", 'client.watchQuery cannot be called with fetchPolicy set to "standby"'), e.variables = this.getVariables(e.query, e.variables), typeof e.notifyOnNetworkStatusChange > "u" && (e.notifyOnNetworkStatusChange = !1);
    var n = g({}, e);
    return new Ml({
      queryManager: this,
      options: n,
      shouldSubscribe: t
    });
  }, r.prototype.query = function(e) {
    var t = this;
    return process.env.NODE_ENV === "production" ? E(e.query, 12) : E(e.query, "query option is required. You must specify your GraphQL document in the query option."), process.env.NODE_ENV === "production" ? E(e.query.kind === "Document", 13) : E(e.query.kind === "Document", 'You must wrap the query string in a "gql" tag.'), process.env.NODE_ENV === "production" ? E(!e.returnPartialData, 14) : E(!e.returnPartialData, "returnPartialData option only supported on watchQuery."), process.env.NODE_ENV === "production" ? E(!e.pollInterval, 15) : E(!e.pollInterval, "pollInterval option only supported on watchQuery."), new Promise(function(n, i) {
      var a = t.watchQuery(e, !1);
      t.fetchQueryRejectFns.set("query:" + a.queryId, i), a.result().then(n, i).then(function() {
        return t.fetchQueryRejectFns.delete("query:" + a.queryId);
      });
    });
  }, r.prototype.generateQueryId = function() {
    return String(this.idCounter++);
  }, r.prototype.stopQueryInStore = function(e) {
    this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries();
  }, r.prototype.stopQueryInStoreNoBroadcast = function(e) {
    this.stopPollingQuery(e), this.queryStore.stopQuery(e), this.invalidate(e);
  }, r.prototype.addQueryListener = function(e, t) {
    this.setQuery(e, function(n) {
      var i = n.listeners;
      return i.add(t), { invalidated: !1 };
    });
  }, r.prototype.updateQueryWatch = function(e, t, n) {
    var i = this, a = this.getQuery(e).cancel;
    a && a();
    var o = function() {
      var s = null, u = i.getQuery(e).observableQuery;
      if (u) {
        var c = u.getLastResult();
        c && (s = c.data);
      }
      return s;
    };
    return this.dataStore.getCache().watch({
      query: t,
      variables: n.variables,
      optimistic: !0,
      previousResult: o,
      callback: function(s) {
        i.setQuery(e, function() {
          return { invalidated: !0, newData: s };
        });
      }
    });
  }, r.prototype.addObservableQuery = function(e, t) {
    this.setQuery(e, function() {
      return { observableQuery: t };
    });
  }, r.prototype.removeObservableQuery = function(e) {
    var t = this.getQuery(e).cancel;
    this.setQuery(e, function() {
      return { observableQuery: null };
    }), t && t();
  }, r.prototype.clearStore = function() {
    this.fetchQueryRejectFns.forEach(function(t) {
      t(process.env.NODE_ENV === "production" ? new _(16) : new _("Store reset while query was in flight (not completed in link chain)"));
    });
    var e = [];
    return this.queries.forEach(function(t, n) {
      var i = t.observableQuery;
      i && e.push(n);
    }), this.queryStore.reset(e), this.mutationStore.reset(), this.dataStore.reset();
  }, r.prototype.resetStore = function() {
    var e = this;
    return this.clearStore().then(function() {
      return e.reFetchObservableQueries();
    });
  }, r.prototype.reFetchObservableQueries = function(e) {
    var t = this;
    e === void 0 && (e = !1);
    var n = [];
    return this.queries.forEach(function(i, a) {
      var o = i.observableQuery;
      if (o) {
        var s = o.options.fetchPolicy;
        o.resetLastResults(), s !== "cache-only" && (e || s !== "standby") && n.push(o.refetch()), t.setQuery(a, function() {
          return { newData: null };
        }), t.invalidate(a);
      }
    }), this.broadcastQueries(), Promise.all(n);
  }, r.prototype.observeQuery = function(e, t, n) {
    return this.addQueryListener(e, this.queryListenerForObserver(e, t, n)), this.fetchQuery(e, t);
  }, r.prototype.startQuery = function(e, t, n) {
    return process.env.NODE_ENV === "production" || E.warn("The QueryManager.startQuery method has been deprecated"), this.addQueryListener(e, n), this.fetchQuery(e, t).catch(function() {
    }), e;
  }, r.prototype.startGraphQLSubscription = function(e) {
    var t = this, n = e.query, i = e.fetchPolicy, a = e.variables;
    n = this.transform(n).document, a = this.getVariables(n, a);
    var o = function(u) {
      return t.getObservableFromLink(n, {}, u, !1).map(function(c) {
        if ((!i || i !== "no-cache") && (t.dataStore.markSubscriptionResult(c, n, u), t.broadcastQueries()), Pe(c))
          throw new ge({
            graphQLErrors: c.errors
          });
        return c;
      });
    };
    if (this.transform(n).hasClientExports) {
      var s = this.localState.addExportedVariables(n, a).then(o);
      return new lt(function(u) {
        var c = null;
        return s.then(function(l) {
          return c = l.subscribe(u);
        }, u.error), function() {
          return c && c.unsubscribe();
        };
      });
    }
    return o(a);
  }, r.prototype.stopQuery = function(e) {
    this.stopQueryNoBroadcast(e), this.broadcastQueries();
  }, r.prototype.stopQueryNoBroadcast = function(e) {
    this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e);
  }, r.prototype.removeQuery = function(e) {
    this.fetchQueryRejectFns.delete("query:" + e), this.fetchQueryRejectFns.delete("fetchRequest:" + e), this.getQuery(e).subscriptions.forEach(function(t) {
      return t.unsubscribe();
    }), this.queries.delete(e);
  }, r.prototype.getCurrentQueryResult = function(e, t) {
    t === void 0 && (t = !0);
    var n = e.options, i = n.variables, a = n.query, o = n.fetchPolicy, s = n.returnPartialData, u = e.getLastResult(), c = this.getQuery(e.queryId).newData;
    if (c && c.complete)
      return { data: c.result, partial: !1 };
    if (o === "no-cache" || o === "network-only")
      return { data: void 0, partial: !1 };
    var l = this.dataStore.getCache().diff({
      query: a,
      variables: i,
      previousResult: u ? u.data : void 0,
      returnPartialData: !0,
      optimistic: t
    }), h = l.result, p = l.complete;
    return {
      data: p || s ? h : void 0,
      partial: !p
    };
  }, r.prototype.getQueryWithPreviousResult = function(e) {
    var t;
    if (typeof e == "string") {
      var n = this.getQuery(e).observableQuery;
      process.env.NODE_ENV === "production" ? E(n, 17) : E(n, "ObservableQuery with this id doesn't exist: " + e), t = n;
    } else
      t = e;
    var i = t.options, a = i.variables, o = i.query;
    return {
      previousResult: this.getCurrentQueryResult(t, !1).data,
      variables: a,
      document: o
    };
  }, r.prototype.broadcastQueries = function() {
    var e = this;
    this.onBroadcast(), this.queries.forEach(function(t, n) {
      t.invalidated && t.listeners.forEach(function(i) {
        i && i(e.queryStore.get(n), t.newData);
      });
    });
  }, r.prototype.getLocalState = function() {
    return this.localState;
  }, r.prototype.getObservableFromLink = function(e, t, n, i) {
    var a = this;
    i === void 0 && (i = this.queryDeduplication);
    var o, s = this.transform(e).serverQuery;
    if (s) {
      var u = this, c = u.inFlightLinkObservables, l = u.link, h = {
        query: s,
        variables: n,
        operationName: on(s) || void 0,
        context: this.prepareContext(g(g({}, t), { forceFetch: !i }))
      };
      if (t = h.context, i) {
        var p = c.get(s) || /* @__PURE__ */ new Map();
        c.set(s, p);
        var m = JSON.stringify(n);
        if (o = p.get(m), !o) {
          p.set(m, o = xi(Qt(l, h)));
          var y = function() {
            p.delete(m), p.size || c.delete(s), b.unsubscribe();
          }, b = o.subscribe({
            next: y,
            error: y,
            complete: y
          });
        }
      } else
        o = xi(Qt(l, h));
    } else
      o = lt.of({ data: {} }), t = this.prepareContext(t);
    var w = this.transform(e).clientQuery;
    return w && (o = Bl(o, function(T) {
      return a.localState.runResolvers({
        document: w,
        remoteResult: T,
        context: t,
        variables: n
      });
    })), o;
  }, r.prototype.fetchRequest = function(e) {
    var t = this, n = e.requestId, i = e.queryId, a = e.document, o = e.options, s = e.fetchMoreForQueryId, u = o.variables, c = o.errorPolicy, l = c === void 0 ? "none" : c, h = o.fetchPolicy, p, m;
    return new Promise(function(y, b) {
      var w = t.getObservableFromLink(a, o.context, u), T = "fetchRequest:" + i;
      t.fetchQueryRejectFns.set(T, b);
      var R = function() {
        t.fetchQueryRejectFns.delete(T), t.setQuery(i, function(k) {
          var C = k.subscriptions;
          C.delete(x);
        });
      }, x = w.map(function(k) {
        if (n >= t.getQuery(i).lastRequestId && (t.markQueryResult(i, k, o, s), t.queryStore.markQueryResult(i, k, s), t.invalidate(i), t.invalidate(s), t.broadcastQueries()), l === "none" && je(k.errors))
          return b(new ge({
            graphQLErrors: k.errors
          }));
        if (l === "all" && (m = k.errors), s || h === "no-cache")
          p = k.data;
        else {
          var C = t.dataStore.getCache().diff({
            variables: u,
            query: a,
            optimistic: !1,
            returnPartialData: !0
          }), j = C.result, M = C.complete;
          (M || o.returnPartialData) && (p = j);
        }
      }).subscribe({
        error: function(k) {
          R(), b(k);
        },
        complete: function() {
          R(), y({
            data: p,
            errors: m,
            loading: !1,
            networkStatus: K.ready,
            stale: !1
          });
        }
      });
      t.setQuery(i, function(k) {
        var C = k.subscriptions;
        C.add(x);
      });
    });
  }, r.prototype.getQuery = function(e) {
    return this.queries.get(e) || {
      listeners: /* @__PURE__ */ new Set(),
      invalidated: !1,
      document: null,
      newData: null,
      lastRequestId: 1,
      observableQuery: null,
      subscriptions: /* @__PURE__ */ new Set()
    };
  }, r.prototype.setQuery = function(e, t) {
    var n = this.getQuery(e), i = g(g({}, n), t(n));
    this.queries.set(e, i);
  }, r.prototype.invalidate = function(e, t) {
    t === void 0 && (t = !0), e && this.setQuery(e, function() {
      return { invalidated: t };
    });
  }, r.prototype.prepareContext = function(e) {
    e === void 0 && (e = {});
    var t = this.localState.prepareContext(e);
    return g(g({}, t), { clientAwareness: this.clientAwareness });
  }, r.prototype.checkInFlight = function(e) {
    var t = this.queryStore.get(e);
    return t && t.networkStatus !== K.ready && t.networkStatus !== K.error;
  }, r.prototype.startPollingQuery = function(e, t, n) {
    var i = this, a = e.pollInterval;
    if (process.env.NODE_ENV === "production" ? E(a, 18) : E(a, "Attempted to start a polling query without a polling interval."), !this.ssrMode) {
      var o = this.pollingInfoByQueryId.get(t);
      o || this.pollingInfoByQueryId.set(t, o = {}), o.interval = a, o.options = g(g({}, e), { fetchPolicy: "network-only" });
      var s = function() {
        var c = i.pollingInfoByQueryId.get(t);
        c && (i.checkInFlight(t) ? u() : i.fetchQuery(t, c.options, Ce.poll).then(u, u));
      }, u = function() {
        var c = i.pollingInfoByQueryId.get(t);
        c && (clearTimeout(c.timeout), c.timeout = setTimeout(s, c.interval));
      };
      n && this.addQueryListener(t, n), u();
    }
    return t;
  }, r.prototype.stopPollingQuery = function(e) {
    this.pollingInfoByQueryId.delete(e);
  }, r;
}(), Gl = function() {
  function r(e) {
    this.cache = e;
  }
  return r.prototype.getCache = function() {
    return this.cache;
  }, r.prototype.markQueryResult = function(e, t, n, i, a) {
    a === void 0 && (a = !1);
    var o = !Pe(e);
    a && Pe(e) && e.data && (o = !0), !i && o && this.cache.write({
      result: e.data,
      dataId: "ROOT_QUERY",
      query: t,
      variables: n
    });
  }, r.prototype.markSubscriptionResult = function(e, t, n) {
    Pe(e) || this.cache.write({
      result: e.data,
      dataId: "ROOT_SUBSCRIPTION",
      query: t,
      variables: n
    });
  }, r.prototype.markMutationInit = function(e) {
    var t = this;
    if (e.optimisticResponse) {
      var n;
      typeof e.optimisticResponse == "function" ? n = e.optimisticResponse(e.variables) : n = e.optimisticResponse, this.cache.recordOptimisticTransaction(function(i) {
        var a = t.cache;
        t.cache = i;
        try {
          t.markMutationResult({
            mutationId: e.mutationId,
            result: { data: n },
            document: e.document,
            variables: e.variables,
            updateQueries: e.updateQueries,
            update: e.update
          });
        } finally {
          t.cache = a;
        }
      }, e.mutationId);
    }
  }, r.prototype.markMutationResult = function(e) {
    var t = this;
    if (!Pe(e.result)) {
      var n = [{
        result: e.result.data,
        dataId: "ROOT_MUTATION",
        query: e.document,
        variables: e.variables
      }], i = e.updateQueries;
      i && Object.keys(i).forEach(function(a) {
        var o = i[a], s = o.query, u = o.updater, c = t.cache.diff({
          query: s.document,
          variables: s.variables,
          returnPartialData: !0,
          optimistic: !1
        }), l = c.result, h = c.complete;
        if (h) {
          var p = Lr(function() {
            return u(l, {
              mutationResult: e.result,
              queryName: on(s.document) || void 0,
              queryVariables: s.variables
            });
          });
          p && n.push({
            result: p,
            dataId: "ROOT_QUERY",
            query: s.document,
            variables: s.variables
          });
        }
      }), this.cache.performTransaction(function(a) {
        n.forEach(function(s) {
          return a.write(s);
        });
        var o = e.update;
        o && Lr(function() {
          return o(a, e.result);
        });
      });
    }
  }, r.prototype.markMutationComplete = function(e) {
    var t = e.mutationId, n = e.optimisticResponse;
    n && this.cache.removeOptimistic(t);
  }, r.prototype.markUpdateQueryResult = function(e, t, n) {
    this.cache.write({
      result: n,
      dataId: "ROOT_QUERY",
      variables: t,
      query: e
    });
  }, r.prototype.reset = function() {
    return this.cache.reset();
  }, r;
}(), Kl = "2.6.10", Di = !1, Wl = function() {
  function r(e) {
    var t = this;
    this.defaultOptions = {}, this.resetStoreCallbacks = [], this.clearStoreCallbacks = [];
    var n = e.cache, i = e.ssrMode, a = i === void 0 ? !1 : i, o = e.ssrForceFetchDelay, s = o === void 0 ? 0 : o, u = e.connectToDevTools, c = e.queryDeduplication, l = c === void 0 ? !0 : c, h = e.defaultOptions, p = e.assumeImmutableResults, m = p === void 0 ? !1 : p, y = e.resolvers, b = e.typeDefs, w = e.fragmentMatcher, T = e.name, R = e.version, x = e.link;
    if (!x && y && (x = ce.empty()), !x || !n)
      throw process.env.NODE_ENV === "production" ? new _(4) : new _(`In order to initialize Apollo Client, you must specify 'link' and 'cache' properties in the options object.
These options are part of the upgrade requirements when migrating from Apollo Client 1.x to Apollo Client 2.x.
For more information, please visit: https://www.apollographql.com/docs/tutorial/client.html#apollo-client-setup`);
    this.link = x, this.cache = n, this.store = new Gl(n), this.disableNetworkFetches = a || s > 0, this.queryDeduplication = l, this.defaultOptions = h || {}, this.typeDefs = b, s && setTimeout(function() {
      return t.disableNetworkFetches = !1;
    }, s), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this);
    var k = process.env.NODE_ENV !== "production" && typeof window < "u" && !window.__APOLLO_CLIENT__;
    (typeof u > "u" ? k : u && typeof window < "u") && (window.__APOLLO_CLIENT__ = this), !Di && process.env.NODE_ENV !== "production" && (Di = !0, typeof window < "u" && window.document && window.top === window.self && typeof window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__ > "u" && window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("Chrome") > -1 && console.debug("Download the Apollo DevTools for a better development experience: https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm")), this.version = Kl, this.localState = new Ua({
      cache: n,
      client: this,
      resolvers: y,
      fragmentMatcher: w
    }), this.queryManager = new Vl({
      link: this.link,
      store: this.store,
      queryDeduplication: l,
      ssrMode: a,
      clientAwareness: {
        name: T,
        version: R
      },
      localState: this.localState,
      assumeImmutableResults: m,
      onBroadcast: function() {
        t.devToolsHookCb && t.devToolsHookCb({
          action: {},
          state: {
            queries: t.queryManager.queryStore.getStore(),
            mutations: t.queryManager.mutationStore.getStore()
          },
          dataWithOptimisticResults: t.cache.extract(!0)
        });
      }
    });
  }
  return r.prototype.stop = function() {
    this.queryManager.stop();
  }, r.prototype.watchQuery = function(e) {
    return this.defaultOptions.watchQuery && (e = g(g({}, this.defaultOptions.watchQuery), e)), this.disableNetworkFetches && (e.fetchPolicy === "network-only" || e.fetchPolicy === "cache-and-network") && (e = g(g({}, e), { fetchPolicy: "cache-first" })), this.queryManager.watchQuery(e);
  }, r.prototype.query = function(e) {
    return this.defaultOptions.query && (e = g(g({}, this.defaultOptions.query), e)), process.env.NODE_ENV === "production" ? E(e.fetchPolicy !== "cache-and-network", 5) : E(e.fetchPolicy !== "cache-and-network", "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only."), this.disableNetworkFetches && e.fetchPolicy === "network-only" && (e = g(g({}, e), { fetchPolicy: "cache-first" })), this.queryManager.query(e);
  }, r.prototype.mutate = function(e) {
    return this.defaultOptions.mutate && (e = g(g({}, this.defaultOptions.mutate), e)), this.queryManager.mutate(e);
  }, r.prototype.subscribe = function(e) {
    return this.queryManager.startGraphQLSubscription(e);
  }, r.prototype.readQuery = function(e, t) {
    return t === void 0 && (t = !1), this.cache.readQuery(e, t);
  }, r.prototype.readFragment = function(e, t) {
    return t === void 0 && (t = !1), this.cache.readFragment(e, t);
  }, r.prototype.writeQuery = function(e) {
    var t = this.cache.writeQuery(e);
    return this.queryManager.broadcastQueries(), t;
  }, r.prototype.writeFragment = function(e) {
    var t = this.cache.writeFragment(e);
    return this.queryManager.broadcastQueries(), t;
  }, r.prototype.writeData = function(e) {
    var t = this.cache.writeData(e);
    return this.queryManager.broadcastQueries(), t;
  }, r.prototype.__actionHookForDevTools = function(e) {
    this.devToolsHookCb = e;
  }, r.prototype.__requestRaw = function(e) {
    return Qt(this.link, e);
  }, r.prototype.initQueryManager = function() {
    return process.env.NODE_ENV === "production" || E.warn("Calling the initQueryManager method is no longer necessary, and it will be removed from ApolloClient in version 3.0."), this.queryManager;
  }, r.prototype.resetStore = function() {
    var e = this;
    return Promise.resolve().then(function() {
      return e.queryManager.clearStore();
    }).then(function() {
      return Promise.all(e.resetStoreCallbacks.map(function(t) {
        return t();
      }));
    }).then(function() {
      return e.reFetchObservableQueries();
    });
  }, r.prototype.clearStore = function() {
    var e = this;
    return Promise.resolve().then(function() {
      return e.queryManager.clearStore();
    }).then(function() {
      return Promise.all(e.clearStoreCallbacks.map(function(t) {
        return t();
      }));
    });
  }, r.prototype.onResetStore = function(e) {
    var t = this;
    return this.resetStoreCallbacks.push(e), function() {
      t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(n) {
        return n !== e;
      });
    };
  }, r.prototype.onClearStore = function(e) {
    var t = this;
    return this.clearStoreCallbacks.push(e), function() {
      t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(n) {
        return n !== e;
      });
    };
  }, r.prototype.reFetchObservableQueries = function(e) {
    return this.queryManager.reFetchObservableQueries(e);
  }, r.prototype.extract = function(e) {
    return this.cache.extract(e);
  }, r.prototype.restore = function(e) {
    return this.cache.restore(e);
  }, r.prototype.addResolvers = function(e) {
    this.localState.addResolvers(e);
  }, r.prototype.setResolvers = function(e) {
    this.localState.setResolvers(e);
  }, r.prototype.getResolvers = function() {
    return this.localState.getResolvers();
  }, r.prototype.setLocalStateFragmentMatcher = function(e) {
    this.localState.setFragmentMatcher(e);
  }, r;
}();
function zl(r) {
  var e = {
    kind: "OperationDefinition",
    operation: "query",
    name: {
      kind: "Name",
      value: "GeneratedClientQuery"
    },
    selectionSet: Vt(r)
  }, t = {
    kind: "Document",
    definitions: [e]
  };
  return t;
}
function Hl(r, e) {
  var t = {
    kind: "FragmentDefinition",
    typeCondition: {
      kind: "NamedType",
      name: {
        kind: "Name",
        value: e || "__FakeType"
      }
    },
    name: {
      kind: "Name",
      value: "GeneratedClientQuery"
    },
    selectionSet: Vt(r)
  }, n = {
    kind: "Document",
    definitions: [t]
  };
  return n;
}
function Vt(r) {
  if (typeof r == "number" || typeof r == "boolean" || typeof r == "string" || typeof r > "u" || r === null)
    return null;
  if (Array.isArray(r))
    return Vt(r[0]);
  var e = [];
  Object.keys(r).forEach(function(n) {
    var i = Vt(r[n]), a = {
      kind: "Field",
      name: {
        kind: "Name",
        value: n
      },
      selectionSet: i || void 0
    };
    e.push(a);
  });
  var t = {
    kind: "SelectionSet",
    selections: e
  };
  return t;
}
var Yl = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: null,
      variableDefinitions: null,
      directives: [],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            alias: null,
            name: {
              kind: "Name",
              value: "__typename"
            },
            arguments: [],
            directives: [],
            selectionSet: null
          }
        ]
      }
    }
  ]
}, Jl = function() {
  function r() {
  }
  return r.prototype.transformDocument = function(e) {
    return e;
  }, r.prototype.transformForLink = function(e) {
    return e;
  }, r.prototype.readQuery = function(e, t) {
    return t === void 0 && (t = !1), this.read({
      query: e.query,
      variables: e.variables,
      optimistic: t
    });
  }, r.prototype.readFragment = function(e, t) {
    return t === void 0 && (t = !1), this.read({
      query: wi(e.fragment, e.fragmentName),
      variables: e.variables,
      rootId: e.id,
      optimistic: t
    });
  }, r.prototype.writeQuery = function(e) {
    this.write({
      dataId: "ROOT_QUERY",
      result: e.data,
      query: e.query,
      variables: e.variables
    });
  }, r.prototype.writeFragment = function(e) {
    this.write({
      dataId: e.id,
      result: e.data,
      variables: e.variables,
      query: wi(e.fragment, e.fragmentName)
    });
  }, r.prototype.writeData = function(e) {
    var t = e.id, n = e.data;
    if (typeof t < "u") {
      var i = null;
      try {
        i = this.read({
          rootId: t,
          optimistic: !1,
          query: Yl
        });
      } catch {
      }
      var a = i && i.__typename || "__ClientData", o = Object.assign({ __typename: a }, n);
      this.writeFragment({
        id: t,
        fragment: Hl(o, a),
        data: o
      });
    } else
      this.writeQuery({ query: zl(n), data: n });
  }, r;
}(), W = null, Ii = {}, Xl = 1, Zl = function() {
  return (
    /** @class */
    function() {
      function r() {
        this.id = [
          "slot",
          Xl++,
          Date.now(),
          Math.random().toString(36).slice(2)
        ].join(":");
      }
      return r.prototype.hasValue = function() {
        for (var e = W; e; e = e.parent)
          if (this.id in e.slots) {
            var t = e.slots[this.id];
            if (t === Ii)
              break;
            return e !== W && (W.slots[this.id] = t), !0;
          }
        return W && (W.slots[this.id] = Ii), !1;
      }, r.prototype.getValue = function() {
        if (this.hasValue())
          return W.slots[this.id];
      }, r.prototype.withValue = function(e, t, n, i) {
        var a, o = (a = {
          __proto__: null
        }, a[this.id] = e, a), s = W;
        W = { parent: s, slots: o };
        try {
          return t.apply(i, n);
        } finally {
          W = s;
        }
      }, r.bind = function(e) {
        var t = W;
        return function() {
          var n = W;
          try {
            return W = t, e.apply(this, arguments);
          } finally {
            W = n;
          }
        };
      }, r.noContext = function(e, t, n) {
        if (W) {
          var i = W;
          try {
            return W = null, e.apply(n, t);
          } finally {
            W = i;
          }
        } else
          return e.apply(n, t);
      }, r;
    }()
  );
}, yr = "@wry/context:Slot", gr = Array, gn = gr[yr] || function() {
  var r = Zl();
  try {
    Object.defineProperty(gr, yr, {
      value: gr[yr] = r,
      enumerable: !1,
      writable: !1,
      configurable: !1
    });
  } finally {
    return r;
  }
}();
gn.bind;
gn.noContext;
function ef() {
}
var tf = (
  /** @class */
  function() {
    function r(e, t) {
      e === void 0 && (e = 1 / 0), t === void 0 && (t = ef), this.max = e, this.dispose = t, this.map = /* @__PURE__ */ new Map(), this.newest = null, this.oldest = null;
    }
    return r.prototype.has = function(e) {
      return this.map.has(e);
    }, r.prototype.get = function(e) {
      var t = this.getEntry(e);
      return t && t.value;
    }, r.prototype.getEntry = function(e) {
      var t = this.map.get(e);
      if (t && t !== this.newest) {
        var n = t.older, i = t.newer;
        i && (i.older = n), n && (n.newer = i), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = i);
      }
      return t;
    }, r.prototype.set = function(e, t) {
      var n = this.getEntry(e);
      return n ? n.value = t : (n = {
        key: e,
        value: t,
        newer: null,
        older: this.newest
      }, this.newest && (this.newest.newer = n), this.newest = n, this.oldest = this.oldest || n, this.map.set(e, n), n.value);
    }, r.prototype.clean = function() {
      for (; this.oldest && this.map.size > this.max; )
        this.delete(this.oldest.key);
    }, r.prototype.delete = function(e) {
      var t = this.map.get(e);
      return t ? (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(e), this.dispose(t.value, e), !0) : !1;
    }, r;
  }()
), Gt = new gn(), rf = [], Br = [], nf = 100;
function Qe(r, e) {
  if (!r)
    throw new Error(e || "assertion failure");
}
function af(r, e) {
  var t = r.length;
  return (
    // Unknown values are not equal to each other.
    t > 0 && // Both values must be ordinary (or both exceptional) to be equal.
    t === e.length && // The underlying value or exception must be the same.
    r[t - 1] === e[t - 1]
  );
}
function Ba(r) {
  switch (r.length) {
    case 0:
      throw new Error("unknown value");
    case 1:
      return r[0];
    case 2:
      throw r[1];
  }
}
function of(r) {
  return r.slice(0);
}
var sf = (
  /** @class */
  function() {
    function r(e, t) {
      this.fn = e, this.args = t, this.parents = /* @__PURE__ */ new Set(), this.childValues = /* @__PURE__ */ new Map(), this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], ++r.count;
    }
    return r.prototype.recompute = function() {
      if (Qe(!this.recomputing, "already recomputing"), !(!uf(this) && Qr(this)))
        return Ve(this) ? cf(this) : Ba(this.value);
    }, r.prototype.setDirty = function() {
      this.dirty || (this.dirty = !0, this.value.length = 0, Qa(this), Vr(this));
    }, r.prototype.dispose = function() {
      var e = this;
      za(this).forEach(Qr), Vr(this), this.parents.forEach(function(t) {
        t.setDirty(), Ha(t, e);
      });
    }, r.count = 0, r;
  }()
);
function uf(r) {
  var e = Gt.getValue();
  if (e)
    return r.parents.add(e), e.childValues.has(r) || e.childValues.set(r, []), Ve(r) ? Ga(e, r) : Ka(e, r), e;
}
function cf(r) {
  var e = za(r);
  return Gt.withValue(r, lf, [r]), hf(r) && ff(r), e.forEach(Qr), Ba(r.value);
}
function lf(r) {
  r.recomputing = !0, r.value.length = 0;
  try {
    r.value[0] = r.fn.apply(null, r.args);
  } catch (e) {
    r.value[1] = e;
  }
  r.recomputing = !1;
}
function Ve(r) {
  return r.dirty || !!(r.dirtyChildren && r.dirtyChildren.size);
}
function ff(r) {
  r.dirty = !1, !Ve(r) && Va(r);
}
function Qa(r) {
  r.parents.forEach(function(e) {
    return Ga(e, r);
  });
}
function Va(r) {
  r.parents.forEach(function(e) {
    return Ka(e, r);
  });
}
function Ga(r, e) {
  if (Qe(r.childValues.has(e)), Qe(Ve(e)), !r.dirtyChildren)
    r.dirtyChildren = Br.pop() || /* @__PURE__ */ new Set();
  else if (r.dirtyChildren.has(e))
    return;
  r.dirtyChildren.add(e), Qa(r);
}
function Ka(r, e) {
  Qe(r.childValues.has(e)), Qe(!Ve(e));
  var t = r.childValues.get(e);
  t.length === 0 ? r.childValues.set(e, of(e.value)) : af(t, e.value) || r.setDirty(), Wa(r, e), !Ve(r) && Va(r);
}
function Wa(r, e) {
  var t = r.dirtyChildren;
  t && (t.delete(e), t.size === 0 && (Br.length < nf && Br.push(t), r.dirtyChildren = null));
}
function Qr(r) {
  return r.parents.size === 0 && typeof r.reportOrphan == "function" && r.reportOrphan() === !0;
}
function za(r) {
  var e = rf;
  return r.childValues.size > 0 && (e = [], r.childValues.forEach(function(t, n) {
    Ha(r, n), e.push(n);
  })), Qe(r.dirtyChildren === null), e;
}
function Ha(r, e) {
  e.parents.delete(r), r.childValues.delete(e), Wa(r, e);
}
function hf(r) {
  if (typeof r.subscribe == "function")
    try {
      Vr(r), r.unsubscribe = r.subscribe.apply(null, r.args);
    } catch {
      return r.setDirty(), !1;
    }
  return !0;
}
function Vr(r) {
  var e = r.unsubscribe;
  typeof e == "function" && (r.unsubscribe = void 0, e());
}
var bn = (
  /** @class */
  function() {
    function r(e) {
      this.weakness = e;
    }
    return r.prototype.lookup = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      return this.lookupArray(e);
    }, r.prototype.lookupArray = function(e) {
      var t = this;
      return e.forEach(function(n) {
        return t = t.getChildTrie(n);
      }), t.data || (t.data = /* @__PURE__ */ Object.create(null));
    }, r.prototype.getChildTrie = function(e) {
      var t = this.weakness && pf(e) ? this.weak || (this.weak = /* @__PURE__ */ new WeakMap()) : this.strong || (this.strong = /* @__PURE__ */ new Map()), n = t.get(e);
      return n || t.set(e, n = new r(this.weakness)), n;
    }, r;
  }()
);
function pf(r) {
  switch (typeof r) {
    case "object":
      if (r === null)
        break;
    case "function":
      return !0;
  }
  return !1;
}
var df = new bn(typeof WeakMap == "function");
function mf() {
  for (var r = [], e = 0; e < arguments.length; e++)
    r[e] = arguments[e];
  return df.lookupArray(r);
}
var br = /* @__PURE__ */ new Set();
function ot(r, e) {
  e === void 0 && (e = /* @__PURE__ */ Object.create(null));
  var t = new tf(e.max || Math.pow(2, 16), function(o) {
    return o.dispose();
  }), n = !!e.disposable, i = e.makeCacheKey || mf;
  function a() {
    if (!(n && !Gt.hasValue())) {
      var o = i.apply(null, arguments);
      if (o === void 0)
        return r.apply(null, arguments);
      var s = Array.prototype.slice.call(arguments), u = t.get(o);
      u ? u.args = s : (u = new sf(r, s), t.set(o, u), u.subscribe = e.subscribe, n && (u.reportOrphan = function() {
        return t.delete(o);
      }));
      var c = u.recompute();
      return t.set(o, u), br.add(t), Gt.hasValue() || (br.forEach(function(l) {
        return l.clean();
      }), br.clear()), n ? void 0 : c;
    }
  }
  return a.dirty = function() {
    var o = i.apply(null, arguments), s = o !== void 0 && t.get(o);
    s && s.setDirty();
  }, a;
}
var Ai = !1;
function _i() {
  var r = !Ai;
  return Ia() || (Ai = !0), r;
}
var vf = function() {
  function r() {
  }
  return r.prototype.ensureReady = function() {
    return Promise.resolve();
  }, r.prototype.canBypassInit = function() {
    return !0;
  }, r.prototype.match = function(e, t, n) {
    var i = n.store.get(e.id), a = e.id === "ROOT_QUERY";
    if (!i)
      return a;
    var o = i.__typename, s = o === void 0 ? a && "Query" : o;
    return s ? s === t ? !0 : (_i() && (process.env.NODE_ENV === "production" || E.error("You are using the simple (heuristic) fragment matcher, but your queries contain union or interface types. Apollo Client will not be able to accurately map fragments. To make this error go away, use the `IntrospectionFragmentMatcher` as described in the docs: https://www.apollographql.com/docs/react/advanced/fragments.html#fragment-matcher")), "heuristic") : (_i() && (process.env.NODE_ENV === "production" || E.warn(`You're using fragments in your queries, but either don't have the addTypename:
  true option set in Apollo Client, or you are trying to write a fragment to the store without the __typename.
   Please turn on the addTypename option and include __typename when writing fragments so that Apollo Client
   can accurately match fragments.`), process.env.NODE_ENV === "production" || E.warn("Could not find __typename on Fragment ", t, i), process.env.NODE_ENV === "production" || E.warn("DEPRECATION WARNING: using fragments without __typename is unsupported behavior and will be removed in future versions of Apollo client. You should fix this and set addTypename to true now.")), "heuristic");
  }, r;
}(), yf = function() {
  function r(e) {
    e && e.introspectionQueryResultData ? (this.possibleTypesMap = this.parseIntrospectionResult(e.introspectionQueryResultData), this.isReady = !0) : this.isReady = !1, this.match = this.match.bind(this);
  }
  return r.prototype.match = function(e, t, n) {
    process.env.NODE_ENV === "production" ? E(this.isReady, 1) : E(this.isReady, "FragmentMatcher.match() was called before FragmentMatcher.init()");
    var i = n.store.get(e.id), a = e.id === "ROOT_QUERY";
    if (!i)
      return a;
    var o = i.__typename, s = o === void 0 ? a && "Query" : o;
    if (process.env.NODE_ENV === "production" ? E(s, 2) : E(s, "Cannot match fragment because __typename property is missing: " + JSON.stringify(i)), s === t)
      return !0;
    var u = this.possibleTypesMap[t];
    return !!(s && u && u.indexOf(s) > -1);
  }, r.prototype.parseIntrospectionResult = function(e) {
    var t = {};
    return e.__schema.types.forEach(function(n) {
      (n.kind === "UNION" || n.kind === "INTERFACE") && (t[n.name] = n.possibleTypes.map(function(i) {
        return i.name;
      }));
    }), t;
  }, r;
}(), Fi = Object.prototype.hasOwnProperty, $e = function() {
  function r(e) {
    var t = this;
    e === void 0 && (e = /* @__PURE__ */ Object.create(null)), this.data = e, this.depend = ot(function(n) {
      return t.data[n];
    }, {
      disposable: !0,
      makeCacheKey: function(n) {
        return n;
      }
    });
  }
  return r.prototype.toObject = function() {
    return this.data;
  }, r.prototype.get = function(e) {
    return this.depend(e), this.data[e];
  }, r.prototype.set = function(e, t) {
    var n = this.data[e];
    t !== n && (this.data[e] = t, this.depend.dirty(e));
  }, r.prototype.delete = function(e) {
    Fi.call(this.data, e) && (delete this.data[e], this.depend.dirty(e));
  }, r.prototype.clear = function() {
    this.replace(null);
  }, r.prototype.replace = function(e) {
    var t = this;
    e ? (Object.keys(e).forEach(function(n) {
      t.set(n, e[n]);
    }), Object.keys(this.data).forEach(function(n) {
      Fi.call(e, n) || t.delete(n);
    })) : Object.keys(this.data).forEach(function(n) {
      t.delete(n);
    });
  }, r;
}();
function qi(r) {
  return new $e(r);
}
var gf = function() {
  function r(e) {
    var t = this, n = e === void 0 ? {} : e, i = n.cacheKeyRoot, a = i === void 0 ? new bn(ln) : i, o = n.freezeResults, s = o === void 0 ? !1 : o, u = this, c = u.executeStoreQuery, l = u.executeSelectionSet, h = u.executeSubSelectedArray;
    this.freezeResults = s, this.executeStoreQuery = ot(function(p) {
      return c.call(t, p);
    }, {
      makeCacheKey: function(p) {
        var m = p.query, y = p.rootValue, b = p.contextValue, w = p.variableValues, T = p.fragmentMatcher;
        if (b.store instanceof $e)
          return a.lookup(b.store, m, T, JSON.stringify(w), y.id);
      }
    }), this.executeSelectionSet = ot(function(p) {
      return l.call(t, p);
    }, {
      makeCacheKey: function(p) {
        var m = p.selectionSet, y = p.rootValue, b = p.execContext;
        if (b.contextValue.store instanceof $e)
          return a.lookup(b.contextValue.store, m, b.fragmentMatcher, JSON.stringify(b.variableValues), y.id);
      }
    }), this.executeSubSelectedArray = ot(function(p) {
      return h.call(t, p);
    }, {
      makeCacheKey: function(p) {
        var m = p.field, y = p.array, b = p.execContext;
        if (b.contextValue.store instanceof $e)
          return a.lookup(b.contextValue.store, m, y, JSON.stringify(b.variableValues));
      }
    });
  }
  return r.prototype.readQueryFromStore = function(e) {
    return this.diffQueryAgainstStore(g(g({}, e), { returnPartialData: !1 })).result;
  }, r.prototype.diffQueryAgainstStore = function(e) {
    var t = e.store, n = e.query, i = e.variables, a = e.previousResult, o = e.returnPartialData, s = o === void 0 ? !0 : o, u = e.rootId, c = u === void 0 ? "ROOT_QUERY" : u, l = e.fragmentMatcherFunction, h = e.config, p = el(n);
    i = an({}, un(p), i);
    var m = {
      store: t,
      dataIdFromObject: h && h.dataIdFromObject,
      cacheRedirects: h && h.cacheRedirects || {}
    }, y = this.executeStoreQuery({
      query: n,
      rootValue: {
        type: "id",
        id: c,
        generated: !0,
        typename: "Query"
      },
      contextValue: m,
      variableValues: i,
      fragmentMatcher: l
    }), b = y.missing && y.missing.length > 0;
    return b && !s && y.missing.forEach(function(w) {
      if (!w.tolerable)
        throw process.env.NODE_ENV === "production" ? new _(8) : new _("Can't find field " + w.fieldName + " on object " + JSON.stringify(w.object, null, 2) + ".");
    }), a && ie(a, y.result) && (y.result = a), {
      result: y.result,
      complete: !b
    };
  }, r.prototype.executeStoreQuery = function(e) {
    var t = e.query, n = e.rootValue, i = e.contextValue, a = e.variableValues, o = e.fragmentMatcher, s = o === void 0 ? bf : o, u = sn(t), c = Xt(t), l = Zt(c), h = {
      query: t,
      fragmentMap: l,
      contextValue: i,
      variableValues: a,
      fragmentMatcher: s
    };
    return this.executeSelectionSet({
      selectionSet: u.selectionSet,
      rootValue: n,
      execContext: h
    });
  }, r.prototype.executeSelectionSet = function(e) {
    var t = this, n = e.selectionSet, i = e.rootValue, a = e.execContext, o = a.fragmentMap, s = a.contextValue, u = a.variableValues, c = { result: null }, l = [], h = s.store.get(i.id), p = h && h.__typename || i.id === "ROOT_QUERY" && "Query" || void 0;
    function m(y) {
      var b;
      return y.missing && (c.missing = c.missing || [], (b = c.missing).push.apply(b, y.missing)), y.result;
    }
    return n.selections.forEach(function(y) {
      var b;
      if (nn(y, u))
        if (xe(y)) {
          var w = m(t.executeField(h, p, y, a));
          typeof w < "u" && l.push((b = {}, b[ut(y)] = w, b));
        } else {
          var T = void 0;
          if (Jt(y))
            T = y;
          else if (T = o[y.name.value], !T)
            throw process.env.NODE_ENV === "production" ? new _(9) : new _("No fragment named " + y.name.value);
          var R = T.typeCondition && T.typeCondition.name.value, x = !R || a.fragmentMatcher(i, R, s);
          if (x) {
            var k = t.executeSelectionSet({
              selectionSet: T.selectionSet,
              rootValue: i,
              execContext: a
            });
            x === "heuristic" && k.missing && (k = g(g({}, k), { missing: k.missing.map(function(C) {
              return g(g({}, C), { tolerable: !0 });
            }) })), l.push(m(k));
          }
        }
    }), c.result = hn(l), this.freezeResults && process.env.NODE_ENV !== "production" && Object.freeze(c.result), c;
  }, r.prototype.executeField = function(e, t, n, i) {
    var a = i.variableValues, o = i.contextValue, s = n.name.value, u = rn(n, a), c = {
      resultKey: ut(n),
      directives: Hc(n, a)
    }, l = Ef(e, t, s, u, o, c);
    return Array.isArray(l.result) ? this.combineExecResults(l, this.executeSubSelectedArray({
      field: n,
      array: l.result,
      execContext: i
    })) : n.selectionSet ? l.result == null ? l : this.combineExecResults(l, this.executeSelectionSet({
      selectionSet: n.selectionSet,
      rootValue: l.result,
      execContext: i
    })) : (Mi(n, l.result), this.freezeResults && process.env.NODE_ENV !== "production" && vl(l), l);
  }, r.prototype.combineExecResults = function() {
    for (var e = [], t = 0; t < arguments.length; t++)
      e[t] = arguments[t];
    var n;
    return e.forEach(function(i) {
      i.missing && (n = n || [], n.push.apply(n, i.missing));
    }), {
      result: e.pop().result,
      missing: n
    };
  }, r.prototype.executeSubSelectedArray = function(e) {
    var t = this, n = e.field, i = e.array, a = e.execContext, o;
    function s(u) {
      return u.missing && (o = o || [], o.push.apply(o, u.missing)), u.result;
    }
    return i = i.map(function(u) {
      return u === null ? null : Array.isArray(u) ? s(t.executeSubSelectedArray({
        field: n,
        array: u,
        execContext: a
      })) : n.selectionSet ? s(t.executeSelectionSet({
        selectionSet: n.selectionSet,
        rootValue: u,
        execContext: a
      })) : (Mi(n, u), u);
    }), this.freezeResults && process.env.NODE_ENV !== "production" && Object.freeze(i), { result: i, missing: o };
  }, r;
}();
function Mi(r, e) {
  if (!r.selectionSet && jt(e))
    throw process.env.NODE_ENV === "production" ? new _(10) : new _("Missing selection set for object of type " + e.typename + " returned for query field " + r.name.value);
}
function bf() {
  return !0;
}
function Ef(r, e, t, n, i, a) {
  var o = a.directives, s = t;
  (n || o) && (s = Pa(s, n, o));
  var u = void 0;
  if (r && (u = r[s], typeof u > "u" && i.cacheRedirects && typeof e == "string")) {
    var c = i.cacheRedirects[e];
    if (c) {
      var l = c[t];
      l && (u = l(r, n, {
        getCacheKey: function(h) {
          var p = i.dataIdFromObject(h);
          return p && kt({
            id: p,
            typename: h.__typename
          });
        }
      }));
    }
  }
  return typeof u > "u" ? {
    result: u,
    missing: [{
      object: r,
      fieldName: s,
      tolerable: !1
    }]
  } : (zc(u) && (u = u.json), {
    result: u
  });
}
var En = function() {
  function r(e) {
    e === void 0 && (e = /* @__PURE__ */ Object.create(null)), this.data = e;
  }
  return r.prototype.toObject = function() {
    return this.data;
  }, r.prototype.get = function(e) {
    return this.data[e];
  }, r.prototype.set = function(e, t) {
    this.data[e] = t;
  }, r.prototype.delete = function(e) {
    this.data[e] = void 0;
  }, r.prototype.clear = function() {
    this.data = /* @__PURE__ */ Object.create(null);
  }, r.prototype.replace = function(e) {
    this.data = e || /* @__PURE__ */ Object.create(null);
  }, r;
}(), wf = function(r) {
  de(e, r);
  function e() {
    var t = r !== null && r.apply(this, arguments) || this;
    return t.type = "WriteError", t;
  }
  return e;
}(Error);
function Rf(r, e) {
  var t = new wf(`Error writing result to store for query:
 ` + JSON.stringify(e));
  return t.message += `
` + r.message, t.stack = r.stack, t;
}
var Sf = function() {
  function r() {
  }
  return r.prototype.writeQueryToStore = function(e) {
    var t = e.query, n = e.result, i = e.store, a = i === void 0 ? qi() : i, o = e.variables, s = e.dataIdFromObject, u = e.fragmentMatcherFunction;
    return this.writeResultToStore({
      dataId: "ROOT_QUERY",
      result: n,
      document: t,
      store: a,
      variables: o,
      dataIdFromObject: s,
      fragmentMatcherFunction: u
    });
  }, r.prototype.writeResultToStore = function(e) {
    var t = e.dataId, n = e.result, i = e.document, a = e.store, o = a === void 0 ? qi() : a, s = e.variables, u = e.dataIdFromObject, c = e.fragmentMatcherFunction, l = dt(i);
    try {
      return this.writeSelectionSetToStore({
        result: n,
        dataId: t,
        selectionSet: l.selectionSet,
        context: {
          store: o,
          processedData: {},
          variables: an({}, un(l), s),
          dataIdFromObject: u,
          fragmentMap: Zt(Xt(i)),
          fragmentMatcherFunction: c
        }
      });
    } catch (h) {
      throw Rf(h, i);
    }
  }, r.prototype.writeSelectionSetToStore = function(e) {
    var t = this, n = e.result, i = e.dataId, a = e.selectionSet, o = e.context, s = o.variables, u = o.store, c = o.fragmentMap;
    return a.selections.forEach(function(l) {
      var h;
      if (nn(l, s))
        if (xe(l)) {
          var p = ut(l), m = n[p];
          if (typeof m < "u")
            t.writeFieldToStore({
              dataId: i,
              value: m,
              field: l,
              context: o
            });
          else {
            var y = !1, b = !1;
            l.directives && l.directives.length && (y = l.directives.some(function(j) {
              return j.name && j.name.value === "defer";
            }), b = l.directives.some(function(j) {
              return j.name && j.name.value === "client";
            })), !y && !b && o.fragmentMatcherFunction && (process.env.NODE_ENV === "production" || E.warn("Missing field " + p + " in " + JSON.stringify(n, null, 2).substring(0, 100)));
          }
        } else {
          var w = void 0;
          Jt(l) ? w = l : (w = (c || {})[l.name.value], process.env.NODE_ENV === "production" ? E(w, 3) : E(w, "No fragment named " + l.name.value + "."));
          var T = !0;
          if (o.fragmentMatcherFunction && w.typeCondition) {
            var R = i || "self", x = kt({ id: R, typename: void 0 }), k = {
              store: new En((h = {}, h[R] = n, h)),
              cacheRedirects: {}
            }, C = o.fragmentMatcherFunction(x, w.typeCondition.name.value, k);
            !dl() && C === "heuristic" && (process.env.NODE_ENV === "production" || E.error("WARNING: heuristic fragment matching going on!")), T = !!C;
          }
          T && t.writeSelectionSetToStore({
            result: n,
            selectionSet: w.selectionSet,
            dataId: i,
            context: o
          });
        }
    }), u;
  }, r.prototype.writeFieldToStore = function(e) {
    var t, n = e.field, i = e.value, a = e.dataId, o = e.context, s = o.variables, u = o.dataIdFromObject, c = o.store, l, h, p = Kc(n, s);
    if (!n.selectionSet || i === null)
      l = i != null && typeof i == "object" ? { type: "json", json: i } : i;
    else if (Array.isArray(i)) {
      var m = a + "." + p;
      l = this.processArrayValue(i, m, n.selectionSet, o);
    } else {
      var y = a + "." + p, b = !0;
      if (Pt(y) || (y = "$" + y), u) {
        var w = u(i);
        process.env.NODE_ENV === "production" ? E(!w || !Pt(w), 4) : E(!w || !Pt(w), 'IDs returned by dataIdFromObject cannot begin with the "$" character.'), (w || typeof w == "number" && w === 0) && (y = w, b = !1);
      }
      Li(y, n, o.processedData) || this.writeSelectionSetToStore({
        dataId: y,
        result: i,
        selectionSet: n.selectionSet,
        context: o
      });
      var T = i.__typename;
      l = kt({ id: y, typename: T }, b), h = c.get(a);
      var R = h && h[p];
      if (R !== l && jt(R)) {
        var x = R.typename !== void 0, k = T !== void 0, C = x && k && R.typename !== T;
        process.env.NODE_ENV === "production" ? E(!b || R.generated || C, 5) : E(!b || R.generated || C, "Store error: the application attempted to write an object with no provided id but the store already contains an id of " + R.id + ` for this object. The selectionSet that was trying to be written is:
` + JSON.stringify(n)), process.env.NODE_ENV === "production" ? E(!x || k, 6) : E(!x || k, "Store error: the application attempted to write an object with no provided typename but the store already contains an object with typename of " + R.typename + " for the object of id " + R.id + `. The selectionSet that was trying to be written is:
` + JSON.stringify(n)), R.generated && (C ? b || c.delete(R.id) : Ya(R.id, l.id, c));
      }
    }
    h = c.get(a), (!h || !ie(l, h[p])) && c.set(a, g(g({}, h), (t = {}, t[p] = l, t)));
  }, r.prototype.processArrayValue = function(e, t, n, i) {
    var a = this;
    return e.map(function(o, s) {
      if (o === null)
        return null;
      var u = t + "." + s;
      if (Array.isArray(o))
        return a.processArrayValue(o, u, n, i);
      var c = !0;
      if (i.dataIdFromObject) {
        var l = i.dataIdFromObject(o);
        l && (u = l, c = !1);
      }
      return Li(u, n, i.processedData) || a.writeSelectionSetToStore({
        dataId: u,
        result: o,
        selectionSet: n,
        context: i
      }), kt({ id: u, typename: o.__typename }, c);
    });
  }, r;
}();
function Pt(r) {
  return r[0] === "$";
}
function Ya(r, e, t) {
  if (r === e)
    return !1;
  var n = t.get(r), i = t.get(e), a = !1;
  Object.keys(n).forEach(function(s) {
    var u = n[s], c = i[s];
    jt(u) && Pt(u.id) && jt(c) && !ie(u, c) && Ya(u.id, c.id, t) && (a = !0);
  }), t.delete(r);
  var o = g(g({}, n), i);
  return ie(o, i) ? a : (t.set(e, o), !0);
}
function Li(r, e, t) {
  if (!t)
    return !1;
  if (t[r]) {
    if (t[r].indexOf(e) >= 0)
      return !0;
    t[r].push(e);
  } else
    t[r] = [e];
  return !1;
}
var Of = {
  fragmentMatcher: new vf(),
  dataIdFromObject: Ct,
  addTypename: !0,
  resultCaching: !0,
  freezeResults: !1
};
function Ct(r) {
  if (r.__typename) {
    if (r.id !== void 0)
      return r.__typename + ":" + r.id;
    if (r._id !== void 0)
      return r.__typename + ":" + r._id;
  }
  return null;
}
var Tf = Object.prototype.hasOwnProperty, ji = function(r) {
  de(e, r);
  function e(t, n, i) {
    var a = r.call(this, /* @__PURE__ */ Object.create(null)) || this;
    return a.optimisticId = t, a.parent = n, a.transaction = i, a;
  }
  return e.prototype.toObject = function() {
    return g(g({}, this.parent.toObject()), this.data);
  }, e.prototype.get = function(t) {
    return Tf.call(this.data, t) ? this.data[t] : this.parent.get(t);
  }, e;
}(En), kf = function(r) {
  de(e, r);
  function e(t) {
    t === void 0 && (t = {});
    var n = r.call(this) || this;
    n.watches = /* @__PURE__ */ new Set(), n.typenameDocumentCache = /* @__PURE__ */ new Map(), n.cacheKeyRoot = new bn(ln), n.silenceBroadcast = !1, n.config = g(g({}, Of), t), n.config.customResolvers && (process.env.NODE_ENV === "production" || E.warn("customResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating customResolvers in the next major version."), n.config.cacheRedirects = n.config.customResolvers), n.config.cacheResolvers && (process.env.NODE_ENV === "production" || E.warn("cacheResolvers have been renamed to cacheRedirects. Please update your config as we will be deprecating cacheResolvers in the next major version."), n.config.cacheRedirects = n.config.cacheResolvers), n.addTypename = !!n.config.addTypename, n.data = n.config.resultCaching ? new $e() : new En(), n.optimisticData = n.data, n.storeWriter = new Sf(), n.storeReader = new gf({
      cacheKeyRoot: n.cacheKeyRoot,
      freezeResults: t.freezeResults
    });
    var i = n, a = i.maybeBroadcastWatch;
    return n.maybeBroadcastWatch = ot(function(o) {
      return a.call(n, o);
    }, {
      makeCacheKey: function(o) {
        if (!o.optimistic && !o.previousResult && i.data instanceof $e)
          return i.cacheKeyRoot.lookup(o.query, JSON.stringify(o.variables));
      }
    }), n;
  }
  return e.prototype.restore = function(t) {
    return t && this.data.replace(t), this;
  }, e.prototype.extract = function(t) {
    return t === void 0 && (t = !1), (t ? this.optimisticData : this.data).toObject();
  }, e.prototype.read = function(t) {
    if (typeof t.rootId == "string" && typeof this.data.get(t.rootId) > "u")
      return null;
    var n = this.config.fragmentMatcher, i = n && n.match;
    return this.storeReader.readQueryFromStore({
      store: t.optimistic ? this.optimisticData : this.data,
      query: this.transformDocument(t.query),
      variables: t.variables,
      rootId: t.rootId,
      fragmentMatcherFunction: i,
      previousResult: t.previousResult,
      config: this.config
    }) || null;
  }, e.prototype.write = function(t) {
    var n = this.config.fragmentMatcher, i = n && n.match;
    this.storeWriter.writeResultToStore({
      dataId: t.dataId,
      result: t.result,
      variables: t.variables,
      document: this.transformDocument(t.query),
      store: this.data,
      dataIdFromObject: this.config.dataIdFromObject,
      fragmentMatcherFunction: i
    }), this.broadcastWatches();
  }, e.prototype.diff = function(t) {
    var n = this.config.fragmentMatcher, i = n && n.match;
    return this.storeReader.diffQueryAgainstStore({
      store: t.optimistic ? this.optimisticData : this.data,
      query: this.transformDocument(t.query),
      variables: t.variables,
      returnPartialData: t.returnPartialData,
      previousResult: t.previousResult,
      fragmentMatcherFunction: i,
      config: this.config
    });
  }, e.prototype.watch = function(t) {
    var n = this;
    return this.watches.add(t), function() {
      n.watches.delete(t);
    };
  }, e.prototype.evict = function(t) {
    throw process.env.NODE_ENV === "production" ? new _(7) : new _("eviction is not implemented on InMemory Cache");
  }, e.prototype.reset = function() {
    return this.data.clear(), this.broadcastWatches(), Promise.resolve();
  }, e.prototype.removeOptimistic = function(t) {
    for (var n = [], i = 0, a = this.optimisticData; a instanceof ji; )
      a.optimisticId === t ? ++i : n.push(a), a = a.parent;
    if (i > 0) {
      for (this.optimisticData = a; n.length > 0; ) {
        var o = n.pop();
        this.performTransaction(o.transaction, o.optimisticId);
      }
      this.broadcastWatches();
    }
  }, e.prototype.performTransaction = function(t, n) {
    var i = this, a = i.data, o = i.silenceBroadcast;
    this.silenceBroadcast = !0, typeof n == "string" && (this.data = this.optimisticData = new ji(n, this.optimisticData, t));
    try {
      t(this);
    } finally {
      this.silenceBroadcast = o, this.data = a;
    }
    this.broadcastWatches();
  }, e.prototype.recordOptimisticTransaction = function(t, n) {
    return this.performTransaction(t, n);
  }, e.prototype.transformDocument = function(t) {
    if (this.addTypename) {
      var n = this.typenameDocumentCache.get(t);
      return n || (n = nl(t), this.typenameDocumentCache.set(t, n), this.typenameDocumentCache.set(n, n)), n;
    }
    return t;
  }, e.prototype.broadcastWatches = function() {
    var t = this;
    this.silenceBroadcast || this.watches.forEach(function(n) {
      return t.maybeBroadcastWatch(n);
    });
  }, e.prototype.maybeBroadcastWatch = function(t) {
    t.callback(this.diff({
      query: t.query,
      variables: t.variables,
      previousResult: t.previousResult && t.previousResult(),
      optimistic: t.optimistic
    }));
  }, e;
}(Jl);
function Nf(r) {
  var e = r.split(/\r\n|[\n\r]/g), t = Pf(r);
  if (t !== 0)
    for (var n = 1; n < e.length; n++)
      e[n] = e[n].slice(t);
  for (var i = 0; i < e.length && $i(e[i]); )
    ++i;
  for (var a = e.length; a > i && $i(e[a - 1]); )
    --a;
  return e.slice(i, a).join(`
`);
}
function $i(r) {
  for (var e = 0; e < r.length; ++e)
    if (r[e] !== " " && r[e] !== "	")
      return !1;
  return !0;
}
function Pf(r) {
  for (var e, t = !0, n = !0, i = 0, a = null, o = 0; o < r.length; ++o)
    switch (r.charCodeAt(o)) {
      case 13:
        r.charCodeAt(o + 1) === 10 && ++o;
      case 10:
        t = !1, n = !0, i = 0;
        break;
      case 9:
      case 32:
        ++i;
        break;
      default:
        n && !t && (a === null || i < a) && (a = i), n = !1;
    }
  return (e = a) !== null && e !== void 0 ? e : 0;
}
function Cf(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, n = r.indexOf(`
`) === -1, i = r[0] === " " || r[0] === "	", a = r[r.length - 1] === '"', o = r[r.length - 1] === "\\", s = !n || a || o || t, u = "";
  return s && !(n && i) && (u += `
` + e), u += e ? r.replace(/\n/g, `
` + e) : r, s && (u += `
`), '"""' + u.replace(/"""/g, '\\"""') + '"""';
}
function xf(r) {
  return me(r, {
    leave: If
  });
}
var Df = 80, If = {
  Name: function(e) {
    return e.value;
  },
  Variable: function(e) {
    return "$" + e.name;
  },
  // Document
  Document: function(e) {
    return O(e.definitions, `

`) + `
`;
  },
  OperationDefinition: function(e) {
    var t = e.operation, n = e.name, i = B("(", O(e.variableDefinitions, ", "), ")"), a = O(e.directives, " "), o = e.selectionSet;
    return !n && !a && !i && t === "query" ? o : O([t, O([n, i]), a, o], " ");
  },
  VariableDefinition: function(e) {
    var t = e.variable, n = e.type, i = e.defaultValue, a = e.directives;
    return t + ": " + n + B(" = ", i) + B(" ", O(a, " "));
  },
  SelectionSet: function(e) {
    var t = e.selections;
    return oe(t);
  },
  Field: function(e) {
    var t = e.alias, n = e.name, i = e.arguments, a = e.directives, o = e.selectionSet, s = B("", t, ": ") + n, u = s + B("(", O(i, ", "), ")");
    return u.length > Df && (u = s + B(`(
`, xt(O(i, `
`)), `
)`)), O([u, O(a, " "), o], " ");
  },
  Argument: function(e) {
    var t = e.name, n = e.value;
    return t + ": " + n;
  },
  // Fragments
  FragmentSpread: function(e) {
    var t = e.name, n = e.directives;
    return "..." + t + B(" ", O(n, " "));
  },
  InlineFragment: function(e) {
    var t = e.typeCondition, n = e.directives, i = e.selectionSet;
    return O(["...", B("on ", t), O(n, " "), i], " ");
  },
  FragmentDefinition: function(e) {
    var t = e.name, n = e.typeCondition, i = e.variableDefinitions, a = e.directives, o = e.selectionSet;
    return (
      // Note: fragment variable definitions are experimental and may be changed
      // or removed in the future.
      "fragment ".concat(t).concat(B("(", O(i, ", "), ")"), " ") + "on ".concat(n, " ").concat(B("", O(a, " "), " ")) + o
    );
  },
  // Value
  IntValue: function(e) {
    var t = e.value;
    return t;
  },
  FloatValue: function(e) {
    var t = e.value;
    return t;
  },
  StringValue: function(e, t) {
    var n = e.value, i = e.block;
    return i ? Cf(n, t === "description" ? "" : "  ") : JSON.stringify(n);
  },
  BooleanValue: function(e) {
    var t = e.value;
    return t ? "true" : "false";
  },
  NullValue: function() {
    return "null";
  },
  EnumValue: function(e) {
    var t = e.value;
    return t;
  },
  ListValue: function(e) {
    var t = e.values;
    return "[" + O(t, ", ") + "]";
  },
  ObjectValue: function(e) {
    var t = e.fields;
    return "{" + O(t, ", ") + "}";
  },
  ObjectField: function(e) {
    var t = e.name, n = e.value;
    return t + ": " + n;
  },
  // Directive
  Directive: function(e) {
    var t = e.name, n = e.arguments;
    return "@" + t + B("(", O(n, ", "), ")");
  },
  // Type
  NamedType: function(e) {
    var t = e.name;
    return t;
  },
  ListType: function(e) {
    var t = e.type;
    return "[" + t + "]";
  },
  NonNullType: function(e) {
    var t = e.type;
    return t + "!";
  },
  // Type System Definitions
  SchemaDefinition: ae(function(r) {
    var e = r.directives, t = r.operationTypes;
    return O(["schema", O(e, " "), oe(t)], " ");
  }),
  OperationTypeDefinition: function(e) {
    var t = e.operation, n = e.type;
    return t + ": " + n;
  },
  ScalarTypeDefinition: ae(function(r) {
    var e = r.name, t = r.directives;
    return O(["scalar", e, O(t, " ")], " ");
  }),
  ObjectTypeDefinition: ae(function(r) {
    var e = r.name, t = r.interfaces, n = r.directives, i = r.fields;
    return O(["type", e, B("implements ", O(t, " & ")), O(n, " "), oe(i)], " ");
  }),
  FieldDefinition: ae(function(r) {
    var e = r.name, t = r.arguments, n = r.type, i = r.directives;
    return e + (Ui(t) ? B(`(
`, xt(O(t, `
`)), `
)`) : B("(", O(t, ", "), ")")) + ": " + n + B(" ", O(i, " "));
  }),
  InputValueDefinition: ae(function(r) {
    var e = r.name, t = r.type, n = r.defaultValue, i = r.directives;
    return O([e + ": " + t, B("= ", n), O(i, " ")], " ");
  }),
  InterfaceTypeDefinition: ae(function(r) {
    var e = r.name, t = r.interfaces, n = r.directives, i = r.fields;
    return O(["interface", e, B("implements ", O(t, " & ")), O(n, " "), oe(i)], " ");
  }),
  UnionTypeDefinition: ae(function(r) {
    var e = r.name, t = r.directives, n = r.types;
    return O(["union", e, O(t, " "), n && n.length !== 0 ? "= " + O(n, " | ") : ""], " ");
  }),
  EnumTypeDefinition: ae(function(r) {
    var e = r.name, t = r.directives, n = r.values;
    return O(["enum", e, O(t, " "), oe(n)], " ");
  }),
  EnumValueDefinition: ae(function(r) {
    var e = r.name, t = r.directives;
    return O([e, O(t, " ")], " ");
  }),
  InputObjectTypeDefinition: ae(function(r) {
    var e = r.name, t = r.directives, n = r.fields;
    return O(["input", e, O(t, " "), oe(n)], " ");
  }),
  DirectiveDefinition: ae(function(r) {
    var e = r.name, t = r.arguments, n = r.repeatable, i = r.locations;
    return "directive @" + e + (Ui(t) ? B(`(
`, xt(O(t, `
`)), `
)`) : B("(", O(t, ", "), ")")) + (n ? " repeatable" : "") + " on " + O(i, " | ");
  }),
  SchemaExtension: function(e) {
    var t = e.directives, n = e.operationTypes;
    return O(["extend schema", O(t, " "), oe(n)], " ");
  },
  ScalarTypeExtension: function(e) {
    var t = e.name, n = e.directives;
    return O(["extend scalar", t, O(n, " ")], " ");
  },
  ObjectTypeExtension: function(e) {
    var t = e.name, n = e.interfaces, i = e.directives, a = e.fields;
    return O(["extend type", t, B("implements ", O(n, " & ")), O(i, " "), oe(a)], " ");
  },
  InterfaceTypeExtension: function(e) {
    var t = e.name, n = e.interfaces, i = e.directives, a = e.fields;
    return O(["extend interface", t, B("implements ", O(n, " & ")), O(i, " "), oe(a)], " ");
  },
  UnionTypeExtension: function(e) {
    var t = e.name, n = e.directives, i = e.types;
    return O(["extend union", t, O(n, " "), i && i.length !== 0 ? "= " + O(i, " | ") : ""], " ");
  },
  EnumTypeExtension: function(e) {
    var t = e.name, n = e.directives, i = e.values;
    return O(["extend enum", t, O(n, " "), oe(i)], " ");
  },
  InputObjectTypeExtension: function(e) {
    var t = e.name, n = e.directives, i = e.fields;
    return O(["extend input", t, O(n, " "), oe(i)], " ");
  }
};
function ae(r) {
  return function(e) {
    return O([e.description, r(e)], `
`);
  };
}
function O(r) {
  var e, t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "";
  return (e = r == null ? void 0 : r.filter(function(n) {
    return n;
  }).join(t)) !== null && e !== void 0 ? e : "";
}
function oe(r) {
  return B(`{
`, xt(O(r, `
`)), `
}`);
}
function B(r, e) {
  var t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "";
  return e != null && e !== "" ? r + e + t : "";
}
function xt(r) {
  return B("  ", r.replace(/\n/g, `
  `));
}
function Af(r) {
  return r.indexOf(`
`) !== -1;
}
function Ui(r) {
  return r != null && r.some(Af);
}
var _f = {
  includeQuery: !0,
  includeExtensions: !1
}, Ff = {
  accept: "*/*",
  "content-type": "application/json"
}, qf = {
  method: "POST"
}, Mf = {
  http: _f,
  headers: Ff,
  options: qf
}, Bi = function(r, e, t) {
  var n = new Error(t);
  throw n.name = "ServerError", n.response = r, n.statusCode = r.status, n.result = e, n;
}, Lf = function(r) {
  return function(e) {
    return e.text().then(function(t) {
      try {
        return JSON.parse(t);
      } catch (i) {
        var n = i;
        return n.name = "ServerParseError", n.response = e, n.statusCode = e.status, n.bodyText = t, Promise.reject(n);
      }
    }).then(function(t) {
      return e.status >= 300 && Bi(e, t, "Response not successful: Received status code " + e.status), !Array.isArray(t) && !t.hasOwnProperty("data") && !t.hasOwnProperty("errors") && Bi(e, t, "Server response was missing for query '" + (Array.isArray(r) ? r.map(function(n) {
        return n.operationName;
      }) : r.operationName) + "'."), t;
    });
  };
}, jf = function(r) {
  if (!r && typeof fetch > "u") {
    var e = "unfetch";
    throw typeof window > "u" && (e = "node-fetch"), process.env.NODE_ENV === "production" ? new _(1) : new _(`
fetch is not found globally and no fetcher passed, to fix pass a fetch for
your environment like https://www.npmjs.com/package/` + e + `.

For example:
import fetch from '` + e + `';
import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: '/graphql', fetch: fetch });`);
  }
}, $f = function() {
  if (typeof AbortController > "u")
    return { controller: !1, signal: !1 };
  var r = new AbortController(), e = r.signal;
  return { controller: r, signal: e };
}, Uf = function(r, e) {
  for (var t = [], n = 2; n < arguments.length; n++)
    t[n - 2] = arguments[n];
  var i = g({}, e.options, { headers: e.headers, credentials: e.credentials }), a = e.http;
  t.forEach(function(h) {
    i = g({}, i, h.options, { headers: g({}, i.headers, h.headers) }), h.credentials && (i.credentials = h.credentials), a = g({}, a, h.http);
  });
  var o = r.operationName, s = r.extensions, u = r.variables, c = r.query, l = { operationName: o, variables: u };
  return a.includeExtensions && (l.extensions = s), a.includeQuery && (l.query = xf(c)), {
    options: i,
    body: l
  };
}, Gr = function(r, e) {
  var t;
  try {
    t = JSON.stringify(r);
  } catch (i) {
    var n = process.env.NODE_ENV === "production" ? new _(2) : new _("Network request failed. " + e + " is not serializable: " + i.message);
    throw n.parseError = i, n;
  }
  return t;
}, Bf = function(r, e) {
  var t = r.getContext(), n = t.uri;
  return n || (typeof e == "function" ? e(r) : e || "/graphql");
}, Ja = function(r) {
  r === void 0 && (r = {});
  var e = r.uri, t = e === void 0 ? "/graphql" : e, n = r.fetch, i = r.includeExtensions, a = r.useGETForQueries, o = Ra(r, ["uri", "fetch", "includeExtensions", "useGETForQueries"]);
  jf(n), n || (n = fetch);
  var s = {
    http: { includeExtensions: i },
    options: o.fetchOptions,
    credentials: o.credentials,
    headers: o.headers
  };
  return new ce(function(u) {
    var c = Bf(u, t), l = u.getContext(), h = {};
    if (l.clientAwareness) {
      var p = l.clientAwareness, m = p.name, y = p.version;
      m && (h["apollographql-client-name"] = m), y && (h["apollographql-client-version"] = y);
    }
    var b = g({}, h, l.headers), w = {
      http: l.http,
      options: l.fetchOptions,
      credentials: l.credentials,
      headers: b
    }, T = Uf(u, Mf, s, w), R = T.options, x = T.body, k;
    if (!R.signal) {
      var C = $f(), j = C.controller, M = C.signal;
      k = j, k && (R.signal = M);
    }
    var L = function(X) {
      return X.kind === "OperationDefinition" && X.operation === "mutation";
    };
    if (a && !u.query.definitions.some(L) && (R.method = "GET"), R.method === "GET") {
      var I = Qf(c, x), J = I.newURI, Oe = I.parseError;
      if (Oe)
        return Ni(Oe);
      c = J;
    } else
      try {
        R.body = Gr(x, "Payload");
      } catch (X) {
        return Ni(X);
      }
    return new Y(function(X) {
      return n(c, R).then(function($) {
        return u.setContext({ response: $ }), $;
      }).then(Lf(u)).then(function($) {
        return X.next($), X.complete(), $;
      }).catch(function($) {
        $.name !== "AbortError" && ($.result && $.result.errors && $.result.data && X.next($.result), X.error($));
      }), function() {
        k && k.abort();
      };
    });
  });
};
function Qf(r, e) {
  var t = [], n = function(h, p) {
    t.push(h + "=" + encodeURIComponent(p));
  };
  if ("query" in e && n("query", e.query), e.operationName && n("operationName", e.operationName), e.variables) {
    var i = void 0;
    try {
      i = Gr(e.variables, "Variables map");
    } catch (h) {
      return { parseError: h };
    }
    n("variables", i);
  }
  if (e.extensions) {
    var a = void 0;
    try {
      a = Gr(e.extensions, "Extensions map");
    } catch (h) {
      return { parseError: h };
    }
    n("extensions", a);
  }
  var o = "", s = r, u = r.indexOf("#");
  u !== -1 && (o = r.substr(u), s = r.substr(0, u));
  var c = s.indexOf("?") === -1 ? "?" : "&", l = s + c + t.join("&") + o;
  return { newURI: l };
}
(function(r) {
  de(e, r);
  function e(t) {
    return r.call(this, Ja(t).request) || this;
  }
  return e;
})(ce);
function Vf(r) {
  return new ce(function(e, t) {
    var n = Ra(e, []);
    return new Y(function(i) {
      var a;
      return Promise.resolve(n).then(function(o) {
        return r(o, e.getContext());
      }).then(e.setContext).then(function() {
        a = t(e).subscribe({
          next: i.next.bind(i),
          error: i.error.bind(i),
          complete: i.complete.bind(i)
        });
      }).catch(i.error.bind(i)), function() {
        a && a.unsubscribe();
      };
    });
  });
}
const Gf = { __schema: { types: [{ kind: "INTERFACE", name: "Node", possibleTypes: [{ name: "AddedToProjectEvent" }, { name: "App" }, { name: "AssignedEvent" }, { name: "BaseRefChangedEvent" }, { name: "BaseRefForcePushedEvent" }, { name: "Blob" }, { name: "Bot" }, { name: "BranchProtectionRule" }, { name: "ClosedEvent" }, { name: "CodeOfConduct" }, { name: "CommentDeletedEvent" }, { name: "Commit" }, { name: "CommitComment" }, { name: "CommitCommentThread" }, { name: "ConvertedNoteToIssueEvent" }, { name: "CrossReferencedEvent" }, { name: "DemilestonedEvent" }, { name: "DeployKey" }, { name: "DeployedEvent" }, { name: "Deployment" }, { name: "DeploymentEnvironmentChangedEvent" }, { name: "DeploymentStatus" }, { name: "ExternalIdentity" }, { name: "Gist" }, { name: "GistComment" }, { name: "HeadRefDeletedEvent" }, { name: "HeadRefForcePushedEvent" }, { name: "HeadRefRestoredEvent" }, { name: "Issue" }, { name: "IssueComment" }, { name: "Label" }, { name: "LabeledEvent" }, { name: "Language" }, { name: "License" }, { name: "LockedEvent" }, { name: "Mannequin" }, { name: "MarketplaceCategory" }, { name: "MarketplaceListing" }, { name: "MentionedEvent" }, { name: "MergedEvent" }, { name: "Milestone" }, { name: "MilestonedEvent" }, { name: "MovedColumnsInProjectEvent" }, { name: "Organization" }, { name: "OrganizationIdentityProvider" }, { name: "OrganizationInvitation" }, { name: "PinnedEvent" }, { name: "Project" }, { name: "ProjectCard" }, { name: "ProjectColumn" }, { name: "PublicKey" }, { name: "PullRequest" }, { name: "PullRequestCommit" }, { name: "PullRequestCommitCommentThread" }, { name: "PullRequestReview" }, { name: "PullRequestReviewComment" }, { name: "PullRequestReviewThread" }, { name: "PushAllowance" }, { name: "Reaction" }, { name: "ReadyForReviewEvent" }, { name: "Ref" }, { name: "ReferencedEvent" }, { name: "RegistryPackage" }, { name: "RegistryPackageDependency" }, { name: "RegistryPackageFile" }, { name: "RegistryPackageTag" }, { name: "RegistryPackageVersion" }, { name: "Release" }, { name: "ReleaseAsset" }, { name: "RemovedFromProjectEvent" }, { name: "RenamedTitleEvent" }, { name: "ReopenedEvent" }, { name: "Repository" }, { name: "RepositoryInvitation" }, { name: "RepositoryTopic" }, { name: "ReviewDismissalAllowance" }, { name: "ReviewDismissedEvent" }, { name: "ReviewRequest" }, { name: "ReviewRequestRemovedEvent" }, { name: "ReviewRequestedEvent" }, { name: "SavedReply" }, { name: "SecurityAdvisory" }, { name: "SponsorsListing" }, { name: "Sponsorship" }, { name: "Status" }, { name: "StatusContext" }, { name: "SubscribedEvent" }, { name: "Tag" }, { name: "Team" }, { name: "Topic" }, { name: "TransferredEvent" }, { name: "Tree" }, { name: "UnassignedEvent" }, { name: "UnlabeledEvent" }, { name: "UnlockedEvent" }, { name: "UnpinnedEvent" }, { name: "UnsubscribedEvent" }, { name: "User" }, { name: "UserBlockedEvent" }, { name: "UserContentEdit" }, { name: "UserStatus" }] }, { kind: "INTERFACE", name: "UniformResourceLocatable", possibleTypes: [{ name: "Bot" }, { name: "ClosedEvent" }, { name: "Commit" }, { name: "CrossReferencedEvent" }, { name: "Gist" }, { name: "Issue" }, { name: "Mannequin" }, { name: "MergedEvent" }, { name: "Milestone" }, { name: "Organization" }, { name: "PullRequest" }, { name: "PullRequestCommit" }, { name: "ReadyForReviewEvent" }, { name: "Release" }, { name: "Repository" }, { name: "RepositoryTopic" }, { name: "ReviewDismissedEvent" }, { name: "User" }] }, { kind: "INTERFACE", name: "Actor", possibleTypes: [{ name: "Bot" }, { name: "Mannequin" }, { name: "Organization" }, { name: "User" }] }, { kind: "INTERFACE", name: "RegistryPackageOwner", possibleTypes: [{ name: "Organization" }, { name: "Repository" }, { name: "User" }] }, { kind: "INTERFACE", name: "ProjectOwner", possibleTypes: [{ name: "Organization" }, { name: "Repository" }, { name: "User" }] }, { kind: "INTERFACE", name: "Closable", possibleTypes: [{ name: "Issue" }, { name: "Milestone" }, { name: "Project" }, { name: "PullRequest" }] }, { kind: "INTERFACE", name: "Updatable", possibleTypes: [{ name: "CommitComment" }, { name: "GistComment" }, { name: "Issue" }, { name: "IssueComment" }, { name: "Project" }, { name: "PullRequest" }, { name: "PullRequestReview" }, { name: "PullRequestReviewComment" }] }, { kind: "UNION", name: "ProjectCardItem", possibleTypes: [{ name: "Issue" }, { name: "PullRequest" }] }, { kind: "INTERFACE", name: "Assignable", possibleTypes: [{ name: "Issue" }, { name: "PullRequest" }] }, { kind: "INTERFACE", name: "Comment", possibleTypes: [{ name: "CommitComment" }, { name: "GistComment" }, { name: "Issue" }, { name: "IssueComment" }, { name: "PullRequest" }, { name: "PullRequestReview" }, { name: "PullRequestReviewComment" }] }, { kind: "INTERFACE", name: "UpdatableComment", possibleTypes: [{ name: "CommitComment" }, { name: "GistComment" }, { name: "Issue" }, { name: "IssueComment" }, { name: "PullRequest" }, { name: "PullRequestReview" }, { name: "PullRequestReviewComment" }] }, { kind: "INTERFACE", name: "Labelable", possibleTypes: [{ name: "Issue" }, { name: "PullRequest" }] }, { kind: "INTERFACE", name: "Lockable", possibleTypes: [{ name: "Issue" }, { name: "PullRequest" }] }, { kind: "INTERFACE", name: "RegistryPackageSearch", possibleTypes: [{ name: "Organization" }, { name: "User" }] }, { kind: "INTERFACE", name: "RepositoryOwner", possibleTypes: [{ name: "Organization" }, { name: "User" }] }, { kind: "INTERFACE", name: "MemberStatusable", possibleTypes: [{ name: "Organization" }, { name: "Team" }] }, { kind: "INTERFACE", name: "ProfileOwner", possibleTypes: [{ name: "Organization" }, { name: "User" }] }, { kind: "UNION", name: "PinnableItem", possibleTypes: [{ name: "Gist" }, { name: "Repository" }] }, { kind: "INTERFACE", name: "Starrable", possibleTypes: [{ name: "Gist" }, { name: "Repository" }, { name: "Topic" }] }, { kind: "INTERFACE", name: "RepositoryInfo", possibleTypes: [{ name: "Repository" }] }, { kind: "INTERFACE", name: "GitObject", possibleTypes: [{ name: "Blob" }, { name: "Commit" }, { name: "Tag" }, { name: "Tree" }] }, { kind: "INTERFACE", name: "RepositoryNode", possibleTypes: [{ name: "CommitComment" }, { name: "CommitCommentThread" }, { name: "Issue" }, { name: "IssueComment" }, { name: "PullRequest" }, { name: "PullRequestCommitCommentThread" }, { name: "PullRequestReview" }, { name: "PullRequestReviewComment" }] }, { kind: "INTERFACE", name: "Subscribable", possibleTypes: [{ name: "Commit" }, { name: "Issue" }, { name: "PullRequest" }, { name: "Repository" }, { name: "Team" }] }, { kind: "INTERFACE", name: "Deletable", possibleTypes: [{ name: "CommitComment" }, { name: "GistComment" }, { name: "IssueComment" }, { name: "PullRequestReview" }, { name: "PullRequestReviewComment" }] }, { kind: "INTERFACE", name: "Reactable", possibleTypes: [{ name: "CommitComment" }, { name: "Issue" }, { name: "IssueComment" }, { name: "PullRequest" }, { name: "PullRequestReview" }, { name: "PullRequestReviewComment" }] }, { kind: "INTERFACE", name: "GitSignature", possibleTypes: [{ name: "GpgSignature" }, { name: "SmimeSignature" }, { name: "UnknownSignature" }] }, { kind: "UNION", name: "RequestedReviewer", possibleTypes: [{ name: "User" }, { name: "Team" }, { name: "Mannequin" }] }, { kind: "UNION", name: "PullRequestTimelineItem", possibleTypes: [{ name: "Commit" }, { name: "CommitCommentThread" }, { name: "PullRequestReview" }, { name: "PullRequestReviewThread" }, { name: "PullRequestReviewComment" }, { name: "IssueComment" }, { name: "ClosedEvent" }, { name: "ReopenedEvent" }, { name: "SubscribedEvent" }, { name: "UnsubscribedEvent" }, { name: "MergedEvent" }, { name: "ReferencedEvent" }, { name: "CrossReferencedEvent" }, { name: "AssignedEvent" }, { name: "UnassignedEvent" }, { name: "LabeledEvent" }, { name: "UnlabeledEvent" }, { name: "MilestonedEvent" }, { name: "DemilestonedEvent" }, { name: "RenamedTitleEvent" }, { name: "LockedEvent" }, { name: "UnlockedEvent" }, { name: "DeployedEvent" }, { name: "DeploymentEnvironmentChangedEvent" }, { name: "HeadRefDeletedEvent" }, { name: "HeadRefRestoredEvent" }, { name: "HeadRefForcePushedEvent" }, { name: "BaseRefForcePushedEvent" }, { name: "ReviewRequestedEvent" }, { name: "ReviewRequestRemovedEvent" }, { name: "ReviewDismissedEvent" }, { name: "UserBlockedEvent" }] }, { kind: "UNION", name: "Closer", possibleTypes: [{ name: "Commit" }, { name: "PullRequest" }] }, { kind: "UNION", name: "ReferencedSubject", possibleTypes: [{ name: "Issue" }, { name: "PullRequest" }] }, { kind: "UNION", name: "Assignee", possibleTypes: [{ name: "Bot" }, { name: "Mannequin" }, { name: "Organization" }, { name: "User" }] }, { kind: "UNION", name: "MilestoneItem", possibleTypes: [{ name: "Issue" }, { name: "PullRequest" }] }, { kind: "UNION", name: "RenamedTitleSubject", possibleTypes: [{ name: "Issue" }, { name: "PullRequest" }] }, { kind: "UNION", name: "PullRequestTimelineItems", possibleTypes: [{ name: "PullRequestCommit" }, { name: "PullRequestCommitCommentThread" }, { name: "PullRequestReview" }, { name: "PullRequestReviewThread" }, { name: "PullRequestRevisionMarker" }, { name: "BaseRefChangedEvent" }, { name: "BaseRefForcePushedEvent" }, { name: "DeployedEvent" }, { name: "DeploymentEnvironmentChangedEvent" }, { name: "HeadRefDeletedEvent" }, { name: "HeadRefForcePushedEvent" }, { name: "HeadRefRestoredEvent" }, { name: "MergedEvent" }, { name: "ReviewDismissedEvent" }, { name: "ReviewRequestedEvent" }, { name: "ReviewRequestRemovedEvent" }, { name: "ReadyForReviewEvent" }, { name: "IssueComment" }, { name: "CrossReferencedEvent" }, { name: "AddedToProjectEvent" }, { name: "AssignedEvent" }, { name: "ClosedEvent" }, { name: "CommentDeletedEvent" }, { name: "ConvertedNoteToIssueEvent" }, { name: "DemilestonedEvent" }, { name: "LabeledEvent" }, { name: "LockedEvent" }, { name: "MentionedEvent" }, { name: "MilestonedEvent" }, { name: "MovedColumnsInProjectEvent" }, { name: "PinnedEvent" }, { name: "ReferencedEvent" }, { name: "RemovedFromProjectEvent" }, { name: "RenamedTitleEvent" }, { name: "ReopenedEvent" }, { name: "SubscribedEvent" }, { name: "TransferredEvent" }, { name: "UnassignedEvent" }, { name: "UnlabeledEvent" }, { name: "UnlockedEvent" }, { name: "UserBlockedEvent" }, { name: "UnpinnedEvent" }, { name: "UnsubscribedEvent" }] }, { kind: "UNION", name: "IssueOrPullRequest", possibleTypes: [{ name: "Issue" }, { name: "PullRequest" }] }, { kind: "UNION", name: "IssueTimelineItem", possibleTypes: [{ name: "Commit" }, { name: "IssueComment" }, { name: "CrossReferencedEvent" }, { name: "ClosedEvent" }, { name: "ReopenedEvent" }, { name: "SubscribedEvent" }, { name: "UnsubscribedEvent" }, { name: "ReferencedEvent" }, { name: "AssignedEvent" }, { name: "UnassignedEvent" }, { name: "LabeledEvent" }, { name: "UnlabeledEvent" }, { name: "UserBlockedEvent" }, { name: "MilestonedEvent" }, { name: "DemilestonedEvent" }, { name: "RenamedTitleEvent" }, { name: "LockedEvent" }, { name: "UnlockedEvent" }, { name: "TransferredEvent" }] }, { kind: "UNION", name: "IssueTimelineItems", possibleTypes: [{ name: "IssueComment" }, { name: "CrossReferencedEvent" }, { name: "AddedToProjectEvent" }, { name: "AssignedEvent" }, { name: "ClosedEvent" }, { name: "CommentDeletedEvent" }, { name: "ConvertedNoteToIssueEvent" }, { name: "DemilestonedEvent" }, { name: "LabeledEvent" }, { name: "LockedEvent" }, { name: "MentionedEvent" }, { name: "MilestonedEvent" }, { name: "MovedColumnsInProjectEvent" }, { name: "PinnedEvent" }, { name: "ReferencedEvent" }, { name: "RemovedFromProjectEvent" }, { name: "RenamedTitleEvent" }, { name: "ReopenedEvent" }, { name: "SubscribedEvent" }, { name: "TransferredEvent" }, { name: "UnassignedEvent" }, { name: "UnlabeledEvent" }, { name: "UnlockedEvent" }, { name: "UserBlockedEvent" }, { name: "UnpinnedEvent" }, { name: "UnsubscribedEvent" }] }, { kind: "UNION", name: "ReviewDismissalAllowanceActor", possibleTypes: [{ name: "User" }, { name: "Team" }] }, { kind: "UNION", name: "PushAllowanceActor", possibleTypes: [{ name: "User" }, { name: "Team" }] }, { kind: "UNION", name: "PermissionGranter", possibleTypes: [{ name: "Organization" }, { name: "Repository" }, { name: "Team" }] }, { kind: "INTERFACE", name: "Sponsorable", possibleTypes: [{ name: "User" }] }, { kind: "INTERFACE", name: "Contribution", possibleTypes: [{ name: "CreatedCommitContribution" }, { name: "CreatedIssueContribution" }, { name: "CreatedPullRequestContribution" }, { name: "CreatedPullRequestReviewContribution" }, { name: "CreatedRepositoryContribution" }, { name: "JoinedGitHubContribution" }, { name: "RestrictedContribution" }] }, { kind: "UNION", name: "CreatedRepositoryOrRestrictedContribution", possibleTypes: [{ name: "CreatedRepositoryContribution" }, { name: "RestrictedContribution" }] }, { kind: "UNION", name: "CreatedIssueOrRestrictedContribution", possibleTypes: [{ name: "CreatedIssueContribution" }, { name: "RestrictedContribution" }] }, { kind: "UNION", name: "CreatedPullRequestOrRestrictedContribution", possibleTypes: [{ name: "CreatedPullRequestContribution" }, { name: "RestrictedContribution" }] }, { kind: "UNION", name: "SearchResultItem", possibleTypes: [{ name: "Issue" }, { name: "PullRequest" }, { name: "Repository" }, { name: "User" }, { name: "Organization" }, { name: "MarketplaceListing" }, { name: "App" }] }, { kind: "UNION", name: "CollectionItemContent", possibleTypes: [{ name: "Repository" }, { name: "Organization" }, { name: "User" }] }] } };
var Kt = function() {
  return Kt = Object.assign || function(e) {
    for (var t, n = 1, i = arguments.length; n < i; n++) {
      t = arguments[n];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Kt.apply(this, arguments);
};
function Dt(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Dt = function(t) {
    return typeof t;
  } : Dt = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Dt(r);
}
function Kf(r) {
  return Dt(r) == "object" && r !== null;
}
var Xa = typeof Symbol == "function" && Symbol.toStringTag != null ? Symbol.toStringTag : "@@toStringTag";
function Kr(r, e) {
  for (var t = /\r\n|[\n\r]/g, n = 1, i = e + 1, a; (a = t.exec(r.body)) && a.index < e; )
    n += 1, i = e + 1 - (a.index + a[0].length);
  return {
    line: n,
    column: i
  };
}
function Wf(r) {
  return Za(r.source, Kr(r.source, r.start));
}
function Za(r, e) {
  var t = r.locationOffset.column - 1, n = It(t) + r.body, i = e.line - 1, a = r.locationOffset.line - 1, o = e.line + a, s = e.line === 1 ? t : 0, u = e.column + s, c = "".concat(r.name, ":").concat(o, ":").concat(u, `
`), l = n.split(/\r\n|[\n\r]/g), h = l[i];
  if (h.length > 120) {
    for (var p = Math.floor(u / 80), m = u % 80, y = [], b = 0; b < h.length; b += 80)
      y.push(h.slice(b, b + 80));
    return c + Qi([["".concat(o), y[0]]].concat(y.slice(1, p + 1).map(function(w) {
      return ["", w];
    }), [[" ", It(m - 1) + "^"], ["", y[p + 1]]]));
  }
  return c + Qi([
    // Lines specified like this: ["prefix", "string"],
    ["".concat(o - 1), l[i - 1]],
    ["".concat(o), h],
    ["", It(u - 1) + "^"],
    ["".concat(o + 1), l[i + 1]]
  ]);
}
function Qi(r) {
  var e = r.filter(function(n) {
    n[0];
    var i = n[1];
    return i !== void 0;
  }), t = Math.max.apply(Math, e.map(function(n) {
    var i = n[0];
    return i.length;
  }));
  return e.map(function(n) {
    var i = n[0], a = n[1];
    return zf(t, i) + (a ? " | " + a : " |");
  }).join(`
`);
}
function It(r) {
  return Array(r + 1).join(" ");
}
function zf(r, e) {
  return It(r - e.length) + e;
}
function At(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? At = function(t) {
    return typeof t;
  } : At = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, At(r);
}
function Vi(r, e) {
  var t = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(r);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(r, i).enumerable;
    })), t.push.apply(t, n);
  }
  return t;
}
function Hf(r) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Vi(Object(t), !0).forEach(function(n) {
      Yf(r, n, t[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : Vi(Object(t)).forEach(function(n) {
      Object.defineProperty(r, n, Object.getOwnPropertyDescriptor(t, n));
    });
  }
  return r;
}
function Yf(r, e, t) {
  return e in r ? Object.defineProperty(r, e, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : r[e] = t, r;
}
function Jf(r, e) {
  if (!(r instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Xf(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
  }
}
function Zf(r, e, t) {
  return e && Xf(r.prototype, e), r;
}
function eh(r, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function");
  r.prototype = Object.create(e && e.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), e && ft(r, e);
}
function th(r) {
  var e = to();
  return function() {
    var n = ht(r), i;
    if (e) {
      var a = ht(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return eo(this, i);
  };
}
function eo(r, e) {
  return e && (At(e) === "object" || typeof e == "function") ? e : it(r);
}
function it(r) {
  if (r === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return r;
}
function Wr(r) {
  var e = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Wr = function(n) {
    if (n === null || !rh(n))
      return n;
    if (typeof n != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof e < "u") {
      if (e.has(n))
        return e.get(n);
      e.set(n, i);
    }
    function i() {
      return _t(n, arguments, ht(this).constructor);
    }
    return i.prototype = Object.create(n.prototype, { constructor: { value: i, enumerable: !1, writable: !0, configurable: !0 } }), ft(i, n);
  }, Wr(r);
}
function _t(r, e, t) {
  return to() ? _t = Reflect.construct : _t = function(i, a, o) {
    var s = [null];
    s.push.apply(s, a);
    var u = Function.bind.apply(i, s), c = new u();
    return o && ft(c, o.prototype), c;
  }, _t.apply(null, arguments);
}
function to() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function")
    return !0;
  try {
    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function rh(r) {
  return Function.toString.call(r).indexOf("[native code]") !== -1;
}
function ft(r, e) {
  return ft = Object.setPrototypeOf || function(n, i) {
    return n.__proto__ = i, n;
  }, ft(r, e);
}
function ht(r) {
  return ht = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, ht(r);
}
var nh = /* @__PURE__ */ function(r) {
  eh(t, r);
  var e = th(t);
  function t(n, i, a, o, s, u, c) {
    var l, h, p, m;
    Jf(this, t), m = e.call(this, n), m.name = "GraphQLError", m.originalError = u ?? void 0, m.nodes = Gi(Array.isArray(i) ? i : i ? [i] : void 0);
    for (var y = [], b = 0, w = (T = m.nodes) !== null && T !== void 0 ? T : []; b < w.length; b++) {
      var T, R = w[b], x = R.loc;
      x != null && y.push(x);
    }
    y = Gi(y), m.source = a ?? ((l = y) === null || l === void 0 ? void 0 : l[0].source), m.positions = o ?? ((h = y) === null || h === void 0 ? void 0 : h.map(function(C) {
      return C.start;
    })), m.locations = o && a ? o.map(function(C) {
      return Kr(a, C);
    }) : (p = y) === null || p === void 0 ? void 0 : p.map(function(C) {
      return Kr(C.source, C.start);
    }), m.path = s ?? void 0;
    var k = u == null ? void 0 : u.extensions;
    return c == null && Kf(k) ? m.extensions = Hf({}, k) : m.extensions = c ?? {}, Object.defineProperties(it(m), {
      message: {
        enumerable: !0
      },
      locations: {
        enumerable: m.locations != null
      },
      path: {
        enumerable: m.path != null
      },
      extensions: {
        enumerable: m.extensions != null && Object.keys(m.extensions).length > 0
      },
      name: {
        enumerable: !1
      },
      nodes: {
        enumerable: !1
      },
      source: {
        enumerable: !1
      },
      positions: {
        enumerable: !1
      },
      originalError: {
        enumerable: !1
      }
    }), u != null && u.stack ? (Object.defineProperty(it(m), "stack", {
      value: u.stack,
      writable: !0,
      configurable: !0
    }), eo(m)) : (Error.captureStackTrace ? Error.captureStackTrace(it(m), t) : Object.defineProperty(it(m), "stack", {
      value: Error().stack,
      writable: !0,
      configurable: !0
    }), m);
  }
  return Zf(t, [{
    key: "toString",
    value: function() {
      return ih(this);
    }
    // FIXME: workaround to not break chai comparisons, should be remove in v16
    // $FlowFixMe[unsupported-syntax] Flow doesn't support computed properties yet
  }, {
    key: Xa,
    get: function() {
      return "Object";
    }
  }]), t;
}(/* @__PURE__ */ Wr(Error));
function Gi(r) {
  return r === void 0 || r.length === 0 ? void 0 : r;
}
function ih(r) {
  var e = r.message;
  if (r.nodes)
    for (var t = 0, n = r.nodes; t < n.length; t++) {
      var i = n[t];
      i.loc && (e += `

` + Wf(i.loc));
    }
  else if (r.source && r.locations)
    for (var a = 0, o = r.locations; a < o.length; a++) {
      var s = o[a];
      e += `

` + Za(r.source, s);
    }
  return e;
}
function re(r, e, t) {
  return new nh("Syntax Error: ".concat(t), void 0, r, [e]);
}
var N = Object.freeze({
  // Name
  NAME: "Name",
  // Document
  DOCUMENT: "Document",
  OPERATION_DEFINITION: "OperationDefinition",
  VARIABLE_DEFINITION: "VariableDefinition",
  SELECTION_SET: "SelectionSet",
  FIELD: "Field",
  ARGUMENT: "Argument",
  // Fragments
  FRAGMENT_SPREAD: "FragmentSpread",
  INLINE_FRAGMENT: "InlineFragment",
  FRAGMENT_DEFINITION: "FragmentDefinition",
  // Values
  VARIABLE: "Variable",
  INT: "IntValue",
  FLOAT: "FloatValue",
  STRING: "StringValue",
  BOOLEAN: "BooleanValue",
  NULL: "NullValue",
  ENUM: "EnumValue",
  LIST: "ListValue",
  OBJECT: "ObjectValue",
  OBJECT_FIELD: "ObjectField",
  // Directives
  DIRECTIVE: "Directive",
  // Types
  NAMED_TYPE: "NamedType",
  LIST_TYPE: "ListType",
  NON_NULL_TYPE: "NonNullType",
  // Type System Definitions
  SCHEMA_DEFINITION: "SchemaDefinition",
  OPERATION_TYPE_DEFINITION: "OperationTypeDefinition",
  // Type Definitions
  SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition",
  OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition",
  FIELD_DEFINITION: "FieldDefinition",
  INPUT_VALUE_DEFINITION: "InputValueDefinition",
  INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition",
  UNION_TYPE_DEFINITION: "UnionTypeDefinition",
  ENUM_TYPE_DEFINITION: "EnumTypeDefinition",
  ENUM_VALUE_DEFINITION: "EnumValueDefinition",
  INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition",
  // Directive Definitions
  DIRECTIVE_DEFINITION: "DirectiveDefinition",
  // Type System Extensions
  SCHEMA_EXTENSION: "SchemaExtension",
  // Type Extensions
  SCALAR_TYPE_EXTENSION: "ScalarTypeExtension",
  OBJECT_TYPE_EXTENSION: "ObjectTypeExtension",
  INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension",
  UNION_TYPE_EXTENSION: "UnionTypeExtension",
  ENUM_TYPE_EXTENSION: "EnumTypeExtension",
  INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension"
}), d = Object.freeze({
  SOF: "<SOF>",
  EOF: "<EOF>",
  BANG: "!",
  DOLLAR: "$",
  AMP: "&",
  PAREN_L: "(",
  PAREN_R: ")",
  SPREAD: "...",
  COLON: ":",
  EQUALS: "=",
  AT: "@",
  BRACKET_L: "[",
  BRACKET_R: "]",
  BRACE_L: "{",
  PIPE: "|",
  BRACE_R: "}",
  NAME: "Name",
  INT: "Int",
  FLOAT: "Float",
  STRING: "String",
  BLOCK_STRING: "BlockString",
  COMMENT: "Comment"
});
function Er(r, e) {
  var t = !!r;
  if (!t)
    throw new Error(e);
}
function Ft(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ft = function(t) {
    return typeof t;
  } : Ft = function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ft(r);
}
const ah = process.env.NODE_ENV === "production" ? (
  // istanbul ignore next (See: 'https://github.com/graphql/graphql-js/issues/2317')
  // eslint-disable-next-line no-shadow
  function(e, t) {
    return e instanceof t;
  }
) : (
  // eslint-disable-next-line no-shadow
  function(e, t) {
    if (e instanceof t)
      return !0;
    if (Ft(e) === "object" && e !== null) {
      var n, i = t.prototype[Symbol.toStringTag], a = (
        // We still need to support constructor's name to detect conflicts with older versions of this library.
        Symbol.toStringTag in e ? e[Symbol.toStringTag] : (n = e.constructor) === null || n === void 0 ? void 0 : n.name
      );
      if (i === a) {
        var o = tn(e);
        throw new Error("Cannot use ".concat(i, ' "').concat(o, `" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`));
      }
    }
    return !1;
  }
);
function oh(r, e) {
  for (var t = 0; t < e.length; t++) {
    var n = e[t];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(r, n.key, n);
  }
}
function sh(r, e, t) {
  return e && oh(r.prototype, e), r;
}
var ro = /* @__PURE__ */ function() {
  function r(e) {
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "GraphQL request", n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
      line: 1,
      column: 1
    };
    typeof e == "string" || Er(0, "Body must be a string. Received: ".concat(tn(e), ".")), this.body = e, this.name = t, this.locationOffset = n, this.locationOffset.line > 0 || Er(0, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || Er(0, "column in locationOffset is 1-indexed and must be positive.");
  }
  return sh(r, [{
    key: Xa,
    get: function() {
      return "Source";
    }
  }]), r;
}();
function uh(r) {
  return ah(r, ro);
}
var ch = Object.freeze({
  // Request Definitions
  QUERY: "QUERY",
  MUTATION: "MUTATION",
  SUBSCRIPTION: "SUBSCRIPTION",
  FIELD: "FIELD",
  FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION",
  FRAGMENT_SPREAD: "FRAGMENT_SPREAD",
  INLINE_FRAGMENT: "INLINE_FRAGMENT",
  VARIABLE_DEFINITION: "VARIABLE_DEFINITION",
  // Type System Definitions
  SCHEMA: "SCHEMA",
  SCALAR: "SCALAR",
  OBJECT: "OBJECT",
  FIELD_DEFINITION: "FIELD_DEFINITION",
  ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION",
  INTERFACE: "INTERFACE",
  UNION: "UNION",
  ENUM: "ENUM",
  ENUM_VALUE: "ENUM_VALUE",
  INPUT_OBJECT: "INPUT_OBJECT",
  INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION"
}), lh = /* @__PURE__ */ function() {
  function r(t) {
    var n = new Q(d.SOF, 0, 0, 0, 0, null);
    this.source = t, this.lastToken = n, this.token = n, this.line = 1, this.lineStart = 0;
  }
  var e = r.prototype;
  return e.advance = function() {
    this.lastToken = this.token;
    var n = this.token = this.lookahead();
    return n;
  }, e.lookahead = function() {
    var n = this.token;
    if (n.kind !== d.EOF)
      do {
        var i;
        n = (i = n.next) !== null && i !== void 0 ? i : n.next = hh(this, n);
      } while (n.kind === d.COMMENT);
    return n;
  }, r;
}();
function fh(r) {
  return r === d.BANG || r === d.DOLLAR || r === d.AMP || r === d.PAREN_L || r === d.PAREN_R || r === d.SPREAD || r === d.COLON || r === d.EQUALS || r === d.AT || r === d.BRACKET_L || r === d.BRACKET_R || r === d.BRACE_L || r === d.PIPE || r === d.BRACE_R;
}
function De(r) {
  return (
    // NaN/undefined represents access beyond the end of the file.
    isNaN(r) ? d.EOF : (
      // Trust JSON for ASCII.
      r < 127 ? JSON.stringify(String.fromCharCode(r)) : (
        // Otherwise print the escaped form.
        '"\\u'.concat(("00" + r.toString(16).toUpperCase()).slice(-4), '"')
      )
    )
  );
}
function hh(r, e) {
  for (var t = r.source, n = t.body, i = n.length, a = e.end; a < i; ) {
    var o = n.charCodeAt(a), s = r.line, u = 1 + a - r.lineStart;
    switch (o) {
      case 65279:
      case 9:
      case 32:
      case 44:
        ++a;
        continue;
      case 10:
        ++a, ++r.line, r.lineStart = a;
        continue;
      case 13:
        n.charCodeAt(a + 1) === 10 ? a += 2 : ++a, ++r.line, r.lineStart = a;
        continue;
      case 33:
        return new Q(d.BANG, a, a + 1, s, u, e);
      case 35:
        return dh(t, a, s, u, e);
      case 36:
        return new Q(d.DOLLAR, a, a + 1, s, u, e);
      case 38:
        return new Q(d.AMP, a, a + 1, s, u, e);
      case 40:
        return new Q(d.PAREN_L, a, a + 1, s, u, e);
      case 41:
        return new Q(d.PAREN_R, a, a + 1, s, u, e);
      case 46:
        if (n.charCodeAt(a + 1) === 46 && n.charCodeAt(a + 2) === 46)
          return new Q(d.SPREAD, a, a + 3, s, u, e);
        break;
      case 58:
        return new Q(d.COLON, a, a + 1, s, u, e);
      case 61:
        return new Q(d.EQUALS, a, a + 1, s, u, e);
      case 64:
        return new Q(d.AT, a, a + 1, s, u, e);
      case 91:
        return new Q(d.BRACKET_L, a, a + 1, s, u, e);
      case 93:
        return new Q(d.BRACKET_R, a, a + 1, s, u, e);
      case 123:
        return new Q(d.BRACE_L, a, a + 1, s, u, e);
      case 124:
        return new Q(d.PIPE, a, a + 1, s, u, e);
      case 125:
        return new Q(d.BRACE_R, a, a + 1, s, u, e);
      case 34:
        return n.charCodeAt(a + 1) === 34 && n.charCodeAt(a + 2) === 34 ? yh(t, a, s, u, e, r) : vh(t, a, s, u, e);
      case 45:
      case 48:
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return mh(t, a, o, s, u, e);
      case 65:
      case 66:
      case 67:
      case 68:
      case 69:
      case 70:
      case 71:
      case 72:
      case 73:
      case 74:
      case 75:
      case 76:
      case 77:
      case 78:
      case 79:
      case 80:
      case 81:
      case 82:
      case 83:
      case 84:
      case 85:
      case 86:
      case 87:
      case 88:
      case 89:
      case 90:
      case 95:
      case 97:
      case 98:
      case 99:
      case 100:
      case 101:
      case 102:
      case 103:
      case 104:
      case 105:
      case 106:
      case 107:
      case 108:
      case 109:
      case 110:
      case 111:
      case 112:
      case 113:
      case 114:
      case 115:
      case 116:
      case 117:
      case 118:
      case 119:
      case 120:
      case 121:
      case 122:
        return bh(t, a, s, u, e);
    }
    throw re(t, a, ph(o));
  }
  var c = r.line, l = 1 + a - r.lineStart;
  return new Q(d.EOF, i, i, c, l, e);
}
function ph(r) {
  return r < 32 && r !== 9 && r !== 10 && r !== 13 ? "Cannot contain the invalid character ".concat(De(r), ".") : r === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : "Cannot parse the unexpected character ".concat(De(r), ".");
}
function dh(r, e, t, n, i) {
  var a = r.body, o, s = e;
  do
    o = a.charCodeAt(++s);
  while (!isNaN(o) && // SourceCharacter but not LineTerminator
  (o > 31 || o === 9));
  return new Q(d.COMMENT, e, s, t, n, i, a.slice(e + 1, s));
}
function mh(r, e, t, n, i, a) {
  var o = r.body, s = t, u = e, c = !1;
  if (s === 45 && (s = o.charCodeAt(++u)), s === 48) {
    if (s = o.charCodeAt(++u), s >= 48 && s <= 57)
      throw re(r, u, "Invalid number, unexpected digit after 0: ".concat(De(s), "."));
  } else
    u = wr(r, u, s), s = o.charCodeAt(u);
  if (s === 46 && (c = !0, s = o.charCodeAt(++u), u = wr(r, u, s), s = o.charCodeAt(u)), (s === 69 || s === 101) && (c = !0, s = o.charCodeAt(++u), (s === 43 || s === 45) && (s = o.charCodeAt(++u)), u = wr(r, u, s), s = o.charCodeAt(u)), s === 46 || Eh(s))
    throw re(r, u, "Invalid number, expected digit but got: ".concat(De(s), "."));
  return new Q(c ? d.FLOAT : d.INT, e, u, n, i, a, o.slice(e, u));
}
function wr(r, e, t) {
  var n = r.body, i = e, a = t;
  if (a >= 48 && a <= 57) {
    do
      a = n.charCodeAt(++i);
    while (a >= 48 && a <= 57);
    return i;
  }
  throw re(r, i, "Invalid number, expected digit but got: ".concat(De(a), "."));
}
function vh(r, e, t, n, i) {
  for (var a = r.body, o = e + 1, s = o, u = 0, c = ""; o < a.length && !isNaN(u = a.charCodeAt(o)) && // not LineTerminator
  u !== 10 && u !== 13; ) {
    if (u === 34)
      return c += a.slice(s, o), new Q(d.STRING, e, o + 1, t, n, i, c);
    if (u < 32 && u !== 9)
      throw re(r, o, "Invalid character within String: ".concat(De(u), "."));
    if (++o, u === 92) {
      switch (c += a.slice(s, o - 1), u = a.charCodeAt(o), u) {
        case 34:
          c += '"';
          break;
        case 47:
          c += "/";
          break;
        case 92:
          c += "\\";
          break;
        case 98:
          c += "\b";
          break;
        case 102:
          c += "\f";
          break;
        case 110:
          c += `
`;
          break;
        case 114:
          c += "\r";
          break;
        case 116:
          c += "	";
          break;
        case 117: {
          var l = gh(a.charCodeAt(o + 1), a.charCodeAt(o + 2), a.charCodeAt(o + 3), a.charCodeAt(o + 4));
          if (l < 0) {
            var h = a.slice(o + 1, o + 5);
            throw re(r, o, "Invalid character escape sequence: \\u".concat(h, "."));
          }
          c += String.fromCharCode(l), o += 4;
          break;
        }
        default:
          throw re(r, o, "Invalid character escape sequence: \\".concat(String.fromCharCode(u), "."));
      }
      ++o, s = o;
    }
  }
  throw re(r, o, "Unterminated string.");
}
function yh(r, e, t, n, i, a) {
  for (var o = r.body, s = e + 3, u = s, c = 0, l = ""; s < o.length && !isNaN(c = o.charCodeAt(s)); ) {
    if (c === 34 && o.charCodeAt(s + 1) === 34 && o.charCodeAt(s + 2) === 34)
      return l += o.slice(u, s), new Q(d.BLOCK_STRING, e, s + 3, t, n, i, Nf(l));
    if (c < 32 && c !== 9 && c !== 10 && c !== 13)
      throw re(r, s, "Invalid character within String: ".concat(De(c), "."));
    c === 10 ? (++s, ++a.line, a.lineStart = s) : c === 13 ? (o.charCodeAt(s + 1) === 10 ? s += 2 : ++s, ++a.line, a.lineStart = s) : /* Escape Triple-Quote (\""") */ c === 92 && o.charCodeAt(s + 1) === 34 && o.charCodeAt(s + 2) === 34 && o.charCodeAt(s + 3) === 34 ? (l += o.slice(u, s) + '"""', s += 4, u = s) : ++s;
  }
  throw re(r, s, "Unterminated string.");
}
function gh(r, e, t, n) {
  return St(r) << 12 | St(e) << 8 | St(t) << 4 | St(n);
}
function St(r) {
  return r >= 48 && r <= 57 ? r - 48 : r >= 65 && r <= 70 ? r - 55 : r >= 97 && r <= 102 ? r - 87 : -1;
}
function bh(r, e, t, n, i) {
  for (var a = r.body, o = a.length, s = e + 1, u = 0; s !== o && !isNaN(u = a.charCodeAt(s)) && (u === 95 || // _
  u >= 48 && u <= 57 || // 0-9
  u >= 65 && u <= 90 || // A-Z
  u >= 97 && u <= 122); )
    ++s;
  return new Q(d.NAME, e, s, t, n, i, a.slice(e, s));
}
function Eh(r) {
  return r === 95 || r >= 65 && r <= 90 || r >= 97 && r <= 122;
}
function wh(r, e) {
  var t = new Rh(r, e);
  return t.parseDocument();
}
var Rh = /* @__PURE__ */ function() {
  function r(t, n) {
    var i = uh(t) ? t : new ro(t);
    this._lexer = new lh(i), this._options = n;
  }
  var e = r.prototype;
  return e.parseName = function() {
    var n = this.expectToken(d.NAME);
    return {
      kind: N.NAME,
      value: n.value,
      loc: this.loc(n)
    };
  }, e.parseDocument = function() {
    var n = this._lexer.token;
    return {
      kind: N.DOCUMENT,
      definitions: this.many(d.SOF, this.parseDefinition, d.EOF),
      loc: this.loc(n)
    };
  }, e.parseDefinition = function() {
    if (this.peek(d.NAME))
      switch (this._lexer.token.value) {
        case "query":
        case "mutation":
        case "subscription":
          return this.parseOperationDefinition();
        case "fragment":
          return this.parseFragmentDefinition();
        case "schema":
        case "scalar":
        case "type":
        case "interface":
        case "union":
        case "enum":
        case "input":
        case "directive":
          return this.parseTypeSystemDefinition();
        case "extend":
          return this.parseTypeSystemExtension();
      }
    else {
      if (this.peek(d.BRACE_L))
        return this.parseOperationDefinition();
      if (this.peekDescription())
        return this.parseTypeSystemDefinition();
    }
    throw this.unexpected();
  }, e.parseOperationDefinition = function() {
    var n = this._lexer.token;
    if (this.peek(d.BRACE_L))
      return {
        kind: N.OPERATION_DEFINITION,
        operation: "query",
        name: void 0,
        variableDefinitions: [],
        directives: [],
        selectionSet: this.parseSelectionSet(),
        loc: this.loc(n)
      };
    var i = this.parseOperationType(), a;
    return this.peek(d.NAME) && (a = this.parseName()), {
      kind: N.OPERATION_DEFINITION,
      operation: i,
      name: a,
      variableDefinitions: this.parseVariableDefinitions(),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(n)
    };
  }, e.parseOperationType = function() {
    var n = this.expectToken(d.NAME);
    switch (n.value) {
      case "query":
        return "query";
      case "mutation":
        return "mutation";
      case "subscription":
        return "subscription";
    }
    throw this.unexpected(n);
  }, e.parseVariableDefinitions = function() {
    return this.optionalMany(d.PAREN_L, this.parseVariableDefinition, d.PAREN_R);
  }, e.parseVariableDefinition = function() {
    var n = this._lexer.token;
    return {
      kind: N.VARIABLE_DEFINITION,
      variable: this.parseVariable(),
      type: (this.expectToken(d.COLON), this.parseTypeReference()),
      defaultValue: this.expectOptionalToken(d.EQUALS) ? this.parseValueLiteral(!0) : void 0,
      directives: this.parseDirectives(!0),
      loc: this.loc(n)
    };
  }, e.parseVariable = function() {
    var n = this._lexer.token;
    return this.expectToken(d.DOLLAR), {
      kind: N.VARIABLE,
      name: this.parseName(),
      loc: this.loc(n)
    };
  }, e.parseSelectionSet = function() {
    var n = this._lexer.token;
    return {
      kind: N.SELECTION_SET,
      selections: this.many(d.BRACE_L, this.parseSelection, d.BRACE_R),
      loc: this.loc(n)
    };
  }, e.parseSelection = function() {
    return this.peek(d.SPREAD) ? this.parseFragment() : this.parseField();
  }, e.parseField = function() {
    var n = this._lexer.token, i = this.parseName(), a, o;
    return this.expectOptionalToken(d.COLON) ? (a = i, o = this.parseName()) : o = i, {
      kind: N.FIELD,
      alias: a,
      name: o,
      arguments: this.parseArguments(!1),
      directives: this.parseDirectives(!1),
      selectionSet: this.peek(d.BRACE_L) ? this.parseSelectionSet() : void 0,
      loc: this.loc(n)
    };
  }, e.parseArguments = function(n) {
    var i = n ? this.parseConstArgument : this.parseArgument;
    return this.optionalMany(d.PAREN_L, i, d.PAREN_R);
  }, e.parseArgument = function() {
    var n = this._lexer.token, i = this.parseName();
    return this.expectToken(d.COLON), {
      kind: N.ARGUMENT,
      name: i,
      value: this.parseValueLiteral(!1),
      loc: this.loc(n)
    };
  }, e.parseConstArgument = function() {
    var n = this._lexer.token;
    return {
      kind: N.ARGUMENT,
      name: this.parseName(),
      value: (this.expectToken(d.COLON), this.parseValueLiteral(!0)),
      loc: this.loc(n)
    };
  }, e.parseFragment = function() {
    var n = this._lexer.token;
    this.expectToken(d.SPREAD);
    var i = this.expectOptionalKeyword("on");
    return !i && this.peek(d.NAME) ? {
      kind: N.FRAGMENT_SPREAD,
      name: this.parseFragmentName(),
      directives: this.parseDirectives(!1),
      loc: this.loc(n)
    } : {
      kind: N.INLINE_FRAGMENT,
      typeCondition: i ? this.parseNamedType() : void 0,
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(n)
    };
  }, e.parseFragmentDefinition = function() {
    var n, i = this._lexer.token;
    return this.expectKeyword("fragment"), ((n = this._options) === null || n === void 0 ? void 0 : n.experimentalFragmentVariables) === !0 ? {
      kind: N.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      variableDefinitions: this.parseVariableDefinitions(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(i)
    } : {
      kind: N.FRAGMENT_DEFINITION,
      name: this.parseFragmentName(),
      typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
      directives: this.parseDirectives(!1),
      selectionSet: this.parseSelectionSet(),
      loc: this.loc(i)
    };
  }, e.parseFragmentName = function() {
    if (this._lexer.token.value === "on")
      throw this.unexpected();
    return this.parseName();
  }, e.parseValueLiteral = function(n) {
    var i = this._lexer.token;
    switch (i.kind) {
      case d.BRACKET_L:
        return this.parseList(n);
      case d.BRACE_L:
        return this.parseObject(n);
      case d.INT:
        return this._lexer.advance(), {
          kind: N.INT,
          value: i.value,
          loc: this.loc(i)
        };
      case d.FLOAT:
        return this._lexer.advance(), {
          kind: N.FLOAT,
          value: i.value,
          loc: this.loc(i)
        };
      case d.STRING:
      case d.BLOCK_STRING:
        return this.parseStringLiteral();
      case d.NAME:
        switch (this._lexer.advance(), i.value) {
          case "true":
            return {
              kind: N.BOOLEAN,
              value: !0,
              loc: this.loc(i)
            };
          case "false":
            return {
              kind: N.BOOLEAN,
              value: !1,
              loc: this.loc(i)
            };
          case "null":
            return {
              kind: N.NULL,
              loc: this.loc(i)
            };
          default:
            return {
              kind: N.ENUM,
              value: i.value,
              loc: this.loc(i)
            };
        }
      case d.DOLLAR:
        if (!n)
          return this.parseVariable();
        break;
    }
    throw this.unexpected();
  }, e.parseStringLiteral = function() {
    var n = this._lexer.token;
    return this._lexer.advance(), {
      kind: N.STRING,
      value: n.value,
      block: n.kind === d.BLOCK_STRING,
      loc: this.loc(n)
    };
  }, e.parseList = function(n) {
    var i = this, a = this._lexer.token, o = function() {
      return i.parseValueLiteral(n);
    };
    return {
      kind: N.LIST,
      values: this.any(d.BRACKET_L, o, d.BRACKET_R),
      loc: this.loc(a)
    };
  }, e.parseObject = function(n) {
    var i = this, a = this._lexer.token, o = function() {
      return i.parseObjectField(n);
    };
    return {
      kind: N.OBJECT,
      fields: this.any(d.BRACE_L, o, d.BRACE_R),
      loc: this.loc(a)
    };
  }, e.parseObjectField = function(n) {
    var i = this._lexer.token, a = this.parseName();
    return this.expectToken(d.COLON), {
      kind: N.OBJECT_FIELD,
      name: a,
      value: this.parseValueLiteral(n),
      loc: this.loc(i)
    };
  }, e.parseDirectives = function(n) {
    for (var i = []; this.peek(d.AT); )
      i.push(this.parseDirective(n));
    return i;
  }, e.parseDirective = function(n) {
    var i = this._lexer.token;
    return this.expectToken(d.AT), {
      kind: N.DIRECTIVE,
      name: this.parseName(),
      arguments: this.parseArguments(n),
      loc: this.loc(i)
    };
  }, e.parseTypeReference = function() {
    var n = this._lexer.token, i;
    return this.expectOptionalToken(d.BRACKET_L) ? (i = this.parseTypeReference(), this.expectToken(d.BRACKET_R), i = {
      kind: N.LIST_TYPE,
      type: i,
      loc: this.loc(n)
    }) : i = this.parseNamedType(), this.expectOptionalToken(d.BANG) ? {
      kind: N.NON_NULL_TYPE,
      type: i,
      loc: this.loc(n)
    } : i;
  }, e.parseNamedType = function() {
    var n = this._lexer.token;
    return {
      kind: N.NAMED_TYPE,
      name: this.parseName(),
      loc: this.loc(n)
    };
  }, e.parseTypeSystemDefinition = function() {
    var n = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
    if (n.kind === d.NAME)
      switch (n.value) {
        case "schema":
          return this.parseSchemaDefinition();
        case "scalar":
          return this.parseScalarTypeDefinition();
        case "type":
          return this.parseObjectTypeDefinition();
        case "interface":
          return this.parseInterfaceTypeDefinition();
        case "union":
          return this.parseUnionTypeDefinition();
        case "enum":
          return this.parseEnumTypeDefinition();
        case "input":
          return this.parseInputObjectTypeDefinition();
        case "directive":
          return this.parseDirectiveDefinition();
      }
    throw this.unexpected(n);
  }, e.peekDescription = function() {
    return this.peek(d.STRING) || this.peek(d.BLOCK_STRING);
  }, e.parseDescription = function() {
    if (this.peekDescription())
      return this.parseStringLiteral();
  }, e.parseSchemaDefinition = function() {
    var n = this._lexer.token, i = this.parseDescription();
    this.expectKeyword("schema");
    var a = this.parseDirectives(!0), o = this.many(d.BRACE_L, this.parseOperationTypeDefinition, d.BRACE_R);
    return {
      kind: N.SCHEMA_DEFINITION,
      description: i,
      directives: a,
      operationTypes: o,
      loc: this.loc(n)
    };
  }, e.parseOperationTypeDefinition = function() {
    var n = this._lexer.token, i = this.parseOperationType();
    this.expectToken(d.COLON);
    var a = this.parseNamedType();
    return {
      kind: N.OPERATION_TYPE_DEFINITION,
      operation: i,
      type: a,
      loc: this.loc(n)
    };
  }, e.parseScalarTypeDefinition = function() {
    var n = this._lexer.token, i = this.parseDescription();
    this.expectKeyword("scalar");
    var a = this.parseName(), o = this.parseDirectives(!0);
    return {
      kind: N.SCALAR_TYPE_DEFINITION,
      description: i,
      name: a,
      directives: o,
      loc: this.loc(n)
    };
  }, e.parseObjectTypeDefinition = function() {
    var n = this._lexer.token, i = this.parseDescription();
    this.expectKeyword("type");
    var a = this.parseName(), o = this.parseImplementsInterfaces(), s = this.parseDirectives(!0), u = this.parseFieldsDefinition();
    return {
      kind: N.OBJECT_TYPE_DEFINITION,
      description: i,
      name: a,
      interfaces: o,
      directives: s,
      fields: u,
      loc: this.loc(n)
    };
  }, e.parseImplementsInterfaces = function() {
    var n;
    if (!this.expectOptionalKeyword("implements"))
      return [];
    if (((n = this._options) === null || n === void 0 ? void 0 : n.allowLegacySDLImplementsInterfaces) === !0) {
      var i = [];
      this.expectOptionalToken(d.AMP);
      do
        i.push(this.parseNamedType());
      while (this.expectOptionalToken(d.AMP) || this.peek(d.NAME));
      return i;
    }
    return this.delimitedMany(d.AMP, this.parseNamedType);
  }, e.parseFieldsDefinition = function() {
    var n;
    return ((n = this._options) === null || n === void 0 ? void 0 : n.allowLegacySDLEmptyFields) === !0 && this.peek(d.BRACE_L) && this._lexer.lookahead().kind === d.BRACE_R ? (this._lexer.advance(), this._lexer.advance(), []) : this.optionalMany(d.BRACE_L, this.parseFieldDefinition, d.BRACE_R);
  }, e.parseFieldDefinition = function() {
    var n = this._lexer.token, i = this.parseDescription(), a = this.parseName(), o = this.parseArgumentDefs();
    this.expectToken(d.COLON);
    var s = this.parseTypeReference(), u = this.parseDirectives(!0);
    return {
      kind: N.FIELD_DEFINITION,
      description: i,
      name: a,
      arguments: o,
      type: s,
      directives: u,
      loc: this.loc(n)
    };
  }, e.parseArgumentDefs = function() {
    return this.optionalMany(d.PAREN_L, this.parseInputValueDef, d.PAREN_R);
  }, e.parseInputValueDef = function() {
    var n = this._lexer.token, i = this.parseDescription(), a = this.parseName();
    this.expectToken(d.COLON);
    var o = this.parseTypeReference(), s;
    this.expectOptionalToken(d.EQUALS) && (s = this.parseValueLiteral(!0));
    var u = this.parseDirectives(!0);
    return {
      kind: N.INPUT_VALUE_DEFINITION,
      description: i,
      name: a,
      type: o,
      defaultValue: s,
      directives: u,
      loc: this.loc(n)
    };
  }, e.parseInterfaceTypeDefinition = function() {
    var n = this._lexer.token, i = this.parseDescription();
    this.expectKeyword("interface");
    var a = this.parseName(), o = this.parseImplementsInterfaces(), s = this.parseDirectives(!0), u = this.parseFieldsDefinition();
    return {
      kind: N.INTERFACE_TYPE_DEFINITION,
      description: i,
      name: a,
      interfaces: o,
      directives: s,
      fields: u,
      loc: this.loc(n)
    };
  }, e.parseUnionTypeDefinition = function() {
    var n = this._lexer.token, i = this.parseDescription();
    this.expectKeyword("union");
    var a = this.parseName(), o = this.parseDirectives(!0), s = this.parseUnionMemberTypes();
    return {
      kind: N.UNION_TYPE_DEFINITION,
      description: i,
      name: a,
      directives: o,
      types: s,
      loc: this.loc(n)
    };
  }, e.parseUnionMemberTypes = function() {
    return this.expectOptionalToken(d.EQUALS) ? this.delimitedMany(d.PIPE, this.parseNamedType) : [];
  }, e.parseEnumTypeDefinition = function() {
    var n = this._lexer.token, i = this.parseDescription();
    this.expectKeyword("enum");
    var a = this.parseName(), o = this.parseDirectives(!0), s = this.parseEnumValuesDefinition();
    return {
      kind: N.ENUM_TYPE_DEFINITION,
      description: i,
      name: a,
      directives: o,
      values: s,
      loc: this.loc(n)
    };
  }, e.parseEnumValuesDefinition = function() {
    return this.optionalMany(d.BRACE_L, this.parseEnumValueDefinition, d.BRACE_R);
  }, e.parseEnumValueDefinition = function() {
    var n = this._lexer.token, i = this.parseDescription(), a = this.parseName(), o = this.parseDirectives(!0);
    return {
      kind: N.ENUM_VALUE_DEFINITION,
      description: i,
      name: a,
      directives: o,
      loc: this.loc(n)
    };
  }, e.parseInputObjectTypeDefinition = function() {
    var n = this._lexer.token, i = this.parseDescription();
    this.expectKeyword("input");
    var a = this.parseName(), o = this.parseDirectives(!0), s = this.parseInputFieldsDefinition();
    return {
      kind: N.INPUT_OBJECT_TYPE_DEFINITION,
      description: i,
      name: a,
      directives: o,
      fields: s,
      loc: this.loc(n)
    };
  }, e.parseInputFieldsDefinition = function() {
    return this.optionalMany(d.BRACE_L, this.parseInputValueDef, d.BRACE_R);
  }, e.parseTypeSystemExtension = function() {
    var n = this._lexer.lookahead();
    if (n.kind === d.NAME)
      switch (n.value) {
        case "schema":
          return this.parseSchemaExtension();
        case "scalar":
          return this.parseScalarTypeExtension();
        case "type":
          return this.parseObjectTypeExtension();
        case "interface":
          return this.parseInterfaceTypeExtension();
        case "union":
          return this.parseUnionTypeExtension();
        case "enum":
          return this.parseEnumTypeExtension();
        case "input":
          return this.parseInputObjectTypeExtension();
      }
    throw this.unexpected(n);
  }, e.parseSchemaExtension = function() {
    var n = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("schema");
    var i = this.parseDirectives(!0), a = this.optionalMany(d.BRACE_L, this.parseOperationTypeDefinition, d.BRACE_R);
    if (i.length === 0 && a.length === 0)
      throw this.unexpected();
    return {
      kind: N.SCHEMA_EXTENSION,
      directives: i,
      operationTypes: a,
      loc: this.loc(n)
    };
  }, e.parseScalarTypeExtension = function() {
    var n = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("scalar");
    var i = this.parseName(), a = this.parseDirectives(!0);
    if (a.length === 0)
      throw this.unexpected();
    return {
      kind: N.SCALAR_TYPE_EXTENSION,
      name: i,
      directives: a,
      loc: this.loc(n)
    };
  }, e.parseObjectTypeExtension = function() {
    var n = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("type");
    var i = this.parseName(), a = this.parseImplementsInterfaces(), o = this.parseDirectives(!0), s = this.parseFieldsDefinition();
    if (a.length === 0 && o.length === 0 && s.length === 0)
      throw this.unexpected();
    return {
      kind: N.OBJECT_TYPE_EXTENSION,
      name: i,
      interfaces: a,
      directives: o,
      fields: s,
      loc: this.loc(n)
    };
  }, e.parseInterfaceTypeExtension = function() {
    var n = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("interface");
    var i = this.parseName(), a = this.parseImplementsInterfaces(), o = this.parseDirectives(!0), s = this.parseFieldsDefinition();
    if (a.length === 0 && o.length === 0 && s.length === 0)
      throw this.unexpected();
    return {
      kind: N.INTERFACE_TYPE_EXTENSION,
      name: i,
      interfaces: a,
      directives: o,
      fields: s,
      loc: this.loc(n)
    };
  }, e.parseUnionTypeExtension = function() {
    var n = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("union");
    var i = this.parseName(), a = this.parseDirectives(!0), o = this.parseUnionMemberTypes();
    if (a.length === 0 && o.length === 0)
      throw this.unexpected();
    return {
      kind: N.UNION_TYPE_EXTENSION,
      name: i,
      directives: a,
      types: o,
      loc: this.loc(n)
    };
  }, e.parseEnumTypeExtension = function() {
    var n = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("enum");
    var i = this.parseName(), a = this.parseDirectives(!0), o = this.parseEnumValuesDefinition();
    if (a.length === 0 && o.length === 0)
      throw this.unexpected();
    return {
      kind: N.ENUM_TYPE_EXTENSION,
      name: i,
      directives: a,
      values: o,
      loc: this.loc(n)
    };
  }, e.parseInputObjectTypeExtension = function() {
    var n = this._lexer.token;
    this.expectKeyword("extend"), this.expectKeyword("input");
    var i = this.parseName(), a = this.parseDirectives(!0), o = this.parseInputFieldsDefinition();
    if (a.length === 0 && o.length === 0)
      throw this.unexpected();
    return {
      kind: N.INPUT_OBJECT_TYPE_EXTENSION,
      name: i,
      directives: a,
      fields: o,
      loc: this.loc(n)
    };
  }, e.parseDirectiveDefinition = function() {
    var n = this._lexer.token, i = this.parseDescription();
    this.expectKeyword("directive"), this.expectToken(d.AT);
    var a = this.parseName(), o = this.parseArgumentDefs(), s = this.expectOptionalKeyword("repeatable");
    this.expectKeyword("on");
    var u = this.parseDirectiveLocations();
    return {
      kind: N.DIRECTIVE_DEFINITION,
      description: i,
      name: a,
      arguments: o,
      repeatable: s,
      locations: u,
      loc: this.loc(n)
    };
  }, e.parseDirectiveLocations = function() {
    return this.delimitedMany(d.PIPE, this.parseDirectiveLocation);
  }, e.parseDirectiveLocation = function() {
    var n = this._lexer.token, i = this.parseName();
    if (ch[i.value] !== void 0)
      return i;
    throw this.unexpected(n);
  }, e.loc = function(n) {
    var i;
    if (((i = this._options) === null || i === void 0 ? void 0 : i.noLocation) !== !0)
      return new Ta(n, this._lexer.lastToken, this._lexer.source);
  }, e.peek = function(n) {
    return this._lexer.token.kind === n;
  }, e.expectToken = function(n) {
    var i = this._lexer.token;
    if (i.kind === n)
      return this._lexer.advance(), i;
    throw re(this._lexer.source, i.start, "Expected ".concat(no(n), ", found ").concat(Rr(i), "."));
  }, e.expectOptionalToken = function(n) {
    var i = this._lexer.token;
    if (i.kind === n)
      return this._lexer.advance(), i;
  }, e.expectKeyword = function(n) {
    var i = this._lexer.token;
    if (i.kind === d.NAME && i.value === n)
      this._lexer.advance();
    else
      throw re(this._lexer.source, i.start, 'Expected "'.concat(n, '", found ').concat(Rr(i), "."));
  }, e.expectOptionalKeyword = function(n) {
    var i = this._lexer.token;
    return i.kind === d.NAME && i.value === n ? (this._lexer.advance(), !0) : !1;
  }, e.unexpected = function(n) {
    var i = n ?? this._lexer.token;
    return re(this._lexer.source, i.start, "Unexpected ".concat(Rr(i), "."));
  }, e.any = function(n, i, a) {
    this.expectToken(n);
    for (var o = []; !this.expectOptionalToken(a); )
      o.push(i.call(this));
    return o;
  }, e.optionalMany = function(n, i, a) {
    if (this.expectOptionalToken(n)) {
      var o = [];
      do
        o.push(i.call(this));
      while (!this.expectOptionalToken(a));
      return o;
    }
    return [];
  }, e.many = function(n, i, a) {
    this.expectToken(n);
    var o = [];
    do
      o.push(i.call(this));
    while (!this.expectOptionalToken(a));
    return o;
  }, e.delimitedMany = function(n, i) {
    this.expectOptionalToken(n);
    var a = [];
    do
      a.push(i.call(this));
    while (this.expectOptionalToken(n));
    return a;
  }, r;
}();
function Rr(r) {
  var e = r.value;
  return no(r.kind) + (e != null ? ' "'.concat(e, '"') : "");
}
function no(r) {
  return fh(r) ? '"'.concat(r, '"') : r;
}
var qt = /* @__PURE__ */ new Map(), zr = /* @__PURE__ */ new Map(), io = !0, Wt = !1;
function ao(r) {
  return r.replace(/[\s,]+/g, " ").trim();
}
function Sh(r) {
  return ao(r.source.body.substring(r.start, r.end));
}
function Oh(r) {
  var e = /* @__PURE__ */ new Set(), t = [];
  return r.definitions.forEach(function(n) {
    if (n.kind === "FragmentDefinition") {
      var i = n.name.value, a = Sh(n.loc), o = zr.get(i);
      o && !o.has(a) ? io && console.warn("Warning: fragment with name " + i + ` already exists.
graphql-tag enforces all fragment names across your application to be unique; read more about
this in the docs: http://dev.apollodata.com/core/fragments.html#unique-names`) : o || zr.set(i, o = /* @__PURE__ */ new Set()), o.add(a), e.has(a) || (e.add(a), t.push(n));
    } else
      t.push(n);
  }), Kt(Kt({}, r), { definitions: t });
}
function Th(r) {
  var e = new Set(r.definitions);
  e.forEach(function(n) {
    n.loc && delete n.loc, Object.keys(n).forEach(function(i) {
      var a = n[i];
      a && typeof a == "object" && e.add(a);
    });
  });
  var t = r.loc;
  return t && (delete t.startToken, delete t.endToken), r;
}
function kh(r) {
  var e = ao(r);
  if (!qt.has(e)) {
    var t = wh(r, {
      experimentalFragmentVariables: Wt,
      allowLegacyFragmentVariables: Wt
    });
    if (!t || t.kind !== "Document")
      throw new Error("Not a valid GraphQL document.");
    qt.set(e, Th(Oh(t)));
  }
  return qt.get(e);
}
function F(r) {
  for (var e = [], t = 1; t < arguments.length; t++)
    e[t - 1] = arguments[t];
  typeof r == "string" && (r = [r]);
  var n = r[0];
  return e.forEach(function(i, a) {
    i && i.kind === "Document" ? n += i.loc.source.body : n += i, n += r[a + 1];
  }), kh(n);
}
function Nh() {
  qt.clear(), zr.clear();
}
function Ph() {
  io = !1;
}
function Ch() {
  Wt = !0;
}
function xh() {
  Wt = !1;
}
var tt = {
  gql: F,
  resetCaches: Nh,
  disableFragmentWarnings: Ph,
  enableExperimentalFragmentVariables: Ch,
  disableExperimentalFragmentVariables: xh
};
(function(r) {
  r.gql = tt.gql, r.resetCaches = tt.resetCaches, r.disableFragmentWarnings = tt.disableFragmentWarnings, r.enableExperimentalFragmentVariables = tt.enableExperimentalFragmentVariables, r.disableExperimentalFragmentVariables = tt.disableExperimentalFragmentVariables;
})(F || (F = {}));
F.default = F;
const le = F`
  fragment RepositoryParts on Repository {
    id
    isFork
  }
`, Dh = F`
  fragment BlobWithTextParts on Blob {
    id
    text
    is_binary: isBinary
  }
`, rr = F`
  fragment ObjectParts on GitObject {
    id
    sha: oid
  }
`, We = F`
  fragment BranchParts on Ref {
    commit: target {
      ...ObjectParts
    }
    id
    name
    prefix
    repository {
      ...RepositoryParts
    }
  }
  ${rr}
  ${le}
`, Se = F`
  fragment PullRequestParts on PullRequest {
    id
    baseRefName
    baseRefOid
    body
    headRefName
    headRefOid
    number
    state
    title
    merged_at: mergedAt
    updated_at: updatedAt
    user: author {
      login
      ... on User {
        name
      }
    }
    repository {
      ...RepositoryParts
    }
    labels(last: 100) {
      nodes {
        name
      }
    }
  }
  ${le}
`;
F`
  fragment TreeEntryParts on TreeEntry {
    path: name
    sha: oid
    type
    mode
  }
`;
const Ih = F`
  fragment FileEntryParts on TreeEntry {
    name
    sha: oid
    type
    blob: object {
      ... on Blob {
        size: byteSize
      }
    }
  }
`, Ah = F`
  query repoPermission($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      viewerPermission
    }
  }
  ${le}
`, _h = F`
  query {
    viewer {
      id
      avatar_url: avatarUrl
      name
      login
    }
  }
`, Fh = F`
  query blob($owner: String!, $name: String!, $expression: String!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      object(expression: $expression) {
        ... on Blob {
          ...BlobWithTextParts
        }
      }
    }
  }
  ${le}
  ${Dh}
`, qh = F`
  query statues($owner: String!, $name: String!, $sha: GitObjectID!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      object(oid: $sha) {
        ...ObjectParts
        ... on Commit {
          status {
            id
            contexts {
              id
              context
              state
              target_url: targetUrl
            }
          }
        }
      }
    }
  }
  ${le}
  ${rr}
`;
function Mh(r = 1) {
  const e = "PLACE_HOLDER";
  let t = xr`
    ...ObjectParts
    ... on Tree {
      entries {
        ...FileEntryParts
        ${e}
      }
    }
  `;
  for (let n = 0; n < r - 1; n++)
    t = t.replace(
      e,
      xr`
        object {
          ... on Tree {
            entries {
              ...FileEntryParts
              ${e}
            }
          }
        }
    `
    );
  return t = t.replace(e, ""), t;
}
function Lh(r) {
  return F`
    query files($owner: String!, $name: String!, $expression: String!) {
      repository(owner: $owner, name: $name) {
        ...RepositoryParts
        object(expression: $expression) {
          ${Mh(r)}
        }
      }
    }
    ${le}
    ${rr}
    ${Ih}
  `;
}
const oo = `
branch: ref(qualifiedName: $qualifiedName) {
  ...BranchParts
}
`, jh = F`
  query branch($owner: String!, $name: String!, $qualifiedName: String!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      ${oo}
    }
  }
  ${le}
  ${We}
`, $h = F`
  query openAuthoringBranches($owner: String!, $name: String!, $refPrefix: String!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      refs(refPrefix: $refPrefix, last: 100) {
        nodes {
          ...BranchParts
        }
      }
    }
  }
  ${le}
  ${We}
`, Uh = F`
  query repository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
    }
  }
  ${le}
`, so = `
pullRequest(number: $number) {
  ...PullRequestParts
}
`, Bh = F`
  query pullRequest($owner: String!, $name: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      id
      ${so}
    }
  }
  ${Se}
`, Qh = F`
  query pullRequests($owner: String!, $name: String!, $head: String, $states: [PullRequestState!]) {
    repository(owner: $owner, name: $name) {
      id
      pullRequests(last: 100, headRefName: $head, states: $states) {
        nodes {
          ...PullRequestParts
        }
      }
    }
  }
  ${Se}
`, Vh = F`
  query pullRequestAndBranch($owner: String!, $name: String!, $originRepoOwner: String!, $originRepoName: String!, $qualifiedName: String!, $number: Int!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      ${oo}
    }
    origin: repository(owner: $originRepoOwner, name: $originRepoName) {
      ...RepositoryParts
      ${so}
    }
  }
  ${le}
  ${We}
  ${Se}
`, Gh = F`
  query fileSha($owner: String!, $name: String!, $expression: String!) {
    repository(owner: $owner, name: $name) {
      ...RepositoryParts
      file: object(expression: $expression) {
        ...ObjectParts
      }
    }
  }
  ${le}
  ${rr}
`, Kh = F`
  mutation updateRef($input: UpdateRefInput!) {
    updateRef(input: $input) {
      branch: ref {
        ...BranchParts
      }
    }
  }
  ${We}
`, uo = `
deleteRef(input: $deleteRefInput) {
  clientMutationId
}
`, Wh = F`
  mutation deleteRef($deleteRefInput: DeleteRefInput!) {
    ${uo}
  }
`, co = `
closePullRequest(input: $closePullRequestInput) {
  clientMutationId
  pullRequest {
    ...PullRequestParts
  }
}
`, zh = F`
  mutation closePullRequestAndDeleteBranch($closePullRequestInput: ClosePullRequestInput!) {
    ${co}
  }
  ${Se}
`, Hh = F`
  mutation closePullRequestAndDeleteBranch(
    $closePullRequestInput: ClosePullRequestInput!
    $deleteRefInput: DeleteRefInput!
  ) {
    ${co}
    ${uo}
  }
  ${Se}
`, lo = `
 createPullRequest(input: $createPullRequestInput) {
  clientMutationId
  pullRequest {
    ...PullRequestParts
  }
}
 `, Yh = F`
  mutation createPullRequest($createPullRequestInput: CreatePullRequestInput!) {
    ${lo}
  }
  ${Se}
`, Jh = F`
  mutation createBranch($createRefInput: CreateRefInput!) {
    createRef(input: $createRefInput) {
      branch: ref {
        ...BranchParts
      }
    }
  }
  ${We}
`, Xh = F`
  mutation createBranchAndPullRequest(
    $createRefInput: CreateRefInput!
    $createPullRequestInput: CreatePullRequestInput!
  ) {
    createRef(input: $createRefInput) {
      branch: ref {
        ...BranchParts
      }
    }
    ${lo}
  }
  ${We}
  ${Se}
`, Zh = F`
  mutation reopenPullRequest($reopenPullRequestInput: ReopenPullRequestInput!) {
    reopenPullRequest(input: $reopenPullRequestInput) {
      clientMutationId
      pullRequest {
        ...PullRequestParts
      }
    }
  }
  ${Se}
`, Ki = "no-cache", Ne = "cache-first", ep = new yf({
  introspectionQueryResultData: Gf
});
function Wi(r) {
  return {
    ...r,
    labels: r.labels.nodes,
    head: { ref: r.headRefName, sha: r.headRefOid, repo: { fork: r.repository.isFork } },
    base: { ref: r.baseRefName, sha: r.baseRefOid }
  };
}
class tp extends st {
  constructor(e) {
    super(e), this.client = this.getApolloClient();
  }
  getApolloClient() {
    const e = Vf((n, { headers: i }) => ({
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        ...i,
        authorization: this.token ? `${this.tokenKeyword} ${this.token}` : ""
      }
    })), t = Ja({ uri: `${this.apiRoot}/graphql` });
    return new Wl({
      link: e.concat(t),
      cache: new kf({ fragmentMatcher: ep }),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: Ki,
          errorPolicy: "ignore"
        },
        query: {
          fetchPolicy: Ki,
          errorPolicy: "all"
        }
      }
    });
  }
  reset() {
    return this.client.resetStore();
  }
  async getRepository(e, t) {
    const { data: n } = await this.query({
      query: Uh,
      variables: { owner: e, name: t },
      fetchPolicy: Ne
      // repository id doesn't change
    });
    return n.repository;
  }
  query(e) {
    return this.client.query(e).catch((t) => {
      throw new pe(t.message, 500, "GitHub");
    });
  }
  async mutate(e) {
    var t, n, i, a, o, s;
    try {
      return await this.client.mutate(e);
    } catch (u) {
      const c = u.graphQLErrors;
      if (Array.isArray(c) && c.some((l) => l.message === "Ref cannot be created.")) {
        const l = ((n = (t = e == null ? void 0 : e.variables) == null ? void 0 : t.createRefInput) == null ? void 0 : n.name) || "", h = Lt(l, "refs/heads/");
        h && await Yi(h, (p) => this.getBranch(p), ue);
      } else if (Array.isArray(c) && c.some(
        (l) => new RegExp(
          `A ref named "refs/heads/${we}/.+?" already exists in the repository.`
        ).test(l.message)
      )) {
        const l = ((a = (i = e == null ? void 0 : e.variables) == null ? void 0 : i.createRefInput) == null ? void 0 : a.name) || "", h = ((s = (o = e == null ? void 0 : e.variables) == null ? void 0 : o.createRefInput) == null ? void 0 : s.oid) || "", p = Lt(l, "refs/heads/");
        if (p && p.startsWith(`${we}/`) && h)
          try {
            return await this.backupBranch(p), await this.deleteBranch(p), await this.client.mutate(e);
          } catch (m) {
            console.log(m);
          }
      }
      throw new pe(u.message, 500, "GitHub");
    }
  }
  async hasWriteAccess() {
    const { repoOwner: e, repoName: t } = this;
    try {
      const { data: n } = await this.query({
        query: Ah,
        variables: { owner: e, name: t },
        fetchPolicy: Ne
        // we can assume permission doesn't change often
      }), { viewerPermission: i } = n.repository;
      return ["ADMIN", "MAINTAIN", "WRITE"].includes(i);
    } catch (n) {
      throw console.error("Problem fetching repo data from GitHub"), n;
    }
  }
  async user() {
    const { data: e } = await this.query({
      query: _h,
      fetchPolicy: Ne
      // we can assume user details don't change often
    });
    return e.viewer;
  }
  async retrieveBlobObject(e, t, n, i = {}) {
    const { data: a } = await this.query({
      query: Fh,
      variables: { owner: e, name: t, expression: n },
      ...i
    });
    if (a.repository.object) {
      const { is_binary: o, text: s } = a.repository.object;
      return { isNull: !1, isBinary: o, text: s };
    } else
      return { isNull: !0 };
  }
  getOwnerAndNameFromRepoUrl(e) {
    let { repoOwner: t, repoName: n } = this;
    return e === this.originRepoURL && ({ originRepoOwner: t, originRepoName: n } = this), { owner: t, name: n };
  }
  async readFile(e, t, {
    branch: n = this.branch,
    repoURL: i = this.repoURL,
    parseText: a = !0
  } = {}) {
    return t || (t = await this.getFileSha(e, { repoURL: i, branch: n })), await zo(t, () => this.fetchBlobContent({ sha: t, repoURL: i, parseText: a }), Sr, a);
  }
  async fetchBlobContent({ sha: e, repoURL: t, parseText: n }) {
    if (!n)
      return super.fetchBlobContent({ sha: e, repoURL: t, parseText: n });
    const { owner: i, name: a } = this.getOwnerAndNameFromRepoUrl(t), { isNull: o, isBinary: s, text: u } = await this.retrieveBlobObject(
      i,
      a,
      e,
      { fetchPolicy: Ne }
      // blob sha is derived from file content
    );
    if (o)
      throw new pe("Not Found", 404, "GitHub");
    return s ? super.fetchBlobContent({ sha: e, repoURL: t, parseText: n }) : u;
  }
  async getPullRequestAuthor(e) {
    const t = e.user;
    return (t == null ? void 0 : t.name) || (t == null ? void 0 : t.login);
  }
  async getPullRequests(e, t, n) {
    const { originRepoOwner: i, originRepoName: a } = this;
    let o;
    t === nt.Open ? o = ["OPEN"] : t === nt.Closed ? o = ["CLOSED", "MERGED"] : o = ["OPEN", "CLOSED", "MERGED"];
    const { data: s } = await this.query({
      query: Qh,
      variables: {
        owner: i,
        name: a,
        ...e ? { head: e } : {},
        states: o
      }
    }), {
      pullRequests: u
    } = s.repository;
    return u.nodes.map(Wi).filter(
      (l) => l.head.ref.startsWith(`${we}/`) && n(l)
    );
  }
  async getOpenAuthoringBranches() {
    const { repoOwner: e, repoName: t } = this, { data: n } = await this.query({
      query: $h,
      variables: {
        owner: e,
        name: t,
        refPrefix: `refs/heads/cms/${this.repo}/`
      }
    });
    return n.repository.refs.nodes.map(({ name: i, prefix: a }) => ({
      ref: `${a}${i}`
    }));
  }
  async getStatuses(e, t) {
    const n = this.generateContentKey(e, t), i = se(n), o = (await this.getBranchPullRequest(i)).head.sha, { originRepoOwner: s, originRepoName: u } = this, { data: c } = await this.query({ query: qh, variables: { owner: s, name: u, sha: o } });
    if (c.repository.object) {
      const { status: l } = c.repository.object, { contexts: h } = l || { contexts: [] };
      return h;
    } else
      return [];
  }
  getAllFiles(e, t) {
    return e.reduce((i, a) => {
      var o;
      if (a.type === "tree") {
        const s = ((o = a.object) == null ? void 0 : o.entries) || [];
        return [...i, ...this.getAllFiles(s, `${t}/${a.name}`)];
      } else if (a.type === "blob")
        return [
          ...i,
          {
            name: a.name,
            type: a.type,
            id: a.sha,
            path: `${t}/${a.name}`,
            size: a.blob ? a.blob.size : 0
          }
        ];
      return i;
    }, []);
  }
  async listFiles(e, { repoURL: t = this.repoURL, branch: n = this.branch, depth: i = 1 } = {}) {
    const { owner: a, name: o } = this.getOwnerAndNameFromRepoUrl(t), s = Ji(e, "/"), { data: u } = await this.query({
      query: Lh(i),
      variables: { owner: a, name: o, expression: `${n}:${s}` }
    });
    return u.repository.object ? this.getAllFiles(u.repository.object.entries, s) : [];
  }
  getBranchQualifiedName(e) {
    return `refs/heads/${e}`;
  }
  getBranchQuery(e, t, n) {
    return {
      query: jh,
      variables: {
        owner: t,
        name: n,
        qualifiedName: this.getBranchQualifiedName(e)
      }
    };
  }
  async getDefaultBranch() {
    const { data: e } = await this.query({
      ...this.getBranchQuery(this.branch, this.originRepoOwner, this.originRepoName)
    });
    return e.repository.branch;
  }
  async getBranch(e) {
    const { data: t } = await this.query({
      ...this.getBranchQuery(e, this.repoOwner, this.repoName),
      fetchPolicy: Ne
    });
    if (!t.repository.branch)
      throw new pe("Branch not found", 404, ue);
    return t.repository.branch;
  }
  async patchRef(e, t, n, i = {}) {
    if (e !== "heads")
      return super.patchRef(e, t, n, i);
    const a = i.force || !1, o = await this.getBranch(t), { data: s } = await this.mutate({
      mutation: Kh,
      variables: {
        input: { oid: n, refId: o.id, force: a }
      }
    });
    return s.updateRef.branch;
  }
  async deleteBranch(e) {
    const t = await this.getBranch(e), { data: n } = await this.mutate({
      mutation: Wh,
      variables: {
        deleteRefInput: { refId: t.id }
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      update: (i) => i.data.delete(Ct(t))
    });
    return n.deleteRef;
  }
  getPullRequestQuery(e) {
    const { originRepoOwner: t, originRepoName: n } = this;
    return {
      query: Bh,
      variables: { owner: t, name: n, number: e }
    };
  }
  async getPullRequest(e) {
    const { data: t } = await this.query({
      ...this.getPullRequestQuery(e),
      fetchPolicy: Ne
    }), n = t.repository.pullRequest.state === "OPEN" ? nt.Open : nt.Closed;
    return {
      ...t.repository.pullRequest,
      state: n
    };
  }
  getPullRequestAndBranchQuery(e, t) {
    const { repoOwner: n, repoName: i } = this, { originRepoOwner: a, originRepoName: o } = this;
    return {
      query: Vh,
      variables: {
        owner: n,
        name: i,
        originRepoOwner: a,
        originRepoName: o,
        number: t,
        qualifiedName: this.getBranchQualifiedName(e)
      }
    };
  }
  async getPullRequestAndBranch(e, t) {
    const { data: n } = await this.query({
      ...this.getPullRequestAndBranchQuery(e, t),
      fetchPolicy: Ne
    }), { repository: i, origin: a } = n;
    return { branch: i.branch, pullRequest: a.pullRequest };
  }
  async openPR(e) {
    const t = await this.getPullRequest(e), { data: n } = await this.mutate({
      mutation: Zh,
      variables: {
        reopenPullRequestInput: { pullRequestId: t.id }
      },
      update: (i, { data: a }) => {
        const { pullRequest: o } = a.reopenPullRequest, s = { repository: { ...o.repository, pullRequest: o } };
        i.writeQuery({
          ...this.getPullRequestQuery(o.number),
          data: s
        });
      }
    });
    return n.reopenPullRequest;
  }
  async closePR(e) {
    const t = await this.getPullRequest(e), { data: n } = await this.mutate({
      mutation: zh,
      variables: {
        closePullRequestInput: { pullRequestId: t.id }
      },
      update: (i, { data: a }) => {
        const { pullRequest: o } = a.closePullRequest, s = { repository: { ...o.repository, pullRequest: o } };
        i.writeQuery({
          ...this.getPullRequestQuery(o.number),
          data: s
        });
      }
    });
    return n.closePullRequest;
  }
  async deleteUnpublishedEntry(e, t) {
    try {
      const n = this.generateContentKey(e, t), i = se(n), a = await this.getBranchPullRequest(i);
      if (a.number !== qe) {
        const { branch: o, pullRequest: s } = await this.getPullRequestAndBranch(i, a.number), { data: u } = await this.mutate({
          mutation: Hh,
          variables: {
            deleteRefInput: { refId: o.id },
            closePullRequestInput: { pullRequestId: s.id }
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          update: (c) => {
            c.data.delete(Ct(o)), c.data.delete(Ct(s));
          }
        });
        return u.closePullRequest;
      } else
        return await this.deleteBranch(i);
    } catch (n) {
      const { graphQLErrors: i } = n;
      if (i && i.length > 0 && i.some((o) => o.type === "NOT_FOUND"))
        return;
      throw n;
    }
  }
  async createPR(e, t) {
    const [n, i] = await Promise.all([
      this.getRepository(this.originRepoOwner, this.originRepoName),
      this.useOpenAuthoring ? `${(await this.user()).login}:${t}` : t
    ]), { data: a } = await this.mutate({
      mutation: Yh,
      variables: {
        createPullRequestInput: {
          baseRefName: this.branch,
          body: Tr,
          title: e,
          headRefName: i,
          repositoryId: n.id
        }
      },
      update: (s, { data: u }) => {
        const { pullRequest: c } = u.createPullRequest, l = { repository: { ...c.repository, pullRequest: c } };
        s.writeQuery({
          ...this.getPullRequestQuery(c.number),
          data: l
        });
      }
    }), { pullRequest: o } = a.createPullRequest;
    return { ...o, head: { sha: o.headRefOid } };
  }
  async createBranch(e, t) {
    const n = this.repoOwner, i = this.repoName, a = await this.getRepository(n, i), { data: o } = await this.mutate({
      mutation: Jh,
      variables: {
        createRefInput: {
          name: this.getBranchQualifiedName(e),
          oid: t,
          repositoryId: a.id
        }
      },
      update: (u, { data: c }) => {
        const { branch: l } = c.createRef, h = { repository: { ...l.repository, branch: l } };
        u.writeQuery({
          ...this.getBranchQuery(e, n, i),
          data: h
        });
      }
    }), { branch: s } = o.createRef;
    return { ...s, ref: `${s.prefix}${s.name}` };
  }
  async createBranchAndPullRequest(e, t, n) {
    const i = this.originRepoOwner, a = this.originRepoName, o = await this.getRepository(i, a), { data: s } = await this.mutate({
      mutation: Xh,
      variables: {
        createRefInput: {
          name: this.getBranchQualifiedName(e),
          oid: t,
          repositoryId: o.id
        },
        createPullRequestInput: {
          baseRefName: this.branch,
          body: Tr,
          title: n,
          headRefName: e,
          repositoryId: o.id
        }
      },
      update: (c, { data: l }) => {
        const { branch: h } = l.createRef, { pullRequest: p } = l.createPullRequest, m = { repository: { ...h.repository, branch: h } }, y = {
          repository: { ...p.repository, branch: h },
          origin: { ...p.repository, pullRequest: p }
        };
        c.writeQuery({
          ...this.getBranchQuery(e, i, a),
          data: m
        }), c.writeQuery({
          ...this.getPullRequestAndBranchQuery(e, p.number),
          data: y
        });
      }
    }), { pullRequest: u } = s.createPullRequest;
    return Wi(u);
  }
  async getFileSha(e, { repoURL: t = this.repoURL, branch: n = this.branch } = {}) {
    const { owner: i, name: a } = this.getOwnerAndNameFromRepoUrl(t), { data: o } = await this.query({
      query: Gh,
      variables: { owner: i, name: a, expression: `${n}:${e}` }
    });
    if (o.repository.file)
      return o.repository.file.sha;
    throw new pe("Not Found", 404, ue);
  }
}
const rp = 10, { fetchWithTimeout: ye } = zi, fo = "https://www.githubstatus.com", np = `${fo}/api/v2/components.json`, ip = ["API Requests", "Issues, Pull Requests, Projects"];
class ap {
  constructor(e, t = {}) {
    var n;
    if (this.bypassWriteAccessCheckForAppTokens = !1, this.getCursorAndFiles = (i, a) => {
      const s = i.length, u = Math.ceil(i.length / 20), c = [];
      a > 1 && (c.push("prev"), c.push("first")), a < u && (c.push("next"), c.push("last"));
      const l = Ho.create({
        actions: c,
        meta: { page: a, count: s, pageSize: 20, pageCount: u },
        data: { files: i }
      }), h = i.slice((a - 1) * 20, a * 20);
      return { cursor: l, files: h };
    }, this.options = {
      proxied: !1,
      API: null,
      initialWorkflowStatus: "",
      ...t
    }, !this.options.proxied && (e.backend.repo === null || e.backend.repo === void 0))
      throw new Error('The GitHub backend needs a "repo" in the backend configuration.');
    if (this.api = this.options.API || null, this.isBranchConfigured = !!e.backend.branch, this.openAuthoringEnabled = e.backend.open_authoring || !1, this.openAuthoringEnabled) {
      if (!this.options.useWorkflow)
        throw new Error(
          "backend.open_authoring is true but publish_mode is not set to editorial_workflow."
        );
      this.originRepo = e.backend.repo || "";
    } else
      this.repo = this.originRepo = e.backend.repo || "";
    this.alwaysForkEnabled = e.backend.always_fork || !1, this.branch = ((n = e.backend.branch) == null ? void 0 : n.trim()) || "master", this.apiRoot = e.backend.api_root || "https://api.github.com", this.token = "", this.tokenKeyword = "token", this.baseUrl = e.backend.base_url, this.squashMerges = e.backend.squash_merges || !1, this.cmsLabelPrefix = e.backend.cms_label_prefix || "", this.useGraphql = e.backend.use_graphql || !1, this.mediaFolder = e.media_folder, this.previewContext = e.backend.preview_context || "", this.lock = Yo();
  }
  isGitBackend() {
    return !0;
  }
  async status() {
    var n;
    const e = await ye(np).then((i) => i.json()).then((i) => i.components.filter(
      (a) => ip.includes(a.name)
    ).every(
      (a) => a.status === "operational"
    )).catch((i) => (console.warn("Failed getting GitHub status", i), !0));
    let t = !1;
    return e && (t = await ((n = this.api) == null ? void 0 : n.getUser({ token: this.token ?? "" }).then((i) => !!i).catch((i) => (console.warn("Failed getting GitHub user", i), !1))) || !1), { auth: { status: t }, api: { status: e, statusPage: fo } };
  }
  authComponent() {
    const e = (t) => /* @__PURE__ */ he.jsx(Jr, { ...t, backend: this });
    return e.displayName = "AuthenticationPage", e;
  }
  restoreUser(e) {
    return this.openAuthoringEnabled ? this.authenticateWithFork({ userData: e, getPermissionToFork: () => !0 }).then(
      () => this.authenticate(e)
    ) : this.authenticate(e);
  }
  async pollUntilForkExists({ repo: e, token: t }) {
    let i = !1;
    for (; !i; )
      i = await ye(`${this.apiRoot}/repos/${e}`, {
        headers: { Authorization: `${this.tokenKeyword} ${t}` }
      }).then(() => !0).catch((a) => a && a.status === 404 ? (console.log("This 404 was expected and handled appropriately."), !1) : Promise.reject(a)), i || await new Promise((a) => setTimeout(a, 250));
    return Promise.resolve();
  }
  async currentUser({ token: e }) {
    return this._currentUserPromise || (this._currentUserPromise = ye(`${this.apiRoot}/user`, {
      headers: {
        Authorization: `${this.tokenKeyword} ${e}`
      }
    }).then((t) => t.json())), this._currentUserPromise;
  }
  async userIsOriginMaintainer({
    username: e,
    token: t
  }) {
    const n = e || (await this.currentUser({ token: t })).login;
    return this._userIsOriginMaintainerPromises = this._userIsOriginMaintainerPromises || {}, this._userIsOriginMaintainerPromises[n] || (this._userIsOriginMaintainerPromises[n] = ye(
      `${this.apiRoot}/repos/${this.originRepo}/collaborators/${n}/permission`,
      {
        headers: {
          Authorization: `${this.tokenKeyword} ${t}`
        }
      }
    ).then((i) => i.json()).then(({ permission: i }) => i === "admin" || i === "write")), this._userIsOriginMaintainerPromises[n];
  }
  async forkExists({ token: e }) {
    try {
      const t = await this.currentUser({ token: e }), n = this.originRepo.split("/")[1], i = await ye(`${this.apiRoot}/repos/${t.login}/${n}`, {
        method: "GET",
        headers: {
          Authorization: `${this.tokenKeyword} ${e}`
        }
      }).then((o) => o.json());
      return i.fork === !0 && i.parent && i.parent.full_name.toLowerCase() === this.originRepo.toLowerCase();
    } catch {
      return !1;
    }
  }
  async authenticateWithFork({
    userData: e,
    getPermissionToFork: t
  }) {
    if (!this.openAuthoringEnabled)
      throw new Error("Cannot authenticate with fork; Open Authoring is turned off.");
    const n = e.token;
    if (!this.alwaysForkEnabled && await this.userIsOriginMaintainer({ token: n }))
      return this.repo = this.originRepo, this.useOpenAuthoring = !1, Promise.resolve();
    const i = await this.currentUser({ token: n }), a = this.originRepo.split("/")[1];
    if (this.repo = `${i.login}/${a}`, this.useOpenAuthoring = !0, await this.forkExists({ token: n }))
      return ye(`${this.apiRoot}/repos/${this.repo}/merge-upstream`, {
        method: "POST",
        headers: {
          Authorization: `${this.tokenKeyword} ${n}`
        },
        body: JSON.stringify({
          branch: this.branch
        })
      });
    {
      await t();
      const o = await ye(`${this.apiRoot}/repos/${this.originRepo}/forks`, {
        method: "POST",
        headers: {
          Authorization: `${this.tokenKeyword} ${n}`
        }
      }).then((s) => s.json());
      return this.pollUntilForkExists({ repo: o.full_name, token: n });
    }
  }
  async authenticate(e) {
    if (this.token = e.token, !this.isBranchConfigured) {
      const a = await ye(`${this.apiRoot}/repos/${this.originRepo}`, {
        headers: { Authorization: `token ${this.token}` }
      }).then((o) => o.json()).catch(() => null);
      a && a.default_branch && (this.branch = a.default_branch);
    }
    const t = this.useGraphql ? tp : st;
    this.api = new t({
      token: this.token,
      tokenKeyword: this.tokenKeyword,
      branch: this.branch,
      repo: this.repo,
      originRepo: this.originRepo,
      apiRoot: this.apiRoot,
      squashMerges: this.squashMerges,
      cmsLabelPrefix: this.cmsLabelPrefix,
      useOpenAuthoring: this.useOpenAuthoring,
      initialWorkflowStatus: this.options.initialWorkflowStatus,
      baseUrl: this.baseUrl,
      getUser: this.currentUser
    });
    const n = await this.api.user();
    if (!await this.api.hasWriteAccess().catch((a) => {
      throw a.message = cc`
        Repo "${this.repo}" not found.

        Please ensure the repo information is spelled correctly.

        If the repo is private, make sure you're logged into a GitHub account with access.

        If your repo is under an organization, ensure the organization has granted access to Decap CMS.
      `, a;
    }) && !this.bypassWriteAccessCheckForAppTokens)
      throw new Error("Your GitHub user account does not have access to this repo.");
    return { ...n, token: e.token, useOpenAuthoring: this.useOpenAuthoring };
  }
  logout() {
    if (this.token = null, this.api && this.api.reset && typeof this.api.reset == "function")
      return this.api.reset();
  }
  getToken() {
    return Promise.resolve(this.token);
  }
  async entriesByFolder(e, t, n) {
    const i = this.api.originRepoURL;
    let a;
    const u = await Gn(
      () => this.api.listFiles(e, {
        repoURL: i,
        depth: n
      }).then((c) => {
        const l = c.filter((p) => Hn(p, t)), h = this.getCursorAndFiles(l, 1);
        return a = h.cursor, h.files;
      }),
      (c, l) => this.api.readFile(c, l, { repoURL: i }),
      this.api.readFileMetadata.bind(this.api),
      ue
    );
    return u[Jo] = a, u;
  }
  async allEntriesByFolder(e, t, n, i) {
    const a = this.api.originRepoURL;
    return await Gn(
      () => this.api.listFiles(e, {
        repoURL: a,
        depth: n
      }).then(
        (c) => c.filter(
          (l) => (!i || i.test(l.path)) && Hn(l, t)
        )
      ),
      (c, l) => this.api.readFile(c, l, { repoURL: a }),
      this.api.readFileMetadata.bind(this.api),
      ue
    );
  }
  entriesByFiles(e) {
    const t = this.useOpenAuthoring ? this.api.originRepoURL : this.api.repoURL;
    return Kn(e, (i, a) => this.api.readFile(i, a, { repoURL: t }).catch(() => ""), this.api.readFileMetadata.bind(this.api), ue);
  }
  // Fetches a single entry.
  getEntry(e) {
    const t = this.api.originRepoURL;
    return this.api.readFile(e, null, { repoURL: t }).then((n) => ({
      file: { path: e, id: null },
      data: n
    })).catch(() => ({ file: { path: e, id: null }, data: "" }));
  }
  getMedia(e = this.mediaFolder) {
    return this.api.listFiles(e).then(
      (t) => t.map(({ id: n, name: i, size: a, path: o }) => ({ id: n, name: i, size: a, displayURL: { id: n, path: o }, path: o }))
    );
  }
  async getMediaFile(e) {
    const t = await Wn(e, null, this.api.readFile.bind(this.api)), n = Or(e), i = zn(n, t), a = URL.createObjectURL(i);
    return {
      id: await Xo(t),
      displayURL: a,
      path: e,
      name: n,
      size: i.size,
      file: i,
      url: a
    };
  }
  getMediaDisplayURL(e) {
    return this._mediaDisplayURLSem = this._mediaDisplayURLSem || Nr(rp), Zo(
      e,
      this.api.readFile.bind(this.api),
      this._mediaDisplayURLSem
    );
  }
  persistEntry(e, t) {
    return Et(
      this.lock,
      () => this.api.persistFiles(e.dataFiles, e.assets, t),
      "Failed to acquire persist entry lock"
    );
  }
  async persistMedia(e, t) {
    try {
      await this.api.persistFiles([], [e], t);
      const { sha: n, path: i, fileObj: a } = e, o = a ? URL.createObjectURL(a) : "";
      return {
        id: n,
        name: a.name,
        size: a.size,
        displayURL: o,
        path: ec(i, "/")
      };
    } catch (n) {
      throw console.error(n), n;
    }
  }
  deleteFiles(e, t) {
    return this.api.deleteFiles(e, t);
  }
  async traverseCursor(e, t) {
    const n = e.meta, i = e.data.get("files").toJS();
    let a;
    switch (t) {
      case "first": {
        a = this.getCursorAndFiles(i, 1);
        break;
      }
      case "last": {
        a = this.getCursorAndFiles(i, n.get("pageCount"));
        break;
      }
      case "next": {
        a = this.getCursorAndFiles(i, n.get("page") + 1);
        break;
      }
      case "prev": {
        a = this.getCursorAndFiles(i, n.get("page") - 1);
        break;
      }
      default: {
        a = this.getCursorAndFiles(i, 1);
        break;
      }
    }
    const o = (u, c) => this.api.readFile(u, c, { repoURL: this.api.originRepoURL }).catch(
      () => ""
    );
    return {
      entries: await Kn(
        a.files,
        o,
        this.api.readFileMetadata.bind(this.api),
        ue
      ),
      cursor: a.cursor
    };
  }
  async loadMediaFile(e, t) {
    const n = (s, u, { parseText: c }) => this.api.readFile(s, u, { branch: e, parseText: c }), i = await Wn(t.path, t.id, n), a = Or(t.path), o = zn(a, i);
    return {
      id: t.id,
      displayURL: URL.createObjectURL(o),
      path: t.path,
      name: a,
      size: o.size,
      file: o
    };
  }
  async unpublishedEntries() {
    return await es(() => this.api.listUnpublishedBranches().then(
      (n) => n.map((i) => Hi(i))
    ));
  }
  async unpublishedEntry({
    id: e,
    collection: t,
    slug: n
  }) {
    if (e)
      return await this.api.retrieveUnpublishedEntryData(e);
    if (t && n) {
      const i = this.api.generateContentKey(t, n);
      return await this.api.retrieveUnpublishedEntryData(i);
    } else
      throw new Error("Missing unpublished entry id or collection and slug");
  }
  getBranch(e, t) {
    const n = this.api.generateContentKey(e, t);
    return se(n);
  }
  async unpublishedEntryDataFile(e, t, n, i) {
    const a = this.getBranch(e, t);
    return await this.api.readFile(n, i, { branch: a });
  }
  async unpublishedEntryMediaFile(e, t, n, i) {
    const a = this.getBranch(e, t);
    return await this.loadMediaFile(a, { path: n, id: i });
  }
  async getDeployPreview(e, t) {
    try {
      const n = await this.api.getStatuses(e, t), i = ts(n, this.previewContext);
      if (i) {
        const { target_url: a, state: o } = i;
        return { url: a, status: o };
      } else
        return null;
    } catch {
      return null;
    }
  }
  updateUnpublishedEntryStatus(e, t, n) {
    return Et(
      this.lock,
      () => this.api.updateUnpublishedEntryStatus(e, t, n),
      "Failed to acquire update entry status lock"
    );
  }
  deleteUnpublishedEntry(e, t) {
    return Et(
      this.lock,
      () => this.api.deleteUnpublishedEntry(e, t),
      "Failed to acquire delete entry lock"
    );
  }
  publishUnpublishedEntry(e, t) {
    return Et(
      this.lock,
      () => this.api.publishUnpublishedEntry(e, t),
      "Failed to acquire publish entry lock"
    );
  }
}
const dp = {
  GitHubBackend: ap,
  API: st,
  AuthenticationPage: Jr
};
export {
  st as API,
  Jr as AuthenticationPage,
  dp as DecapCmsBackendGithub,
  ap as GitHubBackend
};

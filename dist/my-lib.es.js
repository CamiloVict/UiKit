import ur from "react";
import Ar, { css as be } from "styled-components";
function kr(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var $e = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Ir() {
  return Ke || (Ke = 1, process.env.NODE_ENV !== "production" && function() {
    var a = ur, D = Symbol.for("react.element"), k = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), C = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), d = Symbol.for("react.context"), b = Symbol.for("react.forward_ref"), S = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), V = Symbol.iterator, M = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = V && e[V] || e[M];
      return typeof r == "function" ? r : null;
    }
    var U = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function Y(e) {
      {
        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
          n[s - 1] = arguments[s];
        z("error", e, n);
      }
    }
    function z(e, r, n) {
      {
        var s = U.ReactDebugCurrentFrame, w = s.getStackAddendum();
        w !== "" && (r += "%s", n = n.concat([w]));
        var $ = n.map(function(O) {
          return String(O);
        });
        $.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, $);
      }
    }
    var q = !1, i = !1, ee = !1, de = !1, ve = !1, oe;
    oe = Symbol.for("react.module.reference");
    function pe(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === c || e === l || ve || e === C || e === S || e === f || de || e === F || q || i || ee || typeof e == "object" && e !== null && (e.$$typeof === I || e.$$typeof === E || e.$$typeof === x || e.$$typeof === d || e.$$typeof === b || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === oe || e.getModuleId !== void 0));
    }
    function ie(e, r, n) {
      var s = e.displayName;
      if (s)
        return s;
      var w = r.displayName || r.name || "";
      return w !== "" ? n + "(" + w + ")" : n;
    }
    function ue(e) {
      return e.displayName || "Context";
    }
    function G(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && Y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case c:
          return "Fragment";
        case k:
          return "Portal";
        case l:
          return "Profiler";
        case C:
          return "StrictMode";
        case S:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            var r = e;
            return ue(r) + ".Consumer";
          case x:
            var n = e;
            return ue(n._context) + ".Provider";
          case b:
            return ie(e, e.render, "ForwardRef");
          case E:
            var s = e.displayName || null;
            return s !== null ? s : G(e.type) || "Memo";
          case I: {
            var w = e, $ = w._payload, O = w._init;
            try {
              return G(O($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, re = 0, K, Q, ne, se, t, u, h;
    function m() {
    }
    m.__reactDisabledLog = !0;
    function v() {
      {
        if (re === 0) {
          K = console.log, Q = console.info, ne = console.warn, se = console.error, t = console.group, u = console.groupCollapsed, h = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: m,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        re++;
      }
    }
    function R() {
      {
        if (re--, re === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, e, {
              value: K
            }),
            info: H({}, e, {
              value: Q
            }),
            warn: H({}, e, {
              value: ne
            }),
            error: H({}, e, {
              value: se
            }),
            group: H({}, e, {
              value: t
            }),
            groupCollapsed: H({}, e, {
              value: u
            }),
            groupEnd: H({}, e, {
              value: h
            })
          });
        }
        re < 0 && Y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var p = U.ReactCurrentDispatcher, y;
    function g(e, r, n) {
      {
        if (y === void 0)
          try {
            throw Error();
          } catch (w) {
            var s = w.stack.trim().match(/\n( *(at )?)/);
            y = s && s[1] || "";
          }
        return `
` + y + e;
      }
    }
    var P = !1, T;
    {
      var B = typeof WeakMap == "function" ? WeakMap : Map;
      T = new B();
    }
    function o(e, r) {
      if (!e || P)
        return "";
      {
        var n = T.get(e);
        if (n !== void 0)
          return n;
      }
      var s;
      P = !0;
      var w = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = p.current, p.current = null, v();
      try {
        if (r) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (te) {
              s = te;
            }
            Reflect.construct(e, [], O);
          } else {
            try {
              O.call();
            } catch (te) {
              s = te;
            }
            e.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (te) {
            s = te;
          }
          e();
        }
      } catch (te) {
        if (te && s && typeof te.stack == "string") {
          for (var _ = te.stack.split(`
`), J = s.stack.split(`
`), W = _.length - 1, L = J.length - 1; W >= 1 && L >= 0 && _[W] !== J[L]; )
            L--;
          for (; W >= 1 && L >= 0; W--, L--)
            if (_[W] !== J[L]) {
              if (W !== 1 || L !== 1)
                do
                  if (W--, L--, L < 0 || _[W] !== J[L]) {
                    var Z = `
` + _[W].replace(" at new ", " at ");
                    return e.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", e.displayName)), typeof e == "function" && T.set(e, Z), Z;
                  }
                while (W >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        P = !1, p.current = $, R(), Error.prepareStackTrace = w;
      }
      var le = e ? e.displayName || e.name : "", Ge = le ? g(le) : "";
      return typeof e == "function" && T.set(e, Ge), Ge;
    }
    function X(e, r, n) {
      return o(e, !1);
    }
    function fe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ae(e, r, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return o(e, fe(e));
      if (typeof e == "string")
        return g(e);
      switch (e) {
        case S:
          return g("Suspense");
        case f:
          return g("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            return X(e.render);
          case E:
            return ae(e.type, r, n);
          case I: {
            var s = e, w = s._payload, $ = s._init;
            try {
              return ae($(w), r, n);
            } catch {
            }
          }
        }
      return "";
    }
    var Ee = Object.prototype.hasOwnProperty, Fe = {}, Ye = U.ReactDebugCurrentFrame;
    function ge(e) {
      if (e) {
        var r = e._owner, n = ae(e.type, e._source, r ? r.type : null);
        Ye.setExtraStackFrame(n);
      } else
        Ye.setExtraStackFrame(null);
    }
    function lr(e, r, n, s, w) {
      {
        var $ = Function.call.bind(Ee);
        for (var O in e)
          if ($(e, O)) {
            var _ = void 0;
            try {
              if (typeof e[O] != "function") {
                var J = Error((s || "React class") + ": " + n + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              _ = e[O](r, O, s, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (W) {
              _ = W;
            }
            _ && !(_ instanceof Error) && (ge(w), Y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", s || "React class", n, O, typeof _), ge(null)), _ instanceof Error && !(_.message in Fe) && (Fe[_.message] = !0, ge(w), Y("Failed %s type: %s", n, _.message), ge(null));
          }
      }
    }
    var dr = Array.isArray;
    function Re(e) {
      return dr(e);
    }
    function vr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function pr(e) {
      try {
        return We(e), !1;
      } catch {
        return !0;
      }
    }
    function We(e) {
      return "" + e;
    }
    function qe(e) {
      if (pr(e))
        return Y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", vr(e)), We(e);
    }
    var ye = U.ReactCurrentOwner, yr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, Ue, Oe;
    Oe = {};
    function br(e) {
      if (Ee.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function mr(e) {
      if (Ee.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function hr(e, r) {
      if (typeof e.ref == "string" && ye.current && r && ye.current.stateNode !== r) {
        var n = G(ye.current.type);
        Oe[n] || (Y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(ye.current.type), e.ref), Oe[n] = !0);
      }
    }
    function Er(e, r) {
      {
        var n = function() {
          Le || (Le = !0, Y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function gr(e, r) {
      {
        var n = function() {
          Ue || (Ue = !0, Y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var Tr = function(e, r, n, s, w, $, O) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: D,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: n,
        props: O,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: s
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function _r(e, r, n, s, w) {
      {
        var $, O = {}, _ = null, J = null;
        n !== void 0 && (qe(n), _ = "" + n), mr(r) && (qe(r.key), _ = "" + r.key), br(r) && (J = r.ref, hr(r, w));
        for ($ in r)
          Ee.call(r, $) && !yr.hasOwnProperty($) && (O[$] = r[$]);
        if (e && e.defaultProps) {
          var W = e.defaultProps;
          for ($ in W)
            O[$] === void 0 && (O[$] = W[$]);
        }
        if (_ || J) {
          var L = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          _ && Er(O, L), J && gr(O, L);
        }
        return Tr(e, _, J, w, s, ye.current, O);
      }
    }
    var Se = U.ReactCurrentOwner, ze = U.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var r = e._owner, n = ae(e.type, e._source, r ? r.type : null);
        ze.setExtraStackFrame(n);
      } else
        ze.setExtraStackFrame(null);
    }
    var Pe;
    Pe = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === D;
    }
    function Ne() {
      {
        if (Se.current) {
          var e = G(Se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Rr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function Or(e) {
      {
        var r = Ne();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
    }
    function Be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = Or(r);
        if (Ve[n])
          return;
        Ve[n] = !0;
        var s = "";
        e && e._owner && e._owner !== Se.current && (s = " It was passed a child from " + G(e._owner.type) + "."), ce(e), Y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, s), ce(null);
      }
    }
    function Je(e, r) {
      {
        if (typeof e != "object")
          return;
        if (Re(e))
          for (var n = 0; n < e.length; n++) {
            var s = e[n];
            Ce(s) && Be(s, r);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var w = N(e);
          if (typeof w == "function" && w !== e.entries)
            for (var $ = w.call(e), O; !(O = $.next()).done; )
              Ce(O.value) && Be(O.value, r);
        }
      }
    }
    function Sr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var n;
        if (typeof r == "function")
          n = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === b || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === E))
          n = r.propTypes;
        else
          return;
        if (n) {
          var s = G(r);
          lr(n, e.props, "prop", s, e);
        } else if (r.PropTypes !== void 0 && !Pe) {
          Pe = !0;
          var w = G(r);
          Y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", w || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && Y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Pr(e) {
      {
        for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
          var s = r[n];
          if (s !== "children" && s !== "key") {
            ce(e), Y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", s), ce(null);
            break;
          }
        }
        e.ref !== null && (ce(e), Y("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    function He(e, r, n, s, w, $) {
      {
        var O = pe(e);
        if (!O) {
          var _ = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = Rr(w);
          J ? _ += J : _ += Ne();
          var W;
          e === null ? W = "null" : Re(e) ? W = "array" : e !== void 0 && e.$$typeof === D ? (W = "<" + (G(e.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : W = typeof e, Y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", W, _);
        }
        var L = _r(e, r, n, w, $);
        if (L == null)
          return L;
        if (O) {
          var Z = r.children;
          if (Z !== void 0)
            if (s)
              if (Re(Z)) {
                for (var le = 0; le < Z.length; le++)
                  Je(Z[le], e);
                Object.freeze && Object.freeze(Z);
              } else
                Y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Je(Z, e);
        }
        return e === c ? Pr(L) : Sr(L), L;
      }
    }
    function Cr(e, r, n) {
      return He(e, r, n, !0);
    }
    function xr(e, r, n) {
      return He(e, r, n, !1);
    }
    var wr = xr, jr = Cr;
    me.Fragment = c, me.jsx = wr, me.jsxs = jr;
  }()), me;
}
var he = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function $r() {
  if (Xe)
    return he;
  Xe = 1;
  var a = ur, D = Symbol.for("react.element"), k = Symbol.for("react.fragment"), c = Object.prototype.hasOwnProperty, C = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(d, b, S) {
    var f, E = {}, I = null, F = null;
    S !== void 0 && (I = "" + S), b.key !== void 0 && (I = "" + b.key), b.ref !== void 0 && (F = b.ref);
    for (f in b)
      c.call(b, f) && !l.hasOwnProperty(f) && (E[f] = b[f]);
    if (d && d.defaultProps)
      for (f in b = d.defaultProps, b)
        E[f] === void 0 && (E[f] = b[f]);
    return { $$typeof: D, type: d, key: I, ref: F, props: E, _owner: C.current };
  }
  return he.Fragment = k, he.jsx = x, he.jsxs = x, he;
}
process.env.NODE_ENV === "production" ? $e.exports = $r() : $e.exports = Ir();
var Dr = $e.exports;
const Mr = Ar.button`
    font-family: 'Nunito Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-weight: 700;
    border: 0;
    border-radius: 0.8em;
    cursor: pointer;
    display: inline-block;
    line-height: 1;

        ${(a) => a.variant === "primary" && be`
            color: white;
            background-image: linear-gradient(to bottom right, #28256a,#5166b9);
            `};

        ${(a) => a.variant === "secondary" && be`
            color: white;
            background-image: linear-gradient(to bottom left, #617cea, #617cea);
            box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
            `};     

        ${(a) => a.size === "small" && be`
            font-size: 12px;
            padding: 12px 25px;
            `};

        ${(a) => a.size === "medium" && be`
            font-size: 14px;
            padding: 15px 50px;
            `};

        ${(a) => a.size === "large" && be`
            font-size: 16px;
            padding: 18px 75px;
            `};
        `;
var De = { exports: {} }, xe, Ze;
function Me() {
  if (Ze)
    return xe;
  Ze = 1;
  var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xe = a, xe;
}
var we, Qe;
function Fr() {
  if (Qe)
    return we;
  Qe = 1;
  var a = Me();
  function D() {
  }
  function k() {
  }
  return k.resetWarningCache = D, we = function() {
    function c(x, d, b, S, f, E) {
      if (E !== a) {
        var I = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw I.name = "Invariant Violation", I;
      }
    }
    c.isRequired = c;
    function C() {
      return c;
    }
    var l = {
      array: c,
      bigint: c,
      bool: c,
      func: c,
      number: c,
      object: c,
      string: c,
      symbol: c,
      any: c,
      arrayOf: C,
      element: c,
      elementType: c,
      instanceOf: C,
      node: c,
      objectOf: C,
      oneOf: C,
      oneOfType: C,
      shape: C,
      exact: C,
      checkPropTypes: k,
      resetWarningCache: D
    };
    return l.PropTypes = l, l;
  }, we;
}
var Te = { exports: {} }, j = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var er;
function Yr() {
  return er || (er = 1, process.env.NODE_ENV !== "production" && function() {
    var a = typeof Symbol == "function" && Symbol.for, D = a ? Symbol.for("react.element") : 60103, k = a ? Symbol.for("react.portal") : 60106, c = a ? Symbol.for("react.fragment") : 60107, C = a ? Symbol.for("react.strict_mode") : 60108, l = a ? Symbol.for("react.profiler") : 60114, x = a ? Symbol.for("react.provider") : 60109, d = a ? Symbol.for("react.context") : 60110, b = a ? Symbol.for("react.async_mode") : 60111, S = a ? Symbol.for("react.concurrent_mode") : 60111, f = a ? Symbol.for("react.forward_ref") : 60112, E = a ? Symbol.for("react.suspense") : 60113, I = a ? Symbol.for("react.suspense_list") : 60120, F = a ? Symbol.for("react.memo") : 60115, V = a ? Symbol.for("react.lazy") : 60116, M = a ? Symbol.for("react.block") : 60121, N = a ? Symbol.for("react.fundamental") : 60117, U = a ? Symbol.for("react.responder") : 60118, Y = a ? Symbol.for("react.scope") : 60119;
    function z(o) {
      return typeof o == "string" || typeof o == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      o === c || o === S || o === l || o === C || o === E || o === I || typeof o == "object" && o !== null && (o.$$typeof === V || o.$$typeof === F || o.$$typeof === x || o.$$typeof === d || o.$$typeof === f || o.$$typeof === N || o.$$typeof === U || o.$$typeof === Y || o.$$typeof === M);
    }
    function q(o) {
      if (typeof o == "object" && o !== null) {
        var X = o.$$typeof;
        switch (X) {
          case D:
            var fe = o.type;
            switch (fe) {
              case b:
              case S:
              case c:
              case l:
              case C:
              case E:
                return fe;
              default:
                var ae = fe && fe.$$typeof;
                switch (ae) {
                  case d:
                  case f:
                  case V:
                  case F:
                  case x:
                    return ae;
                  default:
                    return X;
                }
            }
          case k:
            return X;
        }
      }
    }
    var i = b, ee = S, de = d, ve = x, oe = D, pe = f, ie = c, ue = V, G = F, H = k, re = l, K = C, Q = E, ne = !1;
    function se(o) {
      return ne || (ne = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), t(o) || q(o) === b;
    }
    function t(o) {
      return q(o) === S;
    }
    function u(o) {
      return q(o) === d;
    }
    function h(o) {
      return q(o) === x;
    }
    function m(o) {
      return typeof o == "object" && o !== null && o.$$typeof === D;
    }
    function v(o) {
      return q(o) === f;
    }
    function R(o) {
      return q(o) === c;
    }
    function p(o) {
      return q(o) === V;
    }
    function y(o) {
      return q(o) === F;
    }
    function g(o) {
      return q(o) === k;
    }
    function P(o) {
      return q(o) === l;
    }
    function T(o) {
      return q(o) === C;
    }
    function B(o) {
      return q(o) === E;
    }
    j.AsyncMode = i, j.ConcurrentMode = ee, j.ContextConsumer = de, j.ContextProvider = ve, j.Element = oe, j.ForwardRef = pe, j.Fragment = ie, j.Lazy = ue, j.Memo = G, j.Portal = H, j.Profiler = re, j.StrictMode = K, j.Suspense = Q, j.isAsyncMode = se, j.isConcurrentMode = t, j.isContextConsumer = u, j.isContextProvider = h, j.isElement = m, j.isForwardRef = v, j.isFragment = R, j.isLazy = p, j.isMemo = y, j.isPortal = g, j.isProfiler = P, j.isStrictMode = T, j.isSuspense = B, j.isValidElementType = z, j.typeOf = q;
  }()), j;
}
var A = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rr;
function Wr() {
  if (rr)
    return A;
  rr = 1;
  var a = typeof Symbol == "function" && Symbol.for, D = a ? Symbol.for("react.element") : 60103, k = a ? Symbol.for("react.portal") : 60106, c = a ? Symbol.for("react.fragment") : 60107, C = a ? Symbol.for("react.strict_mode") : 60108, l = a ? Symbol.for("react.profiler") : 60114, x = a ? Symbol.for("react.provider") : 60109, d = a ? Symbol.for("react.context") : 60110, b = a ? Symbol.for("react.async_mode") : 60111, S = a ? Symbol.for("react.concurrent_mode") : 60111, f = a ? Symbol.for("react.forward_ref") : 60112, E = a ? Symbol.for("react.suspense") : 60113, I = a ? Symbol.for("react.suspense_list") : 60120, F = a ? Symbol.for("react.memo") : 60115, V = a ? Symbol.for("react.lazy") : 60116, M = a ? Symbol.for("react.block") : 60121, N = a ? Symbol.for("react.fundamental") : 60117, U = a ? Symbol.for("react.responder") : 60118, Y = a ? Symbol.for("react.scope") : 60119;
  function z(i) {
    if (typeof i == "object" && i !== null) {
      var ee = i.$$typeof;
      switch (ee) {
        case D:
          switch (i = i.type, i) {
            case b:
            case S:
            case c:
            case l:
            case C:
            case E:
              return i;
            default:
              switch (i = i && i.$$typeof, i) {
                case d:
                case f:
                case V:
                case F:
                case x:
                  return i;
                default:
                  return ee;
              }
          }
        case k:
          return ee;
      }
    }
  }
  function q(i) {
    return z(i) === S;
  }
  return A.AsyncMode = b, A.ConcurrentMode = S, A.ContextConsumer = d, A.ContextProvider = x, A.Element = D, A.ForwardRef = f, A.Fragment = c, A.Lazy = V, A.Memo = F, A.Portal = k, A.Profiler = l, A.StrictMode = C, A.Suspense = E, A.isAsyncMode = function(i) {
    return q(i) || z(i) === b;
  }, A.isConcurrentMode = q, A.isContextConsumer = function(i) {
    return z(i) === d;
  }, A.isContextProvider = function(i) {
    return z(i) === x;
  }, A.isElement = function(i) {
    return typeof i == "object" && i !== null && i.$$typeof === D;
  }, A.isForwardRef = function(i) {
    return z(i) === f;
  }, A.isFragment = function(i) {
    return z(i) === c;
  }, A.isLazy = function(i) {
    return z(i) === V;
  }, A.isMemo = function(i) {
    return z(i) === F;
  }, A.isPortal = function(i) {
    return z(i) === k;
  }, A.isProfiler = function(i) {
    return z(i) === l;
  }, A.isStrictMode = function(i) {
    return z(i) === C;
  }, A.isSuspense = function(i) {
    return z(i) === E;
  }, A.isValidElementType = function(i) {
    return typeof i == "string" || typeof i == "function" || i === c || i === S || i === l || i === C || i === E || i === I || typeof i == "object" && i !== null && (i.$$typeof === V || i.$$typeof === F || i.$$typeof === x || i.$$typeof === d || i.$$typeof === f || i.$$typeof === N || i.$$typeof === U || i.$$typeof === Y || i.$$typeof === M);
  }, A.typeOf = z, A;
}
var tr;
function sr() {
  return tr || (tr = 1, process.env.NODE_ENV === "production" ? Te.exports = Wr() : Te.exports = Yr()), Te.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var je, nr;
function qr() {
  if (nr)
    return je;
  nr = 1;
  var a = Object.getOwnPropertySymbols, D = Object.prototype.hasOwnProperty, k = Object.prototype.propertyIsEnumerable;
  function c(l) {
    if (l == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(l);
  }
  function C() {
    try {
      if (!Object.assign)
        return !1;
      var l = new String("abc");
      if (l[5] = "de", Object.getOwnPropertyNames(l)[0] === "5")
        return !1;
      for (var x = {}, d = 0; d < 10; d++)
        x["_" + String.fromCharCode(d)] = d;
      var b = Object.getOwnPropertyNames(x).map(function(f) {
        return x[f];
      });
      if (b.join("") !== "0123456789")
        return !1;
      var S = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(f) {
        S[f] = f;
      }), Object.keys(Object.assign({}, S)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return je = C() ? Object.assign : function(l, x) {
    for (var d, b = c(l), S, f = 1; f < arguments.length; f++) {
      d = Object(arguments[f]);
      for (var E in d)
        D.call(d, E) && (b[E] = d[E]);
      if (a) {
        S = a(d);
        for (var I = 0; I < S.length; I++)
          k.call(d, S[I]) && (b[S[I]] = d[S[I]]);
      }
    }
    return b;
  }, je;
}
var Ae, ar;
function fr() {
  return ar || (ar = 1, Ae = Function.call.bind(Object.prototype.hasOwnProperty)), Ae;
}
var ke, or;
function Lr() {
  if (or)
    return ke;
  or = 1;
  var a = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var D = Me(), k = {}, c = fr();
    a = function(l) {
      var x = "Warning: " + l;
      typeof console < "u" && console.error(x);
      try {
        throw new Error(x);
      } catch {
      }
    };
  }
  function C(l, x, d, b, S) {
    if (process.env.NODE_ENV !== "production") {
      for (var f in l)
        if (c(l, f)) {
          var E;
          try {
            if (typeof l[f] != "function") {
              var I = Error(
                (b || "React class") + ": " + d + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof l[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw I.name = "Invariant Violation", I;
            }
            E = l[f](x, f, b, d, null, D);
          } catch (V) {
            E = V;
          }
          if (E && !(E instanceof Error) && a(
            (b || "React class") + ": type specification of " + d + " `" + f + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof E + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), E instanceof Error && !(E.message in k)) {
            k[E.message] = !0;
            var F = S ? S() : "";
            a(
              "Failed " + d + " type: " + E.message + (F ?? "")
            );
          }
        }
    }
  }
  return C.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (k = {});
  }, ke = C, ke;
}
var Ie, ir;
function Ur() {
  if (ir)
    return Ie;
  ir = 1;
  var a = sr(), D = qr(), k = Me(), c = fr(), C = Lr(), l = function() {
  };
  process.env.NODE_ENV !== "production" && (l = function(d) {
    var b = "Warning: " + d;
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  });
  function x() {
    return null;
  }
  return Ie = function(d, b) {
    var S = typeof Symbol == "function" && Symbol.iterator, f = "@@iterator";
    function E(t) {
      var u = t && (S && t[S] || t[f]);
      if (typeof u == "function")
        return u;
    }
    var I = "<<anonymous>>", F = {
      array: U("array"),
      bigint: U("bigint"),
      bool: U("boolean"),
      func: U("function"),
      number: U("number"),
      object: U("object"),
      string: U("string"),
      symbol: U("symbol"),
      any: Y(),
      arrayOf: z,
      element: q(),
      elementType: i(),
      instanceOf: ee,
      node: pe(),
      objectOf: ve,
      oneOf: de,
      oneOfType: oe,
      shape: ue,
      exact: G
    };
    function V(t, u) {
      return t === u ? t !== 0 || 1 / t === 1 / u : t !== t && u !== u;
    }
    function M(t, u) {
      this.message = t, this.data = u && typeof u == "object" ? u : {}, this.stack = "";
    }
    M.prototype = Error.prototype;
    function N(t) {
      if (process.env.NODE_ENV !== "production")
        var u = {}, h = 0;
      function m(R, p, y, g, P, T, B) {
        if (g = g || I, T = T || y, B !== k) {
          if (b) {
            var o = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw o.name = "Invariant Violation", o;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var X = g + ":" + y;
            !u[X] && // Avoid spamming the console because they are often not actionable except for lib authors
            h < 3 && (l(
              "You are manually calling a React.PropTypes validation function for the `" + T + "` prop on `" + g + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), u[X] = !0, h++);
          }
        }
        return p[y] == null ? R ? p[y] === null ? new M("The " + P + " `" + T + "` is marked as required " + ("in `" + g + "`, but its value is `null`.")) : new M("The " + P + " `" + T + "` is marked as required in " + ("`" + g + "`, but its value is `undefined`.")) : null : t(p, y, g, P, T);
      }
      var v = m.bind(null, !1);
      return v.isRequired = m.bind(null, !0), v;
    }
    function U(t) {
      function u(h, m, v, R, p, y) {
        var g = h[m], P = K(g);
        if (P !== t) {
          var T = Q(g);
          return new M(
            "Invalid " + R + " `" + p + "` of type " + ("`" + T + "` supplied to `" + v + "`, expected ") + ("`" + t + "`."),
            { expectedType: t }
          );
        }
        return null;
      }
      return N(u);
    }
    function Y() {
      return N(x);
    }
    function z(t) {
      function u(h, m, v, R, p) {
        if (typeof t != "function")
          return new M("Property `" + p + "` of component `" + v + "` has invalid PropType notation inside arrayOf.");
        var y = h[m];
        if (!Array.isArray(y)) {
          var g = K(y);
          return new M("Invalid " + R + " `" + p + "` of type " + ("`" + g + "` supplied to `" + v + "`, expected an array."));
        }
        for (var P = 0; P < y.length; P++) {
          var T = t(y, P, v, R, p + "[" + P + "]", k);
          if (T instanceof Error)
            return T;
        }
        return null;
      }
      return N(u);
    }
    function q() {
      function t(u, h, m, v, R) {
        var p = u[h];
        if (!d(p)) {
          var y = K(p);
          return new M("Invalid " + v + " `" + R + "` of type " + ("`" + y + "` supplied to `" + m + "`, expected a single ReactElement."));
        }
        return null;
      }
      return N(t);
    }
    function i() {
      function t(u, h, m, v, R) {
        var p = u[h];
        if (!a.isValidElementType(p)) {
          var y = K(p);
          return new M("Invalid " + v + " `" + R + "` of type " + ("`" + y + "` supplied to `" + m + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return N(t);
    }
    function ee(t) {
      function u(h, m, v, R, p) {
        if (!(h[m] instanceof t)) {
          var y = t.name || I, g = se(h[m]);
          return new M("Invalid " + R + " `" + p + "` of type " + ("`" + g + "` supplied to `" + v + "`, expected ") + ("instance of `" + y + "`."));
        }
        return null;
      }
      return N(u);
    }
    function de(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? l(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : l("Invalid argument supplied to oneOf, expected an array.")), x;
      function u(h, m, v, R, p) {
        for (var y = h[m], g = 0; g < t.length; g++)
          if (V(y, t[g]))
            return null;
        var P = JSON.stringify(t, function(B, o) {
          var X = Q(o);
          return X === "symbol" ? String(o) : o;
        });
        return new M("Invalid " + R + " `" + p + "` of value `" + String(y) + "` " + ("supplied to `" + v + "`, expected one of " + P + "."));
      }
      return N(u);
    }
    function ve(t) {
      function u(h, m, v, R, p) {
        if (typeof t != "function")
          return new M("Property `" + p + "` of component `" + v + "` has invalid PropType notation inside objectOf.");
        var y = h[m], g = K(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + p + "` of type " + ("`" + g + "` supplied to `" + v + "`, expected an object."));
        for (var P in y)
          if (c(y, P)) {
            var T = t(y, P, v, R, p + "." + P, k);
            if (T instanceof Error)
              return T;
          }
        return null;
      }
      return N(u);
    }
    function oe(t) {
      if (!Array.isArray(t))
        return process.env.NODE_ENV !== "production" && l("Invalid argument supplied to oneOfType, expected an instance of array."), x;
      for (var u = 0; u < t.length; u++) {
        var h = t[u];
        if (typeof h != "function")
          return l(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ne(h) + " at index " + u + "."
          ), x;
      }
      function m(v, R, p, y, g) {
        for (var P = [], T = 0; T < t.length; T++) {
          var B = t[T], o = B(v, R, p, y, g, k);
          if (o == null)
            return null;
          o.data && c(o.data, "expectedType") && P.push(o.data.expectedType);
        }
        var X = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new M("Invalid " + y + " `" + g + "` supplied to " + ("`" + p + "`" + X + "."));
      }
      return N(m);
    }
    function pe() {
      function t(u, h, m, v, R) {
        return H(u[h]) ? null : new M("Invalid " + v + " `" + R + "` supplied to " + ("`" + m + "`, expected a ReactNode."));
      }
      return N(t);
    }
    function ie(t, u, h, m, v) {
      return new M(
        (t || "React class") + ": " + u + " type `" + h + "." + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + v + "`."
      );
    }
    function ue(t) {
      function u(h, m, v, R, p) {
        var y = h[m], g = K(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + p + "` of type `" + g + "` " + ("supplied to `" + v + "`, expected `object`."));
        for (var P in t) {
          var T = t[P];
          if (typeof T != "function")
            return ie(v, R, p, P, Q(T));
          var B = T(y, P, v, R, p + "." + P, k);
          if (B)
            return B;
        }
        return null;
      }
      return N(u);
    }
    function G(t) {
      function u(h, m, v, R, p) {
        var y = h[m], g = K(y);
        if (g !== "object")
          return new M("Invalid " + R + " `" + p + "` of type `" + g + "` " + ("supplied to `" + v + "`, expected `object`."));
        var P = D({}, h[m], t);
        for (var T in P) {
          var B = t[T];
          if (c(t, T) && typeof B != "function")
            return ie(v, R, p, T, Q(B));
          if (!B)
            return new M(
              "Invalid " + R + " `" + p + "` key `" + T + "` supplied to `" + v + "`.\nBad object: " + JSON.stringify(h[m], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(t), null, "  ")
            );
          var o = B(y, T, v, R, p + "." + T, k);
          if (o)
            return o;
        }
        return null;
      }
      return N(u);
    }
    function H(t) {
      switch (typeof t) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !t;
        case "object":
          if (Array.isArray(t))
            return t.every(H);
          if (t === null || d(t))
            return !0;
          var u = E(t);
          if (u) {
            var h = u.call(t), m;
            if (u !== t.entries) {
              for (; !(m = h.next()).done; )
                if (!H(m.value))
                  return !1;
            } else
              for (; !(m = h.next()).done; ) {
                var v = m.value;
                if (v && !H(v[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function re(t, u) {
      return t === "symbol" ? !0 : u ? u["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && u instanceof Symbol : !1;
    }
    function K(t) {
      var u = typeof t;
      return Array.isArray(t) ? "array" : t instanceof RegExp ? "object" : re(u, t) ? "symbol" : u;
    }
    function Q(t) {
      if (typeof t > "u" || t === null)
        return "" + t;
      var u = K(t);
      if (u === "object") {
        if (t instanceof Date)
          return "date";
        if (t instanceof RegExp)
          return "regexp";
      }
      return u;
    }
    function ne(t) {
      var u = Q(t);
      switch (u) {
        case "array":
        case "object":
          return "an " + u;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + u;
        default:
          return u;
      }
    }
    function se(t) {
      return !t.constructor || !t.constructor.name ? I : t.constructor.name;
    }
    return F.checkPropTypes = C, F.resetWarningCache = C.resetWarningCache, F.PropTypes = F, F;
  }, Ie;
}
if (process.env.NODE_ENV !== "production") {
  var zr = sr(), Nr = !0;
  De.exports = Ur()(zr.isElement, Nr);
} else
  De.exports = Fr()();
var Vr = De.exports;
const _e = /* @__PURE__ */ kr(Vr), cr = ({ variant: a, backgroundColor: D, size: k, label: c, ...C }) => /* @__PURE__ */ Dr.jsx(
  Mr,
  {
    variant: a,
    backgroundColor: D,
    size: k,
    label: c,
    ...C,
    children: c
  }
);
cr.propTypes = {
  /**
   * What type of button to use?
   */
  variant: _e.oneOf(["primary", "secondary"]),
  /**
   * How large should the button be?
   */
  size: _e.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: _e.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: _e.func
};
cr.defaultProps = {
  variant: "primary",
  backgroundColor: null,
  size: "medium",
  onClick: void 0
};
export {
  cr as Button
};

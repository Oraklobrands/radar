/* @ds-bundle: {"format":4,"namespace":"OrakloDesignSystem_8ede4c","components":[{"name":"EditorialFooter","sourcePath":"components/brand/EditorialFooter.jsx"},{"name":"GlowBackground","sourcePath":"components/brand/GlowBackground.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"BlogCard","sourcePath":"components/content/BlogCard.jsx"},{"name":"GlassPill","sourcePath":"components/content/GlassPill.jsx"},{"name":"Highlight","sourcePath":"components/content/Highlight.jsx"},{"name":"ProjectCard","sourcePath":"components/content/ProjectCard.jsx"},{"name":"ServiceCard","sourcePath":"components/content/ServiceCard.jsx"},{"name":"ServiceRow","sourcePath":"components/content/ServiceRow.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"NewsletterInput","sourcePath":"components/forms/NewsletterInput.jsx"},{"name":"TextField","sourcePath":"components/forms/TextField.jsx"}],"sourceHashes":{"components/brand/EditorialFooter.jsx":"983bb157bed9","components/brand/GlowBackground.jsx":"b11e6a793b0c","components/brand/Logo.jsx":"cc5b5f8b4cc3","components/content/BlogCard.jsx":"49928d7b01e7","components/content/GlassPill.jsx":"df2f3683616c","components/content/Highlight.jsx":"9eb60992ae47","components/content/ProjectCard.jsx":"fa16549284b6","components/content/ServiceCard.jsx":"ea1bf00e80f5","components/content/ServiceRow.jsx":"cc95ec2f2546","components/core/Button.jsx":"6c892a6f7954","components/core/Icon.jsx":"bcc52390c9db","components/core/IconButton.jsx":"d5354d2c0d2a","components/forms/NewsletterInput.jsx":"06b0b8425054","components/forms/TextField.jsx":"0f2c31dc15cb","ui_kits/website/About.jsx":"07afc5686eae","ui_kits/website/Blog.jsx":"e9bd4f0bd72a","ui_kits/website/Contact.jsx":"3f176d6b69cc","ui_kits/website/Footer.jsx":"2c3fd15a9480","ui_kits/website/Header.jsx":"9e3052a16fe4","ui_kits/website/Hero.jsx":"29482042e60e","ui_kits/website/Services.jsx":"7bedb74e799c","ui_kits/website/Work.jsx":"47b7deae18d9"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.OrakloDesignSystem_8ede4c = window.OrakloDesignSystem_8ede4c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/EditorialFooter.jsx
try { (() => {
function EditorialFooter({
  left = "ORAKLO INTELIGÊNCIA DE MARCA",
  right = "ESTRATÉGIA.BRANDING",
  tone = "dark",
  fontSize = 12,
  style
}) {
  const c = tone === "dark" ? "#fff" : "#000";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: fontSize * 2.6,
      color: c,
      fontFamily: "var(--font-sans)",
      fontSize,
      letterSpacing: "var(--tracking-caps)",
      textTransform: "uppercase",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "55.4% 1fr"
    }
  }, /*#__PURE__*/React.createElement("span", null, left), /*#__PURE__*/React.createElement("span", null, right)), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 1,
      background: c
    }
  }));
}
Object.assign(__ds_scope, { EditorialFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/EditorialFooter.jsx", error: String((e && e.message) || e) }); }

// components/brand/GlowBackground.jsx
try { (() => {
const GRADS = {
  "dark-center": "radial-gradient(42% 30% at 50% 26%,#E7EEFD 0 40%,rgba(231,238,253,0) 72%),radial-gradient(75% 55% at 50% 30%,#2155E9 0 45%,#0A1946 75%,#000 100%)",
  "dark-top": "radial-gradient(38% 18% at 50% 0%,#E7EEFD 0 45%,rgba(231,238,253,0) 100%),radial-gradient(90% 75% at 50% 0%,#2155E9 0 40%,#0A1946 75%,#000 100%)",
  "dark-bottom": "radial-gradient(40% 22% at 50% 100%,#E7EEFD 0 40%,rgba(231,238,253,0) 100%),radial-gradient(95% 80% at 50% 100%,#2155E9 0 45%,#0A1946 80%,#000 100%)",
  "blue": "radial-gradient(45% 25% at 50% 0%,#E7EEFD 0 35%,rgba(231,238,253,0) 100%),radial-gradient(120% 100% at 50% 30%,#2155E9 0 60%,#1A44C2 100%)",
  "blue-to-white": "radial-gradient(120% 90% at 50% 0%,#2155E9 0 45%,#7394F1 70%,#E7EEFD 90%,#fff 100%)",
  "light": "radial-gradient(55% 60% at 50% 50%,#7394F1 0,#BDCCF8 45%,#E7EEFD 75%,#fff 100%)",
  "light-corners": "radial-gradient(55% 40% at 0% 0%,#2155E9 0,rgba(33,85,233,.45) 40%,rgba(255,255,255,0) 80%),radial-gradient(60% 45% at 100% 100%,#2155E9 0,rgba(33,85,233,.45) 40%,rgba(255,255,255,0) 80%),#fff",
  "blue-black": "linear-gradient(180deg,#2155E9 0%,#0A1946 65%,#000 100%)"
};
function GlowBackground({
  variant = "dark-center",
  grain = true,
  children,
  style,
  contentStyle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      overflow: "hidden",
      background: GRADS[variant] || GRADS["dark-center"],
      ...style
    }
  }, grain && /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      backgroundImage: "var(--grain)",
      opacity: "var(--grain-opacity)",
      mixBlendMode: "overlay",
      pointerEvents: "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: "100%",
      ...contentStyle
    }
  }, children));
}
Object.assign(__ds_scope, { GlowBackground });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/GlowBackground.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
const RATIO = {
  wordmark: 2366 / 568,
  symbol: 540 / 360
};
function Logo({
  variant = "wordmark",
  color = "black",
  height = 32,
  assetBase = "",
  style,
  alt = "Oraklo"
}) {
  const file = "oraklo-" + (variant === "symbol" ? "simbolo" : "wordmark") + "-" + ({
    black: "preto",
    white: "branco",
    blue: "azul"
  }[color] || "preto") + ".svg";
  return /*#__PURE__*/React.createElement("img", {
    src: assetBase + "assets/logo/" + file,
    alt: alt,
    height: height,
    width: Math.round(height * RATIO[variant === "symbol" ? "symbol" : "wordmark"]),
    style: {
      display: "block",
      ...style
    }
  });
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/content/BlogCard.jsx
try { (() => {
function BlogCard({
  title,
  author,
  image,
  tone = "dark",
  onClick,
  style
}) {
  const c = tone === "dark" ? "#fff" : "#000";
  return /*#__PURE__*/React.createElement("a", {
    onClick: onClick,
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 16,
      cursor: "pointer",
      textDecoration: "none",
      color: c,
      fontFamily: "var(--font-sans)",
      textAlign: "center",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "1.36",
      borderRadius: "var(--radius-lg)",
      background: image ? "url(" + image + ") center/cover" : "var(--ok-blue)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 26,
      lineHeight: 1.2,
      textWrap: "balance"
    }
  }, title), author && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600
    }
  }, "Por ", author));
}
Object.assign(__ds_scope, { BlogCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BlogCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Highlight.jsx
try { (() => {
function Highlight({
  children,
  variant = "blue",
  style
}) {
  const v = {
    blue: {
      color: "var(--ok-blue)"
    },
    "blue-underline": {
      color: "var(--ok-blue)",
      textDecoration: "underline",
      textDecorationThickness: ".06em",
      textUnderlineOffset: ".12em"
    },
    underline: {
      textDecoration: "underline",
      textDecorationThickness: ".06em",
      textUnderlineOffset: ".12em"
    },
    bold: {
      fontWeight: 700
    },
    "bold-underline": {
      fontWeight: 700,
      textDecoration: "underline",
      textDecorationThickness: ".06em",
      textUnderlineOffset: ".12em"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      ...v,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Highlight });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Highlight.jsx", error: String((e && e.message) || e) }); }

// components/content/ProjectCard.jsx
try { (() => {
function ProjectCard({
  title,
  image,
  onClick,
  width = 340,
  height = 440,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: "relative",
      width,
      height,
      flex: "none",
      padding: 0,
      border: 0,
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      cursor: "pointer",
      background: "var(--ok-blue)",
      fontFamily: "var(--font-sans)",
      textAlign: "left"
    }
  }, image && /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: "",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transition: "transform var(--dur-slow) var(--ease-out)",
      transform: h ? "scale(1.04)" : "none"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "auto 0 0 0",
      height: "45%",
      background: image ? "linear-gradient(180deg,rgba(33,85,233,0),rgba(33,85,233,.9))" : "none"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 24,
      bottom: 20,
      color: "#fff",
      fontSize: 32,
      lineHeight: 1.1,
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, title, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 24,
      transition: "transform var(--dur-base) var(--ease-out)",
      transform: h ? "translateX(4px)" : "none"
    }
  }, "\u203A")));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceCard.jsx
try { (() => {
function ServiceCard({
  title,
  description,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "minmax(0,.9fr) minmax(0,1.1fr)",
      gap: 32,
      alignItems: "center",
      padding: "28px 44px",
      minHeight: 124,
      boxSizing: "border-box",
      background: "var(--ok-navy)",
      border: "1px solid var(--ok-navy-line)",
      borderRadius: "var(--radius-xl)",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 30,
      lineHeight: 1.25,
      fontWeight: 500
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 19,
      lineHeight: 1.4
    }
  }, description));
}
Object.assign(__ds_scope, { ServiceCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceCard.jsx", error: String((e && e.message) || e) }); }

// components/content/ServiceRow.jsx
try { (() => {
function ServiceRow({
  index,
  title,
  description,
  tone = "dark",
  style
}) {
  const c = tone === "dark" ? "#fff" : "#000";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "64px minmax(0,1fr) minmax(0,300px)",
      columnGap: 24,
      alignItems: "start",
      padding: "28px 0 32px",
      borderTop: "1px solid " + c,
      color: c,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      paddingTop: 6
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32,
      lineHeight: 1.2,
      fontWeight: 400,
      textWrap: "balance"
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      lineHeight: 1.4
    }
  }, description));
}
Object.assign(__ds_scope, { ServiceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ServiceRow.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
/* Lucide icon geometry (lucide.dev, ISC) — 1.5px stroke to match Oraklo's thin arrows */
const PATHS = {
  "chevron-right": ["m9 18 6-6-6-6"],
  "chevron-left": ["m15 18-6-6 6-6"],
  "arrow-right": ["M5 12h14", "m12 5 7 7-7 7"],
  "arrow-down-right": ["m7 7 10 10", "M17 7v10H7"],
  "arrow-down": ["M12 5v14", "m19 12-7 7-7-7"],
  "lock": ["M7 11V7a5 5 0 0 1 10 0v4"],
  "chevron-down": ["m6 9 6 6 6-6"]
};
function Icon({
  name = "arrow-right",
  size = 20,
  strokeWidth = 1.5,
  color = "currentColor",
  style
}) {
  const p = PATHS[name] || PATHS["arrow-right"];
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: "block",
      flex: "none",
      ...style
    },
    "aria-hidden": "true"
  }, name === "lock" && /*#__PURE__*/React.createElement("rect", {
    width: "18",
    height: "11",
    x: "3",
    y: "11",
    rx: "2",
    ry: "2"
  }), name === "lock" && /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "16",
    r: "1"
  }), p.map((d, i) => /*#__PURE__*/React.createElement("path", {
    key: i,
    d: d
  })));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/content/GlassPill.jsx
try { (() => {
function GlassPill({
  label,
  locked = true,
  blurLabel = true,
  size = 1,
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 16 * size,
      height: 64 * size,
      padding: "0 " + 28 * size + "px 0 " + 22 * size + "px",
      borderRadius: "var(--radius-pill)",
      background: "var(--glass-fill)",
      border: "1.5px solid var(--glass-border)",
      backdropFilter: "blur(var(--glass-blur))",
      WebkitBackdropFilter: "blur(var(--glass-blur))",
      color: "#fff",
      fontFamily: "var(--font-sans)",
      fontSize: 24 * size,
      fontWeight: 700,
      ...style
    }
  }, locked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "lock",
    size: 30 * size,
    strokeWidth: 2
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      filter: blurLabel ? "blur(" + 4 * size + "px)" : "none",
      opacity: blurLabel ? .6 : 1
    }
  }, label));
}
Object.assign(__ds_scope, { GlassPill });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/GlassPill.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const SIZES = {
  sm: {
    h: 32,
    px: 24,
    fs: 13
  },
  md: {
    h: 48,
    px: 32,
    fs: 16
  },
  lg: {
    h: 64,
    px: 40,
    fs: 22
  }
};
function Button({
  variant = "glow",
  size = "md",
  children,
  chevron = false,
  disabled = false,
  onClick,
  href,
  style
}) {
  const s = SIZES[size] || SIZES.md;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 6,
    height: s.h,
    padding: "0 " + s.px + "px",
    borderRadius: "var(--radius-pill)",
    fontFamily: "var(--font-sans)",
    fontSize: s.fs,
    fontWeight: 500,
    letterSpacing: 0,
    cursor: disabled ? "default" : "pointer",
    textDecoration: "none",
    border: "1.5px solid transparent",
    transition: "transform var(--dur-fast) var(--ease-out), background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out)",
    opacity: disabled ? .4 : 1,
    whiteSpace: "nowrap"
  };
  const v = {
    glow: {
      background: "radial-gradient(120% 140% at 50% 0%,#FFFFFF 0,#E7EEFD 60%,#C9D6FA 100%)",
      color: "var(--ok-black)",
      boxShadow: "var(--shadow-glow-btn)"
    },
    solid: {
      background: "var(--ok-blue)",
      color: "var(--ok-white)"
    },
    outline: {
      background: "transparent",
      color: "var(--ok-blue)",
      borderColor: "var(--ok-blue)"
    },
    "outline-light": {
      background: "transparent",
      color: "var(--ok-white)",
      borderColor: "var(--ok-white)"
    },
    dark: {
      background: "var(--ok-black)",
      color: "var(--ok-white)"
    }
  }[variant] || {};
  const [hover, setHover] = React.useState(false),
    [press, setPress] = React.useState(false);
  const hv = hover && !disabled ? {
    glow: {
      boxShadow: "0 0 56px 14px rgba(231,238,253,.75)"
    },
    solid: {
      background: "var(--ok-blue-600)"
    },
    outline: {
      background: "var(--ok-blue)",
      color: "#fff"
    },
    "outline-light": {
      background: "#fff",
      color: "var(--ok-blue)"
    },
    dark: {
      background: "#1a1a1a"
    }
  }[variant] || {} : {};
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setPress(false);
    },
    onMouseDown: () => setPress(true),
    onMouseUp: () => setPress(false),
    style: {
      ...base,
      ...v,
      ...hv,
      transform: press ? "scale(.97)" : "none",
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, children), chevron && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: s.fs,
    strokeWidth: 2
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function IconButton({
  icon = "chevron-right",
  variant = "light",
  size = 32,
  onClick,
  label,
  style
}) {
  const [h, setH] = React.useState(false);
  const v = {
    light: {
      background: "#fff",
      color: "#000",
      border: "1.5px solid #fff"
    },
    solid: {
      background: "var(--ok-blue)",
      color: "#fff",
      border: "1.5px solid var(--ok-blue)"
    },
    outline: {
      background: "transparent",
      color: "var(--ok-blue)",
      border: "1.5px solid var(--ok-blue)"
    },
    dark: {
      background: "#000",
      color: "#fff",
      border: "1.5px solid #000"
    }
  }[variant];
  return /*#__PURE__*/React.createElement("button", {
    "aria-label": label || icon,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      borderRadius: "50%",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      cursor: "pointer",
      transition: "transform var(--dur-fast) var(--ease-out), opacity var(--dur-fast)",
      transform: h ? "scale(1.08)" : "none",
      ...v,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * .55),
    strokeWidth: 2
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/NewsletterInput.jsx
try { (() => {
function NewsletterInput({
  placeholder = "seu@email.com.br",
  onSubmit,
  style
}) {
  const [v, setV] = React.useState(""),
    [done, setDone] = React.useState(false);
  const go = e => {
    e && e.preventDefault();
    if (!v) return;
    setDone(true);
    onSubmit && onSubmit(v);
  };
  return /*#__PURE__*/React.createElement("form", {
    onSubmit: go,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: done ? "" : v,
    onChange: e => setV(e.target.value),
    placeholder: done ? "Inscrito ✓" : placeholder,
    type: "email",
    style: {
      flex: 1,
      minWidth: 0,
      height: 44,
      border: 0,
      borderRadius: "var(--radius-xs)",
      background: "#fff",
      padding: "0 16px",
      fontFamily: "inherit",
      fontSize: 14,
      outline: "none"
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "chevron-right",
    variant: "solid",
    size: 40,
    label: "Inscrever",
    onClick: go
  }));
}
Object.assign(__ds_scope, { NewsletterInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/NewsletterInput.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextField.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function TextField({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  multiline = false,
  rows = 4,
  type = "text",
  name,
  style
}) {
  const [f, setF] = React.useState(false);
  const field = {
    width: "100%",
    boxSizing: "border-box",
    background: "var(--surface-field)",
    border: "1px solid " + (f ? "var(--ok-blue)" : "transparent"),
    borderRadius: "var(--radius-xs)",
    padding: multiline ? "14px 16px" : "0 16px",
    height: multiline ? undefined : 44,
    fontFamily: "var(--font-sans)",
    fontSize: 14,
    color: "var(--ok-black)",
    outline: "none",
    resize: "none",
    transition: "border-color var(--dur-fast)"
  };
  const p = {
    name,
    placeholder,
    value,
    defaultValue,
    onChange,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: field
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontFamily: "var(--font-sans)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: "var(--ok-black)"
    }
  }, label), multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows
  }, p)) : /*#__PURE__*/React.createElement("input", _extends({
    type: type
  }, p)));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextField.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
function About() {
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "ok-grain",
    style: {
      background: "linear-gradient(180deg,#000 0%,#0A1946 22%,#2155E9 50%,#0A1946 80%,#000 100%)",
      color: "#fff",
      padding: "96px clamp(32px,8vw,120px) 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(340px,1fr))",
      gap: "clamp(40px,6vw,80px)",
      alignItems: "center",
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "Somos uma consultoria estrat\xE9gica de marca."), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 40,
      lineHeight: 1.15,
      fontWeight: 400
    }
  }, "Mais de 10 anos dedicados", /*#__PURE__*/React.createElement("br", null), "a construir marcas vivas"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: 1.4,
      maxWidth: 560
    }
  }, "Ajudamos neg\xF3cios a se expressarem com mais clareza e intelig\xEAncia, traduzindo o que fazem de melhor em marcas vivas, significativas e bem posicionadas no mercado."), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: "72px 0 0",
      fontSize: 14,
      lineHeight: 1.4,
      fontWeight: 600,
      maxWidth: 470
    }
  }, "Operamos de forma 100% remota  e conectamos cada projeto a uma rede qualificada de especialistas, garantindo solu\xE7\xF5es sob medida para cada desafio estrat\xE9gico.")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 600,
      borderRadius: 24,
      background: "url(../../assets/imagery/socios-duo-foto.png) center 30%/cover"
    }
  })));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Blog.jsx
try { (() => {
const {
  Button: BlogButton,
  BlogCard: BlogTeaser
} = window.OrakloDesignSystem_8ede4c;
function Blog() {
  const [msg, setMsg] = React.useState(null);
  const posts = [1, 2, 3].map(n => ({
    t: "Tipos latinamente brasileiros",
    a: "Guilherme Lacerda"
  }));
  return /*#__PURE__*/React.createElement("section", {
    id: "blog",
    style: {
      background: "#000",
      color: "#fff",
      padding: "64px 120px 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13
    }
  }, "Blog?"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 40,
      lineHeight: 1.15,
      fontWeight: 400
    }
  }, "Nossos conteudinhos", /*#__PURE__*/React.createElement("br", null), "est\xE3o aqui :)"), /*#__PURE__*/React.createElement(BlogButton, {
    variant: "solid",
    size: "sm",
    style: {
      minWidth: 180
    },
    onClick: () => setMsg("Abrindo o blog…")
  }, "Bora dale!")), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "64px auto 0"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "#bbb"
    }
  }, msg || "Últimas blogueiragens"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 80,
      marginTop: 40
    }
  }, posts.map((p, i) => /*#__PURE__*/React.createElement(BlogTeaser, {
    key: i,
    title: p.t,
    author: p.a
  })))));
}
window.Blog = Blog;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Blog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
const {
  TextField: CField,
  Button: CButton,
  IconButton: CArrow
} = window.OrakloDesignSystem_8ede4c;
function Contact() {
  const [sent, setSent] = React.useState(false);
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    className: "ok-grain",
    style: {
      background: "radial-gradient(30% 30% at 100% 0%,#2155E9 0,rgba(33,85,233,.4) 45%,rgba(255,255,255,0) 100%),#fff",
      padding: "88px 120px 120px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "minmax(0,720px) 1fr",
      gap: 120,
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 56px",
      fontSize: 72,
      fontWeight: 400,
      color: "var(--ok-blue)",
      lineHeight: 1
    }
  }, "Fale com a gente"), sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 28,
      lineHeight: 1.3,
      minHeight: 420
    }
  }, "Recebemos sua mensagem.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ok-blue)"
    }
  }, "A gente responde em breve.")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      columnGap: 24,
      rowGap: 28
    }
  }, /*#__PURE__*/React.createElement(CField, {
    label: "Nome",
    placeholder: "Seu Nome Completo"
  }), /*#__PURE__*/React.createElement(CField, {
    label: "Nome da Empresa",
    placeholder: "Nome da Empresa"
  }), /*#__PURE__*/React.createElement(CField, {
    label: "Telefone",
    placeholder: "+55 21 91234-5647"
  }), /*#__PURE__*/React.createElement(CField, {
    label: "Tamanho da equipe",
    placeholder: "Quantidade de Colaboradores"
  }), /*#__PURE__*/React.createElement(CField, {
    label: "E-mail",
    placeholder: "seu@email.com.br"
  }), /*#__PURE__*/React.createElement(CField, {
    label: "Cargo",
    placeholder: "Seu cargo na empresa"
  }), /*#__PURE__*/React.createElement(CField, {
    label: "Mais informa\xE7\xF5es",
    multiline: true,
    rows: 4,
    placeholder: "Fique \xE0 vontade para encher isso aqui com as informa\xE7\xF5es que voc\xEA acha necess\xE1rio",
    style: {
      gridColumn: "span 2"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 4,
      alignItems: "center",
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement(CButton, {
    variant: "outline",
    size: "sm",
    chevron: true,
    onClick: () => setSent(true),
    style: {
      minWidth: 190
    }
  }, "Enviar"), /*#__PURE__*/React.createElement(CArrow, {
    icon: "chevron-right",
    variant: "outline",
    size: 32,
    onClick: () => setSent(true)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 24,
      background: "var(--ok-blue)",
      minHeight: 600
    }
  })));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
const {
  NewsletterInput: FNews,
  Logo: FLogo
} = window.OrakloDesignSystem_8ede4c;
function SiteFooter({
  onNav
}) {
  const l = {
    color: "#fff",
    fontSize: 13,
    background: "none",
    border: 0,
    padding: 0,
    cursor: "pointer",
    fontFamily: "inherit",
    textAlign: "left"
  };
  return /*#__PURE__*/React.createElement("footer", {
    className: "ok-grain",
    style: {
      background: "radial-gradient(80% 60% at 50% 100%,#2155E9 0,#0A1946 55%,#000 85%)",
      color: "#fff",
      padding: "56px 120px 48px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth: 1200,
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement(FLogo, {
    variant: "wordmark",
    color: "white",
    height: 288,
    assetBase: "../../",
    style: {
      width: "100%",
      height: "auto"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 300px 160px",
      alignItems: "end",
      gap: 40,
      marginTop: 48
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 28,
      maxWidth: 420
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 32,
      lineHeight: 1.2
    }
  }, "Inscreva seu e-mail para", /*#__PURE__*/React.createElement("br", null), "receber nossos conte\xFAdos"), /*#__PURE__*/React.createElement(FNews, null)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      rowGap: 16,
      alignSelf: "start",
      marginTop: 8
    }
  }, [["Serviços", "services"], ["Blog", "blog"], ["Trabalhos", "work"], ["Contato", "contact"], ["Sobre Nós", "about"]].map(([t, id]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    style: l,
    onClick: () => onNav(id)
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 16,
      justifyContent: "flex-end"
    }
  }, ["pinterest", "behance", "instagram"].map(s => /*#__PURE__*/React.createElement("a", {
    key: s,
    href: "#",
    "aria-label": s
  }, /*#__PURE__*/React.createElement("img", {
    src: "https://cdn.simpleicons.org/" + s + "/ffffff",
    width: "22",
    height: "22",
    alt: s
  })))))));
}
window.SiteFooter = SiteFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
const {
  Icon: HdrIcon
} = window.OrakloDesignSystem_8ede4c;
function SiteHeader({
  onNav
}) {
  const [open, setOpen] = React.useState(false);
  const items = [["Trabalhos", "work"], ["Sobre nós", "about"], ["Blog", "blog"], ["Contato", "contact"]];
  const link = {
    color: "#fff",
    fontSize: 15,
    cursor: "pointer",
    background: "none",
    border: 0,
    fontFamily: "inherit",
    padding: 0,
    display: "flex",
    alignItems: "center",
    gap: 4
  };
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 5,
      display: "flex",
      justifyContent: "center",
      gap: 40,
      padding: "32px 0"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    },
    onMouseLeave: () => setOpen(false)
  }, /*#__PURE__*/React.createElement("button", {
    style: link,
    onMouseEnter: () => setOpen(true),
    onClick: () => onNav("services")
  }, "Servi\xE7os ", /*#__PURE__*/React.createElement(HdrIcon, {
    name: "chevron-down",
    size: 14
  })), open && /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 26,
      left: -20,
      padding: "14px 20px",
      borderRadius: 16,
      background: "rgba(255,255,255,.12)",
      backdropFilter: "blur(14px)",
      border: "1px solid rgba(255,255,255,.3)",
      display: "flex",
      flexDirection: "column",
      gap: 10,
      width: 200
    }
  }, window.SERVICES.map(s => /*#__PURE__*/React.createElement("button", {
    key: s[0],
    style: {
      ...link,
      fontSize: 14
    },
    onClick: () => onNav("services")
  }, s[1].replace("<br/>", " "))))), items.map(([l, id]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    style: link,
    onClick: () => onNav(id)
  }, l)));
}
window.SiteHeader = SiteHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
const {
  Button: HeroButton,
  Highlight: HeroHL
} = window.OrakloDesignSystem_8ede4c;
function Hero({
  onCta
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      height: 1040,
      background: "#000",
      overflow: "hidden"
    },
    className: "ok-grain"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(34% 20% at 50% 72%,#FFFFFF 0,#E7EEFD 35%,rgba(231,238,253,0) 100%),radial-gradient(85% 85% at 50% 70%,#2155E9 0 40%,#1A44C2 60%,#0A1946 85%,#000 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "-15%",
      right: "-15%",
      top: 740,
      height: 900,
      borderRadius: "50%",
      background: "#000",
      zIndex: 2
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 3,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingTop: 200,
      gap: 120,
      textAlign: "center",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 72,
      lineHeight: 1.12,
      fontWeight: 400,
      letterSpacing: "-0.01em"
    }
  }, "Consultoria de", /*#__PURE__*/React.createElement("br", null), "Estrat\xE9gia e", /*#__PURE__*/React.createElement("br", null), "Design de Marcas"), /*#__PURE__*/React.createElement(HeroButton, {
    variant: "glow",
    size: "lg",
    onClick: onCta
  }, "Bora dale!")), /*#__PURE__*/React.createElement("p", {
    style: {
      position: "absolute",
      zIndex: 3,
      left: 0,
      right: 0,
      top: 808,
      margin: 0,
      textAlign: "center",
      color: "#fff",
      fontSize: 28,
      lineHeight: 1.3,
      fontWeight: 500
    }
  }, "Marca \xE9 ", /*#__PURE__*/React.createElement(HeroHL, {
    style: {
      color: "#3D6BF0"
    }
  }, "ativo estrat\xE9gico"), " para crescer", /*#__PURE__*/React.createElement("br", null), "com mais ", /*#__PURE__*/React.createElement(HeroHL, {
    style: {
      color: "#3D6BF0"
    }
  }, "vantagem no mercado"), "."));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
window.SERVICES = [["01", "Posicionamento", "Definimos em qual prateleira sua marca deseja estar situada na mente das pessoas."], ["02", "Naming", "Criamos o nome que impulsiona seu negócio e torna a sua marca única e memorável."], ["03", "Branding", "Construímos do começo ou redesenhamos a sua marca para um novo ciclo de crescimento."], ["04", "Identidade Visual<br/>e Verbal", "Desenvolvemos a linguagem visual e tom de voz que expressam o valor da sua marca."], ["05", "Direção Criativa", "Orientamos as escolhas criativas em campanhas, eventos e projetos especiais."], ["06", "Design Estratégico", "Projetamos o design visual e verbal para embalagens, editorial e peças estratégicas."]];
const {
  ServiceRow: SvcRow
} = window.OrakloDesignSystem_8ede4c;
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "ok-grain",
    style: {
      background: "radial-gradient(70% 60% at 50% 45%,#2155E9 0 55%,#4E77EE 80%,#BDCCF8 100%)",
      padding: "96px 0 120px",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: "0 0 64px",
      textAlign: "center",
      fontSize: 44,
      fontWeight: 400
    }
  }, "No que somos bons!"), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960,
      margin: "0 auto",
      padding: "0 48px",
      position: "relative",
      zIndex: 2
    }
  }, window.SERVICES.map(([n, t, d]) => /*#__PURE__*/React.createElement(SvcRow, {
    key: n,
    index: n,
    title: /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: t
      }
    }),
    description: d
  }))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
const {
  Button: WorkButton,
  ProjectCard: WorkCard,
  IconButton: WorkArrow
} = window.OrakloDesignSystem_8ede4c;
const WORK = [["Tropzz"], ["Mais Braza"], ["Imparáveis"], ["Projeto 4"], ["Projeto 5"]];
function Work({
  onCta
}) {
  const [i, setI] = React.useState(0);
  const W = 432,
    G = 48;
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    className: "ok-grain",
    style: {
      background: "radial-gradient(70% 40% at 50% 100%,#2155E9 0,#7394F1 35%,#E7EEFD 65%,#fff 85%)",
      padding: "96px 0 40px",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: 24,
      position: "relative",
      zIndex: 2
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 72,
      lineHeight: 1.05,
      fontWeight: 300,
      color: "var(--ok-blue)"
    }
  }, "\xC9 assim que", /*#__PURE__*/React.createElement("br", null), "vamos te ajudar!"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 20,
      lineHeight: 1.35
    }
  }, "Estruturamos marcas para competir com", /*#__PURE__*/React.createElement("br", null), "mais vantagem e relev\xE2ncia no mercado."), /*#__PURE__*/React.createElement(WorkButton, {
    variant: "outline",
    size: "sm",
    onClick: onCta,
    style: {
      minWidth: 180
    }
  }, "Bora dale!")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      marginTop: 72,
      height: 560
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: G,
      position: "absolute",
      left: 0,
      transform: "translateX(" + (150 - (W + G) - (W + G) * i) + "px)",
      transition: "transform 700ms var(--ease-out)"
    }
  }, [["", null], ...WORK].map(([t, img], k) => k === 0 ? /*#__PURE__*/React.createElement("div", {
    key: "pad",
    style: {
      width: W,
      height: 560,
      borderRadius: 24,
      background: "var(--ok-blue)"
    }
  }) : /*#__PURE__*/React.createElement(WorkCard, {
    key: t,
    title: t,
    image: img,
    width: W,
    height: 560
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      display: "flex",
      justifyContent: "space-between",
      padding: "32px 120px 0"
    }
  }, /*#__PURE__*/React.createElement(WorkArrow, {
    icon: "chevron-left",
    label: "Anterior",
    onClick: () => setI(Math.max(0, i - 1))
  }), /*#__PURE__*/React.createElement(WorkArrow, {
    icon: "chevron-right",
    label: "Pr\xF3ximo",
    onClick: () => setI(Math.min(WORK.length - 3, i + 1))
  })));
}
window.Work = Work;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.EditorialFooter = __ds_scope.EditorialFooter;

__ds_ns.GlowBackground = __ds_scope.GlowBackground;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.BlogCard = __ds_scope.BlogCard;

__ds_ns.GlassPill = __ds_scope.GlassPill;

__ds_ns.Highlight = __ds_scope.Highlight;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.ServiceCard = __ds_scope.ServiceCard;

__ds_ns.ServiceRow = __ds_scope.ServiceRow;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.NewsletterInput = __ds_scope.NewsletterInput;

__ds_ns.TextField = __ds_scope.TextField;

})();

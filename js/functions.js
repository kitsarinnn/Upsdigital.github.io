$.fn.exists = function () {
  return this.length > 0;
};
var mobile = !1;
function checkTheDevice() {
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  ) || window.innerWidth < 992
    ? ((mobile = !0),
      document.body.classList.add("mobile"),
      document
        .querySelectorAll(".animated")
        .forEach((e) => e.classList.add("visible")))
    : ((mobile = !1), document.body.classList.remove("mobile"));
}
checkTheDevice(),
  (window.onresize = function () {
    checkTheDevice();
  });
var isOpera =
    (!!window.opr && !!opr.addons) ||
    !!window.opera ||
    navigator.userAgent.indexOf(" OPR/") >= 0,
  isFirefox = "undefined" != typeof InstallTrigger,
  isSafari =
    /constructor/i.test(window.HTMLElement) ||
    "[object SafariRemoteNotification]" ===
      (!window.safari || safari.pushNotification).toString(),
  isIE = !!document.documentMode,
  isEdge = !isIE && !!window.StyleMedia,
  isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
  isBlink = (isChrome || isOpera) && !!window.CSS,
  isParallaxBrowsers = isOpera || isFirefox || isBlink || isChrome;
function detectWindowHeightChange(e, t) {
  var a,
    i = e.clientHeight;
  !(function o() {
    (a = e.clientHeight),
      i != a && t(),
      (i = a),
      e.onElementHeightChangeTimer &&
        clearTimeout(e.onElementHeightChangeTimer),
      (e.onElementHeightChangeTimer = setTimeout(o, 200));
  })();
}
if (
  (isIE && $("body").addClass("ie-browser"),
  isEdge && $("body").addClass("edge-browser"),
  !0 === mobile)
);
else {
  var parallaxElem = document.querySelectorAll(".parallax");
  Array.prototype.forEach.call(parallaxElem, function (e) {
    e.parentNode.classList.add("has-parallax");
  });
  var s = skrollr.init({ forceHeight: !1, smoothScrolling: !1 });
  function showHideExtraNav() {
    if (!1 === mobile) {
      var e = $(window).scrollTop(),
        t = $(".extra-nav"),
        a = t.attr("data-showme"),
        i = t.attr("data-hideme");
      if ($(i).exists() && $(a).exists()) {
        var o = $(a).offset().top,
          n = $(i).offset().top;
        $(window).width() > 700 &&
          (e >= o - 60 && e <= n - 60
            ? $(t).slideDown(150).removeClass("hiding")
            : $(t).addClass("hiding").slideUp(150));
      } else
        $(t)
          .slideDown(150)
          .removeClass("hiding")
          .find("ul.nav")
          .html(
            '<li class="colored d-flex align-items-center">Extra Navigation is here! Please check the data-showme and data-hideme areas. This page does not have these links.</li>'
          );
    }
  }
  $("body").addClass("stable"),
    $(window).on("scroll", function () {
      $("body").hasClass("stable") &&
        (setTimeout(function () {
          isParallaxBrowsers && s.refresh();
        }, 500),
        window.dispatchEvent(new Event("resize")),
        $("body").removeClass("stable"));
    }),
    $(window).on("scroll", function () {
      showHideExtraNav();
    }),
    detectWindowHeightChange(document.body, function () {
      Waypoint.refreshAll(),
        setTimeout(function () {
          isParallaxBrowsers && s.refresh();
        }, 200);
    });
}
function isRetina() {
  return (
    (window.matchMedia &&
      (window.matchMedia(
        "only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)"
      ).matches ||
        window.matchMedia(
          "only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)"
        ).matches)) ||
    (window.devicePixelRatio && window.devicePixelRatio > 1.3)
  );
}
isRetina() &&
  ($("body").addClass("retina-device"),
  $("[data-retina]").each(function () {
    $(this);
    var e = $(this).attr("data-retina");
    $(this).attr("src", e);
  })),
  (lazyLoadAll = "[data-bg]:not(.bg-mobiled), [data-src]");
var LazyLoad = new LazyLoad({ elements_selector: lazyLoadAll });
window.lazyLoadOptions = { threshold: 0 };
var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  ),
  popoverList = popoverTriggerList.map(function (e) {
    return new bootstrap.Popover(e);
  });
$(".custom-slider").exists() &&
  rdy &&
  ($(".custom-slider").each(function () {
    var e = $(this);
    $(e)
      .slick({
        fade: !0,
        dots: !1,
        arrows: !1,
        autoplay: !1,
        autoplaySpeed: 3e3,
        pauseOnHover: !0,
        lazyLoad: "ondemand",
        infinite: !0,
        rtl: !1,
        edgeFriction: 0.35,
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
        touchThreshold: 150,
        speed: 400,
        waitForAnimate: !0,
        slidesToShow: 1,
        initialSlide: 0,
        draggable: !1,
        adaptiveHeight: !0,
        variableWidth: !1,
        prevArrow:
          '<div class="slider-prev d-flex align-items-center justify-content-center"></div>',
        nextArrow:
          '<div class="slider-next d-flex align-items-center justify-content-center"></div>',
        centerMode: !1,
        slidesToScroll: 1,
        setPosition: 1,
        swipe: !0,
        touchMove: !0,
        rows: 0,
        responsive: [
          { breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1 } },
          { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
      })
      .on("afterChange", function (t, a, i, o) {
        $(e).find(".animate");
        var n = $(e).find(".slick-current .animate"),
          s = $(e).find(".slick-slide:not(.slick-current) .animate");
        Waypoint.refreshAll(),
          $(n).each(function () {
            var e = $(this),
              t = e.data("animation"),
              a = e.data("animation-delay");
            setTimeout(function () {
              e.addClass(t + " visibleme");
            }, a);
          }),
          $(s).each(function () {
            var e = $(this),
              t = e.data("animation");
            e.removeClass(t + "visibleme");
          }),
          $(".slick-current video").each(function () {
            this.play();
          }),
          $(".slick-slide:not(.slick-current) video").each(function () {
            this.pause();
          }),
          $(e).find(".slick-current .zoom-timer").addClass("scaling"),
          document.querySelectorAll(".slick-current animate").forEach((e) => {
            e.beginElement();
          });
      })
      .on("beforeChange", function (t, a, i, o) {
        Waypoint.refreshAll();
        $(e).find(".animate");
        var n = $(e).find(".slick-slide:not(.slick-current) .animate");
        (n = $(e).find(".slick-slide:not(.slick-current) .animate")),
          $(e).find(".animate");
        $(n).each(function () {
          var e = $(this),
            t = e.data("animation");
          e.data("animation-delay");
          $(e).removeClass(t + " visibleme");
        }),
          $(e).find(".zoom-timer").removeClass("scaling");
        var s = $("[data-slick-index=" + o + "]");
        $(s).hasClass("nav-to--dark") &&
          $(".modern-nav")
            .removeClass("details-white")
            .addClass("details-dark"),
          $(s).hasClass("nav-to--white") &&
            $(".modern-nav")
              .removeClass("details-dark")
              .addClass("details-white");
      });
  }),
  $(".custom-slider").on("touchstart touchmove touchend", function () {
    $(".custom-slider").slick("slickSetOption", "swipe", !0);
  }),
  $(".custom-slider").find(".slick-current .zoom-timer").addClass("scaling"),
  $(".custom-slider .slick-current .animate").each(function () {
    var e = $(this),
      t = e.data("animation"),
      a = e.data("animation-delay");
    $(e).removeClass(t),
      setTimeout(function () {
        e.addClass(t + " visibleme");
      }, a);
  }),
  $("[data-slider-control]").on("click", function () {
    var e = $(this).attr("data-slider-control");
    "prev" === $(this).data("slider-dir") && $(e).slick("slickPrev"),
      "next" === $(this).data("slider-dir") && $(e).slick("slickNext");
  }));
var $grid = $(".grid-layout");
$($grid).each(function () {
  var e = $(this).attr("data-default-filter");
  $(this).isotope({ filter: e });
}),
  $("[data-filter]").on("click", function () {
    var e = $(this).attr("data-filter"),
      t = $(this).attr("data-target-layout");
    return (
      "#wwd" == t
        ? $(t).isotope({
            filter: e,
            itemSelector: ".item",
            hiddenStyle: { opacity: 0 },
            visibleStyle: { opacity: 1 },
            transformsEnabled: !1,
          })
        : $(t).isotope({
            filter: e,
            itemSelector: ".item",
            transitionDuration: "0.8s",
          }),
      $("[data-filter]").each(function () {
        $(this).attr("data-target-layout") === t &&
          $(this).removeClass("active");
      }),
      $(this).addClass("active"),
      setTimeout(function () {
        isParallaxBrowsers && !1 === mobile && s.refresh();
      }, 50),
      !1
    );
  }),
  $(window).resize(function () {
    $($grid).isotope("layout");
  }),
  $(window).on("load", function () {
    "use strict";
    if (rdy) {
      $(".controls-mouseover").exists() &&
        $(".controls-mouseover").each(function () {
          var e = $(this).attr("id"),
            t = $('[data-slider-control="#' + e + '"]');
          t.addClass("hiding"),
            $(this, t).on("mouseenter", function () {
              $(t).addClass("showing"), $(t).removeClass("hiding");
            }),
            $(this, t).on("mouseleave", function () {
              $(t).removeClass("showing"), $(t).addClass("hiding");
            });
        }),
        $(".progress-bar").exists() &&
          $(".progress-bar").each(function () {
            var e = $(this);
            $(e).waypoint(
              function () {
                var t = $(e).attr("data-value");
                $(e).animate({ width: t + "%" }, 600), this.destroy();
              },
              { offset: "90%" }
            );
          }),
        ($.fn.animatedItems = function () {
          !1 === mobile &&
            ($(".animated").each(function () {
              var e = $(this),
                t = e.data("animation"),
                a = e.data("animation-delay");
              $(e).waypoint(
                function () {
                  !e.hasClass("visible") && t
                    ? a
                      ? setTimeout(function () {
                          e.addClass(t + " visible");
                        }, a)
                      : e.addClass(t + " visible")
                    : e.addClass("visible");
                },
                { offset: "93%" }
              );
            }),
            $(".animated-container").each(function () {
              var e = $(this);
              $(e)
                .find("[data-animation-delay]")
                .each(function () {
                  var t = $(this),
                    a = $(this).data("animation"),
                    i = t.data("animation-delay");
                  $(e).waypoint(
                    function () {
                      !t.hasClass("visible") && a
                        ? i
                          ? setTimeout(function () {
                              t.addClass(a + " visible");
                            }, i)
                          : t.addClass(a + " visible")
                        : t.addClass("visible");
                    },
                    { offset: "93%" }
                  );
                });
            }));
        }),
        $("body").animatedItems(),
        (function () {
          var e = document.querySelectorAll(".has-overlay-hover");
          Array.prototype.forEach.call(e, function (e) {
            var t = e.querySelectorAll(".animated-hover");
            function a() {
              Array.prototype.forEach.call(t, function (e) {
                var t = e.getAttribute("data-animation-delay"),
                  a = e.getAttribute("data-animation");
                setTimeout(function () {
                  e.classList.add(a, "visible");
                }, t);
              });
            }
            e.addEventListener("mouseenter", a),
              e.addEventListener("touchstart", a),
              e.addEventListener("mouseleave", function () {
                Array.prototype.forEach.call(t, function (e) {
                  e.getAttribute("data-animation-delay");
                  var t = e.getAttribute("data-animation");
                  e.classList.remove(t, "visible");
                });
              });
          });
        })(),
        document.querySelectorAll(".acc-bar").forEach((e) =>
          e.addEventListener("click", function () {
            document
              .querySelectorAll("[aria-expanded='false']")
              .forEach((e) => e.classList.remove("active")),
              "true" === e.getAttribute("aria-expanded") &&
                e.classList.add("active");
          })
        ),
        inView(".active-inview")
          .on("enter", (e) => {
            e.classList.add("active");
          })
          .on("exit", (e) => {
            e.classList.remove("active");
          }),
        document.querySelectorAll(".stay").forEach((e) =>
          e.addEventListener("click", function (e) {
            e.preventDefault();
          })
        ),
        (function () {
          var e = document.querySelectorAll(".has-overlay-hover");
          Array.prototype.forEach.call(e, function (e) {
            var t = e.querySelectorAll(".animated-hover");
            function a() {
              Array.prototype.forEach.call(t, function (e) {
                var t = e.getAttribute("data-animation-delay"),
                  a = e.getAttribute("data-animation");
                setTimeout(function () {
                  e.classList.add(a, "visible");
                }, t);
              });
            }
            e.addEventListener("mouseenter", a),
              e.addEventListener("touchstart", a),
              e.addEventListener("mouseleave", function () {
                Array.prototype.forEach.call(t, function (e) {
                  e.getAttribute("data-animation-delay");
                  var t = e.getAttribute("data-animation");
                  e.classList.remove(t, "visible");
                });
              });
          });
        })(),
        ($.fn.countTo = function (e) {
          e = $.extend({}, $.fn.countTo.defaults, e || {});
          var t = Math.ceil(e.speed / e.refreshInterval),
            a = (e.to - e.from) / t;
          return $(this).each(function () {
            var i = this,
              o = 0,
              n = e.from,
              s = setInterval(function () {
                (n += a),
                  o++,
                  $(i).html(
                    n.toFixed(e.decimals).replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                  ),
                  "function" == typeof e.onUpdate && e.onUpdate.call(i, n);
                o >= t &&
                  (clearInterval(s),
                  (n = e.to),
                  "function" == typeof e.onComplete && e.onComplete.call(i, n));
              }, e.refreshInterval);
          });
        }),
        ($.fn.countTo.defaults = {
          from: 0,
          to: 100,
          speed: 1e3,
          refreshInterval: 100,
          decimals: 0,
          onUpdate: null,
          onComplete: null,
        }),
        $(".fact").each(function () {
          $(this).waypoint(
            function () {
              var e = $(this.element).attr("data-source");
              $(this.element)
                .find(".factor")
                .countTo({ from: 0, to: e, speed: 1600, refreshInterval: 10 }),
                this.destroy();
            },
            { offset: "100%" }
          );
        }),
        ($.fn.digits = function () {
          return this.each(function () {
            $(this).text(
              $(this)
                .text()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            );
          });
        }),
        $(".digits").digits(),
        $(".cookie").exists() &&
          $(".cookie").each(function () {
            var e = $(this),
              t = $(e).attr("id"),
              a = e.find(".close");
            if (null == $.cookie(t)) {
              var i = $(e).data("expire");
              $(a).on("click", function () {
                $.cookie(t, "yes", { expires: i, path: "/" }),
                  $("body")
                    .addClass(t + "-cookie-in-expire-time")
                    .removeClass("cookie-activated"),
                  e.fadeOut(300);
              }),
                e.hasClass("modal")
                  ? (setTimeout(function () {
                      $(e).modal("show");
                    }, 100),
                    $(e).on("click", function (a) {
                      $.cookie(t, "yes", { expires: i, path: "/" }),
                        $(e)
                          .find(".modal-dialog")
                          .on("click", function () {
                            event.stopPropagation(a);
                          });
                    }))
                  : (e.show().addClass("cookie-active"),
                    $("body").addClass("cookie-activated"));
            } else e.addClass("cookie-in-expire-time"), $("body").addClass(t + "-cookie-in-expire-time");
          }),
        $(".alert .close").click(function () {
          return (
            $(this).parent().animate({ opacity: "0" }, 300).slideUp(300), !1
          );
        });
      var e = $(".page-loader"),
        t = e.find(".loader");
      setTimeout(function () {
        e.addClass("page-loader--fading-out"),
          t.addClass("page-loader--fading-out");
      }, 100),
        setTimeout(function () {
          e.removeClass("page-loader--fading-out").addClass(
            "page-loader--hidden"
          );
        }, 800);
      var a = $(".modern-nav"),
        i = $(".modern-nav.sticky"),
        o = $(".hide-by-scroll");
      $(i).sticky({ topSpacing: 0 });
      var n = document.querySelector(".modern-nav .nav-menu") || !1;
      if (n)
        if (
          n.querySelector(
            "a[href^='#']:not([href='#']):not(.no-scroll):not([data-slide]):not([data-toggle])"
          )
        )
          new bootstrap.ScrollSpy(document.body, {
            target: ".modern-nav .nav-menu",
            offset: 150,
          });
      function c() {
        if ($(window).scrollTop() > 70) {
          if (
            ($(a).hasClass("sticky") || $(a).hasClass("fixed")) &&
            ($(a).addClass("scrolled"),
            ($(".modern-nav .top-bar:not(.cookie)").exists() ||
              $(".modern-nav.has-header-cookie-bar .cookie-active").exists()) &&
              !1 === mobile)
          ) {
            var e = $(".modern-nav .top-bar").outerHeight();
            $(a).css({
              "-webkit-transform": "translateY(-" + e + "px)",
              transform: "translateY(-" + e + "px)",
            });
          }
        } else {
          $(a).removeClass("scrolled");
          e = $(".modern-nav .top-bar").outerHeight();
          $(a).css({ "-webkit-transform": "none", transform: "none" });
        }
      }
      $(".modern-nav").on("mouseenter", function () {
        $(".modern-nav").addClass("mouseover");
      }),
        $(".modern-nav").on("mouseleave", function () {
          $(".modern-nav").removeClass("mouseover");
        }),
        c();
      var s,
        r = function () {
          var e = $(".nav-menu").find("a").parents("li"),
            t = $(".nav-menu").find("a.active").parents("li");
          $(e).removeClass("active"),
            $(t).addClass("active"),
            c(),
            $(window).scrollTop() + $(window).height() ===
              $(document).height() && $(o).removeClass("hiding");
        },
        d = !1;
      $(window).on("scroll", function () {
        d ||
          ((d = !0),
          clearTimeout(s),
          r(),
          setTimeout(function () {
            d = !1;
          }, 50),
          (s = setTimeout(function () {
            r();
          }, 50)));
      }),
        $(".modern-nav .dd-toggle").each(function () {
          var e = 992,
            t = $(this),
            i = null;
          $(this).on("mouseenter", function () {
            if ($(window).width() > e) {
              window.clearTimeout(i);
              var t = $(this),
                o = $(t).find(">.dropdown-menu");
              $(o).stop(!0, !0).addClass("d-flex"),
                $(".modern-nav .dd-toggle")
                  .not(t)
                  .not($(this).parents(".dd-toggle"))
                  .not($(this).find(".dd-toggle"))
                  .find(".dropdown-menu")
                  .stop(!0, !0)
                  .removeClass("d-flex")
                  .parents()
                  .removeClass("showing");
              var n = $(a).offset().top,
                s = ($(a).outerHeight(), $(o).offset().top - n),
                r = ($(t).outerWidth(), $(o).outerHeight()),
                d = $(window).outerHeight(),
                l = $(window).outerWidth() - (o.offset().left + o.outerWidth()),
                c = $(window).outerWidth() - (t.offset().left + t.outerWidth()),
                u = $(window).outerHeight() - (s + o.outerHeight());
              l < 30
                ? $(o).hasClass("mega-menu")
                  ? ($(o).hasClass("to-center") &&
                      $(o)
                        .addClass("to-left centered-lg")
                        .removeClass("to-right to-center")
                        .css({ right: 10 - c + "px" }),
                    $(o).hasClass("to-right") &&
                      $(o)
                        .addClass("to-left right-lg")
                        .removeClass("to-right to-center")
                        .css({ right: 10 - c + "px" }))
                  : $(o).removeClass("to-right to-center").addClass("to-left")
                : ($(o).hasClass("centered-lg") &&
                    $(o)
                      .addClass("to-center")
                      .removeClass("to-right to-left centered-lg")
                      .css({ right: "auto" }),
                  $(o).hasClass("right-lg") &&
                    $(o)
                      .addClass("to-right")
                      .removeClass("to-left to-center right-lg")
                      .css({ right: "auto" })),
                u < 20 &&
                  ($(o).hasClass("mega-menu") ||
                    $(o).css({ top: d - (s + r) - 20 + "px" }));
            }
          }),
            $(this).on("mouseleave", function () {
              var t = $(this),
                a = $(t).find(".dropdown-menu");
              $(window).width() > e &&
                (i = window.setTimeout(function () {
                  $(a).removeClass("d-flex");
                }, 400));
            }),
            $(".modern-nav .nav-links>li:not(.dd-toggle) a").on(
              "mouseenter",
              function () {
                $(window).width() > e &&
                  $(".modern-nav .dropdown-menu").stop().hide();
              }
            ),
            $(this)
              .find(">a:not(.lg)")
              .on("click", function () {
                var a = $(this);
                if ($(window).width() < e)
                  return (
                    a.next("ul").length && $(a).attr("href", "#"),
                    $(t)
                      .find(">.dropdown-menu")
                      .stop()
                      .slideToggle({ duration: 400, easing: "easeInOutQuart" })
                      .parent()
                      .toggleClass("showing"),
                    $(".modern-nav .dd-toggle")
                      .not(t)
                      .not($(this).parents(".dd-toggle"))
                      .not($(this).find(".dd-toggle"))
                      .find(".dropdown-menu")
                      .stop(!0, !0)
                      .slideUp({ duration: 400, easing: "easeInOutQuart" })
                      .parent(".dd-toggle")
                      .removeClass("showing"),
                    !1
                  );
              });
        }),
        $(".mobile-nb").on("click", function () {
          return (
            $(".modern-nav .mobile-nav-bg").fadeIn(300),
            $(".modern-nav, .modern-nav .nav-menu").addClass("active"),
            $(".modern-nav li").removeClass("showing"),
            $(".modern-nav .dropdown-menu").hide(300),
            setTimeout(function () {
              $(".modern-nav .nav-menu").addClass("animate");
            }, 300),
            !1
          );
        }),
        $(".mobile-nav-bg").on("click", function () {
          return (
            $(".modern-nav .nav-menu").removeClass("animate"),
            $(".modern-nav .mobile-nav-bg").fadeOut(300),
            $(".modern-nav li").removeClass("showing"),
            $(".modern-nav .dropdown-menu").slideUp(300),
            setTimeout(function () {
              $(".modern-nav, .modern-nav .nav-menu").removeClass("active");
            }, 500),
            !1
          );
        }),
        $(
          "a[href^='#']:not([href='#']):not(.no-scroll):not(.stay):not([data-slide]):not([data-toggle]):not([data-bs-toggle])"
        ).on("click", function (e) {
          var t = $(this),
            a = $(".modern-nav").data("offset"),
            i = $(t).attr("href");
          e.preventDefault(),
            $(i).length &&
              ($(".modern-nav").length
                ? $("html, body")
                    .stop()
                    .animate(
                      { scrollTop: $(t.attr("href")).offset().top - a + "px" },
                      920,
                      "easeInOutExpo"
                    )
                : $("html, body")
                    .stop()
                    .animate({ scrollTop: $(t.attr("href")).offset().top }));
        }),
        $(
          "a:not([href^='#']):not([href='#']):not(.no-scroll):not([data-fslightbox]):not(.stay):not([data-slide]):not([data-toggle]):not([target]):not([data-bs-toggle])"
        ).on("click", function (e) {
          var t = this.getAttribute("href");
          return (
            $(".page-loader")
              .removeClass("page-loader--hidden")
              .addClass("page-loader--fading-out"),
            setTimeout(function () {
              $(".page-loader").addClass("page-loader--fading-in");
            }, 10),
            setTimeout(function () {
              document.location.href = t;
            }, 390),
            setTimeout(function () {
              $(".page-loader")
                .removeClass("page-loader--fading-in")
                .addClass("page-loader--fading-out");
            }, 1e3),
            !1
          );
        }),
        $("a[href='#top'], a[href='#home']").on("click", function () {
          $("html, body")
            .stop()
            .animate({ scrollTop: 0 }, 920, "easeInOutExpo");
        }),
        (l = document.querySelectorAll(".validate-me")),
        Array.prototype.slice.call(l).forEach(function (e) {
          var t = function () {
            e.querySelector("[required]:invalid") ||
              e.classList.remove("no-valid");
          };
          e.addEventListener("keyup", t, !1),
            e.addEventListener("change", t, !1),
            e.addEventListener("submit", function (t) {
              if (e.checkValidity()) {
                if ("contact-form" === e.getAttribute("id")) {
                  var a = document.querySelector("#contact-form-container"),
                    i = document.querySelector(".contact-form-wrapper"),
                    o = document.querySelector(".success-message-wrapper"),
                    n = a.offsetHeight + "px";
                  (a.style.height = n),
                    setTimeout(function () {
                      a.classList.add("success");
                    }, 0),
                    setTimeout(function () {
                      i.classList.add("none"), o.classList.remove("none");
                      var e = o.offsetHeight + "px";
                      a.style.height = e;
                    }, 900),
                    setTimeout(function () {
                      o.classList.add("ready");
                    }, 900);
                }
                if ("newsletter-form" === e.getAttribute("id")) {
                  var s = e.querySelector(".form-container"),
                    r = document.querySelector(".newsletter-title"),
                    d = e.querySelector(".success-message");
                  setTimeout(function () {
                    s.classList.add("opacity-0", "hidden", "slow"),
                      r.classList.add("opacity-0", "hidden");
                  }, 50),
                    setTimeout(function () {
                      s.classList.add("none"), d.classList.remove("none");
                      var e = r.className.split(" ").filter(function (e) {
                        return 0 !== e.lastIndexOf("height", 0);
                      });
                      (r.className = e.join(" ").trim()),
                        r.classList.add("height-0");
                    }, 250),
                    setTimeout(function () {
                      d.classList.remove("opacity-0", "hidden"),
                        r.classList.add("none");
                    }, 700);
                }
                var l = this;
                fetch(l.getAttribute("action"), {
                  method: l.getAttribute("method"),
                  body: new FormData(l),
                })
                  .then((e) => e.text())
                  .then(function (e) {}),
                  t.preventDefault();
              } else e.classList.add("no-valid"), e.querySelector("[required]:invalid").focus(), t.preventDefault(), t.stopPropagation();
              e.classList.add("was-validated");
            });
        });
    }
    var l;
  });

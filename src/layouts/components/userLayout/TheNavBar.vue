<template>
    <div>
        <!-- ============================================================== -->
        <!-- Top header  -->
        <!-- ============================================================== -->
        <!-- Start Navigation -->
        <div class="header header-light head-shadow">
            <div class="container">
                <nav id="navigation" class="navigation navigation-landscape">
                    <div class="nav-header">
                        <a class="nav-brand" href="" @click.prevent="$router.push({name:'home'})">
                            <img :src="require('@/assets/logo.png')" class="logo" alt=""/>
                        </a>
                        <div class="nav-toggle"></div>
                    </div>
                    <div class="nav-menus-wrapper" style="transition-property: none;">
                        <ul class="nav-menu float-left direction">
                            <li :class="$route.name == 'home' ? 'active' : ''">
                                <a href=""
                                   @click.prevent="$router.push({name:'home'})">{{$t('home')}}</a>
                            </li>

                            <li :class="$route.name == 'about_us' ? 'active' : ''">
                                <a href=""
                                   @click.prevent="$router.push({name:'about_us'})">{{$t('about_us')}}</a>
                            </li>

                            <li :class="$route.name == 'contact_us' ? 'active' : ''">
                                <a href=""
                                   @click.prevent="$router.push({name:'contact_us'})">{{$t('contact_us')}}</a>
                            </li>
                            <li :class="$route.name == 'search' ? 'active' : ''" class="d-md-none">
                                <a href=""
                                   @click.prevent="$router.push({name:'search'})">{{$t('search')}}</a>
                            </li>

                            <!--<li v-for="(category , index) in getAllCategories" :key="index" :index="index"-->
                            <!--class="d-md-none">-->
                            <!--<a href=""-->
                            <!--@click.prevent="$router.push({name:'search',query:{category_id:category.id}})">-->
                            <!--<label class="badge badge-warning">{{$t('category')}}</label>-->
                            <!--{{category.translated.title}}-->
                            <!--</a>-->
                            <!--</li>-->

                            <!--<li style="" class="">-->
                            <!--<a href="#">{{$t('categories')}}-->
                            <!--<span class="submenu-indicator"></span>-->
                            <!--<span class="submenu-indicator">-->
                            <!--<span class="submenu-indicator-chevron"></span>-->
                            <!--</span>-->
                            <!--</a>-->
                            <!--<ul class="nav-dropdown nav-submenu">-->
                            <!--<li><a href="#">Item 1</a></li>-->
                            <!--<li><a href="#">Item 2</a></li>-->
                            <!--</ul>-->
                            <!--</li>-->

                            <!--mega menu-->
                            <li class="dropdown dropdown-large open" v-if="getAllCategoriesMain.categories.length">
                                <a href="#" @click.prevent>
                                    {{$t('categories')}}
                                    <span class="submenu-indicator"><span
                                            class="submenu-indicator-chevron"></span></span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-large">
                                    <div class="row p-0">
                                        <div class="col-sm-3 text-left"
                                             v-for="(category , index) in getAllCategoriesMain.categories">
                                            <ul>
                                                <li class="dropdown-header gradient-text ">{{category.translated.title}}
                                                </li>
                                                <template v-if="!category.sub_categories.length">
                                                    <li class="padding-list">
                                                        <a href=""
                                                           @click.prevent="$router.push({name:'search',query:{category_id:category.id}})">{{category.translated.title}}</a>
                                                    </li>
                                                </template>
                                                <template v-if="category.sub_categories.length">
                                                    <li v-for="(_category, index) in category.sub_categories" class="padding-list">
                                                        <a href="#"
                                                           @click.prevent="$router.push({name:'search',query:{category_id:_category.id}})">{{_category.translated.title}}</a>
                                                    </li>
                                                </template>
                                                <!--<li class="disabled"><a href="#">How to use</a></li>-->
                                                <!--<li><a href="#">Examples</a></li>-->
                                                <!--<li class="divider"></li>-->
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li v-if="false && getAllCategoriesMain.categories.length">
                                <a href="#" @click.prevent>{{$t('categories')}}<span
                                        class="submenu-indicator"></span></a>
                                <ul class="nav-dropdown nav-submenu">
                                    <li v-for="(category , index) in getAllCategoriesMain.categories">
                                        <a href="#"
                                           @click.prevent="$router.push({name:'search',query:{category_id:category.id}})">{{category.translated.title}}
                                            <span class="submenu-indicator"
                                                  v-if="category.sub_categories.length"></span>
                                        </a>
                                        <ul class="nav-dropdown nav-submenu" v-if="category.sub_categories.length">
                                            <li v-for="(category , index) in category.sub_categories">
                                                <router-link
                                                        :to="{name:'search',query:{category_id:category.id}}">
                                                    {{category.translated.title}}
                                                </router-link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>

                            <li class="d-md-none">
                                <a style="cursor: pointer" v-if="locale != 'ar'"
                                   @click="updateLocale('ar')">{{$t('ar')}}</a>
                            </li>

                            <li class="d-md-none">
                                <a style="cursor: pointer" v-if="locale != 'en'"
                                   @click="updateLocale('en')">{{$t('en')}}</a>
                            </li>
                            <!--<li><a href="">{{$t('contact')}}</a></li>-->
                        </ul>

                        <ul class="nav-menu nav-menu-social float-right direction">
                            <li class="green light d-none d-md-flex text-capitalize" v-if="locale != 'ar'">
                                <a style="cursor: pointer" @click="updateLocale('ar')">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACkAAAAbCAMAAADWDFZiAAAAXVBMVEUAej3OESb///8AAAAAahjJAADb29sAgEDYEigASCQANxsAJxMAFgsAdjsAbzgAfT4AZjMAWS0AcSXk4OPb5ORiCBLPAAB9CheXDByrDiC8DyMmAwfIECVBBQxdCBGLWmsLAAAAcklEQVQ4je3Qxw2AQBBDUcDknDP0XyZiYYHTjgvgn59kyVYUWGSIC1YiISmANKMsznKGKomSoJdEJV9wS8hvaYm4do29Eo1j7CP9XxKyZWXXe8YeOYS2OS1HCWo5ifCWswyVXFbZKbkx7pQ7sayk+I7uAE19CMrDzuRSAAAAAElFTkSuQmCC"
                                         alt=""
                                         class="m-1"
                                         width="30">
                                    {{$t('ar')}}</a>
                            </li>
                            <li class="green light d-none d-md-flex text-capitalize">
                                <a style="cursor: pointer" href="" @click.prevent="$router.push({name:'search'})">
                                    {{$t('search')}}
                                    <i class="ti-search"></i>
                                </a>
                            </li>
                            <li class="green light d-none d-md-flex text-capitalize" v-if="locale != 'en'">
                                <a style="cursor: pointer" @click="updateLocale('en')">
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABLCAMAAABKveUfAAAAq1BMVEX////IEC4BIWnICCvKMT789vbFABEAAE/9+voAG2f7+/xCR3sAAF7EAADBAAAAAFrFABbHACUAFWXGAB8AEWQAHmjz2Nra2+Pg4egAAFWytcc5QXnEAAjWbHNpbpTFyNXTXmdLUYJUW4fO0NrNP0xeY43xz9ItN3TPSVTRUVu8vs3tw8bafYT46OkZJmzko6h1eJvdipCRlK6oq8AAAETos7YkL3DJJDbhmZ+yLYSoAAAExElEQVRoge3a61baQBAA4A3BlEtCbkirBE0tCliRqlV8/ydrNruz7DXZQNCeI/PLAyb52EsCM4NmEyTG9dBPOpbRHw6KI3qew4fXK14bDPu2J0n84TW+8O+lS04QZ6sJioNclv36aStrwZX4P3+Vqu6IsOKoBBV/aGQ3drKDXYl/Q1TzAFR0AsnA5Xey7NZGdqAr8W9L1escxspjy4q+oJOFtbKDXEkIqgwQ3GLPYQA9Rfb99qJGdoArubj9TlQeBQTiFrxbsqldNZXt7WKqbqRXlTK26DxVdlMl29OVXNwQ1XanWksXvicyOsVusFRl5nW2lysJqSquUoULIlt6sVFm3Jt7uIo9SFQOXVdppKoWIer0wymRrSKQadaZP27FNSaq3usWVKmyru6nYb+D8NnDIZXRMYuD1W9ZdqWTNXSN/Sui6jLVg6IahvhIRM4PY5aDLLOSNXKpquhBmcFpSI5DcAUmC6jMW6qyUJI1cI1DWZWZVTtXcQ1/eonfnOQjkM1l2Y8r8a5h7Uourn7g/9zAnSENFNXl1N8dg/ir+AsiW9H7mVsns3RRFdo4FaqFz38S3oVljyCje9PrVsmsXEwVV6gefXHeRVenc+736Wyy+5lGBjvAwlWsdqKKIuNqv+z755JDdmHZG5Wx+5lmNoms1kVVvWKsHLgzKKo3RaVzYdniclAn+4NlNa6x/werzmBduWksqwbFulJVehfZAaVsBrOZLV81skoXU7E9GD9pVPrnld5Vyl5EmTfXyKZG15Sq3ndPHEX1YlKZXVj29lKus1lglj0bXc9Exe4MnqxCL29GVZULr7NHKqN3WjfqyjJkcJWvv7uw2oOnM1n1qF1XzPWtMv5+K0dknY8ggk1PuoLBtX5ix4xk1eC5OHNlaD5+4zCN12fHydUsjuI6ayEiwRW1cUrUbSFcweW2cUrkthCOGG2cEjn/Z5xczeLkahYnV7M4uZrFydUs/tvnYxsP/2N8n2jjy9Ixvn+1EF/qe3QL8aVcVr+3uTjjf0av7Vy9TcCOyfExFr+3LfITgipI6a5z31kewmK8dgWqESkk1OUnjO9APoeL9ZNHVG7kvOOtXJfPEWRyQW+vfA7kvwRVSlXelqgs8l96GSmANs9/Qb5QUMUwVtsNVVnlCwXZMhMKxs3yheca1UOcunQGmco2v8oHV2DPQWaXXz2nOXxBlcJqj8v0V9N8dJUM5+7r89GQvxdUEcxgtEFoz/w9L+vuaupEVpe/7+vGKgBVTFV71jsEGdubKxgzc70D6kN6laOoGteHhNn0oHJNZab6ENTT9KotXVeH1dMkGa3bjehs6uppUH8UVBncr7qv+Fpt1B8F2ZLVh0nvhlJ/1KoiWdVOvVaQrTKodUoyvr7NxeQhrVftW98WZaw+TKr9rL6tGavJbPfEIaqW+wH4uFtJ/S6kH4D2T/AzOGMz6JTljaP0T/Ay1onjkd4N3D+hqqAcFMVEdax+E53MzeZEZlZtqeqI/TnCbLL68FzuKuFKZ7RAdfR+JkEW6TtxlILeh/R/8bJdTT3nVBmUZonqw/rlBBkgmAqoI1B9YH+hRkZVUoH9w/sx+eVUduIgvuw/Iq0Sn9K/KsnQBB5RjksahT6t31fYgv8AXhPDqKfoI1UAAAAASUVORK5CYII="
                                         alt=""
                                         class="m-1"
                                         width="30">
                                    {{$t('en')}}</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
        <!-- End Navigation -->
        <div class="clearfix"></div>
        <!-- ============================================================== -->
        <!-- Top header  -->
        <!-- ============================================================== -->
    </div>
</template>

<script>
    export default {
        name: "TheNavBar",
        mounted() {
            let vm = this;
            vm.locale = vm.$i18n.locale;
            vm.auth = vm.$helper.getLocalStorage('userInfo');
            // vm.$nextTick(function () {
            // setInterval(() => {
            //     vm.navigationBarFunctionality();
            // }, 2000)
            // });
        },
        computed: {
            getAllCategoriesMain() {
                return {
                    vm: this,
                    categories: this.$store.getters['moduleCommon/getAllCategoriesMain']
                }
            }
        },
        data() {
            return {
                locale: 'en',
                auth: null,
            }
        },
        watch: {
            getAllCategoriesMain: (newVal) => {
                if (newVal.vm) {
                    let vm = newVal.vm;
                    vm.$nextTick(function () {
                        // setTimeout(() => {
                        vm.navigationBarFunctionality();
                        // }, 2000)
                    });
                }
            },
            '$route'(to, from) {
                this.auth = this.$helper.getLocalStorage('userInfo');
            }
        },
        methods: {
            navigationBarFunctionality() {
                $(function () {
                    "use strict";

                    // Script Navigation
                    !function (n, e, i, a) {
                        n.navigation = function (t, s) {
                            var o = {
                                    responsive: !0,
                                    mobileBreakpoint: 992,
                                    showDuration: 300,
                                    hideDuration: 300,
                                    showDelayDuration: 0,
                                    hideDelayDuration: 0,
                                    submenuTrigger: "hover",
                                    effect: "fade",
                                    submenuIndicator: !0,
                                    hideSubWhenGoOut: !0,
                                    visibleSubmenusOnMobile: !1,
                                    fixed: !1,
                                    overlay: !0,
                                    overlayColor: "rgba(0, 0, 0, 0.5)",
                                    hidden: !1,
                                    offCanvasSide: "left",
                                    onInit: function () {
                                    },
                                    onShowOffCanvas: function () {
                                    },
                                    onHideOffCanvas: function () {
                                    }
                                },
                                u = this,
                                r = Number.MAX_VALUE,
                                d = 1,
                                f = "click.nav touchstart.nav",
                                l = "mouseenter.nav",
                                c = "mouseleave.nav";
                            u.settings = {};
                            var t = (n(t), t);
                            n(t).find(".nav-menus-wrapper").prepend("<span class='nav-menus-wrapper-close-button'>✕</span>"), n(t).find(".nav-search").length > 0 && n(t).find(".nav-search").find("form").prepend("<span class='nav-search-close-button'>✕</span>"), u.init = function () {
                                u.settings = n.extend({}, o, s), "right" == u.settings.offCanvasSide && n(t).find(".nav-menus-wrapper").addClass("nav-menus-wrapper-right"), u.settings.hidden && (n(t).addClass("navigation-hidden"), u.settings.mobileBreakpoint = 99999), v(), u.settings.fixed && n(t).addClass("navigation-fixed"), n(t).find(".nav-toggle").on("click touchstart", function (n) {
                                    n.stopPropagation(), n.preventDefault(), u.showOffcanvas(), s !== a && u.callback("onShowOffCanvas")
                                }), n(t).find(".nav-menus-wrapper-close-button").on("click touchstart", function () {
                                    u.hideOffcanvas(), s !== a && u.callback("onHideOffCanvas")
                                }), n(t).find(".nav-search-button").on("click touchstart", function (n) {
                                    n.stopPropagation(), n.preventDefault(), u.toggleSearch()
                                }), n(t).find(".nav-search-close-button").on("click touchstart", function () {
                                    u.toggleSearch()
                                }), n(t).find(".megamenu-tabs").length > 0 && y(), n(e).resize(function () {
                                    m(), C()
                                }), m(), s !== a && u.callback("onInit")
                            };
                            var v = function () {
                                n(t).find("li").each(function () {
                                    n(this).children(".nav-dropdown,.megamenu-panel").length > 0 && (n(this).children(".nav-dropdown,.megamenu-panel").addClass("nav-submenu"), u.settings.submenuIndicator && n(this).children("a").append("<span class='submenu-indicator'><span class='submenu-indicator-chevron'></span></span>"))
                                })
                            };
                            u.showSubmenu = function (e, i) {
                                g() > u.settings.mobileBreakpoint && n(t).find(".nav-search").find("form").slideUp(), "fade" == i ? n(e).children(".nav-submenu").stop(!0, !0).delay(u.settings.showDelayDuration).fadeIn(u.settings.showDuration) : n(e).children(".nav-submenu").stop(!0, !0).delay(u.settings.showDelayDuration).slideDown(u.settings.showDuration), n(e).addClass("nav-submenu-open")
                            }, u.hideSubmenu = function (e, i) {
                                "fade" == i ? n(e).find(".nav-submenu").stop(!0, !0).delay(u.settings.hideDelayDuration).fadeOut(u.settings.hideDuration) : n(e).find(".nav-submenu").stop(!0, !0).delay(u.settings.hideDelayDuration).slideUp(u.settings.hideDuration), n(e).removeClass("nav-submenu-open").find(".nav-submenu-open").removeClass("nav-submenu-open")
                            };
                            var h = function () {
                                    n("body").addClass("no-scroll"), u.settings.overlay && (n(t).append("<div class='nav-overlay-panel'></div>"), n(t).find(".nav-overlay-panel").css("background-color", u.settings.overlayColor).fadeIn(300).on("click touchstart", function (n) {
                                        u.hideOffcanvas()
                                    }))
                                },
                                p = function () {
                                    n("body").removeClass("no-scroll"), u.settings.overlay && n(t).find(".nav-overlay-panel").fadeOut(400, function () {
                                        n(this).remove()
                                    })
                                };
                            u.showOffcanvas = function () {
                                h(), "left" == u.settings.offCanvasSide ? n(t).find(".nav-menus-wrapper").css("transition-property", "left").addClass("nav-menus-wrapper-open") : n(t).find(".nav-menus-wrapper").css("transition-property", "right").addClass("nav-menus-wrapper-open")
                            }, u.hideOffcanvas = function () {
                                n(t).find(".nav-menus-wrapper").removeClass("nav-menus-wrapper-open").on("webkitTransitionEnd moztransitionend transitionend oTransitionEnd", function () {
                                    n(t).find(".nav-menus-wrapper").css("transition-property", "none").off()
                                }), p()
                            }, u.toggleOffcanvas = function () {
                                g() <= u.settings.mobileBreakpoint && (n(t).find(".nav-menus-wrapper").hasClass("nav-menus-wrapper-open") ? (u.hideOffcanvas(), s !== a && u.callback("onHideOffCanvas")) : (u.showOffcanvas(), s !== a && u.callback("onShowOffCanvas")))
                            }, u.toggleSearch = function () {
                                "none" == n(t).find(".nav-search").find("form").css("display") ? (n(t).find(".nav-search").find("form").slideDown(), n(t).find(".nav-submenu").fadeOut(200)) : n(t).find(".nav-search").find("form").slideUp()
                            };
                            var m = function () {
                                    u.settings.responsive ? (g() <= u.settings.mobileBreakpoint && r > u.settings.mobileBreakpoint && (n(t).addClass("navigation-portrait").removeClass("navigation-landscape"), D()), g() > u.settings.mobileBreakpoint && d <= u.settings.mobileBreakpoint && (n(t).addClass("navigation-landscape").removeClass("navigation-portrait"), k(), p(), u.hideOffcanvas()), r = g(), d = g()) : k()
                                },
                                b = function () {
                                    n("body").on("click.body touchstart.body", function (e) {
                                        0 === n(e.target).closest(".navigation").length && (n(t).find(".nav-submenu").fadeOut(), n(t).find(".nav-submenu-open").removeClass("nav-submenu-open"), n(t).find(".nav-search").find("form").slideUp())
                                    })
                                },
                                g = function () {
                                    return e.innerWidth || i.documentElement.clientWidth || i.body.clientWidth
                                },
                                w = function () {
                                    n(t).find(".nav-menu").find("li, a").off(f).off(l).off(c)
                                },
                                C = function () {
                                    if (g() > u.settings.mobileBreakpoint) {
                                        var e = n(t).outerWidth(!0);
                                        n(t).find(".nav-menu").children("li").children(".nav-submenu").each(function () {
                                            n(this).parent().position().left + n(this).outerWidth() > e ? n(this).css("right", 0) : n(this).css("right", "auto")
                                        })
                                    }
                                },
                                y = function () {
                                    function e(e) {
                                        var i = n(e).children(".megamenu-tabs-nav").children("li"),
                                            a = n(e).children(".megamenu-tabs-pane");
                                        n(i).on("click.tabs touchstart.tabs", function (e) {
                                            e.stopPropagation(), e.preventDefault(), n(i).removeClass("active"), n(this).addClass("active"), n(a).hide(0).removeClass("active"), n(a[n(this).index()]).show(0).addClass("active")
                                        })
                                    }

                                    if (n(t).find(".megamenu-tabs").length > 0)
                                        for (var i = n(t).find(".megamenu-tabs"), a = 0; a < i.length; a++) e(i[a])
                                },
                                k = function () {
                                    w(), n(t).find(".nav-submenu").hide(0), navigator.userAgent.match(/Mobi/i) || navigator.maxTouchPoints > 0 || "click" == u.settings.submenuTrigger ? n(t).find(".nav-menu, .nav-dropdown").children("li").children("a").on(f, function (i) {
                                        if (u.hideSubmenu(n(this).parent("li").siblings("li"), u.settings.effect), n(this).closest(".nav-menu").siblings(".nav-menu").find(".nav-submenu").fadeOut(u.settings.hideDuration), n(this).siblings(".nav-submenu").length > 0) {
                                            if (i.stopPropagation(), i.preventDefault(), "none" == n(this).siblings(".nav-submenu").css("display")) return u.showSubmenu(n(this).parent("li"), u.settings.effect), C(), !1;
                                            if (u.hideSubmenu(n(this).parent("li"), u.settings.effect), "_blank" == n(this).attr("target") || "blank" == n(this).attr("target")) e.open(n(this).attr("href"));
                                            else {
                                                if ("#" == n(this).attr("href") || "" == n(this).attr("href")) return !1;
                                                e.location.href = n(this).attr("href")
                                            }
                                        }
                                    }) : n(t).find(".nav-menu").find("li").on(l, function () {
                                        u.showSubmenu(this, u.settings.effect), C()
                                    }).on(c, function () {
                                        u.hideSubmenu(this, u.settings.effect)
                                    }), u.settings.hideSubWhenGoOut && b()
                                },
                                D = function () {
                                    w(), n(t).find(".nav-submenu").hide(0), u.settings.visibleSubmenusOnMobile ? n(t).find(".nav-submenu").show(0) : (n(t).find(".nav-submenu").hide(0), n(t).find(".submenu-indicator").removeClass("submenu-indicator-up"), u.settings.submenuIndicator ? n(t).find(".submenu-indicator").on(f, function (e) {
                                        return e.stopPropagation(), e.preventDefault(), u.hideSubmenu(n(this).parent("a").parent("li").siblings("li"), "slide"), u.hideSubmenu(n(this).closest(".nav-menu").siblings(".nav-menu").children("li"), "slide"), "none" == n(this).parent("a").siblings(".nav-submenu").css("display") ? (n(this).addClass("submenu-indicator-up"), n(this).parent("a").parent("li").siblings("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), n(this).closest(".nav-menu").siblings(".nav-menu").find(".submenu-indicator").removeClass("submenu-indicator-up"), u.showSubmenu(n(this).parent("a").parent("li"), "slide"), !1) : (n(this).parent("a").parent("li").find(".submenu-indicator").removeClass("submenu-indicator-up"), void u.hideSubmenu(n(this).parent("a").parent("li"), "slide"))
                                    }) : k())
                                };
                            u.callback = function (n) {
                                s[n] !== a && s[n].call(t)
                            }, u.init()
                        }, n.fn.navigation = function (e) {
                            return this.each(function () {
                                if (a === n(this).data("navigation")) {
                                    var i = new n.navigation(this, e);
                                    n(this).data("navigation", i)
                                }
                            })
                        }
                    }
                    (jQuery, window, document), $(document).ready(function () {
                        $("#navigation").navigation()
                    });
                });

                // Script For Fix Header on Scroll
                $(window).on('scroll', function () {
                    var scroll = $(window).scrollTop();

                    if (scroll >= 20) {
                        $(".header").addClass("header-fixed");
                    } else {
                        $(".header").removeClass("header-fixed");
                    }
                });
            },
            updateLocale(locale) {
                document.documentElement.setAttribute('lang', locale);
                this.$helper.setLocalStorage('language', locale);
                location.reload();
            },
            prepareFilters() {
                return {
                    lang: this.$i18n.locale
                };
            },
            logout() {
                this.$helper.removeLocalStorage('userInfo');
                this.$helper.removeLocalStorage('token');
                location.reload()
            }
        }
    }
</script>

<style scoped>
    .dropdown-large {
        position: static !important;
    }

    .dropdown-menu-large {
        margin-left: 16px;
        margin-right: 16px;
        padding: 20px 0px;
        top: 75px;
        z-index: 999999;
    }

    .dropdown-large,
    .dropdown-menu-large {
        transition: all ease-in-out 0.5s;
    }

    .dropdown-large:hover .dropdown-menu-large {
        display: flex;
    }

    .dropdown-menu-large > li > ul {
        padding: 0;
        margin: 0;
    }

    .dropdown-menu-large > li > ul > li {
        list-style: none;
    }

    .dropdown-menu-large > li > ul > li > a {
        display: block;
        padding: 3px 20px;
        clear: both;
        font-weight: normal;
        line-height: 1.428571429;
        color: #333333;
        white-space: normal;
    }

    .dropdown-menu-large > li ul > li > a:hover,
    .dropdown-menu-large > li ul > li > a:focus {
        text-decoration: none;
        color: #262626;
        background-color: #f5f5f5;
    }

    .dropdown-menu-large .disabled > a,
    .dropdown-menu-large .disabled > a:hover,
    .dropdown-menu-large .disabled > a:focus {
        color: #999999;
    }

    .dropdown-menu-large .disabled > a:hover,
    .dropdown-menu-large .disabled > a:focus {
        text-decoration: none;
        background-color: transparent;
        background-image: none;
        filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
        cursor: not-allowed;
    }

    .padding-list {
        padding: 3px 25px !important;
    }

    .dropdown-menu-large .dropdown-header {
        color: #428bca;
        font-size: 18px;
    }

    @media (max-width: 768px) {
        .dropdown-menu-large {
            margin-left: 0;
            margin-right: 0;
        }

        .dropdown-menu-large > li {
            margin-bottom: 30px;
        }

        .dropdown-menu-large > li:last-child {
            margin-bottom: 0;
        }

        .dropdown-menu-large .dropdown-header {
            padding: 3px 15px !important;
        }
    }

    .gradient-text {
        /* Fallback: Set a background color. */
        background-color: red;

        /* Create the gradient. */
        background-image: linear-gradient(45deg, #ab882d, #af4261);
        /*background-image: linear-gradient(245deg, #007a3d, #000, #ce1126);*/

        /* Set the background size and repeat properties. */
        background-size: 100%;
        background-repeat: repeat;

        /* Use the text as a mask for the background. */
        /* This will show the gradient as a text color rather than element bg. */
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        -moz-background-clip: text;
        -moz-text-fill-color: transparent;
    }


</style>

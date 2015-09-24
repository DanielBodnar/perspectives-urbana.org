angular.module('app')

.directive('init', function($rootScope) {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            console.log('initializing...')
                init();
        }
    }
})

.directive('autoheight', function() {
    return {
        restrict: 'C',
        link: function($scope, element, attrs) {

            var setElementHeight = function() {
                var height = angular.element(window).height();
                element.css('min-height', (height));
            }
            angular.element(window).on("resize", function() {
                setElementHeight();
            }).resize();

            setElementHeight();
        }
    }
})

.directive('jssor', function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {
            var bodyWidth = document.body.clientWidth;
            if (bodyWidth)
                element.$SetScaleWidth(Math.min(bodyWidth, 980));
            else
                window.setTimeout(ScaleSlider, 30);


            if (!navigator.userAgent.match(/(iPhone|iPod|iPad|BlackBerry|IEMobile)/)) {
                $(window).bind('resize', ScaleSlider);
            }
        }
    }
})

.directive('smoothScroll', function() {
    return {
        restrict: 'A',
        link: function($scope, element, attrs) {

            var height = element.height();
            var scroll = angular.element(window).scrollTop();
            if (scroll > height) {
                angular.element(".header-hide").addClass("scroll-header");
            }

            smoothScroll.init({
                speed: 1000,
                easing: 'easeInOutCubic',
                offset: height,
                updateURL: false
            });

            angular.element(window).scroll(function() {
                var height = angular.element(window).height();
                var scroll = angular.element(window).scrollTop();
                if (scroll) {
                    angular.element(".header-hide").addClass("scroll-header");
                } else {
                    angular.element(".header-hide").removeClass("scroll-header");
                }

            });
        }
    }
})


.directive('venobox', function() {
    return {
        restrict: 'C',
        link: function($scope, element, attrs) {
            element.venobox({
                numeratio: true,
                infinigall: true,
                border: '20px'
            })
        }
    }
})

.directive('venoboxvid', function() {
    return {
        restrict: 'C',
        link: function($scope, element, attrs) {
            element.venobox({
                bgcolor: '#000'
            })
        }
    }
})


.directive('venoboxframe', function() {
    return {
        restrict: 'C',
        link: function($scope, element, attrs) {
            element.venobox({
                border: '6px'
            })
        }
    }
})

.directive('venoboxinline', function() {
    return {
        restrict: 'C',
        link: function($scope, element, attrs) {
            element.venobox({
                framewidth: '300px',
                frameheight: '250px',
                border: '6px',
                bgcolor: '#f46f00'
            })
        }
    }
})

.directive('venoboxajax', function() {
    return {
        restrict: 'C',
        link: function($scope, element, attrs) {
            element.venobox({
                border: '30px;',
                frameheight: '220px'
            })
        }
    }
})

.directive('gridGallery', function() {
    return {
        restrict: 'C',
        link: function($scope, element, attrs) {
            new CBPGridGallery(element[0]);
        }
    }
})

.directive('tabsUi', function() {
    return {
        restrict: 'C',
        link: function($scope, element, attrs) {
            new CBPFWTabs(element[0]);
        }
    }
})

// jQuery('#defaultCountdown').countdown({
//     until: new Date(2016, 1, 12)
// });
// .directive('init', function() {
//     return {
//         restrict: 'A',
//         link: function($scope, element, attrs) {
//             init();
//         }
//     }
// })

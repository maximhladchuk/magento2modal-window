/**
 * Copyright © Maxim Hladchuk (maxim.hladchuk@gmail.com). All rights reserved.
 */

define (['jquery'],function($) {
    'use strict';

    return function () {
        if (!localStorage.getItem('modalVisibilityData')) {
            localStorage.setItem('modalVisibilityData', 'visible');
            toggleModalClass('hidden');
        }

        else if (localStorage.getItem('modalVisibilityData') == 'visible'){
            toggleModalClass('hidden');
        }else if (localStorage.getItem('modalVisibilityData') == 'invisible'){
            $('.cms-index-index').css('overflow', "visible");
        }

        $('#button-cancel-modal-fever').click(function () {
            event.preventDefault();
            localStorage.setItem('modalVisibilityData', 'invisible');
            toggleModalClass('visible');
        });

        $('#button-cancel-modal-session').click(function () {
            event.preventDefault();
            toggleModalClass('visible');
        });
        /**
         * Toggle visibility class in modal window and body overflow on main page.
         * @access public
         * @type {function}
         * @param {string|Array} [Option of CSS overflow parameter]
         * @return void
         */
        function toggleModalClass(visibility) {
            $('.main-page-modal-container').first().toggleClass('modal-display-block');
            $('.cms-index-index').css('overflow', visibility);
        }
    }
});

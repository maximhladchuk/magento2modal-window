/**
 * Copyright © Maxim Hladchuk (maxim.hladchuk@gmail.com). All rights reserved.
 */

define (['jquery'],function($) {
    'use strict';

    return function () {
        const bodyClass = 'cms-index-index';
        const modalWindowContainerClass = '.main-page-modal-container';

        /** check whether the user has already permanently closed the modal window through local storage data */

        if (!localStorage.getItem('modalVisibilityData')) {
            localStorage.setItem('modalVisibilityData', 'visible');
            toggleModalClass('hidden');
        }

        /** check whether the user has already permanently closed the modal window through local storage data */
        /** if the data from the local storage is visible, then we run the function of showing the modal window, and if it is hidden, then we hide the overflow of body */

        else if (localStorage.getItem('modalVisibilityData') == 'visible'){
            toggleModalClass('hidden');
        }else if (localStorage.getItem('modalVisibilityData') == 'invisible'){
            $(bodyClass).css('overflow', "visible");
        }

        /** event to close modal window forever */

        $('#button-cancel-modal-fever').click(function () {
            event.preventDefault();
            localStorage.setItem('modalVisibilityData', 'invisible');
            toggleModalClass('visible');
        });

        /** event to close modal window once */

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
            $(modalWindowContainerClass).first().toggleClass('modal-display-block');
            $(bodyClass).css('overflow', visibility);
        }
    }
});

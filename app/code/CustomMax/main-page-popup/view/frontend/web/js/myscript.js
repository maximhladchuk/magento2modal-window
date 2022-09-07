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
            $('.cms-index-index').first().css('overflow', "visible");
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
        function toggleModalClass(visibility) {
            $('.main-page-modal-container').first().toggleClass('modal-display-block');
            $('.cms-index-index').first().css('overflow', visibility);
        }
    }
});

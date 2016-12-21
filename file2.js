import * as File1 from './file1';

(function () {
    'use strict';

    angular
        .module ('Module')
        .directive ('secondDirective', directive);


    /** @ngInject */
    function directive() {

        function directiveController(){
            var vm = this;
            
            init();

            function init(){

            }
        }

        function link(){

        }

        return {
            bindToController: true,
            controller: directiveController,
            controllerAs: 'Ctrl',
            link: link,
            restrict: 'AE',
            scope: {},
            template: `
                <h2>Second directive</h2>
                <third-directive></third-directive/>
            `
        }
    }

} ());
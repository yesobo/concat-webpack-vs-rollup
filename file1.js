(function(){
    'use strict';

    angular
        .module('Module', [
            
        ]);

}());

(function () {
    'use strict';

    angular
        .module('Module')
        .directive('firstDirective', directive);


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
                <h1>First directive</h1>
                <second-directive></second-directive>
            `
        }
    }

} ());
(function() {
    function CookiesCtrl($uibModalInstance, $cookies) {

        this.createUsername = function() {
            currentUser = this.newUsername;
            $cookies.put('blocChatCurrentUser', currentUser);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['$uibModalInstance', '$cookies', CookiesCtrl]);
})();
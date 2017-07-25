(function() {
    function CookiesCtrl($uibModalInstance, $cookies) {

        this.createUsername = function() {
            currentUser = this.newUsername;
            $cookies.put('blocChatCurrentUser', currentUser);
            $uibModalInstance.close();
            console.log(currentUser);
        };
    }

    angular
        .module('blocChat')
        .controller('CookiesCtrl', ['$uibModalInstance', '$cookies', CookiesCtrl]);
})();
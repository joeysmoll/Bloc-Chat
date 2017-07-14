(function() {
    function ModalCtrl($uibModalInstance, Room) {
        
        this.createRoom = function () {
            Room.add(this.newRoom);
            $uibModalInstance.close();
        };

        this.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room', ModalCtrl]);
})();
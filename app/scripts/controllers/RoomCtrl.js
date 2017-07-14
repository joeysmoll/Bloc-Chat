(function() {
    function RoomCtrl(Room, $uibModal) {
        this.allRooms = Room.all;

        this.openModal = function() {
           var instance = $uibModal.open({
               templateUrl:'/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'}) 
        };
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room','$uibModal', RoomCtrl]);
})();
(function() {
    function RoomCtrl(Room, Message, $uibModal) {
        this.allRooms = Room.all;

        this.openModal = function() {
            var instance = $uibModal.open({
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
        };

        this.selectedRoom = null;

        this.selectedMessages = null;

        this.selectRoom = function(room) {
            this.selectedRoom = room;
            this.selectedMessages = Message.getByRoomId(room.$id);
        };

    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', 'Message', '$uibModal', RoomCtrl]);
})();
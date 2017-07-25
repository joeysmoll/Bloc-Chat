(function() {
    function MessageCtrl(Message, $cookies) {

        this.createMessage = function(targetRoom) {
            var newMessage = {};
            var date = new Date();
            var minutes = date.getMinutes();
            var hours = date.getHours();
            var tod = "am";
            var formatHours = hours;
            if (hours >= 12) {
                formatHours = hours - 12;
                tod = "pm";
            }
            if (formatHours == 0) {
                formatHours = 12;
            }
            minutes = minutes < 10 ? "0" + minutes : minutes;
            newMessage.roomId = targetRoom.$id;
            newMessage.content = this.userMessage;
            newMessage.username = $cookies.get('blocChatCurrentUser');
            newMessage.sentAt = formatHours + ':' + minutes + tod;
            Message.send(newMessage);
            this.userMessage = '';
            console.log(newMessage);
        };
    }

    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message', '$cookies', MessageCtrl]);
})();
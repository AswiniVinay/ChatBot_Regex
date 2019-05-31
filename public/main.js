$(document).ready(function(){
    $("button").click(function(){
      let userip= $("#user-input").val();
      console.log(userip);
    var bot = new RiveScript();
    bot.loadFile("brain.rive").then(loading_done).catch(loading_error);
    function loading_done() {
      console.log("Bot has finished loading!");
    
      // Now the replies must be sorted!
      bot.sortReplies();
      let username = "local-user";
      bot.reply(username,userip).then(function(reply) {
        console.log("The bot says: " + reply);
        $("#output").html(reply);
      });
    }
    
    // It's good to catch errors too!
    function loading_error(error, filename, lineno) {
      console.log("Error when loading files: " + error);
    }
});
$(document).on('keypress',function(e) {
    if(e.which == 13) {
        //see for enter key
        let userip= $("#user-input").val();
        console.log(userip);
      var bot = new RiveScript();
      bot.loadFile("brain.rive").then(loading_done).catch(loading_error);
      function loading_done() {
        console.log("Bot has finished loading!");
      
        // Now the replies must be sorted!
        bot.sortReplies();
        let username = "local-user";
        bot.reply(username,userip).then(function(reply) {
          console.log("The bot says: " + reply);
          $("#output").html(reply);
        });
      }
      function loading_error(error, filename, lineno) {
        console.log("Error when loading files: " + error);
      }   
    }
});
});
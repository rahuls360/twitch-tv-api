$(document).ready(function(){
  
      //store list of twitch tv streamers
      var streams = ["meclipse", "w33haa", "singsing", "freecodecamp", "arteezy", "ESL_DOTA2", "followkudes", "fantasticaxe", "AdmiralBulldog"];
  
  //create arrays to store online and offline streamers information
  var onlineArr= [];
  var offlineArr = [];
  
  
  //check if streamer is online/offline and store data in corresponding array
  var loadChannels = function(){
    streams.forEach(function(stream){
        
          $.getJSON("https://api.twitch.tv/kraken/streams/" + stream + "?client_id=1vdi5nlywe44pzoatembnpee2em1dl", function(json){
            if(json.stream == null){
              offlineArr.push(['https://twitch.tv/' + stream, stream]);
            }else{
              onlineArr.push([json.stream.channel.url, json.stream.channel.display_name]);
            }
            
            all();
          });
    
      });
    
  }
  
 
  //when all button clicked, display online streamers data first, then offline streamers data
    var all = function(){
      //working link - https://api.twitch.tv/kraken/streams/TimTheTatman?client_id=1vdi5nlywe44pzoatembnpee2em1dl
      var html="";
      $("ul").html(html); //clear stream list - ul
      
      
      
      
      //display online streamers data
      onlineArr.forEach(function(element){
        html = "<li class='online-list'><a target='_blank' href='" + element[0] + "'>" + element[1] + "</a><span>Online</span></li>";
        $("ul").append(html);
      });

      
      
      
      //display offline streamers data
      offlineArr.forEach(function(element){
        html = "<li class='offline-list'><a target='_blank' href='" + element[0] + "'>" + element[1] + "</a><span>Offline</span></li>";
        $("ul").append(html);
      });

    };


  //load channels when page loads

  loadChannels();
  
  
  
    //when online button clicked, show online streamers and hide offline streamers
    var online = function(){
      //working link - https://api.twitch.tv/kraken/streams/TimTheTatman?client_id=1vdi5nlywe44pzoatembnpee2em1dl
      $(".online-list").css("display", "block");
      $(".offline-list").css("display", "none");


    };

  
  
  
  
  //when offine button clicked, show offline streamers and hide online streamers
    var offline = function(){
      //working link - https://api.twitch.tv/kraken/streams/TimTheTatman?client_id=1vdi5nlywe44pzoatembnpee2em1dl
      $(".online-list").css("display", "none");
      $(".offline-list").css("display", "block");
    };

  
  
  
  
 //set on click listeners for all, online and offline button & attach to respective function calls
  $("#all").on('click', all);
  $("#online").on('click', online);
  $("#offline").on('click', offline);
  
  
  
  
});
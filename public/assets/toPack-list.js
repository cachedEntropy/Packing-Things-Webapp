$(document).ready(function(){

  $('form').on('submit', function(){

      var thing = $('form input');
      var obj = {item: thing.val()};

      $.ajax({
        type: 'POST',
        url: '/toPack',
        data: obj,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/toPack/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});

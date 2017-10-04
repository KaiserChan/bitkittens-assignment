document.addEventListener('DOMContentLoaded', function() {

  var summonCat = document.querySelector('.summon-cats');
  var catBox = document.querySelector('#cat1');
  var allCatBox = document.querySelectorAll('.cat-box');

  // for (i = 0; i < allCatBox.length; i++) {
    summonCat.addEventListener('click', clickSummonCat);
  // }

  function clickSummonCat() {
    console.log('You clicked the summon cat button');

    $.ajax ({
      url: "http://bitkittens.herokuapp.com/cats.json",
      method: "GET",
      dataType: "JSON"
    }).done(function (data) {

      for (i = 0; i < allCatBox.length; i++) {
        var imageTag = document.createElement('img');
        imageTag.setAttribute('src', data['cats'][i]['photo']);
        imageTag.setAttribute('alt', 'Photo of ' + data['cats'][i]['name']);
        allCatBox[i].innerHTML = '';
        allCatBox[i].appendChild( imageTag);
      }
    });
  };

});

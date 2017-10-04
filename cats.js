document.addEventListener('DOMContentLoaded', function() {

  var summonCat = document.querySelector('.summon-cats');

  summonCat.addEventListener('click', clickSummonCat);

  function clickSummonCat() {
    console.log('You clicked the summon cat button');
  }

});

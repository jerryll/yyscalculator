var sorted = [];
function filterResult(monster1, monster2, monster3){
  sorted = [];
  var currentLevel = "";
  var currentChapter = "";
  for (i=0;i<leveldata.levelinfo.length;i++){
    currentLevel = leveldata.levelinfo[i].levelname;
    for (j=0;j<leveldata.levelinfo[i].monsterarray.length;j++){
      currentChapter = leveldata.levelinfo[i].monsterarray[j].monstername;
      var matchedMonster = { questmonster: "<h4>"+ currentLevel+ " "+currentChapter+"</h4>", value: 0};
      var counter = 0;
      for (k=0;k<leveldata.levelinfo[i].monsterarray[j].monsters.length;k++){
        if (matchString(leveldata.levelinfo[i].monsterarray[j].monsters[k].questmonster, monster1, monster2, monster3)){
          matchedMonster.questmonster += "<p>" + leveldata.levelinfo[i].monsterarray[j].monsters[k].questmonster + " x " +leveldata.levelinfo[i].monsterarray[j].monsters[k].amount + "</p>";
          matchedMonster.value += leveldata.levelinfo[i].monsterarray[j].monsters[k].amount + counter;
          counter++;
        }
      }
      if (matchedMonster.value > 0){
        sorted.push(matchedMonster);
      }
    }
  }
  sorted = sorted.sort(compareForSort);
}
function compareForSort(first,second){
  if(first.value == second.value)
    return 0;
  if (first.value > second.value)
    return -1;
  else
    return 1;
}
function manipulateString(str){
  if (str.indexOf(" ") != -1){
    return str.substring(0,str.indexOf(" "));
  }
  return str;
}
function matchString(str, monster1, monster2, monster3){
  return ((str == manipulateString(monster1)) || (str == manipulateString(monster2)) || (str == manipulateString(monster3)))
}
$("select").change(function (){
  filterResult($('#select1 option:selected()').text().trim(),$('#select2 option:selected()').text().trim(),$('#select3 option:selected()').text().trim());
  var display = "";
  var displayLength = Math.min(sorted.length, 10);
  for (var i=0; i<displayLength; i++){
    display += sorted[i].questmonster;
  }
  if (display != ""){
    $("#levelinfo").html(display);
  }else{
    $("#levelinfo").html("<p>找不到相关式神</p>");
  }
})

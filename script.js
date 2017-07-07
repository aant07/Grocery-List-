function add_item(item){
    groceryList.push({
        name: item, 
        marked: false
    });
}
function view_list(){
    for (var i = 0; i < groceryList.length; i++){
      if (groceryList.length === 0)
        return;
        else
        // let's display marked off items differently 
        if (groceryList[i].marked){
            console.log("X " + groceryList[i].name);
        } else {
            console.log("- " + groceryList[i].name);
        }

    }
}

$('#shopping-list').on('change','input[type=checkbox]',function(evt){
    var checkbox = $(evt.target),
        textInput = checkbox.next('input[type=text]');

    textInput.css('text-decoration', checkbox.is(':checked') ? 'line-through' : 'none');
});
function mark_item(item){
    for (var i = 0; i <= groceryList.length; i++){
        if (groceryList[i].name == item) {
            // when we mark an item, we just set its flag
            groceryList[i].marked = true;
        }
    }
}

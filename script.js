$("footer > span").text(new Date().getFullYear());
$("textarea").on("input",function() {
  if ($(this).val() != "") {
    let uppercase_letters = "QWERTYUIOPASDFGHJKLZXCVBNM";
    let lowercase_letters = "qwertyuiopasdfghjklzxcvbnm";
    let letters = uppercase_letters + lowercase_letters;
    uppercase_letters = uppercase_letters.split("");
    lowercase_letters = lowercase_letters.split("");
    letters = letters.split("");
    let numbers = "0123456789";
    numbers = numbers.split("");
    
    let values = $(this).val();
    values = values.replace(/(\r\n|\n|\r)/g, " ");
    let values_array = values.split("");
    values_array = values_array.sort();

    let letter = [];
    let uppercase_letter = [];
    let lowercase_letter = [];
    let number = [];
    let space = [];
    let special_character = [];
    for (let x of values_array) {
      if (letters.includes(x)) letter.push(x);
      if (uppercase_letters.includes(x)) uppercase_letter.push(x);
      if (lowercase_letters.includes(x)) lowercase_letter.push(x);
      if (numbers.includes(x)) number.push(x);
      if (x == " ") space.push(x);
      if (letters.includes(x) == false && numbers.includes(x) == false && x != " ") special_character.push(x);
    }
    let word = [];
    word = values.split(" ");
    word_without_space = [];
    for (let x of word) if (x != "") word_without_space.push(x);
    word_without_space = word_without_space.sort();

    $("#character > span:nth-child(2)").text(values_array.length);
    $("#letter > span:nth-child(2)").text(letter.length);
    $("#uppercase-letter > span:nth-child(2)").text(uppercase_letter.length);
    $("#lowercase-letter > span:nth-child(2)").text(lowercase_letter.length);
    $("#number > span:nth-child(2)").text(number.length);
    $("#word > span:nth-child(2)").text(word_without_space.length);
    $("#space > span:nth-child(2)").text(space.length);
    $("#special-character > span:nth-child(2)").text(special_character.length);

    let values_unique = [];
    for (let x of values_array) if (values_unique.includes(x) == false && x != " ") values_unique.push(x);
    let values_object = [];
    for (let x of values_unique) values_object.push({name:x,amount:0});
    for (let x of values_array) for (let y of values_object) if (y.name == x) y.amount += 1;
    $("main > div:nth-child(5)").empty();
    for (let x of values_object) {
      let item_div = $("<div></div>").attr("id",x.name);
      let item_name = $("<span></span>").text(x.name);
      let item_amount = $("<span></span>").text(x.amount);
      $(item_div).append(item_name);
      $(item_div).append(item_amount);
      $("main > div:nth-child(5)").append(item_div);
    }
    if (values_object.length > 0) $("main > h2:nth-child(4)").removeClass("display-none");
    else $("main > h2:nth-child(4)").addClass("display-none");
    
    let word_unique = [];
    for (let x of word_without_space) if (word_unique.includes(x) == false) word_unique.push(x);
    let word_object = [];
    for (let x of word_unique) word_object.push({name:x,amount:0});
    for (let x of word_without_space) for (let y of word_object) if (y.name == x) y.amount += 1;
    $("main > div:nth-child(7)").empty();
    for (let x of word_object) {
      let item_div = $("<div></div>").attr("id",x.name);
      let item_name = $("<span></span>").text(x.name);
      let item_amount = $("<span></span>").text(x.amount);
      $(item_div).append(item_name);
      $(item_div).append(item_amount);
      $("main > div:nth-child(7)").append(item_div);
    }
    if (word_object.length > 0) $("main > h2:nth-child(6)").removeClass("display-none");
    else $("main > h2:nth-child(6)").addClass("display-none");
  }
  else {
    $("#character, #letter, #uppercase-letter, #lowercase-letter, #number, #space, #special-character, #word").children("span:nth-child(2)").text("0");
    $("main > h2:nth-child(4), main > h2:nth-child(6)").addClass("display-none");
    $("main > div:nth-child(5)").empty();
    $("main > div:nth-child(7)").empty();
  }
});
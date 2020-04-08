function current_value () {
    return parseInt ( ("# result"). text ())
  }
  function current_value () {
    return  ("# calculator"). text ()
  }
  function change_current_value (new_value) {
    ("# result"). text (new_value)
  }
  function change_current_calcul (new_text) {
    ("# calculator"). text (new_text)
  }
  
 (function () {
     ("button"). click (function () {
      calcul = current_calcul ()
      change_current_calcul(calculation + $ (this) .data ("value"))
      change_current_value (eval (current_calcul ()))
    })
  })
  function calc () {
    var a = parseInt (document.querySelector ['# value1']. value);
    var b = parseInt (document.querySelector ['# value2']. value);
    var op = document.querySelector ['# operator']. value;
    var calculate;
    var unable = "Unable to determine operator."
  
    if (op == "Add") {
      calculate = a + b;
    } else if (op == "Subtraction") {
      calculate = a - b;
    } else if (op == "Division") {
      calculate = a / b;
    } else if (op == "Multiplication") {
      calculate = a * b;
    }
  
    document.querySelector ['# result']. innerHTML = calculate;
  }
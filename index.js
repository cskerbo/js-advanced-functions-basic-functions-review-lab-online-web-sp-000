function saturdayFun(activity='roller-skate') {
  return 'This Saturday, I want to ' + activity + '!'
}

function mondayWork(activity='go to the office') {
  return 'This Monday, I will ' + activity + '.'
}

function wrapAdjective(character="*") {
  return function(message="special") {
    return "You are " + character + message + character + "!"
  }
}

let Calculator = {
  function add() {
    return 1 + 3
  }
}

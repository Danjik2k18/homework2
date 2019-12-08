/*Нужно написать такой же код, только с проверкой, что это точно будет число! Если нет, то справишваем еще раз.
Можно посмотреть цикл while)*/

var howHours
function countSeconds () {
  do {
   howHours = prompt('сколько часов у вас', )
  } while (isNaN(howHours));
  alert("В " + howHours + " часах " + 60    * 60 * howHours + " секунд")
 }

countSeconds()
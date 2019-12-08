/* Дошли? Прекрасно.
Напишите скрипт, который считает количество секунд в часе, в сутках, в месяце.

Спрашиваем у пользователя через prompt число.
Если пользователь ввёл 10h, то мы выводим ему количество секунд за 10 часов.
Если пользователь ввёл 10d, то мы выводим ему количество секунд за 10 дней.
Если пользователь ввёл 10w, то мы выводим ему количество секунд за 10 недел.
Если пользователь ввёл 10m, то мы выводим ему количество секунд за 10 месяц.

Проверяем то, что в конце)*/

var howMany

function countSeconds() {
    howMany = prompt('Введите число', )
    if (howMany[howMany.length - 1] === 'h') {
        alert("В " + parseInt(howMany) + " часах " + 60 * 60 * parseInt(howMany) + " секунд")
    } else if (howMany[howMany.length - 1] === 'd') {
        alert("В " + parseInt(howMany) + " днях " + 24 * 60 * parseInt(howMany) * 60 + " секунд")
    } else if (howMany[howMany.length - 1] === 'w') {
        alert("В " + parseInt(howMany) + " неделях " + parseInt(howMany) * 7 * 24 * 60 * 60 + " секунд")
    } else if (howMany[howMany.length - 1] === 'm') {
        alert("В " + parseInt(howMany) + " месяцах " + parseInt(howMany) * 30 * 24 * 60 * 60 + " секунд")
    } else {
        alert("Ну это уже не то, что нам нужно!(")
    }

}

countSeconds()
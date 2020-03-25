let money = prompt("Ваш бюджет на месяц?", "1000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "xxxx-xx-xx");

console.log(money);
console.log(time);


let appData = {
    budget : money,
    timeData : time,
    expenses: {},
    optionalExpenses : {},
    income : [],
    savings : false,
}

console.log(appData.budget);

let a = prompt("Введите обязательную статью расходов в этом месяце", "");
let b = prompt("Во сколько обойдется?", "");
let c = prompt("Введите обязательную статью расходов в этом месяце", "");
let d = prompt("Во сколько обойдется?", "");

appData.expenses[a] = b;
appData.expenses[c] = d;


alert(appData.budget / 30);

console.log(appData.expenses[a] '=' appData.expenses[b]);
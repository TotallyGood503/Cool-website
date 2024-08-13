////? Alert (Попередження):
////? Використовується для відображення повідомлення користувачу з кнопкою "OK". Наприклад:
////? window.alert("Це попередження!");
////? Prompt (Запит):
////? Використовується для отримання введеного користувачем значення. Він також має кнопки "OK" і "Cancel". Наприклад:
////? let result = window.prompt("Будь ласка, введіть своє ім'я", "Гість");
////? Confirm (Підтвердження):
////? Використовується для підтвердження або скасування дії користувачем. Має кнопки "OK" і "Cancel". Наприклад:
////? let result = window.confirm("Ви впевнені, що хочете видалити цей елемент?");

let result = 0
let username = prompt("Введіть ваше ім'я:")

let test = confirm(username + ", готові почати тест?")

let questions = [
    {question:'85 + 40?', input:'125'},
    {question:'Столиця України?', input:'Київ'},
    {question:'цей сайт для жарту?', input:'Так'},
    {question:'78 - 24?', input:'54'},
    {question:'5 * 8?', input:'40'},
    {question:'Столиця Франції?', input:'Париж'},
    {question:'Яка мова дуже популярна в світі?', input:'Англійська'},
    {question:'20 / 2?', input:'10'},
    {question:'Най агресивніша мова? (По звучанню)', input:'Німецька'},
    {question:'Нарідна мова України?', input:'Українська'},
    {question:'75 + 80?', input:'155'},
    {question:'На якій мові це написали? (пишіть на англ.)', input:'JavaScript'}
]
if(test) {
    for(let i = 0; i < questions.length; i++) {
        let question = prompt(questions[i].question)
        if(question==questions[i].input) result+=1
    }
    alert(username+", ваш результат: "+result)
}

   

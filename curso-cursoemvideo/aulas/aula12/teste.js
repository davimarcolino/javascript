var data = new Date()
var dia = data.getDate()
var mêsNum = data.getMonth()
switch (mêsNum) {
    case 0:
        var mêsNome = 'Janeiro'
        break
    case 1:
        var mêsNome = 'Fevereiro'
        break
    case 2:
        var mêsNome = 'Março'
        break
    case 3:
        var mêsNome = 'Abril'
        break
    case 4:
        var mêsNome = 'Maio'
        break
    case 5:
        var mêsNome = 'Junho'
        break
    case 6:
        var mêsNome = 'Julho'
        break
    case 7:
        var mêsNome = 'Agosto'
        break
    case 8:
        var mêsNome = 'Setembro'
        break
    case 9:
        var mêsNome = 'Outubro'
        break
    case 10:
        var mêsNome = 'Novembro'
        break
    case 11:
        var mêsNome = 'Dezembro'
        break
}
var ano = data.getFullYear()
console.log(`Hoje é dia ${dia} de ${mêsNome} de ${ano}`)
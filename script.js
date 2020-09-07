var num = ''
var num2 = ''
var tempOp = ''
var dec = 0
var varDecEntered = 0
function appendString(n) {
    if (n >= '0' && n <= '9') {
        if (dec == 1) {
            if (varDecEntered == 1) {
                num = num + '.' + n
                varDecEntered = 0
            }
            else
                num = num.toString() + n.toString()
        }
        else
            num = num + n
        document.getElementById('inputtext').value = num2 + tempOp + num
    }
    else {
        performOp(n)
        document.getElementById('inputtext').value = num2 + tempOp
    }
}
function performOp(opr) {
    if (tempOp == '')
        num2 = num
    else if (num2 != '' && num != '') {
        num2 = parseFloat(num2)
        num = parseFloat(num)
        switch (tempOp) {
            case '+': num2 = num2 + num
                break;
            case '-': num2 = num2 - num
                break;
            case 'x': num2 = num2 * num
                break;
            case '/': num2 = num2 / num
                break;
            case '%': num2 = num2 % num
                break;
            case '^': num2 = Math.pow(num2, num)
                break;
        }
    }
    tempOp = opr
    num = ''
    dec = 0
    varDecEntered = 0
}
function result() {
    performOp()
    num = num2
    num2 = ''
    tempOp = ''
    dec = 0
    varDecEntered = 0
    document.getElementById('inputtext').value = num
}
function backspace() {
    opr = ''
    if (num == '') {
        if (opr == '' && tempOp == '') {
            num2 = Math.floor(num2 / 10)
            num = num2
            num2 = ''
        }
        else
            tempOp = ''
    }
    else {
        num = Math.floor(num / 10)
        if (num == 0) {
            num = ''
            dec = 0
            varDecEntered = 0
        }
    }
    document.getElementById('inputtext').value = num2 + tempOp + num
}
function unary(opr) {
    performOp(opr)
    switch (opr) {
        case 'sin': num2 = Math.sin(parseFloat(num2))
            break
        case 'cos': num2 = Math.cos(parseFloat(num2))
            break
        case 'tan': num2 = Math.tan(parseFloat(num2))
            break
        case '!': num2 = factorial(parseFloat(num2))
            break
        case 'log': num2 = Math.log10(parseFloat(num2))
            break
        case 'pow2': num2 = Math.pow(parseFloat(num2), 2)
            break
        case 'sqrt': num2 = Math.sqrt(parseFloat(num2))
            break
        case 'invert': num2 = 1 / parseFloat(num2)
            break
        case '-1': num2 = (-1) * parseFloat(num2)
            break
    }
    document.getElementById('inputtext').value = num2
}
function factorial(m) {
    return m > 0 ? m * factorial(m - 1) : 1
}
function decimal() {
    if (dec == 0) {
        varDecEntered = 1
        dec = 1
        document.getElementById('inputtext').value = num2 + tempOp + num + '.'
    }
}
function allClear() {
    num = ''
    num2 = ''
    tempOp = ''
    dec = 0
    varDecEntered = 0
    document.getElementById('inputtext').value = ''
}
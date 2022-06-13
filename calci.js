function f(b) {
    if (b == 'c') {
        document.getElementById('box3').value = "";
        return;
    }
    box3 = document.getElementById('box3').value;
    if (box3 == 0 && b == 0)
        return;
    if (b == '+' || b == '-' || b == '*' || b == '/') {
        opr = b;
        num = parseFloat(box3);
        document.getElementById('box3').value = b;
        return;
    }
    if (b == '=') {
        num1 = parseFloat(box3);
        switch (opr) {
            case '+':
                ans = num + num1;
                break;
            case '-':
                ans = num - num1;
                break;
            case '*':
                ans = num * num1;
                break;
            case '/':
                ans = parseInt(num / num1);
                break;
        }
        document.getElementById('box3').value = ans;
        return;
    }
    if (!isNaN(document.getElementById('box3').value)) {
        document.getElementById('box3').value += b;
    } else
        document.getElementById('box3').value = b;
}
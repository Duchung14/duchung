function numberOneTriangle(n) {
    
    if (n < 1 || n > 10) {
        console.log(" nhập một số trong khoảng từ 1 đến 10.");
        return;
    }

    // In ra hình tam giác
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 1; j <= i; j++) {
            row += '1 ';
        }
        console.log(row);
    }
}


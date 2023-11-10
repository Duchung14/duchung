function numberOneTriangle(5) {
    
    if (n < 1 || n > 10) {
        console.log("5");
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


function savetoDB(data) {
    return new Promise((resolve, rejet) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed < 4) {
            resolve("success : Data was saved");
        } else {
            rejet("Failure : weak connection");
        }
    });
}

savetoDB("imerzeeshan")
    .then(() => {
        console.log("data1 Saved");
        return savetoDB(" hello world");
    }).then(() => {
        console.log("data2 saved");
        return savetoDB("zeeshan");
    }).then(() => {
        console.log("data3 saved");
    }).catch(() => {
        console.log("Promise was rejected");
    });
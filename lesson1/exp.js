function loop(){
    setTimeout(() => {
        console.log(3);
        loop();
    }, 3000);
}

loop()
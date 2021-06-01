function mudaCorSite () {
    function getRandomNumber(min, max) {
        return Math.random() * (max - min) + min;
    };

    function getNumber() {
        return parseInt((getRandomNumber(0, 999999))).toString()
    };

    document.addEventListener('click', () => setColor())

    function setColor() {
        let num = getNumber();
        while(num.length < 6) {
            num = "0" + num;
        }
        document.body.style.backgroundColor = `#${num}`;
    };
    setColor();
};
mudaCorSite();
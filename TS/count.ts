let nbr = 0;

let strings: string[] = [] // an empty array of strings in typescript

const change = (n: number): void => {
    nbr += n;
    display();
}

const display = (): void => {
    let num = <HTMLInputElement>document.getElementById("num");
    if(num != null){
        num.value = nbr.toString();
        // num.style.width = "200px";
        num.style.color = (nbr % 2 == 0) ? "blue": "black";
        num.style.fontWeight = (nbr % 1 == 0) ? "bold" : "normal"
    }
}
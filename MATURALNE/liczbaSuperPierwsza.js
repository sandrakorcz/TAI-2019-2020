function digits (n) {
    var suma = 0;
    var x;
    while (n>0) {
        x=n%10;
        suma=suma+x;
        n=n-x;
        n=n/10;
    }
    return suma;
}

function sp (n) {
    return zadanie2 (n) && digits (n);
}

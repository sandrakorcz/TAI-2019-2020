function zadanie2 (n) {
    var i; //dzielnik
    if (n<2) return false;
    for  (i=2,i*i<=n,i++)
          if (n%i==0) return false;
    return true;
}

function bintangGenerator(n){
    for(i=1; i<=n; ++i){
        for(x=1; x<=i; ++x){
                process.stdout.write("*")
        }
        console.log()
    }
    for(i=1; i<=n; ++i){
        for(y=n-i; y>=1; --y){
            process.stdout.write("*")
        }
        console.log()
    }
}
bintangGenerator(5)
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


function bintangGenerator(n){
    for(i=0; i<=n; ++i){
        for(x=1; x<=i; ++x){
                process.stdout.write("*")
            }
            console.log()
        for(y=n-i; y>=1; y--){
            process.stdout.write(" ")
        }
    }
    for(i=0; i<=n; ++i){
        for(x=0; x<=i; ++x){
            process.stdout.write(" ")
        }
        for(y=n-i; y>0; y--){
            process.stdout.write("*")
        }
        console.log()
    }
}

bintangGenerator(5)
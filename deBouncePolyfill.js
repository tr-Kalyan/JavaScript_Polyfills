function customDebounce(func,wait){
    let timeout  //decalre timeout variable

    return function(...args){
        //clear any existing setTimeout
        clearTimeout(timeout);


        //assign setTimeout to timeout variable

        timeout = setTimeout(()=>{
            func.apply(this,args);
        },wait)
    }
}
function throttlePolyfill(func,limit){
    //on first event, value will be 0
    //on each func call, lastCall will be updated with the time at which func is called
    let lastCall = 0;

    return function(...args){
        //Time at which the func is called currently
        let now = Date.now();

        if(now-lastCall>=limit){

            //last call will be updated with now
            //only if currentCall - LastCall >= limit;
            lastCall = now;

            func.apply(this,args);
        }
    }
}
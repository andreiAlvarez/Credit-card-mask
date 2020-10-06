// Solution 1 

const maskify = cc => {
    if(cc.length<=4)
    {
        return cc;
    }
    var i=0;
    while(i<cc.length-4)
    {
        cc=cc.replace(cc[i],'#');
        i++;
    }
    return cc;
}

// solution 2


const maskify = cc => cc.length <= 4 ? cc : cc.slice(0, -4).replace(/./g, '#') + cc.slice(-4);

mainCalculatorBody.addEventListener("mousedown",eventHandeler,false)
mainCalculatorBody.addEventListener("mouseup",eventHandeler,false)


function eventHandeler(e){
    if(e.target && e.target.nodeName)
    {
        const classList = e.target.classList;

        if(classList.contains('btn')) {
            classList.toggle('pressed')
        }
        if(classList.contains('btnRight')) {
            classList.toggle('pressed')
        }

        if(classList.contains('topBtn')) {
            classList.toggle('pressed')
        }

    }
}
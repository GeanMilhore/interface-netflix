const minfo = document.getElementById('btn-mais-info')

if (minfo){
    minfo.addEventListener('click',function(){
        iniciaModal('mais-informacoes')
    })

    function iniciaModal(modalID){
        const pop = document.getElementsByClassName(modalID)
        pop[0].classList.add('mostrar')
        
        pop[0].addEventListener('click',(e)=>{
            if(e.target.className == "mais-informacoes mostrar" || e.target.className == "fechar"){
                pop[0].classList.remove('mostrar')
            }
        })
    }




}
const minfo = document.getElementById('btn-info')

if (minfo){
    minfo.addEventListener('click', function(){
        iniciaModal('pop-info')
    })
    
    function iniciaModal(modalID){
        const modal = document.getElementById(modalID)
        console.log(modal)
        modal.classList.add('mostrar')
        modal.addEventListener('click', (e) => {
            if (e.target.id == modalID || e.target.className == "fechar"){
                modal.classList.remove('mostrar')
            }
        })

    }
}

iniciaModal('pop-info')
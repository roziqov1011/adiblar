let elItem =  document.querySelectorAll('.list__item')



elItem.forEach((e,i)=>{
      e.classList.add('unrotate')
      e.addEventListener('click', (evnt)=>{
            elItem.forEach((j,k)=>{
                  console.log(evnt.currentTarget.id);
                  if(evnt.currentTarget.id == j.id){
                        j.classList.toggle('rotate')
                        j.classList.remove('unrotate')
                  }else{
                        j.classList.remove('rotate')
                        j.classList.add('unrotate')
                  }
            })
      })
})
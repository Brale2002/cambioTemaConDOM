
  document.getElementById('cambiaDia').addEventListener('click', function() {
    localStorage.removeItem('type')
    localStorage.setItem('type', 'dia');
    window.location.href='./cambio.html'

  });
  document.getElementById('cambiaNoche').addEventListener('click', function() {
    localStorage.removeItem('type')
    localStorage.setItem('type', 'noche'); 
    window.location.href='./cambio.html'
    
  });

  function noche (){
    var elBodyClass = document.querySelector('body').classList;
    let type = localStorage.getItem('type')
    if (type === "noche") {
      elBodyClass.add(`${type}`)
      
    }
    else if(type === "dia"){
      elBodyClass.add(`${type}`)
    }
  
    
  }

  noche()



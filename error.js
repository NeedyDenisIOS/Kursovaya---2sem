function loadXml() { 
    var xhr = new XMLHttpRequest(); 
    xhr.open('GET', 'error.xml', true); 
   
    xhr.onreadystatechange = function() { 
      if (xhr.readyState === 4 && xhr.status === 200) { 
        var xmlDoc = xhr.responseXML; 
        var messageElement = xmlDoc.getElementsByTagName('message')[0]; 
  
        var errorMessage = messageElement.innerHTML; 
  
        let textElement = document.querySelector('.text'); 
        textElement.innerHTML = errorMessage;
      } 
    }; 
   
    xhr.send(); 
  } 
  
  loadXml();

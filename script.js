    document.getElementById('login-button').addEventListener('click', function() {
    var Username = document.getElementById('Username').value;
    var Password = document.getElementById('Password').value;
  
    // Aquí puedes realizar la lógica de autenticación, como enviar una solicitud a un servidor o verificar las credenciales localmente.
    // En este ejemplo, simplemente comprobamos que el usuario sea "admin" y la contraseña sea "password".
  
    if (Username === 'fustos' && Password === 'familia4') {
      // alert('Inicio de sesión exitoso');
      window.location.href = 'http://152.74.93.32:5628/';
    }else if (Username === 'Grupo 1' && Password === 'grupo1'){
      window.location.href = 'http://152.74.93.32:1101/'; 
    }else if (Username === 'Grupo 2' && Password === 'grupo2'){
      window.location.href = 'http://152.74.93.32:1102/'; 
    }else if (Username === 'Grupo 3' && Password === 'grupo3'){
      window.location.href = 'http://152.74.93.32:1103/'; 
    }else if (Username === 'Grupo 4' && Password === 'grupo4'){
      window.location.href = 'http://152.74.93.32:1104/'; 
    }else if (Username === 'Grupo 5' && Password === 'grupo5'){
      window.location.href = 'http://152.74.93.32:1105/'; 
    }else if (Username === 'Grupo 6' && Password === 'grupo6'){
      window.location.href = 'http://152.74.93.32:1106/'; 
    }else if (Username === 'Grupo 7' && Password === 'grupo7'){
      window.location.href = 'http://152.74.93.32:1107/'; 
    }else if (Username === 'Grupo 8' && Password === 'grupo8'){
      window.location.href = 'http://152.74.93.32:1108/'; 
    }else if (Username === 'Grupo 9' && Password === 'grupo9'){
      window.location.href = 'http://152.74.93.32:1109/'; 
    }else if (Username === 'Grupo 10' && Password === 'grupo10'){
      window.location.href = 'http://152.74.93.32:1110/'; 
    }else if (Username === 'Grupo 11' && Password === 'grupo11'){
      window.location.href = 'http://152.74.93.32:1101/'; 
    }else if (Username === 'Grupo 12' && Password === 'grupo12'){
      window.location.href = 'http://152.74.93.32:1102/'; 
    }else if (Username === 'Grupo 13' && Password === 'grupo13'){
      window.location.href = 'http://152.74.93.32:1103/'; 
    }else if (Username === 'Grupo 14' && Password === 'grupo14'){
      window.location.href = 'http://152.74.93.32:1104/'; 
    }else if (Username === 'Grupo 15' && Password === 'grupo15'){
      window.location.href = 'http://152.74.93.32:1105/'; 
    }else if (Username === 'Grupo 16' && Password === 'grupo16'){
      window.location.href = 'http://152.74.93.32:1106/'; 
    }else if (Username === 'Grupo 17' && Password === 'grupo17'){
      window.location.href = 'http://152.74.93.32:1107/'; 
    }else if (Username === 'Grupo 18' && Password === 'grupo18'){
      window.location.href = 'http://152.74.93.32:1108/'; 
    }else if (Username === 'Grupo 19' && Password === 'grupo19'){
      window.location.href = 'http://152.74.93.32:1109/'; 
    }else if (Username === 'Grupo 20' && Password === 'grupo20'){
      window.location.href = 'http://152.74.93.32:1110/'; 
    } else {
      alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
    }
    
  });
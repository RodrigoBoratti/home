function enviar()
{
   var nome = document.getElementById("nomeid").value;
   var achou = false;
   
   
   if(nome===null)
   {
	   achou = true;
   }
   
   for(i=0;i<nome.length;i++)
   {
	   var c = nome.charCodeAt(i);	   
	   if((c >= 48 && c <= 64))
       {
			achou = true;			
	   }  	   
   }  
   
	
   if(achou)
   {
	 alert ("Nome inválido");
	 document.form.focus();
	 return false;	
   }
   
   var email = document.getElementById("emailid").value;
   var valido = false;
   var cont=0;
   var pos=2;
   
   
   if(email.charAt(0)!== '.' && email.charAt(0)!=='@' && email.charAt(0) !== ' ')
   {
	   
	   for(i=1;i<email.length;i++)
       { 
            if(email.charAt(i)==='@')
            {
                cont++;
                pos = i;
            }
	   }
	   
	   if(cont===1)
       {
            if(email.charAt(pos+1)!=='.' && email.charAt(pos+1)!=='@'&& email.charAt(pos+1)!== ' ')
            {
                for(i=pos+2;i<email.length;i++)
                {
                        
                    if(email.charAt(i)=== '.' && i+1 !== email.length)
                    {
                        if(email.charAt(i+1)!== '.' && email.charAt(i+1)!== '@' && email.charAt(i+1)!== ' ')
                        {
                            valido=true;
                        } 
                    }
                }
            }               
        }
	}
	
	if(!valido)
	{
		alert ("E-mail inválido");
		document.form.emailid.focus();
		return false;
	}
	
	var tel = document.getElementById("foneid").value;
	var telValido = false;
	
	if(tel.length !== 9)
	{
		alert ("Número de telefone inválido");
		document.form.foneid.focus();
		return false;		
	}
	
	if(isNaN(tel))
	{
		alert ("Número de telefone inválido");
		document.form.foneid.focus();
		return false;
	}
		
	
}
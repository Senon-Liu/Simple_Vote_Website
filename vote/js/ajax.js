//����AJAX ����
function InitAjax()
{
    var ajax=null;
    try{
        ajax= new ActiveXObject('Msxml2.XMLHTTP');
    }catch(e){
        try{
            ajax= new ActiveXObject('Microsoft.XMLHTTP');
        }catch(e){
            try{
                ajax= new XMLHttpRequest();
            }catch(e){}
        }
    }
    return ajax;
}

//AJAXӦ��ʵ��
function sendajax( sURL , obj, pdata)
{
    var ajax = InitAjax();
    if( pdata == false)
    {
        ajax.open('GET', sURL, true); 
        ajax.send(null);
    }else{
        ajax.open('POST', sURL, true);
        ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        ajax.send( pdata );
    }
    ajax.onreadystatechange = function() {
        if(ajax.readyState == 4 )
        {
            if (ajax.status != 200)
            {
                self.status="���ʳ��������ԣ�";
            }else{
            //    eval(ajax.responseText);
				obj.innerHTML = ajax.responseText;
                delete ajax;
                ajax=null;
                CollectGarbage();
            }
        }
    }
}
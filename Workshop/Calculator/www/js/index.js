var ck = document.getElementById("id1");

function abc(obj)
{
    var pushed=obj.innerHTML;
    if(pushed == "=")
        {
            ck.innerHTML=eval(ck.innerHTML);
        }
    else if(pushed=="AC")
        {
            ck.innerHTML="0"; 
        }
    else
        {
            if(ck.innerHTML=="0")
            {
                ck.innerHTML=pushed;
            }
            else
            {
                ck.innerHTML = ck.innerHTML+pushed;
            }
        }
}
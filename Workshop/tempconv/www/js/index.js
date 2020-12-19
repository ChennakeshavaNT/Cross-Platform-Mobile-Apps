function fc()
{
    var x = document.getElementById("id1").value;
    document.getElementById("id2").value=((x-32)*5)/9;
}
function cf()
{
    var y = document.getElementById("id2").value;
    document.getElementById("id1").value=((y*9)/5)+32;
}
function del()
{
    document.getElementById("id1").value=clearInterval;
    document.getElementById("id2").value=clearInterval;
}
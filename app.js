let currentplayer='X';
function chance(id)
{
    const btn=document.getElementById(id);
    if (btn.textContent === "") 
    {
        btn.textContent = currentplayer;
        if (checkwin(currentplayer))
        {
            document.getElementById('result').innerHTML='<h3>WINNER : '+currentplayer+'</h3>'
            return;
        }
        else if (draw()) 
        {
            document.getElementById('result').innerHTML = "<h3>It's a Draw!</h3>";
            return;
        }
        else
        {currentplayer = (currentplayer === "X") ? "O" : "X";}
    }
    }

    function checkwin(player)
{
    const wins=
    [
        ['btn1','btn2','btn3'],
        ['btn4','btn5','btn6'],
        ['btn7','btn8','btn9'],
        ['btn1','btn4','btn7'],
        ['btn2','btn5','btn8'],
        ['btn3','btn6','btn9'],
        ['btn1','btn5','btn9'],
        ['btn3','btn5','btn7']
    ];
    for (let i = 0; i < wins.length; i++) 
    {
        const a = document.getElementById(wins[i][0]).textContent;
        const b = document.getElementById(wins[i][1]).textContent;
        const c = document.getElementById(wins[i][2]).textContent;
        console.log(a)
        console.log(b)
        console.log(c)
        if (a === player && b === player && c === player) 
        {
            for (let i = 1; i <= 9; i++) 
            {
                document.getElementById("btn" + i).disabled = true;
            }
            return true;
        }
    }
    return false;
}
function resetbutton()
{
    for (let i = 1; i <= 9; i++) 
    {
        const btn =document.getElementById("btn" + i)
        btn.textContent=''
        btn.disabled=false
    }
    currentplayer='X'
    document.getElementById('result').innerHTML=''
}
function draw()
{
    for(let i=1;i<=9;i++)
    {
        if (document.getElementById('btn'+i).textContent==='')
        {return false}
    }
    return true
}
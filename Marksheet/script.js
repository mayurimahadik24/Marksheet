function closeCreateProfile() {
    document.getElementById('createP').style.display = 'none';
}

function createProfile(){
    document.getElementById('createP').style.display = 'block';
}

function closeMarkForm() {
    document.getElementById('entrMarks').style.display = 'none';
}

function createMarkForm(){
    document.getElementById('entrMarks').style.display = 'block';
}

function handleSubmit(){
        var email=String(document.getElementById('inEmail').value);
        var seat=String(document.getElementById('inSeat').value);
        var name=String(document.getElementById('inName').value);
        var branch=String(document.getElementById('inBranch').value);
        var year=String(document.getElementById('inYear').value);
        console.log(email,seat,branch,year,name)
        document.getElementById('name').innerHTML=name;
        document.getElementById('email').innerHTML=email;
        document.getElementById('seat').innerHTML=seat;
        document.getElementById('branch').innerHTML=branch;
        document.getElementById('year').innerHTML=year;
        document.getElementById('createP').style.display = 'none';
        return false;
}

function handleChange(input){
    if(input < 0){
        alert("Min value 0");
        input.value=0;
    }
    if(input > 20){
        alert("Max value is 20");
        input.value=25;
    }
}
function handleSemChange(input){
    if(input < 0){
        alert("Min value 0");
        input.value=0;
    }
    if(input > 80){
        alert("Max value is 80");
        input.value=80;
    }
}

function calculate(){
    //engineering mathematics input
    var emu1=parseInt(document.getElementById('emu1').value);
    var emu2=parseInt(document.getElementById('emu2').value);
    var emsem=parseInt(document.getElementById('emsem').value);
    var emu=(emu1+emu2)/2;
    var totem=emu+emsem;
    //computer network input
    var cnu1=parseInt(document.getElementById('cnu1').value);
    var cnu2=parseInt(document.getElementById('cnu2').value);
    var cnsem=parseInt(document.getElementById('cnsem').value);
    var cnu=(cnu1+cnu2)/2;
    var totcn=cnu+cnsem;
    //operating system input
    var osu1=parseInt(document.getElementById('osu1').value);
    var osu2=parseInt(document.getElementById('osu2').value);
    var ossem=parseInt(document.getElementById('ossem').value);
    var osu=(osu1+osu2)/2;
    var totos=osu+ossem;
    //automata theory input
    var atu1=parseInt(document.getElementById('atu1').value);
    var atu2=parseInt(document.getElementById('atu2').value);
    var atsem=parseInt(document.getElementById('atsem').value);
    var atu=(atu1+atu2)/2;
    var totat=atu+atsem;
    //computer oragnization input
    var coau1=parseInt(document.getElementById('coau1').value);
    var coau2=parseInt(document.getElementById('coau2').value);
    var coasem=parseInt(document.getElementById('coasem').value);
    var coau=(coau1+coau2)/2;
    var totcoa=coau+coasem;
    //engineering mathematics
    document.getElementById('ut1em').innerHTML=emu1;
    document.getElementById('ut2em').innerHTML=emu2;
    document.getElementById('emavg').innerHTML=emu;
    document.getElementById('semem').innerHTML=emsem;
    document.getElementById('emtotal').innerHTML=totem;
    //cnnd
    document.getElementById('ut1cn').innerHTML=cnu1;
    document.getElementById('ut2cn').innerHTML=cnu2;
    document.getElementById('cnavg').innerHTML=cnu;
    document.getElementById('semcn').innerHTML=cnsem;
    document.getElementById('cntotal').innerHTML=totcn;
    //operating sysytem
    document.getElementById('ut1os').innerHTML=osu1;
    document.getElementById('ut2os').innerHTML=osu2;
    document.getElementById('osavg').innerHTML=osu;
    document.getElementById('semos').innerHTML=ossem;
    document.getElementById('ostotal').innerHTML=totos;
    //automata theory
    document.getElementById('ut1at').innerHTML=atu1;
    document.getElementById('ut2at').innerHTML=atu2;
    document.getElementById('atavg').innerHTML=atu;
    document.getElementById('semat').innerHTML=atsem;
    document.getElementById('attotal').innerHTML=totat;
    //computer architecture
    document.getElementById('ut1coa').innerHTML=coau1;
    document.getElementById('ut2coa').innerHTML=coau2;
    document.getElementById('coaavg').innerHTML=coau;
    document.getElementById('semcoa').innerHTML=coasem;
    document.getElementById('coatotal').innerHTML=totcoa;
    var total=(totem+totcn+totos+totat+totcoa)/5;
    document.getElementById('total').innerHTML=total;
    document.getElementById('entrMarks').style.display = 'none';
    return false;
}
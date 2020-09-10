$('#valor').on('blur',function(){

    let valor=$('#valor').val()
    let coins=moneyToCoin(valor)
    $('#real').val(parseInt(coins/100))
    $('#50cents').val(parseInt(coins/50))
    $('#25cents').val(parseInt(coins/25))
    $('#10cents').val(parseInt(coins/10))
    $('#5cents').val(parseInt(coins/5))
    
})

function moneyToCoin(x){
 let valor
    
    if(x.indexOf('.') >- 1 || x.indexOf(',') >- 1 ){
    
        x = x.replace(',','.')
    }
    valor = Number(x)
    return valor * 100;
}
    

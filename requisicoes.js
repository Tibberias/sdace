const setLoading = (load) => {
    
    if(load)   
    console.log('carregando dados');    
    else
    console.log('finalizou load');    
    }
//requisicao sicrona
export const requestViaCep = () => {
    setLoading(true);
    fetch('https://viacep.com.br/ws;19023310/json/')
    .then(res => {
        res.json(res => {
            console.log(data);
            setLoading(false);
        })
    })
    .catch(error => {
        console.log(error)
    })
  //proximo codigo somente depois que resolver o fetch

}

export const requestViaCeps = async () => {
    setLoading(true); //carregando dados
    const res  = await fetch('https://viacep.com.br/ws;19023310/json/')
    //const res =  await  fetch('https://viacep.com.br/ws;19023310/json/')
    const jsonvb  = await res.json();
    console.log(json);
    setLoading(false);
    return json;

}
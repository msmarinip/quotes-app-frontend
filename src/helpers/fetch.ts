
const baseUrl = process.env.REACT_APP_API_URL;


//Le mando a la pag del backend los datos y ella hace lo que tiene que hacer
const fetchSinToken = ( endpoint: string, data?: any, method: string = 'GET' ) => {
    
    const url = `${ baseUrl }/${ endpoint }`; 

    if ( method === 'GET'){
        return fetch(url);
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify( data )
            //tengo que anexar el body como un json screen
        } );
    }

}

const fetchConToken = ( endpoint: string, data?: any, method: string = 'GET' ) => {
    //en esta voy a tener que mandar los headers, porque necesito el token
    const url = `${ baseUrl }/${ endpoint }`; 
    const token = localStorage.getItem('token') || ''; 
    //por si regresa null que devuelva vacío
    if ( method === 'GET'){
        return fetch(url, {
            method,
            headers: {
                'x-token': token
            }
        });
    } else {
        return fetch( url, {
            method,
            headers: {
                'Content-type': 'application/json',
                'x-token': token
            },
            body: JSON.stringify( data )
            //tengo que anexar el body como un json screen
        } );
    }

}

export {
    fetchSinToken,
    fetchConToken
}
import { useEffect, useState } from 'react';

import { AppDispatch } from '../../store/store'
import { useAppDispatch } from '../../hooks/reduxHooks';

import { fetchSinToken } from '../../helpers/fetch'
import { Quote } from '../../interfaces/interfaces';
import '../../styles/index.css'

export const Quotes = () => {

    const [quotes, setQuotes] = useState<Quote[]>();
    const dispatch = useAppDispatch();
    const quotesList = () => {
        return async (dispatch: AppDispatch) => {
            const resp = await fetchSinToken('quotes/');
            const body = await resp.json() 

            if(body){
                // console.log(JSON.stringify(body.quote, null,3))
                setQuotes(body.quote);
            }
        }
    }

    useEffect(() => {
        dispatch(quotesList());
    }, [dispatch])
    

    return (
        <div className='container-fluid'>
            <p className="fs-2">Quotes</p>
            { quotes?.map((quote) => {
               return (
                <div key={quote._id}>
                    <span>{quote.author?.name}</span><br />
                    <span>{quote.quote}</span>
                    <hr />
                </div>
               )
            })}
        </div>
    )
}


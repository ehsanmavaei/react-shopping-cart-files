import { getSuggestedQuery } from '@testing-library/dom'
import React from 'react'
import {suggestion} from '../Data'
import SuggestionRender from './SuggestionRender'

const Suggestion = () => {
    return (
        <div className="suggetion">
           <h3>suggestion</h3>
            <hr/>
            {suggestion.map((items)=>(
                <SuggestionRender items={items} key={items.id} name={"ehsan"}/>
            ))}
        </div>
    )
}

export default Suggestion

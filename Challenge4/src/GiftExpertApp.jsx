import React, { useState } from 'react'

const categories = ['empanada', 'hamborguesa']
 

export const GiftExpertApp = () =>{

    const [categories, setCategories] = useState([]) 
    const [category, setCategory] = useState('')

    const onAddCategory= () => { 
    // setCategries([...categories, 'hola']) 
    setCategories(list=> [...list, category])
    setCategory('')

    }
    const onSetCategory = (evt) =>{
        setCategory(evt.target.value)
    }
    return(
        <>
         <h1>GiftExpert</h1> 
         <input  placeholder ="Ponga una categoria" type="text" value={category}
         onChange={(event) => onSetCategory(event)}/>
         <button onClick = {()=> onAddCategory()}>Añadala Pa</button> 
         <ol>
                    {
                        categories.map(
                            (category, key) => 
                            {
                                return <li key={ key }>{category}</li>
                            }
                        )
                    }
                </ol> 
        </>
    )
}



export default GiftExpertApp
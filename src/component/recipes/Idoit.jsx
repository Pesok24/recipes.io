import React from 'react';

function (props) {
    useEffect(() => {
        getRecipes();
    }, []);
    const getRecipes = async (value) => {
        const responce = await fetch('/addtomy', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({data: value}),
        });
        await console.log(responce)
    }
    console.log(props.params)
        return (
            <button onClick={()=> getRecipes(props.params)}>Я ГОТОВЛЮ</button>
        )
}
export default Iamcookingcomponent;
}

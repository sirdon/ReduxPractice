import React from 'react'

const Fun =(props)=> {
    const { ninjas,deleteData } = props;
        const ninjaList = ninjas.map(ninja => {
            // if(ninja.age>23){
            //     return (
                    // <div className="ninja" key={ninja.id}>
                    //     <div>Name:{ninja.name}</div>
                    //     <div>Age:{ninja.age}</div>
                    //     <div>ID:{ninja.id}</div><br></br>
                    // </div>
            //     )
            // }else return null;
            return ninja.age>20 ? (
                <div className="ninja" key={ninja.id}>
                        <div>Name:{ninja.name}</div>
                        <div>Age:{ninja.age}</div>
                        <div>ID:{ninja.id}</div>
                        <button onClick={()=>{deleteData(ninja.id)}}>Delete</button>
                    </div>
            ):null;
        });

    return (
        <div className="ninjaList">
            {ninjaList}
        </div>
    )
}

export default Fun
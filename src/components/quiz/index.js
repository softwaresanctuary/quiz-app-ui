import React, {useEffect, useState} from "react";

const Quiz = (props) => {
    const [state, setState] = useState([])
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        fetch("http://localhost:9001/quiz/list")
            .then(res => res.json()
                .then(jsonObj => setState(jsonObj))
                .catch(err2 => setHasError(true)))
            .catch(err2 => setHasError(true));
    }, []);
    return (
        <div>
            {
                hasError ?
                        <div>

                        </div> :
                        (
                            <table>
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Status</th>
                                            <th>Category</th>
                                        </tr>
                                    </thead>
                                {
                                    state.map(
                                        d => (
                                            <tr key={d.id}>
                                                <td >{d.name}</td>
                                                <td>{d.status}</td>
                                                <td>{d.category}</td>
                                            </tr>
                                        )
                                    )
                                }
                            </table>
                        )
            }
        </div>
    )

}

export default Quiz
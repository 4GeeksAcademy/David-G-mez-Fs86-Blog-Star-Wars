import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { useParams } from "react-router";

const VehicleOverview = () => {

    const { actions, store } = useContext(Context);
    let { id } = useParams();

    useEffect(() => {
        actions.setLoading(true);


        setTimeout(() => {
            actions.getVehicleOverViews(id);
            actions.setLoading(false);
        }, 1000);


        return () => {
            actions.setLoading(false);
        };
    }, [id]);

    if (store.loading) {
        return <p className="d-flex justify-content-center align-items-center"><div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
        </div></p>;
    }


    const imageUrl = `https://github.com/tbone849/star-wars-guide/blob/master/build/assets/img/vehicles/${id}.jpg?raw=true`;

    return (<>
        <div className="d-flex justify-content-center mt-5  w-100">
            <div className="card w-75 d-flex justify-content-center p-2 border border-warning border-2 bg-transparent  " >
                <h1 className="d-flex justify-content-center"> {store.vehicleOverview.name}</h1>
                <div className="card-body w-75 d-flex flex-row gap-3">
                    <div className="character-img col-7">
                        <img src={imageUrl} alt={store.vehicleOverview.name} className="img-fluid rounded" />
                    </div>
                    <div className="character-table col-8 text-warning">
                        <table className="table table-striped text-warning">
                            <thead className="table-dark text-warning">
                                <tr>
                                    <th>Characteristic</th>
                                    <th>Details</th>
                                </tr>
                            </thead>
                            <tbody className="table-dark text-warning">
                                <tr>
                                    <td>Name</td>
                                    <td>{store.vehicleOverview.name}</td>
                                </tr>
                                <tr>
                                    <td>Model</td>
                                    <td>{store.vehicleOverview.model}</td>
                                </tr>
                                <tr>
                                    <td>Length</td>
                                    <td>{store.vehicleOverview.length}</td>
                                </tr>
                                <tr>
                                    <td>Passengers</td>
                                    <td>{store.vehicleOverview.passengers}</td>
                                </tr>
                                <tr>
                                    <td>Manufacturer</td>
                                    <td>{store.vehicleOverview.manufacturer}</td>
                                </tr>
                                <tr>
                                    <td>Class</td>
                                    <td>{store.vehicleOverview.vehicle_class}</td>
                                </tr>
                                <tr>
                                    <td>Crew</td>
                                    <td>{store.vehicleOverview.crew}</td>
                                </tr>
                                <tr>
                                    <td>Capacity</td>
                                    <td>{store.vehicleOverview.cargo_capacity}</td>
                                </tr>
                                <tr>
                                    <td>Cost in credits</td>
                                    <td>{store.vehicleOverview.cost_in_credits}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
                <div>

                </div>

                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => actions.addFavorite(store.vehicleOverview.name)}
                    >Favorito</button>
            </div>
        </div>
    </>)
}

export default VehicleOverview;
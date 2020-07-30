import React from "react";
import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import MapStyles from "../GoogleMaps/MapStyles"
// import usePlacesAutocomplete, {} from "use-places-autocomplete";
// import {Combobox, ComboboxInput} from "@reach/combobox";


const libraries = ["places"]

const mapContainerStyle = {
    width: '70vw',
    minHeight: '240px',
    marginLeft: '2em',
    marginTop: '0.5rem',
    marginBottom: '2rem',
    borderRadius: '10px',
    boxShadow: '14px 13px 24px -16px rgba(113,135,153,1)',
};

const center = {
    lat: 51.227656,
    lng: 6.765940,
};

const options = {
    styles: MapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}


export default function GoogleMaps() {


const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
});

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";

    return(
<div>
{/*            <Search/>*/}
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={13}
                center={center}
                options={options}
            />
</div>
    )
}

/*
function Search() {
    const {
        ready, value,
        suggestions: {status, data},
        setValue, clearSuggestion,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => 50.937531, lng: () => 6.960279},
            radius: 200 * 1000,
        },
    });

    return (
        <Combobox onSelect={(address) => {
            console.log(address);
        }}
        >
            <ComboboxInput
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                disabled={!ready}
                placeholder="Wo willst du suchen?"
            />
        </Combobox>
    );
}*/

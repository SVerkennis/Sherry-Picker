import React from "react";
import {GoogleMap, useLoadScript} from "@react-google-maps/api";
import MapStyles from "../GoogleMaps/MapStyles"
import usePlacesAutocomplete, { getGeocode, getLatLng,} from "use-places-autocomplete";
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxOption} from "@reach/combobox";
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    searchBox: {
        marginLeft: '2em',
},
    searchStyle: {
        borderRadius: '10px',
        width: '19.3em',
        height: '1.5rem',
        border: 'none',
        marginBottom: '0.5rem',
        zIndex: '10',
    }
}));

const libraries = ["places"]

const mapContainerStyle = {
    width: '70vw',
    minHeight: '230px',
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
};


export default function GoogleMaps() {

const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries,
});

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);

    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";


    return(
        <div>

            <Search panTo={ panTo }/>

            <GoogleMap
                id="map"
                mapContainerStyle={mapContainerStyle}
                zoom={13}
                center={center}
                options={options}
                onLoad={onMapLoad}
            />

        </div>
    );
}


function Search({ panTo }) {
    const classes = useStyles();

    const {
        ready, value,
        suggestions: {status, data},
        setValue, clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            location: {lat: () => 51.227656, lng: () => 6.765940},
            radius: 200 * 1000,
        },
    });


    return (
        <div className={classes.searchBox}>

        <Combobox
            onSelect={ async(address) => {
                setValue(address, false);
                clearSuggestions();

            try {
                const results = await getGeocode({ address });
                const { lat, lng } = await getLatLng(results[0]);
                panTo({ lat, lng });
            } catch (error) {
                console.log("error!")
            }
        }}
        >
            <ComboboxInput
                className={classes.searchStyle}
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                disabled={!ready}
                placeholder="Wo willst du suchen?"
            />
            <ComboboxPopover>
                {status === "OK" && data.map(({id, description}) => (
                    <ComboboxOption key={id} value={description} />
                ))}
            </ComboboxPopover>
        </Combobox>

        </div>
    );
}

import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceList from '../PlaceList/PlaceList';
import PlaceDetail from '../PlaceDetail/PlaceDetail';
import { connect } from 'react-redux';
import { deletePlace } from '../../redux/actionCreators';


const mapStateToProps = state => {
    return {
        placeList: state.placeList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deletePlace: key => dispatch(deletePlace(key))
    }
}


const FindPlaces = props => {
    const [selectedPlace, setSelectedPlace] = useState(null);

    const handleSelectedPlace = key => {
        const place = props.placeList.find(place => {
            return place.key === key;
        })
        setSelectedPlace(place);
    }

    const handleHideModal = () => {
        setSelectedPlace(null);
    }

    const handleDeleteItem = key => {
        props.deletePlace(key);
        setSelectedPlace(null);
    }

    let placeDetail = null;
    if (selectedPlace !== null) {
        placeDetail = <PlaceDetail
            place={selectedPlace}
            handleHideModal={handleHideModal}
            handleDeleteItem={handleDeleteItem} />
    }
    return (
        <View style={styles.container}>
            {placeDetail}
            <PlaceList placeList={props.placeList} handleSelectedPlace={handleSelectedPlace} />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    }
});


export default connect(mapStateToProps, mapDispatchToProps)(FindPlaces);
import React, { useState } from 'react';
import InputPlace from '../InputPlace/InputPlace';
import { addPlace } from '../../redux/actionCreators';
import { connect } from 'react-redux';
import { View, Button } from 'react-native';
import PickImage from '../PickImage/PickImage';




const mapDispatchToProps = dispatch => {
    return {
        addPlace: place => dispatch(addPlace(place))
    }
}

const SharePlaces = props => {
    const [inputValue, setInputValue] = useState("");
    return (
        <View>
            <PickImage />
            <InputPlace
                inputValue={inputValue}
                setInputValue={setInputValue}
                addPlace={props.addPlace}
            />

            <View style={{
                alignItems: "center"
            }}>
                <Button
                    title="Add"
                    onPress={() => {
                        if (inputValue !== "") {
                            props.addPlace({
                                key: Math.random().toString(),
                                value: props.inputValue,
                                image: {
                                    uri: "https://cdn.britannica.com/97/189797-050-1FC0041B/Night-view-Dhaka-Bangladesh.jpg"
                                }
                            });
                            setInputValue("");
                        }
                    }}
                />
            </View>

        </View>

    );
}

export default connect(null, mapDispatchToProps)(SharePlaces);
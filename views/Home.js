import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import NaverMapView, {Marker} from 'react-native-n-maps';
import findData from '../service/findSeller';

class Home extends Component {

    state = {
        latitude:0,
        longitude:0,
        markerData: null
    }

    componentDidMount()
    {
        const markerData = findData(this.state.latitude-1, this.state.latitude,
        this.state.longitude-1, this.state.longitude);

        this.setState({markerData});
    }

    //ref
    navermap = null;
    componentWillUnmount()
    {
        this.navermap = null;
    }


    render(){
        return (
            <NaverMapView
                style={styles.MapView}
                showsMyLocationButton={true}
                center={{
                    latitude: 37.5668260054857,
                    longitude: 126.978656785931,
                }}
                zoomControl={true}
                //onMapClick={(event) => { console.log(event)	}}
                onTouch={(event) => { console.log(event)}}
                ref={ref => {
                    this.navermap = ref;
                }}
                nightMode={false}
                >
                
            </NaverMapView>
            );
    }
}

const styles = StyleSheet.create({
    MapView : { flex: 1}
})

export default Home;
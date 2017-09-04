import React, { Component } from "react";
import {
  Animated,
  View,
  ListView,
  ScrollView,
  Dimensions,
  Text,
  ImageBackground
} from "react-native";

const { width, height } = Dimensions.get("window");

export default class ScrollSwagger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
      dataSource: undefined,
      maxScroll: 380 * 8 + 200,
      noOfItems: undefined,
      singleItemHeight: 320
    };
  }
  componentWillReceiveProps(props) {
    let arr = [];
    let pin = props.itemCount;
    while (pin >= 0) {
      arr.push(pin);
      pin--;
    }
    arr.reverse();
    this.setState({
      noOfItems: props.itemCount + 1,
      dataSource: arr
    });
  }
  componentWillMount() {
    let arr = [];
    let pin = this.props.itemCount;
    while (pin >= 0) {
      arr.push(pin);
      pin--;
    }
    arr.reverse();
    this.setState({
      noOfItems: this.props.itemCount + 1,
      dataSource: arr
    });
  }
  renderRow(item, index) {
    let micro = this.state.singleItemHeight / 3;
    let can = 0;
    let scrollArray = [];
    const ind = index;
    let ang = -ind * 90;
    let rotArr = [];
    while (can < 4 * this.state.noOfItems) {
      scrollArray.push(can * micro);
      var temp = rotArr[rotArr.length];
      rotArr.push(ang - 90 * can + "deg");
      can++;
    }
    let loopArray = [1, 0.6, 0.4, 0.6];
    let xArray = [0, -1000, 0, 1000];
    let opArray = [1, 0.7, 0.5, 0.7];
    let pointer = ind;
    while (pointer > 0) {
      pointer--;
      var temp = loopArray[0];
      var temp2 = xArray[0];
      var temp3 = opArray[0];
      loopArray.splice(0, 1);
      xArray.splice(0, 1);
      opArray.splice(0, 1);
      opArray.push(temp3);
      xArray.push(temp2);
      loopArray.push(temp);
    }
    let finalZ = [];
    let finalX = [];
    let finalOp = [];
    let man = 0;
    while (man < this.state.noOfItems) {
      finalZ = finalZ.concat(loopArray);
      finalX = finalX.concat(xArray);
      finalOp = finalOp.concat(opArray);
      man++;
    }
    const helixZ = this.state.scrollY.interpolate({
      inputRange: scrollArray,
      outputRange: finalZ
    });
    const helixRot = this.state.scrollY.interpolate({
      inputRange: scrollArray,
      outputRange: rotArr
    });
    const helixX = this.state.scrollY.interpolate({
      inputRange: scrollArray,
      outputRange: finalX
    });
    const helixOp = this.state.scrollY.interpolate({
      inputRange: scrollArray,
      outputRange: finalOp
    });
    if (item === this.state.noOfItems - 1) {
      return (
        <Animated.View
          key={index}
          style={{
            width: width - 40,
            height: 300,
            marginVertical: 10,
            justifyContent: "center",
            alignItems: "center",
            opacity: helixOp,
            transform: [
              { perspective: 1900 },
              { scale: helixZ },
              { rotateY: helixRot },
              { translateX: helixX }
            ],
            backgroundColor: "rgba(0,0,0,0)"
          }}
        />
      );
    }
    return (
      <Animated.View
        key={index}
        style={{
          width: width - 40,
          height: 300,
          marginVertical: 10,
          justifyContent: "center",
          alignItems: "center",
          opacity: helixOp,
          transform: [
            { perspective: 1900 },
            { scale: helixZ },
            { rotateY: helixRot },
            { translateX: helixX }
          ]
        }}
      >
        {this.props.renderCard(index)}
      </Animated.View>
    );
  }
  render() {
    return (
      <View style={{ flex: 1 }}>

        <ImageBackground
          style={{
            flex: 1,
            top: 0
          }}
          source={{
            uri: this.props.backgroundImage
              ? this.props.backgroundImage
              : "https://facebook.github.io/react/img/logo_og.png"
          }}
        >
          <Animated.ScrollView
            {...this.props}
            style={{ flex: 1, top: 0 }}
            scrollEventThrottle={16}
            contentContainerStyle={[
              {
                paddingTop: 150,
                paddingHorizontal: 20
              },
              this.props.contentContainerStyle
                ? this.props.contentContainerStyle
                : null
            ]}
            // Declarative API for animations ->
            onScroll={Animated.event(
              [
                {
                  nativeEvent: { contentOffset: { y: this.state.scrollY } }
                }
              ],
              {
                useNativeDriver: true // <- Native Driver used for animated events
              }
            )}
          >
            {this.state.dataSource.map((item, index) => {
              return this.renderRow(item, index);
            })}
          </Animated.ScrollView>
        </ImageBackground>
      </View>
    );
  }
}

import React, { Component } from 'react';
import { FlatList, Text } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
// import { DISHES } from '../shared/dishes';
import { baseUrl } from '../shared/baseUrl';

import Loading from './LoadingComponent';

// redux
import { connect } from 'react-redux';
const mapStateToProps = state => {
  return {
    dishes: state.dishes
  }
};


class Menu extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     dishes: DISHES
        // };
    }
    render() {
        if (this.props.dishes.isLoading) {
            return (<Loading />);
        } else if (this.props.dishes.errMess) {
            return (<Text>{this.props.errMess}</Text>);
        } else {
            return (
                <FlatList data={this.props.dishes.dishes} renderItem={({ item, index }) => this.renderMenuItem(item, index)}
                    keyExtractor={item => item.id.toString()} />
            );
        }
    }
    renderMenuItem(item, index) {
        const { navigate } = this.props.navigation;
        return (
            <ListItem key={index} onPress={() => navigate('Dishdetail', { dishId: item.id })}>
                <Avatar source={{uri: baseUrl + item.image}} />
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>
        );
    };
}
export default connect(mapStateToProps)(Menu);

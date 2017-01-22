/**
 * Created by marno on 2017/1/19
 * Function:视频详情页面
 * Desc:
 */
import React, {Component} from 'react';
import {Text} from 'react-native';
import {
    Container, Header, Title, Content, Button, Icon
} from "native-base";
import JsonUtil from '../utils/JsonUtil';

export default class VideoDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <Container>
                <Header>

                    <Button transparent>
                        <Icon name='ios-arrow-back'/>
                    </Button>

                    <Title>Beauty</Title>

                    <Button transparent>
                        <Icon name='ios-menu'/>
                    </Button>
                </Header>

                <Content>
                    <Text>{JsonUtil.jsonToString(this.props.rowData)}</Text>
                </Content>
            </Container>
        )
    }
}
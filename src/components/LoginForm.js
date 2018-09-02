import React, { Component } from 'react';
simport { Card, CardSection, Button, Input } from './common';

class LoginForm extends Component {

    state = { text: '' }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input 
                        value={this.state.text}
                        style={{ width: 100, height: 20 }}
                        onChangeText={text => this.setState({ text })}
                    />
                </CardSection>  

                <CardSection />

                <CardSection>
                    <Button>
                        Log in
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

export default LoginForm;
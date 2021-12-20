import React from 'react';
import { Appbar, Menu } from 'react-native-paper';

export function CustomeNavigationBar({ navigation, back }) {
    const [menuvisible, setMenuisible] = React.useState(false);
    const openMenu = () => setMenuisible(true);
    const closeMenu = () => setMenuisible(false);
    return (
        <Appbar.Header>
            { back ? <Appbar.BackAction onPress={()=>{navigation.goBack()}}/> : null }
            <Appbar.Content title="CrackBrain" />
            <Menu
                anchor={
                    <Appbar.Action icon="menu" color="white" onPress={openMenu} />
                }
                visible={menuvisible}
                onDismiss={closeMenu}>
                <Menu.Item title="Account" />
            </Menu>
        </Appbar.Header>
    );
}
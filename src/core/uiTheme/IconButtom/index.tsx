import React from 'react';
import { Button, Icon, Text } from './style';

interface IIconButton {
  icon: string,
  text?: string,
  active?: boolean,
  iconActive?: string,
  action: () => any,
}

const IconButton = function(props: IIconButton) {
  const { icon, iconActive, active, text, action } = props;

  const handleIcon = () => {
    if (active && iconActive) return iconActive;
    return icon;
  }

  return (
    <Button onClick={action} {...props}>
      <Icon src={handleIcon()} />
      {text && <Text>{text}</Text>}
    </Button>
  )
};

export default IconButton;

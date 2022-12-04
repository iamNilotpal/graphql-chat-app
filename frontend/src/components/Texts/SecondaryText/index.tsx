import { Text, TextProps } from '@chakra-ui/react';
import React, { CSSProperties } from 'react';

type SecondaryTextProps = {
  text: string;
  textProps?: TextProps;
  style?: CSSProperties;
};

const SecondaryText: React.FC<SecondaryTextProps> = ({
  text,
  style,
  textProps,
}) => {
  return (
    <Text
      color="gray.400"
      fontSize="12px"
      fontWeight="medium"
      {...textProps}
      style={style}
    >
      {text}
    </Text>
  );
};

export default SecondaryText;

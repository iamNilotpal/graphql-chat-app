import { Text, TextProps } from '@chakra-ui/react';
import React, { CSSProperties } from 'react';

type PrimaryTextProps = {
  text: string;
  textProps?: TextProps;
  style?: CSSProperties;
};

const PrimaryText: React.FC<PrimaryTextProps> = ({
  text,
  textProps,
  style,
}) => {
  return (
    <Text fontSize="15px" fontWeight="medium" {...textProps} style={style}>
      {text}
    </Text>
  );
};

export default PrimaryText;

import { useState, useCallback } from 'react';
import { View, StyleSheet, Text, TouchableWithoutFeedback, Animated } from 'react-native';

export default function CollapsibleView({ title, children }) {
  const [collapsed, setCollapsed] = useState(true);
  const [animation] = useState(new Animated.Value(0));

  const toggleCollapse = () => {
    if (collapsed) {
      Animated.timing(animation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true
      }).start();
    } else {
      Animated.timing(animation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true
      }).start();
    }
    setCollapsed(!collapsed);
  };

  const heightInterpolate = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 200]
  });

  return (
    <View>
      <TouchableWithoutFeedback onPress={toggleCollapse}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{title}</Text>
        </View>
      </TouchableWithoutFeedback>
      <Animated.View style={{ height: heightInterpolate }}>
        {children}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
      paddingVertical: 12,
      paddingHorizontal: 20,
      backgroundColor: '#ecf0f1',
      borderBottomWidth: 1,
      borderBottomStyle: 'solid',
      borderBottomColor: '#ddd',
    },
    headerTitle: {
      color: '#666',
    },
  });
/* eslint-disable react/prop-types */
import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import CS from "./CalendarStrip";

// eslint-disable-next-line react/display-name
const Date = React.memo(({ date, marking, ...rest }) => {
  console.log(JSON.stringify(rest, null, 2));
  return (
    <TouchableOpacity style={styles.date}>
      <View style={styles.dateContainer}>
        <Text style={styles.dateText}>{date?.format("ddd")}</Text>
        <Text style={styles.dateNumber}>{date?.format("D")}</Text>
        <View style={styles.dotContainer}>
          {/* {marking?.dots?.map?.(({ color: c }) => (
            // eslint-disable-next-line react/jsx-key
          ))} */}
          <View style={[styles.dot, { backgroundColor: "blue" }]} />
        </View>
      </View>
    </TouchableOpacity>
  );
});

export default function CalendarStrip({ ...rest }) {
  return (
    <View style={{ paddingTop: 200 }}>
      <CS
        // calendarHeaderContainerStyle={styles.headerContainer}
        iconLeft={null}
        iconRight={null}
        style={{ width: "100%", height: 120 }}
        dayComponent={Date}
        maxDayComponentSize={200}
        scrollable
        anotherProp
        {...rest}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: { fontSize: 18 },
  dateName: {
    fontSize: 12,
    textTransform: "capitalize",
  },
  markedDates: {
    color: "blue",
  },
  dateContainer: {
    alignItems: "center",
    overflow: "visible",
  },
  date: { overflow: "visible" },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 6,
    marginHorizontal: 2,
  },
  dateText: {
    marginBottom: 14,
    fontSize: 12,
  },
  dateNumber: {
    fontSize: 12,
  },
  dotContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
});

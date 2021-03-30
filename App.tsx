import React, { Fragment, useEffect, useState } from "react";

import BottomNavigation from "./components/navigation/bottom/BottomNavigation";
import HeaderAppbar from "./components/navigation/top/HeaderAppbar";
import CovidData from "./data/covid.json";

const App = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(CovidData as any);
    setLoading(false);
  }, []);

  return (
    <Fragment>
      <HeaderAppbar />
      {/* <View style={{ flex: 10, padding: 24 }}>
          {isLoading ? (
            <Text>Is loading...</Text>
          ) : (
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: "black",
                  textAlign: "center",
                  paddingBottom: 10,
                }}
              >
                Covid statistics:
              </Text>
              <FlatList
                data={data.response}
                keyExtractor={({ id }, index) => id}
                renderItem={({ item }) => (
                  <Text>
                    {"Country : " +
                      item.country +
                      ". Population: " +
                      new Number(item.population).toLocaleString()}
                  </Text>
                )}
              />
            </View>
          )}
        </View> */}
      <BottomNavigation />
    </Fragment>
  );
};

export default App;

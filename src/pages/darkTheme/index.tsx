import { Button, Card, ConfigProvider, theme } from "antd";
import React, { useState } from "react";
const { darkAlgorithm, defaultAlgorithm } = theme;
function DarkTheme(props) {
  const [isDark, setIsDark] = useState(false);
  const handleClick = () => {
    setIsDark(!isDark);
  };
  return (
    <ConfigProvider
      theme={{ algorithm: isDark ? darkAlgorithm : defaultAlgorithm }}
    >
      <Card style={{ width: "max-content" }}>
        <Button onClick={handleClick}>切换</Button>
      </Card>
    </ConfigProvider>
  );
}

export default DarkTheme;

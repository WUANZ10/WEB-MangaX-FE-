import React from "react";
import { Spin } from "antd";

export default function LoadingComponent({ children, isLoading, delay = 200 }) {
  return (
    <div>
      <Spin spinning={isLoading} delay={delay}>
        {children}
      </Spin>
    </div>
  );
}

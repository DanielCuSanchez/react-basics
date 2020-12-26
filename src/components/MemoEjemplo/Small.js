import React, { memo } from "react";

export const Small = memo(({ counter }) => {
  console.log("Small se renderizo :(");
  return <small className="text-muted display-2">{counter}</small>;
});

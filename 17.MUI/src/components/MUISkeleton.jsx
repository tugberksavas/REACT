import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Lamborghini from "../images/Lamborghini.jpg";

function MUISkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, []);

  return (
    <div>
      {loading ? (
        <Skeleton
          variant="rounded"
          width={250}
          height={150}
          animation="pulse"
        ></Skeleton>
      ) : (
        <img src={Lamborghini} width={250} height={150} alt="" />
      )}
    </div>
  );
}

export default MUISkeleton;

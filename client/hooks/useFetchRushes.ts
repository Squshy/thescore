// import { useEffect, useState } from "react";
// import { RushesResult } from "../types";

// export const useFetchRushes = (link: string) => {
//   const [loading, setLoading] = useState(false);
//   const [rushes, setRushes] = useState<RushesResult>({
//     results: [],
//     prev: null,
//     next: null,
//   });
//   useEffect(() => {
//     setLoading(false);
//     fetch(link)
//       .then((res) => res.json())
//       .then((ret) => {
//         setRushes(ret);
//       });
//   }, [setLoading, setRushes, link]);
//   return {
//     rushes: rushes,
//     setRushes: setRushes,
//     loading: loading,
//     setLoading: setLoading,
//   };
// };

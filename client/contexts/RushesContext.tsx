// import React, { useContext, useMemo } from "react";
// import { GET_ALL_RUSHES } from "../constants";
// import { useFetchRushes } from "../hooks/useFetchRushes";
// import { RushesResult } from "../types";

// const RushesContext = React.createContext<RushesResult>({
//   results: [],
//   prev: null,
//   next: null,
//   limit: number
// });
// const RushesLoadingContext = React.createContext<boolean>(false);
// const RushesUpdateContext = React.createContext<Function>(() => {});

// export const useRushes = () => {
//   return useContext(RushesContext);
// };

// export const useRushesLoading = () => {
//   return useContext(RushesLoadingContext);
// };

// export const useRushesUpdate = () => {
//   return useContext(RushesUpdateContext);
// };

// export const RushesProvider: React.FC = ({ children }) => {
//   console.log("ROUTE:", GET_ALL_RUSHES);
//   const { rushes, setRushes, loading, setLoading } = useFetchRushes(
//     GET_ALL_RUSHES + "?page=1&limit=9"
//   );
//   const providerValue = useMemo(
//     () => ({ rushes: rushes, setRushes: rushes, loading: loading }),
//     [rushes, rushes, loading]
//   );

//   const updateRushes = (_rushes: RushesResult) => {
//     setRushes(_rushes);
//   };

//   return (
//     <RushesContext.Provider value={providerValue.rushes}>
//       <RushesLoadingContext.Provider value={providerValue.loading}>
//         <RushesUpdateContext.Provider value={updateRushes}>
//           {children}
//         </RushesUpdateContext.Provider>
//       </RushesLoadingContext.Provider>
//     </RushesContext.Provider>
//   );
// };

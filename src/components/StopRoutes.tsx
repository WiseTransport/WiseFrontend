// export const StopRoutes = () => {
//   const { isPending, isError, data, error } = useQuery(getStopsByBbox())
//
//   if (isPending) {
//     return <span>Loading...</span>
//   }
//
//   if (isError) {
//     return <span>Error: {error.message}</span>
//   }
//
//   // We can assume by this point that `isSuccess === true`
//   return (
//     <ul>
//       {data.map((todo) => (
//         <li key={todo.id}>{todo.title}</li>
//       ))}
//     </ul>
//   )
// }
